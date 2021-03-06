/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable, } from '@angular/core';
import { first } from 'rxjs/operators';
import { MzInjectionService } from '../../shared/injection/injection.service';
export class MzModalService {
    /**
     * @param {?} injectionService
     */
    constructor(injectionService) {
        this.injectionService = injectionService;
    }
    /**
     * Open modal component.
     * @param {?} componentClass
     * @param {?=} options
     * @return {?}
     */
    open(componentClass, options = {}) {
        const /** @type {?} */ componentRef = this.injectionService.appendComponent(componentClass, options);
        componentRef.instance.modalComponent.close
            .pipe(first())
            .subscribe(() => {
            componentRef.destroy();
        });
        return componentRef;
    }
}
MzModalService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
MzModalService.ctorParameters = () => [
    { type: MzInjectionService, },
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXRlcmlhbGl6ZS8iLCJzb3VyY2VzIjpbInNyYy9tb2RhbC9zZXJ2aWNlcy9tb2RhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsVUFBVSxHQUVYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV2QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUk5RSxNQUFNOzs7O0lBRUosWUFDVTtRQUFBLHFCQUFnQixHQUFoQixnQkFBZ0I7S0FDckI7Ozs7Ozs7SUFLTCxJQUFJLENBQUMsY0FBaUMsRUFBRSxVQUFlLEVBQUU7UUFDdkQsdUJBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsY0FBYyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3BGLFlBQVksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUs7YUFDdkMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ2IsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUNkLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN4QixDQUFDLENBQUM7UUFDTCxNQUFNLENBQUMsWUFBWSxDQUFDO0tBQ3JCOzs7WUFsQkYsVUFBVTs7OztZQUhGLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50UmVmLFxyXG4gIEluamVjdGFibGUsXHJcbiAgVHlwZSxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBNekluamVjdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvaW5qZWN0aW9uL2luamVjdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTXpCYXNlTW9kYWwgfSBmcm9tICcuLi9tb2RhbC1iYXNlL2luZGV4JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE16TW9kYWxTZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGluamVjdGlvblNlcnZpY2U6IE16SW5qZWN0aW9uU2VydmljZSxcclxuICApIHsgfVxyXG5cclxuICAvKipcclxuICAgKiBPcGVuIG1vZGFsIGNvbXBvbmVudC5cclxuICAgKi9cclxuICBvcGVuKGNvbXBvbmVudENsYXNzOiBUeXBlPE16QmFzZU1vZGFsPiwgb3B0aW9uczogYW55ID0ge30pOiBDb21wb25lbnRSZWY8TXpCYXNlTW9kYWw+IHtcclxuICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuaW5qZWN0aW9uU2VydmljZS5hcHBlbmRDb21wb25lbnQoY29tcG9uZW50Q2xhc3MsIG9wdGlvbnMpO1xyXG4gICAgY29tcG9uZW50UmVmLmluc3RhbmNlLm1vZGFsQ29tcG9uZW50LmNsb3NlXHJcbiAgICAgIC5waXBlKGZpcnN0KCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIGNvbXBvbmVudFJlZi5kZXN0cm95KCk7XHJcbiAgICAgIH0pO1xyXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlZjtcclxuICB9XHJcbn1cclxuIl19