import { AfterViewInit, ElementRef } from '@angular/core';
export declare class MzFeatureDiscoveryComponent implements AfterViewInit {
    private elementRef;
    targetClass: boolean;
    targetId: string;
    private target;
    constructor(elementRef: ElementRef);
    ngAfterViewInit(): void;
    close(): void;
    open(): void;
}
