/*
Copyright 2016 IBM Corporation

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/**
 * Run the unit tests for the contents objects in the authoring-api package.
 */
"use strict";

// Categories Helper
const CategoriesHelperUnitTest = require("./lib/categories.helper.unit.js");
const categoriesHelperUnitTest = new CategoriesHelperUnitTest();
categoriesHelperUnitTest.run();

// Categories REST
const CategoriesRestUnitTest = require("./lib/categories.rest.unit.js");
const categoriesRestUnitTest = new CategoriesRestUnitTest();
categoriesRestUnitTest.run();

// Categories FS
const CategoriesFsUnitTest = require("./lib/categories.fs.unit.js");
const categoriesFsUnitTest = new CategoriesFsUnitTest();
categoriesFsUnitTest.run();