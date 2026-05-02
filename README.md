<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>SUKUNA XD — Pairing</title>
  <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet"/>
  <style>
    :root {
      --bg:        #0a0a0f;
      --surface:   #12121a;
      --border:    #1f1f2e;
      --accent:    #00ff88;
      --accent2:   #00d4ff;
      --danger:    #ff4d4d;
      --text:      #e8e8f0;
      --muted:     #5a5a7a;
      --glow:      0 0 30px rgba(0,255,136,0.25);
    }

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      background: var(--bg);
      color: var(--text);
      font-family: 'DM Mono', monospace;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      overflow-x: hidden;
      padding: 2rem 1rem;
    }

    /* ── animated background grid ── */
    body::before {
      content: '';
      position: fixed;
      inset: 0;
      background-image:
        linear-gradient(rgba(0,255,136,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0,255,136,0.03) 1px, transparent 1px);
      background-size: 40px 40px;
      pointer-events: none;
      z-index: 0;
    }

    /* ── glowing orb ── */
    body::after {
      content: '';
      position: fixed;
      top: -200px;
      right: -200px;
      width: 600px;
      height: 600px;
      background: radial-gradient(circle, rgba(0,255,136,0.08) 0%, transparent 70%);
      pointer-events: none;
      z-index: 0;
      animation: orb 8s ease-in-out infinite alternate;
    }

    @keyframes orb {
      from { transform: translate(0,0); }
      to   { transform: translate(-80px, 80px); }
    }

    /* ── wrapper ── */
    .card {
      position: relative;
      z-index: 1;
      width: 100%;
      max-width: 480px;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 20px;
      padding: 2.5rem 2rem;
      box-shadow:
        0 0 0 1px rgba(0,255,136,0.06),
        0 32px 80px rgba(0,0,0,0.6);
      animation: fadeUp 0.6s cubic-bezier(.16,1,.3,1) both;
    }

    @keyframes fadeUp {
      from { opacity:0; transform:translateY(24px); }
      to   { opacity:1; transform:translateY(0); }
    }

    /* ── header ── */
    .brand {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 2rem;
    }

    .brand-icon {
      width: 44px; height: 44px;
      background: linear-gradient(135deg, var(--accent), var(--accent2));
      border-radius: 12px;
      display: grid;
      place-items: center;
      font-size: 1.3rem;
      box-shadow: var(--glow);
      flex-shrink: 0;
    }

    .brand-name {
      font-family: 'Syne', sans-serif;
      font-weight: 800;
      font-size: 1.35rem;
      letter-spacing: 0.04em;
      background: linear-gradient(135deg, var(--accent), var(--accent2));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .brand-sub {
      font-size: 0.7rem;
      color: var(--muted);
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-top: 2px;
    }

    /* ── steps indicator ── */
    .steps {
      display: flex;
      align-items: center;
      gap: 0;
      margin-bottom: 2rem;
    }

    .step {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.7rem;
      color: var(--muted);
      letter-spacing: 0.05em;
      text-transform: uppercase;
      transition: color 0.3s;
    }

    .step.active  { color: var(--accent); }
    .step.done    { color: var(--accent2); }

    .step-num {
      width: 22px; height: 22px;
      border-radius: 50%;
      border: 1px solid currentColor;
      display: grid;
      place-items: center;
      font-size: 0.65rem;
      font-weight: 500;
      flex-shrink: 0;
      transition: background 0.3s, border-color 0.3s;
    }

    .step.active .step-num  { background: var(--accent);  border-color: var(--accent);  color: #000; }
    .step.done   .step-num  { background: var(--accent2); border-color: var(--accent2); color: #000; }

    .step-line {
      flex: 1;
      height: 1px;
      background: var(--border);
      margin: 0 0.5rem;
    }

    /* ── section title ── */
    h2 {
      font-family: 'Syne', sans-serif;
      font-weight: 700;
      font-size: 1.2rem;
      margin-bottom: 0.4rem;
      color: var(--text);
    }

    .hint {
      font-size: 0.75rem;
      color: var(--muted);
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    /* ── input ── */
    .field {
      position: relative;
      margin-bottom: 1.25rem;
    }

    .field label {
      display: block;
      font-size: 0.68rem;
      color: var(--muted);
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 0.4rem;
    }

    .field input {
      width: 100%;
      background: var(--bg);
      border: 1px solid var(--border);
      border-radius: 10px;
      padding: 0.75rem 1rem;
      color: var(--text);
      font-family: 'DM Mono', monospace;
      font-size: 0.95rem;
      outline: none;
      transition: border-color 0.2s, box-shadow 0.2s;
    }

    .field input::placeholder { color: var(--muted); }

    .field input:focus {
      border-color: var(--accent);
      box-shadow: 0 0 0 3px rgba(0,255,136,0.12);
    }

    .field input.error {
      border-color: var(--danger);
      box-shadow: 0 0 0 3px rgba(255,77,77,0.12);
    }

    /* ── button ── */
    .btn {
      width: 100%;
      padding: 0.85rem 1rem;
      background: linear-gradient(135deg, var(--accent), var(--accent2));
      color: #000;
      font-family: 'Syne', sans-serif;
      font-weight: 700;
      font-size: 0.9rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      transition: opacity 0.2s, transform 0.15s, box-shadow 0.2s;
      box-shadow: 0 0 20px rgba(0,255,136,0.3);
      position: relative;
      overflow: hidden;
    }

    .btn::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, rgba(255,255,255,0.2), transparent);
      opacity: 0;
      transition: opacity 0.2s;
    }

    .btn:hover { transform: translateY(-2px); box-shadow: 0 0 30px rgba(0,255,136,0.45); }
    .btn:hover::after { opacity: 1; }
    .btn:active { transform: translateY(0); }
    .btn:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }

    /* ── code display ── */
    .code-box {
      display: none;
      margin-top: 1.5rem;
      animation: fadeUp 0.4s cubic-bezier(.16,1,.3,1) both;
    }

    .code-box.visible { display: block; }

    .code-label {
      font-size: 0.68rem;
      color: var(--muted);
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 0.6rem;
    }

    .code-value {
      background: var(--bg);
      border: 1px solid var(--accent);
      border-radius: 12px;
      padding: 1.25rem;
      text-align: center;
      font-size: 2rem;
      font-weight: 500;
      letter-spacing: 0.3em;
      color: var(--accent);
      box-shadow: var(--glow);
      user-select: all;
      cursor: pointer;
      transition: box-shadow 0.2s;
      word-break: break-all;
    }

    .code-value:hover { box-shadow: 0 0 40px rgba(0,255,136,0.35); }

    .code-note {
      font-size: 0.72rem;
      color: var(--muted);
      margin-top: 0.75rem;
      line-height: 1.6;
      text-align: center;
    }

    .code-note strong { color: var(--text); }

    /* ── loader ── */
    .loader {
      display: none;
      align-items: center;
      gap: 0.5rem;
      color: var(--muted);
      font-size: 0.8rem;
      margin-top: 1rem;
    }

    .loader.visible { display: flex; }

    .spinner {
      width: 14px; height: 14px;
      border: 2px solid var(--border);
      border-top-color: var(--accent);
      border-radius: 50%;
      animation: spin 0.7s linear infinite;
    }

    @keyframes spin { to { transform: rotate(360deg); } }

    /* ── error ── */
    .error-msg {
      display: none;
      color: var(--danger);
      font-size: 0.75rem;
      margin-top: 0.5rem;
    }

    .error-msg.visible { display: block; }

    /* ── success badge ── */
    .success-badge {
      display: none;
      align-items: center;
      gap: 0.5rem;
      background: rgba(0,255,136,0.08);
      border: 1px solid rgba(0,255,136,0.2);
      border-radius: 8px;
      padding: 0.6rem 0.75rem;
      font-size: 0.78rem;
      color: var(--accent);
      margin-top: 1rem;
      animation: fadeUp 0.3s ease both;
    }

    .success-badge.visible { display: flex; }

    /* ── how-to steps ── */
    .how-to {
      margin-top: 2rem;
      border-top: 1px solid var(--border);
      padding-top: 1.5rem;
    }

    .how-to h3 {
      font-family: 'Syne', sans-serif;
      font-size: 0.78rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--muted);
      margin-bottom: 1rem;
    }

    .how-steps { list-style: none; display: flex; flex-direction: column; gap: 0.6rem; }

    .how-steps li {
      display: flex;
      gap: 0.75rem;
      align-items: flex-start;
      font-size: 0.78rem;
      color: var(--muted);
      line-height: 1.5;
    }

    .how-steps li .n {
      flex-shrink: 0;
      width: 20px; height: 20px;
      background: var(--border);
      border-radius: 50%;
      display: grid;
      place-items: center;
      font-size: 0.65rem;
      color: var(--text);
      font-weight: 500;
    }

    /* ── footer ── */
    footer {
      position: relative;
      z-index: 1;
      margin-top: 1.5rem;
      font-size: 0.7rem;
      color: var(--muted);
      text-align: center;
      letter-spacing: 0.05em;
    }

    footer span { color: var(--accent); }

    /* ── copy toast ── */
    .toast {
      position: fixed;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%) translateY(10px);
      background: var(--accent);
      color: #000;
      font-family: 'Syne', sans-serif;
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.05em;
      padding: 0.5rem 1.25rem;
      border-radius: 40px;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.25s, transform 0.25s;
      z-index: 100;
    }

    .toast.show { opacity: 1; transform: translateX(-50%) translateY(0); }
  </style>
