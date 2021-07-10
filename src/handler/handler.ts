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
    private readonly _categoryMap: Map<ResourceCategory, ResourceHandlingAction>;

    private constructor(namespace: ResourceNamespace) {

        this._namespace = namespace;
        this._categoryMap = new Map();
    }

    public onCategory(category: ResourceCategory, action: ResourceHandlingAction): this {

        this._categoryMap.set(category, action);
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

        const handlingAction: ResourceHandlingAction | undefined = this._categoryMap.get(processResult.category);

        if (!handlingAction) {
            return false;
        }

        const handlingResult: boolean | void = await handlingAction(processResult);

        if (typeof handlingResult === 'boolean' && !handlingResult) {
            return false;
        }
        return true;
    }
}
