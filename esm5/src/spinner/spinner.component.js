/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
var MzSpinnerComponent = /** @class */ (function () {
    function MzSpinnerComponent() {
    }
    MzSpinnerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mz-spinner',
                    template: " <div class=\"preloader-wrapper active {{ size }}\">\n\n    <div\n      class=\"spinner-layer\"\n      [class.spinner-red-only]=\"color === 'red'\"\n      [class.spinner-green-only]=\"color === 'green'\"\n      [class.spinner-blue-only]=\"color === 'blue'\"\n      [class.spinner-yellow-only]=\"color === 'yellow'\">\n\n      <div class=\"circle-clipper left\">\n        <div class=\"circle\"></div>\n      </div>\n\n      <div class=\"gap-patch\">\n        <div class=\"circle\"></div>\n      </div>\n\n      <div class=\"circle-clipper right\">\n        <div class=\"circle\"></div>\n      </div>\n    </div>\n  </div>",
                    styles: [""],
                },] },
    ];
    /** @nocollapse */
    MzSpinnerComponent.propDecorators = {
        "color": [{ type: Input },],
        "size": [{ type: Input },],
    };
    return MzSpinnerComponent;
}());
export { MzSpinnerComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvIiwic291cmNlcyI6WyJzcmMvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O2dCQUVoRCxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFFBQVEsRUFBRSw4bUJBcUJIO29CQUNQLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztpQkFDYjs7OzswQkFFRSxLQUFLO3lCQUNMLEtBQUs7OzZCQTlCUjs7U0E0QmEsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtei1zcGlubmVyJyxcclxuICB0ZW1wbGF0ZTogYCA8ZGl2IGNsYXNzPVwicHJlbG9hZGVyLXdyYXBwZXIgYWN0aXZlIHt7IHNpemUgfX1cIj5cclxuXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzPVwic3Bpbm5lci1sYXllclwiXHJcbiAgICAgIFtjbGFzcy5zcGlubmVyLXJlZC1vbmx5XT1cImNvbG9yID09PSAncmVkJ1wiXHJcbiAgICAgIFtjbGFzcy5zcGlubmVyLWdyZWVuLW9ubHldPVwiY29sb3IgPT09ICdncmVlbidcIlxyXG4gICAgICBbY2xhc3Muc3Bpbm5lci1ibHVlLW9ubHldPVwiY29sb3IgPT09ICdibHVlJ1wiXHJcbiAgICAgIFtjbGFzcy5zcGlubmVyLXllbGxvdy1vbmx5XT1cImNvbG9yID09PSAneWVsbG93J1wiPlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIGxlZnRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cImdhcC1wYXRjaFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgcmlnaHRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+YCxcclxuICBzdHlsZXM6IFtgYF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNelNwaW5uZXJDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgc2l6ZTogc3RyaW5nOyAvLyBzbWFsbCwgbWVkaXVtLCBiaWdcclxufVxyXG4iXX0=