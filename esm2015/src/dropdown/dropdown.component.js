/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, Input, Renderer, } from '@angular/core';
import { HandlePropChanges } from '../shared/index';
export class MzDropdownComponent extends HandlePropChanges {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
        super();
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.initHandlers();
        this.initDropdownButtonElement();
        this.handleProperties();
    }
    /**
     * @return {?}
     */
    close() {
        setTimeout(() => this.renderer.invokeElementMethod(this.dropdownButtonElement, 'dropdown', ['close']));
    }
    /**
     * @return {?}
     */
    initDropdownButtonElement() {
        this.dropdownButtonElement = $(`#${this.dropdownButtonId}`);
    }
    /**
     * @return {?}
     */
    initHandlers() {
        this.handlers = {
            align: () => this.handleDropdown(),
            belowOrigin: () => this.handleDropdown(),
            constrainWidth: () => this.handleDropdown(),
            dropdownButtonId: () => this.handleDataActivates(),
            gutter: () => this.handleDropdown(),
            hover: () => this.handleDropdown(),
            id: () => this.handleDropdown(),
            inDuration: () => this.handleDropdown(),
            outDuration: () => this.handleDropdown(),
            stopPropagation: () => this.handleDropdown(),
        };
    }
    /**
     * @return {?}
     */
    handleDataActivates() {
        this.renderer.setElementAttribute(this.dropdownButtonElement[0], 'data-activates', this.id);
    }
    /**
     * @return {?}
     */
    handleDropdown() {
        this.validateProperties();
        const /** @type {?} */ options = {
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
    }
    /**
     * @return {?}
     */
    handleProperties() {
        this.handleDataActivates();
        this.handleDropdown();
    }
    /**
     * @return {?}
     */
    open() {
        setTimeout(() => this.renderer.invokeElementMethod(this.dropdownButtonElement, 'dropdown', ['open']));
    }
    /**
     * @return {?}
     */
    validateProperties() {
        if (!this.id) {
            throw new Error('Attribute [id] from mz-dropdown is required. ' + this.elementRef.nativeElement);
        }
        if (this.dropdownButtonElement.length === 0) {
            throw new Error('Attribute [dropdownButtonId] from mz-dropdown is required and should be an existing element. ' +
                this.elementRef.nativeElement);
        }
    }
}
MzDropdownComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-dropdown',
                template: `<ul
  class="dropdown-content"
  [attr.id]="id"
>
  <ng-content></ng-content>
</ul>`,
                styles: [``],
            },] },
];
/** @nocollapse */
MzDropdownComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer, },
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hdGVyaWFsaXplLyIsInNvdXJjZXMiOlsic3JjL2Ryb3Bkb3duL2Ryb3Bkb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLFFBQVEsR0FDVCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQVlwRCxNQUFNLDBCQUEyQixTQUFRLGlCQUFpQjs7Ozs7SUFjeEQsWUFBb0IsVUFBc0IsRUFBVSxRQUFrQjtRQUNwRSxLQUFLLEVBQUUsQ0FBQztRQURVLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFVO0tBRXBFOzs7O0lBRUYsZUFBZTtRQUNiLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztLQUN6Qjs7OztJQUVELEtBQUs7UUFDSCxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsVUFBVSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3hHOzs7O0lBRUQseUJBQXlCO1FBQ3ZCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO0tBQzdEOzs7O0lBRUQsWUFBWTtRQUNWLElBQUksQ0FBQyxRQUFRLEdBQUc7WUFDZCxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUNsQyxXQUFXLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMs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QWZ0ZXJWaWV3SW5pdCxcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBSZW5kZXJlcixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEhhbmRsZVByb3BDaGFuZ2VzIH0gZnJvbSAnLi4vc2hhcmVkL2luZGV4JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXotZHJvcGRvd24nLFxyXG4gIHRlbXBsYXRlOiBgPHVsXHJcbiAgY2xhc3M9XCJkcm9wZG93bi1jb250ZW50XCJcclxuICBbYXR0ci5pZF09XCJpZFwiXHJcbj5cclxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjwvdWw+YCxcclxuICBzdHlsZXM6IFtgYF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNekRyb3Bkb3duQ29tcG9uZW50IGV4dGVuZHMgSGFuZGxlUHJvcENoYW5nZXMgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuICBASW5wdXQoKSBhbGlnbjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGJlbG93T3JpZ2luOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGNvbnN0cmFpbldpZHRoOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGRyb3Bkb3duQnV0dG9uSWQ6IHN0cmluZztcclxuICBASW5wdXQoKSBndXR0ZXI6IG51bWJlcjtcclxuICBASW5wdXQoKSBob3ZlcjogYm9vbGVhbjtcclxuICBASW5wdXQoKSBpZDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGluRHVyYXRpb246IG51bWJlcjtcclxuICBASW5wdXQoKSBvdXREdXJhdGlvbjogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIHN0b3BQcm9wYWdhdGlvbjogYm9vbGVhbjtcclxuXHJcbiAgZHJvcGRvd25CdXR0b25FbGVtZW50OiBKUXVlcnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5pbml0SGFuZGxlcnMoKTtcclxuICAgIHRoaXMuaW5pdERyb3Bkb3duQnV0dG9uRWxlbWVudCgpO1xyXG4gICAgdGhpcy5oYW5kbGVQcm9wZXJ0aWVzKCk7XHJcbiAgfVxyXG5cclxuICBjbG9zZSgpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMuZHJvcGRvd25CdXR0b25FbGVtZW50LCAnZHJvcGRvd24nLCBbJ2Nsb3NlJ10pKTtcclxuICB9XHJcblxyXG4gIGluaXREcm9wZG93bkJ1dHRvbkVsZW1lbnQoKSB7XHJcbiAgICB0aGlzLmRyb3Bkb3duQnV0dG9uRWxlbWVudCA9ICQoYCMke3RoaXMuZHJvcGRvd25CdXR0b25JZH1gKTtcclxuICB9XHJcblxyXG4gIGluaXRIYW5kbGVycygpIHtcclxuICAgIHRoaXMuaGFuZGxlcnMgPSB7XHJcbiAgICAgIGFsaWduOiAoKSA9PiB0aGlzLmhhbmRsZURyb3Bkb3duKCksXHJcbiAgICAgIGJlbG93T3JpZ2luOiAoKSA9PiB0aGlzLmhhbmRsZURyb3Bkb3duKCksXHJcbiAgICAgIGNvbnN0cmFpbldpZHRoOiAoKSA9PiB0aGlzLmhhbmRsZURyb3Bkb3duKCksXHJcbiAgICAgIGRyb3Bkb3duQnV0dG9uSWQ6ICgpID0+IHRoaXMuaGFuZGxlRGF0YUFjdGl2YXRlcygpLFxyXG4gICAgICBndXR0ZXI6ICgpID0+IHRoaXMuaGFuZGxlRHJvcGRvd24oKSxcclxuICAgICAgaG92ZXI6ICgpID0+IHRoaXMuaGFuZGxlRHJvcGRvd24oKSxcclxuICAgICAgaWQ6ICgpID0+IHRoaXMuaGFuZGxlRHJvcGRvd24oKSxcclxuICAgICAgaW5EdXJhdGlvbjogKCkgPT4gdGhpcy5oYW5kbGVEcm9wZG93bigpLFxyXG4gICAgICBvdXREdXJhdGlvbjogKCkgPT4gdGhpcy5oYW5kbGVEcm9wZG93bigpLFxyXG4gICAgICBzdG9wUHJvcGFnYXRpb246ICgpID0+IHRoaXMuaGFuZGxlRHJvcGRvd24oKSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBoYW5kbGVEYXRhQWN0aXZhdGVzKCkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50QXR0cmlidXRlKHRoaXMuZHJvcGRvd25CdXR0b25FbGVtZW50WzBdLCAnZGF0YS1hY3RpdmF0ZXMnLCB0aGlzLmlkKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZURyb3Bkb3duKCkge1xyXG4gICAgdGhpcy52YWxpZGF0ZVByb3BlcnRpZXMoKTtcclxuXHJcbiAgICBjb25zdCBvcHRpb25zOiBNYXRlcmlhbGl6ZS5Ecm9wRG93bk9wdGlvbnMgPSB7XHJcbiAgICAgIGFsaWdubWVudDogdGhpcy5hbGlnbixcclxuICAgICAgYmVsb3dPcmlnaW46IHRoaXMuYmVsb3dPcmlnaW4sXHJcbiAgICAgIGNvbnN0cmFpbldpZHRoOiB0aGlzLmNvbnN0cmFpbldpZHRoLFxyXG4gICAgICBndXR0ZXI6IHRoaXMuZ3V0dGVyLFxyXG4gICAgICBob3ZlcjogdGhpcy5ob3ZlcixcclxuICAgICAgaW5EdXJhdGlvbjogdGhpcy5pbkR1cmF0aW9uLFxyXG4gICAgICBvdXREdXJhdGlvbjogdGhpcy5vdXREdXJhdGlvbixcclxuICAgICAgc3RvcFByb3BhZ2F0aW9uOiB0aGlzLnN0b3BQcm9wYWdhdGlvbixcclxuICAgIH07XHJcblxyXG4gICAgLy8gSW5pdGlhbGl6ZSBkcm9wZG93biBidXR0b24gZm9yIGRyb3Bkb3duXHJcbiAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QodGhpcy5kcm9wZG93bkJ1dHRvbkVsZW1lbnQsICdkcm9wZG93bicsIFtvcHRpb25zXSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVQcm9wZXJ0aWVzKCkge1xyXG4gICAgdGhpcy5oYW5kbGVEYXRhQWN0aXZhdGVzKCk7XHJcbiAgICB0aGlzLmhhbmRsZURyb3Bkb3duKCk7XHJcbiAgfVxyXG5cclxuICBvcGVuKCkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QodGhpcy5kcm9wZG93bkJ1dHRvbkVsZW1lbnQsICdkcm9wZG93bicsIFsnb3BlbiddKSk7XHJcbiAgfVxyXG5cclxuICB2YWxpZGF0ZVByb3BlcnRpZXMoKSB7XHJcbiAgICBpZiAoIXRoaXMuaWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBdHRyaWJ1dGUgW2lkXSBmcm9tIG16LWRyb3Bkb3duIGlzIHJlcXVpcmVkLiAnICsgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmRyb3Bkb3duQnV0dG9uRWxlbWVudC5sZW5ndGggPT09IDApIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICdBdHRyaWJ1dGUgW2Ryb3Bkb3duQnV0dG9uSWRdIGZyb20gbXotZHJvcGRvd24gaXMgcmVxdWlyZWQgYW5kIHNob3VsZCBiZSBhbiBleGlzdGluZyBlbGVtZW50LiAnICtcclxuICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==