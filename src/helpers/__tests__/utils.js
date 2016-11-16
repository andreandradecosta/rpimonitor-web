import { resumeItems, getUserInfo } from '../utils';

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

    it('getUserInfo', () => {
        const validToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ';

        expect(getUserInfo(validToken)).toEqual({
            "sub": "1234567890",
            "name": "John Doe",
            "admin": true
        });

        const invalidToken = '';
        expect(getUserInfo(invalidToken)).toEqual({});
    });
});
