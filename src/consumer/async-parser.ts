/**
 * @author WMXPY
 * @namespace Consumer
 * @description Async Parser
 */

import { ResourceCategory } from "../category/category";
import { NamespaceProcessResult } from "../namespace/declare";
import { ResourceNamespace } from "../namespace/namespace";
import { separateResourceString } from "../util/separate";
import { AsyncResourceParsingFunction } from "./declare";

export class ResourceAsyncParser<T> {

    public static fromNamespace<T>(namespace: ResourceNamespace, defaultValue?: T): ResourceAsyncParser<T> {

        return new ResourceAsyncParser<T>(namespace, defaultValue);
    }

    private readonly _namespace: ResourceNamespace;
    private readonly _categoryMap: Map<ResourceCategory, AsyncResourceParsingFunction<T>>;

    private readonly _defaultValue?: T;

    private constructor(namespace: ResourceNamespace, defaultValue?: T) {

        this._namespace = namespace;
        this._categoryMap = new Map();

        this._defaultValue = defaultValue;
    }

    public setParser(category: ResourceCategory, parser: AsyncResourceParsingFunction<T>): this {

        this._categoryMap.set(category, parser);
        return this;
    }

    public removeCategory(category: ResourceCategory): this {

        this._categoryMap.delete(category);
        return this;
    }

    public async parseResource(elements: string[]): Promise<T | undefined> {

        const processResult: NamespaceProcessResult = this._namespace.process(elements);

        if (!processResult.matched) {
            return this._defaultValue;
        }
        if (!this._categoryMap.has(processResult.category)) {
            return this._defaultValue;
        }

        const parser: AsyncResourceParsingFunction<T> = this._categoryMap.get(processResult.category) as AsyncResourceParsingFunction<T>;
        return await Promise.resolve(parser(processResult));
    }

    public async parseResourceString(resourceString: string): Promise<T | undefined> {

        const resourceList: string[] = separateResourceString(resourceString);
        return await this.parseResource(resourceList);
    }

    public async ensureParseResource(elements: string[]): Promise<T> {

        const processResult: NamespaceProcessResult = this._namespace.process(elements);

        if (!processResult.matched
            || !this._categoryMap.has(processResult.category)) {

            if (typeof this._defaultValue === 'undefined') {
                throw new Error(`Can't find resource: ${elements.join(":")}, no default result found`);
            }
            return this._defaultValue;
        }

        const parser: AsyncResourceParsingFunction<T> = this._categoryMap.get(processResult.category) as AsyncResourceParsingFunction<T>;
        return await Promise.resolve(parser(processResult));
    }

    public async ensureParseResourceString(resourceString: string): Promise<T> {

        const resourceList: string[] = separateResourceString(resourceString);
        return await this.ensureParseResource(resourceList);
    }
}
