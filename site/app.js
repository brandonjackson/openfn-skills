"use strict";

const state = {
  manifest: null,
  pack: null,
  activeCategory: "all",
  query: "",
};

const els = {
  packSelect: document.getElementById("pack-select"),
  packName: document.getElementById("pack-name"),
  packDescription: document.getElementById("pack-description"),
  packStats: document.getElementById("pack-stats"),
  packSource: document.getElementById("pack-source"),
  search: document.getElementById("search"),
  categoryFilters: document.getElementById("category-filters"),
  resultsCount: document.getElementById("results-count"),
  grid: document.getElementById("skill-grid"),
  emptyState: document.getElementById("empty-state"),
  modal: document.getElementById("skill-modal"),
  modalCategory: document.getElementById("modal-category"),
  modalTitle: document.getElementById("modal-title"),
  modalDescription: document.getElementById("modal-description"),
  modalSource: document.getElementById("modal-source"),
  modalPrompt: document.getElementById("modal-prompt"),
  modalClose: document.getElementById("modal-close"),
  copyBtn: document.getElementById("copy-prompt"),
  catalogCta: document.getElementById("service-catalog-cta"),
  catalogPage: document.getElementById("service-catalog-page"),
  catalogBtn: document.getElementById("view-catalog-btn"),
  catalogBack: document.getElementById("catalog-back"),
  serviceList: document.getElementById("service-list"),
};

