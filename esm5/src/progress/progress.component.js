/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
var MzProgressComponent = /** @class */ (function () {
    function MzProgressComponent() {
    }
    MzProgressComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mz-progress',
                    template: "<div class=\"progress {{ backgroundClass }}\">\n\n  <div\n    class=\"progress-bar {{ progressClass }}\"\n    [class.determinate]=\"percentage != null\"\n    [class.indeterminate]=\"percentage == null\"\n    [style.width.%]=\"percentage\">\n  </div>\n</div>",
                    styles: [""],
                },] },
    ];
    /** @nocollapse */
    MzProgressComponent.propDecorators = {
        "backgroundClass": [{ type: Input },],
        "percentage": [{ type: Input },],
        "progressClass": [{ type: Input },],
    };
    return MzProgressComponent;
}());
export { MzProgressComponent };
function MzProgressComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MzProgressComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MzProgressComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    MzProgressComponent.propDecorators;
    /** @type {?} */
    MzProgressComponent.prototype.backgroundClass;
    /** @type {?} */
    MzProgressComponent.prototype.percentage;
    /** @type {?} */
    MzProgressComponent.prototype.progressClass;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hdGVyaWFsaXplLyIsInNvdXJjZXMiOlsic3JjL3Byb2dyZXNzL3Byb2dyZXNzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O2dCQUVoRCxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLFFBQVEsRUFBRSxtUUFRTDtvQkFDTCxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7aUJBQ2I7Ozs7b0NBRUUsS0FBSzsrQkFDTCxLQUFLO2tDQUNMLEtBQUs7OzhCQWxCUjs7U0FlYSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ216LXByb2dyZXNzJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJwcm9ncmVzcyB7eyBiYWNrZ3JvdW5kQ2xhc3MgfX1cIj5cclxuXHJcbiAgPGRpdlxyXG4gICAgY2xhc3M9XCJwcm9ncmVzcy1iYXIge3sgcHJvZ3Jlc3NDbGFzcyB9fVwiXHJcbiAgICBbY2xhc3MuZGV0ZXJtaW5hdGVdPVwicGVyY2VudGFnZSAhPSBudWxsXCJcclxuICAgIFtjbGFzcy5pbmRldGVybWluYXRlXT1cInBlcmNlbnRhZ2UgPT0gbnVsbFwiXHJcbiAgICBbc3R5bGUud2lkdGguJV09XCJwZXJjZW50YWdlXCI+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PmAsXHJcbiAgc3R5bGVzOiBbYGBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpQcm9ncmVzc0NvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgYmFja2dyb3VuZENsYXNzOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcGVyY2VudGFnZTogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIHByb2dyZXNzQ2xhc3M6IHN0cmluZztcclxufVxyXG4iXX0=