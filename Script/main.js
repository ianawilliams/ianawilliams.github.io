document.addEventListener('click', function(e) {
	if  (e.target.classList.contains('js-tab')) {
		var targetTab = document.getElementById( e.target.dataset.target )

		if (!targetTab.classList.contains('is-active')) {
			document.querySelector('.tab-content.is-active').classList.remove('is-active');
			document.querySelector('.tab-btn.active').classList.remove('active');

			targetTab.classList.add('is-active');
			e.target.classList.add('active');
		}

		event.preventDefault();
	}
});

function onImageLoad(id) {
	var elem = document.querySelector(`[data-id='${id}']`);
	elem.classList.add("active");
};