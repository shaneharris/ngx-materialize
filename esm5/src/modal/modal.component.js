/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Directive, ElementRef, EventEmitter, Input, Output, Renderer, ViewChild, } from '@angular/core';
import { HandlePropChanges } from '../shared/index';
var MzModalComponent = /** @class */ (function (_super) {
    tslib_1.__extends(MzModalComponent, _super);
    function MzModalComponent(renderer) {
        var _this = _super.call(this) || this;
        _this.renderer = renderer;
        _this.close = new EventEmitter();
        return _this;
    }
    /**
     * @return {?}
     */
    MzModalComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.initHandlers();
        this.initElements();
        this.handleProperties();
    };
    /**
     * @return {?}
     */
    MzModalComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.initModal();
    };
    /**
     * @return {?}
     */
    MzModalComponent.prototype.initElements = /**
     * @return {?}
     */
    function () {
        this.modalElement = $(this.modalElementRef.nativeElement);
    };
    /**
     * @return {?}
     */
    MzModalComponent.prototype.initHandlers = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.handlers = {
            options: function () { return _this.handleOptions(); },
        };
    };
    /**
     * @return {?}
     */
    MzModalComponent.prototype.initModal = /**
     * @return {?}
     */
    function () {
        this.renderer.invokeElementMethod(this.modalElement, 'modal', [this.options]);
    };
    /**
     * @return {?}
     */
    MzModalComponent.prototype.handleProperties = /**
     * @return {?}
     */
    function () {
        _super.prototype.executePropHandlers.call(this);
    };
    /**
     * @return {?}
     */
    MzModalComponent.prototype.handleOptions = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // extend complete function to emit close event on callback return
        var /** @type {?} */ originalCompleteFn = this.options && this.options.complete || (function () { });
        this.options = Object.assign({}, this.options, {
            complete: function () {
                originalCompleteFn();
                _this.close.emit();
            },
        });
    };
    /**
     * @return {?}
     */
    MzModalComponent.prototype.openModal = /**
     * @return {?}
     */
    function () {
        this.renderer.invokeElementMethod(this.modalElement, 'modal', ['open']);
    };
    /**
     * @return {?}
     */
    MzModalComponent.prototype.closeModal = /**
     * @return {?}
     */
    function () {
        this.renderer.invokeElementMethod(this.modalElement, 'modal', ['close']);
    };
    MzModalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mz-modal',
                    template: "<div #modal\n  class=\"modal\"\n  [class.modal-fixed-footer]=\"fixedFooter\"\n  [class.bottom-sheet]=\"bottomSheet\"\n  [class.modal-fullscreen]=\"fullscreen\"\n>\n  <div class=\"modal-content\">\n    <ng-content select=\"mz-modal-header\"></ng-content>\n    <div>\n      <ng-content select=\"mz-modal-content\"></ng-content>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <ng-content select=\"mz-modal-footer\"></ng-content>\n  </div>\n</div>\n",
                    styles: [".modal:not(.bottom-sheet).modal-fullscreen{top:12px!important;margin:0 auto;width:calc(100% - 24px);height:calc(100% - 24px);max-height:none}.modal.bottom-sheet.modal-fullscreen{height:100%;max-height:none}/deep/ mz-modal-header h5,/deep/ mz-modal-header h6{margin-top:0}"],
                },] },
    ];
    /** @nocollapse */
    MzModalComponent.ctorParameters = function () { return [
        { type: Renderer, },
    ]; };
    MzModalComponent.propDecorators = {
        "bottomSheet": [{ type: Input },],
        "fixedFooter": [{ type: Input },],
        "fullscreen": [{ type: Input },],
        "options": [{ type: Input },],
        "close": [{ type: Output },],
        "modalElementRef": [{ type: ViewChild, args: ['modal',] },],
    };
    return MzModalComponent;
}(HandlePropChanges));
export { MzModalComponent };
function MzModalComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MzModalComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MzModalComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    MzModalComponent.propDecorators;
    /** @type {?} */
    MzModalComponent.prototype.bottomSheet;
    /** @type {?} */
    MzModalComponent.prototype.fixedFooter;
    /** @type {?} */
    MzModalComponent.prototype.fullscreen;
    /** @type {?} */
    MzModalComponent.prototype.options;
    /** @type {?} */
    MzModalComponent.prototype.close;
    /** @type {?} */
    MzModalComponent.prototype.modalElementRef;
    /** @type {?} */
    MzModalComponent.prototype.modalElement;
    /** @type {?} */
    MzModalComponent.prototype.renderer;
}
var MzModalHeaderDirective = /** @class */ (function () {
    function MzModalHeaderDirective() {
    }
    MzModalHeaderDirective.decorators = [
        { type: Directive, args: [{ selector: 'mz-modal-header' },] },
    ];
    return MzModalHeaderDirective;
}());
export { MzModalHeaderDirective };
function MzModalHeaderDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MzModalHeaderDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MzModalHeaderDirective.ctorParameters;
}
var MzModalContentDirective = /** @class */ (function () {
    function MzModalContentDirective() {
    }
    MzModalContentDirective.decorators = [
        { type: Directive, args: [{ selector: 'mz-modal-content' },] },
    ];
    return MzModalContentDirective;
}());
export { MzModalContentDirective };
function MzModalContentDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MzModalContentDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MzModalContentDirective.ctorParameters;
}
var MzModalFooterDirective = /** @class */ (function () {
    function MzModalFooterDirective() {
    }
    MzModalFooterDirective.decorators = [
        { type: Directive, args: [{ selector: 'mz-modal-footer' },] },
    ];
    return MzModalFooterDirective;
}());
export { MzModalFooterDirective };
function MzModalFooterDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MzModalFooterDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MzModalFooterDirective.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hdGVyaWFsaXplLyIsInNvdXJjZXMiOlsic3JjL21vZGFsL21vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTixRQUFRLEVBQ1IsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztJQXVCZCw0Q0FBaUI7SUFVckQsMEJBQW1CLFFBQWtCO1FBQXJDLFlBQ0UsaUJBQU8sU0FDUjtRQUZrQixjQUFRLEdBQVIsUUFBUSxDQUFVO3NCQUxuQixJQUFJLFlBQVksRUFBUTs7S0FPekM7Ozs7SUFFRCxtQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0tBQ3pCOzs7O0lBRUQsMENBQWU7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0tBQ2xCOzs7O0lBRUQsdUNBQVk7OztJQUFaO1FBQ0UsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQztLQUMzRDs7OztJQUVELHVDQUFZOzs7SUFBWjtRQUFBLGlCQUlDO1FBSEMsSUFBSSxDQUFDLFFBQVEsR0FBRztZQUNiLE9BQU8sRUFBRSxjQUFNLE9BQUEsS0FBSSxDQUFDLGFBQWEsRUFBRSxFQUFwQixDQUFvQjtTQUNyQyxDQUFDO0tBQ0g7Ozs7SUFFRCxvQ0FBUzs7O0lBQVQ7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7S0FDL0U7Ozs7SUFFRCwyQ0FBZ0I7OztJQUFoQjtRQUNFLGlCQUFNLG1CQUFtQixXQUFFLENBQUM7S0FDN0I7Ozs7SUFFRCx3Q0FBYTs7O0lBQWI7UUFBQSxpQkFTQzs7UUFQQyxxQkFBTSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxJQUFJLENBQUMsZUFBUSxDQUFDLENBQUM7UUFDL0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQzdDLFFBQVEsRUFBRTtnQkFDUixrQkFBa0IsRUFBRSxDQUFDO2dCQUNyQixLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ25CO1NBQ0YsQ0FBQyxDQUFDO0tBQ0o7Ozs7SUFFRCxvQ0FBUzs7O0lBQVQ7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztLQUN6RTs7OztJQUVELHFDQUFVOzs7SUFBVjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0tBQzFFOztnQkFoRkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQixRQUFRLEVBQUUsMmNBZ0JYO29CQUNDLE1BQU0sRUFBRSxDQUFDLGlSQUFpUixDQUFDO2lCQUM1Ujs7OztnQkExQkMsUUFBUTs7O2dDQTRCUCxLQUFLO2dDQUNMLEtBQUs7K0JBQ0wsS0FBSzs0QkFDTCxLQUFLOzBCQUNMLE1BQU07b0NBQ04sU0FBUyxTQUFDLE9BQU87OzJCQTFDcEI7RUFvQ3NDLGlCQUFpQjtTQUExQyxnQkFBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQWlFNUIsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFOztpQ0FyRzFDOztTQXFHeUQsc0JBQXNCOzs7Ozs7Ozs7Ozs7OztnQkFDOUUsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLGtCQUFrQixFQUFFOztrQ0F0RzNDOztTQXNHMEQsdUJBQXVCOzs7Ozs7Ozs7Ozs7OztnQkFDaEYsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFOztpQ0F2RzFDOztTQXVHeUQsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENvbXBvbmVudCxcclxuICBEaXJlY3RpdmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcixcclxuICBWaWV3Q2hpbGQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBIYW5kbGVQcm9wQ2hhbmdlcyB9IGZyb20gJy4uL3NoYXJlZC9pbmRleCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ216LW1vZGFsJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgI21vZGFsXHJcbiAgY2xhc3M9XCJtb2RhbFwiXHJcbiAgW2NsYXNzLm1vZGFsLWZpeGVkLWZvb3Rlcl09XCJmaXhlZEZvb3RlclwiXHJcbiAgW2NsYXNzLmJvdHRvbS1zaGVldF09XCJib3R0b21TaGVldFwiXHJcbiAgW2NsYXNzLm1vZGFsLWZ1bGxzY3JlZW5dPVwiZnVsbHNjcmVlblwiXHJcbj5cclxuICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibXotbW9kYWwtaGVhZGVyXCI+PC9uZy1jb250ZW50PlxyXG4gICAgPGRpdj5cclxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibXotbW9kYWwtY29udGVudFwiPjwvbmctY29udGVudD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm16LW1vZGFsLWZvb3RlclwiPjwvbmctY29udGVudD5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbmAsXHJcbiAgc3R5bGVzOiBbYC5tb2RhbDpub3QoLmJvdHRvbS1zaGVldCkubW9kYWwtZnVsbHNjcmVlbnt0b3A6MTJweCFpbXBvcnRhbnQ7bWFyZ2luOjAgYXV0bzt3aWR0aDpjYWxjKDEwMCUgLSAyNHB4KTtoZWlnaHQ6Y2FsYygxMDAlIC0gMjRweCk7bWF4LWhlaWdodDpub25lfS5tb2RhbC5ib3R0b20tc2hlZXQubW9kYWwtZnVsbHNjcmVlbntoZWlnaHQ6MTAwJTttYXgtaGVpZ2h0Om5vbmV9L2RlZXAvIG16LW1vZGFsLWhlYWRlciBoNSwvZGVlcC8gbXotbW9kYWwtaGVhZGVyIGg2e21hcmdpbi10b3A6MH1gXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16TW9kYWxDb21wb25lbnQgZXh0ZW5kcyBIYW5kbGVQcm9wQ2hhbmdlcyBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQElucHV0KCkgYm90dG9tU2hlZXQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgZml4ZWRGb290ZXI6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgZnVsbHNjcmVlbjogYm9vbGVhbjtcclxuICBASW5wdXQoKSBvcHRpb25zOiBNYXRlcmlhbGl6ZS5Nb2RhbE9wdGlvbnM7XHJcbiAgQE91dHB1dCgpIGNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBWaWV3Q2hpbGQoJ21vZGFsJykgbW9kYWxFbGVtZW50UmVmOiBFbGVtZW50UmVmO1xyXG5cclxuICBtb2RhbEVsZW1lbnQ6IEpRdWVyeTtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcikge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbml0SGFuZGxlcnMoKTtcclxuICAgIHRoaXMuaW5pdEVsZW1lbnRzKCk7XHJcbiAgICB0aGlzLmhhbmRsZVByb3BlcnRpZXMoKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMuaW5pdE1vZGFsKCk7XHJcbiAgfVxyXG5cclxuICBpbml0RWxlbWVudHMoKSB7XHJcbiAgICB0aGlzLm1vZGFsRWxlbWVudCA9ICQodGhpcy5tb2RhbEVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBpbml0SGFuZGxlcnMoKSB7XHJcbiAgICB0aGlzLmhhbmRsZXJzID0ge1xyXG4gICAgICAgb3B0aW9uczogKCkgPT4gdGhpcy5oYW5kbGVPcHRpb25zKCksXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgaW5pdE1vZGFsKCkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMubW9kYWxFbGVtZW50LCAnbW9kYWwnLCBbdGhpcy5vcHRpb25zXSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVQcm9wZXJ0aWVzKCkge1xyXG4gICAgc3VwZXIuZXhlY3V0ZVByb3BIYW5kbGVycygpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlT3B0aW9ucygpIHtcclxuICAgIC8vIGV4dGVuZCBjb21wbGV0ZSBmdW5jdGlvbiB0byBlbWl0IGNsb3NlIGV2ZW50IG9uIGNhbGxiYWNrIHJldHVyblxyXG4gICAgY29uc3Qgb3JpZ2luYWxDb21wbGV0ZUZuID0gdGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5jb21wbGV0ZSB8fCAoKCkgPT4ge30pO1xyXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5vcHRpb25zLCB7XHJcbiAgICAgIGNvbXBsZXRlOiAoKSA9PiB7XHJcbiAgICAgICAgb3JpZ2luYWxDb21wbGV0ZUZuKCk7XHJcbiAgICAgICAgdGhpcy5jbG9zZS5lbWl0KCk7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9wZW5Nb2RhbCgpIHtcclxuICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLm1vZGFsRWxlbWVudCwgJ21vZGFsJywgWydvcGVuJ10pO1xyXG4gIH1cclxuXHJcbiAgY2xvc2VNb2RhbCgpIHtcclxuICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLm1vZGFsRWxlbWVudCwgJ21vZGFsJywgWydjbG9zZSddKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIERlY2xhcmUgdGhlIHRhZ3MgdG8gYXZvaWQgZXJyb3I6ICc8bXotbW9kYWwteD4nIGlzIG5vdCBhIGtub3duIGVsZW1lbnRcclxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTEyNTFcclxuLy8gdHNsaW50OmRpc2FibGU6IGRpcmVjdGl2ZS1zZWxlY3RvclxyXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdtei1tb2RhbC1oZWFkZXInIH0pIGV4cG9ydCBjbGFzcyBNek1vZGFsSGVhZGVyRGlyZWN0aXZlIHsgfVxyXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdtei1tb2RhbC1jb250ZW50JyB9KSBleHBvcnQgY2xhc3MgTXpNb2RhbENvbnRlbnREaXJlY3RpdmUgeyB9XHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ216LW1vZGFsLWZvb3RlcicgfSkgZXhwb3J0IGNsYXNzIE16TW9kYWxGb290ZXJEaXJlY3RpdmUgeyB9XHJcbiJdfQ==