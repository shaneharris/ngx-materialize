import { ElementRef, OnInit, Renderer } from '@angular/core';
export declare class MzInputPrefixDirective implements OnInit {
    private elementRef;
    private renderer;
    constructor(elementRef: ElementRef, renderer: Renderer);
    ngOnInit(): void;
}
