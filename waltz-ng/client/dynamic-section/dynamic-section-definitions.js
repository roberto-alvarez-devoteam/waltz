/*
 * Waltz - Enterprise Architecture
 * Copyright (C) 2016, 2017, 2018, 2019 Waltz open source project
 * See README.md for more information
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific
 *
 */
import BookmarkPanel from "../bookmarks/svelte/BookmarkPanel.svelte";


const appsSection = {
    componentId: "apps-section",
    name: "Applications",
    icon: "desktop",
    id: 1
};

const assetCostsSection = {
    componentId: "asset-costs-section",
    name: "Costs",
    icon: "money",
    id: 2,
};

const appCostsSection = {
    componentId: "app-costs-section",
    name: "Costs",
    icon: "money",
    id: 3,
};

const authSourcesSection = {
    componentId: "auth-sources-section",
    name: "Authoritative Sources",
    icon: "shield",
    id: 4,
};

const bookmarksSection = {
    svelteComponent: BookmarkPanel,
    componentId: "bookmarks-section",
    name: "Bookmarks",
    icon: "rocket",
    id: 5,
};

const changeInitiativeSection = {
    componentId: "change-initiative-section",
    name: "Change Initiatives",
    icon: "paper-plane-o",
    id: 6,
};

const changeLogSection = {
    componentId: "change-log-section",
    icon: "history",
    name: "Changes",
    id: 7,
};

const dataFlowSection = {
    componentId: "data-flow-section",
    name: "Data Flows",
    icon: "random",
    id: 9,
};

const entityNamedNotesSection = {
    componentId: "entity-named-notes-section",
    name: "Notes",
    icon: "sticky-note-o",
    id: 10,
};

const entityStatisticSection = {
    componentId: "entity-statistic-section",
    name: "Indicators",
    icon: "pie-chart",
    id: 11,
};

const entityDiagramsSection = {
    componentId: "entity-diagrams-section",
    name: "Diagrams",
    icon: "picture-o",
    id: 12
};

const involvedPeopleSection = {
    componentId: "involved-people-section",
    name: "People",
    icon: "users",
    id: 13,
};

const logicalFlowsTabgroupSection = {
    componentId: "logical-flows-tabgroup-section",
    name: "Data Flows",
    icon: "random",
    id: 14
};

const measurableRatingAppSection = {
    componentId: "measurable-rating-app-section",
    name: "Ratings / Roadmaps",
    icon: "puzzle-piece",
    id: 15,
};

const measurableRatingsBrowserSection = {
    componentId: "measurable-ratings-browser-section",
    name: "Ratings / Roadmaps",
    icon: "star-half-o",
    id: 16,
};

const surveySection = {
    componentId: "survey-section",
    name: "Surveys",
    icon: "wpforms",
    id: 17,
};

const technologySection = {
    componentId: "technology-section",
    name: "Technology",
    icon: "server",
    id: 18,
};

const technologySummarySection = {
    componentId: "technology-summary-section",
    name: "Technologies",
    icon: "server",
    id: 19,
};

const entityStatisticSummarySection = {
    componentId: "entity-statistic-summary-section",
    name: "Indicators",
    icon: "pie-chart",
    id: 20
};

const measurableRatingExplorerSection = {
    componentId: "measurable-rating-explorer-section",
    name: "Ratings",
    icon: "star-half-o",
    id: 21
};

const relatedMeasurablesSection = {
    componentId: "related-measurables-section",
    name: "Viewpoints",
    icon: "link",
    id: 22
};

const relatedDataTypesSection = {
    componentId: "related-data-type-section",
    name: "Types",
    icon: "qrcode",
    id: 23
};

const relatedAppsSection = {
    componentId: "related-apps-section",
    name: "Apps",
    icon: "desktop",
    id: 24
};

const relatedAppGroupsSection = {
    componentId: "related-app-groups-section",
    name: "Groups",
    icon: "object-group",
    id: 25
};

const personHierarchySection = {
    componentId: "person-hierarchy-section",
    name: "Hierarchy",
    icon: "address-book-o",
    id: 26
};

const personAppsSection = {
    componentId: "person-apps-section",
    name: "Applications",
    icon: "desktop",
    id: 27
};

