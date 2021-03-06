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
var /** @type {?} */ MZ_MODULES = [
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
var MaterializeModule = /** @class */ (function () {
    function MaterializeModule() {
    }
    /**
     * @return {?}
     */
    MaterializeModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: MaterializeModule,
        };
    };
    MaterializeModule.decorators = [
        { type: NgModule, args: [{
                    imports: MZ_MODULES,
                    exports: MZ_MODULES,
                },] },
    ];
    return MaterializeModule;
}());
export { MaterializeModule };
function MaterializeModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MaterializeModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MaterializeModule.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0ZXJpYWxpemUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hdGVyaWFsaXplLyIsInNvdXJjZXMiOlsic3JjL21hdGVyaWFsaXplLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDcEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDcEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDOUQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDeEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzdELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDcEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDOUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDekUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRXBFLHFCQUFNLFVBQVUsR0FBRztJQUNqQixZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYixjQUFjO0lBQ2QsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsYUFBYTtJQUNiLGFBQWE7SUFDYixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZUFBZTtJQUNmLGNBQWM7SUFDZCxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZUFBZTtJQUNmLGtCQUFrQjtDQUNuQixDQUFDOzs7Ozs7Ozs7Ozs7SUFZTyx5QkFBTzs7O0lBQWQ7UUFDRSxNQUFNLENBQUM7WUFDTCxRQUFRLEVBQUUsaUJBQWlCO1NBQzVCLENBQUM7S0FDSDs7Z0JBVEYsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxVQUFVO29CQUNuQixPQUFPLEVBQUUsVUFBVTtpQkFDcEI7OzRCQWhGRDs7U0FpRmEsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBNekJhZGdlTW9kdWxlIH0gZnJvbSAnLi9iYWRnZS9iYWRnZS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBNekJ1dHRvbk1vZHVsZSB9IGZyb20gJy4vYnV0dG9uL2J1dHRvbi5tb2R1bGUnO1xyXG5pbXBvcnQgeyBNekNhcmRNb2R1bGUgfSBmcm9tICcuL2NhcmQvY2FyZC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBNekNoZWNrYm94TW9kdWxlIH0gZnJvbSAnLi9jaGVja2JveC9jaGVja2JveC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBNekNoaXBNb2R1bGUgfSBmcm9tICcuL2NoaXAvY2hpcC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBNekNvbGxhcHNpYmxlTW9kdWxlIH0gZnJvbSAnLi9jb2xsYXBzaWJsZS9jb2xsYXBzaWJsZS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBNekNvbGxlY3Rpb25Nb2R1bGUgfSBmcm9tICcuL2NvbGxlY3Rpb24vY29sbGVjdGlvbi5tb2R1bGUnO1xyXG5pbXBvcnQgeyBNekRhdGVwaWNrZXJNb2R1bGUgfSBmcm9tICcuL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci5tb2R1bGUnO1xyXG5pbXBvcnQgeyBNekRyb3Bkb3duTW9kdWxlIH0gZnJvbSAnLi9kcm9wZG93bi9kcm9wZG93bi5tb2R1bGUnO1xyXG5pbXBvcnQgeyBNekZlYXR1cmVEaXNjb3ZlcnlNb2R1bGUgfSBmcm9tICcuL2ZlYXR1cmUtZGlzY292ZXJ5L2ZlYXR1cmUtZGlzY292ZXJ5Lm1vZHVsZSc7XHJcbmltcG9ydCB7IE16SWNvbk1kaU1vZHVsZSB9IGZyb20gJy4vaWNvbi1tZGkvaWNvbi1tZGkubW9kdWxlJztcclxuaW1wb3J0IHsgTXpJY29uTW9kdWxlIH0gZnJvbSAnLi9pY29uL2ljb24ubW9kdWxlJztcclxuaW1wb3J0IHsgTXpJbnB1dE1vZHVsZSB9IGZyb20gJy4vaW5wdXQvaW5wdXQubW9kdWxlJztcclxuaW1wb3J0IHsgTXpNZWRpYU1vZHVsZSB9IGZyb20gJy4vbWVkaWEvbWVkaWEubW9kdWxlJztcclxuaW1wb3J0IHsgTXpNb2RhbE1vZHVsZSB9IGZyb20gJy4vbW9kYWwvbW9kYWwubW9kdWxlJztcclxuaW1wb3J0IHsgTXpOYXZiYXJNb2R1bGUgfSBmcm9tICcuL25hdmJhci9uYXZiYXIubW9kdWxlJztcclxuaW1wb3J0IHsgTXpQYWdpbmF0aW9uTW9kdWxlIH0gZnJvbSAnLi9wYWdpbmF0aW9uL3BhZ2luYXRpb24ubW9kdWxlJztcclxuaW1wb3J0IHsgTXpQYXJhbGxheE1vZHVsZSB9IGZyb20gJy4vcGFyYWxsYXgvcGFyYWxsYXgubW9kdWxlJztcclxuaW1wb3J0IHsgTXpQcm9ncmVzc01vZHVsZSB9IGZyb20gJy4vcHJvZ3Jlc3MvcHJvZ3Jlc3MubW9kdWxlJztcclxuaW1wb3J0IHsgTXpSYWRpb0J1dHRvbk1vZHVsZSB9IGZyb20gJy4vcmFkaW8tYnV0dG9uL3JhZGlvLWJ1dHRvbi5tb2R1bGUnO1xyXG5pbXBvcnQgeyBNelNlbGVjdE1vZHVsZSB9IGZyb20gJy4vc2VsZWN0L3NlbGVjdC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBNekluamVjdGlvbk1vZHVsZSB9IGZyb20gJy4vc2hhcmVkL2luamVjdGlvbi9pbmplY3Rpb24ubW9kdWxlJztcclxuaW1wb3J0IHsgTXpTaWRlbmF2TW9kdWxlIH0gZnJvbSAnLi9zaWRlbmF2L3NpZGVuYXYubW9kdWxlJztcclxuaW1wb3J0IHsgTXpTcGlubmVyTW9kdWxlIH0gZnJvbSAnLi9zcGlubmVyL3NwaW5uZXIubW9kdWxlJztcclxuaW1wb3J0IHsgTXpTd2l0Y2hNb2R1bGUgfSBmcm9tICcuL3N3aXRjaC9zd2l0Y2gubW9kdWxlJztcclxuaW1wb3J0IHsgTXpUYWJNb2R1bGUgfSBmcm9tICcuL3RhYi90YWIubW9kdWxlJztcclxuaW1wb3J0IHsgTXpUZXh0YXJlYU1vZHVsZSB9IGZyb20gJy4vdGV4dGFyZWEvdGV4dGFyZWEubW9kdWxlJztcclxuaW1wb3J0IHsgTXpUaW1lcGlja2VyTW9kdWxlIH0gZnJvbSAnLi90aW1lcGlja2VyL3RpbWVwaWNrZXIubW9kdWxlJztcclxuaW1wb3J0IHsgTXpUb2FzdE1vZHVsZSB9IGZyb20gJy4vdG9hc3QvdG9hc3QubW9kdWxlJztcclxuaW1wb3J0IHsgTXpUb29sdGlwTW9kdWxlIH0gZnJvbSAnLi90b29sdGlwL3Rvb2x0aXAubW9kdWxlJztcclxuaW1wb3J0IHsgTXpWYWxpZGF0aW9uTW9kdWxlIH0gZnJvbSAnLi92YWxpZGF0aW9uL3ZhbGlkYXRpb24ubW9kdWxlJztcclxuXHJcbmNvbnN0IE1aX01PRFVMRVMgPSBbXHJcbiAgQ29tbW9uTW9kdWxlLFxyXG4gIEZvcm1zTW9kdWxlLFxyXG4gIE16QmFkZ2VNb2R1bGUsXHJcbiAgTXpCdXR0b25Nb2R1bGUsXHJcbiAgTXpDYXJkTW9kdWxlLFxyXG4gIE16Q2hlY2tib3hNb2R1bGUsXHJcbiAgTXpDaGlwTW9kdWxlLFxyXG4gIE16Q29sbGFwc2libGVNb2R1bGUsXHJcbiAgTXpDb2xsZWN0aW9uTW9kdWxlLFxyXG4gIE16RGF0ZXBpY2tlck1vZHVsZSxcclxuICBNekRyb3Bkb3duTW9kdWxlLFxyXG4gIE16RmVhdHVyZURpc2NvdmVyeU1vZHVsZSxcclxuICBNekljb25Nb2R1bGUsXHJcbiAgTXpJY29uTWRpTW9kdWxlLFxyXG4gIE16SW5qZWN0aW9uTW9kdWxlLFxyXG4gIE16SW5wdXRNb2R1bGUsXHJcbiAgTXpNZWRpYU1vZHVsZSxcclxuICBNek1vZGFsTW9kdWxlLFxyXG4gIE16TmF2YmFyTW9kdWxlLFxyXG4gIE16UGFnaW5hdGlvbk1vZHVsZSxcclxuICBNelBhcmFsbGF4TW9kdWxlLFxyXG4gIE16UHJvZ3Jlc3NNb2R1bGUsXHJcbiAgTXpSYWRpb0J1dHRvbk1vZHVsZSxcclxuICBNelNlbGVjdE1vZHVsZSxcclxuICBNelNpZGVuYXZNb2R1bGUsXHJcbiAgTXpTcGlubmVyTW9kdWxlLFxyXG4gIE16U3dpdGNoTW9kdWxlLFxyXG4gIE16VGFiTW9kdWxlLFxyXG4gIE16VGV4dGFyZWFNb2R1bGUsXHJcbiAgTXpUaW1lcGlja2VyTW9kdWxlLFxyXG4gIE16VG9hc3RNb2R1bGUsXHJcbiAgTXpUb29sdGlwTW9kdWxlLFxyXG4gIE16VmFsaWRhdGlvbk1vZHVsZSxcclxuXTtcclxuXHJcbi8qKlxyXG4gKiBAZGVwcmVjYXRlZFxyXG4gKiBJbXBvcnQgc3BlY2lmaWMgY29tcG9uZW50IG1vZHVsZXMgaW5zdGVhZCAoTXpCYWRnZU1vZHVsZSwgTXpDYXJkTW9kdWxlLCBldGMpXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9zaGVyd2ViL25nMi1tYXRlcmlhbGl6ZSNtYXRlcmlhbGl6ZW1vZHVsZS1kZXByZWNhdGVkXHJcbiAqL1xyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IE1aX01PRFVMRVMsXHJcbiAgZXhwb3J0czogTVpfTU9EVUxFUyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE1hdGVyaWFsaXplTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBNYXRlcmlhbGl6ZU1vZHVsZSxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==