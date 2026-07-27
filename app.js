const STORAGE_KEY = "sdma-support-desk-v1";

const seedData = {
  role: "admin",
  clients: [
    {
      id: "access",
      name: "Access Bank",
      tier: "Banking",
      accountManager: "Admin",
      contact: "IT Operations Desk",
      sites: [
        { id: "acc-ikeja", name: "Ikeja Branch", location: "Ikeja, Lagos", link: "SDMA-A1", health: "online", prtgSensorId: "", prtgSensorName: "" },
        { id: "acc-victoria", name: "Victoria Island Branch", location: "Victoria Island, Lagos", link: "SDMA-A2", health: "degraded", prtgSensorId: "", prtgSensorName: "" },
        { id: "acc-estate", name: "Staff Estate", location: "Magodo, Lagos", link: "SDMA-A3", health: "online", prtgSensorId: "", prtgSensorName: "" }
      ]
    },
    {
      id: "wema",
      name: "Wema Bank",
      tier: "Banking",
      accountManager: "Admin",
      contact: "Network Support",
      sites: [
        { id: "wem-lekki", name: "Lekki Branch", location: "Lekki Phase 1, Lagos", link: "SDMA-W1", health: "down", prtgSensorId: "", prtgSensorName: "" },
        { id: "wem-ibadan", name: "Dugbe Branch", location: "Ibadan, Oyo", link: "SDMA-W2", health: "online", prtgSensorId: "", prtgSensorName: "" }
      ]
    },
    {
      id: "lafarge",
      name: "Lafarge Cement",
      tier: "Enterprise",
      accountManager: "Admin",
      contact: "Plant IT",
      sites: [
        { id: "laf-ewekoro", name: "Ewekoro Plant", location: "Ewekoro, Ogun", link: "SDMA-L1", health: "degraded", prtgSensorId: "", prtgSensorName: "" },
        { id: "laf-estate", name: "Workers Estate", location: "Ishofin, Ogun", link: "SDMA-L2", health: "online", prtgSensorId: "", prtgSensorName: "" }
      ]
    },
    {
      id: "estate",
      name: "SDMA Corporate Estates",
      tier: "Residential managed sites",
      accountManager: "Admin",
      contact: "Estate Facility Desk",
      sites: [
        { id: "est-gbagada", name: "Gbagada Estate", location: "Gbagada, Lagos", link: "SDMA-E1", health: "online", prtgSensorId: "", prtgSensorName: "" },
        { id: "est-ajah", name: "Ajah Estate", location: "Ajah, Lagos", link: "SDMA-E2", health: "online", prtgSensorId: "", prtgSensorName: "" }
      ]
    }
  ],
  tickets: [
    {
      id: "SDMA-1048",
      clientId: "wema",
      siteId: "wem-lekki",
      type: "No internet",
      priority: "Critical",
      status: "Escalated",
      assignee: "Field Team",
      owner: "Admin",
      contact: "Branch Operations",
      phone: "+234 800 000 201",
      openedAt: "2026-06-15 08:15",
      slaHours: 4,
      description: "Branch is fully offline. Router WAN light is off after morning power changeover.",
      updates: [
        "Field engineer dispatched for radio and power checks.",
        "Possible sector outage around Lekki axis."
      ]
    },
    {
      id: "SDMA-1049",
      clientId: "access",
      siteId: "acc-victoria",
      type: "Slow speed",
      priority: "High",
      status: "In Progress",
      assignee: "NOC Desk",
      owner: "Mr Kunle",
      contact: "Access Bank IT",
      phone: "+234 800 000 102",
      openedAt: "2026-06-15 09:05",
      slaHours: 6,
      description: "Users report high latency on banking applications from the branch LAN.",
      updates: [
        "Bandwidth graph shows congestion from 08:40.",
        "Mr Kunle checking router queue and VLAN shaping."
      ]
    },
    {
      id: "SDMA-1050",
      clientId: "lafarge",
      siteId: "laf-ewekoro",
      type: "LOS / radio signal",
      priority: "High",
      status: "Awaiting Configuration",
      assignee: "Mr Kunle",
      owner: "Field Team",
      contact: "Plant IT",
      phone: "+234 800 000 303",
      openedAt: "2026-06-15 10:30",
      slaHours: 8,
      description: "Field team replaced outdoor unit. Device is powered and needs final IP, VLAN, and bandwidth configuration.",
      updates: [
        "Hardware mounted by field engineers.",
        "Awaiting configuration from team lead."
      ]
    },
    {
      id: "SDMA-1051",
      clientId: "estate",
      siteId: "est-ajah",
      type: "Router offline",
      priority: "Medium",
      status: "Open",
      assignee: "Unassigned",
      owner: "Client",
      contact: "Estate Facility Desk",
      phone: "+234 800 000 404",
      openedAt: "2026-06-15 11:10",
      slaHours: 12,
      description: "Estate workers report intermittent connection in two apartments.",
      updates: ["Client submitted report from portal."]
    }
  ],
  outages: [
    {
      id: "OUT-18",
      area: "Lekki Sector",
      severity: "Major",
      status: "Investigating",
      affected: ["Wema Bank Lekki Branch", "Two SME links"],
      eta: "2026-06-15 14:30",
      update: "Power and sector radio check in progress."
    },
    {
      id: "OUT-19",
      area: "Ogun Enterprise Ring",
      severity: "Minor",
      status: "Monitoring",
      affected: ["Lafarge Ewekoro Plant"],
      eta: "2026-06-15 16:00",
      update: "Outdoor unit replaced. Configuration handoff pending."
    }
  ],
  devices: [
    {
      id: "DEV-77",
      siteId: "laf-ewekoro",
      device: "MikroTik CCR router",
      ip: "10.44.18.1 / VLAN 318",
      owner: "Mr Kunle",
      status: "Awaiting Configuration"
    },
    {
      id: "DEV-78",
      siteId: "acc-victoria",
      device: "Cambium force link",
      ip: "10.18.7.22 / VLAN 112",
      owner: "NOC Desk",
      status: "Under Review"
    },
    {
      id: "DEV-79",
      siteId: "wem-lekki",
      device: "Edge router",
      ip: "10.22.5.1 / VLAN 209",
      owner: "Field Team",
      status: "Field Check"
    }
  ],
  knowledge: [
    {
      title: "No internet at bank branch",
      category: "First response",
      steps: [
        "Confirm power and router LEDs with branch contact.",
        "Check WAN reachability and last-mile radio status.",
        "If link is down, dispatch field engineer and mark as Critical."
      ]
    },
    {
      title: "After hardware installation",
      category: "Team lead workflow",
      steps: [
        "Confirm device serial number and physical port mapping.",
        "Apply site IP, VLAN, PPPoE/static route, and bandwidth profile.",
        "Run ping, speed, and banking-app reachability checks."
      ]
    },
    {
      title: "Estate intermittent speed",
      category: "Residential managed sites",
      steps: [
        "Check number of affected homes and AP coverage.",
        "Review tower load and CPE signal quality.",
        "Log apartment samples before escalating."
      ]
    }
  ]
};

