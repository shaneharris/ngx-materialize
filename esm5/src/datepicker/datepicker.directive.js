/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectorRef, Directive, ElementRef, HostBinding, Input, Optional, Renderer } from '@angular/core';
import { NgControl } from '@angular/forms';
import { HandlePropChanges } from '../shared/index';
var MzDatepickerDirective = /** @class */ (function (_super) {
    tslib_1.__extends(MzDatepickerDirective, _super);
    function MzDatepickerDirective(ngControl, changeDetectorRef, elementRef, renderer) {
        var _this = _super.call(this) || this;
        _this.ngControl = ngControl;
        _this.changeDetectorRef = changeDetectorRef;
        _this.elementRef = elementRef;
        _this.renderer = renderer;
        // materialize uses pickadate.js to create the datepicker
        // complete list of options is available at the following address
        // http://amsul.ca/pickadate.js/date/#options
        _this.options = {};
        _this.isInitRound = true;
        _this.stopChangePropagation = false;
        return _this;
    }
    Object.defineProperty(MzDatepickerDirective.prototype, "format", {
        get: /**
         * @return {?}
         */
        function () {
            return this.options.format || this.options.formatSubmit || null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MzDatepickerDirective.prototype, "formatSubmit", {
        get: /**
         * @return {?}
         */
        function () {
            return this.options.formatSubmit || this.options.format || null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MzDatepickerDirective.prototype, "ngControlValue", {
        get: /**
         * @return {?}
         */
        function () {
            return this.ngControl.value === '' ? null : this.ngControl.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MzDatepickerDirective.prototype, "picker", {
        get: /**
         * @return {?}
         */
        function () {
            return this.inputElement.pickadate('picker');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MzDatepickerDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.initHandlers();
        this.initElements();
        this.initDatepicker();
        this.initInputSubscription();
        this.handleProperties();
        this.isInitRound = false;
    };
    /**
     * @return {?}
     */
    MzDatepickerDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.inputValueSubscription) {
            this.inputValueSubscription.unsubscribe();
        }
    };
    /**
     * @return {?}
     */
    MzDatepickerDirective.prototype.initHandlers = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.handlers = {
            label: function () { return _this.handleLabel(); },
            options: function () { return _this.handleOptions(); },
            placeholder: function () { return _this.handlePlaceholder(); },
        };
    };
    /**
     * @return {?}
     */
    MzDatepickerDirective.prototype.initElements = /**
     * @return {?}
     */
    function () {
        this.inputContainerElement = $(this.elementRef.nativeElement).parent('.input-field');
        this.inputElement = $(this.elementRef.nativeElement);
        this.labelElement = this.createLabelElement();
    };
    /**
     * @return {?}
     */
    MzDatepickerDirective.prototype.initDatepicker = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // set default format/formatSubmit options
        if (this.format) {
            this.options.format = this.format;
        }
        if (this.formatSubmit) {
            this.options.formatSubmit = this.formatSubmit;
        }
        // extends onClose function to fix datepicker focus issue
        // https://github.com/Dogfalo/materialize/issues/2067#issuecomment-142107599
        var /** @type {?} */ onCloseFn = this.options && this.options.onClose || (function () { });
        this.options = Object.assign({}, this.options, {
            onClose: function (event) {
                onCloseFn(event);
                _this.renderer.invokeElementMethod(document.activeElement, 'blur');
            },
        });
        this.renderer.invokeElementMethod(this.inputElement, 'pickadate', [this.options]);
        if (this.ngControl) {
            // set datepicker initial value according to ngControl
            this.picker.set('select', this.ngControlValue, { format: this.formatSubmit });
            // set ngControl value according to selected date in datepicker
            this.picker.on('set', function () {
                // handle stop propagation
                if (_this.stopChangePropagation) {
                    _this.stopChangePropagation = false;
                    return;
                }
                else {
                    _this.stopChangePropagation = true;
                }
                // apply options.formatSubmit to ngControl value
                var /** @type {?} */ submitValue = _this.formatSubmit
                    ? _this.picker.get('select', _this.formatSubmit)
                    : _this.picker.get('value');
                _this.ngControl.control.setValue(submitValue);
                // apply options.format to input text
                var /** @type {?} */ formatValue = _this.format
                    ? _this.picker.get('select', _this.format)
                    : _this.picker.get('value');
                _this.inputElement.val(formatValue);
                // set label active status
                // set label active status
                _this.setLabelActive();
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
    MzDatepickerDirective.prototype.initInputSubscription = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.ngControl) {
            this.inputValueSubscription = this.ngControl.valueChanges.subscribe(function () {
                // handle stop propagation
                if (_this.stopChangePropagation) {
                    _this.stopChangePropagation = false;
                    return;
                }
                else {
                    _this.stopChangePropagation = true;
                }
                // set selected date in datepicker according to ngControl value
                // set selected date in datepicker according to ngControl value
                _this.picker.set('select', _this.ngControlValue, { format: _this.formatSubmit });
                // set label active status
                // set label active status
                _this.setLabelActive();
            });
        }
    };
    /**
     * @return {?}
     */
    MzDatepickerDirective.prototype.createLabelElement = /**
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
    MzDatepickerDirective.prototype.handleProperties = /**
     * @return {?}
     */
    function () {
        if (this.inputContainerElement.length === 0) {
            console.error('Input with mz-datepicker directive must be placed inside an [mz-datepicker-container] tag', this.inputElement);
            return;
        }
        _super.prototype.executePropHandlers.call(this);
    };
    /**
     * @return {?}
     */
    MzDatepickerDirective.prototype.handleLabel = /**
     * @return {?}
     */
    function () {
        this.renderer.invokeElementMethod(this.labelElement, 'text', [this.label]);
    };
    /**
     * @return {?}
     */
    MzDatepickerDirective.prototype.handleOptions = /**
     * @return {?}
     */
    function () {
        if (!this.isInitRound) {
            this.picker.set(this.options);
        }
    };
    /**
     * @return {?}
     */
    MzDatepickerDirective.prototype.handlePlaceholder = /**
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
            setTimeout(function () { return _this.ngControl.control.markAsPristine(); });
        }
        this.setLabelActive();
    };
    /**
     * @return {?}
     */
    MzDatepickerDirective.prototype.setLabelActive = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // need setTimeout otherwise it wont make label float in some circonstances (forcing validation for example)
        setTimeout(function () {
            var /** @type {?} */ inputValue = (/** @type {?} */ (_this.inputElement[0])).value;
            var /** @type {?} */ isActive = !!_this.placeholder || !!inputValue;
            _this.renderer.setElementClass(_this.labelElement[0], 'active', isActive);
        });
    };
    MzDatepickerDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'input[mzDatepicker], input[mz-datepicker]',
                },] },
    ];
    /** @nocollapse */
    MzDatepickerDirective.ctorParameters = function () { return [
        { type: NgControl, decorators: [{ type: Optional },] },
        { type: ChangeDetectorRef, },
        { type: ElementRef, },
        { type: Renderer, },
    ]; };
    MzDatepickerDirective.propDecorators = {
        "true": [{ type: HostBinding, args: ['class.datepicker',] },],
        "id": [{ type: Input },],
        "placeholder": [{ type: Input },],
        "label": [{ type: Input },],
        "options": [{ type: Input },],
    };
    return MzDatepickerDirective;
}(HandlePropChanges));
export { MzDatepickerDirective };
function MzDatepickerDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MzDatepickerDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MzDatepickerDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    MzDatepickerDirective.propDecorators;
    /** @type {?} */
    MzDatepickerDirective.prototype.true;
    /** @type {?} */
    MzDatepickerDirective.prototype.id;
    /** @type {?} */
    MzDatepickerDirective.prototype.placeholder;
    /** @type {?} */
    MzDatepickerDirective.prototype.label;
    /** @type {?} */
    MzDatepickerDirective.prototype.options;
    /** @type {?} */
    MzDatepickerDirective.prototype.inputElement;
    /** @type {?} */
    MzDatepickerDirective.prototype.inputContainerElement;
    /** @type {?} */
    MzDatepickerDirective.prototype.inputValueSubscription;
    /** @type {?} */
    MzDatepickerDirective.prototype.isInitRound;
    /** @type {?} */
    MzDatepickerDirective.prototype.labelElement;
    /** @type {?} */
    MzDatepickerDirective.prototype.stopChangePropagation;
    /** @type {?} */
    MzDatepickerDirective.prototype.ngControl;
    /** @type {?} */
    MzDatepickerDirective.prototype.changeDetectorRef;
    /** @type {?} */
    MzDatepickerDirective.prototype.elementRef;
    /** @type {?} */
    MzDatepickerDirective.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvIiwic291cmNlcyI6WyJzcmMvZGF0ZXBpY2tlci9kYXRlcGlja2VyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQXFCLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEksT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztJQUtULGlEQUFpQjtJQXNDMUQsK0JBQ3NCLFdBQ1osbUJBQ0EsWUFDQTtRQUpWLFlBTUUsaUJBQU8sU0FDUjtRQU5xQixlQUFTLEdBQVQsU0FBUztRQUNyQix1QkFBaUIsR0FBakIsaUJBQWlCO1FBQ2pCLGdCQUFVLEdBQVYsVUFBVTtRQUNWLGNBQVEsR0FBUixRQUFROzs7O3dCQTdCd0IsRUFBRTs0QkFLOUIsSUFBSTtzQ0FFTSxLQUFLOztLQXlCNUI7SUF2QkQsc0JBQUkseUNBQU07Ozs7UUFBVjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUM7U0FDakU7OztPQUFBO0lBRUQsc0JBQUksK0NBQVk7Ozs7UUFBaEI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDO1NBQ2pFOzs7T0FBQTtJQUVELHNCQUFJLGlEQUFjOzs7O1FBQWxCO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztTQUNsRTs7O09BQUE7SUFFRCxzQkFBSSx5Q0FBTTs7OztRQUFWO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzlDOzs7T0FBQTs7OztJQVdELHdDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0tBQzFCOzs7O0lBRUQsMkNBQVc7OztJQUFYO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDM0M7S0FDRjs7OztJQUVELDRDQUFZOzs7SUFBWjtRQUFBLGlCQU1DO1FBTEMsSUFBSSxDQUFDLFFBQVEsR0FBRztZQUNkLEtBQUssRUFBRSxjQUFNLE9BQUEsS0FBSSxDQUFDLFdBQVcsRUFBRSxFQUFsQixDQUFrQjtZQUMvQixPQUFPLEVBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxhQUFhLEVBQUUsRUFBcEIsQ0FBb0I7WUFDbkMsV0FBVyxFQUFFLGNBQU0sT0FBQSxLQUFJLENBQUMsaUJBQWlCLEVBQUUsRUFBeEIsQ0FBd0I7U0FDNUMsQ0FBQztLQUNIOzs7O0lBRUQsNENBQVk7OztJQUFaO1FBQ0UsSUFBSSxDQUFDLHFCQUFxQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNyRixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7S0FDL0M7Ozs7SUFFRCw4Q0FBYzs7O0lBQWQ7UUFBQSxpQkF1REM7O1FBckRDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDbkM7UUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQy9DOzs7UUFJRCxxQkFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sSUFBSSxDQUFDLGVBQVEsQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUM3QyxPQUFPLEVBQUUsVUFBQyxLQUFLO2dCQUNiLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDakIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQ25FO1NBQ0YsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBRWxGLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDOztZQUVuQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQzs7WUFHOUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFOztnQkFFcEIsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztvQkFDL0IsS0FBSSxDQUFDLHFCQUFxQixHQUFHLEtBQUssQ0FBQztvQkFDbkMsTUFBTSxDQUFDO2lCQUNSO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLEtBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUM7aUJBQ25DOztnQkFHRCxxQkFBTSxXQUFXLEdBQUcsS0FBSSxDQUFDLFlBQVk7b0JBQ25DLENBQUMsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsS0FBSSxDQUFDLFlBQVksQ0FBQztvQkFDOUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM3QixLQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7O2dCQUc3QyxxQkFBTSxXQUFXLEdBQUcsS0FBSSxDQUFDLE1BQU07b0JBQzdCLENBQUMsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsS0FBSSxDQUFDLE1BQU0sQ0FBQztvQkFDeEMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM3QixLQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQzs7Z0JBR25DLEFBREEsMEJBQTBCO2dCQUMxQixLQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7OztnQkFJdEIsQUFGQSw0QkFBNEI7Z0JBQzVCLDBEQUEwRDtnQkFDMUQsS0FBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO2FBQ3ZDLENBQUMsQ0FBQztTQUNKO0tBQ0Y7Ozs7SUFFRCxxREFBcUI7OztJQUFyQjtRQUFBLGlCQWtCQztRQWpCQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNuQixJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDOztnQkFFbEUsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztvQkFDL0IsS0FBSSxDQUFDLHFCQUFxQixHQUFHLEtBQUssQ0FBQztvQkFDbkMsTUFBTSxDQUFDO2lCQUNSO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLEtBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUM7aUJBQ25DOztnQkFHRCxBQURBLCtEQUErRDtnQkFDL0QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEtBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7O2dCQUc5RSxBQURBLDBCQUEwQjtnQkFDMUIsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2FBQ3ZCLENBQUMsQ0FBQztTQUNKO0tBQ0Y7Ozs7SUFFRCxrREFBa0I7OztJQUFsQjtRQUNFLHFCQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JELFlBQVksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUUxQyxJQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUU5RSxNQUFNLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO0tBQ3hCOzs7O0lBRUQsZ0RBQWdCOzs7SUFBaEI7UUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUMsT0FBTyxDQUFDLEtBQUssQ0FBQywyRkFBMkYsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDOUgsTUFBTSxDQUFDO1NBQ1I7UUFFRCxpQkFBTSxtQkFBbUIsV0FBRSxDQUFDO0tBQzdCOzs7O0lBRUQsMkNBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0tBQzVFOzs7O0lBRUQsNkNBQWE7OztJQUFiO1FBQ0UsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDL0I7S0FDRjs7OztJQUVELGlEQUFpQjs7O0lBQWpCO1FBQUEsaUJBYUM7UUFaQyxxQkFBTSxXQUFXLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNqRSxJQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDOzs7OztRQU1wRixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNuQixVQUFVLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUF2QyxDQUF1QyxDQUFDLENBQUM7U0FDM0Q7UUFFRCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7S0FDdkI7Ozs7SUFFRCw4Q0FBYzs7O0lBQWQ7UUFBQSxpQkFPQzs7UUFMQyxVQUFVLENBQUM7WUFDVCxxQkFBTSxVQUFVLEdBQUcsbUJBQW1CLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxLQUFLLENBQUM7WUFDbEUscUJBQU0sUUFBUSxHQUFHLENBQUMsQ0FBQyxLQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUM7WUFDcEQsS0FBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDekUsQ0FBQyxDQUFDO0tBQ0o7O2dCQTlNRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDJDQUEyQztpQkFDdEQ7Ozs7Z0JBUFEsU0FBUyx1QkErQ2IsUUFBUTtnQkFoREosaUJBQWlCO2dCQUFhLFVBQVU7Z0JBQW1ELFFBQVE7Ozt5QkFVekcsV0FBVyxTQUFDLGtCQUFrQjt1QkFHOUIsS0FBSztnQ0FDTCxLQUFLOzBCQUdMLEtBQUs7NEJBS0wsS0FBSzs7Z0NBdEJSO0VBUzJDLGlCQUFpQjtTQUEvQyxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0QmluZGluZywgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPcHRpb25hbCwgUmVuZGVyZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IEhhbmRsZVByb3BDaGFuZ2VzIH0gZnJvbSAnLi4vc2hhcmVkL2luZGV4JztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnaW5wdXRbbXpEYXRlcGlja2VyXSwgaW5wdXRbbXotZGF0ZXBpY2tlcl0nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpEYXRlcGlja2VyRGlyZWN0aXZlIGV4dGVuZHMgSGFuZGxlUHJvcENoYW5nZXMgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5kYXRlcGlja2VyJykgdHJ1ZTtcclxuXHJcbiAgLy8gbmF0aXZlIHByb3BlcnRpZXNcclxuICBASW5wdXQoKSBpZDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XHJcblxyXG4gIC8vIGRpcmVjdGl2ZSBwcm9wZXJ0aWVzXHJcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcclxuXHJcbiAgLy8gbWF0ZXJpYWxpemUgdXNlcyBwaWNrYWRhdGUuanMgdG8gY3JlYXRlIHRoZSBkYXRlcGlja2VyXHJcbiAgLy8gY29tcGxldGUgbGlzdCBvZiBvcHRpb25zIGlzIGF2YWlsYWJsZSBhdCB0aGUgZm9sbG93aW5nIGFkZHJlc3NcclxuICAvLyBodHRwOi8vYW1zdWwuY2EvcGlja2FkYXRlLmpzL2RhdGUvI29wdGlvbnNcclxuICBASW5wdXQoKSBvcHRpb25zOiBQaWNrYWRhdGUuRGF0ZU9wdGlvbnMgPSB7fTtcclxuXHJcbiAgaW5wdXRFbGVtZW50OiBKUXVlcnk7XHJcbiAgaW5wdXRDb250YWluZXJFbGVtZW50OiBKUXVlcnk7XHJcbiAgaW5wdXRWYWx1ZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG4gIGlzSW5pdFJvdW5kID0gdHJ1ZTtcclxuICBsYWJlbEVsZW1lbnQ6IEpRdWVyeTtcclxuICBzdG9wQ2hhbmdlUHJvcGFnYXRpb24gPSBmYWxzZTtcclxuXHJcbiAgZ2V0IGZvcm1hdCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5mb3JtYXQgfHwgdGhpcy5vcHRpb25zLmZvcm1hdFN1Ym1pdCB8fCBudWxsO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGZvcm1hdFN1Ym1pdCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5mb3JtYXRTdWJtaXQgfHwgdGhpcy5vcHRpb25zLmZvcm1hdCB8fCBudWxsO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG5nQ29udHJvbFZhbHVlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5uZ0NvbnRyb2wudmFsdWUgPT09ICcnID8gbnVsbCA6IHRoaXMubmdDb250cm9sLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHBpY2tlcigpOiBQaWNrYWRhdGUuRGF0ZVBpY2tlciB7XHJcbiAgICByZXR1cm4gdGhpcy5pbnB1dEVsZW1lbnQucGlja2FkYXRlKCdwaWNrZXInKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBuZ0NvbnRyb2w6IE5nQ29udHJvbCxcclxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIsXHJcbiAgKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluaXRIYW5kbGVycygpO1xyXG4gICAgdGhpcy5pbml0RWxlbWVudHMoKTtcclxuICAgIHRoaXMuaW5pdERhdGVwaWNrZXIoKTtcclxuICAgIHRoaXMuaW5pdElucHV0U3Vic2NyaXB0aW9uKCk7XHJcbiAgICB0aGlzLmhhbmRsZVByb3BlcnRpZXMoKTtcclxuICAgIHRoaXMuaXNJbml0Um91bmQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgaWYgKHRoaXMuaW5wdXRWYWx1ZVN1YnNjcmlwdGlvbikge1xyXG4gICAgICB0aGlzLmlucHV0VmFsdWVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGluaXRIYW5kbGVycygpIHtcclxuICAgIHRoaXMuaGFuZGxlcnMgPSB7XHJcbiAgICAgIGxhYmVsOiAoKSA9PiB0aGlzLmhhbmRsZUxhYmVsKCksXHJcbiAgICAgIG9wdGlvbnM6ICgpID0+IHRoaXMuaGFuZGxlT3B0aW9ucygpLFxyXG4gICAgICBwbGFjZWhvbGRlcjogKCkgPT4gdGhpcy5oYW5kbGVQbGFjZWhvbGRlcigpLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGluaXRFbGVtZW50cygpIHtcclxuICAgIHRoaXMuaW5wdXRDb250YWluZXJFbGVtZW50ID0gJCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkucGFyZW50KCcuaW5wdXQtZmllbGQnKTtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50ID0gJCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XHJcbiAgICB0aGlzLmxhYmVsRWxlbWVudCA9IHRoaXMuY3JlYXRlTGFiZWxFbGVtZW50KCk7XHJcbiAgfVxyXG5cclxuICBpbml0RGF0ZXBpY2tlcigpIHtcclxuICAgIC8vIHNldCBkZWZhdWx0IGZvcm1hdC9mb3JtYXRTdWJtaXQgb3B0aW9uc1xyXG4gICAgaWYgKHRoaXMuZm9ybWF0KSB7XHJcbiAgICAgIHRoaXMub3B0aW9ucy5mb3JtYXQgPSB0aGlzLmZvcm1hdDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmZvcm1hdFN1Ym1pdCkge1xyXG4gICAgICB0aGlzLm9wdGlvbnMuZm9ybWF0U3VibWl0ID0gdGhpcy5mb3JtYXRTdWJtaXQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZXh0ZW5kcyBvbkNsb3NlIGZ1bmN0aW9uIHRvIGZpeCBkYXRlcGlja2VyIGZvY3VzIGlzc3VlXHJcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vRG9nZmFsby9tYXRlcmlhbGl6ZS9pc3N1ZXMvMjA2NyNpc3N1ZWNvbW1lbnQtMTQyMTA3NTk5XHJcbiAgICBjb25zdCBvbkNsb3NlRm4gPSB0aGlzLm9wdGlvbnMgJiYgdGhpcy5vcHRpb25zLm9uQ2xvc2UgfHwgKCgpID0+IHt9KTtcclxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMub3B0aW9ucywge1xyXG4gICAgICBvbkNsb3NlOiAoZXZlbnQpID0+IHtcclxuICAgICAgICBvbkNsb3NlRm4oZXZlbnQpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZChkb2N1bWVudC5hY3RpdmVFbGVtZW50LCAnYmx1cicpO1xyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMuaW5wdXRFbGVtZW50LCAncGlja2FkYXRlJywgW3RoaXMub3B0aW9uc10pO1xyXG5cclxuICAgIGlmICh0aGlzLm5nQ29udHJvbCkge1xyXG4gICAgICAvLyBzZXQgZGF0ZXBpY2tlciBpbml0aWFsIHZhbHVlIGFjY29yZGluZyB0byBuZ0NvbnRyb2xcclxuICAgICAgdGhpcy5waWNrZXIuc2V0KCdzZWxlY3QnLCB0aGlzLm5nQ29udHJvbFZhbHVlLCB7IGZvcm1hdDogdGhpcy5mb3JtYXRTdWJtaXQgfSk7XHJcblxyXG4gICAgICAvLyBzZXQgbmdDb250cm9sIHZhbHVlIGFjY29yZGluZyB0byBzZWxlY3RlZCBkYXRlIGluIGRhdGVwaWNrZXJcclxuICAgICAgdGhpcy5waWNrZXIub24oJ3NldCcsICgpID0+IHtcclxuICAgICAgICAvLyBoYW5kbGUgc3RvcCBwcm9wYWdhdGlvblxyXG4gICAgICAgIGlmICh0aGlzLnN0b3BDaGFuZ2VQcm9wYWdhdGlvbikge1xyXG4gICAgICAgICAgdGhpcy5zdG9wQ2hhbmdlUHJvcGFnYXRpb24gPSBmYWxzZTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5zdG9wQ2hhbmdlUHJvcGFnYXRpb24gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gYXBwbHkgb3B0aW9ucy5mb3JtYXRTdWJtaXQgdG8gbmdDb250cm9sIHZhbHVlXHJcbiAgICAgICAgY29uc3Qgc3VibWl0VmFsdWUgPSB0aGlzLmZvcm1hdFN1Ym1pdFxyXG4gICAgICAgICAgPyB0aGlzLnBpY2tlci5nZXQoJ3NlbGVjdCcsIHRoaXMuZm9ybWF0U3VibWl0KVxyXG4gICAgICAgICAgOiB0aGlzLnBpY2tlci5nZXQoJ3ZhbHVlJyk7XHJcbiAgICAgICAgdGhpcy5uZ0NvbnRyb2wuY29udHJvbC5zZXRWYWx1ZShzdWJtaXRWYWx1ZSk7XHJcblxyXG4gICAgICAgIC8vIGFwcGx5IG9wdGlvbnMuZm9ybWF0IHRvIGlucHV0IHRleHRcclxuICAgICAgICBjb25zdCBmb3JtYXRWYWx1ZSA9IHRoaXMuZm9ybWF0XHJcbiAgICAgICAgICA/IHRoaXMucGlja2VyLmdldCgnc2VsZWN0JywgdGhpcy5mb3JtYXQpXHJcbiAgICAgICAgICA6IHRoaXMucGlja2VyLmdldCgndmFsdWUnKTtcclxuICAgICAgICB0aGlzLmlucHV0RWxlbWVudC52YWwoZm9ybWF0VmFsdWUpO1xyXG5cclxuICAgICAgICAvLyBzZXQgbGFiZWwgYWN0aXZlIHN0YXR1c1xyXG4gICAgICAgIHRoaXMuc2V0TGFiZWxBY3RpdmUoKTtcclxuXHJcbiAgICAgICAgLy8gbWFyayBmb3IgY2hhbmdlIGRldGVjdGlvblxyXG4gICAgICAgIC8vIGZpeCBmb3JtIHZhbGlkYXRpb24gd2l0aCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxuICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGluaXRJbnB1dFN1YnNjcmlwdGlvbigpIHtcclxuICAgIGlmICh0aGlzLm5nQ29udHJvbCkge1xyXG4gICAgICB0aGlzLmlucHV0VmFsdWVTdWJzY3JpcHRpb24gPSB0aGlzLm5nQ29udHJvbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAvLyBoYW5kbGUgc3RvcCBwcm9wYWdhdGlvblxyXG4gICAgICAgIGlmICh0aGlzLnN0b3BDaGFuZ2VQcm9wYWdhdGlvbikge1xyXG4gICAgICAgICAgdGhpcy5zdG9wQ2hhbmdlUHJvcGFnYXRpb24gPSBmYWxzZTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5zdG9wQ2hhbmdlUHJvcGFnYXRpb24gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gc2V0IHNlbGVjdGVkIGRhdGUgaW4gZGF0ZXBpY2tlciBhY2NvcmRpbmcgdG8gbmdDb250cm9sIHZhbHVlXHJcbiAgICAgICAgdGhpcy5waWNrZXIuc2V0KCdzZWxlY3QnLCB0aGlzLm5nQ29udHJvbFZhbHVlLCB7IGZvcm1hdDogdGhpcy5mb3JtYXRTdWJtaXQgfSk7XHJcblxyXG4gICAgICAgIC8vIHNldCBsYWJlbCBhY3RpdmUgc3RhdHVzXHJcbiAgICAgICAgdGhpcy5zZXRMYWJlbEFjdGl2ZSgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNyZWF0ZUxhYmVsRWxlbWVudCgpIHtcclxuICAgIGNvbnN0IGxhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBsYWJlbEVsZW1lbnQuc2V0QXR0cmlidXRlKCdmb3InLCB0aGlzLmlkKTtcclxuXHJcbiAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QodGhpcy5pbnB1dEVsZW1lbnQsICdhZnRlcicsIFtsYWJlbEVsZW1lbnRdKTtcclxuXHJcbiAgICByZXR1cm4gJChsYWJlbEVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlUHJvcGVydGllcygpIHtcclxuICAgIGlmICh0aGlzLmlucHV0Q29udGFpbmVyRWxlbWVudC5sZW5ndGggPT09IDApIHtcclxuICAgICAgY29uc29sZS5lcnJvcignSW5wdXQgd2l0aCBtei1kYXRlcGlja2VyIGRpcmVjdGl2ZSBtdXN0IGJlIHBsYWNlZCBpbnNpZGUgYW4gW216LWRhdGVwaWNrZXItY29udGFpbmVyXSB0YWcnLCB0aGlzLmlucHV0RWxlbWVudCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBzdXBlci5leGVjdXRlUHJvcEhhbmRsZXJzKCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVMYWJlbCgpIHtcclxuICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLmxhYmVsRWxlbWVudCwgJ3RleHQnLCBbdGhpcy5sYWJlbF0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlT3B0aW9ucygpIHtcclxuICAgIGlmICghdGhpcy5pc0luaXRSb3VuZCkge1xyXG4gICAgICB0aGlzLnBpY2tlci5zZXQodGhpcy5vcHRpb25zKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZVBsYWNlaG9sZGVyKCkge1xyXG4gICAgY29uc3QgcGxhY2Vob2xkZXIgPSAhIXRoaXMucGxhY2Vob2xkZXIgPyB0aGlzLnBsYWNlaG9sZGVyIDogbnVsbDtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudEF0dHJpYnV0ZSh0aGlzLmlucHV0RWxlbWVudFswXSwgJ3BsYWNlaG9sZGVyJywgcGxhY2Vob2xkZXIpO1xyXG5cclxuICAgIC8vIGZpeCBpc3N1ZSBpbiBJRSB3aGVyZSBoYXZpbmcgYSBwbGFjZWhvbGRlciBvbiBpbnB1dCBtYWtlIGNvbnRyb2wgZGlydHkgYW5kIHRyaWdnZXIgdmFsaWRhdGlvblxyXG4gICAgLy8gb24gcGFnZSBsb2FkLi4uIG5vdGUgdGhhdCBpdCBzdGlsbCB0cmlnZ2VyIHZhbGlkYXRpb24gb24gZm9jdXMgYW5kIHdvdWxkIG5lZWQgYSBiZXR0ZXIgZml4XHJcbiAgICAvLyBpc3N1ZSA6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzE1Mjk5XHJcbiAgICAvLyB3b3JrYXJvdW5kIDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQ0OTY3MjQ1LzU1ODMyODNcclxuICAgIGlmICh0aGlzLm5nQ29udHJvbCkge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMubmdDb250cm9sLmNvbnRyb2wubWFya0FzUHJpc3RpbmUoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZXRMYWJlbEFjdGl2ZSgpO1xyXG4gIH1cclxuXHJcbiAgc2V0TGFiZWxBY3RpdmUoKSB7XHJcbiAgICAvLyBuZWVkIHNldFRpbWVvdXQgb3RoZXJ3aXNlIGl0IHdvbnQgbWFrZSBsYWJlbCBmbG9hdCBpbiBzb21lIGNpcmNvbnN0YW5jZXMgKGZvcmNpbmcgdmFsaWRhdGlvbiBmb3IgZXhhbXBsZSlcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBjb25zdCBpbnB1dFZhbHVlID0gKDxIVE1MSW5wdXRFbGVtZW50PnRoaXMuaW5wdXRFbGVtZW50WzBdKS52YWx1ZTtcclxuICAgICAgY29uc3QgaXNBY3RpdmUgPSAhIXRoaXMucGxhY2Vob2xkZXIgfHwgISFpbnB1dFZhbHVlO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLmxhYmVsRWxlbWVudFswXSwgJ2FjdGl2ZScsIGlzQWN0aXZlKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=