/**
 * @author WMXPY
 * @namespace Persistence
 * @description Declare
 */

export type ResourceSubsetPersistence = {

    readonly subsetName: string;
} & ({

    readonly type: 'enum';
    readonly options: string[];
} | {

    readonly type: 'fixed';
    readonly value: string;
} | {

    readonly type: 'identifier';
});

export type ResourceNamespacePersistence = {
};
