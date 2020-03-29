/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, Input, Optional, Renderer } from '@angular/core';
import { NgControl } from '@angular/forms';
import { interval } from 'rxjs';
import { first, skipWhile } from 'rxjs/operators';
import { HandlePropChanges } from '../shared';
var MzInputDirective = /** @class */ (function (_super) {
    tslib_1.__extends(MzInputDirective, _super);
    function MzInputDirective(ngControl, elementRef, renderer) {
        var _this = _super.call(this) || this;
        _this.ngControl = ngControl;
        _this.elementRef = elementRef;
        _this.renderer = renderer;
        return _this;
    }
    /**
     * @return {?}
     */
    MzInputDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.initHandlers();
        this.initElements();
        this.initInputSubscription();
        this.handleProperties();
    };
    /**
     * @return {?}
     */
    MzInputDirective.prototype.ngOnDestroy = /**
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
    MzInputDirective.prototype.initHandlers = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.handlers = {
            autocomplete: function () { return _this.handleAutocomplete(); },
            dataError: function () { return _this.handleDataError(); },
            dataSuccess: function () { return _this.handleDataSuccess(); },
            label: function () { return _this.handleLabel(); },
            length: function () { return _this.handleLength(); },
            placeholder: function () { return _this.handlePlaceholder(); },
            validate: function () { return _this.handleValidate(); },
        };
    };
    /**
     * @return {?}
     */
    MzInputDirective.prototype.initElements = /**
     * @return {?}
     */
    function () {
        this.inputElement = $(this.elementRef.nativeElement);
        this.inputContainerElement = $(this.elementRef.nativeElement).parent('.input-field');
        this.labelElement = this.createLabelElement();
    };
    /**
     * @return {?}
     */
    MzInputDirective.prototype.initInputSubscription = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.ngControl) {
            this.inputValueSubscription = this.ngControl.valueChanges.subscribe(function () { return _this.setLabelActive(); });
        }
    };
    /**
     * @return {?}
     */
    MzInputDirective.prototype.createLabelElement = /**
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
    MzInputDirective.prototype.handleProperties = /**
     * @return {?}
     */
    function () {
        if (this.inputContainerElement.length === 0) {
            console.error('Input with mz-input directive must be placed inside an [mz-input-container] tag', this.inputElement);
            return;
        }
        _super.prototype.executePropHandlers.call(this);
    };
    /**
     * @return {?}
     */
    MzInputDirective.prototype.handleAutocomplete = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ isAutocomplete = this.autocomplete != null
            && this.autocomplete.data != null
            && Object.keys(this.autocomplete.data).length > 0;
        this.renderer.setElementClass(this.inputElement[0], 'autocomplete', isAutocomplete);
        if (this.autocomplete != null) {
            // wait until autocomplete is defined before to invoke
            // see issue: https://github.com/Dogfalo/materialize/issues/4401
            interval(100)
                .pipe(skipWhile(function () { return !_this.inputElement['autocomplete']; }), first())
                .subscribe(function () { return _this.renderer.invokeElementMethod(_this.inputElement, 'autocomplete', [_this.autocomplete]); });
        }
    };
    /**
     * @return {?}
     */
    MzInputDirective.prototype.handleDataError = /**
     * @return {?}
     */
    function () {
        this.renderer.setElementAttribute(this.labelElement[0], 'data-error', this.dataError);
    };
    /**
     * @return {?}
     */
    MzInputDirective.prototype.handleDataSuccess = /**
     * @return {?}
     */
    function () {
        this.renderer.setElementAttribute(this.labelElement[0], 'data-success', this.dataSuccess);
    };
    /**
     * @return {?}
     */
    MzInputDirective.prototype.handleLabel = /**
     * @return {?}
     */
    function () {
        this.renderer.invokeElementMethod(this.labelElement, 'text', [this.label]);
    };
    /**
     * @return {?}
     */
    MzInputDirective.prototype.handleLength = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ length = this.length ? this.length.toString() : null;
        this.renderer.setElementAttribute(this.inputElement[0], 'data-length', length);
        if (length) {
            this.setCharacterCount();
        }
        else {
            this.removeCharacterCount();
        }
    };
    /**
     * @return {?}
     */
    MzInputDirective.prototype.handlePlaceholder = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ placeholder = !!this.placeholder ? this.placeholder : null;
        this.renderer.setElementAttribute(this.inputElement[0], 'placeholder', placeholder);
        // fix issue in IE where having a placeholder on input make control dirty
        // note that it still trigger validation on focus but this is better than nothing
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
    MzInputDirective.prototype.handleValidate = /**
     * @return {?}
     */
    function () {
        this.renderer.setElementClass(this.inputElement[0], 'validate', this.validate);
        if (this.validate) {
            // force validation
            this.renderer.invokeElementMethod(this.inputElement, 'trigger', ['blur']);
        }
        else {
            this.removeValidationClasses();
        }
    };
    /**
     * @return {?}
     */
    MzInputDirective.prototype.setCharacterCount = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.renderer.invokeElementMethod(this.inputElement, 'characterCounter');
        // force validation
        // need setTimeout otherwise it wont trigger validation right away
        setTimeout(function () {
            _this.renderer.invokeElementMethod(_this.inputElement, 'trigger', ['input']);
            _this.renderer.invokeElementMethod(_this.inputElement, 'trigger', ['blur']);
        });
    };
    /**
     * @return {?}
     */
    MzInputDirective.prototype.setLabelActive = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // need setTimeout otherwise it wont make label float in some circonstances
        // for example: forcing validation for example, reseting form programmaticaly, ...
        setTimeout(function () {
            var /** @type {?} */ inputValue = (/** @type {?} */ (_this.inputElement[0])).value;
            var /** @type {?} */ isActive = !!_this.placeholder || !!inputValue;
            _this.renderer.setElementClass(_this.labelElement[0], 'active', isActive);
        });
    };
    /**
     * @return {?}
     */
    MzInputDirective.prototype.removeCharacterCount = /**
     * @return {?}
     */
    function () {
        this.renderer.invokeElementMethod(this.inputElement.siblings('.character-counter'), 'remove');
        this.removeValidationClasses();
    };
    /**
     * @return {?}
     */
    MzInputDirective.prototype.removeValidationClasses = /**
     * @return {?}
     */
    function () {
        // reset valid/invalid state
        this.renderer.setElementClass(this.inputElement[0], 'invalid', false);
        this.renderer.setElementClass(this.inputElement[0], 'valid', false);
    };
    MzInputDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'input[mzInput], input[mz-input]',
                },] },
    ];
    /** @nocollapse */
    MzInputDirective.ctorParameters = function () { return [
        { type: NgControl, decorators: [{ type: Optional },] },
        { type: ElementRef, },
        { type: Renderer, },
    ]; };
    MzInputDirective.propDecorators = {
        "id": [{ type: Input },],
        "placeholder": [{ type: Input },],
        "autocomplete": [{ type: Input },],
        "dataError": [{ type: Input },],
        "dataSuccess": [{ type: Input },],
        "label": [{ type: Input },],
        "length": [{ type: Input },],
        "validate": [{ type: Input },],
    };
    return MzInputDirective;
}(HandlePropChanges));
export { MzInputDirective };
function MzInputDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MzInputDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MzInputDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    MzInputDirective.propDecorators;
    /** @type {?} */
    MzInputDirective.prototype.id;
    /** @type {?} */
    MzInputDirective.prototype.placeholder;
    /** @type {?} */
    MzInputDirective.prototype.autocomplete;
    /** @type {?} */
    MzInputDirective.prototype.dataError;
    /** @type {?} */
    MzInputDirective.prototype.dataSuccess;
    /** @type {?} */
    MzInputDirective.prototype.label;
    /** @type {?} */
    MzInputDirective.prototype.length;
    /** @type {?} */
    MzInputDirective.prototype.validate;
    /** @type {?} */
    MzInputDirective.prototype.inputElement;
    /** @type {?} */
    MzInputDirective.prototype.inputContainerElement;
    /** @type {?} */
    MzInputDirective.prototype.inputValueSubscription;
    /** @type {?} */
    MzInputDirective.prototype.labelElement;
    /** @type {?} */
    MzInputDirective.prototype.ngControl;
    /** @type {?} */
    MzInputDirective.prototype.elementRef;
    /** @type {?} */
    MzInputDirective.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hdGVyaWFsaXplLyIsInNvdXJjZXMiOlsic3JjL2lucHV0L2lucHV0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBcUIsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFFBQVEsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxXQUFXLENBQUM7O0lBS1IsNENBQWlCO0lBa0JyRCwwQkFDc0IsV0FDWixZQUNBO1FBSFYsWUFLRSxpQkFBTyxTQUNSO1FBTHFCLGVBQVMsR0FBVCxTQUFTO1FBQ3JCLGdCQUFVLEdBQVYsVUFBVTtRQUNWLGNBQVEsR0FBUixRQUFROztLQUdqQjs7OztJQUVELG1DQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7S0FDekI7Ozs7SUFFRCxzQ0FBVzs7O0lBQVg7UUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUMzQztLQUNGOzs7O0lBRUQsdUNBQVk7OztJQUFaO1FBQUEsaUJBVUM7UUFUQyxJQUFJLENBQUMsUUFBUSxHQUFHO1lBQ2QsWUFBWSxFQUFFLGNBQU0sT0FB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LENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztLQUNyRTs7Z0JBdkxGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUNBQWlDO2lCQUM1Qzs7OztnQkFSUSxTQUFTLHVCQTRCYixRQUFRO2dCQTdCTyxVQUFVO2dCQUFzQyxRQUFROzs7dUJBWXpFLEtBQUs7Z0NBQ0wsS0FBSztpQ0FHTCxLQUFLOzhCQUNMLEtBQUs7Z0NBQ0wsS0FBSzswQkFDTCxLQUFLOzJCQUNMLEtBQUs7NkJBQ0wsS0FBSzs7MkJBckJSO0VBVXNDLGlCQUFpQjtTQUExQyxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3B0aW9uYWwsIFJlbmRlcmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgaW50ZXJ2YWwsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmaXJzdCwgc2tpcFdoaWxlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgSGFuZGxlUHJvcENoYW5nZXMgfSBmcm9tICcuLi9zaGFyZWQnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdpbnB1dFtteklucHV0XSwgaW5wdXRbbXotaW5wdXRdJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16SW5wdXREaXJlY3RpdmUgZXh0ZW5kcyBIYW5kbGVQcm9wQ2hhbmdlcyBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICAvLyBuYXRpdmUgcHJvcGVydGllc1xyXG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcclxuXHJcbiAgLy8gZGlyZWN0aXZlIHByb3BlcnRpZXNcclxuICBASW5wdXQoKSBhdXRvY29tcGxldGU6IHsgZGF0YTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB9O1xyXG4gIEBJbnB1dCgpIGRhdGFFcnJvcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGRhdGFTdWNjZXNzOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcclxuICBASW5wdXQoKSBsZW5ndGg6IG51bWJlcjtcclxuICBASW5wdXQoKSB2YWxpZGF0ZTogYm9vbGVhbjtcclxuXHJcbiAgaW5wdXRFbGVtZW50OiBKUXVlcnk7XHJcbiAgaW5wdXRDb250YWluZXJFbGVtZW50OiBKUXVlcnk7XHJcbiAgaW5wdXRWYWx1ZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG4gIGxhYmVsRWxlbWVudDogSlF1ZXJ5O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgbmdDb250cm9sOiBOZ0NvbnRyb2wsXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcixcclxuICApIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5pdEhhbmRsZXJzKCk7XHJcbiAgICB0aGlzLmluaXRFbGVtZW50cygpO1xyXG4gICAgdGhpcy5pbml0SW5wdXRTdWJzY3JpcHRpb24oKTtcclxuICAgIHRoaXMuaGFuZGxlUHJvcGVydGllcygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICBpZiAodGhpcy5pbnB1dFZhbHVlU3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgIHRoaXMuaW5wdXRWYWx1ZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5pdEhhbmRsZXJzKCkge1xyXG4gICAgdGhpcy5oYW5kbGVycyA9IHtcclxuICAgICAgYXV0b2NvbXBsZXRlOiAoKSA9PiB0aGlzLmhhbmRsZUF1dG9jb21wbGV0ZSgpLFxyXG4gICAgICBkYXRhRXJyb3I6ICgpID0+IHRoaXMuaGFuZGxlRGF0YUVycm9yKCksXHJcbiAgICAgIGRhdGFTdWNjZXNzOiAoKSA9PiB0aGlzLmhhbmRsZURhdGFTdWNjZXNzKCksXHJcbiAgICAgIGxhYmVsOiAoKSA9PiB0aGlzLmhhbmRsZUxhYmVsKCksXHJcbiAgICAgIGxlbmd0aDogKCkgPT4gdGhpcy5oYW5kbGVMZW5ndGgoKSxcclxuICAgICAgcGxhY2Vob2xkZXI6ICgpID0+IHRoaXMuaGFuZGxlUGxhY2Vob2xkZXIoKSxcclxuICAgICAgdmFsaWRhdGU6ICgpID0+IHRoaXMuaGFuZGxlVmFsaWRhdGUoKSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBpbml0RWxlbWVudHMoKSB7XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudCA9ICQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgdGhpcy5pbnB1dENvbnRhaW5lckVsZW1lbnQgPSAkKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5wYXJlbnQoJy5pbnB1dC1maWVsZCcpO1xyXG4gICAgdGhpcy5sYWJlbEVsZW1lbnQgPSB0aGlzLmNyZWF0ZUxhYmVsRWxlbWVudCgpO1xyXG4gIH1cclxuXHJcbiAgaW5pdElucHV0U3Vic2NyaXB0aW9uKCkge1xyXG4gICAgaWYgKHRoaXMubmdDb250cm9sKSB7XHJcbiAgICAgIHRoaXMuaW5wdXRWYWx1ZVN1YnNjcmlwdGlvbiA9IHRoaXMubmdDb250cm9sLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4gdGhpcy5zZXRMYWJlbEFjdGl2ZSgpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNyZWF0ZUxhYmVsRWxlbWVudCgpIHtcclxuICAgIGNvbnN0IGxhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBsYWJlbEVsZW1lbnQuc2V0QXR0cmlidXRlKCdmb3InLCB0aGlzLmlkKTtcclxuXHJcbiAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QodGhpcy5pbnB1dEVsZW1lbnQsICdhZnRlcicsIFtsYWJlbEVsZW1lbnRdKTtcclxuXHJcbiAgICByZXR1cm4gJChsYWJlbEVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlUHJvcGVydGllcygpIHtcclxuICAgIGlmICh0aGlzLmlucHV0Q29udGFpbmVyRWxlbWVudC5sZW5ndGggPT09IDApIHtcclxuICAgICAgY29uc29sZS5lcnJvcignSW5wdXQgd2l0aCBtei1pbnB1dCBkaXJlY3RpdmUgbXVzdCBiZSBwbGFjZWQgaW5zaWRlIGFuIFttei1pbnB1dC1jb250YWluZXJdIHRhZycsIHRoaXMuaW5wdXRFbGVtZW50KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHN1cGVyLmV4ZWN1dGVQcm9wSGFuZGxlcnMoKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUF1dG9jb21wbGV0ZSgpIHtcclxuICAgIGNvbnN0IGlzQXV0b2NvbXBsZXRlID0gdGhpcy5hdXRvY29tcGxldGUgIT0gbnVsbFxyXG4gICAgICAmJiB0aGlzLmF1dG9jb21wbGV0ZS5kYXRhICE9IG51bGxcclxuICAgICAgJiYgT2JqZWN0LmtleXModGhpcy5hdXRvY29tcGxldGUuZGF0YSkubGVuZ3RoID4gMDtcclxuXHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLmlucHV0RWxlbWVudFswXSwgJ2F1dG9jb21wbGV0ZScsIGlzQXV0b2NvbXBsZXRlKTtcclxuXHJcbiAgICBpZiAodGhpcy5hdXRvY29tcGxldGUgIT0gbnVsbCkge1xyXG4gICAgICAvLyB3YWl0IHVudGlsIGF1dG9jb21wbGV0ZSBpcyBkZWZpbmVkIGJlZm9yZSB0byBpbnZva2VcclxuICAgICAgLy8gc2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vRG9nZmFsby9tYXRlcmlhbGl6ZS9pc3N1ZXMvNDQwMVxyXG4gICAgICBpbnRlcnZhbCgxMDApXHJcbiAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICBza2lwV2hpbGUoKCkgPT4gIXRoaXMuaW5wdXRFbGVtZW50WydhdXRvY29tcGxldGUnXSksXHJcbiAgICAgICAgICBmaXJzdCgpKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMuaW5wdXRFbGVtZW50LCAnYXV0b2NvbXBsZXRlJywgW3RoaXMuYXV0b2NvbXBsZXRlXSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlRGF0YUVycm9yKCkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50QXR0cmlidXRlKHRoaXMubGFiZWxFbGVtZW50WzBdLCAnZGF0YS1lcnJvcicsIHRoaXMuZGF0YUVycm9yKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZURhdGFTdWNjZXNzKCkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50QXR0cmlidXRlKHRoaXMubGFiZWxFbGVtZW50WzBdLCAnZGF0YS1zdWNjZXNzJywgdGhpcy5kYXRhU3VjY2Vzcyk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVMYWJlbCgpIHtcclxuICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLmxhYmVsRWxlbWVudCwgJ3RleHQnLCBbdGhpcy5sYWJlbF0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlTGVuZ3RoKCkge1xyXG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5sZW5ndGggPyB0aGlzLmxlbmd0aC50b1N0cmluZygpIDogbnVsbDtcclxuXHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRBdHRyaWJ1dGUodGhpcy5pbnB1dEVsZW1lbnRbMF0sICdkYXRhLWxlbmd0aCcsIGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKGxlbmd0aCkge1xyXG4gICAgICB0aGlzLnNldENoYXJhY3RlckNvdW50KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlbW92ZUNoYXJhY3RlckNvdW50KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVQbGFjZWhvbGRlcigpIHtcclxuICAgIGNvbnN0IHBsYWNlaG9sZGVyID0gISF0aGlzLnBsYWNlaG9sZGVyID8gdGhpcy5wbGFjZWhvbGRlciA6IG51bGw7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRBdHRyaWJ1dGUodGhpcy5pbnB1dEVsZW1lbnRbMF0sICdwbGFjZWhvbGRlcicsIHBsYWNlaG9sZGVyKTtcclxuXHJcbiAgICAvLyBmaXggaXNzdWUgaW4gSUUgd2hlcmUgaGF2aW5nIGEgcGxhY2Vob2xkZXIgb24gaW5wdXQgbWFrZSBjb250cm9sIGRpcnR5XHJcbiAgICAvLyBub3RlIHRoYXQgaXQgc3RpbGwgdHJpZ2dlciB2YWxpZGF0aW9uIG9uIGZvY3VzIGJ1dCB0aGlzIGlzIGJldHRlciB0aGFuIG5vdGhpbmdcclxuICAgIC8vIGlzc3VlIDogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTUyOTlcclxuICAgIC8vIHdvcmthcm91bmQgOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDQ5NjcyNDUvNTU4MzI4M1xyXG4gICAgaWYgKHRoaXMubmdDb250cm9sKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5uZ0NvbnRyb2wuY29udHJvbC5tYXJrQXNQcmlzdGluZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNldExhYmVsQWN0aXZlKCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVWYWxpZGF0ZSgpIHtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuaW5wdXRFbGVtZW50WzBdLCAndmFsaWRhdGUnLCB0aGlzLnZhbGlkYXRlKTtcclxuXHJcbiAgICBpZiAodGhpcy52YWxpZGF0ZSkge1xyXG4gICAgICAvLyBmb3JjZSB2YWxpZGF0aW9uXHJcbiAgICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLmlucHV0RWxlbWVudCwgJ3RyaWdnZXInLCBbJ2JsdXInXSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlbW92ZVZhbGlkYXRpb25DbGFzc2VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRDaGFyYWN0ZXJDb3VudCgpIHtcclxuICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLmlucHV0RWxlbWVudCwgJ2NoYXJhY3RlckNvdW50ZXInKTtcclxuXHJcbiAgICAvLyBmb3JjZSB2YWxpZGF0aW9uXHJcbiAgICAvLyBuZWVkIHNldFRpbWVvdXQgb3RoZXJ3aXNlIGl0IHdvbnQgdHJpZ2dlciB2YWxpZGF0aW9uIHJpZ2h0IGF3YXlcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QodGhpcy5pbnB1dEVsZW1lbnQsICd0cmlnZ2VyJywgWydpbnB1dCddKTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMuaW5wdXRFbGVtZW50LCAndHJpZ2dlcicsIFsnYmx1ciddKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0TGFiZWxBY3RpdmUoKSB7XHJcbiAgICAvLyBuZWVkIHNldFRpbWVvdXQgb3RoZXJ3aXNlIGl0IHdvbnQgbWFrZSBsYWJlbCBmbG9hdCBpbiBzb21lIGNpcmNvbnN0YW5jZXNcclxuICAgIC8vIGZvciBleGFtcGxlOiBmb3JjaW5nIHZhbGlkYXRpb24gZm9yIGV4YW1wbGUsIHJlc2V0aW5nIGZvcm0gcHJvZ3JhbW1hdGljYWx5LCAuLi5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBjb25zdCBpbnB1dFZhbHVlID0gKDxIVE1MSW5wdXRFbGVtZW50PnRoaXMuaW5wdXRFbGVtZW50WzBdKS52YWx1ZTtcclxuICAgICAgY29uc3QgaXNBY3RpdmUgPSAhIXRoaXMucGxhY2Vob2xkZXIgfHwgISFpbnB1dFZhbHVlO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLmxhYmVsRWxlbWVudFswXSwgJ2FjdGl2ZScsIGlzQWN0aXZlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlQ2hhcmFjdGVyQ291bnQoKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QodGhpcy5pbnB1dEVsZW1lbnQuc2libGluZ3MoJy5jaGFyYWN0ZXItY291bnRlcicpLCAncmVtb3ZlJyk7XHJcblxyXG4gICAgdGhpcy5yZW1vdmVWYWxpZGF0aW9uQ2xhc3NlcygpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlVmFsaWRhdGlvbkNsYXNzZXMoKSB7XHJcbiAgICAvLyByZXNldCB2YWxpZC9pbnZhbGlkIHN0YXRlXHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLmlucHV0RWxlbWVudFswXSwgJ2ludmFsaWQnLCBmYWxzZSk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLmlucHV0RWxlbWVudFswXSwgJ3ZhbGlkJywgZmFsc2UpO1xyXG4gIH1cclxufVxyXG4iXX0=