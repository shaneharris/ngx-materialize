/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectorRef, Component, ContentChild, Directive, ElementRef, Input, Renderer, ViewChild, } from '@angular/core';
import { MzSidenavCollapsibleHeaderComponent } from './sidenav-collapsible-header/sidenav-collapsible-header.component';
export class MzSidenavCollapsibleComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} renderer
     */
    constructor(changeDetectorRef, renderer) {
        this.changeDetectorRef = changeDetectorRef;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.initCollapsible();
    }
    /**
     * @return {?}
     */
    initCollapsible() {
        const /** @type {?} */ options = {
            accordion: false,
            onClose: this.onClose,
            onOpen: this.onOpen,
        };
        // need setTimeout otherwise loading directly on the page cause an error
        setTimeout(() => this.renderer.invokeElementMethod($(this.collapsible.nativeElement), 'collapsible', [options]));
        this.changeDetectorRef.detectChanges();
    }
}
MzSidenavCollapsibleComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-sidenav-collapsible',
                template: `<li>
  <ul #collapsible class="collapsible collapsible-accordion">
    <li>
      <ng-content select="mz-sidenav-collapsible-header"></ng-content>
      <div class="collapsible-body">
        <ul>
          <ng-content select="mz-sidenav-collapsible-content"></ng-content>
        </ul>
      </div>
    </li>
  </ul>
</li>`,
                styles: [`:host /deep/ .collapsible-header{padding:0 32px}:host /deep/ .collapsible-header i{color:rgba(0,0,0,.54)}:host /deep/ .collapsible-body li a{font-weight:initial}`],
            },] },
];
/** @nocollapse */
MzSidenavCollapsibleComponent.ctorParameters = () => [
    { type: ChangeDetectorRef, },
    { type: Renderer, },
];
MzSidenavCollapsibleComponent.propDecorators = {
    "onClose": [{ type: Input },],
    "onOpen": [{ type: Input },],
    "collapsible": [{ type: ViewChild, args: ['collapsible',] },],
    "header": [{ type: ContentChild, args: [MzSidenavCollapsibleHeaderComponent,] },],
};
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
export class MzSidenavCollapsibleContentDirective {
}
MzSidenavCollapsibleContentDirective.decorators = [
    { type: Directive, args: [{ selector: 'mz-sidenav-collapsible-content' },] },
];
function MzSidenavCollapsibleContentDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MzSidenavCollapsibleContentDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MzSidenavCollapsibleContentDirective.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi1jb2xsYXBzaWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvIiwic291cmNlcyI6WyJzcmMvc2lkZW5hdi9zaWRlbmF2LWNvbGxhcHNpYmxlL3NpZGVuYXYtY29sbGFwc2libGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ0wsUUFBUSxFQUNSLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQztBQWtCeEgsTUFBTTs7Ozs7SUFPSixZQUNTLG1CQUNBO1FBREEsc0JBQWlCLEdBQWpCLGlCQUFpQjtRQUNqQixhQUFRLEdBQVIsUUFBUTtLQUNaOzs7O0lBRUwsZUFBZTtRQUNiLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztLQUN4Qjs7OztJQUVELGVBQWU7UUFDYix1QkFBTSxPQUFPLEdBQW1DO1lBQzlDLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07U0FDcEIsQ0FBQzs7UUFHRixVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsRUFBRSxhQUFhLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFakgsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO0tBQ3hDOzs7WUEzQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7TUFXTjtnQkFDSixNQUFNLEVBQUUsQ0FBQyxtS0FBbUssQ0FBQzthQUM5Szs7OztZQTNCQyxpQkFBaUI7WUFNakIsUUFBUTs7O3dCQXVCUCxLQUFLO3VCQUNMLEtBQUs7NEJBRUwsU0FBUyxTQUFDLGFBQWE7dUJBQ3ZCLFlBQVksU0FBQyxtQ0FBbUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0QlEsTUFBTTs7O1lBQWhFLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxnQ0FBZ0MsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIFJlbmRlcmVyLFxyXG4gIFZpZXdDaGlsZCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE16U2lkZW5hdkNvbGxhcHNpYmxlSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9zaWRlbmF2LWNvbGxhcHNpYmxlLWhlYWRlci9zaWRlbmF2LWNvbGxhcHNpYmxlLWhlYWRlci5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtei1zaWRlbmF2LWNvbGxhcHNpYmxlJyxcclxuICB0ZW1wbGF0ZTogYDxsaT5cclxuICA8dWwgI2NvbGxhcHNpYmxlIGNsYXNzPVwiY29sbGFwc2libGUgY29sbGFwc2libGUtYWNjb3JkaW9uXCI+XHJcbiAgICA8bGk+XHJcbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm16LXNpZGVuYXYtY29sbGFwc2libGUtaGVhZGVyXCI+PC9uZy1jb250ZW50PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sbGFwc2libGUtYm9keVwiPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm16LXNpZGVuYXYtY29sbGFwc2libGUtY29udGVudFwiPjwvbmctY29udGVudD5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbGk+XHJcbiAgPC91bD5cclxuPC9saT5gLFxyXG4gIHN0eWxlczogW2A6aG9zdCAvZGVlcC8gLmNvbGxhcHNpYmxlLWhlYWRlcntwYWRkaW5nOjAgMzJweH06aG9zdCAvZGVlcC8gLmNvbGxhcHNpYmxlLWhlYWRlciBpe2NvbG9yOnJnYmEoMCwwLDAsLjU0KX06aG9zdCAvZGVlcC8gLmNvbGxhcHNpYmxlLWJvZHkgbGkgYXtmb250LXdlaWdodDppbml0aWFsfWBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpTaWRlbmF2Q29sbGFwc2libGVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuICBASW5wdXQoKSBvbkNsb3NlOiBGdW5jdGlvbjtcclxuICBASW5wdXQoKSBvbk9wZW46IEZ1bmN0aW9uO1xyXG5cclxuICBAVmlld0NoaWxkKCdjb2xsYXBzaWJsZScpIGNvbGxhcHNpYmxlOiBFbGVtZW50UmVmO1xyXG4gIEBDb250ZW50Q2hpbGQoTXpTaWRlbmF2Q29sbGFwc2libGVIZWFkZXJDb21wb25lbnQpIGhlYWRlcjogTXpTaWRlbmF2Q29sbGFwc2libGVIZWFkZXJDb21wb25lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIsXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5pbml0Q29sbGFwc2libGUoKTtcclxuICB9XHJcblxyXG4gIGluaXRDb2xsYXBzaWJsZSgpIHtcclxuICAgIGNvbnN0IG9wdGlvbnM6IE1hdGVyaWFsaXplLkNvbGxhcHNpYmxlT3B0aW9ucyA9IHtcclxuICAgICAgYWNjb3JkaW9uOiBmYWxzZSxcclxuICAgICAgb25DbG9zZTogdGhpcy5vbkNsb3NlLFxyXG4gICAgICBvbk9wZW46IHRoaXMub25PcGVuLFxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBuZWVkIHNldFRpbWVvdXQgb3RoZXJ3aXNlIGxvYWRpbmcgZGlyZWN0bHkgb24gdGhlIHBhZ2UgY2F1c2UgYW4gZXJyb3JcclxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKCQodGhpcy5jb2xsYXBzaWJsZS5uYXRpdmVFbGVtZW50KSwgJ2NvbGxhcHNpYmxlJywgW29wdGlvbnNdKSk7XHJcblxyXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBEZWNsYXJlIHRoZSB0YWdzIHRvIGF2b2lkIGVycm9yOiAnPG16LXNpZGVuYXYtY29sbGFwc2libGUteD4nIGlzIG5vdCBhIGtub3duIGVsZW1lbnRcclxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTEyNTFcclxuLy8gdHNsaW50OmRpc2FibGU6IGRpcmVjdGl2ZS1zZWxlY3RvclxyXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdtei1zaWRlbmF2LWNvbGxhcHNpYmxlLWNvbnRlbnQnIH0pIGV4cG9ydCBjbGFzcyBNelNpZGVuYXZDb2xsYXBzaWJsZUNvbnRlbnREaXJlY3RpdmUgeyB9XHJcbiJdfQ==