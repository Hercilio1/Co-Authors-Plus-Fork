import { moveItem } from '../utils.js';

describe( 'Utility - moveItem', () => {

	it( 'should move an option down', () => {
		const initialArray = [ 'admin', 'laras126', 'drake', 'fizzbuzz' ];

		expect( moveItem( 'admin', initialArray, 'down' ) ).toStrictEqual( [ 'laras126', 'admin', 'drake', 'fizzbuzz' ] );
	} );

	it( 'should move an option up', () => {
		const initialArray = [ 'admin', 'laras126', 'drake', 'fizzbuzz' ];

		expect( moveItem( 'laras126', initialArray, 'up' ) ).toStrictEqual( [ 'laras126', 'admin', 'drake', 'fizzbuzz' ] );
	} );

	it( 'should move items at the end', () => {
		const initialArray = [ 'admin', 'laras126', 'drake', 'fizzbuzz' ];

		expect( moveItem( 'drake', initialArray, 'down' ) ).toStrictEqual( [ 'admin', 'laras126', 'fizzbuzz', 'drake' ] );
	});

	it( 'should move items multiple times in multiple directions', () => {
		const initialArray = [ 'admin', 'laras126', 'drake', 'fizzbuzz' ];

		expect( moveItem( 'drake', initialArray, 'up' ) ).toStrictEqual( [ 'admin', 'drake', 'laras126', 'fizzbuzz' ] );

		expect( moveItem( 'admin', [ 'admin', 'drake', 'laras126', 'fizzbuzz' ], 'down' ) ).toStrictEqual( [ 'drake', 'admin', 'laras126', 'fizzbuzz' ] );
	});

} );
