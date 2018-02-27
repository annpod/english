$(document).ready(function() {

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
	$(".preposition-text select").on('change',function() {
		$(this).removeClass('error');
		$(this).removeClass('right');
	});


});/*ready*/


