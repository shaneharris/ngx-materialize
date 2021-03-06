/// <reference types="jquery" />
/// <reference types="pickadate" />
/// <reference types="materialize-css" />
import { AfterViewInit, ElementRef, Renderer } from '@angular/core';
import { HandlePropChanges } from '../shared/index';
export declare class MzDropdownComponent extends HandlePropChanges implements AfterViewInit {
    private elementRef;
    private renderer;
    align: string;
    belowOrigin: boolean;
    constrainWidth: boolean;
    dropdownButtonId: string;
    gutter: number;
    hover: boolean;
    id: string;
    inDuration: number;
    outDuration: number;
    stopPropagation: boolean;
    dropdownButtonElement: JQuery;
    constructor(elementRef: ElementRef, renderer: Renderer);
    ngAfterViewInit(): void;
    close(): void;
    initDropdownButtonElement(): void;
    initHandlers(): void;
    handleDataActivates(): void;
    handleDropdown(): void;
    handleProperties(): void;
    open(): void;
    validateProperties(): void;
}
