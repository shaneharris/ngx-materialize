/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Directive, Input } from '@angular/core';
import { MzRemoveComponentHost } from '../../shared/remove-component-host/remove-component-host';
export class MzCollapsibleItemComponent extends MzRemoveComponentHost {
}
MzCollapsibleItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-collapsible-item',
                template: `<li>
  <div class="collapsible-header"
    [class.active]="active"
  >
    <ng-content select="mz-collapsible-item-header"></ng-content>
  </div>
  <div class="collapsible-body">
    <ng-content select="mz-collapsible-item-body"></ng-content>
  </div>
</li>`,
                styles: [``],
            },] },
];
/** @nocollapse */
MzCollapsibleItemComponent.propDecorators = {
    "active": [{ type: Input },],
};
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
export class MzCollapsibleItemBodyDirective {
}
MzCollapsibleItemBodyDirective.decorators = [
    { type: Directive, args: [{ selector: 'mz-collapsible-item-body' },] },
];
function MzCollapsibleItemBodyDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MzCollapsibleItemBodyDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MzCollapsibleItemBodyDirective.ctorParameters;
}
export class MzCollapsibleItemHeaderDirective {
}
MzCollapsibleItemHeaderDirective.decorators = [
    { type: Directive, args: [{ selector: 'mz-collapsible-item-header' },] },
];
function MzCollapsibleItemHeaderDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MzCollapsibleItemHeaderDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MzCollapsibleItemHeaderDirective.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGFwc2libGUtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvIiwic291cmNlcyI6WyJzcmMvY29sbGFwc2libGUvY29sbGFwc2libGUtaXRlbS9jb2xsYXBzaWJsZS1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTVELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBZ0JqRyxNQUFNLGlDQUFrQyxTQUFRLHFCQUFxQjs7O1lBZHBFLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixRQUFRLEVBQUU7Ozs7Ozs7OztNQVNOO2dCQUNKLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQzthQUNiOzs7O3VCQUVFLEtBQUs7Ozs7Ozs7Ozs7Ozs7OztBQU02QyxNQUFNOzs7WUFBMUQsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLDBCQUEwQixFQUFFOzs7Ozs7Ozs7OztBQUNJLE1BQU07OztZQUE1RCxTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsNEJBQTRCLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIERpcmVjdGl2ZSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE16UmVtb3ZlQ29tcG9uZW50SG9zdCB9IGZyb20gJy4uLy4uL3NoYXJlZC9yZW1vdmUtY29tcG9uZW50LWhvc3QvcmVtb3ZlLWNvbXBvbmVudC1ob3N0JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXotY29sbGFwc2libGUtaXRlbScsXHJcbiAgdGVtcGxhdGU6IGA8bGk+XHJcbiAgPGRpdiBjbGFzcz1cImNvbGxhcHNpYmxlLWhlYWRlclwiXHJcbiAgICBbY2xhc3MuYWN0aXZlXT1cImFjdGl2ZVwiXHJcbiAgPlxyXG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibXotY29sbGFwc2libGUtaXRlbS1oZWFkZXJcIj48L25nLWNvbnRlbnQ+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImNvbGxhcHNpYmxlLWJvZHlcIj5cclxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm16LWNvbGxhcHNpYmxlLWl0ZW0tYm9keVwiPjwvbmctY29udGVudD5cclxuICA8L2Rpdj5cclxuPC9saT5gLFxyXG4gIHN0eWxlczogW2BgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16Q29sbGFwc2libGVJdGVtQ29tcG9uZW50IGV4dGVuZHMgTXpSZW1vdmVDb21wb25lbnRIb3N0IHtcclxuICBASW5wdXQoKSBhY3RpdmU6IGJvb2xlYW47XHJcbn1cclxuXHJcbi8vIERlY2xhcmUgdGhlIHRhZ3MgdG8gYXZvaWQgZXJyb3I6ICc8bXotY29sbGFwc2libGUtaXRlbS14PicgaXMgbm90IGEga25vd24gZWxlbWVudFxyXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xMTI1MVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTogZGlyZWN0aXZlLXNlbGVjdG9yXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ216LWNvbGxhcHNpYmxlLWl0ZW0tYm9keScgfSkgZXhwb3J0IGNsYXNzIE16Q29sbGFwc2libGVJdGVtQm9keURpcmVjdGl2ZSB7IH1cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnbXotY29sbGFwc2libGUtaXRlbS1oZWFkZXInIH0pIGV4cG9ydCBjbGFzcyBNekNvbGxhcHNpYmxlSXRlbUhlYWRlckRpcmVjdGl2ZSB7IH1cclxuIl19