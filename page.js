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

const REPLACEMENTS = [
	{
		'from': "mary1;",
		'to': "You will rejoice to hear that no disaster has accompanied the commencement of an enterprise which you have regarded with such evil forebodings."
	},
	{
		'from': "mary2;",
		'to': "How slowly the time passes here, encompassed as I am by frost and snow!"
	},
	{
		'from': "mary3;",
		'to': "I write a few lines in haste to say that I am safe—and well advanced on my voyage.",
	}
];

function replacement(string) {
	const match = REPLACEMENTS.find(r => string.endsWith(r.from));

	return match
		? string.substring(0, -match.from.length) + match.to
		: null;
}
