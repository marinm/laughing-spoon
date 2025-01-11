// The Project Gutenberg eBook of Frankenstein; Or, The Modern Prometheus
// https://www.gutenberg.org/cache/epub/84/pg84-images.html

chrome.runtime.onMessage.addListener(onMessage);

function onMessage(request, sender, sendResponse) {
	sendResponse(REPLACEMENTS.find(r => request.string.endsWith(r.from)));
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