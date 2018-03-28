'use strict';

var page = document.querySelector('.page');
var navOpen = page.querySelector('.nav-trigger');
var navClose = page.querySelector('.nav-close');

navOpen.innerHTML = "";

function openMenu() {
	page.classList.add('page--nav-visible');
};

function closeMenu() {
	page.classList.remove('page--nav-visible');
};


navOpen.addEventListener('click', openMenu);
navClose.addEventListener('click', closeMenu);
