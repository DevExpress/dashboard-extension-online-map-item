var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CustomItems;
(function (CustomItems) {
    function getDefaultCustomLocalization() {
        return {
            // Binding Panel
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
    DevExpress.Localization.addCultureInfo({ messages: getDefaultCustomLocalization() });
})(CustomItems || (CustomItems = {}));
/// <reference path="localization.ts" />
/// <reference path="../typings/globals/dashboards/dx-dashboard-designer.d.ts" />
var CustomItems;
(function (CustomItems) {
    CustomItems.ONLINE_MAP_EXTENSION_NAME = 'OnlineMap';
    CustomItems.onlineMapMeta = {
        bindings: [{
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
            }, {
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
        properties: [{
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
        icon: CustomItems.ONLINE_MAP_EXTENSION_NAME,
        title: "DashboardWebCustomItemStringId.DefaultNameOnlineMap",
        index: 1
    };
})(CustomItems || (CustomItems = {}));
/// <reference path="meta.ts" />
var CustomItems;
(function (CustomItems) {
    CustomItems.ONLINE_MAP_ICON = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n        <svg version=\"1.1\" id=\"" + CustomItems.onlineMapMeta.icon + "\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" \n             x=\"0px\" y=\"0px\" viewBox=\"4 -4 24 24\" style=\"enable-background:new 4 -4 24 24;\" xml:space=\"preserve\">\n            <style type=\"text/css\">\n\t            .dx_ruby{fill:#FA7864;}\n            </style>\n            <circle class=\"dx_ruby\" cx=\"19\" cy=\"13\" r=\"3\"/>\n            <circle class=\"dx_ruby\" cx=\"18\" cy=\"5\" r=\"3\"/>\n            <circle class=\"dx_ruby\" cx=\"11\" cy=\"3\" r=\"3\"/>\n        </svg>";
})(CustomItems || (CustomItems = {}));
/// <reference path="../typings/globals/dashboards/dx-dashboard-designer.d.ts" />
/// <reference path="localization.ts" />
/// <reference path="meta.ts" />
/// See the DevExtreme documentation to learn more about the Map UI widget settings.
/// https://js.devexpress.com/Documentation/16_2/ApiReference/UI_Widgets/dxMap/
var CustomItems;
(function (CustomItems) {
    var onlineMapItem = (function (_super) {
        __extends(onlineMapItem, _super);
        function onlineMapItem(model, $container, options) {
            var _this = _super.call(this, model, $container, options) || this;
            _this.mapViewer = null;
            return _this;
        }
        onlineMapItem.prototype.setSize = function (width, height) {
            _super.prototype.setSize.call(this, width, height);
            this.mapViewer.option('width', this.contentWidth());
            this.mapViewer.option('height', this.contentHeight());
        };
        onlineMapItem.prototype.clearSelection = function () {
            _super.prototype.clearSelection.call(this);
            this._updateSelection();
        };
        onlineMapItem.prototype.renderContent = function ($element, changeExisting, afterRenderCallback) {
            var _this = this;
            var markers = [], routes = [], mode = this.getPropertyValue('DisplayMode'), showMarkers = mode === 'Markers' || mode === 'MarkersAndRoutes' || this.allowSetMasterFilter(), showRoutes = mode === 'Routes' || mode === 'MarkersAndRoutes';
            if (this.getBindingValue('Latitude').length > 0 && this.getBindingValue('Longitude').length > 0) {
                this.iterateData(function (row) {
                    var latitude = row.getValue('Latitude');
                    var longitude = row.getValue('Longitude');
                    if (latitude && longitude) {
                        if (showMarkers) {
                            markers.push({
                                location: { lat: latitude, lng: longitude },
                                iconSrc: _this.isSelected(row) ? "https://js.devexpress.com/Demos/RealtorApp/images/map-marker.png" : null,
                                onClick: function (args) { _this._onClick(row); },
                                tag: row
                            });
                        }
                        if (showRoutes) {
                            routes.push([latitude, longitude]);
                        }
                    }
                });
            }
            var autoAdjust = markers.length > 1 || routes.length > 1, options = {
                provider: this.getPropertyValue('Provider').toLowerCase(),
                type: this.getPropertyValue('Type').toLowerCase(),
                controls: true,
                zoom: autoAdjust ? 1000 : 1,
                autoAdjust: autoAdjust,
                width: this.contentWidth(),
                height: this.contentHeight(),
                // Use the template below to authenticate the application within the required map provider.
                //key: { 
                //    bing: 'BINGAPIKEY',
                //    google: 'GOOGLEAPIKEY'
                //},             
                markers: markers,
                routes: routes.length > 0 ? [{
                        weight: 6,
                        color: 'blue',
                        opacity: 0.5,
                        mode: '',
                        locations: routes
                    }] : []
            };
            if (changeExisting && this.mapViewer) {
                this.mapViewer.option(options);
            }
            else {
                this.mapViewer = new DevExpress.ui.dxMap($element, options);
            }
        };
        onlineMapItem.prototype._onClick = function (row) {
            this.setMasterFilter(row);
            this._updateSelection();
        };
        onlineMapItem.prototype._updateSelection = function () {
            var _this = this;
            var markers = this.mapViewer.option('markers');
            markers.forEach(function (marker) {
                marker.iconSrc = _this.isSelected(marker.tag) ? "https://js.devexpress.com/Demos/RealtorApp/images/map-marker.png" : null;
            });
            this.mapViewer.option('autoAdjust', false);
            this.mapViewer.option('markers', markers);
        };
        return onlineMapItem;
    }(DevExpress.Dashboard.customViewerItem));
    CustomItems.onlineMapItem = onlineMapItem;
})(CustomItems || (CustomItems = {}));
/// <reference path="meta.ts" />
/// <reference path="icon.ts" />
/// <reference path="localization.ts" />
/// <reference path="online-map-viewer.ts" />
var CustomItems;
(function (CustomItems) {
    var OnlineMapItemExtension = (function () {
        function OnlineMapItemExtension(dashboardControl) {
            this.name = CustomItems.ONLINE_MAP_EXTENSION_NAME;
            this.metaData = CustomItems.onlineMapMeta;
            this.createViewerItem = function (model, $element, content) {
                return new CustomItems.onlineMapItem(model, $element, content);
            };
            dashboardControl.registerIcon(CustomItems.ONLINE_MAP_ICON);
        }
        return OnlineMapItemExtension;
    }());
    CustomItems.OnlineMapItemExtension = OnlineMapItemExtension;
})(CustomItems || (CustomItems = {}));
