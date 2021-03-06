import { AfterViewInit, ChangeDetectorRef, ElementRef } from '@angular/core';
export declare class MzCardComponent implements AfterViewInit {
    private changeDetectorRef;
    true: any;
    horizontal: boolean;
    hoverable: boolean;
    cardAction: ElementRef;
    cardImage: ElementRef;
    cardTitle: ElementRef;
    hasCardAction: boolean;
    hasCardImage: boolean;
    hasCardImageTitle: boolean;
    hasCardTitle: boolean;
    constructor(changeDetectorRef: ChangeDetectorRef);
    ngAfterViewInit(): void;
    private hasActionTagAndNotEmpty();
    private hasImageTagAndNotEmpty();
    private hasImageTitleTagAndNotEmpty();
    private hasTitleTagAndNotEmpty();
    private isElementDisplayed(element);
}
export declare class MzCardImageDirective {
}
export declare class MzCardImageTitleDirective {
}
export declare class MzCardTitleDirective {
}
export declare class MzCardContentDirective {
}
export declare class MzCardActionDirective {
}
