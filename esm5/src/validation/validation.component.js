/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ComponentFactoryResolver, ElementRef, HostBinding, HostListener, Input, Renderer, ViewContainerRef, ViewEncapsulation, } from '@angular/core';
import { NgControl } from '@angular/forms';
import { ErrorMessageResource, MzErrorMessageComponent } from './error-message/index';
var MzValidationComponent = /** @class */ (function () {
    function MzValidationComponent(elementRef, resolver, viewContainerRef, ngControl, renderer) {
        this.elementRef = elementRef;
        this.resolver = resolver;
        this.viewContainerRef = viewContainerRef;
        this.ngControl = ngControl;
        this.renderer = renderer;
        this.errorMessageComponent = null;
        this._formControlDisabled = false;
        this._required = false;
    }
    Object.defineProperty(MzValidationComponent.prototype, "required", {
        get: /**
         * @return {?}
         */
        function () { return this._required; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._required = (value != null && "" + value !== 'false'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MzValidationComponent.prototype, "formControlDisabled", {
        get: /**
         * @return {?}
         */
        function () { return this._formControlDisabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._formControlDisabled = value;
            if (this._formControlDisabled) {
                this.ngControl.control.disable();
            }
            else {
                this.ngControl.control.enable();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MzValidationComponent.prototype, "elementToAddValidation", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isNativeSelectElement
                ? this.inputSelectDropdown
                : this.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MzValidationComponent.prototype, "inputSelectDropdown", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nativeElement.siblings('input.select-dropdown');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MzValidationComponent.prototype, "isNativeSelectElement", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nativeElement[0].nodeName === 'SELECT';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} target
     * @return {?}
     */
    MzValidationComponent.prototype.onFocusOut = /**
     * @param {?} target
     * @return {?}
     */
    function (target) {
        this.ngControl.control.markAsTouched();
        this.setValidationState();
    };
    /**
     * @return {?}
     */
    MzValidationComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.initElements();
        this.initErrorMessageComponent();
        this.subscribeStatusChanges();
    };
    /**
     * @return {?}
     */
    MzValidationComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.statusChangesSubscription.unsubscribe();
        this.errorMessageComponent.destroy();
    };
    /**
     * @param {?} element
     * @return {?}
     */
    MzValidationComponent.prototype.clearValidationState = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        this.renderer.setElementClass(element[0], 'valid', false);
        this.renderer.setElementClass(element[0], 'invalid', false);
    };
    /**
     * @return {?}
     */
    MzValidationComponent.prototype.createRequiredSpanElement = /**
     * @return {?}
     */
    function () {
        if (this.required && this.labelElement) {
            var /** @type {?} */ spanElement = document.createElement('span');
            spanElement.setAttribute('class', 'placeholder-required');
            spanElement.textContent = ' *';
            this.renderer.invokeElementMethod(this.labelElement, 'appendChild', [spanElement]);
        }
    };
    /**
     * @return {?}
     */
    MzValidationComponent.prototype.initElements = /**
     * @return {?}
     */
    function () {
        this.labelElement = $('label[for="' + this.id + '"]')[0];
        this.nativeElement = $(this.elementRef.nativeElement);
        this.createRequiredSpanElement();
    };
    /**
     * @return {?}
     */
    MzValidationComponent.prototype.initErrorMessageComponent = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ errorMessageFactory = this.resolver.resolveComponentFactory(MzErrorMessageComponent);
        this.errorMessageComponent = this.viewContainerRef.createComponent(errorMessageFactory);
        this.errorMessageComponent.instance.errorMessageResource = this.errorMessageResource;
        this.errorMessageComponent.instance.control = this.ngControl.control;
        this.errorMessageComponent.changeDetectorRef.detectChanges();
        var /** @type {?} */ errorMessage = this.nativeElement.parent().children('mz-error-message');
        this.renderer.invokeElementMethod(errorMessage, 'insertAfter', [this.labelElement]);
    };
    /**
     * @return {?}
     */
    MzValidationComponent.prototype.setValidationState = /**
     * @return {?}
     */
    function () {
        // to handle reset form
        if (this.ngControl.control.untouched && this.ngControl.control.pristine) {
            this.clearValidationState(this.elementToAddValidation);
            return;
        }
        // to handle field validity
        if (this.ngControl.control.enabled) {
            if (this.ngControl.control.valid) {
                this.renderer.setElementClass(this.elementToAddValidation[0], 'valid', true);
                this.renderer.setElementClass(this.elementToAddValidation[0], 'invalid', false);
            }
            else {
                this.renderer.setElementClass(this.elementToAddValidation[0], 'valid', false);
                this.renderer.setElementClass(this.elementToAddValidation[0], 'invalid', true);
            }
        }
        else {
            this.clearValidationState(this.elementToAddValidation);
        }
    };
    /**
     * @return {?}
     */
    MzValidationComponent.prototype.subscribeStatusChanges = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.statusChangesSubscription = this.ngControl.control.statusChanges.subscribe(function (status) {
            // TODO Find a better way to handle validation after the form subscription. (see demo form-validation)
            // wait for the valueChanges method from FormGroup to have been triggered before handling the validation state
            // /!\ race condition warning /!\
            setTimeout(function () { return _this.setValidationState(); });
        });
    };
    MzValidationComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    selector: 'mz-validation, [mz-validation], [mzValidation]',
                    template: "<ng-content></ng-content>",
                    styles: [".select-wrapper input.select-dropdown.invalid,textarea.ng-invalid.ng-touched:focus{border-bottom:1px solid #f44336;box-shadow:0 1px 0 0 #f44336}.select-wrapper input.select-dropdown.valid{border-bottom:1px solid #4caf50;box-shadow:0 1px 0 0 #4caf50}input:not([type=checkbox]):focus+label.active span.placeholder-required,textarea:focus+label.active span.placeholder-required{color:#f44336}"],
                },] },
    ];
    /** @nocollapse */
    MzValidationComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: ComponentFactoryResolver, },
        { type: ViewContainerRef, },
        { type: NgControl, },
        { type: Renderer, },
    ]; };
    MzValidationComponent.propDecorators = {
        "id": [{ type: Input },],
        "errorMessageResource": [{ type: Input },],
        "required": [{ type: HostBinding, args: ['attr.required',] }, { type: Input },],
        "formControlDisabled": [{ type: Input },],
        "onFocusOut": [{ type: HostListener, args: ['focusout', ['$event.target'],] },],
    };
    return MzValidationComponent;
}());
export { MzValidationComponent };
function MzValidationComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MzValidationComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MzValidationComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    MzValidationComponent.propDecorators;
    /** @type {?} */
    MzValidationComponent.prototype.errorMessageComponent;
    /** @type {?} */
    MzValidationComponent.prototype.labelElement;
    /** @type {?} */
    MzValidationComponent.prototype.nativeElement;
    /** @type {?} */
    MzValidationComponent.prototype.statusChangesSubscription;
    /** @type {?} */
    MzValidationComponent.prototype.id;
    /** @type {?} */
    MzValidationComponent.prototype.errorMessageResource;
    /** @type {?} */
    MzValidationComponent.prototype._formControlDisabled;
    /** @type {?} */
    MzValidationComponent.prototype._required;
    /** @type {?} */
    MzValidationComponent.prototype.elementRef;
    /** @type {?} */
    MzValidationComponent.prototype.resolver;
    /** @type {?} */
    MzValidationComponent.prototype.viewContainerRef;
    /** @type {?} */
    MzValidationComponent.prototype.ngControl;
    /** @type {?} */
    MzValidationComponent.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvIiwic291cmNlcyI6WyJzcmMvdmFsaWRhdGlvbi92YWxpZGF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCx3QkFBd0IsRUFFeEIsVUFBVSxFQUNWLFdBQVcsRUFDWCxZQUFZLEVBQ1osS0FBSyxFQUVMLFFBQVEsRUFDUixnQkFBZ0IsRUFDaEIsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUczQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7SUEyRHBGLCtCQUNVLFlBQ0EsVUFDQSxrQkFDRCxXQUNBO1FBSkMsZUFBVSxHQUFWLFVBQVU7UUFDVixhQUFRLEdBQVIsUUFBUTtRQUNSLHFCQUFnQixHQUFoQixnQkFBZ0I7UUFDakIsY0FBUyxHQUFULFNBQVM7UUFDVCxhQUFRLEdBQVIsUUFBUTtxQ0F2RCtDLElBQUk7b0NBV3JDLEtBQUs7eUJBQ2hCLEtBQUs7S0E0Q3BCOzBCQXhDRCwyQ0FBUTs7OztzQkFBSyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzs7Ozs7UUFDdkMsVUFBYSxLQUFVLElBQUksSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksS0FBRyxLQUFPLEtBQUssT0FBTyxDQUFDLENBQUMsRUFBRTs7OzswQkFHcEYsc0RBQW1COzs7O3NCQUFLLE1BQU0sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUM7Ozs7O1FBQzdELFVBQXdCLEtBQWM7WUFDcEMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQztZQUNsQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxD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Qzs7U0F5QmEscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENvbXBvbmVudCxcclxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgQ29tcG9uZW50UmVmLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBSZW5kZXJlcixcclxuICBWaWV3Q29udGFpbmVyUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgRXJyb3JNZXNzYWdlUmVzb3VyY2UsIE16RXJyb3JNZXNzYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9lcnJvci1tZXNzYWdlL2luZGV4JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgc2VsZWN0b3I6ICdtei12YWxpZGF0aW9uLCBbbXotdmFsaWRhdGlvbl0sIFttelZhbGlkYXRpb25dJyxcclxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxyXG4gIHN0eWxlczogW2Auc2VsZWN0LXdyYXBwZXIgaW5wdXQuc2VsZWN0LWRyb3Bkb3duLmludmFsaWQsdGV4dGFyZWEubmctaW52YWxpZC5uZy10b3VjaGVkOmZvY3Vze2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNmNDQzMzY7Ym94LXNoYWRvdzowIDFweCAwIDAgI2Y0NDMzNn0uc2VsZWN0LXdyYXBwZXIgaW5wdXQuc2VsZWN0LWRyb3Bkb3duLnZhbGlke2JvcmRlci1ib3R0b206MXB4IHNvbGlkICM0Y2FmNTA7Ym94LXNoYWRvdzowIDFweCAwIDAgIzRjYWY1MH1pbnB1dDpub3QoW3R5cGU9Y2hlY2tib3hdKTpmb2N1cytsYWJlbC5hY3RpdmUgc3Bhbi5wbGFjZWhvbGRlci1yZXF1aXJlZCx0ZXh0YXJlYTpmb2N1cytsYWJlbC5hY3RpdmUgc3Bhbi5wbGFjZWhvbGRlci1yZXF1aXJlZHtjb2xvcjojZjQ0MzM2fWBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpWYWxpZGF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuICBlcnJvck1lc3NhZ2VDb21wb25lbnQ/OiBDb21wb25lbnRSZWY8TXpFcnJvck1lc3NhZ2VDb21wb25lbnQ+ID0gbnVsbDtcclxuICBsYWJlbEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gIG5hdGl2ZUVsZW1lbnQ6IEpRdWVyeTtcclxuICBzdGF0dXNDaGFuZ2VzU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIC8vIG5hdGl2ZSBwcm9wZXJ0aWVzXHJcbiAgQElucHV0KCkgaWQ6IHN0cmluZztcclxuXHJcbiAgLy8gY29tcG9uZW50IHByb3BlcnRpZXNcclxuICBASW5wdXQoKSBlcnJvck1lc3NhZ2VSZXNvdXJjZTogRXJyb3JNZXNzYWdlUmVzb3VyY2U7XHJcblxyXG4gIHByaXZhdGUgX2Zvcm1Db250cm9sRGlzYWJsZWQgPSBmYWxzZTtcclxuICBwcml2YXRlIF9yZXF1aXJlZCA9IGZhbHNlO1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ2F0dHIucmVxdWlyZWQnKVxyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IHJlcXVpcmVkKCkgeyByZXR1cm4gdGhpcy5fcmVxdWlyZWQ7IH1cclxuICBzZXQgcmVxdWlyZWQodmFsdWU6IGFueSkgeyB0aGlzLl9yZXF1aXJlZCA9ICh2YWx1ZSAhPSBudWxsICYmIGAke3ZhbHVlfWAgIT09ICdmYWxzZScpOyB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IGZvcm1Db250cm9sRGlzYWJsZWQoKSB7IHJldHVybiB0aGlzLl9mb3JtQ29udHJvbERpc2FibGVkOyB9XHJcbiAgc2V0IGZvcm1Db250cm9sRGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2Zvcm1Db250cm9sRGlzYWJsZWQgPSB2YWx1ZTtcclxuICAgIGlmICh0aGlzLl9mb3JtQ29udHJvbERpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMubmdDb250cm9sLmNvbnRyb2wuZGlzYWJsZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5uZ0NvbnRyb2wuY29udHJvbC5lbmFibGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBlbGVtZW50VG9BZGRWYWxpZGF0aW9uKCk6IEpRdWVyeSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc05hdGl2ZVNlbGVjdEVsZW1lbnRcclxuICAgICAgPyB0aGlzLmlucHV0U2VsZWN0RHJvcGRvd25cclxuICAgICAgOiB0aGlzLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBnZXQgaW5wdXRTZWxlY3REcm9wZG93bigpOiBKUXVlcnkge1xyXG4gICAgcmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudC5zaWJsaW5ncygnaW5wdXQuc2VsZWN0LWRyb3Bkb3duJyk7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNOYXRpdmVTZWxlY3RFbGVtZW50KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudFswXS5ub2RlTmFtZSA9PT0gJ1NFTEVDVCc7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdmb2N1c291dCcsIFsnJGV2ZW50LnRhcmdldCddKVxyXG4gIG9uRm9jdXNPdXQodGFyZ2V0OiBFdmVudCkge1xyXG4gICAgdGhpcy5uZ0NvbnRyb2wuY29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XHJcbiAgICB0aGlzLnNldFZhbGlkYXRpb25TdGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBwdWJsaWMgbmdDb250cm9sOiBOZ0NvbnRyb2wsXHJcbiAgICBwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyLFxyXG4gICkgeyB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMuaW5pdEVsZW1lbnRzKCk7XHJcbiAgICB0aGlzLmluaXRFcnJvck1lc3NhZ2VDb21wb25lbnQoKTtcclxuICAgIHRoaXMuc3Vic2NyaWJlU3RhdHVzQ2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLnN0YXR1c0NoYW5nZXNTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMuZXJyb3JNZXNzYWdlQ29tcG9uZW50LmRlc3Ryb3koKTtcclxuICB9XHJcblxyXG4gIGNsZWFyVmFsaWRhdGlvblN0YXRlKGVsZW1lbnQ6IEpRdWVyeSkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3MoZWxlbWVudFswXSwgJ3ZhbGlkJywgZmFsc2UpO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3MoZWxlbWVudFswXSwgJ2ludmFsaWQnLCBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVSZXF1aXJlZFNwYW5FbGVtZW50KCkge1xyXG4gICAgaWYgKHRoaXMucmVxdWlyZWQgJiYgdGhpcy5sYWJlbEVsZW1lbnQpIHtcclxuICAgICAgY29uc3Qgc3BhbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgIHNwYW5FbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncGxhY2Vob2xkZXItcmVxdWlyZWQnKTtcclxuICAgICAgc3BhbkVsZW1lbnQudGV4dENvbnRlbnQgPSAnIConO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QodGhpcy5sYWJlbEVsZW1lbnQsICdhcHBlbmRDaGlsZCcsIFtzcGFuRWxlbWVudF0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5pdEVsZW1lbnRzKCkge1xyXG4gICAgdGhpcy5sYWJlbEVsZW1lbnQgPSAkKCdsYWJlbFtmb3I9XCInICsgdGhpcy5pZCArICdcIl0nKVswXTtcclxuICAgIHRoaXMubmF0aXZlRWxlbWVudCA9ICQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgdGhpcy5jcmVhdGVSZXF1aXJlZFNwYW5FbGVtZW50KCk7XHJcbiAgfVxyXG5cclxuICBpbml0RXJyb3JNZXNzYWdlQ29tcG9uZW50KCkge1xyXG4gICAgY29uc3QgZXJyb3JNZXNzYWdlRmFjdG9yeSA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoTXpFcnJvck1lc3NhZ2VDb21wb25lbnQpO1xyXG4gICAgdGhpcy5lcnJvck1lc3NhZ2VDb21wb25lbnQgPSB0aGlzLnZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KGVycm9yTWVzc2FnZUZhY3RvcnkpO1xyXG4gICAgdGhpcy5lcnJvck1lc3NhZ2VDb21wb25lbnQuaW5zdGFuY2UuZXJyb3JNZXNzYWdlUmVzb3VyY2UgPSB0aGlzLmVycm9yTWVzc2FnZVJlc291cmNlO1xyXG4gICAgdGhpcy5lcnJvck1lc3NhZ2VDb21wb25lbnQuaW5zdGFuY2UuY29udHJvbCA9IHRoaXMubmdDb250cm9sLmNvbnRyb2w7XHJcbiAgICB0aGlzLmVycm9yTWVzc2FnZUNvbXBvbmVudC5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcblxyXG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gdGhpcy5uYXRpdmVFbGVtZW50LnBhcmVudCgpLmNoaWxkcmVuKCdtei1lcnJvci1tZXNzYWdlJyk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QoZXJyb3JNZXNzYWdlLCAnaW5zZXJ0QWZ0ZXInLCBbdGhpcy5sYWJlbEVsZW1lbnRdKTtcclxuICB9XHJcblxyXG4gIHNldFZhbGlkYXRpb25TdGF0ZSgpIHtcclxuICAgIC8vIHRvIGhhbmRsZSByZXNldCBmb3JtXHJcbiAgICBpZiAodGhpcy5uZ0NvbnRyb2wuY29udHJvbC51bnRvdWNoZWQgJiYgdGhpcy5uZ0NvbnRyb2wuY29udHJvbC5wcmlzdGluZSkge1xyXG4gICAgICB0aGlzLmNsZWFyVmFsaWRhdGlvblN0YXRlKHRoaXMuZWxlbWVudFRvQWRkVmFsaWRhdGlvbik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vIHRvIGhhbmRsZSBmaWVsZCB2YWxpZGl0eVxyXG4gICAgaWYgKHRoaXMubmdDb250cm9sLmNvbnRyb2wuZW5hYmxlZCkge1xyXG4gICAgICBpZiAodGhpcy5uZ0NvbnRyb2wuY29udHJvbC52YWxpZCkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuZWxlbWVudFRvQWRkVmFsaWRhdGlvblswXSwgJ3ZhbGlkJywgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5lbGVtZW50VG9BZGRWYWxpZGF0aW9uWzBdLCAnaW52YWxpZCcsIGZhbHNlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLmVsZW1lbnRUb0FkZFZhbGlkYXRpb25bMF0sICd2YWxpZCcsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLmVsZW1lbnRUb0FkZFZhbGlkYXRpb25bMF0sICdpbnZhbGlkJywgdHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY2xlYXJWYWxpZGF0aW9uU3RhdGUodGhpcy5lbGVtZW50VG9BZGRWYWxpZGF0aW9uKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN1YnNjcmliZVN0YXR1c0NoYW5nZXMoKSB7XHJcbiAgICB0aGlzLnN0YXR1c0NoYW5nZXNTdWJzY3JpcHRpb24gPSB0aGlzLm5nQ29udHJvbC5jb250cm9sLnN0YXR1c0NoYW5nZXMuc3Vic2NyaWJlKChzdGF0dXM6IHN0cmluZykgPT4ge1xyXG4gICAgICAvLyBUT0RPIEZpbmQgYSBiZXR0ZXIgd2F5IHRvIGhhbmRsZSB2YWxpZGF0aW9uIGFmdGVyIHRoZSBmb3JtIHN1YnNjcmlwdGlvbi4gKHNlZSBkZW1vIGZvcm0tdmFsaWRhdGlvbilcclxuICAgICAgLy8gd2FpdCBmb3IgdGhlIHZhbHVlQ2hhbmdlcyBtZXRob2QgZnJvbSBGb3JtR3JvdXAgdG8gaGF2ZSBiZWVuIHRyaWdnZXJlZCBiZWZvcmUgaGFuZGxpbmcgdGhlIHZhbGlkYXRpb24gc3RhdGVcclxuICAgICAgLy8gLyFcXCByYWNlIGNvbmRpdGlvbiB3YXJuaW5nIC8hXFxcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnNldFZhbGlkYXRpb25TdGF0ZSgpKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=