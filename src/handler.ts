/**
 * @author WMXPY
 * @namespace Resource
 * @description Handler
 */

import { ResourceNamespace } from "./namespace/namespace";

export class ResourceHandler {

    public static fromNamespace(namespace: ResourceNamespace): ResourceHandler {

        return new ResourceHandler(namespace);
    }

    private readonly _namespace: ResourceNamespace;

    private constructor(namespace: ResourceNamespace) {

        this._namespace = namespace;
    }
}