const SERVICE_CATALOG = [
  {
    id: "patient-referral",
    name: "Patient Referral Management",
    summary: "Route patients between health facilities with automated tracking, ensuring continuity of care across the referral chain.",
    journey: [
      "Health worker identifies a patient needing specialist care at a primary facility",
      "Worker completes a referral form (mobile or paper) with clinical details and urgency",
      "Referral is routed to the nearest appropriate receiving facility",
      "Receiving facility confirms acceptance and schedules the patient",
      "Patient travels and presents at the receiving facility with referral context pre-loaded",
      "Receiving clinician records outcome and counter-referral details",
      "Originating facility receives outcome notification and follows up with the patient",
    ],
    systems: ["CommCare", "DHIS2 Tracker", "OpenMRS", "RapidPro"],
    simulation: [
      {
        name: "Generate Referral Events",
        description: "Produces synthetic referral submissions at configurable intervals, simulating health worker form completions with realistic patient demographics, clinical details, and facility codes.",
        detail: "Trigger: cron (every 5 min) · Adaptor: http",
      },
      {
        name: "Simulate Facility Acceptance",
        description: "Picks up pending referrals and randomly assigns acceptance/rejection outcomes with realistic response delays, populating the receiving facility record.",
        detail: "Trigger: cron (every 10 min) · Adaptor: http",
      },
    ],
    production: [
      {
        name: "Referral Intake Sync",
        description: "Triggered when a community health worker submits a referral form in CommCare. Maps patient and clinical data fields into the DHIS2 Tracker referral program stage and creates a tracked entity if the patient is new.",
        detail: "Trigger: CommCare form webhook · Adaptors: commcare, dhis2",
      },
      {
        name: "Facility Routing & Notification",
        description: "Reads the referral destination, looks up the receiving facility in DHIS2, and sends an SMS notification to the facility focal point via RapidPro with patient context and urgency level.",
        detail: "Trigger: flow (after Referral Intake Sync) · Adaptors: dhis2, rapidpro",
      },
      {
        name: "Outcome Feedback Loop",
        description: "When the receiving facility records a referral outcome in OpenMRS, syncs the outcome back to the DHIS2 Tracker referral event and triggers a follow-up SMS to the originating health worker.",
        detail: "Trigger: OpenMRS webhook · Adaptors: openmrs, dhis2, rapidpro",
      },
    ],
  },
  {
    id: "beneficiary-registration",
    name: "Beneficiary Registration & Enrollment",
    summary: "Register individuals into social protection or health programmes with deduplication and eligibility verification across systems.",
    journey: [
      "Field enumerator meets a potential beneficiary in the community or at a registration point",
      "Enumerator collects demographic, household, and eligibility data via a mobile form",
      "Data is checked for duplicates against the existing beneficiary registry",
      "Eligibility is verified against programme criteria (means test, geographic, categorical)",
      "Approved beneficiaries are enrolled and assigned a programme ID",
      "Beneficiary receives confirmation (SMS or card) with their enrollment details",
      "Enrolled beneficiary begins receiving programme services or transfers",
    ],
    systems: ["Kobo Toolbox", "Salesforce", "DHIS2", "RapidPro"],
    simulation: [
      {
        name: "Generate Registration Submissions",
        description: "Creates synthetic Kobo form submissions with randomized but realistic beneficiary profiles, including occasional deliberate duplicates and edge-case eligibility scenarios.",
        detail: "Trigger: cron (every 3 min) · Adaptor: http",
      },
      {
        name: "Mock Eligibility Engine",
        description: "Applies configurable eligibility rules to pending registrations and returns accept/reject/flag decisions, simulating the programme's means-testing logic.",
        detail: "Trigger: cron (every 5 min) · Adaptor: http",
      },
    ],
    production: [
      {
        name: "Registration Intake",
        description: "Triggered on Kobo form submission. Maps beneficiary demographics and household composition into Salesforce contacts, performing fuzzy-match deduplication before creating new records.",
        detail: "Trigger: Kobo REST service · Adaptors: kobotoolbox, salesforce",
      },
      {
        name: "Eligibility Determination",
        description: "Runs programme-specific eligibility rules against the new Salesforce contact, pulling household and geographic data. Updates the contact status to eligible, ineligible, or pending-review.",
        detail: "Trigger: flow (after Registration Intake) · Adaptor: salesforce",
      },
      {
        name: "Enrollment Confirmation",
        description: "For approved beneficiaries, generates a programme ID, creates the enrollment record in DHIS2, and sends a confirmation SMS via RapidPro with enrollment details and next steps.",
        detail: "Trigger: flow (after Eligibility) · Adaptors: dhis2, rapidpro",
      },
    ],
  },
  {
    id: "chw-reporting",
    name: "Community Health Worker Reporting",
    summary: "Aggregate and sync field-level health data from mobile collection tools into national health information systems.",
    journey: [
      "Community health worker visits households and provides services (screening, counseling, treatment)",
      "CHW records each visit and service delivery event on a mobile form",
      "Supervisor reviews submitted data for completeness and quality at end of reporting period",
      "Approved data is aggregated by facility, period, and indicator",
      "Aggregated values are loaded into the national HMIS for the correct org unit and period",
      "District and national dashboards update automatically to reflect new data",
      "Programme managers review dashboards to make resource allocation decisions",
    ],
    systems: ["CommCare", "DHIS2", "OpenHIM"],
    simulation: [
      {
        name: "Generate CHW Visit Records",
        description: "Produces synthetic case and visit records mirroring CommCare data structures, with realistic health indicator values and volume patterns matching actual CHW workloads.",
        detail: "Trigger: cron (every 2 min) · Adaptor: http",
      },
      {
        name: "Simulate Aggregation Period",
        description: "Rolls up simulated visit records into monthly aggregate summaries by facility code, mimicking the end-of-period reporting cycle.",
        detail: "Trigger: cron (daily) · Adaptor: http",
      },
    ],
    production: [
      {
        name: "Case Data Sync",
        description: "Listens for new or updated CommCare cases via the forwarding API. Maps case properties to DHIS2 tracked entity attributes and enrollments, creating or updating the patient record in the tracker programme.",
        detail: "Trigger: CommCare data forwarding · Adaptors: commcare, dhis2",
      },
      {
        name: "Aggregate Value Upload",
        description: "Runs on a monthly schedule. Queries CommCare for all completed forms in the reporting period, aggregates by organisation unit and data element, and pushes data value sets to DHIS2 via the dataValueSets endpoint.",
        detail: "Trigger: cron (monthly) · Adaptors: commcare, dhis2",
      },
      {
        name: "Data Quality Check",
        description: "After aggregate upload, runs validation rules against the submitted data values in DHIS2, flags outliers, and sends a summary report to supervisors via email or messaging.",
        detail: "Trigger: flow (after Aggregate Upload) · Adaptors: dhis2, http",
      },
    ],
  },
  {
    id: "commodity-tracking",
    name: "Commodity Distribution & Supply Chain",
    summary: "Track health commodity and supply movement from central warehouses to last-mile distribution points with stock-level monitoring.",
    journey: [
      "Central warehouse receives stock and records quantities in the logistics management system",
      "District places an order or requisition based on facility consumption data",
      "Warehouse prepares shipment and records dispatch with batch numbers and quantities",
      "Transport team delivers commodities to the district or facility level",
      "Receiving facility confirms receipt and records any discrepancies",
      "Facility dispenses commodities to patients and records consumption",
      "Stock levels are monitored; alerts fire when stock falls below reorder threshold",
    ],
    systems: ["OpenLMIS", "DHIS2", "mSupply", "CommCare"],
    simulation: [
      {
        name: "Generate Stock Movements",
        description: "Creates synthetic shipment, receipt, and consumption events across a multi-level facility hierarchy with realistic lead times and occasional stock-out scenarios.",
        detail: "Trigger: cron (every 5 min) · Adaptor: http",
      },
    ],
    production: [
      {
        name: "Requisition Sync",
        description: "When a facility submits a requisition in OpenLMIS, maps the order line items into the DHIS2 logistics dataset for the corresponding org unit and period.",
        detail: "Trigger: OpenLMIS webhook · Adaptors: openlmis, dhis2",
      },
      {
        name: "Receipt Confirmation",
        description: "When a facility confirms receipt in mSupply or via a CommCare form, updates the stock-on-hand data element in DHIS2 and records any discrepancies between shipped and received quantities.",
        detail: "Trigger: mSupply event / CommCare webhook · Adaptors: http, dhis2",
      },
      {
        name: "Stock Alert Workflow",
        description: "Runs nightly to check stock-on-hand levels against minimum thresholds per facility and commodity. Sends reorder alerts to district supply officers via RapidPro when stock falls below threshold.",
        detail: "Trigger: cron (nightly) · Adaptors: dhis2, rapidpro",
      },
    ],
  },
  {
    id: "case-management",
    name: "Case Management & Social Services",
    summary: "Manage individual cases across social service providers with referral tracking, status updates, and outcome monitoring.",
    journey: [
      "Social worker identifies a vulnerable individual or household through screening or community report",
      "Worker opens a new case with intake assessment data in the case management system",
      "Case is assigned to appropriate service providers based on needs (health, legal, psychosocial)",
      "Service providers deliver interventions and record activities against the case",
      "Case manager monitors progress through regular follow-ups and updates the case plan",
      "When goals are met, the case is reviewed for closure with outcome documentation",
      "Closed cases are included in aggregate programme reporting and impact analysis",
    ],
    systems: ["Primero", "DHIS2 Tracker", "Salesforce", "CommCare"],
    simulation: [
      {
        name: "Generate Case Intake Events",
        description: "Creates synthetic cases with varied vulnerability profiles, referral needs, and demographic distributions matching typical social protection programme caseloads.",
        detail: "Trigger: cron (every 5 min) · Adaptor: http",
      },
      {
        name: "Simulate Service Delivery",
        description: "Advances open cases through service stages with randomized outcomes and completion timelines, generating realistic activity logs.",
        detail: "Trigger: cron (every 15 min) · Adaptor: http",
      },
    ],
    production: [
      {
        name: "Case Intake Sync",
        description: "When a new case is created in Primero (the CPIMS+/GBVIMS+ platform), maps the case data, protection concerns, and service needs into DHIS2 Tracker as a tracked entity enrollment.",
        detail: "Trigger: Primero webhook · Adaptors: primero, dhis2",
      },
      {
        name: "Service Activity Update",
        description: "Syncs service delivery records (interventions provided, referrals made) from CommCare field visits back to the Primero case record, ensuring the case file stays current.",
        detail: "Trigger: CommCare forwarding · Adaptors: commcare, primero",
      },
      {
        name: "Outcome Aggregation",
        description: "Monthly roll-up of case outcomes (resolved, ongoing, referred-out) by programme, district, and case type into DHIS2 aggregate data sets for programme monitoring dashboards.",
        detail: "Trigger: cron (monthly) · Adaptors: primero, dhis2",
      },
    ],
  },
  {
    id: "disease-surveillance",
    name: "Disease Surveillance & Early Warning",
    summary: "Detect potential outbreaks by aggregating sentinel site data and triggering alerts when thresholds are exceeded.",
    journey: [
      "Clinicians at sentinel sites record suspected cases of notifiable diseases during patient encounters",
      "Case data flows into the surveillance system with date, location, and clinical classification",
      "System aggregates case counts by disease, epidemiological week, and geographic area",
      "Automated analysis compares current counts against historical baselines and seasonal thresholds",
      "When a threshold is breached, an alert is generated for the disease control team",
      "Epidemiologists investigate the alert, request lab confirmation, and determine response",
      "Response actions are documented and the alert is resolved or escalated",
    ],
    systems: ["DHIS2", "Go.Data", "RapidPro", "FHIR"],
    simulation: [
      {
        name: "Generate Surveillance Reports",
        description: "Produces synthetic weekly disease case reports with configurable outbreak scenarios — baseline noise with occasional spike events above threshold to trigger alerts.",
        detail: "Trigger: cron (every 10 min) · Adaptor: http",
      },
    ],
    production: [
      {
        name: "Case Notification Sync",
        description: "When a clinician submits a case notification in DHIS2 Tracker (IDSR programme), maps the event into Go.Data for outbreak investigation, creating a case record with epidemiological and lab data fields.",
        detail: "Trigger: DHIS2 program notification · Adaptors: dhis2, godata",
      },
      {
        name: "Threshold Alert Engine",
        description: "Runs weekly to query DHIS2 for aggregate case counts by disease and org unit. Compares against stored thresholds and historical averages. Generates RapidPro alerts to district disease surveillance officers when thresholds are exceeded.",
        detail: "Trigger: cron (weekly) · Adaptors: dhis2, rapidpro",
      },
      {
        name: "FHIR Condition Reporting",
        description: "Maps confirmed cases from Go.Data into FHIR Condition resources and bundles for reporting to regional or international surveillance networks (e.g., WHO IHR reporting).",
        detail: "Trigger: Go.Data webhook · Adaptors: godata, fhir",
      },
    ],
  },
  {
    id: "cash-transfer",
    name: "Conditional Cash Transfer & Payments",
    summary: "Verify beneficiary compliance with programme conditions, authorize payments, and reconcile disbursement records.",
    journey: [
      "Enrolled beneficiary is expected to meet programme conditions (e.g., school attendance, health checkups)",
      "Field monitors verify compliance through facility visits or digital attendance records",
      "Compliance data is collected and synced to the programme management system",
      "Payment authorization runs for all compliant beneficiaries in the current cycle",
      "Payment instructions are generated and sent to the payment service provider (bank, mobile money)",
      "Beneficiary receives transfer and payment receipt is recorded",
      "Reconciliation matches disbursement records against authorizations and flags discrepancies",
    ],
    systems: ["Salesforce", "Kobo Toolbox", "Payment Gateway API", "DHIS2"],
    simulation: [
      {
        name: "Generate Compliance Records",
        description: "Creates synthetic compliance verification data across a beneficiary cohort — some fully compliant, some partially, some with missing verification — to test the full payment authorization flow.",
        detail: "Trigger: cron (every 5 min) · Adaptor: http",
      },
      {
        name: "Mock Payment Gateway",
        description: "Accepts payment instructions and returns randomized success/failure/pending responses with realistic settlement delays, simulating a mobile money or bank API.",
        detail: "Trigger: webhook receiver · Adaptor: http",
      },
    ],
    production: [
      {
        name: "Compliance Verification Sync",
        description: "Pulls compliance verification records from Kobo field monitoring forms and facility attendance data from DHIS2. Maps compliance status to each beneficiary record in Salesforce.",
        detail: "Trigger: cron (bi-weekly) · Adaptors: kobotoolbox, dhis2, salesforce",
      },
      {
        name: "Payment Authorization",
        description: "Queries Salesforce for all compliant beneficiaries in the current payment cycle. Generates a payment instruction batch and submits to the payment service provider API.",
        detail: "Trigger: flow (after Compliance Sync) · Adaptors: salesforce, http",
      },
      {
        name: "Disbursement Reconciliation",
        description: "After the payment window closes, fetches transaction results from the payment provider, matches against authorized payments in Salesforce, updates payment status, and flags failed or unmatched transactions for manual review.",
        detail: "Trigger: cron (daily during payment window) · Adaptors: http, salesforce",
      },
    ],
  },
  {
    id: "farmer-registration",
    name: "Farmer Registration & Agricultural Advisory",
    summary: "Register smallholder farmers, map their plots, and deliver targeted agricultural advisory messages based on crop and weather data.",
    journey: [
      "Extension agent visits a farming community and registers farmers with demographic and plot data",
      "GPS coordinates and crop types are recorded for each plot via a mobile form",
      "Farmer profile is created in the agriculture MIS with plot and crop details",
      "Weather and agronomic data services are queried for the farmer's location and crop",
      "Targeted advisory messages (planting, pest management, harvest timing) are generated",
      "Farmer receives advisory via SMS or voice message in local language",
      "Farmer responses and yield data are collected at harvest for programme impact measurement",
    ],
    systems: ["ODK / Kobo Toolbox", "DHIS2", "RapidPro", "Weather API"],
    simulation: [
      {
        name: "Generate Farmer Profiles",
        description: "Creates synthetic farmer registrations with varied plot sizes, crop mixes, and geographic coordinates across target agricultural zones.",
        detail: "Trigger: cron (every 5 min) · Adaptor: http",
      },
      {
        name: "Simulate Weather & Advisory Cycle",
        description: "Generates mock weather data for registered locations and produces corresponding advisory message payloads matching the crop calendar stage.",
        detail: "Trigger: cron (every 30 min) · Adaptor: http",
      },
    ],
    production: [
      {
        name: "Farmer Registration Sync",
        description: "Triggered by ODK/Kobo form submission. Maps farmer demographics, plot coordinates, and crop details into DHIS2 tracked entities in the agriculture programme.",
        detail: "Trigger: Kobo REST service · Adaptors: kobotoolbox, dhis2",
      },
      {
        name: "Advisory Message Generation",
        description: "Weekly scheduled job that queries the weather API for upcoming conditions by zone, matches against farmer crop profiles in DHIS2, and generates personalized advisory messages sent via RapidPro.",
        detail: "Trigger: cron (weekly) · Adaptors: http, dhis2, rapidpro",
      },
      {
        name: "Harvest Data Collection",
        description: "At season end, pulls yield survey responses from Kobo and maps harvest data back to the farmer's tracked entity in DHIS2, enabling programme impact analysis.",
        detail: "Trigger: Kobo webhook · Adaptors: kobotoolbox, dhis2",
      },
    ],
  },
  {
    id: "education-attendance",
    name: "School Attendance & Education Monitoring",
    summary: "Track student attendance across schools, flag at-risk learners, and feed data into education management information systems.",
    journey: [
      "Teacher records daily attendance for each student via a mobile app or tablet at the school",
      "Attendance data is submitted to the school information system at the end of each day",
      "System calculates attendance rates by student, class, and school for the reporting period",
      "Students with attendance below threshold are flagged for intervention",
      "School administrators and education officers receive alerts for at-risk students",
      "Interventions are recorded (home visit, parent meeting, support services)",
      "Aggregate attendance data is reported to the district/national education MIS",
    ],
    systems: ["Kobo Toolbox", "DHIS2", "RapidPro", "Custom School MIS"],
    simulation: [
      {
        name: "Generate Attendance Records",
        description: "Produces daily attendance submissions for a simulated school population with realistic absence patterns — including seasonal variation, chronic absenteeism cases, and dropout events.",
        detail: "Trigger: cron (every 3 min) · Adaptor: http",
      },
    ],
    production: [
      {
        name: "Attendance Data Sync",
        description: "Triggered by daily Kobo attendance form submission. Maps student attendance records into the school MIS, creating student records on first encounter and updating daily attendance flags.",
        detail: "Trigger: Kobo REST service · Adaptors: kobotoolbox, http",
      },
      {
        name: "At-Risk Student Alerts",
        description: "Runs weekly to calculate rolling attendance rates per student. Flags students below the programme threshold and sends alert messages to school administrators and education officers via RapidPro.",
        detail: "Trigger: cron (weekly) · Adaptors: http, rapidpro",
      },
      {
        name: "EMIS Aggregate Reporting",
        description: "Monthly aggregation of attendance data by school, grade, and gender. Pushes aggregated data values into DHIS2 education data sets for the national Education MIS.",
        detail: "Trigger: cron (monthly) · Adaptors: http, dhis2",
      },
    ],
  },
  {
    id: "lab-results",
    name: "Laboratory Results Delivery",
    summary: "Route lab test results from laboratory information systems to clinicians and patient-facing systems with result-based clinical alerts.",
    journey: [
      "Clinician orders a lab test during a patient encounter and records the order in the EMR",
      "Sample is collected, labeled, and transported to the laboratory",
      "Lab technician processes the sample and enters results into the LIMS",
      "Results are validated and authorized by the lab supervisor",
      "Authorized results are routed back to the ordering clinician's system",
      "Critical or abnormal results trigger immediate alerts to the clinician",
      "Patient is notified of results availability and advised on next steps",
    ],
    systems: ["OpenMRS", "FHIR", "RapidPro", "Custom LIMS"],
    simulation: [
      {
        name: "Generate Lab Orders & Results",
        description: "Creates synthetic lab test orders followed by result events with configurable turnaround times, result ranges (normal, abnormal, critical), and test type distributions.",
        detail: "Trigger: cron (every 5 min) · Adaptor: http",
      },
    ],
    production: [
      {
        name: "Order Sync to LIMS",
        description: "When a clinician creates a lab order in OpenMRS, maps the order into a FHIR ServiceRequest resource and sends it to the laboratory information system, ensuring sample tracking from the point of order.",
        detail: "Trigger: OpenMRS webhook · Adaptors: openmrs, fhir",
      },
      {
        name: "Results Delivery",
        description: "When the LIMS publishes an authorized result, maps the FHIR DiagnosticReport back into OpenMRS as an observation linked to the original order. Flags critical results for immediate clinician notification.",
        detail: "Trigger: LIMS webhook · Adaptors: fhir, openmrs",
      },
      {
        name: "Patient Notification",
        description: "For completed results, sends a patient-friendly SMS via RapidPro informing them results are available and providing instructions to contact their health facility. Respects consent preferences stored in the EMR.",
        detail: "Trigger: flow (after Results Delivery) · Adaptors: openmrs, rapidpro",
      },
    ],
  },
];

