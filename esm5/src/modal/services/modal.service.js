/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable, } from '@angular/core';
import { first } from 'rxjs/operators';
import { MzInjectionService } from '../../shared/injection/injection.service';
var MzModalService = /** @class */ (function () {
    function MzModalService(injectionService) {
        this.injectionService = injectionService;
    }
    /**
     * Open modal component.
     */
    /**
     * Open modal component.
     * @param {?} componentClass
     * @param {?=} options
     * @return {?}
     */
    MzModalService.prototype.open = /**
     * Open modal component.
     * @param {?} componentClass
     * @param {?=} options
     * @return {?}
     */
    function (componentClass, options) {
        if (options === void 0) { options = {}; }
        var /** @type {?} */ componentRef = this.injectionService.appendComponent(componentClass, options);
        componentRef.instance.modalComponent.close
            .pipe(first())
            .subscribe(function () {
            componentRef.destroy();
        });
        return componentRef;
    };
    MzModalService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    MzModalService.ctorParameters = function () { return [
        { type: MzInjectionService, },
    ]; };
    return MzModalService;
}());
export { MzModalService };
function MzModalService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MzModalService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MzModalService.ctorParameters;
    /** @type {?} */
    MzModalService.prototype.injectionService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXRlcmlhbGl6ZS8iLCJzb3VyY2VzIjpbInNyYy9tb2RhbC9zZXJ2aWNlcy9tb2RhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsVUFBVSxHQUVYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV2QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQzs7SUFNNUUsd0JBQ1U7UUFBQSxxQkFBZ0IsR0FBaEIsZ0JBQWdCO0tBQ3JCO0lBRUw7O09BRUc7Ozs7Ozs7SUFDSCw2QkFBSTs7Ozs7O0lBQUosVUFBSyxjQUFpQyxFQUFFLE9BQWlCO1FBQWpCLHdCQUFBLEVBQUEsWUFBaUI7UUFDdkQscUJBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsY0FBYyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3BGLFlBQVksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUs7YUFDdkMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ2IsU0FBUyxDQUFDO1lBQ1QsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3hCLENBQUMsQ0FBQztRQUNMLE1BQU0sQ0FBQyxZQUFZLENBQUM7S0FDckI7O2dCQWxCRixVQUFVOzs7O2dCQUhGLGtCQUFrQjs7eUJBUDNCOztTQVdhLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudFJlZixcclxuICBJbmplY3RhYmxlLFxyXG4gIFR5cGUsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGZpcnN0IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgTXpJbmplY3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2luamVjdGlvbi9pbmplY3Rpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IE16QmFzZU1vZGFsIH0gZnJvbSAnLi4vbW9kYWwtYmFzZS9pbmRleCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBNek1vZGFsU2VydmljZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBpbmplY3Rpb25TZXJ2aWNlOiBNekluamVjdGlvblNlcnZpY2UsXHJcbiAgKSB7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogT3BlbiBtb2RhbCBjb21wb25lbnQuXHJcbiAgICovXHJcbiAgb3Blbihjb21wb25lbnRDbGFzczogVHlwZTxNekJhc2VNb2RhbD4sIG9wdGlvbnM6IGFueSA9IHt9KTogQ29tcG9uZW50UmVmPE16QmFzZU1vZGFsPiB7XHJcbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLmluamVjdGlvblNlcnZpY2UuYXBwZW5kQ29tcG9uZW50KGNvbXBvbmVudENsYXNzLCBvcHRpb25zKTtcclxuICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZS5tb2RhbENvbXBvbmVudC5jbG9zZVxyXG4gICAgICAucGlwZShmaXJzdCgpKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICBjb21wb25lbnRSZWYuZGVzdHJveSgpO1xyXG4gICAgICB9KTtcclxuICAgIHJldHVybiBjb21wb25lbnRSZWY7XHJcbiAgfVxyXG59XHJcbiJdfQ==