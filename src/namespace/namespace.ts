/**
 * @author WMXPY
 * @namespace Namespace
 * @description Namespace
 */

import { ResourceCategory } from "../category/category";
import { CategoryProcessResult } from "../category/declare";
import { RESOURCE_CATEGORY_NAME_SEPARATOR, RESOURCE_CATEGORY_SEPARATOR, RESOURCE_NAMESPACE_SEPARATOR, SUDO_RESOURCE_NAME_NAMESPACE, UNIFORM_RESOURCE_NAME_NAMESPACE } from "../common/declare";
import { ResourceCategoryPersistence, ResourceNamespacePersistence } from "../persistence/declare";
import { NamespaceProcessResult } from "./declare";

export class ResourceNamespace {

    public static uniformResourceName(initialCategories: ResourceCategory[] = []): ResourceNamespace {

        return this.create(UNIFORM_RESOURCE_NAME_NAMESPACE, initialCategories);
    }

    public static sudoResourceName(initialCategories: ResourceCategory[] = []): ResourceNamespace {

        return this.create(SUDO_RESOURCE_NAME_NAMESPACE, initialCategories);
    }

    public static createWithCategories(namespace: string, ...categories: ResourceCategory[]): ResourceNamespace {

        return this.createWithCategoryList(namespace, categories);
    }

    public static createWithCategoryList(namespace: string, categoryList: ResourceCategory[]): ResourceNamespace {

        return this.create(namespace, categoryList);
    }

    public static create(namespace: string, initialCategories: ResourceCategory[] = []): ResourceNamespace {

        return new ResourceNamespace(namespace, initialCategories);
    }

    public static fromPersistence(persistence: ResourceNamespacePersistence): ResourceNamespace {

        return new ResourceNamespace(
            persistence.namespace,
            persistence.categories.map((category: ResourceCategoryPersistence) => {
                return ResourceCategory.fromPersistence(category);
            }),
        );
    }

    protected readonly _namespace: string;
    protected readonly _categories: ResourceCategory[];

    private constructor(namespace: string, initialCategories: ResourceCategory[]) {

        this._namespace = namespace;
        this._categories = initialCategories;
    }

    public get namespace(): string {
        return this._namespace;
    }
    public get length(): number {
        return this._categories.length;
    }

    public addCategory(category: ResourceCategory): this {

        this._categories.push(category);
        return this;
    }

    public getCategories(): ResourceCategory[] {

        return this._categories;
    }

    public test(elements: string[]): boolean {

        const processResult: NamespaceProcessResult = this.process(elements);
        return processResult.matched;
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
            return {
                matched: false,
            };
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
        return {
            matched: false,
        };
    }

    public hash(): string {

        const categoriesString: string = this.toResourceStringList().join(RESOURCE_CATEGORY_SEPARATOR);
        return `${this._namespace}${RESOURCE_NAMESPACE_SEPARATOR}${categoriesString}`;
    }

    public toResourceStringList(): string[] {

        return this._categories.map((category: ResourceCategory) => {

            const categoryString: string = category.toString();
            return `${category.categoryName}${RESOURCE_CATEGORY_NAME_SEPARATOR}${this._namespace}${RESOURCE_CATEGORY_SEPARATOR}${categoryString}`;
        });
    }

    public persistence(): ResourceNamespacePersistence {

        return {

            namespace: this._namespace,
            categories: this._categories.map((category: ResourceCategory) => {
                return category.persistence();
            }),
        };
    }

    private _matchNamespace(elements: string[]): boolean {

        return this._namespace === elements[0];
    }

    private _getCategoryElements(elements: string[]): string[] {

        return elements.slice(1);
    }
}
