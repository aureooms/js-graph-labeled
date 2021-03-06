
var collections = require( "@aureooms/js-collections" ) ;
var set = collections.set ;

var cardinality = require( "@aureooms/js-cardinality" ) ;

var dll = require( "@aureooms/js-dll" ) ;

var spec = require( "@aureooms/js-graph-spec" ) ;
var list = require( "@aureooms/js-adjacency-list" ) ;

var label = graphlabeled.label ;
var List = dll.DoublyLinkedList ;

var MultiDiGraph = label( list.MultiDiGraph( List , Map ) ) ;

test( "simple test for labeled MultiDiGraph" , function ( assert ) {

	var G = new MultiDiGraph( ) ;

	assert.equal( cardinality.len( G.vertices( ) ) , 0 , "no vertices count" ) ;

	G.vadd( 1 ) ;
	G.vadd( 2 ) ;
	G.vadd( 3 ) ;

	assert.equal( cardinality.len( G.vertices( ) ) , 3 , "3 vertices count" ) ;
	assert.ok( set( G.vertices( ) ).isequal( [ 1 , 2 , 3 ] ) , "3 vertices" ) ;

	assert.equal( cardinality.len( G.edges( ) ) , 0 , "no edges count" ) ;

	var __12 = G.eadd( 1 , 2 ) ;
	var __23 = G.eadd( 2 , 3 ) ;
	var _12 = G.eadd( 1 , 2 ) ;
	var _23 = G.eadd( 2 , 3 ) ;

	assert.equal( cardinality.len( G.edges( ) ) , 4 , "4 edges count" ) ;

	G.vdel( 2 ) ;

	assert.equal( cardinality.len( G.vertices( ) ) , 2 , "vertices after vdel 2" ) ;
	assert.equal( cardinality.len( G.edges( ) ) , 0 , "edges after vdel 2" ) ;

} ) ;
