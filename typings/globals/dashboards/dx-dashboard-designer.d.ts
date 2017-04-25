/// <reference path="../knockout/index.d.ts" />
/// <reference path="../devextreme/index.d.ts" />

declare module DevExpress.Localization {
    var addCultureInfo: (messages: Object) => void;
}

declare module DevExpress.Dashboard.Metadata {
    var editorTemplates: {
        text: {
            header: string;
        };
        bool: {
            header: string;
        };
        boolYesNo: {
            header: string;
        };
        boolVisibleHidden: {
            header: string;
        };
        boolDiscreteContinuous: {
            header: string;
        };
        checkBox: {
            custom: string;
        };
        list: {
            header: string;
        };
        numeric: {
            header: string;
        };
        gaugeScale: {
            header: string;
        };
        date: {
            header: string;
        };
        combobox: {
            header: string;
        };
        multiValueSelect: {
            header: string;
        };
        singleValueSelect: {
            header: string;
        };
        commonCollection: {
            custom: string;
        };
        objecteditor: {
            header: string;
            content: string;
        };
        image: {
            header: string;
        };
        textFile: {
            header: string;
        };
        mapShapeFile: {
            header: string;
        };
        mapAttributeFile: {
            header: string;
        };
        expression: {
            header: string;
        };
        objectsCollection: {
            custom: string;
        };
        cardTemplateCollection: {
            custom: string;
        };
        calculationWindowDataItems: {
            custom: string;
        };
        calculationWindowDefinition: {
            custom: string;
        };
        totals: {
            custom: string;
        };
        formatRules: {
            custom: string;
        };
        calculations: {
            custom: string;
        };
        styleSettings: {
            header: string;
        };
        ruleRanges: {
            custom: string;
        };
        ruleExpression: {
            custom: string;
        };
        calculationExpression: {
            custom: string;
        };
        containerTypeSelector: {
            custom: string;
        };
        guid: {
            header: string;
        };
        itemDataSource: {
            header: string;
        };
        itemDataMember: {
            header: string;
        };
        itemFieldChooser: {
            header: string;
        };
        itemFieldPicker: {
            header: string;
        };
        shapeFileAttributes: {
            header: string;
        };
        buttonGroup: {
            header: string;
        };
        radioGroup: {
            header: string;
        };
        iconTypeSelector: {
            header: string;
        };
        colorSchemeTreeViewEditor: {
            header: string;
        };
        dateSample: {
            header: string;
        };
        flowModeSettings: {
            header: string;
        };
        currency: {
            header: string;
        };
    };
}


declare module DevExpress.Utils {
    interface ISerializationInfo {
        propertyName: string;
        modelName?: string;
        defaultVal?: any;
        type?: any;
        info?: ISerializationsInfo;
        from?: (val: any, serializer?: any) => any;
        toJsonObject?: any;
        array?: boolean;
        link?: boolean;
        editor?: {
            header?: string;
            content?: string;
            editorType?: any;
        };
        displayName?: string;
        values?: {
            [key: string]: string;
        };
        valuesArray?: Array<IDisplayedValue>;
        initialize?: (viewModel: any, serilizer?: any) => void;
        validationRules?: Array<any>;
        editorOptions?: any;
        localizationId?: string;
        visible?: any;
        disabled?: any;
        valueStore?: any;
    }
    interface ISerializationsInfo extends Array<ISerializationInfo> {
    }

    interface IDisplayedValue {
        value: any;
        displayValue: string;
    }
}

declare module DevExpress.Dashboard {
    interface ICustomItemProperty extends Utils.ISerializationInfo {
        sectionName?: string;
    }
}

declare module DevExpress.Dashboard {
    interface IExtensionRegistrator {
        register(dashboardControl: any): any;
    }
    
    type KeyEventType = "keyup" | "keydown";
    interface IExtension {
        name: string;
        start?(): void;
        stop?(): void;
        processKeyEvent?(keyEventType: KeyEventType, eventArgs: JQueryKeyEventObject): boolean;
    }

    interface ICustomItemExtension extends IExtension {
        metaData: any;
        createViewerItem: (item: any, $element: JQuery, content: any) => DevExpress.Dashboard.customViewerItem;
    }

    interface ICustomDataRow {
        getColor: (property: string, index?: number) => any;
        getValue: (property: string, index?: number) => any;
        getUniqueValue: (property: string, index?: number) => any;
        getDisplayText: (property: string, index?: number) => any;
    }
}


declare module DevExpress.Dashboard {
    type DataType = 'Text' | 'DateTime' | 'Bool' | 'Integer' | 'Float' | 'Double' | 'Decimal';
    type DataItemType = 'Measure' | 'Dimension';
    export interface IBindingProperty {
        propertyName: string;
        dataItemType: DataItemType;
        emptyPlaceholder: string;
        selectedPlaceholder?: string;
    }
    export interface ICustomItemBinding extends IBindingProperty {
        displayName: string;
        array: boolean;
        enableInteractivity?: boolean;
        enableColoring?: boolean;
        constraints?: {
            allowedTypes: Array<DataType>
        }
        slice?: string;
    }
    interface ICustomItemBindingValue {
        displayName: () => string;
        uniqueName: () => string;
    }
}


declare module DevExpress.dashboard.viewerItems {
    abstract class baseItem {
        constructor($container: any, options: any);
        getName(): string;   
        setSize(width: any, height: any): void;
        renderContent($element: JQuery, changeExisting: boolean, afterRenderCallback?: any): void;
        clearSelection(): void;     
    }
}

declare module DevExpress.Dashboard {
    class customViewerItem extends DevExpress.dashboard.viewerItems.baseItem {
        constructor(model: any, $container: any, options: any);

        iterateData: (action: (item: ICustomDataRow) => any) => void;

        getBindingValue(propertyName: string, index?: number): Array<ICustomItemBindingValue>;
        getPropertyValue(propertyName: string): any;
        subscribe(propertyName: string, callback: (newValue: any) => void): void;

        isSelected(row: ICustomDataRow): boolean;
        canMasterFilter: (row?: ICustomDataRow) => boolean;
        canDrillDown: (row?: ICustomDataRow) => boolean;
        setMasterFilter: (row: ICustomDataRow) => boolean;
        drillDown: (row: ICustomDataRow) => boolean;

        allowExportSingleItem(): boolean;
        getExportInfo(): any;

        contentWidth(): number;
        contentHeight(): number;
    }
}



