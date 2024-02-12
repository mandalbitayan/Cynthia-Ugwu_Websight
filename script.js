const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});
function circle(){
    window.addEventListener("mousemove",function(dets){
        // console.log(dets.clientX,dets.clientY);
        document.querySelector("#circle").style.transform=`translate(${dets.clientX}px,${dets.clientY}px) `;
    })
}
circle()

function animation(){
    var a=gsap.timeline();
    a.from(".nav",{
        y:'-10',
        opacity:0,
        duration:1.2,
        ease:Expo.easeInOut
    })
    a.to(".boundinglm",{
        y:0,
        duration:1,
        delay:-1,
        ease:Expo.easeInOut
    })
}
animation();



document.querySelectorAll(".plug").forEach(function (plug) {
    var rotate = 0;
    var diffrot = 0;
  
    plug.addEventListener("mouseleave", function (dets) {
      gsap.to(plug.querySelector("img"), {
        opacity: 0,
        ease: Power2,
        duration: 0.5,
      });
    });
  
    plug.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - plug.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(plug.querySelector("img"), {
        opacity: 1,
        ease: Power2,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      });
    });
  });