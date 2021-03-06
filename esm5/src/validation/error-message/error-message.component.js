/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { animate, style, transition, trigger, } from '@angular/animations';
import { Component, Input, } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { ErrorMessageResource } from './models/index';
var MzErrorMessageComponent = /** @class */ (function () {
    function MzErrorMessageComponent() {
        this.errorMessage = '';
    }
    /**
     * @return {?}
     */
    MzErrorMessageComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.buildErrorMessage();
        this.controlStatusChangesSubscription = this.control.statusChanges.subscribe(function () { return _this.buildErrorMessage(); });
    };
    /**
     * @return {?}
     */
    MzErrorMessageComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.controlStatusChangesSubscription.unsubscribe();
    };
    /**
     * @return {?}
     */
    MzErrorMessageComponent.prototype.buildErrorMessage = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.errorMessage = '';
        if (this.control.errors && this.errorMessageResource) {
            Object.keys(this.control.errors).forEach(function (key) {
                _this.errorMessage += _this.errorMessageResource[key] + ' ';
            });
        }
    };
    MzErrorMessageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mz-error-message',
                    template: "<div [@enterAnimation]=\"errorMessage\" class=\"invalid\" *ngIf=\"(control.touched || control.dirty) && control.invalid && errorMessage\">{{ errorMessage }}</div>",
                    styles: ["div.invalid{color:#e30613;font-size:.8rem;opacity:1;overflow-wrap:break-word}input:not([type=checkbox])+label+:host div.invalid,mz-select-container :host div.invalid,textarea+label+:host div.invalid{margin-top:-19px;min-height:19px}"],
                    animations: [
                        trigger('enterAnimation', [
                            transition(':enter', [
                                style({ transform: 'translateY(-5px)', opacity: 0 }),
                                animate('300ms', style({ transform: 'translateY(0)', opacity: 1 })),
                            ]),
                            transition(':leave', [
                                style({ transform: 'translateY(0)', opacity: 1 }),
                                animate('300ms', style({ transform: 'translateY(-5px)', opacity: 0 })),
                            ]),
                        ]),
                    ],
                },] },
    ];
    /** @nocollapse */
    MzErrorMessageComponent.propDecorators = {
        "control": [{ type: Input },],
        "errorMessageResource": [{ type: Input },],
    };
    return MzErrorMessageComponent;
}());
export { MzErrorMessageComponent };
function MzErrorMessageComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MzErrorMessageComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MzErrorMessageComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    MzErrorMessageComponent.propDecorators;
    /** @type {?} */
    MzErrorMessageComponent.prototype.control;
    /** @type {?} */
    MzErrorMessageComponent.prototype.errorMessageResource;
    /** @type {?} */
    MzErrorMessageComponent.prototype.controlStatusChangesSubscription;
    /** @type {?} */
    MzErrorMessageComponent.prototype.errorMessage;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItbWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvIiwic291cmNlcyI6WyJzcmMvdmFsaWRhdGlvbi9lcnJvci1tZXNzYWdlL2Vycm9yLW1lc3NhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsT0FBTyxFQUNQLEtBQUssRUFDTCxVQUFVLEVBQ1YsT0FBTyxHQUNSLE1BQU0scUJBQXFCLENBQUM7QUFDN0IsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEdBR04sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR2pELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7NEJBMkJyQyxFQUFFOzs7OztJQUVqQiwwQ0FBUTs7O0lBQVI7UUFBQSxpQkFHQztRQUZDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxpQkFBaUIsRUFBRSxFQUF4QixDQUF3QixDQUFDLENBQUM7S0FDOUc7Ozs7SUFFRCw2Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsZ0NBQWdDLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDckQ7Ozs7SUFFRCxtREFBaUI7OztJQUFqQjtRQUFBLGlCQU9DO1FBTkMsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDdkIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQztZQUNuRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRztnQkFDMUMsS0FBSSxDQUFDLFlBQVksSUFBSSxLQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO2FBQzNELENBQUMsQ0FBQztTQUNOO0tBQ0Y7O2dCQTNDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsUUFBUSxFQUFFLG9LQUE4SjtvQkFDeEssTUFBTSxFQUFFLENBQUMsME9BQTBPLENBQUM7b0JBQ3BQLFVBQVUsRUFBRTt3QkFDVixPQUFPLENBQ0wsZ0JBQWdCLEVBQUU7NEJBQ2hCLFVBQVUsQ0FBQyxRQUFRLEVBQUU7Z0NBQ25CLEtBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7Z0NBQ3BELE9BQU8sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQzs2QkFDcEUsQ0FBQzs0QkFDRixVQUFVLENBQUMsUUFBUSxFQUFFO2dDQUNuQixLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQztnQ0FDakQsT0FBTyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsa0JBQWtCLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7NkJBQ3ZFLENBQUM7eUJBQ0gsQ0FDRjtxQkFDRjtpQkFDRjs7Ozs0QkFHRSxLQUFLO3lDQUNMLEtBQUs7O2tDQXZDUjs7U0FvQ2EsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBhbmltYXRlLFxyXG4gIHN0eWxlLFxyXG4gIHRyYW5zaXRpb24sXHJcbiAgdHJpZ2dlcixcclxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IEVycm9yTWVzc2FnZVJlc291cmNlIH0gZnJvbSAnLi9tb2RlbHMvaW5kZXgnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtei1lcnJvci1tZXNzYWdlJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgW0BlbnRlckFuaW1hdGlvbl09XCJlcnJvck1lc3NhZ2VcIiBjbGFzcz1cImludmFsaWRcIiAqbmdJZj1cIihjb250cm9sLnRvdWNoZWQgfHwgY29udHJvbC5kaXJ0eSkgJiYgY29udHJvbC5pbnZhbGlkICYmIGVycm9yTWVzc2FnZVwiPnt7IGVycm9yTWVzc2FnZSB9fTwvZGl2PmAsXHJcbiAgc3R5bGVzOiBbYGRpdi5pbnZhbGlke2NvbG9yOiNlMzA2MTM7Zm9udC1zaXplOi44cmVtO29wYWNpdHk6MTtvdmVyZmxvdy13cmFwOmJyZWFrLXdvcmR9aW5wdXQ6bm90KFt0eXBlPWNoZWNrYm94XSkrbGFiZWwrOmhvc3QgZGl2LmludmFsaWQsbXotc2VsZWN0LWNvbnRhaW5lciA6aG9zdCBkaXYuaW52YWxpZCx0ZXh0YXJlYStsYWJlbCs6aG9zdCBkaXYuaW52YWxpZHttYXJnaW4tdG9wOi0xOXB4O21pbi1oZWlnaHQ6MTlweH1gXSxcclxuICBhbmltYXRpb25zOiBbXHJcbiAgICB0cmlnZ2VyKFxyXG4gICAgICAnZW50ZXJBbmltYXRpb24nLCBbXHJcbiAgICAgICAgdHJhbnNpdGlvbignOmVudGVyJywgW1xyXG4gICAgICAgICAgc3R5bGUoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC01cHgpJywgb3BhY2l0eTogMCB9KSxcclxuICAgICAgICAgIGFuaW1hdGUoJzMwMG1zJywgc3R5bGUoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApJywgb3BhY2l0eTogMSB9KSksXHJcbiAgICAgICAgXSksXHJcbiAgICAgICAgdHJhbnNpdGlvbignOmxlYXZlJywgW1xyXG4gICAgICAgICAgc3R5bGUoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApJywgb3BhY2l0eTogMSB9KSxcclxuICAgICAgICAgIGFuaW1hdGUoJzMwMG1zJywgc3R5bGUoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC01cHgpJywgb3BhY2l0eTogMCB9KSksXHJcbiAgICAgICAgXSksXHJcbiAgICAgIF0sXHJcbiAgICApLFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNekVycm9yTWVzc2FnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgY29udHJvbDogQWJzdHJhY3RDb250cm9sO1xyXG4gIEBJbnB1dCgpIGVycm9yTWVzc2FnZVJlc291cmNlOiBFcnJvck1lc3NhZ2VSZXNvdXJjZTtcclxuXHJcbiAgY29udHJvbFN0YXR1c0NoYW5nZXNTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuICBlcnJvck1lc3NhZ2UgPSAnJztcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmJ1aWxkRXJyb3JNZXNzYWdlKCk7XHJcbiAgICB0aGlzLmNvbnRyb2xTdGF0dXNDaGFuZ2VzU3Vic2NyaXB0aW9uID0gdGhpcy5jb250cm9sLnN0YXR1c0NoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHRoaXMuYnVpbGRFcnJvck1lc3NhZ2UoKSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuY29udHJvbFN0YXR1c0NoYW5nZXNTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIGJ1aWxkRXJyb3JNZXNzYWdlKCkge1xyXG4gICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnJztcclxuICAgIGlmICh0aGlzLmNvbnRyb2wuZXJyb3JzICYmIHRoaXMuZXJyb3JNZXNzYWdlUmVzb3VyY2UpIHtcclxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmNvbnRyb2wuZXJyb3JzKS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSArPSB0aGlzLmVycm9yTWVzc2FnZVJlc291cmNlW2tleV0gKyAnICc7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==