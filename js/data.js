var selectValues = {
	"0": "lessons/урок",
	"1": "flat/дім",
	"2": "food/їжа",
	"3": "numbers/цифри",
	"4": "family/родина",
	"5": "professions/професії",
	"6": "colors/кольори",
	"7": "verbs/дієслова",
	"8": "body/тіло",
	"9": "adjectives/прийменники",
	"10": "meal/прийняття їжі",
	"11": "adverbs/прислівники"

};

var arrays = [
	[
		{en:"Maths",ru:"Математика"},
		{en:"English",ru:"Англійська мова"},
		{en:"Art",ru:"Малювання"},
		{en:"Music",ru:"Музика"},
		{en:"Sport",ru:"Фіз-ра"}		
	],
	[
		{en:"house",ru:"дім"},
		{en:"flat",ru:"квартира"},
		{en:"kitchen",ru:"кухня"},
		{en:"bathroom",ru:"ванна"},
		{en:"bedroom",ru:"спальня"},
		{en:"living-room",ru:"зал"}		
	],	
	[
		{en:"cucumber",ru:"огірок"},
		{en:"cabbage",ru:"капуста"},
		{en:"carrot",ru:"морква"},
		{en:"onion",ru:"цибуля"},
		{en:"tomato",ru:"помідор"},
		{en:"apple",ru:"яблуко"},
		{en:"banana",ru:"банан"},
		{en:"lemon",ru:"лимон"},
		{en:"cream",ru:"вершки"},
		{en:"butter",ru:"хліб"},
		{en:"cheese",ru:"сир"},
		{en:"oil",ru:"олія"},
		{en:"hamburger",ru:"гамбургер"},
		{en:"sausage",ru:"ковбаса/сисиска"},
		{en:"toast",ru:"тост/грынка"},
		{en:"jam",ru:"джем/варкння"}
	],[
	{en:"one",ru:"один"},	
		{en:"two",ru:"два"},	
		{en:"three",ru:"три"},	
		{en:"four",ru:"чотири"},	
		{en:"five",ru:"п'ять"},	
		{en:"six",ru:"шість"},	
		{en:"seven",ru:"сім"},	
		{en:"eight",ru:"вісім"},	
		{en:"nine",ru:"дев'ть"},	
		{en:"ten",ru:"десять"},	
		{en:"eleven",ru:"одинадцять"},	
		{en:"twelve",ru:"дванадцять"},	
		{en:"thirteen",ru:"тринадцять"},	
		{en:"fourteen",ru:"чотирнадцять"},	
		{en:"fifteen",ru:"п'ятнадцять"},	
		{en:"sixteen",ru:"шістнадцять"},	
		{en:"seventeen",ru:"сімнадцять"},	
		{en:"eighteen",ru:"вісімнадцять"},	
		{en:"nineteen",ru:"дев'ятнадцять"},	
		{en:"twenty",ru:"двадцять"},	
	],[
		{en:"mother",ru:"мама"},
		{en:"father",ru:"папа"},
		{en:"parents",ru:"батьки"},
		{en:"grandparents",ru:"бабуся і дідусь"},
		{en:"cousin",ru:"двоюрідний брат"},
		{en:"son",ru:"син"},
		{en:"sister",ru:"сестра"},
		{en:"brother",ru:"брат"},
		{en:"family",ru:"родина"},
		{en:"uncle",ru:"дядько"},
		{en:"aunt",ru:"тітка"},
		{en:"grandmother",ru:"бабуся"},
		{en:"grandfather",ru:"дідусь"}
	],[
		{en:"builder",ru:"будівельник"},
		{en:"teacher",ru:"вчитель"},
		{en:"doctor",ru:"лікар"},
		{en:"driver",ru:"водій"},
		{en:"programmer",ru:"програміст"}
	],[
		{en:"red",ru:"червоний"},
		{en:"blue",ru:"блакитний"},
		{en:"white",ru:"білий"},
		{en:"black",ru:"чорний"},
		{en:"green",ru:"зелений"},
		{en:"brown",ru:"коричневий"},
		{en:"orange",ru:"помаранчевий"},
		{en:"yellow",ru:"жовтий"},
		{en:"pink",ru:"рожевий"},
	],[
		/*{en:"look",ru:"дивитись"},
		{en:"circle",ru:"обводити"},
		{en:"read",ru:"читати"},
		{en:"match",ru:"з'єднати"},
		{en:"write",ru:"писати"},
		{en:"reply",ru:"повторювати"},
		{en:"fill in",ru:"заповнити"},
		{en:"cross out",ru:"викреслити"},
		{en:"complete",ru:"закінчити"},
		{en:"make up",ru:"придумати"},
		{en:"colour",ru:"фарбувати"},
		{en:"draw",ru:"малювати"},
		{en:"say",ru:"говорити"},
		{en:"find",ru:"знайти"},
		{en:"underline",ru:"пидкреслювати"},
		{en:"answer",ru:"відповідь"},
		{en:"remember",ru:"пам'ятати"},
		{en:"ask",ru:"питати"},
		{en:"do sums",ru:"рахувати"},
		{en:"point",ru:"нумеровати"},
		{en:"tell",ru:"розповідати"},
		{en:"find out",ru:"дізнатися"}*/
		{en:"eat",ru:"їсти"},
		{en:"drink",ru:"пити"},
		{en:"cook",ru:"готувати"},
		{en:"make",ru:"робити/сделать"},

	],[
		{en:"eye",ru:"око"},
		{en:"ear",ru:"вухо"},
		{en:"arm",ru:"рука"},
		{en:"hand",ru:"кість руки"},
		{en:"leg",ru:"нога"},
		{en:"foot",ru:"ступня"},
		{en:"mouth",ru:"рот"},
		{en:"head",ru:"голова"},
		{en:"face",ru:"лице"},
		{en:"toes",ru:"пальці"},
		{en:"nose",ru:"нос"},
		{en:"tail",ru:"хвіст"},
		{en:"neck",ru:"шия"},
		{en:"body",ru:"тіло"},
		{en:"chest",ru:"груди"},
		{en:"knee",ru:"коліно"},
		{en:"hair",ru:"волосся"},
		{en:"finger",ru:"палець"}
	],[
		{en:"short",ru:"короткий"},
		{en:"small",ru:"малий"},
		{en:"long",ru:"длинний"},
		{en:"climb",ru:"лазити"},
		{en:"mouse",ru:"миша"},
		{en:"crocodile",ru:"крокодил"},
		{en:"giraffe",ru:"жираф"},
		{en:"hamster",ru:"хом'як"},
		{en:"walk",ru:"гуляти"},
		{en:"run",ru:"бігати"},
		{en:"jump",ru:"стрибати"},
	],[
		{en:"breakfast",ru:"сніданок"},
		{en:"dinner",ru:"обід"},
		{en:"supper",ru:"вечеря"},
	],[
		{en:"usually",ru:"зазвичай"},
		{en:"always",ru:"завжди"},
		{en:"sometimes",ru:"іноді"},
		{en:"never",ru:"ніколи"}
	]


]


