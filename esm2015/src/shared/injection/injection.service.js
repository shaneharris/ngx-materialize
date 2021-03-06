/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector, } from '@angular/core';
export class MzInjectionService {
    /**
     * @param {?} applicationRef
     * @param {?} componentFactoryResolver
     * @param {?} injector
     */
    constructor(applicationRef, componentFactoryResolver, injector) {
        this.applicationRef = applicationRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.injector = injector;
    }
    /**
     * Appends a component to an adjacent location.
     * @template T
     * @param {?} componentClass
     * @param {?=} options
     * @param {?=} location
     * @return {?}
     */
    appendComponent(componentClass, options = {}, location = this.getContainerElement()) {
        // instantiate component to load
        const /** @type {?} */ componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentClass);
        const /** @type {?} */ componentRef = componentFactory.create(this.injector);
        // project the options passed to the component instance
        this.projectComponentInputs(componentRef, options);
        // attach view for dirty checking
        this.applicationRef.attachView(componentRef.hostView);
        // detach view when component is destroyed
        componentRef.onDestroy(() => {
            this.applicationRef.detachView(componentRef.hostView);
        });
        // append component to location in the DOM where we want it to be rendered
        const /** @type {?} */ componentRootNode = this.getComponentRootNode(componentRef);
        location.appendChild(componentRootNode);
        return componentRef;
    }
    /**
     * Overrides the default container element.
     * @param {?} container
     * @return {?}
     */
    setRootViewContainer(container) {
        this.container = container;
    }
    /**
     * Gets the html element for a component ref.
     * @param {?} componentRef
     * @return {?}
     */
    getComponentRootNode(componentRef) {
        return /** @type {?} */ ((/** @type {?} */ (componentRef.hostView)).rootNodes[0]);
    }
    /**
     * Gets the container element.
     * @return {?}
     */
    getContainerElement() {
        return this.container || document.body;
    }
    /**
     * Projects the inputs onto the component.
     * @template T
     * @param {?} component
     * @param {?} options
     * @return {?}
     */
    projectComponentInputs(component, options) {
        if (options) {
            const /** @type {?} */ props = Object.getOwnPropertyNames(options);
            for (const /** @type {?} */ prop of props) {
                component.instance[prop] = options[prop];
            }
        }
        return component;
    }
}
MzInjectionService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
MzInjectionService.ctorParameters = () => [
    { type: ApplicationRef, },
    { type: ComponentFactoryResolver, },
    { type: Injector, },
];
function MzInjectionService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MzInjectionService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MzInjectionService.ctorParameters;
    /** @type {?} */
    MzInjectionService.prototype.container;
    /** @type {?} */
    MzInjectionService.prototype.applicationRef;
    /** @type {?} */
    MzInjectionService.prototype.componentFactoryResolver;
    /** @type {?} */
    MzInjectionService.prototype.injector;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5qZWN0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvIiwic291cmNlcyI6WyJzcmMvc2hhcmVkL2luamVjdGlvbi9pbmplY3Rpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLGNBQWMsRUFDZCx3QkFBd0IsRUFHeEIsVUFBVSxFQUNWLFFBQVEsR0FFVCxNQUFNLGVBQWUsQ0FBQztBQUd2QixNQUFNOzs7Ozs7SUFHSixZQUNVLGdCQUNBLDBCQUNBO1FBRkEsbUJBQWMsR0FBZCxjQUFjO1FBQ2QsNkJBQXdCLEdBQXhCLHdCQUF3QjtRQUN4QixhQUFRLEdBQVIsUUFBUTtLQUNqQjs7Ozs7Ozs7O0lBS0QsZUFBZSxDQUNiLGNBQXVCLEVBQ3ZCLFVBQWUsRUFBRSxFQUNqQixXQUFvQixJQUFJLENBQUMsbUJBQW1CLEVBQUU7O1FBRzlDLHVCQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyx1QkFBdUIsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUMvRix1QkFBTSxZQUFZLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzs7UUFHNUQsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQzs7UUFHbkQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDOztRQUd0RCxZQUFZLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUMxQixJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDdkQsQ0FBQyxDQUFDOztRQUdILHVCQUFNLGlCQUFpQixHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNsRSxRQUFRLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFFeEMsTUFBTSxDQUFDLFlBQVksQ0FBQztLQUNyQjs7Ozs7O0lBS0Qsb0JBQW9CLENBQUMsU0FBa0I7UUFDckMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7S0FDNUI7Ozs7OztJQUtPLG9CQUFvQixDQUFDLFlBQStCO1FBQzFELE1BQU0sbUJBQUMsbUJBQUMsWUFBWSxDQUFDLFFBQWdDLEVBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFZLEVBQUM7Ozs7OztJQU16RSxtQkFBbUI7UUFDekIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQzs7Ozs7Ozs7O0lBTWpDLHNCQUFzQixDQUFJLFNBQTBCLEVBQUUsT0FBWTtRQUN4RSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ1osdUJBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNsRCxHQUFHLENBQUMsQ0FBQyx1QkFBTSxJQUFJLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDekIsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDMUM7U0FDRjtRQUNELE1BQU0sQ0FBQyxTQUFTLENBQUM7Ozs7WUF2RXBCLFVBQVU7Ozs7WUFUVCxjQUFjO1lBQ2Qsd0JBQXdCO1lBSXhCLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFwcGxpY2F0aW9uUmVmLFxyXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICBDb21wb25lbnRSZWYsXHJcbiAgRW1iZWRkZWRWaWV3UmVmLFxyXG4gIEluamVjdGFibGUsXHJcbiAgSW5qZWN0b3IsXHJcbiAgVHlwZSxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE16SW5qZWN0aW9uU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBjb250YWluZXI6IEVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBhcHBsaWNhdGlvblJlZjogQXBwbGljYXRpb25SZWYsXHJcbiAgICBwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFwcGVuZHMgYSBjb21wb25lbnQgdG8gYW4gYWRqYWNlbnQgbG9jYXRpb24uXHJcbiAgICovXHJcbiAgYXBwZW5kQ29tcG9uZW50PFQ+KFxyXG4gICAgY29tcG9uZW50Q2xhc3M6IFR5cGU8VD4sXHJcbiAgICBvcHRpb25zOiBhbnkgPSB7fSxcclxuICAgIGxvY2F0aW9uOiBFbGVtZW50ID0gdGhpcy5nZXRDb250YWluZXJFbGVtZW50KCksXHJcbiAgKTogQ29tcG9uZW50UmVmPFQ+IHtcclxuICAgIC8vIGluc3RhbnRpYXRlIGNvbXBvbmVudCB0byBsb2FkXHJcbiAgICBjb25zdCBjb21wb25lbnRGYWN0b3J5ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoY29tcG9uZW50Q2xhc3MpO1xyXG4gICAgY29uc3QgY29tcG9uZW50UmVmID0gY29tcG9uZW50RmFjdG9yeS5jcmVhdGUodGhpcy5pbmplY3Rvcik7XHJcblxyXG4gICAgLy8gcHJvamVjdCB0aGUgb3B0aW9ucyBwYXNzZWQgdG8gdGhlIGNvbXBvbmVudCBpbnN0YW5jZVxyXG4gICAgdGhpcy5wcm9qZWN0Q29tcG9uZW50SW5wdXRzKGNvbXBvbmVudFJlZiwgb3B0aW9ucyk7XHJcblxyXG4gICAgLy8gYXR0YWNoIHZpZXcgZm9yIGRpcnR5IGNoZWNraW5nXHJcbiAgICB0aGlzLmFwcGxpY2F0aW9uUmVmLmF0dGFjaFZpZXcoY29tcG9uZW50UmVmLmhvc3RWaWV3KTtcclxuXHJcbiAgICAvLyBkZXRhY2ggdmlldyB3aGVuIGNvbXBvbmVudCBpcyBkZXN0cm95ZWRcclxuICAgIGNvbXBvbmVudFJlZi5vbkRlc3Ryb3koKCkgPT4ge1xyXG4gICAgICB0aGlzLmFwcGxpY2F0aW9uUmVmLmRldGFjaFZpZXcoY29tcG9uZW50UmVmLmhvc3RWaWV3KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGFwcGVuZCBjb21wb25lbnQgdG8gbG9jYXRpb24gaW4gdGhlIERPTSB3aGVyZSB3ZSB3YW50IGl0IHRvIGJlIHJlbmRlcmVkXHJcbiAgICBjb25zdCBjb21wb25lbnRSb290Tm9kZSA9IHRoaXMuZ2V0Q29tcG9uZW50Um9vdE5vZGUoY29tcG9uZW50UmVmKTtcclxuICAgIGxvY2F0aW9uLmFwcGVuZENoaWxkKGNvbXBvbmVudFJvb3ROb2RlKTtcclxuXHJcbiAgICByZXR1cm4gY29tcG9uZW50UmVmO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogT3ZlcnJpZGVzIHRoZSBkZWZhdWx0IGNvbnRhaW5lciBlbGVtZW50LlxyXG4gICAqL1xyXG4gIHNldFJvb3RWaWV3Q29udGFpbmVyKGNvbnRhaW5lcjogRWxlbWVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXRzIHRoZSBodG1sIGVsZW1lbnQgZm9yIGEgY29tcG9uZW50IHJlZi5cclxuICAgKi9cclxuICBwcml2YXRlIGdldENvbXBvbmVudFJvb3ROb2RlKGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPGFueT4pOiBFbGVtZW50IHtcclxuICAgIHJldHVybiAoY29tcG9uZW50UmVmLmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjxhbnk+KS5yb290Tm9kZXNbMF0gYXMgRWxlbWVudDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldHMgdGhlIGNvbnRhaW5lciBlbGVtZW50LlxyXG4gICAqL1xyXG4gIHByaXZhdGUgZ2V0Q29udGFpbmVyRWxlbWVudCgpOiBFbGVtZW50IHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRhaW5lciB8fCBkb2N1bWVudC5ib2R5O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUHJvamVjdHMgdGhlIGlucHV0cyBvbnRvIHRoZSBjb21wb25lbnQuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBwcm9qZWN0Q29tcG9uZW50SW5wdXRzPFQ+KGNvbXBvbmVudDogQ29tcG9uZW50UmVmPFQ+LCBvcHRpb25zOiBhbnkpOiBDb21wb25lbnRSZWY8VD4ge1xyXG4gICAgaWYgKG9wdGlvbnMpIHtcclxuICAgICAgY29uc3QgcHJvcHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvcHRpb25zKTtcclxuICAgICAgZm9yIChjb25zdCBwcm9wIG9mIHByb3BzKSB7XHJcbiAgICAgICAgY29tcG9uZW50Lmluc3RhbmNlW3Byb3BdID0gb3B0aW9uc1twcm9wXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvbXBvbmVudDtcclxuICB9XHJcbn1cclxuIl19