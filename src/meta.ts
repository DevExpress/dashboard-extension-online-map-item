/// <reference path="localization.ts" />
/// <reference path="../typings/globals/dashboards/dx-dashboard-designer.d.ts" />

module CustomItems {
    export var ONLINE_MAP_EXTENSION_NAME = 'OnlineMap';

    export var onlineMapMeta = {
        bindings: <Array<DevExpress.Dashboard.ICustomItemBinding>>[{
            propertyName: 'Latitude',
            dataItemType: 'Dimension',
            array: false,
            enableInteractivity: true,
            displayName: "DashboardWebCustomItemStringId.Latitude",
            emptyPlaceholder: 'DashboardWebCustomItemStringId.Binding.SetLatitude',
            selectedPlaceholder: "DashboardWebCustomItemStringId.Binding.ConfigureLatitude",
            constraints: {
                allowedTypes: ['Integer', 'Float', 'Double', 'Decimal']
            }
        },  {
            propertyName: 'Longitude',
            dataItemType: 'Dimension',
            array: false,
            enableInteractivity: true,
            displayName: "DashboardWebCustomItemStringId.Longitude",
            emptyPlaceholder: 'DashboardWebCustomItemStringId.Binding.SetLongitude',
            selectedPlaceholder: "DashboardWebCustomItemStringId.Binding.ConfigureLongitude",
            constraints: {
                allowedTypes: ['Integer', 'Float', 'Double', 'Decimal']
            }
        }],
        properties: <Array<DevExpress.Dashboard.ICustomItemProperty>>[{
            propertyName: 'Provider',
            editor: { header: "dx-dashboard-button-group" },
            displayName: "DashboardWebCustomItemStringId.OnlineMapProvider",
            sectionName: "DashboardWebCustomItemStringId.OnlineMapSectionName",
            values: {
                Google: "DashboardWebCustomItemStringId.OnlineMapProviderGoogle",
                Bing: "DashboardWebCustomItemStringId.OnlineMapProviderBing"
            },
            defaultVal: 'Bing'
        }, {
            propertyName: 'Type',
            editor: { header: "dx-dashboard-button-group" },
            displayName: "DashboardWebCustomItemStringId.OnlineMapType",
            sectionName: "DashboardWebCustomItemStringId.OnlineMapSectionName",
            values: {
                RoadMap: "DashboardWebCustomItemStringId.OnlineMapTypeRoadMap",
                Satellite: "DashboardWebCustomItemStringId.OnlineMapTypeSatellite",
                Hybrid: "DashboardWebCustomItemStringId.OnlineMapTypeHybrid"
            },
            defaultVal: 'RoadMap'
        }, {
            propertyName: 'DisplayMode',
            editor: { header: "dx-dashboard-button-group" },
            displayName: "DashboardWebCustomItemStringId.OnlineMapDisplayMode",
            sectionName: "DashboardWebCustomItemStringId.OnlineMapSectionName",
            values: {
                Markers: "DashboardWebCustomItemStringId.OnlineMapDisplayModeMarkers",
                Routes: "DashboardWebCustomItemStringId.OnlineMapDisplayModeRoutes",
                MarkersAndRoutes: "DashboardWebCustomItemStringId.OnlineMapDisplayModeMarkersAndRoutes"
            },
            defaultVal: 'Markers'
        }],
        interactivity: {
            filter: true,
            drillDown: false
        },
        icon: ONLINE_MAP_EXTENSION_NAME,
        title: "DashboardWebCustomItemStringId.DefaultNameOnlineMap",
        index: 1
    };
}