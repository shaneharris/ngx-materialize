import { ApplicationRef, ComponentFactoryResolver, ComponentRef, Injector, Type } from '@angular/core';
export declare class MzInjectionService {
    private applicationRef;
    private componentFactoryResolver;
    private injector;
    private container;
    constructor(applicationRef: ApplicationRef, componentFactoryResolver: ComponentFactoryResolver, injector: Injector);
    /**
     * Appends a component to an adjacent location.
     */
    appendComponent<T>(componentClass: Type<T>, options?: any, location?: Element): ComponentRef<T>;
    /**
     * Overrides the default container element.
     */
    setRootViewContainer(container: Element): void;
    /**
     * Gets the html element for a component ref.
     */
    private getComponentRootNode(componentRef);
    /**
     * Gets the container element.
     */
    private getContainerElement();
    /**
     * Projects the inputs onto the component.
     */
    private projectComponentInputs<T>(component, options);
}
