/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectorRef, Directive, ElementRef, HostBinding, Input, NgZone, Optional, Renderer } from '@angular/core';
import { NgControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { HandlePropChanges } from '../shared/index';
var MzTimepickerDirective = /** @class */ (function (_super) {
    tslib_1.__extends(MzTimepickerDirective, _super);
    function MzTimepickerDirective(ngControl, changeDetectorRef, elementRef, renderer, zone) {
        var _this = _super.call(this) || this;
        _this.ngControl = ngControl;
        _this.changeDetectorRef = changeDetectorRef;
        _this.elementRef = elementRef;
        _this.renderer = renderer;
        _this.zone = zone;
        // materialize uses ClockPicker to create the timepicker
        // complete list of options is available at the following address
        // https://github.com/weareoutman/clockpicker#options
        _this.options = {};
        _this.stopChangePropagation = false;
        return _this;
    }
    Object.defineProperty(MzTimepickerDirective.prototype, "clockpicker", {
        get: /**
         * @return {?}
         */
        function () {
            return $('.clockpicker');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MzTimepickerDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.initHandlers();
        this.initElements();
        this.initTimepicker();
        this.handleProperties();
    };
    /**
     * @return {?}
     */
    MzTimepickerDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        // remove event handlers
        this.inputElement.off();
        // remove clockpicker added to body by default
        this.clockpicker.remove();
    };
    /**
     * @return {?}
     */
    MzTimepickerDirective.prototype.initHandlers = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.handlers = {
            label: function () { return _this.handleLabel(); },
            placeholder: function () { return _this.handlePlaceholder(); },
        };
    };
    /**
     * @return {?}
     */
    MzTimepickerDirective.prototype.initElements = /**
     * @return {?}
     */
    function () {
        this.inputContainerElement = /** @type {?} */ ($(this.elementRef.nativeElement).parent('.input-field'));
        this.inputElement = /** @type {?} */ ($(this.elementRef.nativeElement));
        this.labelElement = /** @type {?} */ (this.createLabelElement());
    };
    /**
     * @return {?}
     */
    MzTimepickerDirective.prototype.initTimepicker = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // append clockpicker to body by default
        if (!this.options.container) {
            this.options.container = 'body';
        }
        // extend afterHide callback to set label active
        var /** @type {?} */ afterHide = this.options && this.options.afterHide || (function () { });
        this.options = Object.assign({}, this.options, {
            afterHide: function () {
                afterHide();
                _this.setLabelActive();
            },
        });
        this.renderer.invokeElementMethod(this.inputElement, 'pickatime', [this.options]);
        if (this.ngControl) {
            // set ngControl value according to selected time in timepicker
            this.inputElement.on('change', function (event) {
                _this.ngControl.control.setValue(event.target.value);
                // mark for change detection
                // fix form validation with ChangeDetectionStrategy.OnPush
                // mark for change detection
                // fix form validation with ChangeDetectionStrategy.OnPush
                _this.changeDetectorRef.markForCheck();
            });
        }
    };
    /**
     * @return {?}
     */
    MzTimepickerDirective.prototype.createLabelElement = /**
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
    MzTimepickerDirective.prototype.handleProperties = /**
     * @return {?}
     */
    function () {
        if (this.inputContainerElement.length === 0) {
            console.error('Input with mz-timepicker directive must be placed inside an [mz-timepicker-container] tag', this.inputElement);
            return;
        }
        _super.prototype.executePropHandlers.call(this);
    };
    /**
     * @return {?}
     */
    MzTimepickerDirective.prototype.handleLabel = /**
     * @return {?}
     */
    function () {
        this.renderer.invokeElementMethod(this.labelElement, 'text', [this.label]);
    };
    /**
     * @return {?}
     */
    MzTimepickerDirective.prototype.handlePlaceholder = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ placeholder = !!this.placeholder ? this.placeholder : null;
        this.renderer.setElementAttribute(this.inputElement[0], 'placeholder', placeholder);
        // fix issue in IE where having a placeholder on input make control dirty and trigger validation
        // on page load... note that it still trigger validation on focus and would need a better fix
        // issue : https://github.com/angular/angular/issues/15299
        // workaround : https://stackoverflow.com/a/44967245/5583283
        if (this.ngControl) {
            this.zone.runOutsideAngular(function () {
                setTimeout(function () { return _this.ngControl.control.markAsPristine(); });
            });
        }
        this.setLabelActive();
    };
    /**
     * @return {?}
     */
    MzTimepickerDirective.prototype.setLabelActive = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // need wait for zone to be stable otherwise it wont make label
        // float in some circonstances (clearing value programmatically for example)
        this.zone.onStable
            .pipe(first())
            .subscribe(function () {
            var /** @type {?} */ inputValue = _this.inputElement[0].value;
            var /** @type {?} */ isActive = !!_this.placeholder || !!inputValue;
            _this.renderer.setElementClass(_this.labelElement[0], 'active', isActive);
        });
    };
    MzTimepickerDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'input[mzTimepicker], input[mz-timepicker]',
                },] },
    ];
    /** @nocollapse */
    MzTimepickerDirective.ctorParameters = function () { return [
        { type: NgControl, decorators: [{ type: Optional },] },
        { type: ChangeDetectorRef, },
        { type: ElementRef, },
        { type: Renderer, },
        { type: NgZone, },
    ]; };
    MzTimepickerDirective.propDecorators = {
        "true": [{ type: HostBinding, args: ['class.timepicker',] },],
        "id": [{ type: Input },],
        "placeholder": [{ type: Input },],
        "label": [{ type: Input },],
        "options": [{ type: Input },],
    };
    return MzTimepickerDirective;
}(HandlePropChanges));
export { MzTimepickerDirective };
function MzTimepickerDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MzTimepickerDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MzTimepickerDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    MzTimepickerDirective.propDecorators;
    /** @type {?} */
    MzTimepickerDirective.prototype.true;
    /** @type {?} */
    MzTimepickerDirective.prototype.id;
    /** @type {?} */
    MzTimepickerDirective.prototype.placeholder;
    /** @type {?} */
    MzTimepickerDirective.prototype.label;
    /** @type {?} */
    MzTimepickerDirective.prototype.options;
    /** @type {?} */
    MzTimepickerDirective.prototype.inputElement;
    /** @type {?} */
    MzTimepickerDirective.prototype.inputContainerElement;
    /** @type {?} */
    MzTimepickerDirective.prototype.labelElement;
    /** @type {?} */
    MzTimepickerDirective.prototype.stopChangePropagation;
    /** @type {?} */
    MzTimepickerDirective.prototype.ngControl;
    /** @type {?} */
    MzTimepickerDirective.prototype.changeDetectorRef;
    /** @type {?} */
    MzTimepickerDirective.prototype.elementRef;
    /** @type {?} */
    MzTimepickerDirective.prototype.renderer;
    /** @type {?} */
    MzTimepickerDirective.prototype.zone;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvIiwic291cmNlcyI6WyJzcmMvdGltZXBpY2tlci90aW1lcGlja2VyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFxQixRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVJLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdkMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7O0lBS1QsaURBQWlCO0lBd0IxRCwrQkFDc0IsV0FDWixtQkFDQSxZQUNBLFVBQ0E7UUFMVixZQU9FLGlCQUFPLFNBQ1I7UUFQcUIsZUFBUyxHQUFULFNBQVM7UUFDckIsdUJBQWlCLEdBQWpCLGlCQUFpQjtRQUNqQixnQkFBVSxHQUFWLFVBQVU7UUFDVixjQUFRLEdBQVIsUUFBUTtRQUNSLFVBQUksR0FBSixJQUFJOzs7O3dCQWhCVSxFQUFFO3NDQUtGLEtBQUs7O0tBYzVCO0lBWkQsc0JBQUksOENBQVc7Ozs7UUFBZjtZQUNFLE1BQU0sQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDMUI7OztPQUFBOzs7O0lBWUQsd0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7S0FDekI7Ozs7SUFFRCwyQ0FBVzs7O0lBQVg7O1FBRUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFH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QyxLQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztTQUN6RSxDQUFDLENBQUM7S0FDTjs7Z0JBOUlGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMkNBQTJDO2lCQUN0RDs7OztnQkFQUSxTQUFTLHVCQWlDYixRQUFRO2dCQWxDSixpQkFBaUI7Z0JBQWEsVUFBVTtnQkFBMkQsUUFBUTtnQkFBN0MsTUFBTTs7O3lCQVUxRSxXQUFXLFNBQUMsa0JBQWtCO3VCQUc5QixLQUFLO2dDQUNMLEtBQUs7MEJBR0wsS0FBSzs0QkFLTCxLQUFLOztnQ0F0QlI7RUFTMkMsaUJBQWlCO1NBQS9DLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nLCBJbnB1dCwgTmdab25lLCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3B0aW9uYWwsIFJlbmRlcmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBIYW5kbGVQcm9wQ2hhbmdlcyB9IGZyb20gJy4uL3NoYXJlZC9pbmRleCc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ2lucHV0W216VGltZXBpY2tlcl0sIGlucHV0W216LXRpbWVwaWNrZXJdJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16VGltZXBpY2tlckRpcmVjdGl2ZSBleHRlbmRzIEhhbmRsZVByb3BDaGFuZ2VzIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MudGltZXBpY2tlcicpIHRydWU7XHJcblxyXG4gIC8vIG5hdGl2ZSBwcm9wZXJ0aWVzXHJcbiAgQElucHV0KCkgaWQ6IHN0cmluZztcclxuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xyXG5cclxuICAvLyBkaXJlY3RpdmUgcHJvcGVydGllc1xyXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XHJcblxyXG4gIC8vIG1hdGVyaWFsaXplIHVzZXMgQ2xvY2tQaWNrZXIgdG8gY3JlYXRlIHRoZSB0aW1lcGlja2VyXHJcbiAgLy8gY29tcGxldGUgbGlzdCBvZiBvcHRpb25zIGlzIGF2YWlsYWJsZSBhdCB0aGUgZm9sbG93aW5nIGFkZHJlc3NcclxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vd2VhcmVvdXRtYW4vY2xvY2twaWNrZXIjb3B0aW9uc1xyXG4gIEBJbnB1dCgpIG9wdGlvbnM6IGFueSA9IHt9O1xyXG5cclxuICBpbnB1dEVsZW1lbnQ6IEpRdWVyeTxIVE1MSW5wdXRFbGVtZW50PjtcclxuICBpbnB1dENvbnRhaW5lckVsZW1lbnQ6IEpRdWVyeTxIVE1MRWxlbWVudD47XHJcbiAgbGFiZWxFbGVtZW50OiBKUXVlcnk8SFRNTExhYmVsRWxlbWVudD47XHJcbiAgc3RvcENoYW5nZVByb3BhZ2F0aW9uID0gZmFsc2U7XHJcblxyXG4gIGdldCBjbG9ja3BpY2tlcigpOiBKUXVlcnk8SFRNTEVsZW1lbnQ+IHtcclxuICAgIHJldHVybiAkKCcuY2xvY2twaWNrZXInKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBuZ0NvbnRyb2w6IE5nQ29udHJvbCxcclxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIsXHJcbiAgICBwcml2YXRlIHpvbmU6IE5nWm9uZSxcclxuICApIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5pdEhhbmRsZXJzKCk7XHJcbiAgICB0aGlzLmluaXRFbGVtZW50cygpO1xyXG4gICAgdGhpcy5pbml0VGltZXBpY2tlcigpO1xyXG4gICAgdGhpcy5oYW5kbGVQcm9wZXJ0aWVzKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIC8vIHJlbW92ZSBldmVudCBoYW5kbGVyc1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQub2ZmKCk7XHJcbiAgICAvLyByZW1vdmUgY2xvY2twaWNrZXIgYWRkZWQgdG8gYm9keSBieSBkZWZhdWx0XHJcbiAgICB0aGlzLmNsb2NrcGlja2VyLnJlbW92ZSgpO1xyXG4gIH1cclxuXHJcbiAgaW5pdEhhbmRsZXJzKCkge1xyXG4gICAgdGhpcy5oYW5kbGVycyA9IHtcclxuICAgICAgbGFiZWw6ICgpID0+IHRoaXMuaGFuZGxlTGFiZWwoKSxcclxuICAgICAgcGxhY2Vob2xkZXI6ICgpID0+IHRoaXMuaGFuZGxlUGxhY2Vob2xkZXIoKSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBpbml0RWxlbWVudHMoKSB7XHJcbiAgICB0aGlzLmlucHV0Q29udGFpbmVyRWxlbWVudCA9ICQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLnBhcmVudCgnLmlucHV0LWZpZWxkJykgYXMgSlF1ZXJ5PEhUTUxFbGVtZW50PjtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50ID0gJCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkgYXMgSlF1ZXJ5PEhUTUxJbnB1dEVsZW1lbnQ+O1xyXG4gICAgdGhpcy5sYWJlbEVsZW1lbnQgPSB0aGlzLmNyZWF0ZUxhYmVsRWxlbWVudCgpIGFzIEpRdWVyeTxIVE1MTGFiZWxFbGVtZW50PjtcclxuICB9XHJcblxyXG4gIGluaXRUaW1lcGlja2VyKCkge1xyXG4gICAgLy8gYXBwZW5kIGNsb2NrcGlja2VyIHRvIGJvZHkgYnkgZGVmYXVsdFxyXG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuY29udGFpbmVyKSB7XHJcbiAgICAgIHRoaXMub3B0aW9ucy5jb250YWluZXIgPSAnYm9keSc7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZXh0ZW5kIGFmdGVySGlkZSBjYWxsYmFjayB0byBzZXQgbGFiZWwgYWN0aXZlXHJcbiAgICBjb25zdCBhZnRlckhpZGUgPSB0aGlzLm9wdGlvbnMgJiYgdGhpcy5vcHRpb25zLmFmdGVySGlkZSB8fCAoKCkgPT4ge30pO1xyXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5vcHRpb25zLCB7XHJcbiAgICAgIGFmdGVySGlkZTogKCkgPT4ge1xyXG4gICAgICAgIGFmdGVySGlkZSgpO1xyXG4gICAgICAgIHRoaXMuc2V0TGFiZWxBY3RpdmUoKTtcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLmlucHV0RWxlbWVudCwgJ3BpY2thdGltZScsIFt0aGlzLm9wdGlvbnNdKTtcclxuXHJcbiAgICBpZiAodGhpcy5uZ0NvbnRyb2wpIHtcclxuICAgICAgLy8gc2V0IG5nQ29udHJvbCB2YWx1ZSBhY2NvcmRpbmcgdG8gc2VsZWN0ZWQgdGltZSBpbiB0aW1lcGlja2VyXHJcbiAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm9uKCdjaGFuZ2UnLCAoZXZlbnQ6IEpRdWVyeS5FdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgICAgIHRoaXMubmdDb250cm9sLmNvbnRyb2wuc2V0VmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuXHJcbiAgICAgICAgLy8gbWFyayBmb3IgY2hhbmdlIGRldGVjdGlvblxyXG4gICAgICAgIC8vIGZpeCBmb3JtIHZhbGlkYXRpb24gd2l0aCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxuICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNyZWF0ZUxhYmVsRWxlbWVudCgpIHtcclxuICAgIGNvbnN0IGxhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBsYWJlbEVsZW1lbnQuc2V0QXR0cmlidXRlKCdmb3InLCB0aGlzLmlkKTtcclxuXHJcbiAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QodGhpcy5pbnB1dEVsZW1lbnQsICdhZnRlcicsIFtsYWJlbEVsZW1lbnRdKTtcclxuXHJcbiAgICByZXR1cm4gJChsYWJlbEVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlUHJvcGVydGllcygpIHtcclxuICAgIGlmICh0aGlzLmlucHV0Q29udGFpbmVyRWxlbWVudC5sZW5ndGggPT09IDApIHtcclxuICAgICAgY29uc29sZS5lcnJvcignSW5wdXQgd2l0aCBtei10aW1lcGlja2VyIGRpcmVjdGl2ZSBtdXN0IGJlIHBsYWNlZCBpbnNpZGUgYW4gW216LXRpbWVwaWNrZXItY29udGFpbmVyXSB0YWcnLCB0aGlzLmlucHV0RWxlbWVudCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBzdXBlci5leGVjdXRlUHJvcEhhbmRsZXJzKCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVMYWJlbCgpIHtcclxuICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLmxhYmVsRWxlbWVudCwgJ3RleHQnLCBbdGhpcy5sYWJlbF0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlUGxhY2Vob2xkZXIoKSB7XHJcbiAgICBjb25zdCBwbGFjZWhvbGRlciA9ICEhdGhpcy5wbGFjZWhvbGRlciA/IHRoaXMucGxhY2Vob2xkZXIgOiBudWxsO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50QXR0cmlidXRlKHRoaXMuaW5wdXRFbGVtZW50WzBdLCAncGxhY2Vob2xkZXInLCBwbGFjZWhvbGRlcik7XHJcblxyXG4gICAgLy8gZml4IGlzc3VlIGluIElFIHdoZXJlIGhhdmluZyBhIHBsYWNlaG9sZGVyIG9uIGlucHV0IG1ha2UgY29udHJvbCBkaXJ0eSBhbmQgdHJpZ2dlciB2YWxpZGF0aW9uXHJcbiAgICAvLyBvbiBwYWdlIGxvYWQuLi4gbm90ZSB0aGF0IGl0IHN0aWxsIHRyaWdnZXIgdmFsaWRhdGlvbiBvbiBmb2N1cyBhbmQgd291bGQgbmVlZCBhIGJldHRlciBmaXhcclxuICAgIC8vIGlzc3VlIDogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTUyOTlcclxuICAgIC8vIHdvcmthcm91bmQgOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDQ5NjcyNDUvNTU4MzI4M1xyXG4gICAgaWYgKHRoaXMubmdDb250cm9sKSB7XHJcbiAgICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLm5nQ29udHJvbC5jb250cm9sLm1hcmtBc1ByaXN0aW5lKCkpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNldExhYmVsQWN0aXZlKCk7XHJcbiAgfVxyXG5cclxuICBzZXRMYWJlbEFjdGl2ZSgpIHtcclxuICAgIC8vIG5lZWQgd2FpdCBmb3Igem9uZSB0byBiZSBzdGFibGUgb3RoZXJ3aXNlIGl0IHdvbnQgbWFrZSBsYWJlbFxyXG4gICAgLy8gZmxvYXQgaW4gc29tZSBjaXJjb25zdGFuY2VzIChjbGVhcmluZyB2YWx1ZSBwcm9ncmFtbWF0aWNhbGx5IGZvciBleGFtcGxlKVxyXG4gICAgdGhpcy56b25lLm9uU3RhYmxlXHJcbiAgICAgIC5waXBlKGZpcnN0KCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlucHV0VmFsdWUgPSB0aGlzLmlucHV0RWxlbWVudFswXS52YWx1ZTtcclxuICAgICAgICBjb25zdCBpc0FjdGl2ZSA9ICEhdGhpcy5wbGFjZWhvbGRlciB8fCAhIWlucHV0VmFsdWU7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5sYWJlbEVsZW1lbnRbMF0sICdhY3RpdmUnLCBpc0FjdGl2ZSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=