/**
 * @author WMXPY
 * @namespace Util
 * @description Separate
 */

import { RESOURCE_CATEGORY_SEPARATOR } from "../common/declare";

export const separateResourceString = (resource: string): string[] => {

    return resource.split(RESOURCE_CATEGORY_SEPARATOR);
};

export const buildResourceString = (...resources: string[]): string => {

    return resources.join(RESOURCE_CATEGORY_SEPARATOR);
};
