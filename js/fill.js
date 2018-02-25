$(document).ready(function() {	
	
	var dragDropEx = function() {
		var arrayDrag = [];
		var arrayDrop = [];
		var indexArr = [];
		var rand, index;
		var array;
		var index = Math.floor(Math.random() * dragDrop.length) + 0;
		var dragDropArr = dragDrop[index];

		$('#drag-drop').html('');
		$('.fill-gaps .drag-drop_buttons').html('');


		arrayDrag = dragDropArr.map((item, index) =>(
			`<div class="text">
				<div>${item.first}</div>
				<div class="drop" id="drop${index}" ondrop="drop(event)" ondragover="allowDrop(event)" data-id="${item.drop}"></div>
				<div>${item.last}</div>
			</div>`
		)).join('');

		arrayDrop = dragDropArr.map((item, index) =>(
			`<button class="drag" id="drag${index}"  draggable="true" data-id="${item.drop}"
					ondragstart="drag(event)">${item.drop}</button>`
		));
		arrayDrop.sort(compareRandom);
		var arrayDropR = arrayDrop.map((item, index) =>(item)).join('');
		$('#drag-drop').append(`<div class='answers'>${arrayDrag}</div>`);
		$('.drag-drop_buttons').append(`<div class='questions'>${arrayDropR}</div>`);

	};

	$('#button-fill').on('click', function() {
		dragDropEx();
	});

	dragDropEx();		


});/*ready*/

