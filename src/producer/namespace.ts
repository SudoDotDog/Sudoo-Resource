/**
 * @author WMXPY
 * @namespace Resource_Producer
 * @description Namespace
 */

import { ResourceCategory } from "../category/category";
import { ResourceNamespace } from "../namespace/namespace";
import { ResourceCategoryProducer } from "./category";

export class ResourceNamespaceProducer {

    public static fromNamespace(namespace: ResourceNamespace): ResourceNamespaceProducer {

        return new ResourceNamespaceProducer(namespace);
    }

    private readonly _namespace: ResourceNamespace;

    private constructor(namespace: ResourceNamespace) {

        this._namespace = namespace;
    }

    public get namespace(): ResourceNamespace {
        return this._namespace;
    }

    public getCategoryProducerByCategoryName(categoryName: string): ResourceCategoryProducer | null {

        const category: ResourceCategory | null = this._namespace.getCategoryByName(categoryName);

        if (category === null) {
            return null;
        }
        return ResourceCategoryProducer.fromNamespaceAndCategory(this._namespace, category);
    }

    public ensureCategoryProducerByCategoryName(categoryName: string): ResourceCategoryProducer {

        const categoryProducer: ResourceCategoryProducer | null = this.getCategoryProducerByCategoryName(categoryName);

        if (categoryProducer === null) {
            throw new Error(`[Sudoo-Resource] Category ${categoryName} not found`);
        }
        return categoryProducer;
    }

    public getCategoryProducerByCategory(category: ResourceCategory): ResourceCategoryProducer {

        return ResourceCategoryProducer.fromNamespaceAndCategory(this._namespace, category);
    }
}
