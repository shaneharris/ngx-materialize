/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, Input, Renderer, ViewChild } from '@angular/core';
var MzParallaxComponent = /** @class */ (function () {
    function MzParallaxComponent(renderer) {
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    MzParallaxComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.renderer.setElementStyle(this.parallaxContainer.nativeElement, 'height', isNaN(this.height) ? '500px' : this.height + 'px');
        this.renderer.invokeElementMethod($(this.parallax.nativeElement), 'parallax');
    };
    MzParallaxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mz-parallax',
                    template: "<div #parallaxContainer class=\"parallax-container\">\n  <div #parallax class=\"parallax\">\n    <ng-content></ng-content>\n  </div>\n</div>",
                    styles: [""],
                },] },
    ];
    /** @nocollapse */
    MzParallaxComponent.ctorParameters = function () { return [
        { type: Renderer, },
    ]; };
    MzParallaxComponent.propDecorators = {
        "height": [{ type: Input },],
        "parallax": [{ type: ViewChild, args: ['parallax',] },],
        "parallaxContainer": [{ type: ViewChild, args: ['parallaxContainer',] },],
    };
    return MzParallaxComponent;
}());
export { MzParallaxComponent };
function MzParallaxComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MzParallaxComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MzParallaxComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    MzParallaxComponent.propDecorators;
    /** @type {?} */
    MzParallaxComponent.prototype.height;
    /** @type {?} */
    MzParallaxComponent.prototype.parallax;
    /** @type {?} */
    MzParallaxComponent.prototype.parallaxContainer;
    /** @type {?} */
    MzParallaxComponent.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYWxsYXguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hdGVyaWFsaXplLyIsInNvdXJjZXMiOlsic3JjL3BhcmFsbGF4L3BhcmFsbGF4LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLFFBQVEsRUFDUixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7O0lBaUJqQyw2QkFBbUIsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtLQUFLOzs7O0lBRTFDLDZDQUFlOzs7SUFBZjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQztRQUNqSSxJQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0tBQy9FOztnQkFwQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2QixRQUFRLEVBQUUsOElBSUw7b0JBQ0wsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2lCQUNiOzs7O2dCQVhDLFFBQVE7OzsyQkFhUCxLQUFLOzZCQUVMLFNBQVMsU0FBQyxVQUFVO3NDQUNwQixTQUFTLFNBQUMsbUJBQW1COzs4QkFyQmhDOztTQWlCYSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgUmVuZGVyZXIsXHJcbiAgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ216LXBhcmFsbGF4JyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgI3BhcmFsbGF4Q29udGFpbmVyIGNsYXNzPVwicGFyYWxsYXgtY29udGFpbmVyXCI+XHJcbiAgPGRpdiAjcGFyYWxsYXggY2xhc3M9XCJwYXJhbGxheFwiPlxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5gLFxyXG4gIHN0eWxlczogW2BgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16UGFyYWxsYXhDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuICBASW5wdXQoKSBoZWlnaHQ6IG51bWJlcjtcclxuXHJcbiAgQFZpZXdDaGlsZCgncGFyYWxsYXgnKSBwYXJhbGxheDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdwYXJhbGxheENvbnRhaW5lcicpIHBhcmFsbGF4Q29udGFpbmVyOiBFbGVtZW50UmVmO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyKSB7IH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5wYXJhbGxheENvbnRhaW5lci5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0JywgaXNOYU4odGhpcy5oZWlnaHQpID8gJzUwMHB4JyA6IHRoaXMuaGVpZ2h0ICsgJ3B4Jyk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QoJCh0aGlzLnBhcmFsbGF4Lm5hdGl2ZUVsZW1lbnQpLCAncGFyYWxsYXgnKTtcclxuICB9XHJcbn1cclxuIl19