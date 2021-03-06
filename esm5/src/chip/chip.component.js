/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, EventEmitter, HostBinding, Input, Output } from '@angular/core';
var MzChipComponent = /** @class */ (function () {
    function MzChipComponent(elementRef) {
        this.elementRef = elementRef;
        this.chipClass = true;
        this.close = false;
        this.delete = new EventEmitter();
    }
    Object.defineProperty(MzChipComponent.prototype, "chipElement", {
        get: /**
         * @return {?}
         */
        function () {
            return /** @type {?} */ (this.elementRef.nativeElement);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MzChipComponent.prototype.onDelete = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ value = '';
        for (var /** @type {?} */ i = 0; i < this.chipElement.childNodes.length; i++) {
            if (this.chipElement.childNodes.item(i).nodeType === Node.TEXT_NODE) {
                value += this.chipElement.childNodes.item(i).nodeValue;
            }
        }
        this.delete.emit(value.trim());
    };
    MzChipComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mz-chip',
                    template: "<ng-content></ng-content>\n<i class=\"close material-icons\" (click)=\"onDelete()\" *ngIf=\"close\">close</i>",
                    styles: [""],
                },] },
    ];
    /** @nocollapse */
    MzChipComponent.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    MzChipComponent.propDecorators = {
        "chipClass": [{ type: HostBinding, args: ['class.chip',] },],
        "close": [{ type: Input },],
        "delete": [{ type: Output },],
    };
    return MzChipComponent;
}());
export { MzChipComponent };
function MzChipComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MzChipComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MzChipComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    MzChipComponent.propDecorators;
    /** @type {?} */
    MzChipComponent.prototype.chipClass;
    /** @type {?} */
    MzChipComponent.prototype.close;
    /** @type {?} */
    MzChipComponent.prototype.delete;
    /** @type {?} */
    MzChipComponent.prototype.elementRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvIiwic291cmNlcyI6WyJzcmMvY2hpcC9jaGlwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOztJQWtCOUYseUJBQ1U7UUFBQSxlQUFVLEdBQVYsVUFBVTt5QkFWbUIsSUFBSTtxQkFFMUIsS0FBSztzQkFDSCxJQUFJLFlBQVksRUFBVTtLQVF4QztJQU5MLHNCQUFJLHdDQUFXOzs7O1FBQWY7WUFDRSxNQUFNLG1CQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBNEIsRUFBQztTQUNyRDs7O09BQUE7Ozs7SUFNRCxrQ0FBUTs7O0lBQVI7UUFDRSxxQkFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2YsR0FBRyxDQUFDLENBQUMscUJBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDNUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDcEUsS0FBSyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7YUFDeEQ7U0FDRjtRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0tBQ2hDOztnQkE1QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxTQUFTO29CQUNuQixRQUFRLEVBQUUsK0dBQ2lFO29CQUMzRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7aUJBQ2I7Ozs7Z0JBUG1CLFVBQVU7Ozs4QkFTM0IsV0FBVyxTQUFDLFlBQVk7MEJBRXhCLEtBQUs7MkJBQ0wsTUFBTTs7MEJBWlQ7O1NBUWEsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBIb3N0QmluZGluZywgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtei1jaGlwJyxcclxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuPGkgY2xhc3M9XCJjbG9zZSBtYXRlcmlhbC1pY29uc1wiIChjbGljayk9XCJvbkRlbGV0ZSgpXCIgKm5nSWY9XCJjbG9zZVwiPmNsb3NlPC9pPmAsXHJcbiAgc3R5bGVzOiBbYGBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpDaGlwQ29tcG9uZW50IHtcclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmNoaXAnKSBjaGlwQ2xhc3MgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKSBjbG9zZSA9IGZhbHNlO1xyXG4gIEBPdXRwdXQoKSBkZWxldGUgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuXHJcbiAgZ2V0IGNoaXBFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcclxuICAgIHJldHVybiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICkgeyB9XHJcblxyXG4gIG9uRGVsZXRlKCkge1xyXG4gICAgbGV0IHZhbHVlID0gJyc7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2hpcEVsZW1lbnQuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAodGhpcy5jaGlwRWxlbWVudC5jaGlsZE5vZGVzLml0ZW0oaSkubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XHJcbiAgICAgICAgdmFsdWUgKz0gdGhpcy5jaGlwRWxlbWVudC5jaGlsZE5vZGVzLml0ZW0oaSkubm9kZVZhbHVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmRlbGV0ZS5lbWl0KHZhbHVlLnRyaW0oKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==