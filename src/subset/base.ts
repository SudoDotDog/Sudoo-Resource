/**
 * @author WMXPY
 * @namespace Resource_Subset
 * @description Base
 */

import { IResourceSubset, RESOURCE_SUBSET_TYPE } from "./declare";

export abstract class ResourceBaseSubset implements IResourceSubset {

    public readonly type: RESOURCE_SUBSET_TYPE;

    protected constructor(type: RESOURCE_SUBSET_TYPE) {

        this.type = type;
    }
}
