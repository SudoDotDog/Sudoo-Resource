/**
 * @author WMXPY
 * @namespace Subset
 * @description Fixed
 */

import { ResourceBaseSubset } from "./base";
import { IResourceSubset, RESOURCE_SUBSET_TYPE, SubsetProcessResult } from "./declare";

export class ResourceEnumSubset extends ResourceBaseSubset implements IResourceSubset {

    public static create(subsetName: string, options: string[]): ResourceEnumSubset {

        return new ResourceEnumSubset(subsetName, options);
    }

    private readonly _options: string[];

    private constructor(subsetName: string, options: string[]) {

        super(subsetName, RESOURCE_SUBSET_TYPE.ENUM);

        this._options = options;
    }

    public match(target: string): boolean {

        return this._options.includes(target);
    }

    public process(target: string): SubsetProcessResult {

        const matched: boolean = this.match(target);

        if (!matched) {
            return {
                matched: false,
            };
        }

        return {

            matched: true,
            value: target,
        };
    }

    public toString(): string {

        return this._options[0];
    }
}