const dataTypeOriginatorsSection = {
    componentId: "data-type-originators",
    name: "Originators",
    icon: "inbox",
    id: 28
};

const dataTypeFlowSection = {
    componentId: "data-type-flow-section",
    name: "Data Flows",
    icon: "random",
    id: 29,
};

const relatedPhysicalFieldSection = {
    componentId: "related-physical-spec-defn-field-section",
    name: "Physical Fields",
    icon: "file-code-o",
    id: 40
};

const relatedOrgUnitSection = {
    componentId: "related-org-unit-section",
    name: "Organisation Units",
    icon: "sitemap",
    id: 50
};

const logicalDataElementsSection = {
    componentId: "logical-data-elements-section",
    name: "Logical Data Elements",
    icon: "asterisk",
    id: 60
};

const physicalFlowParticipantsSection = {
    componentId: "physical-flow-participants-section",
    name: "Flow Participants",
    icon: "cubes",
    id: 70
};

const changeSetSection = {
    componentId: "change-set-section",
    name: "Change Sets",
    icon: "hourglass-2",
    id: 80
};

const personChangeSetSection = {
    componentId: "person-change-set-section",
    name: "Change Sets",
    icon: "hourglass-2",
    id: 90
};

const licenceSection = {
    componentId: "licence-section",
    name: "Licences",
    icon: "id-card-o",
    id: 100
};

const flowSpecDefinitionSection = {
    componentId: "flow-spec-definition-section",
    name: "Specification Definition",
    icon: "file-code-o",
    id: 110
};

const attestationSummarySection = {
    componentId: "attestation-summary-section",
    name: "Attestations",
    icon: "check-square-o",
    id: 120
};

const softwarePackageVersions = {
    componentId: "software-package-versions",
    name: "Versions",
    icon: "clock-o",
    id: 130
};

const softwarePackagesSection = {
    componentId: "software-packages-section",
    name: "Software Packages",
    icon: "gift",
    id: 140
};

const orgUnitDirectMeasurableSection = {
    componentId: "org-unit-direct-measurable-section",
    name: "Direct Viewpoints",
    icon: "puzzle-piece",
    id: 150
};

const personMeasurableInvolvementsSection = {
    componentId: "person-measurable-involvements-section",
    name: "Viewpoint Involvements",
    icon: "user-o",
    id: 160
};

const reportGridViewSection = {
    componentId: "report-grid-view-section",
    name: "Reports",
    icon: "cloud",
    id: 170
};


const appCostsSummarySection = {
    componentId: "app-costs-summary-section",
    name: "Application Costs",
    icon: "money",
    id: 180
};

const entityCostsSection = {
    componentId: "entity-costs-section",
    name: "Costs",
    icon: "money",
    id: 190
};

const assessmentRatingSection = {
    componentId: "assessment-rating-section",
    name: "Assessment Ratings",
    icon: "puzzle-piece",
    id: 200
};

const physicalFlowSection = {
    componentId: "physical-flow-section",
    name: "Physical Flows",
    icon: "qrcode",
    id: 210
};

const changeUnitSection = {
    componentId: "change-unit-section",
    name: "Change Units",
    icon: "hourglass-2",
    id: 220
};

const specificationDefinitionSection = {
    componentId: "physical-spec-definition-section",
    name: "Specification Definitions",
    icon: "file-code-o",
    id: 230
};

const appComplexitySummarySection = {
    componentId: "app-complexity-summary-section",
    name: "Application Complexity",
    icon: "sort-numeric-asc",
    id: 240
};

const entityAttestationSection = {
    componentId: "attestation-section",
    name: "Attestations",
    icon: "check-square-o",
    id: 10001
};

