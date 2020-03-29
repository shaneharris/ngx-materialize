/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HandlePropChanges } from '../shared';
export class MzPaginationComponent extends HandlePropChanges {
    constructor() {
        super();
        this.currentPage = 1;
        this.enableFirstAndLastPageButtons = false;
        this.maxPageButtons = 5;
        this.pageChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get totalPages() {
        return Math.ceil(this.totalItems / this.itemsPerPage);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initHandlers();
        this.renderButtons();
    }
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    changeCurrentPage(pageNumber) {
        this.currentPage = pageNumber;
        this.pageChange.emit(pageNumber);
        this.renderButtons();
    }
    /**
     * @return {?}
     */
    firstPage() {
        this.changeCurrentPage(1);
    }
    /**
     * @return {?}
     */
    initHandlers() {
        this.handlers = {
            currentPage: () => this.renderButtons(),
            itemsPerPage: () => this.renderButtons(),
            maxPageButtons: () => this.renderButtons(),
            totalItems: () => this.renderButtons(),
        };
    }
    /**
     * @return {?}
     */
    lastPage() {
        this.changeCurrentPage(this.totalPages);
    }
    /**
     * @return {?}
     */
    nextPage() {
        if (this.currentPage < this.totalPages) {
            const /** @type {?} */ nextPage = this.currentPage + 1;
            this.changeCurrentPage(nextPage);
        }
    }
    /**
     * @return {?}
     */
    previousPage() {
        if (this.currentPage !== 1) {
            const /** @type {?} */ previousPage = this.currentPage - 1;
            this.changeCurrentPage(previousPage);
        }
    }
    /**
     * @return {?}
     */
    renderButtons() {
        const /** @type {?} */ buttonsCount = Math.min(this.maxPageButtons, this.totalPages);
        const /** @type {?} */ maxPosition = this.totalPages - buttonsCount;
        const /** @type {?} */ halfButtons = Math.floor(buttonsCount / 2);
        let /** @type {?} */ hiddenPagesBefore = (this.currentPage - halfButtons);
        if (hiddenPagesBefore > maxPosition) {
            hiddenPagesBefore = maxPosition + 1;
        }
        const /** @type {?} */ from = Math.max(hiddenPagesBefore, 1);
        const /** @type {?} */ to = Math.min(this.totalPages, from + this.maxPageButtons - 1);
        this.pages = Array(buttonsCount).fill(0).map((x, i) => from + i);
        if (this.currentPage > this.totalPages) {
            this.currentPage = this.pages[0];
        }
    }
}
MzPaginationComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-pagination',
                template: `
  <ul class="pagination">
    <mz-pagination-page-button [disabled]="currentPage === 1" *ngIf="enableFirstAndLastPageButtons">
      <a (click)="firstPage()"><i mz-icon [icon]="'first_page'"></i></a>
    </mz-pagination-page-button>
    <mz-pagination-page-button [disabled]="currentPage === 1">
      <a (click)="previousPage()"><i mz-icon [icon]="'chevron_left'"></i></a>
    </mz-pagination-page-button>
    <mz-pagination-page-button *ngFor="let page of pages"
      [active]="page === currentPage"
    >
      <a (click)="changeCurrentPage(page)">{{ page }}</a>
    </mz-pagination-page-button>
    <mz-pagination-page-button [disabled]="currentPage === totalPages">
      <a (click)="nextPage()"><i mz-icon [icon]="'chevron_right'"></i></a>
    </mz-pagination-page-button>
    <mz-pagination-page-button [disabled]="currentPage === totalPages" *ngIf="enableFirstAndLastPageButtons">
      <a (click)="lastPage()"><i mz-icon [icon]="'last_page'"></i></a>
    </mz-pagination-page-button>
  </ul>`,
                styles: [``],
            },] },
];
/** @nocollapse */
MzPaginationComponent.ctorParameters = () => [];
MzPaginationComponent.propDecorators = {
    "currentPage": [{ type: Input },],
    "enableFirstAndLastPageButtons": [{ type: Input },],
    "itemsPerPage": [{ type: Input },],
    "maxPageButtons": [{ type: Input },],
    "totalItems": [{ type: Input },],
    "pageChange": [{ type: Output },],
};
function MzPaginationComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MzPaginationComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MzPaginationComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    MzPaginationComponent.propDecorators;
    /** @type {?} */
    MzPaginationComponent.prototype.currentPage;
    /** @type {?} */
    MzPaginationComponent.prototype.enableFirstAndLastPageButtons;
    /** @type {?} */
    MzPaginationComponent.prototype.itemsPerPage;
    /** @type {?} */
    MzPaginationComponent.prototype.maxPageButtons;
    /** @type {?} */
    MzPaginationComponent.prototype.totalItems;
    /** @type {?} */
    MzPaginationComponent.prototype.pageChange;
    /** @type {?} */
    MzPaginationComponent.prototype.pages;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvIiwic291cmNlcyI6WyJzcmMvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUEwQjlDLE1BQU0sNEJBQTZCLFNBQVEsaUJBQWlCO0lBYTFEO1FBQ0UsS0FBSyxFQUFFLENBQUM7MkJBYmEsQ0FBQzs2Q0FDaUIsS0FBSzs4QkFFcEIsQ0FBQzswQkFFSixJQUFJLFlBQVksRUFBVTtLQVNoRDs7OztJQU5ELElBQUksVUFBVTtRQUNaLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0tBQ3ZEOzs7O0lBTUQsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7S0FDdEI7Ozs7O0lBRUQsaUJBQWlCLENBQUMsVUFBa0I7UUFDbEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7UUFDOUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0tBQ3RCOzs7O0lBRUQsU0FBUztRQUNQLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUMzQjs7OztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsUUFBUSxHQUFHO1lBQ2QsV0FBVyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdkMsWUFBWSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDeEMsY0FBYyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDMUMsVUFBVSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7U0FDdkMsQ0FBQztLQUNIOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7S0FDekM7Ozs7SUFFRCxRQUFRO1FBQ04sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUN2Qyx1QkFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ2xDO0tBQ0Y7Ozs7SUFFRCxZQUFZO1FBQ1YsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNCLHVCQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDdEM7S0FDRjs7OztJQUVELGFBQWE7UUFDWCx1QkFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNwRSx1QkFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxZQUFZLENBQUM7UUFDbkQsdUJBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRWpELHFCQUFJLGlCQUFpQixHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsQ0FBQztRQUN6RCxFQUFFLENBQUMsQ0FBQyxpQkFBaUIsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLGlCQUFpQixHQUFHLFdBQVcsR0FBRyxDQUFDLENBQUM7U0FDckM7UUFFRCx1QkFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1Qyx1QkFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRXJFLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFakUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbEM7S0FDRjs7O1lBckdGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBbUJKO2dCQUNOLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQzthQUNiOzs7Ozs0QkFFRSxLQUFLOzhDQUNMLEtBQUs7NkJBQ0wsS0FBSzsrQkFDTCxLQUFLOzJCQUNMLEtBQUs7MkJBQ0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEhhbmRsZVByb3BDaGFuZ2VzIH0gZnJvbSAnLi4vc2hhcmVkJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXotcGFnaW5hdGlvbicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8dWwgY2xhc3M9XCJwYWdpbmF0aW9uXCI+XHJcbiAgICA8bXotcGFnaW5hdGlvbi1wYWdlLWJ1dHRvbiBbZGlzYWJsZWRdPVwiY3VycmVudFBhZ2UgPT09IDFcIiAqbmdJZj1cImVuYWJsZUZpcnN0QW5kTGFzdFBhZ2VCdXR0b25zXCI+XHJcbiAgICAgIDxhIChjbGljayk9XCJmaXJzdFBhZ2UoKVwiPjxpIG16LWljb24gW2ljb25dPVwiJ2ZpcnN0X3BhZ2UnXCI+PC9pPjwvYT5cclxuICAgIDwvbXotcGFnaW5hdGlvbi1wYWdlLWJ1dHRvbj5cclxuICAgIDxtei1wYWdpbmF0aW9uLXBhZ2UtYnV0dG9uIFtkaXNhYmxlZF09XCJjdXJyZW50UGFnZSA9PT0gMVwiPlxyXG4gICAgICA8YSAoY2xpY2spPVwicHJldmlvdXNQYWdlKClcIj48aSBtei1pY29uIFtpY29uXT1cIidjaGV2cm9uX2xlZnQnXCI+PC9pPjwvYT5cclxuICAgIDwvbXotcGFnaW5hdGlvbi1wYWdlLWJ1dHRvbj5cclxuICAgIDxtei1wYWdpbmF0aW9uLXBhZ2UtYnV0dG9uICpuZ0Zvcj1cImxldCBwYWdlIG9mIHBhZ2VzXCJcclxuICAgICAgW2FjdGl2ZV09XCJwYWdlID09PSBjdXJyZW50UGFnZVwiXHJcbiAgICA+XHJcbiAgICAgIDxhIChjbGljayk9XCJjaGFuZ2VDdXJyZW50UGFnZShwYWdlKVwiPnt7IHBhZ2UgfX08L2E+XHJcbiAgICA8L216LXBhZ2luYXRpb24tcGFnZS1idXR0b24+XHJcbiAgICA8bXotcGFnaW5hdGlvbi1wYWdlLWJ1dHRvbiBbZGlzYWJsZWRdPVwiY3VycmVudFBhZ2UgPT09IHRvdGFsUGFnZXNcIj5cclxuICAgICAgPGEgKGNsaWNrKT1cIm5leHRQYWdlKClcIj48aSBtei1pY29uIFtpY29uXT1cIidjaGV2cm9uX3JpZ2h0J1wiPjwvaT48L2E+XHJcbiAgICA8L216LXBhZ2luYXRpb24tcGFnZS1idXR0b24+XHJcbiAgICA8bXotcGFnaW5hdGlvbi1wYWdlLWJ1dHRvbiBbZGlzYWJsZWRdPVwiY3VycmVudFBhZ2UgPT09IHRvdGFsUGFnZXNcIiAqbmdJZj1cImVuYWJsZUZpcnN0QW5kTGFzdFBhZ2VCdXR0b25zXCI+XHJcbiAgICAgIDxhIChjbGljayk9XCJsYXN0UGFnZSgpXCI+PGkgbXotaWNvbiBbaWNvbl09XCInbGFzdF9wYWdlJ1wiPjwvaT48L2E+XHJcbiAgICA8L216LXBhZ2luYXRpb24tcGFnZS1idXR0b24+XHJcbiAgPC91bD5gLFxyXG4gIHN0eWxlczogW2BgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16UGFnaW5hdGlvbkNvbXBvbmVudCBleHRlbmRzIEhhbmRsZVByb3BDaGFuZ2VzIGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBjdXJyZW50UGFnZSA9IDE7XHJcbiAgQElucHV0KCkgZW5hYmxlRmlyc3RBbmRMYXN0UGFnZUJ1dHRvbnMgPSBmYWxzZTtcclxuICBASW5wdXQoKSBpdGVtc1BlclBhZ2U6IG51bWJlcjtcclxuICBASW5wdXQoKSBtYXhQYWdlQnV0dG9ucyA9IDU7XHJcbiAgQElucHV0KCkgdG90YWxJdGVtczogbnVtYmVyO1xyXG4gIEBPdXRwdXQoKSBwYWdlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcblxyXG4gIHBhZ2VzOiBudW1iZXJbXTtcclxuICBnZXQgdG90YWxQYWdlcygpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIE1hdGguY2VpbCh0aGlzLnRvdGFsSXRlbXMgLyB0aGlzLml0ZW1zUGVyUGFnZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5pdEhhbmRsZXJzKCk7XHJcbiAgICB0aGlzLnJlbmRlckJ1dHRvbnMoKTtcclxuICB9XHJcblxyXG4gIGNoYW5nZUN1cnJlbnRQYWdlKHBhZ2VOdW1iZXI6IG51bWJlcikge1xyXG4gICAgdGhpcy5jdXJyZW50UGFnZSA9IHBhZ2VOdW1iZXI7XHJcbiAgICB0aGlzLnBhZ2VDaGFuZ2UuZW1pdChwYWdlTnVtYmVyKTtcclxuICAgIHRoaXMucmVuZGVyQnV0dG9ucygpO1xyXG4gIH1cclxuXHJcbiAgZmlyc3RQYWdlKCkge1xyXG4gICAgdGhpcy5jaGFuZ2VDdXJyZW50UGFnZSgxKTtcclxuICB9XHJcblxyXG4gIGluaXRIYW5kbGVycygpIHtcclxuICAgIHRoaXMuaGFuZGxlcnMgPSB7XHJcbiAgICAgIGN1cnJlbnRQYWdlOiAoKSA9PiB0aGlzLnJlbmRlckJ1dHRvbnMoKSxcclxuICAgICAgaXRlbXNQZXJQYWdlOiAoKSA9PiB0aGlzLnJlbmRlckJ1dHRvbnMoKSxcclxuICAgICAgbWF4UGFnZUJ1dHRvbnM6ICgpID0+IHRoaXMucmVuZGVyQnV0dG9ucygpLFxyXG4gICAgICB0b3RhbEl0ZW1zOiAoKSA9PiB0aGlzLnJlbmRlckJ1dHRvbnMoKSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBsYXN0UGFnZSgpIHtcclxuICAgIHRoaXMuY2hhbmdlQ3VycmVudFBhZ2UodGhpcy50b3RhbFBhZ2VzKTtcclxuICB9XHJcblxyXG4gIG5leHRQYWdlKCkge1xyXG4gICAgaWYgKHRoaXMuY3VycmVudFBhZ2UgPCB0aGlzLnRvdGFsUGFnZXMpIHtcclxuICAgICAgY29uc3QgbmV4dFBhZ2UgPSB0aGlzLmN1cnJlbnRQYWdlICsgMTtcclxuICAgICAgdGhpcy5jaGFuZ2VDdXJyZW50UGFnZShuZXh0UGFnZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcmV2aW91c1BhZ2UoKSB7XHJcbiAgICBpZiAodGhpcy5jdXJyZW50UGFnZSAhPT0gMSkge1xyXG4gICAgICBjb25zdCBwcmV2aW91c1BhZ2UgPSB0aGlzLmN1cnJlbnRQYWdlIC0gMTtcclxuICAgICAgdGhpcy5jaGFuZ2VDdXJyZW50UGFnZShwcmV2aW91c1BhZ2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyQnV0dG9ucygpIHtcclxuICAgIGNvbnN0IGJ1dHRvbnNDb3VudCA9IE1hdGgubWluKHRoaXMubWF4UGFnZUJ1dHRvbnMsIHRoaXMudG90YWxQYWdlcyk7XHJcbiAgICBjb25zdCBtYXhQb3NpdGlvbiA9IHRoaXMudG90YWxQYWdlcyAtIGJ1dHRvbnNDb3VudDtcclxuICAgIGNvbnN0IGhhbGZCdXR0b25zID0gTWF0aC5mbG9vcihidXR0b25zQ291bnQgLyAyKTtcclxuXHJcbiAgICBsZXQgaGlkZGVuUGFnZXNCZWZvcmUgPSAodGhpcy5jdXJyZW50UGFnZSAtIGhhbGZCdXR0b25zKTtcclxuICAgIGlmIChoaWRkZW5QYWdlc0JlZm9yZSA+IG1heFBvc2l0aW9uKSB7XHJcbiAgICAgIGhpZGRlblBhZ2VzQmVmb3JlID0gbWF4UG9zaXRpb24gKyAxO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZyb20gPSBNYXRoLm1heChoaWRkZW5QYWdlc0JlZm9yZSwgMSk7XHJcbiAgICBjb25zdCB0byA9IE1hdGgubWluKHRoaXMudG90YWxQYWdlcywgZnJvbSArIHRoaXMubWF4UGFnZUJ1dHRvbnMgLSAxKTtcclxuXHJcbiAgICB0aGlzLnBhZ2VzID0gQXJyYXkoYnV0dG9uc0NvdW50KS5maWxsKDApLm1hcCgoeCwgaSkgPT4gZnJvbSArIGkpO1xyXG5cclxuICAgIGlmICh0aGlzLmN1cnJlbnRQYWdlID4gdGhpcy50b3RhbFBhZ2VzKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSB0aGlzLnBhZ2VzWzBdO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=