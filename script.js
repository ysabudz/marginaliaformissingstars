const POEMS = [
  {
    id: 1,
    title: "colo(red)",
    spine: "#A83232" /* Deep romantic red */,
    height: 175,
    password: "flame",
    poem: `whenever i see the color red, i think of you.
red, the color of intense love and hatred,
revolutions and war; passions and rage.

other people don't radiate a color like you. 
you were a color that brought warmth that would scorch,
a color that flickered in the dark,
a color that weakens and strengthens.

like a flame that could burn and warm;
a blazing fire that could consume me whole
lovingly, until i was left with nothing.
it was love with a warning.

i am of ash that holds the memory of your fire,
<em>a hearth.</em>`,
    song: "https://youtu.be/lvHZjvIyqsk?si=UAGoqXkLwM-VyXpT" /* Maroon by Taylor Swift */,
  },
  {
    id: 2,
    title: "our bonfire",
    spine: "#C97B5B" /* Warm flame orange */,
    height: 185,
    password: "smoke",
    poem: `there's something conspicuous with the way you talk while the sun hides.
it was the feeling of looking up at the night sky beside our bonfire,
talking about what life could have been if we met earlier,
laughing at how ridiculous and embarrassing people we could were.

maybe for us that was love — the quiet of the night and the noise of the fire
but the quiet was more beautiful as it lingered, right?
when the simple, small bonfire spread,
the smoke devoured the sky. 
all of a sudden, we lost each other

it took days or months for the smoke to fade,
but when i saw past its facade,
you were not there. where are you?
<em>were you ever here?</em>

remnants of light are now gone, and i'm absurdly lost.
what an oddly endearing bonfire story we are, my twin flame.
i try to light a match, but the wind blows it to nothing.
i walk and run and then... i give up,
i remain blind with a candle of no cause.

may it be sunrise again so i can journey to the place where we last met.
may it be sunset again so i can stay and <em>patiently… very patiently…</em> wait for you
to either light the bonfire again or leave me astray.`,
    song: "https://youtu.be/VdQY7BusJNU?si=JSnyxf7lZDpBXwpi" /* Time After Time by Cyndi Lauper */,
  },
  {
    id: 3,
    title: "coffee addict",
    spine: "#6B4436" /* Warm coffee brown */,
    height: 155,
    password: "curse",
    poem: `do you know what i loved about coffee?
it was the search of the sweet in the bitter,
the ability of the mixture to keep me grounded,
the magic of its chemicals, the gene of the undead.

to be away from its adrenaline is a curse,
a sickening pain, a post-addiction phenomenon,
as if stripped away of a will to live.
<em>why would you take coffee away from me?</em>

to not take a sip of my ambrosia, my cure,
without the idea of you running around my head,
without remembering all that you said.
<em>why would you take coffee away from me?</em>

how can i love something that no longer reminded me of its bliss,
the warmth of its aroma; the comfort in my crises?
how can i love something that only reminded me of you,
<em>and why did it have to be you?</em>`,
    song: "https://youtu.be/toHJ3yp4TY8?si=Ima6dU5ukDUIxtPS" /* Autumn by NIKI */,
  },
  {
    id: 4,
    title: "my star",
    spine: "var(--periwinkle-dark)" /* Soft night-sky blue */,
    height: 165,
    password: "shine",
    poem: `One starry night I looked up to the sky
Luminous and spectacular you are to my eye
A glistening sparkle and twinkling light
The star of my life right beside me felt right 

The stars up above that make me stare
With one of my own I couldn't feel despair
The reflection of your beauty and your shine
With your sparkling eyes and genuine smile

You make me feel like I'm one of the above
You make me feel special and full of love
When darkness showers, wherever you are
You will forever be my one and only star`,
    song: "https://youtu.be/tdVAqxNLXiw?si=MWGPnJMetz6H6PYr" /* Yellow by Coldplay */,
  },
  {
    id: 5,
    title: "secrets",
    spine: "#000000",
    height: 145,
    hidden: true,
    password: "meows",
    poem: `you weren't supposed to find this one —
it was tucked behind the others
on purpose, the way i tuck away
the softest things i mean the most.

since you're here, thank you
for being curious about me.`,
    song: "https://youtu.be/rKbIMWeNDNY?si=7tmk3OkJWJ3v9leK" /* habangbuhay pansamantala by Maki */,
  },
  {
    id: 6,
    title: "untitled.",
    spine: "#5307ce",
    height: 145,
    password: "never",
    poem: `for all that's been said and done,
under the surface, i have hoped
can you at least tell me you've loved?
keeping the paraphernalia of us,
may it be a reminder to you and me
ending the beginning of what once was
never stated, too blinded to see`,
    song: "https://youtu.be/hsLiJP2rqS8?si=bXd8riZm2BHwu4xd",
  },
];

