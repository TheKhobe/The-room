let sliderImages = document.querySelectorAll('.slide'),
sliderText = document.querySelectorAll('.heading'),
sliderPara = document.querySelectorAll('.text'),
 right = document.querySelector('#right'),
 left = document.querySelector('#left'),
current =0;

function reset() {
 for(let i =0; i < sliderImages.length; i++) {
  sliderImages[i].style.display = 'none';
 }
 for(let i =0; i < sliderText.length; i++) {
  sliderText[i].style.display = 'none';
 }
 for(let i =0; i < sliderPara.length; i++) {
  sliderPara[i].style.display = 'none';
 }
}
function startSlide() {
reset();
sliderImages[0].style.display= 'block'
sliderText[0].style.display= 'block'
sliderPara[0].style.display= 'block'
}

function slideLeft() {
 reset();
 sliderImages[current - 1].style.display = 'block';
 sliderText[current - 1].style.display = 'block';
 sliderPara[current - 1].style.display = 'block';
 current--;
}
//Show Next
function slideRight() {
 reset();
 sliderImages[current + 1].style.display = 'block';
 sliderText[current + 1].style.display = 'block';
 sliderPara[current + 1].style.display = 'block';
 current++;
}
//Left arrow click
left.addEventListener('click', function(){
 if(current === 0) {
  current = sliderImages.length;
 }
 slideLeft();
});
//Right arrow click
right.addEventListener('click', function(){
 if(current === sliderImages.length - 1) {
  current = -1
 }
 slideRight();
});
startSlide();