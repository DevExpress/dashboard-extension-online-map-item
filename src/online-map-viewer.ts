/// <reference path="../typings/globals/dashboards/dx-dashboard-designer.d.ts" />
/// <reference path="localization.ts" />
/// <reference path="meta.ts" />

/// See the DevExtreme documentation to learn more about the Map UI widget settings.
/// https://js.devexpress.com/Documentation/16_2/ApiReference/UI_Widgets/dxMap/

module CustomItems {
    export class onlineMapItem extends DevExpress.Dashboard.customViewerItem {
        private mapViewer: any;

        constructor(model: DevExpress.Dashboard.ICustomItemModel, $container, options) {
            super(model, $container, options);
            this.mapViewer = null;
        }

        setSize(width, height) {
            super.setSize(width, height);
            this.mapViewer.option('width', this.contentWidth());
            this.mapViewer.option('height', this.contentHeight());
        }

        clearSelection() {
            super.clearSelection();
            this._updateSelection();
        }

        renderContent($element: JQuery, changeExisting: boolean, afterRenderCallback?) {
            var markers = [],
                routes = [],
                mode = this.getPropertyValue('DisplayMode'),
                showMarkers = mode === 'Markers' || mode === 'MarkersAndRoutes' || this.model.isMasterFilter(),
                showRoutes = mode === 'Routes' || mode === 'MarkersAndRoutes';
            if(this.getBindingValue('Latitude').length > 0 && this.getBindingValue('Longitude').length > 0) {
                this.model.iterateData(row => {
                    var latitude = row.getValue('Latitude');
                    var longitude = row.getValue('Longitude');
                    if (latitude && longitude) {
                        if (showMarkers) {
                            markers.push({
                                location: { lat: latitude, lng: longitude },
                                iconSrc: this.isSelected(row) ? "https://js.devexpress.com/Demos/RealtorApp/images/map-marker.png" : null,
                                onClick: args => { this._onClick(row); },
                                tag: row
                            });
                        }
                        if (showRoutes) {
                            routes.push([latitude, longitude]);
                        }
                    }
                });
            }
            var autoAdjust = markers.length > 1 || routes.length > 1, 
                options = {
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
            if(changeExisting && this.mapViewer) {
                this.mapViewer.option(options);
            } else {
                this.mapViewer = new DevExpress.ui.dxMap($element, options);
            }
        }

        private _onClick(row) {
            this.setMasterFilter(row);
            this._updateSelection();
        }

        private _updateSelection() {
            var markers = this.mapViewer.option('markers');
            markers.forEach(marker => {
                marker.iconSrc = this.isSelected(marker.tag) ? "https://js.devexpress.com/Demos/RealtorApp/images/map-marker.png" : null;
            });
            this.mapViewer.option('autoAdjust', false);
            this.mapViewer.option('markers', markers);
        }
    }
}