var idx = undefined;

const searchButton = document.querySelector('.button-search')
const searchField = document.querySelector('.query');
const header = document.querySelector('.header');
const results = document.querySelector('.search-results');
const closeButton = document.querySelector('.bar.search .button-reset');

// Adds pages and triggers building of index
const downloadPages = function() {
	let script = document.createElement('script');
	script.src = "/lunr_idx.js";
	script.onload = buildIndex;
	document.body.appendChild(script);
};

const buildIndex = function() {
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

const closeResults = function(e) {
	header.classList.remove('search-results-open');
	closeButton.classList.remove('search-btn-close-visible');
	results.innerHTML = '';
	searchField.value = '';
};

const buildText = function(text, pos=0, len=0) {
	let extractStart = pos - 90;
	let extractEnd = pos + len + 90;

	let begin = (extractStart < 0 ? '' : '...') + text.substring(extractStart, pos);
	let end = text.substring(pos + len, extractEnd) + (extractEnd > text.length ? '' : '...');
	let sw =  text.substring(pos, pos + len);

	return begin + '<span class="highlight-search">' + sw + '</span>' + end;
};

const onSearchKeydown = function(e) {
	if (idx === undefined)
		return;

	if (e.keyCode == 27)
		closeResults();

	if (e.keyCode != 13)
		return;

	let query = searchField.value;
	var res = idx.search(query);

	header.classList.add('search-results-open');
	closeButton.classList.add('search-btn-close-visible');
	results.innerHTML = '';
	res.forEach(function(v) {
		let mdata = v.matchData.metadata;
		let match = Object.keys(mdata)[0];
		let part = Object.keys(mdata[match])[0];
		let pos = mdata[match][part].position[0];

		let page = documents.filter(function(elem) { return elem.url == v.ref; })[0];

		let cont = document.createElement('div');
		let h2 = document.createElement('h2');
		let link = document.createElement('a');
		link.href = page.url;
		link.innerHTML = part == 'name' ? buildText(page.name, pos[0], pos[1]) : buildText(page.name);
		h2.appendChild(link);
		cont.appendChild(h2);

		let p = document.createElement('p');
		p.innerHTML = part == 'text' ? buildText(page.text, pos[0], pos[1]) : buildText(page.text);
		cont.appendChild(p);

		results.appendChild(cont);
	});

	if (res.length == 0) {
		let cont = document.createElement('div');
		let h2 = document.createElement('h2');
		h2.innerHTML = 'Keine Suchergebnisse';
		cont.appendChild(h2);
		results.appendChild(cont);
	}
};

const onSearchChange = function() {
	if (searchField.value == '')
		closeResults();
};

const focusField = function() {
	searchField.select();
};

addEventListener('load', downloadPages);
searchField.addEventListener('keydown', onSearchKeydown);
searchField.addEventListener('input', onSearchChange);
closeButton.addEventListener('click', closeResults);
searchButton.addEventListener('click', focusField);
