$(document).ready(function() {

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
				`<label class="checkbox-container"><input type="checkbox" value=${item.isCorrect}>${item.sentence}<span class="checkmark"></span></label>`
			)).join('');
		}
		$('.tick-checkbox').append(`${$arraySent}`);

		/*$('.tick-checkbox input').prop('checked', false).removeClass('error correct');*/

	});
	$('#new-tick').click();
	$('#button-pairs1').click();

});/*ready*/

