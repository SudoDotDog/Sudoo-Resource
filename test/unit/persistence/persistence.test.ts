/**
 * @author WMXPY
 * @namespace Resource_Persistence
 * @description Namespace
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { ResourceCategory, ResourceNamespacePersistence, ResourceSubset } from "../../../src";
import { ResourceNamespace } from "../../../src/namespace/namespace";

describe('Given (Persistence) Methods', (): void => {

    const chance: Chance.Chance = new Chance('resource-persistence-persistence');

    it('should be able to persistence namespace', (): void => {

        const namespaceName: string = chance.string();
        const categoryName: string = chance.string();
        const identifierName: string = chance.string();

        const namespace: ResourceNamespace = ResourceNamespace.create(namespaceName);
        const category: ResourceCategory = ResourceCategory.fromSubsets(
            categoryName,
            ResourceSubset.identifier(identifierName),
        );

        namespace.addCategory(category);

        const persistence: ResourceNamespacePersistence = namespace.persistence();

        expect(persistence).to.be.deep.equal({

            namespace: namespaceName,
            categories: [{
                categoryName,
                subsets: [{
                    subsetName: identifierName,
                    required: false,
                    defaultValue: "",
                    type: 'identifier',
                }],
            }],
        });
    });

    it('should be able to persistence namespace', (): void => {

        const namespaceName: string = chance.string();
        const categoryName: string = chance.string();
        const identifierName: string = chance.string();

        const structure: ResourceNamespacePersistence = {

            namespace: namespaceName,
            categories: [{
                categoryName,
                subsets: [{
                    subsetName: identifierName,
                    required: true,
                    defaultValue: chance.string(),
                    type: 'identifier',
                }],
            }],
        };

        const namespace: ResourceNamespace = ResourceNamespace.fromPersistence(structure);

        const resourceStringList: string[] = namespace.toResourceStringList();

        expect(resourceStringList).to.be.deep.equal([
            `${categoryName}^${namespaceName}:${identifierName}-identifier`,
        ]);
    });
});
