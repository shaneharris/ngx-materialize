/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ContentChild, Input } from '@angular/core';
import { NgControl } from '@angular/forms';
import { MzValidationComponent } from '../../validation/validation.component';
import { MzSelectDirective } from '../select.directive';
export class MzSelectContainerComponent {
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.initControlSubscription();
        this.initSelectSubscription();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.removeControlSubscription();
        this.removeSelectSubscription();
    }
    /**
     * @return {?}
     */
    initControlSubscription() {
        if (this.ngControl) {
            this.mzSelectDirective.disabled = this.ngControl.control.disabled;
            this.statusChangesSubscription = this.ngControl.control.statusChanges.subscribe((status) => {
                // to handle enabling/disabling formControl
                const /** @type {?} */ disabled = status === 'DISABLED';
                if (disabled !== this.mzSelectDirective.disabled) {
                    this.mzSelectDirective.disabled = disabled;
                    this.mzSelectDirective.handleDisabled();
                }
            });
            this.selectValueSubscription = this.ngControl.valueChanges.subscribe((value) => {
                // to synchronize input and select when value changes programmatically
                const /** @type {?} */ isDropdownOpen = this.mzSelectDirective.inputElement.hasClass('active');
                const /** @type {?} */ inputValue = this.mzSelectDirective.inputElement.val();
                const /** @type {?} */ options = this.mzSelectDirective.selectElement.children('option');
                const /** @type {?} */ selectedOptions = options.filter('option:selected').toArray();
                const /** @type {?} */ disabledOptions = options.filter(':disabled').toArray();
                const /** @type {?} */ selectedOptionText = selectedOptions.length === 0
                    ? disabledOptions.map(option => option.textContent)[0]
                    : selectedOptions.map(option => option.textContent).join(', ');
                if (inputValue !== selectedOptionText && !isDropdownOpen) {
                    this.mzSelectDirective.updateMaterialSelect();
                }
            });
        }
    }
    /**
     * @return {?}
     */
    initSelectSubscription() {
        if (this.mzSelectDirective) {
            this.mzSelectDirective.update
                .subscribe(() => this.registerOnBlur())
                .next();
        }
    }
    /**
     * @return {?}
     */
    registerOnBlur() {
        this.mzSelectDirective.inputElement.on('blur', () => {
            if (this.ngControl) {
                this.ngControl.control.markAsTouched();
            }
            if (this.mzValidationComponent) {
                this.mzValidationComponent.setValidationState();
            }
        });
    }
    /**
     * @return {?}
     */
    removeControlSubscription() {
        if (this.mzSelectDirective) {
            this.mzSelectDirective.update.unsubscribe();
            this.mzSelectDirective.inputElement.off();
        }
    }
    /**
     * @return {?}
     */
    removeSelectSubscription() {
        if (this.statusChangesSubscription) {
            this.statusChangesSubscription.unsubscribe();
        }
        if (this.selectValueSubscription) {
            this.selectValueSubscription.unsubscribe();
        }
    }
}
MzSelectContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-select-container',
                template: `<div
  class="input-field"
  [class.inline]="inline"
>
  <ng-content></ng-content>
</div>`,
                styles: [`.input-field:not(.inline){display:block}/deep/ .input-field .dropdown-content [type=checkbox]+label{top:-11px}`],
            },] },
];
/** @nocollapse */
MzSelectContainerComponent.propDecorators = {
    "inline": [{ type: Input },],
    "mzSelectDirective": [{ type: ContentChild, args: [MzSelectDirective,] },],
    "mzValidationComponent": [{ type: ContentChild, args: [MzValidationComponent,] },],
    "ngControl": [{ type: ContentChild, args: [NgControl,] },],
};
function MzSelectContainerComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MzSelectContainerComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MzSelectContainerComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    MzSelectContainerComponent.propDecorators;
    /** @type {?} */
    MzSelectContainerComponent.prototype.inline;
    /** @type {?} */
    MzSelectContainerComponent.prototype.mzSelectDirective;
    /** @type {?} */
    MzSelectContainerComponent.prototype.mzValidationComponent;
    /** @type {?} */
    MzSelectContainerComponent.prototype.ngControl;
    /** @type {?} */
    MzSelectContainerComponent.prototype.selectValueSubscription;
    /** @type {?} */
    MzSelectContainerComponent.prototype.statusChangesSubscription;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvIiwic291cmNlcyI6WyJzcmMvc2VsZWN0L3NlbGVjdC1jb250YWluZXIvc2VsZWN0LWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDekYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzNDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBWXhELE1BQU07Ozs7SUFVSixlQUFlO1FBQ2IsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7S0FDL0I7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7S0FDakM7Ozs7SUFFRCx1QkFBdUI7UUFDckIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDbkIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFFbEUsSUFBSSxDQUFDLHlCQUF5QixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFjLEVBQUUsRUFBRTs7Z0JBRWpHLHVCQUFNLFFBQVEsR0FBRyxNQUFNLEtBQUssVUFBVSxDQUFDO2dCQUN2QyxFQUFFLENBQUMsQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLGlCQUFpQixDQUFD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OUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUM1QztLQUNGOzs7WUEvRkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFFBQVEsRUFBRTs7Ozs7T0FLTDtnQkFDTCxNQUFNLEVBQUUsQ0FBQyxnSEFBZ0gsQ0FBQzthQUMzSDs7Ozt1QkFFRSxLQUFLO2tDQUVMLFlBQVksU0FBQyxpQkFBaUI7c0NBQzlCLFlBQVksU0FBQyxxQkFBcUI7MEJBQ2xDLFlBQVksU0FBQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQsIElucHV0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IE16VmFsaWRhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3ZhbGlkYXRpb24vdmFsaWRhdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNelNlbGVjdERpcmVjdGl2ZSB9IGZyb20gJy4uL3NlbGVjdC5kaXJlY3RpdmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtei1zZWxlY3QtY29udGFpbmVyJyxcclxuICB0ZW1wbGF0ZTogYDxkaXZcclxuICBjbGFzcz1cImlucHV0LWZpZWxkXCJcclxuICBbY2xhc3MuaW5saW5lXT1cImlubGluZVwiXHJcbj5cclxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjwvZGl2PmAsXHJcbiAgc3R5bGVzOiBbYC5pbnB1dC1maWVsZDpub3QoLmlubGluZSl7ZGlzcGxheTpibG9ja30vZGVlcC8gLmlucHV0LWZpZWxkIC5kcm9wZG93bi1jb250ZW50IFt0eXBlPWNoZWNrYm94XStsYWJlbHt0b3A6LTExcHh9YF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNelNlbGVjdENvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KCkgaW5saW5lOiBib29sZWFuO1xyXG5cclxuICBAQ29udGVudENoaWxkKE16U2VsZWN0RGlyZWN0aXZlKSBtelNlbGVjdERpcmVjdGl2ZTogTXpTZWxlY3REaXJlY3RpdmU7XHJcbiAgQENvbnRlbnRDaGlsZChNelZhbGlkYXRpb25Db21wb25lbnQpIG16VmFsaWRhdGlvbkNvbXBvbmVudDogTXpWYWxpZGF0aW9uQ29tcG9uZW50O1xyXG4gIEBDb250ZW50Q2hpbGQoTmdDb250cm9sKSBuZ0NvbnRyb2w6IE5nQ29udHJvbDtcclxuXHJcbiAgc2VsZWN0VmFsdWVTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuICBzdGF0dXNDaGFuZ2VzU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMuaW5pdENvbnRyb2xTdWJzY3JpcHRpb24oKTtcclxuICAgIHRoaXMuaW5pdFNlbGVjdFN1YnNjcmlwdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLnJlbW92ZUNvbnRyb2xTdWJzY3JpcHRpb24oKTtcclxuICAgIHRoaXMucmVtb3ZlU2VsZWN0U3Vic2NyaXB0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBpbml0Q29udHJvbFN1YnNjcmlwdGlvbigpIHtcclxuICAgIGlmICh0aGlzLm5nQ29udHJvbCkge1xyXG4gICAgICB0aGlzLm16U2VsZWN0RGlyZWN0aXZlLmRpc2FibGVkID0gdGhpcy5uZ0NvbnRyb2wuY29udHJvbC5kaXNhYmxlZDtcclxuXHJcbiAgICAgIHRoaXMuc3RhdHVzQ2hhbmdlc1N1YnNjcmlwdGlvbiA9IHRoaXMubmdDb250cm9sLmNvbnRyb2wuc3RhdHVzQ2hhbmdlcy5zdWJzY3JpYmUoKHN0YXR1czogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgLy8gdG8gaGFuZGxlIGVuYWJsaW5nL2Rpc2FibGluZyBmb3JtQ29udHJvbFxyXG4gICAgICAgIGNvbnN0IGRpc2FibGVkID0gc3RhdHVzID09PSAnRElTQUJMRUQnO1xyXG4gICAgICAgIGlmIChkaXNhYmxlZCAhPT0gdGhpcy5telNlbGVjdERpcmVjdGl2ZS5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgdGhpcy5telNlbGVjdERpcmVjdGl2ZS5kaXNhYmxlZCA9IGRpc2FibGVkO1xyXG4gICAgICAgICAgdGhpcy5telNlbGVjdERpcmVjdGl2ZS5oYW5kbGVEaXNhYmxlZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLnNlbGVjdFZhbHVlU3Vic2NyaXB0aW9uID0gdGhpcy5uZ0NvbnRyb2wudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgodmFsdWU6IGFueSkgPT4ge1xyXG4gICAgICAgIC8vIHRvIHN5bmNocm9uaXplIGlucHV0IGFuZCBzZWxlY3Qgd2hlbiB2YWx1ZSBjaGFuZ2VzIHByb2dyYW1tYXRpY2FsbHlcclxuICAgICAgICBjb25zdCBpc0Ryb3Bkb3duT3BlbiA9IHRoaXMubXpTZWxlY3REaXJlY3RpdmUuaW5wdXRFbGVtZW50Lmhhc0NsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICBjb25zdCBpbnB1dFZhbHVlID0gdGhpcy5telNlbGVjdERpcmVjdGl2ZS5pbnB1dEVsZW1lbnQudmFsKCk7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMubXpTZWxlY3REaXJlY3RpdmUuc2VsZWN0RWxlbWVudC5jaGlsZHJlbignb3B0aW9uJyk7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRPcHRpb25zID0gb3B0aW9ucy5maWx0ZXIoJ29wdGlvbjpzZWxlY3RlZCcpLnRvQXJyYXkoKTtcclxuICAgICAgICBjb25zdCBkaXNhYmxlZE9wdGlvbnMgPSBvcHRpb25zLmZpbHRlcignOmRpc2FibGVkJykudG9BcnJheSgpO1xyXG5cclxuICAgICAgICBjb25zdCBzZWxlY3RlZE9wdGlvblRleHQgPSBzZWxlY3RlZE9wdGlvbnMubGVuZ3RoID09PSAwXHJcbiAgICAgICAgICA/IGRpc2FibGVkT3B0aW9ucy5tYXAob3B0aW9uID0+IG9wdGlvbi50ZXh0Q29udGVudClbMF1cclxuICAgICAgICAgIDogc2VsZWN0ZWRPcHRpb25zLm1hcChvcHRpb24gPT4gb3B0aW9uLnRleHRDb250ZW50KS5qb2luKCcsICcpO1xyXG5cclxuICAgICAgICBpZiAoaW5wdXRWYWx1ZSAhPT0gc2VsZWN0ZWRPcHRpb25UZXh0ICYmICFpc0Ryb3Bkb3duT3Blbikge1xyXG4gICAgICAgICAgdGhpcy5telNlbGVjdERpcmVjdGl2ZS51cGRhdGVNYXRlcmlhbFNlbGVjdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbml0U2VsZWN0U3Vic2NyaXB0aW9uKCkge1xyXG4gICAgaWYgKHRoaXMubXpTZWxlY3REaXJlY3RpdmUpIHtcclxuICAgICAgdGhpcy5telNlbGVjdERpcmVjdGl2ZS51cGRhdGVcclxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMucmVnaXN0ZXJPbkJsdXIoKSlcclxuICAgICAgICAubmV4dCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkJsdXIoKSB7XHJcbiAgICB0aGlzLm16U2VsZWN0RGlyZWN0aXZlLmlucHV0RWxlbWVudC5vbignYmx1cicsICgpID0+IHtcclxuICAgICAgaWYgKHRoaXMubmdDb250cm9sKSB7XHJcbiAgICAgICAgdGhpcy5uZ0NvbnRyb2wuY29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMubXpWYWxpZGF0aW9uQ29tcG9uZW50KSB7XHJcbiAgICAgICAgdGhpcy5telZhbGlkYXRpb25Db21wb25lbnQuc2V0VmFsaWRhdGlvblN0YXRlKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlQ29udHJvbFN1YnNjcmlwdGlvbigpIHtcclxuICAgIGlmICh0aGlzLm16U2VsZWN0RGlyZWN0aXZlKSB7XHJcbiAgICAgIHRoaXMubXpTZWxlY3REaXJlY3RpdmUudXBkYXRlLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgIHRoaXMubXpTZWxlY3REaXJlY3RpdmUuaW5wdXRFbGVtZW50Lm9mZigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlU2VsZWN0U3Vic2NyaXB0aW9uKCkge1xyXG4gICAgaWYgKHRoaXMuc3RhdHVzQ2hhbmdlc1N1YnNjcmlwdGlvbikge1xyXG4gICAgICB0aGlzLnN0YXR1c0NoYW5nZXNTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNlbGVjdFZhbHVlU3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0VmFsdWVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19