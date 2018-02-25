$(document).ready(function() {
	var world,
		answer,
		translation,		
		language;
	var i = 0;
	var arr = arrays[0];
	var questions = [];
	var answers = [];
	$('#error').hide();

	function compareRandom(a, b) {
		return Math.random() - 0.5;
	}

	
	$('#button-sound').on('click', function() {
		$(this).toggleClass('no-sound');
		$('body').toggleClass('sound');
		$('.button-speak').toggleClass('disable');
	});
	
	$(".preposition-text select").on('change',function() {
		$(this).removeClass('error');
		$(this).removeClass('right');
	});


	$( "#button-pairs" ).on( "click", function() {
		/*newPairs();*/
	});
	

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

	dragDropTextEx();

	/*select*/



	/* $('#button').on('click', function(){
        var text = $('input#answer').val();
        responsiveVoice.speak("" + text +"");
       
	});*/
	/**/

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
	$('#new-tick').click();
	$('#button-pairs1').click();


	/*verbs*/
	var newVerbs = function() {
		var verbsArr = irrVerbs;
		var index = Math.floor(Math.random() * verbsArr.length) + 0;
		$(".input-verbs").val("");
		$(".input-verbs").removeClass('error');
		$('.verb-result').removeClass('correct error');
		$('#form1').focus();
		$('#verb-translation').text(verbsArr[index].translation);

		$("#form-verbs").on('submit', function(e) {
			e.preventDefault();
			console.log('verbsArr',verbsArr);
			$(".input-verbs").removeClass('error');
			if ($('#form1').val() !== verbsArr[index].form1){
				$('#form1').addClass('error');
			}
			if ($('#form2').val() !== verbsArr[index].form2){
				$('#form2').addClass('error');
			}
			if ($('#form3').val() !== verbsArr[index].form3){
				$('#form3').addClass('error');
			}

			if ($( ".input-verbs" ).hasClass( "error" )){
				$('.verb-result').addClass('error');
			} else {
				$('.verb-result').removeClass('error');
				$('.verb-result').addClass('correct');
				setTimeout(function(){  newVerbs(); }, 1500);
			}
		})
	}
	$(".input-verbs").on('focus', function() {
		$(this).removeClass('error');
	});
	$("#button-verb").on('click', function() {
		newVerbs();
	});

newVerbs();


});/*ready*/





/*drag&drop*/
var answerDrag,
	questionDrag;

function allowDrop(ev) {
	ev.preventDefault();
}

function drag(ev) {
	ev.dataTransfer.setData("text", ev.target.id);
	answerDrag = $(ev.target).data("id");
}

function drop(ev) {
	ev.preventDefault();

	var data = ev.dataTransfer.getData("text");
	var text = $("#"+data).text();
	questionDrag =  $(ev.target).data("id");
	if(questionDrag === answerDrag) {
		ev.target.appendChild(document.getElementById(data));
		if ($('body').hasClass('sound')) {
			responsiveVoice.speak("" + text + "");
		}
	}
}
/*tabs*/
function openTab(evt, tabName) {
	var i, tabcontent, tablinks;

	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";
}