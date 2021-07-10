/**
 * @author WMXPY
 * @namespace Resource
 * @description Process
 * @override Integrate Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { ResourceCategory, ResourceNamespace, ResourceSubset } from "../../src";
import { NamespaceProcessResult } from "../../src/namespace/declare";
import { separateResourceString } from "../../src/util/separate";

describe('Given (Process) Integrate Test', (): void => {

    const chance: Chance.Chance = new Chance('integrate-resource-process');

    it('should be able to return unmatched', (): void => {

        const availableEnum: string = chance.string();
        const availableFixed: string = chance.string();
        const namespace: ResourceNamespace = ResourceNamespace.uniformResourceName();

        const enumName: string = chance.string();
        const firstIdentifierName: string = chance.string();
        const fixedName: string = chance.string();
        const secondIdentifierName: string = chance.string();

        const category: ResourceCategory = ResourceCategory.fromSubsets(
            ResourceSubset.enum(enumName, [
                availableEnum,
            ]),
            ResourceSubset.identifier(firstIdentifierName),
            ResourceSubset.fixed(fixedName, availableFixed),
            ResourceSubset.identifier(secondIdentifierName),
        );
        namespace.category(category);

        const resourceString: string = `urn:enum:first:bad:second`;
        const resourceElements: string[] = separateResourceString(resourceString);
        const processResult: NamespaceProcessResult = namespace.process(resourceElements);

        expect(processResult).to.be.deep.equal({
            matched: false,
        });
    });

    it('should be able to return matched name', (): void => {

        const availableEnum: string = chance.string();
        const availableFixed: string = chance.string();
        const namespace: ResourceNamespace = ResourceNamespace.uniformResourceName();

        const enumName: string = chance.string();
        const firstIdentifierName: string = chance.string();
        const fixedName: string = chance.string();
        const secondIdentifierName: string = chance.string();

        const category: ResourceCategory = ResourceCategory.fromSubsets(
            ResourceSubset.enum(enumName, [
                availableEnum,
            ]),
            ResourceSubset.identifier(firstIdentifierName),
            ResourceSubset.fixed(fixedName, availableFixed),
            ResourceSubset.identifier(secondIdentifierName),
        );
        namespace.category(category);

        const resourceString: string = `urn:${availableEnum}:first:${availableFixed}:second`;
        const resourceElements: string[] = separateResourceString(resourceString);
        const processResult: NamespaceProcessResult = namespace.process(resourceElements);

        expect(processResult).to.be.deep.equal({

            matched: true,
            category,
            valueMap: (processResult as any).valueMap,
            values: {
                [enumName]: availableEnum,
                [firstIdentifierName]: 'first',
                [fixedName]: availableFixed,
                [secondIdentifierName]: 'second',
            },
        });
    });
});
