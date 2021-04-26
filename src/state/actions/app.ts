import * as AppConstants from '../constants/app'

export function setIsMobile(isMobile: boolean) {
    return { type: AppConstants.SET_IS_MOBILE, isMobile };
}

export function setSeason(season: number) {
    return { type: AppConstants.SET_SEASON, season };
}