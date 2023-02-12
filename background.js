browser.browserAction.onClicked.addListener(() => {
	browser.tabs.query({currentWindow: true}).then((tabs, _) => {
		let URLs = []
		tabs.forEach(tab => {URLs.push(tab.url)})
		navigator.clipboard.writeText(URLs.join('\n'))
	})
})