(function () {
	var alphabet = ["a", "b", "c", "d", "e", "f", "g",
		"h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
		"r", "s", "t", "u", "v", "w", "x", "y", "z"];
	var upAlphabet = ["A", "B", "C", "D", "E", "F", "G",
		"H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
		"S", "T", "U", "V", "W", "X", "Y", "Z"];

	var body = document.getElementsByTagName('body')[0];
	var input = document.getElementById('input');
	var buttonShorten = document.getElementById('btn_short');
	var containerResults = document.getElementById('cont_result');

	var arrayOfLinks = JSON.parse(localStorage.getItem('arrayOfLinks'));

	if (arrayOfLinks && arrayOfLinks.length > 0) {
		for (var i = 0; i < arrayOfLinks.length; i++) {
			var wrapOriginalUrl = document.createElement('div');
			var wrapNewUrl = document.createElement('div');
			var buttonRemove = document.createElement('button');
			buttonRemove.innerHTML = 'remove';
			wrapOriginalUrl.innerHTML = arrayOfLinks[i].originalLink;
			wrapNewUrl.innerHTML = arrayOfLinks[i].newLink;

			containerResults.appendChild(wrapOriginalUrl);
			containerResults.appendChild(wrapNewUrl);
			containerResults.appendChild(buttonRemove);

		}
	}

	buttonShorten.addEventListener('click', getNewLink);

	function getRandomValueFromArray(array) {
		var randomIndex = Math.floor(Math.random() * array.length);
		return array[randomIndex];
	}

	function getNewLink() {
		if (!input.value) {
			return;

		}
		var wrapOriginalUrl = document.createElement('div');
		var wrapNewUrl = document.createElement('div');
		var buttonRemove = document.createElement('button');

		var numberRandom = Math.floor(Math.random() * 10);
		var randomLowerLetter = getRandomValueFromArray(alphabet);
		var randomUpperLetter = getRandomValueFromArray(upAlphabet);

		var linkObj = {
			'originalLink': input.value,
			'newLink': 'http://goo.gl/' + numberRandom + randomLowerLetter + randomUpperLetter
		};

		var arrayOfLinks = JSON.parse(localStorage.getItem('arrayOfLinks'));
		if (arrayOfLinks && arrayOfLinks.length > 0) {
			arrayOfLinks.push(linkObj);
			localStorage.setItem('arrayOfLinks', JSON.stringify(arrayOfLinks));
		} else {
			localStorage.setItem('arrayOfLinks', JSON.stringify([linkObj]));
		}

		wrapOriginalUrl.innerHTML = linkObj.originalLink;
		wrapNewUrl.innerHTML = linkObj.newLink;
		buttonRemove.innerHTML = 'remove';

		containerResults.appendChild(wrapOriginalUrl);
		containerResults.appendChild(wrapNewUrl);
		containerResults.appendChild(buttonRemove);

	}

}());