/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from '@angular/core';
import { MzInjectionModule } from '../shared/injection/injection.module';
import { MzModalCloseDirective } from './modal-close/index';
import { MzModalComponent, MzModalContentDirective, MzModalFooterDirective, MzModalHeaderDirective, } from './modal.component';
import { MzModalService } from './services/index';
var MzModalModule = /** @class */ (function () {
    function MzModalModule() {
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
    return MzModalModule;
}());
export { MzModalModule };
function MzModalModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MzModalModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MzModalModule.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hdGVyaWFsaXplLyIsInNvdXJjZXMiOlsic3JjL21vZGFsL21vZGFsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM1RCxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLHVCQUF1QixFQUN2QixzQkFBc0IsRUFDdEIsc0JBQXNCLEdBQ3ZCLE1BQU0sbUJBQW1CLENBQUM7QUFDM0IsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7OztnQkFFakQsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDO29CQUM1QixZQUFZLEVBQUU7d0JBQ1oscUJBQXFCO3dCQUNyQixnQkFBZ0I7d0JBQ2hCLHVCQUF1Qjt3QkFDdkIsc0JBQXNCO3dCQUN0QixzQkFBc0I7cUJBQ3ZCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxxQkFBcUI7d0JBQ3JCLGdCQUFnQjt3QkFDaEIsdUJBQXVCO3dCQUN2QixzQkFBc0I7d0JBQ3RCLHNCQUFzQjtxQkFDdkI7b0JBQ0QsU0FBUyxFQUFFLENBQUMsY0FBYyxDQUFDO2lCQUM1Qjs7d0JBN0JEOztTQThCYSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE16SW5qZWN0aW9uTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL2luamVjdGlvbi9pbmplY3Rpb24ubW9kdWxlJztcclxuaW1wb3J0IHsgTXpNb2RhbENsb3NlRGlyZWN0aXZlIH0gZnJvbSAnLi9tb2RhbC1jbG9zZS9pbmRleCc7XHJcbmltcG9ydCB7XHJcbiAgTXpNb2RhbENvbXBvbmVudCxcclxuICBNek1vZGFsQ29udGVudERpcmVjdGl2ZSxcclxuICBNek1vZGFsRm9vdGVyRGlyZWN0aXZlLFxyXG4gIE16TW9kYWxIZWFkZXJEaXJlY3RpdmUsXHJcbn0gZnJvbSAnLi9tb2RhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNek1vZGFsU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvaW5kZXgnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbTXpJbmplY3Rpb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgTXpNb2RhbENsb3NlRGlyZWN0aXZlLFxyXG4gICAgTXpNb2RhbENvbXBvbmVudCxcclxuICAgIE16TW9kYWxDb250ZW50RGlyZWN0aXZlLFxyXG4gICAgTXpNb2RhbEZvb3RlckRpcmVjdGl2ZSxcclxuICAgIE16TW9kYWxIZWFkZXJEaXJlY3RpdmUsXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBNek1vZGFsQ2xvc2VEaXJlY3RpdmUsXHJcbiAgICBNek1vZGFsQ29tcG9uZW50LFxyXG4gICAgTXpNb2RhbENvbnRlbnREaXJlY3RpdmUsXHJcbiAgICBNek1vZGFsRm9vdGVyRGlyZWN0aXZlLFxyXG4gICAgTXpNb2RhbEhlYWRlckRpcmVjdGl2ZSxcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW016TW9kYWxTZXJ2aWNlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16TW9kYWxNb2R1bGUgeyB9XHJcbiJdfQ==