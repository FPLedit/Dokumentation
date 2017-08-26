var idx = undefined;

var searchButton = document.querySelector('.button-search')
var searchField = document.querySelector('.query');
var header = document.querySelector('.header');
var results = document.querySelector('.search-results');
var closeButton = document.querySelector('.bar.search .button-reset');
var backButton = document.querySelector('.bar.search .button-close');

var ieCompat = function() {
	if (/MSIE|Edge\/\d./i.test(navigator.userAgent)) {
		document.querySelector('body').classList.add('no-csstransforms3d');
		searchButton.removeEventListener('click', focusField);
	}
};

// Adds pages and triggers building of index
var downloadPages = function() {
	var script = document.createElement('script');
	script.src = "/lunr_idx.js";
	script.onload = buildIndex;
	document.body.appendChild(script);
};

var buildIndex = function() {
	idx = lunr(function () {
	  this.ref('url');
	  this.field('name');
	  this.field('text');
	  this.metadataWhitelist = ['position'];

	  documents.forEach(function (doc) {
		this.add(doc);
	  }, this);
	});
};

var closeResults = function(e) {
	header.classList.remove('search-results-open');
	closeButton.classList.remove('search-btn-close-visible');
	results.innerHTML = '';
	searchField.value = '';
};

var buildText = function(text, pos, len) {
	pos = pos||0;
	len = len||0;
	var extractStart = pos - 90;
	var extractEnd = pos + len + 90;

	var begin = (extractStart < 0 ? '' : '...') + text.substring(extractStart, pos);
	var end = text.substring(pos + len, extractEnd) + (extractEnd > text.length ? '' : '...');
	var sw =  text.substring(pos, pos + len);

	return begin + '<span class="highlight-search">' + sw + '</span>' + end;
};

var onSearchKeydown = function(e) {
	if (idx === undefined)
		return;

	if (e.keyCode == 27)
		closeResults();

	if (e.keyCode != 13)
		return;

	var query = searchField.value;
	var res = idx.search(query);

	header.classList.add('search-results-open');
	closeButton.classList.add('search-btn-close-visible');
	results.innerHTML = '';
	res.forEach(function(v) {
		var mdata = v.matchData.metadata;
		var match = Object.keys(mdata)[0];
		var part = Object.keys(mdata[match])[0];
		var pos = mdata[match][part].position[0];

		var page = documents.filter(function(elem) { return elem.url == v.ref; })[0];

		var link = document.createElement('a');
		link.href = page.url;
		var h2 = document.createElement('h2');
		h2.innerHTML = part == 'name' ? buildText(page.name, pos[0], pos[1]) : buildText(page.name);
		link.appendChild(h2);

		var p = document.createElement('p');
		p.innerHTML = part == 'text' ? buildText(page.text, pos[0], pos[1]) : buildText(page.text);
		link.appendChild(p);

		results.appendChild(link);
	});

	if (res.length == 0) {
		var cont = document.createElement('div');
		var h2 = document.createElement('h2');
		h2.innerHTML = 'Keine Suchergebnisse';
		cont.appendChild(h2);
		results.appendChild(cont);
	}
};

var onSearchChange = function() {
	if (searchField.value == '')
		closeResults();
};

var focusField = function() {
	searchField.select();
};

addEventListener('load', ieCompat);
addEventListener('load', downloadPages);
searchField.addEventListener('keydown', onSearchKeydown);
searchField.addEventListener('input', onSearchChange);
closeButton.addEventListener('click', closeResults);
backButton.addEventListener('click', closeResults);
searchButton.addEventListener('click', focusField);