let state = loadState();
let activeView = "dashboard";

const views = {
  dashboard: document.getElementById("dashboardView"),
  tickets: document.getElementById("ticketsView"),
  outages: document.getElementById("outagesView"),
  clients: document.getElementById("clientsView"),
  devices: document.getElementById("devicesView"),
  knowledge: document.getElementById("knowledgeView")
};

const titles = {
  dashboard: "Dashboard",
  tickets: "Tickets",
  outages: "Outages",
  clients: "Clients",
  devices: "Network",
  knowledge: "Knowledge"
};

const roleCopy = {
  admin: "Admin view: full control over tickets, clients, outages, assignments, and SLA monitoring.",
  lead: "Mr Kunle view: configuration tasks, router checks, VLAN/IP handoff, and tickets awaiting final setup are emphasized.",
  field: "Field engineer view: site visits, radio checks, hardware replacement, and escalation notes are emphasized.",
  client: "Client portal view: create fault reports, see active branch tickets, and follow outage updates."
};

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return structuredClone(seedData);

  try {
    return JSON.parse(saved);
  } catch {
    return structuredClone(seedData);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function siteById(siteId) {
  for (const client of state.clients) {
    const site = client.sites.find((item) => item.id === siteId);
    if (site) return { ...site, client };
  }
  return null;
}

function clientById(clientId) {
  return state.clients.find((client) => client.id === clientId);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function priorityClass(priority) {
  return priority.toLowerCase();
}

function statusClass(status) {
  if (status === "Escalated") return "danger";
  if (status === "Awaiting Configuration" || status === "Investigating") return "warning";
  if (status === "In Progress" || status === "Monitoring") return "info";
  return "";
}

function siteHealthClass(health) {
  if (health === "down" || health === "offline") return "danger";
  if (health === "degraded") return "warning";
  return "";
}

function currentSearchQuery() {
  return document.getElementById("globalSearch").value.trim().toLowerCase();
}

function ticketSearchText(ticket) {
  const site = siteById(ticket.siteId);
  const client = clientById(ticket.clientId);

  return [
    ticket.id,
    ticket.type,
    ticket.status,
    ticket.priority,
    ticket.description,
    ticket.assignee,
    ticket.contact,
    ticket.phone,
    site?.name,
    site?.location,
    site?.link,
    client?.name,
    client?.tier
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

function siteSearchText(site, client) {
  return [site.name, site.location, site.link, site.health, site.prtgSensorId, site.prtgSensorName, client.name, client.tier, client.contact]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

function ticketMatchesSearch(ticket, query = currentSearchQuery()) {
  return !query || ticketSearchText(ticket).includes(query);
}

function visibleTickets() {
  const query = currentSearchQuery();
  const status = document.getElementById("statusFilter")?.value || "all";
  const priority = document.getElementById("priorityFilter")?.value || "all";

  return state.tickets.filter((ticket) => {
    return (
      ticketMatchesSearch(ticket, query) &&
      (status === "all" || ticket.status === status) &&
      (priority === "all" || ticket.priority === priority)
    );
  });
}

function renderMetrics() {
  const open = state.tickets.filter((ticket) => ticket.status !== "Resolved").length;
  const critical = state.tickets.filter((ticket) => ticket.priority === "Critical").length;
  const awaitingConfig = state.tickets.filter((ticket) => ticket.status === "Awaiting Configuration").length;
  const activeOutages = state.outages.filter((outage) => outage.status !== "Resolved").length;

  document.getElementById("metricGrid").innerHTML = [
    ["Open Tickets", open, "Across enterprise and estate clients"],
    ["Critical", critical, "Needs immediate ownership"],
    ["Config Queue", awaitingConfig, "For Mr Kunle / NOC"],
    ["Active Outages", activeOutages, "Area incidents being tracked"]
  ]
    .map(
      ([label, value, helper]) => `
        <article class="metric-card">
          <p class="eyebrow">${label}</p>
          <strong>${value}</strong>
          <span>${helper}</span>
        </article>
      `
    )
    .join("");
}

function ticketCard(ticket, compact = false) {
  const site = siteById(ticket.siteId);
  const client = clientById(ticket.clientId);
  const latest = ticket.updates[ticket.updates.length - 1] || "No update yet.";
  const role = state.role;
  const canAdvance = role !== "client" && ticket.status !== "Resolved";
  const canAssignLead = role === "admin" || role === "lead";
  const canField = role === "admin" || role === "field";

  return `
    <article class="ticket-card">
      <div class="ticket-title-row">
        <div>
          <p class="eyebrow">${escapeHtml(ticket.id)}</p>
          <h3>${escapeHtml(client?.name || "Unknown client")}</h3>
        </div>
        <span class="priority-pill ${priorityClass(ticket.priority)}">${escapeHtml(ticket.priority)}</span>
      </div>
      <p>${escapeHtml(ticket.description)}</p>
      <div class="tag-row">
        <span class="status-pill ${statusClass(ticket.status)}">${escapeHtml(ticket.status)}</span>
        <span class="tiny-pill">${escapeHtml(ticket.type)}</span>
        <span class="tiny-pill">${escapeHtml(site?.name || "Unknown site")}</span>
      </div>
      <p class="ticket-meta">Assignee: ${escapeHtml(ticket.assignee)} · SLA ${ticket.slaHours}h · Opened ${escapeHtml(ticket.openedAt)}</p>
      <p class="muted">Latest: ${escapeHtml(latest)}</p>
      ${
        compact
          ? ""
          : `<div class="action-row">
              ${
                canField
                  ? `<button class="secondary-button" data-action="field-update" data-id="${ticket.id}" type="button">Field update</button>`
                  : ""
              }
              ${
                canAssignLead
                  ? `<button class="secondary-button" data-action="assign-kunle" data-id="${ticket.id}" type="button">Assign Mr Kunle</button>`
                  : ""
              }
              ${
                canAdvance
                  ? `<button class="primary-button" data-action="advance" data-id="${ticket.id}" type="button">Advance status</button>`
                  : ""
              }
            </div>`
      }
    </article>
  `;
}

function renderPriorityQueue() {
  const query = currentSearchQuery();
  const tickets = state.tickets
    .filter((ticket) => ticket.status !== "Resolved")
    .filter((ticket) => ticketMatchesSearch(ticket, query))
    .sort((a, b) => priorityWeight(b.priority) - priorityWeight(a.priority))
    .slice(0, 4);
  const sites = query ? matchingSites(query, tickets).slice(0, 4) : [];

  document.getElementById("priorityQueueTitle").textContent = query ? "Search results" : "Priority queue";
  document.getElementById("priorityQueue").innerHTML =
    [
      ...tickets.map((ticket) => ticketCard(ticket, true)),
      ...sites.map(({ site, client }) => siteResultCard(site, client))
    ].join("") ||
    `<article class="ticket-card"><h3>No dashboard results</h3><p class="muted">No ticket, client, or branch location matches "${escapeHtml(query)}".</p></article>`;
}

function priorityWeight(priority) {
  return { Low: 1, Medium: 2, High: 3, Critical: 4 }[priority] || 0;
}

function matchingSites(query, shownTickets) {
  const shownSiteIds = new Set(shownTickets.map((ticket) => ticket.siteId));
  return state.clients
    .flatMap((client) => client.sites.map((site) => ({ site, client })))
    .filter(({ site, client }) => !shownSiteIds.has(site.id) && siteSearchText(site, client).includes(query));
}

function siteResultCard(site, client) {
  return `
    <article class="ticket-card">
      <div class="ticket-title-row">
        <div>
          <p class="eyebrow">Site match</p>
          <h3>${escapeHtml(client.name)}</h3>
        </div>
        <span class="status-pill ${siteHealthClass(site.health)}">${escapeHtml(site.health)}</span>
      </div>
      <p>${escapeHtml(site.name)} · ${escapeHtml(site.location)}</p>
      <div class="tag-row">
        <span class="tiny-pill">${escapeHtml(client.tier)}</span>
        <span class="tiny-pill">${escapeHtml(site.link)}</span>
        <span class="tiny-pill">${site.prtgSensorId ? `PRTG ${escapeHtml(site.prtgSensorId)}` : "PRTG pending"}</span>
      </div>
      <p class="muted">Client contact: ${escapeHtml(client.contact)}</p>
    </article>
  `;
}

function renderNetworkVisual() {
  const sites = state.clients.flatMap((client) => client.sites.map((site) => ({ ...site, clientName: client.name })));
  const positions = [
    [21, 22],
    [51, 15],
    [79, 25],
    [19, 58],
    [80, 61],
    [48, 81],
    [32, 78],
    [68, 80],
    [50, 48]
  ];
  const nodes = sites
    .slice(0, 9)
    .map((site, index) => {
      const [left, top] = positions[index];
      return `
        <div class="site-node ${site.health}" style="left:${left}%;top:${top}%">
          <strong>${escapeHtml(site.name)}</strong>
          <small>${escapeHtml(site.clientName)}</small>
        </div>
      `;
    })
    .join("");

  document.getElementById("networkVisual").innerHTML = `<div class="hub" title="SDMA NOC"></div>${nodes}`;
  document.getElementById("outageCount").textContent = `${state.outages.length} active notices`;
}

function renderHandoff() {
  const fieldTickets = state.tickets.filter((ticket) => ticket.assignee.includes("Field") || ticket.owner.includes("Field"));
  const configTickets = state.tickets.filter((ticket) => ticket.assignee === "Mr Kunle" || ticket.status === "Awaiting Configuration");
  const clientTickets = state.tickets.filter((ticket) => ticket.owner === "Client" || ticket.status === "Open");

  const groups = [
    ["Field engineers", fieldTickets, "Hardware visits, CPE/radio checks, tower-side fault confirmation."],
    ["Mr Kunle", configTickets, "Router setup, VLAN/IP, bandwidth profile, and final reachability checks."],
    ["Client follow-up", clientTickets, "Branch contacts waiting for updates, ETAs, or first response."]
  ];

  document.getElementById("handoffGrid").innerHTML = groups
    .map(
      ([title, tickets, helper]) => `
        <article class="handoff-card">
          <p class="eyebrow">${tickets.length} item${tickets.length === 1 ? "" : "s"}</p>
          <h3>${title}</h3>
          <p class="muted">${helper}</p>
          <div class="tag-row">
            ${tickets
              .slice(0, 3)
              .map((ticket) => `<span class="tiny-pill">${escapeHtml(ticket.id)}</span>`)
              .join("")}
          </div>
        </article>
      `
    )
    .join("");
}

function renderTickets() {
  const tickets = visibleTickets();
  document.getElementById("ticketBoard").innerHTML =
    tickets.map((ticket) => ticketCard(ticket)).join("") ||
    `<article class="panel"><h3>No tickets match this view</h3><p class="muted">Try a different search or filter.</p></article>`;
}

function renderOutages() {
  const canManageOutages = state.role !== "client";

  document.getElementById("outageGrid").innerHTML = state.outages
    .map(
      (outage) => `
        <article class="outage-card">
          <div class="ticket-title-row">
            <div>
              <p class="eyebrow">${escapeHtml(outage.id)}</p>
              <h3>${escapeHtml(outage.area)}</h3>
            </div>
            <span class="status-pill ${statusClass(outage.status)}">${escapeHtml(outage.status)}</span>
          </div>
          <p>${escapeHtml(outage.update)}</p>
          <p class="ticket-meta">Severity: ${escapeHtml(outage.severity)} · ETA ${escapeHtml(outage.eta)}</p>
          <div class="tag-row">
            ${outage.affected.map((item) => `<span class="tiny-pill">${escapeHtml(item)}</span>`).join("")}
          </div>
          ${
            canManageOutages
              ? `<div class="action-row">
                  <button class="secondary-button" data-action="outage-update" data-id="${outage.id}" type="button">Add update</button>
                  <button class="ghost-button" data-action="outage-resolve" data-id="${outage.id}" type="button">Resolve</button>
                </div>`
              : ""
          }
        </article>
      `
    )
    .join("");
}

function renderClients() {
  if (state.role !== "admin") {
    document.getElementById("clientGrid").innerHTML =
      `<article class="panel"><h3>Admin access required</h3><p class="muted">Enterprise accounts are visible only to SDMA administrators.</p></article>`;
    return;
  }

  document.getElementById("clientGrid").innerHTML = state.clients
    .map(
      (client) => `
        <article class="client-card">
          <div class="ticket-title-row">
            <div>
              <p class="eyebrow">${escapeHtml(client.tier)}</p>
              <h3>${escapeHtml(client.name)}</h3>
            </div>
            <span class="tiny-pill">${client.sites.length} sites</span>
          </div>
          <p class="muted">Contact: ${escapeHtml(client.contact)} · Account owner: ${escapeHtml(client.accountManager)}</p>
          <div class="action-row">
            <button class="secondary-button" data-action="add-site" data-id="${client.id}" type="button">Add branch</button>
            <button class="ghost-button" data-action="remove-client" data-id="${client.id}" type="button">Remove enterprise</button>
          </div>
          <ul class="site-list">
            ${client.sites
              .map(
                (site) => `
                  <li class="site-line">
                    <div>
                      <strong>${escapeHtml(site.name)}</strong>
                      <p class="muted">${escapeHtml(site.location)} · ${escapeHtml(site.link)}</p>
                      <div class="tag-row">
                        <span class="tiny-pill">${site.prtgSensorId ? `PRTG ${escapeHtml(site.prtgSensorId)}` : "PRTG pending"}</span>
                        ${site.prtgSensorName ? `<span class="tiny-pill">${escapeHtml(site.prtgSensorName)}</span>` : ""}
                      </div>
                    </div>
                    <div class="site-actions">
                      <span class="status-pill ${siteHealthClass(site.health)}">${escapeHtml(site.health)}</span>
                      <button class="ghost-button compact-button" data-action="remove-site" data-client="${client.id}" data-id="${site.id}" type="button">Remove</button>
                    </div>
                  </li>
                `
              )
              .join("")}
          </ul>
        </article>
      `
    )
    .join("");
}

function renderDevices() {
  document.getElementById("deviceRows").innerHTML = state.devices
    .map((device) => {
      const site = siteById(device.siteId);
      const canComplete = state.role !== "client" && device.status !== "Configured";
      return `
        <tr>
          <td><strong>${escapeHtml(site?.client.name || "Unknown")}</strong><br><span class="muted">${escapeHtml(site?.name || "Unknown site")}</span></td>
          <td>${escapeHtml(device.device)}</td>
          <td>${escapeHtml(device.ip)}</td>
          <td>${escapeHtml(device.owner)}</td>
          <td><span class="status-pill ${statusClass(device.status)}">${escapeHtml(device.status)}</span></td>
          <td>${canComplete ? `<button class="secondary-button" data-action="complete-device" data-id="${device.id}" type="button">Mark configured</button>` : `<span class="muted">Done</span>`}</td>
        </tr>
      `;
    })
    .join("");
}

function renderKnowledge() {
  document.getElementById("knowledgeGrid").innerHTML = state.knowledge
    .map(
      (item) => `
        <article class="kb-card">
          <p class="eyebrow">${escapeHtml(item.category)}</p>
          <h3>${escapeHtml(item.title)}</h3>
          <ol>
            ${item.steps.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}
          </ol>
        </article>
      `
    )
    .join("");
}

function renderRoleNotice() {
  const notice = document.getElementById("roleNotice");
  notice.textContent = roleCopy[state.role];
  notice.classList.add("active");
  document.getElementById("roleSelect").value = state.role;
  document.getElementById("addOutage").hidden = state.role === "client";
  document.getElementById("addClient").hidden = state.role !== "admin";
  document.querySelectorAll("[data-admin-only]").forEach((element) => {
    element.hidden = state.role !== "admin";
  });
  if (state.role !== "admin" && activeView === "clients") {
    activeView = "dashboard";
  }
}

function renderClientOptions() {
  const clientInput = document.getElementById("clientInput");
  const siteInput = document.getElementById("siteInput");
  clientInput.innerHTML = state.clients.map((client) => `<option value="${client.id}">${escapeHtml(client.name)}</option>`).join("");

  function syncSites() {
    const client = clientById(clientInput.value) || state.clients[0];
    siteInput.innerHTML = client.sites.map((site) => `<option value="${site.id}">${escapeHtml(site.name)} - ${escapeHtml(site.location)}</option>`).join("");
  }

  clientInput.onchange = syncSites;
  syncSites();
}

function renderAll() {
  enforceRoleAccess();
  document.getElementById("viewTitle").textContent = titles[activeView];
  Object.entries(views).forEach(([view, element]) => element.classList.toggle("active", view === activeView));
  document.querySelectorAll(".nav-item").forEach((button) => button.classList.toggle("active", button.dataset.view === activeView));

  renderRoleNotice();
  renderMetrics();
  renderPriorityQueue();
  renderNetworkVisual();
  renderHandoff();
  renderTickets();
  renderOutages();
  renderClients();
  renderDevices();
  renderKnowledge();
  saveState();
}

function enforceRoleAccess() {
  if (state.role !== "admin" && activeView === "clients") {
    activeView = "dashboard";
  }
}

function nextStatus(status) {
  const flow = ["Open", "In Progress", "Awaiting Configuration", "Escalated", "Resolved"];
  const index = flow.indexOf(status);
  return flow[Math.min(index + 1, flow.length - 1)] || "In Progress";
}

function handleAction(action, id, dataset = {}) {
  if (action === "advance") {
    const ticket = state.tickets.find((item) => item.id === id);
    ticket.status = nextStatus(ticket.status);
    ticket.updates.push(`Status moved to ${ticket.status}.`);
  }

  if (action === "assign-kunle") {
    const ticket = state.tickets.find((item) => item.id === id);
    ticket.assignee = "Mr Kunle";
    ticket.status = "Awaiting Configuration";
    ticket.updates.push("Assigned to Mr Kunle for router and service configuration.");
  }

  if (action === "field-update") {
    const ticket = state.tickets.find((item) => item.id === id);
    ticket.assignee = "Field Team";
    ticket.status = "In Progress";
    ticket.updates.push("Field team update added: site visit or hardware check required.");
  }

  if (action === "outage-update") {
    openOutageUpdateComposer(id);
  }

  if (action === "outage-resolve") {
    const outage = state.outages.find((item) => item.id === id);
    outage.status = "Resolved";
    outage.update = "Resolved and placed under observation. Service restoration confirmed by the support team.";
  }

  if (action === "complete-device") {
    const device = state.devices.find((item) => item.id === id);
    device.status = "Configured";
    device.owner = "Mr Kunle";
    const relatedTicket = state.tickets.find((ticket) => ticket.siteId === device.siteId && ticket.status === "Awaiting Configuration");
    if (relatedTicket) {
      relatedTicket.status = "Resolved";
      relatedTicket.updates.push("Device configuration completed by Mr Kunle. Service confirmed.");
    }
  }

  if (action === "add-site") {
    openSiteComposer(id);
  }

  if (action === "remove-site") {
    removeSite(dataset.client, id);
  }

  if (action === "remove-client") {
    removeClient(id);
  }

  renderAll();
}

function createTicket(form) {
  const data = new FormData(form);
  const clientId = data.get("client");
  const siteId = data.get("site");
  const nextNumber = 1052 + state.tickets.length;
  const ticket = {
    id: `SDMA-${nextNumber}`,
    clientId,
    siteId,
    type: data.get("type"),
    priority: data.get("priority"),
    status: "Open",
    assignee: "Unassigned",
    owner: state.role === "client" ? "Client" : "Admin",
    contact: data.get("contact"),
    phone: data.get("phone"),
    openedAt: "2026-06-15 " + new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    slaHours: data.get("priority") === "Critical" ? 4 : data.get("priority") === "High" ? 6 : 12,
    description: data.get("description"),
    updates: ["Ticket created in SDMA Support Desk."]
  };

  state.tickets.unshift(ticket);
}

function nextOutageId() {
  const highest = state.outages.reduce((max, outage) => {
    const number = Number(outage.id.replace("OUT-", ""));
    return Number.isFinite(number) ? Math.max(max, number) : max;
  }, 19);

  return `OUT-${highest + 1}`;
}

function affectedList(value) {
  return value
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);
}

function createOutage(form) {
  const data = new FormData(form);
  state.outages.unshift({
    id: nextOutageId(),
    area: data.get("area"),
    severity: data.get("severity"),
    status: data.get("status"),
    affected: affectedList(data.get("affected")),
    eta: data.get("eta"),
    update: data.get("update")
  });
}

function openOutageUpdateComposer(outageId) {
  const outage = state.outages.find((item) => item.id === outageId);
  if (!outage) return;

  const form = document.getElementById("outageUpdateForm");
  form.reset();
  form.elements.outageId.value = outage.id;
  form.elements.status.value = outage.status === "Resolved" ? "Monitoring" : outage.status;
  document.getElementById("outageUpdateModal").showModal();
}

function updateOutage(form) {
  const data = new FormData(form);
  const outage = state.outages.find((item) => item.id === data.get("outageId"));
  if (!outage) return;

  outage.status = data.get("status");
  outage.update = data.get("update");
}

function slug(value) {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 36);
}

function uniqueId(prefix, value, existingIds) {
  const base = slug(value) || prefix;
  let candidate = base;
  let suffix = 2;

  while (existingIds.has(candidate)) {
    candidate = `${base}-${suffix}`;
    suffix += 1;
  }

  return candidate;
}

function createClient(form) {
  const data = new FormData(form);
  const existingIds = new Set(state.clients.map((client) => client.id));
  const name = data.get("name").trim();

  state.clients.push({
    id: uniqueId("client", name, existingIds),
    name,
    tier: data.get("tier"),
    accountManager: data.get("accountManager").trim(),
    contact: data.get("contact").trim(),
    sites: []
  });
  renderClientOptions();
}

function openSiteComposer(clientId) {
  const form = document.getElementById("siteForm");
  form.reset();
  form.elements.clientId.value = clientId;
  document.getElementById("siteModal").showModal();
}

function createSite(form) {
  const data = new FormData(form);
  const client = clientById(data.get("clientId"));
  if (!client) return;

  const allSiteIds = new Set(state.clients.flatMap((item) => item.sites.map((site) => site.id)));
  const name = data.get("name").trim();

  client.sites.push({
    id: uniqueId(client.id, `${client.id}-${name}`, allSiteIds),
    name,
    location: data.get("location").trim(),
    link: data.get("link").trim(),
    health: data.get("health"),
    prtgSensorId: data.get("prtgSensorId").trim(),
    prtgSensorName: data.get("prtgSensorName").trim()
  });
  renderClientOptions();
}

function removeSite(clientId, siteId) {
  const client = clientById(clientId);
  if (!client) return;
  const site = client.sites.find((item) => item.id === siteId);
  if (!site) return;
  if (!window.confirm(`Remove ${site.name} from ${client.name}? Related demo tickets and devices for this branch will also be removed.`)) return;

  client.sites = client.sites.filter((item) => item.id !== siteId);
  state.tickets = state.tickets.filter((ticket) => ticket.siteId !== siteId);
  state.devices = state.devices.filter((device) => device.siteId !== siteId);
  renderClientOptions();
}

function removeClient(clientId) {
  const client = clientById(clientId);
  if (!client) return;
  if (!window.confirm(`Remove ${client.name} and all its branch locations from this demo data?`)) return;

  const siteIds = new Set(client.sites.map((site) => site.id));
  state.clients = state.clients.filter((item) => item.id !== clientId);
  state.tickets = state.tickets.filter((ticket) => !siteIds.has(ticket.siteId));
  state.devices = state.devices.filter((device) => !siteIds.has(device.siteId));
  renderClientOptions();
}

document.getElementById("navTabs").addEventListener("click", (event) => {
  const button = event.target.closest("[data-view]");
  if (!button) return;
  if (button.dataset.adminOnly && state.role !== "admin") return;
  activeView = button.dataset.view;
  renderAll();
});

document.querySelectorAll("[data-view-target]").forEach((button) => {
  button.addEventListener("click", () => {
    activeView = button.dataset.viewTarget;
    renderAll();
  });
});

document.getElementById("roleSelect").addEventListener("change", (event) => {
  state.role = event.target.value;
  renderAll();
});

document.getElementById("globalSearch").addEventListener("input", renderAll);
document.getElementById("statusFilter").addEventListener("change", renderTickets);
document.getElementById("priorityFilter").addEventListener("change", renderTickets);

document.body.addEventListener("click", (event) => {
  const actionButton = event.target.closest("[data-action]");
  if (!actionButton) return;
  handleAction(actionButton.dataset.action, actionButton.dataset.id, actionButton.dataset);
});

document.getElementById("openTicketComposer").addEventListener("click", () => {
  renderClientOptions();
  document.getElementById("ticketModal").showModal();
});

function closeTicketComposer() {
  document.getElementById("ticketForm").reset();
  document.getElementById("ticketModal").close();
}

document.getElementById("ticketForm").addEventListener("submit", (event) => {
  event.preventDefault();
  createTicket(event.currentTarget);
  event.currentTarget.reset();
  document.getElementById("ticketModal").close();
  activeView = "tickets";
  renderAll();
});

document.getElementById("cancelTicketModal").addEventListener("click", closeTicketComposer);
document.getElementById("closeTicketModal").addEventListener("click", closeTicketComposer);

document.getElementById("addOutage").addEventListener("click", () => {
  document.getElementById("outageForm").reset();
  document.getElementById("outageModal").showModal();
});

function closeOutageComposer() {
  document.getElementById("outageForm").reset();
  document.getElementById("outageModal").close();
}

function closeOutageUpdateComposer() {
  document.getElementById("outageUpdateForm").reset();
  document.getElementById("outageUpdateModal").close();
}

document.getElementById("outageForm").addEventListener("submit", (event) => {
  event.preventDefault();
  createOutage(event.currentTarget);
  closeOutageComposer();
  activeView = "outages";
  renderAll();
});

document.getElementById("outageUpdateForm").addEventListener("submit", (event) => {
  event.preventDefault();
  updateOutage(event.currentTarget);
  closeOutageUpdateComposer();
  renderAll();
});

document.getElementById("cancelOutageModal").addEventListener("click", closeOutageComposer);
document.getElementById("closeOutageModal").addEventListener("click", closeOutageComposer);
document.getElementById("cancelOutageUpdateModal").addEventListener("click", closeOutageUpdateComposer);
document.getElementById("closeOutageUpdateModal").addEventListener("click", closeOutageUpdateComposer);

document.getElementById("addClient").addEventListener("click", () => {
  document.getElementById("clientForm").reset();
  document.getElementById("clientModal").showModal();
});

function closeClientComposer() {
  document.getElementById("clientForm").reset();
  document.getElementById("clientModal").close();
}

function closeSiteComposer() {
  document.getElementById("siteForm").reset();
  document.getElementById("siteModal").close();
}

document.getElementById("clientForm").addEventListener("submit", (event) => {
  event.preventDefault();
  createClient(event.currentTarget);
  closeClientComposer();
  activeView = "clients";
  renderAll();
});

document.getElementById("siteForm").addEventListener("submit", (event) => {
  event.preventDefault();
  createSite(event.currentTarget);
  closeSiteComposer();
  activeView = "clients";
  renderAll();
});

document.getElementById("cancelClientModal").addEventListener("click", closeClientComposer);
document.getElementById("closeClientModal").addEventListener("click", closeClientComposer);
document.getElementById("cancelSiteModal").addEventListener("click", closeSiteComposer);
document.getElementById("closeSiteModal").addEventListener("click", closeSiteComposer);

document.getElementById("resetDemo").addEventListener("click", () => {
  state = structuredClone(seedData);
  activeView = "dashboard";
  renderAll();
});

renderClientOptions();
renderAll();
