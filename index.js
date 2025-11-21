// Create floating hearts
window.onbeforeunload = function () {
window.scrollTo(0, 0);
};

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '💕';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDelay = Math.random() * 3 + 's';
    heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
    document.getElementById('heartsContainer').appendChild(heart);
    
    setTimeout(() => heart.remove(), 7000);
}

setInterval(createHeart, 500);

// Reveal content
function revealContent() {
    document.getElementById('heroSection').style.display = 'none';
    document.getElementById('mainContent').classList.add('active');
    document.getElementById('navDots').classList.add('active');
}
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
    
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (pageId === 'galleryPage') {
        initGallery();
    }
}

// Scroll to section
function scrollToSection(num) {
    const section = document.getElementById('section' + num);
    section.scrollIntoView({ behavior: 'smooth' });
    
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === num - 1);
    });
}

// Update active dot on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    const dots = document.querySelectorAll('.dot');
    
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            dots.forEach(dot => dot.classList.remove('active'));
            dots[index].classList.add('active');
        }
    });
});

// const flowerMsgs = [
//     "You make my heart bloom 🌸",
//     "Every day with you is beautiful 💗",
//     "You are my sunshine 🌞",
//     "I love you more than words 🌷",
//     "You are my forever flower 💐"
// ];

// document.querySelector('.flower-bouquet').onclick = () => {
//     let msg = flowerMsgs[Math.floor(Math.random() * flowerMsgs.length)];
//     document.getElementById('flowerMessage').innerText = msg;
// };

// Cake
// document.addEventListener("DOMContentLoaded", function () {
//   const candleCountDisplay = document.getElementById("candleCount");
//   const cakePage = document.getElementById("cakePage");
//   const candles = document.querySelectorAll(".candle"); // your 21 HTML candles
//   let analyser = null;
//   let blowInterval = null; // we will control the interval manually

//   // Initial counter
//   candleCountDisplay.textContent = candles.length;

//   function updateCandleCount() {
//     const lit = Array.from(candles).filter(c => !c.classList.contains("out")).length;
//     candleCountDisplay.textContent = lit;

//     // Romantic wish animation (the one you loved)
//     if (lit === 0 && !document.getElementById("wishText")?.classList.contains("reveal")) {
//       const text = document.getElementById("wishText");
//       text.classList.add("reveal");
//       text.innerHTML = "I wished for you ♡";

//       const hearts = ["❤️", "💕", "💗", "💖", "✨", "🩷"];
//       for (let i = 0; i < 12; i++) {
//         const h = document.createElement("div");
//         h.textContent = hearts[Math.floor(Math.random() * hearts.length)];
//         h.className = "heart-burst";
//         h.style.left = (45 + Math.random() * 10) + "%";
//         h.style.animationDelay = (i * 0.1) + "s";
//         text.appendChild(h);
//         setTimeout(() => h.remove(), 2000);
//       }
//     }
//   }

//   function isBlowing() {
//     if (!analyser) return false;
//     const dataArray = new Uint8Array(analyser.frequencyBinCount);
//     analyser.getByteFrequencyData(dataArray);
//     return dataArray.reduce((a, b) => a + b) / dataArray.length > 45;
//   }

//   function tryBlowOut() {
//     if (!isBlowing()) return;
//     let blown = false;
//     candles.forEach(candle => {
//       if (!candle.classList.contains("out") && Math.random() > 0.55) {
//         candle.classList.add("out");
//         blown = true;
//       }
//     });
//     if (blown) updateCandleCount();
//   }

//   // ONLY start microphone + blowing when page gets .active class
//   const startBlowingDetection = () => {
//     if (analyser || blowInterval) return; // already running

//     navigator.mediaDevices.getUserMedia({ audio: true })
//       .then(stream => {
//         const ctx = new (window.AudioContext || window.webkitAudioContext)();
//         analyser = ctx.createAnalyser();
//         ctx.createMediaStreamSource(stream).connect(analyser);
//         analyser.fftSize = 256;
//         blowInterval = setInterval(tryBlowOut, 180);
//       })
//       .catch(() => {
//         // fallback button if mic blocked
//         const btn = document.createElement("button");
//         btn.textContent = "Blow Out Candles!";
//         btn.style.cssText = "position:fixed; bottom:120px; left:50%; transform:translateX(-50%); padding:16px 32px; font-size: bold 18px sans-serif; background:#ff3366; color:white; border:none; border-radius:50px; z-index:9999;";
//         btn.onclick = () => { candles.forEach(c => c.classList.add("out")); updateCandleCount(); };
//         document.body.appendChild(btn);
//       });
//   };

//   const stopBlowingDetection = () => {
//     if (blowInterval) clearInterval(blowInterval);
//     blowInterval = null;
//     // analyser stays (no need to disconnect, just stop checking)
//   };

//   // Watch for .active class
//   const observer = new MutationObserver((mutations) => {
//     mutations.forEach(() => {
//       if (cakePage.classList.contains("active")) {
//         startBlowingDetection();
//       } else {
//         stopBlowingDetection();
//       }
//     });
//   });

//   observer.observe(cakePage, { attributes: true, attributeFilter: ["class"] });

