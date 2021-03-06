/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, Input, Renderer } from '@angular/core';
var MzSwitchDirective = /** @class */ (function () {
    function MzSwitchDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    MzSwitchDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.initElements();
        this.handleInputType();
    };
    /**
     * @return {?}
     */
    MzSwitchDirective.prototype.initElements = /**
     * @return {?}
     */
    function () {
        this.switchElement = $(this.elementRef.nativeElement);
        this.switchContainerElement = $(this.elementRef.nativeElement).parent('label').parent('.switch');
        if (this.switchContainerElement.length === 0) {
            console.error('Input with mz-switch directive must be placed inside an [mz-switch-container] tag', this.switchElement);
            return;
        }
    };
    /**
     * @return {?}
     */
    MzSwitchDirective.prototype.handleInputType = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ type = this.switchElement.attr('type');
        if (type !== 'checkbox') {
            this.renderer.setElementAttribute(this.switchElement[0], 'type', 'checkbox');
        }
    };
    MzSwitchDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mzSwitch], [mz-switch]',
                },] },
    ];
    /** @nocollapse */
    MzSwitchDirective.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: Renderer, },
    ]; };
    MzSwitchDirective.propDecorators = {
        "off": [{ type: Input },],
        "on": [{ type: Input },],
    };
    return MzSwitchDirective;
}());
export { MzSwitchDirective };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpdGNoLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXRlcmlhbGl6ZS8iLCJzb3VyY2VzIjpbInNyYy9zd2l0Y2gvc3dpdGNoLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFVLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7SUFZN0UsMkJBQ1UsWUFDQTtRQURBLGVBQVUsR0FBVixVQUFVO1FBQ1YsYUFBUSxHQUFSLFFBQVE7S0FDYjs7OztJQUVMLG9DQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7S0FDeEI7Ozs7SUFFRCx3Q0FBWTs7O0lBQVo7UUFDRSxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxzQkFBc0IsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRWpHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QyxPQUFPLENBQUMsS0FBSyxDQUFDLG1GQUFtRixFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN2SCxNQUFNLENBQUM7U0FDUjtLQUNGOzs7O0lBRUQsMkNBQWU7OztJQUFmO1FBQ0UscUJBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdDLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7U0FDOUU7S0FDRjs7Z0JBbkNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUseUJBQXlCO2lCQUNwQzs7OztnQkFKbUIsVUFBVTtnQkFBaUIsUUFBUTs7O3dCQU1wRCxLQUFLO3VCQUNMLEtBQUs7OzRCQVBSOztTQUthLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgUmVuZGVyZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW216U3dpdGNoXSwgW216LXN3aXRjaF0nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpTd2l0Y2hEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIG9mZjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG9uOiBzdHJpbmc7XHJcblxyXG4gIHN3aXRjaENvbnRhaW5lckVsZW1lbnQ6IEpRdWVyeTtcclxuICBzd2l0Y2hFbGVtZW50OiBKUXVlcnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIsXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluaXRFbGVtZW50cygpO1xyXG4gICAgdGhpcy5oYW5kbGVJbnB1dFR5cGUoKTtcclxuICB9XHJcblxyXG4gIGluaXRFbGVtZW50cygpIHtcclxuICAgIHRoaXMuc3dpdGNoRWxlbWVudCA9ICQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgdGhpcy5zd2l0Y2hDb250YWluZXJFbGVtZW50ID0gJCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkucGFyZW50KCdsYWJlbCcpLnBhcmVudCgnLnN3aXRjaCcpO1xyXG5cclxuICAgIGlmICh0aGlzLnN3aXRjaENvbnRhaW5lckVsZW1lbnQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0lucHV0IHdpdGggbXotc3dpdGNoIGRpcmVjdGl2ZSBtdXN0IGJlIHBsYWNlZCBpbnNpZGUgYW4gW216LXN3aXRjaC1jb250YWluZXJdIHRhZycsIHRoaXMuc3dpdGNoRWxlbWVudCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZUlucHV0VHlwZSgpIHtcclxuICAgIGNvbnN0IHR5cGUgPSB0aGlzLnN3aXRjaEVsZW1lbnQuYXR0cigndHlwZScpO1xyXG4gICAgaWYgKHR5cGUgIT09ICdjaGVja2JveCcpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50QXR0cmlidXRlKHRoaXMuc3dpdGNoRWxlbWVudFswXSwgJ3R5cGUnLCAnY2hlY2tib3gnKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19