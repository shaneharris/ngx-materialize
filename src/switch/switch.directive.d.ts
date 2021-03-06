/// <reference types="jquery" />
/// <reference types="pickadate" />
/// <reference types="materialize-css" />
import { ElementRef, OnInit, Renderer } from '@angular/core';
export declare class MzSwitchDirective implements OnInit {
    private elementRef;
    private renderer;
    off: string;
    on: string;
    switchContainerElement: JQuery;
    switchElement: JQuery;
    constructor(elementRef: ElementRef, renderer: Renderer);
    ngOnInit(): void;
    initElements(): void;
    handleInputType(): void;
}