var dragDrop = [
	[
		{first: "I like to",drop:"read",last:"books."},
		{first: "I like to",drop:"listen to",last:"music."},
		{first: "I don't like to",drop:"clean",last:"my room."},
		{first: "Can you",drop:"open",last:"the window?"},
		{first: "Let's",drop:"go",last:"to school."},
		{first: "I am",drop:"from",last:"Ukraine."},
		{first: "You can",drop:"eat",last:"in cafe."},
	],[
		{first: "You can",drop:"swim",last:"in a swimming pool."},
		{first: "You can",drop:"jump and run",last:"on a sport ground."},
		{first: "You can",drop:"meet, sing and dance",last:"in a party hall."},
		{first: "Can you",drop:"spell",last:"words?"},
		{first: "Let's",drop:"play",last:"games."},
		{first: "I don't like",drop:"playing",last:"football."},
		{first: "I like",drop:"ridding",last:"a bike."},
	],[
		{first: "Can you",drop:"swim",last:"in a swimming pool."},
		{first: "I don't",drop:"like",last:"clean my room."},
		{first: "My mum ",drop:"can",last:"cook."},
		{first: "Every weekday I",drop:"go",last:"to school."},
		{first: "I don't",drop:"need",last:"any help."},
		{first: "I",drop:"read",last:" a book."},
		{first: "I",drop:"write",last:"a word."},
	],[
		{first: "You can",drop:"swim",last:"in a swimming pool."},
		{first: "You can",drop:"jump and run",last:"on a sport ground."},
		{first: "You can",drop:"meet, sing and dance",last:"in a party hall."},
		{first: "Can you",drop:"spell",last:"words?"},
		{first: "Let's",drop:"play",last:"games."},
		{first: "I don't like",drop:"playing",last:"football."},
		{first: "I like",drop:"ridding",last:"a bike."},
	]
]

