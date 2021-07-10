/**
 * @author WMXPY
 * @namespace Resource_Util
 * @description Verify
 */

export const verifyResourceSubset = (category: string[]): boolean => {

    for (const element of category) {
        if (element.includes(':')) {
            return false;
        }
    }
    return true;
};
