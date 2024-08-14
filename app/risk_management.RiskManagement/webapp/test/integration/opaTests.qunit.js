sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'riskmanagement/RiskManagement/test/integration/FirstJourney',
		'riskmanagement/RiskManagement/test/integration/pages/RisksList',
		'riskmanagement/RiskManagement/test/integration/pages/RisksObjectPage'
    ],
    function(JourneyRunner, opaJourney, RisksList, RisksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('riskmanagement/RiskManagement') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRisksList: RisksList,
					onTheRisksObjectPage: RisksObjectPage
                }
            },
            opaJourney.run
        );
    }
);