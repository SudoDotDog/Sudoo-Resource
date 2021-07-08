/**
 * @author WMXPY
 * @namespace Resource_Subset
 * @description Subset
 */

import { RESOURCE_SUBSET_TYPE } from "./declare";

export abstract class ResourceSubset {

    public static fixed(fixedSubset: string): ResourceSubset {

        return new ResourceSubset(RESOURCE_SUBSET_TYPE.FIXED);
    }

    private readonly _type: RESOURCE_SUBSET_TYPE;

    private constructor(type: RESOURCE_SUBSET_TYPE) {

        this._type = type;
    }
}
