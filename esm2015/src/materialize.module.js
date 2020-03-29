/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MzBadgeModule } from './badge/badge.module';
import { MzButtonModule } from './button/button.module';
import { MzCardModule } from './card/card.module';
import { MzCheckboxModule } from './checkbox/checkbox.module';
import { MzChipModule } from './chip/chip.module';
import { MzCollapsibleModule } from './collapsible/collapsible.module';
import { MzCollectionModule } from './collection/collection.module';
import { MzDatepickerModule } from './datepicker/datepicker.module';
import { MzDropdownModule } from './dropdown/dropdown.module';
import { MzFeatureDiscoveryModule } from './feature-discovery/feature-discovery.module';
import { MzIconMdiModule } from './icon-mdi/icon-mdi.module';
import { MzIconModule } from './icon/icon.module';
import { MzInputModule } from './input/input.module';
import { MzMediaModule } from './media/media.module';
import { MzModalModule } from './modal/modal.module';
import { MzNavbarModule } from './navbar/navbar.module';
import { MzPaginationModule } from './pagination/pagination.module';
import { MzParallaxModule } from './parallax/parallax.module';
import { MzProgressModule } from './progress/progress.module';
import { MzRadioButtonModule } from './radio-button/radio-button.module';
import { MzSelectModule } from './select/select.module';
import { MzInjectionModule } from './shared/injection/injection.module';
import { MzSidenavModule } from './sidenav/sidenav.module';
import { MzSpinnerModule } from './spinner/spinner.module';
import { MzSwitchModule } from './switch/switch.module';
import { MzTabModule } from './tab/tab.module';
import { MzTextareaModule } from './textarea/textarea.module';
import { MzTimepickerModule } from './timepicker/timepicker.module';
import { MzToastModule } from './toast/toast.module';
import { MzTooltipModule } from './tooltip/tooltip.module';
import { MzValidationModule } from './validation/validation.module';
const /** @type {?} */ MZ_MODULES = [
    CommonModule,
    FormsModule,
    MzBadgeModule,
    MzButtonModule,
    MzCardModule,
    MzCheckboxModule,
    MzChipModule,
    MzCollapsibleModule,
    MzCollectionModule,
    MzDatepickerModule,
    MzDropdownModule,
    MzFeatureDiscoveryModule,
    MzIconModule,
    MzIconMdiModule,
    MzInjectionModule,
    MzInputModule,
    MzMediaModule,
    MzModalModule,
    MzNavbarModule,
    MzPaginationModule,
    MzParallaxModule,
    MzProgressModule,
    MzRadioButtonModule,
    MzSelectModule,
    MzSidenavModule,
    MzSpinnerModule,
    MzSwitchModule,
    MzTabModule,
    MzTextareaModule,
    MzTimepickerModule,
    MzToastModule,
    MzTooltipModule,
    MzValidationModule,
];
/**
 * @deprecated
 * Import specific component modules instead (MzBadgeModule, MzCardModule, etc)
 * https://github.com/sherweb/ng2-materialize#materializemodule-deprecated
 */
