/**
 * @author WMXPY
 * @namespace Handler
 * @description Declare
 */

import { CategoryProcessResult } from "../category/declare";

export type ResourceHandlerAction = (processResult: CategoryProcessResult) => Promise<void> | void;
