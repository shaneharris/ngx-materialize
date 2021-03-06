/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
var MzToastService = /** @class */ (function () {
    function MzToastService() {
    }
    /**
     * @param {?} message
     * @param {?} displayLength
     * @param {?=} className
     * @param {?=} completeCallback
     * @return {?}
     */
    MzToastService.prototype.show = /**
     * @param {?} message
     * @param {?} displayLength
     * @param {?=} className
     * @param {?=} completeCallback
     * @return {?}
     */
    function (message, displayLength, className, completeCallback) {
        Materialize.toast(message, displayLength, className, completeCallback);
    };
    MzToastService.decorators = [
        { type: Injectable },
    ];
    return MzToastService;
}());
export { MzToastService };
function MzToastService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MzToastService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MzToastService.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXRlcmlhbGl6ZS8iLCJzb3VyY2VzIjpbInNyYy90b2FzdC9zZXJ2aWNlcy90b2FzdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7OztJQUt6Qyw2QkFBSTs7Ozs7OztJQUFKLFVBQUssT0FBZSxFQUFFLGFBQXFCLEVBQUUsU0FBa0IsRUFBRSxnQkFBMkI7UUFDMUYsV0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0tBQ3hFOztnQkFMRixVQUFVOzt5QkFGWDs7U0FHYSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTXpUb2FzdFNlcnZpY2Uge1xyXG5cclxuICBzaG93KG1lc3NhZ2U6IHN0cmluZywgZGlzcGxheUxlbmd0aDogbnVtYmVyLCBjbGFzc05hbWU/OiBzdHJpbmcsIGNvbXBsZXRlQ2FsbGJhY2s/OiBGdW5jdGlvbikge1xyXG4gICAgTWF0ZXJpYWxpemUudG9hc3QobWVzc2FnZSwgZGlzcGxheUxlbmd0aCwgY2xhc3NOYW1lLCBjb21wbGV0ZUNhbGxiYWNrKTtcclxuICB9XHJcbn1cclxuIl19