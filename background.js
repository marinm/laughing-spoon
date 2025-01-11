
import REPLACEMENTS from './replacements.js';

chrome.runtime.onMessage.addListener(onMessage);

function onMessage(request, sender, sendResponse) {
	sendResponse(REPLACEMENTS.find(r => request.string.endsWith(r.from)));
}