const unlocked = new Set();
let lockState = null;

function buildShelves() {
  const wrap = document.getElementById("bookcaseWrap");
  wrap.innerHTML = ""; // clear shelf before building
  const perShelf = 10;
  const visible = POEMS.filter((p) => !p.hidden);
  const hidden = POEMS.filter((p) => p.hidden);

  let shelves = [];
  for (let i = 0; i < visible.length; i += perShelf) {
    shelves.push(visible.slice(i, i + perShelf));
  }
  if (shelves.length === 0) shelves.push([]);

  shelves.forEach((shelfPoems, sIdx) => {
    const shelf = document.createElement("div");
    shelf.className = "shelf";

    shelfPoems.forEach((p) => shelf.appendChild(makeBookEl(p)));

    if (sIdx === shelves.length - 1) {
      hidden.forEach((p) => {
        const el = makeBookEl(p);
        el.classList.add("hidden-book");
        shelf.appendChild(el);
      });

      const cat = document.createElement("div");
      cat.className = "cat";
      cat.innerHTML = `
        <svg viewBox="0 0 60 34" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="30" cy="24" rx="26" ry="9" fill="#EADFF0" stroke="#9C8FCB" stroke-width="1"/>
          <ellipse cx="14" cy="15" rx="9" ry="7" fill="#EADFF0" stroke="#9C8FCB" stroke-width="1"/>
          <polygon points="8,10 11,3 15,10" fill="#EADFF0" stroke="#9C8FCB" stroke-width="1"/>
          <polygon points="18,10 21,3 24,10" fill="#EADFF0" stroke="#9C8FCB" stroke-width="1"/>
          <ellipse cx="11" cy="16" rx="1.8" ry="1.3" fill="#D8A7B1"/>
        </svg>
        <div class="meow">mrow~ &#9825;</div>
      `;
      cat.addEventListener("click", onCatClick);
      shelf.appendChild(cat);
    }

    wrap.appendChild(shelf);
  });
}

function makeBookEl(p) {
  const book = document.createElement("div");
  book.className = "book";
  book.style.background = p.spine;
  book.style.height = p.height + "px";
  book.dataset.id = p.id;
  const badge = document.createElement("div");
  badge.className = "lock-badge";
  badge.textContent = "\u{1F512}";
  book.appendChild(badge);
  const span = document.createElement("span");
  span.textContent = p.title;
  book.appendChild(span);
  book.addEventListener("click", () => openBook(p, book));
  return book;
}

function openBook(p, bookEl) {
  if (unlocked.has(p.id)) {
    playTone(660, 0.08);
    showPoemPage(p);
  } else {
    playTone(440, 0.06);
    startLock(p, bookEl);
  }
}

function moonMotif() {
  return `<svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 3 A17 17 0 1 0 22 41 A13.5 13.5 0 1 1 22 3 Z" fill="var(--glow)" opacity="0.9"/>
    <circle cx="34" cy="10" r="1.4" fill="var(--glow)"/>
    <circle cx="38" cy="18" r="1" fill="var(--glow)"/>
    <circle cx="30" cy="6" r="0.8" fill="var(--glow)"/>
  </svg>`;
}

function formatPoemText(text) {
  if (!text) return "";

  const escaped = String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  const withAllowedTags = escaped.replace(
    /&lt;(\/?)(em|i|strong|b)&gt;/gi,
    "<$1$2>",
  );

  return withAllowedTags
    .replace(/\*([^*\n]+)\*/g, "<em>$1</em>")
    .replace(/_([^_\n]+)_/g, "<em>$1</em>");
}

