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
}
