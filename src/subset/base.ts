/**
 * @author WMXPY
 * @namespace Resource_Subset
 * @description Base
 */

import { IResourceSubset, RESOURCE_SUBSET_TYPE, SubsetProcessResult } from "./declare";

export abstract class ResourceBaseSubset implements IResourceSubset {

    public readonly type: RESOURCE_SUBSET_TYPE;

    protected constructor(type: RESOURCE_SUBSET_TYPE) {

        this.type = type;
    }

    public match(_target: string): boolean {

        throw new Error(`[Sudoo-Resource] ${this.constructor.name}::match is abstract`);
    }

    public process(_target: string): SubsetProcessResult {

        throw new Error(`[Sudoo-Resource] ${this.constructor.name}::process is abstract`);
    }

    public toString(): string {

        throw new Error(`[Sudoo-Resource] ${this.constructor.name}::toString is abstract`);
    }
}
