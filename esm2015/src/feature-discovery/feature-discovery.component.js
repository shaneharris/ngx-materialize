/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, HostBinding, Input } from '@angular/core';
export class MzFeatureDiscoveryComponent {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.targetClass = true;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.target = $(this.elementRef.nativeElement);
    }
    /**
     * @return {?}
     */
    close() {
        this.target.tapTarget('close');
    }
    /**
     * @return {?}
     */
    open() {
        this.target.tapTarget('open');
    }
}
MzFeatureDiscoveryComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-feature-discovery',
                template: `<div class="tap-target-content">
  <ng-content></ng-content>
</div>
`,
                styles: [`:host{display:block}`],
            },] },
];
/** @nocollapse */
MzFeatureDiscoveryComponent.ctorParameters = () => [
    { type: ElementRef, },
];
MzFeatureDiscoveryComponent.propDecorators = {
    "targetClass": [{ type: HostBinding, args: ['class.tap-target',] },],
    "targetId": [{ type: HostBinding, args: ['attr.data-activates',] }, { type: Input },],
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS1kaXNjb3ZlcnkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hdGVyaWFsaXplLyIsInNvdXJjZXMiOlsic3JjL2ZlYXR1cmUtZGlzY292ZXJ5L2ZlYXR1cmUtZGlzY292ZXJ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFVekYsTUFBTTs7OztJQVVKLFlBQ1U7UUFBQSxlQUFVLEdBQVYsVUFBVTsyQkFUTixJQUFJO0tBVWI7Ozs7SUFFTCxlQUFlO1FBQ2IsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztLQUNoRDs7OztJQUVELEtBQUs7UUFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUNoQzs7OztJQUVELElBQUk7UUFDRixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUMvQjs7O1lBaENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxRQUFRLEVBQUU7OztDQUdYO2dCQUNDLE1BQU0sRUFBRSxDQUFDLHNCQUFzQixDQUFDO2FBQ2pDOzs7O1lBVGtDLFVBQVU7Ozs0QkFXMUMsV0FBVyxTQUFDLGtCQUFrQjt5QkFHOUIsV0FBVyxTQUFDLHFCQUFxQixjQUNqQyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXotZmVhdHVyZS1kaXNjb3ZlcnknLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInRhcC10YXJnZXQtY29udGVudFwiPlxyXG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuPC9kaXY+XHJcbmAsXHJcbiAgc3R5bGVzOiBbYDpob3N0e2Rpc3BsYXk6YmxvY2t9YF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNekZlYXR1cmVEaXNjb3ZlcnlDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnRhcC10YXJnZXQnKVxyXG4gIHRhcmdldENsYXNzID0gdHJ1ZTtcclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmRhdGEtYWN0aXZhdGVzJylcclxuICBASW5wdXQoKVxyXG4gIHRhcmdldElkOiBzdHJpbmc7XHJcblxyXG4gIHByaXZhdGUgdGFyZ2V0OiBKUXVlcnk8RWxlbWVudD47XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICkgeyB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMudGFyZ2V0ID0gJCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBjbG9zZSgpIHtcclxuICAgIHRoaXMudGFyZ2V0LnRhcFRhcmdldCgnY2xvc2UnKTtcclxuICB9XHJcblxyXG4gIG9wZW4oKSB7XHJcbiAgICB0aGlzLnRhcmdldC50YXBUYXJnZXQoJ29wZW4nKTtcclxuICB9XHJcbn1cclxuIl19