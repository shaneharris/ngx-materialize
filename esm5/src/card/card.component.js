/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectorRef, Component, Directive, ElementRef, HostBinding, Input, ViewChild, } from '@angular/core';
var MzCardComponent = /** @class */ (function () {
    function MzCardComponent(changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
        this.hasCardAction = true;
        this.hasCardImage = true;
        this.hasCardImageTitle = true;
        this.hasCardTitle = true;
    }
    /**
     * @return {?}
     */
    MzCardComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.hasCardTitle = this.hasTitleTagAndNotEmpty();
        this.hasCardAction = this.hasActionTagAndNotEmpty();
        this.hasCardImage = this.hasImageTagAndNotEmpty();
        this.hasCardImageTitle = this.hasImageTitleTagAndNotEmpty();
        this.changeDetectorRef.detectChanges();
    };
    /**
     * @return {?}
     */
    MzCardComponent.prototype.hasActionTagAndNotEmpty = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ cardActionElement = this.cardAction.nativeElement.querySelector('mz-card-action');
        return this.isElementDisplayed(cardActionElement);
    };
    /**
     * @return {?}
     */
    MzCardComponent.prototype.hasImageTagAndNotEmpty = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ cardImagelement = this.cardImage.nativeElement.querySelector('mz-card-image');
        return this.isElementDisplayed(cardImagelement);
    };
    /**
     * @return {?}
     */
    MzCardComponent.prototype.hasImageTitleTagAndNotEmpty = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ cardImageTitleElement = this.cardImage.nativeElement.querySelector('mz-card-image-title');
        return this.isElementDisplayed(cardImageTitleElement);
    };
    /**
     * @return {?}
     */
    MzCardComponent.prototype.hasTitleTagAndNotEmpty = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ cardTitleElement = this.cardTitle ? this.cardTitle.nativeElement.querySelector('mz-card-title') : null;
        return this.isElementDisplayed(cardTitleElement);
    };
    /**
     * @param {?} element
     * @return {?}
     */
    MzCardComponent.prototype.isElementDisplayed = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        return element && element.innerHTML.trim() !== '';
    };
    MzCardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mz-card',
                    template: "<div #cardImage class=\"card-image\" *ngIf=\"hasCardImage\">\n  <ng-content select=\"mz-card-image\"></ng-content>\n  <div class=\"card-title\" *ngIf=\"hasCardImageTitle\">\n    <ng-content select=\"mz-card-image-title\"></ng-content>\n  </div>\n</div>\n\n<div [class.card-stacked]=\"horizontal\">\n  <div class=\"card-content\">\n    <div #cardTitle class=\"card-title\" *ngIf=\"hasCardTitle\">\n      <ng-content select=\"mz-card-title\"></ng-content>\n    </div>\n\n    <ng-content select=\"mz-card-content\"></ng-content>\n  </div>\n\n  <div #cardAction class=\"card-action\" *ngIf=\"hasCardAction\">\n    <ng-content select=\"mz-card-action\"></ng-content>\n  </div>\n</div>",
                    styles: [":host{display:block}"],
                },] },
    ];
    /** @nocollapse */
    MzCardComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef, },
    ]; };
    MzCardComponent.propDecorators = {
        "true": [{ type: HostBinding, args: ['class.card',] },],
        "horizontal": [{ type: HostBinding, args: ['class.horizontal',] }, { type: Input },],
        "hoverable": [{ type: HostBinding, args: ['class.hoverable',] }, { type: Input },],
        "cardAction": [{ type: ViewChild, args: ['cardAction',] },],
        "cardImage": [{ type: ViewChild, args: ['cardImage',] },],
        "cardTitle": [{ type: ViewChild, args: ['cardTitle',] },],
    };
    return MzCardComponent;
}());
export { MzCardComponent };
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
var MzCardImageDirective = /** @class */ (function () {
    function MzCardImageDirective() {
    }
    MzCardImageDirective.decorators = [
        { type: Directive, args: [{ selector: 'mz-card-image' },] },
    ];
    return MzCardImageDirective;
}());
export { MzCardImageDirective };
function MzCardImageDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MzCardImageDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MzCardImageDirective.ctorParameters;
}
var MzCardImageTitleDirective = /** @class */ (function () {
    function MzCardImageTitleDirective() {
    }
    MzCardImageTitleDirective.decorators = [
        { type: Directive, args: [{ selector: 'mz-card-image-title' },] },
    ];
    return MzCardImageTitleDirective;
}());
export { MzCardImageTitleDirective };
function MzCardImageTitleDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MzCardImageTitleDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MzCardImageTitleDirective.ctorParameters;
}
var MzCardTitleDirective = /** @class */ (function () {
    function MzCardTitleDirective() {
    }
    MzCardTitleDirective.decorators = [
        { type: Directive, args: [{ selector: 'mz-card-title' },] },
    ];
    return MzCardTitleDirective;
}());
export { MzCardTitleDirective };
function MzCardTitleDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MzCardTitleDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MzCardTitleDirective.ctorParameters;
}
var MzCardContentDirective = /** @class */ (function () {
    function MzCardContentDirective() {
    }
    MzCardContentDirective.decorators = [
        { type: Directive, args: [{ selector: 'mz-card-content' },] },
    ];
    return MzCardContentDirective;
}());
export { MzCardContentDirective };
function MzCardContentDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MzCardContentDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MzCardContentDirective.ctorParameters;
}
var MzCardActionDirective = /** @class */ (function () {
    function MzCardActionDirective() {
    }
    MzCardActionDirective.decorators = [
        { type: Directive, args: [{ selector: 'mz-card-action' },] },
    ];
    return MzCardActionDirective;
}());
export { MzCardActionDirective };
function MzCardActionDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MzCardActionDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MzCardActionDirective.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvIiwic291cmNlcyI6WyJzcmMvY2FyZC9jYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsS0FBSyxFQUNMLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQzs7SUF3Q3JCLHlCQUNVO1FBQUEsc0JBQWlCLEdBQWpCLGlCQUFpQjs2QkFOWCxJQUFJOzRCQUNMLElBQUk7aUNBQ0MsSUFBSTs0QkFDVCxJQUFJO0tBSWY7Ozs7SUFFSix5Q0FBZTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1FBQ2xELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFDcEQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztRQUNsRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLDJCQUEyQixFQUFFLENBQUM7UUFDNUQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO0tBQ3hDOzs7O0lBRU8saURBQXVCOzs7O1FBQzdCLHFCQUFNLGlCQUFpQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3hGLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsQ0FBQzs7Ozs7SUFHNUMsZ0RBQXNCOzs7O1FBQzVCLHFCQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDcEYsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsQ0FBQzs7Ozs7SUFHMUMscURBQTJCOzs7O1FBQ2pDLHFCQUFNLHFCQUFxQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ2hHLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMscUJBQXFCLENBQUMsQ0FBQzs7Ozs7SUFHaEQsZ0RBQXNCOzs7O1FBQzVCLHFCQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzdHLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzs7Ozs7O0lBRzNDLDRDQUFrQjs7OztjQUFDLE9BQW9CO1FBQzdDLE1BQU0sQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUM7OztnQkF2RXJELFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsU0FBUztvQkFDbkIsUUFBUSxFQUFFLHlxQkFtQkw7b0JBQ0wsTUFBTSxFQUFFLENBQUMsc0JBQXNCLENBQUM7aUJBQ2pDOzs7O2dCQWhDQyxpQkFBaUI7Ozt5QkFrQ2hCLFdBQVcsU0FBQyxZQUFZOytCQUN4QixXQUFXLFNBQUMsa0JBQWtCLGNBQUcsS0FBSzs4QkFDdEMsV0FBVyxTQUFDLGlCQUFpQixjQUFHLEtBQUs7K0JBRXJDLFNBQVMsU0FBQyxZQUFZOzhCQUN0QixTQUFTLFNBQUMsV0FBVzs4QkFDckIsU0FBUyxTQUFDLFdBQVc7OzBCQTFDeEI7O1NBbUNhLGVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQXVEM0IsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRTs7K0JBMUZ4Qzs7U0EwRnVELG9CQUFvQjs7Ozs7Ozs7Ozs7Ozs7Z0JBQzFFLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxxQkFBcUIsRUFBRTs7b0NBM0Y5Qzs7U0EyRjZELHlCQUF5Qjs7Ozs7Ozs7Ozs7Ozs7Z0JBQ3JGLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUU7OytCQTVGeEM7O1NBNEZ1RCxvQkFBb0I7Ozs7Ozs7Ozs7Ozs7O2dCQUMxRSxTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUU7O2lDQTdGMUM7O1NBNkZ5RCxzQkFBc0I7Ozs7Ozs7Ozs7Ozs7O2dCQUM5RSxTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUU7O2dDQTlGekM7O1NBOEZ3RCxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIEhvc3RCaW5kaW5nLFxyXG4gIElucHV0LFxyXG4gIFZpZXdDaGlsZCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXotY2FyZCcsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2ICNjYXJkSW1hZ2UgY2xhc3M9XCJjYXJkLWltYWdlXCIgKm5nSWY9XCJoYXNDYXJkSW1hZ2VcIj5cclxuICA8bmctY29udGVudCBzZWxlY3Q9XCJtei1jYXJkLWltYWdlXCI+PC9uZy1jb250ZW50PlxyXG4gIDxkaXYgY2xhc3M9XCJjYXJkLXRpdGxlXCIgKm5nSWY9XCJoYXNDYXJkSW1hZ2VUaXRsZVwiPlxyXG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibXotY2FyZC1pbWFnZS10aXRsZVwiPjwvbmctY29udGVudD5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG48ZGl2IFtjbGFzcy5jYXJkLXN0YWNrZWRdPVwiaG9yaXpvbnRhbFwiPlxyXG4gIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cclxuICAgIDxkaXYgI2NhcmRUaXRsZSBjbGFzcz1cImNhcmQtdGl0bGVcIiAqbmdJZj1cImhhc0NhcmRUaXRsZVwiPlxyXG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJtei1jYXJkLXRpdGxlXCI+PC9uZy1jb250ZW50PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibXotY2FyZC1jb250ZW50XCI+PC9uZy1jb250ZW50PlxyXG4gIDwvZGl2PlxyXG5cclxuICA8ZGl2ICNjYXJkQWN0aW9uIGNsYXNzPVwiY2FyZC1hY3Rpb25cIiAqbmdJZj1cImhhc0NhcmRBY3Rpb25cIj5cclxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm16LWNhcmQtYWN0aW9uXCI+PC9uZy1jb250ZW50PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5gLFxyXG4gIHN0eWxlczogW2A6aG9zdHtkaXNwbGF5OmJsb2NrfWBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpDYXJkQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5jYXJkJykgdHJ1ZTtcclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmhvcml6b250YWwnKSBASW5wdXQoKSBob3Jpem9udGFsOiBib29sZWFuO1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuaG92ZXJhYmxlJykgQElucHV0KCkgaG92ZXJhYmxlOiBib29sZWFuO1xyXG5cclxuICBAVmlld0NoaWxkKCdjYXJkQWN0aW9uJykgY2FyZEFjdGlvbjogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdjYXJkSW1hZ2UnKSBjYXJkSW1hZ2U6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnY2FyZFRpdGxlJykgY2FyZFRpdGxlOiBFbGVtZW50UmVmO1xyXG5cclxuICBoYXNDYXJkQWN0aW9uID0gdHJ1ZTtcclxuICBoYXNDYXJkSW1hZ2UgPSB0cnVlO1xyXG4gIGhhc0NhcmRJbWFnZVRpdGxlID0gdHJ1ZTtcclxuICBoYXNDYXJkVGl0bGUgPSB0cnVlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICkge31cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5oYXNDYXJkVGl0bGUgPSB0aGlzLmhhc1RpdGxlVGFnQW5kTm90RW1wdHkoKTtcclxuICAgIHRoaXMuaGFzQ2FyZEFjdGlvbiA9IHRoaXMuaGFzQWN0aW9uVGFnQW5kTm90RW1wdHkoKTtcclxuICAgIHRoaXMuaGFzQ2FyZEltYWdlID0gdGhpcy5oYXNJbWFnZVRhZ0FuZE5vdEVtcHR5KCk7XHJcbiAgICB0aGlzLmhhc0NhcmRJbWFnZVRpdGxlID0gdGhpcy5oYXNJbWFnZVRpdGxlVGFnQW5kTm90RW1wdHkoKTtcclxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYXNBY3Rpb25UYWdBbmROb3RFbXB0eSgpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IGNhcmRBY3Rpb25FbGVtZW50ID0gdGhpcy5jYXJkQWN0aW9uLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignbXotY2FyZC1hY3Rpb24nKTtcclxuICAgIHJldHVybiB0aGlzLmlzRWxlbWVudERpc3BsYXllZChjYXJkQWN0aW9uRWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhhc0ltYWdlVGFnQW5kTm90RW1wdHkoKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBjYXJkSW1hZ2VsZW1lbnQgPSB0aGlzLmNhcmRJbWFnZS5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ216LWNhcmQtaW1hZ2UnKTtcclxuICAgIHJldHVybiB0aGlzLmlzRWxlbWVudERpc3BsYXllZChjYXJkSW1hZ2VsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYXNJbWFnZVRpdGxlVGFnQW5kTm90RW1wdHkoKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBjYXJkSW1hZ2VUaXRsZUVsZW1lbnQgPSB0aGlzLmNhcmRJbWFnZS5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ216LWNhcmQtaW1hZ2UtdGl0bGUnKTtcclxuICAgIHJldHVybiB0aGlzLmlzRWxlbWVudERpc3BsYXllZChjYXJkSW1hZ2VUaXRsZUVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYXNUaXRsZVRhZ0FuZE5vdEVtcHR5KCk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgY2FyZFRpdGxlRWxlbWVudCA9IHRoaXMuY2FyZFRpdGxlID8gdGhpcy5jYXJkVGl0bGUubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdtei1jYXJkLXRpdGxlJykgOiBudWxsO1xyXG4gICAgcmV0dXJuIHRoaXMuaXNFbGVtZW50RGlzcGxheWVkKGNhcmRUaXRsZUVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc0VsZW1lbnREaXNwbGF5ZWQoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBlbGVtZW50ICYmIGVsZW1lbnQuaW5uZXJIVE1MLnRyaW0oKSAhPT0gJyc7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBEZWNsYXJlIHRoZSB0YWdzIHRvIGF2b2lkIGVycm9yOiAnPG16LWNhcmQteD4nIGlzIG5vdCBhIGtub3duIGVsZW1lbnRcclxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTEyNTFcclxuLy8gdHNsaW50OmRpc2FibGU6IGRpcmVjdGl2ZS1zZWxlY3RvclxyXG5cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnbXotY2FyZC1pbWFnZScgfSkgZXhwb3J0IGNsYXNzIE16Q2FyZEltYWdlRGlyZWN0aXZlIHsgfVxyXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdtei1jYXJkLWltYWdlLXRpdGxlJyB9KSBleHBvcnQgY2xhc3MgTXpDYXJkSW1hZ2VUaXRsZURpcmVjdGl2ZSB7IH1cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnbXotY2FyZC10aXRsZScgfSkgZXhwb3J0IGNsYXNzIE16Q2FyZFRpdGxlRGlyZWN0aXZlIHsgfVxyXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdtei1jYXJkLWNvbnRlbnQnIH0pIGV4cG9ydCBjbGFzcyBNekNhcmRDb250ZW50RGlyZWN0aXZlIHsgfVxyXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdtei1jYXJkLWFjdGlvbicgfSkgZXhwb3J0IGNsYXNzIE16Q2FyZEFjdGlvbkRpcmVjdGl2ZSB7IH1cclxuXHJcbiJdfQ==