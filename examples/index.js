/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

var randu = require( '@stdlib/random-base-randu' );
var kurtosis = require( './../lib' );

var i;
var v;
var y;

for ( i = 0; i < 10; i++ ) {
	v = randu() * 20.0;
	y = kurtosis( v );
	console.log( 'v: %d, Kurt(X;v): %d', v.toFixed( 4 ), y.toFixed( 4 ) );
}
