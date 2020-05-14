import * as AppConstants from '../constants/app'

export function setIsMobile(isMobile: boolean) {
    return { type: AppConstants.SET_IS_MOBILE, isMobile };
}