/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, Input, Optional, Renderer } from '@angular/core';
import { NgControl } from '@angular/forms';
import { HandlePropChanges } from '../shared/index';
export class MzTextareaDirective extends HandlePropChanges {
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
        this.initTextareaSubscription();
        this.handleProperties();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.textareaValueSubscription) {
            this.textareaValueSubscription.unsubscribe();
        }
    }
    /**
     * @return {?}
     */
    initHandlers() {
        this.handlers = {
            label: () => this.handleLabel(),
            length: () => this.handleLength(),
            placeholder: () => this.handlePlaceholder(),
        };
    }
    /**
     * @return {?}
     */
    initElements() {
        this.textareaElement = $(this.elementRef.nativeElement);
        this.textareaContainerElement = $(this.elementRef.nativeElement).parent('.input-field');
        this.labelElement = this.createLabelElement();
        this.initTextarea();
    }
    /**
     * @return {?}
     */
    initTextarea() {
        this.renderer.setElementClass(this.textareaElement[0], 'materialize-textarea', true);
    }
    /**
     * @return {?}
     */
    initTextareaSubscription() {
        if (this.ngControl) {
            this.textareaValueSubscription = this.ngControl.valueChanges.subscribe(() => this.setLabelActive());
        }
    }
    /**
     * @return {?}
     */
    createLabelElement() {
        const /** @type {?} */ labelElement = document.createElement('label');
        labelElement.setAttribute('for', this.id);
        this.renderer.invokeElementMethod(this.textareaElement, 'after', [labelElement]);
        return $(labelElement);
    }
    /**
     * @return {?}
     */
    handleProperties() {
        if (this.textareaContainerElement.length === 0) {
            console.error('Textarea must be placed inside a [mz-textarea-container] tag', this.textareaElement);
            return;
        }
        super.executePropHandlers();
    }
    /**
     * @return {?}
     */
    handleLabel() {
        if (this.placeholder || this.textareaElement.val()) {
            this.renderer.setElementClass(this.labelElement[0], 'active', true);
        }
        this.renderer.invokeElementMethod(this.labelElement, 'text', [this.label]);
    }
    /**
     * @return {?}
     */
    handleLength() {
        const /** @type {?} */ length = this.length ? this.length.toString() : null;
        this.renderer.setElementAttribute(this.textareaElement[0], 'data-length', length);
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
        this.renderer.setElementAttribute(this.textareaElement[0], 'placeholder', placeholder);
        this.setLabelActive();
    }
    /**
     * @return {?}
     */
    setCharacterCount() {
        this.renderer.invokeElementMethod(this.textareaElement, 'characterCounter');
        // force validation
        // need setTimeout otherwise it wont trigger validation right away
        setTimeout(() => {
            this.renderer.invokeElementMethod(this.textareaElement, 'trigger', ['input']);
            this.renderer.invokeElementMethod(this.textareaElement, 'trigger', ['blur']);
        });
    }
    /**
     * @return {?}
     */
    setLabelActive() {
        // need setTimeout otherwise it wont make label float in some circonstances
        // for example: forcing validation for example, reseting form programmaticaly, ...
        setTimeout(() => {
            const /** @type {?} */ textareaValue = (/** @type {?} */ (this.textareaElement[0])).value;
            const /** @type {?} */ isActive = !!this.placeholder || !!textareaValue;
            this.renderer.setElementClass(this.labelElement[0], 'active', isActive);
        });
    }
    /**
     * @return {?}
     */
    removeCharacterCount() {
        this.renderer.invokeElementMethod(this.textareaElement.siblings('.character-counter'), 'remove');
        this.removeValidationClasses();
    }
    /**
     * @return {?}
     */
    removeValidationClasses() {
        // reset valid/invalid state
        this.renderer.setElementClass(this.textareaElement[0], 'invalid', false);
        this.renderer.setElementClass(this.textareaElement[0], 'valid', false);
    }
}
MzTextareaDirective.decorators = [
    { type: Directive, args: [{
                selector: 'textarea[mzTextarea], textarea[mz-textarea]',
            },] },
];
/** @nocollapse */
MzTextareaDirective.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional },] },
    { type: ElementRef, },
    { type: Renderer, },
];
MzTextareaDirective.propDecorators = {
    "id": [{ type: Input },],
    "placeholder": [{ type: Input },],
    "label": [{ type: Input },],
    "length": [{ type: Input },],
};
function MzTextareaDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MzTextareaDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MzTextareaDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    MzTextareaDirective.propDecorators;
    /** @type {?} */
    MzTextareaDirective.prototype.id;
    /** @type {?} */
    MzTextareaDirective.prototype.placeholder;
    /** @type {?} */
    MzTextareaDirective.prototype.label;
    /** @type {?} */
    MzTextareaDirective.prototype.length;
    /** @type {?} */
    MzTextareaDirective.prototype.textareaElement;
    /** @type {?} */
    MzTextareaDirective.prototype.textareaContainerElement;
    /** @type {?} */
    MzTextareaDirective.prototype.textareaValueSubscription;
    /** @type {?} */
    MzTextareaDirective.prototype.labelElement;
    /** @type {?} */
    MzTextareaDirective.prototype.ngControl;
    /** @type {?} */
    MzTextareaDirective.prototype.elementRef;
    /** @type {?} */
    MzTextareaDirective.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWEuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hdGVyaWFsaXplLyIsInNvdXJjZXMiOlsic3JjL3RleHRhcmVhL3RleHRhcmVhLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFxQixRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUczQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUtwRCxNQUFNLDBCQUEyQixTQUFRLGlCQUFpQjs7Ozs7O0lBY3hELFlBQ3NCLFdBQ1osWUFDQTtRQUVSLEtBQUssRUFBRSxDQUFDO1FBSlksY0FBUyxHQUFULFNBQVM7UUFDckIsZUFBVSxHQUFWLFVBQVU7UUFDVixhQUFRLEdBQVIsUUFBUTtLQUdqQjs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0tBQ3pCOzs7O0lBRUQsV0FBVztRQUNULEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzlDO0tBQ0Y7Ozs7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLFFBQVEsR0FBRztZQUNkLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQy9CLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ2pDLFdBQVcsRUFBRSxHQUFHLEVBQUUs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QUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsb0JBQW9CLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUVqRyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztLQUNoQzs7OztJQUVELHVCQUF1Qjs7UUFFckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDeEU7OztZQTNJRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDZDQUE2QzthQUN4RDs7OztZQVBRLFNBQVMsdUJBdUJiLFFBQVE7WUF4Qk8sVUFBVTtZQUFzQyxRQUFROzs7bUJBV3pFLEtBQUs7NEJBQ0wsS0FBSztzQkFHTCxLQUFLO3VCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3B0aW9uYWwsIFJlbmRlcmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBIYW5kbGVQcm9wQ2hhbmdlcyB9IGZyb20gJy4uL3NoYXJlZC9pbmRleCc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ3RleHRhcmVhW216VGV4dGFyZWFdLCB0ZXh0YXJlYVttei10ZXh0YXJlYV0nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpUZXh0YXJlYURpcmVjdGl2ZSBleHRlbmRzIEhhbmRsZVByb3BDaGFuZ2VzIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIC8vIG5hdGl2ZSBwcm9wZXJ0aWVzXHJcbiAgQElucHV0KCkgaWQ6IHN0cmluZztcclxuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xyXG5cclxuICAvLyBkaXJlY3RpdmUgcHJvcGVydGllc1xyXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbGVuZ3RoOiBudW1iZXI7XHJcblxyXG4gIHRleHRhcmVhRWxlbWVudDogSlF1ZXJ5O1xyXG4gIHRleHRhcmVhQ29udGFpbmVyRWxlbWVudDogSlF1ZXJ5O1xyXG4gIHRleHRhcmVhVmFsdWVTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuICBsYWJlbEVsZW1lbnQ6IEpRdWVyeTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIG5nQ29udHJvbDogTmdDb250cm9sLFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIsXHJcbiAgKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluaXRIYW5kbGVycygpO1xyXG4gICAgdGhpcy5pbml0RWxlbWVudHMoKTtcclxuICAgIHRoaXMuaW5pdFRleHRhcmVhU3Vic2NyaXB0aW9uKCk7XHJcbiAgICB0aGlzLmhhbmRsZVByb3BlcnRpZXMoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgaWYgKHRoaXMudGV4dGFyZWFWYWx1ZVN1YnNjcmlwdGlvbikge1xyXG4gICAgICB0aGlzLnRleHRhcmVhVmFsdWVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGluaXRIYW5kbGVycygpIHtcclxuICAgIHRoaXMuaGFuZGxlcnMgPSB7XHJcbiAgICAgIGxhYmVsOiAoKSA9PiB0aGlzLmhhbmRsZUxhYmVsKCksXHJcbiAgICAgIGxlbmd0aDogKCkgPT4gdGhpcy5oYW5kbGVMZW5ndGgoKSxcclxuICAgICAgcGxhY2Vob2xkZXI6ICgpID0+IHRoaXMuaGFuZGxlUGxhY2Vob2xkZXIoKSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBpbml0RWxlbWVudHMoKSB7XHJcbiAgICB0aGlzLnRleHRhcmVhRWxlbWVudCA9ICQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgdGhpcy50ZXh0YXJlYUNvbnRhaW5lckVsZW1lbnQgPSAkKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5wYXJlbnQoJy5pbnB1dC1maWVsZCcpO1xyXG4gICAgdGhpcy5sYWJlbEVsZW1lbnQgPSB0aGlzLmNyZWF0ZUxhYmVsRWxlbWVudCgpO1xyXG4gICAgdGhpcy5pbml0VGV4dGFyZWEoKTtcclxuICB9XHJcblxyXG4gIGluaXRUZXh0YXJlYSgpIHtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMudGV4dGFyZWFFbGVtZW50WzBdLCAnbWF0ZXJpYWxpemUtdGV4dGFyZWEnLCB0cnVlKTtcclxuICB9XHJcblxyXG4gIGluaXRUZXh0YXJlYVN1YnNjcmlwdGlvbigpIHtcclxuICAgIGlmICh0aGlzLm5nQ29udHJvbCkge1xyXG4gICAgICB0aGlzLnRleHRhcmVhVmFsdWVTdWJzY3JpcHRpb24gPSB0aGlzLm5nQ29udHJvbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHRoaXMuc2V0TGFiZWxBY3RpdmUoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjcmVhdGVMYWJlbEVsZW1lbnQoKSB7XHJcbiAgICBjb25zdCBsYWJlbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgbGFiZWxFbGVtZW50LnNldEF0dHJpYnV0ZSgnZm9yJywgdGhpcy5pZCk7XHJcblxyXG4gICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMudGV4dGFyZWFFbGVtZW50LCAnYWZ0ZXInLCBbbGFiZWxFbGVtZW50XSk7XHJcblxyXG4gICAgcmV0dXJuICQobGFiZWxFbGVtZW50KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVByb3BlcnRpZXMoKSB7XHJcbiAgICBpZiAodGhpcy50ZXh0YXJlYUNvbnRhaW5lckVsZW1lbnQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1RleHRhcmVhIG11c3QgYmUgcGxhY2VkIGluc2lkZSBhIFttei10ZXh0YXJlYS1jb250YWluZXJdIHRhZycsIHRoaXMudGV4dGFyZWFFbGVtZW50KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHN1cGVyLmV4ZWN1dGVQcm9wSGFuZGxlcnMoKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUxhYmVsKCkge1xyXG4gICAgaWYgKHRoaXMucGxhY2Vob2xkZXIgfHwgdGhpcy50ZXh0YXJlYUVsZW1lbnQudmFsKCkpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5sYWJlbEVsZW1lbnRbMF0sICdhY3RpdmUnLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QodGhpcy5sYWJlbEVsZW1lbnQsICd0ZXh0JywgW3RoaXMubGFiZWxdKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUxlbmd0aCgpIHtcclxuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMubGVuZ3RoID8gdGhpcy5sZW5ndGgudG9TdHJpbmcoKSA6IG51bGw7XHJcblxyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50QXR0cmlidXRlKHRoaXMudGV4dGFyZWFFbGVtZW50WzBdLCAnZGF0YS1sZW5ndGgnLCBsZW5ndGgpO1xyXG5cclxuICAgIGlmIChsZW5ndGgpIHtcclxuICAgICAgdGhpcy5zZXRDaGFyYWN0ZXJDb3VudCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZW1vdmVDaGFyYWN0ZXJDb3VudCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlUGxhY2Vob2xkZXIoKSB7XHJcbiAgICBjb25zdCBwbGFjZWhvbGRlciA9ICEhdGhpcy5wbGFjZWhvbGRlciA/IHRoaXMucGxhY2Vob2xkZXIgOiBudWxsO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50QXR0cmlidXRlKHRoaXMudGV4dGFyZWFFbGVtZW50WzBdLCAncGxhY2Vob2xkZXInLCBwbGFjZWhvbGRlcik7XHJcblxyXG4gICAgdGhpcy5zZXRMYWJlbEFjdGl2ZSgpO1xyXG4gIH1cclxuXHJcbiAgc2V0Q2hhcmFjdGVyQ291bnQoKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QodGhpcy50ZXh0YXJlYUVsZW1lbnQsICdjaGFyYWN0ZXJDb3VudGVyJyk7XHJcblxyXG4gICAgLy8gZm9yY2UgdmFsaWRhdGlvblxyXG4gICAgLy8gbmVlZCBzZXRUaW1lb3V0IG90aGVyd2lzZSBpdCB3b250IHRyaWdnZXIgdmFsaWRhdGlvbiByaWdodCBhd2F5XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMudGV4dGFyZWFFbGVtZW50LCAndHJpZ2dlcicsIFsnaW5wdXQnXSk7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLnRleHRhcmVhRWxlbWVudCwgJ3RyaWdnZXInLCBbJ2JsdXInXSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldExhYmVsQWN0aXZlKCkge1xyXG4gICAgLy8gbmVlZCBzZXRUaW1lb3V0IG90aGVyd2lzZSBpdCB3b250IG1ha2UgbGFiZWwgZmxvYXQgaW4gc29tZSBjaXJjb25zdGFuY2VzXHJcbiAgICAvLyBmb3IgZXhhbXBsZTogZm9yY2luZyB2YWxpZGF0aW9uIGZvciBleGFtcGxlLCByZXNldGluZyBmb3JtIHByb2dyYW1tYXRpY2FseSwgLi4uXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgY29uc3QgdGV4dGFyZWFWYWx1ZSA9ICg8SFRNTFRleHRBcmVhRWxlbWVudD50aGlzLnRleHRhcmVhRWxlbWVudFswXSkudmFsdWU7XHJcbiAgICAgIGNvbnN0IGlzQWN0aXZlID0gISF0aGlzLnBsYWNlaG9sZGVyIHx8ICEhdGV4dGFyZWFWYWx1ZTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5sYWJlbEVsZW1lbnRbMF0sICdhY3RpdmUnLCBpc0FjdGl2ZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlbW92ZUNoYXJhY3RlckNvdW50KCkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMudGV4dGFyZWFFbGVtZW50LnNpYmxpbmdzKCcuY2hhcmFjdGVyLWNvdW50ZXInKSwgJ3JlbW92ZScpO1xyXG5cclxuICAgIHRoaXMucmVtb3ZlVmFsaWRhdGlvbkNsYXNzZXMoKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZVZhbGlkYXRpb25DbGFzc2VzKCkge1xyXG4gICAgLy8gcmVzZXQgdmFsaWQvaW52YWxpZCBzdGF0ZVxyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy50ZXh0YXJlYUVsZW1lbnRbMF0sICdpbnZhbGlkJywgZmFsc2UpO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy50ZXh0YXJlYUVsZW1lbnRbMF0sICd2YWxpZCcsIGZhbHNlKTtcclxuICB9XHJcbn1cclxuIl19