/// <reference path="../knockout/index.d.ts" />
/// <reference path="../devextreme/index.d.ts" />

declare module DevExpress.JS.Localization {
    var addCultureInfo: (messages: Object) => void;
}

declare module DevExpress.JS.Dashboard.Metadata {
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


declare module DevExpress.JS.Utils {
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

declare module DevExpress.JS.Dashboard {
    interface ICustomItemProperty extends Utils.ISerializationInfo {
        sectionName?: string;
    }
}

declare module DevExpress.JS.Dashboard {
    interface ICustomItemModel {
        componentName: KnockoutObservable<string>;
        customItemType: KnockoutObservable<string>;
        isMasterFilter: KnockoutComputed<boolean>;
        isDrillDownEnabled: KnockoutComputed<boolean>;
        actualSelectionValues: KnockoutObservable<Array<Array<any>>>;
        iterateData(action: (item: ICustomDataRow) => any): void;
    }

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
        createViewerItem: (item: ICustomItemModel, $element: JQuery, content: any, args: {
            viewerItem: DevExpress.JS.Dashboard.customViewerItem;
        }) => void;
    }

    interface ICustomDataRow {
        getColor: (property: string, index?: number) => any;
        getValue: (property: string, index?: number) => any;
        getUniqueValue: (property: string, index?: number) => any;
        getDisplayText: (property: string, index?: number) => any;
    }
}


declare module DevExpress.JS.Dashboard {
    type DataType = 'Text' | 'DateTime' | 'Bool' | 'Integer' | 'Float' | 'Double' | 'Decimal';
    type DataItemType = 'Measure' | 'Dimension';
    interface ICustomItemBinding {
        propertyName: string;
        dataItemType: DataItemType;
        slice?: string;
        array: boolean;
        interactivityEnabled?: boolean;
        coloringEnabled?: boolean;
        constraints?: {
            allowedTypes: Array<DataType>;
        };
        displayName: string;
        placeholder: string;
        configurePlaceholder: string;
    }
    interface ICustomItemBindingValue {
        displayName: () => string;
        uniqueName: () => string;
    }
}




declare module DevExpress.dashboard.viewerItems {
    abstract class baseItem {
        _locked: boolean;
        _isFixedHeight: boolean;
        customHoverEnabled: boolean;
        $container: any;
        exportToMenu: any;
        selectElementMenu: any;
        toolbarIsVisible: any;
        _clearMasterFilterHandler: any;
        _clearSelectionHandler: any;
        _toggleSelectionModeHandler: any;
        _drillUpHandler: any;
        private _itemMultiselectionEnabled;
        $preloaderContainer: any;
        selected: JQueryCallback;
        clearMasterFilter: JQueryCallback;
        drillUp: JQueryCallback;
        contentElementSelection: JQueryCallback;
        expandValue: JQueryCallback;
        clientStateUpdate: JQueryCallback;
        dataRequest: JQueryCallback;
        itemClick: JQueryCallback;
        itemHover: JQueryCallback;
        itemSelectionChanged: JQueryCallback;
        itemWidgetCreated: JQueryCallback;
        itemWidgetUpdating: JQueryCallback;
        itemWidgetUpdated: JQueryCallback;
        interactivityController: any;
        customSelectionMode: any;
        customTargetAxes: any[];
        customDefaultSelectedValues: any[];
        options: any;
        dataController: any;
        customSelectedTuples: any;
        $header: JQuery;
        $contentRoot: JQuery;
        $toolbarDiv: JQuery;
        $preloader: JQuery;
        $shieldingElement: JQuery;
        $footer: JQuery;
        constructor($container: any, options: any);
        initializeData(newOptions: any): void;
        initialDataRequest(): void;
        isMultiselectionEnabled(): any;
        clearSelection(): void;
        selectTuple(tuple: any, state: any): void;
        setSelection(values: any): void;
        _applySelection(): void;
        _isEncodeHtml(): any;
        _isSupportDataAwareExport(): any;
        _isLocked(): boolean;
        _lock(): void;
        _unlock(): void;
        _getCustomSelectionMode(): any;
        _setCustomSelectionMode(value: any): void;
        _getCustomHoverEnabled(): boolean;
        _setCustomHoverEnabled(value: any): void;
        _getCustomTargetAxes(): any[];
        _setCustomTargetAxes(value: any): void;
        _getCustomDefaultSelectedValues(): any[];
        _setCustomDefaultSelectedValues(value: any): void;
        _getTargetAxes(): any;
        getSelectedTuples(): any;
        updateItem(options: any): void;
        _changeTuple(tuple: any): any[];
        onSelectionChanged(tuples: any): void;
        _mustSelectingFired(values: any): boolean;
        _patchTroughDrillDownValues(values: any): any[];
        _deductDrillDownValues(values: any): any;
        _getSelectionCallbackType(values: any, singleSelection: any): any;
        _selectTuples(tuplesToSelect: any, unaffectedTuples: any, isSelect: any): void;
        selectTuples(tuples: any, updateTupleDelegate: any, state: any): void;
        _renderFooter(): any;
        _updateFooter(): void;
        abstract renderContent($element: JQuery, changeExisting: boolean, afterRenderCallback?: any): any;
        renderPartialContent(): void;
        updateContentState(): void;
        getInfo(): {
            name: any;
            headerHeight: number;
            position: any;
            width: any;
            height: any;
            virtualSize: any;
            scroll: any;
        };
        getCaption(): any;
        hasCaption(options?: any): any;
        hasGroup(): any;
        isPaneEmpty(): any;
        render($container?: any): void;
        updateContent(newOptions: any): void;
        updateClientState(clientState: any): void;
        updateState(state: any): void;
        width(width?: any): any;
        height(height?: any): any;
        setSize(width: any, height: any): void;
        getConstraints(includeBorders: any): any;
        getOffset(): {
            width: number;
            height: number;
        };
        updateInteractivityOptions(): void;
        _updateClientStateInternal(clientState: any): void;
        _changeContent(updateExisting: any): void;
        _renderHeader($container?: any): JQuery;
        _calcHeaderAndFooterHeight(forceNonRendered: any): number;
        _updateHeader(): void;
        _renderFloatingToolbar($container: any): void;
        _ensureToolbarIsRendered(): JQuery;
        _ensureInternalToolbarIsRendered($internalToolbarDiv: any): void;
        _updateToolbar(): void;
        _getMinContentHeight(): any;
        _generateInnerBorderClasses($element?: any): any[];
        _generateOuterBorderClasses($element?: any): any[];
        _isBorderRequired(): any;
        _resize(oldSize?: any, newSize?: any): void;
        _updateContentSize(): void;
        _allocatePreloader(): void;
        _getPreloaderPosition(containerPosition: any): {
            left: number;
            top: any;
        };
        _getButtonOffset(useToolbarOffset: any): {
            left: any;
            top: any;
        };
        _getAnimationOptions(): {
            enabled: boolean;
            duration: number;
        };
        _getContainerPosition(): {
            left: any;
            top: any;
            width: any;
            height: any;
            offsetX: number;
            offsetY: number;
        };
        _getName(): any;
        _getSelectedValues(): any;
        _getClearMasterFilterHandler(): any;
        _getClearSelectionHandler(): any;
        _getElementInteractionValue(element: any, viewModel: any): void;
        _getToggleSelectionModeHandler(): any;
        _getDrillUpHandler(): any;
        _setSelectedValues(values: any): any;
        _raiseItemClick(element: any): void;
        _clickAction(tuple: any): void;
        _isMultiDataSupported(): boolean;
        _getDataPoint(element: any): any;
        _getWidget(): any;
        _raiseItemWidgetCreated(): void;
        _raiseItemWidgetUpdating(): void;
        _raiseItemWidgetUpdated(): void;
        _raiseItemHover(element: any, state?: any): void;
        _allowCombineSelectedValues(actionName: any): boolean;
        _onClearMasterFilter(): void;
        _onToggleSelectionMode(): void;
        _onDrillUp(): void;
        _onContentElementSelection(index: any, elementName: any): void;
        _onExpandValue(expandValueParams: any): void;
        _onClientStateUpdate(clientState: any): void;
        _onDataRequest(): void;
        _hasInternalButtons(): boolean;
        _hasDrillUpButton(): boolean;
        _hasClearMasterFilterButton(): boolean;
        _hasClearSelectionButton(): boolean;
        _hasToggleSelectionModeButton(): boolean;
        _hasTimePeriods(): boolean;
        _addTimePeriodsToToolbar($internalToolbarDiv: any): void;
        _isDrillUpEnabled(): boolean;
        _isClearMasterFilterEnabled(): boolean;
        _isClearSelectionEnabled(): boolean;
        _canPerformAction(action: any): boolean;
        _canPerformDrillDown(): boolean;
        _canPerformDrillUp(): boolean;
        _canSetMasterFilter(): boolean;
        _canSetMultipleMasterFilter(): boolean;
        isInteractivityActionEnabled(): boolean;
        _selectionMode(): "multiple" | "none";
        _getHtml(text: any): any;
        _getAxisNames(): any;
        _getDrillDownAxisName(): any;
        _getDrillDownValues(): any;
    }
}

declare module DevExpress.JS.Dashboard {
    class customViewerItem extends DevExpress.dashboard.viewerItems.baseItem {
        model: ICustomItemModel;
        constructor(model: any, $container: any, options: any);
        contentWidth(): number;
        contentHeight(): number;
        setSize(width: any, height: any): void;
        renderContent($element: JQuery, changeExisting: boolean, afterRenderCallback?: any): void;
        clearSelection(): void;
        allowExportSingleItem(): boolean;
        getExportInfo(): any;
        getBindingValue(propertyName: string, index?: number): Array<ICustomItemBindingValue>;
        getPropertyValue(propertyName: string): any;
        subscribeProperty(propertyName: string, callback: (newValue: any) => void): void;
        getInfo(): any;
        initializeData(newOptions: any): void;
        setMasterFilter: (row: ICustomDataRow) => boolean;
        drillDown: (row: ICustomDataRow) => boolean;
        isSelected(row: ICustomDataRow): boolean;
        private _prepareRow(row);
        private _getUniqueValues(row);
    }
}



