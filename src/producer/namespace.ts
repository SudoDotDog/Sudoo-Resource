/**
 * @author WMXPY
 * @namespace Resource_Producer
 * @description Namespace
 */

import { ResourceCategory } from "../category/category";
import { RESOURCE_NAMESPACE_SEPARATOR, RESOURCE_SUBSET_SEPARATOR } from "../common/declare";
import { ResourceNamespace } from "../namespace/namespace";
import { IResourceSubset } from "../subset/declare";

export class ResourceCategoryProducer {

    public static fromNamespaceAndCategory(namespace: ResourceNamespace, category: ResourceCategory): ResourceCategoryProducer {

        return new ResourceCategoryProducer(namespace.namespace, category);
    }

    public static fromNamespaceNameAndCategory(namespace: string, category: ResourceCategory): ResourceCategoryProducer {

        return new ResourceCategoryProducer(namespace, category);
    }

    private readonly _namespace: string;
    private readonly _category: ResourceCategory;

    private constructor(namespace: string, category: ResourceCategory) {

        this._namespace = namespace;
        this._category = category;
    }

    public produceByRecord(record: Record<string, string>): string {

        const subsets: IResourceSubset[] = this._category.subsets;
        const resultList: string[] = [
            this._category.categoryName,
        ];

        for (const subset of subsets) {
            if (typeof record[subset.subsetName] !== 'undefined') {
                resultList.push(record[subset.subsetName]);
            }
        }

        return `${this._namespace}${RESOURCE_NAMESPACE_SEPARATOR}${resultList.join(RESOURCE_SUBSET_SEPARATOR)}`;
    }
}