export const dynamicSections = {
    appCostsSection,
    appCostsSummarySection,
    appComplexitySummarySection,
    appsSection,
    assessmentRatingSection,
    assetCostsSection,
    attestationSummarySection,
    authSourcesSection,
    bookmarksSection,
    changeInitiativeSection,
    changeLogSection,
    changeSetSection,
    changeUnitSection,
    dataFlowSection,
    dataTypeFlowSection,
    dataTypeOriginatorsSection,
    entityAttestationSection,
    entityCostsSection,
    entityDiagramsSection,
    entityNamedNotesSection,
    entityStatisticSection,
    entityStatisticSummarySection,
    flowSpecDefinitionSection,
    involvedPeopleSection,
    licenceSection,
    logicalDataElementsSection,
    logicalFlowsTabgroupSection,
    measurableRatingAppSection,
    measurableRatingExplorerSection,
    measurableRatingsBrowserSection,
    measurableRatingGridView: reportGridViewSection,
    orgUnitDirectMeasurableSection,
    personAppsSection,
    personChangeSetSection,
    personMeasurableInvolvementsSection,
    personHierarchySection,
    physicalFlowSection,
    physicalFlowParticipantsSection,
    relatedAppGroupsSection,
    relatedAppsSection,
    relatedDataTypesSection,
    relatedMeasurablesSection,
    relatedOrgUnitSection,
    relatedPhysicalFieldSection,
    softwarePackagesSection,
    softwarePackageVersions,
    specificationDefinitionSection,
    surveySection,
    technologySection,
    technologySummarySection
};


function pack(section, children = []) {
    return children
        ? Object.assign({}, section, { children })
        : section;
}


const appSections = [
    assessmentRatingSection,
    bookmarksSection,
    changeInitiativeSection,
    changeSetSection,
    dataFlowSection,
    entityAttestationSection,
    entityCostsSection,
    entityDiagramsSection,
    entityNamedNotesSection,
    entityStatisticSection,
    involvedPeopleSection,
    measurableRatingAppSection,
    surveySection,
    technologySection,
    changeLogSection
];

const actorSections = [
    measurableRatingAppSection,
    bookmarksSection,
    entityNamedNotesSection,
    involvedPeopleSection,
    changeInitiativeSection,
    entityDiagramsSection,
    dataFlowSection,
    appsSection,
    technologySummarySection,
    changeLogSection
];

const changeInitiativeSections = [
    assessmentRatingSection,
    bookmarksSection,
    changeSetSection,
    entityNamedNotesSection,
    involvedPeopleSection,
    relatedMeasurablesSection,
    pack(
        relatedAppsSection,
        [appCostsSummarySection, appComplexitySummarySection, entityStatisticSummarySection, technologySummarySection]),
    relatedAppGroupsSection,
    relatedDataTypesSection,
    surveySection,
    entityDiagramsSection,
    logicalFlowsTabgroupSection,
    changeLogSection
];

const orgUnitSections = [
    pack(
        appsSection,
        [appCostsSummarySection, appComplexitySummarySection, entityStatisticSummarySection, technologySummarySection]),
    measurableRatingsBrowserSection,
    reportGridViewSection,
    pack(
        logicalFlowsTabgroupSection,
        [authSourcesSection]),
    changeInitiativeSection,
    changeSetSection,
    involvedPeopleSection,
    attestationSummarySection,
    bookmarksSection,
    changeLogSection,
    orgUnitDirectMeasurableSection
];

const measurableSections = [
    pack(
        appsSection,
        [appCostsSummarySection, appComplexitySummarySection, entityStatisticSummarySection, technologySummarySection]),
    entityNamedNotesSection,
    measurableRatingExplorerSection,
    reportGridViewSection,
    relatedMeasurablesSection,
    bookmarksSection,
    changeSetSection,
    involvedPeopleSection,
    pack(
        logicalFlowsTabgroupSection,
        [authSourcesSection]),
    entityDiagramsSection,
    changeLogSection
];

const personSections = [
    personHierarchySection,
    pack(
        personAppsSection,
        [appCostsSummarySection, appComplexitySummarySection, entityStatisticSummarySection, technologySummarySection]),
    attestationSummarySection,
    bookmarksSection,
    changeInitiativeSection,
    personChangeSetSection,
    pack(
        logicalFlowsTabgroupSection,
        [authSourcesSection]),
    surveySection,
    changeLogSection,
    measurableRatingsBrowserSection,
    reportGridViewSection,
    personMeasurableInvolvementsSection
];

const dataTypeSections = [
    appsSection,
    entityNamedNotesSection,
    bookmarksSection,
    entityDiagramsSection,
    involvedPeopleSection,
    authSourcesSection,
    dataTypeOriginatorsSection,
    logicalFlowsTabgroupSection,
    logicalDataElementsSection,
    changeLogSection
];

