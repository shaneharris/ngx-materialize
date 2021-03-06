/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, Input, Renderer } from '@angular/core';
var MzTooltipDirective = /** @class */ (function () {
    function MzTooltipDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    MzTooltipDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.initElements();
    };
    /**
     * @return {?}
     */
    MzTooltipDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (this.elementRef.nativeElement.getAttribute('type') === 'checkbox') {
            this.targetElement = $(this.elementRef.nativeElement).next('label');
        }
        this.initTooltip();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    MzTooltipDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.targetElement) {
            this.initTooltip();
        }
    };
    /**
     * @return {?}
     */
    MzTooltipDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.renderer.invokeElementMethod(this.targetElement, 'tooltip', ['remove']);
    };
    /**
     * @return {?}
     */
    MzTooltipDirective.prototype.initElements = /**
     * @return {?}
     */
    function () {
        this.targetElement = $(this.elementRef.nativeElement);
    };
    /**
     * @return {?}
     */
    MzTooltipDirective.prototype.initTooltip = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ tooltipOptions = {
            delay: isNaN(this.delay) || this.delay == null ? 350 : this.delay,
            html: this.html || false,
            position: this.position || 'bottom',
            tooltip: this.tooltip,
        };
        this.renderer.invokeElementMethod(this.targetElement, 'tooltip', [tooltipOptions]);
    };
    MzTooltipDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mzTooltip], [mz-tooltip]',
                },] },
    ];
    /** @nocollapse */
    MzTooltipDirective.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: Renderer, },
    ]; };
    MzTooltipDirective.propDecorators = {
        "delay": [{ type: Input },],
        "html": [{ type: Input },],
        "position": [{ type: Input },],
        "tooltip": [{ type: Input },],
    };
    return MzTooltipDirective;
}());
export { MzTooltipDirective };
function MzTooltipDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MzTooltipDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MzTooltipDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    MzTooltipDirective.propDecorators;
    /** @type {?} */
    MzTooltipDirective.prototype.delay;
    /** @type {?} */
    MzTooltipDirective.prototype.html;
    /** @type {?} */
    MzTooltipDirective.prototype.position;
    /** @type {?} */
    MzTooltipDirective.prototype.tooltip;
    /** @type {?} */
    MzTooltipDirective.prototype.targetElement;
    /** @type {?} */
    MzTooltipDirective.prototype.elementRef;
    /** @type {?} */
    MzTooltipDirective.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvIiwic291cmNlcyI6WyJzcmMvdG9vbHRpcC90b29sdGlwLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBZ0MsUUFBUSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7SUFhakksNEJBQ1UsWUFDQTtRQURBLGVBQVUsR0FBVixVQUFVO1FBQ1YsYUFBUSxHQUFSLFFBQVE7S0FDYjs7OztJQUVMLHFDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUNyQjs7OztJQUVELDRDQUFlOzs7SUFBZjtRQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ3RFLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3JFO1FBRUQsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQ3BCOzs7OztJQUVELHdDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEI7S0FDRjs7OztJQUVELHdDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0tBQzlFOzs7O0lBRUQseUNBQVk7OztJQUFaO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztLQUN2RDs7OztJQUVELHdDQUFXOzs7SUFBWDtRQUNFLHFCQUFNLGNBQWMsR0FBK0I7WUFDakQsS0FBSyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUs7WUFDakUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLElBQUksS0FBSztZQUN4QixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsSUFBSSxRQUFRO1lBQ25DLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztTQUN0QixDQUFDO1FBRUYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLFNBQVMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7S0FDcEY7O2dCQW5ERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtpQkFDdEM7Ozs7Z0JBSmtDLFVBQVU7Z0JBQXVDLFFBQVE7OzswQkFNekYsS0FBSzt5QkFDTCxLQUFLOzZCQUNMLEtBQUs7NEJBQ0wsS0FBSzs7NkJBVFI7O1NBS2Esa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgUmVuZGVyZXIsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW216VG9vbHRpcF0sIFttei10b29sdGlwXScsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNelRvb2x0aXBEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSBkZWxheTogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGh0bWw6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgcG9zaXRpb246IHN0cmluZztcclxuICBASW5wdXQoKSB0b29sdGlwOiBzdHJpbmc7XHJcblxyXG4gIHRhcmdldEVsZW1lbnQ6IEpRdWVyeTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcixcclxuICApIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5pdEVsZW1lbnRzKCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICBpZiAodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0eXBlJykgPT09ICdjaGVja2JveCcpIHtcclxuICAgICAgdGhpcy50YXJnZXRFbGVtZW50ID0gJCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkubmV4dCgnbGFiZWwnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmluaXRUb29sdGlwKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAodGhpcy50YXJnZXRFbGVtZW50KSB7XHJcbiAgICAgIHRoaXMuaW5pdFRvb2x0aXAoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMudGFyZ2V0RWxlbWVudCwgJ3Rvb2x0aXAnLCBbJ3JlbW92ZSddKTtcclxuICB9XHJcblxyXG4gIGluaXRFbGVtZW50cygpIHtcclxuICAgIHRoaXMudGFyZ2V0RWxlbWVudCA9ICQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgaW5pdFRvb2x0aXAoKSB7XHJcbiAgICBjb25zdCB0b29sdGlwT3B0aW9uczogTWF0ZXJpYWxpemUuVG9vbHRpcE9wdGlvbnMgPSB7XHJcbiAgICAgIGRlbGF5OiBpc05hTih0aGlzLmRlbGF5KSB8fCB0aGlzLmRlbGF5ID09IG51bGwgPyAzNTAgOiB0aGlzLmRlbGF5LFxyXG4gICAgICBodG1sOiB0aGlzLmh0bWwgfHwgZmFsc2UsXHJcbiAgICAgIHBvc2l0aW9uOiB0aGlzLnBvc2l0aW9uIHx8ICdib3R0b20nLFxyXG4gICAgICB0b29sdGlwOiB0aGlzLnRvb2x0aXAsXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLnRhcmdldEVsZW1lbnQsICd0b29sdGlwJywgW3Rvb2x0aXBPcHRpb25zXSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==