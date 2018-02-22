(function($){

	var methods = {
		init: function (options) {
			return this.each(function () {
				var settings = $.extend(
					{}, options);
				var $arrayQ = [],
					$arrayR = [],
					$arrayS = [],
					$arrayA = [],
					$indexArr = [],
					$rand,
					$index,
					$array,
					$questions,
					$answers;
				var firstId, first,
					secondId, second;
				var $container = settings.container,
					$button = settings.button;
				$container.html('');
				var $first = $container.find('.first-part');
				var $second = $container.find('.second-part');
				$(this).addClass('match');
				$that = $(this);

				function isInArray(array, search) {
					return array.indexOf(search) >= 0;
				};

				function compareRandom(a, b) {
					return Math.random() - 0.5;
				}

				var getValueRu = function (item, index) {
					var fullValue = {id: index, title: item.en}
					return fullValue;
				};
				var getValueEn = function (item, index) {
					var fullValue = {id: index, title: item.ru}
					return fullValue;
				};
				var getButtons = function () {
					$first = $container.find('.first-part');
					$second = $container.find('.second-part');
					
					$first.on('click', function () {
						firstId = $(this).attr('data-Id');
						first = $(this);
						first.addClass('first');
						var text = $(this).text();
						if ($('body').hasClass('sound')) {
							responsiveVoice.speak("" + text + "");
						}

					});

					$second.on('click', function () {
						secondId = $(this).attr('data-Id');
						second = $(this);
						if (firstId == secondId) {
							second.addClass('hide');
							first.removeClass('first');
							first.addClass('hide');
							if ($('body').hasClass('sound')) {
								responsiveVoice.speak("" + $(this).text() + "");
							}
						}
					});
				};
				$questions = settings.data.map(getValueRu);
				$answers = settings.data.map(getValueEn);

				$button.click(function (e) {
					$container.html('');
					$arrayQ = [];
					$arrayA= [];
					$arrayR = [];
					$arrayS = [];
					$indexArr = [];

					for (var i = 0; i <= 10; i++) {
						$index = Math.floor(Math.random() * settings.data.length);
						if (!isInArray($indexArr, $index)) {
							$rand = $questions[$index];
							$arrayS.push($rand);
							$indexArr.push($index);
						}
					}
					for (var i = 0; i < $indexArr.length; i++) {
						$arrayR.push($answers[$indexArr[i]]);
					}

					$arrayS.sort(compareRandom);

					$arrayQ = $arrayS.map((item) => (
						`<button class="first-part" data-Id=${item.id}>${item.title}</button><br/>`
					)).join('');
					$arrayA = $arrayR.map((item) => (
						`<button class="second-part" data-Id=${item.id}>${item.title}</button><br/>`
					)).join('');
					$container.append(`<div class='answers'>${$arrayQ}</div>`);
					$container.append(`<div class='questions'>${$arrayA}</div>`);
					getButtons();

				});


			});
		},

		update :  function () {
			return this.each(function () {
			});
		},
		destroy : function( ) {
			return this.each(function(){
				$(this).unbind('match');
				$(this).removeClass('match');
			})
		},
	};

	/*apply*/
	$.fn.match = function( method ) {
		if ( methods[method] ) {
			return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'Метод с именем ' +  method + ' не существует для jQuery.match' );
		}
	};


})(jQuery);