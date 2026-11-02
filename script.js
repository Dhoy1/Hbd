/**
 * ============================================================
 *  A Little Birthday Journey — script.js
 *  Vanilla JavaScript, Zero External Dependencies, 100% Static Ready
 * ============================================================
 */

'use strict';

/* ── Web Audio Synthesizer (Zero External Audio Files Needed) ── */
const Sound = {
  ctx: null,

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  },

  playChime() {
    if (!CONFIG.soundEffects) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const freqs = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    freqs.forEach((f, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(f, now + i * 0.08);
      gain.gain.setValueAtTime(0.18, now + i * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.6);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now + i * 0.08);
      osc.stop(now + i * 0.08 + 0.6);
    });
  },

  playBoing() {
    if (!CONFIG.soundEffects) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(320, now);
    osc.frequency.exponentialRampToValueAtTime(140, now + 0.35);
    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.35);
  },

  playScannerBeep() {
    if (!CONFIG.soundEffects) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(880, now);
    gain.gain.setValueAtTime(0.06, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.08);
  },

  playPaper() {
    if (!CONFIG.soundEffects) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(220, now);
    osc.frequency.exponentialRampToValueAtTime(440, now + 0.15);
    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.2);
  },

  playBlow() {
    if (!CONFIG.soundEffects) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    // Low frequency puff
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(120, now);
    osc.frequency.exponentialRampToValueAtTime(60, now + 0.18);
    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.18);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.18);
  },

  playApplause() {
    if (!CONFIG.soundEffects) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    // Cheerful arpeggio fanfare
    const notes = [440, 554.37, 659.25, 880, 1108.73];
    notes.forEach((f, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(f, now + idx * 0.06);
      gain.gain.setValueAtTime(0.15, now + idx * 0.06);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.06 + 0.5);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now + idx * 0.06);
      osc.stop(now + idx * 0.06 + 0.5);
    });
  },

  playTypewriter() {
    if (!CONFIG.soundEffects) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(700 + Math.random() * 200, now);
    gain.gain.setValueAtTime(0.03, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.03);
  },

  playHeartbeat() {
    if (!CONFIG.soundEffects) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(75, now);
    osc.frequency.exponentialRampToValueAtTime(45, now + 0.2);
    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.25);
  }
};

/* ── Haptic Vibration Utility (Smartphone Android) ────────── */
const Haptics = {
  vibrate(pattern) {
    if (CONFIG.hapticFeedback && 'vibrate' in navigator) {
      try { navigator.vibrate(pattern); } catch (e) {}
    }
  },
  tap()       { this.vibrate(30); },
  error()     { this.vibrate([40, 50, 40]); },
  success()   { this.vibrate([50, 70, 90]); },
  heartbeat() { this.vibrate([70, 100, 70]); },
  big()       { this.vibrate(200); }
};

/* ============================================================
   MAIN APP CONTROLLER
   ============================================================ */
