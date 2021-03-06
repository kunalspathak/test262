// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.9-2-a-9
description: >
    Object.freeze - 'P' is own property of the Function object that
    uses Object's [[GetOwnProperty]]
includes: [propertyHelper.js]
---*/

var funObj = function () { };

funObj.foo = 10; // default [[Configurable]] attribute value of foo: true

Object.freeze(funObj);

verifyNotWritable(funObj, "foo");
verifyNotConfigurable(funObj, "foo");

assert.sameValue(funObj.foo, 10);
