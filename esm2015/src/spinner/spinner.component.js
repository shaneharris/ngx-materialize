/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class MzSpinnerComponent {
}
MzSpinnerComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-spinner',
                template: ` <div class="preloader-wrapper active {{ size }}">

    <div
      class="spinner-layer"
      [class.spinner-red-only]="color === 'red'"
      [class.spinner-green-only]="color === 'green'"
      [class.spinner-blue-only]="color === 'blue'"
      [class.spinner-yellow-only]="color === 'yellow'">

      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>

      <div class="gap-patch">
        <div class="circle"></div>
      </div>

      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
  </div>`,
                styles: [``],
            },] },
];
/** @nocollapse */
MzSpinnerComponent.propDecorators = {
    "color": [{ type: Input },],
    "size": [{ type: Input },],
};
function MzSpinnerComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MzSpinnerComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MzSpinnerComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    MzSpinnerComponent.propDecorators;
    /** @type {?} */
    MzSpinnerComponent.prototype.color;
    /** @type {?} */
    MzSpinnerComponent.prototype.size;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvIiwic291cmNlcyI6WyJzcmMvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUE0QmpELE1BQU07OztZQTFCTCxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBcUJIO2dCQUNQLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQzthQUNiOzs7O3NCQUVFLEtBQUs7cUJBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXotc3Bpbm5lcicsXHJcbiAgdGVtcGxhdGU6IGAgPGRpdiBjbGFzcz1cInByZWxvYWRlci13cmFwcGVyIGFjdGl2ZSB7eyBzaXplIH19XCI+XHJcblxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzcz1cInNwaW5uZXItbGF5ZXJcIlxyXG4gICAgICBbY2xhc3Muc3Bpbm5lci1yZWQtb25seV09XCJjb2xvciA9PT0gJ3JlZCdcIlxyXG4gICAgICBbY2xhc3Muc3Bpbm5lci1ncmVlbi1vbmx5XT1cImNvbG9yID09PSAnZ3JlZW4nXCJcclxuICAgICAgW2NsYXNzLnNwaW5uZXItYmx1ZS1vbmx5XT1cImNvbG9yID09PSAnYmx1ZSdcIlxyXG4gICAgICBbY2xhc3Muc3Bpbm5lci15ZWxsb3ctb25seV09XCJjb2xvciA9PT0gJ3llbGxvdydcIj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciBsZWZ0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJnYXAtcGF0Y2hcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIHJpZ2h0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PmAsXHJcbiAgc3R5bGVzOiBbYGBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpTcGlubmVyQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBjb2xvcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHNpemU6IHN0cmluZzsgLy8gc21hbGwsIG1lZGl1bSwgYmlnXHJcbn1cclxuIl19