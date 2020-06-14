let idx = undefined;

const $ = document.querySelector.bind( document );

const searchButton = $( '.button-search' )
const searchField = $( '.query' );
const header = $( '.header' );
const results = $( '.search-results' );
const closeButton = $( '.bar.search .button-reset' );
const backButton = $( '.bar.search .button-close' );

let script_count = 0;
const max_script_count = 2;

const ieCompat = function () {
	if ( /MSIE|Edge\/\d./i.test( navigator.userAgent ) ) {
		$( 'body' ).classList.add( 'no-csstransforms3d' );
	}
};

// Loads all necessary scripts.
const downloadPages = function () {
	if ( script_count >= max_script_count ) {
		return;
	}

	const lunrScript = document.createElement( 'script' );
	lunrScript.src = "/js/lunr.js";
	lunrScript.onload = buildIndex;
	lunrScript.async = 'async';
	document.body.appendChild( lunrScript );

	const indexScript = document.createElement( 'script' );
	indexScript.src = "/lunr_idx.js";
	indexScript.onload = buildIndex;
	indexScript.async = 'async';
	document.body.appendChild( indexScript );
};

const buildIndex = function () {
	script_count++;
	if ( script_count < max_script_count ) {
		return;
	}

	idx = lunr( function () {
		this.ref( 'url' );
		this.field( 'name' );
		this.field( 'text' );
		this.metadataWhitelist = [ 'position' ];

		documents.forEach( function ( doc ) {
			this.add( doc );
		}, this );
	} );
};

const closeResults = function ( e ) {
	header.classList.remove( 'search-results-open' );
	closeButton.classList.remove( 'search-btn-close-visible' );
	results.innerHTML = '';
	searchField.value = '';
};

const buildText = function ( text, pos, len ) {
	pos = pos || 0;
	len = len || 0;
	const extractStart = pos - 90;
	const extractEnd = pos + len + 90;

	const begin = ( extractStart < 0 ? '' : '...' ) + text.substring( extractStart, pos );
	const end = text.substring( pos + len, extractEnd ) + ( extractEnd > text.length ? '' : '...' );
	const sw = text.substring( pos, pos + len );

	return begin + '<span class="highlight-search">' + sw + '</span>' + end;
};

const onSearchKeydown = function ( e ) {
	if ( idx === undefined )
		return;

	if ( e.keyCode == 27 ) // Escaoe
		closeResults();

	if ( e.keyCode != 13 ) // Enter
		return;

	const query = searchField.value;
	const res = idx.search( query );

	header.classList.add( 'search-results-open' );
	closeButton.classList.add( 'search-btn-close-visible' );
	results.innerHTML = '';
	res.forEach( function ( v ) {
		const mdata = v.matchData.metadata;
		const match = Object.keys( mdata )[ 0 ];
		const part = Object.keys( mdata[ match ] )[ 0 ];
		const pos = mdata[ match ][ part ].position[ 0 ];

		const page = documents.filter( function ( elem ) { return elem.url == v.ref; } )[ 0 ];

		const link = document.createElement( 'a' );
		link.href = page.url;
		const h2 = document.createElement( 'h2' );
		h2.innerHTML = part == 'name' ? buildText( page.name, pos[ 0 ], pos[ 1 ] ) : buildText( page.name );
		link.appendChild( h2 );

		const p = document.createElement( 'p' );
		p.innerHTML = part == 'text' ? buildText( page.text, pos[ 0 ], pos[ 1 ] ) : buildText( page.text );
		link.appendChild( p );

		results.appendChild( link );
	} );

	if ( res.length == 0 ) {
		const cont = document.createElement( 'div' );
		const h2 = document.createElement( 'h2' );
		h2.innerHTML = 'Keine Suchergebnisse';
		cont.appendChild( h2 );
		results.appendChild( cont );
	}
};

const onSearchChange = function () {
	if ( searchField.value == '' )
		closeResults();
};

const triggerSearch = function () {
	searchField.select();
	downloadPages();
};

addEventListener( 'load', ieCompat );
searchField.addEventListener( 'keydown', onSearchKeydown );
searchField.addEventListener( 'input', onSearchChange );
closeButton.addEventListener( 'click', closeResults );
backButton.addEventListener( 'click', closeResults );
searchButton.addEventListener( 'click', triggerSearch );