function showPoemPage(p) {
  const overlay = document.getElementById("overlay");
  const page = document.getElementById("pageContent");

  // Cozy paper background
  page.style.background = "#FDFBF7"; /* Soft parchment tone */
  page.style.color = "#2B2625"; /* Gentle dark espresso text */
  page.style.boxShadow = "0 12px 40px rgba(0, 0, 0, 0.3)";
  page.style.padding = "2.5rem 2rem";
  page.style.borderRadius = "12px";
  page.style.maxWidth = "520px"; /* Keeps the page width comfy */
  page.style.margin = "0 auto";

  page.innerHTML = `
    <button class="closeBtn" id="closeBtn" aria-label="close" style="color: #8C7B73; font-size: 1.2rem;">&#10005;</button>
    
    <div style="text-align: center; margin-bottom: 2rem;">
      <div class="corner-motif" style="margin-bottom: 0.5rem;">${moonMotif()}</div>
      <h2 style="font-family: 'Georgia', 'Garamond', serif; font-size: 1.75rem; font-weight: normal; color: #1A1412; letter-spacing: 0.02em; margin-bottom: 0.25rem;">${p.title}</h2>
      <div style="width: 40px; height: 1px; background: #D8D0C5; margin: 0.75rem auto;"></div>
    </div>

    <div class="poem-wrapper" style="display: flex; justify-content: center; width: 100%; margin-bottom: 2rem;">
      <div class="poem" style="color: #38302E;">${formatPoemText(p.poem)}</div>
    </div>

    <div class="record-row" style="border-top: 1px solid #EFEAE1; padding-top: 1.2rem; display: flex; align-items: center; justify-content: center; gap: 14px;">
      <div class="record" id="recordSpin" title="play the song for this poem"></div>
      <div class="record-label" style="text-align: left;">
        <b style="color: #2B2625; font-size: 0.9rem; display: block; font-family: sans-serif;">a song for this one</b>
        <span id="recordHint" style="font-size: 0.8rem; color: #7A6C65; font-family: sans-serif;">tap the record to listen</span>
      </div>
    </div>
  `;

  overlay.classList.add("open");
  document.getElementById("closeBtn").addEventListener("click", closeOverlay);
  overlay.addEventListener("click", onOverlayClick);
  document.getElementById("recordSpin").addEventListener("click", () => {
    if (p.song) {
      playTone(880, 0.06);
      window.open(p.song, "_blank", "noopener");
    } else {
      const hint = document.getElementById("recordHint");
      hint.textContent = "no song added for this one yet";
      playTone(300, 0.05);
    }
  });
}

function closeOverlay() {
  const overlay = document.getElementById("overlay");
  overlay.classList.remove("open");

  resetPageStyle();

  overlay.removeEventListener("click", onOverlayClick);
  window.removeEventListener("keydown", onPhysicalKey);
  lockState = null;
}

function onOverlayClick(e) {
  if (e.target.id === "overlay") {
    closeOverlay();
  }
}

/* ---------- wordle-style lock ---------- */
const KB_ROWS = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["ENTER", "z", "x", "c", "v", "b", "n", "m", "DEL"],
];

function startLock(p, bookEl) {
  lockState = {
    poem: p,
    bookEl: bookEl,
    word: p.password.toLowerCase(),
    guesses: [],
    current: "",
    maxAttempts: 6,
    message: "",
    letterStatus: {},
  };
  renderLock();
  document.getElementById("overlay").classList.add("open");
  window.addEventListener("keydown", onPhysicalKey);
}

function onPhysicalKey(e) {
  if (!lockState) return;
  const k = e.key.toLowerCase();
  if (k === "enter") handleKeyPress("ENTER");
  else if (k === "backspace") handleKeyPress("DEL");
  else if (/^[a-z]$/.test(k)) handleKeyPress(k);
}

function handleKeyPress(key) {
  if (!lockState) return;
  const s = lockState;
  if (key === "DEL") {
    s.current = s.current.slice(0, -1);
  } else if (key === "ENTER") {
    if (s.current.length !== s.word.length) {
      s.message = "not quite long enough yet...";
      renderLock();
      return;
    }
    submitGuess();
    return;
  } else {
    if (s.current.length < s.word.length) s.current += key;
  }
  s.message = "";
  renderLock();
}

function resetPageStyle() {
  const page = document.getElementById("pageContent");

  page.style.removeProperty("background");
  page.style.removeProperty("color");
  page.style.removeProperty("box-shadow");
  page.style.removeProperty("padding");
  page.style.removeProperty("border-radius");
  page.style.removeProperty("max-width");
  page.style.removeProperty("margin");
}

