/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, HostBinding, Input } from '@angular/core';
var MzFeatureDiscoveryComponent = /** @class */ (function () {
    function MzFeatureDiscoveryComponent(elementRef) {
        this.elementRef = elementRef;
        this.targetClass = true;
    }
    /**
     * @return {?}
     */
    MzFeatureDiscoveryComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.target = $(this.elementRef.nativeElement);
    };
    /**
     * @return {?}
     */
    MzFeatureDiscoveryComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.target.tapTarget('close');
    };
    /**
     * @return {?}
     */
    MzFeatureDiscoveryComponent.prototype.open = /**
     * @return {?}
     */
    function () {
        this.target.tapTarget('open');
    };
    MzFeatureDiscoveryComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mz-feature-discovery',
                    template: "<div class=\"tap-target-content\">\n  <ng-content></ng-content>\n</div>\n",
                    styles: [":host{display:block}"],
                },] },
    ];
    /** @nocollapse */
    MzFeatureDiscoveryComponent.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    MzFeatureDiscoveryComponent.propDecorators = {
        "targetClass": [{ type: HostBinding, args: ['class.tap-target',] },],
        "targetId": [{ type: HostBinding, args: ['attr.data-activates',] }, { type: Input },],
    };
    return MzFeatureDiscoveryComponent;
}());
export { MzFeatureDiscoveryComponent };
function MzFeatureDiscoveryComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MzFeatureDiscoveryComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MzFeatureDiscoveryComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    MzFeatureDiscoveryComponent.propDecorators;
    /** @type {?} */
    MzFeatureDiscoveryComponent.prototype.targetClass;
    /** @type {?} */
    MzFeatureDiscoveryComponent.prototype.targetId;
    /** @type {?} */
    MzFeatureDiscoveryComponent.prototype.target;
    /** @type {?} */
    MzFeatureDiscoveryComponent.prototype.elementRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS1kaXNjb3ZlcnkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hdGVyaWFsaXplLyIsInNvdXJjZXMiOlsic3JjL2ZlYXR1cmUtZGlzY292ZXJ5L2ZlYXR1cmUtZGlzY292ZXJ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0lBb0J2RixxQ0FDVTtRQUFBLGVBQVUsR0FBVixVQUFVOzJCQVROLElBQUk7S0FVYjs7OztJQUVMLHFEQUFlOzs7SUFBZjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7S0FDaEQ7Ozs7SUFFRCwyQ0FBSzs7O0lBQUw7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUNoQzs7OztJQUVELDBDQUFJOzs7SUFBSjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQy9COztnQkFoQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLFFBQVEsRUFBRSwyRUFHWDtvQkFDQyxNQUFNLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztpQkFDakM7Ozs7Z0JBVGtDLFVBQVU7OztnQ0FXMUMsV0FBVyxTQUFDLGtCQUFrQjs2QkFHOUIsV0FBVyxTQUFDLHFCQUFxQixjQUNqQyxLQUFLOztzQ0FmUjs7U0FVYSwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtei1mZWF0dXJlLWRpc2NvdmVyeScsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwidGFwLXRhcmdldC1jb250ZW50XCI+XHJcbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L2Rpdj5cclxuYCxcclxuICBzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTpibG9ja31gXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16RmVhdHVyZURpc2NvdmVyeUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MudGFwLXRhcmdldCcpXHJcbiAgdGFyZ2V0Q2xhc3MgPSB0cnVlO1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ2F0dHIuZGF0YS1hY3RpdmF0ZXMnKVxyXG4gIEBJbnB1dCgpXHJcbiAgdGFyZ2V0SWQ6IHN0cmluZztcclxuXHJcbiAgcHJpdmF0ZSB0YXJnZXQ6IEpRdWVyeTxFbGVtZW50PjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy50YXJnZXQgPSAkKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcclxuICB9XHJcblxyXG4gIGNsb3NlKCkge1xyXG4gICAgdGhpcy50YXJnZXQudGFwVGFyZ2V0KCdjbG9zZScpO1xyXG4gIH1cclxuXHJcbiAgb3BlbigpIHtcclxuICAgIHRoaXMudGFyZ2V0LnRhcFRhcmdldCgnb3BlbicpO1xyXG4gIH1cclxufVxyXG4iXX0=