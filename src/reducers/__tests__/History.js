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
                    "active": 5937995777,
                    "total": 16430116864,
                }
            }
        },
        {
            "localTime": "2016-10-11T14:44:03.844-03:00",
            "timestamp": 1476207783,
            "metrics": {
                "swapMemory": {
                    "total": 16775114752,
                    "used": 0,
                    "usedpercent": 0
                },
                "temperature": "-",
                "virtualMemory": {
                    "active": 5937995778,
                }
            }
        }
    ];

    const state = {
        history: {
            result
        }
    }

    it('selects variables from result', () => {
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
        const emptyState = {
            history: {
                result: []
            }
        };
        expect(history.getVariables(emptyState)).toEqual([]);
    });

    it('returns a timeseries for one key', () => {
        expect(history.getTimeSeries(state, 'daysUptime', undefined)).toEqual([
            [
                1476207903000,
                4
            ],
            [
                1476207843000,
                undefined

            ],
            [
                1476207783000,
                undefined
            ]
        ])
    });

    it('returns a timeseries for two keys', () => {
        expect(history.getTimeSeries(state, 'virtualMemory', 'active')).toEqual([
            [
                1476207903000,
                5937995776
            ],
            [
                1476207843000,
                5937995777

            ],
            [
                1476207783000,
                5937995778
            ]
        ])
    });

});
