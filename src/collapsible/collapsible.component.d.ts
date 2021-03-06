import { AfterViewInit, ElementRef, OnDestroy, QueryList, Renderer } from '@angular/core';
import { MzCollapsibleItemComponent } from './collapsible-item/collapsible-item.component';
export declare class MzCollapsibleComponent implements AfterViewInit, OnDestroy {
    renderer: Renderer;
    mode: string;
    onClose: Function;
    onOpen: Function;
    popout: boolean;
    collapsible: ElementRef;
    items: QueryList<MzCollapsibleItemComponent>;
    constructor(renderer: Renderer);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    close(collapsibleItemIndex: number): void;
    initCollapsible(): void;
    handleDataCollapsible(): void;
    open(collapsibleItemIndex: number): void;
}
