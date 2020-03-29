/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, Input, Optional, Renderer } from '@angular/core';
import { NgControl } from '@angular/forms';
import { interval } from 'rxjs';
import { first, skipWhile } from 'rxjs/operators';
import { HandlePropChanges } from '../shared';
export class MzInputDirective extends HandlePropChanges {
    /**
     * @param {?} ngControl
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(ngControl, elementRef, renderer) {
        super();
        this.ngControl = ngControl;
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initHandlers();
        this.initElements();
        this.initInputSubscription();
        this.handleProperties();
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
            autocomplete: () => this.handleAutocomplete(),
            dataError: () => this.handleDataError(),
            dataSuccess: () => this.handleDataSuccess(),
            label: () => this.handleLabel(),
            length: () => this.handleLength(),
            placeholder: () => this.handlePlaceholder(),
            validate: () => this.handleValidate(),
        };
    }
    /**
     * @return {?}
     */
    initElements() {
        this.inputElement = $(this.elementRef.nativeElement);
        this.inputContainerElement = $(this.elementRef.nativeElement).parent('.input-field');
        this.labelElement = this.createLabelElement();
    }
    /**
     * @return {?}
     */
    initInputSubscription() {
        if (this.ngControl) {
            this.inputValueSubscription = this.ngControl.valueChanges.subscribe(() => this.setLabelActive());
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
            console.error('Input with mz-input directive must be placed inside an [mz-input-container] tag', this.inputElement);
            return;
        }
        super.executePropHandlers();
    }
    /**
     * @return {?}
     */
    handleAutocomplete() {
        const /** @type {?} */ isAutocomplete = this.autocomplete != null
            && this.autocomplete.data != null
            && Object.keys(this.autocomplete.data).length > 0;
        this.renderer.setElementClass(this.inputElement[0], 'autocomplete', isAutocomplete);
        if (this.autocomplete != null) {
            // wait until autocomplete is defined before to invoke
            // see issue: https://github.com/Dogfalo/materialize/issues/4401
            interval(100)
                .pipe(skipWhile(() => !this.inputElement['autocomplete']), first())
                .subscribe(() => this.renderer.invokeElementMethod(this.inputElement, 'autocomplete', [this.autocomplete]));
        }
    }
    /**
     * @return {?}
     */
    handleDataError() {
        this.renderer.setElementAttribute(this.labelElement[0], 'data-error', this.dataError);
    }
    /**
     * @return {?}
     */
    handleDataSuccess() {
        this.renderer.setElementAttribute(this.labelElement[0], 'data-success', this.dataSuccess);
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
    handleLength() {
        const /** @type {?} */ length = this.length ? this.length.toString() : null;
        this.renderer.setElementAttribute(this.inputElement[0], 'data-length', length);
        if (length) {
            this.setCharacterCount();
        }
        else {
            this.removeCharacterCount();
        }
    }
    /**
     * @return {?}
     */
    handlePlaceholder() {
        const /** @type {?} */ placeholder = !!this.placeholder ? this.placeholder : null;
        this.renderer.setElementAttribute(this.inputElement[0], 'placeholder', placeholder);
        // fix issue in IE where having a placeholder on input make control dirty
        // note that it still trigger validation on focus but this is better than nothing
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
    handleValidate() {
        this.renderer.setElementClass(this.inputElement[0], 'validate', this.validate);
        if (this.validate) {
            // force validation
            this.renderer.invokeElementMethod(this.inputElement, 'trigger', ['blur']);
        }
        else {
            this.removeValidationClasses();
        }
    }
    /**
     * @return {?}
     */
    setCharacterCount() {
        this.renderer.invokeElementMethod(this.inputElement, 'characterCounter');
        // force validation
        // need setTimeout otherwise it wont trigger validation right away
        setTimeout(() => {
            this.renderer.invokeElementMethod(this.inputElement, 'trigger', ['input']);
            this.renderer.invokeElementMethod(this.inputElement, 'trigger', ['blur']);
        });
    }
    /**
     * @return {?}
     */
    setLabelActive() {
        // need setTimeout otherwise it wont make label float in some circonstances
        // for example: forcing validation for example, reseting form programmaticaly, ...
        setTimeout(() => {
            const /** @type {?} */ inputValue = (/** @type {?} */ (this.inputElement[0])).value;
            const /** @type {?} */ isActive = !!this.placeholder || !!inputValue;
            this.renderer.setElementClass(this.labelElement[0], 'active', isActive);
        });
    }
    /**
     * @return {?}
     */
    removeCharacterCount() {
        this.renderer.invokeElementMethod(this.inputElement.siblings('.character-counter'), 'remove');
        this.removeValidationClasses();
    }
    /**
     * @return {?}
     */
    removeValidationClasses() {
        // reset valid/invalid state
        this.renderer.setElementClass(this.inputElement[0], 'invalid', false);
        this.renderer.setElementClass(this.inputElement[0], 'valid', false);
    }
}
MzInputDirective.decorators = [
    { type: Directive, args: [{
                selector: 'input[mzInput], input[mz-input]',
            },] },
];
/** @nocollapse */
MzInputDirective.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional },] },
    { type: ElementRef, },
    { type: Renderer, },
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hdGVyaWFsaXplLyIsInNvdXJjZXMiOlsic3JjL2lucHV0L2lucHV0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFxQixRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsUUFBUSxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWxELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUs5QyxNQUFNLHVCQUF3QixTQUFRLGlCQUFpQjs7Ozs7O0lBa0JyRCxZQUNzQixXQUNaLFlBQ0E7UUFFUixLQUFLLEVBQUUsQ0FBQztRQUpZLGNBQVMsR0FBVCxTQUFTO1FBQ3JCLGVBQVUsR0FBVixVQUFVO1FBQ1YsYUFBUSxHQUFSLFFBQVE7S0FHakI7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztLQUN6Qjs7OztJQUVELFdBQVc7UUFDVCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUMzQztLQUNGOzs7O0lBRUQsWUFBWTtRQUNWLElBQUksQ0FBQyxRQUFRLEdBQUc7WUFDZCxZQUFZLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQzdDLFNBQVMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3ZDLFdBQVcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDM0MsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDL0IsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDakMsV0FBVyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUMzQyxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtTQUN0QyxDQUFDO0tBQ0g7Ozs7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMscUJBQXFCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3JGLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7S0FDL0M7Ozs7SUFFRCxxQkFBcUI7UUFDbkIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDbkIsSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztTQUNsRztLQUNGOzs7O0lBRUQsa0JBQWtCO1FBQ2hCLHVCQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JELFlBQVksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUUxQyxJQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUU5RSxNQUFNLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO0tBQ3hCOzs7O0lBRUQsZ0JBQWdCO1FBQ2QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVDLE9BQU8sQ0FBQyxLQUFLLENBQUMsaUZBQWlGLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3BILE1BQU0sQ0FBQztTQUNSO1FBRUQsS0FBSyxDQUFDLG1CQUFtQixFQUFFLENBQUM7S0FDN0I7Ozs7SUFFRCxrQkFBa0I7UUFDaEIsdUJBQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSTtlQUMzQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksSUFBSSxJQUFJO2VBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBRXBELElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsY0FBYyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBRXBGLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQzs7O1lBRzlCLFFBQVEsQ0FBQyxHQUFHLENBQUM7aUJBQ1YsSUFBSSxDQUNILFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUMsRUFDbkQsS0FBSyxFQUFFLENBQUM7aUJBQ1QsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQy9HO0tBQ0Y7Ozs7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDdkY7Ozs7SUFFRCxpQkFBaUI7UUFDZixJQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsY0FBYyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztLQUMzRjs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7S0FDNUU7Ozs7SUFFRCxZQUFZO1FBQ1YsdUJBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUUzRCxJQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRS9FLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDWCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztTQUMxQjtRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7U0FDN0I7S0FDRjs7OztJQUVELGlCQUFpQjtRQUNmLHVCQUFNLFdBQVcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ2pFLElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUM7Ozs7O1FBTXBGLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ25CLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO1NBQzNEO1FBRUQsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0tBQ3ZCOzs7O0lBRUQsY0FBYztRQUNaLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUUvRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzs7WUFFbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLFNBQVMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDM0U7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1NBQ2hDO0tBQ0Y7Ozs7SUFFRCxpQkFBaUI7UUFDZixJQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsa0JBQWtCLENBQUMsQ0FBQzs7O1FBSXpFLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsU0FBUyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUMzRSxJQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsU0FBUyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUMzRSxDQUFDLENBQUM7S0FDSjs7OztJQUVELGNBQWM7OztRQUdaLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCx1QkFBTSxVQUFVLEdBQUcsbUJBQW1CLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxLQUFLLENBQUM7WUFDbEUsdUJBQU0sUUFBUSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUM7WUFDcEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDekUsQ0FBQyxDQUFDO0tBQ0o7Ozs7SUFFRCxvQkFBb0I7UUFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRTlGLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO0tBQ2hDOzs7O0lBRUQsdUJBQXVCOztRQUVyQixJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztLQUNyRTs7O1lBdkxGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUNBQWlDO2FBQzVDOzs7O1lBUlEsU0FBUyx1QkE0QmIsUUFBUTtZQTdCTyxVQUFVO1lBQXNDLFFBQVE7OzttQkFZekUsS0FBSzs0QkFDTCxLQUFLOzZCQUdMLEtBQUs7MEJBQ0wsS0FBSzs0QkFDTCxLQUFLO3NCQUNMLEtBQUs7dUJBQ0wsS0FBSzt5QkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIE9wdGlvbmFsLCBSZW5kZXJlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IGludGVydmFsLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmlyc3QsIHNraXBXaGlsZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IEhhbmRsZVByb3BDaGFuZ2VzIH0gZnJvbSAnLi4vc2hhcmVkJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnaW5wdXRbbXpJbnB1dF0sIGlucHV0W216LWlucHV0XScsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNeklucHV0RGlyZWN0aXZlIGV4dGVuZHMgSGFuZGxlUHJvcENoYW5nZXMgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgLy8gbmF0aXZlIHByb3BlcnRpZXNcclxuICBASW5wdXQoKSBpZDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XHJcblxyXG4gIC8vIGRpcmVjdGl2ZSBwcm9wZXJ0aWVzXHJcbiAgQElucHV0KCkgYXV0b2NvbXBsZXRlOiB7IGRhdGE6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfTtcclxuICBASW5wdXQoKSBkYXRhRXJyb3I6IHN0cmluZztcclxuICBASW5wdXQoKSBkYXRhU3VjY2Vzczogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbGVuZ3RoOiBudW1iZXI7XHJcbiAgQElucHV0KCkgdmFsaWRhdGU6IGJvb2xlYW47XHJcblxyXG4gIGlucHV0RWxlbWVudDogSlF1ZXJ5O1xyXG4gIGlucHV0Q29udGFpbmVyRWxlbWVudDogSlF1ZXJ5O1xyXG4gIGlucHV0VmFsdWVTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuICBsYWJlbEVsZW1lbnQ6IEpRdWVyeTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIG5nQ29udHJvbDogTmdDb250cm9sLFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIsXHJcbiAgKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluaXRIYW5kbGVycygpO1xyXG4gICAgdGhpcy5pbml0RWxlbWVudHMoKTtcclxuICAgIHRoaXMuaW5pdElucHV0U3Vic2NyaXB0aW9uKCk7XHJcbiAgICB0aGlzLmhhbmRsZVByb3BlcnRpZXMoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgaWYgKHRoaXMuaW5wdXRWYWx1ZVN1YnNjcmlwdGlvbikge1xyXG4gICAgICB0aGlzLmlucHV0VmFsdWVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGluaXRIYW5kbGVycygpIHtcclxuICAgIHRoaXMuaGFuZGxlcnMgPSB7XHJcbiAgICAgIGF1dG9jb21wbGV0ZTogKCkgPT4gdGhpcy5oYW5kbGVBdXRvY29tcGxldGUoKSxcclxuICAgICAgZGF0YUVycm9yOiAoKSA9PiB0aGlzLmhhbmRsZURhdGFFcnJvcigpLFxyXG4gICAgICBkYXRhU3VjY2VzczogKCkgPT4gdGhpcy5oYW5kbGVEYXRhU3VjY2VzcygpLFxyXG4gICAgICBsYWJlbDogKCkgPT4gdGhpcy5oYW5kbGVMYWJlbCgpLFxyXG4gICAgICBsZW5ndGg6ICgpID0+IHRoaXMuaGFuZGxlTGVuZ3RoKCksXHJcbiAgICAgIHBsYWNlaG9sZGVyOiAoKSA9PiB0aGlzLmhhbmRsZVBsYWNlaG9sZGVyKCksXHJcbiAgICAgIHZhbGlkYXRlOiAoKSA9PiB0aGlzLmhhbmRsZVZhbGlkYXRlKCksXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgaW5pdEVsZW1lbnRzKCkge1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQgPSAkKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcclxuICAgIHRoaXMuaW5wdXRDb250YWluZXJFbGVtZW50ID0gJCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkucGFyZW50KCcuaW5wdXQtZmllbGQnKTtcclxuICAgIHRoaXMubGFiZWxFbGVtZW50ID0gdGhpcy5jcmVhdGVMYWJlbEVsZW1lbnQoKTtcclxuICB9XHJcblxyXG4gIGluaXRJbnB1dFN1YnNjcmlwdGlvbigpIHtcclxuICAgIGlmICh0aGlzLm5nQ29udHJvbCkge1xyXG4gICAgICB0aGlzLmlucHV0VmFsdWVTdWJzY3JpcHRpb24gPSB0aGlzLm5nQ29udHJvbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHRoaXMuc2V0TGFiZWxBY3RpdmUoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjcmVhdGVMYWJlbEVsZW1lbnQoKSB7XHJcbiAgICBjb25zdCBsYWJlbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgbGFiZWxFbGVtZW50LnNldEF0dHJpYnV0ZSgnZm9yJywgdGhpcy5pZCk7XHJcblxyXG4gICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMuaW5wdXRFbGVtZW50LCAnYWZ0ZXInLCBbbGFiZWxFbGVtZW50XSk7XHJcblxyXG4gICAgcmV0dXJuICQobGFiZWxFbGVtZW50KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVByb3BlcnRpZXMoKSB7XHJcbiAgICBpZiAodGhpcy5pbnB1dENvbnRhaW5lckVsZW1lbnQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0lucHV0IHdpdGggbXotaW5wdXQgZGlyZWN0aXZlIG11c3QgYmUgcGxhY2VkIGluc2lkZSBhbiBbbXotaW5wdXQtY29udGFpbmVyXSB0YWcnLCB0aGlzLmlucHV0RWxlbWVudCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBzdXBlci5leGVjdXRlUHJvcEhhbmRsZXJzKCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVBdXRvY29tcGxldGUoKSB7XHJcbiAgICBjb25zdCBpc0F1dG9jb21wbGV0ZSA9IHRoaXMuYXV0b2NvbXBsZXRlICE9IG51bGxcclxuICAgICAgJiYgdGhpcy5hdXRvY29tcGxldGUuZGF0YSAhPSBudWxsXHJcbiAgICAgICYmIE9iamVjdC5rZXlzKHRoaXMuYXV0b2NvbXBsZXRlLmRhdGEpLmxlbmd0aCA+IDA7XHJcblxyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5pbnB1dEVsZW1lbnRbMF0sICdhdXRvY29tcGxldGUnLCBpc0F1dG9jb21wbGV0ZSk7XHJcblxyXG4gICAgaWYgKHRoaXMuYXV0b2NvbXBsZXRlICE9IG51bGwpIHtcclxuICAgICAgLy8gd2FpdCB1bnRpbCBhdXRvY29tcGxldGUgaXMgZGVmaW5lZCBiZWZvcmUgdG8gaW52b2tlXHJcbiAgICAgIC8vIHNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL0RvZ2ZhbG8vbWF0ZXJpYWxpemUvaXNzdWVzLzQ0MDFcclxuICAgICAgaW50ZXJ2YWwoMTAwKVxyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgc2tpcFdoaWxlKCgpID0+ICF0aGlzLmlucHV0RWxlbWVudFsnYXV0b2NvbXBsZXRlJ10pLFxyXG4gICAgICAgICAgZmlyc3QoKSlcclxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLmlucHV0RWxlbWVudCwgJ2F1dG9jb21wbGV0ZScsIFt0aGlzLmF1dG9jb21wbGV0ZV0pKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZURhdGFFcnJvcigpIHtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudEF0dHJpYnV0ZSh0aGlzLmxhYmVsRWxlbWVudFswXSwgJ2RhdGEtZXJyb3InLCB0aGlzLmRhdGFFcnJvcik7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVEYXRhU3VjY2VzcygpIHtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudEF0dHJpYnV0ZSh0aGlzLmxhYmVsRWxlbWVudFswXSwgJ2RhdGEtc3VjY2VzcycsIHRoaXMuZGF0YVN1Y2Nlc3MpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlTGFiZWwoKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QodGhpcy5sYWJlbEVsZW1lbnQsICd0ZXh0JywgW3RoaXMubGFiZWxdKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUxlbmd0aCgpIHtcclxuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMubGVuZ3RoID8gdGhpcy5sZW5ndGgudG9TdHJpbmcoKSA6IG51bGw7XHJcblxyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50QXR0cmlidXRlKHRoaXMuaW5wdXRFbGVtZW50WzBdLCAnZGF0YS1sZW5ndGgnLCBsZW5ndGgpO1xyXG5cclxuICAgIGlmIChsZW5ndGgpIHtcclxuICAgICAgdGhpcy5zZXRDaGFyYWN0ZXJDb3VudCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZW1vdmVDaGFyYWN0ZXJDb3VudCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlUGxhY2Vob2xkZXIoKSB7XHJcbiAgICBjb25zdCBwbGFjZWhvbGRlciA9ICEhdGhpcy5wbGFjZWhvbGRlciA/IHRoaXMucGxhY2Vob2xkZXIgOiBudWxsO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50QXR0cmlidXRlKHRoaXMuaW5wdXRFbGVtZW50WzBdLCAncGxhY2Vob2xkZXInLCBwbGFjZWhvbGRlcik7XHJcblxyXG4gICAgLy8gZml4IGlzc3VlIGluIElFIHdoZXJlIGhhdmluZyBhIHBsYWNlaG9sZGVyIG9uIGlucHV0IG1ha2UgY29udHJvbCBkaXJ0eVxyXG4gICAgLy8gbm90ZSB0aGF0IGl0IHN0aWxsIHRyaWdnZXIgdmFsaWRhdGlvbiBvbiBmb2N1cyBidXQgdGhpcyBpcyBiZXR0ZXIgdGhhbiBub3RoaW5nXHJcbiAgICAvLyBpc3N1ZSA6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzE1Mjk5XHJcbiAgICAvLyB3b3JrYXJvdW5kIDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQ0OTY3MjQ1LzU1ODMyODNcclxuICAgIGlmICh0aGlzLm5nQ29udHJvbCkge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMubmdDb250cm9sLmNvbnRyb2wubWFya0FzUHJpc3RpbmUoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZXRMYWJlbEFjdGl2ZSgpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlVmFsaWRhdGUoKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLmlucHV0RWxlbWVudFswXSwgJ3ZhbGlkYXRlJywgdGhpcy52YWxpZGF0ZSk7XHJcblxyXG4gICAgaWYgKHRoaXMudmFsaWRhdGUpIHtcclxuICAgICAgLy8gZm9yY2UgdmFsaWRhdGlvblxyXG4gICAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QodGhpcy5pbnB1dEVsZW1lbnQsICd0cmlnZ2VyJywgWydibHVyJ10pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZW1vdmVWYWxpZGF0aW9uQ2xhc3NlcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0Q2hhcmFjdGVyQ291bnQoKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QodGhpcy5pbnB1dEVsZW1lbnQsICdjaGFyYWN0ZXJDb3VudGVyJyk7XHJcblxyXG4gICAgLy8gZm9yY2UgdmFsaWRhdGlvblxyXG4gICAgLy8gbmVlZCBzZXRUaW1lb3V0IG90aGVyd2lzZSBpdCB3b250IHRyaWdnZXIgdmFsaWRhdGlvbiByaWdodCBhd2F5XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMuaW5wdXRFbGVtZW50LCAndHJpZ2dlcicsIFsnaW5wdXQnXSk7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLmlucHV0RWxlbWVudCwgJ3RyaWdnZXInLCBbJ2JsdXInXSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldExhYmVsQWN0aXZlKCkge1xyXG4gICAgLy8gbmVlZCBzZXRUaW1lb3V0IG90aGVyd2lzZSBpdCB3b250IG1ha2UgbGFiZWwgZmxvYXQgaW4gc29tZSBjaXJjb25zdGFuY2VzXHJcbiAgICAvLyBmb3IgZXhhbXBsZTogZm9yY2luZyB2YWxpZGF0aW9uIGZvciBleGFtcGxlLCByZXNldGluZyBmb3JtIHByb2dyYW1tYXRpY2FseSwgLi4uXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgY29uc3QgaW5wdXRWYWx1ZSA9ICg8SFRNTElucHV0RWxlbWVudD50aGlzLmlucHV0RWxlbWVudFswXSkudmFsdWU7XHJcbiAgICAgIGNvbnN0IGlzQWN0aXZlID0gISF0aGlzLnBsYWNlaG9sZGVyIHx8ICEhaW5wdXRWYWx1ZTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5sYWJlbEVsZW1lbnRbMF0sICdhY3RpdmUnLCBpc0FjdGl2ZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlbW92ZUNoYXJhY3RlckNvdW50KCkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMuaW5wdXRFbGVtZW50LnNpYmxpbmdzKCcuY2hhcmFjdGVyLWNvdW50ZXInKSwgJ3JlbW92ZScpO1xyXG5cclxuICAgIHRoaXMucmVtb3ZlVmFsaWRhdGlvbkNsYXNzZXMoKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZVZhbGlkYXRpb25DbGFzc2VzKCkge1xyXG4gICAgLy8gcmVzZXQgdmFsaWQvaW52YWxpZCBzdGF0ZVxyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5pbnB1dEVsZW1lbnRbMF0sICdpbnZhbGlkJywgZmFsc2UpO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5pbnB1dEVsZW1lbnRbMF0sICd2YWxpZCcsIGZhbHNlKTtcclxuICB9XHJcbn1cclxuIl19