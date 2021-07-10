/**
 * @author WMXPY
 * @namespace Resource_Subset
 * @description Subset
 */

import { IResourceSubset } from "./declare";
import { ResourceEnumSubset } from "./enum";
import { ResourceFixedSubset } from "./fixed";
import { ResourceIdentifierSubset } from "./identifier";

export class ResourceSubset {

    public static enum(options: string[]): IResourceSubset {

        return ResourceEnumSubset.create(options);
    }

    public static fixed(fixedSubset: string): IResourceSubset {

        return ResourceFixedSubset.create(fixedSubset);
    }

    public static identifier(): IResourceSubset {

        return ResourceIdentifierSubset.create();
    }

    private constructor() {

        throw new Error("Cannot create instance of ResourceSubset");
    }
}
