/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ComponentFactoryResolver, ElementRef, HostBinding, HostListener, Input, Renderer, ViewContainerRef, ViewEncapsulation, } from '@angular/core';
import { NgControl } from '@angular/forms';
import { ErrorMessageResource, MzErrorMessageComponent } from './error-message/index';
export class MzValidationComponent {
    /**
     * @param {?} elementRef
     * @param {?} resolver
     * @param {?} viewContainerRef
     * @param {?} ngControl
     * @param {?} renderer
     */
    constructor(elementRef, resolver, viewContainerRef, ngControl, renderer) {
        this.elementRef = elementRef;
        this.resolver = resolver;
        this.viewContainerRef = viewContainerRef;
        this.ngControl = ngControl;
        this.renderer = renderer;
        this.errorMessageComponent = null;
        this._formControlDisabled = false;
        this._required = false;
    }
    /**
     * @return {?}
     */
    get required() { return this._required; }
    /**
     * @param {?} value
     * @return {?}
     */
    set required(value) { this._required = (value != null && `${value}` !== 'false'); }
    /**
     * @return {?}
     */
    get formControlDisabled() { return this._formControlDisabled; }
    /**
     * @param {?} value
     * @return {?}
     */
    set formControlDisabled(value) {
        this._formControlDisabled = value;
        if (this._formControlDisabled) {
            this.ngControl.control.disable();
        }
        else {
            this.ngControl.control.enable();
        }
    }
    /**
     * @return {?}
     */
    get elementToAddValidation() {
        return this.isNativeSelectElement
            ? this.inputSelectDropdown
            : this.nativeElement;
    }
    /**
     * @return {?}
     */
    get inputSelectDropdown() {
        return this.nativeElement.siblings('input.select-dropdown');
    }
    /**
     * @return {?}
     */
    get isNativeSelectElement() {
        return this.nativeElement[0].nodeName === 'SELECT';
    }
    /**
     * @param {?} target
     * @return {?}
     */
    onFocusOut(target) {
        this.ngControl.control.markAsTouched();
        this.setValidationState();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.initElements();
        this.initErrorMessageComponent();
        this.subscribeStatusChanges();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.statusChangesSubscription.unsubscribe();
        this.errorMessageComponent.destroy();
    }
    /**
     * @param {?} element
     * @return {?}
     */
    clearValidationState(element) {
        this.renderer.setElementClass(element[0], 'valid', false);
        this.renderer.setElementClass(element[0], 'invalid', false);
    }
    /**
     * @return {?}
     */
    createRequiredSpanElement() {
        if (this.required && this.labelElement) {
            const /** @type {?} */ spanElement = document.createElement('span');
            spanElement.setAttribute('class', 'placeholder-required');
            spanElement.textContent = ' *';
            this.renderer.invokeElementMethod(this.labelElement, 'appendChild', [spanElement]);
        }
    }
    /**
     * @return {?}
     */
    initElements() {
        this.labelElement = $('label[for="' + this.id + '"]')[0];
        this.nativeElement = $(this.elementRef.nativeElement);
        this.createRequiredSpanElement();
    }
    /**
     * @return {?}
     */
    initErrorMessageComponent() {
        const /** @type {?} */ errorMessageFactory = this.resolver.resolveComponentFactory(MzErrorMessageComponent);
        this.errorMessageComponent = this.viewContainerRef.createComponent(errorMessageFactory);
        this.errorMessageComponent.instance.errorMessageResource = this.errorMessageResource;
        this.errorMessageComponent.instance.control = this.ngControl.control;
        this.errorMessageComponent.changeDetectorRef.detectChanges();
        const /** @type {?} */ errorMessage = this.nativeElement.parent().children('mz-error-message');
        this.renderer.invokeElementMethod(errorMessage, 'insertAfter', [this.labelElement]);
    }
    /**
     * @return {?}
     */
    setValidationState() {
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
    }
    /**
     * @return {?}
     */
    subscribeStatusChanges() {
        this.statusChangesSubscription = this.ngControl.control.statusChanges.subscribe((status) => {
            // TODO Find a better way to handle validation after the form subscription. (see demo form-validation)
            // wait for the valueChanges method from FormGroup to have been triggered before handling the validation state
            // /!\ race condition warning /!\
            setTimeout(() => this.setValidationState());
        });
    }
}
MzValidationComponent.decorators = [
    { type: Component, args: [{
                encapsulation: ViewEncapsulation.None,
                selector: 'mz-validation, [mz-validation], [mzValidation]',
                template: `<ng-content></ng-content>`,
                styles: [`.select-wrapper input.select-dropdown.invalid,textarea.ng-invalid.ng-touched:focus{border-bottom:1px solid #f44336;box-shadow:0 1px 0 0 #f44336}.select-wrapper input.select-dropdown.valid{border-bottom:1px solid #4caf50;box-shadow:0 1px 0 0 #4caf50}input:not([type=checkbox]):focus+label.active span.placeholder-required,textarea:focus+label.active span.placeholder-required{color:#f44336}`],
            },] },
];
/** @nocollapse */
MzValidationComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: ComponentFactoryResolver, },
    { type: ViewContainerRef, },
    { type: NgControl, },
    { type: Renderer, },
];
MzValidationComponent.propDecorators = {
    "id": [{ type: Input },],
    "errorMessageResource": [{ type: Input },],
    "required": [{ type: HostBinding, args: ['attr.required',] }, { type: Input },],
    "formControlDisabled": [{ type: Input },],
    "onFocusOut": [{ type: HostListener, args: ['focusout', ['$event.target'],] },],
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvIiwic291cmNlcyI6WyJzcmMvdmFsaWRhdGlvbi92YWxpZGF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCx3QkFBd0IsRUFFeEIsVUFBVSxFQUNWLFdBQVcsRUFDWCxZQUFZLEVBQ1osS0FBSyxFQUVMLFFBQVEsRUFDUixnQkFBZ0IsRUFDaEIsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUczQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQVF0RixNQUFNOzs7Ozs7OztJQW1ESixZQUNVLFlBQ0EsVUFDQSxrQkFDRCxXQUNBO1FBSkMsZUFBVSxHQUFWLFVBQVU7UUFDVixhQUFRLEdBQVIsUUFBUTtRQUNSLHFCQUFnQixHQUFoQixnQkFBZ0I7UUFDakIsY0FBUyxHQUFULFNBQVM7UUFDVCxhQUFRLEdBQVIsUUFBUTtxQ0F2RCtDLElBQUk7b0NBV3JDLEtBQUs7eUJBQ2hCLEtBQUs7S0E0Q3BCOzs7O1FBeENELFFBQVEsS0FBSyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzs7Ozs7SUFDdkMsSUFBSSxRQUFRLENBQUMsS0FBVSxJQUFJLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxLQUFLLElBQUksSUFBSSxJQUFJLEdBQUcsS0FBSyxFQUFFLEtBQUssT0FBTyxDQUFDLENBQUMsRUFBRTs7OztRQUdwRixtQkFBbUIsS0FBSyxNQUFNLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDOzs7OztJQUM3RCxJQUFJLG1CQUFtQixDQUFDLEtBQWM7UUFDcEMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQztRQUNsQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2xDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNqQztLQUNGOzs7O0lBRUQsSUFBSSxzQkFBc0I7UUFDeEIsTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUI7WUFDL0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUI7WUFDMUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7S0FDeEI7Ozs7SUFFRCxJQUFJLG1CQUFtQjtRQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsQ0FBQztLQUM3RDs7OztJQUVELElBQUkscUJBQXFCO1FBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsS0FBSyxRQUFRLENBQUM7S0FDcEQ7Ozs7O0lBR0QsVUFBVSxDQUFDLE1BQWE7UUFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdkMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7Ozs7O0lBVzVCLGVBQWU7UUFDYixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7S0FDL0I7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzdDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUN0Qzs7Ozs7SUFFRCxvQkFBb0IsQ0FBQyxPQUFlO1FBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztLQUM3RDs7OztJQUVELHlCQUF5QjtRQUN2QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLHVCQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25ELFdBQVcsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLHNCQUFzQixDQUFDLENBQUM7WUFDMUQsV0FBVyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7WUFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLGFBQWEsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7U0FDcEY7S0FDRjs7OztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO0tBQ2xDOzs7O0lBRUQseUJBQXlCO1FBQ3ZCLHVCQUFNLG1CQUFtQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUMzRixJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3hGLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDO1FBQ3JGLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUU3RCx1QkFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUM5RSxJQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLFlBQVksRUFBRSxhQUFhLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztLQUNyRjs7OztJQUVELGtCQUFrQjs7UUFFaEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDeEUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1lBQ3ZELE1BQU0sQ0FBQztTQUNSOztRQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDbkMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDakMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDN0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQzthQUNqRjtZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQzlFLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDaEY7U0FDRjtRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1NBQ3hEO0tBQ0Y7Ozs7SUFFRCxzQkFBc0I7UUFDcEIsSUFBSSxDQUFDLHlCQUF5QixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFjLEVBQUUsRUFBRTs7OztZQUlqRyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQztTQUM3QyxDQUFDLENBQUM7S0FDSjs7O1lBdElGLFNBQVMsU0FBQztnQkFDVCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsUUFBUSxFQUFFLGdEQUFnRDtnQkFDMUQsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsTUFBTSxFQUFFLENBQUMsdVlBQXVZLENBQUM7YUFDbFo7Ozs7WUFuQkMsVUFBVTtZQUZWLHdCQUF3QjtZQVF4QixnQkFBZ0I7WUFHVCxTQUFTO1lBSmhCLFFBQVE7OzttQkFzQlAsS0FBSztxQ0FHTCxLQUFLO3lCQUtMLFdBQVcsU0FBQyxlQUFlLGNBQzNCLEtBQUs7b0NBSUwsS0FBSzsyQkF5QkwsWUFBWSxTQUFDLFVBQVUsRUFBRSxDQUFDLGVBQWUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDb21wb25lbnQsXHJcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gIENvbXBvbmVudFJlZixcclxuICBFbGVtZW50UmVmLFxyXG4gIEhvc3RCaW5kaW5nLFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgUmVuZGVyZXIsXHJcbiAgVmlld0NvbnRhaW5lclJlZixcclxuICBWaWV3RW5jYXBzdWxhdGlvbixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IEVycm9yTWVzc2FnZVJlc291cmNlLCBNekVycm9yTWVzc2FnZUNvbXBvbmVudCB9IGZyb20gJy4vZXJyb3ItbWVzc2FnZS9pbmRleCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHNlbGVjdG9yOiAnbXotdmFsaWRhdGlvbiwgW216LXZhbGlkYXRpb25dLCBbbXpWYWxpZGF0aW9uXScsXHJcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcclxuICBzdHlsZXM6IFtgLnNlbGVjdC13cmFwcGVyIGlucHV0LnNlbGVjdC1kcm9wZG93bi5pbnZhbGlkLHRleHRhcmVhLm5nLWludmFsaWQubmctdG91Y2hlZDpmb2N1c3tib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZjQ0MzM2O2JveC1zaGFkb3c6MCAxcHggMCAwICNmNDQzMzZ9LnNlbGVjdC13cmFwcGVyIGlucHV0LnNlbGVjdC1kcm9wZG93bi52YWxpZHtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjNGNhZjUwO2JveC1zaGFkb3c6MCAxcHggMCAwICM0Y2FmNTB9aW5wdXQ6bm90KFt0eXBlPWNoZWNrYm94XSk6Zm9jdXMrbGFiZWwuYWN0aXZlIHNwYW4ucGxhY2Vob2xkZXItcmVxdWlyZWQsdGV4dGFyZWE6Zm9jdXMrbGFiZWwuYWN0aXZlIHNwYW4ucGxhY2Vob2xkZXItcmVxdWlyZWR7Y29sb3I6I2Y0NDMzNn1gXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16VmFsaWRhdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcbiAgZXJyb3JNZXNzYWdlQ29tcG9uZW50PzogQ29tcG9uZW50UmVmPE16RXJyb3JNZXNzYWdlQ29tcG9uZW50PiA9IG51bGw7XHJcbiAgbGFiZWxFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICBuYXRpdmVFbGVtZW50OiBKUXVlcnk7XHJcbiAgc3RhdHVzQ2hhbmdlc1N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICAvLyBuYXRpdmUgcHJvcGVydGllc1xyXG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XHJcblxyXG4gIC8vIGNvbXBvbmVudCBwcm9wZXJ0aWVzXHJcbiAgQElucHV0KCkgZXJyb3JNZXNzYWdlUmVzb3VyY2U6IEVycm9yTWVzc2FnZVJlc291cmNlO1xyXG5cclxuICBwcml2YXRlIF9mb3JtQ29udHJvbERpc2FibGVkID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfcmVxdWlyZWQgPSBmYWxzZTtcclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnJlcXVpcmVkJylcclxuICBASW5wdXQoKVxyXG4gIGdldCByZXF1aXJlZCgpIHsgcmV0dXJuIHRoaXMuX3JlcXVpcmVkOyB9XHJcbiAgc2V0IHJlcXVpcmVkKHZhbHVlOiBhbnkpIHsgdGhpcy5fcmVxdWlyZWQgPSAodmFsdWUgIT0gbnVsbCAmJiBgJHt2YWx1ZX1gICE9PSAnZmFsc2UnKTsgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIGdldCBmb3JtQ29udHJvbERpc2FibGVkKCkgeyByZXR1cm4gdGhpcy5fZm9ybUNvbnRyb2xEaXNhYmxlZDsgfVxyXG4gIHNldCBmb3JtQ29udHJvbERpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9mb3JtQ29udHJvbERpc2FibGVkID0gdmFsdWU7XHJcbiAgICBpZiAodGhpcy5fZm9ybUNvbnRyb2xEaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLm5nQ29udHJvbC5jb250cm9sLmRpc2FibGUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubmdDb250cm9sLmNvbnRyb2wuZW5hYmxlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgZWxlbWVudFRvQWRkVmFsaWRhdGlvbigpOiBKUXVlcnkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNOYXRpdmVTZWxlY3RFbGVtZW50XHJcbiAgICAgID8gdGhpcy5pbnB1dFNlbGVjdERyb3Bkb3duXHJcbiAgICAgIDogdGhpcy5uYXRpdmVFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlucHV0U2VsZWN0RHJvcGRvd24oKTogSlF1ZXJ5IHtcclxuICAgIHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQuc2libGluZ3MoJ2lucHV0LnNlbGVjdC1kcm9wZG93bicpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzTmF0aXZlU2VsZWN0RWxlbWVudCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnRbMF0ubm9kZU5hbWUgPT09ICdTRUxFQ1QnO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignZm9jdXNvdXQnLCBbJyRldmVudC50YXJnZXQnXSlcclxuICBvbkZvY3VzT3V0KHRhcmdldDogRXZlbnQpIHtcclxuICAgIHRoaXMubmdDb250cm9sLmNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xyXG4gICAgdGhpcy5zZXRWYWxpZGF0aW9uU3RhdGUoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgcHVibGljIG5nQ29udHJvbDogTmdDb250cm9sLFxyXG4gICAgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcixcclxuICApIHsgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLmluaXRFbGVtZW50cygpO1xyXG4gICAgdGhpcy5pbml0RXJyb3JNZXNzYWdlQ29tcG9uZW50KCk7XHJcbiAgICB0aGlzLnN1YnNjcmliZVN0YXR1c0NoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5zdGF0dXNDaGFuZ2VzU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLmVycm9yTWVzc2FnZUNvbXBvbmVudC5kZXN0cm95KCk7XHJcbiAgfVxyXG5cclxuICBjbGVhclZhbGlkYXRpb25TdGF0ZShlbGVtZW50OiBKUXVlcnkpIHtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKGVsZW1lbnRbMF0sICd2YWxpZCcsIGZhbHNlKTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKGVsZW1lbnRbMF0sICdpbnZhbGlkJywgZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlUmVxdWlyZWRTcGFuRWxlbWVudCgpIHtcclxuICAgIGlmICh0aGlzLnJlcXVpcmVkICYmIHRoaXMubGFiZWxFbGVtZW50KSB7XHJcbiAgICAgIGNvbnN0IHNwYW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICBzcGFuRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3BsYWNlaG9sZGVyLXJlcXVpcmVkJyk7XHJcbiAgICAgIHNwYW5FbGVtZW50LnRleHRDb250ZW50ID0gJyAqJztcclxuICAgICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMubGFiZWxFbGVtZW50LCAnYXBwZW5kQ2hpbGQnLCBbc3BhbkVsZW1lbnRdKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGluaXRFbGVtZW50cygpIHtcclxuICAgIHRoaXMubGFiZWxFbGVtZW50ID0gJCgnbGFiZWxbZm9yPVwiJyArIHRoaXMuaWQgKyAnXCJdJylbMF07XHJcbiAgICB0aGlzLm5hdGl2ZUVsZW1lbnQgPSAkKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcclxuICAgIHRoaXMuY3JlYXRlUmVxdWlyZWRTcGFuRWxlbWVudCgpO1xyXG4gIH1cclxuXHJcbiAgaW5pdEVycm9yTWVzc2FnZUNvbXBvbmVudCgpIHtcclxuICAgIGNvbnN0IGVycm9yTWVzc2FnZUZhY3RvcnkgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KE16RXJyb3JNZXNzYWdlQ29tcG9uZW50KTtcclxuICAgIHRoaXMuZXJyb3JNZXNzYWdlQ29tcG9uZW50ID0gdGhpcy52aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUNvbXBvbmVudChlcnJvck1lc3NhZ2VGYWN0b3J5KTtcclxuICAgIHRoaXMuZXJyb3JNZXNzYWdlQ29tcG9uZW50Lmluc3RhbmNlLmVycm9yTWVzc2FnZVJlc291cmNlID0gdGhpcy5lcnJvck1lc3NhZ2VSZXNvdXJjZTtcclxuICAgIHRoaXMuZXJyb3JNZXNzYWdlQ29tcG9uZW50Lmluc3RhbmNlLmNvbnRyb2wgPSB0aGlzLm5nQ29udHJvbC5jb250cm9sO1xyXG4gICAgdGhpcy5lcnJvck1lc3NhZ2VDb21wb25lbnQuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG5cclxuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IHRoaXMubmF0aXZlRWxlbWVudC5wYXJlbnQoKS5jaGlsZHJlbignbXotZXJyb3ItbWVzc2FnZScpO1xyXG4gICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKGVycm9yTWVzc2FnZSwgJ2luc2VydEFmdGVyJywgW3RoaXMubGFiZWxFbGVtZW50XSk7XHJcbiAgfVxyXG5cclxuICBzZXRWYWxpZGF0aW9uU3RhdGUoKSB7XHJcbiAgICAvLyB0byBoYW5kbGUgcmVzZXQgZm9ybVxyXG4gICAgaWYgKHRoaXMubmdDb250cm9sLmNvbnRyb2wudW50b3VjaGVkICYmIHRoaXMubmdDb250cm9sLmNvbnRyb2wucHJpc3RpbmUpIHtcclxuICAgICAgdGhpcy5jbGVhclZhbGlkYXRpb25TdGF0ZSh0aGlzLmVsZW1lbnRUb0FkZFZhbGlkYXRpb24pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvLyB0byBoYW5kbGUgZmllbGQgdmFsaWRpdHlcclxuICAgIGlmICh0aGlzLm5nQ29udHJvbC5jb250cm9sLmVuYWJsZWQpIHtcclxuICAgICAgaWYgKHRoaXMubmdDb250cm9sLmNvbnRyb2wudmFsaWQpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLmVsZW1lbnRUb0FkZFZhbGlkYXRpb25bMF0sICd2YWxpZCcsIHRydWUpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuZWxlbWVudFRvQWRkVmFsaWRhdGlvblswXSwgJ2ludmFsaWQnLCBmYWxzZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5lbGVtZW50VG9BZGRWYWxpZGF0aW9uWzBdLCAndmFsaWQnLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5lbGVtZW50VG9BZGRWYWxpZGF0aW9uWzBdLCAnaW52YWxpZCcsIHRydWUpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNsZWFyVmFsaWRhdGlvblN0YXRlKHRoaXMuZWxlbWVudFRvQWRkVmFsaWRhdGlvbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdWJzY3JpYmVTdGF0dXNDaGFuZ2VzKCkge1xyXG4gICAgdGhpcy5zdGF0dXNDaGFuZ2VzU3Vic2NyaXB0aW9uID0gdGhpcy5uZ0NvbnRyb2wuY29udHJvbC5zdGF0dXNDaGFuZ2VzLnN1YnNjcmliZSgoc3RhdHVzOiBzdHJpbmcpID0+IHtcclxuICAgICAgLy8gVE9ETyBGaW5kIGEgYmV0dGVyIHdheSB0byBoYW5kbGUgdmFsaWRhdGlvbiBhZnRlciB0aGUgZm9ybSBzdWJzY3JpcHRpb24uIChzZWUgZGVtbyBmb3JtLXZhbGlkYXRpb24pXHJcbiAgICAgIC8vIHdhaXQgZm9yIHRoZSB2YWx1ZUNoYW5nZXMgbWV0aG9kIGZyb20gRm9ybUdyb3VwIHRvIGhhdmUgYmVlbiB0cmlnZ2VyZWQgYmVmb3JlIGhhbmRsaW5nIHRoZSB2YWxpZGF0aW9uIHN0YXRlXHJcbiAgICAgIC8vIC8hXFwgcmFjZSBjb25kaXRpb24gd2FybmluZyAvIVxcXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zZXRWYWxpZGF0aW9uU3RhdGUoKSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19