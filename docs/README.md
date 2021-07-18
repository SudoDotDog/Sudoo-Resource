# Sudoo-Resource

[![Continuous Integration](https://github.com/SudoDotDog/Sudoo-Resource/actions/workflows/ci.yml/badge.svg)](https://github.com/SudoDotDog/Sudoo-Resource/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/SudoDotDog/Sudoo-Resource/branch/main/graph/badge.svg)](https://codecov.io/gh/SudoDotDog/Sudoo-Resource)
[![npm version](https://badge.fury.io/js/%40sudoo%2Fresource.svg)](https://www.npmjs.com/package/@sudoo/resource)
[![downloads](https://img.shields.io/npm/dm/@sudoo/resource.svg)](https://www.npmjs.com/package/@sudoo/resource)

Resource string mapping for JS

## Install

```sh
yarn add @sudoo/resource
# Or
npm install @sudoo/resource --save
```

## Usage

```ts
import { ResourceCategory } from "@sudoo/resource";

const namespace: ResourceNamespace = ResourceNamespace.uniformResourceName();
const category: ResourceCategory = ResourceCategory.fromSubsets(
    'category-name',
    ResourceSubset.enum(enumName, [
        availableEnum,
    ]),
    ResourceSubset.identifier(firstIdentifierName),
    ResourceSubset.fixed(fixedName, availableFixed),
    ResourceSubset.identifier(secondIdentifierName),
);
namespace.addCategory(category);
```
