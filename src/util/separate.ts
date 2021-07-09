/**
 * @author WMXPY
 * @namespace Resource_Util
 * @description Separate
 */

import { RESOURCE_CATEGORY_SEPARATOR } from "../declare";

export const separateResourceString = (resource: string): string[] => {

    return resource.split(RESOURCE_CATEGORY_SEPARATOR);
};
