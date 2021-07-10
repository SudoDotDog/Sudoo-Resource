/**
 * @author WMXPY
 * @namespace Resource
 * @description Category
 */

import { CategoryProcessResult } from "./declare";
import { IResourceSubset, SubsetProcessResult } from "../subset/declare";
import { hashMapValues } from "../util/hash";
import { RESOURCE_CATEGORY_SEPARATOR } from "../declare";

export class ResourceCategory {

    public static fromSubsets(...subsets: IResourceSubset[]): ResourceCategory {

        return this.fromSubsetList(subsets);
    }

    public static fromSubsetList(subsets: IResourceSubset[]): ResourceCategory {

        return new ResourceCategory(subsets);
    }

    private readonly _subsets: IResourceSubset[];

    private constructor(subsets: IResourceSubset[]) {

        this._subsets = subsets;
    }

    public get length(): number {
        return this._subsets.length;
    }

    public match(elements: string[]): boolean {

        const processResult: CategoryProcessResult = this.process(elements);
        return processResult.matched;
    }

    public process(elements: string[]): CategoryProcessResult {

        if (elements.length !== this._subsets.length) {
            return { matched: false };
        }

        const resultValueMap: Map<IResourceSubset, string> = new Map();
        for (let i = 0; i < elements.length; i++) {

            const subset: IResourceSubset = this._subsets[i];
            const element: string = elements[i];

            const subsetProcessResult: SubsetProcessResult = subset.process(element);

            if (!subsetProcessResult.matched) {
                return { matched: false };
            }

            resultValueMap.set(subset, subsetProcessResult.value);
        }

        return {
            matched: true,
            valueMap: resultValueMap,
            values: hashMapValues(resultValueMap),
        };
    }

    public hash(): string {

        return this.toString();
    }

    public toString(): string {

        return this._subsets
            .map((subset: IResourceSubset) => subset.toString())
            .join(RESOURCE_CATEGORY_SEPARATOR);
    }
}
