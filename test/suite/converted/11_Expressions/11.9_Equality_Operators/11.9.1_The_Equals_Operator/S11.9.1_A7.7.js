// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If Type(x) is String and Type(y) is Object,
 * return x == ToPrimitive(y)
 *
 * @section 11.9.1, 11.9.3
 * @path 11_Expressions/11.9_Equality_Operators/11.9.1_The_Equals_Operator/S11.9.1_A7.7.js
 * @description y is object, x is primitive string
 */

//CHECK#1
if (("1" == new Boolean(true)) !== true) {
  $ERROR('#1: ("1" == new Boolean(true)) === true');
}

//CHECK#2
if (("-1" == new Number(-1)) !== true) {
  $ERROR('#2: ("-1" == new Number(-1)) === true');
}

//CHECK#3
if (("x" == new String("x")) !== true) {
  $ERROR('#3: ("x" == new String("x")) === true');
}
