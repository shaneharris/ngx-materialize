import { ElementRef, EventEmitter } from '@angular/core';
export declare class MzChipComponent {
    private elementRef;
    chipClass: boolean;
    close: boolean;
    delete: EventEmitter<string>;
    readonly chipElement: HTMLElement;
    constructor(elementRef: ElementRef);
    onDelete(): void;
}
