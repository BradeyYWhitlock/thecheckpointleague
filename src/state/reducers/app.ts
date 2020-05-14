import * as AppConstants from '../constants/app';

export interface AppState {
    isMobile: boolean,
}

export const initialState: AppState = {
    isMobile: window.innerWidth <= 500
};

export default function app(state = initialState, action) {
    switch (action.type) {
        case AppConstants.SET_IS_MOBILE:
            return Object.assign({}, state, {
                isMobile: action.isMobile,
            });
        default:
            return state;
    }
}