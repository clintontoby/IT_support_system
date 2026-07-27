# SDMA Support Desk

Fast MVP for an ISP/networking support desk workflow.

## Run

Open `index.html` directly in a browser, or serve this folder locally:

```sh
python3 -m http.server 4173
```

Then visit:

```text
http://127.0.0.1:4173/
```

## Included Workflow

- Admin dashboard for SLA, critical tickets, outages, and work handoff.
- Ticket desk for client reports, assignment, status progression, and support notes.
- Role selector for Admin, Mr Kunle, Field Engineer, and Client Portal views.
- Client/site registry seeded with Access Bank, Wema Bank, Lafarge Cement, and managed estates.
- Outage board for area incidents and affected branch locations.
- Device configuration queue for router, VLAN/IP, and final service checks.
- Knowledge base runbooks for common ISP support scenarios.
- Admin-only enterprise management for adding/removing clients and branch locations.
- PRTG-ready branch fields for future automatic status sync.

Data is stored in the browser with `localStorage`; use **Reset demo data** inside the app to restore the seeded demo.

## PRTG Integration Notes

The current MVP stores branch status locally. For live PRTG sync, SDMA Support Desk should later use a small backend service that polls PRTG and updates branch status by matching each branch to its PRTG sensor ID.

Details needed from the office:

- PRTG base URL, for example `https://prtg.sdma.local`.
- Whether the Support Desk server can reach PRTG from the LAN or VPN.
- API key/token for a read-only PRTG user.
- The PRTG sensor ID for each monitored branch/location.
- The status mapping SDMA wants, for example PRTG `Up` -> `online`, `Warning` -> `degraded`, `Down` -> `down`, paused/unknown -> `offline`.
- Polling interval, for example every 30 or 60 seconds.
- Whether outage tickets should be created automatically when a sensor goes down, or only update the branch status.
