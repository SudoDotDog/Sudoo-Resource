/**
 * @author WMXPY
 * @namespace Resource_Subset
 * @description Declare
 */

export enum RESOURCE_SUBSET_TYPE {

    FIXED = "FIXED",
}

export interface IResourceSubset {

    type: RESOURCE_SUBSET_TYPE;
    toString(): string;
    match(target: string): boolean;
}
