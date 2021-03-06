/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, HostListener } from '@angular/core';
import { MzModalComponent } from '../modal.component';
var MzModalCloseDirective = /** @class */ (function () {
    function MzModalCloseDirective(modalComponent) {
        this.modalComponent = modalComponent;
    }
    /**
     * @return {?}
     */
    MzModalCloseDirective.prototype.onclick = /**
     * @return {?}
     */
    function () {
        this.modalComponent.closeModal();
    };
    MzModalCloseDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'a[mzModalClose], button[mzModalClose], a[mz-modal-close], button[mz-modal-close]',
                },] },
    ];
    /** @nocollapse */
    MzModalCloseDirective.ctorParameters = function () { return [
        { type: MzModalComponent, },
    ]; };
    MzModalCloseDirective.propDecorators = {
        "onclick": [{ type: HostListener, args: ['click',] },],
    };
    return MzModalCloseDirective;
}());
export { MzModalCloseDirective };
function MzModalCloseDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MzModalCloseDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MzModalCloseDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    MzModalCloseDirective.propDecorators;
    /** @type {?} */
    MzModalCloseDirective.prototype.modalComponent;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtY2xvc2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hdGVyaWFsaXplLyIsInNvdXJjZXMiOlsic3JjL21vZGFsL21vZGFsLWNsb3NlL21vZGFsLWNsb3NlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0lBV3BELCtCQUNVO1FBQUEsbUJBQWMsR0FBZCxjQUFjO0tBQ25COzs7O0lBTmtCLHVDQUFPOzs7O1FBQzVCLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLENBQUM7OztnQkFOcEMsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrRkFBa0Y7aUJBQzdGOzs7O2dCQUpRLGdCQUFnQjs7OzRCQU90QixZQUFZLFNBQUMsT0FBTzs7Z0NBVHZCOztTQU9hLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBNek1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi4vbW9kYWwuY29tcG9uZW50JztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnYVttek1vZGFsQ2xvc2VdLCBidXR0b25bbXpNb2RhbENsb3NlXSwgYVttei1tb2RhbC1jbG9zZV0sIGJ1dHRvblttei1tb2RhbC1jbG9zZV0nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpNb2RhbENsb3NlRGlyZWN0aXZlIHtcclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKSBvbmNsaWNrKCkge1xyXG4gICAgdGhpcy5tb2RhbENvbXBvbmVudC5jbG9zZU1vZGFsKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgbW9kYWxDb21wb25lbnQ6IE16TW9kYWxDb21wb25lbnQsXHJcbiAgKSB7IH1cclxufVxyXG4iXX0=