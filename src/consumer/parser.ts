/**
 * @author WMXPY
 * @namespace Consumer
 * @description Parser
 */

import { ResourceCategory } from "../category/category";
import { NamespaceProcessResult } from "../namespace/declare";
import { ResourceNamespace } from "../namespace/namespace";
import { separateResourceString } from "../util/separate";
import { ResourceParsingFunction } from "./declare";

export class ResourceParser<T> {

    public static fromNamespace<T>(namespace: ResourceNamespace, defaultValue?: T): ResourceParser<T> {

        return new ResourceParser<T>(namespace, defaultValue);
    }

    private readonly _namespace: ResourceNamespace;
    private readonly _categoryMap: Map<ResourceCategory, ResourceParsingFunction<T>>;

    private readonly _defaultValue?: T;

    private constructor(namespace: ResourceNamespace, defaultValue?: T) {

        this._namespace = namespace;
        this._categoryMap = new Map();

        this._defaultValue = defaultValue;
    }

    public setParser(category: ResourceCategory, parser: ResourceParsingFunction<T>): this {

        this._categoryMap.set(category, parser);
        return this;
    }

    public removeCategory(category: ResourceCategory): this {

        this._categoryMap.delete(category);
        return this;
    }

    public parseResource(elements: string[]): T | undefined {

        const processResult: NamespaceProcessResult = this._namespace.process(elements);

        if (!processResult.matched) {
            return this._defaultValue;
        }
        if (!this._categoryMap.has(processResult.category)) {
            return this._defaultValue;
        }

        const parser: ResourceParsingFunction<T> = this._categoryMap.get(processResult.category) as ResourceParsingFunction<T>;
        return parser(processResult);
    }

    public parseResourceString(resourceString: string): T | undefined {

        const resourceList: string[] = separateResourceString(resourceString);
        return this.parseResource(resourceList);
    }

    public ensureParseResource(elements: string[]): T {

        const processResult: NamespaceProcessResult = this._namespace.process(elements);

        if (!processResult.matched
            || !this._categoryMap.has(processResult.category)) {

            if (typeof this._defaultValue === 'undefined') {
                throw new Error(`Can't find resource: ${elements.join(":")}, no default result found`);
            }
            return this._defaultValue;
        }

        const parser: ResourceParsingFunction<T> = this._categoryMap.get(processResult.category) as ResourceParsingFunction<T>;
        return parser(processResult);
    }

    public ensureParseResourceString(resourceString: string): T {

        const resourceList: string[] = separateResourceString(resourceString);
        return this.ensureParseResource(resourceList);
    }
}
