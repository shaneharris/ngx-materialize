import { ElementRef, OnInit, Renderer } from '@angular/core';
export declare class MzTextareaPrefixDirective implements OnInit {
    private elementRef;
    private renderer;
    constructor(elementRef: ElementRef, renderer: Renderer);
    ngOnInit(): void;
}
