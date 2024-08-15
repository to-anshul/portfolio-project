// Make span elements clickable
let homeIcon2 =  document.querySelector('.home>span')
let section1Area = document.querySelector('#section-1')

homeIcon2.addEventListener('click', function () {
  location.href = '../index.html';
});

section1Area.addEventListener('click', function () {
  location.href = '../articles/001_art.htm'
})