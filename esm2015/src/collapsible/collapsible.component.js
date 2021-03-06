/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ContentChildren, ElementRef, Input, QueryList, Renderer, ViewChild, } from '@angular/core';
import { MzCollapsibleItemComponent } from './collapsible-item/collapsible-item.component';
export class MzCollapsibleComponent {
    /**
     * @param {?} renderer
     */
    constructor(renderer) {
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.handleDataCollapsible();
        this.initCollapsible();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        $(this.collapsible.nativeElement).collapsible('destroy');
    }
    /**
     * @param {?} collapsibleItemIndex
     * @return {?}
     */
    close(collapsibleItemIndex) {
        $(this.collapsible.nativeElement).collapsible('close', collapsibleItemIndex);
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
        $(this.collapsible.nativeElement).collapsible(options);
    }
    /**
     * @return {?}
     */
    handleDataCollapsible() {
        if (this.mode) {
            this.renderer.setElementAttribute(this.collapsible.nativeElement, 'data-collapsible', this.mode);
        }
    }
    /**
     * @param {?} collapsibleItemIndex
     * @return {?}
     */
    open(collapsibleItemIndex) {
        $(this.collapsible.nativeElement).collapsible('open', collapsibleItemIndex);
    }
}
MzCollapsibleComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-collapsible',
                template: `<ul #collapsible
  class="collapsible"
  [class.popout]="popout"
  [hidden]="items.length === 0"
>
  <ng-content></ng-content>
</ul>`,
                styles: [`/deep/ .collapsible-header{clear:both}/deep/ .collapsible-body{clear:both}`],
            },] },
];
/** @nocollapse */
MzCollapsibleComponent.ctorParameters = () => [
    { type: Renderer, },
];
MzCollapsibleComponent.propDecorators = {
    "mode": [{ type: Input },],
    "onClose": [{ type: Input },],
    "onOpen": [{ type: Input },],
    "popout": [{ type: Input },],
    "collapsible": [{ type: ViewChild, args: ['collapsible',] },],
    "items": [{ type: ContentChildren, args: [MzCollapsibleItemComponent,] },],
};
function MzCollapsibleComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MzCollapsibleComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MzCollapsibleComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    MzCollapsibleComponent.propDecorators;
    /** @type {?} */
    MzCollapsibleComponent.prototype.mode;
    /** @type {?} */
    MzCollapsibleComponent.prototype.onClose;
    /** @type {?} */
    MzCollapsibleComponent.prototype.onOpen;
    /** @type {?} */
    MzCollapsibleComponent.prototype.popout;
    /** @type {?} */
    MzCollapsibleComponent.prototype.collapsible;
    /** @type {?} */
    MzCollapsibleComponent.prototype.items;
    /** @type {?} */
    MzCollapsibleComponent.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGFwc2libGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hdGVyaWFsaXplLyIsInNvdXJjZXMiOlsic3JjL2NvbGxhcHNpYmxlL2NvbGxhcHNpYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxlQUFlLEVBQ2YsVUFBVSxFQUNWLEtBQUssRUFFTCxTQUFTLEVBQ1QsUUFBUSxFQUNSLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQWEzRixNQUFNOzs7O0lBU0osWUFDUztRQUFBLGFBQVEsR0FBUixRQUFRO0tBQ1o7Ozs7SUFFTCxlQUFlO1FBQ2IsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0tBQ3hCOzs7O0lBRUQsV0FBVztRQUNULENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUMxRDs7Ozs7SUFFRCxLQUFLLENBQUMsb0JBQTRCO1FBQ2hDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztLQUM5RTs7OztJQUVELGVBQWU7UUFDYix1QkFBTSxPQUFPLEdBQW1DO1lBQzlDLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07U0FDcEIsQ0FBQztRQUVGLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUN4RDs7OztJQUVELHFCQUFxQjtRQUNuQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNkLElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2xHO0tBQ0Y7Ozs7O0lBRUQsSUFBSSxDQUFDLG9CQUE0QjtRQUMvQixDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLG9CQUFvQixDQUFDLENBQUM7S0FDN0U7OztZQXZERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFOzs7Ozs7TUFNTjtnQkFDSixNQUFNLEVBQUUsQ0FBQyw0RUFBNEUsQ0FBQzthQUN2Rjs7OztZQWhCQyxRQUFROzs7cUJBa0JQLEtBQUs7d0JBQ0wsS0FBSzt1QkFDTCxLQUFLO3VCQUNMLEtBQUs7NEJBRUwsU0FBUyxTQUFDLGFBQWE7c0JBQ3ZCLGVBQWUsU0FBQywwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBRdWVyeUxpc3QsXHJcbiAgUmVuZGVyZXIsXHJcbiAgVmlld0NoaWxkLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTXpDb2xsYXBzaWJsZUl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2NvbGxhcHNpYmxlLWl0ZW0vY29sbGFwc2libGUtaXRlbS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtei1jb2xsYXBzaWJsZScsXHJcbiAgdGVtcGxhdGU6IGA8dWwgI2NvbGxhcHNpYmxlXHJcbiAgY2xhc3M9XCJjb2xsYXBzaWJsZVwiXHJcbiAgW2NsYXNzLnBvcG91dF09XCJwb3BvdXRcIlxyXG4gIFtoaWRkZW5dPVwiaXRlbXMubGVuZ3RoID09PSAwXCJcclxuPlxyXG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuPC91bD5gLFxyXG4gIHN0eWxlczogW2AvZGVlcC8gLmNvbGxhcHNpYmxlLWhlYWRlcntjbGVhcjpib3RofS9kZWVwLyAuY29sbGFwc2libGUtYm9keXtjbGVhcjpib3RofWBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpDb2xsYXBzaWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KCkgbW9kZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG9uQ2xvc2U6IEZ1bmN0aW9uO1xyXG4gIEBJbnB1dCgpIG9uT3BlbjogRnVuY3Rpb247XHJcbiAgQElucHV0KCkgcG9wb3V0OiBib29sZWFuO1xyXG5cclxuICBAVmlld0NoaWxkKCdjb2xsYXBzaWJsZScpIGNvbGxhcHNpYmxlOiBFbGVtZW50UmVmO1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oTXpDb2xsYXBzaWJsZUl0ZW1Db21wb25lbnQpIGl0ZW1zOiBRdWVyeUxpc3Q8TXpDb2xsYXBzaWJsZUl0ZW1Db21wb25lbnQ+O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIsXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5oYW5kbGVEYXRhQ29sbGFwc2libGUoKTtcclxuICAgIHRoaXMuaW5pdENvbGxhcHNpYmxlKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICQodGhpcy5jb2xsYXBzaWJsZS5uYXRpdmVFbGVtZW50KS5jb2xsYXBzaWJsZSgnZGVzdHJveScpO1xyXG4gIH1cclxuXHJcbiAgY2xvc2UoY29sbGFwc2libGVJdGVtSW5kZXg6IG51bWJlcikge1xyXG4gICAgJCh0aGlzLmNvbGxhcHNpYmxlLm5hdGl2ZUVsZW1lbnQpLmNvbGxhcHNpYmxlKCdjbG9zZScsIGNvbGxhcHNpYmxlSXRlbUluZGV4KTtcclxuICB9XHJcblxyXG4gIGluaXRDb2xsYXBzaWJsZSgpIHtcclxuICAgIGNvbnN0IG9wdGlvbnM6IE1hdGVyaWFsaXplLkNvbGxhcHNpYmxlT3B0aW9ucyA9IHtcclxuICAgICAgYWNjb3JkaW9uOiBmYWxzZSxcclxuICAgICAgb25DbG9zZTogdGhpcy5vbkNsb3NlLFxyXG4gICAgICBvbk9wZW46IHRoaXMub25PcGVuLFxyXG4gICAgfTtcclxuXHJcbiAgICAkKHRoaXMuY29sbGFwc2libGUubmF0aXZlRWxlbWVudCkuY29sbGFwc2libGUob3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVEYXRhQ29sbGFwc2libGUoKSB7XHJcbiAgICBpZiAodGhpcy5tb2RlKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudEF0dHJpYnV0ZSh0aGlzLmNvbGxhcHNpYmxlLm5hdGl2ZUVsZW1lbnQsICdkYXRhLWNvbGxhcHNpYmxlJywgdGhpcy5tb2RlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9wZW4oY29sbGFwc2libGVJdGVtSW5kZXg6IG51bWJlcikge1xyXG4gICAgJCh0aGlzLmNvbGxhcHNpYmxlLm5hdGl2ZUVsZW1lbnQpLmNvbGxhcHNpYmxlKCdvcGVuJywgY29sbGFwc2libGVJdGVtSW5kZXgpO1xyXG4gIH1cclxufVxyXG4iXX0=