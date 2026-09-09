import { createBrowserRouter, Navigate } from "react-router-dom";
import { AppShell } from "@/components/shell/AppShell";
import { RoleGalleryPage } from "@/features/landing/RoleGalleryPage";
import { OverviewPage } from "@/features/overview/OverviewPage";
import { CaseListPage } from "@/features/cases/CaseListPage";
import { CaseDetailPage } from "@/features/cases/CaseDetailPage";
import { GisPage } from "@/features/gis/GisPage";
import { DocumentsPage } from "@/features/documents/DocumentsPage";
import { AuditPage } from "@/features/audit/AuditPage";
import { NotificationsPage } from "@/features/notifications/NotificationsPage";
import { GrievancesPage } from "@/features/grievances/GrievancesPage";
import { AnalyticsPage } from "@/features/analytics/AnalyticsPage";
import { RoleRedirect } from "@/app/RoleRedirect";
import { NationalOverviewPage } from "@/features/admin/NationalOverviewPage";
import { NationalMonitoringPage } from "@/features/admin/NationalMonitoringPage";
import { NationalGisPage } from "@/features/admin/NationalGisPage";
import { RiskDelayMonitorPage } from "@/features/admin/RiskDelayMonitorPage";
import { OrganizationsPage } from "@/features/admin/OrganizationsPage";
import { UsersRolesPage } from "@/features/admin/UsersRolesPage";
import { HierarchyViewPage } from "@/features/admin/HierarchyViewPage";
import { WorkflowConfigPage } from "@/features/admin/WorkflowConfigPage";
import { DocumentRepositoryPage } from "@/features/admin/DocumentRepositoryPage";
import { AuditTrailPage } from "@/features/admin/AuditTrailPage";
import { IntegrationsPage } from "@/features/admin/IntegrationsPage";
import { AlertsPage } from "@/features/admin/AlertsPage";
import { ReportsPage } from "@/features/admin/ReportsPage";
import { ProjectDetailPage } from "@/features/admin/ProjectDetailPage";

/**
 * App router — single national platform.
 * "/" is the role gallery (landing). "/app" hosts the shared workspace with all 11 roles
 * operating on the same cases/parcels/documents/audit via Zustand stores.
 * Per-role convenience route /role/:roleId sets session role and redirects to /app/overview.
 * Also supports ?role= / ?roleId= on landing — handled inside RoleGalleryPage.
 */
export const router = createBrowserRouter([
  { path: "/", element: <RoleGalleryPage /> },
  { path: "/role/:roleId", element: <RoleRedirect /> },
  {
    path: "/app",
    element: <AppShell />,
    children: [
      { index: true, element: <Navigate to="overview" replace /> },
      { path: "overview", element: <OverviewPage /> },
      { path: "cases", element: <CaseListPage /> },
      { path: "cases/:caseId", element: <CaseDetailPage /> },
      { path: "gis", element: <GisPage /> },
      { path: "documents", element: <DocumentsPage /> },
      { path: "audit", element: <AuditPage /> },
      { path: "notifications", element: <NotificationsPage /> },
      { path: "grievances", element: <GrievancesPage /> },
      { path: "analytics", element: <AnalyticsPage /> },
      // National Admin routes
      { path: "admin/overview", element: <NationalOverviewPage /> },
      { path: "admin/monitoring", element: <NationalMonitoringPage /> },
      { path: "admin/gis", element: <NationalGisPage /> },
      { path: "admin/risk", element: <RiskDelayMonitorPage /> },
      { path: "admin/organizations", element: <OrganizationsPage /> },
      { path: "admin/users", element: <UsersRolesPage /> },
      { path: "admin/hierarchy", element: <HierarchyViewPage /> },
      { path: "admin/workflow", element: <WorkflowConfigPage /> },
      { path: "admin/documents", element: <DocumentRepositoryPage /> },
      { path: "admin/audit", element: <AuditTrailPage /> },
      { path: "admin/integrations", element: <IntegrationsPage /> },
      { path: "admin/alerts", element: <AlertsPage /> },
      { path: "admin/reports", element: <ReportsPage /> },
      { path: "admin/projects/:projectId", element: <ProjectDetailPage /> },
    ],
  },
  { path: "*", element: <Navigate to="/" replace /> },
]);
