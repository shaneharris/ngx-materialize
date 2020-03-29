/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectorRef, Directive, ElementRef, HostBinding, Input, NgZone, Optional, Renderer } from '@angular/core';
import { NgControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { HandlePropChanges } from '../shared/index';
export class MzTimepickerDirective extends HandlePropChanges {
    /**
     * @param {?} ngControl
     * @param {?} changeDetectorRef
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} zone
     */
    constructor(ngControl, changeDetectorRef, elementRef, renderer, zone) {
        super();
        this.ngControl = ngControl;
        this.changeDetectorRef = changeDetectorRef;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.zone = zone;
        // materialize uses ClockPicker to create the timepicker
        // complete list of options is available at the following address
        // https://github.com/weareoutman/clockpicker#options
        this.options = {};
        this.stopChangePropagation = false;
    }
    /**
     * @return {?}
     */
    get clockpicker() {
        return $('.clockpicker');
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initHandlers();
        this.initElements();
        this.initTimepicker();
        this.handleProperties();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // remove event handlers
        this.inputElement.off();
        // remove clockpicker added to body by default
        this.clockpicker.remove();
    }
    /**
     * @return {?}
     */
    initHandlers() {
        this.handlers = {
            label: () => this.handleLabel(),
            placeholder: () => this.handlePlaceholder(),
        };
    }
    /**
     * @return {?}
     */
    initElements() {
        this.inputContainerElement = /** @type {?} */ ($(this.elementRef.nativeElement).parent('.input-field'));
        this.inputElement = /** @type {?} */ ($(this.elementRef.nativeElement));
        this.labelElement = /** @type {?} */ (this.createLabelElement());
    }
    /**
     * @return {?}
     */
    initTimepicker() {
        // append clockpicker to body by default
        if (!this.options.container) {
            this.options.container = 'body';
        }
        // extend afterHide callback to set label active
        const /** @type {?} */ afterHide = this.options && this.options.afterHide || (() => { });
        this.options = Object.assign({}, this.options, {
            afterHide: () => {
                afterHide();
                this.setLabelActive();
            },
        });
        this.renderer.invokeElementMethod(this.inputElement, 'pickatime', [this.options]);
        if (this.ngControl) {
            // set ngControl value according to selected time in timepicker
            this.inputElement.on('change', (event) => {
                this.ngControl.control.setValue(event.target.value);
                // mark for change detection
                // fix form validation with ChangeDetectionStrategy.OnPush
                this.changeDetectorRef.markForCheck();
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
            console.error('Input with mz-timepicker directive must be placed inside an [mz-timepicker-container] tag', this.inputElement);
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
    handlePlaceholder() {
        const /** @type {?} */ placeholder = !!this.placeholder ? this.placeholder : null;
        this.renderer.setElementAttribute(this.inputElement[0], 'placeholder', placeholder);
        // fix issue in IE where having a placeholder on input make control dirty and trigger validation
        // on page load... note that it still trigger validation on focus and would need a better fix
        // issue : https://github.com/angular/angular/issues/15299
        // workaround : https://stackoverflow.com/a/44967245/5583283
        if (this.ngControl) {
            this.zone.runOutsideAngular(() => {
                setTimeout(() => this.ngControl.control.markAsPristine());
            });
        }
        this.setLabelActive();
    }
    /**
     * @return {?}
     */
    setLabelActive() {
        // need wait for zone to be stable otherwise it wont make label
        // float in some circonstances (clearing value programmatically for example)
        this.zone.onStable
            .pipe(first())
            .subscribe(() => {
            const /** @type {?} */ inputValue = this.inputElement[0].value;
            const /** @type {?} */ isActive = !!this.placeholder || !!inputValue;
            this.renderer.setElementClass(this.labelElement[0], 'active', isActive);
        });
    }
}
MzTimepickerDirective.decorators = [
    { type: Directive, args: [{
                selector: 'input[mzTimepicker], input[mz-timepicker]',
            },] },
];
/** @nocollapse */
MzTimepickerDirective.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional },] },
    { type: ChangeDetectorRef, },
    { type: ElementRef, },
    { type: Renderer, },
    { type: NgZone, },
];
MzTimepickerDirective.propDecorators = {
    "true": [{ type: HostBinding, args: ['class.timepicker',] },],
    "id": [{ type: Input },],
    "placeholder": [{ type: Input },],
    "label": [{ type: Input },],
    "options": [{ type: Input },],
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvIiwic291cmNlcyI6WyJzcmMvdGltZXBpY2tlci90aW1lcGlja2VyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQXFCLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUksT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV2QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUtwRCxNQUFNLDRCQUE2QixTQUFRLGlCQUFpQjs7Ozs7Ozs7SUF3QjFELFlBQ3NCLFdBQ1osbUJBQ0EsWUFDQSxVQUNBO1FBRVIsS0FBSyxFQUFFLENBQUM7UUFOWSxjQUFTLEdBQVQsU0FBUztRQUNyQixzQkFBaUIsR0FBakIsaUJBQWlCO1FBQ2pCLGVBQVUsR0FBVixVQUFVO1FBQ1YsYUFBUSxHQUFSLFFBQVE7UUFDUixTQUFJLEdBQUosSUFBSTs7Ozt1QkFoQlUsRUFBRTtxQ0FLRixLQUFLO0tBYzVCOzs7O0lBWkQsSUFBSSxXQUFXO1FBQ2IsTUFBTSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQztLQUMxQjs7OztJQVlELFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztLQUN6Qjs7OztJQUVELFdBQVc7O1FBRVQsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsQ0FBQzs7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MkM7YUFDdEQ7Ozs7WUFQUSxTQUFTLHVCQWlDYixRQUFRO1lBbENKLGlCQUFpQjtZQUFhLFVBQVU7WUFBMkQsUUFBUTtZQUE3QyxNQUFNOzs7cUJBVTFFLFdBQVcsU0FBQyxrQkFBa0I7bUJBRzlCLEtBQUs7NEJBQ0wsS0FBSztzQkFHTCxLQUFLO3dCQUtMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0QmluZGluZywgSW5wdXQsIE5nWm9uZSwgT25EZXN0cm95LCBPbkluaXQsIE9wdGlvbmFsLCBSZW5kZXJlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IGZpcnN0IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgSGFuZGxlUHJvcENoYW5nZXMgfSBmcm9tICcuLi9zaGFyZWQvaW5kZXgnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdpbnB1dFttelRpbWVwaWNrZXJdLCBpbnB1dFttei10aW1lcGlja2VyXScsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNelRpbWVwaWNrZXJEaXJlY3RpdmUgZXh0ZW5kcyBIYW5kbGVQcm9wQ2hhbmdlcyBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnRpbWVwaWNrZXInKSB0cnVlO1xyXG5cclxuICAvLyBuYXRpdmUgcHJvcGVydGllc1xyXG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcclxuXHJcbiAgLy8gZGlyZWN0aXZlIHByb3BlcnRpZXNcclxuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xyXG5cclxuICAvLyBtYXRlcmlhbGl6ZSB1c2VzIENsb2NrUGlja2VyIHRvIGNyZWF0ZSB0aGUgdGltZXBpY2tlclxyXG4gIC8vIGNvbXBsZXRlIGxpc3Qgb2Ygb3B0aW9ucyBpcyBhdmFpbGFibGUgYXQgdGhlIGZvbGxvd2luZyBhZGRyZXNzXHJcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3dlYXJlb3V0bWFuL2Nsb2NrcGlja2VyI29wdGlvbnNcclxuICBASW5wdXQoKSBvcHRpb25zOiBhbnkgPSB7fTtcclxuXHJcbiAgaW5wdXRFbGVtZW50OiBKUXVlcnk8SFRNTElucHV0RWxlbWVudD47XHJcbiAgaW5wdXRDb250YWluZXJFbGVtZW50OiBKUXVlcnk8SFRNTEVsZW1lbnQ+O1xyXG4gIGxhYmVsRWxlbWVudDogSlF1ZXJ5PEhUTUxMYWJlbEVsZW1lbnQ+O1xyXG4gIHN0b3BDaGFuZ2VQcm9wYWdhdGlvbiA9IGZhbHNlO1xyXG5cclxuICBnZXQgY2xvY2twaWNrZXIoKTogSlF1ZXJ5PEhUTUxFbGVtZW50PiB7XHJcbiAgICByZXR1cm4gJCgnLmNsb2NrcGlja2VyJyk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgbmdDb250cm9sOiBOZ0NvbnRyb2wsXHJcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyLFxyXG4gICAgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsXHJcbiAgKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluaXRIYW5kbGVycygpO1xyXG4gICAgdGhpcy5pbml0RWxlbWVudHMoKTtcclxuICAgIHRoaXMuaW5pdFRpbWVwaWNrZXIoKTtcclxuICAgIHRoaXMuaGFuZGxlUHJvcGVydGllcygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAvLyByZW1vdmUgZXZlbnQgaGFuZGxlcnNcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50Lm9mZigpO1xyXG4gICAgLy8gcmVtb3ZlIGNsb2NrcGlja2VyIGFkZGVkIHRvIGJvZHkgYnkgZGVmYXVsdFxyXG4gICAgdGhpcy5jbG9ja3BpY2tlci5yZW1vdmUoKTtcclxuICB9XHJcblxyXG4gIGluaXRIYW5kbGVycygpIHtcclxuICAgIHRoaXMuaGFuZGxlcnMgPSB7XHJcbiAgICAgIGxhYmVsOiAoKSA9PiB0aGlzLmhhbmRsZUxhYmVsKCksXHJcbiAgICAgIHBsYWNlaG9sZGVyOiAoKSA9PiB0aGlzLmhhbmRsZVBsYWNlaG9sZGVyKCksXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgaW5pdEVsZW1lbnRzKCkge1xyXG4gICAgdGhpcy5pbnB1dENvbnRhaW5lckVsZW1lbnQgPSAkKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5wYXJlbnQoJy5pbnB1dC1maWVsZCcpIGFzIEpRdWVyeTxIVE1MRWxlbWVudD47XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudCA9ICQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpIGFzIEpRdWVyeTxIVE1MSW5wdXRFbGVtZW50PjtcclxuICAgIHRoaXMubGFiZWxFbGVtZW50ID0gdGhpcy5jcmVhdGVMYWJlbEVsZW1lbnQoKSBhcyBKUXVlcnk8SFRNTExhYmVsRWxlbWVudD47XHJcbiAgfVxyXG5cclxuICBpbml0VGltZXBpY2tlcigpIHtcclxuICAgIC8vIGFwcGVuZCBjbG9ja3BpY2tlciB0byBib2R5IGJ5IGRlZmF1bHRcclxuICAgIGlmICghdGhpcy5vcHRpb25zLmNvbnRhaW5lcikge1xyXG4gICAgICB0aGlzLm9wdGlvbnMuY29udGFpbmVyID0gJ2JvZHknO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGV4dGVuZCBhZnRlckhpZGUgY2FsbGJhY2sgdG8gc2V0IGxhYmVsIGFjdGl2ZVxyXG4gICAgY29uc3QgYWZ0ZXJIaWRlID0gdGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5hZnRlckhpZGUgfHwgKCgpID0+IHt9KTtcclxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMub3B0aW9ucywge1xyXG4gICAgICBhZnRlckhpZGU6ICgpID0+IHtcclxuICAgICAgICBhZnRlckhpZGUoKTtcclxuICAgICAgICB0aGlzLnNldExhYmVsQWN0aXZlKCk7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QodGhpcy5pbnB1dEVsZW1lbnQsICdwaWNrYXRpbWUnLCBbdGhpcy5vcHRpb25zXSk7XHJcblxyXG4gICAgaWYgKHRoaXMubmdDb250cm9sKSB7XHJcbiAgICAgIC8vIHNldCBuZ0NvbnRyb2wgdmFsdWUgYWNjb3JkaW5nIHRvIHNlbGVjdGVkIHRpbWUgaW4gdGltZXBpY2tlclxyXG4gICAgICB0aGlzLmlucHV0RWxlbWVudC5vbignY2hhbmdlJywgKGV2ZW50OiBKUXVlcnkuRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgICAgICB0aGlzLm5nQ29udHJvbC5jb250cm9sLnNldFZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcblxyXG4gICAgICAgIC8vIG1hcmsgZm9yIGNoYW5nZSBkZXRlY3Rpb25cclxuICAgICAgICAvLyBmaXggZm9ybSB2YWxpZGF0aW9uIHdpdGggQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbiAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjcmVhdGVMYWJlbEVsZW1lbnQoKSB7XHJcbiAgICBjb25zdCBsYWJlbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgbGFiZWxFbGVtZW50LnNldEF0dHJpYnV0ZSgnZm9yJywgdGhpcy5pZCk7XHJcblxyXG4gICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMuaW5wdXRFbGVtZW50LCAnYWZ0ZXInLCBbbGFiZWxFbGVtZW50XSk7XHJcblxyXG4gICAgcmV0dXJuICQobGFiZWxFbGVtZW50KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVByb3BlcnRpZXMoKSB7XHJcbiAgICBpZiAodGhpcy5pbnB1dENvbnRhaW5lckVsZW1lbnQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0lucHV0IHdpdGggbXotdGltZXBpY2tlciBkaXJlY3RpdmUgbXVzdCBiZSBwbGFjZWQgaW5zaWRlIGFuIFttei10aW1lcGlja2VyLWNvbnRhaW5lcl0gdGFnJywgdGhpcy5pbnB1dEVsZW1lbnQpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgc3VwZXIuZXhlY3V0ZVByb3BIYW5kbGVycygpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlTGFiZWwoKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QodGhpcy5sYWJlbEVsZW1lbnQsICd0ZXh0JywgW3RoaXMubGFiZWxdKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVBsYWNlaG9sZGVyKCkge1xyXG4gICAgY29uc3QgcGxhY2Vob2xkZXIgPSAhIXRoaXMucGxhY2Vob2xkZXIgPyB0aGlzLnBsYWNlaG9sZGVyIDogbnVsbDtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudEF0dHJpYnV0ZSh0aGlzLmlucHV0RWxlbWVudFswXSwgJ3BsYWNlaG9sZGVyJywgcGxhY2Vob2xkZXIpO1xyXG5cclxuICAgIC8vIGZpeCBpc3N1ZSBpbiBJRSB3aGVyZSBoYXZpbmcgYSBwbGFjZWhvbGRlciBvbiBpbnB1dCBtYWtlIGNvbnRyb2wgZGlydHkgYW5kIHRyaWdnZXIgdmFsaWRhdGlvblxyXG4gICAgLy8gb24gcGFnZSBsb2FkLi4uIG5vdGUgdGhhdCBpdCBzdGlsbCB0cmlnZ2VyIHZhbGlkYXRpb24gb24gZm9jdXMgYW5kIHdvdWxkIG5lZWQgYSBiZXR0ZXIgZml4XHJcbiAgICAvLyBpc3N1ZSA6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzE1Mjk5XHJcbiAgICAvLyB3b3JrYXJvdW5kIDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQ0OTY3MjQ1LzU1ODMyODNcclxuICAgIGlmICh0aGlzLm5nQ29udHJvbCkge1xyXG4gICAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5uZ0NvbnRyb2wuY29udHJvbC5tYXJrQXNQcmlzdGluZSgpKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZXRMYWJlbEFjdGl2ZSgpO1xyXG4gIH1cclxuXHJcbiAgc2V0TGFiZWxBY3RpdmUoKSB7XHJcbiAgICAvLyBuZWVkIHdhaXQgZm9yIHpvbmUgdG8gYmUgc3RhYmxlIG90aGVyd2lzZSBpdCB3b250IG1ha2UgbGFiZWxcclxuICAgIC8vIGZsb2F0IGluIHNvbWUgY2lyY29uc3RhbmNlcyAoY2xlYXJpbmcgdmFsdWUgcHJvZ3JhbW1hdGljYWxseSBmb3IgZXhhbXBsZSlcclxuICAgIHRoaXMuem9uZS5vblN0YWJsZVxyXG4gICAgICAucGlwZShmaXJzdCgpKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICBjb25zdCBpbnB1dFZhbHVlID0gdGhpcy5pbnB1dEVsZW1lbnRbMF0udmFsdWU7XHJcbiAgICAgICAgY29uc3QgaXNBY3RpdmUgPSAhIXRoaXMucGxhY2Vob2xkZXIgfHwgISFpbnB1dFZhbHVlO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMubGFiZWxFbGVtZW50WzBdLCAnYWN0aXZlJywgaXNBY3RpdmUpO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn1cclxuIl19