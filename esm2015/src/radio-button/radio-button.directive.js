/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, HostBinding, Input, Renderer } from '@angular/core';
import { HandlePropChanges } from '../shared/index';
export class MzRadioButtonDirective extends HandlePropChanges {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
        super();
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initHandlers();
        this.initElements();
        this.handleProperties();
    }
    /**
     * @return {?}
     */
    initHandlers() {
        this.handlers = {
            label: () => this.handleLabel(),
            withGap: () => this.handleWithGap(),
        };
    }
    /**
     * @return {?}
     */
    initElements() {
        this.inputElement = $(this.elementRef.nativeElement);
        this.inputContainerElement = $(this.elementRef.nativeElement).parent('.radio-button-field');
        this.labelElement = this.createLabelElement();
    }
    /**
     * @return {?}
     */
    createLabelElement() {
        const /** @type {?} */ labelElement = document.createElement('label');
        labelElement.setAttribute('for', this.id);
        this.renderer.invokeElementMethod(this.inputElement, 'after', [labelElement]);
        return $(labelElement);
    }
    /**
     * @return {?}
     */
    handleProperties() {
        if (this.inputContainerElement.length === 0) {
            console.error('Radio Button must be placed inside a [mz-radio-button-container] tag', this.inputElement);
            return;
        }
        super.executePropHandlers();
    }
    /**
     * @return {?}
     */
    handleLabel() {
        this.renderer.invokeElementMethod(this.labelElement, 'text', [this.label]);
    }
    /**
     * @return {?}
     */
    handleWithGap() {
        this.renderer.setElementClass(this.inputElement[0], 'with-gap', this.withGap);
    }
}
MzRadioButtonDirective.decorators = [
    { type: Directive, args: [{
                selector: 'input[mzRadioButton], input[mz-radio-button]',
            },] },
];
/** @nocollapse */
MzRadioButtonDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer, },
];
MzRadioButtonDirective.propDecorators = {
    "id": [{ type: HostBinding }, { type: Input },],
    "label": [{ type: Input },],
    "withGap": [{ type: Input },],
};
function MzRadioButtonDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MzRadioButtonDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MzRadioButtonDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    MzRadioButtonDirective.propDecorators;
    /** @type {?} */
    MzRadioButtonDirective.prototype.id;
    /** @type {?} */
    MzRadioButtonDirective.prototype.label;
    /** @type {?} */
    MzRadioButtonDirective.prototype.withGap;
    /** @type {?} */
    MzRadioButtonDirective.prototype.inputElement;
    /** @type {?} */
    MzRadioButtonDirective.prototype.inputContainerElement;
    /** @type {?} */
    MzRadioButtonDirective.prototype.labelElement;
    /** @type {?} */
    MzRadioButtonDirective.prototype.elementRef;
    /** @type {?} */
    MzRadioButtonDirective.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8tYnV0dG9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXRlcmlhbGl6ZS8iLCJzb3VyY2VzIjpbInNyYy9yYWRpby1idXR0b24vcmFkaW8tYnV0dG9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBVSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFNUYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFLcEQsTUFBTSw2QkFBOEIsU0FBUSxpQkFBaUI7Ozs7O0lBWTNELFlBQW9CLFVBQXNCLEVBQVUsUUFBa0I7UUFDcEUsS0FBSyxFQUFFLENBQUM7UUFEVSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtLQUVyRTs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0tBQ3pCOzs7O0lBRUQsWUFBWTtRQUNWLElBQUksQ0FBQyxRQUFRLEdBQUc7WUFDZCxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUMvQixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtTQUNwQyxDQUFDO0tBQ0g7Ozs7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMscUJBQXFCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDNUYsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztLQUMvQzs7OztJQUVELGtCQUFrQjtRQUNoQix1QkFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyRCxZQUFZLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFFOUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztLQUN4Qjs7OztJQUVELGdCQUFnQjtRQUNkLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QyxPQUFPLENBQUMsS0FBSyxDQUFDLHNFQUFzRSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUN6RyxNQUFNLENBQUM7U0FDUjtRQUVELEtBQUssQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0tBQzdCOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztLQUM1RTs7OztJQUVELGFBQWE7UUFDWCxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDL0U7OztZQTlERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDhDQUE4QzthQUN6RDs7OztZQU5tQixVQUFVO1lBQThCLFFBQVE7OzttQkFTakUsV0FBVyxZQUFJLEtBQUs7c0JBR3BCLEtBQUs7d0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdEJpbmRpbmcsIElucHV0LCBPbkluaXQsIFJlbmRlcmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBIYW5kbGVQcm9wQ2hhbmdlcyB9IGZyb20gJy4uL3NoYXJlZC9pbmRleCc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ2lucHV0W216UmFkaW9CdXR0b25dLCBpbnB1dFttei1yYWRpby1idXR0b25dJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16UmFkaW9CdXR0b25EaXJlY3RpdmUgZXh0ZW5kcyBIYW5kbGVQcm9wQ2hhbmdlcyBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgLy8gbmF0aXZlIHByb3BlcnRpZXNcclxuICBASG9zdEJpbmRpbmcoKSBASW5wdXQoKSBpZDogc3RyaW5nO1xyXG5cclxuICAvLyBkaXJlY3RpdmUgcHJvcGVydGllc1xyXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgd2l0aEdhcDogYm9vbGVhbjtcclxuXHJcbiAgaW5wdXRFbGVtZW50OiBKUXVlcnk7XHJcbiAgaW5wdXRDb250YWluZXJFbGVtZW50OiBKUXVlcnk7XHJcbiAgbGFiZWxFbGVtZW50OiBKUXVlcnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5pdEhhbmRsZXJzKCk7XHJcbiAgICB0aGlzLmluaXRFbGVtZW50cygpO1xyXG4gICAgdGhpcy5oYW5kbGVQcm9wZXJ0aWVzKCk7XHJcbiAgfVxyXG5cclxuICBpbml0SGFuZGxlcnMoKSB7XHJcbiAgICB0aGlzLmhhbmRsZXJzID0ge1xyXG4gICAgICBsYWJlbDogKCkgPT4gdGhpcy5oYW5kbGVMYWJlbCgpLFxyXG4gICAgICB3aXRoR2FwOiAoKSA9PiB0aGlzLmhhbmRsZVdpdGhHYXAoKSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBpbml0RWxlbWVudHMoKSB7XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudCA9ICQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgdGhpcy5pbnB1dENvbnRhaW5lckVsZW1lbnQgPSAkKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5wYXJlbnQoJy5yYWRpby1idXR0b24tZmllbGQnKTtcclxuICAgIHRoaXMubGFiZWxFbGVtZW50ID0gdGhpcy5jcmVhdGVMYWJlbEVsZW1lbnQoKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUxhYmVsRWxlbWVudCgpIHtcclxuICAgIGNvbnN0IGxhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBsYWJlbEVsZW1lbnQuc2V0QXR0cmlidXRlKCdmb3InLCB0aGlzLmlkKTtcclxuXHJcbiAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QodGhpcy5pbnB1dEVsZW1lbnQsICdhZnRlcicsIFtsYWJlbEVsZW1lbnRdKTtcclxuXHJcbiAgICByZXR1cm4gJChsYWJlbEVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlUHJvcGVydGllcygpIHtcclxuICAgIGlmICh0aGlzLmlucHV0Q29udGFpbmVyRWxlbWVudC5sZW5ndGggPT09IDApIHtcclxuICAgICAgY29uc29sZS5lcnJvcignUmFkaW8gQnV0dG9uIG11c3QgYmUgcGxhY2VkIGluc2lkZSBhIFttei1yYWRpby1idXR0b24tY29udGFpbmVyXSB0YWcnLCB0aGlzLmlucHV0RWxlbWVudCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBzdXBlci5leGVjdXRlUHJvcEhhbmRsZXJzKCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVMYWJlbCgpIHtcclxuICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLmxhYmVsRWxlbWVudCwgJ3RleHQnLCBbdGhpcy5sYWJlbF0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlV2l0aEdhcCgpIHtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuaW5wdXRFbGVtZW50WzBdLCAnd2l0aC1nYXAnLCB0aGlzLndpdGhHYXApO1xyXG4gIH1cclxufVxyXG4iXX0=