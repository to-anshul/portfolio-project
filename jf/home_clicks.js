// Make span elements clickable
let homeIcon1 =  document.querySelector('.home>span')
let blogIcon1 =  document.querySelector('.blog>span')
let profileIcon1 =  document.querySelector('.profile>span')
let contactIcon1 =  document.querySelector('.contact>span')
let mailString1 = 'mailto:mail2anshul@proton.me'+
  '?subject=' + '&body='

homeIcon1.addEventListener('click', function () {
  // location.href = '#'
})
blogIcon1.addEventListener('click', function () {
  location.href = 'hf/blog.html'
})
profileIcon1.addEventListener('click', function () {
  location.href = 'hf/profile.html'
})
contactIcon1.addEventListener('click', function () {
  location.href = mailString1
})