const targets = 'input[type="text"], textarea';

document.querySelectorAll(targets).forEach(el => {
	el.addEventListener('keyup', (event) => {
		if (event.key == ';') {
			insertInto(event.target);
		}
	});
});

async function insertInto(target) {
	target.value = await replacement(String(target.value)) ?? target.value;
}

async function replacement(string) {
	const match = await chrome.runtime.sendMessage({ 'string': string.slice(-20) });

	return match
		? string.substring(0, -match.from.length) + match.to
		: null;
}
