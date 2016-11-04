import { resumeItems } from '../utils';

describe('utils', () => {

    it('resumeItens', () => {
        const objectArray =[
            {'attr': 'v1', 'otherAttr': 123},
            {'attr': 'v1', 'otherAttr': 123},
            {'attr': 'v3', 'otherAttr': 123},
            {'attr': 'v1', 'otherAttr': 123},
            {'attr': 'v2', 'otherAttr': 123},
            {'attr': 'v2', 'otherAttr': 123},
            {'attr': 'v3', 'otherAttr': 123},
            {'attr': 'v4', 'otherAttr': 123},
        ]
        expect(resumeItems(objectArray, 'attr')).toEqual([
            {'value': 'v1', count: 3},
            {'value': 'v3', count: 2},
            {'value': 'v2', count: 2},
            {'value': 'v4', count: 1}
        ]);
    });
});
