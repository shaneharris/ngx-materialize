/// <reference types="materialize-css" />
/// <reference types="jquery" />
/// <reference types="pickadate" />
import { AfterViewInit, ElementRef, EventEmitter, OnInit, Renderer } from '@angular/core';
import { HandlePropChanges } from '../shared/index';
export declare class MzModalComponent extends HandlePropChanges implements OnInit, AfterViewInit {
    renderer: Renderer;
    bottomSheet: boolean;
    fixedFooter: boolean;
    fullscreen: boolean;
    options: Materialize.ModalOptions;
    close: EventEmitter<void>;
    modalElementRef: ElementRef;
    modalElement: JQuery;
    constructor(renderer: Renderer);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    initElements(): void;
    initHandlers(): void;
    initModal(): void;
    handleProperties(): void;
    handleOptions(): void;
    openModal(): void;
    closeModal(): void;
}
export declare class MzModalHeaderDirective {
}
export declare class MzModalContentDirective {
}
export declare class MzModalFooterDirective {
}