var sentences=[
	{id:1,title:"What do you do?",translation:"Що ти робиш?"},
	{id:2,title:"What is your name?",translation:"Як тебя зовуть?"},
	{id:3,title:"How old are you?",translation:"Скільки тобі років?"},
	{id:4,title:"Where are you from?",translation:"Звідки ти?"},
	{id:5,title:"Can you help me?",translation:"Можеш мені допомогти?"},
	{id:6,title:"How are you?",translation:"Як справи?"},
	{id:7,title:"How is your mother?",translation:"Як справи у твоєї мами?"},
	{id:8,title:"How is your father?",translation:"Як справи у твого тата?"},
	{id:9,title:"What do you like to do?",translation:"Що ти любиш робити?"},
	{id:10,title:"Can you open your eyes?",translation:"Можешь відкрити очі?"},
	{id:11,title:"Do you like playing games?",translation:"Тобі подобається грати в ігри?"},
	{id:12,title:"Can you cook?",translation:"Ти можешь готувати?"},
	{id:13,title:"I like playing computer games.",translation:"Мені подобається грати в ігри."},
	{id:14,title:"I can read.",translation:"Я можу читати."},
	{id:15,title:"Let's go to school.",translation:"Давай підемо до школи."},
	{id:16,title:"What time is it?",translation:"Котра година?"},
	{id:17,title:"My name is Denis.",translation:"Мене звати Денис."},
	{id:18,title:"I'm ten years old?",translation:"Мені 10 років."},
	{id:19,title:"I'm from Ukraine.",translation:"Я з України."},
	{id:20,title:"He can swim and run.",translation:"Він може плавати і бігати."},
	{id:22,title:"I like dancing and singing.",translation:"Мені подобається танцювати і співати."},
	{id:23,title:"It is 6o'clock in the morning.",translation:"Зараз 6 година ранку."},
	{id:24,title:"Mike never goes to bed before 9 oc'lock.",translation:"Майк ніколи не лягає спати раніше 9 години."},
	{id:25,title:"Mum usually cooks pizza on Sunday.",translation:"Мама зазвичай готує піцу у неділю."},
]


var arrayPairs = [
	{en:"What do you do?", ru:"I am a pupil."},
	{en:"What is your name?", ru:"My name is Denis."},
	{en:"How old are you?", ru:"I am ten."},
	{en:"Where are you from?", ru:"I am from Ukraine."},
	{en:"Can you help me?", ru:"Yes, I can."},
	{en:"How are you?", ru:"I'm fine."},
	{en:"How is your mother?", ru:"She's fine."},
	{en:"How is your father?", ru:"He's fine."},
	{en:"What do you like to do?", ru:"I like playing computer games."},
	{en:"Can you open your eyes?", ru:"Yes, I can."},
	{en:"Do you like playing games?", ru:"Yes, I do."},
	{en:"Can you cook?", ru:"No, I can't."},
	{en:"What time is it?", ru:"It is 6 o'clock in the morning."},
	{en:"What is it about?", ru:"It is about Dunno on the Moon."},
	{en:"Pass me some bread, please", ru:"Here you are."},
	{en:"Some juice, please.", ru:"Apple or orange?"},
	/*{first:"jump", second:"стрибати"},
	{first:"jump", second:"стрибати"},*/

	]