const App = {
  currentScene : 1,
  totalScenes  : 6,
  carouselIndex: 0,
  typingTimer  : null,
  typingDone   : false,
  musicReady   : false,

  // Scene 3 Whack-a-Bintang Usil State
  whackScore        : 0,
  whackTarget       : 7,
  whackPlaying      : false,
  whackTimer        : null,
  whackPopDownTimer : null,
  whackActiveHole   : null,
  whackActiveType   : null, // 'star', 'cheeky', 'zonk', 'cat'
  whackDodged       : false,

  // Scene 6 Hug Hold State
  hugHolding   : false,
  hugHoldTimer : null,
  hugProgress  : 0,

  /* ── Init ──────────────────────────────────────────────── */
  init() {
    this.applyConfig();
    this.buildStarFields();
    this.buildNightStars();
    this.initScene1();
    this.initScene2();
    this.initScene3();
    this.initScene4();
    this.initScene5();
    this.initScene6();
    this.initMusic();
    this.initConfetti();
    this.initFireworks();
  },

  /* ── Apply Config ──────────────────────────────────────── */
  applyConfig() {
    document.title = CONFIG.pageTitle || 'A Little Birthday Journey 🎂';
    const s1sub = document.getElementById('s1-subtitle');
    if (s1sub) s1sub.textContent = CONFIG.openingMessage || '';

    const closingWithLove = document.getElementById('closing-with-love');
    const closingName     = document.getElementById('closing-name');
    if (closingWithLove) closingWithLove.textContent = CONFIG.closingMessage || 'With love,';
    if (closingName)     closingName.textContent     = CONFIG.senderName || 'Someone Special';

    // Scene 3 Whack Game target
    const whackTargetEl = document.getElementById('whack-target');
    if (whackTargetEl) {
      whackTargetEl.textContent = CONFIG.whackGame?.targetStars || 7;
    }

    // Populate suggested wish chips for Scene 6
    const chipsContainer = document.getElementById('wish-chips');
    if (chipsContainer && CONFIG.suggestedWishes) {
      chipsContainer.innerHTML = '';
      CONFIG.suggestedWishes.forEach(w => {
        const btn = document.createElement('button');
        btn.className = 'wish-chip';
        btn.textContent = w;
        btn.addEventListener('click', () => {
          document.querySelectorAll('.wish-chip').forEach(c => c.classList.remove('selected'));
          btn.classList.add('selected');
          const input = document.getElementById('wish-input');
          if (input) input.value = w;
          Haptics.tap();
        });
        chipsContainer.appendChild(btn);
      });
    }

    // Populate Zonk content in Scene 5
    if (CONFIG.zonkPrize) {
      const zBadge = document.getElementById('zonk-badge');
      const zTitle = document.getElementById('zonk-title');
      const zSub   = document.getElementById('zonk-subtitle');
      const zFakeBtn = document.getElementById('btn-claim-fake');
      const zRealBtn = document.getElementById('btn-open-real');
      if (zBadge) zBadge.textContent = CONFIG.zonkPrize.badge || '🎉 SELAMAT!';
      if (zTitle) zTitle.textContent = CONFIG.zonkPrize.title || 'Voucher Overthinking!';
      if (zSub)   zSub.textContent   = CONFIG.zonkPrize.subtitle || '';
      if (zFakeBtn) zFakeBtn.textContent = CONFIG.zonkPrize.fakeButton || 'Klaim Voucher 🛌';
      if (zRealBtn) zRealBtn.textContent = CONFIG.zonkPrize.realButton || '🎀 Buka Kado Aslinya!';
    }
  },

  /* ── Scene Transition ──────────────────────────────────── */
  goToScene(num) {
    const current = document.getElementById(`scene-${this.currentScene}`);
    const next    = document.getElementById(`scene-${num}`);
    if (!next || num === this.currentScene) return;

    current.classList.add('exit-left');
    current.classList.remove('active');

    setTimeout(() => {
      current.classList.remove('exit-left');
      next.classList.add('active');
      next.scrollTop = 0;
      this.currentScene = num;
      this.updateProgress(num);

      if (num === 6) this.startTypingLetter();
    }, 550);
  },

  /* ── Progress Dots ─────────────────────────────────────── */
  updateProgress(sceneNum) {
    const dots = document.querySelectorAll('.progress-dot');
    dots.forEach((dot, idx) => {
      dot.classList.remove('active', 'done');
      if (idx + 1 < sceneNum)  dot.classList.add('done');
      if (idx + 1 === sceneNum) dot.classList.add('active');
    });
  },

  /* ── Star Field Backgrounds ────────────────────────────── */
  buildStarFields() {
    ['star-field-1', 'star-field-2', 'star-field-5'].forEach(id => {
      const field = document.getElementById(id);
      if (!field) return;
      field.innerHTML = '';
      for (let i = 0; i < 22; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        const size = Math.random() * 4 + 2;
        star.style.cssText = `
          width:${size}px; height:${size}px;
          top:${Math.random() * 100}%;
          left:${Math.random() * 100}%;
          animation-duration:${Math.random() * 4 + 3}s;
          animation-delay:${Math.random() * 4}s;
        `;
        field.appendChild(star);
      }
    });
  },

  buildNightStars() {
    const container = document.getElementById('night-stars');
    if (!container) return;
    container.innerHTML = '';
    for (let i = 0; i < 55; i++) {
      const star = document.createElement('div');
      star.classList.add('night-star');
      const size = Math.random() * 3 + 1;
      star.style.cssText = `
        width:${size}px; height:${size}px;
        top:${Math.random() * 85}%;
        left:${Math.random() * 100}%;
        --dur:${Math.random() * 4 + 2}s;
        --delay:-${Math.random() * 5}s;
      `;
      container.appendChild(star);
    }
  },

  /* ===========================================================
     SCENE 1 — THE SECRET ENVELOPE
     =========================================================== */
  initScene1() {
    const btnOpen  = document.getElementById('btn-open');
    const btnNext  = document.getElementById('btn-s1-next');
    const envelope = document.getElementById('envelope-wrapper');
    const burst    = document.getElementById('sparkle-burst');
    const reveal   = document.getElementById('opening-reveal');
    const lid      = document.getElementById('env-lid');
    const letter   = document.getElementById('env-letter');
    let opened     = false;

    btnOpen.addEventListener('click', () => {
      if (opened) return;
      opened = true;

      Sound.playPaper();
      Haptics.tap();
      this.tryPlayMusic();

      envelope.classList.add('opening');
      if (lid) {
        lid.style.transition = 'transform 0.6s ease';
        lid.style.transformOrigin = '100px 30px';
        lid.style.transform = 'rotateX(-160deg)';
      }
      if (letter) {
        setTimeout(() => {
          letter.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
          letter.style.opacity = '1';
          letter.style.transform = 'translateY(-15px)';
        }, 400);
      }

      this.showSparkles(burst);

      setTimeout(() => {
        Sound.playChime();
        reveal.classList.add('show');
        btnOpen.classList.add('hidden');
        setTimeout(() => {
          btnNext.classList.remove('hidden');
          btnNext.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 400);
      }, 700);
    });

    btnNext.addEventListener('click', () => {
      Sound.playChime();
      Haptics.tap();
      this.goToScene(2);
    });
  },

  showSparkles(container) {
    if (!container) return;
    container.classList.add('show');
    const emojis = ['✨', '⭐', '🌟', '💫', '✦'];
    for (let i = 0; i < 8; i++) {
      const sp = document.createElement('span');
      sp.className = 'sp';
      sp.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      const angle = (Math.PI * 2 * i) / 8;
      const dist  = 50 + Math.random() * 30;
      sp.style.cssText = `
        top:50%; left:50%;
        --dx:${Math.round(Math.cos(angle) * dist)}px;
        --dy:${Math.round(Math.sin(angle) * dist)}px;
        animation-delay:${i * 0.06}s;
      `;
      container.appendChild(sp);
    }
    setTimeout(() => {
      container.innerHTML = '';
      container.classList.remove('show');
    }, 1200);
  },

  /* ===========================================================
     SCENE 2 — SILLY AGE / FACE SCANNER & VERIFICATION
     =========================================================== */
  initScene2() {
    const scannerCard = document.getElementById('scanner-card');
    const btnScan     = document.getElementById('btn-start-scan');
    const barFill     = document.getElementById('scanner-bar-fill');
    const statusText  = document.getElementById('scanner-status');
    const resultBox   = document.getElementById('scanner-result');
    const checkQ      = document.getElementById('check-question');
    const cards       = document.querySelectorAll('.answer-card');
    const bubble      = document.getElementById('response-bubble');
    const btnNext     = document.getElementById('btn-s2-next');

    // Scanning trigger
    btnScan.addEventListener('click', () => {
      btnScan.disabled = true;
      btnScan.style.opacity = '0.5';
      scannerCard.classList.add('scanning');
      statusText.textContent = 'Memindai wajah... (Jangan gerak!)';
      Haptics.tap();

      let progress = 0;
      const scanInterval = setInterval(() => {
        progress += 8;
        barFill.style.width = Math.min(progress, 100) + '%';
        Sound.playScannerBeep();
        if (progress >= 100) {
          clearInterval(scanInterval);
          scannerCard.classList.remove('scanning');
          statusText.textContent = 'Status: Pemindaian Selesai! ✅';

          // Pick random scanner result from config
          const results = CONFIG.scannerResults || [
            'Analisis: Sah bertambah usia & makin mempesona! ✨'
          ];
          const picked = results[Math.floor(Math.random() * results.length)];
          resultBox.textContent = picked;
          resultBox.classList.remove('hidden');

          Sound.playChime();
          Haptics.success();

          setTimeout(() => {
            checkQ.classList.remove('hidden');
            checkQ.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }, 600);
        }
      }, 150);
    });

    // Question answers
    cards.forEach(card => {
      card.addEventListener('click', () => {
        const answer = card.dataset.answer;
        cards.forEach(c => c.classList.remove('correct', 'wrong'));

        if (answer === 'correct') {
          card.classList.add('correct');
          Sound.playChime();
          Haptics.success();
          this.showSparkles(document.getElementById('sparkle-burst'));
          bubble.textContent = '🎉 Betul banget! Hari ini adalah hari spesialmu. Selamat bertambah usia! 🎂';
          bubble.classList.remove('hidden');
          cards.forEach(c => { c.style.pointerEvents = 'none'; c.style.opacity = '0.7'; });
          card.style.opacity = '1';
          setTimeout(() => {
            btnNext.classList.remove('hidden');
            btnNext.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }, 500);
        } else {
          card.classList.add('wrong');
          Sound.playBoing();
          Haptics.error();
          const msgs = {
            'wrong-1': '😅 Tetangga sebelah?? Kayaknya bukan dia deh... jangan nyasar dong! Coba lagi! 😄',
            'wrong-2': '🐱 Kucing tetangga? Haha, dia sih tiap hari rebahan! Bukan dia dong... 😹'
          };
          bubble.textContent = msgs[answer] || 'Bukan itu jawabannya. Coba sekali lagi ya! 😊';
          bubble.classList.remove('hidden');
          setTimeout(() => card.classList.remove('wrong'), 600);
        }
      });
    });

    btnNext.addEventListener('click', () => {
      Sound.playChime();
      Haptics.tap();
      this.goToScene(3);
    });
  },

  /* ===========================================================
     SCENE 3 — MINI GAME: WHACK-A-BINTANG USIL
     =========================================================== */
  initScene3() {
    const btnStart = document.getElementById('btn-start-whack');
    const btnNext  = document.getElementById('btn-s3-next');
    const holes    = document.querySelectorAll('.whack-hole');

    btnStart.addEventListener('click', () => {
      Sound.playChime();
      Haptics.tap();
      this.startWhackGame();
    });

    // Touch / click on holes
    holes.forEach(hole => {
      const holeIdx = parseInt(hole.dataset.hole, 10);
      const onHit = (e) => {
        if (!this.whackPlaying) return;
        if (this.whackActiveHole === holeIdx) {
          e.preventDefault();
          this.handleWhackHit(holeIdx);
        }
      };

      hole.addEventListener('pointerdown', onHit);
      hole.addEventListener('click', onHit);
    });

    btnNext.addEventListener('click', () => {
      Sound.playChime();
      Haptics.tap();
      this.goToScene(4);
    });
  },

  startWhackGame() {
    this.whackScore   = 0;
    this.whackTarget  = CONFIG.whackGame?.targetStars || 7;
    this.whackPlaying = true;

    const scoreEl  = document.getElementById('whack-score');
    const targetEl = document.getElementById('whack-target');
    const comboEl  = document.getElementById('whack-combo');
    if (scoreEl)  scoreEl.textContent  = '0';
    if (targetEl) targetEl.textContent = this.whackTarget;
    if (comboEl)  comboEl.textContent  = 'Mulai tangkap! 🔥';

    document.getElementById('btn-start-whack')?.classList.add('hidden');
    document.getElementById('whack-success')?.classList.add('hidden');

    this.showBanter('Bintang-bintang mulai bermunculan! 🚀');
    this.whackScheduleNext(500);
  },

  whackScheduleNext(delay) {
    if (!this.whackPlaying) return;
    this.whackTimer = setTimeout(() => {
      this.whackPopRandom();
    }, delay);
  },

  whackPopRandom() {
    if (!this.whackPlaying) return;

    // Reset previous hole if any
    if (this.whackActiveHole !== null) {
      const prevActor = document.getElementById(`mole-${this.whackActiveHole}`);
      if (prevActor) {
        prevActor.className = 'mole-actor';
      }
    }

    // Pick a random hole 0..5
    let newHole = Math.floor(Math.random() * 6);
    if (newHole === this.whackActiveHole) {
      newHole = (newHole + 1) % 6;
    }

    // Decide character type
    const rand = Math.random();
    let type = 'star';
    let emoji = '⭐';

    if (rand < 0.50) {
      type = 'star';
      emoji = '⭐';
    } else if (rand < 0.78) {
      type = 'cheeky';
      emoji = '😜';
    } else if (rand < 0.92) {
      type = 'zonk';
      emoji = '🧠';
    } else {
      type = 'cat';
      emoji = '🐱';
    }

    this.whackActiveHole = newHole;
    this.whackActiveType = type;
    this.whackDodged     = false;

    const actor = document.getElementById(`mole-${newHole}`);
    if (actor) {
      actor.className = 'mole-actor up';
      const emojiSpan = actor.querySelector('.mole-emoji');
      if (emojiSpan) emojiSpan.textContent = emoji;
    }

    Sound.playScannerBeep();

    const stayDuration = type === 'cat' ? 1000 : (type === 'cheeky' ? 1200 : 1300);

    this.whackPopDownTimer = setTimeout(() => {
      if (this.whackPlaying && this.whackActiveHole === newHole) {
        const a = document.getElementById(`mole-${newHole}`);
        if (a) a.className = 'mole-actor';
        this.whackActiveHole = null;
        this.whackScheduleNext(350 + Math.random() * 300);
      }
    }, stayDuration);
  },

  handleWhackHit(holeIdx) {
    if (!this.whackPlaying || this.whackActiveHole !== holeIdx) return;

    clearTimeout(this.whackPopDownTimer);
    const actor = document.getElementById(`mole-${holeIdx}`);
    const type  = this.whackActiveType;

    // Cheeky Star dodge mechanic
    if (type === 'cheeky' && !this.whackDodged && Math.random() < 0.6) {
      this.whackDodged = true;
      if (actor) actor.classList.add('dodging');
      Sound.playBoing();
      Haptics.error();

      const cheekyLines = CONFIG.whackGame?.cheekyLines || ['Eits, gak kena! 😜'];
      const line = cheekyLines[Math.floor(Math.random() * cheekyLines.length)];
      this.showBanter(line);

      setTimeout(() => {
        if (actor) actor.className = 'mole-actor';
        this.whackActiveHole = null;
        this.whackScheduleNext(250);
      }, 400);
      return;
    }

    // Successful hit!
    if (actor) actor.classList.add('hit');

    if (type === 'zonk') {
      this.whackScore = Math.max(0, this.whackScore - 1);
      Sound.playBoing();
      Haptics.error();
      this.showBanter(CONFIG.whackGame?.zonkLine || 'Aduh overthinking berlebih! 🧠 (-1)');
    } else if (type === 'cat') {
      this.whackScore += 2;
      Sound.playApplause();
      Haptics.success();
      this.showBanter(CONFIG.whackGame?.catBonusLine || 'Meoow! Bonus Kucing Ultah! 🐱 (+2)');
      this.showSparkles(document.getElementById('sparkle-burst'));
    } else {
      this.whackScore += 1;
      Sound.playChime();
      Haptics.success();
      this.showBanter(type === 'cheeky' ? 'Aduh ampun ketangkap! 😭 ⭐ (+1)' : 'Dapet 1 Bintang! ⭐ (+1)');
    }

    const scoreEl = document.getElementById('whack-score');
    if (scoreEl) scoreEl.textContent = this.whackScore;

    const comboEl = document.getElementById('whack-combo');
    if (comboEl) {
      if (this.whackScore >= this.whackTarget) {
        comboEl.textContent = 'SELESAI! 🏆';
      } else if (this.whackScore >= 5) {
        comboEl.textContent = 'Sedikit lagi! ⚡';
      } else if (this.whackScore >= 3) {
        comboEl.textContent = 'Mantap! 🔥';
      } else {
        comboEl.textContent = 'Lanjut! 🏃';
      }
    }

    // Check Win Condition
    if (this.whackScore >= this.whackTarget) {
      this.stopWhackGame();
      this.onWhackWin();
    } else {
      setTimeout(() => {
        if (actor) actor.className = 'mole-actor';
        this.whackActiveHole = null;
        this.whackScheduleNext(300);
      }, 300);
    }
  },

  showBanter(msg) {
    const bubble = document.getElementById('whack-banter');
    if (!bubble) return;
    bubble.textContent = msg;
    bubble.classList.remove('hidden');
    clearTimeout(this.banterTimer);
    this.banterTimer = setTimeout(() => {
      bubble.classList.add('hidden');
    }, 1800);
  },

  stopWhackGame() {
    this.whackPlaying = false;
    clearTimeout(this.whackTimer);
    clearTimeout(this.whackPopDownTimer);
  },

  onWhackWin() {
    Sound.playApplause();
    Haptics.big();
    this.fireConfetti();

    // Show all holes with celebratory stars waving
    for (let i = 0; i < 6; i++) {
      const a = document.getElementById(`mole-${i}`);
      if (a) {
        a.className = 'mole-actor up';
        const sp = a.querySelector('.mole-emoji');
        if (sp) sp.textContent = '🌟';
      }
    }

    const success = document.getElementById('whack-success');
    if (success) {
      success.classList.remove('hidden');
      setTimeout(() => {
        const btnNext = document.getElementById('btn-s3-next');
        if (btnNext) btnNext.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 200);
    }
  },

  /* ===========================================================
     SCENE 4 — 3D FLIP POLAROID MEMORIES
     =========================================================== */
  initScene4() {
    this.buildPolaroidSlides();

    document.getElementById('carousel-prev').addEventListener('click', () => {
      Sound.playPaper();
      Haptics.tap();
      this.setCarousel(this.carouselIndex - 1);
    });
    document.getElementById('carousel-next').addEventListener('click', () => {
      Sound.playPaper();
      Haptics.tap();
      this.setCarousel(this.carouselIndex + 1);
    });

    // Touch swipe navigation
    const container = document.getElementById('carousel-container');
    if (container) {
      container.addEventListener('touchstart', (e) => {
        this.carouselSwipeStartX = e.touches[0].clientX;
        this.carouselSwipeStartY = e.touches[0].clientY;
        this.carouselIsDragging  = true;
      }, { passive: true });

      container.addEventListener('touchend', (e) => {
        if (!this.carouselIsDragging) return;
        const dx = e.changedTouches[0].clientX - this.carouselSwipeStartX;
        const dy = e.changedTouches[0].clientY - this.carouselSwipeStartY;
        if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
          Sound.playPaper();
          dx < 0 ? this.setCarousel(this.carouselIndex + 1)
                 : this.setCarousel(this.carouselIndex - 1);
        }
        this.carouselIsDragging = false;
      }, { passive: true });
    }

    // Reaction emojis bar
    document.querySelectorAll('.btn-react').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const emoji = btn.dataset.emoji;
        Sound.playChime();
        Haptics.tap();
        this.popReactionEmoji(emoji, e.clientX, e.clientY);
      });
    });

    document.getElementById('btn-s4-next').addEventListener('click', () => {
      Sound.playChime();
      Haptics.tap();
      this.goToScene(5);
    });
  },

  buildPolaroidSlides() {
    const track    = document.getElementById('carousel-track');
    const dotsWrap = document.getElementById('carousel-dots');
    if (!track) return;

    track.innerHTML = '';
    dotsWrap.innerHTML = '';

    const photos   = CONFIG.memoryPhotos   || [];
    const captions = CONFIG.memoryCaptions || [];
    const secrets  = CONFIG.secretNotes    || [];

    photos.forEach((src, i) => {
      const slide = document.createElement('div');
      slide.className = 'carousel-slide';

      slide.innerHTML = `
        <div class="polaroid-card" id="polaroid-${i}" role="button" aria-label="Foto ${i+1}: Tap untuk membalik">
          <!-- Front Face -->
          <div class="polaroid-front">
            <div class="polaroid-photo-box">
              <img src="${src}" alt="Kenangan ${i+1}" loading="lazy" />
            </div>
            <p class="polaroid-front-caption">${captions[i] || 'Momen indah bersamamu ✨'}</p>
            <span class="polaroid-flip-hint">🔄 Tap untuk baca pesan rahasia</span>
          </div>

          <!-- Back Face (Secret Note) -->
          <div class="polaroid-back">
            <span class="secret-badge">SECRET NOTE 🔒</span>
            <p class="secret-note-text">"${secrets[i] || 'Terima kasih sudah menjadi bagian dari cerita ini.'}"</p>
            <span class="polaroid-flip-hint">🔄 Tap untuk kembali ke foto</span>
          </div>
        </div>
      `;

      // 3D Flip toggle on card click
      const card = slide.querySelector('.polaroid-card');
      card.addEventListener('click', () => {
        card.classList.toggle('flipped');
        Sound.playPaper();
        Haptics.tap();
      });

      track.appendChild(slide);

      // Dot indicator
      const dot = document.createElement('div');
      dot.className = `c-dot${i === 0 ? ' active' : ''}`;
      dot.setAttribute('role', 'tab');
      dot.setAttribute('aria-label', `Foto ${i + 1}`);
      dot.addEventListener('click', () => {
        Sound.playPaper();
        Haptics.tap();
        this.setCarousel(i);
      });
      dotsWrap.appendChild(dot);
    });

    this.carouselIndex = 0;
  },

  setCarousel(idx) {
    const track  = document.getElementById('carousel-track');
    const dots   = document.querySelectorAll('.c-dot');
    const photos = CONFIG.memoryPhotos || [];

    if (!track) return;
    if (idx < 0) idx = photos.length - 1;
    if (idx >= photos.length) idx = 0;

    this.carouselIndex = idx;
    track.style.transform = `translateX(-${idx * 100}%)`;

    dots.forEach((d, i) => {
      d.classList.toggle('active', i === idx);
    });
  },

  popReactionEmoji(emoji, x, y) {
    for (let i = 0; i < 6; i++) {
      const el = document.createElement('div');
      el.textContent = emoji;
      el.style.cssText = `
        position: fixed;
        pointer-events: none;
        z-index: 999;
        font-size: ${20 + Math.random() * 12}px;
        left: ${x ? x + (Math.random() * 40 - 20) : window.innerWidth / 2}px;
        top: ${y ? y + (Math.random() * 40 - 20) : window.innerHeight / 2}px;
        animation: heartRise 2s ease forwards;
        animation-delay: ${i * 0.08}s;
        opacity: 0;
      `;
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 2200);
    }
  },

  /* ===========================================================
     SCENE 5 — THE PRANK ZONK & REAL GIFT REVEAL
     =========================================================== */
  initScene5() {
    const btnOpenGift  = document.getElementById('btn-open-gift');
    const giftBox      = document.getElementById('gift-box');
    const giftPre      = document.getElementById('gift-pre');
    const giftZonk     = document.getElementById('gift-zonk');
    const giftPost     = document.getElementById('gift-post');
    const btnClaimFake = document.getElementById('btn-claim-fake');
    const zonkNotice   = document.getElementById('zonk-notice');
    const btnOpenReal  = document.getElementById('btn-open-real');
    const btnNext      = document.getElementById('btn-s5-next');

    // Tap gift box -> Triggers PRANK ZONK first
    btnOpenGift.addEventListener('click', () => {
      giftBox.classList.add('shaking');
      btnOpenGift.disabled = true;
      btnOpenGift.style.opacity = '0.5';
      Sound.playBlow();
      Haptics.tap();

      setTimeout(() => {
        giftBox.classList.remove('shaking');
        Sound.playBoing();
        Haptics.error();

        giftPre.classList.add('hidden');
        giftZonk.classList.remove('hidden');
      }, 700);
    });

    // Claim fake button -> Reveals joke & true gift button
    btnClaimFake.addEventListener('click', () => {
      Sound.playChime();
      Haptics.tap();
      btnClaimFake.classList.add('hidden');
      zonkNotice.textContent = CONFIG.zonkPrize?.realNotice || 'Eits, bercanda ding! Mana mungkin kadonya cuma begituan... 😜';
      zonkNotice.classList.remove('hidden');
      btnOpenReal.classList.remove('hidden');
      btnOpenReal.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });

    // Open real gift -> Fireworks & Confetti
    btnOpenReal.addEventListener('click', () => {
      Sound.playApplause();
      Haptics.success();
      this.fireConfetti();
      this.launchRandomFireworks();

      giftZonk.classList.add('hidden');
      giftPost.classList.remove('hidden');
      giftPost.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });

    btnNext.addEventListener('click', () => {
      Sound.playChime();
      Haptics.tap();
      this.goToScene(6);
    });
  },

  /* ===========================================================
     SCENE 6 — THE HEARTFELT ENDING (LETTER, LANTERN & HUG)
     =========================================================== */
  initScene6() {
    const btnSkip        = document.getElementById('btn-skip-typing');
    const lanternSection = document.getElementById('lantern-section');
    const btnFlyLantern  = document.getElementById('btn-fly-lantern');
    const wishInput      = document.getElementById('wish-input');
    const lanternStatus  = document.getElementById('lantern-status');
    const hugSection     = document.getElementById('hug-section');
    const btnHugHold     = document.getElementById('btn-hug-hold');
    const hugRingFill    = document.getElementById('hug-ring-fill');
    const hugBtnText     = document.getElementById('hug-btn-text');
    const finalWords     = document.getElementById('final-words');
    const btnReplay      = document.getElementById('btn-replay');

    // Skip typing
    btnSkip.addEventListener('click', () => {
      this.skipTyping();
    });

    // Fly Lantern Feature
    btnFlyLantern.addEventListener('click', () => {
      const wish = wishInput.value.trim() || 'Semoga bahagia selalu ✨';
      Sound.playChime();
      Haptics.success();

      // Launch animated floating lantern
      this.launchSkyLantern(wish);

      lanternStatus.textContent = `Lenteramu telah terbang membawa doa: "${wish}"... ✨`;
      lanternStatus.classList.remove('hidden');
      btnFlyLantern.disabled = true;
      btnFlyLantern.style.opacity = '0.6';

      setTimeout(() => {
        hugSection.classList.remove('hidden');
        hugSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 1000);
    });

    // Hold-to-Hug (3 seconds hold interaction)
    const startHold = (e) => {
      if (this.hugHolding) return;
      e.preventDefault();
      this.hugHolding = true;
      btnHugHold.classList.add('holding');
      hugBtnText.textContent = 'Peluk erat...';

      Sound.playHeartbeat();
      Haptics.heartbeat();

      const startTime = Date.now();
      const duration = 2800; // ~3s
      const circumference = 276.46; // 2 * PI * 44

      this.hugHoldTimer = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const offset = circumference - (progress * circumference);
        hugRingFill.style.strokeDashoffset = offset;

        // Periodic heartbeat sound and vibration
        if (Math.floor(elapsed / 700) !== Math.floor((elapsed - 50) / 700)) {
          Sound.playHeartbeat();
          Haptics.heartbeat();
        }

        if (progress >= 1) {
          clearInterval(this.hugHoldTimer);
          this.onHugComplete();
        }
      }, 40);
    };

    const stopHold = () => {
      if (!this.hugHolding) return;
      clearInterval(this.hugHoldTimer);
      this.hugHolding = false;
      btnHugHold.classList.remove('holding');
      hugRingFill.style.strokeDashoffset = 276.46;
      hugBtnText.textContent = 'Tahan di sini';
    };

    btnHugHold.addEventListener('pointerdown', startHold);
    window.addEventListener('pointerup', stopHold);
    window.addEventListener('pointercancel', stopHold);

    btnReplay.addEventListener('click', () => {
      Sound.playChime();
      Haptics.tap();
      this.replayAll();
    });
  },

  startTypingLetter() {
    if (this.typingDone) return;
    const el     = document.getElementById('letter-text');
    const cursor = document.getElementById('letter-cursor');
    if (!el) return;

    el.textContent = '';
    const text = CONFIG.finalLetter || '';
    let   i    = 0;

    const type = () => {
      if (i < text.length) {
        el.textContent += text[i];
        if (i % 3 === 0) Sound.playTypewriter();
        i++;

        // Keep view in sight
        const s6 = document.getElementById('scene-6');
        if (s6 && (s6.scrollHeight - s6.scrollTop - s6.clientHeight < 140)) {
          s6.scrollTop = s6.scrollHeight;
        }

        const delay = (text[i - 1] === '\n') ? 50
                    : (text[i - 1] === ' ') ? 16
                    : 20;
        this.typingTimer = setTimeout(type, delay);
      } else {
        this.onTypingComplete();
      }
    };

    cursor.style.display = 'inline-block';
    this.typingTimer = setTimeout(type, 400);
  },

  skipTyping() {
    if (this.typingDone) return;
    if (this.typingTimer) clearTimeout(this.typingTimer);
    const el = document.getElementById('letter-text');
    if (el) el.textContent = CONFIG.finalLetter || '';
    this.onTypingComplete();
  },

  onTypingComplete() {
    this.typingDone = true;
    const cursor    = document.getElementById('letter-cursor');
    const closing   = document.getElementById('letter-closing');
    const btnSkip   = document.getElementById('btn-skip-typing');
    const lantern   = document.getElementById('lantern-section');

    if (cursor)  cursor.style.display = 'none';
    if (closing) closing.classList.remove('hidden');
    if (btnSkip) btnSkip.style.display = 'none';

    if (lantern) {
      setTimeout(() => {
        lantern.classList.remove('hidden');
        lantern.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 500);
    }
  },

  launchSkyLantern(wish) {
    const container = document.getElementById('lantern-sky');
    if (!container) return;
    for (let i = 0; i < 3; i++) {
      const lantern = document.createElement('div');
      lantern.className = 'flying-lantern';
      const drift = (Math.random() * 80 - 40);
      const dur   = Math.random() * 3 + 6;
      lantern.style.cssText = `
        left: ${20 + Math.random() * 60}%;
        --drift: ${drift}px;
        --dur: ${dur}s;
        animation-delay: ${i * 0.4}s;
      `;
      container.appendChild(lantern);
      setTimeout(() => lantern.remove(), (dur + 1) * 1000);
    }
  },

  onHugComplete() {
    Sound.playApplause();
    Haptics.big();
    this.launchHearts();

    const btnHugHold = document.getElementById('btn-hug-hold');
    const hugText    = document.getElementById('hug-btn-text');
    const finalWords = document.getElementById('final-words');
    const btnReplay  = document.getElementById('btn-replay');

    btnHugHold.style.pointerEvents = 'none';
    btnHugHold.style.background = 'linear-gradient(135deg, #FF6B95, #FFD166)';
    hugText.textContent = 'Terpeluk Erat ❤️';

    setTimeout(() => {
      finalWords.classList.remove('hidden');
      btnReplay.classList.remove('hidden');
      btnReplay.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 700);
  },

  launchHearts() {
    const container = document.getElementById('heart-float');
    if (!container) return;
    const hearts = ['💕', '💖', '💗', '💝', '🌸', '✨', '💫', '🌷', '🥰'];
    for (let i = 0; i < 22; i++) {
      const heart = document.createElement('div');
      heart.className = 'fheart';
      heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
      const size = Math.random() * 22 + 18;
      const dur  = Math.random() * 3 + 3.5;
      const rot  = Math.random() * 40 - 20;
      heart.style.cssText = `
        --size:${size}px; font-size:${size}px;
        --dur:${dur}s;
        --rot:${rot}deg;
        --x:${Math.random() * 90 + 5}%;
        left:${Math.random() * 90 + 5}%;
        animation-delay:${Math.random() * 1.5}s;
      `;
      container.appendChild(heart);
      setTimeout(() => heart.remove(), (dur + 2) * 1000);
    }
  },

  /* ===========================================================
     REPLAY ALL (RESET TO INITIAL STATE)
     =========================================================== */
  replayAll() {
    document.querySelectorAll('.scene').forEach(s => { s.scrollTop = 0; });

    // Reset Scene 2
    document.getElementById('scanner-card')?.classList.remove('scanning');
    document.getElementById('scanner-status').textContent = 'Status: Menunggu verifikasi';
    document.getElementById('scanner-bar-fill').style.width = '0%';
    document.getElementById('scanner-result')?.classList.add('hidden');
    document.getElementById('btn-start-scan').disabled = false;
    document.getElementById('btn-start-scan').style.opacity = '1';
    document.getElementById('check-question')?.classList.add('hidden');
    document.querySelectorAll('.answer-card').forEach(c => {
      c.classList.remove('correct', 'wrong');
      c.style.pointerEvents = '';
      c.style.opacity = '';
    });
    document.getElementById('response-bubble')?.classList.add('hidden');
    document.getElementById('btn-s2-next')?.classList.add('hidden');

    // Reset Scene 3 (Whack Game)
    this.stopWhackGame();
    this.whackScore = 0;
    this.whackActiveHole = null;
    const sScoreEl = document.getElementById('whack-score');
    const sComboEl = document.getElementById('whack-combo');
    if (sScoreEl) sScoreEl.textContent = '0';
    if (sComboEl) sComboEl.textContent = 'Siap main! 🔥';
    document.getElementById('btn-start-whack')?.classList.remove('hidden');
    document.getElementById('whack-success')?.classList.add('hidden');
    document.getElementById('whack-banter')?.classList.add('hidden');
    for (let i = 0; i < 6; i++) {
      const a = document.getElementById(`mole-${i}`);
      if (a) a.className = 'mole-actor';
    }

    // Reset Scene 4
    document.querySelectorAll('.polaroid-card').forEach(c => c.classList.remove('flipped'));
    this.carouselIndex = 0;
    this.setCarousel(0);

    // Reset Scene 5
    document.getElementById('gift-pre')?.classList.remove('hidden');
    document.getElementById('gift-zonk')?.classList.add('hidden');
    document.getElementById('gift-post')?.classList.add('hidden');
    document.getElementById('btn-open-gift').disabled = false;
    document.getElementById('btn-open-gift').style.opacity = '1';
    document.getElementById('btn-claim-fake')?.classList.remove('hidden');
    document.getElementById('zonk-notice')?.classList.add('hidden');
    document.getElementById('btn-open-real')?.classList.add('hidden');

    // Reset Scene 6
    this.typingDone = false;
    if (this.typingTimer) clearTimeout(this.typingTimer);
    const letterEl = document.getElementById('letter-text');
    if (letterEl) letterEl.textContent = '';
    document.getElementById('letter-cursor').style.display = 'inline-block';
    document.getElementById('letter-closing')?.classList.add('hidden');
    document.getElementById('btn-skip-typing').style.display = '';
    document.getElementById('lantern-section')?.classList.add('hidden');
    document.getElementById('btn-fly-lantern').disabled = false;
    document.getElementById('btn-fly-lantern').style.opacity = '1';
    document.getElementById('lantern-status')?.classList.add('hidden');
    document.getElementById('hug-section')?.classList.add('hidden');
    const hugBtn = document.getElementById('btn-hug-hold');
    hugBtn.style.pointerEvents = '';
    hugBtn.style.background = '';
    document.getElementById('hug-btn-text').textContent = 'Tahan di sini';
    document.getElementById('hug-ring-fill').style.strokeDashoffset = '276.46';
    document.getElementById('final-words')?.classList.add('hidden');
    document.getElementById('btn-replay')?.classList.add('hidden');

    // Reset Scene 1
    const lid    = document.getElementById('env-lid');
    const letter = document.getElementById('env-letter');
    if (lid)    lid.style.transform = '';
    if (letter) { letter.style.opacity = '0'; letter.style.transform = ''; }
    document.getElementById('opening-reveal')?.classList.remove('show');
    document.getElementById('btn-open')?.classList.remove('hidden');
    document.getElementById('btn-s1-next')?.classList.add('hidden');
    document.getElementById('envelope-wrapper')?.classList.remove('opening');

    // Return to Scene 1
    const scenes = document.querySelectorAll('.scene');
    scenes.forEach(s => s.classList.remove('active', 'exit-left', 'enter-right'));
    this.currentScene = 1;
    document.getElementById('scene-1').classList.add('active');
    this.updateProgress(1);
  },

  /* ===========================================================
     MUSIC PLAYER
     =========================================================== */
  initMusic() {
    const audio  = document.getElementById('bgm');
    const player = document.getElementById('music-player');
    const btn    = document.getElementById('music-btn');
    const label  = document.getElementById('music-label');

    if (!audio) return;

    audio.src = CONFIG.musicPath || './assets/audio/bgm.mp3';
    audio.volume = CONFIG.musicVolume != null ? CONFIG.musicVolume : 0.25;
    audio.loop   = true;

    const showPlayer = () => player.classList.remove('hidden');

    const fadeIn = (targetVol) => {
      audio.volume = 0;
      const step = () => {
        if (audio.volume < targetVol - 0.02) {
          audio.volume = Math.min(audio.volume + 0.02, targetVol);
          requestAnimationFrame(step);
        } else {
          audio.volume = targetVol;
        }
      };
      requestAnimationFrame(step);
    };

    this.tryPlayMusic = () => {
      showPlayer();
      const play = audio.play();
      if (play !== undefined) {
        play.then(() => {
          this.musicReady = true;
          fadeIn(CONFIG.musicVolume || 0.25);
          btn.textContent   = '🎵';
          label.textContent = 'Music on';
        }).catch(err => {
          btn.textContent   = '▶';
          label.textContent = 'Play';
        });
      }
    };

    btn.addEventListener('click', () => {
      if (audio.paused) {
        const p = audio.play();
        if (p) {
          p.then(() => {
            fadeIn(CONFIG.musicVolume || 0.25);
            btn.textContent   = '🎵';
            label.textContent = 'Music on';
          }).catch(() => {});
        }
      } else {
        audio.pause();
        btn.textContent   = '▶';
        label.textContent = 'Play';
      }
    });

    audio.addEventListener('error', () => {
      label.textContent = 'No audio';
      btn.textContent   = '🔇';
    });
  },

  tryPlayMusic() {},

  /* ===========================================================
     CONFETTI ENGINE
     =========================================================== */
  confettiCtx    : null,
  confettiPieces : [],
  confettiAnimId : null,

  initConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    if (!canvas) return;
    this.confettiCtx = canvas.getContext('2d');
    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);
  },

  fireConfetti() {
    const ctx    = this.confettiCtx;
    const canvas = document.getElementById('confetti-canvas');
    if (!ctx || !canvas) return;

    const colors = ['#F8C8DC', '#CDB4DB', '#EFA6B5', '#FFD166', '#06D6A0', '#118AB2', '#FF6B95', '#FFFFFF'];
    this.confettiPieces = [];

    for (let i = 0; i < 150; i++) {
      this.confettiPieces.push({
        x    : Math.random() * canvas.width,
        y    : Math.random() * canvas.height * -0.5 - 10,
        w    : Math.random() * 10 + 5,
        h    : Math.random() * 6 + 3,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx   : Math.random() * 4 - 2,
        vy   : Math.random() * 4 + 2,
        rot  : Math.random() * 360,
        rVel : Math.random() * 8 - 4,
        life : 1,
        decay: Math.random() * 0.006 + 0.003,
      });
    }

    if (this.confettiAnimId) cancelAnimationFrame(this.confettiAnimId);
    this.animateConfetti();
  },

  animateConfetti() {
    const ctx    = this.confettiCtx;
    const canvas = document.getElementById('confetti-canvas');
    if (!ctx || !canvas) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let alive = false;
    this.confettiPieces.forEach(p => {
      if (p.life <= 0) return;
      alive = true;
      p.x   += p.vx;
      p.y   += p.vy;
      p.rot += p.rVel;
      p.life -= p.decay;
      p.vy   += 0.08;

      ctx.save();
      ctx.globalAlpha = Math.max(0, p.life);
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rot * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });

    if (alive) {
      this.confettiAnimId = requestAnimationFrame(() => this.animateConfetti());
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      this.confettiPieces = [];
    }
  },

  /* ===========================================================
     INTERACTIVE FIREWORKS ENGINE (SCENE 5)
     =========================================================== */
  fwCtx       : null,
  fwParticles : [],
  fwAnimId    : null,

  initFireworks() {
    const canvas = document.getElementById('fireworks-canvas');
    if (!canvas) return;
    this.fwCtx = canvas.getContext('2d');
    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Interactive tap-to-fireworks on Scene 5
    document.getElementById('scene-5')?.addEventListener('click', (e) => {
      if (document.getElementById('gift-post')?.classList.contains('hidden')) return;
      this.spawnFirework(e.clientX, e.clientY);
      Sound.playChime();
      Haptics.tap();
    });
  },

  launchRandomFireworks() {
    for (let i = 0; i < 4; i++) {
      setTimeout(() => {
        const x = window.innerWidth * (0.2 + Math.random() * 0.6);
        const y = window.innerHeight * (0.2 + Math.random() * 0.4);
        this.spawnFirework(x, y);
      }, i * 350);
    }
  },

  spawnFirework(x, y) {
    const colors = ['#FF4081', '#FFD166', '#06D6A0', '#4D96FF', '#CDB4DB', '#FFFFFF'];
    const count = 36;
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count;
      const speed = Math.random() * 4 + 2;
      this.fwParticles.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 1,
        decay: Math.random() * 0.02 + 0.015,
        size: Math.random() * 3 + 2
      });
    }

    if (!this.fwAnimId) this.animateFireworks();
  },

  animateFireworks() {
    const ctx = this.fwCtx;
    const canvas = document.getElementById('fireworks-canvas');
    if (!ctx || !canvas) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let alive = false;
    this.fwParticles.forEach(p => {
      if (p.life <= 0) return;
      alive = true;
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.04; // gravity
      p.life -= p.decay;

      ctx.save();
      ctx.globalAlpha = Math.max(0, p.life);
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });

    if (alive) {
      this.fwAnimId = requestAnimationFrame(() => this.animateFireworks());
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      this.fwParticles = [];
      this.fwAnimId = null;
    }
  }
};

/* ── DOM Ready Initializer ─────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  window.App = App;
  App.init();
});
