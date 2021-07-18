/**
 * @author WMXPY
 * @namespace Subset
 * @description Declare
 */

import { ResourceSubsetPersistence } from "../persistence/declare";

export enum RESOURCE_SUBSET_TYPE {

    IDENTIFIER = "IDENTIFIER",
    FIXED = "FIXED",
    ENUM = "ENUM",
}

export type SubsetProcessResult = {

    readonly matched: true;
    readonly value: string;
} | {

    readonly matched: false;
};

export interface IResourceSubset {

    readonly name: string;
    readonly type: RESOURCE_SUBSET_TYPE;

    match(target: string): boolean;
    process: (target: string) => SubsetProcessResult;

    toString(): string;
    persistence(): ResourceSubsetPersistence;
}
