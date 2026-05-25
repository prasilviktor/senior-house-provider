export default function ProviderSectionCS() {
  return (
    <section className="sh-provider-section">
      <style>{`
        .sh-provider-section {
          font-family: 'DM Sans', sans-serif;
          background: transparent;
          padding: 0;
          color: var(--color-text, #1a1a1a);
          max-width: 900px;
          margin: 0 auto;
        }
        .sh-eyebrow {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #6B8F71;
          margin-bottom: 12px;
        }
        .sh-h1 {
          font-family: 'Lora', serif;
          font-size: clamp(26px, 4vw, 34px);
          font-weight: 400;
          line-height: 1.28;
          margin: 0 0 16px;
        }
        .sh-h2 {
          font-family: 'Lora', serif;
          font-size: clamp(18px, 3vw, 22px);
          font-weight: 400;
          line-height: 1.35;
          margin: 0 0 10px;
        }
        .sh-lead {
          font-size: 15px;
          line-height: 1.7;
          color: #666;
          font-weight: 300;
          max-width: 640px;
          margin: 0 0 40px;
        }
        .sh-divider { height: 1px; background: #e8e4e0; margin: 60px 0; }

        .chaos-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin: 28px 0 32px; }
        @media (max-width: 640px) { .chaos-grid { grid-template-columns: 1fr 1fr; } }
        .chaos-chip { border: 0.5px solid #e0dbd5; border-radius: 8px; padding: 12px 14px; background: #fff; display: flex; align-items: flex-start; gap: 10px; }
        .chaos-icon { width: 28px; height: 28px; border-radius: 6px; background: #FDF1EE; display: flex; align-items: center; justify-content: center; flex-shrink: 0; color: #C0614A; font-size: 14px; }
        .chaos-label { font-size: 13px; line-height: 1.45; color: #666; padding-top: 4px; }

        .chaos-stat-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 28px; }
        @media (max-width: 640px) { .chaos-stat-row { grid-template-columns: 1fr; } }
        .stat-card { background: #f7f5f2; border-radius: 8px; padding: 16px; text-align: center; }
        .stat-num { font-family: 'Lora', serif; font-size: 28px; font-weight: 400; color: #1a1a1a; margin-bottom: 4px; }
        .stat-desc { font-size: 12px; color: #888; font-weight: 300; }

        .ba-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 28px 0; }
        @media (max-width: 640px) { .ba-grid { grid-template-columns: 1fr; } }
        .ba-card { border: 0.5px solid #e0dbd5; border-radius: 12px; overflow: hidden; background: #fff; }
        .ba-header { padding: 14px 18px; font-size: 12px; font-weight: 500; letter-spacing: 0.06em; text-transform: uppercase; border-bottom: 0.5px solid #e0dbd5; }
        .ba-header-before { background: #FDF1EE; color: #993C1D; }
        .ba-header-after  { background: #EAF5F0; color: #0F6E56; }
        .ba-body { padding: 18px; }
        .ba-row { display: flex; align-items: flex-start; gap: 10px; padding: 8px 0; border-bottom: 0.5px solid #e0dbd5; font-size: 13px; color: #666; }
        .ba-row:last-child { border-bottom: none; }
        .ba-dot-bad  { width: 6px; height: 6px; border-radius: 50%; background: #D85A30; margin-top: 5px; flex-shrink: 0; }
        .ba-dot-good { width: 6px; height: 6px; border-radius: 50%; background: #1D9E75; margin-top: 5px; flex-shrink: 0; }

        .profile-mock { border: 0.5px solid #e0dbd5; border-radius: 8px; padding: 14px 16px; background: #f7f5f2; margin-top: 16px; font-size: 12px; }
        .pm-label { font-size: 10px; text-transform: uppercase; letter-spacing: 0.08em; color: #aaa; margin-bottom: 10px; font-weight: 500; }
        .pm-row { display: flex; justify-content: space-between; align-items: center; padding: 5px 0; border-bottom: 0.5px solid #e0dbd5; }
        .pm-row:last-child { border-bottom: none; }
        .pm-key { color: #666; font-size: 12px; }
        .pm-val { font-size: 12px; font-weight: 500; color: #1a1a1a; }
        .pm-badge { font-size: 10px; font-weight: 500; padding: 2px 8px; border-radius: 4px; }
        .pm-badge-green { background: #EAF5F0; color: #0F6E56; }
        .pm-badge-amber { background: #FAEEDA; color: #854F0B; }
        .pm-badge-blue  { background: #E6F1FB; color: #185FA5; }

        .match-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 28px 0; }
        @media (max-width: 640px) { .match-grid { grid-template-columns: 1fr; } }
        .match-scenario { border: 0.5px solid #e0dbd5; border-radius: 12px; padding: 18px; background: #fff; }
        .match-tag { display: inline-block; font-size: 11px; font-weight: 500; padding: 3px 9px; border-radius: 4px; margin-bottom: 10px; }
        .tag-dementia   { background: #EAF5F0; color: #0F6E56; }
        .tag-mobility   { background: #E6F1FB; color: #185FA5; }
        .tag-palliative { background: #FAEEDA; color: #854F0B; }
        .tag-psych      { background: #EEEDFE; color: #3C3489; }
        .match-title { font-size: 14px; font-weight: 500; margin-bottom: 6px; color: #1a1a1a; }
        .match-desc  { font-size: 12px; line-height: 1.55; color: #666; }
        .match-score-row { display: flex; align-items: center; gap: 8px; margin-top: 12px; }
        .match-bar-bg { flex: 1; height: 4px; background: #e8e4e0; border-radius: 2px; overflow: hidden; }
        .match-bar-fill { height: 100%; border-radius: 2px; }
        .match-pct { font-size: 12px; font-weight: 500; color: #666; min-width: 36px; text-align: right; }

        .outcome-chips { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 28px; }
        .outcome-chip { font-size: 12px; padding: 5px 12px; border-radius: 20px; border: 0.5px solid #e0dbd5; color: #666; background: #fff; display: flex; align-items: center; gap: 6px; }

        .dash-outer { border: 0.5px solid #e0dbd5; border-radius: 12px; overflow: hidden; margin: 28px 0; background: #fff; }
        .dash-topbar { padding: 12px 18px; border-bottom: 0.5px solid #e0dbd5; display: flex; align-items: center; justify-content: space-between; background: #f7f5f2; flex-wrap: wrap; gap: 8px; }
        .dash-title { font-size: 13px; font-weight: 500; color: #1a1a1a; display: flex; align-items: center; gap: 8px; }
        .dash-pills { display: flex; gap: 6px; }
        .dash-pill { font-size: 11px; padding: 3px 10px; border-radius: 12px; border: 0.5px solid #e0dbd5; color: #666; }
        .dash-pill-active { background: #E6F1FB; color: #185FA5; border-color: transparent; }
        .wl-table { width: 100%; border-collapse: collapse; overflow-x: auto; display: block; }
        .wl-table th { font-size: 11px; text-transform: uppercase; letter-spacing: 0.06em; font-weight: 500; color: #aaa; padding: 10px 18px; text-align: left; border-bottom: 0.5px solid #e0dbd5; white-space: nowrap; }
        .wl-table td { padding: 11px 18px; font-size: 13px; color: #1a1a1a; border-bottom: 0.5px solid #e0dbd5; vertical-align: middle; white-space: nowrap; }
        .wl-table tr:last-child td { border-bottom: none; }
        .urgency-dot { display: inline-block; width: 7px; height: 7px; border-radius: 50%; margin-right: 6px; }
        .urgency-high { background: #E24B4A; }
        .urgency-medium { background: #EF9F27; }
        .urgency-low { background: #1D9E75; }
        .doc-progress { display: flex; gap: 3px; align-items: center; }
        .doc-pip { width: 12px; height: 4px; border-radius: 2px; }
        .doc-pip-done { background: #1D9E75; }
        .doc-pip-miss { background: #e0dbd5; }
        .status-badge { font-size: 11px; font-weight: 500; padding: 2px 8px; border-radius: 4px; }
        .status-ready      { background: #EAF5F0; color: #0F6E56; }
        .status-review     { background: #FAEEDA; color: #854F0B; }
        .status-pending    { background: #E6F1FB; color: #185FA5; }
        .status-incomplete { background: #FCEBEB; color: #A32D2D; }

        .admin-flow { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; margin: 28px 0; border: 0.5px solid #e0dbd5; border-radius: 12px; overflow: hidden; }
        @media (max-width: 700px) { .admin-flow { grid-template-columns: 1fr 1fr; } }
        .flow-step { padding: 18px 16px; border-right: 0.5px solid #e0dbd5; background: #fff; }
        .flow-step:last-child { border-right: none; }
        .flow-step-num { font-size: 10px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; color: #aaa; margin-bottom: 8px; }
        .flow-step-icon { width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-bottom: 10px; font-size: 15px; }
        .flow-icon-old { background: #FDF1EE; color: #C0614A; }
        .flow-icon-new { background: #EAF5F0; color: #0F6E56; }
        .flow-step-title { font-size: 13px; font-weight: 500; margin-bottom: 5px; color: #1a1a1a; }
        .flow-step-desc  { font-size: 12px; color: #666; line-height: 1.5; }
        .flow-step-saving { margin-top: 10px; font-size: 11px; font-weight: 500; color: #0F6E56; background: #EAF5F0; display: inline-block; padding: 2px 8px; border-radius: 4px; }

        .metrics-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-top: 28px; }
        @media (max-width: 640px) { .metrics-row { grid-template-columns: 1fr 1fr; } }
        .metric-box { background: #f7f5f2; border-radius: 8px; padding: 16px; text-align: center; }
        .metric-big { font-family: 'Lora', serif; font-size: 26px; font-weight: 400; color: #1a1a1a; margin-bottom: 4px; }
        .metric-big-green { color: #0F6E56; }
        .metric-sub { font-size: 11px; color: #888; line-height: 1.4; }

        .eco-center { display: flex; align-items: center; justify-content: center; margin-bottom: 20px; }
        .eco-core { background: #1a1a1a; color: #fff; border-radius: 12px; padding: 14px 24px; text-align: center; }
        .eco-core-label { font-family: 'Lora', serif; font-size: 15px; font-weight: 400; margin-bottom: 2px; }
        .eco-core-sub   { font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase; opacity: 0.55; }
        .eco-connector-row { display: flex; align-items: center; justify-content: center; gap: 0; margin: 16px 0; }
        .eco-pill { font-size: 10px; font-weight: 500; padding: 3px 10px; border-radius: 12px; background: #f7f5f2; border: 0.5px solid #e0dbd5; color: #666; letter-spacing: 0.04em; }
        .eco-line { height: 1px; background: #e0dbd5; flex: 1; }
        .eco-ring { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
        @media (max-width: 640px) { .eco-ring { grid-template-columns: 1fr 1fr; } }
        .eco-node { border: 0.5px solid #e0dbd5; border-radius: 12px; padding: 16px; background: #fff; text-align: center; }
        .eco-node-icon { width: 36px; height: 36px; border-radius: 9px; display: flex; align-items: center; justify-content: center; margin: 0 auto 10px; font-size: 17px; }
        .eco-node-title { font-size: 13px; font-weight: 500; margin-bottom: 5px; color: #1a1a1a; }
        .eco-node-desc  { font-size: 11px; color: #666; line-height: 1.5; }

        .vision-quote { border-left: 2px solid #6B8F71; padding: 16px 20px; margin: 28px 0; background: #f7f5f2; border-radius: 0 8px 8px 0; }
        .vision-quote p { font-family: 'Lora', serif; font-size: 17px; font-style: italic; font-weight: 400; line-height: 1.55; margin: 0; color: #1a1a1a; }

        .phase-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; margin-top: 28px; }
        @media (max-width: 640px) { .phase-grid { grid-template-columns: 1fr; } }
        .phase-card { border: 0.5px solid #e0dbd5; border-radius: 8px; padding: 16px; background: #fff; }
        .phase-num   { font-size: 10px; text-transform: uppercase; letter-spacing: 0.08em; color: #aaa; margin-bottom: 6px; font-weight: 500; }
        .phase-title { font-size: 13px; font-weight: 500; margin-bottom: 5px; color: #1a1a1a; }
        .phase-desc  { font-size: 12px; color: #666; line-height: 1.5; }
      `}</style>

      {/* INTRO */}
      <p className="sh-eyebrow">Pro domovy seniorů · zařízení seniorského bydlení · domácí péči</p>
      <h1 className="sh-h1">Postaveno pro poskytovatele.<br />Nejde jen o přísun klientů.</h1>
      <p className="sh-lead">
        Zařízení seniorské péče nezápasí s nedostatkem zájmu. Jsou zahlcena operačním chaosem — roztříštěným příjmem,
        neúplnou dokumentací, vystresovanými rodinami a manuální koordinací, která každý den pohlcuje kapacitu pečovatelů.
      </p>

      <div className="sh-divider" />

      {/* SEKCE 1 */}
      <p className="sh-eyebrow">Současná realita</p>
      <h2 className="sh-h2">Koordinační chaos, ne nedostatek poptávky.</h2>
      <p className="sh-lead" style={{ marginBottom: 24 }}>
        Problémem není obsazenost. Problémem je, co stojí za tím, aby bylo lůžko obsazeno — a co se při tom rozpadá.
      </p>

      <div className="chaos-grid">
        {[
          "Desítky příjmových hovorů měsíčně, mnohé nekvalifikované",
          "E-maily s chybějícími nebo nečitelnými dokumenty",
          "Fotky zdravotních zpráv posílané přes WhatsApp",
          "Opakované posuzování stavu, protože informace jsou neúplné",
          "Rodiny v emočním stresu, které je těžké provést procesem",
          "Čekací listiny vedené v tabulkách nebo na papíře",
        ].map((label, i) => (
          <div className="chaos-chip" key={i}>
            <div className="chaos-icon">●</div>
            <div className="chaos-label">{label}</div>
          </div>
        ))}
      </div>

      <div className="chaos-stat-row">
        <div className="stat-card"><div className="stat-num">30–60 min</div><div className="stat-desc">průměrná délka prvního příjmového hovoru</div></div>
        <div className="stat-card"><div className="stat-num">~40 %</div><div className="stat-desc">žádostí přichází bez kompletní dokumentace</div></div>
        <div className="stat-card"><div className="stat-num">3–5×</div><div className="stat-desc">žádáme o stejné informace od jedné rodiny</div></div>
      </div>

      <div className="sh-divider" />

      {/* SEKCE 2 */}
      <p className="sh-eyebrow">Předkvalifikovaný příjem</p>
      <h2 className="sh-h2">Od chaotických poptávek ke strukturovaným profilům péče.</h2>
      <p className="sh-lead" style={{ marginBottom: 4 }}>
        Každá rodina přichází s úplným, strukturovaným profilem — ještě před prvním rozhovorem.
      </p>

      <div className="ba-grid">
        <div className="ba-card">
          <div className="ba-header ba-header-before">Bez Senior House</div>
          <div className="ba-body">
            {[
              "Telefonát s nejasnou potřebou péče a silným emočním nábojem",
              "Ve fázi poptávky není k dispozici žádná zdravotní dokumentace",
              "Míra závislosti neznámá — až do osobního posouzení",
              "Financování zcela nejasné — rodina si nároky nezjistila",
              "Stejné informace sbíráme znovu u každého zařízení",
            ].map((t, i) => (
              <div className="ba-row" key={i}><div className="ba-dot-bad" /><span>{t}</span></div>
            ))}
          </div>
        </div>
        <div className="ba-card">
          <div className="ba-header ba-header-after">Se Senior House</div>
          <div className="ba-body">
            {[
              "Strukturovaný profil s potřebami péče, diagnózami a pohyblivostí",
              "Zdravotní a sociální dokumenty nahrány a ověřeny",
              "Stupeň závislosti a náročnost péče přesně definovány",
              "Přehled financování — příspěvek na péči, pojištění, rozpočet",
              "Skóre kompatibility vypočítáno před prvním kontaktem",
            ].map((t, i) => (
              <div className="ba-row" key={i}><div className="ba-dot-good" /><span>{t}</span></div>
            ))}
          </div>
        </div>
      </div>

      <div className="profile-mock">
        <div className="pm-label">Univerzální profil péče — příklad</div>
        {[
          { k: "Stupeň péče", v: <span className="pm-badge pm-badge-blue">Stupeň III — vysoká závislost</span> },
          { k: "Hlavní diagnóza", v: <span className="pm-val">Vaskulární demence — středně pokročilé stadium</span> },
          { k: "Pohyblivost", v: <span className="pm-val">Závislý/á na vozíku, přesuny s asistencí</span> },
          { k: "Noční péče", v: <span className="pm-badge pm-badge-amber">Ano — střední četnost</span> },
          { k: "Měsíční rozpočet", v: <span className="pm-val">28 000 Kč + příspěvek na péči potvrzen</span> },
          { k: "Dokumenty", v: <span className="pm-badge pm-badge-green">Kompletní — 6/6 nahráno</span> },
        ].map(({ k, v }, i) => (
          <div className="pm-row" key={i}><span className="pm-key">{k}</span>{v}</div>
        ))}
      </div>

      <div className="sh-divider" />

      {/* SEKCE 3 */}
      <p className="sh-eyebrow">Chytrá kompatibilita</p>
      <h2 className="sh-h2">Lepší párování chrání pečovatele i rodiny.</h2>
      <p className="sh-lead" style={{ marginBottom: 4 }}>
        Ne každý klient se hodí do každého zařízení. Špatné umístění vede ke konfliktům, přesunům a vyhoření personálu.
        Senior House identifikuje kompatibilitu ještě před nástupem.
      </p>

      <div className="match-grid">
        {[
          { tag: "tag-dementia", tagLabel: "Péče o demenci", title: "Nutnost zabezpečeného oddělení", desc: "Pokročilá Alzheimerova choroba vyžaduje zabezpečené prostředí, prevenci bloudění a speciálně vyškolený personál — vše automaticky vyhodnoceno.", pct: 88, color: "#1D9E75", pctColor: "#0F6E56" },
          { tag: "tag-mobility", tagLabel: "Omezená pohyblivost", title: "Bezbariérovost ověřena", desc: "Závislost na vozíku porovnána s dispozicí zařízení, dostupností výtahů a přístupností koupelen — před první poptávkou.", pct: 94, color: "#1D9E75", pctColor: "#0F6E56" },
          { tag: "tag-palliative", tagLabel: "Paliativní péče", title: "Kapacita pro end-of-life označena", desc: "Rodiny hledající paliativní péči potřebují konkrétní kapacitu a zkušenost personálu. Povrchní párování zbytečně zatěžuje všechny strany.", pct: 72, color: "#EF9F27", pctColor: "#854F0B" },
          { tag: "tag-psych", tagLabel: "Behaviorální potřeby", title: "Kompetence personálu ověřeny", desc: "Agitovanost, agresivita nebo psychiatrické komorbidity vyžadují specializovaný personál. Nevhodné umístění je nákladné pro zařízení i rodinu.", pct: 61, color: "#D85A30", pctColor: "#993C1D" },
        ].map((s, i) => (
          <div className="match-scenario" key={i}>
            <span className={`match-tag ${s.tag}`}>{s.tagLabel}</span>
            <div className="match-title">{s.title}</div>
            <div className="match-desc">{s.desc}</div>
            <div className="match-score-row">
              <div className="match-bar-bg"><div className="match-bar-fill" style={{ width: `${s.pct}%`, background: s.color }} /></div>
              <div className="match-pct" style={{ color: s.pctColor }}>{s.pct} %</div>
            </div>
          </div>
        ))}
      </div>

      <div className="outcome-chips">
        {["Méně nechtěných přesunů","Nižší vyhoření personálu","Realistická očekávání rodin","Lepší výsledky péče","Méně konfliktních situací"].map((t, i) => (
          <div className="outcome-chip" key={i}>● {t}</div>
        ))}
      </div>

      <div className="sh-divider" />

      {/* SEKCE 4 */}
      <p className="sh-eyebrow">Správa čekacích listin</p>
      <h2 className="sh-h2">Čekací listiny jako inteligentní příjmový pipeline.</h2>
      <p className="sh-lead" style={{ marginBottom: 4 }}>
        Většina zařízení spravuje čekací listiny v tabulkách. Senior House je nahrazuje živou, prioritizovanou frontou s přehledem dokumentů.
      </p>

      <div className="dash-outer">
        <div className="dash-topbar">
          <div className="dash-title">Pipeline péče — čekací listina</div>
          <div className="dash-pills">
            <span className="dash-pill dash-pill-active">Vše (12)</span>
            <span className="dash-pill">Urgentní (3)</span>
            <span className="dash-pill">Připraveni (5)</span>
          </div>
        </div>
        <table className="wl-table">
          <thead>
            <tr><th>Žadatel</th><th>Urgence</th><th>Stupeň péče</th><th>Dokumenty</th><th>Financování</th><th>Stav</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>J. Novák, 81 let</strong><br /><span style={{ fontSize: 11, color: "#888" }}>Demence — střední stadium</span></td>
              <td><span className="urgency-dot urgency-high" />Vysoká</td>
              <td>Stupeň III</td>
              <td><div className="doc-progress">{[1,1,1,1,1].map((d,i) => <div key={i} className="doc-pip doc-pip-done" />)}</div></td>
              <td><span className="pm-badge pm-badge-green">Potvrzeno</span></td>
              <td><span className="status-badge status-ready">Připraven k nástupu</span></td>
            </tr>
            <tr>
              <td><strong>M. Kratochvílová, 77 let</strong><br /><span style={{ fontSize: 11, color: "#888" }}>Rehabilitace po CMP</span></td>
              <td><span className="urgency-dot urgency-high" />Vysoká</td>
              <td>Stupeň II</td>
              <td><div className="doc-progress">{[1,1,1,0,0].map((d,i) => <div key={i} className={`doc-pip ${d ? 'doc-pip-done' : 'doc-pip-miss'}`} />)}</div></td>
              <td><span className="pm-badge pm-badge-amber">Částečné</span></td>
              <td><span className="status-badge status-review">Čekáme na doklady</span></td>
            </tr>
            <tr>
              <td><strong>F. Horáček, 84 let</strong><br /><span style={{ fontSize: 11, color: "#888" }}>Parkinson — pokročilé stadium</span></td>
              <td><span className="urgency-dot urgency-medium" />Střední</td>
              <td>Stupeň III</td>
              <td><div className="doc-progress">{[1,1,1,1,0].map((d,i) => <div key={i} className={`doc-pip ${d ? 'doc-pip-done' : 'doc-pip-miss'}`} />)}</div></td>
              <td><span className="pm-badge pm-badge-green">Potvrzeno</span></td>
              <td><span className="status-badge status-pending">Čeká na posouzení</span></td>
            </tr>
            <tr>
              <td><strong>V. Blahová, 79 let</strong><br /><span style={{ fontSize: 11, color: "#888" }}>Kardiální, omezená mobilita</span></td>
              <td><span className="urgency-dot urgency-low" />Nízká</td>
              <td>Stupeň I</td>
              <td><div className="doc-progress">{[1,0,0,0,0].map((d,i) => <div key={i} className={`doc-pip ${d ? 'doc-pip-done' : 'doc-pip-miss'}`} />)}</div></td>
              <td><span className="pm-badge pm-badge-amber">Zjišťujeme</span></td>
              <td><span className="status-badge status-incomplete">Neúplná žádost</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="sh-divider" />

      {/* SEKCE 5 */}
      <p className="sh-eyebrow">Administrativní zátěž</p>
      <h2 className="sh-h2">Chráníme kapacitu pečovatelů chytřejší koordinací.</h2>
      <p className="sh-lead" style={{ marginBottom: 4 }}>
        Senior House nenahrazuje pečovatele. Odstraňuje koordinační práci, která je odvádí od samotné péče.
      </p>

      <div className="admin-flow">
        {[
          { title: "Příjmový hovor", desc: "45minutový hovor. Stav klienta nejasný. Žádné dokumenty." },
          { title: "Honění dokumentů", desc: "3–4 následné kontakty. PDF přes WhatsApp. Neúplné záznamy." },
          { title: "Ruční posouzení", desc: "Papírový formulář. Opakuje se u každého osloveného zařízení." },
          { title: "Tabulková fronta", desc: "Statický seznam. Žádný signál urgence ani stav dokumentů." },
        ].map((s, i) => (
          <div className="flow-step" key={i}>
            <div className="flow-step-num">Dnes</div>
            <div className="flow-step-icon flow-icon-old">●</div>
            <div className="flow-step-title">{s.title}</div>
            <div className="flow-step-desc">{s.desc}</div>
          </div>
        ))}
      </div>

      <div className="admin-flow" style={{ marginTop: 10 }}>
        {[
          { title: "Předkvalifikovaný profil", desc: "Diagnózy, potřeby, stupeň péče a rozpočet — kompletní před kontaktem.", saving: "↓ 70 % času na hovor" },
          { title: "Trezor dokumentů", desc: "Všechny dokumenty nahrány, uspořádány a ověřeny na jednom místě.", saving: "↓ Téměř nulové honění" },
          { title: "Skóre kompatibility", desc: "Automatické párování ještě před kontrolou personálem. Nevhodní filtrováni.", saving: "↓ Méně špatných shod" },
          { title: "Živý care pipeline", desc: "Priorita, urgence, stav dokumentů a zprávy od rodin — v reálném čase.", saving: "↓ Žádné ruční sledování" },
        ].map((s, i) => (
          <div className="flow-step" key={i}>
            <div className="flow-step-num">Se Senior House</div>
            <div className="flow-step-icon flow-icon-new">✓</div>
            <div className="flow-step-title">{s.title}</div>
            <div className="flow-step-desc">{s.desc}</div>
            <div className="flow-step-saving">{s.saving}</div>
          </div>
        ))}
      </div>

      <div className="metrics-row">
        <div className="metric-box"><div className="metric-big metric-big-green">–65 %</div><div className="metric-sub">administrativní čas na jednoho žadatele</div></div>
        <div className="metric-box"><div className="metric-big metric-big-green">3×</div><div className="metric-sub">rychlejší rozhodnutí o přijetí od první poptávky</div></div>
        <div className="metric-box"><div className="metric-big metric-big-green">–80 %</div><div className="metric-sub">kontaktů za účelem doplnění dokumentů</div></div>
        <div className="metric-box"><div className="metric-big metric-big-green">↑ shoda</div><div className="metric-sub">lépe párovaná umístění, méně raných přesunů</div></div>
      </div>

      <div className="sh-divider" />

      {/* SEKCE 6 */}
      <p className="sh-eyebrow">Dlouhodobá vize</p>
      <h2 className="sh-h2">Budujeme digitální infrastrukturu pro stárnoucí Evropu.</h2>
      <p className="sh-lead" style={{ marginBottom: 28 }}>
        Senior House začíná jako chytřejší příjem klientů. Roste v koordinační vrstvu, která propojuje každého aktéra v ekosystému péče.
      </p>

      <div className="eco-center">
        <div className="eco-core">
          <div className="eco-core-label">Senior House</div>
          <div className="eco-core-sub">Platforma koordinace péče</div>
        </div>
      </div>

      <div className="eco-connector-row">
        <div className="eco-line" />
        <div className="eco-pill">Koordinační vrstva</div>
        <div className="eco-line" />
      </div>

      <div className="eco-ring">
        {[
          { icon: "👨‍👩‍👧", bg: "#EAF5F0", color: "#0F6E56", title: "Rodiny", desc: "Profil péče, trezor dokumentů, komunikační hub, průvodce financováním" },
          { icon: "🏥", bg: "#E6F1FB", color: "#185FA5", title: "Zařízení a domácí péče", desc: "Předkvalifikovaný příjem, chytrá čekací listina, care CRM, správa obsazenosti" },
          { icon: "🩺", bg: "#EEEDFE", color: "#3C3489", title: "Lékaři a zdravotnictví", desc: "Sdílení zdravotní dokumentace, přechody péče, klinické předávání" },
          { icon: "🛡️", bg: "#FAEEDA", color: "#854F0B", title: "Pojišťovny", desc: "Ověření krytí, nárok na stupeň péče, koordinace dávek" },
          { icon: "🏛️", bg: "#EAF3DE", color: "#3B6D11", title: "Stát a sociální systém", desc: "Integrace příspěvku na péči, mapování nároků, koordinace dotací" },
          { icon: "💳", bg: "#FDF1EE", color: "#993C1D", title: "Finanční instituce", desc: "Financování péče, etické úvěrové produkty, transparentní plánování nákladů" },
        ].map((n, i) => (
          <div className="eco-node" key={i}>
            <div className="eco-node-icon" style={{ background: n.bg, color: n.color }}>{n.icon}</div>
            <div className="eco-node-title">{n.title}</div>
            <div className="eco-node-desc">{n.desc}</div>
          </div>
        ))}
      </div>

      <div className="vision-quote" style={{ marginTop: 32 }}>
        <p>„Péče o seniory není problém vyhledávání. Je to problém infrastruktury. Senior House tuto infrastrukturu buduje."</p>
      </div>

      <div className="phase-grid">
        {[
          { num: "Fáze 1", title: "Tržiště péče", desc: "Platforma pro párování, předkvalifikovaný příjem, ověřená síť poskytovatelů" },
          { num: "Fáze 2", title: "Operační systém péče", desc: "CRM pro poskytovatele, příjmový pipeline, trezor dokumentů, rodinný hub" },
          { num: "Fáze 3", title: "Ekosystémová vrstva", desc: "Interoperabilita s pojišťovnami, zdravotnictvím, finančními institucemi a státními systémy" },
        ].map((p, i) => (
          <div className="phase-card" key={i}>
            <div className="phase-num">{p.num}</div>
            <div className="phase-title">{p.title}</div>
            <div className="phase-desc">{p.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
