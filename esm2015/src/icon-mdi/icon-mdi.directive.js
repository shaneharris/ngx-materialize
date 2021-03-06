/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, Input, Renderer, } from '@angular/core';
import { HandlePropChanges } from '../shared/index';
export class MzIconMdiDirective extends HandlePropChanges {
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
    ngAfterViewInit() {
        this.initHandlers();
        this.initMaterialize();
        super.executePropHandlers();
    }
    /**
     * @return {?}
     */
    initHandlers() {
        this.handlers = {
            align: (previousValue) => this.handleAlign(previousValue),
            flip: (previousValue) => this.handleFlip(previousValue),
            icon: (previousValue) => this.handleIcon(previousValue),
            rotate: (previousValue) => this.handleRotate(previousValue),
            size: (previousValue) => this.handleSize(previousValue),
        };
    }
    /**
     * @return {?}
     */
    initMaterialize() {
        this.renderer.setElementClass(this.elementRef.nativeElement, 'mdi', true);
    }
    /**
     * @param {?=} previousValue
     * @return {?}
     */
    handleAlign(previousValue) {
        if (previousValue) {
            this.renderer.setElementClass(this.elementRef.nativeElement, previousValue, false);
        }
        if (this.align) {
            this.renderer.setElementClass(this.elementRef.nativeElement, this.align, true);
        }
    }
    /**
     * @param {?=} previousValue
     * @return {?}
     */
    handleFlip(previousValue) {
        if (previousValue) {
            this.renderer.setElementClass(this.elementRef.nativeElement, 'mdi-flip-' + previousValue, false);
        }
        this.renderer.setElementClass(this.elementRef.nativeElement, 'mdi-flip-' + this.flip, !!this.flip);
    }
    /**
     * @param {?=} previousValue
     * @return {?}
     */
    handleIcon(previousValue) {
        if (previousValue) {
            this.renderer.setElementClass(this.elementRef.nativeElement, 'mdi-' + previousValue, false);
        }
        this.renderer.setElementClass(this.elementRef.nativeElement, 'mdi-' + this.icon, true);
    }
    /**
     * @param {?=} previousValue
     * @return {?}
     */
    handleRotate(previousValue) {
        if (previousValue) {
            this.renderer.setElementClass(this.elementRef.nativeElement, 'mdi-rotate-' + previousValue, false);
        }
        this.renderer.setElementClass(this.elementRef.nativeElement, 'mdi-rotate-' + this.rotate, !!this.rotate);
    }
    /**
     * @param {?=} previousValue
     * @return {?}
     */
    handleSize(previousValue) {
        if (!this.size) {
            this.size = '24px';
        }
        if (previousValue) {
            this.renderer.setElementClass(this.elementRef.nativeElement, 'mdi-' + previousValue, false);
        }
        this.renderer.setElementClass(this.elementRef.nativeElement, 'mdi-' + this.size, true);
    }
}
MzIconMdiDirective.decorators = [
    { type: Directive, args: [{
                selector: 'a[mz-icon-mdi], a[mzIconMdi], i[mz-icon-mdi], i[mzIconMdi]',
            },] },
];
/** @nocollapse */
MzIconMdiDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer, },
];
MzIconMdiDirective.propDecorators = {
    "align": [{ type: Input },],
    "flip": [{ type: Input },],
    "icon": [{ type: Input },],
    "rotate": [{ type: Input },],
    "size": [{ type: Input },],
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1tZGkuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hdGVyaWFsaXplLyIsInNvdXJjZXMiOlsic3JjL2ljb24tbWRpL2ljb24tbWRpLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLFFBQVEsR0FDVCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUtwRCxNQUFNLHlCQUEwQixTQUFRLGlCQUFpQjs7Ozs7SUFPdkQsWUFBb0IsVUFBc0IsRUFBVSxRQUFrQjtRQUNwRSxLQUFLLEVBQUUsQ0FBQztRQURVLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFVO0tBRXJFOzs7O0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsS0FBSyxDQUFDLG1CQUFtQixFQUFFLENBQUM7S0FDN0I7Ozs7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLFFBQVEsR0FBRztZQUNkLEtBQUssRUFBRSxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUM7WUFDekQsSUFBSSxFQUFFLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztZQUN2RCxJQUFJLEVBQUUsQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1lBQ3ZELE1BQU0sRUFBRSxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUM7WUFDM0QsSUFBSSxFQUFFLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFB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QUN2RTs7OztZQVRDLFVBQVU7WUFFVixRQUFROzs7c0JBU1AsS0FBSztxQkFDTCxLQUFLO3FCQUNMLEtBQUs7dUJBQ0wsS0FBSztxQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIFJlbmRlcmVyLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgSGFuZGxlUHJvcENoYW5nZXMgfSBmcm9tICcuLi9zaGFyZWQvaW5kZXgnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdhW216LWljb24tbWRpXSwgYVttekljb25NZGldLCBpW216LWljb24tbWRpXSwgaVttekljb25NZGldJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16SWNvbk1kaURpcmVjdGl2ZSBleHRlbmRzIEhhbmRsZVByb3BDaGFuZ2VzIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQElucHV0KCkgYWxpZ246IHN0cmluZztcclxuICBASW5wdXQoKSBmbGlwOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHJvdGF0ZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHNpemU6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcikge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMuaW5pdEhhbmRsZXJzKCk7XHJcbiAgICB0aGlzLmluaXRNYXRlcmlhbGl6ZSgpO1xyXG4gICAgc3VwZXIuZXhlY3V0ZVByb3BIYW5kbGVycygpO1xyXG4gIH1cclxuXHJcbiAgaW5pdEhhbmRsZXJzKCkge1xyXG4gICAgdGhpcy5oYW5kbGVycyA9IHtcclxuICAgICAgYWxpZ246IChwcmV2aW91c1ZhbHVlKSA9PiB0aGlzLmhhbmRsZUFsaWduKHByZXZpb3VzVmFsdWUpLFxyXG4gICAgICBmbGlwOiAocHJldmlvdXNWYWx1ZSkgPT4gdGhpcy5oYW5kbGVGbGlwKHByZXZpb3VzVmFsdWUpLFxyXG4gICAgICBpY29uOiAocHJldmlvdXNWYWx1ZSkgPT4gdGhpcy5oYW5kbGVJY29uKHByZXZpb3VzVmFsdWUpLFxyXG4gICAgICByb3RhdGU6IChwcmV2aW91c1ZhbHVlKSA9PiB0aGlzLmhhbmRsZVJvdGF0ZShwcmV2aW91c1ZhbHVlKSxcclxuICAgICAgc2l6ZTogKHByZXZpb3VzVmFsdWUpID0+IHRoaXMuaGFuZGxlU2l6ZShwcmV2aW91c1ZhbHVlKSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBpbml0TWF0ZXJpYWxpemUoKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21kaScsIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQWxpZ24ocHJldmlvdXNWYWx1ZT86IHN0cmluZykge1xyXG4gICAgaWYgKHByZXZpb3VzVmFsdWUpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHByZXZpb3VzVmFsdWUsIGZhbHNlKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmFsaWduKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmFsaWduLCB0cnVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZUZsaXAocHJldmlvdXNWYWx1ZT86IHN0cmluZykge1xyXG4gICAgaWYgKHByZXZpb3VzVmFsdWUpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtZGktZmxpcC0nICsgcHJldmlvdXNWYWx1ZSwgZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtZGktZmxpcC0nICsgdGhpcy5mbGlwLCAhIXRoaXMuZmxpcCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVJY29uKHByZXZpb3VzVmFsdWU/OiBzdHJpbmcpIHtcclxuICAgIGlmIChwcmV2aW91c1ZhbHVlKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbWRpLScgKyBwcmV2aW91c1ZhbHVlLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21kaS0nICsgdGhpcy5pY29uLCB0cnVlKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVJvdGF0ZShwcmV2aW91c1ZhbHVlPzogc3RyaW5nKSB7XHJcbiAgICBpZiAocHJldmlvdXNWYWx1ZSkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21kaS1yb3RhdGUtJyArIHByZXZpb3VzVmFsdWUsIGZhbHNlKTtcclxuICAgIH1cclxuICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbWRpLXJvdGF0ZS0nICsgdGhpcy5yb3RhdGUsICEhdGhpcy5yb3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlU2l6ZShwcmV2aW91c1ZhbHVlPzogc3RyaW5nKSB7XHJcbiAgICBpZiAoIXRoaXMuc2l6ZSkge1xyXG4gICAgICB0aGlzLnNpemUgPSAnMjRweCc7XHJcbiAgICB9XHJcbiAgICBpZiAocHJldmlvdXNWYWx1ZSkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21kaS0nICsgcHJldmlvdXNWYWx1ZSwgZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtZGktJyArIHRoaXMuc2l6ZSwgdHJ1ZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==