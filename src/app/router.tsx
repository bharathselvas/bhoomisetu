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
import { StateOverviewPage } from "@/features/state-nodal/StateOverviewPage";
import { StatePipelinePage } from "@/features/state-nodal/StatePipelinePage";
import { IncomingProjectsPage } from "@/features/state-nodal/IncomingProjectsPage";
import { StateProjectReviewPage } from "@/features/state-nodal/StateProjectReviewPage";
import { DistrictRoutingPage } from "@/features/state-nodal/DistrictRoutingPage";
import { DistrictMonitoringPage } from "@/features/state-nodal/DistrictMonitoringPage";
import { DistrictDetailPage } from "@/features/state-nodal/DistrictDetailPage";
import { StateGisPage } from "@/features/state-nodal/StateGisPage";
import { StateProjectsPage } from "@/features/state-nodal/StateProjectsPage";
import { StatutoryTimelinePage } from "@/features/state-nodal/StatutoryTimelinePage";
import { SiaMonitoringPage } from "@/features/state-nodal/SiaMonitoringPage";
import { NotificationMonitoringPage } from "@/features/state-nodal/NotificationMonitoringPage";
import { ObjectionsMonitoringPage } from "@/features/state-nodal/ObjectionsMonitoringPage";
import { RequestsClarificationsPage } from "@/features/state-nodal/RequestsClarificationsPage";
import { StateDepartmentsPage } from "@/features/state-nodal/StateDepartmentsPage";
import { StateStakeholdersPage } from "@/features/state-nodal/StateStakeholdersPage";
import { StateCompensationPage } from "@/features/state-nodal/StateCompensationPage";
import { StatePossessionPage } from "@/features/state-nodal/StatePossessionPage";
import { StateRnrPage } from "@/features/state-nodal/StateRnrPage";
import { StateRiskDelayPage } from "@/features/state-nodal/StateRiskDelayPage";
import { StateDocumentsPage } from "@/features/state-nodal/StateDocumentsPage";
import { StateAuditPage } from "@/features/state-nodal/StateAuditPage";
import { StateMisPage } from "@/features/state-nodal/StateMisPage";
import { StateNotificationsPage } from "@/features/state-nodal/StateNotificationsPage";
import { StateWorkQueuePage } from "@/features/state-nodal/StateWorkQueuePage";
import { StateProjectWorkspacePage } from "@/features/state-nodal/StateProjectWorkspacePage";

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
      // State Nodal Officer routes
      { path: "state-nodal/overview", element: <StateOverviewPage /> },
      { path: "state-nodal/pipeline", element: <StatePipelinePage /> },
      { path: "state-nodal/incoming", element: <IncomingProjectsPage /> },
      { path: "state-nodal/project-review/:projectId", element: <StateProjectReviewPage /> },
      { path: "state-nodal/routing", element: <DistrictRoutingPage /> },
      { path: "state-nodal/districts", element: <DistrictMonitoringPage /> },
      { path: "state-nodal/districts/:districtId", element: <DistrictDetailPage /> },
      { path: "state-nodal/gis", element: <StateGisPage /> },
      { path: "state-nodal/projects", element: <StateProjectsPage /> },
      { path: "state-nodal/project/:projectId", element: <StateProjectWorkspacePage /> },
      { path: "state-nodal/timeline", element: <StatutoryTimelinePage /> },
      { path: "state-nodal/sia", element: <SiaMonitoringPage /> },
      { path: "state-nodal/notifications-monitor", element: <NotificationMonitoringPage /> },
      { path: "state-nodal/objections", element: <ObjectionsMonitoringPage /> },
      { path: "state-nodal/requests", element: <RequestsClarificationsPage /> },
      { path: "state-nodal/departments", element: <StateDepartmentsPage /> },
      { path: "state-nodal/stakeholders", element: <StateStakeholdersPage /> },
      { path: "state-nodal/compensation", element: <StateCompensationPage /> },
      { path: "state-nodal/possession", element: <StatePossessionPage /> },
      { path: "state-nodal/rnr", element: <StateRnrPage /> },
      { path: "state-nodal/risk", element: <StateRiskDelayPage /> },
      { path: "state-nodal/documents", element: <StateDocumentsPage /> },
      { path: "state-nodal/audit", element: <StateAuditPage /> },
      { path: "state-nodal/mis", element: <StateMisPage /> },
      { path: "state-nodal/notifications", element: <StateNotificationsPage /> },
      { path: "state-nodal/work-queue", element: <StateWorkQueuePage /> },
    ],
  },
  { path: "*", element: <Navigate to="/" replace /> },
]);
