/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, Input, Renderer, } from '@angular/core';
import { HandlePropChanges } from '../shared/index';
var MzIconDirective = /** @class */ (function (_super) {
    tslib_1.__extends(MzIconDirective, _super);
    function MzIconDirective(elementRef, renderer) {
        var _this = _super.call(this) || this;
        _this.elementRef = elementRef;
        _this.renderer = renderer;
        return _this;
    }
    /**
     * @return {?}
     */
    MzIconDirective.prototype.ngAfterViewInit = /**
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
    MzIconDirective.prototype.initHandlers = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.handlers = {
            align: function (previousValue) { return _this.handleAlign(previousValue); },
            icon: function () { return _this.handleIcon(); },
            size: function (previousValue) { return _this.handleSize(previousValue); },
        };
    };
    /**
     * @return {?}
     */
    MzIconDirective.prototype.initMaterialize = /**
     * @return {?}
     */
    function () {
        this.renderer.setElementClass(this.elementRef.nativeElement, 'material-icons', true);
    };
    /**
     * @param {?=} previousValue
     * @return {?}
     */
    MzIconDirective.prototype.handleAlign = /**
     * @param {?=} previousValue
     * @return {?}
     */
    function (previousValue) {
        if (previousValue) {
            this.renderer.setElementClass(this.elementRef.nativeElement, previousValue, false);
        }
        if (this.align) {
            this.renderer.setElementClass(this.elementRef.nativeElement, this.align, true);
        }
    };
    /**
     * @return {?}
     */
    MzIconDirective.prototype.handleIcon = /**
     * @return {?}
     */
    function () {
        this.renderer.setElementProperty(this.elementRef.nativeElement, 'innerHTML', this.icon);
    };
    /**
     * @param {?=} previousValue
     * @return {?}
     */
    MzIconDirective.prototype.handleSize = /**
     * @param {?=} previousValue
     * @return {?}
     */
    function (previousValue) {
        if (previousValue) {
            this.renderer.setElementClass(this.elementRef.nativeElement, previousValue, false);
        }
        if (this.size) {
            this.renderer.setElementClass(this.elementRef.nativeElement, this.size, true);
        }
    };
    MzIconDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'i[mz-icon], i[mzIcon]',
                },] },
    ];
    /** @nocollapse */
    MzIconDirective.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: Renderer, },
    ]; };
    MzIconDirective.propDecorators = {
        "align": [{ type: Input },],
        "icon": [{ type: Input },],
        "size": [{ type: Input },],
    };
    return MzIconDirective;
}(HandlePropChanges));
export { MzIconDirective };
function MzIconDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MzIconDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MzIconDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    MzIconDirective.propDecorators;
    /** @type {?} */
    MzIconDirective.prototype.align;
    /** @type {?} */
    MzIconDirective.prototype.icon;
    /** @type {?} */
    MzIconDirective.prototype.size;
    /** @type {?} */
    MzIconDirective.prototype.elementRef;
    /** @type {?} */
    MzIconDirective.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvIiwic291cmNlcyI6WyJzcmMvaWNvbi9pY29uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxRQUFRLEdBQ1QsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7O0lBS2YsMkNBQWlCO0lBS3BELHlCQUFvQixVQUFzQixFQUFVLFFBQWtCO1FBQXRFLFlBQ0UsaUJBQU8sU0FDUjtRQUZtQixnQkFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGNBQVEsR0FBUixRQUFRLENBQVU7O0tBRXJFOzs7O0lBRUQseUNBQWU7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixpQkFBTSxtQkFBbUIsV0FBRSxDQUFDO0tBQzdCOzs7O0lBRUQsc0NBQVk7OztJQUFaO1FBQUEsaUJBTUM7UUFMQyxJQUFJLENBQUMsUUFBUSxHQUFHO1lBQ2QsS0FBSyxFQUFFLFVBQUMsYUFBYSxJQUFLLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsRUFBL0IsQ0FBK0I7WUFDekQsSUFBSSxFQUFFLGNBQU0sT0FBQSxLQUFJLENBQUMsVUFBVSxFQUFFLEVBQWpCLENBQWlCO1lBQzdCLElBQUksRUFBRSxVQUFDLGFBQWEsSUFBSyxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEVBQTlCLENBQThCO1NBQ3hELENBQUM7S0FDSDs7OztJQUVELHlDQUFlOzs7SUFBZjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO0tBQ3RGOzs7OztJQUVELHFDQUFXOzs7O0lBQVgsVUFBWSxhQUFzQjtRQUNoQyxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNwRjtRQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNoRjtLQUNGOzs7O0lBRUQsb0NBQVU7OztJQUFWO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3pGOzs7OztJQUVELG9DQUFVOzs7O0lBQVYsVUFBVyxhQUFzQjtRQUMvQixFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNwRjtRQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztTQUMvRTtLQUNGOztnQkFsREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7aUJBQ2xDOzs7O2dCQVRDLFVBQVU7Z0JBRVYsUUFBUTs7OzBCQVNQLEtBQUs7eUJBQ0wsS0FBSzt5QkFDTCxLQUFLOzswQkFoQlI7RUFhcUMsaUJBQWlCO1NBQXpDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgRGlyZWN0aXZlLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgUmVuZGVyZXIsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBIYW5kbGVQcm9wQ2hhbmdlcyB9IGZyb20gJy4uL3NoYXJlZC9pbmRleCc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ2lbbXotaWNvbl0sIGlbbXpJY29uXScsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNekljb25EaXJlY3RpdmUgZXh0ZW5kcyBIYW5kbGVQcm9wQ2hhbmdlcyBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG4gIEBJbnB1dCgpIGFsaWduOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHNpemU6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcikge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMuaW5pdEhhbmRsZXJzKCk7XHJcbiAgICB0aGlzLmluaXRNYXRlcmlhbGl6ZSgpO1xyXG4gICAgc3VwZXIuZXhlY3V0ZVByb3BIYW5kbGVycygpO1xyXG4gIH1cclxuXHJcbiAgaW5pdEhhbmRsZXJzKCkge1xyXG4gICAgdGhpcy5oYW5kbGVycyA9IHtcclxuICAgICAgYWxpZ246IChwcmV2aW91c1ZhbHVlKSA9PiB0aGlzLmhhbmRsZUFsaWduKHByZXZpb3VzVmFsdWUpLFxyXG4gICAgICBpY29uOiAoKSA9PiB0aGlzLmhhbmRsZUljb24oKSxcclxuICAgICAgc2l6ZTogKHByZXZpb3VzVmFsdWUpID0+IHRoaXMuaGFuZGxlU2l6ZShwcmV2aW91c1ZhbHVlKSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBpbml0TWF0ZXJpYWxpemUoKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21hdGVyaWFsLWljb25zJywgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVBbGlnbihwcmV2aW91c1ZhbHVlPzogc3RyaW5nKSB7XHJcbiAgICBpZiAocHJldmlvdXNWYWx1ZSkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgcHJldmlvdXNWYWx1ZSwgZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuYWxpZ24pIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuYWxpZ24sIHRydWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlSWNvbigpIHtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudFByb3BlcnR5KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnaW5uZXJIVE1MJywgdGhpcy5pY29uKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVNpemUocHJldmlvdXNWYWx1ZT86IHN0cmluZykge1xyXG4gICAgaWYgKHByZXZpb3VzVmFsdWUpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHByZXZpb3VzVmFsdWUsIGZhbHNlKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNpemUpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuc2l6ZSwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==