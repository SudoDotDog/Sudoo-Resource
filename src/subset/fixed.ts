/**
 * @author WMXPY
 * @namespace Resource_Subset
 * @description Fixed
 */

import { ResourceBaseSubset } from "./base";
import { IResourceSubset, RESOURCE_SUBSET_TYPE } from "./declare";

export class ResourceFixedSubset extends ResourceBaseSubset implements IResourceSubset {

    public static create(fixedSubset: string): ResourceFixedSubset {

        return new ResourceFixedSubset(fixedSubset);
    }

    private readonly _fixedSubset: string;

    private constructor(fixedSubset: string) {

        super(RESOURCE_SUBSET_TYPE.FIXED);

        this._fixedSubset = fixedSubset;
    }

    public toString(): string {
        return this._fixedSubset;
    }
}
