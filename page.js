const targets = 'input[type="text"], textarea';

document.querySelectorAll(targets).forEach(el => {
	el.addEventListener('keyup', (event) => insertInto(event.target));
});

function insertInto(target) {
	if (!isInsertable(target)) {
		return;
	}

	if (String(target.value).endsWith('mary;')) {
		target.value = target.value.replace(/mary;$/, "Frankenstein");
	}
}

function isInsertable(target) {
	return target.tagName == 'TEXTAREA' ||
		(target.tagName == 'INPUT' && target.getAttribute('type') == 'text');
}