export class MaterializeModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: MaterializeModule,
        };
    }
}
MaterializeModule.decorators = [
    { type: NgModule, args: [{
                imports: MZ_MODULES,
                exports: MZ_MODULES,
            },] },
];
function MaterializeModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MaterializeModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MaterializeModule.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0ZXJpYWxpemUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hdGVyaWFsaXplLyIsInNvdXJjZXMiOlsic3JjL21hdGVyaWFsaXplLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDcEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDcEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDOUQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDeEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzdELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDcEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDOUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDekUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRXBFLHVCQUFNLFVBQVUsR0FBRztJQUNqQixZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYixjQUFjO0lBQ2QsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsYUFBYTtJQUNiLGFBQWE7SUFDYixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZUFBZTtJQUNmLGNBQWM7SUFDZCxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZUFBZTtJQUNmLGtCQUFrQjtDQUNuQixDQUFDOzs7Ozs7QUFXRixNQUFNOzs7O0lBQ0osTUFBTSxDQUFDLE9BQU87UUFDWixNQUFNLENBQUM7WUFDTCxRQUFRLEVBQUUsaUJBQWlCO1NBQzVCLENBQUM7S0FDSDs7O1lBVEYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxVQUFVO2dCQUNuQixPQUFPLEVBQUUsVUFBVTthQUNwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgTXpCYWRnZU1vZHVsZSB9IGZyb20gJy4vYmFkZ2UvYmFkZ2UubW9kdWxlJztcclxuaW1wb3J0IHsgTXpCdXR0b25Nb2R1bGUgfSBmcm9tICcuL2J1dHRvbi9idXR0b24ubW9kdWxlJztcclxuaW1wb3J0IHsgTXpDYXJkTW9kdWxlIH0gZnJvbSAnLi9jYXJkL2NhcmQubW9kdWxlJztcclxuaW1wb3J0IHsgTXpDaGVja2JveE1vZHVsZSB9IGZyb20gJy4vY2hlY2tib3gvY2hlY2tib3gubW9kdWxlJztcclxuaW1wb3J0IHsgTXpDaGlwTW9kdWxlIH0gZnJvbSAnLi9jaGlwL2NoaXAubW9kdWxlJztcclxuaW1wb3J0IHsgTXpDb2xsYXBzaWJsZU1vZHVsZSB9IGZyb20gJy4vY29sbGFwc2libGUvY29sbGFwc2libGUubW9kdWxlJztcclxuaW1wb3J0IHsgTXpDb2xsZWN0aW9uTW9kdWxlIH0gZnJvbSAnLi9jb2xsZWN0aW9uL2NvbGxlY3Rpb24ubW9kdWxlJztcclxuaW1wb3J0IHsgTXpEYXRlcGlja2VyTW9kdWxlIH0gZnJvbSAnLi9kYXRlcGlja2VyL2RhdGVwaWNrZXIubW9kdWxlJztcclxuaW1wb3J0IHsgTXpEcm9wZG93bk1vZHVsZSB9IGZyb20gJy4vZHJvcGRvd24vZHJvcGRvd24ubW9kdWxlJztcclxuaW1wb3J0IHsgTXpGZWF0dXJlRGlzY292ZXJ5TW9kdWxlIH0gZnJvbSAnLi9mZWF0dXJlLWRpc2NvdmVyeS9mZWF0dXJlLWRpc2NvdmVyeS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBNekljb25NZGlNb2R1bGUgfSBmcm9tICcuL2ljb24tbWRpL2ljb24tbWRpLm1vZHVsZSc7XHJcbmltcG9ydCB7IE16SWNvbk1vZHVsZSB9IGZyb20gJy4vaWNvbi9pY29uLm1vZHVsZSc7XHJcbmltcG9ydCB7IE16SW5wdXRNb2R1bGUgfSBmcm9tICcuL2lucHV0L2lucHV0Lm1vZHVsZSc7XHJcbmltcG9ydCB7IE16TWVkaWFNb2R1bGUgfSBmcm9tICcuL21lZGlhL21lZGlhLm1vZHVsZSc7XHJcbmltcG9ydCB7IE16TW9kYWxNb2R1bGUgfSBmcm9tICcuL21vZGFsL21vZGFsLm1vZHVsZSc7XHJcbmltcG9ydCB7IE16TmF2YmFyTW9kdWxlIH0gZnJvbSAnLi9uYXZiYXIvbmF2YmFyLm1vZHVsZSc7XHJcbmltcG9ydCB7IE16UGFnaW5hdGlvbk1vZHVsZSB9IGZyb20gJy4vcGFnaW5hdGlvbi9wYWdpbmF0aW9uLm1vZHVsZSc7XHJcbmltcG9ydCB7IE16UGFyYWxsYXhNb2R1bGUgfSBmcm9tICcuL3BhcmFsbGF4L3BhcmFsbGF4Lm1vZHVsZSc7XHJcbmltcG9ydCB7IE16UHJvZ3Jlc3NNb2R1bGUgfSBmcm9tICcuL3Byb2dyZXNzL3Byb2dyZXNzLm1vZHVsZSc7XHJcbmltcG9ydCB7IE16UmFkaW9CdXR0b25Nb2R1bGUgfSBmcm9tICcuL3JhZGlvLWJ1dHRvbi9yYWRpby1idXR0b24ubW9kdWxlJztcclxuaW1wb3J0IHsgTXpTZWxlY3RNb2R1bGUgfSBmcm9tICcuL3NlbGVjdC9zZWxlY3QubW9kdWxlJztcclxuaW1wb3J0IHsgTXpJbmplY3Rpb25Nb2R1bGUgfSBmcm9tICcuL3NoYXJlZC9pbmplY3Rpb24vaW5qZWN0aW9uLm1vZHVsZSc7XHJcbmltcG9ydCB7IE16U2lkZW5hdk1vZHVsZSB9IGZyb20gJy4vc2lkZW5hdi9zaWRlbmF2Lm1vZHVsZSc7XHJcbmltcG9ydCB7IE16U3Bpbm5lck1vZHVsZSB9IGZyb20gJy4vc3Bpbm5lci9zcGlubmVyLm1vZHVsZSc7XHJcbmltcG9ydCB7IE16U3dpdGNoTW9kdWxlIH0gZnJvbSAnLi9zd2l0Y2gvc3dpdGNoLm1vZHVsZSc7XHJcbmltcG9ydCB7IE16VGFiTW9kdWxlIH0gZnJvbSAnLi90YWIvdGFiLm1vZHVsZSc7XHJcbmltcG9ydCB7IE16VGV4dGFyZWFNb2R1bGUgfSBmcm9tICcuL3RleHRhcmVhL3RleHRhcmVhLm1vZHVsZSc7XHJcbmltcG9ydCB7IE16VGltZXBpY2tlck1vZHVsZSB9IGZyb20gJy4vdGltZXBpY2tlci90aW1lcGlja2VyLm1vZHVsZSc7XHJcbmltcG9ydCB7IE16VG9hc3RNb2R1bGUgfSBmcm9tICcuL3RvYXN0L3RvYXN0Lm1vZHVsZSc7XHJcbmltcG9ydCB7IE16VG9vbHRpcE1vZHVsZSB9IGZyb20gJy4vdG9vbHRpcC90b29sdGlwLm1vZHVsZSc7XHJcbmltcG9ydCB7IE16VmFsaWRhdGlvbk1vZHVsZSB9IGZyb20gJy4vdmFsaWRhdGlvbi92YWxpZGF0aW9uLm1vZHVsZSc7XHJcblxyXG5jb25zdCBNWl9NT0RVTEVTID0gW1xyXG4gIENvbW1vbk1vZHVsZSxcclxuICBGb3Jtc01vZHVsZSxcclxuICBNekJhZGdlTW9kdWxlLFxyXG4gIE16QnV0dG9uTW9kdWxlLFxyXG4gIE16Q2FyZE1vZHVsZSxcclxuICBNekNoZWNrYm94TW9kdWxlLFxyXG4gIE16Q2hpcE1vZHVsZSxcclxuICBNekNvbGxhcHNpYmxlTW9kdWxlLFxyXG4gIE16Q29sbGVjdGlvbk1vZHVsZSxcclxuICBNekRhdGVwaWNrZXJNb2R1bGUsXHJcbiAgTXpEcm9wZG93bk1vZHVsZSxcclxuICBNekZlYXR1cmVEaXNjb3ZlcnlNb2R1bGUsXHJcbiAgTXpJY29uTW9kdWxlLFxyXG4gIE16SWNvbk1kaU1vZHVsZSxcclxuICBNekluamVjdGlvbk1vZHVsZSxcclxuICBNeklucHV0TW9kdWxlLFxyXG4gIE16TWVkaWFNb2R1bGUsXHJcbiAgTXpNb2RhbE1vZHVsZSxcclxuICBNek5hdmJhck1vZHVsZSxcclxuICBNelBhZ2luYXRpb25Nb2R1bGUsXHJcbiAgTXpQYXJhbGxheE1vZHVsZSxcclxuICBNelByb2dyZXNzTW9kdWxlLFxyXG4gIE16UmFkaW9CdXR0b25Nb2R1bGUsXHJcbiAgTXpTZWxlY3RNb2R1bGUsXHJcbiAgTXpTaWRlbmF2TW9kdWxlLFxyXG4gIE16U3Bpbm5lck1vZHVsZSxcclxuICBNelN3aXRjaE1vZHVsZSxcclxuICBNelRhYk1vZHVsZSxcclxuICBNelRleHRhcmVhTW9kdWxlLFxyXG4gIE16VGltZXBpY2tlck1vZHVsZSxcclxuICBNelRvYXN0TW9kdWxlLFxyXG4gIE16VG9vbHRpcE1vZHVsZSxcclxuICBNelZhbGlkYXRpb25Nb2R1bGUsXHJcbl07XHJcblxyXG4vKipcclxuICogQGRlcHJlY2F0ZWRcclxuICogSW1wb3J0IHNwZWNpZmljIGNvbXBvbmVudCBtb2R1bGVzIGluc3RlYWQgKE16QmFkZ2VNb2R1bGUsIE16Q2FyZE1vZHVsZSwgZXRjKVxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vc2hlcndlYi9uZzItbWF0ZXJpYWxpemUjbWF0ZXJpYWxpemVtb2R1bGUtZGVwcmVjYXRlZFxyXG4gKi9cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBNWl9NT0RVTEVTLFxyXG4gIGV4cG9ydHM6IE1aX01PRFVMRVMsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXRlcmlhbGl6ZU1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogTWF0ZXJpYWxpemVNb2R1bGUsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=