/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class MzSidenavComponent {
    constructor() {
        this._opened = false;
    }
    /**
     * @return {?}
     */
    get opened() { return this._opened; }
    /**
     * @param {?} value
     * @return {?}
     */
    set opened(value) {
        this._opened = value;
        this.collapseButton.sideNav(this._opened ? 'show' : 'hide');
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.initCollapseButton();
        this.initCollapsibleLinks();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.collapseButton.sideNav('destroy');
    }
    /**
     * @return {?}
     */
    initCollapseButton() {
        // fake button if no collapseButtonId is provided
        this.collapseButton = this.collapseButtonId
            ? $(`#${this.collapseButtonId}`)
            : $(document.createElement('template'));
        // add data-activates to collapse button
        this.collapseButton.attr('data-activates', this.id);
        // extend onOpen function to update opened state
        const /** @type {?} */ onOpen = this.onOpen || (() => { });
        this.onOpen = () => {
            onOpen();
            this._opened = true;
        };
        // extend onClose function to update opened state
        const /** @type {?} */ onClose = this.onClose || (() => { });
        this.onClose = () => {
            onClose();
            this._opened = false;
        };
        // initialize sidenav
        this.collapseButton.sideNav({
            closeOnClick: this.closeOnClick || false,
            draggable: this.draggable != null ? this.draggable : true,
            edge: this.edge || 'left',
            menuWidth: isNaN(this.width) ? 300 : this.width,
            onClose: this.onClose,
            onOpen: this.onOpen,
        });
    }
    /**
     * @return {?}
     */
    initCollapsibleLinks() {
        // initialize collapsible elements
        $(`#${this.id} .collapsible`).collapsible();
    }
}
MzSidenavComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-sidenav',
                template: `<ul class="side-nav {{ backgroundClass }}"
  [attr.id]="id"
  [class.fixed]="fixed">
  <ng-content></ng-content>
</ul>`,
            },] },
];
/** @nocollapse */
MzSidenavComponent.propDecorators = {
    "backgroundClass": [{ type: Input },],
    "closeOnClick": [{ type: Input },],
    "collapseButtonId": [{ type: Input },],
    "draggable": [{ type: Input },],
    "edge": [{ type: Input },],
    "fixed": [{ type: Input },],
    "id": [{ type: Input },],
    "onClose": [{ type: Input },],
    "onOpen": [{ type: Input },],
    "width": [{ type: Input },],
};
function MzSidenavComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MzSidenavComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MzSidenavComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    MzSidenavComponent.propDecorators;
    /** @type {?} */
    MzSidenavComponent.prototype.backgroundClass;
    /** @type {?} */
    MzSidenavComponent.prototype.closeOnClick;
    /** @type {?} */
    MzSidenavComponent.prototype.collapseButtonId;
    /** @type {?} */
    MzSidenavComponent.prototype.draggable;
    /** @type {?} */
    MzSidenavComponent.prototype.edge;
    /** @type {?} */
    MzSidenavComponent.prototype.fixed;
    /** @type {?} */
    MzSidenavComponent.prototype.id;
    /** @type {?} */
    MzSidenavComponent.prototype.onClose;
    /** @type {?} */
    MzSidenavComponent.prototype.onOpen;
    /** @type {?} */
    MzSidenavComponent.prototype.width;
    /** @type {?} */
    MzSidenavComponent.prototype._opened;
    /** @type {?} */
    MzSidenavComponent.prototype.collapseButton;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvIiwic291cmNlcyI6WyJzcmMvc2lkZW5hdi9zaWRlbmF2LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBVTNFLE1BQU07O3VCQVljLEtBQUs7Ozs7O0lBR3ZCLElBQUksTUFBTSxLQUFLLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7Ozs7O0lBQ3JDLElBQUksTUFBTSxDQUFDLEtBQWM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUM3RDs7OztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztLQUM3Qjs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUN4Qzs7OztJQUVELGtCQUFrQjs7UUFFaEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCO1lBQ3pDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUNoQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQzs7UUFHMUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDOztRQUdwRCx1QkFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFHLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBRTtZQUNqQixNQUFNLEVBQUUsQ0FBQztZQUNULElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1NBQ3JCLENBQUM7O1FBR0YsdUJBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBRyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUU7WUFDbEIsT0FBTyxFQUFFLENBQUM7WUFDVixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztTQUN0QixDQUFDOztRQUdGLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDO1lBQzFCLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWSxJQUFJLEtBQUs7WUFDeEMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJO1lBQ3pELElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxJQUFJLE1BQU07WUFDekIsU0FBUyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUs7WUFDL0MsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtTQUNwQixDQUFDLENBQUM7S0FDSjs7OztJQUVELG9CQUFvQjs7UUFFbEIsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUUsZUFBZSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDN0M7OztZQTNFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFFBQVEsRUFBRTs7OztNQUlOO2FBQ0w7Ozs7Z0NBRUUsS0FBSzs2QkFDTCxLQUFLO2lDQUNMLEtBQUs7MEJBQ0wsS0FBSztxQkFDTCxLQUFLO3NCQUNMLEtBQUs7bUJBQ0wsS0FBSzt3QkFDTCxLQUFLO3VCQUNMLEtBQUs7c0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtei1zaWRlbmF2JyxcclxuICB0ZW1wbGF0ZTogYDx1bCBjbGFzcz1cInNpZGUtbmF2IHt7IGJhY2tncm91bmRDbGFzcyB9fVwiXHJcbiAgW2F0dHIuaWRdPVwiaWRcIlxyXG4gIFtjbGFzcy5maXhlZF09XCJmaXhlZFwiPlxyXG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuPC91bD5gLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpTaWRlbmF2Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSBiYWNrZ3JvdW5kQ2xhc3M6IHN0cmluZztcclxuICBASW5wdXQoKSBjbG9zZU9uQ2xpY2s6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgY29sbGFwc2VCdXR0b25JZDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGRyYWdnYWJsZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBlZGdlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZml4ZWQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgaWQ6IHN0cmluZztcclxuICBASW5wdXQoKSBvbkNsb3NlOiBGdW5jdGlvbjtcclxuICBASW5wdXQoKSBvbk9wZW46IEZ1bmN0aW9uO1xyXG4gIEBJbnB1dCgpIHdpZHRoOiBudW1iZXI7XHJcblxyXG4gIHByaXZhdGUgX29wZW5lZCA9IGZhbHNlO1xyXG4gIHByaXZhdGUgY29sbGFwc2VCdXR0b246IEpRdWVyeTxFbGVtZW50PjtcclxuXHJcbiAgZ2V0IG9wZW5lZCgpIHsgcmV0dXJuIHRoaXMuX29wZW5lZDsgfVxyXG4gIHNldCBvcGVuZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX29wZW5lZCA9IHZhbHVlO1xyXG4gICAgdGhpcy5jb2xsYXBzZUJ1dHRvbi5zaWRlTmF2KHRoaXMuX29wZW5lZCA/ICdzaG93JyA6ICdoaWRlJyk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLmluaXRDb2xsYXBzZUJ1dHRvbigpO1xyXG4gICAgdGhpcy5pbml0Q29sbGFwc2libGVMaW5rcygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmNvbGxhcHNlQnV0dG9uLnNpZGVOYXYoJ2Rlc3Ryb3knKTtcclxuICB9XHJcblxyXG4gIGluaXRDb2xsYXBzZUJ1dHRvbigpIHtcclxuICAgIC8vIGZha2UgYnV0dG9uIGlmIG5vIGNvbGxhcHNlQnV0dG9uSWQgaXMgcHJvdmlkZWRcclxuICAgIHRoaXMuY29sbGFwc2VCdXR0b24gPSB0aGlzLmNvbGxhcHNlQnV0dG9uSWRcclxuICAgICAgPyAkKGAjJHt0aGlzLmNvbGxhcHNlQnV0dG9uSWR9YClcclxuICAgICAgOiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJykpO1xyXG5cclxuICAgIC8vIGFkZCBkYXRhLWFjdGl2YXRlcyB0byBjb2xsYXBzZSBidXR0b25cclxuICAgIHRoaXMuY29sbGFwc2VCdXR0b24uYXR0cignZGF0YS1hY3RpdmF0ZXMnLCB0aGlzLmlkKTtcclxuXHJcbiAgICAvLyBleHRlbmQgb25PcGVuIGZ1bmN0aW9uIHRvIHVwZGF0ZSBvcGVuZWQgc3RhdGVcclxuICAgIGNvbnN0IG9uT3BlbiA9IHRoaXMub25PcGVuIHx8ICgoKSA9PiB7fSk7XHJcbiAgICB0aGlzLm9uT3BlbiA9ICgpID0+IHtcclxuICAgICAgb25PcGVuKCk7XHJcbiAgICAgIHRoaXMuX29wZW5lZCA9IHRydWU7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGV4dGVuZCBvbkNsb3NlIGZ1bmN0aW9uIHRvIHVwZGF0ZSBvcGVuZWQgc3RhdGVcclxuICAgIGNvbnN0IG9uQ2xvc2UgPSB0aGlzLm9uQ2xvc2UgfHwgKCgpID0+IHt9KTtcclxuICAgIHRoaXMub25DbG9zZSA9ICgpID0+IHtcclxuICAgICAgb25DbG9zZSgpO1xyXG4gICAgICB0aGlzLl9vcGVuZWQgPSBmYWxzZTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gaW5pdGlhbGl6ZSBzaWRlbmF2XHJcbiAgICB0aGlzLmNvbGxhcHNlQnV0dG9uLnNpZGVOYXYoe1xyXG4gICAgICBjbG9zZU9uQ2xpY2s6IHRoaXMuY2xvc2VPbkNsaWNrIHx8IGZhbHNlLFxyXG4gICAgICBkcmFnZ2FibGU6IHRoaXMuZHJhZ2dhYmxlICE9IG51bGwgPyB0aGlzLmRyYWdnYWJsZSA6IHRydWUsXHJcbiAgICAgIGVkZ2U6IHRoaXMuZWRnZSB8fCAnbGVmdCcsXHJcbiAgICAgIG1lbnVXaWR0aDogaXNOYU4odGhpcy53aWR0aCkgPyAzMDAgOiB0aGlzLndpZHRoLFxyXG4gICAgICBvbkNsb3NlOiB0aGlzLm9uQ2xvc2UsXHJcbiAgICAgIG9uT3BlbjogdGhpcy5vbk9wZW4sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGluaXRDb2xsYXBzaWJsZUxpbmtzKCkge1xyXG4gICAgLy8gaW5pdGlhbGl6ZSBjb2xsYXBzaWJsZSBlbGVtZW50c1xyXG4gICAgJChgIyR7dGhpcy5pZH0gLmNvbGxhcHNpYmxlYCkuY29sbGFwc2libGUoKTtcclxuICB9XHJcbn1cclxuIl19