/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ContentChild, Input } from '@angular/core';
import { NgControl } from '@angular/forms';
import { MzValidationComponent } from '../../validation/validation.component';
import { MzSelectDirective } from '../select.directive';
var MzSelectContainerComponent = /** @class */ (function () {
    function MzSelectContainerComponent() {
    }
    /**
     * @return {?}
     */
    MzSelectContainerComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.initControlSubscription();
        this.initSelectSubscription();
    };
    /**
     * @return {?}
     */
    MzSelectContainerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.removeControlSubscription();
        this.removeSelectSubscription();
    };
    /**
     * @return {?}
     */
    MzSelectContainerComponent.prototype.initControlSubscription = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.ngControl) {
            this.mzSelectDirective.disabled = this.ngControl.control.disabled;
            this.statusChangesSubscription = this.ngControl.control.statusChanges.subscribe(function (status) {
                // to handle enabling/disabling formControl
                var /** @type {?} */ disabled = status === 'DISABLED';
                if (disabled !== _this.mzSelectDirective.disabled) {
                    _this.mzSelectDirective.disabled = disabled;
                    _this.mzSelectDirective.handleDisabled();
                }
            });
            this.selectValueSubscription = this.ngControl.valueChanges.subscribe(function (value) {
                // to synchronize input and select when value changes programmatically
                var /** @type {?} */ isDropdownOpen = _this.mzSelectDirective.inputElement.hasClass('active');
                var /** @type {?} */ inputValue = _this.mzSelectDirective.inputElement.val();
                var /** @type {?} */ options = _this.mzSelectDirective.selectElement.children('option');
                var /** @type {?} */ selectedOptions = options.filter('option:selected').toArray();
                var /** @type {?} */ disabledOptions = options.filter(':disabled').toArray();
                var /** @type {?} */ selectedOptionText = selectedOptions.length === 0
                    ? disabledOptions.map(function (option) { return option.textContent; })[0]
                    : selectedOptions.map(function (option) { return option.textContent; }).join(', ');
                if (inputValue !== selectedOptionText && !isDropdownOpen) {
                    _this.mzSelectDirective.updateMaterialSelect();
                }
            });
        }
    };
    /**
     * @return {?}
     */
    MzSelectContainerComponent.prototype.initSelectSubscription = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.mzSelectDirective) {
            this.mzSelectDirective.update
                .subscribe(function () { return _this.registerOnBlur(); })
                .next();
        }
    };
    /**
     * @return {?}
     */
    MzSelectContainerComponent.prototype.registerOnBlur = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.mzSelectDirective.inputElement.on('blur', function () {
            if (_this.ngControl) {
                _this.ngControl.control.markAsTouched();
            }
            if (_this.mzValidationComponent) {
                _this.mzValidationComponent.setValidationState();
            }
        });
    };
    /**
     * @return {?}
     */
    MzSelectContainerComponent.prototype.removeControlSubscription = /**
     * @return {?}
     */
    function () {
        if (this.mzSelectDirective) {
            this.mzSelectDirective.update.unsubscribe();
            this.mzSelectDirective.inputElement.off();
        }
    };
    /**
     * @return {?}
     */
    MzSelectContainerComponent.prototype.removeSelectSubscription = /**
     * @return {?}
     */
    function () {
        if (this.statusChangesSubscription) {
            this.statusChangesSubscription.unsubscribe();
        }
        if (this.selectValueSubscription) {
            this.selectValueSubscription.unsubscribe();
        }
    };
    MzSelectContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mz-select-container',
                    template: "<div\n  class=\"input-field\"\n  [class.inline]=\"inline\"\n>\n  <ng-content></ng-content>\n</div>",
                    styles: [".input-field:not(.inline){display:block}/deep/ .input-field .dropdown-content [type=checkbox]+label{top:-11px}"],
                },] },
    ];
    /** @nocollapse */
    MzSelectContainerComponent.propDecorators = {
        "inline": [{ type: Input },],
        "mzSelectDirective": [{ type: ContentChild, args: [MzSelectDirective,] },],
        "mzValidationComponent": [{ type: ContentChild, args: [MzValidationComponent,] },],
        "ngControl": [{ type: ContentChild, args: [NgControl,] },],
    };
    return MzSelectContainerComponent;
}());
export { MzSelectContainerComponent };
function MzSelectContainerComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MzSelectContainerComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MzSelectContainerComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    MzSelectContainerComponent.propDecorators;
    /** @type {?} */
    MzSelectContainerComponent.prototype.inline;
    /** @type {?} */
    MzSelectContainerComponent.prototype.mzSelectDirective;
    /** @type {?} */
    MzSelectContainerComponent.prototype.mzValidationComponent;
    /** @type {?} */
    MzSelectContainerComponent.prototype.ngControl;
    /** @type {?} */
    MzSelectContainerComponent.prototype.selectValueSubscription;
    /** @type {?} */
    MzSelectContainerComponent.prototype.statusChangesSubscription;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvIiwic291cmNlcyI6WyJzcmMvc2VsZWN0L3NlbGVjdC1jb250YWluZXIvc2VsZWN0LWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDekYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzNDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7Ozs7O0lBc0J0RCxvREFBZTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztLQUMvQjs7OztJQUVELGdEQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO0tBQ2pDOzs7O0lBRUQsNERBQXVCOzs7SUFBdkI7UUFBQSxpQkE4QkM7UUE3QkMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDbkIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFFbEUsSUFBSSxDQUFDLHlCQUF5QixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsVUFBQyxNQUFjOztnQkFFN0YscUJBQU0sUUFBUSxHQUFHLE1BQU0sS0FBSyxVQUFVLENBQUM7Z0JBQ3ZDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsS0FBSyxL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QUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzlDO1FBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDNUM7S0FDRjs7Z0JBL0ZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixRQUFRLEVBQUUsb0dBS0w7b0JBQ0wsTUFBTSxFQUFFLENBQUMsZ0hBQWdILENBQUM7aUJBQzNIOzs7OzJCQUVFLEtBQUs7c0NBRUwsWUFBWSxTQUFDLGlCQUFpQjswQ0FDOUIsWUFBWSxTQUFDLHFCQUFxQjs4QkFDbEMsWUFBWSxTQUFDLFNBQVM7O3FDQXRCekI7O1NBaUJhLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgQ29udGVudENoaWxkLCBJbnB1dCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBNelZhbGlkYXRpb25Db21wb25lbnQgfSBmcm9tICcuLi8uLi92YWxpZGF0aW9uL3ZhbGlkYXRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgTXpTZWxlY3REaXJlY3RpdmUgfSBmcm9tICcuLi9zZWxlY3QuZGlyZWN0aXZlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXotc2VsZWN0LWNvbnRhaW5lcicsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2XHJcbiAgY2xhc3M9XCJpbnB1dC1maWVsZFwiXHJcbiAgW2NsYXNzLmlubGluZV09XCJpbmxpbmVcIlxyXG4+XHJcbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L2Rpdj5gLFxyXG4gIHN0eWxlczogW2AuaW5wdXQtZmllbGQ6bm90KC5pbmxpbmUpe2Rpc3BsYXk6YmxvY2t9L2RlZXAvIC5pbnB1dC1maWVsZCAuZHJvcGRvd24tY29udGVudCBbdHlwZT1jaGVja2JveF0rbGFiZWx7dG9wOi0xMXB4fWBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpTZWxlY3RDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpIGlubGluZTogYm9vbGVhbjtcclxuXHJcbiAgQENvbnRlbnRDaGlsZChNelNlbGVjdERpcmVjdGl2ZSkgbXpTZWxlY3REaXJlY3RpdmU6IE16U2VsZWN0RGlyZWN0aXZlO1xyXG4gIEBDb250ZW50Q2hpbGQoTXpWYWxpZGF0aW9uQ29tcG9uZW50KSBtelZhbGlkYXRpb25Db21wb25lbnQ6IE16VmFsaWRhdGlvbkNvbXBvbmVudDtcclxuICBAQ29udGVudENoaWxkKE5nQ29udHJvbCkgbmdDb250cm9sOiBOZ0NvbnRyb2w7XHJcblxyXG4gIHNlbGVjdFZhbHVlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcbiAgc3RhdHVzQ2hhbmdlc1N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLmluaXRDb250cm9sU3Vic2NyaXB0aW9uKCk7XHJcbiAgICB0aGlzLmluaXRTZWxlY3RTdWJzY3JpcHRpb24oKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5yZW1vdmVDb250cm9sU3Vic2NyaXB0aW9uKCk7XHJcbiAgICB0aGlzLnJlbW92ZVNlbGVjdFN1YnNjcmlwdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgaW5pdENvbnRyb2xTdWJzY3JpcHRpb24oKSB7XHJcbiAgICBpZiAodGhpcy5uZ0NvbnRyb2wpIHtcclxuICAgICAgdGhpcy5telNlbGVjdERpcmVjdGl2ZS5kaXNhYmxlZCA9IHRoaXMubmdDb250cm9sLmNvbnRyb2wuZGlzYWJsZWQ7XHJcblxyXG4gICAgICB0aGlzLnN0YXR1c0NoYW5nZXNTdWJzY3JpcHRpb24gPSB0aGlzLm5nQ29udHJvbC5jb250cm9sLnN0YXR1c0NoYW5nZXMuc3Vic2NyaWJlKChzdGF0dXM6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIC8vIHRvIGhhbmRsZSBlbmFibGluZy9kaXNhYmxpbmcgZm9ybUNvbnRyb2xcclxuICAgICAgICBjb25zdCBkaXNhYmxlZCA9IHN0YXR1cyA9PT0gJ0RJU0FCTEVEJztcclxuICAgICAgICBpZiAoZGlzYWJsZWQgIT09IHRoaXMubXpTZWxlY3REaXJlY3RpdmUuZGlzYWJsZWQpIHtcclxuICAgICAgICAgIHRoaXMubXpTZWxlY3REaXJlY3RpdmUuZGlzYWJsZWQgPSBkaXNhYmxlZDtcclxuICAgICAgICAgIHRoaXMubXpTZWxlY3REaXJlY3RpdmUuaGFuZGxlRGlzYWJsZWQoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5zZWxlY3RWYWx1ZVN1YnNjcmlwdGlvbiA9IHRoaXMubmdDb250cm9sLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKHZhbHVlOiBhbnkpID0+IHtcclxuICAgICAgICAvLyB0byBzeW5jaHJvbml6ZSBpbnB1dCBhbmQgc2VsZWN0IHdoZW4gdmFsdWUgY2hhbmdlcyBwcm9ncmFtbWF0aWNhbGx5XHJcbiAgICAgICAgY29uc3QgaXNEcm9wZG93bk9wZW4gPSB0aGlzLm16U2VsZWN0RGlyZWN0aXZlLmlucHV0RWxlbWVudC5oYXNDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgY29uc3QgaW5wdXRWYWx1ZSA9IHRoaXMubXpTZWxlY3REaXJlY3RpdmUuaW5wdXRFbGVtZW50LnZhbCgpO1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLm16U2VsZWN0RGlyZWN0aXZlLnNlbGVjdEVsZW1lbnQuY2hpbGRyZW4oJ29wdGlvbicpO1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9ucyA9IG9wdGlvbnMuZmlsdGVyKCdvcHRpb246c2VsZWN0ZWQnKS50b0FycmF5KCk7XHJcbiAgICAgICAgY29uc3QgZGlzYWJsZWRPcHRpb25zID0gb3B0aW9ucy5maWx0ZXIoJzpkaXNhYmxlZCcpLnRvQXJyYXkoKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRPcHRpb25UZXh0ID0gc2VsZWN0ZWRPcHRpb25zLmxlbmd0aCA9PT0gMFxyXG4gICAgICAgICAgPyBkaXNhYmxlZE9wdGlvbnMubWFwKG9wdGlvbiA9PiBvcHRpb24udGV4dENvbnRlbnQpWzBdXHJcbiAgICAgICAgICA6IHNlbGVjdGVkT3B0aW9ucy5tYXAob3B0aW9uID0+IG9wdGlvbi50ZXh0Q29udGVudCkuam9pbignLCAnKTtcclxuXHJcbiAgICAgICAgaWYgKGlucHV0VmFsdWUgIT09IHNlbGVjdGVkT3B0aW9uVGV4dCAmJiAhaXNEcm9wZG93bk9wZW4pIHtcclxuICAgICAgICAgIHRoaXMubXpTZWxlY3REaXJlY3RpdmUudXBkYXRlTWF0ZXJpYWxTZWxlY3QoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5pdFNlbGVjdFN1YnNjcmlwdGlvbigpIHtcclxuICAgIGlmICh0aGlzLm16U2VsZWN0RGlyZWN0aXZlKSB7XHJcbiAgICAgIHRoaXMubXpTZWxlY3REaXJlY3RpdmUudXBkYXRlXHJcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnJlZ2lzdGVyT25CbHVyKCkpXHJcbiAgICAgICAgLm5leHQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25CbHVyKCkge1xyXG4gICAgdGhpcy5telNlbGVjdERpcmVjdGl2ZS5pbnB1dEVsZW1lbnQub24oJ2JsdXInLCAoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLm5nQ29udHJvbCkge1xyXG4gICAgICAgIHRoaXMubmdDb250cm9sLmNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLm16VmFsaWRhdGlvbkNvbXBvbmVudCkge1xyXG4gICAgICAgIHRoaXMubXpWYWxpZGF0aW9uQ29tcG9uZW50LnNldFZhbGlkYXRpb25TdGF0ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlbW92ZUNvbnRyb2xTdWJzY3JpcHRpb24oKSB7XHJcbiAgICBpZiAodGhpcy5telNlbGVjdERpcmVjdGl2ZSkge1xyXG4gICAgICB0aGlzLm16U2VsZWN0RGlyZWN0aXZlLnVwZGF0ZS51bnN1YnNjcmliZSgpO1xyXG4gICAgICB0aGlzLm16U2VsZWN0RGlyZWN0aXZlLmlucHV0RWxlbWVudC5vZmYoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbW92ZVNlbGVjdFN1YnNjcmlwdGlvbigpIHtcclxuICAgIGlmICh0aGlzLnN0YXR1c0NoYW5nZXNTdWJzY3JpcHRpb24pIHtcclxuICAgICAgdGhpcy5zdGF0dXNDaGFuZ2VzU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zZWxlY3RWYWx1ZVN1YnNjcmlwdGlvbikge1xyXG4gICAgICB0aGlzLnNlbGVjdFZhbHVlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==