function submitGuess() {
  const s = lockState;
  const guess = s.current;
  const statuses = evaluateGuess(guess, s.word);
  s.guesses.push({ letters: guess.split(""), statuses });

  guess.split("").forEach((ch, i) => {
    const cur = s.letterStatus[ch];
    const rank = { absent: 0, present: 1, correct: 2 };
    if (!cur || rank[statuses[i]] > rank[cur]) s.letterStatus[ch] = statuses[i];
  });

  s.current = "";

  if (guess === s.word) {
    s.message = "the page opens softly...";
    renderLock();
    unlocked.add(s.poem.id);
    if (s.bookEl)
      s.bookEl.querySelector(".lock-badge").textContent = "\u{1F513}";
    playTone(740, 0.08);
    setTimeout(() => {
      window.removeEventListener("keydown", onPhysicalKey);
      showPoemPage(s.poem);
      lockState = null;
    }, 900);
    return;
  }

  if (s.guesses.length >= s.maxAttempts) {
    s.message = "hmm, not tonight — take a moment and try again \u{1F319}";
    s.guesses = [];
    s.letterStatus = {};
  } else {
    s.message = "";
  }
  renderLock();
}

function evaluateGuess(guess, answer) {
  const result = new Array(guess.length).fill("absent");
  const answerArr = answer.split("");
  const used = new Array(answer.length).fill(false);

  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === answerArr[i]) {
      result[i] = "correct";
      used[i] = true;
    }
  }
  for (let i = 0; i < guess.length; i++) {
    if (result[i] === "correct") continue;
    const idx = answerArr.findIndex((ch, j) => ch === guess[i] && !used[j]);
    if (idx !== -1) {
      result[i] = "present";
      used[idx] = true;
    }
  }
  return result;
}

function renderLock() {
  const s = lockState;
  const page = document.getElementById("pageContent");

  resetPageStyle();

  let rows = "";
  for (let r = 0; r < s.maxAttempts; r++) {
    let boxes = "";
    if (r < s.guesses.length) {
      const g = s.guesses[r];
      for (let c = 0; c < s.word.length; c++) {
        boxes += `<div class="lock-box ${g.statuses[c]}">${g.letters[c]}</div>`;
      }
    } else if (r === s.guesses.length) {
      for (let c = 0; c < s.word.length; c++) {
        boxes += `<div class="lock-box">${s.current[c] || ""}</div>`;
      }
    } else {
      for (let c = 0; c < s.word.length; c++) {
        boxes += `<div class="lock-box"></div>`;
      }
    }
    rows += `<div class="lock-row">${boxes}</div>`;
  }

  let keyboard = "";
  KB_ROWS.forEach((row) => {
    keyboard += '<div class="kb-row">';
    row.forEach((k) => {
      const label = k === "DEL" ? "\u232B" : k === "ENTER" ? "enter" : k;
      const wide = k === "ENTER" || k === "DEL" ? "wide" : "";
      const status = s.letterStatus[k] || "";
      keyboard += `<button class="kb-key ${wide} ${status}" data-key="${k}">${label}</button>`;
    });
    keyboard += "</div>";
  });

  page.innerHTML = `
    <button class="closeBtn" id="closeBtn" aria-label="close">&#10005;</button>
    <div class="lock-title">${s.poem.title}</div>
    <div class="lock-sub">whisper the password to open this page</div>
    <div class="lock-grid">${rows}</div>
    <div class="lock-msg">${s.message}</div>
    <div class="keyboard">${keyboard}</div>
  `;

  document.getElementById("closeBtn").addEventListener("click", closeOverlay);
  page.querySelectorAll(".kb-key").forEach((btn) => {
    btn.addEventListener("click", () => handleKeyPress(btn.dataset.key));
  });
}

function onCatClick(e) {
  playTone(520, 0.05);
  const meow = e.currentTarget.querySelector(".meow");
  meow.classList.add("show");
  setTimeout(() => meow.classList.remove("show"), 1400);
  burstSparkles(e.clientX, e.clientY);

  const hiddenBook = document.querySelector(".book.hidden-book");
  if (hiddenBook && !hiddenBook.classList.contains("revealed")) {
    setTimeout(() => hiddenBook.classList.add("revealed"), 300);
  }
}

