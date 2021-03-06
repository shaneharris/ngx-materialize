import { AfterViewInit, ChangeDetectorRef, ElementRef, Renderer } from '@angular/core';
import { MzSidenavCollapsibleHeaderComponent } from './sidenav-collapsible-header/sidenav-collapsible-header.component';
export declare class MzSidenavCollapsibleComponent implements AfterViewInit {
    changeDetectorRef: ChangeDetectorRef;
    renderer: Renderer;
    onClose: Function;
    onOpen: Function;
    collapsible: ElementRef;
    header: MzSidenavCollapsibleHeaderComponent;
    constructor(changeDetectorRef: ChangeDetectorRef, renderer: Renderer);
    ngAfterViewInit(): void;
    initCollapsible(): void;
}
export declare class MzSidenavCollapsibleContentDirective {
}
