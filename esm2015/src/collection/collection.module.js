/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from '@angular/core';
import { MzAvatarDirective } from './avatar/index';
import { MzCollectionHeaderComponent } from './collection-header/index';
import { MzCollectionItemComponent } from './collection-item/index';
import { MzCollectionLinkDirective } from './collection-link/index';
import { MzCollectionComponent } from './collection.component';
import { MzSecondaryContentDirective } from './secondary-content/index';
export class MzCollectionModule {
}
MzCollectionModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    MzAvatarDirective,
                    MzCollectionComponent,
                    MzCollectionItemComponent,
                    MzCollectionLinkDirective,
                    MzCollectionHeaderComponent,
                    MzSecondaryContentDirective,
                ],
                exports: [
                    MzAvatarDirective,
                    MzCollectionComponent,
                    MzCollectionItemComponent,
                    MzCollectionLinkDirective,
                    MzCollectionHeaderComponent,
                    MzSecondaryContentDirective,
                ],
            },] },
];
function MzCollectionModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MzCollectionModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MzCollectionModule.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGVjdGlvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvIiwic291cmNlcyI6WyJzcmMvY29sbGVjdGlvbi9jb2xsZWN0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNwRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNwRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQW9CeEUsTUFBTTs7O1lBbEJMLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osaUJBQWlCO29CQUNqQixxQkFBcUI7b0JBQ3JCLHlCQUF5QjtvQkFDekIseUJBQXlCO29CQUN6QiwyQkFBMkI7b0JBQzNCLDJCQUEyQjtpQkFDNUI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGlCQUFpQjtvQkFDakIscUJBQXFCO29CQUNyQix5QkFBeUI7b0JBQ3pCLHlCQUF5QjtvQkFDekIsMkJBQTJCO29CQUMzQiwyQkFBMkI7aUJBQzVCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTXpBdmF0YXJEaXJlY3RpdmUgfSBmcm9tICcuL2F2YXRhci9pbmRleCc7XHJcbmltcG9ydCB7IE16Q29sbGVjdGlvbkhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vY29sbGVjdGlvbi1oZWFkZXIvaW5kZXgnO1xyXG5pbXBvcnQgeyBNekNvbGxlY3Rpb25JdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9jb2xsZWN0aW9uLWl0ZW0vaW5kZXgnO1xyXG5pbXBvcnQgeyBNekNvbGxlY3Rpb25MaW5rRGlyZWN0aXZlIH0gZnJvbSAnLi9jb2xsZWN0aW9uLWxpbmsvaW5kZXgnO1xyXG5pbXBvcnQgeyBNekNvbGxlY3Rpb25Db21wb25lbnQgfSBmcm9tICcuL2NvbGxlY3Rpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgTXpTZWNvbmRhcnlDb250ZW50RGlyZWN0aXZlIH0gZnJvbSAnLi9zZWNvbmRhcnktY29udGVudC9pbmRleCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgTXpBdmF0YXJEaXJlY3RpdmUsXHJcbiAgICBNekNvbGxlY3Rpb25Db21wb25lbnQsXHJcbiAgICBNekNvbGxlY3Rpb25JdGVtQ29tcG9uZW50LFxyXG4gICAgTXpDb2xsZWN0aW9uTGlua0RpcmVjdGl2ZSxcclxuICAgIE16Q29sbGVjdGlvbkhlYWRlckNvbXBvbmVudCxcclxuICAgIE16U2Vjb25kYXJ5Q29udGVudERpcmVjdGl2ZSxcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIE16QXZhdGFyRGlyZWN0aXZlLFxyXG4gICAgTXpDb2xsZWN0aW9uQ29tcG9uZW50LFxyXG4gICAgTXpDb2xsZWN0aW9uSXRlbUNvbXBvbmVudCxcclxuICAgIE16Q29sbGVjdGlvbkxpbmtEaXJlY3RpdmUsXHJcbiAgICBNekNvbGxlY3Rpb25IZWFkZXJDb21wb25lbnQsXHJcbiAgICBNelNlY29uZGFyeUNvbnRlbnREaXJlY3RpdmUsXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16Q29sbGVjdGlvbk1vZHVsZSB7IH1cclxuIl19