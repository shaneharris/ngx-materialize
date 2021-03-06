/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, EventEmitter, HostBinding, Input, Output } from '@angular/core';
export class MzChipComponent {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.chipClass = true;
        this.close = false;
        this.delete = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get chipElement() {
        return /** @type {?} */ (this.elementRef.nativeElement);
    }
    /**
     * @return {?}
     */
    onDelete() {
        let /** @type {?} */ value = '';
        for (let /** @type {?} */ i = 0; i < this.chipElement.childNodes.length; i++) {
            if (this.chipElement.childNodes.item(i).nodeType === Node.TEXT_NODE) {
                value += this.chipElement.childNodes.item(i).nodeValue;
            }
        }
        this.delete.emit(value.trim());
    }
}
MzChipComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-chip',
                template: `<ng-content></ng-content>
<i class="close material-icons" (click)="onDelete()" *ngIf="close">close</i>`,
                styles: [``],
            },] },
];
/** @nocollapse */
MzChipComponent.ctorParameters = () => [
    { type: ElementRef, },
];
MzChipComponent.propDecorators = {
    "chipClass": [{ type: HostBinding, args: ['class.chip',] },],
    "close": [{ type: Input },],
    "delete": [{ type: Output },],
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvIiwic291cmNlcyI6WyJzcmMvY2hpcC9jaGlwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUWhHLE1BQU07Ozs7SUFVSixZQUNVO1FBQUEsZUFBVSxHQUFWLFVBQVU7eUJBVm1CLElBQUk7cUJBRTFCLEtBQUs7c0JBQ0gsSUFBSSxZQUFZLEVBQVU7S0FReEM7Ozs7SUFOTCxJQUFJLFdBQVc7UUFDYixNQUFNLG1CQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBNEIsRUFBQztLQUNyRDs7OztJQU1ELFFBQVE7UUFDTixxQkFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2YsR0FBRyxDQUFDLENBQUMscUJBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDNUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDcEUsS0FBSyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7YUFDeEQ7U0FDRjtRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0tBQ2hDOzs7WUE1QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2dCQUNuQixRQUFRLEVBQUU7NkVBQ2lFO2dCQUMzRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7YUFDYjs7OztZQVBtQixVQUFVOzs7MEJBUzNCLFdBQVcsU0FBQyxZQUFZO3NCQUV4QixLQUFLO3VCQUNMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXotY2hpcCcsXHJcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjxpIGNsYXNzPVwiY2xvc2UgbWF0ZXJpYWwtaWNvbnNcIiAoY2xpY2spPVwib25EZWxldGUoKVwiICpuZ0lmPVwiY2xvc2VcIj5jbG9zZTwvaT5gLFxyXG4gIHN0eWxlczogW2BgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16Q2hpcENvbXBvbmVudCB7XHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5jaGlwJykgY2hpcENsYXNzID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KCkgY2xvc2UgPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgZGVsZXRlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG4gIGdldCBjaGlwRWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XHJcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICApIHsgfVxyXG5cclxuICBvbkRlbGV0ZSgpIHtcclxuICAgIGxldCB2YWx1ZSA9ICcnO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNoaXBFbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHRoaXMuY2hpcEVsZW1lbnQuY2hpbGROb2Rlcy5pdGVtKGkpLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xyXG4gICAgICAgIHZhbHVlICs9IHRoaXMuY2hpcEVsZW1lbnQuY2hpbGROb2Rlcy5pdGVtKGkpLm5vZGVWYWx1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5kZWxldGUuZW1pdCh2YWx1ZS50cmltKCkpO1xyXG4gIH1cclxufVxyXG4iXX0=