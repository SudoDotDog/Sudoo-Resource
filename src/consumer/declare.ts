/**
 * @author WMXPY
 * @namespace Consumer
 * @description Declare
 */

import { IResourceSubset } from "../subset/declare";

export type ResourceDetail = {

    readonly values: Record<string, string>;
    readonly valueMap: Map<IResourceSubset, string>;
};

export type ResourceHandlingAction = (detail: ResourceDetail) => Promise<void | boolean> | void | boolean;
