/// <reference types="jquery" />
/// <reference types="pickadate" />
/// <reference types="materialize-css" />
import { ChangeDetectorRef, ElementRef, NgZone, OnDestroy, OnInit, Renderer } from '@angular/core';
import { NgControl } from '@angular/forms';
import { HandlePropChanges } from '../shared/index';
export declare class MzTimepickerDirective extends HandlePropChanges implements OnInit, OnDestroy {
    private ngControl;
    private changeDetectorRef;
    private elementRef;
    private renderer;
    private zone;
    true: any;
    id: string;
    placeholder: string;
    label: string;
    options: any;
    inputElement: JQuery<HTMLInputElement>;
    inputContainerElement: JQuery<HTMLElement>;
    labelElement: JQuery<HTMLLabelElement>;
    stopChangePropagation: boolean;
    readonly clockpicker: JQuery<HTMLElement>;
    constructor(ngControl: NgControl, changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, renderer: Renderer, zone: NgZone);
    ngOnInit(): void;
    ngOnDestroy(): void;
    initHandlers(): void;
    initElements(): void;
    initTimepicker(): void;
    createLabelElement(): JQuery<HTMLElement>;
    handleProperties(): void;
    handleLabel(): void;
    handlePlaceholder(): void;
    setLabelActive(): void;
}