const appGroupSections = [
    pack(
        appsSection,
        [appCostsSummarySection, appComplexitySummarySection, entityStatisticSummarySection, technologySummarySection]),
    pack(
        logicalFlowsTabgroupSection,
        [authSourcesSection]),
    attestationSummarySection,
    changeInitiativeSection,
    changeSetSection,
    measurableRatingsBrowserSection,
    reportGridViewSection,
    relatedAppGroupsSection,
    bookmarksSection,
    entityNamedNotesSection,
    relatedDataTypesSection,
    relatedMeasurablesSection,
    involvedPeopleSection,
    changeLogSection
];

const scenarioSections = [
    changeInitiativeSection,
    logicalFlowsTabgroupSection,
    pack(
        appsSection,
        [appCostsSummarySection, appComplexitySummarySection, entityStatisticSummarySection, technologySummarySection]),
    bookmarksSection,
    entityNamedNotesSection,
    changeLogSection
];

const flowDiagramSections = [
    pack(
        appsSection,
        [appCostsSummarySection, appComplexitySummarySection, entityStatisticSummarySection, technologySummarySection]),
    bookmarksSection,
    changeLogSection,
    measurableRatingsBrowserSection,
    reportGridViewSection,
    entityNamedNotesSection
];

const physicalFlowSections = [
    assessmentRatingSection,
    bookmarksSection,
    changeLogSection,
    entityDiagramsSection,
    entityNamedNotesSection,
    flowSpecDefinitionSection,
    involvedPeopleSection,
    physicalFlowParticipantsSection
];

const logicalDataFlowSections = [
    assessmentRatingSection,
    bookmarksSection,
    changeLogSection,
    entityDiagramsSection,
    entityNamedNotesSection,
    physicalFlowSection
];

const changeSetSections = [
    assessmentRatingSection,
    bookmarksSection,
    changeLogSection,
    changeUnitSection,
    involvedPeopleSection
];

const licenceSections = [
    appsSection,
    assessmentRatingSection,
    bookmarksSection,
    changeLogSection,
    entityNamedNotesSection,
    softwarePackagesSection
];

const softwarePackageSections = [
    appsSection,
    assessmentRatingSection,
    bookmarksSection,
    changeLogSection,
    entityNamedNotesSection,
    entityStatisticSection,
    licenceSection,
    softwarePackageVersions
];

const physicalSpecificationSections = [
    assessmentRatingSection,
    bookmarksSection,
    changeLogSection,
    entityDiagramsSection,
    physicalFlowSection,
    specificationDefinitionSection
];

const entityRelationshipSections = [
    assessmentRatingSection,
    bookmarksSection,
    changeLogSection,
    entityNamedNotesSection,
    involvedPeopleSection
];

const databaseSections = [
    appsSection,
    entityNamedNotesSection,
    bookmarksSection,
    changeLogSection,
];

const authoritativeSourceSections = [
    bookmarksSection,
    changeLogSection,
    entityNamedNotesSection,
    involvedPeopleSection
];

export const dynamicSectionsByKind = {
    "main.actor.view": actorSections,
    "main.app.view": appSections,
    "main.app.asset-code": appSections,
    "main.app.external-id": appSections,
    "main.app-group.view": appGroupSections,
    "main.org-unit.view": orgUnitSections,
    "main.scenario.view": scenarioSections,
    "main.change-initiative.view": changeInitiativeSections,
    "main.change-initiative.external-id": changeInitiativeSections,
    "main.measurable.view": measurableSections,
    "main.person.id": personSections,
    "main.person.view": personSections,
    "main.person.userId": personSections,
    "main.data-type.code": dataTypeSections,
    "main.data-type.view": dataTypeSections,
    "main.data-type.external-id": dataTypeSections,
    "main.flow-diagram.view": flowDiagramSections,
    "main.physical-flow.view": physicalFlowSections,
    "main.logical-flow.view": logicalDataFlowSections,
    "main.change-set.view": changeSetSections,
    "main.licence.view": licenceSections,
    "main.licence.external-id": licenceSections,
    "main.software-package.view": softwarePackageSections,
    "main.physical-specification.view": physicalSpecificationSections,
    "main.entity-relationship.view": entityRelationshipSections,
    "main.database.view": databaseSections,
    "main.database.external-id": databaseSections,
    "main.authoritative-source.view": authoritativeSourceSections
};
