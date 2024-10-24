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

// ЛК меню

let lkMenu = document.querySelector('.lk__menu-list');
let lkMenuBtn = document.querySelector('.lk__menu-title');

lkMenuBtn.addEventListener('click', () => {
	lkMenu.classList.toggle('open-menu');
});

// ЛК меню поставщики
let lkMenuSup = document.querySelector('.lk__menu-hidden');
let lkMenuBtnSup = document.querySelector('.lk__menu-btn');

lkMenuBtnSup.addEventListener('click', () => {
	lkMenuSup.classList.add('open-menu');
	lkMenuBtnSup.style.display = 'none';
});

// открытие и закрытие попапов в кабинете поставщика
let modal = (idModal) => {
	document.querySelector('.overlay').setAttribute('style', 'display:flex');
	document
		.getElementById(`${idModal.id}`)
		.setAttribute('style', 'display:block');

	document.addEventListener('click', function (el) {
		if (
			el.target.classList.contains('overlay') ||
			el.target.classList.contains('sup__modal-cancel')
		) {
			document.querySelector('.overlay').setAttribute('style', 'display:none');
			document
				.getElementById(`${idModal.id}`)
				.setAttribute('style', 'display:none');
		}
	});
};
