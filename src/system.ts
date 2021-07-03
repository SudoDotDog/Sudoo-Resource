/**
 * @author WMXPY
 * @namespace Resource
 * @description System
 */

import { hashResourceCategory } from "./util";

export class ResourceSystem {

    public static create(): ResourceSystem {

        return new ResourceSystem();
    }

    protected readonly _resourceName: string;
    protected readonly _categories: string[];

    private constructor() {

    }

    public category(category: string[] | string): this {

        this._categories.push(hashResourceCategory(category));
        return this;
    }
}
