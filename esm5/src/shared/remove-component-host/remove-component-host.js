/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ElementRef, Inject, } from '@angular/core';
/**
 * @abstract
 */
var MzRemoveComponentHost = /** @class */ (function () {
    function MzRemoveComponentHost(elementRef) {
        this.elementRef = elementRef;
        this.childrenElement = [];
    }
    /**
     * @return {?}
     */
    MzRemoveComponentHost.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ hostElement = this.elementRef.nativeElement;
        this.parentElement = hostElement.parentElement;
        // move child out of the host element
        while (hostElement.firstChild) {
            this.childrenElement.push(this.parentElement.insertBefore(hostElement.firstChild, hostElement));
        }
    };
    /**
     * @return {?}
     */
    MzRemoveComponentHost.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // remove moved out element
        this.childrenElement.forEach(function (childElement) { return _this.parentElement.removeChild(childElement); });
    };
    /** @nocollapse */
    MzRemoveComponentHost.ctorParameters = function () { return [
        { type: ElementRef, decorators: [{ type: Inject, args: [ElementRef,] },] },
    ]; };
    return MzRemoveComponentHost;
}());
export { MzRemoveComponentHost };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlLWNvbXBvbmVudC1ob3N0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hdGVyaWFsaXplLyIsInNvdXJjZXMiOlsic3JjL3NoYXJlZC9yZW1vdmUtY29tcG9uZW50LWhvc3QvcmVtb3ZlLWNvbXBvbmVudC1ob3N0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsVUFBVSxFQUNWLE1BQU0sR0FFUCxNQUFNLGVBQWUsQ0FBQzs7Ozs7SUFPckIsK0JBQzZCO1FBQUEsZUFBVSxHQUFWLFVBQVU7K0JBSkUsRUFBRTtLQUt0Qzs7OztJQUVMLCtDQUFlOzs7SUFBZjtRQUNFLHFCQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztRQUNsRCxJQUFJLENBQUMsYUFBYSxHQUFHLFdBQVcsQ0FBQyxhQUFhLENBQUM7O1FBRy9DLE9BQU8sV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQzlCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQztTQUNqRztLQUNGOzs7O0lBRUQsMkNBQVc7OztJQUFYO1FBQUEsaUJBR0M7O1FBREMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsVUFBQSxZQUFZLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsRUFBNUMsQ0FBNEMsQ0FBQyxDQUFDO0tBQzVGOzs7Z0JBM0JELFVBQVUsdUJBV1AsTUFBTSxTQUFDLFVBQVU7O2dDQWJ0Qjs7U0FPc0IscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5qZWN0LFxyXG4gIE9uRGVzdHJveSxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBNelJlbW92ZUNvbXBvbmVudEhvc3QgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICBwcml2YXRlIGNoaWxkcmVuRWxlbWVudDogSFRNTEVsZW1lbnRbXSA9IFtdO1xyXG4gIHByaXZhdGUgcGFyZW50RWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQEluamVjdChFbGVtZW50UmVmKSBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICApIHsgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICBjb25zdCBob3N0RWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gICAgdGhpcy5wYXJlbnRFbGVtZW50ID0gaG9zdEVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICAvLyBtb3ZlIGNoaWxkIG91dCBvZiB0aGUgaG9zdCBlbGVtZW50XHJcbiAgICB3aGlsZSAoaG9zdEVsZW1lbnQuZmlyc3RDaGlsZCkge1xyXG4gICAgICB0aGlzLmNoaWxkcmVuRWxlbWVudC5wdXNoKHRoaXMucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUoaG9zdEVsZW1lbnQuZmlyc3RDaGlsZCwgaG9zdEVsZW1lbnQpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgLy8gcmVtb3ZlIG1vdmVkIG91dCBlbGVtZW50XHJcbiAgICB0aGlzLmNoaWxkcmVuRWxlbWVudC5mb3JFYWNoKGNoaWxkRWxlbWVudCA9PiB0aGlzLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGRFbGVtZW50KSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==