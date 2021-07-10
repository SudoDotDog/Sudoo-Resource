/**
 * @author WMXPY
 * @namespace Category
 * @description Declare
 */

import { IResourceSubset } from "../subset/declare";

export type CategoryProcessMatchedResult = {

    readonly matched: true;

    readonly values: Record<string, string>;
    readonly valueMap: Map<IResourceSubset, string>;
};
export type CategoryProcessUnmatchedResult = {
    readonly matched: false;
};

export type CategoryProcessResult =
    CategoryProcessMatchedResult
    | CategoryProcessUnmatchedResult;
