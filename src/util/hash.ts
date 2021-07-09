/**
 * @author WMXPY
 * @namespace Resource_Util
 * @description Hash
 */

export const hashResourceCategory = (category: string[] | string): string => {

    if (typeof category === 'string') {
        return category;
    }
    return category.join(':');
};
