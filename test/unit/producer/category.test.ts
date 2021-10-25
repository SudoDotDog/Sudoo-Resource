/**
 * @author WMXPY
 * @namespace Resource_Producer
 * @description Category
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { ResourceCategory, ResourceCategoryProducer, ResourceSubset } from "../../../src";

describe('Given {ResourceCategoryProducer} Class', (): void => {

    const chance: Chance.Chance = new Chance('resource-producer-category');

    it('should be able to construct', (): void => {

        const category: ResourceCategory = ResourceCategory.fromSubsets(
            chance.word(),
            ResourceSubset.identifier(chance.word()),
        );

        const producer: ResourceCategoryProducer = ResourceCategoryProducer.fromNamespaceNameAndCategory(chance.word(), category);

        expect(producer).to.be.instanceOf(ResourceCategoryProducer);
    });

    it('should be able to create string', (): void => {

        const namespaceName: string = chance.word();
        const categoryName: string = chance.word();

        const firstIdentifier: string = chance.word();
        const secondIdentifier: string = chance.word();

        const firstSubset: string = chance.word();
        const secondSubset: string = chance.word();

        const category: ResourceCategory = ResourceCategory.fromSubsets(
            categoryName,
            ResourceSubset.identifier(firstIdentifier),
            ResourceSubset.identifier(secondIdentifier),
        );

        const producer: ResourceCategoryProducer = ResourceCategoryProducer.fromNamespaceNameAndCategory(namespaceName, category);
        const result: string = producer.produceByRecord({
            [firstIdentifier]: firstSubset,
            [secondIdentifier]: secondSubset,
        });

        expect(result).to.be.equal(`${namespaceName}::${categoryName}:${firstSubset}:${secondSubset}`);
    });

    it('should be able to create string with empty item', (): void => {

        const namespaceName: string = chance.word();
        const categoryName: string = chance.word();

        const firstIdentifier: string = chance.word();
        const secondIdentifier: string = chance.word();

        const secondSubset: string = chance.word();

        const category: ResourceCategory = ResourceCategory.fromSubsets(
            categoryName,
            ResourceSubset.identifier(firstIdentifier),
            ResourceSubset.identifier(secondIdentifier),
        );

        const producer: ResourceCategoryProducer = ResourceCategoryProducer.fromNamespaceNameAndCategory(namespaceName, category);
        const result: string = producer.produceByRecord({
            [secondIdentifier]: secondSubset,
        });

        expect(result).to.be.equal(`${namespaceName}::${categoryName}::${secondSubset}`);
    });
});
