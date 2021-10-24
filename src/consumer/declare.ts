/**
 * @author WMXPY
 * @namespace Resource_Consumer
 * @description Declare
 */

import { IResourceSubset } from "../subset/declare";

export type ResourceDetail = {

    readonly values: Record<string, string>;
    readonly valueMap: Map<IResourceSubset, string>;
};

export type ResourceHandlingAction = (detail: ResourceDetail) => Promise<void | boolean> | void | boolean;

export type ResourceParsingFunction<T> = (detail: ResourceDetail) => T;
export type AsyncResourceParsingFunction<T> = (detail: ResourceDetail) => T | Promise<T>;
