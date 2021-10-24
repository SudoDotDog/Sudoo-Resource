/**
 * @author WMXPY
 * @namespace Producer
 * @description Producer
 */

import { ResourceCategory } from "../category/category";

export class ResourceProducer {

    public static fromCategory(category: ResourceCategory): ResourceProducer {

        return new ResourceProducer(category);
    }

    private readonly _category: ResourceCategory;

    private constructor(category: ResourceCategory) {

        this._category = category;
    }
}
