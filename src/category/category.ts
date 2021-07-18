/**
 * @author WMXPY
 * @namespace Category
 * @description Category
 */

import { RESOURCE_CATEGORY_SEPARATOR } from "../common/declare";
import { ResourceCategoryPersistence } from "../persistence/declare";
import { IResourceSubset, SubsetProcessResult } from "../subset/declare";
import { hashMapValues } from "../util/hash";
import { CategoryProcessResult } from "./declare";

export class ResourceCategory {

    public static fromSubsets(categoryName: string, ...subsets: IResourceSubset[]): ResourceCategory {

        return this.fromSubsetList(categoryName, subsets);
    }

    public static fromSubsetList(categoryName: string, subsets: IResourceSubset[]): ResourceCategory {

        return new ResourceCategory(categoryName, subsets);
    }

    private readonly _categoryName: string;
    private readonly _subsets: IResourceSubset[];

    private constructor(categoryName: string, subsets: IResourceSubset[]) {

        this._categoryName = categoryName;
        this._subsets = subsets;
    }

    public get length(): number {
        return this._subsets.length;
    }
    public get categoryName(): string {
        return this._categoryName;
    }

    public match(elements: string[]): boolean {

        const processResult: CategoryProcessResult = this.process(elements);
        return processResult.matched;
    }

    public process(elements: string[]): CategoryProcessResult {

        if (elements.length !== this._subsets.length) {
            return {
                matched: false,
            };
        }

        const resultValueMap: Map<IResourceSubset, string> = new Map();
        for (let i = 0; i < elements.length; i++) {

            const subset: IResourceSubset = this._subsets[i];
            const element: string = elements[i];

            const subsetProcessResult: SubsetProcessResult = subset.process(element);

            if (!subsetProcessResult.matched) {
                return {
                    matched: false,
                };
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

    public persistence(): ResourceCategoryPersistence {

        return {

            categoryName: this._categoryName,
            subsets: this._subsets.map((subset: IResourceSubset) => {
                return subset.persistence();
            }),
        };
    }
}
