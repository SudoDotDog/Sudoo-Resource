/**
 * @author WMXPY
 * @namespace Resource
 * @description System
 */

import { ResourceHandler } from "./handler";

export class ResourceSystem {

    public static create(): ResourceSystem {

        return new ResourceSystem();
    }

    protected readonly _resourceName: string;
    protected readonly _categories: Map<string, ResourceHandler>;

    private constructor() {

    }
}
