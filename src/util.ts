/**
 * @author WMXPY
 * @namespace Resource
 * @description Util
 */

export const verifyResourceCategoryList = (category: string[]): boolean => {


    for (const element of category) {
        if (element.includes(':')) {
            return false;
        }
    }
    return true;
};

export const hashResourceCategory = (category: string[] | string): string => {

    if (typeof category === 'string') {
        return category;
    }
    return category.join(':');
};
