/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, HostListener } from '@angular/core';
import { MzModalComponent } from '../modal.component';
export class MzModalCloseDirective {
    /**
     * @param {?} modalComponent
     */
    constructor(modalComponent) {
        this.modalComponent = modalComponent;
    }
    /**
     * @return {?}
     */
    onclick() {
        this.modalComponent.closeModal();
    }
}
MzModalCloseDirective.decorators = [
    { type: Directive, args: [{
                selector: 'a[mzModalClose], button[mzModalClose], a[mz-modal-close], button[mz-modal-close]',
            },] },
];
/** @nocollapse */
MzModalCloseDirective.ctorParameters = () => [
    { type: MzModalComponent, },
];
MzModalCloseDirective.propDecorators = {
    "onclick": [{ type: HostListener, args: ['click',] },],
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtY2xvc2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hdGVyaWFsaXplLyIsInNvdXJjZXMiOlsic3JjL21vZGFsL21vZGFsLWNsb3NlL21vZGFsLWNsb3NlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFLdEQsTUFBTTs7OztJQU1KLFlBQ1U7UUFBQSxtQkFBYyxHQUFkLGNBQWM7S0FDbkI7Ozs7SUFOa0IsT0FBTztRQUM1QixJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxDQUFDOzs7O1lBTnBDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0ZBQWtGO2FBQzdGOzs7O1lBSlEsZ0JBQWdCOzs7d0JBT3RCLFlBQVksU0FBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE16TW9kYWxDb21wb25lbnQgfSBmcm9tICcuLi9tb2RhbC5jb21wb25lbnQnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdhW216TW9kYWxDbG9zZV0sIGJ1dHRvblttek1vZGFsQ2xvc2VdLCBhW216LW1vZGFsLWNsb3NlXSwgYnV0dG9uW216LW1vZGFsLWNsb3NlXScsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNek1vZGFsQ2xvc2VEaXJlY3RpdmUge1xyXG5cclxuICBASG9zdExpc3RlbmVyKCdjbGljaycpIG9uY2xpY2soKSB7XHJcbiAgICB0aGlzLm1vZGFsQ29tcG9uZW50LmNsb3NlTW9kYWwoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBtb2RhbENvbXBvbmVudDogTXpNb2RhbENvbXBvbmVudCxcclxuICApIHsgfVxyXG59XHJcbiJdfQ==