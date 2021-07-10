/**
 * @author WMXPY
 * @namespace Namespace
 * @description Declare
 */

import { ResourceCategory } from "../category/category";
import { CategoryProcessMatchedResult } from "../category/declare";

export type NamespaceProcessMatchResult = {

    readonly category: ResourceCategory;
    readonly categoryName: string;
} & CategoryProcessMatchedResult;
export type NamespaceProcessUnmatchedResult = {
    readonly matched: false;
};

export type NamespaceProcessResult =
    NamespaceProcessMatchResult
    | NamespaceProcessUnmatchedResult;
