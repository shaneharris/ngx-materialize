/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Directive, Input } from '@angular/core';
import { MzRemoveComponentHost } from '../../shared/remove-component-host/remove-component-host';
var MzCollapsibleItemComponent = /** @class */ (function (_super) {
    tslib_1.__extends(MzCollapsibleItemComponent, _super);
    function MzCollapsibleItemComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MzCollapsibleItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mz-collapsible-item',
                    template: "<li>\n  <div class=\"collapsible-header\"\n    [class.active]=\"active\"\n  >\n    <ng-content select=\"mz-collapsible-item-header\"></ng-content>\n  </div>\n  <div class=\"collapsible-body\">\n    <ng-content select=\"mz-collapsible-item-body\"></ng-content>\n  </div>\n</li>",
                    styles: [""],
                },] },
    ];
    /** @nocollapse */
    MzCollapsibleItemComponent.propDecorators = {
        "active": [{ type: Input },],
    };
    return MzCollapsibleItemComponent;
}(MzRemoveComponentHost));
export { MzCollapsibleItemComponent };
function MzCollapsibleItemComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MzCollapsibleItemComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MzCollapsibleItemComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    MzCollapsibleItemComponent.propDecorators;
    /** @type {?} */
    MzCollapsibleItemComponent.prototype.active;
}
var MzCollapsibleItemBodyDirective = /** @class */ (function () {
    function MzCollapsibleItemBodyDirective() {
    }
    MzCollapsibleItemBodyDirective.decorators = [
        { type: Directive, args: [{ selector: 'mz-collapsible-item-body' },] },
    ];
    return MzCollapsibleItemBodyDirective;
}());
export { MzCollapsibleItemBodyDirective };
function MzCollapsibleItemBodyDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MzCollapsibleItemBodyDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MzCollapsibleItemBodyDirective.ctorParameters;
}
var MzCollapsibleItemHeaderDirective = /** @class */ (function () {
    function MzCollapsibleItemHeaderDirective() {
    }
    MzCollapsibleItemHeaderDirective.decorators = [
        { type: Directive, args: [{ selector: 'mz-collapsible-item-header' },] },
    ];
    return MzCollapsibleItemHeaderDirective;
}());
export { MzCollapsibleItemHeaderDirective };
function MzCollapsibleItemHeaderDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MzCollapsibleItemHeaderDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MzCollapsibleItemHeaderDirective.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGFwc2libGUtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvIiwic291cmNlcyI6WyJzcmMvY29sbGFwc2libGUvY29sbGFwc2libGUtaXRlbS9jb2xsYXBzaWJsZS1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU1RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQzs7SUFnQmpELHNEQUFxQjs7Ozs7Z0JBZHBFLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixRQUFRLEVBQUUsc1JBU047b0JBQ0osTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2lCQUNiOzs7OzJCQUVFLEtBQUs7O3FDQW5CUjtFQWtCZ0QscUJBQXFCO1NBQXhELDBCQUEwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQU90QyxTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsMEJBQTBCLEVBQUU7O3lDQXpCbkQ7O1NBeUJrRSw4QkFBOEI7Ozs7Ozs7Ozs7Ozs7O2dCQUMvRixTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsNEJBQTRCLEVBQUU7OzJDQTFCckQ7O1NBMEJvRSxnQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIERpcmVjdGl2ZSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE16UmVtb3ZlQ29tcG9uZW50SG9zdCB9IGZyb20gJy4uLy4uL3NoYXJlZC9yZW1vdmUtY29tcG9uZW50LWhvc3QvcmVtb3ZlLWNvbXBvbmVudC1ob3N0JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXotY29sbGFwc2libGUtaXRlbScsXHJcbiAgdGVtcGxhdGU6IGA8bGk+XHJcbiAgPGRpdiBjbGFzcz1cImNvbGxhcHNpYmxlLWhlYWRlclwiXHJcbiAgICBbY2xhc3MuYWN0aXZlXT1cImFjdGl2ZVwiXHJcbiAgPlxyXG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibXotY29sbGFwc2libGUtaXRlbS1oZWFkZXJcIj48L25nLWNvbnRlbnQ+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImNvbGxhcHNpYmxlLWJvZHlcIj5cclxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm16LWNvbGxhcHNpYmxlLWl0ZW0tYm9keVwiPjwvbmctY29udGVudD5cclxuICA8L2Rpdj5cclxuPC9saT5gLFxyXG4gIHN0eWxlczogW2BgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16Q29sbGFwc2libGVJdGVtQ29tcG9uZW50IGV4dGVuZHMgTXpSZW1vdmVDb21wb25lbnRIb3N0IHtcclxuICBASW5wdXQoKSBhY3RpdmU6IGJvb2xlYW47XHJcbn1cclxuXHJcbi8vIERlY2xhcmUgdGhlIHRhZ3MgdG8gYXZvaWQgZXJyb3I6ICc8bXotY29sbGFwc2libGUtaXRlbS14PicgaXMgbm90IGEga25vd24gZWxlbWVudFxyXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xMTI1MVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTogZGlyZWN0aXZlLXNlbGVjdG9yXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ216LWNvbGxhcHNpYmxlLWl0ZW0tYm9keScgfSkgZXhwb3J0IGNsYXNzIE16Q29sbGFwc2libGVJdGVtQm9keURpcmVjdGl2ZSB7IH1cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnbXotY29sbGFwc2libGUtaXRlbS1oZWFkZXInIH0pIGV4cG9ydCBjbGFzcyBNekNvbGxhcHNpYmxlSXRlbUhlYWRlckRpcmVjdGl2ZSB7IH1cclxuIl19