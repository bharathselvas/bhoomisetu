import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Files,
  Map as MapIcon,
  FolderArchive,
  Bell,
  ScrollText,
  BarChart3,
  MessageSquareWarning,
  AlertTriangle,
  Search,
  Home,
  IndianRupee,
  ClipboardCheck,
  Users2,
  Shield,
  Building2,
  Users,
  GitBranch,
  Workflow,
  FileText,
  Activity,
  Wifi,
  Settings,
  LineChart,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useSessionStore } from "@/stores/sessionStore";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const PRIMARY_NAV = [
  { to: "/app/overview", label: "Overview", icon: LayoutDashboard },
  { to: "/app/cases", label: "Cases", icon: Files },
  { to: "/app/gis", label: "GIS", icon: MapIcon },
  { to: "/app/documents", label: "Documents", icon: FolderArchive },
  { to: "/app/notifications", label: "Notifications", icon: Bell },
  { to: "/app/audit", label: "Audit", icon: ScrollText },
  { to: "/app/analytics", label: "Analytics", icon: BarChart3 },
  { to: "/app/grievances", label: "Grievances", icon: MessageSquareWarning },
] as const;

const MINISTRY_NAV = {
  overview: [
    { to: "/app/ministry/overview", label: "Ministry Overview", icon: LayoutDashboard },
    { to: "/app/ministry/projects", label: "MoRTH Projects", icon: Files },
    { to: "/app/ministry/work-queue", label: "Work Queue", icon: ClipboardCheck },
  ],
  monitoring: [
    { to: "/app/ministry/state-monitoring", label: "State Monitoring", icon: MapIcon },
    { to: "/app/ministry/gis", label: "Ministry GIS", icon: MapIcon },
    { to: "/app/ministry/risk", label: "Risk & Delays", icon: AlertTriangle },
    { to: "/app/ministry/compensation", label: "Compensation", icon: IndianRupee },
    { to: "/app/ministry/possession", label: "Possession", icon: MapIcon },
    { to: "/app/ministry/rnr", label: "R&R Monitor", icon: Users },
  ],
  governance: [
    { to: "/app/ministry/organizations", label: "Organizations", icon: Building2 },
    { to: "/app/ministry/stakeholders", label: "Stakeholders", icon: Users },
    { to: "/app/ministry/requests", label: "Requests & Clarifications", icon: ScrollText },
  ],
  records: [
    { to: "/app/ministry/documents", label: "Documents", icon: FileText },
    { to: "/app/ministry/objections", label: "Objections", icon: MessageSquareWarning },
    { to: "/app/ministry/audit", label: "Audit Trail", icon: ScrollText },
  ],
  system: [
    { to: "/app/ministry/reports", label: "Reports & MIS", icon: LineChart },
    { to: "/app/ministry/notifications", label: "Notifications", icon: Bell },
    { to: "/app/ministry/profile", label: "Ministry Profile", icon: Settings },
  ],
};

const ADMIN_NAV = {
  overview: [
    { to: "/app/admin/overview", label: "National Overview", icon: LayoutDashboard },
  ],
  monitoring: [
    { to: "/app/admin/monitoring", label: "Projects", icon: Files },
    { to: "/app/admin/monitoring", label: "States & UTs", icon: MapIcon },
    { to: "/app/admin/monitoring", label: "Ministries", icon: Building2 },
    { to: "/app/admin/gis", label: "National GIS", icon: MapIcon },
    { to: "/app/admin/risk", label: "Risk & Delays", icon: AlertTriangle },
  ],
  governance: [
    { to: "/app/admin/organizations", label: "Organizations", icon: Building2 },
    { to: "/app/admin/users", label: "Users & Roles", icon: Users },
    { to: "/app/admin/hierarchy", label: "Hierarchy", icon: GitBranch },
    { to: "/app/admin/workflow", label: "Workflow Config", icon: Workflow },
  ],
  records: [
    { to: "/app/admin/documents", label: "Documents", icon: FileText },
    { to: "/app/admin/audit", label: "Audit Trail", icon: ScrollText },
  ],
  system: [
    { to: "/app/admin/integrations", label: "Integrations", icon: Wifi },
    { to: "/app/admin/alerts", label: "Alerts", icon: Bell },
    { to: "/app/admin/reports", label: "Reports & MIS", icon: LineChart },
  ],
};

type Shortcut = { to: string; label: string; icon: typeof Search };

function roleShortcuts(roleId: string): Shortcut[] {
  switch (roleId) {
    case "field_officer":
      return [{ to: "/app/cases", label: "My Field Tasks", icon: ClipboardCheck }];
    case "finance_officer":
      return [{ to: "/app/cases", label: "Payments Queue", icon: IndianRupee }];
    case "citizen":
      return [{ to: "/app/grievances", label: "My Land & Objections", icon: Home }];
    case "sia_expert":
      return [
        { to: "/app/cases", label: "SIA Assignments", icon: Users2 },
        { to: "/app/documents", label: "SIA Reports", icon: FolderArchive },
      ];
    case "rnr_officer":
      return [{ to: "/app/cases", label: "R&R Entitlements", icon: Home }];
    case "tehsil_sdo":
      return [{ to: "/app/cases", label: "Hearings & Scrutiny", icon: ScrollText }];
    case "collector_cala":
      return [{ to: "/app/cases", label: "Awaiting Decision", icon: Files }];
    case "requiring_org":
      return [{ to: "/app/cases", label: "My Projects", icon: Files }];
    default:
      return [];
  }
}

