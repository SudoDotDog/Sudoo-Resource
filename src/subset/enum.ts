/**
 * @author WMXPY
 * @namespace Resource_Subset
 * @description Fixed
 */

import { ResourceBaseSubset } from "./base";
import { IResourceSubset, RESOURCE_SUBSET_TYPE } from "./declare";

export class ResourceEnumSubset extends ResourceBaseSubset implements IResourceSubset {

    public static create(options: string[]): ResourceEnumSubset {

        return new ResourceEnumSubset(options);
    }

    private readonly _options: string[];

    private constructor(options: string[]) {

        super(RESOURCE_SUBSET_TYPE.FIXED);

        this._options = options;
    }

    public toString(): string {

        return this._options[0];
    }

    public match(target: string): boolean {

        return this._options.includes(target);
    }
}
