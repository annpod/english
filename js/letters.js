(function($){

	var methods = {
		init: function (options) {
			return this.each(function () {
				var settings = $.extend(
					{}, options);

				var $index,
				$arraySort = [],
				$array = settings.data,
				$button = settings.button,
				$container = settings.container;
				$buttonSpeak = $('#button-speak-letters');
				function compareRandom(a, b) {
					return Math.random() - 0.5;
				}
				$container.html('');
				$button.unbind();
				$buttonSpeak.unbind();
				$(this).addClass('letters');
				var $that = $(this);

				var $world = '',
					$lettersArray = [],
					$index = 0;
console.log('init');
console.log($world);
				$button.click(function (e) {
					$container.html('');
					$world = '';
					var $arrayL = [];
					var $lettersArray =[];
					var $arrayEmpty =[];

					/*$index = Math.floor(Math.random() * $array.length);*/
					$world = $array[$index].en;
					for (var i = 0; i < $world.length; i++) {
						$lettersArray.push($world.substring(i, i+1));
					}
					$index++;
					if ($index == $array.length){
						$index = 0;
					}	

					$arrayEmpty = $lettersArray.map((item, index) => (
						`<div class="empty-item drop" id="drop20${index}" data-id=${index} ondrop="drop(event)" ondragover="allowDrop(event)"></div>`
					)).join('');

					$arrayL = $lettersArray.map((item, index) => (
						`<button class="letter-item drag" id="drag20${index}" data-id=${index} draggable="true" ondragstart="drag(event)">${item}</button>`
					));					
					$arrayL.sort(compareRandom);
					var $arrayLR = $arrayL.map((item, index) =>(item)).join('');
					$container.append(`<div class='empty-letter'>${$arrayEmpty}</div>`);
					$container.append(`<div class='letter'>${$arrayLR}</div>`);
					/*$('.empty-letter .empty-item')*/
					
				});

				$buttonSpeak.click(function () {
					if ($('body').hasClass('sound')) {
						if ($world) {
							responsiveVoice.speak("" + $world + "");
						} else {
							responsiveVoice.speak("choose new word");
						}
					}
				});
			})
		},

		update :  function () {
			return this.each(function () {
			});
		},
		destroy : function( ) {
			return this.each(function(){
				$(this).unbind('letters');
				$(this).removeClass('letters');
			})
		},
	};

	/*apply*/
	$.fn.letters = function( method ) {
		if ( methods[method] ) {
			return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'Метод с именем ' +  method + ' не существует для jQuery.match' );
		}
	};


})(jQuery);
