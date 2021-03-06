/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, Renderer2 } from '@angular/core';
var MzCollectionComponent = /** @class */ (function () {
    function MzCollectionComponent(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    MzCollectionComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.initElements();
        this.initCollectionHeader();
    };
    /**
     * @return {?}
     */
    MzCollectionComponent.prototype.initElements = /**
     * @return {?}
     */
    function () {
        this.collectionElement = $(this.elementRef.nativeElement).find('.collection');
        this.collectionHeaderElement = $(this.elementRef.nativeElement).find('.collection-header');
    };
    /**
     * @return {?}
     */
    MzCollectionComponent.prototype.initCollectionHeader = /**
     * @return {?}
     */
    function () {
        if (this.collectionHeaderElement.length > 0) {
            this.renderer.addClass(this.collectionElement[0], 'with-header');
        }
    };
    MzCollectionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mz-collection',
                    template: "<div class=\"collection\">\n  <ng-content></ng-content>\n</div>",
                    styles: [""],
                },] },
    ];
    /** @nocollapse */
    MzCollectionComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: Renderer2, },
    ]; };
    return MzCollectionComponent;
}());
export { MzCollectionComponent };
function MzCollectionComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MzCollectionComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MzCollectionComponent.ctorParameters;
    /** @type {?} */
    MzCollectionComponent.prototype.collectionElement;
    /** @type {?} */
    MzCollectionComponent.prototype.collectionHeaderElement;
    /** @type {?} */
    MzCollectionComponent.prototype.elementRef;
    /** @type {?} */
    MzCollectionComponent.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGVjdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvIiwic291cmNlcyI6WyJzcmMvY29sbGVjdGlvbi9jb2xsZWN0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOztJQWF2RSwrQkFDVSxZQUNBO1FBREEsZUFBVSxHQUFWLFVBQVU7UUFDVixhQUFRLEdBQVIsUUFBUTtLQUNiOzs7O0lBRUwsd0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0tBQzdCOzs7O0lBRUQsNENBQVk7OztJQUFaO1FBQ0UsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM5RSxJQUFJLENBQUMsdUJBQXVCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7S0FDNUY7Ozs7SUFFRCxvREFBb0I7OztJQUFwQjtRQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLEVBQUUsYUFBYSxDQUFDLENBQUM7U0FDbEU7S0FDRjs7Z0JBOUJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsUUFBUSxFQUFFLGlFQUVMO29CQUNMLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztpQkFDYjs7OztnQkFSbUIsVUFBVTtnQkFBVSxTQUFTOztnQ0FBakQ7O1NBU2EscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtei1jb2xsZWN0aW9uJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJjb2xsZWN0aW9uXCI+XHJcbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L2Rpdj5gLFxyXG4gIHN0eWxlczogW2BgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16Q29sbGVjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgY29sbGVjdGlvbkVsZW1lbnQ6IEpRdWVyeTtcclxuICBjb2xsZWN0aW9uSGVhZGVyRWxlbWVudDogSlF1ZXJ5O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICApIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5pdEVsZW1lbnRzKCk7XHJcbiAgICB0aGlzLmluaXRDb2xsZWN0aW9uSGVhZGVyKCk7XHJcbiAgfVxyXG5cclxuICBpbml0RWxlbWVudHMoKSB7XHJcbiAgICB0aGlzLmNvbGxlY3Rpb25FbGVtZW50ID0gJCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkuZmluZCgnLmNvbGxlY3Rpb24nKTtcclxuICAgIHRoaXMuY29sbGVjdGlvbkhlYWRlckVsZW1lbnQgPSAkKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5maW5kKCcuY29sbGVjdGlvbi1oZWFkZXInKTtcclxuICB9XHJcblxyXG4gIGluaXRDb2xsZWN0aW9uSGVhZGVyKCkge1xyXG4gICAgaWYgKHRoaXMuY29sbGVjdGlvbkhlYWRlckVsZW1lbnQubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuY29sbGVjdGlvbkVsZW1lbnRbMF0sICd3aXRoLWhlYWRlcicpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=