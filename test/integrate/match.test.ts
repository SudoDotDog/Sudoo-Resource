/**
 * @author WMXPY
 * @namespace Resource
 * @description Match
 * @override Integrate Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { ResourceCategory, ResourceNamespace, ResourceSubset } from "../../src";
import { separateResourceString } from "../../src/util/separate";

describe('Given (Match) Integrate Test', (): void => {

    const chance: Chance.Chance = new Chance('integrate-match');

    it('should be able to match fixed category - happy path', (): void => {

        const namespace: ResourceNamespace = ResourceNamespace.uniformResourceName();

        const fixedCategory: ResourceCategory = ResourceCategory.fromSubsets(ResourceSubset.fixed("test"));
        namespace.category(fixedCategory);

        const resourceString: string = `urn:test`;
        const resourceElements: string[] = separateResourceString(resourceString);
        const randomMatchResult: boolean = namespace.test(resourceElements);

        expect(randomMatchResult).to.be.true;
    });

    it('should be able to match fixed category - sad path', (): void => {

        const namespace: ResourceNamespace = ResourceNamespace.uniformResourceName();

        const fixedCategory: ResourceCategory = ResourceCategory.fromSubsets(ResourceSubset.fixed("test"));
        namespace.category(fixedCategory);

        const resourceString: string = `urn:${chance.string()}`;
        const resourceElements: string[] = separateResourceString(resourceString);
        const randomMatchResult: boolean = namespace.test(resourceElements);

        expect(randomMatchResult).to.be.false;
    });
});
