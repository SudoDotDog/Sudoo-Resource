/**
 * @author WMXPY
 * @namespace Resource_Subset
 * @description Identifier
 */

import { ResourceBaseSubset } from "./base";
import { IResourceSubset, RESOURCE_SUBSET_TYPE } from "./declare";

export class ResourceIdentifierSubset extends ResourceBaseSubset implements IResourceSubset {

    public static create(): ResourceIdentifierSubset {

        return new ResourceIdentifierSubset();
    }

    private constructor() {

        super(RESOURCE_SUBSET_TYPE.IDENTIFIER);
    }

    public toString(): string {

        return `[Identifier]`;
    }

    public match(_target: string): boolean {

        return true;
    }
}
