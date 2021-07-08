/**
 * @author WMXPY
 * @namespace Resource
 * @description Namespace
 */

import { ResourceCategory } from "./category";

export class ResourceNamespace {

    public static create(namespace: string): ResourceNamespace {

        return new ResourceNamespace(namespace);
    }

    protected readonly _namespace: string;
    protected readonly _categories: ResourceCategory[];

    private constructor(namespace: string) {

        this._namespace = namespace;
        this._categories = [];
    }

    public category(category: ResourceCategory): this {

        this._categories.push(category);
        return this;
    }
}
