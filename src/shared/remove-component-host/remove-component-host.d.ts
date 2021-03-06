import { AfterViewInit, ElementRef, OnDestroy } from '@angular/core';
export declare abstract class MzRemoveComponentHost implements AfterViewInit, OnDestroy {
    elementRef: ElementRef;
    private childrenElement;
    private parentElement;
    constructor(elementRef: ElementRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
