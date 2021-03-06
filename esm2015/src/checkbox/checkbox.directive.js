/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, HostBinding, Input, Renderer } from '@angular/core';
import { HandlePropChanges } from '../shared/index';
export class MzCheckboxDirective extends HandlePropChanges {
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
    ngOnInit() {
        this.initHandlers();
        this.initElements();
        this.handleProperties();
    }
    /**
     * @return {?}
     */
    initHandlers() {
        this.handlers = {
            filledIn: () => this.handleFilledIn(),
            label: () => this.handleLabel(),
        };
    }
    /**
     * @return {?}
     */
    initElements() {
        this.checkboxElement = $(this.elementRef.nativeElement);
        this.checkboxContainerElement = $(this.elementRef.nativeElement).parent('.checkbox-field');
        this.labelElement = this.createLabelElement();
    }
    /**
     * @return {?}
     */
    createLabelElement() {
        const /** @type {?} */ labelElement = document.createElement('label');
        labelElement.setAttribute('for', this.id);
        this.renderer.invokeElementMethod(this.checkboxElement, 'after', [labelElement]);
        return $(labelElement);
    }
    /**
     * @return {?}
     */
    handleProperties() {
        if (this.checkboxContainerElement.length === 0) {
            console.error('Input with mz-checkbox directive must be placed inside a [mz-checkbox-container] tag', this.checkboxElement);
            return;
        }
        super.executePropHandlers();
    }
    /**
     * @return {?}
     */
    handleLabel() {
        this.renderer.invokeElementMethod(this.labelElement, 'text', [this.label]);
    }
    /**
     * @return {?}
     */
    handleFilledIn() {
        this.renderer.setElementClass(this.checkboxElement[0], 'filled-in', this.filledIn);
    }
}
MzCheckboxDirective.decorators = [
    { type: Directive, args: [{
                selector: 'input[mzCheckbox], input[mz-checkbox]',
            },] },
];
/** @nocollapse */
MzCheckboxDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer, },
];
MzCheckboxDirective.propDecorators = {
    "id": [{ type: HostBinding }, { type: Input },],
    "filledIn": [{ type: Input },],
    "label": [{ type: Input },],
};
function MzCheckboxDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MzCheckboxDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MzCheckboxDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    MzCheckboxDirective.propDecorators;
    /** @type {?} */
    MzCheckboxDirective.prototype.id;
    /** @type {?} */
    MzCheckboxDirective.prototype.filledIn;
    /** @type {?} */
    MzCheckboxDirective.prototype.label;
    /** @type {?} */
    MzCheckboxDirective.prototype.checkboxElement;
    /** @type {?} */
    MzCheckboxDirective.prototype.checkboxContainerElement;
    /** @type {?} */
    MzCheckboxDirective.prototype.labelElement;
    /** @type {?} */
    MzCheckboxDirective.prototype.elementRef;
    /** @type {?} */
    MzCheckboxDirective.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hdGVyaWFsaXplLyIsInNvdXJjZXMiOlsic3JjL2NoZWNrYm94L2NoZWNrYm94LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBVSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFNUYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFLcEQsTUFBTSwwQkFBMkIsU0FBUSxpQkFBaUI7Ozs7O0lBWXhELFlBQW9CLFVBQXNCLEVBQVUsUUFBa0I7UUFDcEUsS0FBSyxFQUFFLENBQUM7UUFEVSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtLQUVyRTs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0tBQ3pCOzs7O0lBRUQsWUFBWTtRQUNWLElBQUksQ0FBQyxRQUFRLEdBQUc7WUFDZCxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUNyQyxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtTQUNoQyxDQUFDO0tBQ0g7Ozs7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsd0JBQXdCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDM0YsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztLQUMvQzs7OztJQUVELGtCQUFrQjtRQUNoQix1QkFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyRCxZQUFZLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFFakYsTUFBTSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztLQUN4Qjs7OztJQUVELGdCQUFnQjtRQUNkLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQyxPQUFPLENBQUMsS0FBSyxDQUFDLHNGQUFzRixFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUM1SCxNQUFNLENBQUM7U0FDUjtRQUVELEtBQUssQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0tBQzdCOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztLQUM1RTs7OztJQUVELGNBQWM7UUFDWixJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDcEY7OztZQTlERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVDQUF1QzthQUNsRDs7OztZQU5tQixVQUFVO1lBQThCLFFBQVE7OzttQkFTakUsV0FBVyxZQUFJLEtBQUs7eUJBR3BCLEtBQUs7c0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdEJpbmRpbmcsIElucHV0LCBPbkluaXQsIFJlbmRlcmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBIYW5kbGVQcm9wQ2hhbmdlcyB9IGZyb20gJy4uL3NoYXJlZC9pbmRleCc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ2lucHV0W216Q2hlY2tib3hdLCBpbnB1dFttei1jaGVja2JveF0nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpDaGVja2JveERpcmVjdGl2ZSBleHRlbmRzIEhhbmRsZVByb3BDaGFuZ2VzIGltcGxlbWVudHMgT25Jbml0IHtcclxuICAvLyBuYXRpdmUgcHJvcGVydGllc1xyXG4gIEBIb3N0QmluZGluZygpIEBJbnB1dCgpIGlkOiBzdHJpbmc7XHJcblxyXG4gIC8vIGRpcmVjdGl2ZSBwcm9wZXJ0aWVzXHJcbiAgQElucHV0KCkgZmlsbGVkSW46IGJvb2xlYW47XHJcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcclxuXHJcbiAgY2hlY2tib3hFbGVtZW50OiBKUXVlcnk7XHJcbiAgY2hlY2tib3hDb250YWluZXJFbGVtZW50OiBKUXVlcnk7XHJcbiAgbGFiZWxFbGVtZW50OiBKUXVlcnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5pdEhhbmRsZXJzKCk7XHJcbiAgICB0aGlzLmluaXRFbGVtZW50cygpO1xyXG4gICAgdGhpcy5oYW5kbGVQcm9wZXJ0aWVzKCk7XHJcbiAgfVxyXG5cclxuICBpbml0SGFuZGxlcnMoKSB7XHJcbiAgICB0aGlzLmhhbmRsZXJzID0ge1xyXG4gICAgICBmaWxsZWRJbjogKCkgPT4gdGhpcy5oYW5kbGVGaWxsZWRJbigpLFxyXG4gICAgICBsYWJlbDogKCkgPT4gdGhpcy5oYW5kbGVMYWJlbCgpLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGluaXRFbGVtZW50cygpIHtcclxuICAgIHRoaXMuY2hlY2tib3hFbGVtZW50ID0gJCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XHJcbiAgICB0aGlzLmNoZWNrYm94Q29udGFpbmVyRWxlbWVudCA9ICQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLnBhcmVudCgnLmNoZWNrYm94LWZpZWxkJyk7XHJcbiAgICB0aGlzLmxhYmVsRWxlbWVudCA9IHRoaXMuY3JlYXRlTGFiZWxFbGVtZW50KCk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVMYWJlbEVsZW1lbnQoKSB7XHJcbiAgICBjb25zdCBsYWJlbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgbGFiZWxFbGVtZW50LnNldEF0dHJpYnV0ZSgnZm9yJywgdGhpcy5pZCk7XHJcblxyXG4gICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMuY2hlY2tib3hFbGVtZW50LCAnYWZ0ZXInLCBbbGFiZWxFbGVtZW50XSk7XHJcblxyXG4gICAgcmV0dXJuICQobGFiZWxFbGVtZW50KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVByb3BlcnRpZXMoKSB7XHJcbiAgICBpZiAodGhpcy5jaGVja2JveENvbnRhaW5lckVsZW1lbnQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0lucHV0IHdpdGggbXotY2hlY2tib3ggZGlyZWN0aXZlIG11c3QgYmUgcGxhY2VkIGluc2lkZSBhIFttei1jaGVja2JveC1jb250YWluZXJdIHRhZycsIHRoaXMuY2hlY2tib3hFbGVtZW50KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHN1cGVyLmV4ZWN1dGVQcm9wSGFuZGxlcnMoKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUxhYmVsKCkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMubGFiZWxFbGVtZW50LCAndGV4dCcsIFt0aGlzLmxhYmVsXSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVGaWxsZWRJbigpIHtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuY2hlY2tib3hFbGVtZW50WzBdLCAnZmlsbGVkLWluJywgdGhpcy5maWxsZWRJbik7XHJcbiAgfVxyXG59XHJcbiJdfQ==