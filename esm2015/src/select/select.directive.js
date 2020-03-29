/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectorRef, Directive, ElementRef, EventEmitter, Input, Output, Renderer, } from '@angular/core';
import { HandlePropChanges } from '../shared';
export class MzSelectDirective extends HandlePropChanges {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     */
    constructor(elementRef, changeDetectorRef, renderer) {
        super();
        this.elementRef = elementRef;
        this.changeDetectorRef = changeDetectorRef;
        this.renderer = renderer;
        this.update = new EventEmitter();
        this.suspend = false;
    }
    /**
     * @return {?}
     */
    get inputElement() {
        return this.selectElement.siblings('input.select-dropdown');
    }
    /**
     * @return {?}
     */
    ngOnInit() {
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
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.renderer.invokeElementMethod(this.selectElement, 'material_select', ['destroy']);
        this.selectElement.off();
        this.mutationObserver.disconnect();
    }
    /**
     * @return {?}
     */
    initHandlers() {
        this.handlers = {
            disabled: () => this.handleDisabled(),
            label: () => this.handleLabel(),
            placeholder: () => this.handlePlaceholder(),
        };
    }
    /**
     * @return {?}
     */
    initElements() {
        this.selectElement = $(this.elementRef.nativeElement);
        this.selectContainerElement = $(this.elementRef.nativeElement).parents('.input-field');
        this.labelElement = this.createLabelElement();
    }
    /**
     * Need to be done after material_select has been invoked or else the multi-select
     * options are not yet in the DOM as it loops on rendered options
     * @return {?}
     */
    initFilledIn() {
        this.checkboxElements = this.selectContainerElement.find(':checkbox');
        this.handlers['filledIn'] = () => this.handleFilledIn();
        this.handleFilledIn();
    }
    /**
     * @return {?}
     */
    initMaterialSelect() {
        this.renderer.invokeElementMethod(this.selectElement, 'material_select');
    }
    /**
     * Trigger the native change event from select element instead of the JQuery.
     * An issue on Github is open about this problem : https://github.com/Dogfalo/materialize/issues/2843
     * This method should be removed when this issue is revolved.
     * @return {?}
     */
    initOnChange() {
        this.selectElement.on('change', (event) => {
            if (!this.suspend) {
                this.suspend = true;
                const /** @type {?} */ customEvent = document.createEvent('CustomEvent');
                customEvent.initCustomEvent('change', true, false, event.target.value);
                this.renderer.invokeElementMethod(this.selectElement[0], 'dispatchEvent', [customEvent]);
            }
        });
        // Stop the propagation of change event
        this.selectElement[0].addEventListener('change', () => {
            this.suspend = false;
        });
    }
    /**
     * @return {?}
     */
    handleDOMEvents() {
        this.inputElement.on('blur focus', (event) => {
            const /** @type {?} */ customEvent = document.createEvent('CustomEvent');
            customEvent.initCustomEvent(event.type, true, false, event.target);
            this.selectElement[0].dispatchEvent(customEvent);
        });
    }
    /**
     * @return {?}
     */
    createLabelElement() {
        const /** @type {?} */ labelElement = document.createElement('label');
        labelElement.setAttribute('for', this.id);
        this.renderer.invokeElementMethod(this.selectElement, 'after', [labelElement]);
        return $(labelElement);
    }
    /**
     * @return {?}
     */
    handleProperties() {
        if (this.selectContainerElement.length === 0) {
            console.error('Select with mz-select directive must be place inside a [mz-select-container] tag', this.selectElement);
            return;
        }
        super.executePropHandlers();
    }
    /**
     * @return {?}
     */
    initSelectedOption() {
        const /** @type {?} */ firstOptionElement = this.selectElement.children().first();
        if (firstOptionElement.length > 0
            && this.selectElement.children('option[selected]').length === 0
            && !this.selectElement[0].hasAttribute('multiple')) {
            this.renderer.setElementAttribute(firstOptionElement[0], 'selected', '');
        }
    }
    /**
     * @return {?}
     */
    handleDisabled() {
        // when disabled is null/undefined that means the property has not been used on the element
        // but it might be set by another process (for example reactive form applies disabled attribute itself)
        // therefore we don't want to remove or add it here
        if (this.disabled != null) {
            this.renderer.setElementProperty(this.selectElement[0], 'disabled', !!this.disabled);
            this.updateMaterialSelect();
        }
    }
    /**
     * @return {?}
     */
    handleLabel() {
        if (this.label != null) {
            this.renderer.invokeElementMethod(this.labelElement, 'text', [this.label]);
        }
    }
    /**
     * @return {?}
     */
    handleFilledIn() {
        if (this.checkboxElements.length > 0) {
            this.checkboxElements.toArray().forEach(checkboxElement => {
                this.renderer.setElementClass(checkboxElement, 'filled-in', !!this.filledIn);
            });
        }
    }
    /**
     * @return {?}
     */
    handlePlaceholder() {
        const /** @type {?} */ placeholderElement = this.selectElement.children(':disabled').first();
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
                const /** @type {?} */ placeholderText = document.createTextNode(this.placeholder);
                const /** @type {?} */ placeholderOption = document.createElement('option');
                placeholderOption.disabled = true;
                placeholderOption.value = null;
                placeholderOption.appendChild(placeholderText);
                this.renderer.invokeElementMethod(this.selectElement, 'prepend', [placeholderOption]);
            }
        }
        this.initMaterialSelect();
    }
    /**
     * @return {?}
     */
    listenOptionChanges() {
        const /** @type {?} */ mutationObserverConfiguration = {
            childList: true,
            subtree: true,
        };
        this.mutationObserver = new MutationObserver((mutations) => {
            this.updateMaterialSelect();
        });
        this.mutationObserver.observe(this.selectElement[0], mutationObserverConfiguration);
    }
    /**
     * @return {?}
     */
    updateMaterialSelect() {
        this.initMaterialSelect();
        if (this.filledIn) {
            this.initFilledIn();
        }
        this.handleDOMEvents();
        // wait for materialize select to be initialized
        // /!\ race condition warning /!\
        setTimeout(() => this.update.emit());
    }
}
MzSelectDirective.decorators = [
    { type: Directive, args: [{
                selector: 'select[mzSelect], select[mz-select]',
            },] },
];
/** @nocollapse */
MzSelectDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: ChangeDetectorRef, },
    { type: Renderer, },
];
MzSelectDirective.propDecorators = {
    "id": [{ type: Input },],
    "disabled": [{ type: Input },],
    "placeholder": [{ type: Input },],
    "label": [{ type: Input },],
    "filledIn": [{ type: Input },],
    "update": [{ type: Output },],
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXRlcmlhbGl6ZS8iLCJzb3VyY2VzIjpbInNyYy9zZWxlY3Qvc2VsZWN0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNOLFFBQVEsR0FDVCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFLOUMsTUFBTSx3QkFBeUIsU0FBUSxpQkFBaUI7Ozs7OztJQXVCdEQsWUFDVSxZQUNELG1CQUNBO1FBRVAsS0FBSyxFQUFFLENBQUM7UUFKQSxlQUFVLEdBQVYsVUFBVTtRQUNYLHNCQUFpQixHQUFqQixpQkFBaUI7UUFDakIsYUFBUSxHQUFSLFFBQVE7c0JBakJFLElBQUksWUFBWSxFQUFFO3VCQVkzQixLQUFLO0tBUWQ7Ozs7SUFiRCxJQUFJLFlBQVk7UUFDZCxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsQ0FBQztLQUM3RDs7OztJQWFELFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQzs7UUFHeEIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7O1FBRzFCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDOztRQUcxQixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0tBQ3hCOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FB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RyxJQUFJLGdCQUFnQixDQUFDLENBQUMsU0FBMkIsRUFBRSxFQUFFO1lBQzNFLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1NBQzdCLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSw2QkFBNkIsQ0FBQyxDQUFDO0tBQ3JGOzs7O0lBRUQsb0JBQW9CO1FBQ2xCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBRTFCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQjtRQUVELElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQzs7O1FBSXZCLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7S0FDdEM7OztZQWxPRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFDQUFxQzthQUNoRDs7OztZQWJDLFVBQVU7WUFGVixpQkFBaUI7WUFRakIsUUFBUTs7O21CQVVQLEtBQUs7eUJBQ0wsS0FBSzs0QkFDTCxLQUFLO3NCQUdMLEtBQUs7eUJBQ0wsS0FBSzt1QkFDTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBEaXJlY3RpdmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgUmVuZGVyZXIsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBIYW5kbGVQcm9wQ2hhbmdlcyB9IGZyb20gJy4uL3NoYXJlZCc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ3NlbGVjdFttelNlbGVjdF0sIHNlbGVjdFttei1zZWxlY3RdJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16U2VsZWN0RGlyZWN0aXZlIGV4dGVuZHMgSGFuZGxlUHJvcENoYW5nZXMgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgLy8gbmF0aXZlIHByb3BlcnRpZXNcclxuICBASW5wdXQoKSBpZDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XHJcblxyXG4gIC8vIGRpcmVjdGl2ZSBwcm9wZXJ0aWVzXHJcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcclxuICBASW5wdXQoKSBmaWxsZWRJbjogYm9vbGVhbjtcclxuICBAT3V0cHV0KCkgdXBkYXRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBjaGVja2JveEVsZW1lbnRzOiBKUXVlcnk7XHJcbiAgbGFiZWxFbGVtZW50OiBKUXVlcnk7XHJcbiAgc2VsZWN0RWxlbWVudDogSlF1ZXJ5O1xyXG4gIHNlbGVjdENvbnRhaW5lckVsZW1lbnQ6IEpRdWVyeTtcclxuXHJcbiAgZ2V0IGlucHV0RWxlbWVudCgpOiBKUXVlcnkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0RWxlbWVudC5zaWJsaW5ncygnaW5wdXQuc2VsZWN0LWRyb3Bkb3duJyk7XHJcbiAgfVxyXG5cclxuICBtdXRhdGlvbk9ic2VydmVyOiBNdXRhdGlvbk9ic2VydmVyO1xyXG4gIHN1c3BlbmQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwdWJsaWMgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcixcclxuICApIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5pdEhhbmRsZXJzKCk7XHJcbiAgICB0aGlzLmluaXRFbGVtZW50cygpO1xyXG4gICAgdGhpcy5pbml0T25DaGFuZ2UoKTtcclxuICAgIHRoaXMuaGFuZGxlUHJvcGVydGllcygpO1xyXG5cclxuICAgIC8vIG11c3QgYmUgZG9uZSBhZnRlciBoYW5kbGVQbGFjZWhvbGRlclxyXG4gICAgdGhpcy5pbml0U2VsZWN0ZWRPcHRpb24oKTtcclxuXHJcbiAgICAvLyBtdXN0IGJlIGRvbmUgYWZ0ZXIgaGFuZGxlUHJvcGVydGllc1xyXG4gICAgdGhpcy5pbml0TWF0ZXJpYWxTZWxlY3QoKTtcclxuXHJcbiAgICAvLyBtdXN0IGJlIGRvbmUgYWZ0ZXIgaW5pdE1hdGVyaWFsU2VsZWN0XHJcbiAgICB0aGlzLmxpc3Rlbk9wdGlvbkNoYW5nZXMoKTtcclxuICAgIHRoaXMuaW5pdEZpbGxlZEluKCk7XHJcbiAgICB0aGlzLmhhbmRsZURPTUV2ZW50cygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QodGhpcy5zZWxlY3RFbGVtZW50LCAnbWF0ZXJpYWxfc2VsZWN0JywgWydkZXN0cm95J10pO1xyXG4gICAgdGhpcy5zZWxlY3RFbGVtZW50Lm9mZigpO1xyXG4gICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICB9XHJcblxyXG4gIGluaXRIYW5kbGVycygpIHtcclxuICAgIHRoaXMuaGFuZGxlcnMgPSB7XHJcbiAgICAgIGRpc2FibGVkOiAoKSA9PiB0aGlzLmhhbmRsZURpc2FibGVkKCksXHJcbiAgICAgIGxhYmVsOiAoKSA9PiB0aGlzLmhhbmRsZUxhYmVsKCksXHJcbiAgICAgIHBsYWNlaG9sZGVyOiAoKSA9PiB0aGlzLmhhbmRsZVBsYWNlaG9sZGVyKCksXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgaW5pdEVsZW1lbnRzKCkge1xyXG4gICAgdGhpcy5zZWxlY3RFbGVtZW50ID0gJCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XHJcbiAgICB0aGlzLnNlbGVjdENvbnRhaW5lckVsZW1lbnQgPSAkKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5wYXJlbnRzKCcuaW5wdXQtZmllbGQnKTtcclxuICAgIHRoaXMubGFiZWxFbGVtZW50ID0gdGhpcy5jcmVhdGVMYWJlbEVsZW1lbnQoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE5lZWQgdG8gYmUgZG9uZSBhZnRlciBtYXRlcmlhbF9zZWxlY3QgaGFzIGJlZW4gaW52b2tlZCBvciBlbHNlIHRoZSBtdWx0aS1zZWxlY3RcclxuICAgKiBvcHRpb25zIGFyZSBub3QgeWV0IGluIHRoZSBET00gYXMgaXQgbG9vcHMgb24gcmVuZGVyZWQgb3B0aW9uc1xyXG4gICAqL1xyXG4gIGluaXRGaWxsZWRJbigpIHtcclxuICAgIHRoaXMuY2hlY2tib3hFbGVtZW50cyA9IHRoaXMuc2VsZWN0Q29udGFpbmVyRWxlbWVudC5maW5kKCc6Y2hlY2tib3gnKTtcclxuICAgIHRoaXMuaGFuZGxlcnNbJ2ZpbGxlZEluJ10gPSAoKSA9PiB0aGlzLmhhbmRsZUZpbGxlZEluKCk7XHJcbiAgICB0aGlzLmhhbmRsZUZpbGxlZEluKCk7XHJcbiAgfVxyXG5cclxuICBpbml0TWF0ZXJpYWxTZWxlY3QoKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QodGhpcy5zZWxlY3RFbGVtZW50LCAnbWF0ZXJpYWxfc2VsZWN0Jyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUcmlnZ2VyIHRoZSBuYXRpdmUgY2hhbmdlIGV2ZW50IGZyb20gc2VsZWN0IGVsZW1lbnQgaW5zdGVhZCBvZiB0aGUgSlF1ZXJ5LlxyXG4gICAqIEFuIGlzc3VlIG9uIEdpdGh1YiBpcyBvcGVuIGFib3V0IHRoaXMgcHJvYmxlbSA6IGh0dHBzOi8vZ2l0aHViLmNvbS9Eb2dmYWxvL21hdGVyaWFsaXplL2lzc3Vlcy8yODQzXHJcbiAgICogVGhpcyBtZXRob2Qgc2hvdWxkIGJlIHJlbW92ZWQgd2hlbiB0aGlzIGlzc3VlIGlzIHJldm9sdmVkLlxyXG4gICAqL1xyXG4gIGluaXRPbkNoYW5nZSgpIHtcclxuICAgIHRoaXMuc2VsZWN0RWxlbWVudC5vbignY2hhbmdlJywgKGV2ZW50OiBhbnkpID0+IHtcclxuICAgICAgaWYgKCF0aGlzLnN1c3BlbmQpIHtcclxuICAgICAgICB0aGlzLnN1c3BlbmQgPSB0cnVlO1xyXG5cclxuICAgICAgICBjb25zdCBjdXN0b21FdmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xyXG4gICAgICAgIGN1c3RvbUV2ZW50LmluaXRDdXN0b21FdmVudCgnY2hhbmdlJywgdHJ1ZSwgZmFsc2UsIGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcblxyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLnNlbGVjdEVsZW1lbnRbMF0sICdkaXNwYXRjaEV2ZW50JywgW2N1c3RvbUV2ZW50XSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFN0b3AgdGhlIHByb3BhZ2F0aW9uIG9mIGNoYW5nZSBldmVudFxyXG4gICAgdGhpcy5zZWxlY3RFbGVtZW50WzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgdGhpcy5zdXNwZW5kID0gZmFsc2U7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZURPTUV2ZW50cygpIHtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50Lm9uKCdibHVyIGZvY3VzJywgKGV2ZW50OiBKUXVlcnkuRXZlbnQpID0+IHtcclxuICAgICAgY29uc3QgY3VzdG9tRXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcclxuICAgICAgY3VzdG9tRXZlbnQuaW5pdEN1c3RvbUV2ZW50KGV2ZW50LnR5cGUsIHRydWUsIGZhbHNlLCBldmVudC50YXJnZXQpO1xyXG4gICAgICB0aGlzLnNlbGVjdEVsZW1lbnRbMF0uZGlzcGF0Y2hFdmVudChjdXN0b21FdmVudCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUxhYmVsRWxlbWVudCgpIHtcclxuICAgIGNvbnN0IGxhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBsYWJlbEVsZW1lbnQuc2V0QXR0cmlidXRlKCdmb3InLCB0aGlzLmlkKTtcclxuXHJcbiAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QodGhpcy5zZWxlY3RFbGVtZW50LCAnYWZ0ZXInLCBbbGFiZWxFbGVtZW50XSk7XHJcblxyXG4gICAgcmV0dXJuICQobGFiZWxFbGVtZW50KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVByb3BlcnRpZXMoKSB7XHJcbiAgICBpZiAodGhpcy5zZWxlY3RDb250YWluZXJFbGVtZW50Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdTZWxlY3Qgd2l0aCBtei1zZWxlY3QgZGlyZWN0aXZlIG11c3QgYmUgcGxhY2UgaW5zaWRlIGEgW216LXNlbGVjdC1jb250YWluZXJdIHRhZycsIHRoaXMuc2VsZWN0RWxlbWVudCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHN1cGVyLmV4ZWN1dGVQcm9wSGFuZGxlcnMoKTtcclxuICB9XHJcblxyXG4gIGluaXRTZWxlY3RlZE9wdGlvbigpIHtcclxuICAgIGNvbnN0IGZpcnN0T3B0aW9uRWxlbWVudCA9IHRoaXMuc2VsZWN0RWxlbWVudC5jaGlsZHJlbigpLmZpcnN0KCk7XHJcbiAgICBpZiAoZmlyc3RPcHRpb25FbGVtZW50Lmxlbmd0aCA+IDBcclxuICAgICAgJiYgdGhpcy5zZWxlY3RFbGVtZW50LmNoaWxkcmVuKCdvcHRpb25bc2VsZWN0ZWRdJykubGVuZ3RoID09PSAwXHJcbiAgICAgICYmICF0aGlzLnNlbGVjdEVsZW1lbnRbMF0uaGFzQXR0cmlidXRlKCdtdWx0aXBsZScpXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50QXR0cmlidXRlKGZpcnN0T3B0aW9uRWxlbWVudFswXSwgJ3NlbGVjdGVkJywgJycpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlRGlzYWJsZWQoKSB7XHJcbiAgICAvLyB3aGVuIGRpc2FibGVkIGlzIG51bGwvdW5kZWZpbmVkIHRoYXQgbWVhbnMgdGhlIHByb3BlcnR5IGhhcyBub3QgYmVlbiB1c2VkIG9uIHRoZSBlbGVtZW50XHJcbiAgICAvLyBidXQgaXQgbWlnaHQgYmUgc2V0IGJ5IGFub3RoZXIgcHJvY2VzcyAoZm9yIGV4YW1wbGUgcmVhY3RpdmUgZm9ybSBhcHBsaWVzIGRpc2FibGVkIGF0dHJpYnV0ZSBpdHNlbGYpXHJcbiAgICAvLyB0aGVyZWZvcmUgd2UgZG9uJ3Qgd2FudCB0byByZW1vdmUgb3IgYWRkIGl0IGhlcmVcclxuICAgIGlmICh0aGlzLmRpc2FibGVkICE9IG51bGwpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50UHJvcGVydHkodGhpcy5zZWxlY3RFbGVtZW50WzBdLCAnZGlzYWJsZWQnLCAhIXRoaXMuZGlzYWJsZWQpO1xyXG4gICAgICB0aGlzLnVwZGF0ZU1hdGVyaWFsU2VsZWN0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVMYWJlbCgpIHtcclxuICAgIGlmICh0aGlzLmxhYmVsICE9IG51bGwpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMubGFiZWxFbGVtZW50LCAndGV4dCcsIFt0aGlzLmxhYmVsXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVGaWxsZWRJbigpIHtcclxuICAgIGlmICh0aGlzLmNoZWNrYm94RWxlbWVudHMubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLmNoZWNrYm94RWxlbWVudHMudG9BcnJheSgpLmZvckVhY2goY2hlY2tib3hFbGVtZW50ID0+IHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyhjaGVja2JveEVsZW1lbnQsICdmaWxsZWQtaW4nLCAhIXRoaXMuZmlsbGVkSW4pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZVBsYWNlaG9sZGVyKCkge1xyXG4gICAgY29uc3QgcGxhY2Vob2xkZXJFbGVtZW50ID0gdGhpcy5zZWxlY3RFbGVtZW50LmNoaWxkcmVuKCc6ZGlzYWJsZWQnKS5maXJzdCgpO1xyXG5cclxuICAgIC8vIGlmIHBsYWNlaG9sZGVyIGVsZW1lbnQgZXhpc3RzXHJcbiAgICBpZiAocGxhY2Vob2xkZXJFbGVtZW50Lmxlbmd0aCA+IDApIHtcclxuXHJcbiAgICAgIGlmICh0aGlzLnBsYWNlaG9sZGVyKSB7XHJcbiAgICAgICAgLy8gdXBkYXRlIGV4aXN0aW5nIHBsYWNlaG9sZGVyIGVsZW1lbnRcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QocGxhY2Vob2xkZXJFbGVtZW50LCAndGV4dCcsIFt0aGlzLnBsYWNlaG9sZGVyXSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gcmVtb3ZlIGV4aXN0aW5nIHBsYWNlaG9sZGVyIGVsZW1lbnRcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QocGxhY2Vob2xkZXJFbGVtZW50LCAncmVtb3ZlJyk7XHJcbiAgICAgICAgLy8gRm9yY2UgdHJpZ2dlciBjaGFuZ2UgZXZlbnQgc2luY2UgaXQncyBub3QgdHJpZ2dlcmVkIHdoZW4gdmFsdWUgY2hhbmdlIHByb2dyYW1tYXRpY2FsbHlcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QodGhpcy5zZWxlY3RFbGVtZW50LCAnY2hhbmdlJyk7XHJcbiAgICAgICAgLy8gUmVxdWlyZWQgaWYgd2UgZG9uJ3Qgd2FudCBleGNlcHRpb24gXCJFeHByZXNzaW9uIGhhcyBjaGFuZ2VkIGFmdGVyIGl0IHdhcyBjaGVja2VkLlwiIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzYwMDVcclxuICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRoaXMucGxhY2Vob2xkZXIpIHtcclxuICAgICAgICAvLyBhZGQgcGxhY2Vob2xkZXIgZWxlbWVudFxyXG4gICAgICAgIGNvbnN0IHBsYWNlaG9sZGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRoaXMucGxhY2Vob2xkZXIpO1xyXG4gICAgICAgIGNvbnN0IHBsYWNlaG9sZGVyT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgcGxhY2Vob2xkZXJPcHRpb24uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHBsYWNlaG9sZGVyT3B0aW9uLnZhbHVlID0gbnVsbDtcclxuICAgICAgICBwbGFjZWhvbGRlck9wdGlvbi5hcHBlbmRDaGlsZChwbGFjZWhvbGRlclRleHQpO1xyXG5cclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QodGhpcy5zZWxlY3RFbGVtZW50LCAncHJlcGVuZCcsIFtwbGFjZWhvbGRlck9wdGlvbl0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pbml0TWF0ZXJpYWxTZWxlY3QoKTtcclxuICB9XHJcblxyXG4gIGxpc3Rlbk9wdGlvbkNoYW5nZXMoKSB7XHJcbiAgICBjb25zdCBtdXRhdGlvbk9ic2VydmVyQ29uZmlndXJhdGlvbjogTXV0YXRpb25PYnNlcnZlckluaXQgPSB7XHJcbiAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcclxuICAgICAgc3VidHJlZTogdHJ1ZSxcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9uczogTXV0YXRpb25SZWNvcmRbXSkgPT4ge1xyXG4gICAgICB0aGlzLnVwZGF0ZU1hdGVyaWFsU2VsZWN0KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLnNlbGVjdEVsZW1lbnRbMF0sIG11dGF0aW9uT2JzZXJ2ZXJDb25maWd1cmF0aW9uKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZU1hdGVyaWFsU2VsZWN0KCkge1xyXG4gICAgdGhpcy5pbml0TWF0ZXJpYWxTZWxlY3QoKTtcclxuXHJcbiAgICBpZiAodGhpcy5maWxsZWRJbikge1xyXG4gICAgICB0aGlzLmluaXRGaWxsZWRJbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaGFuZGxlRE9NRXZlbnRzKCk7XHJcblxyXG4gICAgLy8gd2FpdCBmb3IgbWF0ZXJpYWxpemUgc2VsZWN0IHRvIGJlIGluaXRpYWxpemVkXHJcbiAgICAvLyAvIVxcIHJhY2UgY29uZGl0aW9uIHdhcm5pbmcgLyFcXFxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnVwZGF0ZS5lbWl0KCkpO1xyXG4gIH1cclxufVxyXG4iXX0=