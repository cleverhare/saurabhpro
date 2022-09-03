window.addEventListener("load", (e) => {
  let myTimeline = new TimelineLite();
  let myTimeline2 = new TimelineLite();
  var controller = new ScrollMagic.Controller();

  myTimeline.staggerTo(".staggerold", 1, { opacity: 1, y: 0 }, 0.2);

  myTimeline.staggerTo(".stagger", 1, { opacity: 1, y: 0 }, 0.2);

  const tween1 = new TimelineLite();
  let scene = new ScrollMagic.Scene({
    triggerElement: ".section_area_heading_2",
    triggerHook: 0.2,
    duration: 1400,
  })
    .on("start", function (e) {
      if (e.scrollDirection == "FORWARD") {
        myTimeline2.staggerTo(".stagger1", 1, { y: 0 }, 0.2);
      }
    })

    .addTo(controller);
});
