const tabs = document.querySelector('.tabs')
const buttons = document.querySelectorAll('[role="tab"]')
const tabPanels = Array.from(document.querySelectorAll('[role="tabpanel"]'))

function handleClick(event) {
	tabPanels.forEach(panel => {
		panel.hidden = true
	})
	buttons.forEach(tab => {
		tab.setAttribute('aria-selected', false)
	})

	event.currentTarget.setAttribute('aria-selected', true)

	const { id } = event.currentTarget
	const tabPanel = tabPanels.find(panel => {
		if (panel.getAttribute('aria-labelledby') === id) {
			return true
		}
	})

	tabPanel.hidden = false
}

buttons.forEach(button => button.addEventListener('click', handleClick))
