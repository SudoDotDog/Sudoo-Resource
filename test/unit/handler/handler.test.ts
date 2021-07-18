/**
 * @author WMXPY
 * @namespace Resource_Handler
 * @description Handler
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { ResourceCategory, ResourceSubset } from "../../../src";
import { ResourceHandler } from "../../../src/handler/handler";
import { ResourceNamespace } from "../../../src/namespace/namespace";

describe('Given {ResourceHandler} Class', (): void => {

    const chance: Chance.Chance = new Chance('resource-handler-handler');

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
