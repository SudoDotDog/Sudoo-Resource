/**
 * @author WMXPY
 * @namespace Subset
 * @description Subset
 */

import { ResourceSubsetPersistence } from "../persistence/declare";
import { IResourceSubset } from "./declare";
import { ResourceEnumSubset } from "./enum";
import { ResourceFixedSubset } from "./fixed";
import { ResourceIdentifierSubset } from "./identifier";

export class ResourceSubset {

    public static enum(subsetName: string, options: string[]): IResourceSubset {

        return ResourceEnumSubset.create(subsetName, options);
    }

    public static fixed(subsetName: string, fixedSubset: string): IResourceSubset {

        return ResourceFixedSubset.create(subsetName, fixedSubset);
    }

    public static identifier(subsetName: string): IResourceSubset {

        return ResourceIdentifierSubset.create(subsetName);
    }

    public static fromPersistence(structure: ResourceSubsetPersistence): IResourceSubset {

        switch (structure.type) {

            case "enum": {
                return this.enum(structure.subsetName, structure.options);
            }
            case "fixed": {
                return this.fixed(structure.subsetName, structure.value);
            }
            case "identifier": {
                return this.identifier(structure.subsetName);
            }
        }
        throw new Error(`Unsupported subset type: ${(structure as any).type}`);
    }

    private constructor() {

        throw new Error("Cannot create instance of ResourceSubset");
    }
}
