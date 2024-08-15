// Make span elements clickable
let homeIcon4 =  document.querySelector('.home>span')
let blogIcon4 =  document.querySelector('.blog>span')
let modeIcon = document.querySelector('.mode')
let r  = document.querySelector(':root');
let rs = getComputedStyle(r);

homeIcon4.addEventListener('click', function () {
  location.href = '../index.html'
});
blogIcon4.addEventListener('click', function () {
  location.href = '../hf/blog.html'
});
modeIcon.addEventListener('click', function () {
  let backColor = rs.getPropertyValue('--BGCOLOR');
  let fontColor = rs.getPropertyValue('--FONT-COLOR');
  if (backColor == '#111') {
    r.style.setProperty('--BGCOLOR','#F4F4F4');
    r.style.setProperty('--FONT-COLOR','#111');
  } else {
    r.style.setProperty('--BGCOLOR','#111');
    r.style.setProperty('--FONT-COLOR','#F4F4F4');
  }
});

console.log(imageGradient);