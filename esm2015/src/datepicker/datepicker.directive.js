/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectorRef, Directive, ElementRef, HostBinding, Input, Optional, Renderer } from '@angular/core';
import { NgControl } from '@angular/forms';
import { HandlePropChanges } from '../shared/index';
export class MzDatepickerDirective extends HandlePropChanges {
    /**
     * @param {?} ngControl
     * @param {?} changeDetectorRef
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(ngControl, changeDetectorRef, elementRef, renderer) {
        super();
        this.ngControl = ngControl;
        this.changeDetectorRef = changeDetectorRef;
        this.elementRef = elementRef;
        this.renderer = renderer;
        // materialize uses pickadate.js to create the datepicker
        // complete list of options is available at the following address
        // http://amsul.ca/pickadate.js/date/#options
        this.options = {};
        this.isInitRound = true;
        this.stopChangePropagation = false;
    }
    /**
     * @return {?}
     */
    get format() {
        return this.options.format || this.options.formatSubmit || null;
    }
    /**
     * @return {?}
     */
    get formatSubmit() {
        return this.options.formatSubmit || this.options.format || null;
    }
    /**
     * @return {?}
     */
    get ngControlValue() {
        return this.ngControl.value === '' ? null : this.ngControl.value;
    }
    /**
     * @return {?}
     */
    get picker() {
        return this.inputElement.pickadate('picker');
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initHandlers();
        this.initElements();
        this.initDatepicker();
        this.initInputSubscription();
        this.handleProperties();
        this.isInitRound = false;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.inputValueSubscription) {
            this.inputValueSubscription.unsubscribe();
        }
    }
    /**
     * @return {?}
     */
    initHandlers() {
        this.handlers = {
            label: () => this.handleLabel(),
            options: () => this.handleOptions(),
            placeholder: () => this.handlePlaceholder(),
        };
    }
    /**
     * @return {?}
     */
    initElements() {
        this.inputContainerElement = $(this.elementRef.nativeElement).parent('.input-field');
        this.inputElement = $(this.elementRef.nativeElement);
        this.labelElement = this.createLabelElement();
    }
    /**
     * @return {?}
     */
    initDatepicker() {
        // set default format/formatSubmit options
        if (this.format) {
            this.options.format = this.format;
        }
        if (this.formatSubmit) {
            this.options.formatSubmit = this.formatSubmit;
        }
        // extends onClose function to fix datepicker focus issue
        // https://github.com/Dogfalo/materialize/issues/2067#issuecomment-142107599
        const /** @type {?} */ onCloseFn = this.options && this.options.onClose || (() => { });
        this.options = Object.assign({}, this.options, {
            onClose: (event) => {
                onCloseFn(event);
                this.renderer.invokeElementMethod(document.activeElement, 'blur');
            },
        });
        this.renderer.invokeElementMethod(this.inputElement, 'pickadate', [this.options]);
        if (this.ngControl) {
            // set datepicker initial value according to ngControl
            this.picker.set('select', this.ngControlValue, { format: this.formatSubmit });
            // set ngControl value according to selected date in datepicker
            this.picker.on('set', () => {
                // handle stop propagation
                if (this.stopChangePropagation) {
                    this.stopChangePropagation = false;
                    return;
                }
                else {
                    this.stopChangePropagation = true;
                }
                // apply options.formatSubmit to ngControl value
                const /** @type {?} */ submitValue = this.formatSubmit
                    ? this.picker.get('select', this.formatSubmit)
                    : this.picker.get('value');
                this.ngControl.control.setValue(submitValue);
                // apply options.format to input text
                const /** @type {?} */ formatValue = this.format
                    ? this.picker.get('select', this.format)
                    : this.picker.get('value');
                this.inputElement.val(formatValue);
                // set label active status
                this.setLabelActive();
                // mark for change detection
                // fix form validation with ChangeDetectionStrategy.OnPush
                this.changeDetectorRef.markForCheck();
            });
        }
    }
    /**
     * @return {?}
     */
    initInputSubscription() {
        if (this.ngControl) {
            this.inputValueSubscription = this.ngControl.valueChanges.subscribe(() => {
                // handle stop propagation
                if (this.stopChangePropagation) {
                    this.stopChangePropagation = false;
                    return;
                }
                else {
                    this.stopChangePropagation = true;
                }
                // set selected date in datepicker according to ngControl value
                this.picker.set('select', this.ngControlValue, { format: this.formatSubmit });
                // set label active status
                this.setLabelActive();
            });
        }
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
            console.error('Input with mz-datepicker directive must be placed inside an [mz-datepicker-container] tag', this.inputElement);
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
    handleOptions() {
        if (!this.isInitRound) {
            this.picker.set(this.options);
        }
    }
    /**
     * @return {?}
     */
    handlePlaceholder() {
        const /** @type {?} */ placeholder = !!this.placeholder ? this.placeholder : null;
        this.renderer.setElementAttribute(this.inputElement[0], 'placeholder', placeholder);
        // fix issue in IE where having a placeholder on input make control dirty and trigger validation
        // on page load... note that it still trigger validation on focus and would need a better fix
        // issue : https://github.com/angular/angular/issues/15299
        // workaround : https://stackoverflow.com/a/44967245/5583283
        if (this.ngControl) {
            setTimeout(() => this.ngControl.control.markAsPristine());
        }
        this.setLabelActive();
    }
    /**
     * @return {?}
     */
    setLabelActive() {
        // need setTimeout otherwise it wont make label float in some circonstances (forcing validation for example)
        setTimeout(() => {
            const /** @type {?} */ inputValue = (/** @type {?} */ (this.inputElement[0])).value;
            const /** @type {?} */ isActive = !!this.placeholder || !!inputValue;
            this.renderer.setElementClass(this.labelElement[0], 'active', isActive);
        });
    }
}
MzDatepickerDirective.decorators = [
    { type: Directive, args: [{
                selector: 'input[mzDatepicker], input[mz-datepicker]',
            },] },
];
/** @nocollapse */
MzDatepickerDirective.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional },] },
    { type: ChangeDetectorRef, },
    { type: ElementRef, },
    { type: Renderer, },
];
MzDatepickerDirective.propDecorators = {
    "true": [{ type: HostBinding, args: ['class.datepicker',] },],
    "id": [{ type: Input },],
    "placeholder": [{ type: Input },],
    "label": [{ type: Input },],
    "options": [{ type: Input },],
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvIiwic291cmNlcyI6WyJzcmMvZGF0ZXBpY2tlci9kYXRlcGlja2VyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBcUIsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwSSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFLcEQsTUFBTSw0QkFBNkIsU0FBUSxpQkFBaUI7Ozs7Ozs7SUFzQzFELFlBQ3NCLFdBQ1osbUJBQ0EsWUFDQTtRQUVSLEtBQUssRUFBRSxDQUFDO1FBTFksY0FBUyxHQUFULFNBQVM7UUFDckIsc0JBQWlCLEdBQWpCLGlCQUFpQjtRQUNqQixlQUFVLEdBQVYsVUFBVTtRQUNWLGFBQVEsR0FBUixRQUFROzs7O3VCQTdCd0IsRUFBRTsyQkFLOUIsSUFBSTtxQ0FFTSxLQUFLO0tBeUI1Qjs7OztJQXZCRCxJQUFJLE1BQU07UUFDUixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDO0tBQ2pFOzs7O0lBRUQsSUFBSSxZQUFZO1FBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQztLQUNqRTs7OztJQUVELElBQUksY0FBYztRQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO0tBQ2xFOzs7O0lBRUQsSUFBSSxNQUFNO1FBQ1IsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQzlDOzs7O0lBV0QsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0tBQzFCOzs7O0lBRUQsV0FBVztRQUNULEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzNDO0tBQ0Y7Ozs7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLFFBQVEsR0FBRztZQUNkLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQy9CLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ25DLFdBQVcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7U0FDNUMsQ0FBQztLQUNIOzs7O0lBRUQsWUFBWTtRQUNWLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDckYsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0tBQy9DOzs7O0lBRUQsY0FBYzs7UUFFWixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ25DO1FBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztTQUMvQzs7O1FBSUQsdUJBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBRyxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQzdDLE9BQU8sRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUNqQixTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQzthQUNuRTtTQUNGLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUVsRixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzs7WUFFbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7O1lBRzlFLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUU7O2dCQUV6QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO29CQUMvQixJQUFJLENBQUMscUJBQXFCLEdBQUcsS0FBSyxDQUFDO29CQUNuQyxNQUFNLENBQUM7aUJBQ1I7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ04sSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQztpQkFDbkM7O2dCQUdELHVCQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWTtvQkFDbkMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDO29CQUM5QyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQzs7Z0JBRzdDLHVCQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTTtvQkFDN0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDO29CQUN4QyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDOztnQkFHbkMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDOzs7Z0JBSXRCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUN2QyxDQUFDLENBQUM7U0FDSjtLQUNGOzs7O0lBRUQscUJBQXFCO1FBQ25CLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ25CLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFOztnQkFFdkUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztvQkFDL0IsSUFBSSxDQUFDLHFCQUFxQixHQUFHLEtBQUssQ0FBQztvQkFDbkMsTUFBTSxDQUFDO2lCQUNSO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUM7aUJBQ25DOztnQkFHRCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQzs7Z0JBRzlFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQzthQUN2QixDQUFDLENBQUM7U0FDSjtLQUNGOzs7O0lBRUQsa0JBQWtCO1FBQ2hCLHVCQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JELFlBQVksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUUxQyxJQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUU5RSxNQUFNLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO0tBQ3hCOzs7O0lBRUQsZ0JBQWdCO1FBQ2QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVDLE9BQU8sQ0FBQyxLQUFLLENBQUMsMkZBQTJGLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzlILE1BQU0sQ0FBQztTQUNSO1FBRUQsS0FBSyxDQUFDLG1CQUFtQixFQUFFLENBQUM7S0FDN0I7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0tBQzVFOzs7O0lBRUQsYUFBYTtRQUNYLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQy9CO0tBQ0Y7Ozs7SUFFRCxpQkFBaUI7UUFDZix1QkFBTSxXQUFXLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNqRSxJQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDOzs7OztRQU1wRixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNuQixVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztTQUMzRDtRQUVELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztLQUN2Qjs7OztJQUVELGNBQWM7O1FBRVosVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLHVCQUFNLFVBQVUsR0FBRyxtQkFBbUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEtBQUssQ0FBQztZQUNsRSx1QkFBTSxRQUFRLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQztZQUNwRCxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztTQUN6RSxDQUFDLENBQUM7S0FDSjs7O1lBOU1GLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMkNBQTJDO2FBQ3REOzs7O1lBUFEsU0FBUyx1QkErQ2IsUUFBUTtZQWhESixpQkFBaUI7WUFBYSxVQUFVO1lBQW1ELFFBQVE7OztxQkFVekcsV0FBVyxTQUFDLGtCQUFrQjttQkFHOUIsS0FBSzs0QkFDTCxLQUFLO3NCQUdMLEtBQUs7d0JBS0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIE9wdGlvbmFsLCBSZW5kZXJlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgSGFuZGxlUHJvcENoYW5nZXMgfSBmcm9tICcuLi9zaGFyZWQvaW5kZXgnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdpbnB1dFttekRhdGVwaWNrZXJdLCBpbnB1dFttei1kYXRlcGlja2VyXScsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNekRhdGVwaWNrZXJEaXJlY3RpdmUgZXh0ZW5kcyBIYW5kbGVQcm9wQ2hhbmdlcyBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmRhdGVwaWNrZXInKSB0cnVlO1xyXG5cclxuICAvLyBuYXRpdmUgcHJvcGVydGllc1xyXG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcclxuXHJcbiAgLy8gZGlyZWN0aXZlIHByb3BlcnRpZXNcclxuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xyXG5cclxuICAvLyBtYXRlcmlhbGl6ZSB1c2VzIHBpY2thZGF0ZS5qcyB0byBjcmVhdGUgdGhlIGRhdGVwaWNrZXJcclxuICAvLyBjb21wbGV0ZSBsaXN0IG9mIG9wdGlvbnMgaXMgYXZhaWxhYmxlIGF0IHRoZSBmb2xsb3dpbmcgYWRkcmVzc1xyXG4gIC8vIGh0dHA6Ly9hbXN1bC5jYS9waWNrYWRhdGUuanMvZGF0ZS8jb3B0aW9uc1xyXG4gIEBJbnB1dCgpIG9wdGlvbnM6IFBpY2thZGF0ZS5EYXRlT3B0aW9ucyA9IHt9O1xyXG5cclxuICBpbnB1dEVsZW1lbnQ6IEpRdWVyeTtcclxuICBpbnB1dENvbnRhaW5lckVsZW1lbnQ6IEpRdWVyeTtcclxuICBpbnB1dFZhbHVlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcbiAgaXNJbml0Um91bmQgPSB0cnVlO1xyXG4gIGxhYmVsRWxlbWVudDogSlF1ZXJ5O1xyXG4gIHN0b3BDaGFuZ2VQcm9wYWdhdGlvbiA9IGZhbHNlO1xyXG5cclxuICBnZXQgZm9ybWF0KCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmZvcm1hdCB8fCB0aGlzLm9wdGlvbnMuZm9ybWF0U3VibWl0IHx8IG51bGw7XHJcbiAgfVxyXG5cclxuICBnZXQgZm9ybWF0U3VibWl0KCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmZvcm1hdFN1Ym1pdCB8fCB0aGlzLm9wdGlvbnMuZm9ybWF0IHx8IG51bGw7XHJcbiAgfVxyXG5cclxuICBnZXQgbmdDb250cm9sVmFsdWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLm5nQ29udHJvbC52YWx1ZSA9PT0gJycgPyBudWxsIDogdGhpcy5uZ0NvbnRyb2wudmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXQgcGlja2VyKCk6IFBpY2thZGF0ZS5EYXRlUGlja2VyIHtcclxuICAgIHJldHVybiB0aGlzLmlucHV0RWxlbWVudC5waWNrYWRhdGUoJ3BpY2tlcicpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIG5nQ29udHJvbDogTmdDb250cm9sLFxyXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcixcclxuICApIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5pdEhhbmRsZXJzKCk7XHJcbiAgICB0aGlzLmluaXRFbGVtZW50cygpO1xyXG4gICAgdGhpcy5pbml0RGF0ZXBpY2tlcigpO1xyXG4gICAgdGhpcy5pbml0SW5wdXRTdWJzY3JpcHRpb24oKTtcclxuICAgIHRoaXMuaGFuZGxlUHJvcGVydGllcygpO1xyXG4gICAgdGhpcy5pc0luaXRSb3VuZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICBpZiAodGhpcy5pbnB1dFZhbHVlU3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgIHRoaXMuaW5wdXRWYWx1ZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5pdEhhbmRsZXJzKCkge1xyXG4gICAgdGhpcy5oYW5kbGVycyA9IHtcclxuICAgICAgbGFiZWw6ICgpID0+IHRoaXMuaGFuZGxlTGFiZWwoKSxcclxuICAgICAgb3B0aW9uczogKCkgPT4gdGhpcy5oYW5kbGVPcHRpb25zKCksXHJcbiAgICAgIHBsYWNlaG9sZGVyOiAoKSA9PiB0aGlzLmhhbmRsZVBsYWNlaG9sZGVyKCksXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgaW5pdEVsZW1lbnRzKCkge1xyXG4gICAgdGhpcy5pbnB1dENvbnRhaW5lckVsZW1lbnQgPSAkKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5wYXJlbnQoJy5pbnB1dC1maWVsZCcpO1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQgPSAkKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcclxuICAgIHRoaXMubGFiZWxFbGVtZW50ID0gdGhpcy5jcmVhdGVMYWJlbEVsZW1lbnQoKTtcclxuICB9XHJcblxyXG4gIGluaXREYXRlcGlja2VyKCkge1xyXG4gICAgLy8gc2V0IGRlZmF1bHQgZm9ybWF0L2Zvcm1hdFN1Ym1pdCBvcHRpb25zXHJcbiAgICBpZiAodGhpcy5mb3JtYXQpIHtcclxuICAgICAgdGhpcy5vcHRpb25zLmZvcm1hdCA9IHRoaXMuZm9ybWF0O1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZm9ybWF0U3VibWl0KSB7XHJcbiAgICAgIHRoaXMub3B0aW9ucy5mb3JtYXRTdWJtaXQgPSB0aGlzLmZvcm1hdFN1Ym1pdDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBleHRlbmRzIG9uQ2xvc2UgZnVuY3Rpb24gdG8gZml4IGRhdGVwaWNrZXIgZm9jdXMgaXNzdWVcclxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Eb2dmYWxvL21hdGVyaWFsaXplL2lzc3Vlcy8yMDY3I2lzc3VlY29tbWVudC0xNDIxMDc1OTlcclxuICAgIGNvbnN0IG9uQ2xvc2VGbiA9IHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMub25DbG9zZSB8fCAoKCkgPT4ge30pO1xyXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5vcHRpb25zLCB7XHJcbiAgICAgIG9uQ2xvc2U6IChldmVudCkgPT4ge1xyXG4gICAgICAgIG9uQ2xvc2VGbihldmVudCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQsICdibHVyJyk7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QodGhpcy5pbnB1dEVsZW1lbnQsICdwaWNrYWRhdGUnLCBbdGhpcy5vcHRpb25zXSk7XHJcblxyXG4gICAgaWYgKHRoaXMubmdDb250cm9sKSB7XHJcbiAgICAgIC8vIHNldCBkYXRlcGlja2VyIGluaXRpYWwgdmFsdWUgYWNjb3JkaW5nIHRvIG5nQ29udHJvbFxyXG4gICAgICB0aGlzLnBpY2tlci5zZXQoJ3NlbGVjdCcsIHRoaXMubmdDb250cm9sVmFsdWUsIHsgZm9ybWF0OiB0aGlzLmZvcm1hdFN1Ym1pdCB9KTtcclxuXHJcbiAgICAgIC8vIHNldCBuZ0NvbnRyb2wgdmFsdWUgYWNjb3JkaW5nIHRvIHNlbGVjdGVkIGRhdGUgaW4gZGF0ZXBpY2tlclxyXG4gICAgICB0aGlzLnBpY2tlci5vbignc2V0JywgKCkgPT4ge1xyXG4gICAgICAgIC8vIGhhbmRsZSBzdG9wIHByb3BhZ2F0aW9uXHJcbiAgICAgICAgaWYgKHRoaXMuc3RvcENoYW5nZVByb3BhZ2F0aW9uKSB7XHJcbiAgICAgICAgICB0aGlzLnN0b3BDaGFuZ2VQcm9wYWdhdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnN0b3BDaGFuZ2VQcm9wYWdhdGlvbiA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBhcHBseSBvcHRpb25zLmZvcm1hdFN1Ym1pdCB0byBuZ0NvbnRyb2wgdmFsdWVcclxuICAgICAgICBjb25zdCBzdWJtaXRWYWx1ZSA9IHRoaXMuZm9ybWF0U3VibWl0XHJcbiAgICAgICAgICA/IHRoaXMucGlja2VyLmdldCgnc2VsZWN0JywgdGhpcy5mb3JtYXRTdWJtaXQpXHJcbiAgICAgICAgICA6IHRoaXMucGlja2VyLmdldCgndmFsdWUnKTtcclxuICAgICAgICB0aGlzLm5nQ29udHJvbC5jb250cm9sLnNldFZhbHVlKHN1Ym1pdFZhbHVlKTtcclxuXHJcbiAgICAgICAgLy8gYXBwbHkgb3B0aW9ucy5mb3JtYXQgdG8gaW5wdXQgdGV4dFxyXG4gICAgICAgIGNvbnN0IGZvcm1hdFZhbHVlID0gdGhpcy5mb3JtYXRcclxuICAgICAgICAgID8gdGhpcy5waWNrZXIuZ2V0KCdzZWxlY3QnLCB0aGlzLmZvcm1hdClcclxuICAgICAgICAgIDogdGhpcy5waWNrZXIuZ2V0KCd2YWx1ZScpO1xyXG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50LnZhbChmb3JtYXRWYWx1ZSk7XHJcblxyXG4gICAgICAgIC8vIHNldCBsYWJlbCBhY3RpdmUgc3RhdHVzXHJcbiAgICAgICAgdGhpcy5zZXRMYWJlbEFjdGl2ZSgpO1xyXG5cclxuICAgICAgICAvLyBtYXJrIGZvciBjaGFuZ2UgZGV0ZWN0aW9uXHJcbiAgICAgICAgLy8gZml4IGZvcm0gdmFsaWRhdGlvbiB3aXRoIENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG4gICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5pdElucHV0U3Vic2NyaXB0aW9uKCkge1xyXG4gICAgaWYgKHRoaXMubmdDb250cm9sKSB7XHJcbiAgICAgIHRoaXMuaW5wdXRWYWx1ZVN1YnNjcmlwdGlvbiA9IHRoaXMubmdDb250cm9sLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIC8vIGhhbmRsZSBzdG9wIHByb3BhZ2F0aW9uXHJcbiAgICAgICAgaWYgKHRoaXMuc3RvcENoYW5nZVByb3BhZ2F0aW9uKSB7XHJcbiAgICAgICAgICB0aGlzLnN0b3BDaGFuZ2VQcm9wYWdhdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnN0b3BDaGFuZ2VQcm9wYWdhdGlvbiA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzZXQgc2VsZWN0ZWQgZGF0ZSBpbiBkYXRlcGlja2VyIGFjY29yZGluZyB0byBuZ0NvbnRyb2wgdmFsdWVcclxuICAgICAgICB0aGlzLnBpY2tlci5zZXQoJ3NlbGVjdCcsIHRoaXMubmdDb250cm9sVmFsdWUsIHsgZm9ybWF0OiB0aGlzLmZvcm1hdFN1Ym1pdCB9KTtcclxuXHJcbiAgICAgICAgLy8gc2V0IGxhYmVsIGFjdGl2ZSBzdGF0dXNcclxuICAgICAgICB0aGlzLnNldExhYmVsQWN0aXZlKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlTGFiZWxFbGVtZW50KCkge1xyXG4gICAgY29uc3QgbGFiZWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGxhYmVsRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIHRoaXMuaWQpO1xyXG5cclxuICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLmlucHV0RWxlbWVudCwgJ2FmdGVyJywgW2xhYmVsRWxlbWVudF0pO1xyXG5cclxuICAgIHJldHVybiAkKGxhYmVsRWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVQcm9wZXJ0aWVzKCkge1xyXG4gICAgaWYgKHRoaXMuaW5wdXRDb250YWluZXJFbGVtZW50Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdJbnB1dCB3aXRoIG16LWRhdGVwaWNrZXIgZGlyZWN0aXZlIG11c3QgYmUgcGxhY2VkIGluc2lkZSBhbiBbbXotZGF0ZXBpY2tlci1jb250YWluZXJdIHRhZycsIHRoaXMuaW5wdXRFbGVtZW50KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHN1cGVyLmV4ZWN1dGVQcm9wSGFuZGxlcnMoKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUxhYmVsKCkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMubGFiZWxFbGVtZW50LCAndGV4dCcsIFt0aGlzLmxhYmVsXSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVPcHRpb25zKCkge1xyXG4gICAgaWYgKCF0aGlzLmlzSW5pdFJvdW5kKSB7XHJcbiAgICAgIHRoaXMucGlja2VyLnNldCh0aGlzLm9wdGlvbnMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlUGxhY2Vob2xkZXIoKSB7XHJcbiAgICBjb25zdCBwbGFjZWhvbGRlciA9ICEhdGhpcy5wbGFjZWhvbGRlciA/IHRoaXMucGxhY2Vob2xkZXIgOiBudWxsO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50QXR0cmlidXRlKHRoaXMuaW5wdXRFbGVtZW50WzBdLCAncGxhY2Vob2xkZXInLCBwbGFjZWhvbGRlcik7XHJcblxyXG4gICAgLy8gZml4IGlzc3VlIGluIElFIHdoZXJlIGhhdmluZyBhIHBsYWNlaG9sZGVyIG9uIGlucHV0IG1ha2UgY29udHJvbCBkaXJ0eSBhbmQgdHJpZ2dlciB2YWxpZGF0aW9uXHJcbiAgICAvLyBvbiBwYWdlIGxvYWQuLi4gbm90ZSB0aGF0IGl0IHN0aWxsIHRyaWdnZXIgdmFsaWRhdGlvbiBvbiBmb2N1cyBhbmQgd291bGQgbmVlZCBhIGJldHRlciBmaXhcclxuICAgIC8vIGlzc3VlIDogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTUyOTlcclxuICAgIC8vIHdvcmthcm91bmQgOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDQ5NjcyNDUvNTU4MzI4M1xyXG4gICAgaWYgKHRoaXMubmdDb250cm9sKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5uZ0NvbnRyb2wuY29udHJvbC5tYXJrQXNQcmlzdGluZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNldExhYmVsQWN0aXZlKCk7XHJcbiAgfVxyXG5cclxuICBzZXRMYWJlbEFjdGl2ZSgpIHtcclxuICAgIC8vIG5lZWQgc2V0VGltZW91dCBvdGhlcndpc2UgaXQgd29udCBtYWtlIGxhYmVsIGZsb2F0IGluIHNvbWUgY2lyY29uc3RhbmNlcyAoZm9yY2luZyB2YWxpZGF0aW9uIGZvciBleGFtcGxlKVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGlucHV0VmFsdWUgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+dGhpcy5pbnB1dEVsZW1lbnRbMF0pLnZhbHVlO1xyXG4gICAgICBjb25zdCBpc0FjdGl2ZSA9ICEhdGhpcy5wbGFjZWhvbGRlciB8fCAhIWlucHV0VmFsdWU7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMubGFiZWxFbGVtZW50WzBdLCAnYWN0aXZlJywgaXNBY3RpdmUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==