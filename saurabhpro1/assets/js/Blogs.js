window.addEventListener("load", (e) => {
  let myTimeline = new TimelineLite();
  let myTimeline2 = new TimelineLite();
  let myTimeline3 = new TimelineLite();
  let myTimeline4 = new TimelineLite();
  let myTimeline5 = new TimelineLite();
  var controller = new ScrollMagic.Controller();
  myTimeline.staggerTo(".stagger", 1, { y: 0 }, 0.2);
  const tween1 = new TimelineLite();
  const tween2 = new TimelineLite();
  const tween3 = new TimelineLite();
  let splide1Scene = new ScrollMagic.Scene({
    triggerElement: ".splide1",
    triggerHook: 0.5,
  })
    .on("start", function (e) {
      if (e.scrollDirection == "FORWARD") {
        myTimeline2.staggerTo(".stagger2", 1, { opacity: 1, y: 0 }, 0.2);
      }
    })
    .addTo(controller);

  let splide2Scene = new ScrollMagic.Scene({
    triggerElement: ".latest_reads",
    triggerHook: 0.5,
  })
    .on("start", function (e) {
      if (e.scrollDirection == "FORWARD") {
        myTimeline3.staggerTo(".stagger3", 1, { opacity: 1, y: 0 }, 0.2);
      }
    })
    .addTo(controller);

  // let splidestaggernewScene = new ScrollMagic.Scene({
  //   triggerElement: ".notion1",
  //   triggerHook: 0.5,
  // })
  //   .on("start", function (e) {
  //     if (e.scrollDirection == "FORWARD") {
  //       myTimeline.staggerTo(".staggernew", 1, { opacity: 1, y: 0 }, 0.2);
  //     }
  //   })
  //   .addTo(controller);

  let splide3Scene = new ScrollMagic.Scene({
    triggerElement: ".notion1",
    triggerHook: 0.5,
  })
    .on("start", function (e) {
      if (e.scrollDirection == "FORWARD") {
        myTimeline.staggerTo(".staggernew", 1, { opacity: 1, y: 0 }, 0.2);
        myTimeline4.staggerTo(".stagger4", 1, { opacity: 1, y: 0 }, 0.2);
      }
    })
    .addTo(controller);

  // let stagger5new = new ScrollMagic.Scene({
  //   triggerElement: ".notion2",
  //   triggerHook: 0.5,
  // })
  //   .on("start", function (e) {
  //     if (e.scrollDirection == "FORWARD") {
  //       myTimeline.staggerTo(".stagger5new", 1, { opacity: 1, y: 0 }, 0.2);
  //     }
  //   })
  //   .addTo(controller);

  let splide4Scene = new ScrollMagic.Scene({
    triggerElement: ".notion2",
    triggerHook: 0.5,
  })
    .on("start", function (e) {
      if (e.scrollDirection == "FORWARD") {
        myTimeline.staggerTo(".stagger5new", 1, { opacity: 1, y: 0 }, 0.2);
        myTimeline5.staggerTo(".stagger5", 1, { opacity: 1, y: 0 }, 0.2);
      }
    })
    .addTo(controller);
});
