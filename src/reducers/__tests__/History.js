import * as history from '../History';

describe('History Reducers', () => {

    const result = [
        {
            "localTime": "2016-10-11T14:45:03.844-03:00",
            "timestamp": 1476207903,
            "metrics": {
                "daysUptime": 4,
                "load": {
                    "load1": 0.11,
                    "load15": 0.01,
                    "load5": 0.04
                },
                "swapMemory": {
                    "free": 16775114752,
                    "used": 0,
                    "usedpercent": 0
                },
                "temperature": "-",
                "virtualMemory": {
                    "active": 5937995776,
                    "available": 12294135808,
                }
            }
        },
        {
            "localTime": "2016-10-11T14:44:03.844-03:00",
            "timestamp": 1476207843,
            "metrics": {
                "swapMemory": {
                    "used": 0,
                    "usedpercent": 0
                },
                "temperature": "-",
                "virtualMemory": {
                    "total": 16430116864,
                }
            }
        },
        {
            "localTime": "2016-10-11T14:44:03.844-03:00",
            "timestamp": 1476207843,
            "metrics": {
                "swapMemory": {
                    "total": 16775114752,
                    "used": 0,
                    "usedpercent": 0
                },
                "temperature": "-",
                "virtualMemory": {
                    "active": 5896622080,
                }
            }
        }
    ];


    it('selects variables from result', () => {
        const state = {
            history: {
                result
            }
        };
        expect(history.getVariables(state)).toEqual([
            'daysUptime',
            'load.load1',
            'load.load15',
            'load.load5',
            'swapMemory.free',
            'swapMemory.total',
            'swapMemory.used',
            'swapMemory.usedpercent',
            'temperature',
            'virtualMemory.active',
            'virtualMemory.available',
            'virtualMemory.total',
        ]);
    });

    it('returns empty array without result', () => {
        const state = {
            history: {
                result: []
            }
        };
        expect(history.getVariables(state)).toEqual([]);
    });

});
