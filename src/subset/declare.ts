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

    readonly subsetName: string;
    readonly type: RESOURCE_SUBSET_TYPE;

    isRequired(): boolean;
    setIsRequired(isRequired: boolean): IResourceSubset;
    getDefaultValue(): string;
    setDefaultValue(value: string): IResourceSubset;

    match(target: string): boolean;
    process: (target: string) => SubsetProcessResult;

    toString(): string;
    persistence(): ResourceSubsetPersistence;
}
