/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ContentChildren, ElementRef, Input, QueryList, ViewChild } from '@angular/core';
import { MzTabItemComponent } from './tab-item/tab-item.component';
export class MzTabComponent {
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.initTabs();
    }
    /**
     * @return {?}
     */
    initTabs() {
        const /** @type {?} */ options = {
            onShow: this.onShow,
            responsiveThreshold: this.responsiveThreshold,
            swipeable: this.swipeable,
        };
        $(this.tabs.nativeElement).tabs(options);
    }
    /**
     * @param {?} tabItemId
     * @return {?}
     */
    selectTab(tabItemId) {
        $(this.tabs.nativeElement).tabs('select_tab', tabItemId);
    }
}
MzTabComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-tab',
                template: `<ul #tabs
  class="tabs"
  [class.tabs-fixed-width]="fixedTabWidth">
  <li class="tab" [class.disabled]="tabItem.disabled" *ngFor="let tabItem of tabItems.toArray()">
    <a [class.active]="tabItem.active"
      href="{{ tabItem.href ? tabItem.href : '#' + tabItem.link }}" target="{{ tabItem.target }}">
      {{ tabItem.label }}
    </a>
  </li>
</ul>
<div>
  <ng-content select="mz-tab-item"></ng-content>
</div>`,
                styles: [``],
            },] },
];
/** @nocollapse */
MzTabComponent.propDecorators = {
    "fixedTabWidth": [{ type: Input },],
    "onShow": [{ type: Input },],
    "responsiveThreshold": [{ type: Input },],
    "swipeable": [{ type: Input },],
    "tabs": [{ type: ViewChild, args: ['tabs',] },],
    "tabItems": [{ type: ContentChildren, args: [MzTabItemComponent,] },],
};
function MzTabComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MzTabComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MzTabComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    MzTabComponent.propDecorators;
    /** @type {?} */
    MzTabComponent.prototype.fixedTabWidth;
    /** @type {?} */
    MzTabComponent.prototype.onShow;
    /** @type {?} */
    MzTabComponent.prototype.responsiveThreshold;
    /** @type {?} */
    MzTabComponent.prototype.swipeable;
    /** @type {?} */
    MzTabComponent.prototype.tabs;
    /** @type {?} */
    MzTabComponent.prototype.tabItems;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXRlcmlhbGl6ZS8iLCJzb3VyY2VzIjpbInNyYy90YWIvdGFiLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuSCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQW1CbkUsTUFBTTs7OztJQVNKLGVBQWU7UUFDYixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDakI7Ozs7SUFFRCxRQUFRO1FBQ04sdUJBQU0sT0FBTyxHQUEyQjtZQUN0QyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLG1CQUFtQjtZQUM3QyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7U0FDMUIsQ0FBQztRQUVGLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUMxQzs7Ozs7SUFFRCxTQUFTLENBQUMsU0FBaUI7UUFDekIsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxTQUFTLENBQUMsQ0FBQztLQUMxRDs7O1lBMUNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsUUFBUTtnQkFDbEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7T0FZTDtnQkFDTCxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7YUFDYjs7Ozs4QkFFRSxLQUFLO3VCQUNMLEtBQUs7b0NBQ0wsS0FBSzswQkFDTCxLQUFLO3FCQUVMLFNBQVMsU0FBQyxNQUFNO3lCQUNoQixlQUFlLFNBQUMsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBDb250ZW50Q2hpbGRyZW4sIEVsZW1lbnRSZWYsIElucHV0LCBRdWVyeUxpc3QsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTXpUYWJJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi90YWItaXRlbS90YWItaXRlbS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtei10YWInLFxyXG4gIHRlbXBsYXRlOiBgPHVsICN0YWJzXHJcbiAgY2xhc3M9XCJ0YWJzXCJcclxuICBbY2xhc3MudGFicy1maXhlZC13aWR0aF09XCJmaXhlZFRhYldpZHRoXCI+XHJcbiAgPGxpIGNsYXNzPVwidGFiXCIgW2NsYXNzLmRpc2FibGVkXT1cInRhYkl0ZW0uZGlzYWJsZWRcIiAqbmdGb3I9XCJsZXQgdGFiSXRlbSBvZiB0YWJJdGVtcy50b0FycmF5KClcIj5cclxuICAgIDxhIFtjbGFzcy5hY3RpdmVdPVwidGFiSXRlbS5hY3RpdmVcIlxyXG4gICAgICBocmVmPVwie3sgdGFiSXRlbS5ocmVmID8gdGFiSXRlbS5ocmVmIDogJyMnICsgdGFiSXRlbS5saW5rIH19XCIgdGFyZ2V0PVwie3sgdGFiSXRlbS50YXJnZXQgfX1cIj5cclxuICAgICAge3sgdGFiSXRlbS5sYWJlbCB9fVxyXG4gICAgPC9hPlxyXG4gIDwvbGk+XHJcbjwvdWw+XHJcbjxkaXY+XHJcbiAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibXotdGFiLWl0ZW1cIj48L25nLWNvbnRlbnQ+XHJcbjwvZGl2PmAsXHJcbiAgc3R5bGVzOiBbYGBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpUYWJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuICBASW5wdXQoKSBmaXhlZFRhYldpZHRoOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIG9uU2hvdzogRnVuY3Rpb247XHJcbiAgQElucHV0KCkgcmVzcG9uc2l2ZVRocmVzaG9sZDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIHN3aXBlYWJsZTogYm9vbGVhbjtcclxuXHJcbiAgQFZpZXdDaGlsZCgndGFicycpIHRhYnM6IEVsZW1lbnRSZWY7XHJcbiAgQENvbnRlbnRDaGlsZHJlbihNelRhYkl0ZW1Db21wb25lbnQpIHRhYkl0ZW1zOiBRdWVyeUxpc3Q8TXpUYWJJdGVtQ29tcG9uZW50PjtcclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pbml0VGFicygpO1xyXG4gIH1cclxuXHJcbiAgaW5pdFRhYnMoKSB7XHJcbiAgICBjb25zdCBvcHRpb25zOiBNYXRlcmlhbGl6ZS5UYWJPcHRpb25zID0ge1xyXG4gICAgICBvblNob3c6IHRoaXMub25TaG93LFxyXG4gICAgICByZXNwb25zaXZlVGhyZXNob2xkOiB0aGlzLnJlc3BvbnNpdmVUaHJlc2hvbGQsXHJcbiAgICAgIHN3aXBlYWJsZTogdGhpcy5zd2lwZWFibGUsXHJcbiAgICB9O1xyXG5cclxuICAgICQodGhpcy50YWJzLm5hdGl2ZUVsZW1lbnQpLnRhYnMob3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RUYWIodGFiSXRlbUlkOiBzdHJpbmcpIHtcclxuICAgICQodGhpcy50YWJzLm5hdGl2ZUVsZW1lbnQpLnRhYnMoJ3NlbGVjdF90YWInLCB0YWJJdGVtSWQpO1xyXG4gIH1cclxufVxyXG4iXX0=