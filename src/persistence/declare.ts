/**
 * @author WMXPY
 * @namespace Persistence
 * @description Declare
 */

export type ResourceSubsetPersistence = {

    readonly subsetName: string;
    readonly required: boolean;
    readonly defaultValue: string;
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

    readonly namespace: string;
    readonly categories: ResourceCategoryPersistence[];
};
