window.addEventListener("load", (e) => {
  // init controller
  var typed = new Typed('.typing', {
  strings: ["WEB3", "CRYPTO", "NFT", "GAMING", "WEB3", "CRYPTO", "NFT", "GAMING", "WEB3", "CRYPTO", "NFT", "GAMING", "WEB3", "CRYPTO", "NFT", "GAMING", "WEB3", "CRYPTO", "NFT", "GAMING", "WEB3", "CRYPTO", "NFT", "GAMING", "WEB3", "CRYPTO", "NFT", "GAMING", "WEB3", "CRYPTO", "NFT", "GAMING", "WEB3", "CRYPTO", "NFT", "GAMING", "WEB3", "CRYPTO", "NFT", "GAMING","WEB3", "CRYPTO", "NFT", "GAMING", "WEB3", "CRYPTO", "NFT", "GAMING", "WEB3", "CRYPTO", "NFT", "GAMING", "WEB3", "CRYPTO", "NFT", "GAMING", "WEB3", "CRYPTO", "NFT", "GAMING","WEB3", "CRYPTO", "NFT", "GAMING", "WEB3", "CRYPTO", "NFT", "GAMING", "WEB3", "CRYPTO", "NFT", "GAMING", "WEB3", "CRYPTO", "NFT", "GAMING", "WEB3", "CRYPTO", "NFT", "GAMING","WEB3", "CRYPTO", "NFT", "GAMING", "WEB3", "CRYPTO", "NFT", "GAMING", "WEB3", "CRYPTO", "NFT", "GAMING", "WEB3", "CRYPTO", "NFT", "GAMING", "WEB3", "CRYPTO", "NFT", "GAMING","WEB3", "CRYPTO", "NFT", "GAMING", "WEB3", "CRYPTO", "NFT", "GAMING", "WEB3", "CRYPTO", "NFT", "GAMING", "WEB3", "CRYPTO", "NFT", "GAMING", "WEB3", "CRYPTO", "NFT", "GAMING","WEB3", "CRYPTO", "NFT", "GAMING", "WEB3", "CRYPTO", "NFT", "GAMING", "WEB3", "CRYPTO", "NFT", "GAMING", "WEB3", "CRYPTO", "NFT", "GAMING", "WEB3", "CRYPTO", "NFT", "GAMING","WEB3", "CRYPTO", "NFT", "GAMING", "WEB3", "CRYPTO", "NFT", "GAMING", "WEB3", "CRYPTO", "NFT", "GAMING", "WEB3", "CRYPTO", "NFT", "GAMING", "WEB3", "CRYPTO", "NFT", "GAMING","WEB3", "CRYPTO", "NFT", "GAMING", "WEB3", "CRYPTO", "NFT", "GAMING", "WEB3", "CRYPTO", "NFT", "GAMING", "WEB3", "CRYPTO", "NFT", "GAMING", "WEB3", "CRYPTO", "NFT", "GAMING","WEB3", "CRYPTO", "NFT", "GAMING", "WEB3", "CRYPTO", "NFT", "GAMING", "WEB3", "CRYPTO", "NFT", "GAMING", "WEB3", "CRYPTO", "NFT", "GAMING", "WEB3", "CRYPTO", "NFT", "GAMING","WEB3", "CRYPTO", "NFT", "GAMING", "WEB3", "CRYPTO", "NFT", "GAMING", "WEB3", "CRYPTO", "NFT", "GAMING", "WEB3", "CRYPTO", "NFT", "GAMING", "WEB3", "CRYPTO", "NFT", "GAMING","WEB3", "CRYPTO", "NFT", "GAMING", "WEB3", "CRYPTO", "NFT", "GAMING", "WEB3", "CRYPTO", "NFT", "GAMING", "WEB3", "CRYPTO", "NFT", "GAMING", "WEB3", "CRYPTO", "NFT", "GAMING","WEB3", "CRYPTO", "NFT", "GAMING", "WEB3", "CRYPTO", "NFT", "GAMING", "WEB3", "CRYPTO", "NFT", "GAMING", "WEB3", "CRYPTO", "NFT", "GAMING", "WEB3", "CRYPTO", "NFT", "GAMING",],
  smartBackspace: true, // Default value
  delay: 2000,
  typeSpeed: 100,
});

  const path1 = {
    curviness: 0,
    values: [
      { x: 0, y: 200 },
      { x: `-${window.innerWidth + 200}`, y: 100 },
    ],
  };
  const path2 = {
    curviness: 0,
    values: [{ rotation: 2 }, { rotation: 0 }, { rotation: 0 }],
  };
  const path3 = {
    curviness: 0,
    values: [{ y: 50 }, { y: 20 }],
  };
  const path4 = {
    curviness: 0,
    values: [{ rotation: -10 }, { rotation: -20 }],
  };
  const pathtop4 = {
    curviness: 0,
    values: [{ rotation: -10 }, { rotation: -3 }],
  };
  const path5 = {
    curviness: 0,
    values: [{ rotation: 5 }],
  };
  const SetPath = (element, path, tween) => {
    tween.to(element, 1, {
      bezier: path,
      ease: Power1.easeInOut,
    });
  };

  var controller = new ScrollMagic.Controller();
  const tween1 = new TimelineLite();
  const tween2 = new TimelineLite();
  const tween3 = new TimelineLite();
  const tween4 = new TimelineLite();
  const tween5 = new TimelineLite();

  const tween6 = new TimelineLite();
  const tween7 = new TimelineLite();
  const tween8 = new TimelineLite();
  const tween9 = new TimelineLite();
  const tween10 = new TimelineLite();

  if (window.innerWidth > 1000) {
    SetPath("#my-sticky-element1 .reel", path1, tween1);
    SetPath("#my-sticky-element1 #card1first", path2, tween2);
    SetPath("#my-sticky-element1 #card1second", path3, tween3);
    SetPath("#my-sticky-element1 #card1third", path4, tween4);
    SetPath("#my-sticky-element1 #card1fourth", path5, tween5);

    SetPath("#my-sticky-element2 .reel", path1, tween6);
    SetPath("#my-sticky-element2 #card1first", path2, tween7);
    SetPath("#my-sticky-element2 #card1second", path3, tween8);
    SetPath("#my-sticky-element2 #card1third", path4, tween9);
    SetPath("#my-sticky-element2 #card1fourth", path5, tween10);
    let scene = new ScrollMagic.Scene({
      triggerElement: "#my-sticky-element1",
      triggerHook: 0,
      duration: 1400,
    })
      .setTween(tween1)
      .setPin("#my-sticky-element1")
      .addTo(controller);

    let scene2 = new ScrollMagic.Scene({
      triggerElement: "#my-sticky-element1",
      triggerHook: 0,
      duration: 1400,
    })
      .setTween(tween2)
      .addTo(controller);

    let scene3 = new ScrollMagic.Scene({
      triggerElement: "#my-sticky-element1",
      triggerHook: 0,
      duration: 1400,
    })
      .setTween(tween3)
      .addTo(controller);
    let scene4 = new ScrollMagic.Scene({
      triggerElement: "#my-sticky-element1",
      triggerHook: 0,
      duration: 1400,
    })
      .setTween(tween4)
      .addTo(controller);
    let scene5 = new ScrollMagic.Scene({
      triggerElement: "#my-sticky-element1",
      triggerHook: 0,
      duration: 1400,
    })
      .setTween(tween5)
      .addTo(controller);
    let scene6 = new ScrollMagic.Scene({
      triggerElement: "#my-sticky-element2",
      triggerHook: 0,
      duration: 1400,
    })
      .setTween(tween6)
      .setPin("#my-sticky-element2")
      .addTo(controller);
    let scene7 = new ScrollMagic.Scene({
      triggerElement: "#my-sticky-element2",
      triggerHook: 0,
      duration: 1400,
    })
      .setTween(tween7)
      .addTo(controller);

    let scene8 = new ScrollMagic.Scene({
      triggerElement: "#my-sticky-element2",
      triggerHook: 0,
      duration: 1400,
    })
      .setTween(tween8)
      .addTo(controller);

    let scene9 = new ScrollMagic.Scene({
      triggerElement: "#my-sticky-element2",
      triggerHook: 0,
      duration: 1400,
    })
      .setTween(tween9)
      .addTo(controller);
    let scene10 = new ScrollMagic.Scene({
      triggerElement: "#my-sticky-element2",
      triggerHook: 0,
      duration: 1400,
    })
      .setTween(tween10)
      .addTo(controller);
  }

  let myTimeline = new TimelineLite();
  let myTimeline2 = new TimelineLite();
  let myTimeline3 = new TimelineLite();
  let myTimeline4 = new TimelineLite();

  myTimeline.staggerTo(".stagger", 1, { y: 0 }, 0.2);

  let sceneProviding = new ScrollMagic.Scene({
    triggerElement: ".providing_section",
    triggerHook: 0.5,
  })

    .on("start", function (e) {
      if (e.scrollDirection == "FORWARD") {
        myTimeline2.staggerTo(".stagger1", 1, { y: 0 }, 0.2);
      }
    })

    .addTo(controller);
  let through_process_scene = new ScrollMagic.Scene({
    triggerElement: ".through_process",
    triggerHook: 0.5,
  })

    .on("start", function (e) {
      if (e.scrollDirection == "FORWARD") {
        myTimeline3.staggerTo(".stagger2", 1, { y: 0 }, 0.2);
      }
    })

    .addTo(controller);

  let brand_word_wrapper_scene = new ScrollMagic.Scene({
    triggerElement: ".brand_word_wrapper",
    triggerHook: 0.5,
  })

    .on("start", function (e) {
      if (e.scrollDirection == "FORWARD") {
        myTimeline4.staggerTo(".stagger3", 1, { opacity: 1, y: 0 }, 0.2);
      }
    })

    .addTo(controller);

  LoadTypeWrite();
});
