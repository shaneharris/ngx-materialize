/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector, } from '@angular/core';
var MzInjectionService = /** @class */ (function () {
    function MzInjectionService(applicationRef, componentFactoryResolver, injector) {
        this.applicationRef = applicationRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.injector = injector;
    }
    /**
     * Appends a component to an adjacent location.
     */
    /**
     * Appends a component to an adjacent location.
     * @template T
     * @param {?} componentClass
     * @param {?=} options
     * @param {?=} location
     * @return {?}
     */
    MzInjectionService.prototype.appendComponent = /**
     * Appends a component to an adjacent location.
     * @template T
     * @param {?} componentClass
     * @param {?=} options
     * @param {?=} location
     * @return {?}
     */
    function (componentClass, options, location) {
        var _this = this;
        if (options === void 0) { options = {}; }
        if (location === void 0) { location = this.getContainerElement(); }
        // instantiate component to load
        var /** @type {?} */ componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentClass);
        var /** @type {?} */ componentRef = componentFactory.create(this.injector);
        // project the options passed to the component instance
        this.projectComponentInputs(componentRef, options);
        // attach view for dirty checking
        this.applicationRef.attachView(componentRef.hostView);
        // detach view when component is destroyed
        componentRef.onDestroy(function () {
            _this.applicationRef.detachView(componentRef.hostView);
        });
        // append component to location in the DOM where we want it to be rendered
        var /** @type {?} */ componentRootNode = this.getComponentRootNode(componentRef);
        location.appendChild(componentRootNode);
        return componentRef;
    };
    /**
     * Overrides the default container element.
     */
    /**
     * Overrides the default container element.
     * @param {?} container
     * @return {?}
     */
    MzInjectionService.prototype.setRootViewContainer = /**
     * Overrides the default container element.
     * @param {?} container
     * @return {?}
     */
    function (container) {
        this.container = container;
    };
    /**
     * Gets the html element for a component ref.
     * @param {?} componentRef
     * @return {?}
     */
    MzInjectionService.prototype.getComponentRootNode = /**
     * Gets the html element for a component ref.
     * @param {?} componentRef
     * @return {?}
     */
    function (componentRef) {
        return /** @type {?} */ ((/** @type {?} */ (componentRef.hostView)).rootNodes[0]);
    };
    /**
     * Gets the container element.
     * @return {?}
     */
    MzInjectionService.prototype.getContainerElement = /**
     * Gets the container element.
     * @return {?}
     */
    function () {
        return this.container || document.body;
    };
    /**
     * Projects the inputs onto the component.
     * @template T
     * @param {?} component
     * @param {?} options
     * @return {?}
     */
    MzInjectionService.prototype.projectComponentInputs = /**
     * Projects the inputs onto the component.
     * @template T
     * @param {?} component
     * @param {?} options
     * @return {?}
     */
    function (component, options) {
        if (options) {
            var /** @type {?} */ props = Object.getOwnPropertyNames(options);
            try {
                for (var props_1 = tslib_1.__values(props), props_1_1 = props_1.next(); !props_1_1.done; props_1_1 = props_1.next()) {
                    var prop = props_1_1.value;
                    component.instance[prop] = options[prop];
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (props_1_1 && !props_1_1.done && (_a = props_1.return)) _a.call(props_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return component;
        var e_1, _a;
    };
    MzInjectionService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    MzInjectionService.ctorParameters = function () { return [
        { type: ApplicationRef, },
        { type: ComponentFactoryResolver, },
        { type: Injector, },
    ]; };
    return MzInjectionService;
}());
export { MzInjectionService };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5qZWN0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvIiwic291cmNlcyI6WyJzcmMvc2hhcmVkL2luamVjdGlvbi9pbmplY3Rpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxjQUFjLEVBQ2Qsd0JBQXdCLEVBR3hCLFVBQVUsRUFDVixRQUFRLEdBRVQsTUFBTSxlQUFlLENBQUM7O0lBTXJCLDRCQUNVLGdCQUNBLDBCQUNBO1FBRkEsbUJBQWMsR0FBZCxjQUFjO1FBQ2QsNkJBQXdCLEdBQXhCLHdCQUF3QjtRQUN4QixhQUFRLEdBQVIsUUFBUTtLQUNqQjtJQUVEOztPQUVHOzs7Ozs7Ozs7SUFDSCw0Q0FBZTs7Ozs7Ozs7SUFBZixVQUNFLGNBQXVCLEVBQ3ZCLE9BQWlCLEVBQ2pCLFFBQThDO1FBSGhELGlCQXlCQztRQXZCQyx3QkFBQSxFQUFBLFlBQWlCO1FBQ2pCLHlCQUFBLEVBQUEsV0FBb0IsSUFBSSxDQUFDLG1CQUFtQixFQUFFOztRQUc5QyxxQkFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsdUJBQXVCLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDL0YscUJBQU0sWUFBWSxHQUFHLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7O1FBRzVELElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7O1FBR25ELElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQzs7UUFHdEQsWUFBWSxDQUFDLFNBQVMsQ0FBQztZQUNyQixLQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDdkQsQ0FBQyxDQUFDOztRQUdILHFCQUFNLGlCQUFpQixHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNsRSxRQUFRLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFFeEMsTUFBTSxDQUFDLFlBQVksQ0FBQztLQUNyQjtJQUVEOztPQUVHOzs7Ozs7SUFDSCxpREFBb0I7Ozs7O0lBQXBCLFVBQXFCLFNBQWtCO1FBQ3JDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0tBQzVCOzs7Ozs7SUFLTyxpREFBb0I7Ozs7O2NBQUMsWUFBK0I7UUFDMUQsTUFBTSxtQkFBQyxtQkFBQyxZQUFZLENBQUMsUUFBZ0MsRUFBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQVksRUFBQzs7Ozs7O0lBTXpFLGdEQUFtQjs7Ozs7UUFDekIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQzs7Ozs7Ozs7O0lBTWpDLG1EQUFzQjs7Ozs7OztjQUFJLFNBQTBCLEVBQUUsT0FBWTtRQUN4RSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ1oscUJBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7Z0JBQ2xELEdBQUcsQ0FBQyxDQUFlLElBQUEsVUFBQSxpQkFBQSxLQUFLLENBQUEsNEJBQUE7b0JBQW5CLElBQU0sSUFBSSxrQkFBQTtvQkFDYixTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDMUM7Ozs7Ozs7OztTQUNGO1FBQ0QsTUFBTSxDQUFDLFNBQVMsQ0FBQzs7OztnQkF2RXBCLFVBQVU7Ozs7Z0JBVFQsY0FBYztnQkFDZCx3QkFBd0I7Z0JBSXhCLFFBQVE7OzZCQU5WOztTQVdhLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQXBwbGljYXRpb25SZWYsXHJcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gIENvbXBvbmVudFJlZixcclxuICBFbWJlZGRlZFZpZXdSZWYsXHJcbiAgSW5qZWN0YWJsZSxcclxuICBJbmplY3RvcixcclxuICBUeXBlLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTXpJbmplY3Rpb25TZXJ2aWNlIHtcclxuICBwcml2YXRlIGNvbnRhaW5lcjogRWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGFwcGxpY2F0aW9uUmVmOiBBcHBsaWNhdGlvblJlZixcclxuICAgIHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQXBwZW5kcyBhIGNvbXBvbmVudCB0byBhbiBhZGphY2VudCBsb2NhdGlvbi5cclxuICAgKi9cclxuICBhcHBlbmRDb21wb25lbnQ8VD4oXHJcbiAgICBjb21wb25lbnRDbGFzczogVHlwZTxUPixcclxuICAgIG9wdGlvbnM6IGFueSA9IHt9LFxyXG4gICAgbG9jYXRpb246IEVsZW1lbnQgPSB0aGlzLmdldENvbnRhaW5lckVsZW1lbnQoKSxcclxuICApOiBDb21wb25lbnRSZWY8VD4ge1xyXG4gICAgLy8gaW5zdGFudGlhdGUgY29tcG9uZW50IHRvIGxvYWRcclxuICAgIGNvbnN0IGNvbXBvbmVudEZhY3RvcnkgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShjb21wb25lbnRDbGFzcyk7XHJcbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSBjb21wb25lbnRGYWN0b3J5LmNyZWF0ZSh0aGlzLmluamVjdG9yKTtcclxuXHJcbiAgICAvLyBwcm9qZWN0IHRoZSBvcHRpb25zIHBhc3NlZCB0byB0aGUgY29tcG9uZW50IGluc3RhbmNlXHJcbiAgICB0aGlzLnByb2plY3RDb21wb25lbnRJbnB1dHMoY29tcG9uZW50UmVmLCBvcHRpb25zKTtcclxuXHJcbiAgICAvLyBhdHRhY2ggdmlldyBmb3IgZGlydHkgY2hlY2tpbmdcclxuICAgIHRoaXMuYXBwbGljYXRpb25SZWYuYXR0YWNoVmlldyhjb21wb25lbnRSZWYuaG9zdFZpZXcpO1xyXG5cclxuICAgIC8vIGRldGFjaCB2aWV3IHdoZW4gY29tcG9uZW50IGlzIGRlc3Ryb3llZFxyXG4gICAgY29tcG9uZW50UmVmLm9uRGVzdHJveSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuYXBwbGljYXRpb25SZWYuZGV0YWNoVmlldyhjb21wb25lbnRSZWYuaG9zdFZpZXcpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gYXBwZW5kIGNvbXBvbmVudCB0byBsb2NhdGlvbiBpbiB0aGUgRE9NIHdoZXJlIHdlIHdhbnQgaXQgdG8gYmUgcmVuZGVyZWRcclxuICAgIGNvbnN0IGNvbXBvbmVudFJvb3ROb2RlID0gdGhpcy5nZXRDb21wb25lbnRSb290Tm9kZShjb21wb25lbnRSZWYpO1xyXG4gICAgbG9jYXRpb24uYXBwZW5kQ2hpbGQoY29tcG9uZW50Um9vdE5vZGUpO1xyXG5cclxuICAgIHJldHVybiBjb21wb25lbnRSZWY7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBPdmVycmlkZXMgdGhlIGRlZmF1bHQgY29udGFpbmVyIGVsZW1lbnQuXHJcbiAgICovXHJcbiAgc2V0Um9vdFZpZXdDb250YWluZXIoY29udGFpbmVyOiBFbGVtZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldHMgdGhlIGh0bWwgZWxlbWVudCBmb3IgYSBjb21wb25lbnQgcmVmLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgZ2V0Q29tcG9uZW50Um9vdE5vZGUoY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8YW55Pik6IEVsZW1lbnQge1xyXG4gICAgcmV0dXJuIChjb21wb25lbnRSZWYuaG9zdFZpZXcgYXMgRW1iZWRkZWRWaWV3UmVmPGFueT4pLnJvb3ROb2Rlc1swXSBhcyBFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0cyB0aGUgY29udGFpbmVyIGVsZW1lbnQuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBnZXRDb250YWluZXJFbGVtZW50KCk6IEVsZW1lbnQge1xyXG4gICAgcmV0dXJuIHRoaXMuY29udGFpbmVyIHx8IGRvY3VtZW50LmJvZHk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQcm9qZWN0cyB0aGUgaW5wdXRzIG9udG8gdGhlIGNvbXBvbmVudC5cclxuICAgKi9cclxuICBwcml2YXRlIHByb2plY3RDb21wb25lbnRJbnB1dHM8VD4oY29tcG9uZW50OiBDb21wb25lbnRSZWY8VD4sIG9wdGlvbnM6IGFueSk6IENvbXBvbmVudFJlZjxUPiB7XHJcbiAgICBpZiAob3B0aW9ucykge1xyXG4gICAgICBjb25zdCBwcm9wcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9wdGlvbnMpO1xyXG4gICAgICBmb3IgKGNvbnN0IHByb3Agb2YgcHJvcHMpIHtcclxuICAgICAgICBjb21wb25lbnQuaW5zdGFuY2VbcHJvcF0gPSBvcHRpb25zW3Byb3BdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29tcG9uZW50O1xyXG4gIH1cclxufVxyXG4iXX0=