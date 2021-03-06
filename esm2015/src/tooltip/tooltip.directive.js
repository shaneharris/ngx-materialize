/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, Input, Renderer } from '@angular/core';
export class MzTooltipDirective {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initElements();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.elementRef.nativeElement.getAttribute('type') === 'checkbox') {
            this.targetElement = $(this.elementRef.nativeElement).next('label');
        }
        this.initTooltip();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.targetElement) {
            this.initTooltip();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.renderer.invokeElementMethod(this.targetElement, 'tooltip', ['remove']);
    }
    /**
     * @return {?}
     */
    initElements() {
        this.targetElement = $(this.elementRef.nativeElement);
    }
    /**
     * @return {?}
     */
    initTooltip() {
        const /** @type {?} */ tooltipOptions = {
            delay: isNaN(this.delay) || this.delay == null ? 350 : this.delay,
            html: this.html || false,
            position: this.position || 'bottom',
            tooltip: this.tooltip,
        };
        this.renderer.invokeElementMethod(this.targetElement, 'tooltip', [tooltipOptions]);
    }
}
MzTooltipDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mzTooltip], [mz-tooltip]',
            },] },
];
/** @nocollapse */
MzTooltipDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer, },
];
MzTooltipDirective.propDecorators = {
    "delay": [{ type: Input },],
    "html": [{ type: Input },],
    "position": [{ type: Input },],
    "tooltip": [{ type: Input },],
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvIiwic291cmNlcyI6WyJzcmMvdG9vbHRpcC90b29sdGlwLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBZ0MsUUFBUSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUtuSSxNQUFNOzs7OztJQVFKLFlBQ1UsWUFDQTtRQURBLGVBQVUsR0FBVixVQUFVO1FBQ1YsYUFBUSxHQUFSLFFBQVE7S0FDYjs7OztJQUVMLFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDckI7Ozs7SUFFRCxlQUFlO1FBQ2IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDdEUsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDckU7UUFFRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDcEI7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNwQjtLQUNGOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0tBQzlFOzs7O0lBRUQsWUFBWTtRQUNWLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7S0FDdkQ7Ozs7SUFFRCxXQUFXO1FBQ1QsdUJBQU0sY0FBYyxHQUErQjtZQUNqRCxLQUFLLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSztZQUNqRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksSUFBSSxLQUFLO1lBQ3hCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxJQUFJLFFBQVE7WUFDbkMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1NBQ3RCLENBQUM7UUFFRixJQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsU0FBUyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztLQUNwRjs7O1lBbkRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMkJBQTJCO2FBQ3RDOzs7O1lBSmtDLFVBQVU7WUFBdUMsUUFBUTs7O3NCQU16RixLQUFLO3FCQUNMLEtBQUs7eUJBQ0wsS0FBSzt3QkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgUmVuZGVyZXIsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW216VG9vbHRpcF0sIFttei10b29sdGlwXScsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNelRvb2x0aXBEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSBkZWxheTogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGh0bWw6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgcG9zaXRpb246IHN0cmluZztcclxuICBASW5wdXQoKSB0b29sdGlwOiBzdHJpbmc7XHJcblxyXG4gIHRhcmdldEVsZW1lbnQ6IEpRdWVyeTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcixcclxuICApIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5pdEVsZW1lbnRzKCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICBpZiAodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0eXBlJykgPT09ICdjaGVja2JveCcpIHtcclxuICAgICAgdGhpcy50YXJnZXRFbGVtZW50ID0gJCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkubmV4dCgnbGFiZWwnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmluaXRUb29sdGlwKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAodGhpcy50YXJnZXRFbGVtZW50KSB7XHJcbiAgICAgIHRoaXMuaW5pdFRvb2x0aXAoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMudGFyZ2V0RWxlbWVudCwgJ3Rvb2x0aXAnLCBbJ3JlbW92ZSddKTtcclxuICB9XHJcblxyXG4gIGluaXRFbGVtZW50cygpIHtcclxuICAgIHRoaXMudGFyZ2V0RWxlbWVudCA9ICQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgaW5pdFRvb2x0aXAoKSB7XHJcbiAgICBjb25zdCB0b29sdGlwT3B0aW9uczogTWF0ZXJpYWxpemUuVG9vbHRpcE9wdGlvbnMgPSB7XHJcbiAgICAgIGRlbGF5OiBpc05hTih0aGlzLmRlbGF5KSB8fCB0aGlzLmRlbGF5ID09IG51bGwgPyAzNTAgOiB0aGlzLmRlbGF5LFxyXG4gICAgICBodG1sOiB0aGlzLmh0bWwgfHwgZmFsc2UsXHJcbiAgICAgIHBvc2l0aW9uOiB0aGlzLnBvc2l0aW9uIHx8ICdib3R0b20nLFxyXG4gICAgICB0b29sdGlwOiB0aGlzLnRvb2x0aXAsXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLnRhcmdldEVsZW1lbnQsICd0b29sdGlwJywgW3Rvb2x0aXBPcHRpb25zXSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==