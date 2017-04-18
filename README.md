The **Online Map** extension is a [custom dashboard item](https://www.devexpress.com/Support/Center/Question/Details/T491984) that allows you to place callouts on Google or Bing maps using geographical coordinates.

This custom item supports the [Master-Filtering](https://documentation.devexpress.com/#Dashboard/CustomDocument117060) feature.


## Installation

1. Download the required scripts [here](https://github.com/DevExpress/dashboard-extension-online-map-item/releases) and place them in your project.

2. Attach the download script to the project.
```xml
<script src="/your-path/dashboard-extension-webpage-item/dist/webpage-extension.min.js"></script>
```

3. Handle the Web Dashboard's [BeforeRender](https://documentation.devexpress.com/#Dashboard/DevExpressDashboardWebScriptsASPxClientDashboard_BeforeRendertopic) event to perform client-side customization of the Web Dashboard control before the control and its elements have been rendered.
```xml
<dx:ASPxDashboard ID="ASPxDashboard1" runat="server" DashboardStorageFolder="~/App_Data">
  <ClientSideEvents BeforeRender="onBeforeRender" />
</dx:ASPxDashboard>
```

4. Register the custom item extension to add the Online Map to the Web Dashboard.

```xml
<script type="text/javascript">
  function onBeforeRender(sender) {
    var dashboardControl = sender.GetDashboardControl();
    dashboardControl.registerExtension(new CustomItems.OnlineMapItemExtension(dashboardControl));
  }
</script>
```

Note that Map JavaScript API applications require an authentication key of a certain provider. Use the dxMap's [key](https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/key/) attribute to provide authentication keys.

For more information on authentication keys, see the required map provider documentation (e.g., [Google](https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en) or [Bing](https://msdn.microsoft.com/en-us/library/ff428642.aspx)).


## Settings
The **Online Map** dashboard item supports the following settings that you can configure in the Wed Dashboard UI:
![image](https://cloud.githubusercontent.com/assets/17986517/25003702/6d23bb42-2059-11e7-8539-61912c815960.png)

* **Provider** - Specifies whether to show Google or Bing maps.
* **Type** - Specifies the map type. You can choose between RoadMap, Satellite or Hybrid.
* **Display Mode** - Specifies whether to show markers or routes.


## License
This extension is distributed under the **MIT** license (free and open-source), but can only be used with a commercial DevExpress Dashboard software product. You can [review the license terms](https://www.devexpress.com/Support/EULAs/NetComponents.xml) or [download a free trial version](https://go.devexpress.com/DevExpressDownload_UniversalTrial.aspx) of the Dashboard suite at [DevExpress.com](https://www.devexpress.com).

## Support & Feedback

* Follow [this guideline](https://www.devexpress.com/Support/Center/Question/Details/T491859) for general information about a custom extension.
* To learn how to create a custom item, see the following [KB article](https://www.devexpress.com/Support/Center/Question/Details/T491984).
* To address questions regarding the Web Dashboard and JavaScript API, use [DevExpress Support Center](https://www.devexpress.com/Support/Center).
