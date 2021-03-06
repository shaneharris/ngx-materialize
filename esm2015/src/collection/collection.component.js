/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, Renderer2 } from '@angular/core';
export class MzCollectionComponent {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initElements();
        this.initCollectionHeader();
    }
    /**
     * @return {?}
     */
    initElements() {
        this.collectionElement = $(this.elementRef.nativeElement).find('.collection');
        this.collectionHeaderElement = $(this.elementRef.nativeElement).find('.collection-header');
    }
    /**
     * @return {?}
     */
    initCollectionHeader() {
        if (this.collectionHeaderElement.length > 0) {
            this.renderer.addClass(this.collectionElement[0], 'with-header');
        }
    }
}
MzCollectionComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-collection',
                template: `<div class="collection">
  <ng-content></ng-content>
</div>`,
                styles: [``],
            },] },
];
/** @nocollapse */
MzCollectionComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGVjdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvIiwic291cmNlcyI6WyJzcmMvY29sbGVjdGlvbi9jb2xsZWN0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBU3pFLE1BQU07Ozs7O0lBSUosWUFDVSxZQUNBO1FBREEsZUFBVSxHQUFWLFVBQVU7UUFDVixhQUFRLEdBQVIsUUFBUTtLQUNiOzs7O0lBRUwsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztLQUM3Qjs7OztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzlFLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztLQUM1Rjs7OztJQUVELG9CQUFvQjtRQUNsQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1NBQ2xFO0tBQ0Y7OztZQTlCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFFBQVEsRUFBRTs7T0FFTDtnQkFDTCxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7YUFDYjs7OztZQVJtQixVQUFVO1lBQVUsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXotY29sbGVjdGlvbicsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiY29sbGVjdGlvblwiPlxyXG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuPC9kaXY+YCxcclxuICBzdHlsZXM6IFtgYF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNekNvbGxlY3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGNvbGxlY3Rpb25FbGVtZW50OiBKUXVlcnk7XHJcbiAgY29sbGVjdGlvbkhlYWRlckVsZW1lbnQ6IEpRdWVyeTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluaXRFbGVtZW50cygpO1xyXG4gICAgdGhpcy5pbml0Q29sbGVjdGlvbkhlYWRlcigpO1xyXG4gIH1cclxuXHJcbiAgaW5pdEVsZW1lbnRzKCkge1xyXG4gICAgdGhpcy5jb2xsZWN0aW9uRWxlbWVudCA9ICQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLmZpbmQoJy5jb2xsZWN0aW9uJyk7XHJcbiAgICB0aGlzLmNvbGxlY3Rpb25IZWFkZXJFbGVtZW50ID0gJCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkuZmluZCgnLmNvbGxlY3Rpb24taGVhZGVyJyk7XHJcbiAgfVxyXG5cclxuICBpbml0Q29sbGVjdGlvbkhlYWRlcigpIHtcclxuICAgIGlmICh0aGlzLmNvbGxlY3Rpb25IZWFkZXJFbGVtZW50Lmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmNvbGxlY3Rpb25FbGVtZW50WzBdLCAnd2l0aC1oZWFkZXInKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19