var correctSentence = [
	[
		{id:1,sentence:"What do you do?",isCorrect:"1"},
		{id:2,sentence:"What does you do?",isCorrect:"0"},
		{id:3,sentence:"What does he do?",isCorrect:"1"},
		{id:4,sentence:"What do she do?",isCorrect:"0"},
		{id:5,sentence:"What is time it?",isCorrect:"0"},
		{id:6,sentence:"What time is it?",isCorrect:"1"},
		{id:7,sentence:"What is your name?",isCorrect:"1"},
		{id:8,sentence:"Do you like the song?",isCorrect:"1"},
		{id:9,sentence:"Can you jump and run?",isCorrect:"1"},
		{id:10,sentence:"You can jump and run?",isCorrect:"0"},

	],[
		{id:1,sentence:"Mum never watches TV, she likes reading.",isCorrect:"1"},
		{id:2,sentence:"Mum watches never TV, she likes reading.",isCorrect:"0"},
		{id:3,sentence:"Dad usually watching TV in the evening.",isCorrect:"0"},
		{id:4,sentence:"Dad usually watches TV in the evening.",isCorrect:"1"},
		{id:5,sentence:"I like the song.",isCorrect:"1"},
		{id:6,sentence:"I likes the song.",isCorrect:"0"},
		{id:7,sentence:"He likes the song.",isCorrect:"1"},
		{id:8,sentence:"He like the song.",isCorrect:"0"},
		{id:9,sentence:"I want to learn new vocabulary.",isCorrect:"1"},
		{id:10,sentence:"I wanting to learn new vocabulary",isCorrect:"0"},
	]
	,[
		{id:1,sentence:"I want to read something in English.",isCorrect:"1"},
		{id:2,sentence:"I to read something in English.",isCorrect:"0"},
		{id:3,sentence:"I want to play a game.",isCorrect:"1"},
		{id:4,sentence:"I like to play a game.",isCorrect:"1"},
		{id:5,sentence:"I have a computer.",isCorrect:"1"},
		{id:6,sentence:"She have a computer.",isCorrect:"0"},
		{id:7,sentence:"She has a computer.",isCorrect:"1"},
		{id:8,sentence:"My name is Denis.",isCorrect:"1"},
		{id:9,sentence:"My name Denis.",isCorrect:"0"},
		{id:10,sentence:"His name is Carlos.",isCorrect:"1"},
	]
	,[
		{id:1,sentence:"I use a computer for playing games.",isCorrect:"1"},
		{id:2,sentence:"I wake up at five o'clock.",isCorrect:"1"},
		{id:3,sentence:"I take a shower.",isCorrect:"1"},
		{id:4,sentence:"I do the homework after school.",isCorrect:"1"},
		{id:5,sentence:"I have breakfast every evening.",isCorrect:"1"},
		{id:6,sentence:"I have breakfast every morning.",isCorrect:"0"},
		{id:7,sentence:"What do you do?",isCorrect:"1"},
		{id:8,sentence:"What does you do?",isCorrect:"0"},
		{id:9,sentence:"What do you do?",isCorrect:"1"},
		{id:10,sentence:"What does you do?",isCorrect:"0"},
	]
	/*,[
		{id:1,sentence:"What do you do?",isCorrect:"1"},
		{id:2,sentence:"What does you do?",isCorrect:"0"},
		{id:3,sentence:"What do you do?",isCorrect:"1"},
		{id:4,sentence:"What does you do?",isCorrect:"0"},
		{id:5,sentence:"What do you do?",isCorrect:"1"},
		{id:6,sentence:"What does you do?",isCorrect:"0"},
		{id:7,sentence:"What do you do?",isCorrect:"1"},
		{id:8,sentence:"What does you do?",isCorrect:"0"},
		{id:9,sentence:"What do you do?",isCorrect:"1"},
		{id:10,sentence:"What does you do?",isCorrect:"0"},
	]
	,[
		{id:1,sentence:"What do you do?",isCorrect:"1"},
		{id:2,sentence:"What does you do?",isCorrect:"0"},
		{id:3,sentence:"What do you do?",isCorrect:"1"},
		{id:4,sentence:"What does you do?",isCorrect:"0"},
		{id:5,sentence:"What do you do?",isCorrect:"1"},
		{id:6,sentence:"What does you do?",isCorrect:"0"},
		{id:7,sentence:"What do you do?",isCorrect:"1"},
		{id:8,sentence:"What does you do?",isCorrect:"0"},
		{id:9,sentence:"What do you do?",isCorrect:"1"},
		{id:10,sentence:"What does you do?",isCorrect:"0"},
	]*/
]
var dragDropText = [
[
		{first: "Sam is a schoolboy. He gets up at 8 and he has breakfast. For breakfast he usually eats ",drop:"toasts",last:""},
		{first: "with",drop:"jam",last:"and drinks. "},
		{first: "a cup of ",drop:"tea",last:". "},
		{first: "&nbsp;Sam's school starts at 9 o'clock. He usually takes his lunch to school. He takes a ",drop:"sandwich",last:","},
		{first: "a",drop:"banana",last:"and a packet of"},
		{first: "",drop:"juice",last:". "},
		{first: "&nbsp;He never takes an ",drop:"orange",last:"for lunch - Sam doesn't like oranges."},
]
]
var irrVerbs = [
	{form1: "1", form2: "1", form3: "1", translation: "1"},
	{form1: "2", form2: "2", form3: "2", translation: "2"},
	/*{form1: "", form2: "", form3: "", translation: ""},
	{form1: "", form2: "", form3: "", translation: ""},
	{form1: "", form2: "", form3: "", translation: ""},
	{form1: "", form2: "", form3: "", translation: ""},
	{form1: "", form2: "", form3: "", translation: ""},
	{form1: "", form2: "", form3: "", translation: ""},
	{form1: "", form2: "", form3: "", translation: ""},
	{form1: "", form2: "", form3: "", translation: ""},
	{form1: "", form2: "", form3: "", translation: ""},
	{form1: "", form2: "", form3: "", translation: ""},
	{form1: "", form2: "", form3: "", translation: ""},
	{form1: "", form2: "", form3: "", translation: ""},
	{form1: "", form2: "", form3: "", translation: ""},
	{form1: "", form2: "", form3: "", translation: ""},
	{form1: "", form2: "", form3: "", translation: ""},
	{form1: "", form2: "", form3: "", translation: ""},
	{form1: "", form2: "", form3: "", translation: ""},*/
]