$(document).ready(function() {
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


