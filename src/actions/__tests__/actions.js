import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../';
import * as mockApi from '../../helpers/api';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
jest.mock('../../helpers/api');

describe('actions', () => {

    it('creates LOGIN_SUCCESS when fetching', () => {

        const store = mockStore({});
        mockApi.login = (username, password) => new Promise((resolve, reject) =>
            resolve({token: 'token_value'})
        );
        const expectedActions = [
            {
                type: 'LOGIN_REQUEST'
            },
            {
                type: 'LOGIN_SUCCESS',
                token: 'token_value'
            }
        ];
        return store.dispatch(actions.login('username', 'password'))
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
    });

    it('creates LOGIN_FAILURE when api returns error', () => {

        const store = mockStore({});
        mockApi.login = (username, password) => new Promise((resolve, reject) =>
            reject(Error('login error'))
        );
        const expectedActions = [
            {
                type: 'LOGIN_REQUEST'
            },
            {
                type: 'LOGIN_FAILURE',
                errorMessage: 'login error'
            }
        ];
        return store.dispatch(actions.login('username', 'password'))
            .catch(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
    });

    it('creates FETCH_INFO_SUCCESS when fetching', () => {

        const store = mockStore({
            auth: {
                token: 'token'
            }
        });
        const expectedData = {data: 'values'};
        mockApi.getInfo = (resource, token) => new Promise((resolve, reject) =>
            resolve(expectedData)
        );
        const expectedActions = [
            {
                type: 'FETCH_INFO_REQUEST',
                resource: 'resource'
            },
            {
                type: 'FETCH_INFO_SUCCESS',
                resource: 'resource',
                result: expectedData
            }
        ];
        return store.dispatch(actions.fetchInfo('resource'))
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
    });

    it('creates FETCH_INFO_FAILURE when api returns error', () => {

        const store = mockStore({
            auth: {
                token: 'token'
            }
        });
        mockApi.getInfo = (resource, token) => new Promise((resolve, reject) =>
            reject(Error('fetch error'))
        );
        const expectedActions = [
            {
                type: 'FETCH_INFO_REQUEST',
                resource: 'resource'
            },
            {
                type: 'FETCH_INFO_FAILURE',
                errorMessage: 'fetch error'
            }
        ];
        return store.dispatch(actions.fetchInfo('resource'))
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
    });
    it('creates FETCH_HISTORY_SUCCESS when fetching', () => {

        const store = mockStore({
            auth: {
                token: 'token'
            }
        });
        const expectedData = {data: 'values'};
        mockApi.getHistory = (start, end, token) => new Promise((resolve, reject) =>
            resolve(expectedData)
        );
        const expectedActions = [
            {
                type: 'FETCH_HISTORY_REQUEST',
                start: '1',
                end: '2'
            },
            {
                type: 'FETCH_HISTORY_SUCCESS',
                result: expectedData
            }
        ];
        return store.dispatch(actions.fetchHistory('1', '2'))
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
    });

    it('creates FETCH_HISTORY_FAILURE when api returns error', () => {

        const store = mockStore({
            auth: {
                token: 'token'
            }
        });
        mockApi.getHistory = (start, end, token) => new Promise((resolve, reject) =>
            reject(Error('fetch error'))
        );
        const expectedActions = [
            {
                type: 'FETCH_HISTORY_REQUEST',
                start: '1',
                end: '2'
            },
            {
                type: 'FETCH_HISTORY_FAILURE',
                errorMessage: 'fetch error'
            }
        ];
        return store.dispatch(actions.fetchHistory('1', '2'))
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
    });

});
