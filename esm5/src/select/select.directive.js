/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectorRef, Directive, ElementRef, EventEmitter, Input, Output, Renderer, } from '@angular/core';
import { HandlePropChanges } from '../shared';
var MzSelectDirective = /** @class */ (function (_super) {
    tslib_1.__extends(MzSelectDirective, _super);
    function MzSelectDirective(elementRef, changeDetectorRef, renderer) {
        var _this = _super.call(this) || this;
        _this.elementRef = elementRef;
        _this.changeDetectorRef = changeDetectorRef;
        _this.renderer = renderer;
        _this.update = new EventEmitter();
        _this.suspend = false;
        return _this;
    }
    Object.defineProperty(MzSelectDirective.prototype, "inputElement", {
        get: /**
         * @return {?}
         */
        function () {
            return this.selectElement.siblings('input.select-dropdown');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MzSelectDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.initHandlers();
        this.initElements();
        this.initOnChange();
        this.handleProperties();
        // must be done after handlePlaceholder
        this.initSelectedOption();
        // must be done after handleProperties
        this.initMaterialSelect();
        // must be done after initMaterialSelect
        this.listenOptionChanges();
        this.initFilledIn();
        this.handleDOMEvents();
    };
    /**
     * @return {?}
     */
    MzSelectDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.renderer.invokeElementMethod(this.selectElement, 'material_select', ['destroy']);
        this.selectElement.off();
        this.mutationObserver.disconnect();
    };
    /**
     * @return {?}
     */
    MzSelectDirective.prototype.initHandlers = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.handlers = {
            disabled: function () { return _this.handleDisabled(); },
            label: function () { return _this.handleLabel(); },
            placeholder: function () { return _this.handlePlaceholder(); },
        };
    };
    /**
     * @return {?}
     */
    MzSelectDirective.prototype.initElements = /**
     * @return {?}
     */
    function () {
        this.selectElement = $(this.elementRef.nativeElement);
        this.selectContainerElement = $(this.elementRef.nativeElement).parents('.input-field');
        this.labelElement = this.createLabelElement();
    };
    /**
     * Need to be done after material_select has been invoked or else the multi-select
     * options are not yet in the DOM as it loops on rendered options
     */
    /**
     * Need to be done after material_select has been invoked or else the multi-select
     * options are not yet in the DOM as it loops on rendered options
     * @return {?}
     */
    MzSelectDirective.prototype.initFilledIn = /**
     * Need to be done after material_select has been invoked or else the multi-select
     * options are not yet in the DOM as it loops on rendered options
     * @return {?}
     */
    function () {
        var _this = this;
        this.checkboxElements = this.selectContainerElement.find(':checkbox');
        this.handlers['filledIn'] = function () { return _this.handleFilledIn(); };
        this.handleFilledIn();
    };
    /**
     * @return {?}
     */
    MzSelectDirective.prototype.initMaterialSelect = /**
     * @return {?}
     */
    function () {
        this.renderer.invokeElementMethod(this.selectElement, 'material_select');
    };
    /**
     * Trigger the native change event from select element instead of the JQuery.
     * An issue on Github is open about this problem : https://github.com/Dogfalo/materialize/issues/2843
     * This method should be removed when this issue is revolved.
     */
    /**
     * Trigger the native change event from select element instead of the JQuery.
     * An issue on Github is open about this problem : https://github.com/Dogfalo/materialize/issues/2843
     * This method should be removed when this issue is revolved.
     * @return {?}
     */
    MzSelectDirective.prototype.initOnChange = /**
     * Trigger the native change event from select element instead of the JQuery.
     * An issue on Github is open about this problem : https://github.com/Dogfalo/materialize/issues/2843
     * This method should be removed when this issue is revolved.
     * @return {?}
     */
    function () {
        var _this = this;
        this.selectElement.on('change', function (event) {
            if (!_this.suspend) {
                _this.suspend = true;
                var /** @type {?} */ customEvent = document.createEvent('CustomEvent');
                customEvent.initCustomEvent('change', true, false, event.target.value);
                _this.renderer.invokeElementMethod(_this.selectElement[0], 'dispatchEvent', [customEvent]);
            }
        });
        // Stop the propagation of change event
        this.selectElement[0].addEventListener('change', function () {
            _this.suspend = false;
        });
    };
    /**
     * @return {?}
     */
    MzSelectDirective.prototype.handleDOMEvents = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.inputElement.on('blur focus', function (event) {
            var /** @type {?} */ customEvent = document.createEvent('CustomEvent');
            customEvent.initCustomEvent(event.type, true, false, event.target);
            _this.selectElement[0].dispatchEvent(customEvent);
        });
    };
    /**
     * @return {?}
     */
    MzSelectDirective.prototype.createLabelElement = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ labelElement = document.createElement('label');
        labelElement.setAttribute('for', this.id);
        this.renderer.invokeElementMethod(this.selectElement, 'after', [labelElement]);
        return $(labelElement);
    };
    /**
     * @return {?}
     */
    MzSelectDirective.prototype.handleProperties = /**
     * @return {?}
     */
    function () {
        if (this.selectContainerElement.length === 0) {
            console.error('Select with mz-select directive must be place inside a [mz-select-container] tag', this.selectElement);
            return;
        }
        _super.prototype.executePropHandlers.call(this);
    };
    /**
     * @return {?}
     */
    MzSelectDirective.prototype.initSelectedOption = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ firstOptionElement = this.selectElement.children().first();
        if (firstOptionElement.length > 0
            && this.selectElement.children('option[selected]').length === 0
            && !this.selectElement[0].hasAttribute('multiple')) {
            this.renderer.setElementAttribute(firstOptionElement[0], 'selected', '');
        }
    };
    /**
     * @return {?}
     */
    MzSelectDirective.prototype.handleDisabled = /**
     * @return {?}
     */
    function () {
        // when disabled is null/undefined that means the property has not been used on the element
        // but it might be set by another process (for example reactive form applies disabled attribute itself)
        // therefore we don't want to remove or add it here
        if (this.disabled != null) {
            this.renderer.setElementProperty(this.selectElement[0], 'disabled', !!this.disabled);
            this.updateMaterialSelect();
        }
    };
    /**
     * @return {?}
     */
    MzSelectDirective.prototype.handleLabel = /**
     * @return {?}
     */
    function () {
        if (this.label != null) {
            this.renderer.invokeElementMethod(this.labelElement, 'text', [this.label]);
        }
    };
    /**
     * @return {?}
     */
    MzSelectDirective.prototype.handleFilledIn = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.checkboxElements.length > 0) {
            this.checkboxElements.toArray().forEach(function (checkboxElement) {
                _this.renderer.setElementClass(checkboxElement, 'filled-in', !!_this.filledIn);
            });
        }
    };
    /**
     * @return {?}
     */
    MzSelectDirective.prototype.handlePlaceholder = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ placeholderElement = this.selectElement.children(':disabled').first();
        // if placeholder element exists
        if (placeholderElement.length > 0) {
            if (this.placeholder) {
                // update existing placeholder element
                this.renderer.invokeElementMethod(placeholderElement, 'text', [this.placeholder]);
            }
            else {
                // remove existing placeholder element
                this.renderer.invokeElementMethod(placeholderElement, 'remove');
                // Force trigger change event since it's not triggered when value change programmatically
                this.renderer.invokeElementMethod(this.selectElement, 'change');
                // Required if we don't want exception "Expression has changed after it was checked." https://github.com/angular/angular/issues/6005
                this.changeDetectorRef.detectChanges();
            }
        }
        else {
            if (this.placeholder) {
                // add placeholder element
                var /** @type {?} */ placeholderText = document.createTextNode(this.placeholder);
                var /** @type {?} */ placeholderOption = document.createElement('option');
                placeholderOption.disabled = true;
                placeholderOption.value = null;
                placeholderOption.appendChild(placeholderText);
                this.renderer.invokeElementMethod(this.selectElement, 'prepend', [placeholderOption]);
            }
        }
        this.initMaterialSelect();
    };
    /**
     * @return {?}
     */
    MzSelectDirective.prototype.listenOptionChanges = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ mutationObserverConfiguration = {
            childList: true,
            subtree: true,
        };
        this.mutationObserver = new MutationObserver(function (mutations) {
            _this.updateMaterialSelect();
        });
        this.mutationObserver.observe(this.selectElement[0], mutationObserverConfiguration);
    };
    /**
     * @return {?}
     */
    MzSelectDirective.prototype.updateMaterialSelect = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.initMaterialSelect();
        if (this.filledIn) {
            this.initFilledIn();
        }
        this.handleDOMEvents();
        // wait for materialize select to be initialized
        // /!\ race condition warning /!\
        setTimeout(function () { return _this.update.emit(); });
    };
    MzSelectDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'select[mzSelect], select[mz-select]',
                },] },
    ];
    /** @nocollapse */
    MzSelectDirective.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: ChangeDetectorRef, },
        { type: Renderer, },
    ]; };
    MzSelectDirective.propDecorators = {
        "id": [{ type: Input },],
        "disabled": [{ type: Input },],
        "placeholder": [{ type: Input },],
        "label": [{ type: Input },],
        "filledIn": [{ type: Input },],
        "update": [{ type: Output },],
    };
    return MzSelectDirective;
}(HandlePropChanges));
export { MzSelectDirective };
function MzSelectDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MzSelectDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MzSelectDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    MzSelectDirective.propDecorators;
    /** @type {?} */
    MzSelectDirective.prototype.id;
    /** @type {?} */
    MzSelectDirective.prototype.disabled;
    /** @type {?} */
    MzSelectDirective.prototype.placeholder;
    /** @type {?} */
    MzSelectDirective.prototype.label;
    /** @type {?} */
    MzSelectDirective.prototype.filledIn;
    /** @type {?} */
    MzSelectDirective.prototype.update;
    /** @type {?} */
    MzSelectDirective.prototype.checkboxElements;
    /** @type {?} */
    MzSelectDirective.prototype.labelElement;
    /** @type {?} */
    MzSelectDirective.prototype.selectElement;
    /** @type {?} */
    MzSelectDirective.prototype.selectContainerElement;
    /** @type {?} */
    MzSelectDirective.prototype.mutationObserver;
    /** @type {?} */
    MzSelectDirective.prototype.suspend;
    /** @type {?} */
    MzSelectDirective.prototype.elementRef;
    /** @type {?} */
    MzSelectDirective.prototype.changeDetectorRef;
    /** @type {?} */
    MzSelectDirective.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXRlcmlhbGl6ZS8iLCJzb3VyY2VzIjpbInNyYy9zZWxlY3Qvc2VsZWN0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFDTixRQUFRLEdBQ1QsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sV0FBVyxDQUFDOztJQUtQLDZDQUFpQjtJQXVCdEQsMkJBQ1UsWUFDRCxtQkFDQTtRQUhULFlBS0UsaUJBQU8sU0FDUjtRQUxTLGdCQUFVLEdBQVYsVUFBVTtRQUNYLHVCQUFpQixHQUFqQixpQkFBaUI7UUFDakIsY0FBUSxHQUFSLFFBQVE7dUJBakJFLElBQUksWUFBWSxFQUFFO3dCQVkzQixLQUFLOztLQVFkO0lBYkQsc0JBQUksMkNBQVk7Ozs7UUFBaEI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsQ0FBQztTQUM3RDs7O09BQUE7Ozs7SUFhRCxvQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQzs7UUFHeEIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7O1FBRzFCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDOztRQUcxQixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0tBQ3hCOzs7O0lBRUQsdUNBQVc7OztJQUFY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RGlyZWN0aXZlLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgSGFuZGxlUHJvcENoYW5nZXMgfSBmcm9tICcuLi9zaGFyZWQnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdzZWxlY3RbbXpTZWxlY3RdLCBzZWxlY3RbbXotc2VsZWN0XScsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNelNlbGVjdERpcmVjdGl2ZSBleHRlbmRzIEhhbmRsZVByb3BDaGFuZ2VzIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIC8vIG5hdGl2ZSBwcm9wZXJ0aWVzXHJcbiAgQElucHV0KCkgaWQ6IHN0cmluZztcclxuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xyXG5cclxuICAvLyBkaXJlY3RpdmUgcHJvcGVydGllc1xyXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZmlsbGVkSW46IGJvb2xlYW47XHJcbiAgQE91dHB1dCgpIHVwZGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgY2hlY2tib3hFbGVtZW50czogSlF1ZXJ5O1xyXG4gIGxhYmVsRWxlbWVudDogSlF1ZXJ5O1xyXG4gIHNlbGVjdEVsZW1lbnQ6IEpRdWVyeTtcclxuICBzZWxlY3RDb250YWluZXJFbGVtZW50OiBKUXVlcnk7XHJcblxyXG4gIGdldCBpbnB1dEVsZW1lbnQoKTogSlF1ZXJ5IHtcclxuICAgIHJldHVybiB0aGlzLnNlbGVjdEVsZW1lbnQuc2libGluZ3MoJ2lucHV0LnNlbGVjdC1kcm9wZG93bicpO1xyXG4gIH1cclxuXHJcbiAgbXV0YXRpb25PYnNlcnZlcjogTXV0YXRpb25PYnNlcnZlcjtcclxuICBzdXNwZW5kID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHVibGljIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIsXHJcbiAgKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluaXRIYW5kbGVycygpO1xyXG4gICAgdGhpcy5pbml0RWxlbWVudHMoKTtcclxuICAgIHRoaXMuaW5pdE9uQ2hhbmdlKCk7XHJcbiAgICB0aGlzLmhhbmRsZVByb3BlcnRpZXMoKTtcclxuXHJcbiAgICAvLyBtdXN0IGJlIGRvbmUgYWZ0ZXIgaGFuZGxlUGxhY2Vob2xkZXJcclxuICAgIHRoaXMuaW5pdFNlbGVjdGVkT3B0aW9uKCk7XHJcblxyXG4gICAgLy8gbXVzdCBiZSBkb25lIGFmdGVyIGhhbmRsZVByb3BlcnRpZXNcclxuICAgIHRoaXMuaW5pdE1hdGVyaWFsU2VsZWN0KCk7XHJcblxyXG4gICAgLy8gbXVzdCBiZSBkb25lIGFmdGVyIGluaXRNYXRlcmlhbFNlbGVjdFxyXG4gICAgdGhpcy5saXN0ZW5PcHRpb25DaGFuZ2VzKCk7XHJcbiAgICB0aGlzLmluaXRGaWxsZWRJbigpO1xyXG4gICAgdGhpcy5oYW5kbGVET01FdmVudHMoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMuc2VsZWN0RWxlbWVudCwgJ21hdGVyaWFsX3NlbGVjdCcsIFsnZGVzdHJveSddKTtcclxuICAgIHRoaXMuc2VsZWN0RWxlbWVudC5vZmYoKTtcclxuICAgIHRoaXMubXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgfVxyXG5cclxuICBpbml0SGFuZGxlcnMoKSB7XHJcbiAgICB0aGlzLmhhbmRsZXJzID0ge1xyXG4gICAgICBkaXNhYmxlZDogKCkgPT4gdGhpcy5oYW5kbGVEaXNhYmxlZCgpLFxyXG4gICAgICBsYWJlbDogKCkgPT4gdGhpcy5oYW5kbGVMYWJlbCgpLFxyXG4gICAgICBwbGFjZWhvbGRlcjogKCkgPT4gdGhpcy5oYW5kbGVQbGFjZWhvbGRlcigpLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGluaXRFbGVtZW50cygpIHtcclxuICAgIHRoaXMuc2VsZWN0RWxlbWVudCA9ICQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgdGhpcy5zZWxlY3RDb250YWluZXJFbGVtZW50ID0gJCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkucGFyZW50cygnLmlucHV0LWZpZWxkJyk7XHJcbiAgICB0aGlzLmxhYmVsRWxlbWVudCA9IHRoaXMuY3JlYXRlTGFiZWxFbGVtZW50KCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBOZWVkIHRvIGJlIGRvbmUgYWZ0ZXIgbWF0ZXJpYWxfc2VsZWN0IGhhcyBiZWVuIGludm9rZWQgb3IgZWxzZSB0aGUgbXVsdGktc2VsZWN0XHJcbiAgICogb3B0aW9ucyBhcmUgbm90IHlldCBpbiB0aGUgRE9NIGFzIGl0IGxvb3BzIG9uIHJlbmRlcmVkIG9wdGlvbnNcclxuICAgKi9cclxuICBpbml0RmlsbGVkSW4oKSB7XHJcbiAgICB0aGlzLmNoZWNrYm94RWxlbWVudHMgPSB0aGlzLnNlbGVjdENvbnRhaW5lckVsZW1lbnQuZmluZCgnOmNoZWNrYm94Jyk7XHJcbiAgICB0aGlzLmhhbmRsZXJzWydmaWxsZWRJbiddID0gKCkgPT4gdGhpcy5oYW5kbGVGaWxsZWRJbigpO1xyXG4gICAgdGhpcy5oYW5kbGVGaWxsZWRJbigpO1xyXG4gIH1cclxuXHJcbiAgaW5pdE1hdGVyaWFsU2VsZWN0KCkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMuc2VsZWN0RWxlbWVudCwgJ21hdGVyaWFsX3NlbGVjdCcpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVHJpZ2dlciB0aGUgbmF0aXZlIGNoYW5nZSBldmVudCBmcm9tIHNlbGVjdCBlbGVtZW50IGluc3RlYWQgb2YgdGhlIEpRdWVyeS5cclxuICAgKiBBbiBpc3N1ZSBvbiBHaXRodWIgaXMgb3BlbiBhYm91dCB0aGlzIHByb2JsZW0gOiBodHRwczovL2dpdGh1Yi5jb20vRG9nZmFsby9tYXRlcmlhbGl6ZS9pc3N1ZXMvMjg0M1xyXG4gICAqIFRoaXMgbWV0aG9kIHNob3VsZCBiZSByZW1vdmVkIHdoZW4gdGhpcyBpc3N1ZSBpcyByZXZvbHZlZC5cclxuICAgKi9cclxuICBpbml0T25DaGFuZ2UoKSB7XHJcbiAgICB0aGlzLnNlbGVjdEVsZW1lbnQub24oJ2NoYW5nZScsIChldmVudDogYW55KSA9PiB7XHJcbiAgICAgIGlmICghdGhpcy5zdXNwZW5kKSB7XHJcbiAgICAgICAgdGhpcy5zdXNwZW5kID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgY29uc3QgY3VzdG9tRXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcclxuICAgICAgICBjdXN0b21FdmVudC5pbml0Q3VzdG9tRXZlbnQoJ2NoYW5nZScsIHRydWUsIGZhbHNlLCBldmVudC50YXJnZXQudmFsdWUpO1xyXG5cclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QodGhpcy5zZWxlY3RFbGVtZW50WzBdLCAnZGlzcGF0Y2hFdmVudCcsIFtjdXN0b21FdmVudF0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBTdG9wIHRoZSBwcm9wYWdhdGlvbiBvZiBjaGFuZ2UgZXZlbnRcclxuICAgIHRoaXMuc2VsZWN0RWxlbWVudFswXS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc3VzcGVuZCA9IGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVET01FdmVudHMoKSB7XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC5vbignYmx1ciBmb2N1cycsIChldmVudDogSlF1ZXJ5LkV2ZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IGN1c3RvbUV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XHJcbiAgICAgIGN1c3RvbUV2ZW50LmluaXRDdXN0b21FdmVudChldmVudC50eXBlLCB0cnVlLCBmYWxzZSwgZXZlbnQudGFyZ2V0KTtcclxuICAgICAgdGhpcy5zZWxlY3RFbGVtZW50WzBdLmRpc3BhdGNoRXZlbnQoY3VzdG9tRXZlbnQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVMYWJlbEVsZW1lbnQoKSB7XHJcbiAgICBjb25zdCBsYWJlbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgbGFiZWxFbGVtZW50LnNldEF0dHJpYnV0ZSgnZm9yJywgdGhpcy5pZCk7XHJcblxyXG4gICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMuc2VsZWN0RWxlbWVudCwgJ2FmdGVyJywgW2xhYmVsRWxlbWVudF0pO1xyXG5cclxuICAgIHJldHVybiAkKGxhYmVsRWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVQcm9wZXJ0aWVzKCkge1xyXG4gICAgaWYgKHRoaXMuc2VsZWN0Q29udGFpbmVyRWxlbWVudC5sZW5ndGggPT09IDApIHtcclxuICAgICAgY29uc29sZS5lcnJvcignU2VsZWN0IHdpdGggbXotc2VsZWN0IGRpcmVjdGl2ZSBtdXN0IGJlIHBsYWNlIGluc2lkZSBhIFttei1zZWxlY3QtY29udGFpbmVyXSB0YWcnLCB0aGlzLnNlbGVjdEVsZW1lbnQpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBzdXBlci5leGVjdXRlUHJvcEhhbmRsZXJzKCk7XHJcbiAgfVxyXG5cclxuICBpbml0U2VsZWN0ZWRPcHRpb24oKSB7XHJcbiAgICBjb25zdCBmaXJzdE9wdGlvbkVsZW1lbnQgPSB0aGlzLnNlbGVjdEVsZW1lbnQuY2hpbGRyZW4oKS5maXJzdCgpO1xyXG4gICAgaWYgKGZpcnN0T3B0aW9uRWxlbWVudC5sZW5ndGggPiAwXHJcbiAgICAgICYmIHRoaXMuc2VsZWN0RWxlbWVudC5jaGlsZHJlbignb3B0aW9uW3NlbGVjdGVkXScpLmxlbmd0aCA9PT0gMFxyXG4gICAgICAmJiAhdGhpcy5zZWxlY3RFbGVtZW50WzBdLmhhc0F0dHJpYnV0ZSgnbXVsdGlwbGUnKVxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudEF0dHJpYnV0ZShmaXJzdE9wdGlvbkVsZW1lbnRbMF0sICdzZWxlY3RlZCcsICcnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZURpc2FibGVkKCkge1xyXG4gICAgLy8gd2hlbiBkaXNhYmxlZCBpcyBudWxsL3VuZGVmaW5lZCB0aGF0IG1lYW5zIHRoZSBwcm9wZXJ0eSBoYXMgbm90IGJlZW4gdXNlZCBvbiB0aGUgZWxlbWVudFxyXG4gICAgLy8gYnV0IGl0IG1pZ2h0IGJlIHNldCBieSBhbm90aGVyIHByb2Nlc3MgKGZvciBleGFtcGxlIHJlYWN0aXZlIGZvcm0gYXBwbGllcyBkaXNhYmxlZCBhdHRyaWJ1dGUgaXRzZWxmKVxyXG4gICAgLy8gdGhlcmVmb3JlIHdlIGRvbid0IHdhbnQgdG8gcmVtb3ZlIG9yIGFkZCBpdCBoZXJlXHJcbiAgICBpZiAodGhpcy5kaXNhYmxlZCAhPSBudWxsKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudFByb3BlcnR5KHRoaXMuc2VsZWN0RWxlbWVudFswXSwgJ2Rpc2FibGVkJywgISF0aGlzLmRpc2FibGVkKTtcclxuICAgICAgdGhpcy51cGRhdGVNYXRlcmlhbFNlbGVjdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlTGFiZWwoKSB7XHJcbiAgICBpZiAodGhpcy5sYWJlbCAhPSBudWxsKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLmxhYmVsRWxlbWVudCwgJ3RleHQnLCBbdGhpcy5sYWJlbF0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlRmlsbGVkSW4oKSB7XHJcbiAgICBpZiAodGhpcy5jaGVja2JveEVsZW1lbnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5jaGVja2JveEVsZW1lbnRzLnRvQXJyYXkoKS5mb3JFYWNoKGNoZWNrYm94RWxlbWVudCA9PiB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3MoY2hlY2tib3hFbGVtZW50LCAnZmlsbGVkLWluJywgISF0aGlzLmZpbGxlZEluKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVQbGFjZWhvbGRlcigpIHtcclxuICAgIGNvbnN0IHBsYWNlaG9sZGVyRWxlbWVudCA9IHRoaXMuc2VsZWN0RWxlbWVudC5jaGlsZHJlbignOmRpc2FibGVkJykuZmlyc3QoKTtcclxuXHJcbiAgICAvLyBpZiBwbGFjZWhvbGRlciBlbGVtZW50IGV4aXN0c1xyXG4gICAgaWYgKHBsYWNlaG9sZGVyRWxlbWVudC5sZW5ndGggPiAwKSB7XHJcblxyXG4gICAgICBpZiAodGhpcy5wbGFjZWhvbGRlcikge1xyXG4gICAgICAgIC8vIHVwZGF0ZSBleGlzdGluZyBwbGFjZWhvbGRlciBlbGVtZW50XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHBsYWNlaG9sZGVyRWxlbWVudCwgJ3RleHQnLCBbdGhpcy5wbGFjZWhvbGRlcl0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIHJlbW92ZSBleGlzdGluZyBwbGFjZWhvbGRlciBlbGVtZW50XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHBsYWNlaG9sZGVyRWxlbWVudCwgJ3JlbW92ZScpO1xyXG4gICAgICAgIC8vIEZvcmNlIHRyaWdnZXIgY2hhbmdlIGV2ZW50IHNpbmNlIGl0J3Mgbm90IHRyaWdnZXJlZCB3aGVuIHZhbHVlIGNoYW5nZSBwcm9ncmFtbWF0aWNhbGx5XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMuc2VsZWN0RWxlbWVudCwgJ2NoYW5nZScpO1xyXG4gICAgICAgIC8vIFJlcXVpcmVkIGlmIHdlIGRvbid0IHdhbnQgZXhjZXB0aW9uIFwiRXhwcmVzc2lvbiBoYXMgY2hhbmdlZCBhZnRlciBpdCB3YXMgY2hlY2tlZC5cIiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy82MDA1XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh0aGlzLnBsYWNlaG9sZGVyKSB7XHJcbiAgICAgICAgLy8gYWRkIHBsYWNlaG9sZGVyIGVsZW1lbnRcclxuICAgICAgICBjb25zdCBwbGFjZWhvbGRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0aGlzLnBsYWNlaG9sZGVyKTtcclxuICAgICAgICBjb25zdCBwbGFjZWhvbGRlck9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgIHBsYWNlaG9sZGVyT3B0aW9uLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICBwbGFjZWhvbGRlck9wdGlvbi52YWx1ZSA9IG51bGw7XHJcbiAgICAgICAgcGxhY2Vob2xkZXJPcHRpb24uYXBwZW5kQ2hpbGQocGxhY2Vob2xkZXJUZXh0KTtcclxuXHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMuc2VsZWN0RWxlbWVudCwgJ3ByZXBlbmQnLCBbcGxhY2Vob2xkZXJPcHRpb25dKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaW5pdE1hdGVyaWFsU2VsZWN0KCk7XHJcbiAgfVxyXG5cclxuICBsaXN0ZW5PcHRpb25DaGFuZ2VzKCkge1xyXG4gICAgY29uc3QgbXV0YXRpb25PYnNlcnZlckNvbmZpZ3VyYXRpb246IE11dGF0aW9uT2JzZXJ2ZXJJbml0ID0ge1xyXG4gICAgICBjaGlsZExpc3Q6IHRydWUsXHJcbiAgICAgIHN1YnRyZWU6IHRydWUsXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMubXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnM6IE11dGF0aW9uUmVjb3JkW10pID0+IHtcclxuICAgICAgdGhpcy51cGRhdGVNYXRlcmlhbFNlbGVjdCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyLm9ic2VydmUodGhpcy5zZWxlY3RFbGVtZW50WzBdLCBtdXRhdGlvbk9ic2VydmVyQ29uZmlndXJhdGlvbik7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVNYXRlcmlhbFNlbGVjdCgpIHtcclxuICAgIHRoaXMuaW5pdE1hdGVyaWFsU2VsZWN0KCk7XHJcblxyXG4gICAgaWYgKHRoaXMuZmlsbGVkSW4pIHtcclxuICAgICAgdGhpcy5pbml0RmlsbGVkSW4oKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmhhbmRsZURPTUV2ZW50cygpO1xyXG5cclxuICAgIC8vIHdhaXQgZm9yIG1hdGVyaWFsaXplIHNlbGVjdCB0byBiZSBpbml0aWFsaXplZFxyXG4gICAgLy8gLyFcXCByYWNlIGNvbmRpdGlvbiB3YXJuaW5nIC8hXFxcclxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy51cGRhdGUuZW1pdCgpKTtcclxuICB9XHJcbn1cclxuIl19