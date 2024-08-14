sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'riskmanagement/riskManagement/test/integration/FirstJourney',
		'riskmanagement/riskManagement/test/integration/pages/RisksList',
		'riskmanagement/riskManagement/test/integration/pages/RisksObjectPage'
    ],
    function(JourneyRunner, opaJourney, RisksList, RisksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('riskmanagement/riskManagement') + '/index.html'
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