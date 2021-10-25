/**
 * @author WMXPY
 * @namespace Resource_Producer
 * @description Category
 */

import { ResourceCategory } from "../category/category";
import { RESOURCE_NAMESPACE_SEPARATOR, RESOURCE_SUBSET_SEPARATOR } from "../common/declare";
import { ResourceNamespace } from "../namespace/namespace";
import { IResourceSubset } from "../subset/declare";

export class ResourceCategoryProducer {

    public static fromNamespaceAndCategory(namespace: ResourceNamespace, category: ResourceCategory): ResourceCategoryProducer {

        return new ResourceCategoryProducer(namespace.namespace, category);
    }

    public static fromNamespaceNameAndCategory(namespaceName: string, category: ResourceCategory): ResourceCategoryProducer {

        return new ResourceCategoryProducer(namespaceName, category);
    }

    private readonly _namespaceName: string;
    private readonly _category: ResourceCategory;

    private constructor(namespaceName: string, category: ResourceCategory) {

        this._namespaceName = namespaceName;
        this._category = category;
    }

    public get category(): ResourceCategory {
        return this._category;
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

        return [
            this._namespaceName,
            RESOURCE_NAMESPACE_SEPARATOR,
            resultList.join(RESOURCE_SUBSET_SEPARATOR),
        ].join('');
    }
}
