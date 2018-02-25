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

	var newPairs = function(arr) {
		$('#questions').match({
			data: arr,
			container: $('#questions'),
			button: $('#button-pairs')
		});
	};
	
	var newLetters = function(arr) {
		$('#letters').letters({
			data: arr,
			container: $('#letters'),
			button: $('#button-letters')
		});
	}

	newLetters(arr);
	newPairs(arr);

	var setData = function(newArr) {
		arr = newArr;
		var getValueRu = function (item, index) {
			var fullValue = {id: index, title: item.ru}
			return fullValue;
		}
		var getValueEn = function (item, index) {
			var fullValue = {id: index, title: item.en}
			return fullValue;
		}
		questions = arr.map(getValueRu);
		answers = arr.map(getValueEn);
		newQuestion();
		newPairs(arr);
		newLetters(arr);
	}


	var newQuestion = function() {
		$('#error').hide();
		$('#answer').val('');
		$('.answer-result').removeClass('correct error');
		//i = Math.floor(Math.random() * arr.length) + 0;		
		
		if (i >= arr.length) {
			i = 0;
			};
		if ( language == "en" ) {
			world = arr[i].en;
			translation = arr[i].ru;
		} else {
			world = arr[i].ru;
			translation = arr[i].en;
		}			
		
		$('#world').text(world);
		i = i + 1;
	};
	/*setData(arr);*/
	newQuestion(arr);

	$('#button-speak').on('click', function() {
		if ($('body').hasClass('sound')) {
			responsiveVoice.speak("" + translation + "");
		}
	});
	
	$('input#answer').on('input',function(e){
	 $(this).removeClass('error');
	});

	$('#language').on('change', function() {
		language = $(this).find(":selected").val();
		newQuestion();
	});

	 
	$( "#form" ).submit(function( event ) {	 
	  event.preventDefault();
		$('.answer-result').removeClass('correct error');
	  var answer = $('#answer').val();
	  
	  if (answer == translation) {
		  $('.answer-result').addClass('correct');
			setTimeout(function(){  newQuestion(); }, 1500);	 

	  } else {
		  $('.answer-result').addClass('error');
		  $('#answer').addClass('error');
	  }

	var text = $('input#answer').val();
		if ($('body').hasClass('sound')) {
			responsiveVoice.speak("" + text + "");
		}
	});	

	$( "#button-answer" ).on( "click", function() {
		$('#right-answer').text(translation);
	});
	$( "#button-next" ).on( "click", function() {
		$('#right-answer').text('');
		newQuestion();	
	});

	/**/
	$('#button-select').on('click', function() {
		var $preposition = $(".preposition-text select");
		$preposition.each(function () {
			if($(this).attr('data-val') == $(this).val()) {
				$(this).removeClass('error');
				$(this).addClass('right');
			} else {
				$(this).removeClass('right');
				$(this).addClass('error');
			}
		})
	});
	
	/*var selectValues = { "3": "lessons", "4": "flat"};*/
	$.each(selectValues, function(key, value) {
		$('#set')
		.append($("<option></option>")
		.attr("value",key)
		.text(value));
	});

	$('#set').on("change", function() {
		var id = $(this).val();
		var arr1 = arrays[id];
		setData(arr1);
	})

	$('#questions1').match({
		data: arrayPairs,
		container: $('#questions1'),
		button: $('#button-pairs1')
	});

	$('#questions').match({
		data: arrays[0],
		container: $('#questions'),
		button: $('#button-pairs')
	});
});/*ready*/

