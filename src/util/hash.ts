/**
 * @author WMXPY
 * @namespace Subset
 * @description Hash
 */

import { IResourceSubset } from "../subset/declare";

export const hashResourceCategory = (category: string[] | string): string => {

    if (typeof category === 'string') {
        return category;
    }
    return category.join(':');
};

export const hashMapValues = (target: Map<IResourceSubset, string>): Record<string, string> => {

    const entries: Array<[IResourceSubset, string]> = [...target.entries()];
    const result: Record<string, string> = {};

    for (const entry of entries) {
        result[entry[0].name] = entry[1];
    }
    return result;
};
