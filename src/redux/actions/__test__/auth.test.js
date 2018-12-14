import {
    login,
    logout,
    fetchUser,
    setUser,
    LOGIN,
    LOGOUT,
    FETCH_USER,
    SET_USER,
} from '../auth';

describe('auth actions', () => {
    it('Should generate login action object correctly', () => {
        const action = login();

        expect(action).toEqual({
            type: LOGIN,
        });
    });

    it('Should generate logout action object correctly', () => {
        const action = logout();

        expect(action).toEqual({
            type: LOGOUT,
        });
    });

    it('Should generate fetchUser action object correctly', () => {
        const action = fetchUser();

        expect(action).toEqual({
            type: FETCH_USER,
            payload: null,
            meta: {},
        });
    });

    it('Should generate setUser action object correctly', () => {
        const user = { uid: 123, displayName: 'displayName' };
        const action = setUser({ user });

        expect(action).toEqual({
            type: SET_USER,
            payload: user,
            meta: {},
        });
    });
});
