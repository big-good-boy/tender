// меню бургер
const templateMenu = document.querySelector('.menu');
if (templateMenu) {
	if (document.querySelector('.menu__icon')) {
		document.querySelectorAll('.menu__icon').forEach((el) => {
			el.addEventListener('click', () => {
				document.querySelector('body').classList.toggle('lock');
				templateMenu.classList.toggle('menu--open');
			});
		});
	}
	if (templateMenu.querySelector('a')) {
		templateMenu.querySelectorAll('a').forEach((el) => {
			el.addEventListener('click', () => {
				document.querySelector('body').classList.remove('lock');
				templateMenu.classList.remove('menu--open');
			});
		});
	}
}

// табы
let lists = document.querySelectorAll('[role="tablist"]');
Array.prototype.forEach.call(lists, function (list) {
	new window.Tablist(list).mount();
});

// закрытие попапа при клике вне его
if (document.querySelector('.popup')) {
	document.querySelector('.popup').addEventListener('click', function (el) {
		if (
			el.target.classList.contains('popup') ||
			el.target.classList.contains('popop__close')
		) {
			window.popup.close();
		}
	});
}
