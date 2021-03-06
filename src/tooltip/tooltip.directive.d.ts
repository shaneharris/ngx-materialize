/// <reference types="jquery" />
/// <reference types="pickadate" />
/// <reference types="materialize-css" />
import { AfterViewInit, ElementRef, OnChanges, OnDestroy, OnInit, Renderer, SimpleChanges } from '@angular/core';
export declare class MzTooltipDirective implements OnInit, AfterViewInit, OnChanges, OnDestroy {
    private elementRef;
    private renderer;
    delay: number;
    html: boolean;
    position: string;
    tooltip: string;
    targetElement: JQuery;
    constructor(elementRef: ElementRef, renderer: Renderer);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    initElements(): void;
    initTooltip(): void;
}
