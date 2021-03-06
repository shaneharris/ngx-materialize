/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, Input, Renderer } from '@angular/core';
export class MzSwitchDirective {
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
        this.handleInputType();
    }
    /**
     * @return {?}
     */
    initElements() {
        this.switchElement = $(this.elementRef.nativeElement);
        this.switchContainerElement = $(this.elementRef.nativeElement).parent('label').parent('.switch');
        if (this.switchContainerElement.length === 0) {
            console.error('Input with mz-switch directive must be placed inside an [mz-switch-container] tag', this.switchElement);
            return;
        }
    }
    /**
     * @return {?}
     */
    handleInputType() {
        const /** @type {?} */ type = this.switchElement.attr('type');
        if (type !== 'checkbox') {
            this.renderer.setElementAttribute(this.switchElement[0], 'type', 'checkbox');
        }
    }
}
MzSwitchDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mzSwitch], [mz-switch]',
            },] },
];
/** @nocollapse */
MzSwitchDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer, },
];
MzSwitchDirective.propDecorators = {
    "off": [{ type: Input },],
    "on": [{ type: Input },],
};
function MzSwitchDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MzSwitchDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MzSwitchDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    MzSwitchDirective.propDecorators;
    /** @type {?} */
    MzSwitchDirective.prototype.off;
    /** @type {?} */
    MzSwitchDirective.prototype.on;
    /** @type {?} */
    MzSwitchDirective.prototype.switchContainerElement;
    /** @type {?} */
    MzSwitchDirective.prototype.switchElement;
    /** @type {?} */
    MzSwitchDirective.prototype.elementRef;
    /** @type {?} */
    MzSwitchDirective.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpdGNoLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXRlcmlhbGl6ZS8iLCJzb3VyY2VzIjpbInNyYy9zd2l0Y2gvc3dpdGNoLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFVLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUsvRSxNQUFNOzs7OztJQU9KLFlBQ1UsWUFDQTtRQURBLGVBQVUsR0FBVixVQUFVO1FBQ1YsYUFBUSxHQUFSLFFBQVE7S0FDYjs7OztJQUVMLFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0tBQ3hCOzs7O0lBRUQsWUFBWTtRQUNWLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLHNCQUFzQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFakcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdDLE9BQU8sQ0FBQyxLQUFLLENBQUMsbUZBQW1GLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3ZILE1BQU0sQ0FBQztTQUNSO0tBQ0Y7Ozs7SUFFRCxlQUFlO1FBQ2IsdUJBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdDLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7U0FDOUU7S0FDRjs7O1lBbkNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2FBQ3BDOzs7O1lBSm1CLFVBQVU7WUFBaUIsUUFBUTs7O29CQU1wRCxLQUFLO21CQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIFJlbmRlcmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1ttelN3aXRjaF0sIFttei1zd2l0Y2hdJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16U3dpdGNoRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBvZmY6IHN0cmluZztcclxuICBASW5wdXQoKSBvbjogc3RyaW5nO1xyXG5cclxuICBzd2l0Y2hDb250YWluZXJFbGVtZW50OiBKUXVlcnk7XHJcbiAgc3dpdGNoRWxlbWVudDogSlF1ZXJ5O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyLFxyXG4gICkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbml0RWxlbWVudHMoKTtcclxuICAgIHRoaXMuaGFuZGxlSW5wdXRUeXBlKCk7XHJcbiAgfVxyXG5cclxuICBpbml0RWxlbWVudHMoKSB7XHJcbiAgICB0aGlzLnN3aXRjaEVsZW1lbnQgPSAkKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcclxuICAgIHRoaXMuc3dpdGNoQ29udGFpbmVyRWxlbWVudCA9ICQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLnBhcmVudCgnbGFiZWwnKS5wYXJlbnQoJy5zd2l0Y2gnKTtcclxuXHJcbiAgICBpZiAodGhpcy5zd2l0Y2hDb250YWluZXJFbGVtZW50Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdJbnB1dCB3aXRoIG16LXN3aXRjaCBkaXJlY3RpdmUgbXVzdCBiZSBwbGFjZWQgaW5zaWRlIGFuIFttei1zd2l0Y2gtY29udGFpbmVyXSB0YWcnLCB0aGlzLnN3aXRjaEVsZW1lbnQpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVJbnB1dFR5cGUoKSB7XHJcbiAgICBjb25zdCB0eXBlID0gdGhpcy5zd2l0Y2hFbGVtZW50LmF0dHIoJ3R5cGUnKTtcclxuICAgIGlmICh0eXBlICE9PSAnY2hlY2tib3gnKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudEF0dHJpYnV0ZSh0aGlzLnN3aXRjaEVsZW1lbnRbMF0sICd0eXBlJywgJ2NoZWNrYm94Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==