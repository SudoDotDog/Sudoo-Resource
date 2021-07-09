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

    public toString(): string {

        throw new Error(`[Sudoo-Resource] ${this.constructor.name}::toString is abstract`);
    }
}
