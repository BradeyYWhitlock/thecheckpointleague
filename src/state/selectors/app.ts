import { ReduxState } from '../index'

export const getIsMobile = (state: ReduxState): boolean => {
    return state.app.isMobile;
};

export const getSeason = (state: ReduxState): number => {
    return state.app.season;
};