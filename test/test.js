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

// MODULES //

var tape = require( 'tape' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var NINF = require( '@stdlib/constants-float64-ninf' );
var PINF = require( '@stdlib/constants-float64-pinf' );
var kurtosis = require( './../lib' );


// FIXTURES //

var data = require( './fixtures/julia/data.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof kurtosis, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for `v`, the function returns `NaN`', function test( t ) {
	var v = kurtosis( NaN );
	t.equal( isnan( v ), true, 'returns NaN' );
	t.end();
});

tape( 'if provided `v <= 2`, the function returns `NaN`', function test( t ) {
	var v;

	v = kurtosis( 2.0 );
	t.equal( isnan( v ), true, 'returns NaN' );

	v = kurtosis( 1.0 );
	t.equal( isnan( v ), true, 'returns NaN' );

	v = kurtosis( 0.0 );
	t.equal( isnan( v ), true, 'returns NaN' );

	v = kurtosis( -1.0 );
	t.equal( isnan( v ), true, 'returns NaN' );

	v = kurtosis( NINF );
	t.equal( isnan( v ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided `2 < v <= 4`, the function returns `infinity`', function test( t ) {
	var v = kurtosis( 2.5 );
	t.equal( v, PINF, 'returns infinity' );

	v = kurtosis( 3.0 );
	t.equal( v, PINF, 'returns infinity' );

	v = kurtosis( 4.0 );
	t.equal( v, PINF, 'returns infinity' );

	t.end();
});

tape( 'the function returns the excess kurtosis of a Student\'s t distribution', function test( t ) {
	var expected;
	var v;
	var i;
	var y;

	expected = data.expected;
	v = data.v;
	for ( i = 0; i < expected.length; i++ ) {
		y = kurtosis( v[i] );
		t.equal( y, expected[i], 'v: '+v[i]+', y: '+y+', expected: '+expected[i] );
	}
	t.end();
});