</head>
<body>

  <div class="card">

    <!-- Brand -->
    <div class="brand">
      <div class="brand-icon">⚡</div>
      <div>
        <div class="brand-name">SUKUNA XD</div>
        <div class="brand-sub">Bot WhatsApp — Session Pairing</div>
      </div>
    </div>

    <!-- Steps -->
    <div class="steps">
      <div class="step active" id="step1-indicator">
        <span class="step-num">1</span>
        <span>Numéro</span>
      </div>
      <div class="step-line"></div>
      <div class="step" id="step2-indicator">
        <span class="step-num">2</span>
        <span>Code</span>
      </div>
      <div class="step-line"></div>
      <div class="step" id="step3-indicator">
        <span class="step-num">3</span>
        <span>Lier</span>
      </div>
    </div>

    <!-- Form -->
    <h2>Générer un code de liaison</h2>
    <p class="hint">Saisissez votre numéro WhatsApp en format international (sans + ni espaces). Le code sera valable <strong style="color:var(--text)">60 secondes</strong>.</p>

    <div class="field">
      <label for="phone">Numéro WhatsApp</label>
      <input
        type="tel"
        id="phone"
        placeholder="Ex: 2250541234567"
        maxlength="20"
        autocomplete="tel"
      />
    </div>

    <p class="error-msg" id="err-msg">Format invalide. Entrez uniquement des chiffres avec l'indicatif pays.</p>

    <button class="btn" id="gen-btn" onclick="generateCode()">
      ⚡ Générer le code
    </button>

    <div class="loader" id="loader">
      <div class="spinner"></div>
      <span>Génération en cours…</span>
    </div>

    <!-- Code Result -->
    <div class="code-box" id="code-box">
      <p class="code-label">Votre code de liaison</p>
      <div class="code-value" id="code-value" title="Cliquer pour copier" onclick="copyCode()">
        — — — —
      </div>
      <p class="code-note">
        Cliquez sur le code pour le copier.<br/>
        <strong>Valable 60 secondes.</strong> Entrez-le dans WhatsApp avant expiration.
      </p>
    </div>

    <div class="success-badge" id="success-badge">
      ✅ Code copié dans le presse-papiers !
    </div>

    <!-- How to use -->
    <div class="how-to">
      <h3>Comment lier le bot ?</h3>
      <ul class="how-steps">
        <li>
          <span class="n">1</span>
          <span>Entrez votre numéro WhatsApp ci-dessus et cliquez sur <strong style="color:var(--text)">Générer le code</strong>.</span>
        </li>
        <li>
          <span class="n">2</span>
          <span>Ouvrez <strong style="color:var(--text)">WhatsApp</strong> sur votre téléphone.</span>
        </li>
        <li>
          <span class="n">3</span>
          <span>Appuyez sur les <strong style="color:var(--text)">3 points</strong> → <em>Appareils connectés</em> → <em>Associer un appareil</em>.</span>
        </li>
        <li>
          <span class="n">4</span>
          <span>Choisissez <strong style="color:var(--text)">Associer avec un numéro de téléphone</strong> et saisissez le code affiché.</span>
        </li>
        <li>
          <span class="n">5</span>
          <span>Le bot sera connecté en quelques secondes. ✅</span>
        </li>
      </ul>
    </div>

  </div>

  <footer>
    Propulsé par <span>SUKUNA XD</span> · WhatsApp Multi-Device Bot
  </footer>

  <div class="toast" id="toast">Code copié !</div>

  <script>
    const API_URL = window.location.origin; // même domaine que le bot

    let currentCode = '';

    function showError(msg) {
      const el = document.getElementById('err-msg');
      el.textContent = msg;
      el.classList.add('visible');
      document.getElementById('phone').classList.add('error');
    }

    function clearError() {
      document.getElementById('err-msg').classList.remove('visible');
      document.getElementById('phone').classList.remove('error');
    }

    function setLoading(on) {
      document.getElementById('loader').classList.toggle('visible', on);
      document.getElementById('gen-btn').disabled = on;
    }

    function setStep(n) {
      [1,2,3].forEach(i => {
        const el = document.getElementById(`step${i}-indicator`);
        el.classList.remove('active','done');
        if (i < n)  el.classList.add('done');
        if (i === n) el.classList.add('active');
      });
    }

    async function generateCode() {
      clearError();
      const raw = document.getElementById('phone').value.trim().replace(/\D/g,'');

      if (raw.length < 6 || raw.length > 20) {
        showError('Format invalide. Entrez uniquement des chiffres avec l\'indicatif pays.');
        return;
      }

      setLoading(true);
      document.getElementById('code-box').classList.remove('visible');
      document.getElementById('success-badge').classList.remove('visible');
      setStep(2);

      try {
        // ── Appel vers l'endpoint du bot ──
        // Modifiez l'URL ci-dessous selon votre configuration backend
        const res = await fetch(`${API_URL}/pair?number=${encodeURIComponent(raw)}`);

        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const data = await res.json();

        if (!data.code) throw new Error('Pas de code reçu');

        currentCode = data.code;
        document.getElementById('code-value').textContent = data.code;
        document.getElementById('code-box').classList.add('visible');
        setStep(3);

        // auto-expire display after 60s
        setTimeout(() => {
          document.getElementById('code-value').textContent = '— — — —';
          document.getElementById('code-box').classList.remove('visible');
          setStep(1);
        }, 60000);

      } catch (e) {
        showError('Erreur lors de la génération du code. Vérifiez votre numéro et réessayez.');
        setStep(1);
        console.error(e);
      } finally {
        setLoading(false);
      }
    }

    function copyCode() {
      if (!currentCode) return;
      navigator.clipboard.writeText(currentCode).then(() => {
        document.getElementById('success-badge').classList.add('visible');
        showToast();
      }).catch(() => {
        // fallback
        const ta = document.createElement('textarea');
        ta.value = currentCode;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        ta.remove();
        showToast();
      });
    }

    function showToast() {
      const t = document.getElementById('toast');
      t.classList.add('show');
      setTimeout(() => t.classList.remove('show'), 2000);
    }

    // Allow Enter key
    document.getElementById('phone').addEventListener('keydown', e => {
      if (e.key === 'Enter') generateCode();
    });

    // Strip non-digits on input
    document.getElementById('phone').addEventListener('input', function() {
      this.value = this.value.replace(/\D/g,'');
      clearError();
    });
  </script>
</body>
</html>
