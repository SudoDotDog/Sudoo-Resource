/**
 * @author WMXPY
 * @namespace Resource
 * @description Namespace
 */

import { ResourceCategory } from "./category";

export class ResourceNamespace {

    public static uniformResourceName(): ResourceNamespace {

        return this.create("urn");
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

        if (!this._matchNamespace(elements)) {
            return null;
        }

        const fixedElements: string[] = this._getCategoryElements(elements);
        for (const category of this._categories) {
            if (category.match(fixedElements)) {
                return category;
            }
        }
        return null;
    }

    private _matchNamespace(elements: string[]): boolean {

        return this._namespace === elements[0];
    }

    private _getCategoryElements(elements: string[]): string[] {

        return elements.slice(1);
    }
}
