/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ViewChild, } from '@angular/core';
import { MzModalComponent } from '../modal.component';
/**
 * @abstract
 */
var MzBaseModal = /** @class */ (function () {
    function MzBaseModal() {
    }
    /**
     * @return {?}
     */
    MzBaseModal.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.modalComponent.openModal();
    };
    MzBaseModal.propDecorators = {
        "modalComponent": [{ type: ViewChild, args: [MzModalComponent,] },],
    };
    return MzBaseModal;
}());
export { MzBaseModal };
function MzBaseModal_tsickle_Closure_declarations() {
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    MzBaseModal.propDecorators;
    /** @type {?} */
    MzBaseModal.prototype.modalComponent;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtYmFzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXRlcmlhbGl6ZS8iLCJzb3VyY2VzIjpbInNyYy9tb2RhbC9tb2RhbC1iYXNlL21vZGFsLWJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7SUFLcEQscUNBQWU7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztLQUNqQzs7bUNBSkEsU0FBUyxTQUFDLGdCQUFnQjs7c0JBUjdCOztTQU9zQixXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIFZpZXdDaGlsZCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE16TW9kYWxDb21wb25lbnQgfSBmcm9tICcuLi9tb2RhbC5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE16QmFzZU1vZGFsIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQFZpZXdDaGlsZChNek1vZGFsQ29tcG9uZW50KSBtb2RhbENvbXBvbmVudDogTXpNb2RhbENvbXBvbmVudDtcclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5tb2RhbENvbXBvbmVudC5vcGVuTW9kYWwoKTtcclxuICB9XHJcbn1cclxuIl19