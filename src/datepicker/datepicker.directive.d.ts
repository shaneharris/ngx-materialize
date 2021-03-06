/// <reference types="pickadate" />
/// <reference types="materialize-css" />
/// <reference types="jquery" />
import { ChangeDetectorRef, ElementRef, OnDestroy, OnInit, Renderer } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { HandlePropChanges } from '../shared/index';
export declare class MzDatepickerDirective extends HandlePropChanges implements OnInit, OnDestroy {
    private ngControl;
    private changeDetectorRef;
    private elementRef;
    private renderer;
    true: any;
    id: string;
    placeholder: string;
    label: string;
    options: Pickadate.DateOptions;
    inputElement: JQuery;
    inputContainerElement: JQuery;
    inputValueSubscription: Subscription;
    isInitRound: boolean;
    labelElement: JQuery;
    stopChangePropagation: boolean;
    readonly format: string;
    readonly formatSubmit: string;
    readonly ngControlValue: string;
    readonly picker: Pickadate.DatePicker;
    constructor(ngControl: NgControl, changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, renderer: Renderer);
    ngOnInit(): void;
    ngOnDestroy(): void;
    initHandlers(): void;
    initElements(): void;
    initDatepicker(): void;
    initInputSubscription(): void;
    createLabelElement(): JQuery<HTMLElement>;
    handleProperties(): void;
    handleLabel(): void;
    handleOptions(): void;
    handlePlaceholder(): void;
    setLabelActive(): void;
}