/**
 * Institutional sidebar — 260px, white, border-r.
 * One platform skin for all 11 roles; nav adapts subtly via WORKSPACE shortcuts.
 * National Admin gets a dedicated admin navigation with grouped sections.
 */
export function Sidebar() {
  const { user } = useSessionStore();
  const shortcuts = roleShortcuts(user.roleId);
  const isAdmin = user.roleId === "national_admin";
  const isMinistry = user.roleId === "ministry_nodal";

  return (
    <aside className="hidden w-[260px] shrink-0 flex-col border-r bg-white lg:flex">
      {/* Jurisdiction + role badge — top block */}
      <div className="p-3">
        <div className="rounded-md border bg-slate-50 px-3 py-2.5">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">Jurisdiction</p>
          <p className="text-xs font-medium leading-tight text-[#0F2340]">{user.jurisdiction}</p>
          <p className="mt-0.5 text-[11px] leading-tight text-muted-foreground">{user.name}</p>
          <Badge variant="secondary" className="mt-1.5 text-[11px]">
            {user.roleId.replace(/_/g, " ")}
          </Badge>
        </div>
      </div>

      <nav className="flex-1 space-y-4 overflow-auto px-2 py-2">
        {isAdmin ? (
          <>
            {/* Admin navigation — grouped sections */}
            {Object.entries(ADMIN_NAV).map(([section, items]) => (
              <div key={section}>
                <p className="px-2 pb-1 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground capitalize">
                  {section}
                </p>
                <ul className="space-y-0.5">
                  {items.map((item) => (
                    <li key={item.to + item.label}>
                      <NavLink
                        to={item.to}
                        className={({ isActive }) =>
                          cn(
                            "flex items-center gap-2.5 rounded-md px-2.5 py-2 text-sm transition-colors",
                            isActive ? "bg-[#0F2340] text-white" : "text-slate-700 hover:bg-slate-100",
                          )
                        }
                      >
                        <item.icon className="h-4 w-4 shrink-0" />
                        {item.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </>
        ) : isMinistry ? (
          <>
            {/* Ministry navigation — grouped sections */}
            {Object.entries(MINISTRY_NAV).map(([section, items]) => (
              <div key={section}>
                <p className="px-2 pb-1 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground capitalize">
                  {section}
                </p>
                <ul className="space-y-0.5">
                  {items.map((item) => (
                    <li key={item.to + item.label}>
                      <NavLink
                        to={item.to}
                        className={({ isActive }) =>
                          cn(
                            "flex items-center gap-2.5 rounded-md px-2.5 py-2 text-sm transition-colors",
                            isActive ? "bg-[#0F2340] text-white" : "text-slate-700 hover:bg-slate-100",
                          )
                        }
                      >
                        <item.icon className="h-4 w-4 shrink-0" />
                        {item.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </>
        ) : (
          <>
            {/* Standard navigation for other roles */}
            <div>
              <p className="px-2 pb-1 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">Primary</p>
              <ul className="space-y-0.5">
                {PRIMARY_NAV.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        cn(
                          "flex items-center gap-2.5 rounded-md px-2.5 py-2 text-sm transition-colors",
                          isActive ? "bg-[#0F2340] text-white" : "text-slate-700 hover:bg-slate-100",
                        )
                      }
                    >
                      <item.icon className="h-4 w-4 shrink-0" />
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {shortcuts.length > 0 && (
              <div>
                <p className="px-2 pb-1 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">Workspace</p>
                <ul className="space-y-0.5">
                  {shortcuts.map((s) => (
                    <li key={s.to + s.label}>
                      <NavLink
                        to={s.to}
                        className="flex items-center gap-2 rounded-md px-2.5 py-2 text-sm text-slate-700 hover:bg-slate-100"
                      >
                        <s.icon className="h-4 w-4 shrink-0" />
                        {s.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}

        <Separator />

        {/* SLA mini widget */}
        <div className="rounded-md border bg-amber-50 px-3 py-2.5">
          <p className="flex items-center gap-1.5 text-xs font-semibold text-amber-900">
            <AlertTriangle className="h-3.5 w-3.5" /> SLA Watch
          </p>
          <p className="mt-1 text-[11px] leading-relaxed text-amber-800">
            {isAdmin
              ? "38 projects delayed · 7 critical. Monitor Risk → Delay Monitor."
              : isMinistry
                ? "7 projects delayed · 6 risk items. Monitor Risk & Delay page."
                : "2 cases overdue · 3 due this week. Review Cases → filter by SLA."}
          </p>
          <Badge variant="warning" className="mt-2 text-[11px]">
            Action needed
          </Badge>
        </div>
      </nav>

      {/* Footer */}
      <div className="border-t px-3 py-3">
        <p className="text-[11px] font-medium text-muted-foreground">Gov Platform — DoLR</p>
        <p className="text-[11px] leading-snug text-muted-foreground">National platform — all roles act on shared records</p>
      </div>
    </aside>
  );
}
