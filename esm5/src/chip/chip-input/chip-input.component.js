/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, EventEmitter, forwardRef, Input, NgZone, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
var MzChipInputComponent = /** @class */ (function () {
    function MzChipInputComponent(elementRef, zone) {
        this.elementRef = elementRef;
        this.zone = zone;
        this.add = new EventEmitter();
        this.delete = new EventEmitter();
        this.select = new EventEmitter();
        this.onChangeCallback = function (data) { };
    }
    Object.defineProperty(MzChipInputComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return /** @type {?} */ (this.chipInputElement.material_chip('data'));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MzChipInputComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.initElements();
        this.initMaterializeChip();
    };
    /**
     * @return {?}
     */
    MzChipInputComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.chipInputElement.off('chip.add');
        this.chipInputElement.off('chip.delete');
        this.chipInputElement.off('chip.select');
    };
    /**
     * @return {?}
     */
    MzChipInputComponent.prototype.initElements = /**
     * @return {?}
     */
    function () {
        this.chipInputElement = $(this.elementRef.nativeElement);
    };
    /**
     * @param {?=} value
     * @return {?}
     */
    MzChipInputComponent.prototype.initMaterializeChip = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        // fix issue autocomplete is not a function
        // https://github.com/Dogfalo/materialize/issues/4401
        this.zone.runOutsideAngular(function () {
            setTimeout(function () {
                _this.chipInputElement.material_chip({
                    autocompleteOptions: _this.autocompleteOptions,
                    data: value || _this.value,
                    placeholder: _this.placeholder,
                    secondaryPlaceholder: _this.secondaryPlaceholder,
                });
            });
        });
        this.chipInputElement.on('chip.add', function (event, chip) {
            _this.onChangeCallback(_this.value);
            _this.add.emit(chip);
        });
        this.chipInputElement.on('chip.delete', function (event, chip) {
            _this.onChangeCallback(_this.value);
            _this.delete.emit(chip);
        });
        this.chipInputElement.on('chip.select', function (event, chip) {
            _this.select.emit(chip);
        });
    };
    //#region ControlValueAccessor
    /**
     * @param {?} fn
     * @return {?}
     */
    MzChipInputComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChangeCallback = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    MzChipInputComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) { };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    MzChipInputComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) { };
    /**
     * @param {?} value
     * @return {?}
     */
    MzChipInputComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value && value !== this.value) {
            this.initMaterializeChip(value);
        }
    };
    MzChipInputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mz-chip-input',
                    template: "",
                    styles: [":host{display:block}"],
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return MzChipInputComponent; }),
                            multi: true,
                        },
                    ],
                },] },
    ];
    /** @nocollapse */
    MzChipInputComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: NgZone, },
    ]; };
    MzChipInputComponent.propDecorators = {
        "autocompleteOptions": [{ type: Input },],
        "placeholder": [{ type: Input },],
        "secondaryPlaceholder": [{ type: Input },],
        "add": [{ type: Output },],
        "delete": [{ type: Output },],
        "select": [{ type: Output },],
    };
    return MzChipInputComponent;
}());
export { MzChipInputComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcC1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvIiwic291cmNlcyI6WyJzcmMvY2hpcC9jaGlwLWlucHV0L2NoaXAtaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQXFCLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxSCxPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0lBNEJ2RSw4QkFDVSxZQUNBO1FBREEsZUFBVSxHQUFWLFVBQVU7UUFDVixTQUFJLEdBQUosSUFBSTttQkFaRSxJQUFJLFlBQVksRUFBOEI7c0JBQzNDLElBQUksWUFBWSxFQUE4QjtzQkFDOUMsSUFBSSxZQUFZLEVBQThCO2dDQXlFdEMsVUFBQyxJQUFrQyxLQUFPO0tBOURoRTtJQVRMLHNCQUFJLHVDQUFLOzs7O1FBQVQ7WUFDRSxNQUFNLG1CQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFpQyxFQUFDO1NBQ3BGOzs7T0FBQTs7OztJQVNELHVDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztLQUM1Qjs7OztJQUVELDBDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0tBQzFDOzs7O0lBRUQsMkNBQVk7OztJQUFaO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0tBQzFEOzs7OztJQUVELGtEQUFtQjs7OztJQUFuQixVQUFvQixLQUFvQztRQUF4RCxpQkF5QkM7OztRQXRCQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1lBQzFCLFVBQVUsQ0FBQztnQkFDVCxLQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDO29CQUNsQyxtQkFBbUIsRUFBRSxLQUFJLENBQUMsbUJBQW1CO29CQUM3QyxJQUFJLEVBQUUsS0FBSyxJQUFJLEtBQUksQ0FBQyxLQUFLO29CQUN6QixXQUFXLEVBQUUsS0FBSSxDQUFDLFdBQVc7b0JBQzdCLG9CQUFvQixFQUFFLEtBQUksQ0FBQyxvQkFBb0I7aUJBQ2hELENBQUMsQ0FBQzthQUNKLENBQUMsQ0FBQztTQUNKLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLFVBQUMsS0FBSyxFQUFFLElBQWdDO1lBQzNFLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbEMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDckIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsVUFBQyxLQUFLLEVBQUUsSUFBZ0M7WUFDOUUsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNsQyxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN4QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxVQUFDLEtBQUssRUFBRSxJQUFnQztZQUM5RSxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN4QixDQUFDLENBQUM7S0FDSjtJQUVELDhCQUE4Qjs7Ozs7SUFFOUIsK0NBQWdCOzs7O0lBQWhCLFVBQWlCLEVBQU87UUFDdEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztLQUM1Qjs7Ozs7SUFFRCxnREFBaUI7Ozs7SUFBakIsVUFBa0IsRUFBTyxLQUFLOzs7OztJQUU5QiwrQ0FBZ0I7Ozs7SUFBaEIsVUFBaUIsVUFBbUIsS0FBSzs7Ozs7SUFFekMseUNBQVU7Ozs7SUFBVixVQUFXLEtBQW1DO1FBQzVDLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2pDO0tBQ0Y7O2dCQXZGRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFFBQVEsRUFBRSxFQUFFO29CQUNaLE1BQU0sRUFBRSxDQUFDLHNCQUFzQixDQUFDO29CQUNoQyxTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsb0JBQW9CLEVBQXBCLENBQW9CLENBQUM7NEJBQ25ELEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGO2lCQUNGOzs7O2dCQWRtQixVQUFVO2dCQUFtQyxNQUFNOzs7d0NBZ0JwRSxLQUFLO2dDQUNMLEtBQUs7eUNBQ0wsS0FBSzt3QkFDTCxNQUFNOzJCQUNOLE1BQU07MkJBQ04sTUFBTTs7K0JBckJUOztTQWVhLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBJbnB1dCwgTmdab25lLCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXotY2hpcC1pbnB1dCcsXHJcbiAgdGVtcGxhdGU6IGBgLFxyXG4gIHN0eWxlczogW2A6aG9zdHtkaXNwbGF5OmJsb2NrfWBdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTXpDaGlwSW5wdXRDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16Q2hpcElucHV0Q29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSBhdXRvY29tcGxldGVPcHRpb25zOiBNYXRlcmlhbGl6ZS5BdXRvQ29tcGxldGVPcHRpb25zO1xyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgc2Vjb25kYXJ5UGxhY2Vob2xkZXI6IHN0cmluZztcclxuICBAT3V0cHV0KCkgYWRkID0gbmV3IEV2ZW50RW1pdHRlcjxNYXRlcmlhbGl6ZS5DaGlwRGF0YU9iamVjdD4oKTtcclxuICBAT3V0cHV0KCkgZGVsZXRlID0gbmV3IEV2ZW50RW1pdHRlcjxNYXRlcmlhbGl6ZS5DaGlwRGF0YU9iamVjdD4oKTtcclxuICBAT3V0cHV0KCkgc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxNYXRlcmlhbGl6ZS5DaGlwRGF0YU9iamVjdD4oKTtcclxuXHJcbiAgZ2V0IHZhbHVlKCk6IE1hdGVyaWFsaXplLkNoaXBEYXRhT2JqZWN0W10ge1xyXG4gICAgcmV0dXJuIHRoaXMuY2hpcElucHV0RWxlbWVudC5tYXRlcmlhbF9jaGlwKCdkYXRhJykgYXMgTWF0ZXJpYWxpemUuQ2hpcERhdGFPYmplY3RbXTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hpcElucHV0RWxlbWVudDogSlF1ZXJ5O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgem9uZTogTmdab25lLFxyXG4gICkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbml0RWxlbWVudHMoKTtcclxuICAgIHRoaXMuaW5pdE1hdGVyaWFsaXplQ2hpcCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmNoaXBJbnB1dEVsZW1lbnQub2ZmKCdjaGlwLmFkZCcpO1xyXG4gICAgdGhpcy5jaGlwSW5wdXRFbGVtZW50Lm9mZignY2hpcC5kZWxldGUnKTtcclxuICAgIHRoaXMuY2hpcElucHV0RWxlbWVudC5vZmYoJ2NoaXAuc2VsZWN0Jyk7XHJcbiAgfVxyXG5cclxuICBpbml0RWxlbWVudHMoKSB7XHJcbiAgICB0aGlzLmNoaXBJbnB1dEVsZW1lbnQgPSAkKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcclxuICB9XHJcblxyXG4gIGluaXRNYXRlcmlhbGl6ZUNoaXAodmFsdWU/OiBNYXRlcmlhbGl6ZS5DaGlwRGF0YU9iamVjdFtdKSB7XHJcbiAgICAvLyBmaXggaXNzdWUgYXV0b2NvbXBsZXRlIGlzIG5vdCBhIGZ1bmN0aW9uXHJcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vRG9nZmFsby9tYXRlcmlhbGl6ZS9pc3N1ZXMvNDQwMVxyXG4gICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jaGlwSW5wdXRFbGVtZW50Lm1hdGVyaWFsX2NoaXAoe1xyXG4gICAgICAgICAgYXV0b2NvbXBsZXRlT3B0aW9uczogdGhpcy5hdXRvY29tcGxldGVPcHRpb25zLFxyXG4gICAgICAgICAgZGF0YTogdmFsdWUgfHwgdGhpcy52YWx1ZSxcclxuICAgICAgICAgIHBsYWNlaG9sZGVyOiB0aGlzLnBsYWNlaG9sZGVyLFxyXG4gICAgICAgICAgc2Vjb25kYXJ5UGxhY2Vob2xkZXI6IHRoaXMuc2Vjb25kYXJ5UGxhY2Vob2xkZXIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5jaGlwSW5wdXRFbGVtZW50Lm9uKCdjaGlwLmFkZCcsIChldmVudCwgY2hpcDogTWF0ZXJpYWxpemUuQ2hpcERhdGFPYmplY3QpID0+IHtcclxuICAgICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrKHRoaXMudmFsdWUpO1xyXG4gICAgICB0aGlzLmFkZC5lbWl0KGNoaXApO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmNoaXBJbnB1dEVsZW1lbnQub24oJ2NoaXAuZGVsZXRlJywgKGV2ZW50LCBjaGlwOiBNYXRlcmlhbGl6ZS5DaGlwRGF0YU9iamVjdCkgPT4ge1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sodGhpcy52YWx1ZSk7XHJcbiAgICAgIHRoaXMuZGVsZXRlLmVtaXQoY2hpcCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuY2hpcElucHV0RWxlbWVudC5vbignY2hpcC5zZWxlY3QnLCAoZXZlbnQsIGNoaXA6IE1hdGVyaWFsaXplLkNoaXBEYXRhT2JqZWN0KSA9PiB7XHJcbiAgICAgIHRoaXMuc2VsZWN0LmVtaXQoY2hpcCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vI3JlZ2lvbiBDb250cm9sVmFsdWVBY2Nlc3NvclxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpIHtcclxuICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSkgeyB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbikgeyB9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IE1hdGVyaWFsaXplLkNoaXBEYXRhT2JqZWN0W10pIHtcclxuICAgIGlmICh2YWx1ZSAmJiB2YWx1ZSAhPT0gdGhpcy52YWx1ZSkge1xyXG4gICAgICB0aGlzLmluaXRNYXRlcmlhbGl6ZUNoaXAodmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8jZW5kcmVnaW9uIENvbnRyb2xWYWx1ZUFjY2Vzc29yXHJcblxyXG4gIHByaXZhdGUgb25DaGFuZ2VDYWxsYmFjayA9IChkYXRhOiBNYXRlcmlhbGl6ZS5DaGlwRGF0YU9iamVjdFtdKSA9PiB7fTtcclxufVxyXG4iXX0=