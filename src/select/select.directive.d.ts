/// <reference types="jquery" />
/// <reference types="pickadate" />
/// <reference types="materialize-css" />
import { ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy, OnInit, Renderer } from '@angular/core';
import { HandlePropChanges } from '../shared';
export declare class MzSelectDirective extends HandlePropChanges implements OnInit, OnDestroy {
    private elementRef;
    changeDetectorRef: ChangeDetectorRef;
    renderer: Renderer;
    id: string;
    disabled: boolean;
    placeholder: string;
    label: string;
    filledIn: boolean;
    update: EventEmitter<{}>;
    checkboxElements: JQuery;
    labelElement: JQuery;
    selectElement: JQuery;
    selectContainerElement: JQuery;
    readonly inputElement: JQuery;
    mutationObserver: MutationObserver;
    suspend: boolean;
    constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, renderer: Renderer);
    ngOnInit(): void;
    ngOnDestroy(): void;
    initHandlers(): void;
    initElements(): void;
    /**
     * Need to be done after material_select has been invoked or else the multi-select
     * options are not yet in the DOM as it loops on rendered options
     */
    initFilledIn(): void;
    initMaterialSelect(): void;
    /**
     * Trigger the native change event from select element instead of the JQuery.
     * An issue on Github is open about this problem : https://github.com/Dogfalo/materialize/issues/2843
     * This method should be removed when this issue is revolved.
     */
    initOnChange(): void;
    handleDOMEvents(): void;
    createLabelElement(): JQuery<HTMLElement>;
    handleProperties(): void;
    initSelectedOption(): void;
    handleDisabled(): void;
    handleLabel(): void;
    handleFilledIn(): void;
    handlePlaceholder(): void;
    listenOptionChanges(): void;
    updateMaterialSelect(): void;
}
