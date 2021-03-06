/// <reference types="jquery" />
/// <reference types="pickadate" />
/// <reference types="materialize-css" />
import { ElementRef, OnInit, Renderer } from '@angular/core';
import { HandlePropChanges } from '../shared/index';
export declare class MzCheckboxDirective extends HandlePropChanges implements OnInit {
    private elementRef;
    private renderer;
    id: string;
    filledIn: boolean;
    label: string;
    checkboxElement: JQuery;
    checkboxContainerElement: JQuery;
    labelElement: JQuery;
    constructor(elementRef: ElementRef, renderer: Renderer);
    ngOnInit(): void;
    initHandlers(): void;
    initElements(): void;
    createLabelElement(): JQuery<HTMLElement>;
    handleProperties(): void;
    handleLabel(): void;
    handleFilledIn(): void;
}
