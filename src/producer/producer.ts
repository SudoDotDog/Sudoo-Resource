/**
 * @author WMXPY
 * @namespace Producer
 * @description Producer
 */

import { ResourceCategory } from "../category/category";
import { RESOURCE_SUBSET_SEPARATOR } from "../common/declare";
import { IResourceSubset } from "../subset/declare";

export class ResourceProducer {

    public static fromCategory(category: ResourceCategory): ResourceProducer {

        return new ResourceProducer(category);
    }

    private readonly _category: ResourceCategory;

    private constructor(category: ResourceCategory) {

        this._category = category;
    }

    public produceByRecord(record: Record<string, string>): string {

        const subsets: IResourceSubset[] = this._category.subsets;
        const resultList: string[] = [];

        for (const subset of subsets) {
            if (typeof record[subset.subsetName] !== 'undefined') {
                resultList.push(record[subset.subsetName]);
            }
        }
        return resultList.join(RESOURCE_SUBSET_SEPARATOR);
    }
}
