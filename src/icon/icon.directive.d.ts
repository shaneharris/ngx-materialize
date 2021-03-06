import { AfterViewInit, ElementRef, Renderer } from '@angular/core';
import { HandlePropChanges } from '../shared/index';
export declare class MzIconDirective extends HandlePropChanges implements AfterViewInit {
    private elementRef;
    private renderer;
    align: string;
    icon: string;
    size: string;
    constructor(elementRef: ElementRef, renderer: Renderer);
    ngAfterViewInit(): void;
    initHandlers(): void;
    initMaterialize(): void;
    handleAlign(previousValue?: string): void;
    handleIcon(): void;
    handleSize(previousValue?: string): void;
}
