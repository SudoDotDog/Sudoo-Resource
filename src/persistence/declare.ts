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

export type ResourceCategoryPersistence = {

    readonly categoryName: string;
    readonly subsets: ResourceSubsetPersistence[];
};

export type ResourceNamespacePersistence = {
};
