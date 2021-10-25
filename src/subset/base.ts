/**
 * @author WMXPY
 * @namespace Subset
 * @description Base
 */

import { ResourceSubsetPersistence } from "../persistence/declare";
import { IResourceSubset, RESOURCE_SUBSET_TYPE, SubsetProcessResult } from "./declare";

export abstract class ResourceBaseSubset implements IResourceSubset {

    public readonly type: RESOURCE_SUBSET_TYPE;

    private readonly _subsetName: string;

    private _isRequired: boolean = false;
    private _defaultValue: string = '';

    protected constructor(subsetName: string, type: RESOURCE_SUBSET_TYPE) {

        this.type = type;

        this._subsetName = subsetName;
    }

    public get subsetName(): string {
        return this._subsetName;
    }

    public isRequired(): boolean {

        return this._isRequired;
    }

    public setIsRequired(isRequired: boolean): IResourceSubset {

        this._isRequired = isRequired;
        return this;
    }

    public getDefaultValue(): string {

        return this._defaultValue;
    }

    public setDefaultValue(value: string): IResourceSubset {

        this._defaultValue = value;
        return this;
    }

    public match(_target: string): boolean {

        throw new Error(`[Sudoo-Resource] ${this.constructor.name}::match is abstract`);
    }

    public process(_target: string): SubsetProcessResult {

        throw new Error(`[Sudoo-Resource] ${this.constructor.name}::process is abstract`);
    }

    public toString(): string {

        throw new Error(`[Sudoo-Resource] ${this.constructor.name}::toString is abstract`);
    }

    public persistence(): ResourceSubsetPersistence {

        throw new Error(`[Sudoo-Resource] ${this.constructor.name}::persistence is abstract`);
    }
}
