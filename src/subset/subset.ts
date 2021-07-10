/**
 * @author WMXPY
 * @namespace Subset
 * @description Subset
 */

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

    private constructor() {

        throw new Error("Cannot create instance of ResourceSubset");
    }
}
