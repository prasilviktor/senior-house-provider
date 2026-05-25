export default function ProviderSection() {
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
        .sh-divider {
          height: 1px;
          background: #e8e4e0;
          margin: 60px 0;
        }

        /* Chaos chips */
        .chaos-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin: 28px 0 32px;
        }
        @media (max-width: 640px) { .chaos-grid { grid-template-columns: 1fr 1fr; } }
        .chaos-chip {
          border: 0.5px solid #e0dbd5;
          border-radius: 8px;
          padding: 12px 14px;
          background: #fff;
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }
        .chaos-icon {
          width: 28px; height: 28px;
          border-radius: 6px;
          background: #FDF1EE;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          color: #C0614A;
          font-size: 14px;
        }
        .chaos-label {
          font-size: 13px; line-height: 1.45; color: #666; padding-top: 4px;
        }

        /* Stat cards */
        .chaos-stat-row {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 28px;
        }
        @media (max-width: 640px) { .chaos-stat-row { grid-template-columns: 1fr; } }
        .stat-card {
          background: #f7f5f2;
          border-radius: 8px; padding: 16px; text-align: center;
        }
        .stat-num {
          font-family: 'Lora', serif; font-size: 28px; font-weight: 400;
          color: #1a1a1a; margin-bottom: 4px;
        }
        .stat-desc { font-size: 12px; color: #888; font-weight: 300; }

        /* Before / After */
        .ba-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 28px 0;
        }
        @media (max-width: 640px) { .ba-grid { grid-template-columns: 1fr; } }
        .ba-card {
          border: 0.5px solid #e0dbd5; border-radius: 12px;
          overflow: hidden; background: #fff;
        }
        .ba-header {
          padding: 14px 18px;
          font-size: 12px; font-weight: 500;
          letter-spacing: 0.06em; text-transform: uppercase;
          border-bottom: 0.5px solid #e0dbd5;
        }
        .ba-header-before { background: #FDF1EE; color: #993C1D; }
        .ba-header-after  { background: #EAF5F0; color: #0F6E56; }
        .ba-body { padding: 18px; }
        .ba-row {
          display: flex; align-items: flex-start; gap: 10px;
          padding: 8px 0; border-bottom: 0.5px solid #e0dbd5;
          font-size: 13px; color: #666;
        }
        .ba-row:last-child { border-bottom: none; }
        .ba-dot-bad  { width: 6px; height: 6px; border-radius: 50%; background: #D85A30; margin-top: 5px; flex-shrink: 0; }
        .ba-dot-good { width: 6px; height: 6px; border-radius: 50%; background: #1D9E75; margin-top: 5px; flex-shrink: 0; }

        /* Profile mock */
        .profile-mock {
          border: 0.5px solid #e0dbd5; border-radius: 8px;
          padding: 14px 16px; background: #f7f5f2;
          margin-top: 16px; font-size: 12px;
        }
        .pm-label {
          font-size: 10px; text-transform: uppercase; letter-spacing: 0.08em;
          color: #aaa; margin-bottom: 10px; font-weight: 500;
        }
        .pm-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: 5px 0; border-bottom: 0.5px solid #e0dbd5;
        }
        .pm-row:last-child { border-bottom: none; }
        .pm-key { color: #666; font-size: 12px; }
        .pm-val { font-size: 12px; font-weight: 500; color: #1a1a1a; }
        .pm-badge { font-size: 10px; font-weight: 500; padding: 2px 8px; border-radius: 4px; }
        .pm-badge-green { background: #EAF5F0; color: #0F6E56; }
        .pm-badge-amber { background: #FAEEDA; color: #854F0B; }
        .pm-badge-blue  { background: #E6F1FB; color: #185FA5; }

        /* Matching */
        .match-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 28px 0;
        }
        @media (max-width: 640px) { .match-grid { grid-template-columns: 1fr; } }
        .match-scenario {
          border: 0.5px solid #e0dbd5; border-radius: 12px;
          padding: 18px; background: #fff;
        }
        .match-tag {
          display: inline-block; font-size: 11px; font-weight: 500;
          padding: 3px 9px; border-radius: 4px; margin-bottom: 10px;
        }
        .tag-dementia   { background: #EAF5F0; color: #0F6E56; }
        .tag-mobility   { background: #E6F1FB; color: #185FA5; }
        .tag-palliative { background: #FAEEDA; color: #854F0B; }
        .tag-psych      { background: #EEEDFE; color: #3C3489; }
        .match-title { font-size: 14px; font-weight: 500; margin-bottom: 6px; color: #1a1a1a; }
        .match-desc  { font-size: 12px; line-height: 1.55; color: #666; }
        .match-score-row { display: flex; align-items: center; gap: 8px; margin-top: 12px; }
        .match-bar-bg {
          flex: 1; height: 4px; background: #e8e4e0;
          border-radius: 2px; overflow: hidden;
        }
        .match-bar-fill { height: 100%; border-radius: 2px; }
        .match-pct { font-size: 12px; font-weight: 500; color: #666; min-width: 36px; text-align: right; }

        .outcome-chips { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 28px; }
        .outcome-chip {
          font-size: 12px; padding: 5px 12px; border-radius: 20px;
          border: 0.5px solid #e0dbd5; color: #666; background: #fff;
          display: flex; align-items: center; gap: 6px;
        }

        /* Dashboard */
        .dash-outer {
          border: 0.5px solid #e0dbd5; border-radius: 12px;
          overflow: hidden; margin: 28px 0; background: #fff;
        }
        .dash-topbar {
          padding: 12px 18px;
          border-bottom: 0.5px solid #e0dbd5;
          display: flex; align-items: center; justify-content: space-between;
          background: #f7f5f2;
          flex-wrap: wrap; gap: 8px;
        }
        .dash-title {
          font-size: 13px; font-weight: 500; color: #1a1a1a;
          display: flex; align-items: center; gap: 8px;
        }
        .dash-pills { display: flex; gap: 6px; }
        .dash-pill {
          font-size: 11px; padding: 3px 10px;
          border-radius: 12px; border: 0.5px solid #e0dbd5; color: #666;
        }
        .dash-pill-active {
          background: #E6F1FB; color: #185FA5; border-color: transparent;
        }
        .wl-table { width: 100%; border-collapse: collapse; overflow-x: auto; display: block; }
        .wl-table th {
          font-size: 11px; text-transform: uppercase; letter-spacing: 0.06em;
          font-weight: 500; color: #aaa; padding: 10px 18px; text-align: left;
          border-bottom: 0.5px solid #e0dbd5; white-space: nowrap;
        }
        .wl-table td {
          padding: 11px 18px; font-size: 13px; color: #1a1a1a;
          border-bottom: 0.5px solid #e0dbd5; vertical-align: middle; white-space: nowrap;
        }
        .wl-table tr:last-child td { border-bottom: none; }
        .urgency-dot { display: inline-block; width: 7px; height: 7px; border-radius: 50%; margin-right: 6px; }
        .urgency-high   { background: #E24B4A; }
        .urgency-medium { background: #EF9F27; }
        .urgency-low    { background: #1D9E75; }
        .doc-progress { display: flex; gap: 3px; align-items: center; }
        .doc-pip { width: 12px; height: 4px; border-radius: 2px; }
        .doc-pip-done { background: #1D9E75; }
        .doc-pip-miss { background: #e0dbd5; }
        .status-badge { font-size: 11px; font-weight: 500; padding: 2px 8px; border-radius: 4px; }
        .status-ready      { background: #EAF5F0; color: #0F6E56; }
        .status-review     { background: #FAEEDA; color: #854F0B; }
        .status-pending    { background: #E6F1FB; color: #185FA5; }
        .status-incomplete { background: #FCEBEB; color: #A32D2D; }

        /* Admin flow */
        .admin-flow {
          display: grid; grid-template-columns: repeat(4, 1fr);
          gap: 0; margin: 28px 0;
          border: 0.5px solid #e0dbd5; border-radius: 12px; overflow: hidden;
        }
        @media (max-width: 700px) { .admin-flow { grid-template-columns: 1fr 1fr; } }
        .flow-step {
          padding: 18px 16px;
          border-right: 0.5px solid #e0dbd5; background: #fff;
        }
        .flow-step:last-child { border-right: none; }
        @media (max-width: 700px) { .flow-step:nth-child(2) { border-right: none; } .flow-step:nth-child(1), .flow-step:nth-child(2) { border-bottom: 0.5px solid #e0dbd5; } }
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

        /* Ecosystem */
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

        .vision-quote {
          border-left: 2px solid #6B8F71; padding: 16px 20px; margin: 28px 0;
          background: #f7f5f2; border-radius: 0 8px 8px 0;
        }
        .vision-quote p { font-family: 'Lora', serif; font-size: 17px; font-style: italic; font-weight: 400; line-height: 1.55; margin: 0; color: #1a1a1a; }

        .phase-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; margin-top: 28px; }
        @media (max-width: 640px) { .phase-grid { grid-template-columns: 1fr; } }
        .phase-card { border: 0.5px solid #e0dbd5; border-radius: 8px; padding: 16px; background: #fff; }
        .phase-num  { font-size: 10px; text-transform: uppercase; letter-spacing: 0.08em; color: #aaa; margin-bottom: 6px; font-weight: 500; }
        .phase-title { font-size: 13px; font-weight: 500; margin-bottom: 5px; color: #1a1a1a; }
        .phase-desc  { font-size: 12px; color: #666; line-height: 1.5; }
      `}</style>

      {/* INTRO */}
      <p className="sh-eyebrow">For nursing homes · senior living · home care</p>
      <h1 className="sh-h1">Built for providers.<br />Not just a source of clients.</h1>
      <p className="sh-lead">
        Senior care facilities are not struggling with demand. They are overwhelmed by operational chaos —
        fragmented intake, incomplete documents, stressed families, and manual coordination that consumes
        caregiver capacity every day.
      </p>

      <div className="sh-divider" />

      {/* SECTION 1 */}
      <p className="sh-eyebrow">The current reality</p>
      <h2 className="sh-h2">Coordination chaos, not insufficient demand.</h2>
      <p className="sh-lead" style={{ marginBottom: 24 }}>
        The problem is not occupancy. The problem is what it takes to fill a bed — and what breaks down along the way.
      </p>

      <div className="chaos-grid">
        {[
          { label: "Dozens of intake calls per month, many unqualified" },
          { label: "Emails with missing or illegible documents" },
          { label: "WhatsApp photos of medical reports from families" },
          { label: "Repeated assessments because condition is unclear" },
          { label: "Families in emotional distress, difficult to guide" },
          { label: "Waiting lists managed in spreadsheets or paper" },
        ].map((item, i) => (
          <div className="chaos-chip" key={i}>
            <div className="chaos-icon">●</div>
            <div className="chaos-label">{item.label}</div>
          </div>
        ))}
      </div>

      <div className="chaos-stat-row">
        <div className="stat-card"><div className="stat-num">30–60 min</div><div className="stat-desc">average initial intake call per applicant</div></div>
        <div className="stat-card"><div className="stat-num">~40%</div><div className="stat-desc">of inquiries lack complete documentation</div></div>
        <div className="stat-card"><div className="stat-num">3–5×</div><div className="stat-desc">information requested from same family</div></div>
      </div>

      <div className="sh-divider" />

      {/* SECTION 2 */}
      <p className="sh-eyebrow">Pre-qualified intake</p>
      <h2 className="sh-h2">From fragmented inquiries to structured care profiles.</h2>
      <p className="sh-lead" style={{ marginBottom: 4 }}>
        Every family arrives with a complete, structured profile — before the first conversation begins.
      </p>

      <div className="ba-grid">
        <div className="ba-card">
          <div className={`ba-header ba-header-before`}>Without Senior House</div>
          <div className="ba-body">
            {["Phone call with unclear care needs and urgent emotional tone","No medical documentation available at inquiry stage","Dependency level unknown until in-person assessment","Financing completely unclear — family hasn't checked entitlements","Same information collected again at every facility contacted"].map((t, i) => (
              <div className="ba-row" key={i}><div className="ba-dot-bad" /><span>{t}</span></div>
            ))}
          </div>
        </div>
        <div className="ba-card">
          <div className={`ba-header ba-header-after`}>With Senior House</div>
          <div className="ba-body">
            {["Structured profile with care needs, diagnoses, and mobility status","Medical and social documents uploaded and verified","Dependency level and care intensity clearly defined","Financing overview included — care allowance, insurance, budget","Compatibility score computed before first contact"].map((t, i) => (
              <div className="ba-row" key={i}><div className="ba-dot-good" /><span>{t}</span></div>
            ))}
          </div>
        </div>
      </div>

      <div className="profile-mock">
        <div className="pm-label">Universal care profile — example</div>
        {[
          { k: "Care level", v: <span className="pm-badge pm-badge-blue">Level III — high dependency</span> },
          { k: "Primary diagnosis", v: <span className="pm-val">Vascular dementia — moderate stage</span> },
          { k: "Mobility", v: <span className="pm-val">Wheelchair-dependent, transfers with assistance</span> },
          { k: "Night care needed", v: <span className="pm-badge pm-badge-amber">Yes — moderate frequency</span> },
          { k: "Monthly budget", v: <span className="pm-val">CZK 28 000 + care allowance confirmed</span> },
          { k: "Documents", v: <span className="pm-badge pm-badge-green">Complete — 6/6 uploaded</span> },
        ].map(({ k, v }, i) => (
          <div className="pm-row" key={i}><span className="pm-key">{k}</span>{v}</div>
        ))}
      </div>

      <div className="sh-divider" />

      {/* SECTION 3 */}
      <p className="sh-eyebrow">Smart compatibility</p>
      <h2 className="sh-h2">Better matching protects caregivers and families.</h2>
      <p className="sh-lead" style={{ marginBottom: 4 }}>
        Not every client fits every facility. Mismatches create conflicts, transfers, and staff burnout.
        Senior House identifies compatibility before placement.
      </p>

      <div className="match-grid">
        {[
          { tag: "tag-dementia", tagLabel: "Dementia care", title: "Secured memory unit required", desc: "Advanced Alzheimer's requires secured environment, wandering prevention, and specialized staff training — flagged automatically.", pct: 88, color: "#1D9E75", pctColor: "#0F6E56" },
          { tag: "tag-mobility", tagLabel: "Mobility limitations", title: "Full accessibility verified", desc: "Wheelchair dependency mapped against facility layout, lift availability, and bathroom accessibility before inquiry.", pct: 94, color: "#1D9E75", pctColor: "#0F6E56" },
          { tag: "tag-palliative", tagLabel: "Palliative care", title: "End-of-life capacity flagged", desc: "Families searching in palliative stage need specific capacity and staff capability. Surface-level matching wastes time for everyone.", pct: 72, color: "#EF9F27", pctColor: "#854F0B" },
          { tag: "tag-psych", tagLabel: "Behavioral needs", title: "Staff capability matched", desc: "Agitation, aggression, or psychiatric comorbidities require specialist staffing. Misplacement is costly for facility and family.", pct: 61, color: "#D85A30", pctColor: "#993C1D" },
        ].map((s, i) => (
          <div className="match-scenario" key={i}>
            <span className={`match-tag ${s.tag}`}>{s.tagLabel}</span>
            <div className="match-title">{s.title}</div>
            <div className="match-desc">{s.desc}</div>
            <div className="match-score-row">
              <div className="match-bar-bg"><div className="match-bar-fill" style={{ width: `${s.pct}%`, background: s.color }} /></div>
              <div className="match-pct" style={{ color: s.pctColor }}>{s.pct}%</div>
            </div>
          </div>
        ))}
      </div>

      <div className="outcome-chips">
        {["Fewer involuntary transfers","Lower staff burnout","Better family expectations","Improved care outcomes","Reduced conflict incidents"].map((t, i) => (
          <div className="outcome-chip" key={i}>● {t}</div>
        ))}
      </div>

      <div className="sh-divider" />

      {/* SECTION 4 */}
      <p className="sh-eyebrow">Waiting list management</p>
      <h2 className="sh-h2">Transforming waiting lists into intelligent care pipelines.</h2>
      <p className="sh-lead" style={{ marginBottom: 4 }}>
        Most facilities manage waiting lists in spreadsheets. Senior House replaces this with a live,
        prioritized, document-aware intake queue.
      </p>

      <div className="dash-outer">
        <div className="dash-topbar">
          <div className="dash-title">Care pipeline — waiting list</div>
          <div className="dash-pills">
            <span className={`dash-pill dash-pill-active`}>All (12)</span>
            <span className="dash-pill">Urgent (3)</span>
            <span className="dash-pill">Ready (5)</span>
          </div>
        </div>
        <table className="wl-table">
          <thead>
            <tr>
              <th>Applicant</th><th>Urgency</th><th>Care level</th><th>Documents</th><th>Financing</th><th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>J. Novák, 81</strong><br /><span style={{ fontSize: 11, color: "#888" }}>Dementia — moderate</span></td>
              <td><span className="urgency-dot urgency-high" />High</td>
              <td>Level III</td>
              <td><div className="doc-progress">{[1,1,1,1,1].map((d,i) => <div key={i} className={`doc-pip doc-pip-done`} />)}</div></td>
              <td><span className="pm-badge pm-badge-green">Confirmed</span></td>
              <td><span className="status-badge status-ready">Ready to admit</span></td>
            </tr>
            <tr>
              <td><strong>M. Kratochvílová, 77</strong><br /><span style={{ fontSize: 11, color: "#888" }}>Post-stroke rehab</span></td>
              <td><span className="urgency-dot urgency-high" />High</td>
              <td>Level II</td>
              <td><div className="doc-progress">{[1,1,1,0,0].map((d,i) => <div key={i} className={`doc-pip ${d ? 'doc-pip-done' : 'doc-pip-miss'}`} />)}</div></td>
              <td><span className="pm-badge pm-badge-amber">Partial</span></td>
              <td><span className="status-badge status-review">Docs pending</span></td>
            </tr>
            <tr>
              <td><strong>F. Horáček, 84</strong><br /><span style={{ fontSize: 11, color: "#888" }}>Parkinson's — advanced</span></td>
              <td><span className="urgency-dot urgency-medium" />Medium</td>
              <td>Level III</td>
              <td><div className="doc-progress">{[1,1,1,1,0].map((d,i) => <div key={i} className={`doc-pip ${d ? 'doc-pip-done' : 'doc-pip-miss'}`} />)}</div></td>
              <td><span className="pm-badge pm-badge-green">Confirmed</span></td>
              <td><span className="status-badge status-pending">Awaiting assessment</span></td>
            </tr>
            <tr>
              <td><strong>V. Blahová, 79</strong><br /><span style={{ fontSize: 11, color: "#888" }}>Cardiac, mobility limited</span></td>
              <td><span className="urgency-dot urgency-low" />Low</td>
              <td>Level I</td>
              <td><div className="doc-progress">{[1,0,0,0,0].map((d,i) => <div key={i} className={`doc-pip ${d ? 'doc-pip-done' : 'doc-pip-miss'}`} />)}</div></td>
              <td><span className="pm-badge pm-badge-amber">Checking</span></td>
              <td><span className="status-badge status-incomplete">Incomplete</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="sh-divider" />

      {/* SECTION 5 */}
      <p className="sh-eyebrow">Administrative burden</p>
      <h2 className="sh-h2">Protecting caregiver capacity through smarter coordination.</h2>
      <p className="sh-lead" style={{ marginBottom: 4 }}>
        Senior House does not replace caregivers. It removes the coordination work that pulls them away from care.
      </p>

      <div className="admin-flow">
        {[
          { title: "Intake call", desc: "45-minute call. Condition often unclear. No documents yet." },
          { title: "Document chase", desc: "3–4 follow-up contacts. PDF via WhatsApp. Partial records." },
          { title: "Manual assessment", desc: "Paper form. Repeated at every facility the family contacts." },
          { title: "Spreadsheet queue", desc: "Static list. No urgency signal. No document status." },
        ].map((s, i) => (
          <div className="flow-step" key={i}>
            <div className="flow-step-num">Before</div>
            <div className="flow-step-icon flow-icon-old">●</div>
            <div className="flow-step-title">{s.title}</div>
            <div className="flow-step-desc">{s.desc}</div>
          </div>
        ))}
      </div>

      <div className="admin-flow" style={{ marginTop: 10 }}>
        {[
          { title: "Pre-qualified profile", desc: "Condition, needs, budget, care level — complete before contact.", saving: "↓ 70% call time" },
          { title: "Document vault", desc: "All documents uploaded, organized, and verified in one place.", saving: "↓ Near-zero chasing" },
          { title: "Compatibility score", desc: "Automated matching before staff review. Mismatches filtered out.", saving: "↓ Fewer poor fits" },
          { title: "Live care pipeline", desc: "Priority, urgency, document status, and family updates — live.", saving: "↓ No manual tracking" },
        ].map((s, i) => (
          <div className="flow-step" key={i}>
            <div className="flow-step-num">With Senior House</div>
            <div className="flow-step-icon flow-icon-new">✓</div>
            <div className="flow-step-title">{s.title}</div>
            <div className="flow-step-desc">{s.desc}</div>
            <div className="flow-step-saving">{s.saving}</div>
          </div>
        ))}
      </div>

      <div className="metrics-row">
        <div className="metric-box"><div className={`metric-big metric-big-green`}>–65%</div><div className="metric-sub">intake admin time per applicant</div></div>
        <div className="metric-box"><div className={`metric-big metric-big-green`}>3×</div><div className="metric-sub">faster time from inquiry to admission decision</div></div>
        <div className="metric-box"><div className={`metric-big metric-big-green`}>–80%</div><div className="metric-sub">document follow-up contacts</div></div>
        <div className="metric-box"><div className={`metric-big metric-big-green`}>↑ fit</div><div className="metric-sub">better matched placements, fewer early transfers</div></div>
      </div>

      <div className="sh-divider" />

      {/* SECTION 6 */}
      <p className="sh-eyebrow">Long-term vision</p>
      <h2 className="sh-h2">Building digital infrastructure for aging Europe.</h2>
      <p className="sh-lead" style={{ marginBottom: 28 }}>
        Senior House starts as smarter intake. It grows into the coordination layer connecting every stakeholder
        in the care ecosystem.
      </p>

      <div className="eco-center">
        <div className="eco-core">
          <div className="eco-core-label">Senior House</div>
          <div className="eco-core-sub">Care coordination platform</div>
        </div>
      </div>

      <div className="eco-connector-row">
        <div className="eco-line" />
        <div className="eco-pill">Coordination layer</div>
        <div className="eco-line" />
      </div>

      <div className="eco-ring">
        {[
          { icon: "👨‍👩‍👧", bg: "#EAF5F0", color: "#0F6E56", title: "Families", desc: "Care profile, document vault, communication hub, financing guidance" },
          { icon: "🏥", bg: "#E6F1FB", color: "#185FA5", title: "Facilities & Home Care", desc: "Pre-qualified intake, smart waiting list, care CRM, occupancy management" },
          { icon: "🩺", bg: "#EEEDFE", color: "#3C3489", title: "Doctors & Health", desc: "Medical record sharing, care transitions, clinical handovers" },
          { icon: "🛡️", bg: "#FAEEDA", color: "#854F0B", title: "Insurers", desc: "Coverage verification, care level eligibility, benefit coordination" },
          { icon: "🏛️", bg: "#EAF3DE", color: "#3B6D11", title: "State & Social", desc: "Care allowance integration, entitlement mapping, subsidy coordination" },
          { icon: "💳", bg: "#FDF1EE", color: "#993C1D", title: "Financial Institutions", desc: "Care financing, ethical credit products, transparent cost planning" },
        ].map((n, i) => (
          <div className="eco-node" key={i}>
            <div className="eco-node-icon" style={{ background: n.bg, color: n.color }}>{n.icon}</div>
            <div className="eco-node-title">{n.title}</div>
            <div className="eco-node-desc">{n.desc}</div>
          </div>
        ))}
      </div>

      <div className="vision-quote" style={{ marginTop: 32 }}>
        <p>"Senior care is not a search problem. It is an infrastructure problem. Senior House is building that infrastructure."</p>
      </div>

      <div className="phase-grid">
        {[
          { num: "Phase 1", title: "Care marketplace", desc: "Matching platform, pre-qualified intake, verified provider network" },
          { num: "Phase 2", title: "Care operating system", desc: "Provider CRM, intake pipeline, document vault, family hub" },
          { num: "Phase 3", title: "Ecosystem layer", desc: "Interoperability with insurers, healthcare, financial institutions, state systems" },
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
