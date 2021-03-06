/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Directive, ElementRef, EventEmitter, Input, Output, Renderer, ViewChild, } from '@angular/core';
import { HandlePropChanges } from '../shared/index';
export class MzModalComponent extends HandlePropChanges {
    /**
     * @param {?} renderer
     */
    constructor(renderer) {
        super();
        this.renderer = renderer;
        this.close = new EventEmitter();
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
    ngAfterViewInit() {
        this.initModal();
    }
    /**
     * @return {?}
     */
    initElements() {
        this.modalElement = $(this.modalElementRef.nativeElement);
    }
    /**
     * @return {?}
     */
    initHandlers() {
        this.handlers = {
            options: () => this.handleOptions(),
        };
    }
    /**
     * @return {?}
     */
    initModal() {
        this.renderer.invokeElementMethod(this.modalElement, 'modal', [this.options]);
    }
    /**
     * @return {?}
     */
    handleProperties() {
        super.executePropHandlers();
    }
    /**
     * @return {?}
     */
    handleOptions() {
        // extend complete function to emit close event on callback return
        const /** @type {?} */ originalCompleteFn = this.options && this.options.complete || (() => { });
        this.options = Object.assign({}, this.options, {
            complete: () => {
                originalCompleteFn();
                this.close.emit();
            },
        });
    }
    /**
     * @return {?}
     */
    openModal() {
        this.renderer.invokeElementMethod(this.modalElement, 'modal', ['open']);
    }
    /**
     * @return {?}
     */
    closeModal() {
        this.renderer.invokeElementMethod(this.modalElement, 'modal', ['close']);
    }
}
MzModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-modal',
                template: `<div #modal
  class="modal"
  [class.modal-fixed-footer]="fixedFooter"
  [class.bottom-sheet]="bottomSheet"
  [class.modal-fullscreen]="fullscreen"
>
  <div class="modal-content">
    <ng-content select="mz-modal-header"></ng-content>
    <div>
      <ng-content select="mz-modal-content"></ng-content>
    </div>
  </div>
  <div class="modal-footer">
    <ng-content select="mz-modal-footer"></ng-content>
  </div>
</div>
`,
                styles: [`.modal:not(.bottom-sheet).modal-fullscreen{top:12px!important;margin:0 auto;width:calc(100% - 24px);height:calc(100% - 24px);max-height:none}.modal.bottom-sheet.modal-fullscreen{height:100%;max-height:none}/deep/ mz-modal-header h5,/deep/ mz-modal-header h6{margin-top:0}`],
            },] },
];
/** @nocollapse */
MzModalComponent.ctorParameters = () => [
    { type: Renderer, },
];
MzModalComponent.propDecorators = {
    "bottomSheet": [{ type: Input },],
    "fixedFooter": [{ type: Input },],
    "fullscreen": [{ type: Input },],
    "options": [{ type: Input },],
    "close": [{ type: Output },],
    "modalElementRef": [{ type: ViewChild, args: ['modal',] },],
};
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
export class MzModalHeaderDirective {
}
MzModalHeaderDirective.decorators = [
    { type: Directive, args: [{ selector: 'mz-modal-header' },] },
];
function MzModalHeaderDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MzModalHeaderDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MzModalHeaderDirective.ctorParameters;
}
export class MzModalContentDirective {
}
MzModalContentDirective.decorators = [
    { type: Directive, args: [{ selector: 'mz-modal-content' },] },
];
function MzModalContentDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MzModalContentDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MzModalContentDirective.ctorParameters;
}
export class MzModalFooterDirective {
}
MzModalFooterDirective.decorators = [
    { type: Directive, args: [{ selector: 'mz-modal-footer' },] },
];
function MzModalFooterDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MzModalFooterDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MzModalFooterDirective.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hdGVyaWFsaXplLyIsInNvdXJjZXMiOlsic3JjL21vZGFsL21vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUNOLFFBQVEsRUFDUixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUF1QnBELE1BQU0sdUJBQXdCLFNBQVEsaUJBQWlCOzs7O0lBVXJELFlBQW1CLFFBQWtCO1FBQ25DLEtBQUssRUFBRSxDQUFDO1FBRFMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtxQkFMbkIsSUFBSSxZQUFZLEVBQVE7S0FPekM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztLQUN6Qjs7OztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7S0FDbEI7Ozs7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQztLQUMzRDs7OztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsUUFBUSxHQUFHO1lBQ2IsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7U0FDckMsQ0FBQztLQUNIOzs7O0lBRUQsU0FBUztRQUNQLElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztLQUMvRTs7OztJQUVELGdCQUFnQjtRQUNkLEtBQUssQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0tBQzdCOzs7O0lBRUQsYUFBYTs7UUFFWCx1QkFBTSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUcsQ0FBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUM3QyxRQUFRLEVBQUUsR0FBRyxFQUFFO2dCQUNiLGtCQUFrQixFQUFFLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDbkI7U0FDRixDQUFDLENBQUM7S0FDSjs7OztJQUVELFNBQVM7UUFDUCxJQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztLQUN6RTs7OztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztLQUMxRTs7O1lBaEZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O0NBZ0JYO2dCQUNDLE1BQU0sRUFBRSxDQUFDLGlSQUFpUixDQUFDO2FBQzVSOzs7O1lBMUJDLFFBQVE7Ozs0QkE0QlAsS0FBSzs0QkFDTCxLQUFLOzJCQUNMLEtBQUs7d0JBQ0wsS0FBSztzQkFDTCxNQUFNO2dDQUNOLFNBQVMsU0FBQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJEd0IsTUFBTTs7O1lBQWpELFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRTs7Ozs7Ozs7Ozs7QUFDRyxNQUFNOzs7WUFBbEQsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLGtCQUFrQixFQUFFOzs7Ozs7Ozs7OztBQUNDLE1BQU07OztZQUFqRCxTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ29tcG9uZW50LFxyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyLFxyXG4gIFZpZXdDaGlsZCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEhhbmRsZVByb3BDaGFuZ2VzIH0gZnJvbSAnLi4vc2hhcmVkL2luZGV4JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXotbW9kYWwnLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiAjbW9kYWxcclxuICBjbGFzcz1cIm1vZGFsXCJcclxuICBbY2xhc3MubW9kYWwtZml4ZWQtZm9vdGVyXT1cImZpeGVkRm9vdGVyXCJcclxuICBbY2xhc3MuYm90dG9tLXNoZWV0XT1cImJvdHRvbVNoZWV0XCJcclxuICBbY2xhc3MubW9kYWwtZnVsbHNjcmVlbl09XCJmdWxsc2NyZWVuXCJcclxuPlxyXG4gIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJtei1tb2RhbC1oZWFkZXJcIj48L25nLWNvbnRlbnQ+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJtei1tb2RhbC1jb250ZW50XCI+PC9uZy1jb250ZW50PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibXotbW9kYWwtZm9vdGVyXCI+PC9uZy1jb250ZW50PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuYCxcclxuICBzdHlsZXM6IFtgLm1vZGFsOm5vdCguYm90dG9tLXNoZWV0KS5tb2RhbC1mdWxsc2NyZWVue3RvcDoxMnB4IWltcG9ydGFudDttYXJnaW46MCBhdXRvO3dpZHRoOmNhbGMoMTAwJSAtIDI0cHgpO2hlaWdodDpjYWxjKDEwMCUgLSAyNHB4KTttYXgtaGVpZ2h0Om5vbmV9Lm1vZGFsLmJvdHRvbS1zaGVldC5tb2RhbC1mdWxsc2NyZWVue2hlaWdodDoxMDAlO21heC1oZWlnaHQ6bm9uZX0vZGVlcC8gbXotbW9kYWwtaGVhZGVyIGg1LC9kZWVwLyBtei1tb2RhbC1oZWFkZXIgaDZ7bWFyZ2luLXRvcDowfWBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpNb2RhbENvbXBvbmVudCBleHRlbmRzIEhhbmRsZVByb3BDaGFuZ2VzIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcclxuICBASW5wdXQoKSBib3R0b21TaGVldDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBmaXhlZEZvb3RlcjogYm9vbGVhbjtcclxuICBASW5wdXQoKSBmdWxsc2NyZWVuOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIG9wdGlvbnM6IE1hdGVyaWFsaXplLk1vZGFsT3B0aW9ucztcclxuICBAT3V0cHV0KCkgY2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQFZpZXdDaGlsZCgnbW9kYWwnKSBtb2RhbEVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XHJcblxyXG4gIG1vZGFsRWxlbWVudDogSlF1ZXJ5O1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluaXRIYW5kbGVycygpO1xyXG4gICAgdGhpcy5pbml0RWxlbWVudHMoKTtcclxuICAgIHRoaXMuaGFuZGxlUHJvcGVydGllcygpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5pbml0TW9kYWwoKTtcclxuICB9XHJcblxyXG4gIGluaXRFbGVtZW50cygpIHtcclxuICAgIHRoaXMubW9kYWxFbGVtZW50ID0gJCh0aGlzLm1vZGFsRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcclxuICB9XHJcblxyXG4gIGluaXRIYW5kbGVycygpIHtcclxuICAgIHRoaXMuaGFuZGxlcnMgPSB7XHJcbiAgICAgICBvcHRpb25zOiAoKSA9PiB0aGlzLmhhbmRsZU9wdGlvbnMoKSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBpbml0TW9kYWwoKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QodGhpcy5tb2RhbEVsZW1lbnQsICdtb2RhbCcsIFt0aGlzLm9wdGlvbnNdKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVByb3BlcnRpZXMoKSB7XHJcbiAgICBzdXBlci5leGVjdXRlUHJvcEhhbmRsZXJzKCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVPcHRpb25zKCkge1xyXG4gICAgLy8gZXh0ZW5kIGNvbXBsZXRlIGZ1bmN0aW9uIHRvIGVtaXQgY2xvc2UgZXZlbnQgb24gY2FsbGJhY2sgcmV0dXJuXHJcbiAgICBjb25zdCBvcmlnaW5hbENvbXBsZXRlRm4gPSB0aGlzLm9wdGlvbnMgJiYgdGhpcy5vcHRpb25zLmNvbXBsZXRlIHx8ICgoKSA9PiB7fSk7XHJcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLm9wdGlvbnMsIHtcclxuICAgICAgY29tcGxldGU6ICgpID0+IHtcclxuICAgICAgICBvcmlnaW5hbENvbXBsZXRlRm4oKTtcclxuICAgICAgICB0aGlzLmNsb3NlLmVtaXQoKTtcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb3Blbk1vZGFsKCkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMubW9kYWxFbGVtZW50LCAnbW9kYWwnLCBbJ29wZW4nXSk7XHJcbiAgfVxyXG5cclxuICBjbG9zZU1vZGFsKCkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMubW9kYWxFbGVtZW50LCAnbW9kYWwnLCBbJ2Nsb3NlJ10pO1xyXG4gIH1cclxufVxyXG5cclxuLy8gRGVjbGFyZSB0aGUgdGFncyB0byBhdm9pZCBlcnJvcjogJzxtei1tb2RhbC14PicgaXMgbm90IGEga25vd24gZWxlbWVudFxyXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xMTI1MVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTogZGlyZWN0aXZlLXNlbGVjdG9yXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ216LW1vZGFsLWhlYWRlcicgfSkgZXhwb3J0IGNsYXNzIE16TW9kYWxIZWFkZXJEaXJlY3RpdmUgeyB9XHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ216LW1vZGFsLWNvbnRlbnQnIH0pIGV4cG9ydCBjbGFzcyBNek1vZGFsQ29udGVudERpcmVjdGl2ZSB7IH1cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnbXotbW9kYWwtZm9vdGVyJyB9KSBleHBvcnQgY2xhc3MgTXpNb2RhbEZvb3RlckRpcmVjdGl2ZSB7IH1cclxuIl19