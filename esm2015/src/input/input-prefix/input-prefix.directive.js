/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, Renderer } from '@angular/core';
export class MzInputPrefixDirective {
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
        this.renderer.setElementClass(this.elementRef.nativeElement, 'prefix', true);
    }
}
MzInputPrefixDirective.decorators = [
    { type: Directive, args: [{
                selector: 'i[mzInputPrefix], i[mz-input-prefix]',
            },] },
];
/** @nocollapse */
MzInputPrefixDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer, },
];
function MzInputPrefixDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MzInputPrefixDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MzInputPrefixDirective.ctorParameters;
    /** @type {?} */
    MzInputPrefixDirective.prototype.elementRef;
    /** @type {?} */
    MzInputPrefixDirective.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtcHJlZml4LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXRlcmlhbGl6ZS8iLCJzb3VyY2VzIjpbInNyYy9pbnB1dC9pbnB1dC1wcmVmaXgvaW5wdXQtcHJlZml4LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBS3hFLE1BQU07Ozs7O0lBRUosWUFDVSxZQUNBO1FBREEsZUFBVSxHQUFWLFVBQVU7UUFDVixhQUFRLEdBQVIsUUFBUTtLQUFlOzs7O0lBRWpDLFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDOUU7OztZQVhGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0NBQXNDO2FBQ2pEOzs7O1lBSm1CLFVBQVU7WUFBVSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBPbkluaXQsIFJlbmRlcmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ2lbbXpJbnB1dFByZWZpeF0sIGlbbXotaW5wdXQtcHJlZml4XScsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNeklucHV0UHJlZml4RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcikgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdwcmVmaXgnLCB0cnVlKTtcclxuICB9XHJcbn1cclxuIl19