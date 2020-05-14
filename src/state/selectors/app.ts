import { ReduxState } from '../index'

export const getIsMobile = (state: ReduxState): boolean => {
    return state.app.isMobile;
};