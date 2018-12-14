import { SET_LOADER, setLoader } from 'redux/actions/ui';

describe('setLoader', () => {
    it('Should generate setLoader action object correctly with state FALSE', () => {
        const action = setLoader({ state: false, feature: '[Feature]' });

        expect(action).toEqual({
            type: `[Feature] ${SET_LOADER}`,
            payload: false,
            meta: { feature: '[Feature]' },
        });
    });

    it('Should generate setLoader action object correctly with state TRUE', () => {
        const action = setLoader({ state: true, feature: '[Feature]' });

        expect(action).toEqual({
            type: `[Feature] ${SET_LOADER}`,
            payload: true,
            meta: { feature: '[Feature]' },
        });
    });
});
