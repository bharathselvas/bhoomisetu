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
import { MinistryOverviewPage } from "@/features/ministry/MinistryOverviewPage";
import { MinistryProjectsPage } from "@/features/ministry/MinistryProjectsPage";
import { MinistryWorkQueuePage } from "@/features/ministry/MinistryWorkQueuePage";
import { MinistryStateMonitoringPage } from "@/features/ministry/MinistryStateMonitoringPage";
import { MinistryGisPage } from "@/features/ministry/MinistryGisPage";
import { MinistryRiskDelayPage } from "@/features/ministry/MinistryRiskDelayPage";
import { MinistryOrgsPage } from "@/features/ministry/MinistryOrgsPage";
import { MinistryStakeholdersPage } from "@/features/ministry/MinistryStakeholdersPage";
import { MinistryRequestsPage } from "@/features/ministry/MinistryRequestsPage";
import { MinistryDocumentsPage } from "@/features/ministry/MinistryDocumentsPage";
import { MinistryObjectionsPage } from "@/features/ministry/MinistryObjectionsPage";
import { MinistryCompensationPage } from "@/features/ministry/MinistryCompensationPage";
import { MinistryPossessionPage } from "@/features/ministry/MinistryPossessionPage";
import { MinistryRnrPage } from "@/features/ministry/MinistryRnrPage";
import { MinistryAuditPage } from "@/features/ministry/MinistryAuditPage";
import { MinistryMisPage } from "@/features/ministry/MinistryMisPage";
import { MinistryNotificationsPage } from "@/features/ministry/MinistryNotificationsPage";
import { MinistryProfilePage } from "@/features/ministry/MinistryProfilePage";
import { ProjectDashboardPage } from "@/features/requiring-org/ProjectDashboardPage";
import { MyProjectsPage } from "@/features/requiring-org/MyProjectsPage";
import { CreateProjectPage } from "@/features/requiring-org/CreateProjectPage";
import { ProjectWorkspacePage } from "@/features/requiring-org/ProjectWorkspacePage";
import { WorkQueuePage } from "@/features/requiring-org/WorkQueuePage";
import { AcquisitionProgressPage } from "@/features/requiring-org/AcquisitionProgressPage";
import { RiskDelayPage } from "@/features/requiring-org/RiskDelayPage";
import { ProjectGisPage } from "@/features/requiring-org/ProjectGisPage";
import { AuthorityRequestsPage } from "@/features/requiring-org/AuthorityRequestsPage";
import { ObjectionsGrievancesPage } from "@/features/requiring-org/ObjectionsGrievancesPage";
import { ProjectDocumentsPage } from "@/features/requiring-org/ProjectDocumentsPage";
import { AuditTrailPage as RoAuditTrailPage } from "@/features/requiring-org/AuditTrailPage";
import { CompensationMonitorPage } from "@/features/requiring-org/CompensationMonitorPage";
import { PossessionMonitorPage } from "@/features/requiring-org/PossessionMonitorPage";
import { RnrMonitorPage } from "@/features/requiring-org/RnrMonitorPage";
import { ProjectReportsPage } from "@/features/requiring-org/ProjectReportsPage";

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
      // Ministry Nodal Officer routes
      { path: "ministry/overview", element: <MinistryOverviewPage /> },
      { path: "ministry/projects", element: <MinistryProjectsPage /> },
      { path: "ministry/project/:projectId", element: <ProjectDetailPage /> },
      { path: "ministry/work-queue", element: <MinistryWorkQueuePage /> },
      { path: "ministry/state-monitoring", element: <MinistryStateMonitoringPage /> },
      { path: "ministry/gis", element: <MinistryGisPage /> },
      { path: "ministry/risk", element: <MinistryRiskDelayPage /> },
      { path: "ministry/compensation", element: <MinistryCompensationPage /> },
      { path: "ministry/possession", element: <MinistryPossessionPage /> },
      { path: "ministry/rnr", element: <MinistryRnrPage /> },
      { path: "ministry/organizations", element: <MinistryOrgsPage /> },
      { path: "ministry/stakeholders", element: <MinistryStakeholdersPage /> },
      { path: "ministry/requests", element: <MinistryRequestsPage /> },
      { path: "ministry/documents", element: <MinistryDocumentsPage /> },
      { path: "ministry/objections", element: <MinistryObjectionsPage /> },
      { path: "ministry/audit", element: <MinistryAuditPage /> },
      { path: "ministry/reports", element: <MinistryMisPage /> },
      { path: "ministry/notifications", element: <MinistryNotificationsPage /> },
      { path: "ministry/profile", element: <MinistryProfilePage /> },
      // Requiring Organisation / Implementing Agency routes
      { path: "ro/dashboard", element: <ProjectDashboardPage /> },
      { path: "ro/projects", element: <MyProjectsPage /> },
      { path: "ro/create", element: <CreateProjectPage /> },
      { path: "ro/project/:projectId", element: <ProjectWorkspacePage /> },
      { path: "ro/work-queue", element: <WorkQueuePage /> },
      { path: "ro/progress", element: <AcquisitionProgressPage /> },
      { path: "ro/gis", element: <ProjectGisPage /> },
      { path: "ro/risk", element: <RiskDelayPage /> },
      { path: "ro/requests", element: <AuthorityRequestsPage /> },
      { path: "ro/objections", element: <ObjectionsGrievancesPage /> },
      { path: "ro/documents", element: <ProjectDocumentsPage /> },
      { path: "ro/audit", element: <RoAuditTrailPage /> },
      { path: "ro/compensation", element: <CompensationMonitorPage /> },
      { path: "ro/possession", element: <PossessionMonitorPage /> },
      { path: "ro/rnr", element: <RnrMonitorPage /> },
      { path: "ro/reports", element: <ProjectReportsPage /> },
    ],
  },
  { path: "*", element: <Navigate to="/" replace /> },
]);
