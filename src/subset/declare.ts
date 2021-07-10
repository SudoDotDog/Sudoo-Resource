/**
 * @author WMXPY
 * @namespace Resource_Subset
 * @description Declare
 */

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

    type: RESOURCE_SUBSET_TYPE;

    match(target: string): boolean;
    process: (target: string) => SubsetProcessResult;

    toString(): string;
}
