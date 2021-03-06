/// <reference types="jquery" />
/// <reference types="pickadate" />
/// <reference types="materialize-css" />
import { ElementRef, OnDestroy, OnInit, Renderer } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { HandlePropChanges } from '../shared/index';
export declare class MzTextareaDirective extends HandlePropChanges implements OnInit, OnDestroy {
    private ngControl;
    private elementRef;
    private renderer;
    id: string;
    placeholder: string;
    label: string;
    length: number;
    textareaElement: JQuery;
    textareaContainerElement: JQuery;
    textareaValueSubscription: Subscription;
    labelElement: JQuery;
    constructor(ngControl: NgControl, elementRef: ElementRef, renderer: Renderer);
    ngOnInit(): void;
    ngOnDestroy(): void;
    initHandlers(): void;
    initElements(): void;
    initTextarea(): void;
    initTextareaSubscription(): void;
    createLabelElement(): JQuery<HTMLElement>;
    handleProperties(): void;
    handleLabel(): void;
    handleLength(): void;
    handlePlaceholder(): void;
    setCharacterCount(): void;
    setLabelActive(): void;
    removeCharacterCount(): void;
    removeValidationClasses(): void;
}
