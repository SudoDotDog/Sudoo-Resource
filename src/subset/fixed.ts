/**
 * @author WMXPY
 * @namespace Subset
 * @description Fixed
 */

import { ResourceSubsetPersistence } from "../persistence/declare";
import { ResourceBaseSubset } from "./base";
import { IResourceSubset, RESOURCE_SUBSET_TYPE, SubsetProcessResult } from "./declare";

export class ResourceFixedSubset extends ResourceBaseSubset implements IResourceSubset {

    public static create(subsetName: string, fixedSubset: string): ResourceFixedSubset {

        return new ResourceFixedSubset(subsetName, fixedSubset);
    }

    private readonly _fixedSubset: string;

    private constructor(subsetName: string, fixedSubset: string) {

        super(subsetName, RESOURCE_SUBSET_TYPE.FIXED);

        this._fixedSubset = fixedSubset;
    }

    public match(target: string): boolean {

        return target === this._fixedSubset;
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

        return this._fixedSubset;
    }

    public persistence(): ResourceSubsetPersistence {

        return {

            subsetName: this.subsetName,
            type: 'fixed',
            value: this._fixedSubset,
        };
    }
}
