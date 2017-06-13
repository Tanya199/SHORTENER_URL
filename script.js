(function () {
	var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	var alphabet =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	var upAlphabet =  ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	var body = document.getElementsByTagName('body')[0];
	var input = document.getElementById('input');
	var buttonShorten = document.getElementById('btn_short');
	var containerResults = document.getElementById('cont_result');

	buttonShorten.addEventListener('click', getNewLink);

	function getNewLink() {
		if(!input.value){
			return;
		}
		var wrapOriginalUrl = document.createElement('span');
		var wrapNewUrl = document.createElement('span');
		containerResults.appendChild(wrapOriginalUrl);
		containerResults.appendChild(wrapNewUrl);

		var originalLink = input.value;
		var newLink ='goo.gl';

		wrapOriginalUrl.innerHTML = originalLink;
		wrapNewUrl.innerHTML = newLink;
		// var re = /(\w+)\s(\w+)/;
		// var str = "John Smith";
		// var newstr = str.replace(re, "$2, $1");
		// console.log(newstr);
	}

}());