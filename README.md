The **Online Map** custom item allows you to place callouts on the Google or Bing maps using geographical coordinates.

This dashboard item supports the [Master-Filtering](https://documentation.devexpress.com/#Dashboard/CustomDocument117060) feature.

## Installation

To add the Online Map dashboard item to the Web Dashboard, register the custom item extension on the Web Dashboard's [BeforeRender](https://documentation.devexpress.com/#Dashboard/DevExpressDashboardWebScriptsASPxClientDashboard_BeforeRendertopic) event.

```javascript
function onBeforeRender(sender) {
  var dashboardControl = sender.getDesigner();
  dashboardControl.registerExtension(new CustomItems.OnlineMapItemExtension(dashboardControl));
}
```


## Settings
The **Online Map** dashboard item supports the following settings that you can configure in the Wed Dashboard UI:
* **Provider** - Specifies whether to show Google or Bing maps.
* **Type** - Specifies the map type. You can choose between RoadMap, Satellite or Hybrid type.
* **Display Mode** - Specifies whether to show markers or routes.
