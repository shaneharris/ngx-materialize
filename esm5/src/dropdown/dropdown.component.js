/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, Input, Renderer, } from '@angular/core';
import { HandlePropChanges } from '../shared/index';
var MzDropdownComponent = /** @class */ (function (_super) {
    tslib_1.__extends(MzDropdownComponent, _super);
    function MzDropdownComponent(elementRef, renderer) {
        var _this = _super.call(this) || this;
        _this.elementRef = elementRef;
        _this.renderer = renderer;
        return _this;
    }
    /**
     * @return {?}
     */
    MzDropdownComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.initHandlers();
        this.initDropdownButtonElement();
        this.handleProperties();
    };
    /**
     * @return {?}
     */
    MzDropdownComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout(function () { return _this.renderer.invokeElementMethod(_this.dropdownButtonElement, 'dropdown', ['close']); });
    };
    /**
     * @return {?}
     */
    MzDropdownComponent.prototype.initDropdownButtonElement = /**
     * @return {?}
     */
    function () {
        this.dropdownButtonElement = $("#" + this.dropdownButtonId);
    };
    /**
     * @return {?}
     */
    MzDropdownComponent.prototype.initHandlers = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.handlers = {
            align: function () { return _this.handleDropdown(); },
            belowOrigin: function () { return _this.handleDropdown(); },
            constrainWidth: function () { return _this.handleDropdown(); },
            dropdownButtonId: function () { return _this.handleDataActivates(); },
            gutter: function () { return _this.handleDropdown(); },
            hover: function () { return _this.handleDropdown(); },
            id: function () { return _this.handleDropdown(); },
            inDuration: function () { return _this.handleDropdown(); },
            outDuration: function () { return _this.handleDropdown(); },
            stopPropagation: function () { return _this.handleDropdown(); },
        };
    };
    /**
     * @return {?}
     */
    MzDropdownComponent.prototype.handleDataActivates = /**
     * @return {?}
     */
    function () {
        this.renderer.setElementAttribute(this.dropdownButtonElement[0], 'data-activates', this.id);
    };
    /**
     * @return {?}
     */
    MzDropdownComponent.prototype.handleDropdown = /**
     * @return {?}
     */
    function () {
        this.validateProperties();
        var /** @type {?} */ options = {
            alignment: this.align,
            belowOrigin: this.belowOrigin,
            constrainWidth: this.constrainWidth,
            gutter: this.gutter,
            hover: this.hover,
            inDuration: this.inDuration,
            outDuration: this.outDuration,
            stopPropagation: this.stopPropagation,
        };
        // Initialize dropdown button for dropdown
        this.renderer.invokeElementMethod(this.dropdownButtonElement, 'dropdown', [options]);
    };
    /**
     * @return {?}
     */
    MzDropdownComponent.prototype.handleProperties = /**
     * @return {?}
     */
    function () {
        this.handleDataActivates();
        this.handleDropdown();
    };
    /**
     * @return {?}
     */
    MzDropdownComponent.prototype.open = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout(function () { return _this.renderer.invokeElementMethod(_this.dropdownButtonElement, 'dropdown', ['open']); });
    };
    /**
     * @return {?}
     */
    MzDropdownComponent.prototype.validateProperties = /**
     * @return {?}
     */
    function () {
        if (!this.id) {
            throw new Error('Attribute [id] from mz-dropdown is required. ' + this.elementRef.nativeElement);
        }
        if (this.dropdownButtonElement.length === 0) {
            throw new Error('Attribute [dropdownButtonId] from mz-dropdown is required and should be an existing element. ' +
                this.elementRef.nativeElement);
        }
    };
    MzDropdownComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mz-dropdown',
                    template: "<ul\n  class=\"dropdown-content\"\n  [attr.id]=\"id\"\n>\n  <ng-content></ng-content>\n</ul>",
                    styles: [""],
                },] },
    ];
    /** @nocollapse */
    MzDropdownComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: Renderer, },
    ]; };
    MzDropdownComponent.propDecorators = {
        "align": [{ type: Input },],
        "belowOrigin": [{ type: Input },],
        "constrainWidth": [{ type: Input },],
        "dropdownButtonId": [{ type: Input },],
        "gutter": [{ type: Input },],
        "hover": [{ type: Input },],
        "id": [{ type: Input },],
        "inDuration": [{ type: Input },],
        "outDuration": [{ type: Input },],
        "stopPropagation": [{ type: Input },],
    };
    return MzDropdownComponent;
}(HandlePropChanges));
export { MzDropdownComponent };
function MzDropdownComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MzDropdownComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MzDropdownComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    MzDropdownComponent.propDecorators;
    /** @type {?} */
    MzDropdownComponent.prototype.align;
    /** @type {?} */
    MzDropdownComponent.prototype.belowOrigin;
    /** @type {?} */
    MzDropdownComponent.prototype.constrainWidth;
    /** @type {?} */
    MzDropdownComponent.prototype.dropdownButtonId;
    /** @type {?} */
    MzDropdownComponent.prototype.gutter;
    /** @type {?} */
    MzDropdownComponent.prototype.hover;
    /** @type {?} */
    MzDropdownComponent.prototype.id;
    /** @type {?} */
    MzDropdownComponent.prototype.inDuration;
    /** @type {?} */
    MzDropdownComponent.prototype.outDuration;
    /** @type {?} */
    MzDropdownComponent.prototype.stopPropagation;
    /** @type {?} */
    MzDropdownComponent.prototype.dropdownButtonElement;
    /** @type {?} */
    MzDropdownComponent.prototype.elementRef;
    /** @type {?} */
    MzDropdownComponent.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hdGVyaWFsaXplLyIsInNvdXJjZXMiOlsic3JjL2Ryb3Bkb3duL2Ryb3Bkb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxRQUFRLEdBQ1QsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7O0lBWVgsK0NBQWlCO0lBY3hELDZCQUFvQixVQUFzQixFQUFVLFFBQWtCO1FBQXRFLFlBQ0UsaUJBQU8sU0FDUDtRQUZrQixnQkFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGNBQVEsR0FBUixRQUFRLENBQVU7O0tBRXBFOzs7O0lBRUYsNkNBQWU7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0tBQ3pCOzs7O0lBRUQsbUNBQUs7OztJQUFMO1FBQUEsaUJBRUM7UUFEQyxVQUFVLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsS0FBSSxDQUFDLHFCQUFxQixFQUFFLFVBQVUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQXBGLENBQW9GLENBQUMsQ0FBQztLQUN4Rzs7OztJQUVELHVEQUF5Qjs7O0lBQXpCO1FBQ0UsSUFBSSxDQUFDLHFCQUFxQixHQUFHLENBQUMsQ0FBQyxNQUFJLElBQUksQ0FBQyxnQkFBa0IsQ0FBQyxDQUFDO0tBQzdEOzs7O0lBRUQsMENBQVk7OztJQUFaO1FBQUEsaUJBYUM7UUFaQyxJQUFJLENBQUMsUUFBUSxHQUFHO1lBQ2QsS0FBSyxFQUFFLGNBQU0sT0FBQSxLQUFJLENBQUMsY0FBYyxFQUFFLEVBQXJCLENBQXFC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QkMsVUFBVTtnQkFFVixRQUFROzs7MEJBZ0JQLEtBQUs7Z0NBQ0wsS0FBSzttQ0FDTCxLQUFLO3FDQUNMLEtBQUs7MkJBQ0wsS0FBSzswQkFDTCxLQUFLO3VCQUNMLEtBQUs7K0JBQ0wsS0FBSztnQ0FDTCxLQUFLO29DQUNMLEtBQUs7OzhCQTlCUjtFQW9CeUMsaUJBQWlCO1NBQTdDLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBSZW5kZXJlcixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEhhbmRsZVByb3BDaGFuZ2VzIH0gZnJvbSAnLi4vc2hhcmVkL2luZGV4JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXotZHJvcGRvd24nLFxyXG4gIHRlbXBsYXRlOiBgPHVsXHJcbiAgY2xhc3M9XCJkcm9wZG93bi1jb250ZW50XCJcclxuICBbYXR0ci5pZF09XCJpZFwiXHJcbj5cclxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjwvdWw+YCxcclxuICBzdHlsZXM6IFtgYF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNekRyb3Bkb3duQ29tcG9uZW50IGV4dGVuZHMgSGFuZGxlUHJvcENoYW5nZXMgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuICBASW5wdXQoKSBhbGlnbjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGJlbG93T3JpZ2luOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGNvbnN0cmFpbldpZHRoOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGRyb3Bkb3duQnV0dG9uSWQ6IHN0cmluZztcclxuICBASW5wdXQoKSBndXR0ZXI6IG51bWJlcjtcclxuICBASW5wdXQoKSBob3ZlcjogYm9vbGVhbjtcclxuICBASW5wdXQoKSBpZDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGluRHVyYXRpb246IG51bWJlcjtcclxuICBASW5wdXQoKSBvdXREdXJhdGlvbjogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIHN0b3BQcm9wYWdhdGlvbjogYm9vbGVhbjtcclxuXHJcbiAgZHJvcGRvd25CdXR0b25FbGVtZW50OiBKUXVlcnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5pbml0SGFuZGxlcnMoKTtcclxuICAgIHRoaXMuaW5pdERyb3Bkb3duQnV0dG9uRWxlbWVudCgpO1xyXG4gICAgdGhpcy5oYW5kbGVQcm9wZXJ0aWVzKCk7XHJcbiAgfVxyXG5cclxuICBjbG9zZSgpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMuZHJvcGRvd25CdXR0b25FbGVtZW50LCAnZHJvcGRvd24nLCBbJ2Nsb3NlJ10pKTtcclxuICB9XHJcblxyXG4gIGluaXREcm9wZG93bkJ1dHRvbkVsZW1lbnQoKSB7XHJcbiAgICB0aGlzLmRyb3Bkb3duQnV0dG9uRWxlbWVudCA9ICQoYCMke3RoaXMuZHJvcGRvd25CdXR0b25JZH1gKTtcclxuICB9XHJcblxyXG4gIGluaXRIYW5kbGVycygpIHtcclxuICAgIHRoaXMuaGFuZGxlcnMgPSB7XHJcbiAgICAgIGFsaWduOiAoKSA9PiB0aGlzLmhhbmRsZURyb3Bkb3duKCksXHJcbiAgICAgIGJlbG93T3JpZ2luOiAoKSA9PiB0aGlzLmhhbmRsZURyb3Bkb3duKCksXHJcbiAgICAgIGNvbnN0cmFpbldpZHRoOiAoKSA9PiB0aGlzLmhhbmRsZURyb3Bkb3duKCksXHJcbiAgICAgIGRyb3Bkb3duQnV0dG9uSWQ6ICgpID0+IHRoaXMuaGFuZGxlRGF0YUFjdGl2YXRlcygpLFxyXG4gICAgICBndXR0ZXI6ICgpID0+IHRoaXMuaGFuZGxlRHJvcGRvd24oKSxcclxuICAgICAgaG92ZXI6ICgpID0+IHRoaXMuaGFuZGxlRHJvcGRvd24oKSxcclxuICAgICAgaWQ6ICgpID0+IHRoaXMuaGFuZGxlRHJvcGRvd24oKSxcclxuICAgICAgaW5EdXJhdGlvbjogKCkgPT4gdGhpcy5oYW5kbGVEcm9wZG93bigpLFxyXG4gICAgICBvdXREdXJhdGlvbjogKCkgPT4gdGhpcy5oYW5kbGVEcm9wZG93bigpLFxyXG4gICAgICBzdG9wUHJvcGFnYXRpb246ICgpID0+IHRoaXMuaGFuZGxlRHJvcGRvd24oKSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBoYW5kbGVEYXRhQWN0aXZhdGVzKCkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50QXR0cmlidXRlKHRoaXMuZHJvcGRvd25CdXR0b25FbGVtZW50WzBdLCAnZGF0YS1hY3RpdmF0ZXMnLCB0aGlzLmlkKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZURyb3Bkb3duKCkge1xyXG4gICAgdGhpcy52YWxpZGF0ZVByb3BlcnRpZXMoKTtcclxuXHJcbiAgICBjb25zdCBvcHRpb25zOiBNYXRlcmlhbGl6ZS5Ecm9wRG93bk9wdGlvbnMgPSB7XHJcbiAgICAgIGFsaWdubWVudDogdGhpcy5hbGlnbixcclxuICAgICAgYmVsb3dPcmlnaW46IHRoaXMuYmVsb3dPcmlnaW4sXHJcbiAgICAgIGNvbnN0cmFpbldpZHRoOiB0aGlzLmNvbnN0cmFpbldpZHRoLFxyXG4gICAgICBndXR0ZXI6IHRoaXMuZ3V0dGVyLFxyXG4gICAgICBob3ZlcjogdGhpcy5ob3ZlcixcclxuICAgICAgaW5EdXJhdGlvbjogdGhpcy5pbkR1cmF0aW9uLFxyXG4gICAgICBvdXREdXJhdGlvbjogdGhpcy5vdXREdXJhdGlvbixcclxuICAgICAgc3RvcFByb3BhZ2F0aW9uOiB0aGlzLnN0b3BQcm9wYWdhdGlvbixcclxuICAgIH07XHJcblxyXG4gICAgLy8gSW5pdGlhbGl6ZSBkcm9wZG93biBidXR0b24gZm9yIGRyb3Bkb3duXHJcbiAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QodGhpcy5kcm9wZG93bkJ1dHRvbkVsZW1lbnQsICdkcm9wZG93bicsIFtvcHRpb25zXSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVQcm9wZXJ0aWVzKCkge1xyXG4gICAgdGhpcy5oYW5kbGVEYXRhQWN0aXZhdGVzKCk7XHJcbiAgICB0aGlzLmhhbmRsZURyb3Bkb3duKCk7XHJcbiAgfVxyXG5cclxuICBvcGVuKCkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QodGhpcy5kcm9wZG93bkJ1dHRvbkVsZW1lbnQsICdkcm9wZG93bicsIFsnb3BlbiddKSk7XHJcbiAgfVxyXG5cclxuICB2YWxpZGF0ZVByb3BlcnRpZXMoKSB7XHJcbiAgICBpZiAoIXRoaXMuaWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBdHRyaWJ1dGUgW2lkXSBmcm9tIG16LWRyb3Bkb3duIGlzIHJlcXVpcmVkLiAnICsgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmRyb3Bkb3duQnV0dG9uRWxlbWVudC5sZW5ndGggPT09IDApIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICdBdHRyaWJ1dGUgW2Ryb3Bkb3duQnV0dG9uSWRdIGZyb20gbXotZHJvcGRvd24gaXMgcmVxdWlyZWQgYW5kIHNob3VsZCBiZSBhbiBleGlzdGluZyBlbGVtZW50LiAnICtcclxuICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==