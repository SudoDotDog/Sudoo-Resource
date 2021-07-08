/**
 * @author WMXPY
 * @namespace Resource_Subset
 * @description Subset
 */

import { IResourceSubset } from "./declare";
import { ResourceFixedSubset } from "./fixed";

export class ResourceSubset {

    public static fixed(fixedSubset: string): IResourceSubset {

        return ResourceFixedSubset.create(fixedSubset);
    }

    private constructor() {

        throw new Error("Cannot create instance of ResourceSubset");
    }
}
