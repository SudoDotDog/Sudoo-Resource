/**
 * @author WMXPY
 * @namespace Resource_Subset
 * @description Identifier
 */

import { ResourceBaseSubset } from "./base";
import { IResourceSubset, RESOURCE_SUBSET_TYPE, SubsetProcessResult } from "./declare";

export class ResourceIdentifierSubset extends ResourceBaseSubset implements IResourceSubset {

    public static create(): ResourceIdentifierSubset {

        return new ResourceIdentifierSubset();
    }

    private constructor() {

        super(RESOURCE_SUBSET_TYPE.IDENTIFIER);
    }

    public match(_target: string): boolean {

        return true;
    }

    public process(target: string): SubsetProcessResult {

        const matched: boolean = this.match(target);

        if (!matched) {
            return { matched: false };
        }

        return {

            matched: true,
            value: target,
        };
    }

    public toString(): string {

        return `[Identifier]`;
    }
}