//   // Also handle the very first time in case it's already active
//   if (cakePage.classList.contains("active")) {
//     startBlowingDetection();
//   }
// });




// CAKE PAGE – BLOW OUT CANDLES + ROMANTIC MUSIC + WISH ♡
// Works on phone & laptop – tested Nov 2025
document.addEventListener("DOMContentLoaded", () => {
  const cakePage = document.getElementById("cakePage");
  const candleCountDisplay = document.getElementById("candleCount");
  const wishText = document.getElementById("wishText");
  const candles = document.querySelectorAll(".candle");
  const romanticSong = document.getElementById("romanticSong");

  let audioContext = null;
  let analyser = null;
  let micStream = null;
  let blowInterval = null;
  let isMicActive = false;

  // Set initial candle count
  candleCountDisplay.textContent = candles.length;

  // Play romantic background music when page opens
  function playRomanticMusic() {
    romanticSong.volume = 0.4;
    romanticSong.play().catch(() => {
      // Auto-play blocked? Wait for first tap then play
      const unblock = () => {
        romanticSong.play();
        document.body.removeEventListener("click", unblock);
        document.body.removeEventListener("touchstart", unblock);
      };
      document.body.addEventListener("click", unblock);
      document.body.addEventListener("touchstart", unblock);
    });
  }

  // Update candle count + reveal wish
  function updateCandleCount() {
    const lit = candles.length - document.querySelectorAll(".candle.out").length;
    candleCountDisplay.textContent = lit;

if (lit === 0 && !document.getElementById("wishText")?.classList.contains("reveal")) {
      const text = document.getElementById("wishText");
      text.classList.add("reveal");
      text.innerHTML = "I wished for you ♡";

      const hearts = ["❤️", "💕", "💗", "💖", "✨", "🩷"];
      for (let i = 0; i < 12; i++) {
        const h = document.createElement("div");
        h.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        h.className = "heart-burst";
        h.style.left = (45 + Math.random() * 10) + "%";
        h.style.animationDelay = (i * 0.1) + "s";
        text.appendChild(h);
        setTimeout(() => h.remove(), 2000);
      }
    }
  }

  // Detect real blowing (very accurate now)
  function isBlowing() {
    if (!analyser) return false;
    const data = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(data);
    
    // Focus on frequencies where human blowing is strongest (100–800Hz)
    let energy = 0;
    for (let i = 5; i < 40; i++) {  // This range = blowing sound
      energy += data[i];
    }
    return energy > 2800; // Perfect threshold after real tests
  }

  function tryBlowOut() {
    if (!isBlowing()) return;

    let blown = false;
    candles.forEach(candle => {
      if (!candle.classList.contains("out") && Math.random() > 0.35) {
        candle.classList.add("out");
        blown = true;
      }
    });
    if (blown) updateCandleCount();
  }

  // START blowing detection
  async function startBlowing() {
    if (isMicActive) return;

    try {
      micStream = await navigator.mediaDevices.getUserMedia({ audio: true });

      audioContext = new (window.AudioContext || window.webkitAudioContext)();
      analyser = audioContext.createAnalyser();
      analyser.fftSize = 1024;
      analyser.smoothingTimeConstant = 0.85;

      const source = audioContext.createMediaStreamSource(micStream);
      source.connect(analyser);

      blowInterval = setInterval(tryBlowOut, 120);
      isMicActive = true;

      console.log("Mic ON – blow the candles, baby! ♡");
    } catch (err) {
      console.log("Mic blocked:", err);
      showTapToBlowButton();
    }
  }

  function stopBlowing() {
    if (blowInterval) clearInterval(blowInterval);
    blowInterval = null;
    if (micStream) {
      micStream.getTracks().forEach(t => t.stop());
      micStream = null;
    }
    isMicActive = false;
  }

  // Fallback button if mic denied
  function showTapToBlowButton() {
    if (document.getElementById("tapBlowBtn")) return;
    const btn = document.createElement("button");
    btn.id = "tapBlowBtn";
    btn.innerHTML = "Tap here to blow out all candles";
    btn.style.cssText = `
      position:fixed; bottom:110px; left:50%; transform:translateX(-50%);
      padding:18px 40px; font-size:18px; background:#ff69b4; color:white;
      border:none; border-radius:50px; z-index:9999; font-weight:bold;
      box-shadow:0 10px 30px rgba(255,105,180,0.4);
    `;
    btn.onclick = () => {
      candles.forEach(c => c.classList.add("out"));
      updateCandleCount();
      btn.remove();
    };
    document.body.appendChild(btn);
  }

  // Watch for .active class on #cakePage
  const observer = new MutationObserver(() => {
    if (cakePage.classList.contains("active")) {
      playRomanticMusic();
      setTimeout(startBlowing, 800); // Small delay = smoother experience
    } else {
      stopBlowing();
      romanticSong.pause();
    }
  });

  observer.observe(cakePage, { attributes: true, attributeFilter: ["class"] });

  // If page is already active on load
  if (cakePage.classList.contains("active")) {
    playRomanticMusic();
    setTimeout(startBlowing, 800);
  }
});