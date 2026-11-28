(function () {
  'use strict';
  var D = window.DATA || {};
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return [].slice.call((r || document).querySelectorAll(s)); };
  var h = function (s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };
  var IMG = '../';
  var NEED = ['overview', 'modules', 'top', 'coverage', 'areas', 'response', 'findings', 'better', 'journeys', 'flows', 'qa', 'defects', 'suites', 'cases', 'jtbd'];
  var missing = NEED.filter(function (k) { return !D[k]; });
  if (missing.length) {
    $('#main').innerHTML = '<div class="empty"><b>The report data did not load</b>Missing: ' + h(missing.join(', ')) + '. Run <code>python3 tools/extract.py</code> to regenerate <code>site/data/</code>.</div>';
    return;
  }

  /* ------------------------------------------------------------ icons (Lucide paths) */
  var IC = {
    dashboard: '<rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>',
    findings: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><path d="M4 22v-7"/>',
    defects: '<path d="m8 2 1.88 1.88M14.12 3.88 16 2M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"/><path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6M12 20v-9M6.53 9C4.6 8.8 3 7.1 3 5M6 13H2M3 21c0-2.1 1.7-3.9 3.8-4M20.97 5c0 2.1-1.6 3.8-3.5 4M22 13h-4M17.2 17c2.1.1 3.8 1.9 3.8 4"/>',
    cases: '<rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/>',
    segments: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
    modules: '<rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>',
    journeys: '<circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/>',
    flows: '<path d="m3 17 2 2 4-4M3 7l2 2 4-4M13 6h8M13 12h8M13 18h8"/>',
    qa: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
    better: '<path d="M7 10v12M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"/>',
    live: '<circle cx="12" cy="12" r="10"/><path d="M12 7v5l3 3"/>',
    studio: '<path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2"/>',
    prod: '<path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>',
    reference: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
    search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    x: '<path d="M18 6 6 18M6 6l12 12"/>',
    right: '<path d="m9 18 6-6-6-6"/>',
    left: '<path d="m15 18-6-6 6-6"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>',
    moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
    link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',
    upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/>',
    alert: '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3M12 9v4M12 17h.01"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    signout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>',
    chev: '<path d="m6 9 6 6 6-6"/>',
    trash: '<path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>'
  };
  function icon(n) { return '<svg class="i" viewBox="0 0 24 24" aria-hidden="true">' + IC[n] + '</svg>'; }

  /* ------------------------------------------------------------ items */
  var JOBS = [];
  D.jtbd.segments.forEach(function (s) { JOBS = JOBS.concat(s.jobs); });
  D.live = D.live || [];
  D.studio = D.studio || [];
  var ITEMS = {};
  function reg(list, kind) { list.forEach(function (d) { ITEMS[d.id] = { kind: kind, d: d }; }); }
  reg(D.findings, 'finding'); reg(D.better, 'better'); reg(D.defects, 'defect'); reg(D.cases, 'case'); reg(JOBS, 'job'); reg(D.live, 'live'); reg(D.studio, 'studio');

  var BACK = {};
  function back(from, to) { if (ITEMS[to] && from !== to) { (BACK[to] = BACK[to] || []).push(from); } }
  D.defects.forEach(function (b) { b.refs.forEach(function (r) { back(b.id, r); }); });
  D.cases.forEach(function (c) { c.defects.forEach(function (r) { back(c.id, r); }); });
  JOBS.forEach(function (j) { j.refs.forEach(function (r) { back(j.id, r); }); });

  var KINDS = {
    finding: { label: 'Findings', one: 'Finding', items: D.findings, route: 'findings' },
    defect: { label: 'Defects', one: 'Defect', items: D.defects, route: 'defects' },
    case: { label: 'Failed test cases', one: 'Test case', items: D.cases.filter(function (c) { return c.status !== 'pass'; }), route: 'cases' },
    job: { label: 'User jobs', one: 'Job', items: JOBS, route: 'segments' },
    live: { label: 'Live Issues', one: 'Live issue', items: D.live, route: 'live' },
    studio: { label: 'Studio Issues', one: 'Studio issue', items: D.studio, route: 'studio' }
  };
  function refreshCaseItems() { KINDS.case.items = D.cases.filter(function (c) { return c.status !== 'pass'; }); }
  function kindName(id) { var k = ITEMS[id].kind; return KINDS[k] ? KINDS[k].one : 'Beta is better'; }
  function trackable(id) {
    var it = ITEMS[id];
    return !!it && it.kind !== 'better' && !(it.kind === 'case' && it.d.status === 'pass');
  }

  /* ------------------------------------------------------------ feedback */
  function toast(msg, err) {
    var el = document.createElement('div');
    el.className = 'toast' + (err ? ' err' : '');
    el.innerHTML = icon(err ? 'alert' : 'check') + '<span>' + h(msg) + '</span>';
    $('#toasts').appendChild(el);
    setTimeout(function () { el.classList.add('out'); setTimeout(function () { el.remove(); }, 200); }, err ? 5000 : 2200);
  }

  /* ------------------------------------------------------------ tracking state */
  var STATUSES = [['open', 'Open'], ['in-progress', 'In progress'], ['fixed', 'Fixed'], ['verified', 'Verified'], ['wontfix', "Won't fix"]];
  var SLABEL = {}; STATUSES.forEach(function (s) { SLABEL[s[0]] = s[1]; });
  var SVAR = { open: 's-open', 'in-progress': 's-prog', fixed: 's-fixed', verified: 's-ver', wontfix: 's-wont' };
  var CLOSED = { fixed: 1, verified: 1, wontfix: 1 };
  var KEY = 'cloudreel-beta-tracker-v1';
  var state = { items: {} };
  var mode = 'local';

  function statusOf(id) { return (state.items[id] && state.items[id].status) || 'open'; }
  function saveLocal() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* storage unavailable */ } }
  function post(path, body) {
    return fetch(path, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
      .then(function (r) { if (!r.ok) throw new Error('save failed'); return r.json(); });
  }
  function serverLost() {
    if (mode !== 'server') return;
    mode = 'local'; renderStore();
    toast('Could not reach the server. Changes are kept in this browser only.', true);
  }
  function loadState() {
    var local = null;
    try { local = JSON.parse(localStorage.getItem(KEY)); } catch (e) { /* ignore */ }
    if (location.protocol.indexOf('http') !== 0) { if (local && local.items) state = local; return Promise.resolve(); }
    return fetch('/api/status').then(function (r) { if (!r.ok) throw new Error(); return r.json(); })
      .then(function (s) { if (!s || typeof s.items !== 'object') throw new Error(); state = s; mode = 'server'; })
      .catch(function () { if (local && local.items) state = local; });
  }
  function apply(id, patch) {
    var it = ITEMS[id];
    var e = Object.assign({ status: 'open', owner: '', note: '' }, state.items[id] || {}, patch);
    e.kind = it.kind; e.title = it.d.title || it.d.statement; e.updated = new Date().toISOString();
    var empty = e.status === 'open' && !e.owner && !e.note;
    if (empty) delete state.items[id]; else state.items[id] = e;
    return empty ? null : e;
  }
  function setItem(id, patch, quiet) {
    var e = apply(id, patch);
    saveLocal();
    if (mode === 'server') post('/api/item', { id: id, entry: e }).catch(serverLost);
    renderNav(); renderStore();
    if (!quiet) toast(id + (patch.status ? ' set to ' + SLABEL[patch.status] : ' saved'));
  }
  function syncStatus(id) {
    var st = statusOf(id);
    $$('[data-status="' + id + '"]').forEach(function (s) { s.value = st; s.parentNode.className = 'st s-' + st; });
    $$('[data-row="' + id + '"]').forEach(function (r) { r.classList.toggle('done', !!CLOSED[st]); });
    $$('a.ref[data-ref="' + id + '"]').forEach(function (a) { a.classList.toggle('closed', !!CLOSED[st]); });
  }

  /* ------------------------------------------------------------ small renderers */
  var ID_RE = /\b(?:(?:SHA|LIVE|CREATE|PUB|X)-\d+|BUG-(?:FUNC|CA|NF)-\d+|TC-(?:FUNC|COMPAT|NF)-\d+|CRB-\d+|ISS-\d+|STU-\d+|NEWBUG-[0-9A-Z]+|NEWTC-[0-9A-Z]+|[A-Z]{2}-J\d+)\b/g;
  function ref(id) {
    if (!ITEMS[id]) return h(id);
    var t = ITEMS[id].d.title || ITEMS[id].d.statement;
    return '<a class="ref' + (trackable(id) && CLOSED[statusOf(id)] ? ' closed' : '') + '" href="#/' + route() + '?item=' + id + '" data-ref="' + id + '" title="' + h(t) + '">' + id + '</a>';
  }
  function link(text) { return h(text).replace(ID_RE, function (m) { return ref(m); }); }
  function refs(list) { return (list || []).map(ref).join(' '); }

  var TONE = {
    critical: 'crit', blocker: 'crit', fail: 'crit', broken: 'crit', missing: 'crit', 'not possible': 'crit', bad: 'crit', 'vercel only': 'crit', 'not ready': 'crit',
    high: 'high', major: 'high', partial: 'high', warn: 'high', weak: 'high', blocked: 'high', differs: 'high', 'partly working': 'high', 'partly ready': 'high', 'done with friction': 'high', reopen: 'high',
    medium: 'med', minor: 'med', stopped: 'med', 'not run': 'med', 'not-run': 'med', 'not verified': 'med', 'not tested': 'med', p1: 'crit', p2: 'high', p3: 'med',
    pass: 'ok', ok: 'ok', good: 'ok', working: 'ok', both: 'ok', same: 'ok', done: 'ok', ready: 'ok', core: 'brand', important: 'med', 'beta only': 'brand'
  };
  function pill(text, tone) {
    var t = tone || TONE[String(text).toLowerCase()];
    return '<span class="pill' + (t ? ' p-' + t : '') + '">' + h(text) + '</span>';
  }
  function cellHtml(c) { return TONE[String(c).toLowerCase()] && String(c).length < 20 ? pill(c) : link(c); }
  function isNum(c) { return /^[\d.,%–-]+$/.test(String(c).trim()) && String(c).trim() !== ''; }
  function tbl(head, rows) {
    var data = rows.filter(Array.isArray);
    var numeric = head.map(function (_, i) { return i > 0 && data.length > 0 && data.every(function (r) { return isNum(r[i]); }); });
    return '<div class="tbl" tabindex="0" role="region" aria-label="Table: ' + h(head.slice(0, 3).join(', ')) + '"><table><thead><tr>' + head.map(function (x, i) { return '<th scope="col"' + (numeric[i] ? ' class="r"' : '') + '>' + h(x) + '</th>'; }).join('') + '</tr></thead><tbody>' +
      rows.map(function (r) {
        if (!Array.isArray(r)) return '<tr class="grp"><th colspan="' + head.length + '" scope="colgroup">' + h(r.group) + '</th></tr>';
        return '<tr>' + r.map(function (c, i) { return '<td' + (numeric[i] ? ' class="r num"' : '') + '>' + cellHtml(c) + '</td>'; }).join('') + '</tr>';
      }).join('') + '</tbody></table></div>';
  }
  function kpis(list) {
    return '<div class="kpis">' + list.map(function (k) { return '<div class="kpi"><b>' + h(k.value) + '</b><span>' + h(k.label) + '</span></div>'; }).join('') + '</div>';
  }
  function ul(items) { return '<ul class="tight">' + items.map(function (i) { return '<li>' + link(i) + '</li>'; }).join('') + '</ul>'; }
  function shotBtn(img, cap) {
    var src = img.indexOf('data:') === 0 ? img : IMG + img;
    return '<button type="button" class="shot" data-full="' + h(src) + '" data-cap="' + h(cap) + '" aria-label="Enlarge screenshot: ' + h(cap) + '"><img loading="lazy" decoding="async" src="' + h(src) + '" alt="' + h(cap) + '"></button>';
  }
  function shots(list) {
    if (!list || !list.length) return '';
    return '<div class="lbl">Screenshots (' + list.length + ')</div><div class="shots">' + list.map(function (s) {
      return '<figure>' + shotBtn(s.img, s.caption) + '<figcaption>' + h(s.caption) + '</figcaption></figure>';
    }).join('') + '</div>';
  }
  function cmp(la, a, lb, b) {
    return '<div class="cmp"><div><div class="lbl">' + la + '</div>' + link(a) + '</div><div class="b"><div class="lbl">' + lb + '</div>' + link(b) + '</div></div>';
  }
  function kv(pairs) {
    var out = pairs.filter(function (p) { return p[1]; }).map(function (p) { return '<div><div class="lbl">' + p[0] + '</div><p>' + (p[2] ? p[1] : link(p[1])) + '</p></div>'; }).join('');
    return out ? '<div class="kv">' + out + '</div>' : '';
  }
  function sel(id) {
    var st = statusOf(id);
    return '<span class="st s-' + st + '"><select data-status="' + id + '" aria-label="Status of ' + id + '">' + STATUSES.map(function (s) {
      return '<option value="' + s[0] + '"' + (s[0] === st ? ' selected' : '') + '>' + s[1] + '</option>';
    }).join('') + '</select></span>';
  }
  var uid = 0;
  function track(id) {
    if (!trackable(id)) return '';
    var e = state.items[id] || {}, n = ++uid;
    return '<div class="track"><div><label for="ts' + n + '">Status</label>' + sel(id).replace('<select ', '<select id="ts' + n + '" ') + '</div>' +
      '<div><label for="to' + n + '">Owner</label><input type="text" id="to' + n + '" placeholder="Who is on it" value="' + h(e.owner) + '" data-owner="' + id + '" autocomplete="off"></div>' +
      '<div><label for="tn' + n + '">Notes</label><textarea id="tn' + n + '" rows="1" placeholder="PR link, what was done, re-test result…" data-note="' + id + '">' + h(e.note) + '</textarea></div>' +
      '<div class="meta">' + (e.updated ? 'Last updated ' + h(new Date(e.updated).toLocaleString()) : 'Not updated yet. Changes save automatically.') + '</div></div>';
  }
  function counts(items) {
    var c = { open: 0, 'in-progress': 0, fixed: 0, verified: 0, wontfix: 0, total: items.length };
    items.forEach(function (i) { c[statusOf(i.id)]++; });
    c.closed = c.fixed + c.verified + c.wontfix;
    return c;
  }
  function bar(c) {
    var parts = STATUSES.filter(function (s) { return c[s[0]]; }).map(function (s) { return c[s[0]] + ' ' + s[1].toLowerCase(); }).join(', ');
    return '<div class="bar" role="img" aria-label="' + c.closed + ' of ' + c.total + ' closed (' + parts + ')">' + STATUSES.map(function (s) {
      return c[s[0]] ? '<i class="b-' + s[0] + '" style="width:' + (100 * c[s[0]] / (c.total || 1)) + '%" title="' + s[1] + ': ' + c[s[0]] + '"></i>' : '';
    }).join('') + '</div>';
  }
  function ago(iso) {
    var s = (Date.now() - new Date(iso).getTime()) / 1000;
    if (s < 60) return 'just now';
    if (s < 3600) return Math.floor(s / 60) + ' min ago';
    if (s < 86400) return Math.floor(s / 3600) + ' h ago';
    return new Date(iso).toLocaleDateString(undefined, { day: 'numeric', month: 'short' });
  }

  /* ------------------------------------------------------------ item detail */
  function related(id) {
    var b = BACK[id];
    return b && b.length ? kv([['Referenced by', refs(b), true]]) : '';
  }
  function detail(id) {
    var it = ITEMS[id], d = it.d, out = '';
    if (it.kind === 'finding' || it.kind === 'better') {
      out = cmp('Vercel reference', d.vercel, 'Beta', d.beta) + kv([['Impact', d.impact], ['Recommendation', d.rec]]) + related(id) + shots(d.shots);
    } else if (it.kind === 'defect') {
      out = cmp('Expected', d.expected, 'Actual', d.actual) +
        '<div class="lbl">Steps to reproduce</div><ol class="steps">' + d.steps.map(function (s) { return '<li>' + link(s) + '</li>'; }).join('') + '</ol>' +
        (d.logs ? '<div class="lbl">Console / network</div><pre tabindex="0">' + h(d.logs) + '</pre>' : '') +
        kv([['Environment', d.env], ['Preconditions', d.pre], ['Reproducibility', d.repro], ['Related', d.related]]) + related(id) + shots(d.shots);
    } else if (it.kind === 'case') {
      out = kv([['Preconditions', d.pre], ['Steps', d.steps]]) + cmp('Expected', d.expected, 'Actual', d.actual) +
        kv([['Notes', d.notes], ['Environment', d.env], ['Defects', d.defects.length ? refs(d.defects) : '', true]]) + shots(d.shots);
    } else if (it.kind === 'job') {
      out = '<p>' + link(d.note) + '</p><div class="lbl">Success looks like</div>' + ul(d.success) + '<div style="height:12px"></div>' +
        kv([['Related', d.refs.length ? refs(d.refs) : '', true]]) +
        '<div class="tbl" tabindex="0" role="region" aria-label="Steps: reference vs beta"><table><thead><tr><th scope="col">#</th><th scope="col">Step</th><th scope="col">Reference</th><th scope="col">Beta</th></tr></thead><tbody>' + d.steps.map(function (s) {
          return '<tr><td class="num">' + h(s.n) + '</td><td><b>' + h(s.step) + '</b><div class="muted">' + h(s.where) + '</div></td><td>' + pill(s.ref.res) + ' ' + link(s.ref.text) + '</td><td>' + pill(s.beta.res) + ' ' + link(s.beta.text) + '</td></tr>';
        }).join('') + '</tbody></table></div>' + shots(d.shots);
    } else if (it.kind === 'live' || it.kind === 'studio') {
      out = (d.summary && d.summary !== d.title ? '<pre tabindex="0">' + h(d.summary) + '</pre>' : '') +
        (d.steps && d.steps.length ? '<div class="lbl">Steps to reproduce</div><ol class="steps">' + d.steps.map(function (s) { return '<li>' + link(s) + '</li>'; }).join('') + '</ol>' : '') +
        (d.expected || d.actual ? cmp('Expected', d.expected, 'Actual', d.actual) : '') +
        kv([['Reported by', d.reporter], ['Date', d.date], ['Dev status', d.devStatus], ['QA status', d.qaStatus], ['QA note', d.qaNote], ['Sheet #', d.sheetId]]) + shots(d.shots);
    }
    return out + track(id);
  }
  function summary(id) {
    var it = ITEMS[id], d = it.d;
    if (it.kind === 'finding' || it.kind === 'better') return { pill: pill(d.sev), title: d.title, sub: d.module + ' · ' + d.typeLabel };
    if (it.kind === 'defect') return { pill: pill(d.sev) + pill(d.pri), title: d.title, sub: d.module + ' · ' + d.repro };
    if (it.kind === 'case') return { pill: pill(d.statusLabel), title: d.title, sub: d.suite + ' · ' + d.pri };
    if (it.kind === 'live' || it.kind === 'studio') return { pill: pill(d.sev) + (d.qaStatus ? pill(d.qaStatus) : ''), title: d.title, sub: d.module + (d.reporter ? ' · ' + d.reporter : '') };
    return { pill: pill(d.outcomeLabel), title: d.statement, sub: d.segment + ' · ' + d.priority };
  }
  var OPEN = {}, SELECTED = {}, SHOWN = [];
  function rowHtml(id, checks) {
    var s = summary(id), t = trackable(id), open = !!OPEN[id];
    var check = checks ? '<span class="pick">' + (t ? '<input type="checkbox" data-pick="' + id + '"' + (SELECTED[id] ? ' checked' : '') + ' aria-label="Select ' + id + '">' : '') + '</span>' : '';
    return '<div class="row' + (t && CLOSED[statusOf(id)] ? ' done' : '') + (open ? ' open' : '') + (SELECTED[id] ? ' sel' : '') + '" data-row="' + id + '" data-checks="' + (checks ? 1 : 0) + '"><div class="row-h' + (checks ? '' : ' nocheck') + '">' + check +
      '<span class="id">' + id + '</span><span class="sevcell">' + s.pill + '</span>' +
      '<button type="button" class="row-t" aria-expanded="' + open + '">' + icon('right') + '<span><b>' + h(s.title) + '</b><small>' + h(s.sub) + '</small></span></button>' + (t ? sel(id) : '<span class="nost"></span>') + '</div>' +
      (open ? '<div class="row-b">' + detail(id) + '</div>' : '') + '</div>';
  }

  /* ------------------------------------------------------------ list views */
  var FS = {};
  function hay(d) { return d._hay || (d._hay = JSON.stringify(d).toLowerCase()); }
  function uniq(items, get) {
    var seen = {}, out = [];
    items.forEach(function (i) { var v = get(i); if (v && !seen[v]) { seen[v] = 1; out.push(v); } });
    return out;
  }
  function debounce(fn, ms) { var t; return function () { var a = arguments; clearTimeout(t); t = setTimeout(function () { fn.apply(null, a); }, ms); }; }
  function searchField(v, ph) {
    return '<div class="field"><span class="sb-i">' + icon('search') + '</span><input type="search" data-f="q" placeholder="' + ph + '" aria-label="' + ph + '" value="' + h(v) + '"></div>';
  }
  function head(title, lede) { return '<h1>' + title + '</h1><p class="lede">' + lede + '</p>'; }

  function msHtml(f, opts, sel) {
    var label = !sel.length ? f.label : (sel.length === 1 ? sel[0] : sel.length + ' selected');
    return '<div class="multisel' + (sel.length ? ' on' : '') + '" data-ms="' + f.name + '">' +
      '<button type="button" class="btn ms-btn" data-ms-toggle="' + f.name + '" aria-haspopup="true" aria-expanded="false">' + h(label) + icon('chev') + '</button>' +
      '<div class="ms-panel" hidden role="listbox" aria-label="' + h(f.label) + '" aria-multiselectable="true">' +
      (opts.length > 8 ? '<input type="text" class="ms-search" placeholder="Search…" data-ms-search="' + f.name + '" aria-label="Search ' + h(f.label) + '">' : '') +
      '<div class="ms-opts">' + (opts.length ? opts.map(function (v) {
        return '<label class="ms-opt"><input type="checkbox" data-ms-opt="' + f.name + '" value="' + h(v) + '"' + (sel.indexOf(v) >= 0 ? ' checked' : '') + '><span>' + h(v) + '</span></label>';
      }).join('') : '<p class="ms-empty">No options</p>') + '</div>' +
      (sel.length ? '<button type="button" class="btn ghost ms-clear" data-ms-clear="' + f.name + '">Clear</button>' : '') +
      '</div></div>';
  }
  function listView(o) {
    var fs = FS[o.key] = FS[o.key] || (function () {
      var init = { q: '', status: '' };
      o.filters.forEach(function (f) { init[f.name] = []; });
      return init;
    })();
    var bulk = !o.noStatus;
    function filterBar() {
      return searchField(fs.q, 'Filter this list…') + o.filters.map(function (f) {
        var opts = f.options || uniq(o.items, f.get).sort();
        return msHtml(f, opts, fs[f.name] || []);
      }).join('') +
        (o.noStatus ? '' : '<select data-f="status" aria-label="Tracking status"' + (fs.status ? ' class="on"' : '') + '><option value="">Any status</option><option value="!closed"' + (fs.status === '!closed' ? ' selected' : '') + '>Not closed yet</option>' +
          STATUSES.map(function (s) { return '<option value="' + s[0] + '"' + (fs.status === s[0] ? ' selected' : '') + '>' + s[1] + '</option>'; }).join('') + '</select>') +
        '<button type="button" class="btn ghost" data-clear hidden>Clear filters</button><span class="count" id="count" aria-live="polite"></span>';
    }
    $('#main').innerHTML = head(o.title, o.lede) +
      (o.addBtn || o.syncBtn ? '<div style="margin-bottom:12px;display:flex;gap:8px;flex-wrap:wrap">' +
        (o.addBtn ? '<button type="button" class="btn" id="addbtn">' + icon('plus') + h(o.addBtn.label) + '</button>' : '') +
        (o.syncBtn ? '<button type="button" class="btn ghost" id="syncbtn">' + icon('download') + h(o.syncBtn.label) + '</button>' : '') +
        '</div>' : '') +
      '<div class="filters" role="search" aria-label="Filter ' + o.title + '">' + filterBar() + '</div>' +
      (bulk ? '<div class="listhead"><label><input type="checkbox" id="pickall"> Select all shown</label></div>' : '') + '<div class="rows" id="list"></div>';
    if (o.addBtn) $('#addbtn').addEventListener('click', o.addBtn.run);
    if (o.syncBtn) $('#syncbtn').addEventListener('click', o.syncBtn.run);
    function active() { return Object.keys(fs).some(function (k) { var v = fs[k]; return Array.isArray(v) ? v.length : v; }); }
    function draw() {
      var q = fs.q.trim().toLowerCase();
      var list = o.items.filter(function (d) {
        if (q && hay(d).indexOf(q) < 0) return false;
        if (fs.status === '!closed' ? CLOSED[statusOf(d.id)] : fs.status && statusOf(d.id) !== fs.status) return false;
        return o.filters.every(function (f) { var sel = fs[f.name]; return !sel || !sel.length || sel.indexOf(f.get(d)) >= 0; });
      });
      SHOWN = list.map(function (d) { return d.id; });
      $('#count').textContent = list.length === o.items.length ? list.length + ' items' : list.length + ' of ' + o.items.length;
      $('[data-clear]').hidden = !active();
      $('#list').innerHTML = list.map(function (d) { return rowHtml(d.id, bulk); }).join('') ||
        '<div class="empty"><b>Nothing matches these filters</b>Try a different search term or remove a filter.<br><button type="button" class="btn" data-clear>Clear filters</button></div>';
      if (bulk) syncPickAll();
    }
    function updateMsButton(name) {
      var wrap = $('.multisel[data-ms="' + name + '"]');
      if (!wrap) return;
      var f = o.filters.filter(function (x) { return x.name === name; })[0];
      var sel = fs[name] || [];
      wrap.classList.toggle('on', !!sel.length);
      wrap.querySelector('.ms-btn').firstChild.textContent = !sel.length ? f.label : (sel.length === 1 ? sel[0] : sel.length + ' selected');
      var panel = wrap.querySelector('.ms-panel'), clearBtn = panel.querySelector('.ms-clear');
      if (sel.length && !clearBtn) {
        clearBtn = document.createElement('button');
        clearBtn.type = 'button'; clearBtn.className = 'btn ghost ms-clear'; clearBtn.setAttribute('data-ms-clear', name); clearBtn.textContent = 'Clear';
        panel.appendChild(clearBtn);
      } else if (!sel.length && clearBtn) { clearBtn.remove(); }
    }
    var slow = debounce(draw, 120);
    $('.filters').addEventListener('input', function (ev) {
      var msOpt = ev.target.getAttribute('data-ms-opt');
      if (msOpt) {
        var cur = (fs[msOpt] || []).slice(), v = ev.target.value;
        if (ev.target.checked) { if (cur.indexOf(v) < 0) cur.push(v); } else { cur = cur.filter(function (x) { return x !== v; }); }
        fs[msOpt] = cur;
        updateMsButton(msOpt); draw();
        return;
      }
      var msSearch = ev.target.getAttribute('data-ms-search');
      if (msSearch) {
        var q2 = ev.target.value.trim().toLowerCase();
        $$('.ms-opt', ev.target.closest('.ms-panel')).forEach(function (lab) { lab.hidden = !!q2 && lab.textContent.toLowerCase().indexOf(q2) < 0; });
        return;
      }
      var f = ev.target.getAttribute('data-f');
      if (!f) return;
      fs[f] = ev.target.value;
      if (ev.target.tagName === 'SELECT') { ev.target.classList.toggle('on', !!ev.target.value); draw(); } else slow();
    });
    $('.filters').addEventListener('click', function (ev) {
      var el;
      if ((el = ev.target.closest('[data-ms-toggle]'))) {
        var panel = el.nextElementSibling, willOpen = panel.hidden;
        $$('.ms-panel', $('.filters')).forEach(function (p) { p.hidden = true; });
        $$('.ms-btn', $('.filters')).forEach(function (b) { b.setAttribute('aria-expanded', 'false'); });
        if (willOpen) { panel.hidden = false; el.setAttribute('aria-expanded', 'true'); var s = panel.querySelector('.ms-search'); if (s) s.focus(); }
        ev.stopPropagation();
        return;
      }
      if ((el = ev.target.closest('[data-ms-clear]'))) {
        var name = el.getAttribute('data-ms-clear');
        fs[name] = [];
        var panel2 = el.closest('.ms-panel');
        $$('input[data-ms-opt="' + name + '"]', panel2).forEach(function (c) { c.checked = false; });
        updateMsButton(name); draw();
        ev.stopPropagation();
        return;
      }
      if (ev.target.closest('.ms-panel')) ev.stopPropagation();
    });
    $('#main').addEventListener('click', function (ev) {
      if (!ev.target.closest('[data-clear]')) return;
      Object.keys(fs).forEach(function (k) { fs[k] = Array.isArray(fs[k]) ? [] : ''; });
      $('.filters').innerHTML = filterBar(); draw();
      $('.filters input').focus();
    });
    redraw = draw;
    draw();
  }
  var redraw = null;

  /* bulk selection */
  function picked() { return Object.keys(SELECTED).filter(function (k) { return SELECTED[k]; }); }
  function syncPickAll() {
    var all = $('#pickall'); if (!all) return;
    var ids = SHOWN.filter(trackable), n = ids.filter(function (i) { return SELECTED[i]; }).length;
    all.checked = n > 0 && n === ids.length; all.indeterminate = n > 0 && n < ids.length;
  }
  function renderBulk() {
    var ids = picked(), el = $('#bulk');
    el.hidden = !ids.length;
    if (!ids.length) return;
    el.innerHTML = '<span>' + ids.length + ' selected</span><label class="sr" for="bulk-s">Set status for selected items</label><select id="bulk-s"><option value="">Set status…</option>' +
      STATUSES.map(function (s) { return '<option value="' + s[0] + '">' + s[1] + '</option>'; }).join('') + '</select><button type="button" class="btn" id="bulk-x">Clear</button>';
  }
  function clearPicks() { SELECTED = {}; $$('[data-pick]').forEach(function (c) { c.checked = false; }); $$('.row.sel').forEach(function (r) { r.classList.remove('sel'); }); syncPickAll(); renderBulk(); }

  /* ------------------------------------------------------------ views */
  var V = {};

  V.dashboard = function () {
    var o = D.overview, q = D.qa.summary;
    var dashKinds = Object.keys(KINDS).filter(function (k) { return k !== 'live' && k !== 'studio'; });
    var all = []; dashKinds.forEach(function (k) { all = all.concat(KINDS[k].items); });
    var tot = counts(all), pct = Math.round(100 * tot.closed / (tot.total || 1));
    var prog = dashKinds.map(function (k) {
      var c = counts(KINDS[k].items);
      return '<a class="card prog" href="#/' + KINDS[k].route + '"><h3>' + KINDS[k].label + ' <small>' + c.total + ' total</small></h3>' +
        '<div class="big">' + c.closed + ' <small>closed</small></div>' + bar(c) + '<div class="sub">' + c.open + ' open · ' + c['in-progress'] + ' in progress</div></a>';
    }).join('');
    var legend = '<div class="legend">' + STATUSES.map(function (s) { return '<span style="--c:var(--' + SVAR[s[0]] + ')">' + s[1] + '</span>'; }).join('') + '</div>';
    function brk(title, items, keys, get, routeName, fkey) {
      return '<div class="card"><h3>' + title + '</h3><div class="brk" style="margin-top:10px">' + keys.map(function (k) {
        var c = counts(items.filter(function (i) { return get(i) === k; }));
        return '<a href="#/' + routeName + '" data-go="' + routeName + '" data-fk="' + fkey + '" data-fv="' + k + '" style="text-decoration:none">' + pill(k) + '</a>' + bar(c) + '<span class="n">' + c.closed + ' / ' + c.total + '</span>';
      }).join('') + '</div></div>';
    }
    var recent = Object.keys(state.items).filter(function (id) { return ITEMS[id] && ITEMS[id].kind !== 'live' && ITEMS[id].kind !== 'studio'; }).sort(function (a, b) { return (state.items[b].updated || '').localeCompare(state.items[a].updated || ''); }).slice(0, 6);
    var activity = '<div class="card"><h3>Recent activity</h3>' + (recent.length ? '<ul class="act">' + recent.map(function (id) {
      var e = state.items[id];
      return '<li>' + ref(id) + '<span class="t">' + pill(SLABEL[e.status] || e.status, { verified: 'ok', fixed: 'med', 'in-progress': 'high' }[e.status]) + ' ' + h(e.owner ? e.owner + ' · ' : '') + h(e.title) + '</span><time datetime="' + h(e.updated) + '">' + h(ago(e.updated)) + '</time></li>';
    }).join('') + '</ul>' : '<p class="muted" style="margin:8px 0 0">Nothing tracked yet. Set a status on any finding or defect and it shows up here.</p>') + '</div>';
    var topRows = D.top.rows.map(function (r) {
      return '<tr><td>' + ref(r.id) + '</td><td>' + pill(r.sev) + '</td><td>' + h(r.module) + '</td><td><b>' + h(r.title) + '</b><div class="muted">' + link(r.fix) + '</div></td><td>' + sel(r.id) + '</td></tr>';
    }).join('');
    var mods = uniq(D.findings, function (f) { return f.module; }).map(function (m) {
      var items = D.findings.filter(function (f) { return f.module === m; });
      return { m: m, c: counts(items), worst: ['critical', 'high', 'medium', 'low'].filter(function (s) { return items.some(function (f) { return f.sev === s; }); })[0] };
    }).sort(function (a, b) { return (b.c.total - b.c.closed) - (a.c.total - a.c.closed) || a.m.localeCompare(b.m); });
    var modRows = mods.map(function (x) {
      return '<tr><td><a href="#/findings" data-go="findings" data-fk="module" data-fv="' + h(x.m) + '">' + h(x.m) + '</a></td><td>' + pill(x.worst) + '</td><td class="r num">' + (x.c.total - x.c.closed) + '</td><td class="r num">' + x.c.total + '</td><td style="min-width:160px;vertical-align:middle">' + bar(x.c) + '</td></tr>';
    }).join('');
    $('#main').innerHTML = '<div class="hero"><div><p class="eyebrow">' + h(o.eyebrow) + '</p><h1>' + h(o.title) + '</h1><p class="lede">' + h(o.intro) + '</p></div>' +
      '<div class="hero-links">' + o.urls.map(function (u) { return '<a class="btn" href="' + h(u.href) + '" target="_blank" rel="noopener">' + h(u.label.split(' · ')[0]) + ' site' + icon('right') + '</a>'; }).join('') + '</div></div>' +
      '<div class="verdict" role="note">' + icon('alert') + '<div><b>' + h(q.verdict) + '</b><p>' + link(q.text) + '</p></div></div>' +
      '<h2>Fix progress</h2><div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(min(300px,100%),1fr))"><div class="card overall"><div class="ring" style="--p:' + pct + '" role="img" aria-label="' + pct + ' percent closed"><div><span><b>' + pct + '%</b><small>closed</small></span></div></div>' +
      '<div><h3>Overall</h3><p class="muted" style="margin:0 0 8px">' + tot.closed + ' of ' + tot.total + ' tracked items closed, ' + tot['in-progress'] + ' in progress.</p>' + bar(tot) + legend + '</div></div>' + activity + '</div>' +
      '<div class="grid g4" style="margin-top:14px">' + prog + '</div>' +
      '<p class="muted" style="margin-top:10px;font-size:12.5px">Findings (design comparison) and defects (QA) often describe the same problem from two angles; each one links the other.</p>' +
      '<div class="grid g2" style="margin-top:14px">' + brk('Findings by severity', D.findings, ['critical', 'high', 'medium', 'low'], function (f) { return f.sev; }, 'findings', 'sev') +
      brk('Defects by priority', D.defects, ['P1', 'P2', 'P3'], function (f) { return f.pri; }, 'defects', 'pri') + '</div>' +
      '<h2>Fix these first</h2><div class="tbl" tabindex="0" role="region" aria-label="Top issues"><table><thead><tr><th scope="col">ID</th><th scope="col">Severity</th><th scope="col">Module</th><th scope="col">Issue and fix</th><th scope="col">Status</th></tr></thead><tbody>' + topRows + '</tbody></table></div>' +
      '<h2>Open findings by module</h2><div class="tbl" tabindex="0" role="region" aria-label="Findings by module"><table><thead><tr><th scope="col">Module</th><th scope="col">Worst</th><th scope="col" class="r">Open</th><th scope="col" class="r">Total</th><th scope="col">Progress</th></tr></thead><tbody>' + modRows + '</tbody></table></div>' +
      '<h2>Report at a glance</h2>' + kpis(o.kpis) + '<div class="grid g2">' + o.panels.map(function (p) { return '<div class="card"><h3>' + h(p.title) + '</h3>' + ul(p.items) + '</div>'; }).join('') + '</div>' +
      '<h2>By area</h2><div class="grid g2">' + D.areas.map(function (a) {
        return '<div class="card"><h3>' + h(a.title) + '</h3><p class="muted" style="font-size:12.5px">' + h(a.modules) + '</p><p>' + link(a.text) + '</p>' + a.counts.map(function (c) { return pill(c, TONE[c.split(' ')[1]]); }).join(' ') + '</div>';
      }).join('') + '</div>';
  };

  V.findings = function () {
    listView({
      key: 'findings', title: 'Findings', items: D.findings,
      lede: D.findings.length + ' differences between the Vercel reference and the beta. Open a row for the comparison, impact, recommendation and screenshots.',
      filters: [
        { name: 'sev', label: 'Any severity', options: ['critical', 'high', 'medium', 'low'], get: function (d) { return d.sev; } },
        { name: 'module', label: 'Any module', get: function (d) { return d.module; } },
        { name: 'type', label: 'Any type', get: function (d) { return d.typeLabel; } }
      ]
    });
  };
  V.defects = function () {
    listView({
      key: 'defects', title: 'Defect log', items: D.defects,
      lede: D.defects.length + ' QA defects, each reproduced at least twice and written as a ticket: steps, expected vs actual, logs and evidence.',
      filters: [
        { name: 'sev', label: 'Any severity', options: ['critical', 'major', 'minor', 'trivial'], get: function (d) { return d.sev; } },
        { name: 'pri', label: 'Any priority', options: ['P1', 'P2', 'P3'], get: function (d) { return d.pri; } },
        { name: 'module', label: 'Any module', get: function (d) { return d.module; } }
      ]
    });
  };
  V.cases = function () {
    if (!FS.cases) FS.cases = { q: '', status: '', result: 'fail' };
    listView({
      key: 'cases', title: 'Test cases', items: D.cases,
      lede: D.cases.length + ' test cases, showing failures first. Passing cases are for reference; failed, blocked and not-run cases can be tracked for re-test.',
      addBtn: { label: 'Add test case', run: function () { openNewItemDialog('case'); } },
      filters: [
        { name: 'result', label: 'Any result', options: ['fail', 'blocked', 'not-run', 'pass'], get: function (d) { return d.status; } },
        { name: 'suite', label: 'Any suite', get: function (d) { return d.suite; } },
        { name: 'pri', label: 'Any priority', options: ['P1', 'P2', 'P3'], get: function (d) { return d.pri; } }
      ]
    });
  };
  V.live = function () {
    listView({
      key: 'live', title: 'Live Issues', items: D.live || [],
      lede: (D.live || []).length + ' bugs tracked in the team’s live issue sheet. Status starts from the sheet’s Dev/QA status (Verified = QA marked Done, Fixed = developer-fixed but not yet QA-verified) and can be updated here.',
      addBtn: { label: 'Report a bug', run: function () { openNewItemDialog('live'); } },
      syncBtn: { label: 'Sync from sheet', run: syncNow },
      filters: [
        { name: 'sev', label: 'Any severity', options: ['High', 'Medium', 'Low'], get: function (d) { return d.sev; } },
        { name: 'module', label: 'Any module', get: function (d) { return d.module; } },
        { name: 'qaStatus', label: 'Any QA status', options: ['Done', 'Reopen'], get: function (d) { return d.qaStatus; } },
        { name: 'devStatus', label: 'Any dev status', get: function (d) { return d.devStatus; } }
      ]
    });
  };
  V.studio = function () {
    listView({
      key: 'studio', title: 'Studio Issues', items: D.studio || [],
      lede: (D.studio || []).length + ' bugs tracked for the Studio module, from the team’s Studio New UI sheet. Status starts from the sheet’s Dev/QA status and can be updated here.',
      addBtn: { label: 'Report a bug', run: function () { openNewItemDialog('studio'); } },
      syncBtn: { label: 'Sync from sheet', run: syncNow },
      filters: [
        { name: 'sev', label: 'Any severity', options: ['High', 'Medium', 'Low'], get: function (d) { return d.sev; } },
        { name: 'module', label: 'Any module', get: function (d) { return d.module; } },
        { name: 'qaStatus', label: 'Any QA status', options: ['Done', 'Reopen'], get: function (d) { return d.qaStatus; } },
        { name: 'devStatus', label: 'Any dev status', get: function (d) { return d.devStatus; } }
      ]
    });
  };
  V.prod = function () {
    $('#main').innerHTML = head('Prod Issues', 'Production issue tracking for the live CloudReel app.') +
      '<div class="empty"><b>Nothing here yet</b>This will track bugs reported against production once that feed is connected — for now, issues from the beta live under Beta Issues → Live Issues.</div>';
  };
  V.better = function () {
    listView({
      key: 'better', title: 'Where the beta is better', items: D.better, noStatus: true,
      lede: 'Worth keeping, and worth bringing back into the reference. Nothing to fix here, so these are not tracked.',
      filters: [{ name: 'module', label: 'Any module', get: function (d) { return d.module; } }]
    });
  };

  V.modules = function () {
    var m = D.modules, grp = null, rows = '';
    m.rows.forEach(function (r) {
      if (r.group !== grp) { grp = r.group; rows += '<tr class="grp"><th colspan="5" scope="colgroup">' + h(grp) + '</th></tr>'; }
      var c = counts(r.refs.filter(trackable).map(function (id) { return { id: id }; }));
      rows += '<tr><td><b>' + h(r.module) + '</b></td><td>' + pill(r.statusLabel) + '</td><td>' + link(r.works) + '</td><td>' + link(r.broken) + '</td><td style="min-width:160px">' + refs(r.refs) +
        (c.total ? '<div style="margin-top:8px">' + bar(c) + '</div><small class="muted">' + c.closed + ' of ' + c.total + ' closed</small>' : '') + '</td></tr>';
    });
    $('#main').innerHTML = head('Module status', h(m.lede)) + '<p>' + m.counts.map(function (c) { return pill(c, { working: 'ok', partly: 'high', broken: 'crit', missing: 'crit' }[c.split(' ')[1]]); }).join(' ') + '</p>' +
      '<div class="tbl" tabindex="0" role="region" aria-label="Module status"><table><thead><tr><th scope="col">Module</th><th scope="col">Status</th><th scope="col">Works today</th><th scope="col">Doesn\'t work / missing</th><th scope="col">Findings</th></tr></thead><tbody>' + rows + '</tbody></table></div>' +
      '<h2>Module coverage</h2><p class="lede">' + h(D.coverage.lede) + '</p>' + tbl(D.coverage.head, D.coverage.rows);
  };

  V.journeys = function () {
    var j = D.journeys;
    $('#main').innerHTML = head('Key journeys, screen by screen', h(j.lede)) + j.items.map(function (w) {
      return '<section class="card" style="margin-top:14px"><h2 style="margin:0 0 4px">' + h(w.title) + '</h2><p class="muted">' + link(w.desc) + '</p>' + w.lanes.map(function (l) {
        return '<div class="lane"><div class="lbl">' + h(l.label) + '</div><ol class="wsteps" tabindex="0" aria-label="' + h(l.label + ' steps for ' + w.title) + '">' + l.steps.map(function (s) {
          return '<li>' + (s.img ? shotBtn(s.img, l.label + ': ' + s.title) : '<div class="noshot">No screen: not reached</div>') +
            '<b>' + h(s.title) + '</b><small>' + h(s.hint) + '</small>' + (s.action ? '<small>Action: <strong>' + h(s.action) + '</strong></small>' : '') +
            (s.badge ? pill(s.badge) : '') + (s.note ? '<small style="margin-top:4px">' + link(s.note) + '</small>' : '') + '</li>';
        }).join('') + '</ol></div>';
      }).join('') + '</section>';
    }).join('');
  };

  V.flows = function () {
    var fs = FS.flows = FS.flows || { q: '', result: '' };
    var f = D.flows;
    $('#main').innerHTML = head('All tested flows', h(f.lede)) + '<div class="filters" role="search" aria-label="Filter flows">' + searchField(fs.q, 'Filter flows…') +
      '<select data-f="result" aria-label="Result"' + (fs.result ? ' class="on"' : '') + '><option value="">Any result</option>' + ['pass', 'partial', 'fail', 'stopped'].map(function (r) { return '<option' + (fs.result === r ? ' selected' : '') + '>' + r + '</option>'; }).join('') + '</select><span class="count" id="count" aria-live="polite"></span></div><div id="list"></div>';
    function draw() {
      var q = fs.q.trim().toLowerCase();
      var rows = f.rows.filter(function (r) { return (!fs.result || r.result === fs.result) && (!q || hay(r).indexOf(q) >= 0); });
      $('#count').textContent = rows.length + ' of ' + f.rows.length;
      $('#list').innerHTML = rows.length ? tbl(['Module', 'Flow', 'Vercel', 'Beta', 'Result', 'Note'], rows.map(function (r) { return [r.module, r.flow, r.vercel, r.beta, r.result, r.note]; })) : '<div class="empty"><b>No flows match</b>Try a different search term or result.</div>';
    }
    $('.filters').addEventListener('input', debounce(function (ev) { var k = ev.target.getAttribute('data-f'); if (k) { fs[k] = ev.target.value; if (ev.target.tagName === 'SELECT') ev.target.classList.toggle('on', !!ev.target.value); draw(); } }, 100));
    draw();
  };

  V.segments = function () {
    var jt = D.jtbd, cur = FS.seg || jt.segments[0].id;
    var seg = jt.segments.filter(function (s) { return s.id === cur; })[0] || jt.segments[0];
    SHOWN = seg.jobs.map(function (j) { return j.id; });
    $('#main').innerHTML = head('Jobs to be done, by user segment', h(jt.intro)) + '<div class="note" role="note">' + link(jt.note) + '</div>' +
      '<h2>Readiness by segment</h2>' + tbl(jt.matrix.head, jt.matrix.rows) +
      '<h2>Segments and their jobs</h2><div class="tabs" role="tablist" aria-label="User segments">' + jt.segments.map(function (s) {
        var c = counts(s.jobs);
        return '<button type="button" role="tab" id="tab-' + s.id + '" aria-controls="segpanel" aria-selected="' + (s.id === seg.id) + '" tabindex="' + (s.id === seg.id ? 0 : -1) + '" data-seg="' + s.id + '">' + h(s.name) + '<em>' + c.closed + '/' + c.total + '</em></button>';
      }).join('') + '</div><div id="segpanel" role="tabpanel" aria-labelledby="tab-' + seg.id + '">' +
      '<div class="grid g2"><div class="card"><h3>' + h(seg.name) + ' ' + pill(seg.verdict) + '</h3><p>' + link(seg.summary) + '</p>' + kv([['Who', seg.who], ['Plan', seg.plan], ['Success for them', seg.success]]) + '</div>' +
      '<div class="card"><h3>Top blockers</h3>' + ul(seg.blockers) + '</div></div><h2>Jobs</h2><div class="rows" id="list">' + seg.jobs.map(function (j) { return rowHtml(j.id, false); }).join('') + '</div></div>';
    redraw = V.segments;
  };

  V.qa = function () {
    var q = D.qa, s = q.summary, c = q.compat;
    var compat = '<div class="tbl" tabindex="0" role="region" aria-label="Browser compatibility matrix"><table><thead><tr>' + c.head.map(function (x) { return '<th scope="col">' + h(x) + '</th>'; }).join('') + '</tr></thead><tbody>' + c.rows.map(function (r) {
      return '<tr><th scope="row"><code>' + h(r.page) + '</code></th>' + r.cells.map(function (x) { return '<td class="c" title="' + h(x.note) + '">' + pill(x.res) + '</td>'; }).join('') + '</tr>';
    }).join('') + '</tbody></table></div>';
    var notes = [];
    c.rows.forEach(function (r) { r.cells.forEach(function (x, i) { if (x.res !== 'pass') notes.push('<li><code>' + h(r.page) + '</code> · ' + h(c.head[i + 1]) + ': ' + link(x.note) + '</li>'); }); });
    $('#main').innerHTML = head('QA test report', h(q.intro)) + '<div class="verdict" role="note">' + icon('alert') + '<div><b>' + h(s.verdict) + '</b><p>' + link(s.text) + '</p></div></div>' + kpis(s.kpis) +
      '<h2>Exit criteria</h2>' + tbl(s.exit.head, s.exit.rows) +
      '<div class="grid g2"><div><h2>Defects by severity and priority</h2>' + tbl(s.bySeverity.head, s.bySeverity.rows) + '</div><div><h2>Test cases by suite</h2>' + tbl(D.suites.head, D.suites.rows) + '</div></div>' +
      '<h2>Defects by module</h2>' + tbl(s.byModule.head, s.byModule.rows) +
      '<h2>Test plan and approach</h2><div class="grid g2">' + q.plan.panels.map(function (p) { return '<div class="card"><h3>' + h(p.title) + '</h3>' + ul(p.items) + '</div>'; }).join('') + '</div>' +
      '<h2>Suites run</h2><div class="grid g2">' + q.plan.suites.map(function (x) { return '<div class="card"><h3>' + h(x.title) + '</h3><p>' + link(x.text) + '</p><p class="muted" style="font-size:12.5px;margin:0">' + h(x.env) + '</p></div>'; }).join('') + '</div>' +
      '<h2>Cross-browser and devices</h2><p class="lede">' + h(c.lede.replace(' Hover a cell for its note.', '')) + ' Notes for cells that are not a plain pass are listed below the table.</p>' + compat + (notes.length ? '<ul class="tight">' + notes.join('') + '</ul>' : '') +
      '<h2>Accessibility (WCAG 2.1 AA)</h2><p class="lede">' + h(q.a11y.lede) + '</p>' + tbl(q.a11y.scans.head, q.a11y.scans.rows) + tbl(q.a11y.keyboard.head, q.a11y.keyboard.rows) +
      '<h2>Security, performance and resilience</h2><p class="lede">' + h(q.nonfunctional.lede) + '</p>' + q.nonfunctional.tables.map(function (t) { return '<h3 style="margin-top:18px">' + h(t.title) + '</h3>' + tbl(t.head, t.rows); }).join('');
  };

  V.reference = function () {
    $('#main').innerHTML = head('Reference data', 'Page timings and how the report was produced.') + '<h2>Site response</h2><p class="lede">' + h(D.response.lede) + '</p>' + tbl(D.response.head, D.response.rows) +
      '<h2>Method and limits</h2><div class="card">' + ul(D.overview.method) + '</div><p class="muted" style="margin-top:14px;font-size:12.5px">' + h(D.overview.footer) + '</p>';
  };

  /* ------------------------------------------------------------ nav + routing */
  var NAV = [
    ['Vercel vs Beta'], ['dashboard', 'Dashboard'], ['findings', 'Findings', 'finding'], ['cases', 'Test cases', 'case'],
    ['journeys', 'Key journeys'], ['flows', 'Tested flows'], ['qa', 'QA report'], ['better', 'Beta is better'],
    ['Beta Issues'], ['live', 'Live Issues', 'live'],
    ['Studio Issues'], ['studio', 'Studio Issues', 'studio'],
    ['Prod Issues'], ['prod', 'Prod Issues']
  ];
  var TITLES = {}; NAV.forEach(function (n) { if (n.length > 1) TITLES[n[0]] = n[1]; });

  /* organizations: NAV's group headers split the flat list into switchable orgs */
  var ORGS = [];
  NAV.forEach(function (n) {
    if (n.length === 1) ORGS.push({ id: n[0].toLowerCase().replace(/[^a-z0-9]+/g, '-'), label: n[0], items: [] });
    else ORGS[ORGS.length - 1].items.push(n);
  });
  function orgOf(id) { return ORGS.filter(function (o) { return o.id === id; })[0] || ORGS[0]; }
  function routeOrg(r) { return (ORGS.filter(function (o) { return o.items.some(function (it) { return it[0] === r; }); })[0] || ORGS[0]).id; }
  var ORG_KEY = 'cloudreel-tracker-org';
  var curOrg = routeOrg((function () { var raw = location.hash.replace(/^#\/?/, '').split('?')[0]; return V[raw] ? raw : 'dashboard'; })());
  try { var savedOrg = localStorage.getItem(ORG_KEY); if (savedOrg && orgOf(savedOrg).id === savedOrg) curOrg = savedOrg; } catch (e) { /* storage unavailable */ }
  function renderOrgSwitch() {
    $('#orgswitch').innerHTML = '<label class="sr" for="orgsel">Organization</label><select id="orgsel" aria-label="Organization">' +
      ORGS.map(function (o) { return '<option value="' + o.id + '"' + (o.id === curOrg ? ' selected' : '') + '>' + h(o.label) + '</option>'; }).join('') + '</select>';
  }
  function setOrg(id) {
    if (id === curOrg || !orgOf(id)) return;
    curOrg = id;
    try { localStorage.setItem(ORG_KEY, id); } catch (e) { /* storage unavailable */ }
    renderNav();
    var first = orgOf(id).items[0][0];
    location.hash = '#/' + (first === 'dashboard' ? '' : first);
  }
  function parse() {
    var raw = location.hash.replace(/^#\/?/, ''), parts = raw.split('?');
    var m = /(?:^|&)item=([^&]+)/.exec(parts[1] || '');
    return { route: V[parts[0]] ? parts[0] : 'dashboard', item: m ? decodeURIComponent(m[1]) : '' };
  }
  function route() { return parse().route; }
  function renderNav() {
    var cur = route(), ro = routeOrg(cur);
    if (ro !== curOrg) { curOrg = ro; try { localStorage.setItem(ORG_KEY, ro); } catch (e) { /* storage unavailable */ } }
    renderOrgSwitch();
    $('#nav').innerHTML = orgOf(curOrg).items.map(function (n) {
      var cnt = '';
      if (n[2]) { var c = counts(KINDS[n[2]].items); cnt = '<em aria-label="' + c.closed + ' of ' + c.total + ' closed">' + c.closed + '/' + c.total + '</em>'; }
      return '<a href="#/' + (n[0] === 'dashboard' ? '' : n[0]) + '"' + (cur === n[0] ? ' aria-current="page"' : '') + '>' + icon(n[0]) + '<span>' + n[1] + '</span>' + cnt + '</a>';
    }).join('');
  }
  function renderStore() {
    var n = Object.keys(state.items).length, txt = n + ' item' + (n === 1 ? '' : 's') + ' tracked';
    $('#store').innerHTML = mode === 'server'
      ? '<span class="dot"></span><span><b>Saving to tracking/status.json</b>' + txt + '</span>'
      : '<span class="dot local"></span><span><b>Saved in this browser only</b>Run <code>python3 server.py</code> to save to a file. ' + txt + '</span>';
  }
  var lastRoute = null;
  function render() {
    var p = parse();
    if (p.route !== lastRoute) {
      lastRoute = p.route; redraw = null; SHOWN = [];
      clearPicks();
      V[p.route]();
      renderNav();
      $('#crumb').innerHTML = '<span>CloudReel</span>' + icon('right') + '<b>' + h(TITLES[p.route]) + '</b>';
      document.title = TITLES[p.route] + ' · CloudReel Beta Tracker';
      window.scrollTo(0, 0);
      drawer(false);
    }
    if (p.item && ITEMS[p.item]) showItem(p.item); else if ($('#dlg').open) $('#dlg').close();
  }

  /* ------------------------------------------------------------ item dialog */
  var current = null;
  function showItem(id) {
    var s = summary(id), i = SHOWN.indexOf(id);
    current = id;
    $('#dlg-t').innerHTML = '<span class="id">' + id + '</span>' + s.pill + (i >= 0 ? '<span class="muted" style="font-size:12px">' + (i + 1) + ' of ' + SHOWN.length + '</span>' : '');
    $('#dlg-a').innerHTML = (i >= 0 ? '<button type="button" class="icon-btn" data-step="-1" aria-label="Previous item"' + (i === 0 ? ' disabled' : '') + '>' + icon('left') + '</button><button type="button" class="icon-btn" data-step="1" aria-label="Next item"' + (i === SHOWN.length - 1 ? ' disabled' : '') + '>' + icon('right') + '</button>' : '') +
      '<button type="button" class="btn" id="copylink">' + icon('link') + 'Copy link</button><button type="button" class="icon-btn" data-close aria-label="Close">' + icon('x') + '</button>';
    $('#dlg-b').innerHTML = '<h3 id="dlg-h">' + h(s.title) + '</h3><p class="muted">' + h(kindName(id)) + ' · ' + h(s.sub) + '</p>' + detail(id);
    if (!$('#dlg').open) $('#dlg').showModal();
    $('#dlg-b').scrollTop = 0;
  }
  function openItem(id) { location.hash = '#/' + route() + '?item=' + encodeURIComponent(id); }
  $('#dlg').addEventListener('close', function () {
    current = null;
    if (parse().item) history.replaceState(null, '', '#/' + (route() === 'dashboard' ? '' : route()));
    var y = window.scrollY;
    if (redraw) redraw(); else if (route() === 'dashboard' || route() === 'modules') V[route()]();
    window.scrollTo(0, y);
  });

  /* ------------------------------------------------------------ report a bug / add a test case */
  var NEWFORM_FIELDS = {
    live: [
      { k: 'summary', label: 'What’s the bug?', type: 'textarea', required: true },
      { k: 'module', label: 'Module / page', type: 'text' },
      { k: 'sev', label: 'Severity', type: 'select', options: ['High', 'Medium', 'Low'], def: 'Medium' },
      { k: 'steps', label: 'Steps to reproduce (one per line)', type: 'textarea' },
      { k: 'expected', label: 'Expected', type: 'text' },
      { k: 'actual', label: 'Actual', type: 'text' },
      { k: 'reporter', label: 'Your name', type: 'text' }
    ],
    case: [
      { k: 'title', label: 'Title', type: 'text', required: true },
      { k: 'suite', label: 'Suite', type: 'text' },
      { k: 'pri', label: 'Priority', type: 'select', options: ['P1', 'P2', 'P3'], def: 'P2' },
      { k: 'pre', label: 'Preconditions', type: 'textarea' },
      { k: 'steps', label: 'Steps (one per line)', type: 'textarea' },
      { k: 'expected', label: 'Expected result', type: 'textarea' },
      { k: 'actual', label: 'Actual result (if already run)', type: 'textarea' },
      { k: 'result', label: 'Result', type: 'select', options: ['fail', 'blocked', 'not-run'], def: 'fail' },
      { k: 'notes', label: 'Notes', type: 'textarea' },
      { k: 'reporter', label: 'Your name', type: 'text' }
    ]
  };
  NEWFORM_FIELDS.studio = NEWFORM_FIELDS.live;
  var BUG_KINDS = { live: 1, studio: 1 };
  var pendingShots = [];
  function fieldHtml(f) {
    var id = 'nf-' + f.k;
    if (f.type === 'select') {
      return '<div><label for="' + id + '">' + h(f.label) + '</label><select id="' + id + '">' + f.options.map(function (o) { return '<option' + (o === f.def ? ' selected' : '') + '>' + h(o) + '</option>'; }).join('') + '</select></div>';
    }
    if (f.type === 'textarea') {
      return '<div><label for="' + id + '">' + h(f.label) + (f.required ? ' *' : '') + '</label><textarea id="' + id + '" rows="3"' + (f.required ? ' required' : '') + '></textarea></div>';
    }
    return '<div><label for="' + id + '">' + h(f.label) + (f.required ? ' *' : '') + '</label><input type="text" id="' + id + '"' + (f.required ? ' required' : '') + '></div>';
  }
  function renderShotPreview() {
    var el = $('#nf-shots-preview');
    if (!el) return;
    el.innerHTML = pendingShots.map(function (s, i) {
      return '<figure><img src="' + h(s.img) + '" alt="' + h(s.caption) + '"><button type="button" data-rmshot="' + i + '" aria-label="Remove screenshot">' + icon('x') + '</button></figure>';
    }).join('');
  }
  function compressImage(file) {
    return new Promise(function (resolve) {
      var reader = new FileReader();
      reader.onload = function () {
        var img = new Image();
        img.onload = function () {
          var maxW = 1280, scale = Math.min(1, maxW / img.width);
          var w = Math.max(1, Math.round(img.width * scale)), hgt = Math.max(1, Math.round(img.height * scale));
          var c = document.createElement('canvas'); c.width = w; c.height = hgt;
          c.getContext('2d').drawImage(img, 0, 0, w, hgt);
          resolve({ img: c.toDataURL('image/jpeg', 0.72), caption: file.name });
        };
        img.onerror = function () { resolve(null); };
        img.src = reader.result;
      };
      reader.onerror = function () { resolve(null); };
      reader.readAsDataURL(file);
    });
  }
  function createItem(kind, data, track) {
    if (kind === 'live') D.live.push(data);
    else if (kind === 'studio') D.studio.push(data);
    else if (kind === 'case') { D.cases.push(data); refreshCaseItems(); }
    reg([data], kind);
    var entry = { custom: true, kind: kind, status: track.status, owner: track.owner || '', note: track.note || '', title: data.title, updated: new Date().toISOString(), data: data };
    state.items[data.id] = entry;
    saveLocal();
    if (mode === 'server') post('/api/item', { id: data.id, entry: entry }).catch(serverLost);
    renderNav(); renderStore();
  }
  function hydrateCustom() {
    Object.keys(state.items).forEach(function (id) {
      var e = state.items[id];
      if (!e || !e.custom) return;
      if (ITEMS[id]) {
        if (e.data) Object.assign(ITEMS[id].d, e.data);
        return;
      }
      var d = Object.assign({ id: id }, e.data || {});
      if (e.kind === 'live') D.live.push(d);
      else if (e.kind === 'studio') D.studio.push(d);
      else if (e.kind === 'case') D.cases.push(d);
      else return;
      reg([d], e.kind);
    });
    refreshCaseItems();
  }
  var syncing = false;
  function syncNow() {
    if (syncing) return;
    syncing = true;
    var btn = $('#syncbtn'); if (btn) btn.disabled = true;
    toast('Syncing from the sheet…');
    fetch('/api/sync', { method: 'POST' })
      .then(function (r) { return r.json().then(function (b) { return { ok: r.ok, body: b }; }); })
      .then(function (res) {
        if (!res.ok || !res.body.ok) { toast('Sync failed: ' + (res.body && res.body.error || 'unknown error'), true); return; }
        var r = res.body.result;
        var parts = Object.keys(r).map(function (k) { return k + ': +' + r[k].added + ' new, ' + r[k].updated + ' updated'; });
        toast('Synced. ' + parts.join(' · '));
        return fetch('/api/status').then(function (rr) { return rr.json(); }).then(function (s) {
          state = s; hydrateCustom(); if (redraw) redraw(); renderNav(); renderStore();
        });
      })
      .catch(function () { toast('Could not reach the sync endpoint.', true); })
      .then(function () { syncing = false; if (btn) btn.disabled = false; });
  }
  function submitNewItem(kind, fields) {
    var data = {};
    fields.forEach(function (f) {
      var v = $('#nf-' + f.k).value.trim();
      if (f.k === 'steps' && BUG_KINDS[kind]) data.steps = v ? v.split('\n').map(function (s) { return s.trim(); }).filter(Boolean) : [];
      else data[f.k] = v;
    });
    if (BUG_KINDS[kind]) {
      if (!data.summary) return;
      data.title = data.summary.split('\n')[0].slice(0, 130);
      data.date = new Date().toISOString().slice(0, 10);
      data.devStatus = ''; data.qaStatus = ''; data.qaNote = '';
    } else {
      if (!data.title) return;
      data.statusLabel = { fail: 'Fail', blocked: 'Blocked', 'not-run': 'Not run' }[data.result] || data.result;
      data.status = data.result; delete data.result;
      data.defects = []; data.env = '';
    }
    data.shots = pendingShots.slice();
    data.id = (BUG_KINDS[kind] ? 'NEWBUG-' : 'NEWTC-') + Date.now().toString(36).toUpperCase();
    createItem(kind, data, { status: 'open', owner: data.reporter || '', note: '' });
    $('#newdlg').close();
    toast((BUG_KINDS[kind] ? 'Bug reported: ' : 'Test case added: ') + data.id);
    V[kind === 'case' ? 'cases' : kind]();
  }
  function openNewItemDialog(kind) {
    pendingShots = [];
    var fields = NEWFORM_FIELDS[kind];
    $('#newdlg-h').textContent = BUG_KINDS[kind] ? 'Report a bug' : 'Add a test case';
    $('#newform').innerHTML = fields.map(fieldHtml).join('') +
      '<div><label for="nf-shots">Screenshots</label><input type="file" id="nf-shots" accept="image/*" multiple></div>' +
      '<div class="shotprev" id="nf-shots-preview"></div>' +
      '<div class="newform-actions"><button type="button" class="btn ghost" data-close>Cancel</button><button type="submit" class="btn primary">' + (BUG_KINDS[kind] ? 'Report bug' : 'Add test case') + '</button></div>';
    $('#newform').onsubmit = function (ev) { ev.preventDefault(); submitNewItem(kind, fields); };
    if (!$('#newdlg').open) $('#newdlg').showModal();
    $('#nf-' + fields[0].k).focus();
  }

  /* ------------------------------------------------------------ command palette */
  var cmdIdx = 0, cmdRes = [];
  function cmdSearch(q) {
    q = q.trim().toLowerCase();
    var pages = NAV.filter(function (n) { return n.length > 1 && (!q || n[1].toLowerCase().indexOf(q) >= 0); }).map(function (n) { return { page: n[0], title: n[1] }; });
    var items = [];
    if (q) {
      var words = q.split(/\s+/), ids = Object.keys(ITEMS), scored = [];
      ids.forEach(function (id) {
        var d = ITEMS[id].d, t = (id + ' ' + (d.title || d.statement) + ' ' + (d.module || d.suite || d.segment || '')).toLowerCase();
        if (!words.every(function (w) { return t.indexOf(w) >= 0; })) return;
        scored.push({ id: id, s: (id.toLowerCase() === q ? 0 : id.toLowerCase().indexOf(q) === 0 ? 1 : 2) + (ITEMS[id].kind === 'case' ? 0.5 : 0) });
      });
      scored.sort(function (a, b) { return a.s - b.s; });
      items = scored.slice(0, 40);
    }
    cmdRes = pages.slice(0, q ? 3 : 12).concat(items);
    cmdIdx = 0;
    var out = '', lastG = '';
    cmdRes.forEach(function (r, i) {
      var g = r.page ? 'Pages' : KINDS[ITEMS[r.id].kind] ? KINDS[ITEMS[r.id].kind].label.replace('Failed test', 'Test') : 'Beta is better';
      if (g !== lastG) { out += '<div class="cmd-g" role="presentation">' + g + '</div>'; lastG = g; }
      out += r.page
        ? '<div class="cmd-o" role="option" id="co' + i + '" data-i="' + i + '" aria-selected="' + (i === 0) + '"><span class="muted">' + icon(r.page) + '</span><span class="t">' + h(r.title) + '</span><span></span></div>'
        : '<div class="cmd-o" role="option" id="co' + i + '" data-i="' + i + '" aria-selected="' + (i === 0) + '"><span class="id">' + r.id + '</span><span class="t">' + h(summary(r.id).title) + '</span>' + (trackable(r.id) ? pill(SLABEL[statusOf(r.id)], CLOSED[statusOf(r.id)] ? 'ok' : statusOf(r.id) === 'in-progress' ? 'high' : '') : '<span></span>') + '</div>';
    });
    $('#cmd-list').innerHTML = out || '<div class="empty" style="border:0;padding:28px"><b>No matches</b>Try an ID such as SHA-01 or a word from the title.</div>';
    $('#cmd-q').setAttribute('aria-activedescendant', cmdRes.length ? 'co0' : '');
  }
  function cmdMove(d) {
    if (!cmdRes.length) return;
    cmdIdx = (cmdIdx + d + cmdRes.length) % cmdRes.length;
    $$('.cmd-o').forEach(function (o) { o.setAttribute('aria-selected', +o.getAttribute('data-i') === cmdIdx); });
    var el = $('#co' + cmdIdx); el.scrollIntoView({ block: 'nearest' });
    $('#cmd-q').setAttribute('aria-activedescendant', 'co' + cmdIdx);
  }
  function cmdGo(i) {
    var r = cmdRes[i]; if (!r) return;
    $('#cmd').close();
    if (r.page) location.hash = '#/' + (r.page === 'dashboard' ? '' : r.page); else openItem(r.id);
  }
  function openCmd() {
    if ($('#cmd').open) return;
    if ($('#dlg').open) $('#dlg').close();
    $('#cmd-q').value = ''; cmdSearch('');
    $('#cmd').showModal(); $('#cmd-q').focus();
  }
  $('#cmd-q').addEventListener('input', function () { cmdSearch(this.value); });
  $('#cmd-q').addEventListener('keydown', function (ev) {
    if (ev.key === 'ArrowDown') { ev.preventDefault(); cmdMove(1); }
    else if (ev.key === 'ArrowUp') { ev.preventDefault(); cmdMove(-1); }
    else if (ev.key === 'Enter') { ev.preventDefault(); cmdGo(cmdIdx); }
  });
  $('#cmd-list').addEventListener('click', function (ev) { var o = ev.target.closest('.cmd-o'); if (o) cmdGo(+o.getAttribute('data-i')); });

  /* ------------------------------------------------------------ theme + drawer */
  function isDark() {
    var t = document.documentElement.getAttribute('data-theme');
    return t ? t === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  function paintTheme() {
    $('#theme').innerHTML = icon(isDark() ? 'sun' : 'moon');
    $('#theme').setAttribute('aria-label', isDark() ? 'Switch to light theme' : 'Switch to dark theme');
    $('#theme').title = $('#theme').getAttribute('aria-label');
  }
  $('#theme').addEventListener('click', function () {
    var next = isDark() ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('cloudreel-tracker-theme', next); } catch (e) { /* ignore */ }
    paintTheme();
  });
  function drawer(open) {
    $('#side').classList.toggle('open', open);
    $('#scrim').hidden = !open;
    $('#menu').setAttribute('aria-expanded', open);
  }
  $('#menu').addEventListener('click', function () { drawer(!$('#side').classList.contains('open')); });
  $('#scrim').addEventListener('click', function () { drawer(false); });
  $('#orgswitch').addEventListener('change', function (ev) { if (ev.target.id === 'orgsel') setOrg(ev.target.value); });

  /* ------------------------------------------------------------ events */
  document.addEventListener('click', function (ev) {
    var t = ev.target, el;
    if (!t.closest('.multisel')) { $$('.ms-panel:not([hidden])').forEach(function (p) { p.hidden = true; }); $$('.ms-btn[aria-expanded=true]').forEach(function (b) { b.setAttribute('aria-expanded', 'false'); }); }
    if ((el = t.closest('[data-ref]'))) { ev.preventDefault(); openItem(el.getAttribute('data-ref')); return; }
    if ((el = t.closest('.shot'))) {
      $('#lb-i').src = el.getAttribute('data-full'); $('#lb-i').alt = el.getAttribute('data-cap'); $('#lb-t').textContent = el.getAttribute('data-cap');
      $('#lb-o').href = el.getAttribute('data-full');
      $('#lb').showModal(); return;
    }
    if ((el = t.closest('[data-close]'))) { el.closest('dialog').close(); return; }
    if (t.tagName === 'DIALOG') { t.close(); return; }
    if ((el = t.closest('[data-rmshot]'))) { pendingShots.splice(+el.getAttribute('data-rmshot'), 1); renderShotPreview(); return; }
    if ((el = t.closest('[data-step]'))) {
      var next = SHOWN[SHOWN.indexOf(current) + (+el.getAttribute('data-step'))];
      if (next) history.replaceState(null, '', '#/' + route() + '?item=' + next), showItem(next);
      return;
    }
    if (t.closest('#copylink')) {
      var done = function () { toast('Link copied'); };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(location.href).then(done, function () { toast('Could not copy. Copy the address bar instead.', true); });
      else toast('Copy the link from the address bar.', true);
      return;
    }
    if ((el = t.closest('.row-t'))) {
      var row = el.closest('[data-row]'), id = row.getAttribute('data-row');
      OPEN[id] = !OPEN[id];
      row.outerHTML = rowHtml(id, row.getAttribute('data-checks') === '1');
      var again = $('[data-row="' + id + '"] .row-t'); if (again) again.focus();
      return;
    }
    if ((el = t.closest('[data-seg]'))) { FS.seg = el.getAttribute('data-seg'); V.segments(); $('#tab-' + FS.seg).focus(); return; }
    if ((el = t.closest('[data-go]'))) { var f = { q: '', status: '' }; f[el.getAttribute('data-fk')] = [el.getAttribute('data-fv')]; FS[el.getAttribute('data-go')] = f; return; }
    if (t.closest('#bulk-x')) { clearPicks(); return; }
    if (t.closest('#open-cmd')) openCmd();
  });
  document.addEventListener('change', function (ev) {
    var t = ev.target, id;
    if ((id = t.getAttribute('data-status'))) { setItem(id, { status: t.value }); syncStatus(id); }
    else if ((id = t.getAttribute('data-owner'))) { setItem(id, { owner: t.value.trim() }); }
    else if ((id = t.getAttribute('data-note'))) { setItem(id, { note: t.value.trim() }); }
    else if ((id = t.getAttribute('data-pick'))) {
      SELECTED[id] = t.checked; t.closest('.row').classList.toggle('sel', t.checked); syncPickAll(); renderBulk();
    } else if (t.id === 'pickall') {
      SHOWN.filter(trackable).forEach(function (i) { SELECTED[i] = t.checked; });
      $$('[data-pick]').forEach(function (c) { c.checked = t.checked; c.closest('.row').classList.toggle('sel', t.checked); });
      renderBulk();
    } else if (t.id === 'nf-shots') {
      Promise.all([].slice.call(t.files).map(compressImage)).then(function (res) {
        res.forEach(function (r) { if (r) pendingShots.push(r); });
        renderShotPreview();
      });
      t.value = '';
    } else if (t.id === 'bulk-s' && t.value) {
      var ids = picked(), st = t.value;
      ids.forEach(function (i) { apply(i, { status: st }); });
      saveLocal();
      if (mode === 'server') post('/api/import', state).catch(serverLost);
      renderNav(); renderStore();
      toast(ids.length + ' item' + (ids.length === 1 ? '' : 's') + ' set to ' + SLABEL[st]);
      SELECTED = {}; renderBulk();
      if (redraw) redraw();
    }
  });
  document.addEventListener('keydown', function (ev) {
    var typing = /^(INPUT|TEXTAREA|SELECT)$/.test(ev.target.tagName);
    if ((ev.metaKey || ev.ctrlKey) && ev.key.toLowerCase() === 'k') { ev.preventDefault(); openCmd(); return; }
    if (ev.key === 'Escape' && $('.ms-panel:not([hidden])')) { $$('.ms-panel:not([hidden])').forEach(function (p) { p.hidden = true; }); $$('.ms-btn[aria-expanded=true]').forEach(function (b) { b.setAttribute('aria-expanded', 'false'); b.focus(); }); return; }
    if (typing || ev.metaKey || ev.ctrlKey || ev.altKey) return;
    if (ev.key === '/') { var f = $('.filters input'); ev.preventDefault(); if (f) f.focus(); else openCmd(); }
    else if (current && ev.key === 'ArrowRight') { var n = $('[data-step="1"]'); if (n && !n.disabled) n.click(); }
    else if (current && ev.key === 'ArrowLeft') { var p = $('[data-step="-1"]'); if (p && !p.disabled) p.click(); }
    else if (ev.key === 'Escape' && $('#side').classList.contains('open')) drawer(false);
    else if (ev.target.getAttribute && ev.target.getAttribute('role') === 'tab' && (ev.key === 'ArrowRight' || ev.key === 'ArrowLeft')) {
      var tabs = $$('[role=tab]'), i = tabs.indexOf(ev.target) + (ev.key === 'ArrowRight' ? 1 : -1);
      tabs[(i + tabs.length) % tabs.length].click();
    }
  });

  /* ------------------------------------------------------------ export / import */
  function download(name, text, type) {
    var a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([text], { type: type }));
    a.download = name; document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
  }
  $('#exp').innerHTML = icon('download') + 'JSON';
  $('#expcsv').innerHTML = icon('download') + 'CSV';
  $('#imp').innerHTML = icon('upload') + 'Import';
  if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
    $('#signout').hidden = true;
  } else {
    $('#signout').innerHTML = icon('signout') + 'Sign out';
    $('#signout').addEventListener('click', function () {
      fetch('/api/logout', { method: 'POST' }).catch(function () {}).then(function () { location.href = '/login'; });
    });
  }
  $('#exp').addEventListener('click', function () { download('cloudreel-tracking.json', JSON.stringify(state, null, 1), 'application/json'); toast('Exported tracking data'); });
  $('#expcsv').addEventListener('click', function () {
    var q = function (s) { return '"' + String(s == null ? '' : s).replace(/"/g, '""') + '"'; };
    var rows = [['ID', 'Kind', 'Severity / result', 'Module', 'Title', 'Status', 'Owner', 'Notes', 'Updated']];
    Object.keys(KINDS).forEach(function (k) {
      KINDS[k].items.forEach(function (d) {
        var e = state.items[d.id] || {};
        rows.push([d.id, KINDS[k].one, d.sev || d.status || d.outcomeLabel, d.module || d.suite || d.segment, d.title || d.statement, SLABEL[statusOf(d.id)], e.owner, e.note, e.updated]);
      });
    });
    download('cloudreel-tracking.csv', '﻿' + rows.map(function (r) { return r.map(q).join(','); }).join('\r\n'), 'text/csv');
    toast('Exported ' + (rows.length - 1) + ' rows');
  });
  $('#imp').addEventListener('click', function () { $('#impf').click(); });
  $('#impf').addEventListener('change', function () {
    var f = this.files[0]; if (!f) return;
    var rd = new FileReader();
    rd.onload = function () {
      var s; try { s = JSON.parse(rd.result); } catch (e) { s = null; }
      if (!s || typeof s.items !== 'object' || !s.items) { toast('That file is not a tracker export.', true); return; }
      if (!confirm('Replace the current tracking data with ' + Object.keys(s.items).length + ' items from this file?')) return;
      state = { items: s.items }; saveLocal();
      if (mode === 'server') post('/api/import', state).catch(serverLost);
      lastRoute = null; render(); renderStore();
      toast('Imported ' + Object.keys(s.items).length + ' items');
    };
    rd.readAsText(f); this.value = '';
  });

  /* ------------------------------------------------------------ boot */
  $('#menu').innerHTML = icon('menu');
  $$('.sb-i').forEach(function (e) { e.innerHTML = icon('search'); });
  $('#kbd').textContent = /Mac|iPhone|iPad/.test(navigator.platform) ? '⌘K' : 'Ctrl K';
  paintTheme();
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', paintTheme);
  window.addEventListener('hashchange', render);
  loadState().then(function () { hydrateCustom(); render(); renderStore(); });
})();
