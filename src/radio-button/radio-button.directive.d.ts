/// <reference types="jquery" />
/// <reference types="pickadate" />
/// <reference types="materialize-css" />
import { ElementRef, OnInit, Renderer } from '@angular/core';
import { HandlePropChanges } from '../shared/index';
export declare class MzRadioButtonDirective extends HandlePropChanges implements OnInit {
    private elementRef;
    private renderer;
    id: string;
    label: string;
    withGap: boolean;
    inputElement: JQuery;
    inputContainerElement: JQuery;
    labelElement: JQuery;
    constructor(elementRef: ElementRef, renderer: Renderer);
    ngOnInit(): void;
    initHandlers(): void;
    initElements(): void;
    createLabelElement(): JQuery<HTMLElement>;
    handleProperties(): void;
    handleLabel(): void;
    handleWithGap(): void;
}
