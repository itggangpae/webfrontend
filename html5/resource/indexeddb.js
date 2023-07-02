function initiate() {
	databox = document.getElementById('databox');

	window.indexedDB = window.indexedDB || window.mozIndexedDB
			|| window.webkitIndexedDB || window.msIndexedDB;
	window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
	window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange
	window.IDBCursor = window.IDBCursor || window.webkitIDBCursor || window.msIDBCursor

	openDB = indexedDB.open('mydb', 1);
	openDB.onupgradeneeded = function() {
	    var db = {}
	    db.result = openDB.result;
	    db.store = db.result.createObjectStore('movies', {
			keyPath : 'id'
		});
	    db.index = db.store.createIndex('SearchYear', 'date', {
			unique : false
		});
	};
	  
	var button = document.getElementById('save');
	button.addEventListener('click', addobject, false);
	  
	openDB.onsuccess = function(){		
		show()
	}
}
window.addEventListener('load', initiate, false);

function addobject(){
	var keyword=document.getElementById('keyword').value;
	var title=document.getElementById('text').value;
	var year=document.getElementById('year').value;
	  
	var db = {};
	db.result = openDB.result;
	db.tx = db.result.transaction("movies", "readwrite");
	db.store = db.tx.objectStore("movies");
	var request=db.store.add({id: keyword, name: title
		  , date: year});
	//request.addEventListener('success', function(){ show(keyword) }, false);
	document.getElementById('keyword').value='';
	document.getElementById('text').value='';
	document.getElementById('year').value='';
	show()
}

function show() {
	databox.innerHTML =''
	var db = {};
	db.result = openDB.result;
	db.tx = db.result.transaction("movies", "readwrite");

	var objectstore = db.tx.objectStore('movies');
	var cursor = objectstore.openCursor()
	cursor.addEventListener("success", function(e){
		var cur = e.result || e.target.result
		if(cur){
			console.log(cur.value)
			databox.innerHTML +='<div>'+cur.value.id+' - '+cur.value.name+' - '+cur.value.date +
			'<button onclick="remove(\''+cur.value.id+'\')">remove</button></div>';  
			cur.continue()
		}
	})
}

function remove(keyword){
	if(confirm('Are you sure?')){
		var db = {};
		db.result = openDB.result;
		db.tx = db.result.transaction("movies", "readwrite");
		db.store = db.tx.objectStore("movies");
	    var request=db.store.delete(keyword);
	    request.addEventListener('success', show, false);
	}
}