function burstSparkles(x, y) {
  const icons = ["\u2726", "\u2727", "\u2606", "\u22C6"];
  const colors = [
    "var(--periwinkle)",
    "var(--pastel-blue)",
    "var(--lavender)",
    "var(--glow)",
  ];
  for (let i = 0; i < 7; i++) {
    const el = document.createElement("div");
    el.className = "sparkle";
    el.textContent = icons[Math.floor(Math.random() * icons.length)];
    el.style.left = x + (Math.random() * 60 - 30) + "px";
    el.style.top = y + (Math.random() * 20 - 10) + "px";
    el.style.color = colors[i % colors.length];
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1200);
  }
}

/* ---------- ambient stars ---------- */
function spawnStars() {
  const layer = document.getElementById("ambient");
  for (let i = 0; i < 70; i++) {
    const el = document.createElement("div");
    const isGold = Math.random() < 0.18;
    el.className = isGold ? "star star-gold" : "star";
    el.style.left = Math.random() * 100 + "vw";
    el.style.top = Math.random() * 100 + "vh";
    el.style.animationDelay = Math.random() * 3 + "s";
    el.style.animationDuration = 2 + Math.random() * 3 + "s";
    layer.appendChild(el);
  }
}
spawnStars();

/* background reacts to the cursor with a gentle parallax drift */
const ambientLayer = document.getElementById("ambient");
window.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 24;
  const y = (e.clientY / window.innerHeight - 0.5) * 24;
  ambientLayer.style.transform = `translate(${x}px, ${y}px)`;
});

/* click the night sky to make a wish */
ambientLayer.addEventListener("click", (e) => {
  const el = document.createElement("div");
  el.className = "wish";
  el.style.left = e.clientX + "px";
  el.style.top = e.clientY + "px";
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1000);
  playTone(880 + Math.random() * 220, 0.045);
});

/* ---------- gentle synthesized sound ---------- */
let audioCtx = null;
let ambientOn = false;
let droneNodes = null;

function ensureCtx() {
  if (!audioCtx)
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  return audioCtx;
}

function playTone(freq, vol) {
  try {
    const ctx = ensureCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(vol, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.4);
    osc.connect(gain).connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.4);
  } catch (e) {}
}

function startDrone() {
  const ctx = ensureCtx();
  const g = ctx.createGain();
  g.gain.value = 0.035;
  g.connect(ctx.destination);
  const o1 = ctx.createOscillator();
  o1.type = "sine";
  o1.frequency.value = 220;
  const o2 = ctx.createOscillator();
  o2.type = "sine";
  o2.frequency.value = 224;
  const lfo = ctx.createOscillator();
  lfo.frequency.value = 0.15;
  const lfoGain = ctx.createGain();
  lfoGain.gain.value = 0.015;
  lfo.connect(lfoGain).connect(g.gain);
  o1.connect(g);
  o2.connect(g);
  o1.start();
  o2.start();
  lfo.start();
  droneNodes = { g, o1, o2, lfo };
}

function stopDrone() {
  if (droneNodes) {
    droneNodes.o1.stop();
    droneNodes.o2.stop();
    droneNodes.lfo.stop();
    droneNodes = null;
  }
}

document.getElementById("soundToggle").addEventListener("click", function () {
  ambientOn = !ambientOn;
  this.classList.toggle("on", ambientOn);
  this.innerHTML = ambientOn ? "&#9835;" : "&#9834;";
  if (ambientOn) startDrone();
  else stopDrone();
});

/* ---------- sky mood: night / sunset / sunrise ---------- */
const skyIcons = {
  night: "&#127769;",
  sunset: "&#127749;",
  sunrise: "&#127748;",
};
const moonEl = document.getElementById("skyOrb");

let skyMode = "night";
function setSkyMode(mode) {
  skyMode = mode;
  document.body.classList.remove("mode-sunset", "mode-sunrise");
  if (mode !== "night") document.body.classList.add("mode-" + mode);

  moonEl.className = "moon " + (mode === "night" ? "night" : "sun");

  document.getElementById("skyToggle").innerHTML = skyIcons[mode];
  dimStars(mode !== "night");
}

function dimStars(dim) {
  document.querySelectorAll(".star").forEach((el) => {
    el.style.opacity = dim ? "0.25" : "";
    el.style.animationPlayState = dim ? "paused" : "";
  });
}

document.getElementById("skyToggle").addEventListener("click", () => {
  playTone(560, 0.05);
  const order = ["night", "sunset", "sunrise"];
  setSkyMode(order[(order.indexOf(skyMode) + 1) % order.length]);
});

buildShelves();
