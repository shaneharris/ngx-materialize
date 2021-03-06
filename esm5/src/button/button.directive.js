/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, Input, Renderer, } from '@angular/core';
import { HandlePropChanges } from '../shared/index';
var MzButtonDirective = /** @class */ (function (_super) {
    tslib_1.__extends(MzButtonDirective, _super);
    function MzButtonDirective(elementRef, renderer) {
        var _this = _super.call(this) || this;
        _this.elementRef = elementRef;
        _this.renderer = renderer;
        return _this;
    }
    /**
     * @return {?}
     */
    MzButtonDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.initHandlers();
        this.initMaterialize();
        _super.prototype.executePropHandlers.call(this);
    };
    /**
     * @return {?}
     */
    MzButtonDirective.prototype.initHandlers = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.handlers = {
            disabled: function () { return _this.handleDisabled(); },
            flat: function () { return _this.handleFlat(); },
            float: function () { return _this.handleFloat(); },
            large: function () { return _this.handleLarge(); },
            noWaves: function () { return _this.handleNoWaves(); },
        };
    };
    /**
     * @return {?}
     */
    MzButtonDirective.prototype.initMaterialize = /**
     * @return {?}
     */
    function () {
        this.renderer.setElementClass(this.elementRef.nativeElement, 'btn', true);
    };
    /**
     * @return {?}
     */
    MzButtonDirective.prototype.handleDisabled = /**
     * @return {?}
     */
    function () {
        this.renderer.setElementClass(this.elementRef.nativeElement, 'disabled', this.disabled);
    };
    /**
     * @return {?}
     */
    MzButtonDirective.prototype.handleFlat = /**
     * @return {?}
     */
    function () {
        this.renderer.setElementClass(this.elementRef.nativeElement, 'btn', !this.flat);
        this.renderer.setElementClass(this.elementRef.nativeElement, 'btn-flat', this.flat);
    };
    /**
     * @return {?}
     */
    MzButtonDirective.prototype.handleFloat = /**
     * @return {?}
     */
    function () {
        this.renderer.setElementClass(this.elementRef.nativeElement, 'btn-floating', this.float);
    };
    /**
     * @return {?}
     */
    MzButtonDirective.prototype.handleLarge = /**
     * @return {?}
     */
    function () {
        this.renderer.setElementClass(this.elementRef.nativeElement, 'btn-large', this.large);
    };
    /**
     * @return {?}
     */
    MzButtonDirective.prototype.handleNoWaves = /**
     * @return {?}
     */
    function () {
        this.renderer.setElementClass(this.elementRef.nativeElement, 'waves-effect', !this.noWaves);
        if (!this.flat) {
            this.renderer.setElementClass(this.elementRef.nativeElement, 'waves-light', !this.noWaves);
        }
    };
    MzButtonDirective.decorators = [
        { type: Directive, args: [{
                    selector: "\n    a[mz-button],\n    a[mzButton],\n    button[mz-button],\n    button[mzButton]",
                },] },
    ];
    /** @nocollapse */
    MzButtonDirective.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: Renderer, },
    ]; };
    MzButtonDirective.propDecorators = {
        "disabled": [{ type: Input },],
        "flat": [{ type: Input },],
        "float": [{ type: Input },],
        "large": [{ type: Input },],
        "noWaves": [{ type: Input },],
    };
    return MzButtonDirective;
}(HandlePropChanges));
export { MzButtonDirective };
function MzButtonDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MzButtonDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MzButtonDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    MzButtonDirective.propDecorators;
    /** @type {?} */
    MzButtonDirective.prototype.disabled;
    /** @type {?} */
    MzButtonDirective.prototype.flat;
    /** @type {?} */
    MzButtonDirective.prototype.float;
    /** @type {?} */
    MzButtonDirective.prototype.large;
    /** @type {?} */
    MzButtonDirective.prototype.noWaves;
    /** @type {?} */
    MzButtonDirective.prototype.elementRef;
    /** @type {?} */
    MzButtonDirective.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXRlcmlhbGl6ZS8iLCJzb3VyY2VzIjpbInNyYy9idXR0b24vYnV0dG9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFFTCxRQUFRLEdBQ1gsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7O0lBU2IsNkNBQWlCO0lBT3RELDJCQUFvQixVQUFzQixFQUFVLFFBQWtCO1FBQXRFLFlBQ0UsaUJBQU8sU0FDUjtRQUZtQixnQkFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGNBQVEsR0FBUixRQUFRLENBQVU7O0tBRXJFOzs7O0lBRUQsb0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixpQkFBTSxtQkFBbUIsV0FBRSxDQUFDO0tBQzdCOzs7O0lBRUQsd0NBQVk7OztJQUFaO1FBQUEsaUJBUUM7UUFQQyxJQUFJLENBQUMsUUFBUSxHQUFHO1lBQ2QsUUFBUSxFQUFFLGNBQU0sT0FBQSxLQUFJLENBQUMsY0FBYyxFQUFFLEVBQXJCLENBQXFCO1lBQ3JDLElBQUksRUFBRSxjQUFNLE9BQUEsS0FBSSxDQUFDLFVBQVUsRUFBRSxFQUFqQixDQUFpQjtZQUM3QixLQUFLLEVBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxXQUFXLEVBQUUsRUFBbEIsQ0FBa0I7WUFDL0IsS0FBSyxFQUFFLGNBQU0sT0FBQSxLQUFJLENBQUMsV0FBVyxFQUFFLEVBQWxCLENBQWtCO1lBQy9CLE9BQU8sRUFBRSxjQUFNLE9BQUEsS0FBSSxDQUFDLGFBQWEsRUFBRSxFQUFwQixDQUFvQjtTQUNwQyxDQUFDO0tBQ0g7Ozs7SUFFRCwyQ0FBZTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDM0U7Ozs7SUFFRCwwQ0FBYzs7O0lBQWQ7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ3pGOzs7O0lBRUQsc0NBQVU7OztJQUFWO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hGLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDckY7Ozs7SUFFRCx1Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxjQUFjLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzFGOzs7O0lBRUQsdUNBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN2Rjs7OztJQUVELHlDQUFhOzs7SUFBYjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUU1RixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsYUFBYSxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzVGO0tBQ0Y7O2dCQTdERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFGQUlTO2lCQUNwQjs7OztnQkFkRyxVQUFVO2dCQUdWLFFBQVE7Ozs2QkFhVCxLQUFLO3lCQUNMLEtBQUs7MEJBQ0wsS0FBSzswQkFDTCxLQUFLOzRCQUNMLEtBQUs7OzRCQXRCUjtFQWlCdUMsaUJBQWlCO1NBQTNDLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBEaXJlY3RpdmUsXHJcbiAgICBFbGVtZW50UmVmLFxyXG4gICAgSW5wdXQsXHJcbiAgICBPbkluaXQsXHJcbiAgICBSZW5kZXJlcixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEhhbmRsZVByb3BDaGFuZ2VzIH0gZnJvbSAnLi4vc2hhcmVkL2luZGV4JztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBgXHJcbiAgICBhW216LWJ1dHRvbl0sXHJcbiAgICBhW216QnV0dG9uXSxcclxuICAgIGJ1dHRvblttei1idXR0b25dLFxyXG4gICAgYnV0dG9uW216QnV0dG9uXWAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNekJ1dHRvbkRpcmVjdGl2ZSBleHRlbmRzIEhhbmRsZVByb3BDaGFuZ2VzIGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBmbGF0OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGZsb2F0OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGxhcmdlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIG5vV2F2ZXM6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5pdEhhbmRsZXJzKCk7XHJcbiAgICB0aGlzLmluaXRNYXRlcmlhbGl6ZSgpO1xyXG4gICAgc3VwZXIuZXhlY3V0ZVByb3BIYW5kbGVycygpO1xyXG4gIH1cclxuXHJcbiAgaW5pdEhhbmRsZXJzKCkge1xyXG4gICAgdGhpcy5oYW5kbGVycyA9IHtcclxuICAgICAgZGlzYWJsZWQ6ICgpID0+IHRoaXMuaGFuZGxlRGlzYWJsZWQoKSxcclxuICAgICAgZmxhdDogKCkgPT4gdGhpcy5oYW5kbGVGbGF0KCksXHJcbiAgICAgIGZsb2F0OiAoKSA9PiB0aGlzLmhhbmRsZUZsb2F0KCksXHJcbiAgICAgIGxhcmdlOiAoKSA9PiB0aGlzLmhhbmRsZUxhcmdlKCksXHJcbiAgICAgIG5vV2F2ZXM6ICgpID0+IHRoaXMuaGFuZGxlTm9XYXZlcygpLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGluaXRNYXRlcmlhbGl6ZSgpIHtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYnRuJywgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVEaXNhYmxlZCgpIHtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnLCB0aGlzLmRpc2FibGVkKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUZsYXQoKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2J0bicsICF0aGlzLmZsYXQpO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdidG4tZmxhdCcsIHRoaXMuZmxhdCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVGbG9hdCgpIHtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYnRuLWZsb2F0aW5nJywgdGhpcy5mbG9hdCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVMYXJnZSgpIHtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYnRuLWxhcmdlJywgdGhpcy5sYXJnZSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVOb1dhdmVzKCkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd3YXZlcy1lZmZlY3QnLCAhdGhpcy5ub1dhdmVzKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuZmxhdCkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3dhdmVzLWxpZ2h0JywgIXRoaXMubm9XYXZlcyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==