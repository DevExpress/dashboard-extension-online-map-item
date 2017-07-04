The **Online Map** extension is a [custom dashboard item](https://www.devexpress.com/Support/Center/Question/Details/T491984) that allows you to place callouts on Google or Bing maps using geographical coordinates.

This custom item supports the [Master-Filtering](https://documentation.devexpress.com/#Dashboard/CustomDocument117060) feature.


## Installation

1. Download the latest version of scripts [here](https://github.com/DevExpress/dashboard-extension-online-map-item/releases).

2. Add the *dist* folder in your project.

3. Attach the download script to the project inside the `<body>` section before the end tag onto the page containing Web Dashboard.
```xml
<body>
    <!-- ... -->
    <script src="/dist/online-map-extension.min.js"></script>
</body>
```

4. Handle the Web Dashboard's [BeforeRender](https://documentation.devexpress.com/#Dashboard/DevExpressDashboardWebScriptsASPxClientDashboard_BeforeRendertopic) event to perform client-side customization of the Web Dashboard control before the control and its elements have been rendered.
```xml
<!-- For ASP.NET Web Forms -->
<dx:ASPxDashboard ID="ASPxDashboard1" runat="server" DashboardStorageFolder="~/App_Data/Dashboards">
  <ClientSideEvents BeforeRender="onBeforeRender" />
</dx:ASPxDashboard>
```
```C#
@* For ASP.NET MVC *@
@Html.DevExpress().Dashboard(settings => {
    settings.Name = "Dashboard";
    settings.ClientSideEvents.BeforeRender = "onBeforeRender";
}).GetHtml()
```

5. Register the custom item extension to add the Online Map to the Web Dashboard.

```javascript
function onBeforeRender(sender) {
  var dashboardControl = sender.GetDashboardControl();
  dashboardControl.registerExtension(new CustomItems.OnlineMapItemExtension(dashboardControl));
}
</script>
```

Note that Map JavaScript API applications require an authentication key of a certain provider. Use the dxMap's [key](https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/key/) attribute to provide authentication keys.

For more information on authentication keys, see the required map provider documentation (e.g., [Google](https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en) or [Bing](https://msdn.microsoft.com/en-us/library/ff428642.aspx)).


## Settings
The **Online Map** dashboard item supports the following settings that you can configure in the Web Dashboard UI:
![image](https://cloud.githubusercontent.com/assets/17986517/25003702/6d23bb42-2059-11e7-8539-61912c815960.png)

* **Provider** - Specifies whether to show Google or Bing maps.
* **Type** - Specifies the map type. You can choose between RoadMap, Satellite or Hybrid.
* **Display Mode** - Specifies whether to show markers or routes.


## Development 

You can use this extension code as a base for your own [dashboard item extension](https://documentation.devexpress.com/#Dashboard/CustomDocument117546) development. 

Before you start, we advise you to [fork](https://help.github.com/articles/fork-a-repo/) this repository and work with your own copy.

1. Clone this extension to get a local copy of the repository.
```Batchfile
git clone https://github.com/DevExpress/dashboard-extension-online-map-item.git
cd dashboard-extension-online-map-item
```

2. In this extension we use the [Node.js](https://nodejs.org/en/about/) toolset. Use the command below to install all modules listed as dependencies in the extension's **package.json** file.
```Batchfile
npm install
```

3. Then install [Gulp](http://gulpjs.com) to build the solution. You can install it globally...
```Batchfile
npm install -g gulp
gulp build
```

... or use a local Gulp version.
```Batchfile
.\node_modules\.bin\gulp build
```

You can find the resulting files at ```...\dashboard-extension-online-map-item\dist```:
**online-map-extension.js** and **online-map-extension.min.js**.

## License
This extension is distributed under the **MIT** license (free and open-source), but can only be used with a commercial DevExpress Dashboard software product. You can [review the license terms](https://www.devexpress.com/Support/EULAs/NetComponents.xml) or [download a free trial version](https://go.devexpress.com/DevExpressDownload_UniversalTrial.aspx) of the Dashboard suite at [DevExpress.com](https://www.devexpress.com).

## Support & Feedback

* Refer to [this section](https://documentation.devexpress.com/#Dashboard/CustomDocument117232) for general information about client-side extensions.
* To learn how to create a custom item, see the following [KB article](https://www.devexpress.com/Support/Center/Question/Details/T491984).
* To address questions regarding the Web Dashboard and JavaScript API, use [DevExpress Support Center](https://www.devexpress.com/Support/Center).
