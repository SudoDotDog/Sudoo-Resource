/**
 * @author WMXPY
 * @namespace Resource
 * @description Category
 */

import { RESOURCE_CATEGORY_SEPARATOR } from "./declare";
import { IResourceSubset } from "./subset/declare";

export class ResourceCategory {

    public static create(subsets: IResourceSubset[]): ResourceCategory {

        return new ResourceCategory(subsets);
    }

    private readonly _subsets: IResourceSubset[];

    private constructor(subsets: IResourceSubset[]) {

        this._subsets = subsets;
    }

    public get length(): number {
        return this._subsets.length;
    }

    public match(elements: string[]): boolean {

        if (elements.length !== this._subsets.length) {
            return false;
        }

        return this._subsets
            .every((subset: IResourceSubset, index: number) => {
                return subset.match(elements[index]);
            });
    }

    public hash(): string {

        return this.toString();
    }

    public toString(): string {

        return this._subsets
            .map((subset: IResourceSubset) => subset.toString())
            .join(RESOURCE_CATEGORY_SEPARATOR);
    }
}
