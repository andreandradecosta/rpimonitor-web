import historyRange from './HistoryRange';
import deepFreeze from 'deep-freeze';

describe('HistoryRange reducer', () => {

    it('returns a new state', () => {
        var state = {};
        var action = {
            type: 'CHANGE_RANGE',
            date: 'start',
            value: '2015-10-28',
        };
        deepFreeze(state);
        deepFreeze(action);

        state = historyRange(state, action)
        expect(state).toEqual({
            start: '2015-10-28',
        });

        action = deepFreeze({
            type: 'CHANGE_RANGE',
            date: 'end',
            value: '2016-10-28',
        });
        state = historyRange(state, action)
        expect(state).toEqual({
            start: '2015-10-28',
            end: '2016-10-28',
        })

    });

});
