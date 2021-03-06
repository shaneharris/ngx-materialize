/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { animate, style, transition, trigger, } from '@angular/animations';
import { Component, Input, } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { ErrorMessageResource } from './models/index';
export class MzErrorMessageComponent {
    constructor() {
        this.errorMessage = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.buildErrorMessage();
        this.controlStatusChangesSubscription = this.control.statusChanges.subscribe(() => this.buildErrorMessage());
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.controlStatusChangesSubscription.unsubscribe();
    }
    /**
     * @return {?}
     */
    buildErrorMessage() {
        this.errorMessage = '';
        if (this.control.errors && this.errorMessageResource) {
            Object.keys(this.control.errors).forEach(key => {
                this.errorMessage += this.errorMessageResource[key] + ' ';
            });
        }
    }
}
MzErrorMessageComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-error-message',
                template: `<div [@enterAnimation]="errorMessage" class="invalid" *ngIf="(control.touched || control.dirty) && control.invalid && errorMessage">{{ errorMessage }}</div>`,
                styles: [`div.invalid{color:#e30613;font-size:.8rem;opacity:1;overflow-wrap:break-word}input:not([type=checkbox])+label+:host div.invalid,mz-select-container :host div.invalid,textarea+label+:host div.invalid{margin-top:-19px;min-height:19px}`],
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItbWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvIiwic291cmNlcyI6WyJzcmMvdmFsaWRhdGlvbi9lcnJvci1tZXNzYWdlL2Vycm9yLW1lc3NhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsT0FBTyxFQUNQLEtBQUssRUFDTCxVQUFVLEVBQ1YsT0FBTyxHQUNSLE1BQU0scUJBQXFCLENBQUM7QUFDN0IsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEdBR04sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR2pELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBcUJ0RCxNQUFNOzs0QkFNVyxFQUFFOzs7OztJQUVqQixRQUFRO1FBQ04sSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO0tBQzlHOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUNyRDs7OztJQUVELGlCQUFpQjtRQUNmLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7WUFDbkQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDN0MsSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO2FBQzNELENBQUMsQ0FBQztTQUNOO0tBQ0Y7OztZQTNDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsUUFBUSxFQUFFLDhKQUE4SjtnQkFDeEssTUFBTSxFQUFFLENBQUMsME9BQTBPLENBQUM7Z0JBQ3BQLFVBQVUsRUFBRTtvQkFDVixPQUFPLENBQ0wsZ0JBQWdCLEVBQUU7d0JBQ2hCLFVBQVUsQ0FBQyxRQUFRLEVBQUU7NEJBQ25CLEtBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7NEJBQ3BELE9BQU8sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQzt5QkFDcEUsQ0FBQzt3QkFDRixVQUFVLENBQUMsUUFBUSxFQUFFOzRCQUNuQixLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQzs0QkFDakQsT0FBTyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsa0JBQWtCLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7eUJBQ3ZFLENBQUM7cUJBQ0gsQ0FDRjtpQkFDRjthQUNGOzs7O3dCQUdFLEtBQUs7cUNBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgYW5pbWF0ZSxcclxuICBzdHlsZSxcclxuICB0cmFuc2l0aW9uLFxyXG4gIHRyaWdnZXIsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBFcnJvck1lc3NhZ2VSZXNvdXJjZSB9IGZyb20gJy4vbW9kZWxzL2luZGV4JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXotZXJyb3ItbWVzc2FnZScsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IFtAZW50ZXJBbmltYXRpb25dPVwiZXJyb3JNZXNzYWdlXCIgY2xhc3M9XCJpbnZhbGlkXCIgKm5nSWY9XCIoY29udHJvbC50b3VjaGVkIHx8IGNvbnRyb2wuZGlydHkpICYmIGNvbnRyb2wuaW52YWxpZCAmJiBlcnJvck1lc3NhZ2VcIj57eyBlcnJvck1lc3NhZ2UgfX08L2Rpdj5gLFxyXG4gIHN0eWxlczogW2BkaXYuaW52YWxpZHtjb2xvcjojZTMwNjEzO2ZvbnQtc2l6ZTouOHJlbTtvcGFjaXR5OjE7b3ZlcmZsb3ctd3JhcDpicmVhay13b3JkfWlucHV0Om5vdChbdHlwZT1jaGVja2JveF0pK2xhYmVsKzpob3N0IGRpdi5pbnZhbGlkLG16LXNlbGVjdC1jb250YWluZXIgOmhvc3QgZGl2LmludmFsaWQsdGV4dGFyZWErbGFiZWwrOmhvc3QgZGl2LmludmFsaWR7bWFyZ2luLXRvcDotMTlweDttaW4taGVpZ2h0OjE5cHh9YF0sXHJcbiAgYW5pbWF0aW9uczogW1xyXG4gICAgdHJpZ2dlcihcclxuICAgICAgJ2VudGVyQW5pbWF0aW9uJywgW1xyXG4gICAgICAgIHRyYW5zaXRpb24oJzplbnRlcicsIFtcclxuICAgICAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNXB4KScsIG9wYWNpdHk6IDAgfSksXHJcbiAgICAgICAgICBhbmltYXRlKCczMDBtcycsIHN0eWxlKHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKScsIG9wYWNpdHk6IDEgfSkpLFxyXG4gICAgICAgIF0pLFxyXG4gICAgICAgIHRyYW5zaXRpb24oJzpsZWF2ZScsIFtcclxuICAgICAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKScsIG9wYWNpdHk6IDEgfSksXHJcbiAgICAgICAgICBhbmltYXRlKCczMDBtcycsIHN0eWxlKHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNXB4KScsIG9wYWNpdHk6IDAgfSkpLFxyXG4gICAgICAgIF0pLFxyXG4gICAgICBdLFxyXG4gICAgKSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpFcnJvck1lc3NhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbDtcclxuICBASW5wdXQoKSBlcnJvck1lc3NhZ2VSZXNvdXJjZTogRXJyb3JNZXNzYWdlUmVzb3VyY2U7XHJcblxyXG4gIGNvbnRyb2xTdGF0dXNDaGFuZ2VzU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcbiAgZXJyb3JNZXNzYWdlID0gJyc7XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5idWlsZEVycm9yTWVzc2FnZSgpO1xyXG4gICAgdGhpcy5jb250cm9sU3RhdHVzQ2hhbmdlc1N1YnNjcmlwdGlvbiA9IHRoaXMuY29udHJvbC5zdGF0dXNDaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB0aGlzLmJ1aWxkRXJyb3JNZXNzYWdlKCkpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmNvbnRyb2xTdGF0dXNDaGFuZ2VzU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICBidWlsZEVycm9yTWVzc2FnZSgpIHtcclxuICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJyc7XHJcbiAgICBpZiAodGhpcy5jb250cm9sLmVycm9ycyAmJiB0aGlzLmVycm9yTWVzc2FnZVJlc291cmNlKSB7XHJcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5jb250cm9sLmVycm9ycykuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgKz0gdGhpcy5lcnJvck1lc3NhZ2VSZXNvdXJjZVtrZXldICsgJyAnO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=