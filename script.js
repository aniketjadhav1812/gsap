let tl = gsap.timeline();

const loading = () => {
  let loader = document.getElementById("loader"); 
  let count = document.getElementById("count");
  let i = 0;
  let intervalId = setInterval(function () {
    if (i < 100) {
      i++;
      count.innerHTML = `<h1>${i}%</h1>`;
    } else {
      clearInterval(intervalId);
      count.innerHTML = `<h1>100%</h1>`;
      gsap.to(loader,{
          duration: 1,
          opacity: 0,
          display: "none",
        })
    }
}, 30);
gsap.to("#bar",{
  height:"0%",
  duration:3,
  ease: 'ease-in-out',
});
gsap.to("#loader h1",{
  bottom: "50%",
  duration:2.9,
});
};
loading();
const width = window.innerWidth;

  if (width < 500) {
    tl.to("#images img",{
      width: "60%",
      rotate: "10deg",    
      duration: 1,
      delay:3.7,
  })
  } else {
    tl.to("#images img",{
      width: "25%",
      rotate: "15deg",    
      duration: 1,
      delay:3.7,
  })
  }
tl.from("#text h1",{
    paddingLeft: "200%",
    rotate: "15deg",    
    duration: 0.5,
    stagger:0.5,
})
tl.from(".links a ,.logo h1",{
  y: -100,
  duration: .5,  
  stagger: .1, 
  opacity: 0,
  delay: -2 
})



