/**
 * @author WMXPY
 * @namespace Resource
 * @description Declare
 */

import { IResourceSubset } from "../subset/declare";

export type CategoryProcessResult = {

    readonly matched: true;

    readonly values: Record<string, string>;
    readonly valueMap: Map<IResourceSubset, string>;
} | {

    readonly matched: false;
};
