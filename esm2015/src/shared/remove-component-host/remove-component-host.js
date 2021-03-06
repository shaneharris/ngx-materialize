/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ElementRef, Inject, } from '@angular/core';
/**
 * @abstract
 */
export class MzRemoveComponentHost {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.childrenElement = [];
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        const /** @type {?} */ hostElement = this.elementRef.nativeElement;
        this.parentElement = hostElement.parentElement;
        // move child out of the host element
        while (hostElement.firstChild) {
            this.childrenElement.push(this.parentElement.insertBefore(hostElement.firstChild, hostElement));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // remove moved out element
        this.childrenElement.forEach(childElement => this.parentElement.removeChild(childElement));
    }
}
/** @nocollapse */
MzRemoveComponentHost.ctorParameters = () => [
    { type: ElementRef, decorators: [{ type: Inject, args: [ElementRef,] },] },
];
function MzRemoveComponentHost_tsickle_Closure_declarations() {
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MzRemoveComponentHost.ctorParameters;
    /** @type {?} */
    MzRemoveComponentHost.prototype.childrenElement;
    /** @type {?} */
    MzRemoveComponentHost.prototype.parentElement;
    /** @type {?} */
    MzRemoveComponentHost.prototype.elementRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlLWNvbXBvbmVudC1ob3N0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hdGVyaWFsaXplLyIsInNvdXJjZXMiOlsic3JjL3NoYXJlZC9yZW1vdmUtY29tcG9uZW50LWhvc3QvcmVtb3ZlLWNvbXBvbmVudC1ob3N0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsVUFBVSxFQUNWLE1BQU0sR0FFUCxNQUFNLGVBQWUsQ0FBQzs7OztBQUV2QixNQUFNOzs7O0lBS0osWUFDNkI7UUFBQSxlQUFVLEdBQVYsVUFBVTsrQkFKRSxFQUFFO0tBS3RDOzs7O0lBRUwsZUFBZTtRQUNiLHVCQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztRQUNsRCxJQUFJLENBQUMsYUFBYSxHQUFHLFdBQVcsQ0FBQyxhQUFhLENBQUM7O1FBRy9DLE9BQU8sV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQzlCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQztTQUNqRztLQUNGOzs7O0lBRUQsV0FBVzs7UUFFVCxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7S0FDNUY7Ozs7WUEzQkQsVUFBVSx1QkFXUCxNQUFNLFNBQUMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEluamVjdCxcclxuICBPbkRlc3Ryb3ksXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTXpSZW1vdmVDb21wb25lbnRIb3N0IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgcHJpdmF0ZSBjaGlsZHJlbkVsZW1lbnQ6IEhUTUxFbGVtZW50W10gPSBbXTtcclxuICBwcml2YXRlIHBhcmVudEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBJbmplY3QoRWxlbWVudFJlZikgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgY29uc3QgaG9zdEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICAgIHRoaXMucGFyZW50RWxlbWVudCA9IGhvc3RFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgLy8gbW92ZSBjaGlsZCBvdXQgb2YgdGhlIGhvc3QgZWxlbWVudFxyXG4gICAgd2hpbGUgKGhvc3RFbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuICAgICAgdGhpcy5jaGlsZHJlbkVsZW1lbnQucHVzaCh0aGlzLnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKGhvc3RFbGVtZW50LmZpcnN0Q2hpbGQsIGhvc3RFbGVtZW50KSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIC8vIHJlbW92ZSBtb3ZlZCBvdXQgZWxlbWVudFxyXG4gICAgdGhpcy5jaGlsZHJlbkVsZW1lbnQuZm9yRWFjaChjaGlsZEVsZW1lbnQgPT4gdGhpcy5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkRWxlbWVudCkpO1xyXG4gIH1cclxufVxyXG4iXX0=