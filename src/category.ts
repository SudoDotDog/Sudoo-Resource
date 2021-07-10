/**
 * @author WMXPY
 * @namespace Resource
 * @description Category
 */

import { RESOURCE_CATEGORY_SEPARATOR } from "./declare";
import { IResourceSubset } from "./subset/declare";

export class ResourceCategory {

    public static fromSubsets(...subsets: IResourceSubset[]): ResourceCategory {

        return this.fromSubsetList(subsets);
    }

    public static fromSubsetList(subsets: IResourceSubset[]): ResourceCategory {

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

        for (let i = 0; i < elements.length; i++) {

            if (!this._subsets[i].match(elements[i])) {
                return false;
            }
        }
        return true;
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
