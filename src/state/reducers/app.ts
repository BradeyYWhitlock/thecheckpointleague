import * as AppConstants from '../constants/app';

export interface AppState {
    isMobile: boolean;
    season: number;
}

export const initialState: AppState = {
    isMobile: window.innerWidth <= 500,
    season: 2
};

export default function app(state = initialState, action) {
    switch (action.type) {
        case AppConstants.SET_IS_MOBILE:
            return Object.assign({}, state, {
                isMobile: action.isMobile,
            });
        case AppConstants.SET_SEASON:
            return Object.assign({}, state, {
                season: action.season,
            });
        default:
            return state;
    }
}