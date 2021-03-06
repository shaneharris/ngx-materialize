/// <reference types="jquery" />
/// <reference types="pickadate" />
/// <reference types="materialize-css" />
import { ElementRef, OnDestroy, OnInit, Renderer } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { HandlePropChanges } from '../shared';
export declare class MzInputDirective extends HandlePropChanges implements OnInit, OnDestroy {
    private ngControl;
    private elementRef;
    private renderer;
    id: string;
    placeholder: string;
    autocomplete: {
        data: {
            [key: string]: string;
        };
    };
    dataError: string;
    dataSuccess: string;
    label: string;
    length: number;
    validate: boolean;
    inputElement: JQuery;
    inputContainerElement: JQuery;
    inputValueSubscription: Subscription;
    labelElement: JQuery;
    constructor(ngControl: NgControl, elementRef: ElementRef, renderer: Renderer);
    ngOnInit(): void;
    ngOnDestroy(): void;
    initHandlers(): void;
    initElements(): void;
    initInputSubscription(): void;
    createLabelElement(): JQuery<HTMLElement>;
    handleProperties(): void;
    handleAutocomplete(): void;
    handleDataError(): void;
    handleDataSuccess(): void;
    handleLabel(): void;
    handleLength(): void;
    handlePlaceholder(): void;
    handleValidate(): void;
    setCharacterCount(): void;
    setLabelActive(): void;
    removeCharacterCount(): void;
    removeValidationClasses(): void;
}