async function init() {
  try {
    const res = await fetch("./packs/manifest.json", { cache: "no-cache" });
    state.manifest = await res.json();
  } catch (err) {
    showLoadError(err);
    return;
  }

  els.packSelect.innerHTML = state.manifest.packs
    .map((p) => `<option value="${p.id}">${escapeHtml(p.name)}</option>`)
    .join("");

  const initial = pickInitialPack();
  els.packSelect.value = initial;
  els.packSelect.addEventListener("change", () => loadPack(els.packSelect.value, true));
  els.search.addEventListener("input", (e) => {
    state.query = e.target.value.trim().toLowerCase();
    render();
  });
  els.modalClose.addEventListener("click", closeModal);
  els.modal.addEventListener("click", (e) => {
    if (e.target.dataset.close === "true") closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !els.modal.hidden) closeModal();
  });
  els.copyBtn.addEventListener("click", copyPrompt);
  els.catalogBtn.addEventListener("click", () => showCatalog());
  els.catalogBack.addEventListener("click", () => hideCatalog());

  window.addEventListener("hashchange", handleHashChange);
  await loadPack(initial, false);
  handleHashChange();
}

function pickInitialPack() {
  const hashPack = parseHash().pack;
  const ids = state.manifest.packs.map((p) => p.id);
  if (hashPack && ids.includes(hashPack)) return hashPack;
  return state.manifest.default || ids[0];
}

