/// <reference types="jquery" />
/// <reference types="pickadate" />
/// <reference types="materialize-css" />
import { ElementRef, OnInit, Renderer2 } from '@angular/core';
export declare class MzCollectionComponent implements OnInit {
    private elementRef;
    private renderer;
    collectionElement: JQuery;
    collectionHeaderElement: JQuery;
    constructor(elementRef: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    initElements(): void;
    initCollectionHeader(): void;
}
