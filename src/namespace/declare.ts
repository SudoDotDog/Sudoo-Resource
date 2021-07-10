/**
 * @author WMXPY
 * @namespace Namespace
 * @description Declare
 */

import { ResourceCategory } from "../category/category";
import { IResourceSubset } from "../subset/declare";

export type NamespaceProcessResult = {

    readonly matched: true;
    readonly category: ResourceCategory;

    readonly values: Record<string, string>;
    readonly valueMap: Map<IResourceSubset, string>;
} | {

    readonly matched: false;
};
