/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, HostBinding, Input, Renderer } from '@angular/core';
import { HandlePropChanges } from '../shared/index';
var MzCheckboxDirective = /** @class */ (function (_super) {
    tslib_1.__extends(MzCheckboxDirective, _super);
    function MzCheckboxDirective(elementRef, renderer) {
        var _this = _super.call(this) || this;
        _this.elementRef = elementRef;
        _this.renderer = renderer;
        return _this;
    }
    /**
     * @return {?}
     */
    MzCheckboxDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.initHandlers();
        this.initElements();
        this.handleProperties();
    };
    /**
     * @return {?}
     */
    MzCheckboxDirective.prototype.initHandlers = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.handlers = {
            filledIn: function () { return _this.handleFilledIn(); },
            label: function () { return _this.handleLabel(); },
        };
    };
    /**
     * @return {?}
     */
    MzCheckboxDirective.prototype.initElements = /**
     * @return {?}
     */
    function () {
        this.checkboxElement = $(this.elementRef.nativeElement);
        this.checkboxContainerElement = $(this.elementRef.nativeElement).parent('.checkbox-field');
        this.labelElement = this.createLabelElement();
    };
    /**
     * @return {?}
     */
    MzCheckboxDirective.prototype.createLabelElement = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ labelElement = document.createElement('label');
        labelElement.setAttribute('for', this.id);
        this.renderer.invokeElementMethod(this.checkboxElement, 'after', [labelElement]);
        return $(labelElement);
    };
    /**
     * @return {?}
     */
    MzCheckboxDirective.prototype.handleProperties = /**
     * @return {?}
     */
    function () {
        if (this.checkboxContainerElement.length === 0) {
            console.error('Input with mz-checkbox directive must be placed inside a [mz-checkbox-container] tag', this.checkboxElement);
            return;
        }
        _super.prototype.executePropHandlers.call(this);
    };
    /**
     * @return {?}
     */
    MzCheckboxDirective.prototype.handleLabel = /**
     * @return {?}
     */
    function () {
        this.renderer.invokeElementMethod(this.labelElement, 'text', [this.label]);
    };
    /**
     * @return {?}
     */
    MzCheckboxDirective.prototype.handleFilledIn = /**
     * @return {?}
     */
    function () {
        this.renderer.setElementClass(this.checkboxElement[0], 'filled-in', this.filledIn);
    };
    MzCheckboxDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'input[mzCheckbox], input[mz-checkbox]',
                },] },
    ];
    /** @nocollapse */
    MzCheckboxDirective.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: Renderer, },
    ]; };
    MzCheckboxDirective.propDecorators = {
        "id": [{ type: HostBinding }, { type: Input },],
        "filledIn": [{ type: Input },],
        "label": [{ type: Input },],
    };
    return MzCheckboxDirective;
}(HandlePropChanges));
export { MzCheckboxDirective };
function MzCheckboxDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MzCheckboxDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MzCheckboxDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    MzCheckboxDirective.propDecorators;
    /** @type {?} */
    MzCheckboxDirective.prototype.id;
    /** @type {?} */
    MzCheckboxDirective.prototype.filledIn;
    /** @type {?} */
    MzCheckboxDirective.prototype.label;
    /** @type {?} */
    MzCheckboxDirective.prototype.checkboxElement;
    /** @type {?} */
    MzCheckboxDirective.prototype.checkboxContainerElement;
    /** @type {?} */
    MzCheckboxDirective.prototype.labelElement;
    /** @type {?} */
    MzCheckboxDirective.prototype.elementRef;
    /** @type {?} */
    MzCheckboxDirective.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hdGVyaWFsaXplLyIsInNvdXJjZXMiOlsic3JjL2NoZWNrYm94L2NoZWNrYm94LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQVUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTVGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztJQUtYLCtDQUFpQjtJQVl4RCw2QkFBb0IsVUFBc0IsRUFBVSxRQUFrQjtRQUF0RSxZQUNFLGlCQUFPLFNBQ1I7UUFGbUIsZ0JBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxjQUFRLEdBQVIsUUFBUSxDQUFVOztLQUVyRTs7OztJQUVELHNDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7S0FDekI7Ozs7SUFFRCwwQ0FBWTs7O0lBQVo7UUFBQSxpQkFLQztRQUpDLElBQUksQ0FBQyxRQUFRLEdBQUc7WUFDZCxRQUFRLEVBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxjQUFjLEVBQUUsRUFBckIsQ0FBcUI7WUFDckMsS0FBSyxFQUFFLGNBQU0sT0FBQSxLQUFJLENBQUMsV0FBVyxFQUFFLEVBQWxCLENBQWtCO1NBQ2hDLENBQUM7S0FDSDs7OztJQUVELDBDQUFZOzs7SUFBWjtRQUNFLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLHdCQUF3QixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzNGLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7S0FDL0M7Ozs7SUFFRCxnREFBa0I7OztJQUFsQjtRQUNFLHFCQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JELFlBQVksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUUxQyxJQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUVqRixNQUFNLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO0tBQ3hCOzs7O0lBRUQsOENBQWdCOzs7SUFBaEI7UUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0MsT0FBTyxDQUFDLEtBQUssQ0FBQyxzRkFBc0YsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDNUgsTUFBTSxDQUFDO1NBQ1I7UUFFRCxpQkFBTSxtQkFBbUIsV0FBRSxDQUFDO0tBQzdCOzs7O0lBRUQseUNBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0tBQzVFOzs7O0lBRUQsNENBQWM7OztJQUFkO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ3BGOztnQkE5REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx1Q0FBdUM7aUJBQ2xEOzs7O2dCQU5tQixVQUFVO2dCQUE4QixRQUFROzs7dUJBU2pFLFdBQVcsWUFBSSxLQUFLOzZCQUdwQixLQUFLOzBCQUNMLEtBQUs7OzhCQWJSO0VBT3lDLGlCQUFpQjtTQUE3QyxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nLCBJbnB1dCwgT25Jbml0LCBSZW5kZXJlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgSGFuZGxlUHJvcENoYW5nZXMgfSBmcm9tICcuLi9zaGFyZWQvaW5kZXgnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdpbnB1dFttekNoZWNrYm94XSwgaW5wdXRbbXotY2hlY2tib3hdJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16Q2hlY2tib3hEaXJlY3RpdmUgZXh0ZW5kcyBIYW5kbGVQcm9wQ2hhbmdlcyBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgLy8gbmF0aXZlIHByb3BlcnRpZXNcclxuICBASG9zdEJpbmRpbmcoKSBASW5wdXQoKSBpZDogc3RyaW5nO1xyXG5cclxuICAvLyBkaXJlY3RpdmUgcHJvcGVydGllc1xyXG4gIEBJbnB1dCgpIGZpbGxlZEluOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XHJcblxyXG4gIGNoZWNrYm94RWxlbWVudDogSlF1ZXJ5O1xyXG4gIGNoZWNrYm94Q29udGFpbmVyRWxlbWVudDogSlF1ZXJ5O1xyXG4gIGxhYmVsRWxlbWVudDogSlF1ZXJ5O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluaXRIYW5kbGVycygpO1xyXG4gICAgdGhpcy5pbml0RWxlbWVudHMoKTtcclxuICAgIHRoaXMuaGFuZGxlUHJvcGVydGllcygpO1xyXG4gIH1cclxuXHJcbiAgaW5pdEhhbmRsZXJzKCkge1xyXG4gICAgdGhpcy5oYW5kbGVycyA9IHtcclxuICAgICAgZmlsbGVkSW46ICgpID0+IHRoaXMuaGFuZGxlRmlsbGVkSW4oKSxcclxuICAgICAgbGFiZWw6ICgpID0+IHRoaXMuaGFuZGxlTGFiZWwoKSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBpbml0RWxlbWVudHMoKSB7XHJcbiAgICB0aGlzLmNoZWNrYm94RWxlbWVudCA9ICQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgdGhpcy5jaGVja2JveENvbnRhaW5lckVsZW1lbnQgPSAkKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5wYXJlbnQoJy5jaGVja2JveC1maWVsZCcpO1xyXG4gICAgdGhpcy5sYWJlbEVsZW1lbnQgPSB0aGlzLmNyZWF0ZUxhYmVsRWxlbWVudCgpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlTGFiZWxFbGVtZW50KCkge1xyXG4gICAgY29uc3QgbGFiZWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGxhYmVsRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIHRoaXMuaWQpO1xyXG5cclxuICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLmNoZWNrYm94RWxlbWVudCwgJ2FmdGVyJywgW2xhYmVsRWxlbWVudF0pO1xyXG5cclxuICAgIHJldHVybiAkKGxhYmVsRWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVQcm9wZXJ0aWVzKCkge1xyXG4gICAgaWYgKHRoaXMuY2hlY2tib3hDb250YWluZXJFbGVtZW50Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdJbnB1dCB3aXRoIG16LWNoZWNrYm94IGRpcmVjdGl2ZSBtdXN0IGJlIHBsYWNlZCBpbnNpZGUgYSBbbXotY2hlY2tib3gtY29udGFpbmVyXSB0YWcnLCB0aGlzLmNoZWNrYm94RWxlbWVudCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBzdXBlci5leGVjdXRlUHJvcEhhbmRsZXJzKCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVMYWJlbCgpIHtcclxuICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLmxhYmVsRWxlbWVudCwgJ3RleHQnLCBbdGhpcy5sYWJlbF0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRmlsbGVkSW4oKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLmNoZWNrYm94RWxlbWVudFswXSwgJ2ZpbGxlZC1pbicsIHRoaXMuZmlsbGVkSW4pO1xyXG4gIH1cclxufVxyXG4iXX0=