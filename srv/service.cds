using { BusinessPartnerA2X } from './external/BusinessPartnerA2X.cds';

using { riskmanagement as my } from '../db/schema';

@path : '/service/risk_managementSvcs'
service RiskManagementService
{
    annotate A_BusinessPartner with @restrict :
    [
        { grant : [ 'READ' ], to : [ 'NewRiskViewer' ] },
        { grant : [ 'READ' ], to : [ 'NewRiskManager' ] }
    ];

    annotate Mitigations with @restrict :
    [
        { grant : [ 'READ' ], to : [ 'NewRiskViewer' ] },
        { grant : [ '*' ], to : [ 'NewRiskManager' ] }
    ];

    annotate Risks with @restrict :
    [
        { grant : [ 'READ' ], to : [ 'NewRiskViewer' ] },
        { grant : [ '*' ], to : [ 'NewRiskManager' ] }
    ];

    @odata.draft.enabled
    entity Risks as
        projection on my.Risks;

    @odata.draft.enabled
    entity Mitigations as
        projection on my.Mitigations;

    entity A_BusinessPartner as
        projection on BusinessPartnerA2X.A_BusinessPartner
        {
            BusinessPartner,
            Customer,
            Supplier,
            BusinessPartnerFullName,
            BusinessPartnerIsBlocked
        };
}

annotate RiskManagementService with @requires :
[
    'authenticated-user'
];
