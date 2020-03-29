/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class MzTabItemComponent {
    /**
     * @return {?}
     */
    get link() {
        return this.tabItemId ? this.tabItemId : this.label.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    }
}
MzTabItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-tab-item',
                template: `<div id="{{ link }}" class="{{ class }}">
  <ng-content></ng-content>
</div>`,
                styles: [``],
            },] },
];
/** @nocollapse */
MzTabItemComponent.propDecorators = {
    "active": [{ type: Input },],
    "class": [{ type: Input },],
    "disabled": [{ type: Input },],
    "href": [{ type: Input },],
    "label": [{ type: Input },],
    "tabItemId": [{ type: Input },],
    "target": [{ type: Input },],
};
function MzTabItemComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MzTabItemComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MzTabItemComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    MzTabItemComponent.propDecorators;
    /** @type {?} */
    MzTabItemComponent.prototype.active;
    /** @type {?} */
    MzTabItemComponent.prototype.class;
    /** @type {?} */
    MzTabItemComponent.prototype.disabled;
    /** @type {?} */
    MzTabItemComponent.prototype.href;
    /** @type {?} */
    MzTabItemComponent.prototype.label;
    /** @type {?} */
    MzTabItemComponent.prototype.tabItemId;
    /** @type {?} */
    MzTabItemComponent.prototype.target;
    /** @type {?} */
    MzTabItemComponent.prototype.tabs;
    /** @type {?} */
    MzTabItemComponent.prototype.liElement;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hdGVyaWFsaXplLyIsInNvdXJjZXMiOlsic3JjL3RhYi90YWItaXRlbS90YWItaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBU2pELE1BQU07Ozs7SUFZSixJQUFJLElBQUk7UUFDTixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQ2hHOzs7WUFyQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUU7O09BRUw7Z0JBQ0wsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2FBQ2I7Ozs7dUJBRUUsS0FBSztzQkFDTCxLQUFLO3lCQUNMLEtBQUs7cUJBQ0wsS0FBSztzQkFDTCxLQUFLOzBCQUNMLEtBQUs7dUJBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXotdGFiLWl0ZW0nLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiBpZD1cInt7IGxpbmsgfX1cIiBjbGFzcz1cInt7IGNsYXNzIH19XCI+XHJcbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L2Rpdj5gLFxyXG4gIHN0eWxlczogW2BgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16VGFiSXRlbUNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgYWN0aXZlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGNsYXNzOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgaHJlZjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgdGFiSXRlbUlkOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgdGFyZ2V0OiBzdHJpbmc7XHJcblxyXG4gIHRhYnM6IEhUTUxFbGVtZW50O1xyXG4gIGxpRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gIGdldCBsaW5rKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy50YWJJdGVtSWQgPyB0aGlzLnRhYkl0ZW1JZCA6IHRoaXMubGFiZWwucmVwbGFjZSgvW15hLXpBLVowLTldL2csICcnKS50b0xvd2VyQ2FzZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=