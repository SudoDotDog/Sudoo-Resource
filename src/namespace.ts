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

        for (const category of this._categories) {
            if (category.match(elements)) {
                return true;
            }
        }
        return false;
    }

    public match(elements: string[]): ResourceCategory | null {

        for (const category of this._categories) {
            if (category.match(elements)) {
                return category;
            }
        }
        return null;
    }
}
