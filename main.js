const slides = document.querySelectorAll('.slides img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');


let index = 0;
const total = slides.length;


function showSlide(i){
slides.forEach(slide => slide.classList.remove('active'));
slides[i].classList.add('active');
}


next.addEventListener('click', ()=>{
index = (index + 1) % total;
showSlide(index);
});


prev.addEventListener('click', ()=>{
index = (index - 1 + total) % total;
showSlide(index);
});


setInterval(()=>{
index = (index + 1) % total;
showSlide(index);
}, 5000);


showSlide(index);