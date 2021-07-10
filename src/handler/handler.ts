/**
 * @author WMXPY
 * @namespace Handler
 * @description Handler
 */

import { ResourceCategory } from "../category/category";
import { NamespaceProcessResult } from "../namespace/declare";
import { ResourceNamespace } from "../namespace/namespace";

export class ResourceHandler {

    public static fromNamespace(namespace: ResourceNamespace): ResourceHandler {

        return new ResourceHandler(namespace);
    }

    private readonly _namespace: ResourceNamespace;
    private readonly _categoryMap: Map<ResourceCategory, any>;

    private constructor(namespace: ResourceNamespace) {

        this._namespace = namespace;
        this._categoryMap = new Map();
    }

    public onCategory(category: ResourceCategory): this {

        this._categoryMap.set(category, {});
        return this;
    }

    public handleResource(elements: string[]): boolean {

        const processResult: NamespaceProcessResult = this._namespace.process(elements);
        return processResult.matched;
    }
}
