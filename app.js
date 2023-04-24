
function toggleMenu() {
  var ham = document.querySelector('.ham');
  var menuPanel = document.getElementById('menu-panel');
  


  //$(".modal").toggleClass("modal-active");

  ham.classList.toggle('active');
 
  menuPanel.style.display = menuPanel.style.display === 'flex' ? 'none' : 'flex';
  
}





const canvas = document.querySelector(".canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext("2d");
const frameCount = 179;

const currentFrame = (index) => `./best-ball/${(index + 1).toString()}.jpg`;

const images = [];
let ball = { frame: 0 };

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = currentFrame(i);
  console.log(currentFrame(i));
  images.push(img);
}

gsap.to(ball, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
    scrub: 0.5,
    pin: "canvas",
    end: "100%",
  },
  onUpdate: render,
});


gsap.fromTo(
  ".fade",
  {
    opacity: 1,
  },
  {
    opacity: 0,
    scrollTrigger: {
      scrub: 1,

      start: "65%",
      end: "66%",
    },
    onComplete: () => {
      gsap.to(".fade", { opacity: 0 });
    },
  }
);

gsap.fromTo(
  ".ball-text",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    scrollTrigger: {
      scrub: 1,

      start: "22%",
      end: "24%",
    },
    onComplete: () => {
      gsap.to(".ball-text", { opacity: 0 });
    },
  }
);

gsap.fromTo(
  ".txt",
  {
    x:"50%",
    y:"-50%",
  },
  {
    x:"0%",
    y:"0%",
    scrollTrigger:
    {
      scrub:1,
      start:"65%",
      end:"69%",
    },
    onComplete:()=>
    {
      gsap.to(".txt",{x:"0%",y:"0%"});
    },
  },
);


ScrollTrigger.create({
  trigger: ".txt",
  start: "top 60%", // Adjust this value to determine when the animation starts
 // Set this to true to trigger the animation only once
  onEnter: (self) => {
    // Create a timeline to animate the element
    const tl = gsap.timeline({ repeat: -1 });
    tl.fromTo(".txt", {
      x:"0%",
      y:"0%",
    },
    {
      x:"-50%",
      y:"50%",
      duration: 10, ease: "linear"
    });
    
    self.animation = tl; // Store the timeline in the ScrollTrigger instance
  },
  onLeaveBack: (self) => {
    self.animation.pause(); // Pause the animation when scrolling back
  },
  onEnterBack: (self) => {
    self.animation.play(); // Resume the animation when scrolling back
  },
 
});

images[0].onload = render;

function render() {
  context.canvas.width = images[0].width;
  context.canvas.height = images[0].height;

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(images[ball.frame], 0, 0);
}
