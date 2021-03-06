import { AfterViewInit, ElementRef, Renderer } from '@angular/core';
export declare class MzParallaxComponent implements AfterViewInit {
    renderer: Renderer;
    height: number;
    parallax: ElementRef;
    parallaxContainer: ElementRef;
    constructor(renderer: Renderer);
    ngAfterViewInit(): void;
}
