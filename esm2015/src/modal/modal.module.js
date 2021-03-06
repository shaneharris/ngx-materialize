/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from '@angular/core';
import { MzInjectionModule } from '../shared/injection/injection.module';
import { MzModalCloseDirective } from './modal-close/index';
import { MzModalComponent, MzModalContentDirective, MzModalFooterDirective, MzModalHeaderDirective, } from './modal.component';
import { MzModalService } from './services/index';
export class MzModalModule {
}
MzModalModule.decorators = [
    { type: NgModule, args: [{
                imports: [MzInjectionModule],
                declarations: [
                    MzModalCloseDirective,
                    MzModalComponent,
                    MzModalContentDirective,
                    MzModalFooterDirective,
                    MzModalHeaderDirective,
                ],
                exports: [
                    MzModalCloseDirective,
                    MzModalComponent,
                    MzModalContentDirective,
                    MzModalFooterDirective,
                    MzModalHeaderDirective,
                ],
                providers: [MzModalService],
            },] },
];
function MzModalModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MzModalModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MzModalModule.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hdGVyaWFsaXplLyIsInNvdXJjZXMiOlsic3JjL21vZGFsL21vZGFsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM1RCxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLHVCQUF1QixFQUN2QixzQkFBc0IsRUFDdEIsc0JBQXNCLEdBQ3ZCLE1BQU0sbUJBQW1CLENBQUM7QUFDM0IsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBb0JsRCxNQUFNOzs7WUFsQkwsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDO2dCQUM1QixZQUFZLEVBQUU7b0JBQ1oscUJBQXFCO29CQUNyQixnQkFBZ0I7b0JBQ2hCLHVCQUF1QjtvQkFDdkIsc0JBQXNCO29CQUN0QixzQkFBc0I7aUJBQ3ZCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxxQkFBcUI7b0JBQ3JCLGdCQUFnQjtvQkFDaEIsdUJBQXVCO29CQUN2QixzQkFBc0I7b0JBQ3RCLHNCQUFzQjtpQkFDdkI7Z0JBQ0QsU0FBUyxFQUFFLENBQUMsY0FBYyxDQUFDO2FBQzVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE16SW5qZWN0aW9uTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL2luamVjdGlvbi9pbmplY3Rpb24ubW9kdWxlJztcclxuaW1wb3J0IHsgTXpNb2RhbENsb3NlRGlyZWN0aXZlIH0gZnJvbSAnLi9tb2RhbC1jbG9zZS9pbmRleCc7XHJcbmltcG9ydCB7XHJcbiAgTXpNb2RhbENvbXBvbmVudCxcclxuICBNek1vZGFsQ29udGVudERpcmVjdGl2ZSxcclxuICBNek1vZGFsRm9vdGVyRGlyZWN0aXZlLFxyXG4gIE16TW9kYWxIZWFkZXJEaXJlY3RpdmUsXHJcbn0gZnJvbSAnLi9tb2RhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNek1vZGFsU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvaW5kZXgnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbTXpJbmplY3Rpb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgTXpNb2RhbENsb3NlRGlyZWN0aXZlLFxyXG4gICAgTXpNb2RhbENvbXBvbmVudCxcclxuICAgIE16TW9kYWxDb250ZW50RGlyZWN0aXZlLFxyXG4gICAgTXpNb2RhbEZvb3RlckRpcmVjdGl2ZSxcclxuICAgIE16TW9kYWxIZWFkZXJEaXJlY3RpdmUsXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBNek1vZGFsQ2xvc2VEaXJlY3RpdmUsXHJcbiAgICBNek1vZGFsQ29tcG9uZW50LFxyXG4gICAgTXpNb2RhbENvbnRlbnREaXJlY3RpdmUsXHJcbiAgICBNek1vZGFsRm9vdGVyRGlyZWN0aXZlLFxyXG4gICAgTXpNb2RhbEhlYWRlckRpcmVjdGl2ZSxcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW016TW9kYWxTZXJ2aWNlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16TW9kYWxNb2R1bGUgeyB9XHJcbiJdfQ==