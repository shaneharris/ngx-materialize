/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, Input, Renderer, ViewChild } from '@angular/core';
export class MzParallaxComponent {
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
        this.renderer.setElementStyle(this.parallaxContainer.nativeElement, 'height', isNaN(this.height) ? '500px' : this.height + 'px');
        this.renderer.invokeElementMethod($(this.parallax.nativeElement), 'parallax');
    }
}
MzParallaxComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-parallax',
                template: `<div #parallaxContainer class="parallax-container">
  <div #parallax class="parallax">
    <ng-content></ng-content>
  </div>
</div>`,
                styles: [``],
            },] },
];
/** @nocollapse */
MzParallaxComponent.ctorParameters = () => [
    { type: Renderer, },
];
MzParallaxComponent.propDecorators = {
    "height": [{ type: Input },],
    "parallax": [{ type: ViewChild, args: ['parallax',] },],
    "parallaxContainer": [{ type: ViewChild, args: ['parallaxContainer',] },],
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYWxsYXguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hdGVyaWFsaXplLyIsInNvdXJjZXMiOlsic3JjL3BhcmFsbGF4L3BhcmFsbGF4LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLFFBQVEsRUFDUixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFXbkMsTUFBTTs7OztJQU1KLFlBQW1CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7S0FBSzs7OztJQUUxQyxlQUFlO1FBQ2IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ2pJLElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUM7S0FDL0U7OztZQXBCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFFBQVEsRUFBRTs7OztPQUlMO2dCQUNMLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQzthQUNiOzs7O1lBWEMsUUFBUTs7O3VCQWFQLEtBQUs7eUJBRUwsU0FBUyxTQUFDLFVBQVU7a0NBQ3BCLFNBQVMsU0FBQyxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgUmVuZGVyZXIsXHJcbiAgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ216LXBhcmFsbGF4JyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgI3BhcmFsbGF4Q29udGFpbmVyIGNsYXNzPVwicGFyYWxsYXgtY29udGFpbmVyXCI+XHJcbiAgPGRpdiAjcGFyYWxsYXggY2xhc3M9XCJwYXJhbGxheFwiPlxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5gLFxyXG4gIHN0eWxlczogW2BgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16UGFyYWxsYXhDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuICBASW5wdXQoKSBoZWlnaHQ6IG51bWJlcjtcclxuXHJcbiAgQFZpZXdDaGlsZCgncGFyYWxsYXgnKSBwYXJhbGxheDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdwYXJhbGxheENvbnRhaW5lcicpIHBhcmFsbGF4Q29udGFpbmVyOiBFbGVtZW50UmVmO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyKSB7IH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5wYXJhbGxheENvbnRhaW5lci5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0JywgaXNOYU4odGhpcy5oZWlnaHQpID8gJzUwMHB4JyA6IHRoaXMuaGVpZ2h0ICsgJ3B4Jyk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QoJCh0aGlzLnBhcmFsbGF4Lm5hdGl2ZUVsZW1lbnQpLCAncGFyYWxsYXgnKTtcclxuICB9XHJcbn1cclxuIl19