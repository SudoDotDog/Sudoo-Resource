/**
 * @author WMXPY
 * @namespace Handler
 * @description Handler
 */

import { ResourceCategory } from "../category/category";
import { NamespaceProcessResult } from "../namespace/declare";
import { ResourceNamespace } from "../namespace/namespace";
import { ResourceHandlingAction } from "./declare";

export class ResourceHandler {

    public static fromNamespace(namespace: ResourceNamespace): ResourceHandler {

        return new ResourceHandler(namespace);
    }

    private readonly _namespace: ResourceNamespace;
    private readonly _categoryMap: Map<ResourceCategory, Set<ResourceHandlingAction>>;

    private constructor(namespace: ResourceNamespace) {

        this._namespace = namespace;
        this._categoryMap = new Map();
    }

    public addAction(category: ResourceCategory, action: ResourceHandlingAction): this {

        if (this._categoryMap.has(category)) {

            const existCategory: Set<ResourceHandlingAction> = this._categoryMap.get(category) as Set<ResourceHandlingAction>;
            existCategory.add(action);

            return this;
        }

        this._categoryMap.set(category, new Set([action]));
        return this;
    }

    public removeAction(category: ResourceCategory, action: ResourceHandlingAction): this {

        if (!this._categoryMap.has(category)) {
            return this;
        }

        const existCategory: Set<ResourceHandlingAction> = this._categoryMap.get(category) as Set<ResourceHandlingAction>;
        existCategory.delete(action);
        return this;
    }

    public removeCategory(category: ResourceCategory): this {

        this._categoryMap.delete(category);
        return this;
    }

    public async handleResource(elements: string[]): Promise<boolean> {

        const processResult: NamespaceProcessResult = this._namespace.process(elements);

        if (!processResult.matched) {
            return false;
        }
        if (!this._categoryMap.has(processResult.category)) {
            return false;
        }

        const handlingActions: Set<ResourceHandlingAction> = this._categoryMap.get(processResult.category) as Set<ResourceHandlingAction>;

        for (const action of handlingActions) {

            const handlingResult: boolean | void = await action(processResult);
            if (typeof handlingResult === 'boolean' && !handlingResult) {
                return false;
            }
        }
        return true;
    }
}
