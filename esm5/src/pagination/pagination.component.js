/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HandlePropChanges } from '../shared';
var MzPaginationComponent = /** @class */ (function (_super) {
    tslib_1.__extends(MzPaginationComponent, _super);
    function MzPaginationComponent() {
        var _this = _super.call(this) || this;
        _this.currentPage = 1;
        _this.enableFirstAndLastPageButtons = false;
        _this.maxPageButtons = 5;
        _this.pageChange = new EventEmitter();
        return _this;
    }
    Object.defineProperty(MzPaginationComponent.prototype, "totalPages", {
        get: /**
         * @return {?}
         */
        function () {
            return Math.ceil(this.totalItems / this.itemsPerPage);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MzPaginationComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.initHandlers();
        this.renderButtons();
    };
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    MzPaginationComponent.prototype.changeCurrentPage = /**
     * @param {?} pageNumber
     * @return {?}
     */
    function (pageNumber) {
        this.currentPage = pageNumber;
        this.pageChange.emit(pageNumber);
        this.renderButtons();
    };
    /**
     * @return {?}
     */
    MzPaginationComponent.prototype.firstPage = /**
     * @return {?}
     */
    function () {
        this.changeCurrentPage(1);
    };
    /**
     * @return {?}
     */
    MzPaginationComponent.prototype.initHandlers = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.handlers = {
            currentPage: function () { return _this.renderButtons(); },
            itemsPerPage: function () { return _this.renderButtons(); },
            maxPageButtons: function () { return _this.renderButtons(); },
            totalItems: function () { return _this.renderButtons(); },
        };
    };
    /**
     * @return {?}
     */
    MzPaginationComponent.prototype.lastPage = /**
     * @return {?}
     */
    function () {
        this.changeCurrentPage(this.totalPages);
    };
    /**
     * @return {?}
     */
    MzPaginationComponent.prototype.nextPage = /**
     * @return {?}
     */
    function () {
        if (this.currentPage < this.totalPages) {
            var /** @type {?} */ nextPage = this.currentPage + 1;
            this.changeCurrentPage(nextPage);
        }
    };
    /**
     * @return {?}
     */
    MzPaginationComponent.prototype.previousPage = /**
     * @return {?}
     */
    function () {
        if (this.currentPage !== 1) {
            var /** @type {?} */ previousPage = this.currentPage - 1;
            this.changeCurrentPage(previousPage);
        }
    };
    /**
     * @return {?}
     */
    MzPaginationComponent.prototype.renderButtons = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ buttonsCount = Math.min(this.maxPageButtons, this.totalPages);
        var /** @type {?} */ maxPosition = this.totalPages - buttonsCount;
        var /** @type {?} */ halfButtons = Math.floor(buttonsCount / 2);
        var /** @type {?} */ hiddenPagesBefore = (this.currentPage - halfButtons);
        if (hiddenPagesBefore > maxPosition) {
            hiddenPagesBefore = maxPosition + 1;
        }
        var /** @type {?} */ from = Math.max(hiddenPagesBefore, 1);
        var /** @type {?} */ to = Math.min(this.totalPages, from + this.maxPageButtons - 1);
        this.pages = Array(buttonsCount).fill(0).map(function (x, i) { return from + i; });
        if (this.currentPage > this.totalPages) {
            this.currentPage = this.pages[0];
        }
    };
    MzPaginationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mz-pagination',
                    template: "\n  <ul class=\"pagination\">\n    <mz-pagination-page-button [disabled]=\"currentPage === 1\" *ngIf=\"enableFirstAndLastPageButtons\">\n      <a (click)=\"firstPage()\"><i mz-icon [icon]=\"'first_page'\"></i></a>\n    </mz-pagination-page-button>\n    <mz-pagination-page-button [disabled]=\"currentPage === 1\">\n      <a (click)=\"previousPage()\"><i mz-icon [icon]=\"'chevron_left'\"></i></a>\n    </mz-pagination-page-button>\n    <mz-pagination-page-button *ngFor=\"let page of pages\"\n      [active]=\"page === currentPage\"\n    >\n      <a (click)=\"changeCurrentPage(page)\">{{ page }}</a>\n    </mz-pagination-page-button>\n    <mz-pagination-page-button [disabled]=\"currentPage === totalPages\">\n      <a (click)=\"nextPage()\"><i mz-icon [icon]=\"'chevron_right'\"></i></a>\n    </mz-pagination-page-button>\n    <mz-pagination-page-button [disabled]=\"currentPage === totalPages\" *ngIf=\"enableFirstAndLastPageButtons\">\n      <a (click)=\"lastPage()\"><i mz-icon [icon]=\"'last_page'\"></i></a>\n    </mz-pagination-page-button>\n  </ul>",
                    styles: [""],
                },] },
    ];
    /** @nocollapse */
    MzPaginationComponent.ctorParameters = function () { return []; };
    MzPaginationComponent.propDecorators = {
        "currentPage": [{ type: Input },],
        "enableFirstAndLastPageButtons": [{ type: Input },],
        "itemsPerPage": [{ type: Input },],
        "maxPageButtons": [{ type: Input },],
        "totalItems": [{ type: Input },],
        "pageChange": [{ type: Output },],
    };
    return MzPaginationComponent;
}(HandlePropChanges));
export { MzPaginationComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvIiwic291cmNlcyI6WyJzcmMvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sV0FBVyxDQUFDOztJQTBCSCxpREFBaUI7SUFhMUQ7UUFBQSxZQUNFLGlCQUFPLFNBQ1I7NEJBZHNCLENBQUM7OENBQ2lCLEtBQUs7K0JBRXBCLENBQUM7MkJBRUosSUFBSSxZQUFZLEVBQVU7O0tBU2hEO0lBTkQsc0JBQUksNkNBQVU7Ozs7UUFBZDtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3ZEOzs7T0FBQTs7OztJQU1ELHdDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7S0FDdEI7Ozs7O0lBRUQsaURBQWlCOzs7O0lBQWpCLFVBQWtCLFVBQWtCO1FBQ2xDLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO1FBQzlCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztLQUN0Qjs7OztJQUVELHlDQUFTOzs7SUFBVDtRQUNFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUMzQjs7OztJQUVELDRDQUFZOzs7SUFBWjtRQUFBLGlCQU9DO1FBTkMsSUFBSSxDQUFDLFFBQVEsR0FBRztZQUNkLFdBQVcsRUFBRSxjQUFNLE9BQUEs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IElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgSGFuZGxlUHJvcENoYW5nZXMgfSBmcm9tICcuLi9zaGFyZWQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtei1wYWdpbmF0aW9uJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDx1bCBjbGFzcz1cInBhZ2luYXRpb25cIj5cclxuICAgIDxtei1wYWdpbmF0aW9uLXBhZ2UtYnV0dG9uIFtkaXNhYmxlZF09XCJjdXJyZW50UGFnZSA9PT0gMVwiICpuZ0lmPVwiZW5hYmxlRmlyc3RBbmRMYXN0UGFnZUJ1dHRvbnNcIj5cclxuICAgICAgPGEgKGNsaWNrKT1cImZpcnN0UGFnZSgpXCI+PGkgbXotaWNvbiBbaWNvbl09XCInZmlyc3RfcGFnZSdcIj48L2k+PC9hPlxyXG4gICAgPC9tei1wYWdpbmF0aW9uLXBhZ2UtYnV0dG9uPlxyXG4gICAgPG16LXBhZ2luYXRpb24tcGFnZS1idXR0b24gW2Rpc2FibGVkXT1cImN1cnJlbnRQYWdlID09PSAxXCI+XHJcbiAgICAgIDxhIChjbGljayk9XCJwcmV2aW91c1BhZ2UoKVwiPjxpIG16LWljb24gW2ljb25dPVwiJ2NoZXZyb25fbGVmdCdcIj48L2k+PC9hPlxyXG4gICAgPC9tei1wYWdpbmF0aW9uLXBhZ2UtYnV0dG9uPlxyXG4gICAgPG16LXBhZ2luYXRpb24tcGFnZS1idXR0b24gKm5nRm9yPVwibGV0IHBhZ2Ugb2YgcGFnZXNcIlxyXG4gICAgICBbYWN0aXZlXT1cInBhZ2UgPT09IGN1cnJlbnRQYWdlXCJcclxuICAgID5cclxuICAgICAgPGEgKGNsaWNrKT1cImNoYW5nZUN1cnJlbnRQYWdlKHBhZ2UpXCI+e3sgcGFnZSB9fTwvYT5cclxuICAgIDwvbXotcGFnaW5hdGlvbi1wYWdlLWJ1dHRvbj5cclxuICAgIDxtei1wYWdpbmF0aW9uLXBhZ2UtYnV0dG9uIFtkaXNhYmxlZF09XCJjdXJyZW50UGFnZSA9PT0gdG90YWxQYWdlc1wiPlxyXG4gICAgICA8YSAoY2xpY2spPVwibmV4dFBhZ2UoKVwiPjxpIG16LWljb24gW2ljb25dPVwiJ2NoZXZyb25fcmlnaHQnXCI+PC9pPjwvYT5cclxuICAgIDwvbXotcGFnaW5hdGlvbi1wYWdlLWJ1dHRvbj5cclxuICAgIDxtei1wYWdpbmF0aW9uLXBhZ2UtYnV0dG9uIFtkaXNhYmxlZF09XCJjdXJyZW50UGFnZSA9PT0gdG90YWxQYWdlc1wiICpuZ0lmPVwiZW5hYmxlRmlyc3RBbmRMYXN0UGFnZUJ1dHRvbnNcIj5cclxuICAgICAgPGEgKGNsaWNrKT1cImxhc3RQYWdlKClcIj48aSBtei1pY29uIFtpY29uXT1cIidsYXN0X3BhZ2UnXCI+PC9pPjwvYT5cclxuICAgIDwvbXotcGFnaW5hdGlvbi1wYWdlLWJ1dHRvbj5cclxuICA8L3VsPmAsXHJcbiAgc3R5bGVzOiBbYGBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpQYWdpbmF0aW9uQ29tcG9uZW50IGV4dGVuZHMgSGFuZGxlUHJvcENoYW5nZXMgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGN1cnJlbnRQYWdlID0gMTtcclxuICBASW5wdXQoKSBlbmFibGVGaXJzdEFuZExhc3RQYWdlQnV0dG9ucyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGl0ZW1zUGVyUGFnZTogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIG1heFBhZ2VCdXR0b25zID0gNTtcclxuICBASW5wdXQoKSB0b3RhbEl0ZW1zOiBudW1iZXI7XHJcbiAgQE91dHB1dCgpIHBhZ2VDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuXHJcbiAgcGFnZXM6IG51bWJlcltdO1xyXG4gIGdldCB0b3RhbFBhZ2VzKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gTWF0aC5jZWlsKHRoaXMudG90YWxJdGVtcyAvIHRoaXMuaXRlbXNQZXJQYWdlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbml0SGFuZGxlcnMoKTtcclxuICAgIHRoaXMucmVuZGVyQnV0dG9ucygpO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlQ3VycmVudFBhZ2UocGFnZU51bWJlcjogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmN1cnJlbnRQYWdlID0gcGFnZU51bWJlcjtcclxuICAgIHRoaXMucGFnZUNoYW5nZS5lbWl0KHBhZ2VOdW1iZXIpO1xyXG4gICAgdGhpcy5yZW5kZXJCdXR0b25zKCk7XHJcbiAgfVxyXG5cclxuICBmaXJzdFBhZ2UoKSB7XHJcbiAgICB0aGlzLmNoYW5nZUN1cnJlbnRQYWdlKDEpO1xyXG4gIH1cclxuXHJcbiAgaW5pdEhhbmRsZXJzKCkge1xyXG4gICAgdGhpcy5oYW5kbGVycyA9IHtcclxuICAgICAgY3VycmVudFBhZ2U6ICgpID0+IHRoaXMucmVuZGVyQnV0dG9ucygpLFxyXG4gICAgICBpdGVtc1BlclBhZ2U6ICgpID0+IHRoaXMucmVuZGVyQnV0dG9ucygpLFxyXG4gICAgICBtYXhQYWdlQnV0dG9uczogKCkgPT4gdGhpcy5yZW5kZXJCdXR0b25zKCksXHJcbiAgICAgIHRvdGFsSXRlbXM6ICgpID0+IHRoaXMucmVuZGVyQnV0dG9ucygpLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGxhc3RQYWdlKCkge1xyXG4gICAgdGhpcy5jaGFuZ2VDdXJyZW50UGFnZSh0aGlzLnRvdGFsUGFnZXMpO1xyXG4gIH1cclxuXHJcbiAgbmV4dFBhZ2UoKSB7XHJcbiAgICBpZiAodGhpcy5jdXJyZW50UGFnZSA8IHRoaXMudG90YWxQYWdlcykge1xyXG4gICAgICBjb25zdCBuZXh0UGFnZSA9IHRoaXMuY3VycmVudFBhZ2UgKyAxO1xyXG4gICAgICB0aGlzLmNoYW5nZUN1cnJlbnRQYWdlKG5leHRQYWdlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByZXZpb3VzUGFnZSgpIHtcclxuICAgIGlmICh0aGlzLmN1cnJlbnRQYWdlICE9PSAxKSB7XHJcbiAgICAgIGNvbnN0IHByZXZpb3VzUGFnZSA9IHRoaXMuY3VycmVudFBhZ2UgLSAxO1xyXG4gICAgICB0aGlzLmNoYW5nZUN1cnJlbnRQYWdlKHByZXZpb3VzUGFnZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXJCdXR0b25zKCkge1xyXG4gICAgY29uc3QgYnV0dG9uc0NvdW50ID0gTWF0aC5taW4odGhpcy5tYXhQYWdlQnV0dG9ucywgdGhpcy50b3RhbFBhZ2VzKTtcclxuICAgIGNvbnN0IG1heFBvc2l0aW9uID0gdGhpcy50b3RhbFBhZ2VzIC0gYnV0dG9uc0NvdW50O1xyXG4gICAgY29uc3QgaGFsZkJ1dHRvbnMgPSBNYXRoLmZsb29yKGJ1dHRvbnNDb3VudCAvIDIpO1xyXG5cclxuICAgIGxldCBoaWRkZW5QYWdlc0JlZm9yZSA9ICh0aGlzLmN1cnJlbnRQYWdlIC0gaGFsZkJ1dHRvbnMpO1xyXG4gICAgaWYgKGhpZGRlblBhZ2VzQmVmb3JlID4gbWF4UG9zaXRpb24pIHtcclxuICAgICAgaGlkZGVuUGFnZXNCZWZvcmUgPSBtYXhQb3NpdGlvbiArIDE7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZnJvbSA9IE1hdGgubWF4KGhpZGRlblBhZ2VzQmVmb3JlLCAxKTtcclxuICAgIGNvbnN0IHRvID0gTWF0aC5taW4odGhpcy50b3RhbFBhZ2VzLCBmcm9tICsgdGhpcy5tYXhQYWdlQnV0dG9ucyAtIDEpO1xyXG5cclxuICAgIHRoaXMucGFnZXMgPSBBcnJheShidXR0b25zQ291bnQpLmZpbGwoMCkubWFwKCh4LCBpKSA9PiBmcm9tICsgaSk7XHJcblxyXG4gICAgaWYgKHRoaXMuY3VycmVudFBhZ2UgPiB0aGlzLnRvdGFsUGFnZXMpIHtcclxuICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IHRoaXMucGFnZXNbMF07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==