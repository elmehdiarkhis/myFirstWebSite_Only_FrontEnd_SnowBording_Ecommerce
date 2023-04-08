const card = document.querySelector('.card101');
const container = document.querySelector('.container101');
const title = document.querySelector('.title101');
const skate = document.querySelector('.skate101 img');
const buy = document.querySelector('.buy101 button');
const desc = document.querySelector('.desc101 h3');


container.addEventListener('mousemove', (e) =>{
    let xAxis = (window.innerWidth / 2 - (e.pageX-100))/ 100;
    let yAxis = (window.innerHeight / 2 - (e.pageY-2000))/ 30;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

})

container.addEventListener('mouseover', (e) => {
    title.style.transform = "translateZ(150px)";
    skate.style.transform = "translateZ(150px) rotateZ(-20deg)";
    buy.style.transform = "translateZ(150px)";
    desc.style.transform = "translateZ(150px)";
});

container.addEventListener('mouseenter', (e) => {
    card.style.transition = "none";
});



container.addEventListener('mouseleave', (e) => {
    skate.style.transform = "translateZ(0) rotateZ(0deg)";
    card.style.transition = 'all 0.5s ease ';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`
});