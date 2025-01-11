const targets = 'input[type="text"], textarea';

document.querySelectorAll(targets).forEach(el => {
	el.addEventListener('keyup', (event) => {
		if (event.key == ';') {
			insertInto(event.target);
		}
	});
});

function insertInto(target) {
	target.value = replacement(String(target.value)) ?? target.value;
}

function replacement(string) {
	if (string.endsWith('mary1;')) {
		return string.replace(
			/mary1;$/,
			"You will rejoice to hear that no disaster has accompanied the commencement of an enterprise which you have regarded with such evil forebodings. I arrived here yesterday, and my first task is to assure my dear sister of my welfare and increasing confidence in the success of my undertaking."
		);
	}
	if (string.endsWith('mary2;')) {
		return string.replace(
			/mary2;$/,
			"How slowly the time passes here, encompassed as I am by frost and snow! Yet a second step is taken towards my enterprise. I have hired a vessel and am occupied in collecting my sailors; those whom I have already engaged appear to be men on whom I can depend and are certainly possessed of dauntless courage."
		);
	}
	if (string.endsWith('mary3;')) {
		return string.replace(
			/mary3;$/,
			"I write a few lines in haste to say that I am safe—and well advanced on my voyage."
		);
	}

	return null;
}
