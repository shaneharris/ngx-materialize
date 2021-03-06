/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, Input, Renderer, } from '@angular/core';
import { HandlePropChanges } from '../shared/index';
export class MzButtonDirective extends HandlePropChanges {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
        super();
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initHandlers();
        this.initMaterialize();
        super.executePropHandlers();
    }
    /**
     * @return {?}
     */
    initHandlers() {
        this.handlers = {
            disabled: () => this.handleDisabled(),
            flat: () => this.handleFlat(),
            float: () => this.handleFloat(),
            large: () => this.handleLarge(),
            noWaves: () => this.handleNoWaves(),
        };
    }
    /**
     * @return {?}
     */
    initMaterialize() {
        this.renderer.setElementClass(this.elementRef.nativeElement, 'btn', true);
    }
    /**
     * @return {?}
     */
    handleDisabled() {
        this.renderer.setElementClass(this.elementRef.nativeElement, 'disabled', this.disabled);
    }
    /**
     * @return {?}
     */
    handleFlat() {
        this.renderer.setElementClass(this.elementRef.nativeElement, 'btn', !this.flat);
        this.renderer.setElementClass(this.elementRef.nativeElement, 'btn-flat', this.flat);
    }
    /**
     * @return {?}
     */
    handleFloat() {
        this.renderer.setElementClass(this.elementRef.nativeElement, 'btn-floating', this.float);
    }
    /**
     * @return {?}
     */
    handleLarge() {
        this.renderer.setElementClass(this.elementRef.nativeElement, 'btn-large', this.large);
    }
    /**
     * @return {?}
     */
    handleNoWaves() {
        this.renderer.setElementClass(this.elementRef.nativeElement, 'waves-effect', !this.noWaves);
        if (!this.flat) {
            this.renderer.setElementClass(this.elementRef.nativeElement, 'waves-light', !this.noWaves);
        }
    }
}
MzButtonDirective.decorators = [
    { type: Directive, args: [{
                selector: `
    a[mz-button],
    a[mzButton],
    button[mz-button],
    button[mzButton]`,
            },] },
];
/** @nocollapse */
MzButtonDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer, },
];
MzButtonDirective.propDecorators = {
    "disabled": [{ type: Input },],
    "flat": [{ type: Input },],
    "float": [{ type: Input },],
    "large": [{ type: Input },],
    "noWaves": [{ type: Input },],
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXRlcmlhbGl6ZS8iLCJzb3VyY2VzIjpbInNyYy9idXR0b24vYnV0dG9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNILFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUVMLFFBQVEsR0FDWCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQVNwRCxNQUFNLHdCQUF5QixTQUFRLGlCQUFpQjs7Ozs7SUFPdEQsWUFBb0IsVUFBc0IsRUFBVSxRQUFrQjtRQUNwRSxLQUFLLEVBQUUsQ0FBQztRQURVLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFVO0tBRXJFOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsS0FBSyxDQUFDLG1CQUFtQixFQUFFLENBQUM7S0FDN0I7Ozs7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLFFBQVEsR0FBRztZQUNkLFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3JDLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQzdCLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQy9CLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQy9CLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO1NBQ3BDLENBQUM7S0FDSDs7OztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDM0U7Ozs7SUFFRCxjQUFjO1FBQ1osSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUN6Rjs7OztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNyRjs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxjQUFjLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzFGOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDdkY7Ozs7SUFFRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTVGLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDZixJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxhQUFhLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDNUY7S0FDRjs7O1lBN0RGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUU7Ozs7cUJBSVM7YUFDcEI7Ozs7WUFkRyxVQUFVO1lBR1YsUUFBUTs7O3lCQWFULEtBQUs7cUJBQ0wsS0FBSztzQkFDTCxLQUFLO3NCQUNMLEtBQUs7d0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBEaXJlY3RpdmUsXHJcbiAgICBFbGVtZW50UmVmLFxyXG4gICAgSW5wdXQsXHJcbiAgICBPbkluaXQsXHJcbiAgICBSZW5kZXJlcixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEhhbmRsZVByb3BDaGFuZ2VzIH0gZnJvbSAnLi4vc2hhcmVkL2luZGV4JztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBgXHJcbiAgICBhW216LWJ1dHRvbl0sXHJcbiAgICBhW216QnV0dG9uXSxcclxuICAgIGJ1dHRvblttei1idXR0b25dLFxyXG4gICAgYnV0dG9uW216QnV0dG9uXWAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNekJ1dHRvbkRpcmVjdGl2ZSBleHRlbmRzIEhhbmRsZVByb3BDaGFuZ2VzIGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBmbGF0OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGZsb2F0OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGxhcmdlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIG5vV2F2ZXM6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5pdEhhbmRsZXJzKCk7XHJcbiAgICB0aGlzLmluaXRNYXRlcmlhbGl6ZSgpO1xyXG4gICAgc3VwZXIuZXhlY3V0ZVByb3BIYW5kbGVycygpO1xyXG4gIH1cclxuXHJcbiAgaW5pdEhhbmRsZXJzKCkge1xyXG4gICAgdGhpcy5oYW5kbGVycyA9IHtcclxuICAgICAgZGlzYWJsZWQ6ICgpID0+IHRoaXMuaGFuZGxlRGlzYWJsZWQoKSxcclxuICAgICAgZmxhdDogKCkgPT4gdGhpcy5oYW5kbGVGbGF0KCksXHJcbiAgICAgIGZsb2F0OiAoKSA9PiB0aGlzLmhhbmRsZUZsb2F0KCksXHJcbiAgICAgIGxhcmdlOiAoKSA9PiB0aGlzLmhhbmRsZUxhcmdlKCksXHJcbiAgICAgIG5vV2F2ZXM6ICgpID0+IHRoaXMuaGFuZGxlTm9XYXZlcygpLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGluaXRNYXRlcmlhbGl6ZSgpIHtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYnRuJywgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVEaXNhYmxlZCgpIHtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnLCB0aGlzLmRpc2FibGVkKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUZsYXQoKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2J0bicsICF0aGlzLmZsYXQpO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdidG4tZmxhdCcsIHRoaXMuZmxhdCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVGbG9hdCgpIHtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYnRuLWZsb2F0aW5nJywgdGhpcy5mbG9hdCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVMYXJnZSgpIHtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYnRuLWxhcmdlJywgdGhpcy5sYXJnZSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVOb1dhdmVzKCkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd3YXZlcy1lZmZlY3QnLCAhdGhpcy5ub1dhdmVzKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuZmxhdCkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3dhdmVzLWxpZ2h0JywgIXRoaXMubm9XYXZlcyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==