function parseHash() {
  const hash = window.location.hash.replace(/^#/, "");
  const out = {};
  for (const part of hash.split("&")) {
    if (!part) continue;
    const [k, v] = part.split("=");
    out[decodeURIComponent(k)] = v ? decodeURIComponent(v) : "";
  }
  return out;
}

function setHash(updates) {
  const current = parseHash();
  const next = { ...current, ...updates };
  const str = Object.entries(next)
    .filter(([, v]) => v !== undefined && v !== null && v !== "")
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join("&");
  const target = str ? `#${str}` : "";
  if (target !== window.location.hash) {
    history.replaceState(null, "", target || window.location.pathname);
  }
}

async function loadPack(packId, updateHash) {
  const entry = state.manifest.packs.find((p) => p.id === packId);
  if (!entry) return;
  const res = await fetch(`./packs/${entry.file}`, { cache: "no-cache" });
  state.pack = await res.json();
  state.activeCategory = "all";
  state.query = "";
  els.search.value = "";
  if (updateHash) setHash({ pack: packId, skill: undefined });
  renderHero();
  renderCategoryFilters();
  render();
  els.catalogCta.hidden = state.pack.id !== "openfn-starter";
  els.catalogPage.hidden = true;
}

function renderHero() {
  const p = state.pack;
  els.packName.textContent = p.name;
  els.packDescription.textContent = p.description || "";
  els.packStats.textContent = `${p.skills.length} skills · ${p.categories.length} categories`;
  if (p.source_url) {
    els.packSource.textContent = "View source ↗";
    els.packSource.href = p.source_url;
    els.packSource.style.display = "";
  } else {
    els.packSource.style.display = "none";
  }
}

function renderCategoryFilters() {
  const p = state.pack;
  const chips = [
    { slug: "all", label: "All", count: p.skills.length },
    ...p.categories.map((c) => ({
      slug: c.slug,
      label: c.label,
      count: c.skill_ids.length,
    })),
  ];
  els.categoryFilters.innerHTML = chips
    .map(
      (c) =>
        `<button type="button" class="cat-chip${
          c.slug === state.activeCategory ? " active" : ""
        }" data-cat="${escapeAttr(c.slug)}">${escapeHtml(c.label)}<span class="count">${c.count}</span></button>`
    )
    .join("");
  for (const btn of els.categoryFilters.querySelectorAll(".cat-chip")) {
    btn.addEventListener("click", () => {
      state.activeCategory = btn.dataset.cat;
      renderCategoryFilters();
      render();
    });
  }
}

function filteredSkills() {
  const { activeCategory, query } = state;
  return state.pack.skills.filter((s) => {
    if (activeCategory !== "all" && s.category !== activeCategory) return false;
    if (!query) return true;
    const hay = `${s.title} ${s.description} ${s.category_label}`.toLowerCase();
    return hay.includes(query);
  });
}

function render() {
  const skills = filteredSkills();
  els.resultsCount.textContent = `${skills.length} skill${skills.length === 1 ? "" : "s"}`;
  if (skills.length === 0) {
    els.grid.innerHTML = "";
    els.emptyState.hidden = false;
    return;
  }
  els.emptyState.hidden = true;
  els.grid.innerHTML = skills.map(renderCard).join("");
  for (const card of els.grid.querySelectorAll(".skill-card")) {
    card.addEventListener("click", () => openSkill(card.dataset.id));
  }
}

function renderCard(s) {
  return `
    <button type="button" class="skill-card" data-id="${escapeAttr(s.id)}">
      <span class="cat">${escapeHtml(s.category_label)}</span>
      <h3>${escapeHtml(s.title)}</h3>
      <p>${escapeHtml(s.description || "")}</p>
      ${s.planned ? '<span class="planned-tag">Planned</span>' : ""}
    </button>
  `;
}

function openSkill(id) {
  const skill = state.pack.skills.find((s) => s.id === id);
  if (!skill) return;
  els.modalCategory.textContent = skill.category_label;
  els.modalTitle.textContent = skill.title;
  els.modalDescription.textContent = skill.description || "";
  if (skill.prompt && skill.prompt.trim()) {
    els.modalPrompt.textContent = skill.prompt;
    els.modalPrompt.classList.remove("empty");
    els.copyBtn.disabled = false;
    els.copyBtn.style.display = "";
  } else {
    els.modalPrompt.textContent =
      "This skill is planned but the prompt body hasn't been authored yet.";
    els.modalPrompt.classList.add("empty");
    els.copyBtn.style.display = "none";
  }
  if (skill.source_url) {
    els.modalSource.href = skill.source_url;
    els.modalSource.hidden = false;
  } else {
    els.modalSource.hidden = true;
  }
  els.copyBtn.textContent = "Copy prompt";
  els.copyBtn.classList.remove("copied");
  els.modal.hidden = false;
  document.body.style.overflow = "hidden";
  setHash({ pack: state.pack.id, skill: skill.id });
}

function closeModal() {
  els.modal.hidden = true;
  document.body.style.overflow = "";
  setHash({ skill: undefined });
}

async function copyPrompt() {
  const text = els.modalPrompt.textContent;
  try {
    await navigator.clipboard.writeText(text);
    els.copyBtn.textContent = "Copied!";
    els.copyBtn.classList.add("copied");
    setTimeout(() => {
      els.copyBtn.textContent = "Copy prompt";
      els.copyBtn.classList.remove("copied");
    }, 1400);
  } catch {
    els.copyBtn.textContent = "Copy failed";
  }
}

function showCatalog() {
  document.querySelector(".hero").hidden = true;
  document.querySelector(".grid-wrap").hidden = true;
  els.catalogCta.hidden = true;
  els.catalogPage.hidden = false;
  renderServiceCatalog();
  setHash({ pack: state.pack.id, view: "catalog", skill: undefined });
  window.scrollTo(0, 0);
}

function hideCatalog() {
  document.querySelector(".hero").hidden = false;
  document.querySelector(".grid-wrap").hidden = false;
  els.catalogCta.hidden = state.pack.id !== "openfn-starter";
  els.catalogPage.hidden = true;
  setHash({ view: undefined });
  window.scrollTo(0, 0);
}

function renderServiceCatalog() {
  els.serviceList.innerHTML = SERVICE_CATALOG.map((svc) => `
    <div class="service-item" data-svc="${escapeAttr(svc.id)}">
      <div class="service-item-header" role="button" tabindex="0">
        <div>
          <h3>${escapeHtml(svc.name)}</h3>
          <p>${escapeHtml(svc.summary)}</p>
        </div>
        <span class="service-toggle">▾</span>
      </div>
      <div class="service-item-body">
        <div class="service-section">
          <h4>Customer Journey</h4>
          <ol>${svc.journey.map((s) => `<li>${escapeHtml(s)}</li>`).join("")}</ol>
        </div>
        <div class="service-section">
          <h4>Systems</h4>
          <div class="system-tags">${svc.systems.map((s) => `<span class="system-tag">${escapeHtml(s)}</span>`).join("")}</div>
        </div>
        <div class="service-section">
          <h4>OpenFn Workflows — Simulation</h4>
          ${svc.simulation.map((w) => `
            <div class="workflow-block">
              <h5>${escapeHtml(w.name)}</h5>
              <p>${escapeHtml(w.description)}</p>
              <div class="wf-detail">${escapeHtml(w.detail)}</div>
            </div>
          `).join("")}
        </div>
        <div class="service-section">
          <h4>OpenFn Workflows — Production</h4>
          ${svc.production.map((w) => `
            <div class="workflow-block">
              <h5>${escapeHtml(w.name)}</h5>
              <p>${escapeHtml(w.description)}</p>
              <div class="wf-detail">${escapeHtml(w.detail)}</div>
            </div>
          `).join("")}
        </div>
      </div>
    </div>
  `).join("");

  for (const item of els.serviceList.querySelectorAll(".service-item-header")) {
    item.addEventListener("click", () => {
      item.closest(".service-item").classList.toggle("open");
    });
    item.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        item.closest(".service-item").classList.toggle("open");
      }
    });
  }
}

function handleHashChange() {
  const { pack, skill, view } = parseHash();
  if (pack && state.pack && pack !== state.pack.id) {
    els.packSelect.value = pack;
    loadPack(pack, false).then(() => {
      if (view === "catalog") showCatalog();
      else if (skill) openSkill(skill);
    });
    return;
  }
  if (view === "catalog" && state.pack && state.pack.id === "openfn-starter") {
    showCatalog();
    return;
  }
  if (skill && state.pack) openSkill(skill);
}

function showLoadError(err) {
  document.body.innerHTML = `
    <div style="padding:48px;font-family:sans-serif;max-width:640px;margin:0 auto">
      <h1>Couldn't load skills</h1>
      <p>Failed to fetch <code>packs/manifest.json</code>. Make sure you're serving this site over HTTP — opening <code>index.html</code> directly with <code>file://</code> blocks fetch.</p>
      <pre>${escapeHtml(String(err))}</pre>
      <p>Try: <code>cd site &amp;&amp; python3 -m http.server 8000</code></p>
    </div>
  `;
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeAttr(s) {
  return escapeHtml(s);
}

init();
