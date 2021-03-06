/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, Input, Renderer, } from '@angular/core';
import { HandlePropChanges } from '../shared/index';
export class MzIconDirective extends HandlePropChanges {
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
            icon: () => this.handleIcon(),
            size: (previousValue) => this.handleSize(previousValue),
        };
    }
    /**
     * @return {?}
     */
    initMaterialize() {
        this.renderer.setElementClass(this.elementRef.nativeElement, 'material-icons', true);
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
     * @return {?}
     */
    handleIcon() {
        this.renderer.setElementProperty(this.elementRef.nativeElement, 'innerHTML', this.icon);
    }
    /**
     * @param {?=} previousValue
     * @return {?}
     */
    handleSize(previousValue) {
        if (previousValue) {
            this.renderer.setElementClass(this.elementRef.nativeElement, previousValue, false);
        }
        if (this.size) {
            this.renderer.setElementClass(this.elementRef.nativeElement, this.size, true);
        }
    }
}
MzIconDirective.decorators = [
    { type: Directive, args: [{
                selector: 'i[mz-icon], i[mzIcon]',
            },] },
];
/** @nocollapse */
MzIconDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer, },
];
MzIconDirective.propDecorators = {
    "align": [{ type: Input },],
    "icon": [{ type: Input },],
    "size": [{ type: Input },],
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvIiwic291cmNlcyI6WyJzcmMvaWNvbi9pY29uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLFFBQVEsR0FDVCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUtwRCxNQUFNLHNCQUF1QixTQUFRLGlCQUFpQjs7Ozs7SUFLcEQsWUFBb0IsVUFBc0IsRUFBVSxRQUFrQjtRQUNwRSxLQUFLLEVBQUUsQ0FBQztRQURVLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFVO0tBRXJFOzs7O0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsS0FBSyxDQUFDLG1CQUFtQixFQUFFLENBQUM7S0FDN0I7Ozs7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLFFBQVEsR0FBRztZQUNkLEtBQUssRUFBRSxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUM7WUFDekQsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDN0IsSUFBSSxFQUFFLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztTQUN4RCxDQUFDO0tBQ0g7Ozs7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDdEY7Ozs7O0lBRUQsV0FBVyxDQUFDLGFBQXNCO1FBQ2hDLEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3BGO1FBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDZixJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ2hGO0tBQ0Y7Ozs7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3pGOzs7OztJQUVELFVBQVUsQ0FBQyxhQUFzQjtRQUMvQixFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNwRjtRQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztTQUMvRTtLQUNGOzs7WUFsREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7YUFDbEM7Ozs7WUFUQyxVQUFVO1lBRVYsUUFBUTs7O3NCQVNQLEtBQUs7cUJBQ0wsS0FBSztxQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIFJlbmRlcmVyLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgSGFuZGxlUHJvcENoYW5nZXMgfSBmcm9tICcuLi9zaGFyZWQvaW5kZXgnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdpW216LWljb25dLCBpW216SWNvbl0nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpJY29uRGlyZWN0aXZlIGV4dGVuZHMgSGFuZGxlUHJvcENoYW5nZXMgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuICBASW5wdXQoKSBhbGlnbjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGljb246IHN0cmluZztcclxuICBASW5wdXQoKSBzaXplOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLmluaXRIYW5kbGVycygpO1xyXG4gICAgdGhpcy5pbml0TWF0ZXJpYWxpemUoKTtcclxuICAgIHN1cGVyLmV4ZWN1dGVQcm9wSGFuZGxlcnMoKTtcclxuICB9XHJcblxyXG4gIGluaXRIYW5kbGVycygpIHtcclxuICAgIHRoaXMuaGFuZGxlcnMgPSB7XHJcbiAgICAgIGFsaWduOiAocHJldmlvdXNWYWx1ZSkgPT4gdGhpcy5oYW5kbGVBbGlnbihwcmV2aW91c1ZhbHVlKSxcclxuICAgICAgaWNvbjogKCkgPT4gdGhpcy5oYW5kbGVJY29uKCksXHJcbiAgICAgIHNpemU6IChwcmV2aW91c1ZhbHVlKSA9PiB0aGlzLmhhbmRsZVNpemUocHJldmlvdXNWYWx1ZSksXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgaW5pdE1hdGVyaWFsaXplKCkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtYXRlcmlhbC1pY29ucycsIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQWxpZ24ocHJldmlvdXNWYWx1ZT86IHN0cmluZykge1xyXG4gICAgaWYgKHByZXZpb3VzVmFsdWUpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHByZXZpb3VzVmFsdWUsIGZhbHNlKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmFsaWduKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmFsaWduLCB0cnVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZUljb24oKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRQcm9wZXJ0eSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2lubmVySFRNTCcsIHRoaXMuaWNvbik7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVTaXplKHByZXZpb3VzVmFsdWU/OiBzdHJpbmcpIHtcclxuICAgIGlmIChwcmV2aW91c1ZhbHVlKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBwcmV2aW91c1ZhbHVlLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zaXplKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLnNpemUsIHRydWUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=