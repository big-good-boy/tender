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

// оформление селектов
if (document.querySelector('.choices-js')) {
	document.querySelectorAll('.choices-js').forEach((element) => {
		new Choices(element, {
			searchEnabled: false,
			itemSelectText: '',
			shouldSort: false,
		});
	});
}

// заполнение значений мин макс в параметрах поиска тендера
if (
	document.querySelector('.search-tenders__results-filter-link') &&
	document.querySelector('.search-tenders__results-filter-flex') &&
	document.querySelector('input[name=maxPrice]') &&
	document.querySelector('input[name=minPrice]')
) {
	document
		.querySelectorAll('.search-tenders__results-filter-link')
		.forEach((el) => {
			el.addEventListener('click', () => {
				el
					.closest('.search-tenders__results-filter-flex')
					.querySelector('input[name=minPrice]').value =
					el.getAttribute('data-min');
				el
					.closest('.search-tenders__results-filter-flex')
					.querySelector('input[name=maxPrice]').value =
					el.getAttribute('data-max');
			});
		});
}

// разделение разрядов чисел в инпутах параметров поиска тендера
document
	.querySelectorAll('.search-tenders__results-filter-wrap > input')
	.forEach((input) => {
		input.oninput = () => {
			input.value = input.value
				.replace(/\D/g, '')
				.replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
		};
	});
