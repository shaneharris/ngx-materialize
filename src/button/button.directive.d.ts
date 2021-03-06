import { ElementRef, OnInit, Renderer } from '@angular/core';
import { HandlePropChanges } from '../shared/index';
export declare class MzButtonDirective extends HandlePropChanges implements OnInit {
    private elementRef;
    private renderer;
    disabled: boolean;
    flat: boolean;
    float: boolean;
    large: boolean;
    noWaves: boolean;
    constructor(elementRef: ElementRef, renderer: Renderer);
    ngOnInit(): void;
    initHandlers(): void;
    initMaterialize(): void;
    handleDisabled(): void;
    handleFlat(): void;
    handleFloat(): void;
    handleLarge(): void;
    handleNoWaves(): void;
}
