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

describe('Given (Test) Integrate Test', (): void => {

    const chance: Chance.Chance = new Chance('integrate-test');

    it('should be able to test enum category - happy path', (): void => {

        const availableEnum: string = chance.string();
        const namespace: ResourceNamespace = ResourceNamespace.uniformResourceName();

        const enumCategory: ResourceCategory = ResourceCategory.fromSubsets(
            chance.string(),
            ResourceSubset.enum(chance.string(), [
                availableEnum,
            ]),
        );
        namespace.addCategory(enumCategory);

        const resourceString: string = `urn:${availableEnum}`;
        const resourceElements: string[] = separateResourceString(resourceString);
        const testResult: boolean = namespace.test(resourceElements);

        expect(testResult).to.be.true;
    });

    it('should be able to test enum category - sad path', (): void => {

        const availableEnum: string = chance.string();
        const namespace: ResourceNamespace = ResourceNamespace.uniformResourceName();

        const enumCategory: ResourceCategory = ResourceCategory.fromSubsets(
            chance.string(),
            ResourceSubset.enum(chance.string(), [
                availableEnum,
            ]),
        );
        namespace.addCategory(enumCategory);

        const resourceString: string = `urn:${chance.string()}`;
        const resourceElements: string[] = separateResourceString(resourceString);
        const testResult: boolean = namespace.test(resourceElements);

        expect(testResult).to.be.false;
    });

    it('should be able to test fixed category - happy path', (): void => {

        const namespace: ResourceNamespace = ResourceNamespace.uniformResourceName();

        const fixedCategory: ResourceCategory = ResourceCategory.fromSubsets(
            chance.string(),
            ResourceSubset.fixed(chance.string(), "test"),
        );
        namespace.addCategory(fixedCategory);

        const resourceString: string = `urn:test`;
        const resourceElements: string[] = separateResourceString(resourceString);
        const testResult: boolean = namespace.test(resourceElements);

        expect(testResult).to.be.true;
    });

    it('should be able to test fixed category - sad path', (): void => {

        const namespace: ResourceNamespace = ResourceNamespace.uniformResourceName();

        const fixedCategory: ResourceCategory = ResourceCategory.fromSubsets(
            chance.string(),
            ResourceSubset.fixed(chance.string(), "test"),
        );
        namespace.addCategory(fixedCategory);

        const resourceString: string = `urn:${chance.string()}`;
        const resourceElements: string[] = separateResourceString(resourceString);
        const testResult: boolean = namespace.test(resourceElements);

        expect(testResult).to.be.false;
    });

    it('should be able to test identifier category', (): void => {

        const namespace: ResourceNamespace = ResourceNamespace.uniformResourceName();

        const identifierCategory: ResourceCategory = ResourceCategory.fromSubsets(
            chance.string(),
            ResourceSubset.identifier(chance.string()),
        );
        namespace.addCategory(identifierCategory);

        const resourceString: string = `urn:${chance.string()}`;
        const resourceElements: string[] = separateResourceString(resourceString);
        const testResult: boolean = namespace.test(resourceElements);

        expect(testResult).to.be.true;
    });
});
