/**
 * @author WMXPY
 * @namespace Resource_Consumer
 * @description Handler
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { ResourceCategory, ResourceHandler, ResourceNamespace, ResourceSubset } from "../../../src";

describe('Given {ResourceHandler} Class', (): void => {

    const chance: Chance.Chance = new Chance('resource-consumer-handler');

    it('should be able to construct', (): void => {

        const namespace: ResourceNamespace = ResourceNamespace.create(chance.word());
        const category: ResourceCategory = ResourceCategory.fromSubsets(
            chance.word(),
            ResourceSubset.identifier(chance.word()),
        );

        namespace.addCategory(category);

        const handler: ResourceHandler = ResourceHandler.fromNamespace(namespace);

        expect(handler).to.be.instanceOf(ResourceHandler);
    });

    it('should be able to execute action - single action', (): void => {

        const namespaceString: string = chance.word();
        let actionCalled: boolean = false;

        const namespace: ResourceNamespace = ResourceNamespace.create(namespaceString);
        const category: ResourceCategory = ResourceCategory.fromSubsets(
            chance.word(),
            ResourceSubset.identifier(chance.word()),
        );

        namespace.addCategory(category);

        const handler: ResourceHandler = ResourceHandler.fromNamespace(namespace);
        handler.addAction(category, () => {
            actionCalled = true;
        });

        handler.handlerResourceString(`${namespaceString}:${chance.word()}`);

        expect(actionCalled).to.be.true;
    });
});
