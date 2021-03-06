/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectorRef, Component, Directive, ElementRef, HostBinding, Input, ViewChild, } from '@angular/core';
export class MzCardComponent {
    /**
     * @param {?} changeDetectorRef
     */
    constructor(changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
        this.hasCardAction = true;
        this.hasCardImage = true;
        this.hasCardImageTitle = true;
        this.hasCardTitle = true;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.hasCardTitle = this.hasTitleTagAndNotEmpty();
        this.hasCardAction = this.hasActionTagAndNotEmpty();
        this.hasCardImage = this.hasImageTagAndNotEmpty();
        this.hasCardImageTitle = this.hasImageTitleTagAndNotEmpty();
        this.changeDetectorRef.detectChanges();
    }
    /**
     * @return {?}
     */
    hasActionTagAndNotEmpty() {
        const /** @type {?} */ cardActionElement = this.cardAction.nativeElement.querySelector('mz-card-action');
        return this.isElementDisplayed(cardActionElement);
    }
    /**
     * @return {?}
     */
    hasImageTagAndNotEmpty() {
        const /** @type {?} */ cardImagelement = this.cardImage.nativeElement.querySelector('mz-card-image');
        return this.isElementDisplayed(cardImagelement);
    }
    /**
     * @return {?}
     */
    hasImageTitleTagAndNotEmpty() {
        const /** @type {?} */ cardImageTitleElement = this.cardImage.nativeElement.querySelector('mz-card-image-title');
        return this.isElementDisplayed(cardImageTitleElement);
    }
    /**
     * @return {?}
     */
    hasTitleTagAndNotEmpty() {
        const /** @type {?} */ cardTitleElement = this.cardTitle ? this.cardTitle.nativeElement.querySelector('mz-card-title') : null;
        return this.isElementDisplayed(cardTitleElement);
    }
    /**
     * @param {?} element
     * @return {?}
     */
    isElementDisplayed(element) {
        return element && element.innerHTML.trim() !== '';
    }
}
MzCardComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-card',
                template: `<div #cardImage class="card-image" *ngIf="hasCardImage">
  <ng-content select="mz-card-image"></ng-content>
  <div class="card-title" *ngIf="hasCardImageTitle">
    <ng-content select="mz-card-image-title"></ng-content>
  </div>
</div>

<div [class.card-stacked]="horizontal">
  <div class="card-content">
    <div #cardTitle class="card-title" *ngIf="hasCardTitle">
      <ng-content select="mz-card-title"></ng-content>
    </div>

    <ng-content select="mz-card-content"></ng-content>
  </div>

  <div #cardAction class="card-action" *ngIf="hasCardAction">
    <ng-content select="mz-card-action"></ng-content>
  </div>
</div>`,
                styles: [`:host{display:block}`],
            },] },
];
/** @nocollapse */
MzCardComponent.ctorParameters = () => [
    { type: ChangeDetectorRef, },
];
MzCardComponent.propDecorators = {
    "true": [{ type: HostBinding, args: ['class.card',] },],
    "horizontal": [{ type: HostBinding, args: ['class.horizontal',] }, { type: Input },],
    "hoverable": [{ type: HostBinding, args: ['class.hoverable',] }, { type: Input },],
    "cardAction": [{ type: ViewChild, args: ['cardAction',] },],
    "cardImage": [{ type: ViewChild, args: ['cardImage',] },],
    "cardTitle": [{ type: ViewChild, args: ['cardTitle',] },],
};
function MzCardComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MzCardComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MzCardComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    MzCardComponent.propDecorators;
    /** @type {?} */
    MzCardComponent.prototype.true;
    /** @type {?} */
    MzCardComponent.prototype.horizontal;
    /** @type {?} */
    MzCardComponent.prototype.hoverable;
    /** @type {?} */
    MzCardComponent.prototype.cardAction;
    /** @type {?} */
    MzCardComponent.prototype.cardImage;
    /** @type {?} */
    MzCardComponent.prototype.cardTitle;
    /** @type {?} */
    MzCardComponent.prototype.hasCardAction;
    /** @type {?} */
    MzCardComponent.prototype.hasCardImage;
    /** @type {?} */
    MzCardComponent.prototype.hasCardImageTitle;
    /** @type {?} */
    MzCardComponent.prototype.hasCardTitle;
    /** @type {?} */
    MzCardComponent.prototype.changeDetectorRef;
}
export class MzCardImageDirective {
}
MzCardImageDirective.decorators = [
    { type: Directive, args: [{ selector: 'mz-card-image' },] },
];
function MzCardImageDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MzCardImageDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MzCardImageDirective.ctorParameters;
}
export class MzCardImageTitleDirective {
}
MzCardImageTitleDirective.decorators = [
    { type: Directive, args: [{ selector: 'mz-card-image-title' },] },
];
function MzCardImageTitleDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MzCardImageTitleDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MzCardImageTitleDirective.ctorParameters;
}
export class MzCardTitleDirective {
}
MzCardTitleDirective.decorators = [
    { type: Directive, args: [{ selector: 'mz-card-title' },] },
];
function MzCardTitleDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MzCardTitleDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MzCardTitleDirective.ctorParameters;
}
export class MzCardContentDirective {
}
MzCardContentDirective.decorators = [
    { type: Directive, args: [{ selector: 'mz-card-content' },] },
];
function MzCardContentDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MzCardContentDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MzCardContentDirective.ctorParameters;
}
export class MzCardActionDirective {
}
MzCardActionDirective.decorators = [
    { type: Directive, args: [{ selector: 'mz-card-action' },] },
];
function MzCardActionDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MzCardActionDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MzCardActionDirective.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvIiwic291cmNlcyI6WyJzcmMvY2FyZC9jYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsS0FBSyxFQUNMLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQTBCdkIsTUFBTTs7OztJQWNKLFlBQ1U7UUFBQSxzQkFBaUIsR0FBakIsaUJBQWlCOzZCQU5YLElBQUk7NEJBQ0wsSUFBSTtpQ0FDQyxJQUFJOzRCQUNULElBQUk7S0FJZjs7OztJQUVKLGVBQWU7UUFDYixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1FBQ2xELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFDcEQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztRQUNsRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLDJCQUEyQixFQUFFLENBQUM7UUFDNUQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO0tBQ3hDOzs7O0lBRU8sdUJBQXVCO1FBQzdCLHVCQUFNLGlCQUFpQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3hGLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsQ0FBQzs7Ozs7SUFHNUMsc0JBQXNCO1FBQzVCLHVCQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDcEYsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsQ0FBQzs7Ozs7SUFHMUMsMkJBQTJCO1FBQ2pDLHVCQUFNLHFCQUFxQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ2hHLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMscUJBQXFCLENBQUMsQ0FBQzs7Ozs7SUFHaEQsc0JBQXNCO1FBQzVCLHVCQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzdHLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzs7Ozs7O0lBRzNDLGtCQUFrQixDQUFDLE9BQW9CO1FBQzdDLE1BQU0sQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUM7Ozs7WUF2RXJELFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsU0FBUztnQkFDbkIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BbUJMO2dCQUNMLE1BQU0sRUFBRSxDQUFDLHNCQUFzQixDQUFDO2FBQ2pDOzs7O1lBaENDLGlCQUFpQjs7O3FCQWtDaEIsV0FBVyxTQUFDLFlBQVk7MkJBQ3hCLFdBQVcsU0FBQyxrQkFBa0IsY0FBRyxLQUFLOzBCQUN0QyxXQUFXLFNBQUMsaUJBQWlCLGNBQUcsS0FBSzsyQkFFckMsU0FBUyxTQUFDLFlBQVk7MEJBQ3RCLFNBQVMsU0FBQyxXQUFXOzBCQUNyQixTQUFTLFNBQUMsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnRGtCLE1BQU07OztZQUEvQyxTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFOzs7Ozs7Ozs7OztBQUNRLE1BQU07OztZQUFyRCxTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUscUJBQXFCLEVBQUU7Ozs7Ozs7Ozs7O0FBQ0osTUFBTTs7O1lBQS9DLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUU7Ozs7Ozs7Ozs7O0FBQ0ksTUFBTTs7O1lBQWpELFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRTs7Ozs7Ozs7Ozs7QUFDQyxNQUFNOzs7WUFBaEQsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBEaXJlY3RpdmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBIb3N0QmluZGluZyxcclxuICBJbnB1dCxcclxuICBWaWV3Q2hpbGQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ216LWNhcmQnLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiAjY2FyZEltYWdlIGNsYXNzPVwiY2FyZC1pbWFnZVwiICpuZ0lmPVwiaGFzQ2FyZEltYWdlXCI+XHJcbiAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibXotY2FyZC1pbWFnZVwiPjwvbmctY29udGVudD5cclxuICA8ZGl2IGNsYXNzPVwiY2FyZC10aXRsZVwiICpuZ0lmPVwiaGFzQ2FyZEltYWdlVGl0bGVcIj5cclxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm16LWNhcmQtaW1hZ2UtdGl0bGVcIj48L25nLWNvbnRlbnQ+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuPGRpdiBbY2xhc3MuY2FyZC1zdGFja2VkXT1cImhvcml6b250YWxcIj5cclxuICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XHJcbiAgICA8ZGl2ICNjYXJkVGl0bGUgY2xhc3M9XCJjYXJkLXRpdGxlXCIgKm5nSWY9XCJoYXNDYXJkVGl0bGVcIj5cclxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibXotY2FyZC10aXRsZVwiPjwvbmctY29udGVudD5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm16LWNhcmQtY29udGVudFwiPjwvbmctY29udGVudD5cclxuICA8L2Rpdj5cclxuXHJcbiAgPGRpdiAjY2FyZEFjdGlvbiBjbGFzcz1cImNhcmQtYWN0aW9uXCIgKm5nSWY9XCJoYXNDYXJkQWN0aW9uXCI+XHJcbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJtei1jYXJkLWFjdGlvblwiPjwvbmctY29udGVudD5cclxuICA8L2Rpdj5cclxuPC9kaXY+YCxcclxuICBzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTpibG9ja31gXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16Q2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuY2FyZCcpIHRydWU7XHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5ob3Jpem9udGFsJykgQElucHV0KCkgaG9yaXpvbnRhbDogYm9vbGVhbjtcclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmhvdmVyYWJsZScpIEBJbnB1dCgpIGhvdmVyYWJsZTogYm9vbGVhbjtcclxuXHJcbiAgQFZpZXdDaGlsZCgnY2FyZEFjdGlvbicpIGNhcmRBY3Rpb246IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnY2FyZEltYWdlJykgY2FyZEltYWdlOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2NhcmRUaXRsZScpIGNhcmRUaXRsZTogRWxlbWVudFJlZjtcclxuXHJcbiAgaGFzQ2FyZEFjdGlvbiA9IHRydWU7XHJcbiAgaGFzQ2FyZEltYWdlID0gdHJ1ZTtcclxuICBoYXNDYXJkSW1hZ2VUaXRsZSA9IHRydWU7XHJcbiAgaGFzQ2FyZFRpdGxlID0gdHJ1ZTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICApIHt9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMuaGFzQ2FyZFRpdGxlID0gdGhpcy5oYXNUaXRsZVRhZ0FuZE5vdEVtcHR5KCk7XHJcbiAgICB0aGlzLmhhc0NhcmRBY3Rpb24gPSB0aGlzLmhhc0FjdGlvblRhZ0FuZE5vdEVtcHR5KCk7XHJcbiAgICB0aGlzLmhhc0NhcmRJbWFnZSA9IHRoaXMuaGFzSW1hZ2VUYWdBbmROb3RFbXB0eSgpO1xyXG4gICAgdGhpcy5oYXNDYXJkSW1hZ2VUaXRsZSA9IHRoaXMuaGFzSW1hZ2VUaXRsZVRhZ0FuZE5vdEVtcHR5KCk7XHJcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFzQWN0aW9uVGFnQW5kTm90RW1wdHkoKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBjYXJkQWN0aW9uRWxlbWVudCA9IHRoaXMuY2FyZEFjdGlvbi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ216LWNhcmQtYWN0aW9uJyk7XHJcbiAgICByZXR1cm4gdGhpcy5pc0VsZW1lbnREaXNwbGF5ZWQoY2FyZEFjdGlvbkVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYXNJbWFnZVRhZ0FuZE5vdEVtcHR5KCk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgY2FyZEltYWdlbGVtZW50ID0gdGhpcy5jYXJkSW1hZ2UubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdtei1jYXJkLWltYWdlJyk7XHJcbiAgICByZXR1cm4gdGhpcy5pc0VsZW1lbnREaXNwbGF5ZWQoY2FyZEltYWdlbGVtZW50KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFzSW1hZ2VUaXRsZVRhZ0FuZE5vdEVtcHR5KCk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgY2FyZEltYWdlVGl0bGVFbGVtZW50ID0gdGhpcy5jYXJkSW1hZ2UubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdtei1jYXJkLWltYWdlLXRpdGxlJyk7XHJcbiAgICByZXR1cm4gdGhpcy5pc0VsZW1lbnREaXNwbGF5ZWQoY2FyZEltYWdlVGl0bGVFbGVtZW50KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFzVGl0bGVUYWdBbmROb3RFbXB0eSgpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IGNhcmRUaXRsZUVsZW1lbnQgPSB0aGlzLmNhcmRUaXRsZSA/IHRoaXMuY2FyZFRpdGxlLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignbXotY2FyZC10aXRsZScpIDogbnVsbDtcclxuICAgIHJldHVybiB0aGlzLmlzRWxlbWVudERpc3BsYXllZChjYXJkVGl0bGVFbGVtZW50KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNFbGVtZW50RGlzcGxheWVkKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZWxlbWVudCAmJiBlbGVtZW50LmlubmVySFRNTC50cmltKCkgIT09ICcnO1xyXG4gIH1cclxufVxyXG5cclxuLy8gRGVjbGFyZSB0aGUgdGFncyB0byBhdm9pZCBlcnJvcjogJzxtei1jYXJkLXg+JyBpcyBub3QgYSBrbm93biBlbGVtZW50XHJcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzExMjUxXHJcbi8vIHRzbGludDpkaXNhYmxlOiBkaXJlY3RpdmUtc2VsZWN0b3JcclxuXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ216LWNhcmQtaW1hZ2UnIH0pIGV4cG9ydCBjbGFzcyBNekNhcmRJbWFnZURpcmVjdGl2ZSB7IH1cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnbXotY2FyZC1pbWFnZS10aXRsZScgfSkgZXhwb3J0IGNsYXNzIE16Q2FyZEltYWdlVGl0bGVEaXJlY3RpdmUgeyB9XHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ216LWNhcmQtdGl0bGUnIH0pIGV4cG9ydCBjbGFzcyBNekNhcmRUaXRsZURpcmVjdGl2ZSB7IH1cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnbXotY2FyZC1jb250ZW50JyB9KSBleHBvcnQgY2xhc3MgTXpDYXJkQ29udGVudERpcmVjdGl2ZSB7IH1cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnbXotY2FyZC1hY3Rpb24nIH0pIGV4cG9ydCBjbGFzcyBNekNhcmRBY3Rpb25EaXJlY3RpdmUgeyB9XHJcblxyXG4iXX0=