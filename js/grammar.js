$(document).ready(function() {
	var world,
		answer,
		translation,		
		language;
	var i = 0;
	var questions = [];
	var answers = [];
	$('#error').hide();

	function compareRandom(a, b) {
		return Math.random() - 0.5;
	}

	
	$( "#button-sentence" ).on( "click", function() {
		newSentence();
	});	
	
	var sentence, splitSentence, rightSentence, translationSent;	
	var newSentence = function() {
		var arrayS = [];
		$('.dropme').html('');
		var i = Math.floor(Math.random() * sentences.length);
		sentence = sentences[i].title;
		translationSent = sentences[i].translation;
		splitSentence = sentence.split(" ");
		rightSentence = sentence.split(" ");
		splitSentence.sort(compareRandom);
		
		arrayHtml = splitSentence.map((item) =>(
			`<li>${item}</li>`
		)).join('');
		$('.dropme').append(arrayHtml);			
		$('.dropme').dropme('enable');	
	}	
	newSentence();


	$('#button-check').on('click', function(){
		var sentenceNew = [];
		for (i=0;i<splitSentence.length;i++) {
			sentenceNew.push($('.dropme li').eq(i).text());		
		}
		if(rightSentence.length == sentenceNew.length && rightSentence.every((v,i)=> v === sentenceNew[i])){
			$('.dropme li').removeClass('error');
			$('.dropme li').addClass('right');
			if ($('body').hasClass('sound')) {
				responsiveVoice.speak("" + rightSentence + "");
			}
		} else {
			$('.dropme li').addClass('error');
		}

	});
	
	$('#button-translation').on('click', function(){
		$('#translation').text(translationSent);
	});


	/*drag & drop*/
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
				<div class="drop" id="drop${index}" ondrop="drop(event)" ondragover="allowDrop(event)" data-id="${index}"></div>
				<div>${item.last}</div>
			</div>`
		)).join('');

		arrayDrop = dragDropArr.map((item, index) =>(
			`<button class="drag" id="drag${index}"  draggable="true" data-id="${index}"
					ondragstart="drag(event)">${item.drop}</button>`
		));
		arrayDrop.sort();
		var arrayDropR = arrayDrop.map((item, index) =>(item)).join('');
		$('#drag-drop').append(`<div class='answers'>${arrayDrag}</div>`);
		$('.drag-drop_buttons').append(`<div class='questions'>${arrayDropR}</div>`);

	};

	$('#button-fill').on('click', function() {
		dragDropEx();
	});

	dragDropEx();

		var dragDropTextEx = function() {
		var arrayDrag = [];
		var arrayDrop = [];
		var indexArr = [];
		var rand, index;
		var array;
		var index = Math.floor(Math.random() * dragDropText.length) + 0;
		var dragDropArr = dragDropText[index];
		$('#drag-drop_text').html('');
		$('.fill-gaps .drag-drop_text-buttons').html('');


		arrayDrag = dragDropArr.map((item, index) =>(
			`<span class="text">
				<span>${item.first}</span>
				<span class="drop" id="drop${index+600}" ondrop="drop(event)" ondragover="allowDrop(event)" data-id="${index+600}"></span>
				<span>${item.last}</span>
			</span>`
		)).join('');

		arrayDrop = dragDropArr.map((item, index) =>(
			`<button class="drag" id="drag${index+600}"  draggable="true" data-id="${index+600}"
					ondragstart="drag(event)">${item.drop}</button>`
		));
		arrayDrop.sort();
		var arrayDropR = arrayDrop.map((item, index) =>(item)).join('');
		$('#drag-drop_text').append(`<div class='answers'>${arrayDrag}</div>`);
		$('.drag-drop_text-buttons').append(`<div class='questions'>${arrayDropR}</div>`);

	};

	$('#new-text').on('click', function() {
		dragDropTextEx();
	});

	/*dragDropTextEx();*/

	$('#button-tick').on('click', function() {
		var $checked = $('.tick-checkbox input');
		 $checked.each(function(){
			if (($(this).prop('checked') & $(this).val() == 1) || (!$(this).prop('checked') & $(this).val() == 0) ) {
				$(this).parent().removeClass('error');
				$(this).parent().addClass('correct');
			} else {
				$(this).parent().removeClass('correct');
				$(this).parent().addClass('error');
			}
		})
	});

	$('#new-tick').on('click', function() {
		var index = Math.floor(Math.random() * correctSentence.length) + 0;
		var $sentence = correctSentence[index];
		var $arraySent= [];

		$('.tick-checkbox').html('');

		for (var i = 0; i < $sentence.length; i++) {
			$arraySent = $sentence.map((item) => (
				`<label class="checkbox-container"><input type="checkbox" value=${item.isCorrect}>${item.sentence}<span class="checkmark"></span></label><br/>`
			)).join('');
		}
		$('.tick-checkbox').append(`${$arraySent}`);

		/*$('.tick-checkbox input').prop('checked', false).removeClass('error correct');*/

	});
	$('#questions1').match({
		data: arrayPairs,
		container: $('#questions1'),
		button: $('#button-pairs1')
	});
	$('#new-tick').click();
	$('#button-pairs1').click();


});/*ready*/




