/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, Input, Renderer, } from '@angular/core';
import { HandlePropChanges } from '../shared/index';
var MzIconMdiDirective = /** @class */ (function (_super) {
    tslib_1.__extends(MzIconMdiDirective, _super);
    function MzIconMdiDirective(elementRef, renderer) {
        var _this = _super.call(this) || this;
        _this.elementRef = elementRef;
        _this.renderer = renderer;
        return _this;
    }
    /**
     * @return {?}
     */
    MzIconMdiDirective.prototype.ngAfterViewInit = /**
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
    MzIconMdiDirective.prototype.initHandlers = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.handlers = {
            align: function (previousValue) { return _this.handleAlign(previousValue); },
            flip: function (previousValue) { return _this.handleFlip(previousValue); },
            icon: function (previousValue) { return _this.handleIcon(previousValue); },
            rotate: function (previousValue) { return _this.handleRotate(previousValue); },
            size: function (previousValue) { return _this.handleSize(previousValue); },
        };
    };
    /**
     * @return {?}
     */
    MzIconMdiDirective.prototype.initMaterialize = /**
     * @return {?}
     */
    function () {
        this.renderer.setElementClass(this.elementRef.nativeElement, 'mdi', true);
    };
    /**
     * @param {?=} previousValue
     * @return {?}
     */
    MzIconMdiDirective.prototype.handleAlign = /**
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
     * @param {?=} previousValue
     * @return {?}
     */
    MzIconMdiDirective.prototype.handleFlip = /**
     * @param {?=} previousValue
     * @return {?}
     */
    function (previousValue) {
        if (previousValue) {
            this.renderer.setElementClass(this.elementRef.nativeElement, 'mdi-flip-' + previousValue, false);
        }
        this.renderer.setElementClass(this.elementRef.nativeElement, 'mdi-flip-' + this.flip, !!this.flip);
    };
    /**
     * @param {?=} previousValue
     * @return {?}
     */
    MzIconMdiDirective.prototype.handleIcon = /**
     * @param {?=} previousValue
     * @return {?}
     */
    function (previousValue) {
        if (previousValue) {
            this.renderer.setElementClass(this.elementRef.nativeElement, 'mdi-' + previousValue, false);
        }
        this.renderer.setElementClass(this.elementRef.nativeElement, 'mdi-' + this.icon, true);
    };
    /**
     * @param {?=} previousValue
     * @return {?}
     */
    MzIconMdiDirective.prototype.handleRotate = /**
     * @param {?=} previousValue
     * @return {?}
     */
    function (previousValue) {
        if (previousValue) {
            this.renderer.setElementClass(this.elementRef.nativeElement, 'mdi-rotate-' + previousValue, false);
        }
        this.renderer.setElementClass(this.elementRef.nativeElement, 'mdi-rotate-' + this.rotate, !!this.rotate);
    };
    /**
     * @param {?=} previousValue
     * @return {?}
     */
    MzIconMdiDirective.prototype.handleSize = /**
     * @param {?=} previousValue
     * @return {?}
     */
    function (previousValue) {
        if (!this.size) {
            this.size = '24px';
        }
        if (previousValue) {
            this.renderer.setElementClass(this.elementRef.nativeElement, 'mdi-' + previousValue, false);
        }
        this.renderer.setElementClass(this.elementRef.nativeElement, 'mdi-' + this.size, true);
    };
    MzIconMdiDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'a[mz-icon-mdi], a[mzIconMdi], i[mz-icon-mdi], i[mzIconMdi]',
                },] },
    ];
    /** @nocollapse */
    MzIconMdiDirective.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: Renderer, },
    ]; };
    MzIconMdiDirective.propDecorators = {
        "align": [{ type: Input },],
        "flip": [{ type: Input },],
        "icon": [{ type: Input },],
        "rotate": [{ type: Input },],
        "size": [{ type: Input },],
    };
    return MzIconMdiDirective;
}(HandlePropChanges));
export { MzIconMdiDirective };
function MzIconMdiDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MzIconMdiDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MzIconMdiDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    MzIconMdiDirective.propDecorators;
    /** @type {?} */
    MzIconMdiDirective.prototype.align;
    /** @type {?} */
    MzIconMdiDirective.prototype.flip;
    /** @type {?} */
    MzIconMdiDirective.prototype.icon;
    /** @type {?} */
    MzIconMdiDirective.prototype.rotate;
    /** @type {?} */
    MzIconMdiDirective.prototype.size;
    /** @type {?} */
    MzIconMdiDirective.prototype.elementRef;
    /** @type {?} */
    MzIconMdiDirective.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1tZGkuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hdGVyaWFsaXplLyIsInNvdXJjZXMiOlsic3JjL2ljb24tbWRpL2ljb24tbWRpLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxRQUFRLEdBQ1QsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7O0lBS1osOENBQWlCO0lBT3ZELDRCQUFvQixVQUFzQixFQUFVLFFBQWtCO1FBQXRFLFlBQ0UsaUJBQU8sU0FDUjtRQUZtQixnQkFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGNBQVEsR0FBUixRQUFRLENBQVU7O0tBRXJFOzs7O0lBRUQsNENBQWU7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixpQkFBTSxtQkFBbUIsV0FBRSxDQUFDO0tBQzdCOzs7O0lBRUQseUNBQVk7OztJQUFaO1FBQUEsaUJBUUM7UUFQQyxJQUFJLENBQUMsUUFBUSxHQUFHO1lBQ2QsS0FBSyxFQUFFLFVBQUMsYUFBYSxJQUFLLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsRUFBL0IsQ0FBK0I7WUFDekQsSUFBSSxFQUFFLFVBQUMsYUFBYSxJQUFLLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsRUFBOUIsQ0FBOEI7WUFDdkQsSUFBSSxFQUFFLFVBQUMsYUFBYSxJQUFLLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsRUFBOUIsQ0FBOEI7WUFDdkQsTUFBTSxFQUFFLFVBQUMsYUFBYSxJQUFLLE9BQUEsS0FBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsRUFBaEMsQ0FBZ0M7WUFDM0QsSUFBSSxFQUFFLFVB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QUUsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDeEY7O2dCQXhFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDREQUE0RDtpQkFDdkU7Ozs7Z0JBVEMsVUFBVTtnQkFFVixRQUFROzs7MEJBU1AsS0FBSzt5QkFDTCxLQUFLO3lCQUNMLEtBQUs7MkJBQ0wsS0FBSzt5QkFDTCxLQUFLOzs2QkFsQlI7RUFhd0MsaUJBQWlCO1NBQTVDLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBEaXJlY3RpdmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBSZW5kZXJlcixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEhhbmRsZVByb3BDaGFuZ2VzIH0gZnJvbSAnLi4vc2hhcmVkL2luZGV4JztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnYVttei1pY29uLW1kaV0sIGFbbXpJY29uTWRpXSwgaVttei1pY29uLW1kaV0sIGlbbXpJY29uTWRpXScsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNekljb25NZGlEaXJlY3RpdmUgZXh0ZW5kcyBIYW5kbGVQcm9wQ2hhbmdlcyBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG4gIEBJbnB1dCgpIGFsaWduOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZmxpcDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGljb246IHN0cmluZztcclxuICBASW5wdXQoKSByb3RhdGU6IHN0cmluZztcclxuICBASW5wdXQoKSBzaXplOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLmluaXRIYW5kbGVycygpO1xyXG4gICAgdGhpcy5pbml0TWF0ZXJpYWxpemUoKTtcclxuICAgIHN1cGVyLmV4ZWN1dGVQcm9wSGFuZGxlcnMoKTtcclxuICB9XHJcblxyXG4gIGluaXRIYW5kbGVycygpIHtcclxuICAgIHRoaXMuaGFuZGxlcnMgPSB7XHJcbiAgICAgIGFsaWduOiAocHJldmlvdXNWYWx1ZSkgPT4gdGhpcy5oYW5kbGVBbGlnbihwcmV2aW91c1ZhbHVlKSxcclxuICAgICAgZmxpcDogKHByZXZpb3VzVmFsdWUpID0+IHRoaXMuaGFuZGxlRmxpcChwcmV2aW91c1ZhbHVlKSxcclxuICAgICAgaWNvbjogKHByZXZpb3VzVmFsdWUpID0+IHRoaXMuaGFuZGxlSWNvbihwcmV2aW91c1ZhbHVlKSxcclxuICAgICAgcm90YXRlOiAocHJldmlvdXNWYWx1ZSkgPT4gdGhpcy5oYW5kbGVSb3RhdGUocHJldmlvdXNWYWx1ZSksXHJcbiAgICAgIHNpemU6IChwcmV2aW91c1ZhbHVlKSA9PiB0aGlzLmhhbmRsZVNpemUocHJldmlvdXNWYWx1ZSksXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgaW5pdE1hdGVyaWFsaXplKCkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtZGknLCB0cnVlKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUFsaWduKHByZXZpb3VzVmFsdWU/OiBzdHJpbmcpIHtcclxuICAgIGlmIChwcmV2aW91c1ZhbHVlKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBwcmV2aW91c1ZhbHVlLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5hbGlnbikge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5hbGlnbiwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVGbGlwKHByZXZpb3VzVmFsdWU/OiBzdHJpbmcpIHtcclxuICAgIGlmIChwcmV2aW91c1ZhbHVlKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbWRpLWZsaXAtJyArIHByZXZpb3VzVmFsdWUsIGZhbHNlKTtcclxuICAgIH1cclxuICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbWRpLWZsaXAtJyArIHRoaXMuZmxpcCwgISF0aGlzLmZsaXApO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlSWNvbihwcmV2aW91c1ZhbHVlPzogc3RyaW5nKSB7XHJcbiAgICBpZiAocHJldmlvdXNWYWx1ZSkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21kaS0nICsgcHJldmlvdXNWYWx1ZSwgZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtZGktJyArIHRoaXMuaWNvbiwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVSb3RhdGUocHJldmlvdXNWYWx1ZT86IHN0cmluZykge1xyXG4gICAgaWYgKHByZXZpb3VzVmFsdWUpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtZGktcm90YXRlLScgKyBwcmV2aW91c1ZhbHVlLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21kaS1yb3RhdGUtJyArIHRoaXMucm90YXRlLCAhIXRoaXMucm90YXRlKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVNpemUocHJldmlvdXNWYWx1ZT86IHN0cmluZykge1xyXG4gICAgaWYgKCF0aGlzLnNpemUpIHtcclxuICAgICAgdGhpcy5zaXplID0gJzI0cHgnO1xyXG4gICAgfVxyXG4gICAgaWYgKHByZXZpb3VzVmFsdWUpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtZGktJyArIHByZXZpb3VzVmFsdWUsIGZhbHNlKTtcclxuICAgIH1cclxuICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbWRpLScgKyB0aGlzLnNpemUsIHRydWUpO1xyXG4gIH1cclxufVxyXG4iXX0=