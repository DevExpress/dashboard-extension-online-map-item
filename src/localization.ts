module CustomItems {
    function getDefaultCustomLocalization() {
        return {
            // Binding Panel
            'DashboardWebCustomItemStringId.ToolBoxCustomItemCaption': "Custom Items",
            'DashboardWebCustomItemStringId.DefaultNameOnlineMap': "Online Map",

            'DashboardWebCustomItemStringId.Latitude': "Latitude",
            'DashboardWebCustomItemStringId.Binding.SetLatitude': "Set Latitude",
            'DashboardWebCustomItemStringId.Binding.ConfigureLatitude': "Configure Latitude",

            'DashboardWebCustomItemStringId.Longitude': "Longitude",
            'DashboardWebCustomItemStringId.Binding.SetLongitude': "Set Longitude",
            'DashboardWebCustomItemStringId.Binding.ConfigureLongitude': "Configure Longitude",

            // Options
            'DashboardWebCustomItemStringId.OnlineMapProvider': "Provider",
            'DashboardWebCustomItemStringId.OnlineMapType': "Type",
            'DashboardWebCustomItemStringId.OnlineMapProviderGoogle': "Google",
            'DashboardWebCustomItemStringId.OnlineMapProviderBing': "Bing",
            'DashboardWebCustomItemStringId.OnlineMapTypeRoadMap': "RoadMap",
            'DashboardWebCustomItemStringId.OnlineMapTypeSatellite': "Satellite",
            'DashboardWebCustomItemStringId.OnlineMapTypeHybrid': "Hybrid",
            'DashboardWebCustomItemStringId.OnlineMapDisplayMode': "Display Mode",
            'DashboardWebCustomItemStringId.OnlineMapDisplayModeMarkers': "Markers",
            'DashboardWebCustomItemStringId.OnlineMapDisplayModeRoutes': "Routes",
            'DashboardWebCustomItemStringId.OnlineMapDisplayModeMarkersAndRoutes': "All",
            'DashboardWebCustomItemStringId.OnlineMapSectionName': "Custom Options"
        };
    }

    DevExpress.JS.Localization.addCultureInfo({ messages: getDefaultCustomLocalization() });
}