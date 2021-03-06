/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, EventEmitter, forwardRef, Input, NgZone, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export class MzChipInputComponent {
    /**
     * @param {?} elementRef
     * @param {?} zone
     */
    constructor(elementRef, zone) {
        this.elementRef = elementRef;
        this.zone = zone;
        this.add = new EventEmitter();
        this.delete = new EventEmitter();
        this.select = new EventEmitter();
        this.onChangeCallback = (data) => { };
    }
    /**
     * @return {?}
     */
    get value() {
        return /** @type {?} */ (this.chipInputElement.material_chip('data'));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initElements();
        this.initMaterializeChip();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.chipInputElement.off('chip.add');
        this.chipInputElement.off('chip.delete');
        this.chipInputElement.off('chip.select');
    }
    /**
     * @return {?}
     */
    initElements() {
        this.chipInputElement = $(this.elementRef.nativeElement);
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    initMaterializeChip(value) {
        // fix issue autocomplete is not a function
        // https://github.com/Dogfalo/materialize/issues/4401
        this.zone.runOutsideAngular(() => {
            setTimeout(() => {
                this.chipInputElement.material_chip({
                    autocompleteOptions: this.autocompleteOptions,
                    data: value || this.value,
                    placeholder: this.placeholder,
                    secondaryPlaceholder: this.secondaryPlaceholder,
                });
            });
        });
        this.chipInputElement.on('chip.add', (event, chip) => {
            this.onChangeCallback(this.value);
            this.add.emit(chip);
        });
        this.chipInputElement.on('chip.delete', (event, chip) => {
            this.onChangeCallback(this.value);
            this.delete.emit(chip);
        });
        this.chipInputElement.on('chip.select', (event, chip) => {
            this.select.emit(chip);
        });
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) { }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) { }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (value && value !== this.value) {
            this.initMaterializeChip(value);
        }
    }
}
MzChipInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-chip-input',
                template: ``,
                styles: [`:host{display:block}`],
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => MzChipInputComponent),
                        multi: true,
                    },
                ],
            },] },
];
/** @nocollapse */
MzChipInputComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: NgZone, },
];
MzChipInputComponent.propDecorators = {
    "autocompleteOptions": [{ type: Input },],
    "placeholder": [{ type: Input },],
    "secondaryPlaceholder": [{ type: Input },],
    "add": [{ type: Output },],
    "delete": [{ type: Output },],
    "select": [{ type: Output },],
};
function MzChipInputComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MzChipInputComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MzChipInputComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    MzChipInputComponent.propDecorators;
    /** @type {?} */
    MzChipInputComponent.prototype.autocompleteOptions;
    /** @type {?} */
    MzChipInputComponent.prototype.placeholder;
    /** @type {?} */
    MzChipInputComponent.prototype.secondaryPlaceholder;
    /** @type {?} */
    MzChipInputComponent.prototype.add;
    /** @type {?} */
    MzChipInputComponent.prototype.delete;
    /** @type {?} */
    MzChipInputComponent.prototype.select;
    /** @type {?} */
    MzChipInputComponent.prototype.chipInputElement;
    /** @type {?} */
    MzChipInputComponent.prototype.onChangeCallback;
    /** @type {?} */
    MzChipInputComponent.prototype.elementRef;
    /** @type {?} */
    MzChipInputComponent.prototype.zone;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcC1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvIiwic291cmNlcyI6WyJzcmMvY2hpcC9jaGlwLWlucHV0L2NoaXAtaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQXFCLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxSCxPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFjekUsTUFBTTs7Ozs7SUFjSixZQUNVLFlBQ0E7UUFEQSxlQUFVLEdBQVYsVUFBVTtRQUNWLFNBQUksR0FBSixJQUFJO21CQVpFLElBQUksWUFBWSxFQUE4QjtzQkFDM0MsSUFBSSxZQUFZLEVBQThCO3NCQUM5QyxJQUFJLFlBQVksRUFBOEI7Z0NBeUV0QyxDQUFDLElBQWtDLEVBQUUsRUFBRSxJQUFHO0tBOURoRTs7OztJQVRMLElBQUksS0FBSztRQUNQLE1BQU0sbUJBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQWlDLEVBQUM7S0FDcEY7Ozs7SUFTRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0tBQzVCOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0tBQzFDOzs7O0lBRUQsWUFBWTtRQUNWLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztLQUMxRDs7Ozs7SUFFRCxtQkFBbUIsQ0FBQyxLQUFvQzs7O1FBR3RELElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFO1lBQy9CLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztvQkFDbEMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLG1CQUFtQjtvQkFDN0MsSUFBSSxFQUFFLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSztvQkFDekIsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO29CQUM3QixvQkFBb0IsRUFBRSxJQUFJLENBQUMsb0JBQW9CO2lCQUNoRCxDQUFDLENBQUM7YUFDSixDQUFDLENBQUM7U0FDSixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDLEtBQUssRUFBRSxJQUFnQyxFQUFFLEVBQUU7WUFDL0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNyQixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDLEtBQUssRUFBRSxJQUFnQyxFQUFFLEVBQUU7WUFDbEYsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN4QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDLEtBQUssRUFBRSxJQUFnQyxFQUFFLEVBQUU7WUFDbEYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDeEIsQ0FBQyxDQUFDO0tBQ0o7Ozs7O0lBSUQsZ0JBQWdCLENBQUMsRUFBTztRQUN0QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO0tBQzVCOzs7OztJQUVELGlCQUFpQixDQUFDLEVBQU8sS0FBSzs7Ozs7SUFFOUIsZ0JBQWdCLENBQUMsVUFBbUIsS0FBSzs7Ozs7SUFFekMsVUFBVSxDQUFDLEtBQW1DO1FBQzVDLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2pDO0tBQ0Y7OztZQXZGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFFBQVEsRUFBRSxFQUFFO2dCQUNaLE1BQU0sRUFBRSxDQUFDLHNCQUFzQixDQUFDO2dCQUNoQyxTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQzt3QkFDbkQsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0Y7YUFDRjs7OztZQWRtQixVQUFVO1lBQW1DLE1BQU07OztvQ0FnQnBFLEtBQUs7NEJBQ0wsS0FBSztxQ0FDTCxLQUFLO29CQUNMLE1BQU07dUJBQ04sTUFBTTt1QkFDTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIGZvcndhcmRSZWYsIElucHV0LCBOZ1pvbmUsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtei1jaGlwLWlucHV0JyxcclxuICB0ZW1wbGF0ZTogYGAsXHJcbiAgc3R5bGVzOiBbYDpob3N0e2Rpc3BsYXk6YmxvY2t9YF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBNekNoaXBJbnB1dENvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgfSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpDaGlwSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpIGF1dG9jb21wbGV0ZU9wdGlvbnM6IE1hdGVyaWFsaXplLkF1dG9Db21wbGV0ZU9wdGlvbnM7XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcclxuICBASW5wdXQoKSBzZWNvbmRhcnlQbGFjZWhvbGRlcjogc3RyaW5nO1xyXG4gIEBPdXRwdXQoKSBhZGQgPSBuZXcgRXZlbnRFbWl0dGVyPE1hdGVyaWFsaXplLkNoaXBEYXRhT2JqZWN0PigpO1xyXG4gIEBPdXRwdXQoKSBkZWxldGUgPSBuZXcgRXZlbnRFbWl0dGVyPE1hdGVyaWFsaXplLkNoaXBEYXRhT2JqZWN0PigpO1xyXG4gIEBPdXRwdXQoKSBzZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPE1hdGVyaWFsaXplLkNoaXBEYXRhT2JqZWN0PigpO1xyXG5cclxuICBnZXQgdmFsdWUoKTogTWF0ZXJpYWxpemUuQ2hpcERhdGFPYmplY3RbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5jaGlwSW5wdXRFbGVtZW50Lm1hdGVyaWFsX2NoaXAoJ2RhdGEnKSBhcyBNYXRlcmlhbGl6ZS5DaGlwRGF0YU9iamVjdFtdO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjaGlwSW5wdXRFbGVtZW50OiBKUXVlcnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluaXRFbGVtZW50cygpO1xyXG4gICAgdGhpcy5pbml0TWF0ZXJpYWxpemVDaGlwKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuY2hpcElucHV0RWxlbWVudC5vZmYoJ2NoaXAuYWRkJyk7XHJcbiAgICB0aGlzLmNoaXBJbnB1dEVsZW1lbnQub2ZmKCdjaGlwLmRlbGV0ZScpO1xyXG4gICAgdGhpcy5jaGlwSW5wdXRFbGVtZW50Lm9mZignY2hpcC5zZWxlY3QnKTtcclxuICB9XHJcblxyXG4gIGluaXRFbGVtZW50cygpIHtcclxuICAgIHRoaXMuY2hpcElucHV0RWxlbWVudCA9ICQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgaW5pdE1hdGVyaWFsaXplQ2hpcCh2YWx1ZT86IE1hdGVyaWFsaXplLkNoaXBEYXRhT2JqZWN0W10pIHtcclxuICAgIC8vIGZpeCBpc3N1ZSBhdXRvY29tcGxldGUgaXMgbm90IGEgZnVuY3Rpb25cclxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Eb2dmYWxvL21hdGVyaWFsaXplL2lzc3Vlcy80NDAxXHJcbiAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLmNoaXBJbnB1dEVsZW1lbnQubWF0ZXJpYWxfY2hpcCh7XHJcbiAgICAgICAgICBhdXRvY29tcGxldGVPcHRpb25zOiB0aGlzLmF1dG9jb21wbGV0ZU9wdGlvbnMsXHJcbiAgICAgICAgICBkYXRhOiB2YWx1ZSB8fCB0aGlzLnZhbHVlLFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IHRoaXMucGxhY2Vob2xkZXIsXHJcbiAgICAgICAgICBzZWNvbmRhcnlQbGFjZWhvbGRlcjogdGhpcy5zZWNvbmRhcnlQbGFjZWhvbGRlcixcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmNoaXBJbnB1dEVsZW1lbnQub24oJ2NoaXAuYWRkJywgKGV2ZW50LCBjaGlwOiBNYXRlcmlhbGl6ZS5DaGlwRGF0YU9iamVjdCkgPT4ge1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sodGhpcy52YWx1ZSk7XHJcbiAgICAgIHRoaXMuYWRkLmVtaXQoY2hpcCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuY2hpcElucHV0RWxlbWVudC5vbignY2hpcC5kZWxldGUnLCAoZXZlbnQsIGNoaXA6IE1hdGVyaWFsaXplLkNoaXBEYXRhT2JqZWN0KSA9PiB7XHJcbiAgICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayh0aGlzLnZhbHVlKTtcclxuICAgICAgdGhpcy5kZWxldGUuZW1pdChjaGlwKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5jaGlwSW5wdXRFbGVtZW50Lm9uKCdjaGlwLnNlbGVjdCcsIChldmVudCwgY2hpcDogTWF0ZXJpYWxpemUuQ2hpcERhdGFPYmplY3QpID0+IHtcclxuICAgICAgdGhpcy5zZWxlY3QuZW1pdChjaGlwKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8jcmVnaW9uIENvbnRyb2xWYWx1ZUFjY2Vzc29yXHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSkge1xyXG4gICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KSB7IH1cclxuXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKSB7IH1cclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogTWF0ZXJpYWxpemUuQ2hpcERhdGFPYmplY3RbXSkge1xyXG4gICAgaWYgKHZhbHVlICYmIHZhbHVlICE9PSB0aGlzLnZhbHVlKSB7XHJcbiAgICAgIHRoaXMuaW5pdE1hdGVyaWFsaXplQ2hpcCh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyNlbmRyZWdpb24gQ29udHJvbFZhbHVlQWNjZXNzb3JcclxuXHJcbiAgcHJpdmF0ZSBvbkNoYW5nZUNhbGxiYWNrID0gKGRhdGE6IE1hdGVyaWFsaXplLkNoaXBEYXRhT2JqZWN0W10pID0+IHt9O1xyXG59XHJcbiJdfQ==