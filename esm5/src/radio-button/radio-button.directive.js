/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, HostBinding, Input, Renderer } from '@angular/core';
import { HandlePropChanges } from '../shared/index';
var MzRadioButtonDirective = /** @class */ (function (_super) {
    tslib_1.__extends(MzRadioButtonDirective, _super);
    function MzRadioButtonDirective(elementRef, renderer) {
        var _this = _super.call(this) || this;
        _this.elementRef = elementRef;
        _this.renderer = renderer;
        return _this;
    }
    /**
     * @return {?}
     */
    MzRadioButtonDirective.prototype.ngOnInit = /**
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
    MzRadioButtonDirective.prototype.initHandlers = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.handlers = {
            label: function () { return _this.handleLabel(); },
            withGap: function () { return _this.handleWithGap(); },
        };
    };
    /**
     * @return {?}
     */
    MzRadioButtonDirective.prototype.initElements = /**
     * @return {?}
     */
    function () {
        this.inputElement = $(this.elementRef.nativeElement);
        this.inputContainerElement = $(this.elementRef.nativeElement).parent('.radio-button-field');
        this.labelElement = this.createLabelElement();
    };
    /**
     * @return {?}
     */
    MzRadioButtonDirective.prototype.createLabelElement = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ labelElement = document.createElement('label');
        labelElement.setAttribute('for', this.id);
        this.renderer.invokeElementMethod(this.inputElement, 'after', [labelElement]);
        return $(labelElement);
    };
    /**
     * @return {?}
     */
    MzRadioButtonDirective.prototype.handleProperties = /**
     * @return {?}
     */
    function () {
        if (this.inputContainerElement.length === 0) {
            console.error('Radio Button must be placed inside a [mz-radio-button-container] tag', this.inputElement);
            return;
        }
        _super.prototype.executePropHandlers.call(this);
    };
    /**
     * @return {?}
     */
    MzRadioButtonDirective.prototype.handleLabel = /**
     * @return {?}
     */
    function () {
        this.renderer.invokeElementMethod(this.labelElement, 'text', [this.label]);
    };
    /**
     * @return {?}
     */
    MzRadioButtonDirective.prototype.handleWithGap = /**
     * @return {?}
     */
    function () {
        this.renderer.setElementClass(this.inputElement[0], 'with-gap', this.withGap);
    };
    MzRadioButtonDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'input[mzRadioButton], input[mz-radio-button]',
                },] },
    ];
    /** @nocollapse */
    MzRadioButtonDirective.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: Renderer, },
    ]; };
    MzRadioButtonDirective.propDecorators = {
        "id": [{ type: HostBinding }, { type: Input },],
        "label": [{ type: Input },],
        "withGap": [{ type: Input },],
    };
    return MzRadioButtonDirective;
}(HandlePropChanges));
export { MzRadioButtonDirective };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8tYnV0dG9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXRlcmlhbGl6ZS8iLCJzb3VyY2VzIjpbInNyYy9yYWRpby1idXR0b24vcmFkaW8tYnV0dG9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQVUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTVGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztJQUtSLGtEQUFpQjtJQVkzRCxnQ0FBb0IsVUFBc0IsRUFBVSxRQUFrQjtRQUF0RSxZQUNFLGlCQUFPLFNBQ1I7UUFGbUIsZ0JBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxjQUFRLEdBQVIsUUFBUSxDQUFVOztLQUVyRTs7OztJQUVELHlDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7S0FDekI7Ozs7SUFFRCw2Q0FBWTs7O0lBQVo7UUFBQSxpQkFLQztRQUpDLElBQUksQ0FBQyxRQUFRLEdBQUc7WUFDZCxLQUFLLEVBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxXQUFXLEVBQUUsRUFBbEIsQ0FBa0I7WUFDL0IsT0FBTyxFQUFFLGNBQU0sT0FBQSxLQUFJLENBQUMsYUFBYSxFQUFFLEVBQXBCLENBQW9CO1NBQ3BDLENBQUM7S0FDSDs7OztJQUVELDZDQUFZOzs7SUFBWjtRQUNFLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLHFCQUFxQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQzVGLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7S0FDL0M7Ozs7SUFFRCxtREFBa0I7OztJQUFsQjtRQUNFLHFCQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JELFlBQVksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUUxQyxJQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUU5RSxNQUFNLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO0tBQ3hCOzs7O0lBRUQsaURBQWdCOzs7SUFBaEI7UUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxzRUFBc0UsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDekcsTUFBTSxDQUFDO1NBQ1I7UUFFRCxpQkFBTSxtQkFBbUIsV0FBRSxDQUFDO0tBQzdCOzs7O0lBRUQsNENBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0tBQzVFOzs7O0lBRUQsOENBQWE7OztJQUFiO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQy9FOztnQkE5REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw4Q0FBOEM7aUJBQ3pEOzs7O2dCQU5tQixVQUFVO2dCQUE4QixRQUFROzs7dUJBU2pFLFdBQVcsWUFBSSxLQUFLOzBCQUdwQixLQUFLOzRCQUNMLEtBQUs7O2lDQWJSO0VBTzRDLGlCQUFpQjtTQUFoRCxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nLCBJbnB1dCwgT25Jbml0LCBSZW5kZXJlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgSGFuZGxlUHJvcENoYW5nZXMgfSBmcm9tICcuLi9zaGFyZWQvaW5kZXgnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdpbnB1dFttelJhZGlvQnV0dG9uXSwgaW5wdXRbbXotcmFkaW8tYnV0dG9uXScsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNelJhZGlvQnV0dG9uRGlyZWN0aXZlIGV4dGVuZHMgSGFuZGxlUHJvcENoYW5nZXMgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIC8vIG5hdGl2ZSBwcm9wZXJ0aWVzXHJcbiAgQEhvc3RCaW5kaW5nKCkgQElucHV0KCkgaWQ6IHN0cmluZztcclxuXHJcbiAgLy8gZGlyZWN0aXZlIHByb3BlcnRpZXNcclxuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHdpdGhHYXA6IGJvb2xlYW47XHJcblxyXG4gIGlucHV0RWxlbWVudDogSlF1ZXJ5O1xyXG4gIGlucHV0Q29udGFpbmVyRWxlbWVudDogSlF1ZXJ5O1xyXG4gIGxhYmVsRWxlbWVudDogSlF1ZXJ5O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluaXRIYW5kbGVycygpO1xyXG4gICAgdGhpcy5pbml0RWxlbWVudHMoKTtcclxuICAgIHRoaXMuaGFuZGxlUHJvcGVydGllcygpO1xyXG4gIH1cclxuXHJcbiAgaW5pdEhhbmRsZXJzKCkge1xyXG4gICAgdGhpcy5oYW5kbGVycyA9IHtcclxuICAgICAgbGFiZWw6ICgpID0+IHRoaXMuaGFuZGxlTGFiZWwoKSxcclxuICAgICAgd2l0aEdhcDogKCkgPT4gdGhpcy5oYW5kbGVXaXRoR2FwKCksXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgaW5pdEVsZW1lbnRzKCkge1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQgPSAkKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcclxuICAgIHRoaXMuaW5wdXRDb250YWluZXJFbGVtZW50ID0gJCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkucGFyZW50KCcucmFkaW8tYnV0dG9uLWZpZWxkJyk7XHJcbiAgICB0aGlzLmxhYmVsRWxlbWVudCA9IHRoaXMuY3JlYXRlTGFiZWxFbGVtZW50KCk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVMYWJlbEVsZW1lbnQoKSB7XHJcbiAgICBjb25zdCBsYWJlbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgbGFiZWxFbGVtZW50LnNldEF0dHJpYnV0ZSgnZm9yJywgdGhpcy5pZCk7XHJcblxyXG4gICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMuaW5wdXRFbGVtZW50LCAnYWZ0ZXInLCBbbGFiZWxFbGVtZW50XSk7XHJcblxyXG4gICAgcmV0dXJuICQobGFiZWxFbGVtZW50KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVByb3BlcnRpZXMoKSB7XHJcbiAgICBpZiAodGhpcy5pbnB1dENvbnRhaW5lckVsZW1lbnQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1JhZGlvIEJ1dHRvbiBtdXN0IGJlIHBsYWNlZCBpbnNpZGUgYSBbbXotcmFkaW8tYnV0dG9uLWNvbnRhaW5lcl0gdGFnJywgdGhpcy5pbnB1dEVsZW1lbnQpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgc3VwZXIuZXhlY3V0ZVByb3BIYW5kbGVycygpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlTGFiZWwoKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QodGhpcy5sYWJlbEVsZW1lbnQsICd0ZXh0JywgW3RoaXMubGFiZWxdKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVdpdGhHYXAoKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLmlucHV0RWxlbWVudFswXSwgJ3dpdGgtZ2FwJywgdGhpcy53aXRoR2FwKTtcclxuICB9XHJcbn1cclxuIl19