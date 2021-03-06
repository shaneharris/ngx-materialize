/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectorRef, Component, ContentChild, Directive, ElementRef, Input, Renderer, ViewChild, } from '@angular/core';
import { MzSidenavCollapsibleHeaderComponent } from './sidenav-collapsible-header/sidenav-collapsible-header.component';
var MzSidenavCollapsibleComponent = /** @class */ (function () {
    function MzSidenavCollapsibleComponent(changeDetectorRef, renderer) {
        this.changeDetectorRef = changeDetectorRef;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    MzSidenavCollapsibleComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.initCollapsible();
    };
    /**
     * @return {?}
     */
    MzSidenavCollapsibleComponent.prototype.initCollapsible = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ options = {
            accordion: false,
            onClose: this.onClose,
            onOpen: this.onOpen,
        };
        // need setTimeout otherwise loading directly on the page cause an error
        setTimeout(function () { return _this.renderer.invokeElementMethod($(_this.collapsible.nativeElement), 'collapsible', [options]); });
        this.changeDetectorRef.detectChanges();
    };
    MzSidenavCollapsibleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mz-sidenav-collapsible',
                    template: "<li>\n  <ul #collapsible class=\"collapsible collapsible-accordion\">\n    <li>\n      <ng-content select=\"mz-sidenav-collapsible-header\"></ng-content>\n      <div class=\"collapsible-body\">\n        <ul>\n          <ng-content select=\"mz-sidenav-collapsible-content\"></ng-content>\n        </ul>\n      </div>\n    </li>\n  </ul>\n</li>",
                    styles: [":host /deep/ .collapsible-header{padding:0 32px}:host /deep/ .collapsible-header i{color:rgba(0,0,0,.54)}:host /deep/ .collapsible-body li a{font-weight:initial}"],
                },] },
    ];
    /** @nocollapse */
    MzSidenavCollapsibleComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef, },
        { type: Renderer, },
    ]; };
    MzSidenavCollapsibleComponent.propDecorators = {
        "onClose": [{ type: Input },],
        "onOpen": [{ type: Input },],
        "collapsible": [{ type: ViewChild, args: ['collapsible',] },],
        "header": [{ type: ContentChild, args: [MzSidenavCollapsibleHeaderComponent,] },],
    };
    return MzSidenavCollapsibleComponent;
}());
export { MzSidenavCollapsibleComponent };
function MzSidenavCollapsibleComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MzSidenavCollapsibleComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MzSidenavCollapsibleComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    MzSidenavCollapsibleComponent.propDecorators;
    /** @type {?} */
    MzSidenavCollapsibleComponent.prototype.onClose;
    /** @type {?} */
    MzSidenavCollapsibleComponent.prototype.onOpen;
    /** @type {?} */
    MzSidenavCollapsibleComponent.prototype.collapsible;
    /** @type {?} */
    MzSidenavCollapsibleComponent.prototype.header;
    /** @type {?} */
    MzSidenavCollapsibleComponent.prototype.changeDetectorRef;
    /** @type {?} */
    MzSidenavCollapsibleComponent.prototype.renderer;
}
var MzSidenavCollapsibleContentDirective = /** @class */ (function () {
    function MzSidenavCollapsibleContentDirective() {
    }
    MzSidenavCollapsibleContentDirective.decorators = [
        { type: Directive, args: [{ selector: 'mz-sidenav-collapsible-content' },] },
    ];
    return MzSidenavCollapsibleContentDirective;
}());
export { MzSidenavCollapsibleContentDirective };
function MzSidenavCollapsibleContentDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MzSidenavCollapsibleContentDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MzSidenavCollapsibleContentDirective.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi1jb2xsYXBzaWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvIiwic291cmNlcyI6WyJzcmMvc2lkZW5hdi9zaWRlbmF2LWNvbGxhcHNpYmxlL3NpZGVuYXYtY29sbGFwc2libGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ0wsUUFBUSxFQUNSLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQzs7SUF5QnRILHVDQUNTLG1CQUNBO1FBREEsc0JBQWlCLEdBQWpCLGlCQUFpQjtRQUNqQixhQUFRLEdBQVIsUUFBUTtLQUNaOzs7O0lBRUwsdURBQWU7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0tBQ3hCOzs7O0lBRUQsdURBQWU7OztJQUFmO1FBQUEsaUJBV0M7UUFWQyxxQkFBTSxPQUFPLEdBQW1DO1lBQzlDLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07U0FDcEIsQ0FBQzs7UUFHRixVQUFVLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEVBQUUsYUFBYSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBOUYsQ0FBOEYsQ0FBQyxDQUFDO1FBRWpILElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztLQUN4Qzs7Z0JBM0NGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyxRQUFRLEVBQUUsd1ZBV047b0JBQ0osTUFBTSxFQUFFLENBQUMsbUtBQW1LLENBQUM7aUJBQzlLOzs7O2dCQTNCQyxpQkFBaUI7Z0JBTWpCLFFBQVE7Ozs0QkF1QlAsS0FBSzsyQkFDTCxLQUFLO2dDQUVMLFNBQVMsU0FBQyxhQUFhOzJCQUN2QixZQUFZLFNBQUMsbUNBQW1DOzt3Q0FuQ25EOztTQThCYSw2QkFBNkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBaUN6QyxTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsZ0NBQWdDLEVBQUU7OytDQS9EekQ7O1NBK0R3RSxvQ0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBEaXJlY3RpdmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBSZW5kZXJlcixcclxuICBWaWV3Q2hpbGQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBNelNpZGVuYXZDb2xsYXBzaWJsZUhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vc2lkZW5hdi1jb2xsYXBzaWJsZS1oZWFkZXIvc2lkZW5hdi1jb2xsYXBzaWJsZS1oZWFkZXIuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXotc2lkZW5hdi1jb2xsYXBzaWJsZScsXHJcbiAgdGVtcGxhdGU6IGA8bGk+XHJcbiAgPHVsICNjb2xsYXBzaWJsZSBjbGFzcz1cImNvbGxhcHNpYmxlIGNvbGxhcHNpYmxlLWFjY29yZGlvblwiPlxyXG4gICAgPGxpPlxyXG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJtei1zaWRlbmF2LWNvbGxhcHNpYmxlLWhlYWRlclwiPjwvbmctY29udGVudD5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbGxhcHNpYmxlLWJvZHlcIj5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJtei1zaWRlbmF2LWNvbGxhcHNpYmxlLWNvbnRlbnRcIj48L25nLWNvbnRlbnQ+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2xpPlxyXG4gIDwvdWw+XHJcbjwvbGk+YCxcclxuICBzdHlsZXM6IFtgOmhvc3QgL2RlZXAvIC5jb2xsYXBzaWJsZS1oZWFkZXJ7cGFkZGluZzowIDMycHh9Omhvc3QgL2RlZXAvIC5jb2xsYXBzaWJsZS1oZWFkZXIgaXtjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Omhvc3QgL2RlZXAvIC5jb2xsYXBzaWJsZS1ib2R5IGxpIGF7Zm9udC13ZWlnaHQ6aW5pdGlhbH1gXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16U2lkZW5hdkNvbGxhcHNpYmxlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQElucHV0KCkgb25DbG9zZTogRnVuY3Rpb247XHJcbiAgQElucHV0KCkgb25PcGVuOiBGdW5jdGlvbjtcclxuXHJcbiAgQFZpZXdDaGlsZCgnY29sbGFwc2libGUnKSBjb2xsYXBzaWJsZTogRWxlbWVudFJlZjtcclxuICBAQ29udGVudENoaWxkKE16U2lkZW5hdkNvbGxhcHNpYmxlSGVhZGVyQ29tcG9uZW50KSBoZWFkZXI6IE16U2lkZW5hdkNvbGxhcHNpYmxlSGVhZGVyQ29tcG9uZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyLFxyXG4gICkgeyB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMuaW5pdENvbGxhcHNpYmxlKCk7XHJcbiAgfVxyXG5cclxuICBpbml0Q29sbGFwc2libGUoKSB7XHJcbiAgICBjb25zdCBvcHRpb25zOiBNYXRlcmlhbGl6ZS5Db2xsYXBzaWJsZU9wdGlvbnMgPSB7XHJcbiAgICAgIGFjY29yZGlvbjogZmFsc2UsXHJcbiAgICAgIG9uQ2xvc2U6IHRoaXMub25DbG9zZSxcclxuICAgICAgb25PcGVuOiB0aGlzLm9uT3BlbixcclxuICAgIH07XHJcblxyXG4gICAgLy8gbmVlZCBzZXRUaW1lb3V0IG90aGVyd2lzZSBsb2FkaW5nIGRpcmVjdGx5IG9uIHRoZSBwYWdlIGNhdXNlIGFuIGVycm9yXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCgkKHRoaXMuY29sbGFwc2libGUubmF0aXZlRWxlbWVudCksICdjb2xsYXBzaWJsZScsIFtvcHRpb25zXSkpO1xyXG5cclxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gRGVjbGFyZSB0aGUgdGFncyB0byBhdm9pZCBlcnJvcjogJzxtei1zaWRlbmF2LWNvbGxhcHNpYmxlLXg+JyBpcyBub3QgYSBrbm93biBlbGVtZW50XHJcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzExMjUxXHJcbi8vIHRzbGludDpkaXNhYmxlOiBkaXJlY3RpdmUtc2VsZWN0b3JcclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnbXotc2lkZW5hdi1jb2xsYXBzaWJsZS1jb250ZW50JyB9KSBleHBvcnQgY2xhc3MgTXpTaWRlbmF2Q29sbGFwc2libGVDb250ZW50RGlyZWN0aXZlIHsgfVxyXG4iXX0=