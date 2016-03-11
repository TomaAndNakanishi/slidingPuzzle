$( function () {
	"use strict";	

	var canvas = $( '#myCanvas').get( 0);
	var context = canvas.getContext( '2d');

	var PUZZLE_PIECE_HRIZONTAL = 3;
	var PUZZLE_PIECE_VERTICAL = 3;
	var PUZZLE_PIECE_SIZE = 64;
	var PUZZLE_PIECE_INTERVAL = 3;

	var generate = function() {
		for ( var i = 0; i < puzzleList.length; i++) {
			var x = ( i % PUZZLE_PIECE_HRIZONTAL) * PUZZLE_PIECE_SIZE;
			var y = Math.floor( i / PUZZLE_PIECE_VERTICAL) * PUZZLE_PIECE_SIZE;
			// Insert interval space
			x += ( i % PUZZLE_PIECE_HRIZONTAL) * PUZZLE_PIECE_INTERVAL;
			y += Math.floor( i / PUZZLE_PIECE_VERTICAL) * PUZZLE_PIECE_INTERVAL;

			puzzleList[ i] = new PuzzlePiece( i, x, y);
		}
	};

	/* PuzzlePiece Object */
	var PuzzlePiece = function( id, x, y) {
		this.id = id;
		this.x = x;
		this.y = y;
	};

	PuzzlePiece.prototype.draw = function() {
		context.fillStyle = 'rgb( 200, 150, 150)'; // funky pink
		context.fillRect( this.x, this.y, PUZZLE_PIECE_SIZE, PUZZLE_PIECE_SIZE);

		context.font = '20px Comic Sans MS';
		context.fillStyle = 'rgb( 0, 0, 0)';
		context.textAlign = 'center';
		context.textBaseline = 'middle';
		context.fillText( this.id, this.x + PUZZLE_PIECE_SIZE/2, this.y + PUZZLE_PIECE_SIZE/2);

		if ( this.id <= -1) {
			context.fillStyle = 'rgb( 0, 0, 0)'; // funky pink
			context.fillRect( this.x, this.y, PUZZLE_PIECE_SIZE, PUZZLE_PIECE_SIZE);
		}

		console.log( 'x : ', this.x, 'y : ', this.y, 'size : ', PUZZLE_PIECE_SIZE);
	};

	var puzzleList = new Array( PUZZLE_PIECE_HRIZONTAL * PUZZLE_PIECE_VERTICAL);
	generate();
	puzzleList[ puzzleList.length - 1].id = -1;
	puzzleList.forEach( function( piece) {
		piece.draw();
	});

});
