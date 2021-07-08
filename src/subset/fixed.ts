/**
 * @author WMXPY
 * @namespace Resource_Subset
 * @description Fixed
 */

import { RESOURCE_SUBSET_TYPE } from "./declare";

export abstract class ResourceFixedSubset extends ResourceSubset {

    public static fixed(fixedSubset: string): ResourceFixedSubset {

        return new ResourceFixedSubset(RESOURCE_SUBSET_TYPE.FIXED);
    }

    private readonly _type: RESOURCE_SUBSET_TYPE;

    private constructor(type: RESOURCE_SUBSET_TYPE) {

        this._type = type;
    }
}
