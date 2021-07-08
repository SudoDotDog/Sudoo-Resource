/**
 * @author WMXPY
 * @namespace Resource
 * @description Namespace
 */

import { hashResourceCategory } from "./util";

export class ResourceNamespace {

    public static create(namespace: string): ResourceNamespace {

        return new ResourceNamespace(namespace);
    }

    protected readonly _namespace: string;
    protected readonly _categories: string[];

    private constructor(namespace: string) {

        this._namespace = namespace;
        this._categories = [];
    }

    public category(category: string[] | string): this {

        this._categories.push(hashResourceCategory(category));
        return this;
    }
}
