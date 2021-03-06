/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
var MzBadgeComponent = /** @class */ (function () {
    function MzBadgeComponent() {
    }
    MzBadgeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mz-badge',
                    template: "<span #badge\n  class=\"badge {{ badgeClass }}\"\n  [class.new]=\"new || !!badgeClass\"\n  [attr.data-badge-caption]=\"caption\">\n  {{ value }}\n</span>\n",
                    styles: [""],
                },] },
    ];
    /** @nocollapse */
    MzBadgeComponent.propDecorators = {
        "badgeClass": [{ type: Input },],
        "caption": [{ type: Input },],
        "new": [{ type: Input },],
        "value": [{ type: Input },],
    };
    return MzBadgeComponent;
}());
export { MzBadgeComponent };
function MzBadgeComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MzBadgeComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MzBadgeComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    MzBadgeComponent.propDecorators;
    /** @type {?} */
    MzBadgeComponent.prototype.badgeClass;
    /** @type {?} */
    MzBadgeComponent.prototype.caption;
    /** @type {?} */
    MzBadgeComponent.prototype.new;
    /** @type {?} */
    MzBadgeComponent.prototype.value;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hdGVyaWFsaXplLyIsInNvdXJjZXMiOlsic3JjL2JhZGdlL2JhZGdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O2dCQUVoRCxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLFFBQVEsRUFBRSw2SkFNWDtvQkFDQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7aUJBQ2I7Ozs7K0JBRUUsS0FBSzs0QkFDTCxLQUFLO3dCQUNMLEtBQUs7MEJBQ0wsS0FBSzs7MkJBakJSOztTQWFhLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXotYmFkZ2UnLFxyXG4gIHRlbXBsYXRlOiBgPHNwYW4gI2JhZGdlXHJcbiAgY2xhc3M9XCJiYWRnZSB7eyBiYWRnZUNsYXNzIH19XCJcclxuICBbY2xhc3MubmV3XT1cIm5ldyB8fCAhIWJhZGdlQ2xhc3NcIlxyXG4gIFthdHRyLmRhdGEtYmFkZ2UtY2FwdGlvbl09XCJjYXB0aW9uXCI+XHJcbiAge3sgdmFsdWUgfX1cclxuPC9zcGFuPlxyXG5gLFxyXG4gIHN0eWxlczogW2BgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16QmFkZ2VDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGJhZGdlQ2xhc3M6IHN0cmluZztcclxuICBASW5wdXQoKSBjYXB0aW9uOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbmV3OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHZhbHVlOiBudW1iZXI7XHJcbn1cclxuIl19