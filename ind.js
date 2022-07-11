const title = document.querySelectorAll('.title');
tab = document.querySelectorAll('.tab');
content = document.querySelectorAll('.content');
wrapper = document.querySelector('.wrapper');

tab.forEach(el => {//бежим по всем, записываем в переменную 'el'
	el.addEventListener('click', getActiveTab)

	function getActiveTab(e) {
		let activeTAb = e.currentTarget;
		let activeContent = activeTAb.closest('.title').querySelector('.content')

		tab.forEach(el => {
			if (el != activeTAb) {
				el.classList.remove('_active')
			}
		})

		content.forEach(el => {
			if (el != activeContent) {
				el.classList.remove('_active')
			}
		})

		activeTAb.classList.add('_active')
		activeContent.classList.add('_active')
	}
});

document.addEventListener('click', (e) => {
	if (!e.target.closest('.title')) {
		tab.forEach(el => {
			el.classList.remove('_active')
		})

		content.forEach(el => {
			el.classList.remove('_active')
		})
	}

	// if (e.code = 'q') {
	// 	tab.forEach(el => {
	// 		el.classList.remove('_active')
	// 	})
	// 	content.forEach(el => {
	// 		el.classList.remove('_active')
	// 	})
	// }
})


