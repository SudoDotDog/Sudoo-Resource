/**
 * @author WMXPY
 * @namespace Namespace
 * @description Namespace
 */

import { ResourceCategory } from "../category/category";
import { CategoryProcessResult } from "../category/declare";
import { UNIFORM_RESOURCE_NAME_NAMESPACE } from "../common/declare";
import { NamespaceProcessResult } from "./declare";

export class ResourceNamespace {

    public static uniformResourceName(): ResourceNamespace {

        return this.create(UNIFORM_RESOURCE_NAME_NAMESPACE);
    }

    public static create(namespace: string): ResourceNamespace {

        return new ResourceNamespace(namespace);
    }

    protected readonly _namespace: string;
    protected readonly _categories: ResourceCategory[];

    private constructor(namespace: string) {

        this._namespace = namespace;
        this._categories = [];
    }

    public get length(): number {
        return this._categories.length;
    }

    public category(category: ResourceCategory): this {

        this._categories.push(category);
        return this;
    }

    public test(elements: string[]): boolean {

        const matchResult: ResourceCategory | null = this.match(elements);
        return matchResult !== null;
    }

    public match(elements: string[]): ResourceCategory | null {

        const processResult: NamespaceProcessResult = this.process(elements);
        if (processResult.matched) {
            return processResult.category;
        }
        return null;
    }

    public process(elements: string[]): NamespaceProcessResult {

        if (!this._matchNamespace(elements)) {
            return { matched: false };
        }

        const fixedElements: string[] = this._getCategoryElements(elements);
        for (const category of this._categories) {

            const categoryProcessResult: CategoryProcessResult = category.process(fixedElements);
            if (categoryProcessResult.matched) {

                return {

                    matched: true,
                    category,
                    categoryName: category.categoryName,
                    valueMap: categoryProcessResult.valueMap,
                    values: categoryProcessResult.values,
                };
            }
        }
        return { matched: false };
    }

    private _matchNamespace(elements: string[]): boolean {

        return this._namespace === elements[0];
    }

    private _getCategoryElements(elements: string[]): string[] {

        return elements.slice(1);
    }
}
