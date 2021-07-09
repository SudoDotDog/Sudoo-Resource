/**
 * @author WMXPY
 * @namespace Resource
 * @description Category
 */

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

    public toString(): string {
        return this._subsets
            .map((subset: IResourceSubset) => subset.toString())
            .join(":");
    }

    public match(target: string[]): boolean {

        if (target.length !== this._subsets.length) {
            return false;
        }

        return this._subsets
            .every((subset: IResourceSubset, index: number) => {
                return subset.match(target[index]);
            });
    }
}