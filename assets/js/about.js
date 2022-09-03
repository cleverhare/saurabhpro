window.addEventListener("load", (e) => {
  var controller = new ScrollMagic.Controller();
  const tween2 = new TimelineLite();

  // init controller
  const path1 = {
    curviness: 1.2,
    values: [{ y: 0 }],
  };
  const path2 = {
    curviness: 1.2,
    values: [{ y: -2400 }],
  };
  let myTimeline = new TimelineLite();
  let myTimeline2 = new TimelineLite();
  let myTimeline3 = new TimelineLite();
  myTimeline.staggerTo(".stagger", 1, { opacity: 1, y: 0 }, 0.2);

  const tween1 = new TimelineLite();

  const tween3 = new TimelineLite();

  const SetPath = (element, path, tween) => {
    tween.to(element, 1, {
      bezier: path,
      ease: Power1.easeInOut,
    });
  };

  SetPath(".team_area ul:nth-child(2)", path2, tween2);
  SetPath(".team_area ul:nth-child(1)", path1, tween1);

  let scene = new ScrollMagic.Scene({
    triggerElement: ".team_area",
    triggerHook: 0,
    duration: 700,
  })
    .setTween(tween1)

    .setPin(".team_area")
    .addTo(controller);

  let scene2 = new ScrollMagic.Scene({
    triggerElement: ".team_area",
    triggerHook: 0,
    duration: 650,
  })
    .setTween(tween2)
    .on("progress", (e) => {
      let Progress = e.progress;
      let ShesName = document.querySelector(".shes_name .name");
      let gender = document.querySelector(".shes_name .gender");
      let shes_data = document.querySelector(".shes_data");

      console.log(Progress);
      if (Progress < 0.1885) {
        ShesName.textContent = "Abhishek";
        gender.textContent = "He is";
        shes_data.textContent =
          "Abhishek Purushotham is an orator, sports lover, blockchain enthusiast and thought leader experienced in managing multi-faced roles stretching across product management, business development, negotiation, client acquisition and market research.";
      }

      if (Progress > 0.3058) {
        ShesName.textContent = "Manisha";
        gender.textContent = "She is";
        shes_data.textContent =
          "Manisha Khadanga is a growth marketer, startup nerd and media hacker experienced in growing startups from $0-$1MM ARR through content and growth marketing. Her past experiences across industries covers investment banking, automotive, blockchain and mobile apps";
      }
      if (Progress > 0.4417) {
        ShesName.textContent = "Sagar";
        gender.textContent = "He is";
        shes_data.textContent =
          "Sagar Bhatia is passionate about writing and wishes to continue it for life long. He helps brands convert their thoughts into content through blogs, infographics, videos and even memes.";
      }
      if (Progress > 0.5481) {
        ShesName.textContent = "Rimjhim";
        gender.textContent = "She is";
        shes_data.textContent =
          " RImjhim Rajpoot is a fan of minimalism, her experience from the events industry has complemented her communication skills and creativity. We bet there isn't a trend she isn't aware of. Rimjhim has a keen eye for details and a strong understanding of social media channels, online culture, user engagement, and viral content.";
      }
      if (Progress > 0.6681) {
        ShesName.textContent = "Shubhangi";
        gender.textContent = "She is";

        shes_data.textContent =
          "Shubhangi Sharma is an intern turned full time. She has explored various spaces from content creation,social media management to human resources.She is curious and creative and is currently exploring the Web3 space.";
      }
      if (Progress > 0.883671875) {
        ShesName.textContent = "Akshay";
        gender.textContent = "He is";
        shes_data.textContent =
          "Akshay Jangid is a creative designer specializing in assisting crypto and blockchain-focused ventures build unique brand identities, customer-centric UI and creative campaigns focusing on achieving business and user goals.";
      }
      console.log(e.progress);
    })
    .addTo(controller);

  let scene4 = new ScrollMagic.Scene({
    triggerElement: ".section_area_heading_2",
    triggerHook: 0.2,
    duration: 1400,
  })
    .on("start", function (e) {
      if (e.scrollDirection == "FORWARD") {
        myTimeline2.staggerTo(".staggerheadingsecond", 1, { y: 0 }, 0.2);
      }
    })

    .addTo(controller);

  let scene5 = new ScrollMagic.Scene({
    triggerElement: ".outTeam",
    triggerHook: 0.5,
    duration: 1000,
  })
    .on("start", function (e) {
      if (e.scrollDirection == "FORWARD") {
        myTimeline.staggerTo(".staggerTeam", 1, { y: 0 }, 0.2);
      }
    })

    .addTo(controller);
  let scene6 = new ScrollMagic.Scene({
    triggerElement: ".say_client",
    triggerHook: 0.5,
    duration: 1000,
  })
    .on("start", function (e) {
      if (e.scrollDirection == "FORWARD") {
        myTimeline3.staggerTo(".staggerClient", 1, { y: 0 }, 0.2);
      }
    })

    .addTo(controller);
});
