/**
 * @author WMXPY
 * @namespace Category
 * @description Declare
 */

import { IResourceSubset } from "../subset/declare";

export type ResourceDetail = {

    readonly values: Record<string, string>;
    readonly valueMap: Map<IResourceSubset, string>;
};

export type CategoryProcessMatchedResult = {

    readonly matched: true;
} & ResourceDetail;
export type CategoryProcessUnmatchedResult = {
    readonly matched: false;
};

export type CategoryProcessResult =
    CategoryProcessMatchedResult
    | CategoryProcessUnmatchedResult;
