// The Project Gutenberg eBook of Frankenstein; Or, The Modern Prometheus
// https://www.gutenberg.org/cache/epub/84/pg84-images.html

chrome.runtime.onInstalled.addListener(createContextMenus);
chrome.contextMenus.onClicked.addListener(onContextMenuClick);

function createContextMenus() {
	chrome.contextMenus.create({
		id: '1',
		title: 'Frankenstein',
		contexts: ['editable'],
	});
}

function onContextMenuClick(info) {
	if (info.menuItemId == '1') {
		console.log(info);
	}
}
