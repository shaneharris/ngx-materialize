/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, Input, Optional, Renderer } from '@angular/core';
import { NgControl } from '@angular/forms';
import { HandlePropChanges } from '../shared/index';
var MzTextareaDirective = /** @class */ (function (_super) {
    tslib_1.__extends(MzTextareaDirective, _super);
    function MzTextareaDirective(ngControl, elementRef, renderer) {
        var _this = _super.call(this) || this;
        _this.ngControl = ngControl;
        _this.elementRef = elementRef;
        _this.renderer = renderer;
        return _this;
    }
    /**
     * @return {?}
     */
    MzTextareaDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.initHandlers();
        this.initElements();
        this.initTextareaSubscription();
        this.handleProperties();
    };
    /**
     * @return {?}
     */
    MzTextareaDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.textareaValueSubscription) {
            this.textareaValueSubscription.unsubscribe();
        }
    };
    /**
     * @return {?}
     */
    MzTextareaDirective.prototype.initHandlers = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.handlers = {
            label: function () { return _this.handleLabel(); },
            length: function () { return _this.handleLength(); },
            placeholder: function () { return _this.handlePlaceholder(); },
        };
    };
    /**
     * @return {?}
     */
    MzTextareaDirective.prototype.initElements = /**
     * @return {?}
     */
    function () {
        this.textareaElement = $(this.elementRef.nativeElement);
        this.textareaContainerElement = $(this.elementRef.nativeElement).parent('.input-field');
        this.labelElement = this.createLabelElement();
        this.initTextarea();
    };
    /**
     * @return {?}
     */
    MzTextareaDirective.prototype.initTextarea = /**
     * @return {?}
     */
    function () {
        this.renderer.setElementClass(this.textareaElement[0], 'materialize-textarea', true);
    };
    /**
     * @return {?}
     */
    MzTextareaDirective.prototype.initTextareaSubscription = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.ngControl) {
            this.textareaValueSubscription = this.ngControl.valueChanges.subscribe(function () { return _this.setLabelActive(); });
        }
    };
    /**
     * @return {?}
     */
    MzTextareaDirective.prototype.createLabelElement = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ labelElement = document.createElement('label');
        labelElement.setAttribute('for', this.id);
        this.renderer.invokeElementMethod(this.textareaElement, 'after', [labelElement]);
        return $(labelElement);
    };
    /**
     * @return {?}
     */
    MzTextareaDirective.prototype.handleProperties = /**
     * @return {?}
     */
    function () {
        if (this.textareaContainerElement.length === 0) {
            console.error('Textarea must be placed inside a [mz-textarea-container] tag', this.textareaElement);
            return;
        }
        _super.prototype.executePropHandlers.call(this);
    };
    /**
     * @return {?}
     */
    MzTextareaDirective.prototype.handleLabel = /**
     * @return {?}
     */
    function () {
        if (this.placeholder || this.textareaElement.val()) {
            this.renderer.setElementClass(this.labelElement[0], 'active', true);
        }
        this.renderer.invokeElementMethod(this.labelElement, 'text', [this.label]);
    };
    /**
     * @return {?}
     */
    MzTextareaDirective.prototype.handleLength = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ length = this.length ? this.length.toString() : null;
        this.renderer.setElementAttribute(this.textareaElement[0], 'data-length', length);
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
    MzTextareaDirective.prototype.handlePlaceholder = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ placeholder = !!this.placeholder ? this.placeholder : null;
        this.renderer.setElementAttribute(this.textareaElement[0], 'placeholder', placeholder);
        this.setLabelActive();
    };
    /**
     * @return {?}
     */
    MzTextareaDirective.prototype.setCharacterCount = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.renderer.invokeElementMethod(this.textareaElement, 'characterCounter');
        // force validation
        // need setTimeout otherwise it wont trigger validation right away
        setTimeout(function () {
            _this.renderer.invokeElementMethod(_this.textareaElement, 'trigger', ['input']);
            _this.renderer.invokeElementMethod(_this.textareaElement, 'trigger', ['blur']);
        });
    };
    /**
     * @return {?}
     */
    MzTextareaDirective.prototype.setLabelActive = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // need setTimeout otherwise it wont make label float in some circonstances
        // for example: forcing validation for example, reseting form programmaticaly, ...
        setTimeout(function () {
            var /** @type {?} */ textareaValue = (/** @type {?} */ (_this.textareaElement[0])).value;
            var /** @type {?} */ isActive = !!_this.placeholder || !!textareaValue;
            _this.renderer.setElementClass(_this.labelElement[0], 'active', isActive);
        });
    };
    /**
     * @return {?}
     */
    MzTextareaDirective.prototype.removeCharacterCount = /**
     * @return {?}
     */
    function () {
        this.renderer.invokeElementMethod(this.textareaElement.siblings('.character-counter'), 'remove');
        this.removeValidationClasses();
    };
    /**
     * @return {?}
     */
    MzTextareaDirective.prototype.removeValidationClasses = /**
     * @return {?}
     */
    function () {
        // reset valid/invalid state
        this.renderer.setElementClass(this.textareaElement[0], 'invalid', false);
        this.renderer.setElementClass(this.textareaElement[0], 'valid', false);
    };
    MzTextareaDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'textarea[mzTextarea], textarea[mz-textarea]',
                },] },
    ];
    /** @nocollapse */
    MzTextareaDirective.ctorParameters = function () { return [
        { type: NgControl, decorators: [{ type: Optional },] },
        { type: ElementRef, },
        { type: Renderer, },
    ]; };
    MzTextareaDirective.propDecorators = {
        "id": [{ type: Input },],
        "placeholder": [{ type: Input },],
        "label": [{ type: Input },],
        "length": [{ type: Input },],
    };
    return MzTextareaDirective;
}(HandlePropChanges));
export { MzTextareaDirective };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWEuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hdGVyaWFsaXplLyIsInNvdXJjZXMiOlsic3JjL3RleHRhcmVhL3RleHRhcmVhLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBcUIsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7O0lBS1gsK0NBQWlCO0lBY3hELDZCQUNzQixXQUNaLFlBQ0E7UUFIVixZQUtFLGlCQUFPLFNBQ1I7UUFMcUIsZUFBUyxHQUFULFNBQVM7UUFDckIsZ0JBQVUsR0FBVixVQUFVO1FBQ1YsY0FBUSxHQUFSLFFBQVE7O0tBR2pCOzs7O0lBRUQsc0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztRQUNoQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztLQUN6Qjs7OztJQUVELHlDQUFXOzs7SUFBWDtRQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzlDO0tBQ0Y7Ozs7SUFFRCwwQ0FBWTs7O0lBQVo7UUFBQSxpQkFNQztRQUxDLElBQUksQ0FBQyxRQUFRLEdBQUc7WUFDZCxLQUFLLEVBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxXQUFXLEVBQUUsRUFBbEIsQ0FBa0I7WUFDL0IsTUFBTSxFQUFFLGNBQU0sT0FBQSxLQUFJLENBQUMsWUFBWSxFQUFFLEVBQW5C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QUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDekUsQ0FBQyxDQUFDO0tBQ0o7Ozs7SUFFRCxrREFBb0I7OztJQUFwQjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsb0JBQW9CLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUVqRyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztLQUNoQzs7OztJQUVELHFEQUF1Qjs7O0lBQXZCOztRQUVFLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQ3hFOztnQkEzSUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw2Q0FBNkM7aUJBQ3hEOzs7O2dCQVBRLFNBQVMsdUJBdUJiLFFBQVE7Z0JBeEJPLFVBQVU7Z0JBQXNDLFFBQVE7Ozt1QkFXekUsS0FBSztnQ0FDTCxLQUFLOzBCQUdMLEtBQUs7MkJBQ0wsS0FBSzs7OEJBaEJSO0VBU3lDLGlCQUFpQjtTQUE3QyxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3B0aW9uYWwsIFJlbmRlcmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBIYW5kbGVQcm9wQ2hhbmdlcyB9IGZyb20gJy4uL3NoYXJlZC9pbmRleCc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ3RleHRhcmVhW216VGV4dGFyZWFdLCB0ZXh0YXJlYVttei10ZXh0YXJlYV0nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpUZXh0YXJlYURpcmVjdGl2ZSBleHRlbmRzIEhhbmRsZVByb3BDaGFuZ2VzIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIC8vIG5hdGl2ZSBwcm9wZXJ0aWVzXHJcbiAgQElucHV0KCkgaWQ6IHN0cmluZztcclxuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xyXG5cclxuICAvLyBkaXJlY3RpdmUgcHJvcGVydGllc1xyXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbGVuZ3RoOiBudW1iZXI7XHJcblxyXG4gIHRleHRhcmVhRWxlbWVudDogSlF1ZXJ5O1xyXG4gIHRleHRhcmVhQ29udGFpbmVyRWxlbWVudDogSlF1ZXJ5O1xyXG4gIHRleHRhcmVhVmFsdWVTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuICBsYWJlbEVsZW1lbnQ6IEpRdWVyeTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIG5nQ29udHJvbDogTmdDb250cm9sLFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIsXHJcbiAgKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluaXRIYW5kbGVycygpO1xyXG4gICAgdGhpcy5pbml0RWxlbWVudHMoKTtcclxuICAgIHRoaXMuaW5pdFRleHRhcmVhU3Vic2NyaXB0aW9uKCk7XHJcbiAgICB0aGlzLmhhbmRsZVByb3BlcnRpZXMoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgaWYgKHRoaXMudGV4dGFyZWFWYWx1ZVN1YnNjcmlwdGlvbikge1xyXG4gICAgICB0aGlzLnRleHRhcmVhVmFsdWVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGluaXRIYW5kbGVycygpIHtcclxuICAgIHRoaXMuaGFuZGxlcnMgPSB7XHJcbiAgICAgIGxhYmVsOiAoKSA9PiB0aGlzLmhhbmRsZUxhYmVsKCksXHJcbiAgICAgIGxlbmd0aDogKCkgPT4gdGhpcy5oYW5kbGVMZW5ndGgoKSxcclxuICAgICAgcGxhY2Vob2xkZXI6ICgpID0+IHRoaXMuaGFuZGxlUGxhY2Vob2xkZXIoKSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBpbml0RWxlbWVudHMoKSB7XHJcbiAgICB0aGlzLnRleHRhcmVhRWxlbWVudCA9ICQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgdGhpcy50ZXh0YXJlYUNvbnRhaW5lckVsZW1lbnQgPSAkKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5wYXJlbnQoJy5pbnB1dC1maWVsZCcpO1xyXG4gICAgdGhpcy5sYWJlbEVsZW1lbnQgPSB0aGlzLmNyZWF0ZUxhYmVsRWxlbWVudCgpO1xyXG4gICAgdGhpcy5pbml0VGV4dGFyZWEoKTtcclxuICB9XHJcblxyXG4gIGluaXRUZXh0YXJlYSgpIHtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMudGV4dGFyZWFFbGVtZW50WzBdLCAnbWF0ZXJpYWxpemUtdGV4dGFyZWEnLCB0cnVlKTtcclxuICB9XHJcblxyXG4gIGluaXRUZXh0YXJlYVN1YnNjcmlwdGlvbigpIHtcclxuICAgIGlmICh0aGlzLm5nQ29udHJvbCkge1xyXG4gICAgICB0aGlzLnRleHRhcmVhVmFsdWVTdWJzY3JpcHRpb24gPSB0aGlzLm5nQ29udHJvbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHRoaXMuc2V0TGFiZWxBY3RpdmUoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjcmVhdGVMYWJlbEVsZW1lbnQoKSB7XHJcbiAgICBjb25zdCBsYWJlbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgbGFiZWxFbGVtZW50LnNldEF0dHJpYnV0ZSgnZm9yJywgdGhpcy5pZCk7XHJcblxyXG4gICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMudGV4dGFyZWFFbGVtZW50LCAnYWZ0ZXInLCBbbGFiZWxFbGVtZW50XSk7XHJcblxyXG4gICAgcmV0dXJuICQobGFiZWxFbGVtZW50KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVByb3BlcnRpZXMoKSB7XHJcbiAgICBpZiAodGhpcy50ZXh0YXJlYUNvbnRhaW5lckVsZW1lbnQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1RleHRhcmVhIG11c3QgYmUgcGxhY2VkIGluc2lkZSBhIFttei10ZXh0YXJlYS1jb250YWluZXJdIHRhZycsIHRoaXMudGV4dGFyZWFFbGVtZW50KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHN1cGVyLmV4ZWN1dGVQcm9wSGFuZGxlcnMoKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUxhYmVsKCkge1xyXG4gICAgaWYgKHRoaXMucGxhY2Vob2xkZXIgfHwgdGhpcy50ZXh0YXJlYUVsZW1lbnQudmFsKCkpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5sYWJlbEVsZW1lbnRbMF0sICdhY3RpdmUnLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QodGhpcy5sYWJlbEVsZW1lbnQsICd0ZXh0JywgW3RoaXMubGFiZWxdKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUxlbmd0aCgpIHtcclxuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMubGVuZ3RoID8gdGhpcy5sZW5ndGgudG9TdHJpbmcoKSA6IG51bGw7XHJcblxyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50QXR0cmlidXRlKHRoaXMudGV4dGFyZWFFbGVtZW50WzBdLCAnZGF0YS1sZW5ndGgnLCBsZW5ndGgpO1xyXG5cclxuICAgIGlmIChsZW5ndGgpIHtcclxuICAgICAgdGhpcy5zZXRDaGFyYWN0ZXJDb3VudCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZW1vdmVDaGFyYWN0ZXJDb3VudCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlUGxhY2Vob2xkZXIoKSB7XHJcbiAgICBjb25zdCBwbGFjZWhvbGRlciA9ICEhdGhpcy5wbGFjZWhvbGRlciA/IHRoaXMucGxhY2Vob2xkZXIgOiBudWxsO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50QXR0cmlidXRlKHRoaXMudGV4dGFyZWFFbGVtZW50WzBdLCAncGxhY2Vob2xkZXInLCBwbGFjZWhvbGRlcik7XHJcblxyXG4gICAgdGhpcy5zZXRMYWJlbEFjdGl2ZSgpO1xyXG4gIH1cclxuXHJcbiAgc2V0Q2hhcmFjdGVyQ291bnQoKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QodGhpcy50ZXh0YXJlYUVsZW1lbnQsICdjaGFyYWN0ZXJDb3VudGVyJyk7XHJcblxyXG4gICAgLy8gZm9yY2UgdmFsaWRhdGlvblxyXG4gICAgLy8gbmVlZCBzZXRUaW1lb3V0IG90aGVyd2lzZSBpdCB3b250IHRyaWdnZXIgdmFsaWRhdGlvbiByaWdodCBhd2F5XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMudGV4dGFyZWFFbGVtZW50LCAndHJpZ2dlcicsIFsnaW5wdXQnXSk7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLnRleHRhcmVhRWxlbWVudCwgJ3RyaWdnZXInLCBbJ2JsdXInXSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldExhYmVsQWN0aXZlKCkge1xyXG4gICAgLy8gbmVlZCBzZXRUaW1lb3V0IG90aGVyd2lzZSBpdCB3b250IG1ha2UgbGFiZWwgZmxvYXQgaW4gc29tZSBjaXJjb25zdGFuY2VzXHJcbiAgICAvLyBmb3IgZXhhbXBsZTogZm9yY2luZyB2YWxpZGF0aW9uIGZvciBleGFtcGxlLCByZXNldGluZyBmb3JtIHByb2dyYW1tYXRpY2FseSwgLi4uXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgY29uc3QgdGV4dGFyZWFWYWx1ZSA9ICg8SFRNTFRleHRBcmVhRWxlbWVudD50aGlzLnRleHRhcmVhRWxlbWVudFswXSkudmFsdWU7XHJcbiAgICAgIGNvbnN0IGlzQWN0aXZlID0gISF0aGlzLnBsYWNlaG9sZGVyIHx8ICEhdGV4dGFyZWFWYWx1ZTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5sYWJlbEVsZW1lbnRbMF0sICdhY3RpdmUnLCBpc0FjdGl2ZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlbW92ZUNoYXJhY3RlckNvdW50KCkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMudGV4dGFyZWFFbGVtZW50LnNpYmxpbmdzKCcuY2hhcmFjdGVyLWNvdW50ZXInKSwgJ3JlbW92ZScpO1xyXG5cclxuICAgIHRoaXMucmVtb3ZlVmFsaWRhdGlvbkNsYXNzZXMoKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZVZhbGlkYXRpb25DbGFzc2VzKCkge1xyXG4gICAgLy8gcmVzZXQgdmFsaWQvaW52YWxpZCBzdGF0ZVxyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy50ZXh0YXJlYUVsZW1lbnRbMF0sICdpbnZhbGlkJywgZmFsc2UpO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy50ZXh0YXJlYUVsZW1lbnRbMF0sICd2YWxpZCcsIGZhbHNlKTtcclxuICB9XHJcbn1cclxuIl19