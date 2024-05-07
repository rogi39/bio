document.addEventListener("DOMContentLoaded", function () {

	// Custom JS

});

const header = document.querySelector('.header');
const togglemenu = document.querySelector('#toggle-menu');
const menu = document.querySelector('.menu');
const toggleMenuClose = document.getElementById('toggle-menu-close');
const overlay = document.querySelector('.overlay');
var scrollPrev = 0;
togglemenu.addEventListener('click', () => {
	togglemenu.classList.toggle("on");
	menu.classList.toggle("on");
	toggleMenuClose.classList.add("on");

	document.body.classList.toggle("noscroll");

	if (overlay.classList.contains('active')) {
		overlay.classList.remove('active');
		fadeOut(overlay, 300);
	} else {
		overlay.classList.add('active');
		fadeIn(overlay, 300);
		setTimeout(() => {
			header.classList.add("on");
		}, 10);
	}
});

toggleMenuClose.addEventListener('click', () => {
	toggleMenuClose.classList.remove("on");
	togglemenu.classList.remove("on");
	menu.classList.toggle("on");
	document.body.classList.remove("noscroll");
	overlay.classList.remove('active');
	fadeOut(overlay, 300);

});

window.addEventListener('resize', () => {
	if (window.outerWidth >= 992) {
		togglemenu.classList.remove("on");
		header.classList.remove("on");
		menu.classList.remove("on");
		toggleMenuClose.classList.remove("on");
		document.body.classList.remove("noscroll");
		overlay.classList.remove('active');
		fadeOut(overlay, 300);
	}
});

window.addEventListener('scroll', () => {
	var scrolled = window.pageYOffset;
	if (scrolled >= 300) {
		header.classList.add("scrolled");
	} else if (scrolled <= 300) {
		header.classList.remove("scrolled");
	}
	if (scrolled >= 500) {
		header.classList.add("on");
	} else if (scrolled <= 500) {
		header.classList.remove("on");
	}

});

let pies = document.querySelectorAll('.with-us__chart-pie');
pies.forEach(el => {
	el.addEventListener('mouseover', function (e) {
		console.log(e.target);
	});
});

// var wrapper = document.querySelector('.marquee'),
// 	marquee = document.querySelector('.marquee__list'),
// 	wrapperWidth = wrapper.offsetWidth,
// 	marqueeWidth = marquee.scrollWidth;


// function move() {
// 	var currentTX = getComputedStyle(marquee).transform.split(',');
// 	if (currentTX[4] === undefined) {
// 		currentTX = -1;
// 	} else {
// 		currentTX = parseFloat(currentTX[4]) - 1;
// 	}

// 	if (-currentTX >= marqueeWidth) {
// 		marquee.style.transform = 'translateX(' + wrapperWidth + 'px)';

// 	} else {
// 		marquee.style.transform = 'translateX(' + currentTX + 'px)';
// 	}
// }

// var interval = setInterval(move, 1);

function duration() {
	if (window.outerWidth >= 576) {
		return 60000;
	} else {
		return 30000;
	}
}
jQuery(document).ready(function ($) {
	jQuery('.marquee-rtl').marquee({
		duration: duration(),
		gap: 30,
		delayBeforeStart: 0,
		startVisible: true,
		pauseOnHover: true,
		duplicated: true
	});
	jQuery('.marquee-ltr').marquee({
		duration: duration(),
		gap: 30,
		delayBeforeStart: 0,
		startVisible: true,
		pauseOnHover: true,
		duplicated: true,
		direction: 'right'
	});
});


function fadeIn(el, timeout, display) {
	el.style.opacity = 0;
	el.style.display = display || 'block';
	el.style.transition = `opacity ${timeout}ms`;
	setTimeout(() => {
		el.style.opacity = 1;
	}, 10);
}

function fadeOut(el, timeout) {
	el.style.opacity = 1;
	el.style.transition = `opacity ${timeout}ms`;
	el.style.opacity = 0;

	setTimeout(() => {
		el.style.display = 'none';
	}, timeout);
}


// const createExpertSlider = () => {
// 	let slider = new Swiper(".map-slider", {
// 		slidesPerView: 1,
// 		loop: false,
// 		effect: "fade",
// 		fadeEffect: {
// 			crossFade: true
// 		},
// 		// speed: 500,
// 		navigation: {
// 			nextEl: '.slider-btn__item_next',
// 			prevEl: '.slider-btn__item_prev',
// 		},
// 		breakpoints: {},
// 		on: {
// 			slideChange: function () {
// 				document.querySelector('.counter-slider-mobile__item').innerHTML = `0${slider.activeIndex+1}`;
// 				// console.log(slider.activeIndex);
// 				// console.log(slider.previousIndex);
// 				let degUp = slider.activeIndex * 25;
// 				let degDown = slider.activeIndex * -25;

