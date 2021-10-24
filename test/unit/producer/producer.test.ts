/**
 * @author WMXPY
 * @namespace Resource_Producer
 * @description Producer
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { ResourceCategory, ResourceProducer, ResourceSubset } from "../../../src";

describe('Given {ResourceProducer} Class', (): void => {

    const chance: Chance.Chance = new Chance('resource-producer-producer');

    it('should be able to construct', (): void => {

        const category: ResourceCategory = ResourceCategory.fromSubsets(
            chance.word(),
            ResourceSubset.identifier(chance.word()),
        );

        const handler: ResourceProducer = ResourceProducer.fromCategory(category);

        expect(handler).to.be.instanceOf(ResourceProducer);
    });
});
