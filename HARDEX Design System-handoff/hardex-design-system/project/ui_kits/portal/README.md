# Portal UI Kit

Contractor / dealer portal — the logged-in surface where dealers manage orders, samples, invoices, and tech support requests.

## Screens / components
- **Sidebar** — fixed left, on cement-900, with dealer card at top + nav items + user footer
- **TopBar** — breadcrumb + notifications + primary "Request sample" CTA
- **DashboardHeader** — greeting + cycle summary
- **DashboardCards** — 4 KPI cards (orders, deliveries, TDS downloads, sample requests)
- **OrdersTable** — recent orders with status dot pills
- **ActivityFeed** — vertical timeline of recent events
- **SampleRequestModal** — overlay modal triggered from TopBar

All in `PortalApp.jsx` (single file because the portal is one screen with one modal — splitting it would scatter shared state). Brand `<Wordmark>` reused from `../marketing/ui.jsx`.

## Flow demonstrated
- Default: dashboard view
- Click **Request sample** in topbar → modal opens
- Click outside or X → modal closes
- Sidebar `Dashboard` is active; other items show counts but don't navigate (out of scope for the kit)

## Out of scope
Login, password reset, invoice payment, multi-user team management, tech support thread view, dispatch tracker map. Add these by extending `PortalApp.jsx` with additional view states keyed on the sidebar `tab` value.
