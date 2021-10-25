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

    public static enum(subsetName: string, options: string[], defaultValue?: string): IResourceSubset {

        return ResourceEnumSubset.create(subsetName, options, defaultValue);
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
                const result: IResourceSubset = this.enum(structure.subsetName, structure.options, structure.defaultValue);
                result.setIsRequired(structure.required);
                return result;
            }
            case "fixed": {
                const result: IResourceSubset = this.fixed(structure.subsetName, structure.value);
                result.setIsRequired(structure.required);
                result.setDefaultValue(structure.defaultValue);
                return result;
            }
            case "identifier": {
                const result: IResourceSubset = this.identifier(structure.subsetName);
                result.setIsRequired(structure.required);
                result.setDefaultValue(structure.defaultValue);
                return result;
            }
        }
        throw new Error(`Unsupported subset type: ${(structure as any).type}`);
    }

    private constructor() {

        throw new Error("Cannot create instance of ResourceSubset");
    }
}
