import { AfterViewInit, ElementRef, Renderer } from '@angular/core';
import { HandlePropChanges } from '../shared/index';
export declare class MzIconMdiDirective extends HandlePropChanges implements AfterViewInit {
    private elementRef;
    private renderer;
    align: string;
    flip: string;
    icon: string;
    rotate: string;
    size: string;
    constructor(elementRef: ElementRef, renderer: Renderer);
    ngAfterViewInit(): void;
    initHandlers(): void;
    initMaterialize(): void;
    handleAlign(previousValue?: string): void;
    handleFlip(previousValue?: string): void;
    handleIcon(previousValue?: string): void;
    handleRotate(previousValue?: string): void;
    handleSize(previousValue?: string): void;
}