// 				if (slider.activeIndex > slider.previousIndex) {
// 					// degUp = degUp + 10;
// 					// degDown = degDown - 10;
// 					document.querySelector('.map__circle').style.transform = `rotate(${degDown}deg)`;
// 					document.querySelectorAll('.map__circle-item').forEach(el => {
// 						el.style.transform = `rotate(${degUp}deg)`;
// 					});
// 				} else {
// 					document.querySelector('.map__circle').style.transform = `rotate(${degDown}deg)`;
// 					document.querySelectorAll('.map__circle-item').forEach(el => {
// 						el.style.transform = `rotate(${degUp}deg)`;
// 					});
// 				}
// 			},
// 			// slideChangeTransitionStart: function () {
// 			// 	console.log(document.querySelector('.map__circle'));
// 			// }
// 		}
// 	});
// }

// createExpertSlider();


let filterItems = document.querySelectorAll('.filter__item');
filterItems.forEach(el => {
	el.addEventListener('click', function (e) {
		let target = e.target;
		// target.classList.toggle('active');
		let targetAtr = target.dataset.catFilter;
		let goods = document.querySelectorAll('.goods');
		if (targetAtr !== 'all') {
			document.querySelector('.filter__item[data-cat-filter="all"]').classList.remove('active');
			if (target.classList.contains('active')) {
				target.classList.remove('active');
				goods.forEach(good => {
					let goodAtr = good.dataset.goodsCat;
					if (goodAtr == targetAtr) {
						if (good.classList.contains('active')) {
							good.style.display = "none";
							good.classList.remove('active');
						}
					} else {
						// good.classList.add('active');
					}
				});
				if (!document.querySelector('.goods.active')) {
					document.querySelectorAll('.filter__item.active').forEach(elm => {
						elm.classList.remove('active');
					})
					document.querySelector('.filter__item').classList.add('active');

					goods.forEach(good => {
						// console.log(good);
						good.removeAttribute('style');
						good.classList.remove('active');
					});
				}
			} else {
				target.classList.add('active');
				goods.forEach(good => {
					let goodAtr = good.dataset.goodsCat;
					if (goodAtr != targetAtr) {
						if (!good.classList.contains('active')) {
							good.style.display = "none";
						}
					} else {
						good.classList.add('active');
					}
				});

			}


		}
		if (targetAtr === 'all') {
			document.querySelectorAll('.filter__item.active').forEach(elm => {
				elm.classList.remove('active');
			})
			target.classList.add('active');

			goods.forEach(good => {
				// console.log(good);
				good.removeAttribute('style');
				good.classList.remove('active');
			});

		}
		// if (targetAtr === 'all' && !target.classList.contains('active')) {
		// 	goods.forEach(good => {
		// 		console.log(good);
		// 		good.removeAttribute('style');
		// 	});
		// 	return false;
		// }
		// if (targetAtr === 'all') {

		// 	return false;
		// }


		// console.log(target.dataset.catFilter);
	});
});

let btnModals = document.querySelectorAll('.btn-modal');
btnModals.forEach(el => {
	el.addEventListener('click', openModalNominaton);
});

function openModalNominaton(event) {
	event.preventDefault();
	if (!event.target.dataset.modalType) return false;
	let modal = document.getElementById(`modal-${event.target.dataset.modalType}`);
	let close = modal.querySelector(".modal-content__close");
	fadeIn(modal, 300, 'flex');
	close.onclick = function () {
		fadeOut(modal, 300);
	}
}

function formSend(e) {
	var act = e.getAttribute("action");
	var url = "";
	var btn = e.querySelector('button');
	var btnText = btn.textContent;
	btn.setAttribute('disabled', 'disabled');
	btn.textContent = 'Загрузка...';
	for (var i = e.elements.length - 1; i >= 0; i--) {
		var name = e.elements[i].getAttribute("name");
		if (e.elements[i].type == "checkbox") {
			if (e.elements[i].checked) {
				url += name + "=" + e.elements[i].value + "&";
			}
		} else if (name) {
			url += name + "=" + e.elements[i].value + "&";
		}
	}
	var request = new XMLHttpRequest();

	request.onreadystatechange = function () {
		if (request.readyState === 4) {
			if (request.status === 422) {
				btn.textContent = btnText;
				btn.removeAttribute('disabled');
				e.nextElementSibling.innerHTML = request.response;
				let inputs = e.querySelectorAll('input, select, textarea');
				inputs.forEach(el => {
					el.addEventListener('input', () => {
						el.removeAttribute("style");
						el.classList.remove('error');
					});
				});
				let errors = e.nextElementSibling.querySelectorAll("[data-error]");
				errors.forEach(el => {
					let dataAt = el.getAttribute("data-error");
					let input = e.querySelector("input[name=" + dataAt + "], select[name=" + dataAt + "], textarea[name=" + dataAt + "]");
					input.style.borderColor = "#810101";
					input.classList.add('error');
				});
			} else {
				btn.textContent = btnText;
				btn.removeAttribute('disabled');
				e.nextElementSibling.innerHTML = request.response;
				e.reset();
			}
		}
	}

	request.open('POST', act);

	request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

	request.send(url);

	return false;
}