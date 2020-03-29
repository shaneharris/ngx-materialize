import { Component, Input, NgModule, ApplicationRef, ComponentFactoryResolver, Injectable, Injector, ElementRef, Inject, Directive, Renderer, HostBinding, ChangeDetectorRef, ViewChild, EventEmitter, forwardRef, NgZone, Output, ContentChildren, Renderer2, Optional, PLATFORM_ID, HostListener, ViewContainerRef, ViewEncapsulation, ContentChild } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { NG_VALUE_ACCESSOR, NgControl, FormsModule } from '@angular/forms';
import { interval, fromEvent, Observable } from 'rxjs';
import { first, skipWhile, map, publishReplay, refCount, startWith } from 'rxjs/operators';
import { animate, style, transition, trigger } from '@angular/animations';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzBadgeComponent {
}
MzBadgeComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-badge',
                template: `<span #badge
  class="badge {{ badgeClass }}"
  [class.new]="new || !!badgeClass"
  [attr.data-badge-caption]="caption">
  {{ value }}
</span>
`,
                styles: [``],
            },] },
];
/** @nocollapse */
MzBadgeComponent.propDecorators = {
    "badgeClass": [{ type: Input },],
    "caption": [{ type: Input },],
    "new": [{ type: Input },],
    "value": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzBadgeModule {
}
MzBadgeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [MzBadgeComponent],
                exports: [MzBadgeComponent],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @abstract
 */
class Handlers {
}
class HandlePropChanges {
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.handlers) {
            this.executePropHandlers(changes);
        }
    }
    /**
     * @param {?=} props
     * @return {?}
     */
    executePropHandlers(props = this.handlers) {
        Object.keys(props).forEach(prop => {
            if (this.handlers[prop]) {
                const /** @type {?} */ previousValue = (/** @type {?} */ (props[prop])).previousValue;
                this.handlers[prop](previousValue);
            }
        });
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzInjectionService {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzInjectionModule {
}
MzInjectionModule.decorators = [
    { type: NgModule, args: [{
                providers: [MzInjectionService],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @abstract
 */
class MzRemoveComponentHost {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.childrenElement = [];
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        const /** @type {?} */ hostElement = this.elementRef.nativeElement;
        this.parentElement = hostElement.parentElement;
        // move child out of the host element
        while (hostElement.firstChild) {
            this.childrenElement.push(this.parentElement.insertBefore(hostElement.firstChild, hostElement));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // remove moved out element
        this.childrenElement.forEach(childElement => this.parentElement.removeChild(childElement));
    }
}
/** @nocollapse */
MzRemoveComponentHost.ctorParameters = () => [
    { type: ElementRef, decorators: [{ type: Inject, args: [ElementRef,] },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzButtonDirective extends HandlePropChanges {
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
        this.initMaterialize();
        super.executePropHandlers();
    }
    /**
     * @return {?}
     */
    initHandlers() {
        this.handlers = {
            disabled: () => this.handleDisabled(),
            flat: () => this.handleFlat(),
            float: () => this.handleFloat(),
            large: () => this.handleLarge(),
            noWaves: () => this.handleNoWaves(),
        };
    }
    /**
     * @return {?}
     */
    initMaterialize() {
        this.renderer.setElementClass(this.elementRef.nativeElement, 'btn', true);
    }
    /**
     * @return {?}
     */
    handleDisabled() {
        this.renderer.setElementClass(this.elementRef.nativeElement, 'disabled', this.disabled);
    }
    /**
     * @return {?}
     */
    handleFlat() {
        this.renderer.setElementClass(this.elementRef.nativeElement, 'btn', !this.flat);
        this.renderer.setElementClass(this.elementRef.nativeElement, 'btn-flat', this.flat);
    }
    /**
     * @return {?}
     */
    handleFloat() {
        this.renderer.setElementClass(this.elementRef.nativeElement, 'btn-floating', this.float);
    }
    /**
     * @return {?}
     */
    handleLarge() {
        this.renderer.setElementClass(this.elementRef.nativeElement, 'btn-large', this.large);
    }
    /**
     * @return {?}
     */
    handleNoWaves() {
        this.renderer.setElementClass(this.elementRef.nativeElement, 'waves-effect', !this.noWaves);
        if (!this.flat) {
            this.renderer.setElementClass(this.elementRef.nativeElement, 'waves-light', !this.noWaves);
        }
    }
}
MzButtonDirective.decorators = [
    { type: Directive, args: [{
                selector: `
    a[mz-button],
    a[mzButton],
    button[mz-button],
    button[mzButton]`,
            },] },
];
/** @nocollapse */
MzButtonDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer, },
];
MzButtonDirective.propDecorators = {
    "disabled": [{ type: Input },],
    "flat": [{ type: Input },],
    "float": [{ type: Input },],
    "large": [{ type: Input },],
    "noWaves": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzButtonModule {
}
MzButtonModule.decorators = [
    { type: NgModule, args: [{
                declarations: [MzButtonDirective],
                exports: [MzButtonDirective],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzHalfwayFabDirective {
}
MzHalfwayFabDirective.decorators = [
    { type: Directive, args: [{
                selector: `
    a[mz-halfway-fab],
    a[mzHalfwayFab],
    button[mz-halfway-fab],
    button[mzHalfwayFab]`,
            },] },
];
/** @nocollapse */
MzHalfwayFabDirective.propDecorators = {
    "true": [{ type: HostBinding, args: ['class.halfway-fab',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzHalfwayFabModule {
}
MzHalfwayFabModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    MzHalfwayFabDirective,
                ],
                exports: [
                    MzHalfwayFabDirective,
                ],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzCardComponent {
    /**
     * @param {?} changeDetectorRef
     */
    constructor(changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
        this.hasCardAction = true;
        this.hasCardImage = true;
        this.hasCardImageTitle = true;
        this.hasCardTitle = true;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.hasCardTitle = this.hasTitleTagAndNotEmpty();
        this.hasCardAction = this.hasActionTagAndNotEmpty();
        this.hasCardImage = this.hasImageTagAndNotEmpty();
        this.hasCardImageTitle = this.hasImageTitleTagAndNotEmpty();
        this.changeDetectorRef.detectChanges();
    }
    /**
     * @return {?}
     */
    hasActionTagAndNotEmpty() {
        const /** @type {?} */ cardActionElement = this.cardAction.nativeElement.querySelector('mz-card-action');
        return this.isElementDisplayed(cardActionElement);
    }
    /**
     * @return {?}
     */
    hasImageTagAndNotEmpty() {
        const /** @type {?} */ cardImagelement = this.cardImage.nativeElement.querySelector('mz-card-image');
        return this.isElementDisplayed(cardImagelement);
    }
    /**
     * @return {?}
     */
    hasImageTitleTagAndNotEmpty() {
        const /** @type {?} */ cardImageTitleElement = this.cardImage.nativeElement.querySelector('mz-card-image-title');
        return this.isElementDisplayed(cardImageTitleElement);
    }
    /**
     * @return {?}
     */
    hasTitleTagAndNotEmpty() {
        const /** @type {?} */ cardTitleElement = this.cardTitle ? this.cardTitle.nativeElement.querySelector('mz-card-title') : null;
        return this.isElementDisplayed(cardTitleElement);
    }
    /**
     * @param {?} element
     * @return {?}
     */
    isElementDisplayed(element) {
        return element && element.innerHTML.trim() !== '';
    }
}
MzCardComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-card',
                template: `<div #cardImage class="card-image" *ngIf="hasCardImage">
  <ng-content select="mz-card-image"></ng-content>
  <div class="card-title" *ngIf="hasCardImageTitle">
    <ng-content select="mz-card-image-title"></ng-content>
  </div>
</div>

<div [class.card-stacked]="horizontal">
  <div class="card-content">
    <div #cardTitle class="card-title" *ngIf="hasCardTitle">
      <ng-content select="mz-card-title"></ng-content>
    </div>

    <ng-content select="mz-card-content"></ng-content>
  </div>

  <div #cardAction class="card-action" *ngIf="hasCardAction">
    <ng-content select="mz-card-action"></ng-content>
  </div>
</div>`,
                styles: [`:host{display:block}`],
            },] },
];
/** @nocollapse */
MzCardComponent.ctorParameters = () => [
    { type: ChangeDetectorRef, },
];
MzCardComponent.propDecorators = {
    "true": [{ type: HostBinding, args: ['class.card',] },],
    "horizontal": [{ type: HostBinding, args: ['class.horizontal',] }, { type: Input },],
    "hoverable": [{ type: HostBinding, args: ['class.hoverable',] }, { type: Input },],
    "cardAction": [{ type: ViewChild, args: ['cardAction',] },],
    "cardImage": [{ type: ViewChild, args: ['cardImage',] },],
    "cardTitle": [{ type: ViewChild, args: ['cardTitle',] },],
};
class MzCardImageDirective {
}
MzCardImageDirective.decorators = [
    { type: Directive, args: [{ selector: 'mz-card-image' },] },
];
class MzCardImageTitleDirective {
}
MzCardImageTitleDirective.decorators = [
    { type: Directive, args: [{ selector: 'mz-card-image-title' },] },
];
class MzCardTitleDirective {
}
MzCardTitleDirective.decorators = [
    { type: Directive, args: [{ selector: 'mz-card-title' },] },
];
class MzCardContentDirective {
}
MzCardContentDirective.decorators = [
    { type: Directive, args: [{ selector: 'mz-card-content' },] },
];
class MzCardActionDirective {
}
MzCardActionDirective.decorators = [
    { type: Directive, args: [{ selector: 'mz-card-action' },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzCardModule {
}
MzCardModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    MzHalfwayFabModule,
                ],
                declarations: [
                    MzCardActionDirective,
                    MzCardComponent,
                    MzCardContentDirective,
                    MzCardImageDirective,
                    MzCardImageTitleDirective,
                    MzCardTitleDirective,
                ],
                exports: [
                    MzCardActionDirective,
                    MzCardComponent,
                    MzCardContentDirective,
                    MzCardImageDirective,
                    MzCardImageTitleDirective,
                    MzCardTitleDirective,
                ],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzCheckboxContainerComponent {
}
MzCheckboxContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-checkbox-container',
                template: `<p class="checkbox-field">
  <ng-content></ng-content>
</p>`,
                styles: [``],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzCheckboxDirective extends HandlePropChanges {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzCheckboxModule {
}
MzCheckboxModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    MzCheckboxDirective,
                    MzCheckboxContainerComponent,
                ],
                exports: [
                    MzCheckboxDirective,
                    MzCheckboxContainerComponent,
                ],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzChipInputComponent {
    /**
     * @param {?} elementRef
     * @param {?} zone
     */
    constructor(elementRef, zone) {
        this.elementRef = elementRef;
        this.zone = zone;
        this.add = new EventEmitter();
        this.delete = new EventEmitter();
        this.select = new EventEmitter();
        this.onChangeCallback = (data) => { };
    }
    /**
     * @return {?}
     */
    get value() {
        return /** @type {?} */ (this.chipInputElement.material_chip('data'));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initElements();
        this.initMaterializeChip();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.chipInputElement.off('chip.add');
        this.chipInputElement.off('chip.delete');
        this.chipInputElement.off('chip.select');
    }
    /**
     * @return {?}
     */
    initElements() {
        this.chipInputElement = $(this.elementRef.nativeElement);
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    initMaterializeChip(value) {
        // fix issue autocomplete is not a function
        // https://github.com/Dogfalo/materialize/issues/4401
        this.zone.runOutsideAngular(() => {
            setTimeout(() => {
                this.chipInputElement.material_chip({
                    autocompleteOptions: this.autocompleteOptions,
                    data: value || this.value,
                    placeholder: this.placeholder,
                    secondaryPlaceholder: this.secondaryPlaceholder,
                });
            });
        });
        this.chipInputElement.on('chip.add', (event, chip) => {
            this.onChangeCallback(this.value);
            this.add.emit(chip);
        });
        this.chipInputElement.on('chip.delete', (event, chip) => {
            this.onChangeCallback(this.value);
            this.delete.emit(chip);
        });
        this.chipInputElement.on('chip.select', (event, chip) => {
            this.select.emit(chip);
        });
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) { }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) { }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (value && value !== this.value) {
            this.initMaterializeChip(value);
        }
    }
}
MzChipInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-chip-input',
                template: ``,
                styles: [`:host{display:block}`],
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => MzChipInputComponent),
                        multi: true,
                    },
                ],
            },] },
];
/** @nocollapse */
MzChipInputComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: NgZone, },
];
MzChipInputComponent.propDecorators = {
    "autocompleteOptions": [{ type: Input },],
    "placeholder": [{ type: Input },],
    "secondaryPlaceholder": [{ type: Input },],
    "add": [{ type: Output },],
    "delete": [{ type: Output },],
    "select": [{ type: Output },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzChipComponent {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.chipClass = true;
        this.close = false;
        this.delete = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get chipElement() {
        return /** @type {?} */ (this.elementRef.nativeElement);
    }
    /**
     * @return {?}
     */
    onDelete() {
        let /** @type {?} */ value = '';
        for (let /** @type {?} */ i = 0; i < this.chipElement.childNodes.length; i++) {
            if (this.chipElement.childNodes.item(i).nodeType === Node.TEXT_NODE) {
                value += this.chipElement.childNodes.item(i).nodeValue;
            }
        }
        this.delete.emit(value.trim());
    }
}
MzChipComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-chip',
                template: `<ng-content></ng-content>
<i class="close material-icons" (click)="onDelete()" *ngIf="close">close</i>`,
                styles: [``],
            },] },
];
/** @nocollapse */
MzChipComponent.ctorParameters = () => [
    { type: ElementRef, },
];
MzChipComponent.propDecorators = {
    "chipClass": [{ type: HostBinding, args: ['class.chip',] },],
    "close": [{ type: Input },],
    "delete": [{ type: Output },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzChipModule {
}
MzChipModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                ],
                declarations: [
                    MzChipComponent,
                    MzChipInputComponent,
                ],
                exports: [
                    MzChipComponent,
                    MzChipInputComponent,
                ],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzCollapsibleItemComponent extends MzRemoveComponentHost {
}
MzCollapsibleItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-collapsible-item',
                template: `<li>
  <div class="collapsible-header"
    [class.active]="active"
  >
    <ng-content select="mz-collapsible-item-header"></ng-content>
  </div>
  <div class="collapsible-body">
    <ng-content select="mz-collapsible-item-body"></ng-content>
  </div>
</li>`,
                styles: [``],
            },] },
];
/** @nocollapse */
MzCollapsibleItemComponent.propDecorators = {
    "active": [{ type: Input },],
};
class MzCollapsibleItemBodyDirective {
}
MzCollapsibleItemBodyDirective.decorators = [
    { type: Directive, args: [{ selector: 'mz-collapsible-item-body' },] },
];
class MzCollapsibleItemHeaderDirective {
}
MzCollapsibleItemHeaderDirective.decorators = [
    { type: Directive, args: [{ selector: 'mz-collapsible-item-header' },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzCollapsibleComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzCollapsibleModule {
}
MzCollapsibleModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    MzCollapsibleComponent,
                    MzCollapsibleItemBodyDirective,
                    MzCollapsibleItemComponent,
                    MzCollapsibleItemHeaderDirective,
                ],
                exports: [
                    MzCollapsibleComponent,
                    MzCollapsibleItemBodyDirective,
                    MzCollapsibleItemComponent,
                    MzCollapsibleItemHeaderDirective,
                ],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzAvatarDirective {
}
MzAvatarDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mzAvatar], [mz-avatar]',
            },] },
];
/** @nocollapse */
MzAvatarDirective.propDecorators = {
    "true": [{ type: HostBinding, args: ['class.circle',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzCollectionHeaderComponent {
}
MzCollectionHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-collection-header',
                template: `<div class="collection-header">
  <ng-content></ng-content>
</div>`,
                styles: [``],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzCollectionItemComponent {
}
MzCollectionItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-collection-item',
                template: `<ng-content></ng-content>`,
                styles: [`:host{display:block}`],
            },] },
];
/** @nocollapse */
MzCollectionItemComponent.propDecorators = {
    "true": [{ type: HostBinding, args: ['class.collection-item',] },],
    "avatar": [{ type: HostBinding, args: ['class.avatar',] }, { type: Input },],
    "dismissable": [{ type: HostBinding, args: ['class.dismissable',] }, { type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzCollectionLinkDirective {
}
MzCollectionLinkDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mzCollectionLink], [mz-collection-link]',
            },] },
];
/** @nocollapse */
MzCollectionLinkDirective.propDecorators = {
    "active": [{ type: HostBinding, args: ['class.active',] }, { type: Input },],
    "true": [{ type: HostBinding, args: ['class.collection-item',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzCollectionComponent {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initElements();
        this.initCollectionHeader();
    }
    /**
     * @return {?}
     */
    initElements() {
        this.collectionElement = $(this.elementRef.nativeElement).find('.collection');
        this.collectionHeaderElement = $(this.elementRef.nativeElement).find('.collection-header');
    }
    /**
     * @return {?}
     */
    initCollectionHeader() {
        if (this.collectionHeaderElement.length > 0) {
            this.renderer.addClass(this.collectionElement[0], 'with-header');
        }
    }
}
MzCollectionComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-collection',
                template: `<div class="collection">
  <ng-content></ng-content>
</div>`,
                styles: [``],
            },] },
];
/** @nocollapse */
MzCollectionComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzSecondaryContentDirective {
}
MzSecondaryContentDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mzSecondaryContent], [mz-secondary-content]',
            },] },
];
/** @nocollapse */
MzSecondaryContentDirective.propDecorators = {
    "true": [{ type: HostBinding, args: ['class.secondary-content',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzCollectionModule {
}
MzCollectionModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    MzAvatarDirective,
                    MzCollectionComponent,
                    MzCollectionItemComponent,
                    MzCollectionLinkDirective,
                    MzCollectionHeaderComponent,
                    MzSecondaryContentDirective,
                ],
                exports: [
                    MzAvatarDirective,
                    MzCollectionComponent,
                    MzCollectionItemComponent,
                    MzCollectionLinkDirective,
                    MzCollectionHeaderComponent,
                    MzSecondaryContentDirective,
                ],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzDatepickerContainerComponent {
}
MzDatepickerContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-datepicker-container',
                template: `<div
  class="input-field"
  [class.inline]="inline"
>
  <ng-content></ng-content>
</div>`,
                styles: [``],
            },] },
];
/** @nocollapse */
MzDatepickerContainerComponent.propDecorators = {
    "inline": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzDatepickerDirective extends HandlePropChanges {
    /**
     * @param {?} ngControl
     * @param {?} changeDetectorRef
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(ngControl, changeDetectorRef, elementRef, renderer) {
        super();
        this.ngControl = ngControl;
        this.changeDetectorRef = changeDetectorRef;
        this.elementRef = elementRef;
        this.renderer = renderer;
        // materialize uses pickadate.js to create the datepicker
        // complete list of options is available at the following address
        // http://amsul.ca/pickadate.js/date/#options
        this.options = {};
        this.isInitRound = true;
        this.stopChangePropagation = false;
    }
    /**
     * @return {?}
     */
    get format() {
        return this.options.format || this.options.formatSubmit || null;
    }
    /**
     * @return {?}
     */
    get formatSubmit() {
        return this.options.formatSubmit || this.options.format || null;
    }
    /**
     * @return {?}
     */
    get ngControlValue() {
        return this.ngControl.value === '' ? null : this.ngControl.value;
    }
    /**
     * @return {?}
     */
    get picker() {
        return this.inputElement.pickadate('picker');
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initHandlers();
        this.initElements();
        this.initDatepicker();
        this.initInputSubscription();
        this.handleProperties();
        this.isInitRound = false;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.inputValueSubscription) {
            this.inputValueSubscription.unsubscribe();
        }
    }
    /**
     * @return {?}
     */
    initHandlers() {
        this.handlers = {
            label: () => this.handleLabel(),
            options: () => this.handleOptions(),
            placeholder: () => this.handlePlaceholder(),
        };
    }
    /**
     * @return {?}
     */
    initElements() {
        this.inputContainerElement = $(this.elementRef.nativeElement).parent('.input-field');
        this.inputElement = $(this.elementRef.nativeElement);
        this.labelElement = this.createLabelElement();
    }
    /**
     * @return {?}
     */
    initDatepicker() {
        // set default format/formatSubmit options
        if (this.format) {
            this.options.format = this.format;
        }
        if (this.formatSubmit) {
            this.options.formatSubmit = this.formatSubmit;
        }
        // extends onClose function to fix datepicker focus issue
        // https://github.com/Dogfalo/materialize/issues/2067#issuecomment-142107599
        const /** @type {?} */ onCloseFn = this.options && this.options.onClose || (() => { });
        this.options = Object.assign({}, this.options, {
            onClose: (event) => {
                onCloseFn(event);
                this.renderer.invokeElementMethod(document.activeElement, 'blur');
            },
        });
        this.renderer.invokeElementMethod(this.inputElement, 'pickadate', [this.options]);
        if (this.ngControl) {
            // set datepicker initial value according to ngControl
            this.picker.set('select', this.ngControlValue, { format: this.formatSubmit });
            // set ngControl value according to selected date in datepicker
            this.picker.on('set', () => {
                // handle stop propagation
                if (this.stopChangePropagation) {
                    this.stopChangePropagation = false;
                    return;
                }
                else {
                    this.stopChangePropagation = true;
                }
                // apply options.formatSubmit to ngControl value
                const /** @type {?} */ submitValue = this.formatSubmit
                    ? this.picker.get('select', this.formatSubmit)
                    : this.picker.get('value');
                this.ngControl.control.setValue(submitValue);
                // apply options.format to input text
                const /** @type {?} */ formatValue = this.format
                    ? this.picker.get('select', this.format)
                    : this.picker.get('value');
                this.inputElement.val(formatValue);
                // set label active status
                this.setLabelActive();
                // mark for change detection
                // fix form validation with ChangeDetectionStrategy.OnPush
                this.changeDetectorRef.markForCheck();
            });
        }
    }
    /**
     * @return {?}
     */
    initInputSubscription() {
        if (this.ngControl) {
            this.inputValueSubscription = this.ngControl.valueChanges.subscribe(() => {
                // handle stop propagation
                if (this.stopChangePropagation) {
                    this.stopChangePropagation = false;
                    return;
                }
                else {
                    this.stopChangePropagation = true;
                }
                // set selected date in datepicker according to ngControl value
                this.picker.set('select', this.ngControlValue, { format: this.formatSubmit });
                // set label active status
                this.setLabelActive();
            });
        }
    }
    /**
     * @return {?}
     */
    createLabelElement() {
        const /** @type {?} */ labelElement = document.createElement('label');
        labelElement.setAttribute('for', this.id);
        this.renderer.invokeElementMethod(this.inputElement, 'after', [labelElement]);
        return $(labelElement);
    }
    /**
     * @return {?}
     */
    handleProperties() {
        if (this.inputContainerElement.length === 0) {
            console.error('Input with mz-datepicker directive must be placed inside an [mz-datepicker-container] tag', this.inputElement);
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
    handleOptions() {
        if (!this.isInitRound) {
            this.picker.set(this.options);
        }
    }
    /**
     * @return {?}
     */
    handlePlaceholder() {
        const /** @type {?} */ placeholder = !!this.placeholder ? this.placeholder : null;
        this.renderer.setElementAttribute(this.inputElement[0], 'placeholder', placeholder);
        // fix issue in IE where having a placeholder on input make control dirty and trigger validation
        // on page load... note that it still trigger validation on focus and would need a better fix
        // issue : https://github.com/angular/angular/issues/15299
        // workaround : https://stackoverflow.com/a/44967245/5583283
        if (this.ngControl) {
            setTimeout(() => this.ngControl.control.markAsPristine());
        }
        this.setLabelActive();
    }
    /**
     * @return {?}
     */
    setLabelActive() {
        // need setTimeout otherwise it wont make label float in some circonstances (forcing validation for example)
        setTimeout(() => {
            const /** @type {?} */ inputValue = (/** @type {?} */ (this.inputElement[0])).value;
            const /** @type {?} */ isActive = !!this.placeholder || !!inputValue;
            this.renderer.setElementClass(this.labelElement[0], 'active', isActive);
        });
    }
}
MzDatepickerDirective.decorators = [
    { type: Directive, args: [{
                selector: 'input[mzDatepicker], input[mz-datepicker]',
            },] },
];
/** @nocollapse */
MzDatepickerDirective.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional },] },
    { type: ChangeDetectorRef, },
    { type: ElementRef, },
    { type: Renderer, },
];
MzDatepickerDirective.propDecorators = {
    "true": [{ type: HostBinding, args: ['class.datepicker',] },],
    "id": [{ type: Input },],
    "placeholder": [{ type: Input },],
    "label": [{ type: Input },],
    "options": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzDatepickerModule {
}
MzDatepickerModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    MzDatepickerDirective,
                    MzDatepickerContainerComponent,
                ],
                exports: [
                    MzDatepickerDirective,
                    MzDatepickerContainerComponent,
                ],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzDropdownDividerComponent {
}
MzDropdownDividerComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-dropdown-divider',
                template: `<li class="divider"></li>`,
                styles: [``],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzDropdownItemComponent {
}
MzDropdownItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-dropdown-item',
                template: `<li>
  <ng-content></ng-content>
</li>`,
                styles: [``],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzDropdownComponent extends HandlePropChanges {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzDropdownModule {
}
MzDropdownModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    MzDropdownComponent,
                    MzDropdownDividerComponent,
                    MzDropdownItemComponent,
                ],
                exports: [
                    MzDropdownComponent,
                    MzDropdownDividerComponent,
                    MzDropdownItemComponent,
                ],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzFeatureDiscoveryComponent {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.targetClass = true;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.target = $(this.elementRef.nativeElement);
    }
    /**
     * @return {?}
     */
    close() {
        this.target.tapTarget('close');
    }
    /**
     * @return {?}
     */
    open() {
        this.target.tapTarget('open');
    }
}
MzFeatureDiscoveryComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-feature-discovery',
                template: `<div class="tap-target-content">
  <ng-content></ng-content>
</div>
`,
                styles: [`:host{display:block}`],
            },] },
];
/** @nocollapse */
MzFeatureDiscoveryComponent.ctorParameters = () => [
    { type: ElementRef, },
];
MzFeatureDiscoveryComponent.propDecorators = {
    "targetClass": [{ type: HostBinding, args: ['class.tap-target',] },],
    "targetId": [{ type: HostBinding, args: ['attr.data-activates',] }, { type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzFeatureDiscoveryModule {
}
MzFeatureDiscoveryModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                ],
                declarations: [
                    MzFeatureDiscoveryComponent,
                ],
                exports: [
                    MzFeatureDiscoveryComponent,
                ],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzIconDirective extends HandlePropChanges {
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
        this.initMaterialize();
        super.executePropHandlers();
    }
    /**
     * @return {?}
     */
    initHandlers() {
        this.handlers = {
            align: (previousValue) => this.handleAlign(previousValue),
            icon: () => this.handleIcon(),
            size: (previousValue) => this.handleSize(previousValue),
        };
    }
    /**
     * @return {?}
     */
    initMaterialize() {
        this.renderer.setElementClass(this.elementRef.nativeElement, 'material-icons', true);
    }
    /**
     * @param {?=} previousValue
     * @return {?}
     */
    handleAlign(previousValue) {
        if (previousValue) {
            this.renderer.setElementClass(this.elementRef.nativeElement, previousValue, false);
        }
        if (this.align) {
            this.renderer.setElementClass(this.elementRef.nativeElement, this.align, true);
        }
    }
    /**
     * @return {?}
     */
    handleIcon() {
        this.renderer.setElementProperty(this.elementRef.nativeElement, 'innerHTML', this.icon);
    }
    /**
     * @param {?=} previousValue
     * @return {?}
     */
    handleSize(previousValue) {
        if (previousValue) {
            this.renderer.setElementClass(this.elementRef.nativeElement, previousValue, false);
        }
        if (this.size) {
            this.renderer.setElementClass(this.elementRef.nativeElement, this.size, true);
        }
    }
}
MzIconDirective.decorators = [
    { type: Directive, args: [{
                selector: 'i[mz-icon], i[mzIcon]',
            },] },
];
/** @nocollapse */
MzIconDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer, },
];
MzIconDirective.propDecorators = {
    "align": [{ type: Input },],
    "icon": [{ type: Input },],
    "size": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzIconModule {
}
MzIconModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    MzIconDirective,
                ],
                exports: [
                    MzIconDirective,
                ],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzIconMdiDirective extends HandlePropChanges {
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
        this.initMaterialize();
        super.executePropHandlers();
    }
    /**
     * @return {?}
     */
    initHandlers() {
        this.handlers = {
            align: (previousValue) => this.handleAlign(previousValue),
            flip: (previousValue) => this.handleFlip(previousValue),
            icon: (previousValue) => this.handleIcon(previousValue),
            rotate: (previousValue) => this.handleRotate(previousValue),
            size: (previousValue) => this.handleSize(previousValue),
        };
    }
    /**
     * @return {?}
     */
    initMaterialize() {
        this.renderer.setElementClass(this.elementRef.nativeElement, 'mdi', true);
    }
    /**
     * @param {?=} previousValue
     * @return {?}
     */
    handleAlign(previousValue) {
        if (previousValue) {
            this.renderer.setElementClass(this.elementRef.nativeElement, previousValue, false);
        }
        if (this.align) {
            this.renderer.setElementClass(this.elementRef.nativeElement, this.align, true);
        }
    }
    /**
     * @param {?=} previousValue
     * @return {?}
     */
    handleFlip(previousValue) {
        if (previousValue) {
            this.renderer.setElementClass(this.elementRef.nativeElement, 'mdi-flip-' + previousValue, false);
        }
        this.renderer.setElementClass(this.elementRef.nativeElement, 'mdi-flip-' + this.flip, !!this.flip);
    }
    /**
     * @param {?=} previousValue
     * @return {?}
     */
    handleIcon(previousValue) {
        if (previousValue) {
            this.renderer.setElementClass(this.elementRef.nativeElement, 'mdi-' + previousValue, false);
        }
        this.renderer.setElementClass(this.elementRef.nativeElement, 'mdi-' + this.icon, true);
    }
    /**
     * @param {?=} previousValue
     * @return {?}
     */
    handleRotate(previousValue) {
        if (previousValue) {
            this.renderer.setElementClass(this.elementRef.nativeElement, 'mdi-rotate-' + previousValue, false);
        }
        this.renderer.setElementClass(this.elementRef.nativeElement, 'mdi-rotate-' + this.rotate, !!this.rotate);
    }
    /**
     * @param {?=} previousValue
     * @return {?}
     */
    handleSize(previousValue) {
        if (!this.size) {
            this.size = '24px';
        }
        if (previousValue) {
            this.renderer.setElementClass(this.elementRef.nativeElement, 'mdi-' + previousValue, false);
        }
        this.renderer.setElementClass(this.elementRef.nativeElement, 'mdi-' + this.size, true);
    }
}
MzIconMdiDirective.decorators = [
    { type: Directive, args: [{
                selector: 'a[mz-icon-mdi], a[mzIconMdi], i[mz-icon-mdi], i[mzIconMdi]',
            },] },
];
/** @nocollapse */
MzIconMdiDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer, },
];
MzIconMdiDirective.propDecorators = {
    "align": [{ type: Input },],
    "flip": [{ type: Input },],
    "icon": [{ type: Input },],
    "rotate": [{ type: Input },],
    "size": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzIconMdiModule {
}
MzIconMdiModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    MzIconMdiDirective,
                ],
                exports: [
                    MzIconMdiDirective,
                ],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzInputContainerComponent {
}
MzInputContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-input-container',
                template: `<div
  class="input-field"
  [class.inline]="inline"
>
  <ng-content></ng-content>
</div>`,
                styles: [``],
            },] },
];
/** @nocollapse */
MzInputContainerComponent.propDecorators = {
    "inline": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzInputPrefixDirective {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.renderer.setElementClass(this.elementRef.nativeElement, 'prefix', true);
    }
}
MzInputPrefixDirective.decorators = [
    { type: Directive, args: [{
                selector: 'i[mzInputPrefix], i[mz-input-prefix]',
            },] },
];
/** @nocollapse */
MzInputPrefixDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzInputDirective extends HandlePropChanges {
    /**
     * @param {?} ngControl
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(ngControl, elementRef, renderer) {
        super();
        this.ngControl = ngControl;
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initHandlers();
        this.initElements();
        this.initInputSubscription();
        this.handleProperties();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.inputValueSubscription) {
            this.inputValueSubscription.unsubscribe();
        }
    }
    /**
     * @return {?}
     */
    initHandlers() {
        this.handlers = {
            autocomplete: () => this.handleAutocomplete(),
            dataError: () => this.handleDataError(),
            dataSuccess: () => this.handleDataSuccess(),
            label: () => this.handleLabel(),
            length: () => this.handleLength(),
            placeholder: () => this.handlePlaceholder(),
            validate: () => this.handleValidate(),
        };
    }
    /**
     * @return {?}
     */
    initElements() {
        this.inputElement = $(this.elementRef.nativeElement);
        this.inputContainerElement = $(this.elementRef.nativeElement).parent('.input-field');
        this.labelElement = this.createLabelElement();
    }
    /**
     * @return {?}
     */
    initInputSubscription() {
        if (this.ngControl) {
            this.inputValueSubscription = this.ngControl.valueChanges.subscribe(() => this.setLabelActive());
        }
    }
    /**
     * @return {?}
     */
    createLabelElement() {
        const /** @type {?} */ labelElement = document.createElement('label');
        labelElement.setAttribute('for', this.id);
        this.renderer.invokeElementMethod(this.inputElement, 'after', [labelElement]);
        return $(labelElement);
    }
    /**
     * @return {?}
     */
    handleProperties() {
        if (this.inputContainerElement.length === 0) {
            console.error('Input with mz-input directive must be placed inside an [mz-input-container] tag', this.inputElement);
            return;
        }
        super.executePropHandlers();
    }
    /**
     * @return {?}
     */
    handleAutocomplete() {
        const /** @type {?} */ isAutocomplete = this.autocomplete != null
            && this.autocomplete.data != null
            && Object.keys(this.autocomplete.data).length > 0;
        this.renderer.setElementClass(this.inputElement[0], 'autocomplete', isAutocomplete);
        if (this.autocomplete != null) {
            // wait until autocomplete is defined before to invoke
            // see issue: https://github.com/Dogfalo/materialize/issues/4401
            interval(100)
                .pipe(skipWhile(() => !this.inputElement['autocomplete']), first())
                .subscribe(() => this.renderer.invokeElementMethod(this.inputElement, 'autocomplete', [this.autocomplete]));
        }
    }
    /**
     * @return {?}
     */
    handleDataError() {
        this.renderer.setElementAttribute(this.labelElement[0], 'data-error', this.dataError);
    }
    /**
     * @return {?}
     */
    handleDataSuccess() {
        this.renderer.setElementAttribute(this.labelElement[0], 'data-success', this.dataSuccess);
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
    handleLength() {
        const /** @type {?} */ length = this.length ? this.length.toString() : null;
        this.renderer.setElementAttribute(this.inputElement[0], 'data-length', length);
        if (length) {
            this.setCharacterCount();
        }
        else {
            this.removeCharacterCount();
        }
    }
    /**
     * @return {?}
     */
    handlePlaceholder() {
        const /** @type {?} */ placeholder = !!this.placeholder ? this.placeholder : null;
        this.renderer.setElementAttribute(this.inputElement[0], 'placeholder', placeholder);
        // fix issue in IE where having a placeholder on input make control dirty
        // note that it still trigger validation on focus but this is better than nothing
        // issue : https://github.com/angular/angular/issues/15299
        // workaround : https://stackoverflow.com/a/44967245/5583283
        if (this.ngControl) {
            setTimeout(() => this.ngControl.control.markAsPristine());
        }
        this.setLabelActive();
    }
    /**
     * @return {?}
     */
    handleValidate() {
        this.renderer.setElementClass(this.inputElement[0], 'validate', this.validate);
        if (this.validate) {
            // force validation
            this.renderer.invokeElementMethod(this.inputElement, 'trigger', ['blur']);
        }
        else {
            this.removeValidationClasses();
        }
    }
    /**
     * @return {?}
     */
    setCharacterCount() {
        this.renderer.invokeElementMethod(this.inputElement, 'characterCounter');
        // force validation
        // need setTimeout otherwise it wont trigger validation right away
        setTimeout(() => {
            this.renderer.invokeElementMethod(this.inputElement, 'trigger', ['input']);
            this.renderer.invokeElementMethod(this.inputElement, 'trigger', ['blur']);
        });
    }
    /**
     * @return {?}
     */
    setLabelActive() {
        // need setTimeout otherwise it wont make label float in some circonstances
        // for example: forcing validation for example, reseting form programmaticaly, ...
        setTimeout(() => {
            const /** @type {?} */ inputValue = (/** @type {?} */ (this.inputElement[0])).value;
            const /** @type {?} */ isActive = !!this.placeholder || !!inputValue;
            this.renderer.setElementClass(this.labelElement[0], 'active', isActive);
        });
    }
    /**
     * @return {?}
     */
    removeCharacterCount() {
        this.renderer.invokeElementMethod(this.inputElement.siblings('.character-counter'), 'remove');
        this.removeValidationClasses();
    }
    /**
     * @return {?}
     */
    removeValidationClasses() {
        // reset valid/invalid state
        this.renderer.setElementClass(this.inputElement[0], 'invalid', false);
        this.renderer.setElementClass(this.inputElement[0], 'valid', false);
    }
}
MzInputDirective.decorators = [
    { type: Directive, args: [{
                selector: 'input[mzInput], input[mz-input]',
            },] },
];
/** @nocollapse */
MzInputDirective.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional },] },
    { type: ElementRef, },
    { type: Renderer, },
];
MzInputDirective.propDecorators = {
    "id": [{ type: Input },],
    "placeholder": [{ type: Input },],
    "autocomplete": [{ type: Input },],
    "dataError": [{ type: Input },],
    "dataSuccess": [{ type: Input },],
    "label": [{ type: Input },],
    "length": [{ type: Input },],
    "validate": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzInputModule {
}
MzInputModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    MzInputContainerComponent,
                    MzInputDirective,
                    MzInputPrefixDirective,
                ],
                exports: [
                    MzInputContainerComponent,
                    MzInputDirective,
                    MzInputPrefixDirective,
                ],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzMediaService {
    /**
     * @param {?} platformId
     */
    constructor(platformId) {
        this.mediaBreakpoints = [
            { alias: 's', minWidth: 0, maxWidth: 600 },
            { alias: 'm', minWidth: 601, maxWidth: 992 },
            { alias: 'l', minWidth: 993, maxWidth: 1200 },
            { alias: 'xl', minWidth: 1201, maxWidth: Number.MAX_VALUE },
        ];
        this.matchOperators = [
            {
                operator: 'gt',
                match: (breakpoint) => window.innerWidth > breakpoint.maxWidth,
            },
            {
                operator: 'lt',
                match: (breakpoint) => window.innerWidth < breakpoint.minWidth,
            },
            {
                operator: null,
                match: (breakpoint) => window.innerWidth >= breakpoint.minWidth && window.innerWidth <= breakpoint.maxWidth,
            },
        ];
        if (isPlatformBrowser(platformId)) {
            this.media = this.registerWindowResizeListener();
        }
        else {
            this.media = Observable.create();
        }
    }
    /**
     * @param {?} breakpoint
     * @return {?}
     */
    isActive(breakpoint) {
        return new Observable(subscriber => {
            this.media.subscribe((media) => {
                try {
                    subscriber.next(this.isActiveBreakpoint(breakpoint));
                }
                catch (/** @type {?} */ error) {
                    subscriber.error(error);
                }
            });
        });
    }
    /**
     * @return {?}
     */
    registerWindowResizeListener() {
        return fromEvent(window, 'resize')
            .pipe(map(() => this.getWindowMedia()), startWith(this.getWindowMedia()), publishReplay(1), refCount());
    }
    /**
     * @return {?}
     */
    getWindowMedia() {
        return {
            alias: this.mediaBreakpoints.find((breakpoint) => window.innerWidth <= breakpoint.maxWidth).alias,
            windowHeight: window.innerHeight,
            windowWidth: window.innerWidth,
        };
    }
    /**
     * @param {?} breakpoint
     * @return {?}
     */
    isActiveBreakpoint(breakpoint) {
        let /** @type {?} */ matchOperator;
        let /** @type {?} */ mediaBreakpoint;
        if (breakpoint) {
            const /** @type {?} */ fragments = breakpoint.split('-');
            if (fragments.length === 1) {
                matchOperator = this.matchOperators.find(x => x.operator === null);
                mediaBreakpoint = this.mediaBreakpoints.find(x => x.alias === fragments[0]);
            }
            else if (fragments.length === 2) {
                matchOperator = this.matchOperators.find(x => x.operator === fragments[0]);
                mediaBreakpoint = this.mediaBreakpoints.find(x => x.alias === fragments[1]);
            }
        }
        if (!mediaBreakpoint || !matchOperator) {
            throw Error(`MzMediaService.isActive parameter is invalid: '${breakpoint}' is not a recognized breakpoint.`);
        }
        return matchOperator.match(mediaBreakpoint);
    }
}
MzMediaService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
MzMediaService.ctorParameters = () => [
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzMediaModule {
}
MzMediaModule.decorators = [
    { type: NgModule, args: [{
                providers: [MzMediaService],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzModalComponent extends HandlePropChanges {
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
class MzModalHeaderDirective {
}
MzModalHeaderDirective.decorators = [
    { type: Directive, args: [{ selector: 'mz-modal-header' },] },
];
class MzModalContentDirective {
}
MzModalContentDirective.decorators = [
    { type: Directive, args: [{ selector: 'mz-modal-content' },] },
];
class MzModalFooterDirective {
}
MzModalFooterDirective.decorators = [
    { type: Directive, args: [{ selector: 'mz-modal-footer' },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzModalCloseDirective {
    /**
     * @param {?} modalComponent
     */
    constructor(modalComponent) {
        this.modalComponent = modalComponent;
    }
    /**
     * @return {?}
     */
    onclick() {
        this.modalComponent.closeModal();
    }
}
MzModalCloseDirective.decorators = [
    { type: Directive, args: [{
                selector: 'a[mzModalClose], button[mzModalClose], a[mz-modal-close], button[mz-modal-close]',
            },] },
];
/** @nocollapse */
MzModalCloseDirective.ctorParameters = () => [
    { type: MzModalComponent, },
];
MzModalCloseDirective.propDecorators = {
    "onclick": [{ type: HostListener, args: ['click',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzModalService {
    /**
     * @param {?} injectionService
     */
    constructor(injectionService) {
        this.injectionService = injectionService;
    }
    /**
     * Open modal component.
     * @param {?} componentClass
     * @param {?=} options
     * @return {?}
     */
    open(componentClass, options = {}) {
        const /** @type {?} */ componentRef = this.injectionService.appendComponent(componentClass, options);
        componentRef.instance.modalComponent.close
            .pipe(first())
            .subscribe(() => {
            componentRef.destroy();
        });
        return componentRef;
    }
}
MzModalService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
MzModalService.ctorParameters = () => [
    { type: MzInjectionService, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzModalModule {
}
MzModalModule.decorators = [
    { type: NgModule, args: [{
                imports: [MzInjectionModule],
                declarations: [
                    MzModalCloseDirective,
                    MzModalComponent,
                    MzModalContentDirective,
                    MzModalFooterDirective,
                    MzModalHeaderDirective,
                ],
                exports: [
                    MzModalCloseDirective,
                    MzModalComponent,
                    MzModalContentDirective,
                    MzModalFooterDirective,
                    MzModalHeaderDirective,
                ],
                providers: [MzModalService],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzNavbarItemContainerComponent {
}
MzNavbarItemContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-navbar-item-container',
                template: `<ul id="nav-mobile" class="{{ align }}">
  <ng-content></ng-content>
</ul>`,
                styles: [``],
            },] },
];
/** @nocollapse */
MzNavbarItemContainerComponent.propDecorators = {
    "align": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzNavbarItemComponent {
}
MzNavbarItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-navbar-item',
                template: `<li 
  class="{{ itemClass }}"
  [class.active]="active"
>
  <ng-content></ng-content>
</li>`,
                styles: [``],
            },] },
];
/** @nocollapse */
MzNavbarItemComponent.propDecorators = {
    "active": [{ type: Input },],
    "itemClass": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzNavbarComponent {
}
MzNavbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-navbar',
                template: `<nav>
  <div class="nav-wrapper {{ navbarClass }}">
    <ng-content></ng-content>
  </div>
</nav>`,
                styles: [`.nav-wrapper /deep/ .btn i{line-height:inherit}`],
            },] },
];
/** @nocollapse */
MzNavbarComponent.propDecorators = {
    "navbarClass": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzNavbarModule {
}
MzNavbarModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    MzNavbarComponent,
                    MzNavbarItemComponent,
                    MzNavbarItemContainerComponent,
                ],
                exports: [
                    MzNavbarComponent,
                    MzNavbarItemComponent,
                    MzNavbarItemContainerComponent,
                ],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzPaginationPageButtonComponent {
}
MzPaginationPageButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-pagination-page-button',
                template: `<li [class.active]="active"
  [class.disabled]="disabled"
  [class.waves-effect]="!active && !disabled">
  <ng-content></ng-content>
</li>`,
                styles: [``],
            },] },
];
/** @nocollapse */
MzPaginationPageButtonComponent.propDecorators = {
    "active": [{ type: Input },],
    "disabled": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzPaginationComponent extends HandlePropChanges {
    constructor() {
        super();
        this.currentPage = 1;
        this.enableFirstAndLastPageButtons = false;
        this.maxPageButtons = 5;
        this.pageChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get totalPages() {
        return Math.ceil(this.totalItems / this.itemsPerPage);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initHandlers();
        this.renderButtons();
    }
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    changeCurrentPage(pageNumber) {
        this.currentPage = pageNumber;
        this.pageChange.emit(pageNumber);
        this.renderButtons();
    }
    /**
     * @return {?}
     */
    firstPage() {
        this.changeCurrentPage(1);
    }
    /**
     * @return {?}
     */
    initHandlers() {
        this.handlers = {
            currentPage: () => this.renderButtons(),
            itemsPerPage: () => this.renderButtons(),
            maxPageButtons: () => this.renderButtons(),
            totalItems: () => this.renderButtons(),
        };
    }
    /**
     * @return {?}
     */
    lastPage() {
        this.changeCurrentPage(this.totalPages);
    }
    /**
     * @return {?}
     */
    nextPage() {
        if (this.currentPage < this.totalPages) {
            const /** @type {?} */ nextPage = this.currentPage + 1;
            this.changeCurrentPage(nextPage);
        }
    }
    /**
     * @return {?}
     */
    previousPage() {
        if (this.currentPage !== 1) {
            const /** @type {?} */ previousPage = this.currentPage - 1;
            this.changeCurrentPage(previousPage);
        }
    }
    /**
     * @return {?}
     */
    renderButtons() {
        const /** @type {?} */ buttonsCount = Math.min(this.maxPageButtons, this.totalPages);
        const /** @type {?} */ maxPosition = this.totalPages - buttonsCount;
        const /** @type {?} */ halfButtons = Math.floor(buttonsCount / 2);
        let /** @type {?} */ hiddenPagesBefore = (this.currentPage - halfButtons);
        if (hiddenPagesBefore > maxPosition) {
            hiddenPagesBefore = maxPosition + 1;
        }
        const /** @type {?} */ from = Math.max(hiddenPagesBefore, 1);
        const /** @type {?} */ to = Math.min(this.totalPages, from + this.maxPageButtons - 1);
        this.pages = Array(buttonsCount).fill(0).map((x, i) => from + i);
        if (this.currentPage > this.totalPages) {
            this.currentPage = this.pages[0];
        }
    }
}
MzPaginationComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-pagination',
                template: `
  <ul class="pagination">
    <mz-pagination-page-button [disabled]="currentPage === 1" *ngIf="enableFirstAndLastPageButtons">
      <a (click)="firstPage()"><i mz-icon [icon]="'first_page'"></i></a>
    </mz-pagination-page-button>
    <mz-pagination-page-button [disabled]="currentPage === 1">
      <a (click)="previousPage()"><i mz-icon [icon]="'chevron_left'"></i></a>
    </mz-pagination-page-button>
    <mz-pagination-page-button *ngFor="let page of pages"
      [active]="page === currentPage"
    >
      <a (click)="changeCurrentPage(page)">{{ page }}</a>
    </mz-pagination-page-button>
    <mz-pagination-page-button [disabled]="currentPage === totalPages">
      <a (click)="nextPage()"><i mz-icon [icon]="'chevron_right'"></i></a>
    </mz-pagination-page-button>
    <mz-pagination-page-button [disabled]="currentPage === totalPages" *ngIf="enableFirstAndLastPageButtons">
      <a (click)="lastPage()"><i mz-icon [icon]="'last_page'"></i></a>
    </mz-pagination-page-button>
  </ul>`,
                styles: [``],
            },] },
];
/** @nocollapse */
MzPaginationComponent.ctorParameters = () => [];
MzPaginationComponent.propDecorators = {
    "currentPage": [{ type: Input },],
    "enableFirstAndLastPageButtons": [{ type: Input },],
    "itemsPerPage": [{ type: Input },],
    "maxPageButtons": [{ type: Input },],
    "totalItems": [{ type: Input },],
    "pageChange": [{ type: Output },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzPaginationModule {
}
MzPaginationModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    MzIconModule,
                ],
                declarations: [
                    MzPaginationComponent,
                    MzPaginationPageButtonComponent,
                ],
                exports: [
                    MzPaginationComponent,
                ],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzParallaxComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzParallaxModule {
}
MzParallaxModule.decorators = [
    { type: NgModule, args: [{
                declarations: [MzParallaxComponent],
                exports: [MzParallaxComponent],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzProgressComponent {
}
MzProgressComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-progress',
                template: `<div class="progress {{ backgroundClass }}">

  <div
    class="progress-bar {{ progressClass }}"
    [class.determinate]="percentage != null"
    [class.indeterminate]="percentage == null"
    [style.width.%]="percentage">
  </div>
</div>`,
                styles: [``],
            },] },
];
/** @nocollapse */
MzProgressComponent.propDecorators = {
    "backgroundClass": [{ type: Input },],
    "percentage": [{ type: Input },],
    "progressClass": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzProgressModule {
}
MzProgressModule.decorators = [
    { type: NgModule, args: [{
                declarations: [MzProgressComponent],
                exports: [MzProgressComponent],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzRadioButtonContainerComponent {
}
MzRadioButtonContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-radio-button-container',
                template: `<p class="radio-button-field">
  <ng-content></ng-content>
</p>`,
                styles: [``],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzRadioButtonDirective extends HandlePropChanges {
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
            label: () => this.handleLabel(),
            withGap: () => this.handleWithGap(),
        };
    }
    /**
     * @return {?}
     */
    initElements() {
        this.inputElement = $(this.elementRef.nativeElement);
        this.inputContainerElement = $(this.elementRef.nativeElement).parent('.radio-button-field');
        this.labelElement = this.createLabelElement();
    }
    /**
     * @return {?}
     */
    createLabelElement() {
        const /** @type {?} */ labelElement = document.createElement('label');
        labelElement.setAttribute('for', this.id);
        this.renderer.invokeElementMethod(this.inputElement, 'after', [labelElement]);
        return $(labelElement);
    }
    /**
     * @return {?}
     */
    handleProperties() {
        if (this.inputContainerElement.length === 0) {
            console.error('Radio Button must be placed inside a [mz-radio-button-container] tag', this.inputElement);
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
    handleWithGap() {
        this.renderer.setElementClass(this.inputElement[0], 'with-gap', this.withGap);
    }
}
MzRadioButtonDirective.decorators = [
    { type: Directive, args: [{
                selector: 'input[mzRadioButton], input[mz-radio-button]',
            },] },
];
/** @nocollapse */
MzRadioButtonDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer, },
];
MzRadioButtonDirective.propDecorators = {
    "id": [{ type: HostBinding }, { type: Input },],
    "label": [{ type: Input },],
    "withGap": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzRadioButtonModule {
}
MzRadioButtonModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    MzRadioButtonDirective,
                    MzRadioButtonContainerComponent,
                ],
                exports: [
                    MzRadioButtonDirective,
                    MzRadioButtonContainerComponent,
                ],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @abstract
 */
class ErrorMessageResource {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzErrorMessageComponent {
    constructor() {
        this.errorMessage = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.buildErrorMessage();
        this.controlStatusChangesSubscription = this.control.statusChanges.subscribe(() => this.buildErrorMessage());
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.controlStatusChangesSubscription.unsubscribe();
    }
    /**
     * @return {?}
     */
    buildErrorMessage() {
        this.errorMessage = '';
        if (this.control.errors && this.errorMessageResource) {
            Object.keys(this.control.errors).forEach(key => {
                this.errorMessage += this.errorMessageResource[key] + ' ';
            });
        }
    }
}
MzErrorMessageComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-error-message',
                template: `<div [@enterAnimation]="errorMessage" class="invalid" *ngIf="(control.touched || control.dirty) && control.invalid && errorMessage">{{ errorMessage }}</div>`,
                styles: [`div.invalid{color:#e30613;font-size:.8rem;opacity:1;overflow-wrap:break-word}input:not([type=checkbox])+label+:host div.invalid,mz-select-container :host div.invalid,textarea+label+:host div.invalid{margin-top:-19px;min-height:19px}`],
                animations: [
                    trigger('enterAnimation', [
                        transition(':enter', [
                            style({ transform: 'translateY(-5px)', opacity: 0 }),
                            animate('300ms', style({ transform: 'translateY(0)', opacity: 1 })),
                        ]),
                        transition(':leave', [
                            style({ transform: 'translateY(0)', opacity: 1 }),
                            animate('300ms', style({ transform: 'translateY(-5px)', opacity: 0 })),
                        ]),
                    ]),
                ],
            },] },
];
/** @nocollapse */
MzErrorMessageComponent.propDecorators = {
    "control": [{ type: Input },],
    "errorMessageResource": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzValidationComponent {
    /**
     * @param {?} elementRef
     * @param {?} resolver
     * @param {?} viewContainerRef
     * @param {?} ngControl
     * @param {?} renderer
     */
    constructor(elementRef, resolver, viewContainerRef, ngControl, renderer) {
        this.elementRef = elementRef;
        this.resolver = resolver;
        this.viewContainerRef = viewContainerRef;
        this.ngControl = ngControl;
        this.renderer = renderer;
        this.errorMessageComponent = null;
        this._formControlDisabled = false;
        this._required = false;
    }
    /**
     * @return {?}
     */
    get required() { return this._required; }
    /**
     * @param {?} value
     * @return {?}
     */
    set required(value) { this._required = (value != null && `${value}` !== 'false'); }
    /**
     * @return {?}
     */
    get formControlDisabled() { return this._formControlDisabled; }
    /**
     * @param {?} value
     * @return {?}
     */
    set formControlDisabled(value) {
        this._formControlDisabled = value;
        if (this._formControlDisabled) {
            this.ngControl.control.disable();
        }
        else {
            this.ngControl.control.enable();
        }
    }
    /**
     * @return {?}
     */
    get elementToAddValidation() {
        return this.isNativeSelectElement
            ? this.inputSelectDropdown
            : this.nativeElement;
    }
    /**
     * @return {?}
     */
    get inputSelectDropdown() {
        return this.nativeElement.siblings('input.select-dropdown');
    }
    /**
     * @return {?}
     */
    get isNativeSelectElement() {
        return this.nativeElement[0].nodeName === 'SELECT';
    }
    /**
     * @param {?} target
     * @return {?}
     */
    onFocusOut(target) {
        this.ngControl.control.markAsTouched();
        this.setValidationState();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.initElements();
        this.initErrorMessageComponent();
        this.subscribeStatusChanges();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.statusChangesSubscription.unsubscribe();
        this.errorMessageComponent.destroy();
    }
    /**
     * @param {?} element
     * @return {?}
     */
    clearValidationState(element) {
        this.renderer.setElementClass(element[0], 'valid', false);
        this.renderer.setElementClass(element[0], 'invalid', false);
    }
    /**
     * @return {?}
     */
    createRequiredSpanElement() {
        if (this.required && this.labelElement) {
            const /** @type {?} */ spanElement = document.createElement('span');
            spanElement.setAttribute('class', 'placeholder-required');
            spanElement.textContent = ' *';
            this.renderer.invokeElementMethod(this.labelElement, 'appendChild', [spanElement]);
        }
    }
    /**
     * @return {?}
     */
    initElements() {
        this.labelElement = $('label[for="' + this.id + '"]')[0];
        this.nativeElement = $(this.elementRef.nativeElement);
        this.createRequiredSpanElement();
    }
    /**
     * @return {?}
     */
    initErrorMessageComponent() {
        const /** @type {?} */ errorMessageFactory = this.resolver.resolveComponentFactory(MzErrorMessageComponent);
        this.errorMessageComponent = this.viewContainerRef.createComponent(errorMessageFactory);
        this.errorMessageComponent.instance.errorMessageResource = this.errorMessageResource;
        this.errorMessageComponent.instance.control = this.ngControl.control;
        this.errorMessageComponent.changeDetectorRef.detectChanges();
        const /** @type {?} */ errorMessage = this.nativeElement.parent().children('mz-error-message');
        this.renderer.invokeElementMethod(errorMessage, 'insertAfter', [this.labelElement]);
    }
    /**
     * @return {?}
     */
    setValidationState() {
        // to handle reset form
        if (this.ngControl.control.untouched && this.ngControl.control.pristine) {
            this.clearValidationState(this.elementToAddValidation);
            return;
        }
        // to handle field validity
        if (this.ngControl.control.enabled) {
            if (this.ngControl.control.valid) {
                this.renderer.setElementClass(this.elementToAddValidation[0], 'valid', true);
                this.renderer.setElementClass(this.elementToAddValidation[0], 'invalid', false);
            }
            else {
                this.renderer.setElementClass(this.elementToAddValidation[0], 'valid', false);
                this.renderer.setElementClass(this.elementToAddValidation[0], 'invalid', true);
            }
        }
        else {
            this.clearValidationState(this.elementToAddValidation);
        }
    }
    /**
     * @return {?}
     */
    subscribeStatusChanges() {
        this.statusChangesSubscription = this.ngControl.control.statusChanges.subscribe((status) => {
            // TODO Find a better way to handle validation after the form subscription. (see demo form-validation)
            // wait for the valueChanges method from FormGroup to have been triggered before handling the validation state
            // /!\ race condition warning /!\
            setTimeout(() => this.setValidationState());
        });
    }
}
MzValidationComponent.decorators = [
    { type: Component, args: [{
                encapsulation: ViewEncapsulation.None,
                selector: 'mz-validation, [mz-validation], [mzValidation]',
                template: `<ng-content></ng-content>`,
                styles: [`.select-wrapper input.select-dropdown.invalid,textarea.ng-invalid.ng-touched:focus{border-bottom:1px solid #f44336;box-shadow:0 1px 0 0 #f44336}.select-wrapper input.select-dropdown.valid{border-bottom:1px solid #4caf50;box-shadow:0 1px 0 0 #4caf50}input:not([type=checkbox]):focus+label.active span.placeholder-required,textarea:focus+label.active span.placeholder-required{color:#f44336}`],
            },] },
];
/** @nocollapse */
MzValidationComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: ComponentFactoryResolver, },
    { type: ViewContainerRef, },
    { type: NgControl, },
    { type: Renderer, },
];
MzValidationComponent.propDecorators = {
    "id": [{ type: Input },],
    "errorMessageResource": [{ type: Input },],
    "required": [{ type: HostBinding, args: ['attr.required',] }, { type: Input },],
    "formControlDisabled": [{ type: Input },],
    "onFocusOut": [{ type: HostListener, args: ['focusout', ['$event.target'],] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzSelectDirective extends HandlePropChanges {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} renderer
     */
    constructor(elementRef, changeDetectorRef, renderer) {
        super();
        this.elementRef = elementRef;
        this.changeDetectorRef = changeDetectorRef;
        this.renderer = renderer;
        this.update = new EventEmitter();
        this.suspend = false;
    }
    /**
     * @return {?}
     */
    get inputElement() {
        return this.selectElement.siblings('input.select-dropdown');
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initHandlers();
        this.initElements();
        this.initOnChange();
        this.handleProperties();
        // must be done after handlePlaceholder
        this.initSelectedOption();
        // must be done after handleProperties
        this.initMaterialSelect();
        // must be done after initMaterialSelect
        this.listenOptionChanges();
        this.initFilledIn();
        this.handleDOMEvents();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.renderer.invokeElementMethod(this.selectElement, 'material_select', ['destroy']);
        this.selectElement.off();
        this.mutationObserver.disconnect();
    }
    /**
     * @return {?}
     */
    initHandlers() {
        this.handlers = {
            disabled: () => this.handleDisabled(),
            label: () => this.handleLabel(),
            placeholder: () => this.handlePlaceholder(),
        };
    }
    /**
     * @return {?}
     */
    initElements() {
        this.selectElement = $(this.elementRef.nativeElement);
        this.selectContainerElement = $(this.elementRef.nativeElement).parents('.input-field');
        this.labelElement = this.createLabelElement();
    }
    /**
     * Need to be done after material_select has been invoked or else the multi-select
     * options are not yet in the DOM as it loops on rendered options
     * @return {?}
     */
    initFilledIn() {
        this.checkboxElements = this.selectContainerElement.find(':checkbox');
        this.handlers['filledIn'] = () => this.handleFilledIn();
        this.handleFilledIn();
    }
    /**
     * @return {?}
     */
    initMaterialSelect() {
        this.renderer.invokeElementMethod(this.selectElement, 'material_select');
    }
    /**
     * Trigger the native change event from select element instead of the JQuery.
     * An issue on Github is open about this problem : https://github.com/Dogfalo/materialize/issues/2843
     * This method should be removed when this issue is revolved.
     * @return {?}
     */
    initOnChange() {
        this.selectElement.on('change', (event) => {
            if (!this.suspend) {
                this.suspend = true;
                const /** @type {?} */ customEvent = document.createEvent('CustomEvent');
                customEvent.initCustomEvent('change', true, false, event.target.value);
                this.renderer.invokeElementMethod(this.selectElement[0], 'dispatchEvent', [customEvent]);
            }
        });
        // Stop the propagation of change event
        this.selectElement[0].addEventListener('change', () => {
            this.suspend = false;
        });
    }
    /**
     * @return {?}
     */
    handleDOMEvents() {
        this.inputElement.on('blur focus', (event) => {
            const /** @type {?} */ customEvent = document.createEvent('CustomEvent');
            customEvent.initCustomEvent(event.type, true, false, event.target);
            this.selectElement[0].dispatchEvent(customEvent);
        });
    }
    /**
     * @return {?}
     */
    createLabelElement() {
        const /** @type {?} */ labelElement = document.createElement('label');
        labelElement.setAttribute('for', this.id);
        this.renderer.invokeElementMethod(this.selectElement, 'after', [labelElement]);
        return $(labelElement);
    }
    /**
     * @return {?}
     */
    handleProperties() {
        if (this.selectContainerElement.length === 0) {
            console.error('Select with mz-select directive must be place inside a [mz-select-container] tag', this.selectElement);
            return;
        }
        super.executePropHandlers();
    }
    /**
     * @return {?}
     */
    initSelectedOption() {
        const /** @type {?} */ firstOptionElement = this.selectElement.children().first();
        if (firstOptionElement.length > 0
            && this.selectElement.children('option[selected]').length === 0
            && !this.selectElement[0].hasAttribute('multiple')) {
            this.renderer.setElementAttribute(firstOptionElement[0], 'selected', '');
        }
    }
    /**
     * @return {?}
     */
    handleDisabled() {
        // when disabled is null/undefined that means the property has not been used on the element
        // but it might be set by another process (for example reactive form applies disabled attribute itself)
        // therefore we don't want to remove or add it here
        if (this.disabled != null) {
            this.renderer.setElementProperty(this.selectElement[0], 'disabled', !!this.disabled);
            this.updateMaterialSelect();
        }
    }
    /**
     * @return {?}
     */
    handleLabel() {
        if (this.label != null) {
            this.renderer.invokeElementMethod(this.labelElement, 'text', [this.label]);
        }
    }
    /**
     * @return {?}
     */
    handleFilledIn() {
        if (this.checkboxElements.length > 0) {
            this.checkboxElements.toArray().forEach(checkboxElement => {
                this.renderer.setElementClass(checkboxElement, 'filled-in', !!this.filledIn);
            });
        }
    }
    /**
     * @return {?}
     */
    handlePlaceholder() {
        const /** @type {?} */ placeholderElement = this.selectElement.children(':disabled').first();
        // if placeholder element exists
        if (placeholderElement.length > 0) {
            if (this.placeholder) {
                // update existing placeholder element
                this.renderer.invokeElementMethod(placeholderElement, 'text', [this.placeholder]);
            }
            else {
                // remove existing placeholder element
                this.renderer.invokeElementMethod(placeholderElement, 'remove');
                // Force trigger change event since it's not triggered when value change programmatically
                this.renderer.invokeElementMethod(this.selectElement, 'change');
                // Required if we don't want exception "Expression has changed after it was checked." https://github.com/angular/angular/issues/6005
                this.changeDetectorRef.detectChanges();
            }
        }
        else {
            if (this.placeholder) {
                // add placeholder element
                const /** @type {?} */ placeholderText = document.createTextNode(this.placeholder);
                const /** @type {?} */ placeholderOption = document.createElement('option');
                placeholderOption.disabled = true;
                placeholderOption.value = null;
                placeholderOption.appendChild(placeholderText);
                this.renderer.invokeElementMethod(this.selectElement, 'prepend', [placeholderOption]);
            }
        }
        this.initMaterialSelect();
    }
    /**
     * @return {?}
     */
    listenOptionChanges() {
        const /** @type {?} */ mutationObserverConfiguration = {
            childList: true,
            subtree: true,
        };
        this.mutationObserver = new MutationObserver((mutations) => {
            this.updateMaterialSelect();
        });
        this.mutationObserver.observe(this.selectElement[0], mutationObserverConfiguration);
    }
    /**
     * @return {?}
     */
    updateMaterialSelect() {
        this.initMaterialSelect();
        if (this.filledIn) {
            this.initFilledIn();
        }
        this.handleDOMEvents();
        // wait for materialize select to be initialized
        // /!\ race condition warning /!\
        setTimeout(() => this.update.emit());
    }
}
MzSelectDirective.decorators = [
    { type: Directive, args: [{
                selector: 'select[mzSelect], select[mz-select]',
            },] },
];
/** @nocollapse */
MzSelectDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: ChangeDetectorRef, },
    { type: Renderer, },
];
MzSelectDirective.propDecorators = {
    "id": [{ type: Input },],
    "disabled": [{ type: Input },],
    "placeholder": [{ type: Input },],
    "label": [{ type: Input },],
    "filledIn": [{ type: Input },],
    "update": [{ type: Output },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzSelectContainerComponent {
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.initControlSubscription();
        this.initSelectSubscription();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.removeControlSubscription();
        this.removeSelectSubscription();
    }
    /**
     * @return {?}
     */
    initControlSubscription() {
        if (this.ngControl) {
            this.mzSelectDirective.disabled = this.ngControl.control.disabled;
            this.statusChangesSubscription = this.ngControl.control.statusChanges.subscribe((status) => {
                // to handle enabling/disabling formControl
                const /** @type {?} */ disabled = status === 'DISABLED';
                if (disabled !== this.mzSelectDirective.disabled) {
                    this.mzSelectDirective.disabled = disabled;
                    this.mzSelectDirective.handleDisabled();
                }
            });
            this.selectValueSubscription = this.ngControl.valueChanges.subscribe((value) => {
                // to synchronize input and select when value changes programmatically
                const /** @type {?} */ isDropdownOpen = this.mzSelectDirective.inputElement.hasClass('active');
                const /** @type {?} */ inputValue = this.mzSelectDirective.inputElement.val();
                const /** @type {?} */ options = this.mzSelectDirective.selectElement.children('option');
                const /** @type {?} */ selectedOptions = options.filter('option:selected').toArray();
                const /** @type {?} */ disabledOptions = options.filter(':disabled').toArray();
                const /** @type {?} */ selectedOptionText = selectedOptions.length === 0
                    ? disabledOptions.map(option => option.textContent)[0]
                    : selectedOptions.map(option => option.textContent).join(', ');
                if (inputValue !== selectedOptionText && !isDropdownOpen) {
                    this.mzSelectDirective.updateMaterialSelect();
                }
            });
        }
    }
    /**
     * @return {?}
     */
    initSelectSubscription() {
        if (this.mzSelectDirective) {
            this.mzSelectDirective.update
                .subscribe(() => this.registerOnBlur())
                .next();
        }
    }
    /**
     * @return {?}
     */
    registerOnBlur() {
        this.mzSelectDirective.inputElement.on('blur', () => {
            if (this.ngControl) {
                this.ngControl.control.markAsTouched();
            }
            if (this.mzValidationComponent) {
                this.mzValidationComponent.setValidationState();
            }
        });
    }
    /**
     * @return {?}
     */
    removeControlSubscription() {
        if (this.mzSelectDirective) {
            this.mzSelectDirective.update.unsubscribe();
            this.mzSelectDirective.inputElement.off();
        }
    }
    /**
     * @return {?}
     */
    removeSelectSubscription() {
        if (this.statusChangesSubscription) {
            this.statusChangesSubscription.unsubscribe();
        }
        if (this.selectValueSubscription) {
            this.selectValueSubscription.unsubscribe();
        }
    }
}
MzSelectContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-select-container',
                template: `<div
  class="input-field"
  [class.inline]="inline"
>
  <ng-content></ng-content>
</div>`,
                styles: [`.input-field:not(.inline){display:block}/deep/ .input-field .dropdown-content [type=checkbox]+label{top:-11px}`],
            },] },
];
/** @nocollapse */
MzSelectContainerComponent.propDecorators = {
    "inline": [{ type: Input },],
    "mzSelectDirective": [{ type: ContentChild, args: [MzSelectDirective,] },],
    "mzValidationComponent": [{ type: ContentChild, args: [MzValidationComponent,] },],
    "ngControl": [{ type: ContentChild, args: [NgControl,] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzSelectModule {
}
MzSelectModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    MzSelectDirective,
                    MzSelectContainerComponent,
                ],
                exports: [
                    MzSelectDirective,
                    MzSelectContainerComponent,
                ],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzSidenavCollapsibleHeaderComponent extends MzRemoveComponentHost {
}
MzSidenavCollapsibleHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-sidenav-collapsible-header',
                template: `<a class="collapsible-header waves-effect"><ng-content></ng-content></a>`,
                styles: [``],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzSidenavCollapsibleComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} renderer
     */
    constructor(changeDetectorRef, renderer) {
        this.changeDetectorRef = changeDetectorRef;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.initCollapsible();
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
        // need setTimeout otherwise loading directly on the page cause an error
        setTimeout(() => this.renderer.invokeElementMethod($(this.collapsible.nativeElement), 'collapsible', [options]));
        this.changeDetectorRef.detectChanges();
    }
}
MzSidenavCollapsibleComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-sidenav-collapsible',
                template: `<li>
  <ul #collapsible class="collapsible collapsible-accordion">
    <li>
      <ng-content select="mz-sidenav-collapsible-header"></ng-content>
      <div class="collapsible-body">
        <ul>
          <ng-content select="mz-sidenav-collapsible-content"></ng-content>
        </ul>
      </div>
    </li>
  </ul>
</li>`,
                styles: [`:host /deep/ .collapsible-header{padding:0 32px}:host /deep/ .collapsible-header i{color:rgba(0,0,0,.54)}:host /deep/ .collapsible-body li a{font-weight:initial}`],
            },] },
];
/** @nocollapse */
MzSidenavCollapsibleComponent.ctorParameters = () => [
    { type: ChangeDetectorRef, },
    { type: Renderer, },
];
MzSidenavCollapsibleComponent.propDecorators = {
    "onClose": [{ type: Input },],
    "onOpen": [{ type: Input },],
    "collapsible": [{ type: ViewChild, args: ['collapsible',] },],
    "header": [{ type: ContentChild, args: [MzSidenavCollapsibleHeaderComponent,] },],
};
class MzSidenavCollapsibleContentDirective {
}
MzSidenavCollapsibleContentDirective.decorators = [
    { type: Directive, args: [{ selector: 'mz-sidenav-collapsible-content' },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzSidenavDividerComponent {
}
MzSidenavDividerComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-sidenav-divider',
                template: `<li>
  <div class="divider"></div>
</li>`,
                styles: [`.divider{margin-bottom:8px}`],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzSidenavHeaderComponent {
}
MzSidenavHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-sidenav-header',
                template: `<li class="sidenav-header">
  <ng-content></ng-content>
</li>`,
                styles: [`.sidenav-header{margin-bottom:8px}`],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzSidenavLinkComponent {
}
MzSidenavLinkComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-sidenav-link',
                template: `<li
  [class.active]="active"
>
  <ng-content></ng-content>
</li>
`,
                styles: [`:host /deep/ a[class*=mdi-]::before{color:rgba(0,0,0,.54);margin:-1px 32px 0 0;vertical-align:middle}:host /deep/ a i,:host /deep/ a i.material-icons,:host /deep/ a i[class*=mdi-]{margin-top:-1px}:host /deep/ a i.material-icons::before,:host /deep/ a i::before,:host /deep/ a i[class*=mdi-]::before{vertical-align:middle}`],
                encapsulation: ViewEncapsulation.Emulated,
            },] },
];
/** @nocollapse */
MzSidenavLinkComponent.propDecorators = {
    "active": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzSidenavSubheaderComponent {
}
MzSidenavSubheaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-sidenav-subheader',
                template: `<li>
  <a class="subheader">
    <ng-content></ng-content>
  </a>
</li>`,
                styles: [``],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzSidenavComponent {
    constructor() {
        this._opened = false;
    }
    /**
     * @return {?}
     */
    get opened() { return this._opened; }
    /**
     * @param {?} value
     * @return {?}
     */
    set opened(value) {
        this._opened = value;
        this.collapseButton.sideNav(this._opened ? 'show' : 'hide');
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.initCollapseButton();
        this.initCollapsibleLinks();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.collapseButton.sideNav('destroy');
    }
    /**
     * @return {?}
     */
    initCollapseButton() {
        // fake button if no collapseButtonId is provided
        this.collapseButton = this.collapseButtonId
            ? $(`#${this.collapseButtonId}`)
            : $(document.createElement('template'));
        // add data-activates to collapse button
        this.collapseButton.attr('data-activates', this.id);
        // extend onOpen function to update opened state
        const /** @type {?} */ onOpen = this.onOpen || (() => { });
        this.onOpen = () => {
            onOpen();
            this._opened = true;
        };
        // extend onClose function to update opened state
        const /** @type {?} */ onClose = this.onClose || (() => { });
        this.onClose = () => {
            onClose();
            this._opened = false;
        };
        // initialize sidenav
        this.collapseButton.sideNav({
            closeOnClick: this.closeOnClick || false,
            draggable: this.draggable != null ? this.draggable : true,
            edge: this.edge || 'left',
            menuWidth: isNaN(this.width) ? 300 : this.width,
            onClose: this.onClose,
            onOpen: this.onOpen,
        });
    }
    /**
     * @return {?}
     */
    initCollapsibleLinks() {
        // initialize collapsible elements
        $(`#${this.id} .collapsible`).collapsible();
    }
}
MzSidenavComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-sidenav',
                template: `<ul class="side-nav {{ backgroundClass }}"
  [attr.id]="id"
  [class.fixed]="fixed">
  <ng-content></ng-content>
</ul>`,
            },] },
];
/** @nocollapse */
MzSidenavComponent.propDecorators = {
    "backgroundClass": [{ type: Input },],
    "closeOnClick": [{ type: Input },],
    "collapseButtonId": [{ type: Input },],
    "draggable": [{ type: Input },],
    "edge": [{ type: Input },],
    "fixed": [{ type: Input },],
    "id": [{ type: Input },],
    "onClose": [{ type: Input },],
    "onOpen": [{ type: Input },],
    "width": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzSidenavModule {
}
MzSidenavModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    MzSidenavCollapsibleComponent,
                    MzSidenavCollapsibleContentDirective,
                    MzSidenavCollapsibleHeaderComponent,
                    MzSidenavComponent,
                    MzSidenavDividerComponent,
                    MzSidenavHeaderComponent,
                    MzSidenavLinkComponent,
                    MzSidenavSubheaderComponent,
                ],
                exports: [
                    MzSidenavCollapsibleComponent,
                    MzSidenavCollapsibleContentDirective,
                    MzSidenavCollapsibleHeaderComponent,
                    MzSidenavComponent,
                    MzSidenavDividerComponent,
                    MzSidenavHeaderComponent,
                    MzSidenavLinkComponent,
                    MzSidenavSubheaderComponent,
                ],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzSpinnerComponent {
}
MzSpinnerComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-spinner',
                template: ` <div class="preloader-wrapper active {{ size }}">

    <div
      class="spinner-layer"
      [class.spinner-red-only]="color === 'red'"
      [class.spinner-green-only]="color === 'green'"
      [class.spinner-blue-only]="color === 'blue'"
      [class.spinner-yellow-only]="color === 'yellow'">

      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>

      <div class="gap-patch">
        <div class="circle"></div>
      </div>

      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
  </div>`,
                styles: [``],
            },] },
];
/** @nocollapse */
MzSpinnerComponent.propDecorators = {
    "color": [{ type: Input },],
    "size": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzSpinnerModule {
}
MzSpinnerModule.decorators = [
    { type: NgModule, args: [{
                declarations: [MzSpinnerComponent],
                exports: [MzSpinnerComponent],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzSwitchDirective {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initElements();
        this.handleInputType();
    }
    /**
     * @return {?}
     */
    initElements() {
        this.switchElement = $(this.elementRef.nativeElement);
        this.switchContainerElement = $(this.elementRef.nativeElement).parent('label').parent('.switch');
        if (this.switchContainerElement.length === 0) {
            console.error('Input with mz-switch directive must be placed inside an [mz-switch-container] tag', this.switchElement);
            return;
        }
    }
    /**
     * @return {?}
     */
    handleInputType() {
        const /** @type {?} */ type = this.switchElement.attr('type');
        if (type !== 'checkbox') {
            this.renderer.setElementAttribute(this.switchElement[0], 'type', 'checkbox');
        }
    }
}
MzSwitchDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mzSwitch], [mz-switch]',
            },] },
];
/** @nocollapse */
MzSwitchDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer, },
];
MzSwitchDirective.propDecorators = {
    "off": [{ type: Input },],
    "on": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzSwitchContainerComponent {
}
MzSwitchContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-switch-container',
                template: `<div class="switch">
  <label>
    <span class="off">{{ mzSwitchDirective?.off }}</span>
    <ng-content></ng-content>
    <span class="lever"></span>
    <span class="on">{{ mzSwitchDirective?.on }}</span>
  </label>
</div>`,
                styles: [``],
            },] },
];
/** @nocollapse */
MzSwitchContainerComponent.propDecorators = {
    "mzSwitchDirective": [{ type: ContentChild, args: [MzSwitchDirective,] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzSwitchModule {
}
MzSwitchModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    MzSwitchDirective,
                    MzSwitchContainerComponent,
                ],
                exports: [
                    MzSwitchDirective,
                    MzSwitchContainerComponent,
                ],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzTabItemComponent {
    /**
     * @return {?}
     */
    get link() {
        return this.tabItemId ? this.tabItemId : this.label.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    }
}
MzTabItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-tab-item',
                template: `<div id="{{ link }}" class="{{ class }}">
  <ng-content></ng-content>
</div>`,
                styles: [``],
            },] },
];
/** @nocollapse */
MzTabItemComponent.propDecorators = {
    "active": [{ type: Input },],
    "class": [{ type: Input },],
    "disabled": [{ type: Input },],
    "href": [{ type: Input },],
    "label": [{ type: Input },],
    "tabItemId": [{ type: Input },],
    "target": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzTabComponent {
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.initTabs();
    }
    /**
     * @return {?}
     */
    initTabs() {
        const /** @type {?} */ options = {
            onShow: this.onShow,
            responsiveThreshold: this.responsiveThreshold,
            swipeable: this.swipeable,
        };
        $(this.tabs.nativeElement).tabs(options);
    }
    /**
     * @param {?} tabItemId
     * @return {?}
     */
    selectTab(tabItemId) {
        $(this.tabs.nativeElement).tabs('select_tab', tabItemId);
    }
}
MzTabComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-tab',
                template: `<ul #tabs
  class="tabs"
  [class.tabs-fixed-width]="fixedTabWidth">
  <li class="tab" [class.disabled]="tabItem.disabled" *ngFor="let tabItem of tabItems.toArray()">
    <a [class.active]="tabItem.active"
      href="{{ tabItem.href ? tabItem.href : '#' + tabItem.link }}" target="{{ tabItem.target }}">
      {{ tabItem.label }}
    </a>
  </li>
</ul>
<div>
  <ng-content select="mz-tab-item"></ng-content>
</div>`,
                styles: [``],
            },] },
];
/** @nocollapse */
MzTabComponent.propDecorators = {
    "fixedTabWidth": [{ type: Input },],
    "onShow": [{ type: Input },],
    "responsiveThreshold": [{ type: Input },],
    "swipeable": [{ type: Input },],
    "tabs": [{ type: ViewChild, args: ['tabs',] },],
    "tabItems": [{ type: ContentChildren, args: [MzTabItemComponent,] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzTabModule {
}
MzTabModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    MzTabComponent,
                    MzTabItemComponent,
                ],
                exports: [
                    MzTabComponent,
                    MzTabItemComponent,
                ],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzTextareaContainerComponent {
}
MzTextareaContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-textarea-container',
                template: `<div
  class="input-field"
  [class.inline]="inline"
>
  <ng-content></ng-content>
</div>`,
                styles: [`:host /deep/ textarea{display:block}.input-field:not(.inline){display:block}`],
            },] },
];
/** @nocollapse */
MzTextareaContainerComponent.propDecorators = {
    "inline": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzTextareaPrefixDirective {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.renderer.setElementClass(this.elementRef.nativeElement, 'prefix', true);
    }
}
MzTextareaPrefixDirective.decorators = [
    { type: Directive, args: [{
                selector: 'i[mzTextareaPrefix], i[mz-textarea-prefix]',
            },] },
];
/** @nocollapse */
MzTextareaPrefixDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzTextareaDirective extends HandlePropChanges {
    /**
     * @param {?} ngControl
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(ngControl, elementRef, renderer) {
        super();
        this.ngControl = ngControl;
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initHandlers();
        this.initElements();
        this.initTextareaSubscription();
        this.handleProperties();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.textareaValueSubscription) {
            this.textareaValueSubscription.unsubscribe();
        }
    }
    /**
     * @return {?}
     */
    initHandlers() {
        this.handlers = {
            label: () => this.handleLabel(),
            length: () => this.handleLength(),
            placeholder: () => this.handlePlaceholder(),
        };
    }
    /**
     * @return {?}
     */
    initElements() {
        this.textareaElement = $(this.elementRef.nativeElement);
        this.textareaContainerElement = $(this.elementRef.nativeElement).parent('.input-field');
        this.labelElement = this.createLabelElement();
        this.initTextarea();
    }
    /**
     * @return {?}
     */
    initTextarea() {
        this.renderer.setElementClass(this.textareaElement[0], 'materialize-textarea', true);
    }
    /**
     * @return {?}
     */
    initTextareaSubscription() {
        if (this.ngControl) {
            this.textareaValueSubscription = this.ngControl.valueChanges.subscribe(() => this.setLabelActive());
        }
    }
    /**
     * @return {?}
     */
    createLabelElement() {
        const /** @type {?} */ labelElement = document.createElement('label');
        labelElement.setAttribute('for', this.id);
        this.renderer.invokeElementMethod(this.textareaElement, 'after', [labelElement]);
        return $(labelElement);
    }
    /**
     * @return {?}
     */
    handleProperties() {
        if (this.textareaContainerElement.length === 0) {
            console.error('Textarea must be placed inside a [mz-textarea-container] tag', this.textareaElement);
            return;
        }
        super.executePropHandlers();
    }
    /**
     * @return {?}
     */
    handleLabel() {
        if (this.placeholder || this.textareaElement.val()) {
            this.renderer.setElementClass(this.labelElement[0], 'active', true);
        }
        this.renderer.invokeElementMethod(this.labelElement, 'text', [this.label]);
    }
    /**
     * @return {?}
     */
    handleLength() {
        const /** @type {?} */ length = this.length ? this.length.toString() : null;
        this.renderer.setElementAttribute(this.textareaElement[0], 'data-length', length);
        if (length) {
            this.setCharacterCount();
        }
        else {
            this.removeCharacterCount();
        }
    }
    /**
     * @return {?}
     */
    handlePlaceholder() {
        const /** @type {?} */ placeholder = !!this.placeholder ? this.placeholder : null;
        this.renderer.setElementAttribute(this.textareaElement[0], 'placeholder', placeholder);
        this.setLabelActive();
    }
    /**
     * @return {?}
     */
    setCharacterCount() {
        this.renderer.invokeElementMethod(this.textareaElement, 'characterCounter');
        // force validation
        // need setTimeout otherwise it wont trigger validation right away
        setTimeout(() => {
            this.renderer.invokeElementMethod(this.textareaElement, 'trigger', ['input']);
            this.renderer.invokeElementMethod(this.textareaElement, 'trigger', ['blur']);
        });
    }
    /**
     * @return {?}
     */
    setLabelActive() {
        // need setTimeout otherwise it wont make label float in some circonstances
        // for example: forcing validation for example, reseting form programmaticaly, ...
        setTimeout(() => {
            const /** @type {?} */ textareaValue = (/** @type {?} */ (this.textareaElement[0])).value;
            const /** @type {?} */ isActive = !!this.placeholder || !!textareaValue;
            this.renderer.setElementClass(this.labelElement[0], 'active', isActive);
        });
    }
    /**
     * @return {?}
     */
    removeCharacterCount() {
        this.renderer.invokeElementMethod(this.textareaElement.siblings('.character-counter'), 'remove');
        this.removeValidationClasses();
    }
    /**
     * @return {?}
     */
    removeValidationClasses() {
        // reset valid/invalid state
        this.renderer.setElementClass(this.textareaElement[0], 'invalid', false);
        this.renderer.setElementClass(this.textareaElement[0], 'valid', false);
    }
}
MzTextareaDirective.decorators = [
    { type: Directive, args: [{
                selector: 'textarea[mzTextarea], textarea[mz-textarea]',
            },] },
];
/** @nocollapse */
MzTextareaDirective.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional },] },
    { type: ElementRef, },
    { type: Renderer, },
];
MzTextareaDirective.propDecorators = {
    "id": [{ type: Input },],
    "placeholder": [{ type: Input },],
    "label": [{ type: Input },],
    "length": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzTextareaModule {
}
MzTextareaModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    MzTextareaContainerComponent,
                    MzTextareaDirective,
                    MzTextareaPrefixDirective,
                ],
                exports: [
                    MzTextareaContainerComponent,
                    MzTextareaDirective,
                    MzTextareaPrefixDirective,
                ],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzTimepickerContainerComponent {
}
MzTimepickerContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-timepicker-container',
                template: `<div
  class="input-field"
  [class.inline]="inline"
>
  <ng-content></ng-content>
</div>`,
                styles: [``],
            },] },
];
/** @nocollapse */
MzTimepickerContainerComponent.propDecorators = {
    "inline": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzTimepickerDirective extends HandlePropChanges {
    /**
     * @param {?} ngControl
     * @param {?} changeDetectorRef
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} zone
     */
    constructor(ngControl, changeDetectorRef, elementRef, renderer, zone) {
        super();
        this.ngControl = ngControl;
        this.changeDetectorRef = changeDetectorRef;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.zone = zone;
        // materialize uses ClockPicker to create the timepicker
        // complete list of options is available at the following address
        // https://github.com/weareoutman/clockpicker#options
        this.options = {};
        this.stopChangePropagation = false;
    }
    /**
     * @return {?}
     */
    get clockpicker() {
        return $('.clockpicker');
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initHandlers();
        this.initElements();
        this.initTimepicker();
        this.handleProperties();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // remove event handlers
        this.inputElement.off();
        // remove clockpicker added to body by default
        this.clockpicker.remove();
    }
    /**
     * @return {?}
     */
    initHandlers() {
        this.handlers = {
            label: () => this.handleLabel(),
            placeholder: () => this.handlePlaceholder(),
        };
    }
    /**
     * @return {?}
     */
    initElements() {
        this.inputContainerElement = /** @type {?} */ ($(this.elementRef.nativeElement).parent('.input-field'));
        this.inputElement = /** @type {?} */ ($(this.elementRef.nativeElement));
        this.labelElement = /** @type {?} */ (this.createLabelElement());
    }
    /**
     * @return {?}
     */
    initTimepicker() {
        // append clockpicker to body by default
        if (!this.options.container) {
            this.options.container = 'body';
        }
        // extend afterHide callback to set label active
        const /** @type {?} */ afterHide = this.options && this.options.afterHide || (() => { });
        this.options = Object.assign({}, this.options, {
            afterHide: () => {
                afterHide();
                this.setLabelActive();
            },
        });
        this.renderer.invokeElementMethod(this.inputElement, 'pickatime', [this.options]);
        if (this.ngControl) {
            // set ngControl value according to selected time in timepicker
            this.inputElement.on('change', (event) => {
                this.ngControl.control.setValue(event.target.value);
                // mark for change detection
                // fix form validation with ChangeDetectionStrategy.OnPush
                this.changeDetectorRef.markForCheck();
            });
        }
    }
    /**
     * @return {?}
     */
    createLabelElement() {
        const /** @type {?} */ labelElement = document.createElement('label');
        labelElement.setAttribute('for', this.id);
        this.renderer.invokeElementMethod(this.inputElement, 'after', [labelElement]);
        return $(labelElement);
    }
    /**
     * @return {?}
     */
    handleProperties() {
        if (this.inputContainerElement.length === 0) {
            console.error('Input with mz-timepicker directive must be placed inside an [mz-timepicker-container] tag', this.inputElement);
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
    handlePlaceholder() {
        const /** @type {?} */ placeholder = !!this.placeholder ? this.placeholder : null;
        this.renderer.setElementAttribute(this.inputElement[0], 'placeholder', placeholder);
        // fix issue in IE where having a placeholder on input make control dirty and trigger validation
        // on page load... note that it still trigger validation on focus and would need a better fix
        // issue : https://github.com/angular/angular/issues/15299
        // workaround : https://stackoverflow.com/a/44967245/5583283
        if (this.ngControl) {
            this.zone.runOutsideAngular(() => {
                setTimeout(() => this.ngControl.control.markAsPristine());
            });
        }
        this.setLabelActive();
    }
    /**
     * @return {?}
     */
    setLabelActive() {
        // need wait for zone to be stable otherwise it wont make label
        // float in some circonstances (clearing value programmatically for example)
        this.zone.onStable
            .pipe(first())
            .subscribe(() => {
            const /** @type {?} */ inputValue = this.inputElement[0].value;
            const /** @type {?} */ isActive = !!this.placeholder || !!inputValue;
            this.renderer.setElementClass(this.labelElement[0], 'active', isActive);
        });
    }
}
MzTimepickerDirective.decorators = [
    { type: Directive, args: [{
                selector: 'input[mzTimepicker], input[mz-timepicker]',
            },] },
];
/** @nocollapse */
MzTimepickerDirective.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional },] },
    { type: ChangeDetectorRef, },
    { type: ElementRef, },
    { type: Renderer, },
    { type: NgZone, },
];
MzTimepickerDirective.propDecorators = {
    "true": [{ type: HostBinding, args: ['class.timepicker',] },],
    "id": [{ type: Input },],
    "placeholder": [{ type: Input },],
    "label": [{ type: Input },],
    "options": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzTimepickerModule {
}
MzTimepickerModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    MzTimepickerDirective,
                    MzTimepickerContainerComponent,
                ],
                exports: [
                    MzTimepickerDirective,
                    MzTimepickerContainerComponent,
                ],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzToastService {
    /**
     * @param {?} message
     * @param {?} displayLength
     * @param {?=} className
     * @param {?=} completeCallback
     * @return {?}
     */
    show(message, displayLength, className, completeCallback) {
        Materialize.toast(message, displayLength, className, completeCallback);
    }
}
MzToastService.decorators = [
    { type: Injectable },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzToastModule {
}
MzToastModule.decorators = [
    { type: NgModule, args: [{
                providers: [MzToastService],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzTooltipDirective {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initElements();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.elementRef.nativeElement.getAttribute('type') === 'checkbox') {
            this.targetElement = $(this.elementRef.nativeElement).next('label');
        }
        this.initTooltip();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.targetElement) {
            this.initTooltip();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.renderer.invokeElementMethod(this.targetElement, 'tooltip', ['remove']);
    }
    /**
     * @return {?}
     */
    initElements() {
        this.targetElement = $(this.elementRef.nativeElement);
    }
    /**
     * @return {?}
     */
    initTooltip() {
        const /** @type {?} */ tooltipOptions = {
            delay: isNaN(this.delay) || this.delay == null ? 350 : this.delay,
            html: this.html || false,
            position: this.position || 'bottom',
            tooltip: this.tooltip,
        };
        this.renderer.invokeElementMethod(this.targetElement, 'tooltip', [tooltipOptions]);
    }
}
MzTooltipDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mzTooltip], [mz-tooltip]',
            },] },
];
/** @nocollapse */
MzTooltipDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer, },
];
MzTooltipDirective.propDecorators = {
    "delay": [{ type: Input },],
    "html": [{ type: Input },],
    "position": [{ type: Input },],
    "tooltip": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzTooltipModule {
}
MzTooltipModule.decorators = [
    { type: NgModule, args: [{
                declarations: [MzTooltipDirective],
                exports: [MzTooltipDirective],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MzValidationModule {
}
MzValidationModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    MzErrorMessageComponent,
                    MzValidationComponent,
                ],
                entryComponents: [MzErrorMessageComponent],
                exports: [
                    MzErrorMessageComponent,
                    MzValidationComponent,
                ],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ MZ_MODULES = [
    CommonModule,
    FormsModule,
    MzBadgeModule,
    MzButtonModule,
    MzCardModule,
    MzCheckboxModule,
    MzChipModule,
    MzCollapsibleModule,
    MzCollectionModule,
    MzDatepickerModule,
    MzDropdownModule,
    MzFeatureDiscoveryModule,
    MzIconModule,
    MzIconMdiModule,
    MzInjectionModule,
    MzInputModule,
    MzMediaModule,
    MzModalModule,
    MzNavbarModule,
    MzPaginationModule,
    MzParallaxModule,
    MzProgressModule,
    MzRadioButtonModule,
    MzSelectModule,
    MzSidenavModule,
    MzSpinnerModule,
    MzSwitchModule,
    MzTabModule,
    MzTextareaModule,
    MzTimepickerModule,
    MzToastModule,
    MzTooltipModule,
    MzValidationModule,
];
/**
 * @deprecated
 * Import specific component modules instead (MzBadgeModule, MzCardModule, etc)
 * https://github.com/sherweb/ng2-materialize#materializemodule-deprecated
 */
class MaterializeModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: MaterializeModule,
        };
    }
}
MaterializeModule.decorators = [
    { type: NgModule, args: [{
                imports: MZ_MODULES,
                exports: MZ_MODULES,
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @abstract
 */
class MatchOperator {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @abstract
 */
class Media {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @abstract
 */
class MediaBreakpoint {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @abstract
 */
class MzBaseModal {
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.modalComponent.openModal();
    }
}
MzBaseModal.propDecorators = {
    "modalComponent": [{ type: ViewChild, args: [MzModalComponent,] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { MzBadgeComponent, MzBadgeModule, MzButtonDirective, MzButtonModule, MzHalfwayFabDirective, MzHalfwayFabModule, MzCardComponent, MzCardImageDirective, MzCardImageTitleDirective, MzCardTitleDirective, MzCardContentDirective, MzCardActionDirective, MzCardModule, MzCheckboxContainerComponent, MzCheckboxDirective, MzCheckboxModule, MzChipInputComponent, MzChipComponent, MzChipModule, MzCollapsibleItemComponent, MzCollapsibleItemBodyDirective, MzCollapsibleItemHeaderDirective, MzCollapsibleComponent, MzCollapsibleModule, MzAvatarDirective, MzCollectionHeaderComponent, MzCollectionItemComponent, MzCollectionLinkDirective, MzCollectionComponent, MzCollectionModule, MzSecondaryContentDirective, MzDatepickerContainerComponent, MzDatepickerDirective, MzDatepickerModule, MzDropdownDividerComponent, MzDropdownItemComponent, MzDropdownComponent, MzDropdownModule, MzFeatureDiscoveryComponent, MzFeatureDiscoveryModule, MzIconDirective, MzIconModule, MzIconMdiDirective, MzIconMdiModule, MzInputContainerComponent, MzInputPrefixDirective, MzInputDirective, MzInputModule, MaterializeModule, MzMediaModule, MzMediaService, MatchOperator, Media, MediaBreakpoint, MzBaseModal, MzModalCloseDirective, MzModalComponent, MzModalHeaderDirective, MzModalContentDirective, MzModalFooterDirective, MzModalModule, MzModalService, MzNavbarComponent, MzNavbarModule, MzNavbarItemComponent, MzNavbarItemContainerComponent, MzPaginationPageButtonComponent, MzPaginationComponent, MzPaginationModule, MzParallaxComponent, MzParallaxModule, MzProgressComponent, MzProgressModule, MzRadioButtonContainerComponent, MzRadioButtonDirective, MzRadioButtonModule, MzSelectContainerComponent, MzSelectDirective, MzSelectModule, Handlers, HandlePropChanges, MzInjectionModule, MzInjectionService, MzRemoveComponentHost, MzSidenavComponent, MzSidenavModule, MzSidenavCollapsibleHeaderComponent, MzSidenavCollapsibleComponent, MzSidenavCollapsibleContentDirective, MzSidenavDividerComponent, MzSidenavHeaderComponent, MzSidenavLinkComponent, MzSidenavSubheaderComponent, MzSpinnerComponent, MzSpinnerModule, MzSwitchContainerComponent, MzSwitchDirective, MzSwitchModule, MzTabItemComponent, MzTabComponent, MzTabModule, MzTextareaContainerComponent, MzTextareaPrefixDirective, MzTextareaDirective, MzTextareaModule, MzTimepickerContainerComponent, MzTimepickerDirective, MzTimepickerModule, MzToastService, MzToastModule, MzTooltipDirective, MzTooltipModule, MzErrorMessageComponent, ErrorMessageResource, MzValidationComponent, MzValidationModule, HandlePropChanges as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hdGVyaWFsaXplLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvc3JjL2JhZGdlL2JhZGdlLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW1hdGVyaWFsaXplL3NyYy9iYWRnZS9iYWRnZS5tb2R1bGUudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvc2hhcmVkL2hhbmRsZS1wcm9wLWNoYW5nZXMudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvc2hhcmVkL2luamVjdGlvbi9pbmplY3Rpb24uc2VydmljZS50cyIsIm5nOi8vbmd4LW1hdGVyaWFsaXplL3NyYy9zaGFyZWQvaW5qZWN0aW9uL2luamVjdGlvbi5tb2R1bGUudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvc2hhcmVkL3JlbW92ZS1jb21wb25lbnQtaG9zdC9yZW1vdmUtY29tcG9uZW50LWhvc3QudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvYnV0dG9uL2J1dHRvbi5kaXJlY3RpdmUudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvYnV0dG9uL2J1dHRvbi5tb2R1bGUudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvY2FyZC9oYWxmd2F5LWZhYi9oYWxmd2F5LWZhYi5kaXJlY3RpdmUudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvY2FyZC9oYWxmd2F5LWZhYi9oYWxmd2F5LWZhYi5tb2R1bGUudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvY2FyZC9jYXJkLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW1hdGVyaWFsaXplL3NyYy9jYXJkL2NhcmQubW9kdWxlLnRzIiwibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvc3JjL2NoZWNrYm94L2NoZWNrYm94LWNvbnRhaW5lci9jaGVja2JveC1jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvc3JjL2NoZWNrYm94L2NoZWNrYm94LmRpcmVjdGl2ZS50cyIsIm5nOi8vbmd4LW1hdGVyaWFsaXplL3NyYy9jaGVja2JveC9jaGVja2JveC5tb2R1bGUudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvY2hpcC9jaGlwLWlucHV0L2NoaXAtaW5wdXQuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvc3JjL2NoaXAvY2hpcC5jb21wb25lbnQudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvY2hpcC9jaGlwLm1vZHVsZS50cyIsIm5nOi8vbmd4LW1hdGVyaWFsaXplL3NyYy9jb2xsYXBzaWJsZS9jb2xsYXBzaWJsZS1pdGVtL2NvbGxhcHNpYmxlLWl0ZW0uY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvc3JjL2NvbGxhcHNpYmxlL2NvbGxhcHNpYmxlLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW1hdGVyaWFsaXplL3NyYy9jb2xsYXBzaWJsZS9jb2xsYXBzaWJsZS5tb2R1bGUudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvY29sbGVjdGlvbi9hdmF0YXIvYXZhdGFyLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmd4LW1hdGVyaWFsaXplL3NyYy9jb2xsZWN0aW9uL2NvbGxlY3Rpb24taGVhZGVyL2NvbGxlY3Rpb24taGVhZGVyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW1hdGVyaWFsaXplL3NyYy9jb2xsZWN0aW9uL2NvbGxlY3Rpb24taXRlbS9jb2xsZWN0aW9uLWl0ZW0uY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvc3JjL2NvbGxlY3Rpb24vY29sbGVjdGlvbi1saW5rL2NvbGxlY3Rpb24tbGluay5kaXJlY3RpdmUudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvY29sbGVjdGlvbi9jb2xsZWN0aW9uLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW1hdGVyaWFsaXplL3NyYy9jb2xsZWN0aW9uL3NlY29uZGFyeS1jb250ZW50L3NlY29uZGFyeS1jb250ZW50LmRpcmVjdGl2ZS50cyIsIm5nOi8vbmd4LW1hdGVyaWFsaXplL3NyYy9jb2xsZWN0aW9uL2NvbGxlY3Rpb24ubW9kdWxlLnRzIiwibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvc3JjL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1jb250YWluZXIvZGF0ZXBpY2tlci1jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvc3JjL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci5kaXJlY3RpdmUudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvZGF0ZXBpY2tlci9kYXRlcGlja2VyLm1vZHVsZS50cyIsIm5nOi8vbmd4LW1hdGVyaWFsaXplL3NyYy9kcm9wZG93bi9kcm9wZG93bi1kaXZpZGVyL2Ryb3Bkb3duLWRpdmlkZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvc3JjL2Ryb3Bkb3duL2Ryb3Bkb3duLWl0ZW0vZHJvcGRvd24taXRlbS5jb21wb25lbnQudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvZHJvcGRvd24vZHJvcGRvd24uY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvc3JjL2Ryb3Bkb3duL2Ryb3Bkb3duLm1vZHVsZS50cyIsIm5nOi8vbmd4LW1hdGVyaWFsaXplL3NyYy9mZWF0dXJlLWRpc2NvdmVyeS9mZWF0dXJlLWRpc2NvdmVyeS5jb21wb25lbnQudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvZmVhdHVyZS1kaXNjb3ZlcnkvZmVhdHVyZS1kaXNjb3ZlcnkubW9kdWxlLnRzIiwibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvc3JjL2ljb24vaWNvbi5kaXJlY3RpdmUudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvaWNvbi9pY29uLm1vZHVsZS50cyIsIm5nOi8vbmd4LW1hdGVyaWFsaXplL3NyYy9pY29uLW1kaS9pY29uLW1kaS5kaXJlY3RpdmUudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvaWNvbi1tZGkvaWNvbi1tZGkubW9kdWxlLnRzIiwibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvc3JjL2lucHV0L2lucHV0LWNvbnRhaW5lci9pbnB1dC1jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvc3JjL2lucHV0L2lucHV0LXByZWZpeC9pbnB1dC1wcmVmaXguZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvc3JjL2lucHV0L2lucHV0LmRpcmVjdGl2ZS50cyIsIm5nOi8vbmd4LW1hdGVyaWFsaXplL3NyYy9pbnB1dC9pbnB1dC5tb2R1bGUudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvbWVkaWEvbWVkaWEuc2VydmljZS50cyIsIm5nOi8vbmd4LW1hdGVyaWFsaXplL3NyYy9tZWRpYS9tZWRpYS5tb2R1bGUudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvbW9kYWwvbW9kYWwuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvc3JjL21vZGFsL21vZGFsLWNsb3NlL21vZGFsLWNsb3NlLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmd4LW1hdGVyaWFsaXplL3NyYy9tb2RhbC9zZXJ2aWNlcy9tb2RhbC5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvc3JjL21vZGFsL21vZGFsLm1vZHVsZS50cyIsIm5nOi8vbmd4LW1hdGVyaWFsaXplL3NyYy9uYXZiYXIvbmF2YmFyLWl0ZW0tY29udGFpbmVyL25hdmJhci1pdGVtLWNvbnRhaW5lci5jb21wb25lbnQudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvbmF2YmFyL25hdmJhci1pdGVtL25hdmJhci1pdGVtLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW1hdGVyaWFsaXplL3NyYy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW1hdGVyaWFsaXplL3NyYy9uYXZiYXIvbmF2YmFyLm1vZHVsZS50cyIsIm5nOi8vbmd4LW1hdGVyaWFsaXplL3NyYy9wYWdpbmF0aW9uL3BhZ2luYXRpb24tcGFnZS1idXR0b24vcGFnaW5hdGlvbi1wYWdlLWJ1dHRvbi5jb21wb25lbnQudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW1hdGVyaWFsaXplL3NyYy9wYWdpbmF0aW9uL3BhZ2luYXRpb24ubW9kdWxlLnRzIiwibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvc3JjL3BhcmFsbGF4L3BhcmFsbGF4LmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW1hdGVyaWFsaXplL3NyYy9wYXJhbGxheC9wYXJhbGxheC5tb2R1bGUudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvcHJvZ3Jlc3MvcHJvZ3Jlc3MuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvc3JjL3Byb2dyZXNzL3Byb2dyZXNzLm1vZHVsZS50cyIsIm5nOi8vbmd4LW1hdGVyaWFsaXplL3NyYy9yYWRpby1idXR0b24vcmFkaW8tYnV0dG9uLWNvbnRhaW5lci9yYWRpby1idXR0b24tY29udGFpbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW1hdGVyaWFsaXplL3NyYy9yYWRpby1idXR0b24vcmFkaW8tYnV0dG9uLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmd4LW1hdGVyaWFsaXplL3NyYy9yYWRpby1idXR0b24vcmFkaW8tYnV0dG9uLm1vZHVsZS50cyIsIm5nOi8vbmd4LW1hdGVyaWFsaXplL3NyYy92YWxpZGF0aW9uL2Vycm9yLW1lc3NhZ2UvbW9kZWxzL2Vycm9yLW1lc3NhZ2UudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvdmFsaWRhdGlvbi9lcnJvci1tZXNzYWdlL2Vycm9yLW1lc3NhZ2UuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvc3JjL3ZhbGlkYXRpb24vdmFsaWRhdGlvbi5jb21wb25lbnQudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvc2VsZWN0L3NlbGVjdC5kaXJlY3RpdmUudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvc2VsZWN0L3NlbGVjdC1jb250YWluZXIvc2VsZWN0LWNvbnRhaW5lci5jb21wb25lbnQudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvc2VsZWN0L3NlbGVjdC5tb2R1bGUudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvc2lkZW5hdi9zaWRlbmF2LWNvbGxhcHNpYmxlL3NpZGVuYXYtY29sbGFwc2libGUtaGVhZGVyL3NpZGVuYXYtY29sbGFwc2libGUtaGVhZGVyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW1hdGVyaWFsaXplL3NyYy9zaWRlbmF2L3NpZGVuYXYtY29sbGFwc2libGUvc2lkZW5hdi1jb2xsYXBzaWJsZS5jb21wb25lbnQudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvc2lkZW5hdi9zaWRlbmF2LWRpdmlkZXIvc2lkZW5hdi1kaXZpZGVyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW1hdGVyaWFsaXplL3NyYy9zaWRlbmF2L3NpZGVuYXYtaGVhZGVyL3NpZGVuYXYtaGVhZGVyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW1hdGVyaWFsaXplL3NyYy9zaWRlbmF2L3NpZGVuYXYtbGluay9zaWRlbmF2LWxpbmsuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvc3JjL3NpZGVuYXYvc2lkZW5hdi1zdWJoZWFkZXIvc2lkZW5hdi1zdWJoZWFkZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvc3JjL3NpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvc2lkZW5hdi9zaWRlbmF2Lm1vZHVsZS50cyIsIm5nOi8vbmd4LW1hdGVyaWFsaXplL3NyYy9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvc3JjL3NwaW5uZXIvc3Bpbm5lci5tb2R1bGUudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvc3dpdGNoL3N3aXRjaC5kaXJlY3RpdmUudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvc3dpdGNoL3N3aXRjaC1jb250YWluZXIvc3dpdGNoLWNvbnRhaW5lci5jb21wb25lbnQudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvc3dpdGNoL3N3aXRjaC5tb2R1bGUudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvdGFiL3RhYi1pdGVtL3RhYi1pdGVtLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW1hdGVyaWFsaXplL3NyYy90YWIvdGFiLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW1hdGVyaWFsaXplL3NyYy90YWIvdGFiLm1vZHVsZS50cyIsIm5nOi8vbmd4LW1hdGVyaWFsaXplL3NyYy90ZXh0YXJlYS90ZXh0YXJlYS1jb250YWluZXIvdGV4dGFyZWEtY29udGFpbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW1hdGVyaWFsaXplL3NyYy90ZXh0YXJlYS90ZXh0YXJlYS1wcmVmaXgvdGV4dGFyZWEtcHJlZml4LmRpcmVjdGl2ZS50cyIsIm5nOi8vbmd4LW1hdGVyaWFsaXplL3NyYy90ZXh0YXJlYS90ZXh0YXJlYS5kaXJlY3RpdmUudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvdGV4dGFyZWEvdGV4dGFyZWEubW9kdWxlLnRzIiwibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvc3JjL3RpbWVwaWNrZXIvdGltZXBpY2tlci1jb250YWluZXIvdGltZXBpY2tlci1jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvc3JjL3RpbWVwaWNrZXIvdGltZXBpY2tlci5kaXJlY3RpdmUudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvdGltZXBpY2tlci90aW1lcGlja2VyLm1vZHVsZS50cyIsIm5nOi8vbmd4LW1hdGVyaWFsaXplL3NyYy90b2FzdC9zZXJ2aWNlcy90b2FzdC5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvc3JjL3RvYXN0L3RvYXN0Lm1vZHVsZS50cyIsIm5nOi8vbmd4LW1hdGVyaWFsaXplL3NyYy90b29sdGlwL3Rvb2x0aXAuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvc3JjL3Rvb2x0aXAvdG9vbHRpcC5tb2R1bGUudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvdmFsaWRhdGlvbi92YWxpZGF0aW9uLm1vZHVsZS50cyIsIm5nOi8vbmd4LW1hdGVyaWFsaXplL3NyYy9tYXRlcmlhbGl6ZS5tb2R1bGUudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvbWVkaWEvbW9kZWxzL21hdGNoT3BlcmF0b3IudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvbWVkaWEvbW9kZWxzL21lZGlhLnRzIiwibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvc3JjL21lZGlhL21vZGVscy9tZWRpYUJyZWFrcG9pbnQudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvbW9kYWwvbW9kYWwtYmFzZS9tb2RhbC1iYXNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXotYmFkZ2UnLFxyXG4gIHRlbXBsYXRlOiBgPHNwYW4gI2JhZGdlXHJcbiAgY2xhc3M9XCJiYWRnZSB7eyBiYWRnZUNsYXNzIH19XCJcclxuICBbY2xhc3MubmV3XT1cIm5ldyB8fCAhIWJhZGdlQ2xhc3NcIlxyXG4gIFthdHRyLmRhdGEtYmFkZ2UtY2FwdGlvbl09XCJjYXB0aW9uXCI+XHJcbiAge3sgdmFsdWUgfX1cclxuPC9zcGFuPlxyXG5gLFxyXG4gIHN0eWxlczogW2BgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16QmFkZ2VDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGJhZGdlQ2xhc3M6IHN0cmluZztcclxuICBASW5wdXQoKSBjYXB0aW9uOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbmV3OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHZhbHVlOiBudW1iZXI7XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE16QmFkZ2VDb21wb25lbnQgfSBmcm9tICcuL2JhZGdlLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW016QmFkZ2VDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtNekJhZGdlQ29tcG9uZW50XSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16QmFkZ2VNb2R1bGUgeyB9XHJcbiIsImltcG9ydCB7IE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSGFuZGxlcnMge1xyXG4gICBbcHJvcGVydHlOYW1lOiBzdHJpbmddOiBGdW5jdGlvbjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEhhbmRsZVByb3BDaGFuZ2VzIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBoYW5kbGVyczogSGFuZGxlcnM7XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGlmICh0aGlzLmhhbmRsZXJzKSB7XHJcbiAgICAgIHRoaXMuZXhlY3V0ZVByb3BIYW5kbGVycyhjaGFuZ2VzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV4ZWN1dGVQcm9wSGFuZGxlcnMocHJvcHM6IEhhbmRsZXJzIHwgU2ltcGxlQ2hhbmdlcyA9IHRoaXMuaGFuZGxlcnMpIHtcclxuICAgIE9iamVjdC5rZXlzKHByb3BzKS5mb3JFYWNoKHByb3AgPT4ge1xyXG4gICAgICBpZiAodGhpcy5oYW5kbGVyc1twcm9wXSkge1xyXG4gICAgICAgIGNvbnN0IHByZXZpb3VzVmFsdWUgPSAocHJvcHNbcHJvcF0gYXMgU2ltcGxlQ2hhbmdlKS5wcmV2aW91c1ZhbHVlO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlcnNbcHJvcF0ocHJldmlvdXNWYWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIEFwcGxpY2F0aW9uUmVmLFxyXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICBDb21wb25lbnRSZWYsXHJcbiAgRW1iZWRkZWRWaWV3UmVmLFxyXG4gIEluamVjdGFibGUsXHJcbiAgSW5qZWN0b3IsXHJcbiAgVHlwZSxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE16SW5qZWN0aW9uU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBjb250YWluZXI6IEVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBhcHBsaWNhdGlvblJlZjogQXBwbGljYXRpb25SZWYsXHJcbiAgICBwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFwcGVuZHMgYSBjb21wb25lbnQgdG8gYW4gYWRqYWNlbnQgbG9jYXRpb24uXHJcbiAgICovXHJcbiAgYXBwZW5kQ29tcG9uZW50PFQ+KFxyXG4gICAgY29tcG9uZW50Q2xhc3M6IFR5cGU8VD4sXHJcbiAgICBvcHRpb25zOiBhbnkgPSB7fSxcclxuICAgIGxvY2F0aW9uOiBFbGVtZW50ID0gdGhpcy5nZXRDb250YWluZXJFbGVtZW50KCksXHJcbiAgKTogQ29tcG9uZW50UmVmPFQ+IHtcclxuICAgIC8vIGluc3RhbnRpYXRlIGNvbXBvbmVudCB0byBsb2FkXHJcbiAgICBjb25zdCBjb21wb25lbnRGYWN0b3J5ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoY29tcG9uZW50Q2xhc3MpO1xyXG4gICAgY29uc3QgY29tcG9uZW50UmVmID0gY29tcG9uZW50RmFjdG9yeS5jcmVhdGUodGhpcy5pbmplY3Rvcik7XHJcblxyXG4gICAgLy8gcHJvamVjdCB0aGUgb3B0aW9ucyBwYXNzZWQgdG8gdGhlIGNvbXBvbmVudCBpbnN0YW5jZVxyXG4gICAgdGhpcy5wcm9qZWN0Q29tcG9uZW50SW5wdXRzKGNvbXBvbmVudFJlZiwgb3B0aW9ucyk7XHJcblxyXG4gICAgLy8gYXR0YWNoIHZpZXcgZm9yIGRpcnR5IGNoZWNraW5nXHJcbiAgICB0aGlzLmFwcGxpY2F0aW9uUmVmLmF0dGFjaFZpZXcoY29tcG9uZW50UmVmLmhvc3RWaWV3KTtcclxuXHJcbiAgICAvLyBkZXRhY2ggdmlldyB3aGVuIGNvbXBvbmVudCBpcyBkZXN0cm95ZWRcclxuICAgIGNvbXBvbmVudFJlZi5vbkRlc3Ryb3koKCkgPT4ge1xyXG4gICAgICB0aGlzLmFwcGxpY2F0aW9uUmVmLmRldGFjaFZpZXcoY29tcG9uZW50UmVmLmhvc3RWaWV3KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGFwcGVuZCBjb21wb25lbnQgdG8gbG9jYXRpb24gaW4gdGhlIERPTSB3aGVyZSB3ZSB3YW50IGl0IHRvIGJlIHJlbmRlcmVkXHJcbiAgICBjb25zdCBjb21wb25lbnRSb290Tm9kZSA9IHRoaXMuZ2V0Q29tcG9uZW50Um9vdE5vZGUoY29tcG9uZW50UmVmKTtcclxuICAgIGxvY2F0aW9uLmFwcGVuZENoaWxkKGNvbXBvbmVudFJvb3ROb2RlKTtcclxuXHJcbiAgICByZXR1cm4gY29tcG9uZW50UmVmO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogT3ZlcnJpZGVzIHRoZSBkZWZhdWx0IGNvbnRhaW5lciBlbGVtZW50LlxyXG4gICAqL1xyXG4gIHNldFJvb3RWaWV3Q29udGFpbmVyKGNvbnRhaW5lcjogRWxlbWVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXRzIHRoZSBodG1sIGVsZW1lbnQgZm9yIGEgY29tcG9uZW50IHJlZi5cclxuICAgKi9cclxuICBwcml2YXRlIGdldENvbXBvbmVudFJvb3ROb2RlKGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPGFueT4pOiBFbGVtZW50IHtcclxuICAgIHJldHVybiAoY29tcG9uZW50UmVmLmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjxhbnk+KS5yb290Tm9kZXNbMF0gYXMgRWxlbWVudDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldHMgdGhlIGNvbnRhaW5lciBlbGVtZW50LlxyXG4gICAqL1xyXG4gIHByaXZhdGUgZ2V0Q29udGFpbmVyRWxlbWVudCgpOiBFbGVtZW50IHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRhaW5lciB8fCBkb2N1bWVudC5ib2R5O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUHJvamVjdHMgdGhlIGlucHV0cyBvbnRvIHRoZSBjb21wb25lbnQuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBwcm9qZWN0Q29tcG9uZW50SW5wdXRzPFQ+KGNvbXBvbmVudDogQ29tcG9uZW50UmVmPFQ+LCBvcHRpb25zOiBhbnkpOiBDb21wb25lbnRSZWY8VD4ge1xyXG4gICAgaWYgKG9wdGlvbnMpIHtcclxuICAgICAgY29uc3QgcHJvcHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvcHRpb25zKTtcclxuICAgICAgZm9yIChjb25zdCBwcm9wIG9mIHByb3BzKSB7XHJcbiAgICAgICAgY29tcG9uZW50Lmluc3RhbmNlW3Byb3BdID0gb3B0aW9uc1twcm9wXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvbXBvbmVudDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE16SW5qZWN0aW9uU2VydmljZSB9IGZyb20gJy4vaW5qZWN0aW9uLnNlcnZpY2UnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBwcm92aWRlcnM6IFtNekluamVjdGlvblNlcnZpY2VdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpJbmplY3Rpb25Nb2R1bGUgeyB9XHJcbiIsImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEluamVjdCxcclxuICBPbkRlc3Ryb3ksXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTXpSZW1vdmVDb21wb25lbnRIb3N0IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgcHJpdmF0ZSBjaGlsZHJlbkVsZW1lbnQ6IEhUTUxFbGVtZW50W10gPSBbXTtcclxuICBwcml2YXRlIHBhcmVudEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBJbmplY3QoRWxlbWVudFJlZikgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgY29uc3QgaG9zdEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICAgIHRoaXMucGFyZW50RWxlbWVudCA9IGhvc3RFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgLy8gbW92ZSBjaGlsZCBvdXQgb2YgdGhlIGhvc3QgZWxlbWVudFxyXG4gICAgd2hpbGUgKGhvc3RFbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuICAgICAgdGhpcy5jaGlsZHJlbkVsZW1lbnQucHVzaCh0aGlzLnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKGhvc3RFbGVtZW50LmZpcnN0Q2hpbGQsIGhvc3RFbGVtZW50KSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIC8vIHJlbW92ZSBtb3ZlZCBvdXQgZWxlbWVudFxyXG4gICAgdGhpcy5jaGlsZHJlbkVsZW1lbnQuZm9yRWFjaChjaGlsZEVsZW1lbnQgPT4gdGhpcy5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkRWxlbWVudCkpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gICAgRGlyZWN0aXZlLFxyXG4gICAgRWxlbWVudFJlZixcclxuICAgIElucHV0LFxyXG4gICAgT25Jbml0LFxyXG4gICAgUmVuZGVyZXIsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBIYW5kbGVQcm9wQ2hhbmdlcyB9IGZyb20gJy4uL3NoYXJlZC9pbmRleCc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogYFxyXG4gICAgYVttei1idXR0b25dLFxyXG4gICAgYVttekJ1dHRvbl0sXHJcbiAgICBidXR0b25bbXotYnV0dG9uXSxcclxuICAgIGJ1dHRvblttekJ1dHRvbl1gLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpCdXR0b25EaXJlY3RpdmUgZXh0ZW5kcyBIYW5kbGVQcm9wQ2hhbmdlcyBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgZmxhdDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBmbG9hdDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBsYXJnZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBub1dhdmVzOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluaXRIYW5kbGVycygpO1xyXG4gICAgdGhpcy5pbml0TWF0ZXJpYWxpemUoKTtcclxuICAgIHN1cGVyLmV4ZWN1dGVQcm9wSGFuZGxlcnMoKTtcclxuICB9XHJcblxyXG4gIGluaXRIYW5kbGVycygpIHtcclxuICAgIHRoaXMuaGFuZGxlcnMgPSB7XHJcbiAgICAgIGRpc2FibGVkOiAoKSA9PiB0aGlzLmhhbmRsZURpc2FibGVkKCksXHJcbiAgICAgIGZsYXQ6ICgpID0+IHRoaXMuaGFuZGxlRmxhdCgpLFxyXG4gICAgICBmbG9hdDogKCkgPT4gdGhpcy5oYW5kbGVGbG9hdCgpLFxyXG4gICAgICBsYXJnZTogKCkgPT4gdGhpcy5oYW5kbGVMYXJnZSgpLFxyXG4gICAgICBub1dhdmVzOiAoKSA9PiB0aGlzLmhhbmRsZU5vV2F2ZXMoKSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBpbml0TWF0ZXJpYWxpemUoKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2J0bicsIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRGlzYWJsZWQoKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJywgdGhpcy5kaXNhYmxlZCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVGbGF0KCkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdidG4nLCAhdGhpcy5mbGF0KTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYnRuLWZsYXQnLCB0aGlzLmZsYXQpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRmxvYXQoKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2J0bi1mbG9hdGluZycsIHRoaXMuZmxvYXQpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlTGFyZ2UoKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2J0bi1sYXJnZScsIHRoaXMubGFyZ2UpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlTm9XYXZlcygpIHtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnd2F2ZXMtZWZmZWN0JywgIXRoaXMubm9XYXZlcyk7XHJcblxyXG4gICAgaWYgKCF0aGlzLmZsYXQpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd3YXZlcy1saWdodCcsICF0aGlzLm5vV2F2ZXMpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTXpCdXR0b25EaXJlY3RpdmUgfSBmcm9tICcuL2J1dHRvbi5kaXJlY3RpdmUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtNekJ1dHRvbkRpcmVjdGl2ZV0sXHJcbiAgZXhwb3J0czogW016QnV0dG9uRGlyZWN0aXZlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16QnV0dG9uTW9kdWxlIHsgfVxyXG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogYFxyXG4gICAgYVttei1oYWxmd2F5LWZhYl0sXHJcbiAgICBhW216SGFsZndheUZhYl0sXHJcbiAgICBidXR0b25bbXotaGFsZndheS1mYWJdLFxyXG4gICAgYnV0dG9uW216SGFsZndheUZhYl1gLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpIYWxmd2F5RmFiRGlyZWN0aXZlIHtcclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmhhbGZ3YXktZmFiJykgdHJ1ZTtcclxufVxyXG4iLCJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTXpIYWxmd2F5RmFiRGlyZWN0aXZlIH0gZnJvbSAnLi9oYWxmd2F5LWZhYi5kaXJlY3RpdmUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIE16SGFsZndheUZhYkRpcmVjdGl2ZSxcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIE16SGFsZndheUZhYkRpcmVjdGl2ZSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpIYWxmd2F5RmFiTW9kdWxlIHsgfVxyXG4iLCJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIEhvc3RCaW5kaW5nLFxyXG4gIElucHV0LFxyXG4gIFZpZXdDaGlsZCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXotY2FyZCcsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2ICNjYXJkSW1hZ2UgY2xhc3M9XCJjYXJkLWltYWdlXCIgKm5nSWY9XCJoYXNDYXJkSW1hZ2VcIj5cclxuICA8bmctY29udGVudCBzZWxlY3Q9XCJtei1jYXJkLWltYWdlXCI+PC9uZy1jb250ZW50PlxyXG4gIDxkaXYgY2xhc3M9XCJjYXJkLXRpdGxlXCIgKm5nSWY9XCJoYXNDYXJkSW1hZ2VUaXRsZVwiPlxyXG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibXotY2FyZC1pbWFnZS10aXRsZVwiPjwvbmctY29udGVudD5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG48ZGl2IFtjbGFzcy5jYXJkLXN0YWNrZWRdPVwiaG9yaXpvbnRhbFwiPlxyXG4gIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cclxuICAgIDxkaXYgI2NhcmRUaXRsZSBjbGFzcz1cImNhcmQtdGl0bGVcIiAqbmdJZj1cImhhc0NhcmRUaXRsZVwiPlxyXG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJtei1jYXJkLXRpdGxlXCI+PC9uZy1jb250ZW50PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibXotY2FyZC1jb250ZW50XCI+PC9uZy1jb250ZW50PlxyXG4gIDwvZGl2PlxyXG5cclxuICA8ZGl2ICNjYXJkQWN0aW9uIGNsYXNzPVwiY2FyZC1hY3Rpb25cIiAqbmdJZj1cImhhc0NhcmRBY3Rpb25cIj5cclxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm16LWNhcmQtYWN0aW9uXCI+PC9uZy1jb250ZW50PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5gLFxyXG4gIHN0eWxlczogW2A6aG9zdHtkaXNwbGF5OmJsb2NrfWBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpDYXJkQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5jYXJkJykgdHJ1ZTtcclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmhvcml6b250YWwnKSBASW5wdXQoKSBob3Jpem9udGFsOiBib29sZWFuO1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuaG92ZXJhYmxlJykgQElucHV0KCkgaG92ZXJhYmxlOiBib29sZWFuO1xyXG5cclxuICBAVmlld0NoaWxkKCdjYXJkQWN0aW9uJykgY2FyZEFjdGlvbjogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdjYXJkSW1hZ2UnKSBjYXJkSW1hZ2U6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnY2FyZFRpdGxlJykgY2FyZFRpdGxlOiBFbGVtZW50UmVmO1xyXG5cclxuICBoYXNDYXJkQWN0aW9uID0gdHJ1ZTtcclxuICBoYXNDYXJkSW1hZ2UgPSB0cnVlO1xyXG4gIGhhc0NhcmRJbWFnZVRpdGxlID0gdHJ1ZTtcclxuICBoYXNDYXJkVGl0bGUgPSB0cnVlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICkge31cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5oYXNDYXJkVGl0bGUgPSB0aGlzLmhhc1RpdGxlVGFnQW5kTm90RW1wdHkoKTtcclxuICAgIHRoaXMuaGFzQ2FyZEFjdGlvbiA9IHRoaXMuaGFzQWN0aW9uVGFnQW5kTm90RW1wdHkoKTtcclxuICAgIHRoaXMuaGFzQ2FyZEltYWdlID0gdGhpcy5oYXNJbWFnZVRhZ0FuZE5vdEVtcHR5KCk7XHJcbiAgICB0aGlzLmhhc0NhcmRJbWFnZVRpdGxlID0gdGhpcy5oYXNJbWFnZVRpdGxlVGFnQW5kTm90RW1wdHkoKTtcclxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYXNBY3Rpb25UYWdBbmROb3RFbXB0eSgpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IGNhcmRBY3Rpb25FbGVtZW50ID0gdGhpcy5jYXJkQWN0aW9uLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignbXotY2FyZC1hY3Rpb24nKTtcclxuICAgIHJldHVybiB0aGlzLmlzRWxlbWVudERpc3BsYXllZChjYXJkQWN0aW9uRWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhhc0ltYWdlVGFnQW5kTm90RW1wdHkoKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBjYXJkSW1hZ2VsZW1lbnQgPSB0aGlzLmNhcmRJbWFnZS5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ216LWNhcmQtaW1hZ2UnKTtcclxuICAgIHJldHVybiB0aGlzLmlzRWxlbWVudERpc3BsYXllZChjYXJkSW1hZ2VsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYXNJbWFnZVRpdGxlVGFnQW5kTm90RW1wdHkoKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBjYXJkSW1hZ2VUaXRsZUVsZW1lbnQgPSB0aGlzLmNhcmRJbWFnZS5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ216LWNhcmQtaW1hZ2UtdGl0bGUnKTtcclxuICAgIHJldHVybiB0aGlzLmlzRWxlbWVudERpc3BsYXllZChjYXJkSW1hZ2VUaXRsZUVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYXNUaXRsZVRhZ0FuZE5vdEVtcHR5KCk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgY2FyZFRpdGxlRWxlbWVudCA9IHRoaXMuY2FyZFRpdGxlID8gdGhpcy5jYXJkVGl0bGUubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdtei1jYXJkLXRpdGxlJykgOiBudWxsO1xyXG4gICAgcmV0dXJuIHRoaXMuaXNFbGVtZW50RGlzcGxheWVkKGNhcmRUaXRsZUVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc0VsZW1lbnREaXNwbGF5ZWQoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBlbGVtZW50ICYmIGVsZW1lbnQuaW5uZXJIVE1MLnRyaW0oKSAhPT0gJyc7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBEZWNsYXJlIHRoZSB0YWdzIHRvIGF2b2lkIGVycm9yOiAnPG16LWNhcmQteD4nIGlzIG5vdCBhIGtub3duIGVsZW1lbnRcclxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTEyNTFcclxuLy8gdHNsaW50OmRpc2FibGU6IGRpcmVjdGl2ZS1zZWxlY3RvclxyXG5cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnbXotY2FyZC1pbWFnZScgfSkgZXhwb3J0IGNsYXNzIE16Q2FyZEltYWdlRGlyZWN0aXZlIHsgfVxyXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdtei1jYXJkLWltYWdlLXRpdGxlJyB9KSBleHBvcnQgY2xhc3MgTXpDYXJkSW1hZ2VUaXRsZURpcmVjdGl2ZSB7IH1cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnbXotY2FyZC10aXRsZScgfSkgZXhwb3J0IGNsYXNzIE16Q2FyZFRpdGxlRGlyZWN0aXZlIHsgfVxyXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdtei1jYXJkLWNvbnRlbnQnIH0pIGV4cG9ydCBjbGFzcyBNekNhcmRDb250ZW50RGlyZWN0aXZlIHsgfVxyXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdtei1jYXJkLWFjdGlvbicgfSkgZXhwb3J0IGNsYXNzIE16Q2FyZEFjdGlvbkRpcmVjdGl2ZSB7IH1cclxuXHJcbiIsImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQge1xyXG4gIE16Q2FyZEFjdGlvbkRpcmVjdGl2ZSxcclxuICBNekNhcmRDb21wb25lbnQsXHJcbiAgTXpDYXJkQ29udGVudERpcmVjdGl2ZSxcclxuICBNekNhcmRJbWFnZURpcmVjdGl2ZSxcclxuICBNekNhcmRJbWFnZVRpdGxlRGlyZWN0aXZlLFxyXG4gIE16Q2FyZFRpdGxlRGlyZWN0aXZlLFxyXG4gfSBmcm9tICcuL2NhcmQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTXpIYWxmd2F5RmFiTW9kdWxlIH0gZnJvbSAnLi9oYWxmd2F5LWZhYi9oYWxmd2F5LWZhYi5tb2R1bGUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBNekhhbGZ3YXlGYWJNb2R1bGUsXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIE16Q2FyZEFjdGlvbkRpcmVjdGl2ZSxcclxuICAgIE16Q2FyZENvbXBvbmVudCxcclxuICAgIE16Q2FyZENvbnRlbnREaXJlY3RpdmUsXHJcbiAgICBNekNhcmRJbWFnZURpcmVjdGl2ZSxcclxuICAgIE16Q2FyZEltYWdlVGl0bGVEaXJlY3RpdmUsXHJcbiAgICBNekNhcmRUaXRsZURpcmVjdGl2ZSxcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIE16Q2FyZEFjdGlvbkRpcmVjdGl2ZSxcclxuICAgIE16Q2FyZENvbXBvbmVudCxcclxuICAgIE16Q2FyZENvbnRlbnREaXJlY3RpdmUsXHJcbiAgICBNekNhcmRJbWFnZURpcmVjdGl2ZSxcclxuICAgIE16Q2FyZEltYWdlVGl0bGVEaXJlY3RpdmUsXHJcbiAgICBNekNhcmRUaXRsZURpcmVjdGl2ZSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpDYXJkTW9kdWxlIHsgfVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXotY2hlY2tib3gtY29udGFpbmVyJyxcclxuICB0ZW1wbGF0ZTogYDxwIGNsYXNzPVwiY2hlY2tib3gtZmllbGRcIj5cclxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjwvcD5gLFxyXG4gIHN0eWxlczogW2BgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16Q2hlY2tib3hDb250YWluZXJDb21wb25lbnQgeyB9XHJcbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdEJpbmRpbmcsIElucHV0LCBPbkluaXQsIFJlbmRlcmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBIYW5kbGVQcm9wQ2hhbmdlcyB9IGZyb20gJy4uL3NoYXJlZC9pbmRleCc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ2lucHV0W216Q2hlY2tib3hdLCBpbnB1dFttei1jaGVja2JveF0nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpDaGVja2JveERpcmVjdGl2ZSBleHRlbmRzIEhhbmRsZVByb3BDaGFuZ2VzIGltcGxlbWVudHMgT25Jbml0IHtcclxuICAvLyBuYXRpdmUgcHJvcGVydGllc1xyXG4gIEBIb3N0QmluZGluZygpIEBJbnB1dCgpIGlkOiBzdHJpbmc7XHJcblxyXG4gIC8vIGRpcmVjdGl2ZSBwcm9wZXJ0aWVzXHJcbiAgQElucHV0KCkgZmlsbGVkSW46IGJvb2xlYW47XHJcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcclxuXHJcbiAgY2hlY2tib3hFbGVtZW50OiBKUXVlcnk7XHJcbiAgY2hlY2tib3hDb250YWluZXJFbGVtZW50OiBKUXVlcnk7XHJcbiAgbGFiZWxFbGVtZW50OiBKUXVlcnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5pdEhhbmRsZXJzKCk7XHJcbiAgICB0aGlzLmluaXRFbGVtZW50cygpO1xyXG4gICAgdGhpcy5oYW5kbGVQcm9wZXJ0aWVzKCk7XHJcbiAgfVxyXG5cclxuICBpbml0SGFuZGxlcnMoKSB7XHJcbiAgICB0aGlzLmhhbmRsZXJzID0ge1xyXG4gICAgICBmaWxsZWRJbjogKCkgPT4gdGhpcy5oYW5kbGVGaWxsZWRJbigpLFxyXG4gICAgICBsYWJlbDogKCkgPT4gdGhpcy5oYW5kbGVMYWJlbCgpLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGluaXRFbGVtZW50cygpIHtcclxuICAgIHRoaXMuY2hlY2tib3hFbGVtZW50ID0gJCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XHJcbiAgICB0aGlzLmNoZWNrYm94Q29udGFpbmVyRWxlbWVudCA9ICQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLnBhcmVudCgnLmNoZWNrYm94LWZpZWxkJyk7XHJcbiAgICB0aGlzLmxhYmVsRWxlbWVudCA9IHRoaXMuY3JlYXRlTGFiZWxFbGVtZW50KCk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVMYWJlbEVsZW1lbnQoKSB7XHJcbiAgICBjb25zdCBsYWJlbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgbGFiZWxFbGVtZW50LnNldEF0dHJpYnV0ZSgnZm9yJywgdGhpcy5pZCk7XHJcblxyXG4gICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMuY2hlY2tib3hFbGVtZW50LCAnYWZ0ZXInLCBbbGFiZWxFbGVtZW50XSk7XHJcblxyXG4gICAgcmV0dXJuICQobGFiZWxFbGVtZW50KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVByb3BlcnRpZXMoKSB7XHJcbiAgICBpZiAodGhpcy5jaGVja2JveENvbnRhaW5lckVsZW1lbnQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0lucHV0IHdpdGggbXotY2hlY2tib3ggZGlyZWN0aXZlIG11c3QgYmUgcGxhY2VkIGluc2lkZSBhIFttei1jaGVja2JveC1jb250YWluZXJdIHRhZycsIHRoaXMuY2hlY2tib3hFbGVtZW50KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHN1cGVyLmV4ZWN1dGVQcm9wSGFuZGxlcnMoKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUxhYmVsKCkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMubGFiZWxFbGVtZW50LCAndGV4dCcsIFt0aGlzLmxhYmVsXSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVGaWxsZWRJbigpIHtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuY2hlY2tib3hFbGVtZW50WzBdLCAnZmlsbGVkLWluJywgdGhpcy5maWxsZWRJbik7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBNekNoZWNrYm94Q29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9jaGVja2JveC1jb250YWluZXIvaW5kZXgnO1xyXG5pbXBvcnQgeyBNekNoZWNrYm94RGlyZWN0aXZlIH0gZnJvbSAnLi9jaGVja2JveC5kaXJlY3RpdmUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIE16Q2hlY2tib3hEaXJlY3RpdmUsXHJcbiAgICBNekNoZWNrYm94Q29udGFpbmVyQ29tcG9uZW50LFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgTXpDaGVja2JveERpcmVjdGl2ZSxcclxuICAgIE16Q2hlY2tib3hDb250YWluZXJDb21wb25lbnQsXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16Q2hlY2tib3hNb2R1bGUgeyB9XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBJbnB1dCwgTmdab25lLCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXotY2hpcC1pbnB1dCcsXHJcbiAgdGVtcGxhdGU6IGBgLFxyXG4gIHN0eWxlczogW2A6aG9zdHtkaXNwbGF5OmJsb2NrfWBdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTXpDaGlwSW5wdXRDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16Q2hpcElucHV0Q29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSBhdXRvY29tcGxldGVPcHRpb25zOiBNYXRlcmlhbGl6ZS5BdXRvQ29tcGxldGVPcHRpb25zO1xyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgc2Vjb25kYXJ5UGxhY2Vob2xkZXI6IHN0cmluZztcclxuICBAT3V0cHV0KCkgYWRkID0gbmV3IEV2ZW50RW1pdHRlcjxNYXRlcmlhbGl6ZS5DaGlwRGF0YU9iamVjdD4oKTtcclxuICBAT3V0cHV0KCkgZGVsZXRlID0gbmV3IEV2ZW50RW1pdHRlcjxNYXRlcmlhbGl6ZS5DaGlwRGF0YU9iamVjdD4oKTtcclxuICBAT3V0cHV0KCkgc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxNYXRlcmlhbGl6ZS5DaGlwRGF0YU9iamVjdD4oKTtcclxuXHJcbiAgZ2V0IHZhbHVlKCk6IE1hdGVyaWFsaXplLkNoaXBEYXRhT2JqZWN0W10ge1xyXG4gICAgcmV0dXJuIHRoaXMuY2hpcElucHV0RWxlbWVudC5tYXRlcmlhbF9jaGlwKCdkYXRhJykgYXMgTWF0ZXJpYWxpemUuQ2hpcERhdGFPYmplY3RbXTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hpcElucHV0RWxlbWVudDogSlF1ZXJ5O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgem9uZTogTmdab25lLFxyXG4gICkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbml0RWxlbWVudHMoKTtcclxuICAgIHRoaXMuaW5pdE1hdGVyaWFsaXplQ2hpcCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmNoaXBJbnB1dEVsZW1lbnQub2ZmKCdjaGlwLmFkZCcpO1xyXG4gICAgdGhpcy5jaGlwSW5wdXRFbGVtZW50Lm9mZignY2hpcC5kZWxldGUnKTtcclxuICAgIHRoaXMuY2hpcElucHV0RWxlbWVudC5vZmYoJ2NoaXAuc2VsZWN0Jyk7XHJcbiAgfVxyXG5cclxuICBpbml0RWxlbWVudHMoKSB7XHJcbiAgICB0aGlzLmNoaXBJbnB1dEVsZW1lbnQgPSAkKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcclxuICB9XHJcblxyXG4gIGluaXRNYXRlcmlhbGl6ZUNoaXAodmFsdWU/OiBNYXRlcmlhbGl6ZS5DaGlwRGF0YU9iamVjdFtdKSB7XHJcbiAgICAvLyBmaXggaXNzdWUgYXV0b2NvbXBsZXRlIGlzIG5vdCBhIGZ1bmN0aW9uXHJcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vRG9nZmFsby9tYXRlcmlhbGl6ZS9pc3N1ZXMvNDQwMVxyXG4gICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jaGlwSW5wdXRFbGVtZW50Lm1hdGVyaWFsX2NoaXAoe1xyXG4gICAgICAgICAgYXV0b2NvbXBsZXRlT3B0aW9uczogdGhpcy5hdXRvY29tcGxldGVPcHRpb25zLFxyXG4gICAgICAgICAgZGF0YTogdmFsdWUgfHwgdGhpcy52YWx1ZSxcclxuICAgICAgICAgIHBsYWNlaG9sZGVyOiB0aGlzLnBsYWNlaG9sZGVyLFxyXG4gICAgICAgICAgc2Vjb25kYXJ5UGxhY2Vob2xkZXI6IHRoaXMuc2Vjb25kYXJ5UGxhY2Vob2xkZXIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5jaGlwSW5wdXRFbGVtZW50Lm9uKCdjaGlwLmFkZCcsIChldmVudCwgY2hpcDogTWF0ZXJpYWxpemUuQ2hpcERhdGFPYmplY3QpID0+IHtcclxuICAgICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrKHRoaXMudmFsdWUpO1xyXG4gICAgICB0aGlzLmFkZC5lbWl0KGNoaXApO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmNoaXBJbnB1dEVsZW1lbnQub24oJ2NoaXAuZGVsZXRlJywgKGV2ZW50LCBjaGlwOiBNYXRlcmlhbGl6ZS5DaGlwRGF0YU9iamVjdCkgPT4ge1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sodGhpcy52YWx1ZSk7XHJcbiAgICAgIHRoaXMuZGVsZXRlLmVtaXQoY2hpcCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuY2hpcElucHV0RWxlbWVudC5vbignY2hpcC5zZWxlY3QnLCAoZXZlbnQsIGNoaXA6IE1hdGVyaWFsaXplLkNoaXBEYXRhT2JqZWN0KSA9PiB7XHJcbiAgICAgIHRoaXMuc2VsZWN0LmVtaXQoY2hpcCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vI3JlZ2lvbiBDb250cm9sVmFsdWVBY2Nlc3NvclxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpIHtcclxuICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSkgeyB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbikgeyB9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IE1hdGVyaWFsaXplLkNoaXBEYXRhT2JqZWN0W10pIHtcclxuICAgIGlmICh2YWx1ZSAmJiB2YWx1ZSAhPT0gdGhpcy52YWx1ZSkge1xyXG4gICAgICB0aGlzLmluaXRNYXRlcmlhbGl6ZUNoaXAodmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8jZW5kcmVnaW9uIENvbnRyb2xWYWx1ZUFjY2Vzc29yXHJcblxyXG4gIHByaXZhdGUgb25DaGFuZ2VDYWxsYmFjayA9IChkYXRhOiBNYXRlcmlhbGl6ZS5DaGlwRGF0YU9iamVjdFtdKSA9PiB7fTtcclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXotY2hpcCcsXHJcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjxpIGNsYXNzPVwiY2xvc2UgbWF0ZXJpYWwtaWNvbnNcIiAoY2xpY2spPVwib25EZWxldGUoKVwiICpuZ0lmPVwiY2xvc2VcIj5jbG9zZTwvaT5gLFxyXG4gIHN0eWxlczogW2BgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16Q2hpcENvbXBvbmVudCB7XHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5jaGlwJykgY2hpcENsYXNzID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KCkgY2xvc2UgPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgZGVsZXRlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG4gIGdldCBjaGlwRWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XHJcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICApIHsgfVxyXG5cclxuICBvbkRlbGV0ZSgpIHtcclxuICAgIGxldCB2YWx1ZSA9ICcnO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNoaXBFbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHRoaXMuY2hpcEVsZW1lbnQuY2hpbGROb2Rlcy5pdGVtKGkpLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xyXG4gICAgICAgIHZhbHVlICs9IHRoaXMuY2hpcEVsZW1lbnQuY2hpbGROb2Rlcy5pdGVtKGkpLm5vZGVWYWx1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5kZWxldGUuZW1pdCh2YWx1ZS50cmltKCkpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTXpDaGlwSW5wdXRDb21wb25lbnQgfSBmcm9tICcuL2NoaXAtaW5wdXQvaW5kZXgnO1xyXG5pbXBvcnQgeyBNekNoaXBDb21wb25lbnQgfSBmcm9tICcuL2NoaXAuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBNekNoaXBDb21wb25lbnQsXHJcbiAgICBNekNoaXBJbnB1dENvbXBvbmVudCxcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIE16Q2hpcENvbXBvbmVudCxcclxuICAgIE16Q2hpcElucHV0Q29tcG9uZW50LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNekNoaXBNb2R1bGUgeyB9XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgRGlyZWN0aXZlLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTXpSZW1vdmVDb21wb25lbnRIb3N0IH0gZnJvbSAnLi4vLi4vc2hhcmVkL3JlbW92ZS1jb21wb25lbnQtaG9zdC9yZW1vdmUtY29tcG9uZW50LWhvc3QnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtei1jb2xsYXBzaWJsZS1pdGVtJyxcclxuICB0ZW1wbGF0ZTogYDxsaT5cclxuICA8ZGl2IGNsYXNzPVwiY29sbGFwc2libGUtaGVhZGVyXCJcclxuICAgIFtjbGFzcy5hY3RpdmVdPVwiYWN0aXZlXCJcclxuICA+XHJcbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJtei1jb2xsYXBzaWJsZS1pdGVtLWhlYWRlclwiPjwvbmctY29udGVudD5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwiY29sbGFwc2libGUtYm9keVwiPlxyXG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibXotY29sbGFwc2libGUtaXRlbS1ib2R5XCI+PC9uZy1jb250ZW50PlxyXG4gIDwvZGl2PlxyXG48L2xpPmAsXHJcbiAgc3R5bGVzOiBbYGBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpDb2xsYXBzaWJsZUl0ZW1Db21wb25lbnQgZXh0ZW5kcyBNelJlbW92ZUNvbXBvbmVudEhvc3Qge1xyXG4gIEBJbnB1dCgpIGFjdGl2ZTogYm9vbGVhbjtcclxufVxyXG5cclxuLy8gRGVjbGFyZSB0aGUgdGFncyB0byBhdm9pZCBlcnJvcjogJzxtei1jb2xsYXBzaWJsZS1pdGVtLXg+JyBpcyBub3QgYSBrbm93biBlbGVtZW50XHJcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzExMjUxXHJcbi8vIHRzbGludDpkaXNhYmxlOiBkaXJlY3RpdmUtc2VsZWN0b3JcclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnbXotY29sbGFwc2libGUtaXRlbS1ib2R5JyB9KSBleHBvcnQgY2xhc3MgTXpDb2xsYXBzaWJsZUl0ZW1Cb2R5RGlyZWN0aXZlIHsgfVxyXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdtei1jb2xsYXBzaWJsZS1pdGVtLWhlYWRlcicgfSkgZXhwb3J0IGNsYXNzIE16Q29sbGFwc2libGVJdGVtSGVhZGVyRGlyZWN0aXZlIHsgfVxyXG4iLCJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBRdWVyeUxpc3QsXHJcbiAgUmVuZGVyZXIsXHJcbiAgVmlld0NoaWxkLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTXpDb2xsYXBzaWJsZUl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2NvbGxhcHNpYmxlLWl0ZW0vY29sbGFwc2libGUtaXRlbS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtei1jb2xsYXBzaWJsZScsXHJcbiAgdGVtcGxhdGU6IGA8dWwgI2NvbGxhcHNpYmxlXHJcbiAgY2xhc3M9XCJjb2xsYXBzaWJsZVwiXHJcbiAgW2NsYXNzLnBvcG91dF09XCJwb3BvdXRcIlxyXG4gIFtoaWRkZW5dPVwiaXRlbXMubGVuZ3RoID09PSAwXCJcclxuPlxyXG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuPC91bD5gLFxyXG4gIHN0eWxlczogW2AvZGVlcC8gLmNvbGxhcHNpYmxlLWhlYWRlcntjbGVhcjpib3RofS9kZWVwLyAuY29sbGFwc2libGUtYm9keXtjbGVhcjpib3RofWBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpDb2xsYXBzaWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KCkgbW9kZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG9uQ2xvc2U6IEZ1bmN0aW9uO1xyXG4gIEBJbnB1dCgpIG9uT3BlbjogRnVuY3Rpb247XHJcbiAgQElucHV0KCkgcG9wb3V0OiBib29sZWFuO1xyXG5cclxuICBAVmlld0NoaWxkKCdjb2xsYXBzaWJsZScpIGNvbGxhcHNpYmxlOiBFbGVtZW50UmVmO1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oTXpDb2xsYXBzaWJsZUl0ZW1Db21wb25lbnQpIGl0ZW1zOiBRdWVyeUxpc3Q8TXpDb2xsYXBzaWJsZUl0ZW1Db21wb25lbnQ+O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIsXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5oYW5kbGVEYXRhQ29sbGFwc2libGUoKTtcclxuICAgIHRoaXMuaW5pdENvbGxhcHNpYmxlKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICQodGhpcy5jb2xsYXBzaWJsZS5uYXRpdmVFbGVtZW50KS5jb2xsYXBzaWJsZSgnZGVzdHJveScpO1xyXG4gIH1cclxuXHJcbiAgY2xvc2UoY29sbGFwc2libGVJdGVtSW5kZXg6IG51bWJlcikge1xyXG4gICAgJCh0aGlzLmNvbGxhcHNpYmxlLm5hdGl2ZUVsZW1lbnQpLmNvbGxhcHNpYmxlKCdjbG9zZScsIGNvbGxhcHNpYmxlSXRlbUluZGV4KTtcclxuICB9XHJcblxyXG4gIGluaXRDb2xsYXBzaWJsZSgpIHtcclxuICAgIGNvbnN0IG9wdGlvbnM6IE1hdGVyaWFsaXplLkNvbGxhcHNpYmxlT3B0aW9ucyA9IHtcclxuICAgICAgYWNjb3JkaW9uOiBmYWxzZSxcclxuICAgICAgb25DbG9zZTogdGhpcy5vbkNsb3NlLFxyXG4gICAgICBvbk9wZW46IHRoaXMub25PcGVuLFxyXG4gICAgfTtcclxuXHJcbiAgICAkKHRoaXMuY29sbGFwc2libGUubmF0aXZlRWxlbWVudCkuY29sbGFwc2libGUob3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVEYXRhQ29sbGFwc2libGUoKSB7XHJcbiAgICBpZiAodGhpcy5tb2RlKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudEF0dHJpYnV0ZSh0aGlzLmNvbGxhcHNpYmxlLm5hdGl2ZUVsZW1lbnQsICdkYXRhLWNvbGxhcHNpYmxlJywgdGhpcy5tb2RlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9wZW4oY29sbGFwc2libGVJdGVtSW5kZXg6IG51bWJlcikge1xyXG4gICAgJCh0aGlzLmNvbGxhcHNpYmxlLm5hdGl2ZUVsZW1lbnQpLmNvbGxhcHNpYmxlKCdvcGVuJywgY29sbGFwc2libGVJdGVtSW5kZXgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtcclxuICBNekNvbGxhcHNpYmxlSXRlbUJvZHlEaXJlY3RpdmUsXHJcbiAgTXpDb2xsYXBzaWJsZUl0ZW1Db21wb25lbnQsXHJcbiAgTXpDb2xsYXBzaWJsZUl0ZW1IZWFkZXJEaXJlY3RpdmUsXHJcbn0gZnJvbSAnLi9jb2xsYXBzaWJsZS1pdGVtL2luZGV4JztcclxuaW1wb3J0IHsgTXpDb2xsYXBzaWJsZUNvbXBvbmVudCB9IGZyb20gJy4vY29sbGFwc2libGUuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBNekNvbGxhcHNpYmxlQ29tcG9uZW50LFxyXG4gICAgTXpDb2xsYXBzaWJsZUl0ZW1Cb2R5RGlyZWN0aXZlLFxyXG4gICAgTXpDb2xsYXBzaWJsZUl0ZW1Db21wb25lbnQsXHJcbiAgICBNekNvbGxhcHNpYmxlSXRlbUhlYWRlckRpcmVjdGl2ZSxcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIE16Q29sbGFwc2libGVDb21wb25lbnQsXHJcbiAgICBNekNvbGxhcHNpYmxlSXRlbUJvZHlEaXJlY3RpdmUsXHJcbiAgICBNekNvbGxhcHNpYmxlSXRlbUNvbXBvbmVudCxcclxuICAgIE16Q29sbGFwc2libGVJdGVtSGVhZGVyRGlyZWN0aXZlLFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNekNvbGxhcHNpYmxlTW9kdWxlIHsgfVxyXG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1ttekF2YXRhcl0sIFttei1hdmF0YXJdJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16QXZhdGFyRGlyZWN0aXZlIHtcclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmNpcmNsZScpIHRydWU7XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ216LWNvbGxlY3Rpb24taGVhZGVyJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJjb2xsZWN0aW9uLWhlYWRlclwiPlxyXG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuPC9kaXY+YCxcclxuICBzdHlsZXM6IFtgYF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNekNvbGxlY3Rpb25IZWFkZXJDb21wb25lbnQgeyB9XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ216LWNvbGxlY3Rpb24taXRlbScsXHJcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcclxuICBzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTpibG9ja31gXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16Q29sbGVjdGlvbkl0ZW1Db21wb25lbnQge1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuY29sbGVjdGlvbi1pdGVtJykgdHJ1ZTtcclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmF2YXRhcicpIEBJbnB1dCgpIGF2YXRhcjogYm9vbGVhbjtcclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmRpc21pc3NhYmxlJykgQElucHV0KCkgZGlzbWlzc2FibGU6IGJvb2xlYW47XHJcbn1cclxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW216Q29sbGVjdGlvbkxpbmtdLCBbbXotY29sbGVjdGlvbi1saW5rXScsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNekNvbGxlY3Rpb25MaW5rRGlyZWN0aXZlIHtcclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFjdGl2ZScpIEBJbnB1dCgpIGFjdGl2ZTogYm9vbGVhbjtcclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmNvbGxlY3Rpb24taXRlbScpIHRydWU7XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtei1jb2xsZWN0aW9uJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJjb2xsZWN0aW9uXCI+XHJcbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L2Rpdj5gLFxyXG4gIHN0eWxlczogW2BgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16Q29sbGVjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgY29sbGVjdGlvbkVsZW1lbnQ6IEpRdWVyeTtcclxuICBjb2xsZWN0aW9uSGVhZGVyRWxlbWVudDogSlF1ZXJ5O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICApIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5pdEVsZW1lbnRzKCk7XHJcbiAgICB0aGlzLmluaXRDb2xsZWN0aW9uSGVhZGVyKCk7XHJcbiAgfVxyXG5cclxuICBpbml0RWxlbWVudHMoKSB7XHJcbiAgICB0aGlzLmNvbGxlY3Rpb25FbGVtZW50ID0gJCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkuZmluZCgnLmNvbGxlY3Rpb24nKTtcclxuICAgIHRoaXMuY29sbGVjdGlvbkhlYWRlckVsZW1lbnQgPSAkKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5maW5kKCcuY29sbGVjdGlvbi1oZWFkZXInKTtcclxuICB9XHJcblxyXG4gIGluaXRDb2xsZWN0aW9uSGVhZGVyKCkge1xyXG4gICAgaWYgKHRoaXMuY29sbGVjdGlvbkhlYWRlckVsZW1lbnQubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuY29sbGVjdGlvbkVsZW1lbnRbMF0sICd3aXRoLWhlYWRlcicpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1ttelNlY29uZGFyeUNvbnRlbnRdLCBbbXotc2Vjb25kYXJ5LWNvbnRlbnRdJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16U2Vjb25kYXJ5Q29udGVudERpcmVjdGl2ZSB7XHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zZWNvbmRhcnktY29udGVudCcpIHRydWU7XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE16QXZhdGFyRGlyZWN0aXZlIH0gZnJvbSAnLi9hdmF0YXIvaW5kZXgnO1xyXG5pbXBvcnQgeyBNekNvbGxlY3Rpb25IZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbGxlY3Rpb24taGVhZGVyL2luZGV4JztcclxuaW1wb3J0IHsgTXpDb2xsZWN0aW9uSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vY29sbGVjdGlvbi1pdGVtL2luZGV4JztcclxuaW1wb3J0IHsgTXpDb2xsZWN0aW9uTGlua0RpcmVjdGl2ZSB9IGZyb20gJy4vY29sbGVjdGlvbi1saW5rL2luZGV4JztcclxuaW1wb3J0IHsgTXpDb2xsZWN0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb2xsZWN0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE16U2Vjb25kYXJ5Q29udGVudERpcmVjdGl2ZSB9IGZyb20gJy4vc2Vjb25kYXJ5LWNvbnRlbnQvaW5kZXgnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIE16QXZhdGFyRGlyZWN0aXZlLFxyXG4gICAgTXpDb2xsZWN0aW9uQ29tcG9uZW50LFxyXG4gICAgTXpDb2xsZWN0aW9uSXRlbUNvbXBvbmVudCxcclxuICAgIE16Q29sbGVjdGlvbkxpbmtEaXJlY3RpdmUsXHJcbiAgICBNekNvbGxlY3Rpb25IZWFkZXJDb21wb25lbnQsXHJcbiAgICBNelNlY29uZGFyeUNvbnRlbnREaXJlY3RpdmUsXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBNekF2YXRhckRpcmVjdGl2ZSxcclxuICAgIE16Q29sbGVjdGlvbkNvbXBvbmVudCxcclxuICAgIE16Q29sbGVjdGlvbkl0ZW1Db21wb25lbnQsXHJcbiAgICBNekNvbGxlY3Rpb25MaW5rRGlyZWN0aXZlLFxyXG4gICAgTXpDb2xsZWN0aW9uSGVhZGVyQ29tcG9uZW50LFxyXG4gICAgTXpTZWNvbmRhcnlDb250ZW50RGlyZWN0aXZlLFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNekNvbGxlY3Rpb25Nb2R1bGUgeyB9XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXotZGF0ZXBpY2tlci1jb250YWluZXInLFxyXG4gIHRlbXBsYXRlOiBgPGRpdlxyXG4gIGNsYXNzPVwiaW5wdXQtZmllbGRcIlxyXG4gIFtjbGFzcy5pbmxpbmVdPVwiaW5saW5lXCJcclxuPlxyXG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuPC9kaXY+YCxcclxuICBzdHlsZXM6IFtgYF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNekRhdGVwaWNrZXJDb250YWluZXJDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGlubGluZTogYm9vbGVhbjtcclxufVxyXG4iLCJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0QmluZGluZywgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPcHRpb25hbCwgUmVuZGVyZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IEhhbmRsZVByb3BDaGFuZ2VzIH0gZnJvbSAnLi4vc2hhcmVkL2luZGV4JztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnaW5wdXRbbXpEYXRlcGlja2VyXSwgaW5wdXRbbXotZGF0ZXBpY2tlcl0nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpEYXRlcGlja2VyRGlyZWN0aXZlIGV4dGVuZHMgSGFuZGxlUHJvcENoYW5nZXMgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5kYXRlcGlja2VyJykgdHJ1ZTtcclxuXHJcbiAgLy8gbmF0aXZlIHByb3BlcnRpZXNcclxuICBASW5wdXQoKSBpZDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XHJcblxyXG4gIC8vIGRpcmVjdGl2ZSBwcm9wZXJ0aWVzXHJcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcclxuXHJcbiAgLy8gbWF0ZXJpYWxpemUgdXNlcyBwaWNrYWRhdGUuanMgdG8gY3JlYXRlIHRoZSBkYXRlcGlja2VyXHJcbiAgLy8gY29tcGxldGUgbGlzdCBvZiBvcHRpb25zIGlzIGF2YWlsYWJsZSBhdCB0aGUgZm9sbG93aW5nIGFkZHJlc3NcclxuICAvLyBodHRwOi8vYW1zdWwuY2EvcGlja2FkYXRlLmpzL2RhdGUvI29wdGlvbnNcclxuICBASW5wdXQoKSBvcHRpb25zOiBQaWNrYWRhdGUuRGF0ZU9wdGlvbnMgPSB7fTtcclxuXHJcbiAgaW5wdXRFbGVtZW50OiBKUXVlcnk7XHJcbiAgaW5wdXRDb250YWluZXJFbGVtZW50OiBKUXVlcnk7XHJcbiAgaW5wdXRWYWx1ZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG4gIGlzSW5pdFJvdW5kID0gdHJ1ZTtcclxuICBsYWJlbEVsZW1lbnQ6IEpRdWVyeTtcclxuICBzdG9wQ2hhbmdlUHJvcGFnYXRpb24gPSBmYWxzZTtcclxuXHJcbiAgZ2V0IGZvcm1hdCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5mb3JtYXQgfHwgdGhpcy5vcHRpb25zLmZvcm1hdFN1Ym1pdCB8fCBudWxsO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGZvcm1hdFN1Ym1pdCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5mb3JtYXRTdWJtaXQgfHwgdGhpcy5vcHRpb25zLmZvcm1hdCB8fCBudWxsO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG5nQ29udHJvbFZhbHVlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5uZ0NvbnRyb2wudmFsdWUgPT09ICcnID8gbnVsbCA6IHRoaXMubmdDb250cm9sLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHBpY2tlcigpOiBQaWNrYWRhdGUuRGF0ZVBpY2tlciB7XHJcbiAgICByZXR1cm4gdGhpcy5pbnB1dEVsZW1lbnQucGlja2FkYXRlKCdwaWNrZXInKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBuZ0NvbnRyb2w6IE5nQ29udHJvbCxcclxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIsXHJcbiAgKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluaXRIYW5kbGVycygpO1xyXG4gICAgdGhpcy5pbml0RWxlbWVudHMoKTtcclxuICAgIHRoaXMuaW5pdERhdGVwaWNrZXIoKTtcclxuICAgIHRoaXMuaW5pdElucHV0U3Vic2NyaXB0aW9uKCk7XHJcbiAgICB0aGlzLmhhbmRsZVByb3BlcnRpZXMoKTtcclxuICAgIHRoaXMuaXNJbml0Um91bmQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgaWYgKHRoaXMuaW5wdXRWYWx1ZVN1YnNjcmlwdGlvbikge1xyXG4gICAgICB0aGlzLmlucHV0VmFsdWVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGluaXRIYW5kbGVycygpIHtcclxuICAgIHRoaXMuaGFuZGxlcnMgPSB7XHJcbiAgICAgIGxhYmVsOiAoKSA9PiB0aGlzLmhhbmRsZUxhYmVsKCksXHJcbiAgICAgIG9wdGlvbnM6ICgpID0+IHRoaXMuaGFuZGxlT3B0aW9ucygpLFxyXG4gICAgICBwbGFjZWhvbGRlcjogKCkgPT4gdGhpcy5oYW5kbGVQbGFjZWhvbGRlcigpLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGluaXRFbGVtZW50cygpIHtcclxuICAgIHRoaXMuaW5wdXRDb250YWluZXJFbGVtZW50ID0gJCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkucGFyZW50KCcuaW5wdXQtZmllbGQnKTtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50ID0gJCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XHJcbiAgICB0aGlzLmxhYmVsRWxlbWVudCA9IHRoaXMuY3JlYXRlTGFiZWxFbGVtZW50KCk7XHJcbiAgfVxyXG5cclxuICBpbml0RGF0ZXBpY2tlcigpIHtcclxuICAgIC8vIHNldCBkZWZhdWx0IGZvcm1hdC9mb3JtYXRTdWJtaXQgb3B0aW9uc1xyXG4gICAgaWYgKHRoaXMuZm9ybWF0KSB7XHJcbiAgICAgIHRoaXMub3B0aW9ucy5mb3JtYXQgPSB0aGlzLmZvcm1hdDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmZvcm1hdFN1Ym1pdCkge1xyXG4gICAgICB0aGlzLm9wdGlvbnMuZm9ybWF0U3VibWl0ID0gdGhpcy5mb3JtYXRTdWJtaXQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZXh0ZW5kcyBvbkNsb3NlIGZ1bmN0aW9uIHRvIGZpeCBkYXRlcGlja2VyIGZvY3VzIGlzc3VlXHJcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vRG9nZmFsby9tYXRlcmlhbGl6ZS9pc3N1ZXMvMjA2NyNpc3N1ZWNvbW1lbnQtMTQyMTA3NTk5XHJcbiAgICBjb25zdCBvbkNsb3NlRm4gPSB0aGlzLm9wdGlvbnMgJiYgdGhpcy5vcHRpb25zLm9uQ2xvc2UgfHwgKCgpID0+IHt9KTtcclxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMub3B0aW9ucywge1xyXG4gICAgICBvbkNsb3NlOiAoZXZlbnQpID0+IHtcclxuICAgICAgICBvbkNsb3NlRm4oZXZlbnQpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZChkb2N1bWVudC5hY3RpdmVFbGVtZW50LCAnYmx1cicpO1xyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMuaW5wdXRFbGVtZW50LCAncGlja2FkYXRlJywgW3RoaXMub3B0aW9uc10pO1xyXG5cclxuICAgIGlmICh0aGlzLm5nQ29udHJvbCkge1xyXG4gICAgICAvLyBzZXQgZGF0ZXBpY2tlciBpbml0aWFsIHZhbHVlIGFjY29yZGluZyB0byBuZ0NvbnRyb2xcclxuICAgICAgdGhpcy5waWNrZXIuc2V0KCdzZWxlY3QnLCB0aGlzLm5nQ29udHJvbFZhbHVlLCB7IGZvcm1hdDogdGhpcy5mb3JtYXRTdWJtaXQgfSk7XHJcblxyXG4gICAgICAvLyBzZXQgbmdDb250cm9sIHZhbHVlIGFjY29yZGluZyB0byBzZWxlY3RlZCBkYXRlIGluIGRhdGVwaWNrZXJcclxuICAgICAgdGhpcy5waWNrZXIub24oJ3NldCcsICgpID0+IHtcclxuICAgICAgICAvLyBoYW5kbGUgc3RvcCBwcm9wYWdhdGlvblxyXG4gICAgICAgIGlmICh0aGlzLnN0b3BDaGFuZ2VQcm9wYWdhdGlvbikge1xyXG4gICAgICAgICAgdGhpcy5zdG9wQ2hhbmdlUHJvcGFnYXRpb24gPSBmYWxzZTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5zdG9wQ2hhbmdlUHJvcGFnYXRpb24gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gYXBwbHkgb3B0aW9ucy5mb3JtYXRTdWJtaXQgdG8gbmdDb250cm9sIHZhbHVlXHJcbiAgICAgICAgY29uc3Qgc3VibWl0VmFsdWUgPSB0aGlzLmZvcm1hdFN1Ym1pdFxyXG4gICAgICAgICAgPyB0aGlzLnBpY2tlci5nZXQoJ3NlbGVjdCcsIHRoaXMuZm9ybWF0U3VibWl0KVxyXG4gICAgICAgICAgOiB0aGlzLnBpY2tlci5nZXQoJ3ZhbHVlJyk7XHJcbiAgICAgICAgdGhpcy5uZ0NvbnRyb2wuY29udHJvbC5zZXRWYWx1ZShzdWJtaXRWYWx1ZSk7XHJcblxyXG4gICAgICAgIC8vIGFwcGx5IG9wdGlvbnMuZm9ybWF0IHRvIGlucHV0IHRleHRcclxuICAgICAgICBjb25zdCBmb3JtYXRWYWx1ZSA9IHRoaXMuZm9ybWF0XHJcbiAgICAgICAgICA/IHRoaXMucGlja2VyLmdldCgnc2VsZWN0JywgdGhpcy5mb3JtYXQpXHJcbiAgICAgICAgICA6IHRoaXMucGlja2VyLmdldCgndmFsdWUnKTtcclxuICAgICAgICB0aGlzLmlucHV0RWxlbWVudC52YWwoZm9ybWF0VmFsdWUpO1xyXG5cclxuICAgICAgICAvLyBzZXQgbGFiZWwgYWN0aXZlIHN0YXR1c1xyXG4gICAgICAgIHRoaXMuc2V0TGFiZWxBY3RpdmUoKTtcclxuXHJcbiAgICAgICAgLy8gbWFyayBmb3IgY2hhbmdlIGRldGVjdGlvblxyXG4gICAgICAgIC8vIGZpeCBmb3JtIHZhbGlkYXRpb24gd2l0aCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxuICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGluaXRJbnB1dFN1YnNjcmlwdGlvbigpIHtcclxuICAgIGlmICh0aGlzLm5nQ29udHJvbCkge1xyXG4gICAgICB0aGlzLmlucHV0VmFsdWVTdWJzY3JpcHRpb24gPSB0aGlzLm5nQ29udHJvbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAvLyBoYW5kbGUgc3RvcCBwcm9wYWdhdGlvblxyXG4gICAgICAgIGlmICh0aGlzLnN0b3BDaGFuZ2VQcm9wYWdhdGlvbikge1xyXG4gICAgICAgICAgdGhpcy5zdG9wQ2hhbmdlUHJvcGFnYXRpb24gPSBmYWxzZTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5zdG9wQ2hhbmdlUHJvcGFnYXRpb24gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gc2V0IHNlbGVjdGVkIGRhdGUgaW4gZGF0ZXBpY2tlciBhY2NvcmRpbmcgdG8gbmdDb250cm9sIHZhbHVlXHJcbiAgICAgICAgdGhpcy5waWNrZXIuc2V0KCdzZWxlY3QnLCB0aGlzLm5nQ29udHJvbFZhbHVlLCB7IGZvcm1hdDogdGhpcy5mb3JtYXRTdWJtaXQgfSk7XHJcblxyXG4gICAgICAgIC8vIHNldCBsYWJlbCBhY3RpdmUgc3RhdHVzXHJcbiAgICAgICAgdGhpcy5zZXRMYWJlbEFjdGl2ZSgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNyZWF0ZUxhYmVsRWxlbWVudCgpIHtcclxuICAgIGNvbnN0IGxhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBsYWJlbEVsZW1lbnQuc2V0QXR0cmlidXRlKCdmb3InLCB0aGlzLmlkKTtcclxuXHJcbiAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QodGhpcy5pbnB1dEVsZW1lbnQsICdhZnRlcicsIFtsYWJlbEVsZW1lbnRdKTtcclxuXHJcbiAgICByZXR1cm4gJChsYWJlbEVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlUHJvcGVydGllcygpIHtcclxuICAgIGlmICh0aGlzLmlucHV0Q29udGFpbmVyRWxlbWVudC5sZW5ndGggPT09IDApIHtcclxuICAgICAgY29uc29sZS5lcnJvcignSW5wdXQgd2l0aCBtei1kYXRlcGlja2VyIGRpcmVjdGl2ZSBtdXN0IGJlIHBsYWNlZCBpbnNpZGUgYW4gW216LWRhdGVwaWNrZXItY29udGFpbmVyXSB0YWcnLCB0aGlzLmlucHV0RWxlbWVudCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBzdXBlci5leGVjdXRlUHJvcEhhbmRsZXJzKCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVMYWJlbCgpIHtcclxuICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLmxhYmVsRWxlbWVudCwgJ3RleHQnLCBbdGhpcy5sYWJlbF0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlT3B0aW9ucygpIHtcclxuICAgIGlmICghdGhpcy5pc0luaXRSb3VuZCkge1xyXG4gICAgICB0aGlzLnBpY2tlci5zZXQodGhpcy5vcHRpb25zKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZVBsYWNlaG9sZGVyKCkge1xyXG4gICAgY29uc3QgcGxhY2Vob2xkZXIgPSAhIXRoaXMucGxhY2Vob2xkZXIgPyB0aGlzLnBsYWNlaG9sZGVyIDogbnVsbDtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudEF0dHJpYnV0ZSh0aGlzLmlucHV0RWxlbWVudFswXSwgJ3BsYWNlaG9sZGVyJywgcGxhY2Vob2xkZXIpO1xyXG5cclxuICAgIC8vIGZpeCBpc3N1ZSBpbiBJRSB3aGVyZSBoYXZpbmcgYSBwbGFjZWhvbGRlciBvbiBpbnB1dCBtYWtlIGNvbnRyb2wgZGlydHkgYW5kIHRyaWdnZXIgdmFsaWRhdGlvblxyXG4gICAgLy8gb24gcGFnZSBsb2FkLi4uIG5vdGUgdGhhdCBpdCBzdGlsbCB0cmlnZ2VyIHZhbGlkYXRpb24gb24gZm9jdXMgYW5kIHdvdWxkIG5lZWQgYSBiZXR0ZXIgZml4XHJcbiAgICAvLyBpc3N1ZSA6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzE1Mjk5XHJcbiAgICAvLyB3b3JrYXJvdW5kIDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQ0OTY3MjQ1LzU1ODMyODNcclxuICAgIGlmICh0aGlzLm5nQ29udHJvbCkge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMubmdDb250cm9sLmNvbnRyb2wubWFya0FzUHJpc3RpbmUoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZXRMYWJlbEFjdGl2ZSgpO1xyXG4gIH1cclxuXHJcbiAgc2V0TGFiZWxBY3RpdmUoKSB7XHJcbiAgICAvLyBuZWVkIHNldFRpbWVvdXQgb3RoZXJ3aXNlIGl0IHdvbnQgbWFrZSBsYWJlbCBmbG9hdCBpbiBzb21lIGNpcmNvbnN0YW5jZXMgKGZvcmNpbmcgdmFsaWRhdGlvbiBmb3IgZXhhbXBsZSlcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBjb25zdCBpbnB1dFZhbHVlID0gKDxIVE1MSW5wdXRFbGVtZW50PnRoaXMuaW5wdXRFbGVtZW50WzBdKS52YWx1ZTtcclxuICAgICAgY29uc3QgaXNBY3RpdmUgPSAhIXRoaXMucGxhY2Vob2xkZXIgfHwgISFpbnB1dFZhbHVlO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLmxhYmVsRWxlbWVudFswXSwgJ2FjdGl2ZScsIGlzQWN0aXZlKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTXpEYXRlcGlja2VyQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlcGlja2VyLWNvbnRhaW5lci9pbmRleCc7XHJcbmltcG9ydCB7IE16RGF0ZXBpY2tlckRpcmVjdGl2ZSB9IGZyb20gJy4vZGF0ZXBpY2tlci5kaXJlY3RpdmUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIE16RGF0ZXBpY2tlckRpcmVjdGl2ZSxcclxuICAgIE16RGF0ZXBpY2tlckNvbnRhaW5lckNvbXBvbmVudCxcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIE16RGF0ZXBpY2tlckRpcmVjdGl2ZSxcclxuICAgIE16RGF0ZXBpY2tlckNvbnRhaW5lckNvbXBvbmVudCxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpEYXRlcGlja2VyTW9kdWxlIHsgfVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXotZHJvcGRvd24tZGl2aWRlcicsXHJcbiAgdGVtcGxhdGU6IGA8bGkgY2xhc3M9XCJkaXZpZGVyXCI+PC9saT5gLFxyXG4gIHN0eWxlczogW2BgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16RHJvcGRvd25EaXZpZGVyQ29tcG9uZW50IHsgfVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXotZHJvcGRvd24taXRlbScsXHJcbiAgdGVtcGxhdGU6IGA8bGk+XHJcbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L2xpPmAsXHJcbiAgc3R5bGVzOiBbYGBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpEcm9wZG93bkl0ZW1Db21wb25lbnQgeyB9XHJcbiIsImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBSZW5kZXJlcixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEhhbmRsZVByb3BDaGFuZ2VzIH0gZnJvbSAnLi4vc2hhcmVkL2luZGV4JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXotZHJvcGRvd24nLFxyXG4gIHRlbXBsYXRlOiBgPHVsXHJcbiAgY2xhc3M9XCJkcm9wZG93bi1jb250ZW50XCJcclxuICBbYXR0ci5pZF09XCJpZFwiXHJcbj5cclxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjwvdWw+YCxcclxuICBzdHlsZXM6IFtgYF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNekRyb3Bkb3duQ29tcG9uZW50IGV4dGVuZHMgSGFuZGxlUHJvcENoYW5nZXMgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuICBASW5wdXQoKSBhbGlnbjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGJlbG93T3JpZ2luOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGNvbnN0cmFpbldpZHRoOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGRyb3Bkb3duQnV0dG9uSWQ6IHN0cmluZztcclxuICBASW5wdXQoKSBndXR0ZXI6IG51bWJlcjtcclxuICBASW5wdXQoKSBob3ZlcjogYm9vbGVhbjtcclxuICBASW5wdXQoKSBpZDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGluRHVyYXRpb246IG51bWJlcjtcclxuICBASW5wdXQoKSBvdXREdXJhdGlvbjogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIHN0b3BQcm9wYWdhdGlvbjogYm9vbGVhbjtcclxuXHJcbiAgZHJvcGRvd25CdXR0b25FbGVtZW50OiBKUXVlcnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5pbml0SGFuZGxlcnMoKTtcclxuICAgIHRoaXMuaW5pdERyb3Bkb3duQnV0dG9uRWxlbWVudCgpO1xyXG4gICAgdGhpcy5oYW5kbGVQcm9wZXJ0aWVzKCk7XHJcbiAgfVxyXG5cclxuICBjbG9zZSgpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMuZHJvcGRvd25CdXR0b25FbGVtZW50LCAnZHJvcGRvd24nLCBbJ2Nsb3NlJ10pKTtcclxuICB9XHJcblxyXG4gIGluaXREcm9wZG93bkJ1dHRvbkVsZW1lbnQoKSB7XHJcbiAgICB0aGlzLmRyb3Bkb3duQnV0dG9uRWxlbWVudCA9ICQoYCMke3RoaXMuZHJvcGRvd25CdXR0b25JZH1gKTtcclxuICB9XHJcblxyXG4gIGluaXRIYW5kbGVycygpIHtcclxuICAgIHRoaXMuaGFuZGxlcnMgPSB7XHJcbiAgICAgIGFsaWduOiAoKSA9PiB0aGlzLmhhbmRsZURyb3Bkb3duKCksXHJcbiAgICAgIGJlbG93T3JpZ2luOiAoKSA9PiB0aGlzLmhhbmRsZURyb3Bkb3duKCksXHJcbiAgICAgIGNvbnN0cmFpbldpZHRoOiAoKSA9PiB0aGlzLmhhbmRsZURyb3Bkb3duKCksXHJcbiAgICAgIGRyb3Bkb3duQnV0dG9uSWQ6ICgpID0+IHRoaXMuaGFuZGxlRGF0YUFjdGl2YXRlcygpLFxyXG4gICAgICBndXR0ZXI6ICgpID0+IHRoaXMuaGFuZGxlRHJvcGRvd24oKSxcclxuICAgICAgaG92ZXI6ICgpID0+IHRoaXMuaGFuZGxlRHJvcGRvd24oKSxcclxuICAgICAgaWQ6ICgpID0+IHRoaXMuaGFuZGxlRHJvcGRvd24oKSxcclxuICAgICAgaW5EdXJhdGlvbjogKCkgPT4gdGhpcy5oYW5kbGVEcm9wZG93bigpLFxyXG4gICAgICBvdXREdXJhdGlvbjogKCkgPT4gdGhpcy5oYW5kbGVEcm9wZG93bigpLFxyXG4gICAgICBzdG9wUHJvcGFnYXRpb246ICgpID0+IHRoaXMuaGFuZGxlRHJvcGRvd24oKSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBoYW5kbGVEYXRhQWN0aXZhdGVzKCkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50QXR0cmlidXRlKHRoaXMuZHJvcGRvd25CdXR0b25FbGVtZW50WzBdLCAnZGF0YS1hY3RpdmF0ZXMnLCB0aGlzLmlkKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZURyb3Bkb3duKCkge1xyXG4gICAgdGhpcy52YWxpZGF0ZVByb3BlcnRpZXMoKTtcclxuXHJcbiAgICBjb25zdCBvcHRpb25zOiBNYXRlcmlhbGl6ZS5Ecm9wRG93bk9wdGlvbnMgPSB7XHJcbiAgICAgIGFsaWdubWVudDogdGhpcy5hbGlnbixcclxuICAgICAgYmVsb3dPcmlnaW46IHRoaXMuYmVsb3dPcmlnaW4sXHJcbiAgICAgIGNvbnN0cmFpbldpZHRoOiB0aGlzLmNvbnN0cmFpbldpZHRoLFxyXG4gICAgICBndXR0ZXI6IHRoaXMuZ3V0dGVyLFxyXG4gICAgICBob3ZlcjogdGhpcy5ob3ZlcixcclxuICAgICAgaW5EdXJhdGlvbjogdGhpcy5pbkR1cmF0aW9uLFxyXG4gICAgICBvdXREdXJhdGlvbjogdGhpcy5vdXREdXJhdGlvbixcclxuICAgICAgc3RvcFByb3BhZ2F0aW9uOiB0aGlzLnN0b3BQcm9wYWdhdGlvbixcclxuICAgIH07XHJcblxyXG4gICAgLy8gSW5pdGlhbGl6ZSBkcm9wZG93biBidXR0b24gZm9yIGRyb3Bkb3duXHJcbiAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QodGhpcy5kcm9wZG93bkJ1dHRvbkVsZW1lbnQsICdkcm9wZG93bicsIFtvcHRpb25zXSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVQcm9wZXJ0aWVzKCkge1xyXG4gICAgdGhpcy5oYW5kbGVEYXRhQWN0aXZhdGVzKCk7XHJcbiAgICB0aGlzLmhhbmRsZURyb3Bkb3duKCk7XHJcbiAgfVxyXG5cclxuICBvcGVuKCkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QodGhpcy5kcm9wZG93bkJ1dHRvbkVsZW1lbnQsICdkcm9wZG93bicsIFsnb3BlbiddKSk7XHJcbiAgfVxyXG5cclxuICB2YWxpZGF0ZVByb3BlcnRpZXMoKSB7XHJcbiAgICBpZiAoIXRoaXMuaWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBdHRyaWJ1dGUgW2lkXSBmcm9tIG16LWRyb3Bkb3duIGlzIHJlcXVpcmVkLiAnICsgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmRyb3Bkb3duQnV0dG9uRWxlbWVudC5sZW5ndGggPT09IDApIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICdBdHRyaWJ1dGUgW2Ryb3Bkb3duQnV0dG9uSWRdIGZyb20gbXotZHJvcGRvd24gaXMgcmVxdWlyZWQgYW5kIHNob3VsZCBiZSBhbiBleGlzdGluZyBlbGVtZW50LiAnICtcclxuICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBNekRyb3Bkb3duRGl2aWRlckNvbXBvbmVudCB9IGZyb20gJy4vZHJvcGRvd24tZGl2aWRlci9pbmRleCc7XHJcbmltcG9ydCB7IE16RHJvcGRvd25JdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9kcm9wZG93bi1pdGVtL2luZGV4JztcclxuaW1wb3J0IHsgTXpEcm9wZG93bkNvbXBvbmVudCB9IGZyb20gJy4vZHJvcGRvd24uY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBNekRyb3Bkb3duQ29tcG9uZW50LFxyXG4gICAgTXpEcm9wZG93bkRpdmlkZXJDb21wb25lbnQsXHJcbiAgICBNekRyb3Bkb3duSXRlbUNvbXBvbmVudCxcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIE16RHJvcGRvd25Db21wb25lbnQsXHJcbiAgICBNekRyb3Bkb3duRGl2aWRlckNvbXBvbmVudCxcclxuICAgIE16RHJvcGRvd25JdGVtQ29tcG9uZW50LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNekRyb3Bkb3duTW9kdWxlIHsgfVxyXG4iLCJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtei1mZWF0dXJlLWRpc2NvdmVyeScsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwidGFwLXRhcmdldC1jb250ZW50XCI+XHJcbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L2Rpdj5cclxuYCxcclxuICBzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTpibG9ja31gXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16RmVhdHVyZURpc2NvdmVyeUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MudGFwLXRhcmdldCcpXHJcbiAgdGFyZ2V0Q2xhc3MgPSB0cnVlO1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ2F0dHIuZGF0YS1hY3RpdmF0ZXMnKVxyXG4gIEBJbnB1dCgpXHJcbiAgdGFyZ2V0SWQ6IHN0cmluZztcclxuXHJcbiAgcHJpdmF0ZSB0YXJnZXQ6IEpRdWVyeTxFbGVtZW50PjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy50YXJnZXQgPSAkKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcclxuICB9XHJcblxyXG4gIGNsb3NlKCkge1xyXG4gICAgdGhpcy50YXJnZXQudGFwVGFyZ2V0KCdjbG9zZScpO1xyXG4gIH1cclxuXHJcbiAgb3BlbigpIHtcclxuICAgIHRoaXMudGFyZ2V0LnRhcFRhcmdldCgnb3BlbicpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTXpGZWF0dXJlRGlzY292ZXJ5Q29tcG9uZW50IH0gZnJvbSAnLi9mZWF0dXJlLWRpc2NvdmVyeS5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIE16RmVhdHVyZURpc2NvdmVyeUNvbXBvbmVudCxcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIE16RmVhdHVyZURpc2NvdmVyeUNvbXBvbmVudCxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpGZWF0dXJlRGlzY292ZXJ5TW9kdWxlIHsgfVxyXG4iLCJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgRGlyZWN0aXZlLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgUmVuZGVyZXIsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBIYW5kbGVQcm9wQ2hhbmdlcyB9IGZyb20gJy4uL3NoYXJlZC9pbmRleCc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ2lbbXotaWNvbl0sIGlbbXpJY29uXScsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNekljb25EaXJlY3RpdmUgZXh0ZW5kcyBIYW5kbGVQcm9wQ2hhbmdlcyBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG4gIEBJbnB1dCgpIGFsaWduOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHNpemU6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcikge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMuaW5pdEhhbmRsZXJzKCk7XHJcbiAgICB0aGlzLmluaXRNYXRlcmlhbGl6ZSgpO1xyXG4gICAgc3VwZXIuZXhlY3V0ZVByb3BIYW5kbGVycygpO1xyXG4gIH1cclxuXHJcbiAgaW5pdEhhbmRsZXJzKCkge1xyXG4gICAgdGhpcy5oYW5kbGVycyA9IHtcclxuICAgICAgYWxpZ246IChwcmV2aW91c1ZhbHVlKSA9PiB0aGlzLmhhbmRsZUFsaWduKHByZXZpb3VzVmFsdWUpLFxyXG4gICAgICBpY29uOiAoKSA9PiB0aGlzLmhhbmRsZUljb24oKSxcclxuICAgICAgc2l6ZTogKHByZXZpb3VzVmFsdWUpID0+IHRoaXMuaGFuZGxlU2l6ZShwcmV2aW91c1ZhbHVlKSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBpbml0TWF0ZXJpYWxpemUoKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21hdGVyaWFsLWljb25zJywgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVBbGlnbihwcmV2aW91c1ZhbHVlPzogc3RyaW5nKSB7XHJcbiAgICBpZiAocHJldmlvdXNWYWx1ZSkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgcHJldmlvdXNWYWx1ZSwgZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuYWxpZ24pIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuYWxpZ24sIHRydWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlSWNvbigpIHtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudFByb3BlcnR5KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnaW5uZXJIVE1MJywgdGhpcy5pY29uKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVNpemUocHJldmlvdXNWYWx1ZT86IHN0cmluZykge1xyXG4gICAgaWYgKHByZXZpb3VzVmFsdWUpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHByZXZpb3VzVmFsdWUsIGZhbHNlKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNpemUpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuc2l6ZSwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBNekljb25EaXJlY3RpdmUgfSBmcm9tICcuL2ljb24uZGlyZWN0aXZlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBNekljb25EaXJlY3RpdmUsXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBNekljb25EaXJlY3RpdmUsXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16SWNvbk1vZHVsZSB7IH1cclxuIiwiaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIFJlbmRlcmVyLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgSGFuZGxlUHJvcENoYW5nZXMgfSBmcm9tICcuLi9zaGFyZWQvaW5kZXgnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdhW216LWljb24tbWRpXSwgYVttekljb25NZGldLCBpW216LWljb24tbWRpXSwgaVttekljb25NZGldJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16SWNvbk1kaURpcmVjdGl2ZSBleHRlbmRzIEhhbmRsZVByb3BDaGFuZ2VzIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQElucHV0KCkgYWxpZ246IHN0cmluZztcclxuICBASW5wdXQoKSBmbGlwOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHJvdGF0ZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHNpemU6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcikge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMuaW5pdEhhbmRsZXJzKCk7XHJcbiAgICB0aGlzLmluaXRNYXRlcmlhbGl6ZSgpO1xyXG4gICAgc3VwZXIuZXhlY3V0ZVByb3BIYW5kbGVycygpO1xyXG4gIH1cclxuXHJcbiAgaW5pdEhhbmRsZXJzKCkge1xyXG4gICAgdGhpcy5oYW5kbGVycyA9IHtcclxuICAgICAgYWxpZ246IChwcmV2aW91c1ZhbHVlKSA9PiB0aGlzLmhhbmRsZUFsaWduKHByZXZpb3VzVmFsdWUpLFxyXG4gICAgICBmbGlwOiAocHJldmlvdXNWYWx1ZSkgPT4gdGhpcy5oYW5kbGVGbGlwKHByZXZpb3VzVmFsdWUpLFxyXG4gICAgICBpY29uOiAocHJldmlvdXNWYWx1ZSkgPT4gdGhpcy5oYW5kbGVJY29uKHByZXZpb3VzVmFsdWUpLFxyXG4gICAgICByb3RhdGU6IChwcmV2aW91c1ZhbHVlKSA9PiB0aGlzLmhhbmRsZVJvdGF0ZShwcmV2aW91c1ZhbHVlKSxcclxuICAgICAgc2l6ZTogKHByZXZpb3VzVmFsdWUpID0+IHRoaXMuaGFuZGxlU2l6ZShwcmV2aW91c1ZhbHVlKSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBpbml0TWF0ZXJpYWxpemUoKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21kaScsIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQWxpZ24ocHJldmlvdXNWYWx1ZT86IHN0cmluZykge1xyXG4gICAgaWYgKHByZXZpb3VzVmFsdWUpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHByZXZpb3VzVmFsdWUsIGZhbHNlKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmFsaWduKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmFsaWduLCB0cnVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZUZsaXAocHJldmlvdXNWYWx1ZT86IHN0cmluZykge1xyXG4gICAgaWYgKHByZXZpb3VzVmFsdWUpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtZGktZmxpcC0nICsgcHJldmlvdXNWYWx1ZSwgZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtZGktZmxpcC0nICsgdGhpcy5mbGlwLCAhIXRoaXMuZmxpcCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVJY29uKHByZXZpb3VzVmFsdWU/OiBzdHJpbmcpIHtcclxuICAgIGlmIChwcmV2aW91c1ZhbHVlKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbWRpLScgKyBwcmV2aW91c1ZhbHVlLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21kaS0nICsgdGhpcy5pY29uLCB0cnVlKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVJvdGF0ZShwcmV2aW91c1ZhbHVlPzogc3RyaW5nKSB7XHJcbiAgICBpZiAocHJldmlvdXNWYWx1ZSkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21kaS1yb3RhdGUtJyArIHByZXZpb3VzVmFsdWUsIGZhbHNlKTtcclxuICAgIH1cclxuICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbWRpLXJvdGF0ZS0nICsgdGhpcy5yb3RhdGUsICEhdGhpcy5yb3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlU2l6ZShwcmV2aW91c1ZhbHVlPzogc3RyaW5nKSB7XHJcbiAgICBpZiAoIXRoaXMuc2l6ZSkge1xyXG4gICAgICB0aGlzLnNpemUgPSAnMjRweCc7XHJcbiAgICB9XHJcbiAgICBpZiAocHJldmlvdXNWYWx1ZSkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21kaS0nICsgcHJldmlvdXNWYWx1ZSwgZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtZGktJyArIHRoaXMuc2l6ZSwgdHJ1ZSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBNekljb25NZGlEaXJlY3RpdmUgfSBmcm9tICcuL2ljb24tbWRpLmRpcmVjdGl2ZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgTXpJY29uTWRpRGlyZWN0aXZlLFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgTXpJY29uTWRpRGlyZWN0aXZlLFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNekljb25NZGlNb2R1bGUgeyB9XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXotaW5wdXQtY29udGFpbmVyJyxcclxuICB0ZW1wbGF0ZTogYDxkaXZcclxuICBjbGFzcz1cImlucHV0LWZpZWxkXCJcclxuICBbY2xhc3MuaW5saW5lXT1cImlubGluZVwiXHJcbj5cclxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjwvZGl2PmAsXHJcbiAgc3R5bGVzOiBbYGBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpJbnB1dENvbnRhaW5lckNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgaW5saW5lOiBib29sZWFuO1xyXG59XHJcbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgT25Jbml0LCBSZW5kZXJlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdpW216SW5wdXRQcmVmaXhdLCBpW216LWlucHV0LXByZWZpeF0nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpJbnB1dFByZWZpeERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAncHJlZml4JywgdHJ1ZSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPcHRpb25hbCwgUmVuZGVyZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBpbnRlcnZhbCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGZpcnN0LCBza2lwV2hpbGUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBIYW5kbGVQcm9wQ2hhbmdlcyB9IGZyb20gJy4uL3NoYXJlZCc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ2lucHV0W216SW5wdXRdLCBpbnB1dFttei1pbnB1dF0nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpJbnB1dERpcmVjdGl2ZSBleHRlbmRzIEhhbmRsZVByb3BDaGFuZ2VzIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIC8vIG5hdGl2ZSBwcm9wZXJ0aWVzXHJcbiAgQElucHV0KCkgaWQ6IHN0cmluZztcclxuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xyXG5cclxuICAvLyBkaXJlY3RpdmUgcHJvcGVydGllc1xyXG4gIEBJbnB1dCgpIGF1dG9jb21wbGV0ZTogeyBkYXRhOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IH07XHJcbiAgQElucHV0KCkgZGF0YUVycm9yOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZGF0YVN1Y2Nlc3M6IHN0cmluZztcclxuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGxlbmd0aDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIHZhbGlkYXRlOiBib29sZWFuO1xyXG5cclxuICBpbnB1dEVsZW1lbnQ6IEpRdWVyeTtcclxuICBpbnB1dENvbnRhaW5lckVsZW1lbnQ6IEpRdWVyeTtcclxuICBpbnB1dFZhbHVlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcbiAgbGFiZWxFbGVtZW50OiBKUXVlcnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBuZ0NvbnRyb2w6IE5nQ29udHJvbCxcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyLFxyXG4gICkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbml0SGFuZGxlcnMoKTtcclxuICAgIHRoaXMuaW5pdEVsZW1lbnRzKCk7XHJcbiAgICB0aGlzLmluaXRJbnB1dFN1YnNjcmlwdGlvbigpO1xyXG4gICAgdGhpcy5oYW5kbGVQcm9wZXJ0aWVzKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIGlmICh0aGlzLmlucHV0VmFsdWVTdWJzY3JpcHRpb24pIHtcclxuICAgICAgdGhpcy5pbnB1dFZhbHVlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbml0SGFuZGxlcnMoKSB7XHJcbiAgICB0aGlzLmhhbmRsZXJzID0ge1xyXG4gICAgICBhdXRvY29tcGxldGU6ICgpID0+IHRoaXMuaGFuZGxlQXV0b2NvbXBsZXRlKCksXHJcbiAgICAgIGRhdGFFcnJvcjogKCkgPT4gdGhpcy5oYW5kbGVEYXRhRXJyb3IoKSxcclxuICAgICAgZGF0YVN1Y2Nlc3M6ICgpID0+IHRoaXMuaGFuZGxlRGF0YVN1Y2Nlc3MoKSxcclxuICAgICAgbGFiZWw6ICgpID0+IHRoaXMuaGFuZGxlTGFiZWwoKSxcclxuICAgICAgbGVuZ3RoOiAoKSA9PiB0aGlzLmhhbmRsZUxlbmd0aCgpLFxyXG4gICAgICBwbGFjZWhvbGRlcjogKCkgPT4gdGhpcy5oYW5kbGVQbGFjZWhvbGRlcigpLFxyXG4gICAgICB2YWxpZGF0ZTogKCkgPT4gdGhpcy5oYW5kbGVWYWxpZGF0ZSgpLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGluaXRFbGVtZW50cygpIHtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50ID0gJCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XHJcbiAgICB0aGlzLmlucHV0Q29udGFpbmVyRWxlbWVudCA9ICQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLnBhcmVudCgnLmlucHV0LWZpZWxkJyk7XHJcbiAgICB0aGlzLmxhYmVsRWxlbWVudCA9IHRoaXMuY3JlYXRlTGFiZWxFbGVtZW50KCk7XHJcbiAgfVxyXG5cclxuICBpbml0SW5wdXRTdWJzY3JpcHRpb24oKSB7XHJcbiAgICBpZiAodGhpcy5uZ0NvbnRyb2wpIHtcclxuICAgICAgdGhpcy5pbnB1dFZhbHVlU3Vic2NyaXB0aW9uID0gdGhpcy5uZ0NvbnRyb2wudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB0aGlzLnNldExhYmVsQWN0aXZlKCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlTGFiZWxFbGVtZW50KCkge1xyXG4gICAgY29uc3QgbGFiZWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGxhYmVsRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIHRoaXMuaWQpO1xyXG5cclxuICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLmlucHV0RWxlbWVudCwgJ2FmdGVyJywgW2xhYmVsRWxlbWVudF0pO1xyXG5cclxuICAgIHJldHVybiAkKGxhYmVsRWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVQcm9wZXJ0aWVzKCkge1xyXG4gICAgaWYgKHRoaXMuaW5wdXRDb250YWluZXJFbGVtZW50Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdJbnB1dCB3aXRoIG16LWlucHV0IGRpcmVjdGl2ZSBtdXN0IGJlIHBsYWNlZCBpbnNpZGUgYW4gW216LWlucHV0LWNvbnRhaW5lcl0gdGFnJywgdGhpcy5pbnB1dEVsZW1lbnQpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgc3VwZXIuZXhlY3V0ZVByb3BIYW5kbGVycygpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQXV0b2NvbXBsZXRlKCkge1xyXG4gICAgY29uc3QgaXNBdXRvY29tcGxldGUgPSB0aGlzLmF1dG9jb21wbGV0ZSAhPSBudWxsXHJcbiAgICAgICYmIHRoaXMuYXV0b2NvbXBsZXRlLmRhdGEgIT0gbnVsbFxyXG4gICAgICAmJiBPYmplY3Qua2V5cyh0aGlzLmF1dG9jb21wbGV0ZS5kYXRhKS5sZW5ndGggPiAwO1xyXG5cclxuICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuaW5wdXRFbGVtZW50WzBdLCAnYXV0b2NvbXBsZXRlJywgaXNBdXRvY29tcGxldGUpO1xyXG5cclxuICAgIGlmICh0aGlzLmF1dG9jb21wbGV0ZSAhPSBudWxsKSB7XHJcbiAgICAgIC8vIHdhaXQgdW50aWwgYXV0b2NvbXBsZXRlIGlzIGRlZmluZWQgYmVmb3JlIHRvIGludm9rZVxyXG4gICAgICAvLyBzZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9Eb2dmYWxvL21hdGVyaWFsaXplL2lzc3Vlcy80NDAxXHJcbiAgICAgIGludGVydmFsKDEwMClcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgIHNraXBXaGlsZSgoKSA9PiAhdGhpcy5pbnB1dEVsZW1lbnRbJ2F1dG9jb21wbGV0ZSddKSxcclxuICAgICAgICAgIGZpcnN0KCkpXHJcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QodGhpcy5pbnB1dEVsZW1lbnQsICdhdXRvY29tcGxldGUnLCBbdGhpcy5hdXRvY29tcGxldGVdKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVEYXRhRXJyb3IoKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRBdHRyaWJ1dGUodGhpcy5sYWJlbEVsZW1lbnRbMF0sICdkYXRhLWVycm9yJywgdGhpcy5kYXRhRXJyb3IpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRGF0YVN1Y2Nlc3MoKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRBdHRyaWJ1dGUodGhpcy5sYWJlbEVsZW1lbnRbMF0sICdkYXRhLXN1Y2Nlc3MnLCB0aGlzLmRhdGFTdWNjZXNzKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUxhYmVsKCkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMubGFiZWxFbGVtZW50LCAndGV4dCcsIFt0aGlzLmxhYmVsXSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVMZW5ndGgoKSB7XHJcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmxlbmd0aCA/IHRoaXMubGVuZ3RoLnRvU3RyaW5nKCkgOiBudWxsO1xyXG5cclxuICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudEF0dHJpYnV0ZSh0aGlzLmlucHV0RWxlbWVudFswXSwgJ2RhdGEtbGVuZ3RoJywgbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAobGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuc2V0Q2hhcmFjdGVyQ291bnQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlQ2hhcmFjdGVyQ291bnQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZVBsYWNlaG9sZGVyKCkge1xyXG4gICAgY29uc3QgcGxhY2Vob2xkZXIgPSAhIXRoaXMucGxhY2Vob2xkZXIgPyB0aGlzLnBsYWNlaG9sZGVyIDogbnVsbDtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudEF0dHJpYnV0ZSh0aGlzLmlucHV0RWxlbWVudFswXSwgJ3BsYWNlaG9sZGVyJywgcGxhY2Vob2xkZXIpO1xyXG5cclxuICAgIC8vIGZpeCBpc3N1ZSBpbiBJRSB3aGVyZSBoYXZpbmcgYSBwbGFjZWhvbGRlciBvbiBpbnB1dCBtYWtlIGNvbnRyb2wgZGlydHlcclxuICAgIC8vIG5vdGUgdGhhdCBpdCBzdGlsbCB0cmlnZ2VyIHZhbGlkYXRpb24gb24gZm9jdXMgYnV0IHRoaXMgaXMgYmV0dGVyIHRoYW4gbm90aGluZ1xyXG4gICAgLy8gaXNzdWUgOiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xNTI5OVxyXG4gICAgLy8gd29ya2Fyb3VuZCA6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS80NDk2NzI0NS81NTgzMjgzXHJcbiAgICBpZiAodGhpcy5uZ0NvbnRyb2wpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLm5nQ29udHJvbC5jb250cm9sLm1hcmtBc1ByaXN0aW5lKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2V0TGFiZWxBY3RpdmUoKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVZhbGlkYXRlKCkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5pbnB1dEVsZW1lbnRbMF0sICd2YWxpZGF0ZScsIHRoaXMudmFsaWRhdGUpO1xyXG5cclxuICAgIGlmICh0aGlzLnZhbGlkYXRlKSB7XHJcbiAgICAgIC8vIGZvcmNlIHZhbGlkYXRpb25cclxuICAgICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMuaW5wdXRFbGVtZW50LCAndHJpZ2dlcicsIFsnYmx1ciddKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlVmFsaWRhdGlvbkNsYXNzZXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldENoYXJhY3RlckNvdW50KCkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMuaW5wdXRFbGVtZW50LCAnY2hhcmFjdGVyQ291bnRlcicpO1xyXG5cclxuICAgIC8vIGZvcmNlIHZhbGlkYXRpb25cclxuICAgIC8vIG5lZWQgc2V0VGltZW91dCBvdGhlcndpc2UgaXQgd29udCB0cmlnZ2VyIHZhbGlkYXRpb24gcmlnaHQgYXdheVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLmlucHV0RWxlbWVudCwgJ3RyaWdnZXInLCBbJ2lucHV0J10pO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QodGhpcy5pbnB1dEVsZW1lbnQsICd0cmlnZ2VyJywgWydibHVyJ10pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRMYWJlbEFjdGl2ZSgpIHtcclxuICAgIC8vIG5lZWQgc2V0VGltZW91dCBvdGhlcndpc2UgaXQgd29udCBtYWtlIGxhYmVsIGZsb2F0IGluIHNvbWUgY2lyY29uc3RhbmNlc1xyXG4gICAgLy8gZm9yIGV4YW1wbGU6IGZvcmNpbmcgdmFsaWRhdGlvbiBmb3IgZXhhbXBsZSwgcmVzZXRpbmcgZm9ybSBwcm9ncmFtbWF0aWNhbHksIC4uLlxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGlucHV0VmFsdWUgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+dGhpcy5pbnB1dEVsZW1lbnRbMF0pLnZhbHVlO1xyXG4gICAgICBjb25zdCBpc0FjdGl2ZSA9ICEhdGhpcy5wbGFjZWhvbGRlciB8fCAhIWlucHV0VmFsdWU7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMubGFiZWxFbGVtZW50WzBdLCAnYWN0aXZlJywgaXNBY3RpdmUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVDaGFyYWN0ZXJDb3VudCgpIHtcclxuICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLmlucHV0RWxlbWVudC5zaWJsaW5ncygnLmNoYXJhY3Rlci1jb3VudGVyJyksICdyZW1vdmUnKTtcclxuXHJcbiAgICB0aGlzLnJlbW92ZVZhbGlkYXRpb25DbGFzc2VzKCk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVWYWxpZGF0aW9uQ2xhc3NlcygpIHtcclxuICAgIC8vIHJlc2V0IHZhbGlkL2ludmFsaWQgc3RhdGVcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuaW5wdXRFbGVtZW50WzBdLCAnaW52YWxpZCcsIGZhbHNlKTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuaW5wdXRFbGVtZW50WzBdLCAndmFsaWQnLCBmYWxzZSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBNeklucHV0Q29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9pbnB1dC1jb250YWluZXIvaW5kZXgnO1xyXG5pbXBvcnQgeyBNeklucHV0UHJlZml4RGlyZWN0aXZlIH0gZnJvbSAnLi9pbnB1dC1wcmVmaXgvaW5kZXgnO1xyXG5pbXBvcnQgeyBNeklucHV0RGlyZWN0aXZlIH0gZnJvbSAnLi9pbnB1dC5kaXJlY3RpdmUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIE16SW5wdXRDb250YWluZXJDb21wb25lbnQsXHJcbiAgICBNeklucHV0RGlyZWN0aXZlLFxyXG4gICAgTXpJbnB1dFByZWZpeERpcmVjdGl2ZSxcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIE16SW5wdXRDb250YWluZXJDb21wb25lbnQsXHJcbiAgICBNeklucHV0RGlyZWN0aXZlLFxyXG4gICAgTXpJbnB1dFByZWZpeERpcmVjdGl2ZSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpJbnB1dE1vZHVsZSB7IH1cclxuIiwiaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGZyb21FdmVudCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAsIHB1Ymxpc2hSZXBsYXksIHJlZkNvdW50LCBzdGFydFdpdGggfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBNYXRjaE9wZXJhdG9yLCBNZWRpYSwgTWVkaWFCcmVha3BvaW50IH0gZnJvbSAnLi9tb2RlbHMvaW5kZXgnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTXpNZWRpYVNlcnZpY2Uge1xyXG5cclxuICBtZWRpYTogT2JzZXJ2YWJsZTxNZWRpYT47XHJcblxyXG4gIC8vIGJhc2VkIG9uIG5vZGVzX21vZHVsZXMvbWF0ZXJpYWxpemUtY3NzL3Nhc3MvY29tcG9uZW50cy9fdmFyaWFibGUuc2Nzc1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgbWVkaWFCcmVha3BvaW50czogTWVkaWFCcmVha3BvaW50W10gPSBbXHJcbiAgICB7IGFsaWFzOiAncycsIG1pbldpZHRoOiAwLCBtYXhXaWR0aDogNjAwIH0sXHJcbiAgICB7IGFsaWFzOiAnbScsIG1pbldpZHRoOiA2MDEsIG1heFdpZHRoOiA5OTIgfSxcclxuICAgIHsgYWxpYXM6ICdsJywgbWluV2lkdGg6IDk5MywgbWF4V2lkdGg6IDEyMDAgfSxcclxuICAgIHsgYWxpYXM6ICd4bCcsIG1pbldpZHRoOiAxMjAxLCBtYXhXaWR0aDogTnVtYmVyLk1BWF9WQUxVRSB9LFxyXG4gIF07XHJcblxyXG4gIHByaXZhdGUgcmVhZG9ubHkgbWF0Y2hPcGVyYXRvcnM6IE1hdGNoT3BlcmF0b3JbXSA9IFtcclxuICAgIHtcclxuICAgICAgb3BlcmF0b3I6ICdndCcsXHJcbiAgICAgIG1hdGNoOiAoYnJlYWtwb2ludDogTWVkaWFCcmVha3BvaW50KSA9PiB3aW5kb3cuaW5uZXJXaWR0aCA+IGJyZWFrcG9pbnQubWF4V2lkdGgsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBvcGVyYXRvcjogJ2x0JyxcclxuICAgICAgbWF0Y2g6IChicmVha3BvaW50OiBNZWRpYUJyZWFrcG9pbnQpID0+IHdpbmRvdy5pbm5lcldpZHRoIDwgYnJlYWtwb2ludC5taW5XaWR0aCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG9wZXJhdG9yOiBudWxsLFxyXG4gICAgICBtYXRjaDogKGJyZWFrcG9pbnQ6IE1lZGlhQnJlYWtwb2ludCkgPT4gd2luZG93LmlubmVyV2lkdGggPj0gYnJlYWtwb2ludC5taW5XaWR0aCAmJiB3aW5kb3cuaW5uZXJXaWR0aCA8PSBicmVha3BvaW50Lm1heFdpZHRoLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KFBMQVRGT1JNX0lEKSBwbGF0Zm9ybUlkOiBPYmplY3QpIHtcclxuICAgIGlmIChpc1BsYXRmb3JtQnJvd3NlcihwbGF0Zm9ybUlkKSkge1xyXG4gICAgICB0aGlzLm1lZGlhID0gdGhpcy5yZWdpc3RlcldpbmRvd1Jlc2l6ZUxpc3RlbmVyKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm1lZGlhID0gT2JzZXJ2YWJsZS5jcmVhdGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlzQWN0aXZlKGJyZWFrcG9pbnQ6IHN0cmluZyk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlPGJvb2xlYW4+KHN1YnNjcmliZXIgPT4ge1xyXG4gICAgICB0aGlzLm1lZGlhLnN1YnNjcmliZSgobWVkaWE6IE1lZGlhKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIHN1YnNjcmliZXIubmV4dCh0aGlzLmlzQWN0aXZlQnJlYWtwb2ludChicmVha3BvaW50KSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIHN1YnNjcmliZXIuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVnaXN0ZXJXaW5kb3dSZXNpemVMaXN0ZW5lcigpOiBPYnNlcnZhYmxlPE1lZGlhPiB7XHJcbiAgICByZXR1cm4gZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIG1hcCgoKSA9PiB0aGlzLmdldFdpbmRvd01lZGlhKCkpLFxyXG4gICAgICAgIHN0YXJ0V2l0aCh0aGlzLmdldFdpbmRvd01lZGlhKCkpLFxyXG4gICAgICAgIHB1Ymxpc2hSZXBsYXkoMSksXHJcbiAgICAgICAgcmVmQ291bnQoKSxcclxuICAgICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0V2luZG93TWVkaWEoKTogTWVkaWEge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYWxpYXM6IHRoaXMubWVkaWFCcmVha3BvaW50cy5maW5kKChicmVha3BvaW50OiBNZWRpYUJyZWFrcG9pbnQpID0+IHdpbmRvdy5pbm5lcldpZHRoIDw9IGJyZWFrcG9pbnQubWF4V2lkdGgpLmFsaWFzLFxyXG4gICAgICB3aW5kb3dIZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcclxuICAgICAgd2luZG93V2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNBY3RpdmVCcmVha3BvaW50KGJyZWFrcG9pbnQ6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgbGV0IG1hdGNoT3BlcmF0b3I6IE1hdGNoT3BlcmF0b3I7XHJcbiAgICBsZXQgbWVkaWFCcmVha3BvaW50OiBNZWRpYUJyZWFrcG9pbnQ7XHJcblxyXG4gICAgaWYgKGJyZWFrcG9pbnQpIHtcclxuICAgICAgY29uc3QgZnJhZ21lbnRzID0gYnJlYWtwb2ludC5zcGxpdCgnLScpO1xyXG5cclxuICAgICAgaWYgKGZyYWdtZW50cy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICBtYXRjaE9wZXJhdG9yID0gdGhpcy5tYXRjaE9wZXJhdG9ycy5maW5kKHggPT4geC5vcGVyYXRvciA9PT0gbnVsbCk7XHJcbiAgICAgICAgbWVkaWFCcmVha3BvaW50ID0gdGhpcy5tZWRpYUJyZWFrcG9pbnRzLmZpbmQoeCA9PiB4LmFsaWFzID09PSBmcmFnbWVudHNbMF0pO1xyXG4gICAgICB9IGVsc2UgaWYgKGZyYWdtZW50cy5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICBtYXRjaE9wZXJhdG9yID0gdGhpcy5tYXRjaE9wZXJhdG9ycy5maW5kKHggPT4geC5vcGVyYXRvciA9PT0gZnJhZ21lbnRzWzBdKTtcclxuICAgICAgICBtZWRpYUJyZWFrcG9pbnQgPSB0aGlzLm1lZGlhQnJlYWtwb2ludHMuZmluZCh4ID0+IHguYWxpYXMgPT09IGZyYWdtZW50c1sxXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoIW1lZGlhQnJlYWtwb2ludCB8fCAhbWF0Y2hPcGVyYXRvcikge1xyXG4gICAgICB0aHJvdyBFcnJvcihgTXpNZWRpYVNlcnZpY2UuaXNBY3RpdmUgcGFyYW1ldGVyIGlzIGludmFsaWQ6ICcke2JyZWFrcG9pbnR9JyBpcyBub3QgYSByZWNvZ25pemVkIGJyZWFrcG9pbnQuYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG1hdGNoT3BlcmF0b3IubWF0Y2gobWVkaWFCcmVha3BvaW50KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE16TWVkaWFTZXJ2aWNlIH0gZnJvbSAnLi9tZWRpYS5zZXJ2aWNlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgcHJvdmlkZXJzOiBbTXpNZWRpYVNlcnZpY2VdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpNZWRpYU1vZHVsZSB7IH1cclxuIiwiaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENvbXBvbmVudCxcclxuICBEaXJlY3RpdmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcixcclxuICBWaWV3Q2hpbGQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBIYW5kbGVQcm9wQ2hhbmdlcyB9IGZyb20gJy4uL3NoYXJlZC9pbmRleCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ216LW1vZGFsJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgI21vZGFsXHJcbiAgY2xhc3M9XCJtb2RhbFwiXHJcbiAgW2NsYXNzLm1vZGFsLWZpeGVkLWZvb3Rlcl09XCJmaXhlZEZvb3RlclwiXHJcbiAgW2NsYXNzLmJvdHRvbS1zaGVldF09XCJib3R0b21TaGVldFwiXHJcbiAgW2NsYXNzLm1vZGFsLWZ1bGxzY3JlZW5dPVwiZnVsbHNjcmVlblwiXHJcbj5cclxuICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibXotbW9kYWwtaGVhZGVyXCI+PC9uZy1jb250ZW50PlxyXG4gICAgPGRpdj5cclxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibXotbW9kYWwtY29udGVudFwiPjwvbmctY29udGVudD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm16LW1vZGFsLWZvb3RlclwiPjwvbmctY29udGVudD5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbmAsXHJcbiAgc3R5bGVzOiBbYC5tb2RhbDpub3QoLmJvdHRvbS1zaGVldCkubW9kYWwtZnVsbHNjcmVlbnt0b3A6MTJweCFpbXBvcnRhbnQ7bWFyZ2luOjAgYXV0bzt3aWR0aDpjYWxjKDEwMCUgLSAyNHB4KTtoZWlnaHQ6Y2FsYygxMDAlIC0gMjRweCk7bWF4LWhlaWdodDpub25lfS5tb2RhbC5ib3R0b20tc2hlZXQubW9kYWwtZnVsbHNjcmVlbntoZWlnaHQ6MTAwJTttYXgtaGVpZ2h0Om5vbmV9L2RlZXAvIG16LW1vZGFsLWhlYWRlciBoNSwvZGVlcC8gbXotbW9kYWwtaGVhZGVyIGg2e21hcmdpbi10b3A6MH1gXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16TW9kYWxDb21wb25lbnQgZXh0ZW5kcyBIYW5kbGVQcm9wQ2hhbmdlcyBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQElucHV0KCkgYm90dG9tU2hlZXQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgZml4ZWRGb290ZXI6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgZnVsbHNjcmVlbjogYm9vbGVhbjtcclxuICBASW5wdXQoKSBvcHRpb25zOiBNYXRlcmlhbGl6ZS5Nb2RhbE9wdGlvbnM7XHJcbiAgQE91dHB1dCgpIGNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBWaWV3Q2hpbGQoJ21vZGFsJykgbW9kYWxFbGVtZW50UmVmOiBFbGVtZW50UmVmO1xyXG5cclxuICBtb2RhbEVsZW1lbnQ6IEpRdWVyeTtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcikge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbml0SGFuZGxlcnMoKTtcclxuICAgIHRoaXMuaW5pdEVsZW1lbnRzKCk7XHJcbiAgICB0aGlzLmhhbmRsZVByb3BlcnRpZXMoKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMuaW5pdE1vZGFsKCk7XHJcbiAgfVxyXG5cclxuICBpbml0RWxlbWVudHMoKSB7XHJcbiAgICB0aGlzLm1vZGFsRWxlbWVudCA9ICQodGhpcy5tb2RhbEVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBpbml0SGFuZGxlcnMoKSB7XHJcbiAgICB0aGlzLmhhbmRsZXJzID0ge1xyXG4gICAgICAgb3B0aW9uczogKCkgPT4gdGhpcy5oYW5kbGVPcHRpb25zKCksXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgaW5pdE1vZGFsKCkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMubW9kYWxFbGVtZW50LCAnbW9kYWwnLCBbdGhpcy5vcHRpb25zXSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVQcm9wZXJ0aWVzKCkge1xyXG4gICAgc3VwZXIuZXhlY3V0ZVByb3BIYW5kbGVycygpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlT3B0aW9ucygpIHtcclxuICAgIC8vIGV4dGVuZCBjb21wbGV0ZSBmdW5jdGlvbiB0byBlbWl0IGNsb3NlIGV2ZW50IG9uIGNhbGxiYWNrIHJldHVyblxyXG4gICAgY29uc3Qgb3JpZ2luYWxDb21wbGV0ZUZuID0gdGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5jb21wbGV0ZSB8fCAoKCkgPT4ge30pO1xyXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5vcHRpb25zLCB7XHJcbiAgICAgIGNvbXBsZXRlOiAoKSA9PiB7XHJcbiAgICAgICAgb3JpZ2luYWxDb21wbGV0ZUZuKCk7XHJcbiAgICAgICAgdGhpcy5jbG9zZS5lbWl0KCk7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9wZW5Nb2RhbCgpIHtcclxuICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLm1vZGFsRWxlbWVudCwgJ21vZGFsJywgWydvcGVuJ10pO1xyXG4gIH1cclxuXHJcbiAgY2xvc2VNb2RhbCgpIHtcclxuICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLm1vZGFsRWxlbWVudCwgJ21vZGFsJywgWydjbG9zZSddKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIERlY2xhcmUgdGhlIHRhZ3MgdG8gYXZvaWQgZXJyb3I6ICc8bXotbW9kYWwteD4nIGlzIG5vdCBhIGtub3duIGVsZW1lbnRcclxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTEyNTFcclxuLy8gdHNsaW50OmRpc2FibGU6IGRpcmVjdGl2ZS1zZWxlY3RvclxyXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdtei1tb2RhbC1oZWFkZXInIH0pIGV4cG9ydCBjbGFzcyBNek1vZGFsSGVhZGVyRGlyZWN0aXZlIHsgfVxyXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdtei1tb2RhbC1jb250ZW50JyB9KSBleHBvcnQgY2xhc3MgTXpNb2RhbENvbnRlbnREaXJlY3RpdmUgeyB9XHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ216LW1vZGFsLWZvb3RlcicgfSkgZXhwb3J0IGNsYXNzIE16TW9kYWxGb290ZXJEaXJlY3RpdmUgeyB9XHJcbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBNek1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi4vbW9kYWwuY29tcG9uZW50JztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnYVttek1vZGFsQ2xvc2VdLCBidXR0b25bbXpNb2RhbENsb3NlXSwgYVttei1tb2RhbC1jbG9zZV0sIGJ1dHRvblttei1tb2RhbC1jbG9zZV0nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpNb2RhbENsb3NlRGlyZWN0aXZlIHtcclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKSBvbmNsaWNrKCkge1xyXG4gICAgdGhpcy5tb2RhbENvbXBvbmVudC5jbG9zZU1vZGFsKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgbW9kYWxDb21wb25lbnQ6IE16TW9kYWxDb21wb25lbnQsXHJcbiAgKSB7IH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIENvbXBvbmVudFJlZixcclxuICBJbmplY3RhYmxlLFxyXG4gIFR5cGUsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGZpcnN0IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgTXpJbmplY3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2luamVjdGlvbi9pbmplY3Rpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IE16QmFzZU1vZGFsIH0gZnJvbSAnLi4vbW9kYWwtYmFzZS9pbmRleCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBNek1vZGFsU2VydmljZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBpbmplY3Rpb25TZXJ2aWNlOiBNekluamVjdGlvblNlcnZpY2UsXHJcbiAgKSB7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogT3BlbiBtb2RhbCBjb21wb25lbnQuXHJcbiAgICovXHJcbiAgb3Blbihjb21wb25lbnRDbGFzczogVHlwZTxNekJhc2VNb2RhbD4sIG9wdGlvbnM6IGFueSA9IHt9KTogQ29tcG9uZW50UmVmPE16QmFzZU1vZGFsPiB7XHJcbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLmluamVjdGlvblNlcnZpY2UuYXBwZW5kQ29tcG9uZW50KGNvbXBvbmVudENsYXNzLCBvcHRpb25zKTtcclxuICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZS5tb2RhbENvbXBvbmVudC5jbG9zZVxyXG4gICAgICAucGlwZShmaXJzdCgpKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICBjb21wb25lbnRSZWYuZGVzdHJveSgpO1xyXG4gICAgICB9KTtcclxuICAgIHJldHVybiBjb21wb25lbnRSZWY7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBNekluamVjdGlvbk1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9pbmplY3Rpb24vaW5qZWN0aW9uLm1vZHVsZSc7XHJcbmltcG9ydCB7IE16TW9kYWxDbG9zZURpcmVjdGl2ZSB9IGZyb20gJy4vbW9kYWwtY2xvc2UvaW5kZXgnO1xyXG5pbXBvcnQge1xyXG4gIE16TW9kYWxDb21wb25lbnQsXHJcbiAgTXpNb2RhbENvbnRlbnREaXJlY3RpdmUsXHJcbiAgTXpNb2RhbEZvb3RlckRpcmVjdGl2ZSxcclxuICBNek1vZGFsSGVhZGVyRGlyZWN0aXZlLFxyXG59IGZyb20gJy4vbW9kYWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTXpNb2RhbFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2luZGV4JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW016SW5qZWN0aW9uTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIE16TW9kYWxDbG9zZURpcmVjdGl2ZSxcclxuICAgIE16TW9kYWxDb21wb25lbnQsXHJcbiAgICBNek1vZGFsQ29udGVudERpcmVjdGl2ZSxcclxuICAgIE16TW9kYWxGb290ZXJEaXJlY3RpdmUsXHJcbiAgICBNek1vZGFsSGVhZGVyRGlyZWN0aXZlLFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgTXpNb2RhbENsb3NlRGlyZWN0aXZlLFxyXG4gICAgTXpNb2RhbENvbXBvbmVudCxcclxuICAgIE16TW9kYWxDb250ZW50RGlyZWN0aXZlLFxyXG4gICAgTXpNb2RhbEZvb3RlckRpcmVjdGl2ZSxcclxuICAgIE16TW9kYWxIZWFkZXJEaXJlY3RpdmUsXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtNek1vZGFsU2VydmljZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNek1vZGFsTW9kdWxlIHsgfVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ216LW5hdmJhci1pdGVtLWNvbnRhaW5lcicsXHJcbiAgdGVtcGxhdGU6IGA8dWwgaWQ9XCJuYXYtbW9iaWxlXCIgY2xhc3M9XCJ7eyBhbGlnbiB9fVwiPlxyXG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuPC91bD5gLFxyXG4gIHN0eWxlczogW2BgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16TmF2YmFySXRlbUNvbnRhaW5lckNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgYWxpZ246IHN0cmluZztcclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ216LW5hdmJhci1pdGVtJyxcclxuICB0ZW1wbGF0ZTogYDxsaSBcclxuICBjbGFzcz1cInt7IGl0ZW1DbGFzcyB9fVwiXHJcbiAgW2NsYXNzLmFjdGl2ZV09XCJhY3RpdmVcIlxyXG4+XHJcbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L2xpPmAsXHJcbiAgc3R5bGVzOiBbYGBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpOYXZiYXJJdGVtQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBhY3RpdmU6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgaXRlbUNsYXNzOiBzdHJpbmc7XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtei1uYXZiYXInLFxyXG4gIHRlbXBsYXRlOiBgPG5hdj5cclxuICA8ZGl2IGNsYXNzPVwibmF2LXdyYXBwZXIge3sgbmF2YmFyQ2xhc3MgfX1cIj5cclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICA8L2Rpdj5cclxuPC9uYXY+YCxcclxuICBzdHlsZXM6IFtgLm5hdi13cmFwcGVyIC9kZWVwLyAuYnRuIGl7bGluZS1oZWlnaHQ6aW5oZXJpdH1gXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16TmF2YmFyQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBuYXZiYXJDbGFzczogc3RyaW5nO1xyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBNek5hdmJhckl0ZW1Db250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL25hdmJhci1pdGVtLWNvbnRhaW5lci9pbmRleCc7XHJcbmltcG9ydCB7IE16TmF2YmFySXRlbUNvbXBvbmVudCB9IGZyb20gJy4vbmF2YmFyLWl0ZW0vaW5kZXgnO1xyXG5pbXBvcnQgeyBNek5hdmJhckNvbXBvbmVudCB9IGZyb20gJy4vbmF2YmFyLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgTXpOYXZiYXJDb21wb25lbnQsXHJcbiAgICBNek5hdmJhckl0ZW1Db21wb25lbnQsXHJcbiAgICBNek5hdmJhckl0ZW1Db250YWluZXJDb21wb25lbnQsXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBNek5hdmJhckNvbXBvbmVudCxcclxuICAgIE16TmF2YmFySXRlbUNvbXBvbmVudCxcclxuICAgIE16TmF2YmFySXRlbUNvbnRhaW5lckNvbXBvbmVudCxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpOYXZiYXJNb2R1bGUgeyB9XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXotcGFnaW5hdGlvbi1wYWdlLWJ1dHRvbicsXHJcbiAgdGVtcGxhdGU6IGA8bGkgW2NsYXNzLmFjdGl2ZV09XCJhY3RpdmVcIlxyXG4gIFtjbGFzcy5kaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgW2NsYXNzLndhdmVzLWVmZmVjdF09XCIhYWN0aXZlICYmICFkaXNhYmxlZFwiPlxyXG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuPC9saT5gLFxyXG4gIHN0eWxlczogW2BgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16UGFnaW5hdGlvblBhZ2VCdXR0b25Db21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGFjdGl2ZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBIYW5kbGVQcm9wQ2hhbmdlcyB9IGZyb20gJy4uL3NoYXJlZCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ216LXBhZ2luYXRpb24nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPHVsIGNsYXNzPVwicGFnaW5hdGlvblwiPlxyXG4gICAgPG16LXBhZ2luYXRpb24tcGFnZS1idXR0b24gW2Rpc2FibGVkXT1cImN1cnJlbnRQYWdlID09PSAxXCIgKm5nSWY9XCJlbmFibGVGaXJzdEFuZExhc3RQYWdlQnV0dG9uc1wiPlxyXG4gICAgICA8YSAoY2xpY2spPVwiZmlyc3RQYWdlKClcIj48aSBtei1pY29uIFtpY29uXT1cIidmaXJzdF9wYWdlJ1wiPjwvaT48L2E+XHJcbiAgICA8L216LXBhZ2luYXRpb24tcGFnZS1idXR0b24+XHJcbiAgICA8bXotcGFnaW5hdGlvbi1wYWdlLWJ1dHRvbiBbZGlzYWJsZWRdPVwiY3VycmVudFBhZ2UgPT09IDFcIj5cclxuICAgICAgPGEgKGNsaWNrKT1cInByZXZpb3VzUGFnZSgpXCI+PGkgbXotaWNvbiBbaWNvbl09XCInY2hldnJvbl9sZWZ0J1wiPjwvaT48L2E+XHJcbiAgICA8L216LXBhZ2luYXRpb24tcGFnZS1idXR0b24+XHJcbiAgICA8bXotcGFnaW5hdGlvbi1wYWdlLWJ1dHRvbiAqbmdGb3I9XCJsZXQgcGFnZSBvZiBwYWdlc1wiXHJcbiAgICAgIFthY3RpdmVdPVwicGFnZSA9PT0gY3VycmVudFBhZ2VcIlxyXG4gICAgPlxyXG4gICAgICA8YSAoY2xpY2spPVwiY2hhbmdlQ3VycmVudFBhZ2UocGFnZSlcIj57eyBwYWdlIH19PC9hPlxyXG4gICAgPC9tei1wYWdpbmF0aW9uLXBhZ2UtYnV0dG9uPlxyXG4gICAgPG16LXBhZ2luYXRpb24tcGFnZS1idXR0b24gW2Rpc2FibGVkXT1cImN1cnJlbnRQYWdlID09PSB0b3RhbFBhZ2VzXCI+XHJcbiAgICAgIDxhIChjbGljayk9XCJuZXh0UGFnZSgpXCI+PGkgbXotaWNvbiBbaWNvbl09XCInY2hldnJvbl9yaWdodCdcIj48L2k+PC9hPlxyXG4gICAgPC9tei1wYWdpbmF0aW9uLXBhZ2UtYnV0dG9uPlxyXG4gICAgPG16LXBhZ2luYXRpb24tcGFnZS1idXR0b24gW2Rpc2FibGVkXT1cImN1cnJlbnRQYWdlID09PSB0b3RhbFBhZ2VzXCIgKm5nSWY9XCJlbmFibGVGaXJzdEFuZExhc3RQYWdlQnV0dG9uc1wiPlxyXG4gICAgICA8YSAoY2xpY2spPVwibGFzdFBhZ2UoKVwiPjxpIG16LWljb24gW2ljb25dPVwiJ2xhc3RfcGFnZSdcIj48L2k+PC9hPlxyXG4gICAgPC9tei1wYWdpbmF0aW9uLXBhZ2UtYnV0dG9uPlxyXG4gIDwvdWw+YCxcclxuICBzdHlsZXM6IFtgYF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNelBhZ2luYXRpb25Db21wb25lbnQgZXh0ZW5kcyBIYW5kbGVQcm9wQ2hhbmdlcyBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgY3VycmVudFBhZ2UgPSAxO1xyXG4gIEBJbnB1dCgpIGVuYWJsZUZpcnN0QW5kTGFzdFBhZ2VCdXR0b25zID0gZmFsc2U7XHJcbiAgQElucHV0KCkgaXRlbXNQZXJQYWdlOiBudW1iZXI7XHJcbiAgQElucHV0KCkgbWF4UGFnZUJ1dHRvbnMgPSA1O1xyXG4gIEBJbnB1dCgpIHRvdGFsSXRlbXM6IG51bWJlcjtcclxuICBAT3V0cHV0KCkgcGFnZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG5cclxuICBwYWdlczogbnVtYmVyW107XHJcbiAgZ2V0IHRvdGFsUGFnZXMoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBNYXRoLmNlaWwodGhpcy50b3RhbEl0ZW1zIC8gdGhpcy5pdGVtc1BlclBhZ2UpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluaXRIYW5kbGVycygpO1xyXG4gICAgdGhpcy5yZW5kZXJCdXR0b25zKCk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VDdXJyZW50UGFnZShwYWdlTnVtYmVyOiBudW1iZXIpIHtcclxuICAgIHRoaXMuY3VycmVudFBhZ2UgPSBwYWdlTnVtYmVyO1xyXG4gICAgdGhpcy5wYWdlQ2hhbmdlLmVtaXQocGFnZU51bWJlcik7XHJcbiAgICB0aGlzLnJlbmRlckJ1dHRvbnMoKTtcclxuICB9XHJcblxyXG4gIGZpcnN0UGFnZSgpIHtcclxuICAgIHRoaXMuY2hhbmdlQ3VycmVudFBhZ2UoMSk7XHJcbiAgfVxyXG5cclxuICBpbml0SGFuZGxlcnMoKSB7XHJcbiAgICB0aGlzLmhhbmRsZXJzID0ge1xyXG4gICAgICBjdXJyZW50UGFnZTogKCkgPT4gdGhpcy5yZW5kZXJCdXR0b25zKCksXHJcbiAgICAgIGl0ZW1zUGVyUGFnZTogKCkgPT4gdGhpcy5yZW5kZXJCdXR0b25zKCksXHJcbiAgICAgIG1heFBhZ2VCdXR0b25zOiAoKSA9PiB0aGlzLnJlbmRlckJ1dHRvbnMoKSxcclxuICAgICAgdG90YWxJdGVtczogKCkgPT4gdGhpcy5yZW5kZXJCdXR0b25zKCksXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgbGFzdFBhZ2UoKSB7XHJcbiAgICB0aGlzLmNoYW5nZUN1cnJlbnRQYWdlKHRoaXMudG90YWxQYWdlcyk7XHJcbiAgfVxyXG5cclxuICBuZXh0UGFnZSgpIHtcclxuICAgIGlmICh0aGlzLmN1cnJlbnRQYWdlIDwgdGhpcy50b3RhbFBhZ2VzKSB7XHJcbiAgICAgIGNvbnN0IG5leHRQYWdlID0gdGhpcy5jdXJyZW50UGFnZSArIDE7XHJcbiAgICAgIHRoaXMuY2hhbmdlQ3VycmVudFBhZ2UobmV4dFBhZ2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJldmlvdXNQYWdlKCkge1xyXG4gICAgaWYgKHRoaXMuY3VycmVudFBhZ2UgIT09IDEpIHtcclxuICAgICAgY29uc3QgcHJldmlvdXNQYWdlID0gdGhpcy5jdXJyZW50UGFnZSAtIDE7XHJcbiAgICAgIHRoaXMuY2hhbmdlQ3VycmVudFBhZ2UocHJldmlvdXNQYWdlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlckJ1dHRvbnMoKSB7XHJcbiAgICBjb25zdCBidXR0b25zQ291bnQgPSBNYXRoLm1pbih0aGlzLm1heFBhZ2VCdXR0b25zLCB0aGlzLnRvdGFsUGFnZXMpO1xyXG4gICAgY29uc3QgbWF4UG9zaXRpb24gPSB0aGlzLnRvdGFsUGFnZXMgLSBidXR0b25zQ291bnQ7XHJcbiAgICBjb25zdCBoYWxmQnV0dG9ucyA9IE1hdGguZmxvb3IoYnV0dG9uc0NvdW50IC8gMik7XHJcblxyXG4gICAgbGV0IGhpZGRlblBhZ2VzQmVmb3JlID0gKHRoaXMuY3VycmVudFBhZ2UgLSBoYWxmQnV0dG9ucyk7XHJcbiAgICBpZiAoaGlkZGVuUGFnZXNCZWZvcmUgPiBtYXhQb3NpdGlvbikge1xyXG4gICAgICBoaWRkZW5QYWdlc0JlZm9yZSA9IG1heFBvc2l0aW9uICsgMTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmcm9tID0gTWF0aC5tYXgoaGlkZGVuUGFnZXNCZWZvcmUsIDEpO1xyXG4gICAgY29uc3QgdG8gPSBNYXRoLm1pbih0aGlzLnRvdGFsUGFnZXMsIGZyb20gKyB0aGlzLm1heFBhZ2VCdXR0b25zIC0gMSk7XHJcblxyXG4gICAgdGhpcy5wYWdlcyA9IEFycmF5KGJ1dHRvbnNDb3VudCkuZmlsbCgwKS5tYXAoKHgsIGkpID0+IGZyb20gKyBpKTtcclxuXHJcbiAgICBpZiAodGhpcy5jdXJyZW50UGFnZSA+IHRoaXMudG90YWxQYWdlcykge1xyXG4gICAgICB0aGlzLmN1cnJlbnRQYWdlID0gdGhpcy5wYWdlc1swXTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE16SWNvbk1vZHVsZSB9IGZyb20gJy4uL2ljb24vaWNvbi5tb2R1bGUnO1xyXG5pbXBvcnQgeyBNelBhZ2luYXRpb25QYWdlQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdpbmF0aW9uLXBhZ2UtYnV0dG9uL3BhZ2luYXRpb24tcGFnZS1idXR0b24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgTXpQYWdpbmF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdpbmF0aW9uLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIE16SWNvbk1vZHVsZSxcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgTXpQYWdpbmF0aW9uQ29tcG9uZW50LFxyXG4gICAgTXpQYWdpbmF0aW9uUGFnZUJ1dHRvbkNvbXBvbmVudCxcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIE16UGFnaW5hdGlvbkNvbXBvbmVudCxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpQYWdpbmF0aW9uTW9kdWxlIHsgfVxyXG4iLCJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgUmVuZGVyZXIsXHJcbiAgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ216LXBhcmFsbGF4JyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgI3BhcmFsbGF4Q29udGFpbmVyIGNsYXNzPVwicGFyYWxsYXgtY29udGFpbmVyXCI+XHJcbiAgPGRpdiAjcGFyYWxsYXggY2xhc3M9XCJwYXJhbGxheFwiPlxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5gLFxyXG4gIHN0eWxlczogW2BgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16UGFyYWxsYXhDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuICBASW5wdXQoKSBoZWlnaHQ6IG51bWJlcjtcclxuXHJcbiAgQFZpZXdDaGlsZCgncGFyYWxsYXgnKSBwYXJhbGxheDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdwYXJhbGxheENvbnRhaW5lcicpIHBhcmFsbGF4Q29udGFpbmVyOiBFbGVtZW50UmVmO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyKSB7IH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5wYXJhbGxheENvbnRhaW5lci5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0JywgaXNOYU4odGhpcy5oZWlnaHQpID8gJzUwMHB4JyA6IHRoaXMuaGVpZ2h0ICsgJ3B4Jyk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QoJCh0aGlzLnBhcmFsbGF4Lm5hdGl2ZUVsZW1lbnQpLCAncGFyYWxsYXgnKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE16UGFyYWxsYXhDb21wb25lbnQgfSBmcm9tICcuL3BhcmFsbGF4LmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW016UGFyYWxsYXhDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtNelBhcmFsbGF4Q29tcG9uZW50XSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16UGFyYWxsYXhNb2R1bGUgeyB9XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXotcHJvZ3Jlc3MnLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInByb2dyZXNzIHt7IGJhY2tncm91bmRDbGFzcyB9fVwiPlxyXG5cclxuICA8ZGl2XHJcbiAgICBjbGFzcz1cInByb2dyZXNzLWJhciB7eyBwcm9ncmVzc0NsYXNzIH19XCJcclxuICAgIFtjbGFzcy5kZXRlcm1pbmF0ZV09XCJwZXJjZW50YWdlICE9IG51bGxcIlxyXG4gICAgW2NsYXNzLmluZGV0ZXJtaW5hdGVdPVwicGVyY2VudGFnZSA9PSBudWxsXCJcclxuICAgIFtzdHlsZS53aWR0aC4lXT1cInBlcmNlbnRhZ2VcIj5cclxuICA8L2Rpdj5cclxuPC9kaXY+YCxcclxuICBzdHlsZXM6IFtgYF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNelByb2dyZXNzQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBiYWNrZ3JvdW5kQ2xhc3M6IHN0cmluZztcclxuICBASW5wdXQoKSBwZXJjZW50YWdlOiBudW1iZXI7XHJcbiAgQElucHV0KCkgcHJvZ3Jlc3NDbGFzczogc3RyaW5nO1xyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBNelByb2dyZXNzQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9ncmVzcy5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGRlY2xhcmF0aW9uczogW016UHJvZ3Jlc3NDb21wb25lbnRdLFxyXG4gICAgZXhwb3J0czogW016UHJvZ3Jlc3NDb21wb25lbnRdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpQcm9ncmVzc01vZHVsZSB7IH1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ216LXJhZGlvLWJ1dHRvbi1jb250YWluZXInLFxyXG4gIHRlbXBsYXRlOiBgPHAgY2xhc3M9XCJyYWRpby1idXR0b24tZmllbGRcIj5cclxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjwvcD5gLFxyXG4gIHN0eWxlczogW2BgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16UmFkaW9CdXR0b25Db250YWluZXJDb21wb25lbnQgeyB9XHJcbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdEJpbmRpbmcsIElucHV0LCBPbkluaXQsIFJlbmRlcmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBIYW5kbGVQcm9wQ2hhbmdlcyB9IGZyb20gJy4uL3NoYXJlZC9pbmRleCc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ2lucHV0W216UmFkaW9CdXR0b25dLCBpbnB1dFttei1yYWRpby1idXR0b25dJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16UmFkaW9CdXR0b25EaXJlY3RpdmUgZXh0ZW5kcyBIYW5kbGVQcm9wQ2hhbmdlcyBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgLy8gbmF0aXZlIHByb3BlcnRpZXNcclxuICBASG9zdEJpbmRpbmcoKSBASW5wdXQoKSBpZDogc3RyaW5nO1xyXG5cclxuICAvLyBkaXJlY3RpdmUgcHJvcGVydGllc1xyXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgd2l0aEdhcDogYm9vbGVhbjtcclxuXHJcbiAgaW5wdXRFbGVtZW50OiBKUXVlcnk7XHJcbiAgaW5wdXRDb250YWluZXJFbGVtZW50OiBKUXVlcnk7XHJcbiAgbGFiZWxFbGVtZW50OiBKUXVlcnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5pdEhhbmRsZXJzKCk7XHJcbiAgICB0aGlzLmluaXRFbGVtZW50cygpO1xyXG4gICAgdGhpcy5oYW5kbGVQcm9wZXJ0aWVzKCk7XHJcbiAgfVxyXG5cclxuICBpbml0SGFuZGxlcnMoKSB7XHJcbiAgICB0aGlzLmhhbmRsZXJzID0ge1xyXG4gICAgICBsYWJlbDogKCkgPT4gdGhpcy5oYW5kbGVMYWJlbCgpLFxyXG4gICAgICB3aXRoR2FwOiAoKSA9PiB0aGlzLmhhbmRsZVdpdGhHYXAoKSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBpbml0RWxlbWVudHMoKSB7XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudCA9ICQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgdGhpcy5pbnB1dENvbnRhaW5lckVsZW1lbnQgPSAkKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5wYXJlbnQoJy5yYWRpby1idXR0b24tZmllbGQnKTtcclxuICAgIHRoaXMubGFiZWxFbGVtZW50ID0gdGhpcy5jcmVhdGVMYWJlbEVsZW1lbnQoKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUxhYmVsRWxlbWVudCgpIHtcclxuICAgIGNvbnN0IGxhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBsYWJlbEVsZW1lbnQuc2V0QXR0cmlidXRlKCdmb3InLCB0aGlzLmlkKTtcclxuXHJcbiAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QodGhpcy5pbnB1dEVsZW1lbnQsICdhZnRlcicsIFtsYWJlbEVsZW1lbnRdKTtcclxuXHJcbiAgICByZXR1cm4gJChsYWJlbEVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlUHJvcGVydGllcygpIHtcclxuICAgIGlmICh0aGlzLmlucHV0Q29udGFpbmVyRWxlbWVudC5sZW5ndGggPT09IDApIHtcclxuICAgICAgY29uc29sZS5lcnJvcignUmFkaW8gQnV0dG9uIG11c3QgYmUgcGxhY2VkIGluc2lkZSBhIFttei1yYWRpby1idXR0b24tY29udGFpbmVyXSB0YWcnLCB0aGlzLmlucHV0RWxlbWVudCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBzdXBlci5leGVjdXRlUHJvcEhhbmRsZXJzKCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVMYWJlbCgpIHtcclxuICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLmxhYmVsRWxlbWVudCwgJ3RleHQnLCBbdGhpcy5sYWJlbF0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlV2l0aEdhcCgpIHtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuaW5wdXRFbGVtZW50WzBdLCAnd2l0aC1nYXAnLCB0aGlzLndpdGhHYXApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTXpSYWRpb0J1dHRvbkNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vcmFkaW8tYnV0dG9uLWNvbnRhaW5lci9pbmRleCc7XHJcbmltcG9ydCB7IE16UmFkaW9CdXR0b25EaXJlY3RpdmUgfSBmcm9tICcuL3JhZGlvLWJ1dHRvbi5kaXJlY3RpdmUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIE16UmFkaW9CdXR0b25EaXJlY3RpdmUsXHJcbiAgICBNelJhZGlvQnV0dG9uQ29udGFpbmVyQ29tcG9uZW50LFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgTXpSYWRpb0J1dHRvbkRpcmVjdGl2ZSxcclxuICAgIE16UmFkaW9CdXR0b25Db250YWluZXJDb21wb25lbnQsXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16UmFkaW9CdXR0b25Nb2R1bGUgeyB9XHJcbiIsImV4cG9ydCBhYnN0cmFjdCBjbGFzcyBFcnJvck1lc3NhZ2VSZXNvdXJjZSB7XHJcbiAgbWF4bGVuZ3RoPzogc3RyaW5nO1xyXG4gIG1pbmxlbmd0aD86IHN0cmluZztcclxuICBwYXR0ZXJuPzogc3RyaW5nO1xyXG4gIHJlcXVpcmVkPzogc3RyaW5nO1xyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgYW5pbWF0ZSxcclxuICBzdHlsZSxcclxuICB0cmFuc2l0aW9uLFxyXG4gIHRyaWdnZXIsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBFcnJvck1lc3NhZ2VSZXNvdXJjZSB9IGZyb20gJy4vbW9kZWxzL2luZGV4JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXotZXJyb3ItbWVzc2FnZScsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IFtAZW50ZXJBbmltYXRpb25dPVwiZXJyb3JNZXNzYWdlXCIgY2xhc3M9XCJpbnZhbGlkXCIgKm5nSWY9XCIoY29udHJvbC50b3VjaGVkIHx8IGNvbnRyb2wuZGlydHkpICYmIGNvbnRyb2wuaW52YWxpZCAmJiBlcnJvck1lc3NhZ2VcIj57eyBlcnJvck1lc3NhZ2UgfX08L2Rpdj5gLFxyXG4gIHN0eWxlczogW2BkaXYuaW52YWxpZHtjb2xvcjojZTMwNjEzO2ZvbnQtc2l6ZTouOHJlbTtvcGFjaXR5OjE7b3ZlcmZsb3ctd3JhcDpicmVhay13b3JkfWlucHV0Om5vdChbdHlwZT1jaGVja2JveF0pK2xhYmVsKzpob3N0IGRpdi5pbnZhbGlkLG16LXNlbGVjdC1jb250YWluZXIgOmhvc3QgZGl2LmludmFsaWQsdGV4dGFyZWErbGFiZWwrOmhvc3QgZGl2LmludmFsaWR7bWFyZ2luLXRvcDotMTlweDttaW4taGVpZ2h0OjE5cHh9YF0sXHJcbiAgYW5pbWF0aW9uczogW1xyXG4gICAgdHJpZ2dlcihcclxuICAgICAgJ2VudGVyQW5pbWF0aW9uJywgW1xyXG4gICAgICAgIHRyYW5zaXRpb24oJzplbnRlcicsIFtcclxuICAgICAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNXB4KScsIG9wYWNpdHk6IDAgfSksXHJcbiAgICAgICAgICBhbmltYXRlKCczMDBtcycsIHN0eWxlKHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKScsIG9wYWNpdHk6IDEgfSkpLFxyXG4gICAgICAgIF0pLFxyXG4gICAgICAgIHRyYW5zaXRpb24oJzpsZWF2ZScsIFtcclxuICAgICAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKScsIG9wYWNpdHk6IDEgfSksXHJcbiAgICAgICAgICBhbmltYXRlKCczMDBtcycsIHN0eWxlKHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNXB4KScsIG9wYWNpdHk6IDAgfSkpLFxyXG4gICAgICAgIF0pLFxyXG4gICAgICBdLFxyXG4gICAgKSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpFcnJvck1lc3NhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbDtcclxuICBASW5wdXQoKSBlcnJvck1lc3NhZ2VSZXNvdXJjZTogRXJyb3JNZXNzYWdlUmVzb3VyY2U7XHJcblxyXG4gIGNvbnRyb2xTdGF0dXNDaGFuZ2VzU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcbiAgZXJyb3JNZXNzYWdlID0gJyc7XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5idWlsZEVycm9yTWVzc2FnZSgpO1xyXG4gICAgdGhpcy5jb250cm9sU3RhdHVzQ2hhbmdlc1N1YnNjcmlwdGlvbiA9IHRoaXMuY29udHJvbC5zdGF0dXNDaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB0aGlzLmJ1aWxkRXJyb3JNZXNzYWdlKCkpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmNvbnRyb2xTdGF0dXNDaGFuZ2VzU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICBidWlsZEVycm9yTWVzc2FnZSgpIHtcclxuICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJyc7XHJcbiAgICBpZiAodGhpcy5jb250cm9sLmVycm9ycyAmJiB0aGlzLmVycm9yTWVzc2FnZVJlc291cmNlKSB7XHJcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5jb250cm9sLmVycm9ycykuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgKz0gdGhpcy5lcnJvck1lc3NhZ2VSZXNvdXJjZVtrZXldICsgJyAnO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICBDb21wb25lbnRSZWYsXHJcbiAgRWxlbWVudFJlZixcclxuICBIb3N0QmluZGluZyxcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIFJlbmRlcmVyLFxyXG4gIFZpZXdDb250YWluZXJSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb24sXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBFcnJvck1lc3NhZ2VSZXNvdXJjZSwgTXpFcnJvck1lc3NhZ2VDb21wb25lbnQgfSBmcm9tICcuL2Vycm9yLW1lc3NhZ2UvaW5kZXgnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBzZWxlY3RvcjogJ216LXZhbGlkYXRpb24sIFttei12YWxpZGF0aW9uXSwgW216VmFsaWRhdGlvbl0nLFxyXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXHJcbiAgc3R5bGVzOiBbYC5zZWxlY3Qtd3JhcHBlciBpbnB1dC5zZWxlY3QtZHJvcGRvd24uaW52YWxpZCx0ZXh0YXJlYS5uZy1pbnZhbGlkLm5nLXRvdWNoZWQ6Zm9jdXN7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2Y0NDMzNjtib3gtc2hhZG93OjAgMXB4IDAgMCAjZjQ0MzM2fS5zZWxlY3Qtd3JhcHBlciBpbnB1dC5zZWxlY3QtZHJvcGRvd24udmFsaWR7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgIzRjYWY1MDtib3gtc2hhZG93OjAgMXB4IDAgMCAjNGNhZjUwfWlucHV0Om5vdChbdHlwZT1jaGVja2JveF0pOmZvY3VzK2xhYmVsLmFjdGl2ZSBzcGFuLnBsYWNlaG9sZGVyLXJlcXVpcmVkLHRleHRhcmVhOmZvY3VzK2xhYmVsLmFjdGl2ZSBzcGFuLnBsYWNlaG9sZGVyLXJlcXVpcmVke2NvbG9yOiNmNDQzMzZ9YF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNelZhbGlkYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG4gIGVycm9yTWVzc2FnZUNvbXBvbmVudD86IENvbXBvbmVudFJlZjxNekVycm9yTWVzc2FnZUNvbXBvbmVudD4gPSBudWxsO1xyXG4gIGxhYmVsRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgbmF0aXZlRWxlbWVudDogSlF1ZXJ5O1xyXG4gIHN0YXR1c0NoYW5nZXNTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgLy8gbmF0aXZlIHByb3BlcnRpZXNcclxuICBASW5wdXQoKSBpZDogc3RyaW5nO1xyXG5cclxuICAvLyBjb21wb25lbnQgcHJvcGVydGllc1xyXG4gIEBJbnB1dCgpIGVycm9yTWVzc2FnZVJlc291cmNlOiBFcnJvck1lc3NhZ2VSZXNvdXJjZTtcclxuXHJcbiAgcHJpdmF0ZSBfZm9ybUNvbnRyb2xEaXNhYmxlZCA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX3JlcXVpcmVkID0gZmFsc2U7XHJcblxyXG4gIEBIb3N0QmluZGluZygnYXR0ci5yZXF1aXJlZCcpXHJcbiAgQElucHV0KClcclxuICBnZXQgcmVxdWlyZWQoKSB7IHJldHVybiB0aGlzLl9yZXF1aXJlZDsgfVxyXG4gIHNldCByZXF1aXJlZCh2YWx1ZTogYW55KSB7IHRoaXMuX3JlcXVpcmVkID0gKHZhbHVlICE9IG51bGwgJiYgYCR7dmFsdWV9YCAhPT0gJ2ZhbHNlJyk7IH1cclxuXHJcbiAgQElucHV0KClcclxuICBnZXQgZm9ybUNvbnRyb2xEaXNhYmxlZCgpIHsgcmV0dXJuIHRoaXMuX2Zvcm1Db250cm9sRGlzYWJsZWQ7IH1cclxuICBzZXQgZm9ybUNvbnRyb2xEaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fZm9ybUNvbnRyb2xEaXNhYmxlZCA9IHZhbHVlO1xyXG4gICAgaWYgKHRoaXMuX2Zvcm1Db250cm9sRGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5uZ0NvbnRyb2wuY29udHJvbC5kaXNhYmxlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm5nQ29udHJvbC5jb250cm9sLmVuYWJsZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGVsZW1lbnRUb0FkZFZhbGlkYXRpb24oKTogSlF1ZXJ5IHtcclxuICAgIHJldHVybiB0aGlzLmlzTmF0aXZlU2VsZWN0RWxlbWVudFxyXG4gICAgICA/IHRoaXMuaW5wdXRTZWxlY3REcm9wZG93blxyXG4gICAgICA6IHRoaXMubmF0aXZlRWxlbWVudDtcclxuICB9XHJcblxyXG4gIGdldCBpbnB1dFNlbGVjdERyb3Bkb3duKCk6IEpRdWVyeSB7XHJcbiAgICByZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50LnNpYmxpbmdzKCdpbnB1dC5zZWxlY3QtZHJvcGRvd24nKTtcclxuICB9XHJcblxyXG4gIGdldCBpc05hdGl2ZVNlbGVjdEVsZW1lbnQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50WzBdLm5vZGVOYW1lID09PSAnU0VMRUNUJztcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgWyckZXZlbnQudGFyZ2V0J10pXHJcbiAgb25Gb2N1c091dCh0YXJnZXQ6IEV2ZW50KSB7XHJcbiAgICB0aGlzLm5nQ29udHJvbC5jb250cm9sLm1hcmtBc1RvdWNoZWQoKTtcclxuICAgIHRoaXMuc2V0VmFsaWRhdGlvblN0YXRlKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcclxuICAgIHB1YmxpYyBuZ0NvbnRyb2w6IE5nQ29udHJvbCxcclxuICAgIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIsXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5pbml0RWxlbWVudHMoKTtcclxuICAgIHRoaXMuaW5pdEVycm9yTWVzc2FnZUNvbXBvbmVudCgpO1xyXG4gICAgdGhpcy5zdWJzY3JpYmVTdGF0dXNDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuc3RhdHVzQ2hhbmdlc1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy5lcnJvck1lc3NhZ2VDb21wb25lbnQuZGVzdHJveSgpO1xyXG4gIH1cclxuXHJcbiAgY2xlYXJWYWxpZGF0aW9uU3RhdGUoZWxlbWVudDogSlF1ZXJ5KSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyhlbGVtZW50WzBdLCAndmFsaWQnLCBmYWxzZSk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyhlbGVtZW50WzBdLCAnaW52YWxpZCcsIGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZVJlcXVpcmVkU3BhbkVsZW1lbnQoKSB7XHJcbiAgICBpZiAodGhpcy5yZXF1aXJlZCAmJiB0aGlzLmxhYmVsRWxlbWVudCkge1xyXG4gICAgICBjb25zdCBzcGFuRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgc3BhbkVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwbGFjZWhvbGRlci1yZXF1aXJlZCcpO1xyXG4gICAgICBzcGFuRWxlbWVudC50ZXh0Q29udGVudCA9ICcgKic7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLmxhYmVsRWxlbWVudCwgJ2FwcGVuZENoaWxkJywgW3NwYW5FbGVtZW50XSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbml0RWxlbWVudHMoKSB7XHJcbiAgICB0aGlzLmxhYmVsRWxlbWVudCA9ICQoJ2xhYmVsW2Zvcj1cIicgKyB0aGlzLmlkICsgJ1wiXScpWzBdO1xyXG4gICAgdGhpcy5uYXRpdmVFbGVtZW50ID0gJCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XHJcbiAgICB0aGlzLmNyZWF0ZVJlcXVpcmVkU3BhbkVsZW1lbnQoKTtcclxuICB9XHJcblxyXG4gIGluaXRFcnJvck1lc3NhZ2VDb21wb25lbnQoKSB7XHJcbiAgICBjb25zdCBlcnJvck1lc3NhZ2VGYWN0b3J5ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShNekVycm9yTWVzc2FnZUNvbXBvbmVudCk7XHJcbiAgICB0aGlzLmVycm9yTWVzc2FnZUNvbXBvbmVudCA9IHRoaXMudmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQoZXJyb3JNZXNzYWdlRmFjdG9yeSk7XHJcbiAgICB0aGlzLmVycm9yTWVzc2FnZUNvbXBvbmVudC5pbnN0YW5jZS5lcnJvck1lc3NhZ2VSZXNvdXJjZSA9IHRoaXMuZXJyb3JNZXNzYWdlUmVzb3VyY2U7XHJcbiAgICB0aGlzLmVycm9yTWVzc2FnZUNvbXBvbmVudC5pbnN0YW5jZS5jb250cm9sID0gdGhpcy5uZ0NvbnRyb2wuY29udHJvbDtcclxuICAgIHRoaXMuZXJyb3JNZXNzYWdlQ29tcG9uZW50LmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcclxuXHJcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSB0aGlzLm5hdGl2ZUVsZW1lbnQucGFyZW50KCkuY2hpbGRyZW4oJ216LWVycm9yLW1lc3NhZ2UnKTtcclxuICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZChlcnJvck1lc3NhZ2UsICdpbnNlcnRBZnRlcicsIFt0aGlzLmxhYmVsRWxlbWVudF0pO1xyXG4gIH1cclxuXHJcbiAgc2V0VmFsaWRhdGlvblN0YXRlKCkge1xyXG4gICAgLy8gdG8gaGFuZGxlIHJlc2V0IGZvcm1cclxuICAgIGlmICh0aGlzLm5nQ29udHJvbC5jb250cm9sLnVudG91Y2hlZCAmJiB0aGlzLm5nQ29udHJvbC5jb250cm9sLnByaXN0aW5lKSB7XHJcbiAgICAgIHRoaXMuY2xlYXJWYWxpZGF0aW9uU3RhdGUodGhpcy5lbGVtZW50VG9BZGRWYWxpZGF0aW9uKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLy8gdG8gaGFuZGxlIGZpZWxkIHZhbGlkaXR5XHJcbiAgICBpZiAodGhpcy5uZ0NvbnRyb2wuY29udHJvbC5lbmFibGVkKSB7XHJcbiAgICAgIGlmICh0aGlzLm5nQ29udHJvbC5jb250cm9sLnZhbGlkKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5lbGVtZW50VG9BZGRWYWxpZGF0aW9uWzBdLCAndmFsaWQnLCB0cnVlKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLmVsZW1lbnRUb0FkZFZhbGlkYXRpb25bMF0sICdpbnZhbGlkJywgZmFsc2UpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuZWxlbWVudFRvQWRkVmFsaWRhdGlvblswXSwgJ3ZhbGlkJywgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuZWxlbWVudFRvQWRkVmFsaWRhdGlvblswXSwgJ2ludmFsaWQnLCB0cnVlKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jbGVhclZhbGlkYXRpb25TdGF0ZSh0aGlzLmVsZW1lbnRUb0FkZFZhbGlkYXRpb24pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3Vic2NyaWJlU3RhdHVzQ2hhbmdlcygpIHtcclxuICAgIHRoaXMuc3RhdHVzQ2hhbmdlc1N1YnNjcmlwdGlvbiA9IHRoaXMubmdDb250cm9sLmNvbnRyb2wuc3RhdHVzQ2hhbmdlcy5zdWJzY3JpYmUoKHN0YXR1czogc3RyaW5nKSA9PiB7XHJcbiAgICAgIC8vIFRPRE8gRmluZCBhIGJldHRlciB3YXkgdG8gaGFuZGxlIHZhbGlkYXRpb24gYWZ0ZXIgdGhlIGZvcm0gc3Vic2NyaXB0aW9uLiAoc2VlIGRlbW8gZm9ybS12YWxpZGF0aW9uKVxyXG4gICAgICAvLyB3YWl0IGZvciB0aGUgdmFsdWVDaGFuZ2VzIG1ldGhvZCBmcm9tIEZvcm1Hcm91cCB0byBoYXZlIGJlZW4gdHJpZ2dlcmVkIGJlZm9yZSBoYW5kbGluZyB0aGUgdmFsaWRhdGlvbiBzdGF0ZVxyXG4gICAgICAvLyAvIVxcIHJhY2UgY29uZGl0aW9uIHdhcm5pbmcgLyFcXFxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2V0VmFsaWRhdGlvblN0YXRlKCkpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgRGlyZWN0aXZlLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgSGFuZGxlUHJvcENoYW5nZXMgfSBmcm9tICcuLi9zaGFyZWQnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdzZWxlY3RbbXpTZWxlY3RdLCBzZWxlY3RbbXotc2VsZWN0XScsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNelNlbGVjdERpcmVjdGl2ZSBleHRlbmRzIEhhbmRsZVByb3BDaGFuZ2VzIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIC8vIG5hdGl2ZSBwcm9wZXJ0aWVzXHJcbiAgQElucHV0KCkgaWQ6IHN0cmluZztcclxuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xyXG5cclxuICAvLyBkaXJlY3RpdmUgcHJvcGVydGllc1xyXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZmlsbGVkSW46IGJvb2xlYW47XHJcbiAgQE91dHB1dCgpIHVwZGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgY2hlY2tib3hFbGVtZW50czogSlF1ZXJ5O1xyXG4gIGxhYmVsRWxlbWVudDogSlF1ZXJ5O1xyXG4gIHNlbGVjdEVsZW1lbnQ6IEpRdWVyeTtcclxuICBzZWxlY3RDb250YWluZXJFbGVtZW50OiBKUXVlcnk7XHJcblxyXG4gIGdldCBpbnB1dEVsZW1lbnQoKTogSlF1ZXJ5IHtcclxuICAgIHJldHVybiB0aGlzLnNlbGVjdEVsZW1lbnQuc2libGluZ3MoJ2lucHV0LnNlbGVjdC1kcm9wZG93bicpO1xyXG4gIH1cclxuXHJcbiAgbXV0YXRpb25PYnNlcnZlcjogTXV0YXRpb25PYnNlcnZlcjtcclxuICBzdXNwZW5kID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHVibGljIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIsXHJcbiAgKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluaXRIYW5kbGVycygpO1xyXG4gICAgdGhpcy5pbml0RWxlbWVudHMoKTtcclxuICAgIHRoaXMuaW5pdE9uQ2hhbmdlKCk7XHJcbiAgICB0aGlzLmhhbmRsZVByb3BlcnRpZXMoKTtcclxuXHJcbiAgICAvLyBtdXN0IGJlIGRvbmUgYWZ0ZXIgaGFuZGxlUGxhY2Vob2xkZXJcclxuICAgIHRoaXMuaW5pdFNlbGVjdGVkT3B0aW9uKCk7XHJcblxyXG4gICAgLy8gbXVzdCBiZSBkb25lIGFmdGVyIGhhbmRsZVByb3BlcnRpZXNcclxuICAgIHRoaXMuaW5pdE1hdGVyaWFsU2VsZWN0KCk7XHJcblxyXG4gICAgLy8gbXVzdCBiZSBkb25lIGFmdGVyIGluaXRNYXRlcmlhbFNlbGVjdFxyXG4gICAgdGhpcy5saXN0ZW5PcHRpb25DaGFuZ2VzKCk7XHJcbiAgICB0aGlzLmluaXRGaWxsZWRJbigpO1xyXG4gICAgdGhpcy5oYW5kbGVET01FdmVudHMoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMuc2VsZWN0RWxlbWVudCwgJ21hdGVyaWFsX3NlbGVjdCcsIFsnZGVzdHJveSddKTtcclxuICAgIHRoaXMuc2VsZWN0RWxlbWVudC5vZmYoKTtcclxuICAgIHRoaXMubXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgfVxyXG5cclxuICBpbml0SGFuZGxlcnMoKSB7XHJcbiAgICB0aGlzLmhhbmRsZXJzID0ge1xyXG4gICAgICBkaXNhYmxlZDogKCkgPT4gdGhpcy5oYW5kbGVEaXNhYmxlZCgpLFxyXG4gICAgICBsYWJlbDogKCkgPT4gdGhpcy5oYW5kbGVMYWJlbCgpLFxyXG4gICAgICBwbGFjZWhvbGRlcjogKCkgPT4gdGhpcy5oYW5kbGVQbGFjZWhvbGRlcigpLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGluaXRFbGVtZW50cygpIHtcclxuICAgIHRoaXMuc2VsZWN0RWxlbWVudCA9ICQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgdGhpcy5zZWxlY3RDb250YWluZXJFbGVtZW50ID0gJCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkucGFyZW50cygnLmlucHV0LWZpZWxkJyk7XHJcbiAgICB0aGlzLmxhYmVsRWxlbWVudCA9IHRoaXMuY3JlYXRlTGFiZWxFbGVtZW50KCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBOZWVkIHRvIGJlIGRvbmUgYWZ0ZXIgbWF0ZXJpYWxfc2VsZWN0IGhhcyBiZWVuIGludm9rZWQgb3IgZWxzZSB0aGUgbXVsdGktc2VsZWN0XHJcbiAgICogb3B0aW9ucyBhcmUgbm90IHlldCBpbiB0aGUgRE9NIGFzIGl0IGxvb3BzIG9uIHJlbmRlcmVkIG9wdGlvbnNcclxuICAgKi9cclxuICBpbml0RmlsbGVkSW4oKSB7XHJcbiAgICB0aGlzLmNoZWNrYm94RWxlbWVudHMgPSB0aGlzLnNlbGVjdENvbnRhaW5lckVsZW1lbnQuZmluZCgnOmNoZWNrYm94Jyk7XHJcbiAgICB0aGlzLmhhbmRsZXJzWydmaWxsZWRJbiddID0gKCkgPT4gdGhpcy5oYW5kbGVGaWxsZWRJbigpO1xyXG4gICAgdGhpcy5oYW5kbGVGaWxsZWRJbigpO1xyXG4gIH1cclxuXHJcbiAgaW5pdE1hdGVyaWFsU2VsZWN0KCkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMuc2VsZWN0RWxlbWVudCwgJ21hdGVyaWFsX3NlbGVjdCcpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVHJpZ2dlciB0aGUgbmF0aXZlIGNoYW5nZSBldmVudCBmcm9tIHNlbGVjdCBlbGVtZW50IGluc3RlYWQgb2YgdGhlIEpRdWVyeS5cclxuICAgKiBBbiBpc3N1ZSBvbiBHaXRodWIgaXMgb3BlbiBhYm91dCB0aGlzIHByb2JsZW0gOiBodHRwczovL2dpdGh1Yi5jb20vRG9nZmFsby9tYXRlcmlhbGl6ZS9pc3N1ZXMvMjg0M1xyXG4gICAqIFRoaXMgbWV0aG9kIHNob3VsZCBiZSByZW1vdmVkIHdoZW4gdGhpcyBpc3N1ZSBpcyByZXZvbHZlZC5cclxuICAgKi9cclxuICBpbml0T25DaGFuZ2UoKSB7XHJcbiAgICB0aGlzLnNlbGVjdEVsZW1lbnQub24oJ2NoYW5nZScsIChldmVudDogYW55KSA9PiB7XHJcbiAgICAgIGlmICghdGhpcy5zdXNwZW5kKSB7XHJcbiAgICAgICAgdGhpcy5zdXNwZW5kID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgY29uc3QgY3VzdG9tRXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcclxuICAgICAgICBjdXN0b21FdmVudC5pbml0Q3VzdG9tRXZlbnQoJ2NoYW5nZScsIHRydWUsIGZhbHNlLCBldmVudC50YXJnZXQudmFsdWUpO1xyXG5cclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QodGhpcy5zZWxlY3RFbGVtZW50WzBdLCAnZGlzcGF0Y2hFdmVudCcsIFtjdXN0b21FdmVudF0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBTdG9wIHRoZSBwcm9wYWdhdGlvbiBvZiBjaGFuZ2UgZXZlbnRcclxuICAgIHRoaXMuc2VsZWN0RWxlbWVudFswXS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc3VzcGVuZCA9IGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVET01FdmVudHMoKSB7XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC5vbignYmx1ciBmb2N1cycsIChldmVudDogSlF1ZXJ5LkV2ZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IGN1c3RvbUV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XHJcbiAgICAgIGN1c3RvbUV2ZW50LmluaXRDdXN0b21FdmVudChldmVudC50eXBlLCB0cnVlLCBmYWxzZSwgZXZlbnQudGFyZ2V0KTtcclxuICAgICAgdGhpcy5zZWxlY3RFbGVtZW50WzBdLmRpc3BhdGNoRXZlbnQoY3VzdG9tRXZlbnQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVMYWJlbEVsZW1lbnQoKSB7XHJcbiAgICBjb25zdCBsYWJlbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgbGFiZWxFbGVtZW50LnNldEF0dHJpYnV0ZSgnZm9yJywgdGhpcy5pZCk7XHJcblxyXG4gICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMuc2VsZWN0RWxlbWVudCwgJ2FmdGVyJywgW2xhYmVsRWxlbWVudF0pO1xyXG5cclxuICAgIHJldHVybiAkKGxhYmVsRWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVQcm9wZXJ0aWVzKCkge1xyXG4gICAgaWYgKHRoaXMuc2VsZWN0Q29udGFpbmVyRWxlbWVudC5sZW5ndGggPT09IDApIHtcclxuICAgICAgY29uc29sZS5lcnJvcignU2VsZWN0IHdpdGggbXotc2VsZWN0IGRpcmVjdGl2ZSBtdXN0IGJlIHBsYWNlIGluc2lkZSBhIFttei1zZWxlY3QtY29udGFpbmVyXSB0YWcnLCB0aGlzLnNlbGVjdEVsZW1lbnQpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBzdXBlci5leGVjdXRlUHJvcEhhbmRsZXJzKCk7XHJcbiAgfVxyXG5cclxuICBpbml0U2VsZWN0ZWRPcHRpb24oKSB7XHJcbiAgICBjb25zdCBmaXJzdE9wdGlvbkVsZW1lbnQgPSB0aGlzLnNlbGVjdEVsZW1lbnQuY2hpbGRyZW4oKS5maXJzdCgpO1xyXG4gICAgaWYgKGZpcnN0T3B0aW9uRWxlbWVudC5sZW5ndGggPiAwXHJcbiAgICAgICYmIHRoaXMuc2VsZWN0RWxlbWVudC5jaGlsZHJlbignb3B0aW9uW3NlbGVjdGVkXScpLmxlbmd0aCA9PT0gMFxyXG4gICAgICAmJiAhdGhpcy5zZWxlY3RFbGVtZW50WzBdLmhhc0F0dHJpYnV0ZSgnbXVsdGlwbGUnKVxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudEF0dHJpYnV0ZShmaXJzdE9wdGlvbkVsZW1lbnRbMF0sICdzZWxlY3RlZCcsICcnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZURpc2FibGVkKCkge1xyXG4gICAgLy8gd2hlbiBkaXNhYmxlZCBpcyBudWxsL3VuZGVmaW5lZCB0aGF0IG1lYW5zIHRoZSBwcm9wZXJ0eSBoYXMgbm90IGJlZW4gdXNlZCBvbiB0aGUgZWxlbWVudFxyXG4gICAgLy8gYnV0IGl0IG1pZ2h0IGJlIHNldCBieSBhbm90aGVyIHByb2Nlc3MgKGZvciBleGFtcGxlIHJlYWN0aXZlIGZvcm0gYXBwbGllcyBkaXNhYmxlZCBhdHRyaWJ1dGUgaXRzZWxmKVxyXG4gICAgLy8gdGhlcmVmb3JlIHdlIGRvbid0IHdhbnQgdG8gcmVtb3ZlIG9yIGFkZCBpdCBoZXJlXHJcbiAgICBpZiAodGhpcy5kaXNhYmxlZCAhPSBudWxsKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudFByb3BlcnR5KHRoaXMuc2VsZWN0RWxlbWVudFswXSwgJ2Rpc2FibGVkJywgISF0aGlzLmRpc2FibGVkKTtcclxuICAgICAgdGhpcy51cGRhdGVNYXRlcmlhbFNlbGVjdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlTGFiZWwoKSB7XHJcbiAgICBpZiAodGhpcy5sYWJlbCAhPSBudWxsKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLmxhYmVsRWxlbWVudCwgJ3RleHQnLCBbdGhpcy5sYWJlbF0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlRmlsbGVkSW4oKSB7XHJcbiAgICBpZiAodGhpcy5jaGVja2JveEVsZW1lbnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5jaGVja2JveEVsZW1lbnRzLnRvQXJyYXkoKS5mb3JFYWNoKGNoZWNrYm94RWxlbWVudCA9PiB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3MoY2hlY2tib3hFbGVtZW50LCAnZmlsbGVkLWluJywgISF0aGlzLmZpbGxlZEluKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVQbGFjZWhvbGRlcigpIHtcclxuICAgIGNvbnN0IHBsYWNlaG9sZGVyRWxlbWVudCA9IHRoaXMuc2VsZWN0RWxlbWVudC5jaGlsZHJlbignOmRpc2FibGVkJykuZmlyc3QoKTtcclxuXHJcbiAgICAvLyBpZiBwbGFjZWhvbGRlciBlbGVtZW50IGV4aXN0c1xyXG4gICAgaWYgKHBsYWNlaG9sZGVyRWxlbWVudC5sZW5ndGggPiAwKSB7XHJcblxyXG4gICAgICBpZiAodGhpcy5wbGFjZWhvbGRlcikge1xyXG4gICAgICAgIC8vIHVwZGF0ZSBleGlzdGluZyBwbGFjZWhvbGRlciBlbGVtZW50XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHBsYWNlaG9sZGVyRWxlbWVudCwgJ3RleHQnLCBbdGhpcy5wbGFjZWhvbGRlcl0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIHJlbW92ZSBleGlzdGluZyBwbGFjZWhvbGRlciBlbGVtZW50XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHBsYWNlaG9sZGVyRWxlbWVudCwgJ3JlbW92ZScpO1xyXG4gICAgICAgIC8vIEZvcmNlIHRyaWdnZXIgY2hhbmdlIGV2ZW50IHNpbmNlIGl0J3Mgbm90IHRyaWdnZXJlZCB3aGVuIHZhbHVlIGNoYW5nZSBwcm9ncmFtbWF0aWNhbGx5XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMuc2VsZWN0RWxlbWVudCwgJ2NoYW5nZScpO1xyXG4gICAgICAgIC8vIFJlcXVpcmVkIGlmIHdlIGRvbid0IHdhbnQgZXhjZXB0aW9uIFwiRXhwcmVzc2lvbiBoYXMgY2hhbmdlZCBhZnRlciBpdCB3YXMgY2hlY2tlZC5cIiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy82MDA1XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh0aGlzLnBsYWNlaG9sZGVyKSB7XHJcbiAgICAgICAgLy8gYWRkIHBsYWNlaG9sZGVyIGVsZW1lbnRcclxuICAgICAgICBjb25zdCBwbGFjZWhvbGRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0aGlzLnBsYWNlaG9sZGVyKTtcclxuICAgICAgICBjb25zdCBwbGFjZWhvbGRlck9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgIHBsYWNlaG9sZGVyT3B0aW9uLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICBwbGFjZWhvbGRlck9wdGlvbi52YWx1ZSA9IG51bGw7XHJcbiAgICAgICAgcGxhY2Vob2xkZXJPcHRpb24uYXBwZW5kQ2hpbGQocGxhY2Vob2xkZXJUZXh0KTtcclxuXHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMuc2VsZWN0RWxlbWVudCwgJ3ByZXBlbmQnLCBbcGxhY2Vob2xkZXJPcHRpb25dKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaW5pdE1hdGVyaWFsU2VsZWN0KCk7XHJcbiAgfVxyXG5cclxuICBsaXN0ZW5PcHRpb25DaGFuZ2VzKCkge1xyXG4gICAgY29uc3QgbXV0YXRpb25PYnNlcnZlckNvbmZpZ3VyYXRpb246IE11dGF0aW9uT2JzZXJ2ZXJJbml0ID0ge1xyXG4gICAgICBjaGlsZExpc3Q6IHRydWUsXHJcbiAgICAgIHN1YnRyZWU6IHRydWUsXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMubXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnM6IE11dGF0aW9uUmVjb3JkW10pID0+IHtcclxuICAgICAgdGhpcy51cGRhdGVNYXRlcmlhbFNlbGVjdCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyLm9ic2VydmUodGhpcy5zZWxlY3RFbGVtZW50WzBdLCBtdXRhdGlvbk9ic2VydmVyQ29uZmlndXJhdGlvbik7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVNYXRlcmlhbFNlbGVjdCgpIHtcclxuICAgIHRoaXMuaW5pdE1hdGVyaWFsU2VsZWN0KCk7XHJcblxyXG4gICAgaWYgKHRoaXMuZmlsbGVkSW4pIHtcclxuICAgICAgdGhpcy5pbml0RmlsbGVkSW4oKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmhhbmRsZURPTUV2ZW50cygpO1xyXG5cclxuICAgIC8vIHdhaXQgZm9yIG1hdGVyaWFsaXplIHNlbGVjdCB0byBiZSBpbml0aWFsaXplZFxyXG4gICAgLy8gLyFcXCByYWNlIGNvbmRpdGlvbiB3YXJuaW5nIC8hXFxcclxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy51cGRhdGUuZW1pdCgpKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQsIElucHV0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IE16VmFsaWRhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3ZhbGlkYXRpb24vdmFsaWRhdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNelNlbGVjdERpcmVjdGl2ZSB9IGZyb20gJy4uL3NlbGVjdC5kaXJlY3RpdmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtei1zZWxlY3QtY29udGFpbmVyJyxcclxuICB0ZW1wbGF0ZTogYDxkaXZcclxuICBjbGFzcz1cImlucHV0LWZpZWxkXCJcclxuICBbY2xhc3MuaW5saW5lXT1cImlubGluZVwiXHJcbj5cclxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjwvZGl2PmAsXHJcbiAgc3R5bGVzOiBbYC5pbnB1dC1maWVsZDpub3QoLmlubGluZSl7ZGlzcGxheTpibG9ja30vZGVlcC8gLmlucHV0LWZpZWxkIC5kcm9wZG93bi1jb250ZW50IFt0eXBlPWNoZWNrYm94XStsYWJlbHt0b3A6LTExcHh9YF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNelNlbGVjdENvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KCkgaW5saW5lOiBib29sZWFuO1xyXG5cclxuICBAQ29udGVudENoaWxkKE16U2VsZWN0RGlyZWN0aXZlKSBtelNlbGVjdERpcmVjdGl2ZTogTXpTZWxlY3REaXJlY3RpdmU7XHJcbiAgQENvbnRlbnRDaGlsZChNelZhbGlkYXRpb25Db21wb25lbnQpIG16VmFsaWRhdGlvbkNvbXBvbmVudDogTXpWYWxpZGF0aW9uQ29tcG9uZW50O1xyXG4gIEBDb250ZW50Q2hpbGQoTmdDb250cm9sKSBuZ0NvbnRyb2w6IE5nQ29udHJvbDtcclxuXHJcbiAgc2VsZWN0VmFsdWVTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuICBzdGF0dXNDaGFuZ2VzU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMuaW5pdENvbnRyb2xTdWJzY3JpcHRpb24oKTtcclxuICAgIHRoaXMuaW5pdFNlbGVjdFN1YnNjcmlwdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLnJlbW92ZUNvbnRyb2xTdWJzY3JpcHRpb24oKTtcclxuICAgIHRoaXMucmVtb3ZlU2VsZWN0U3Vic2NyaXB0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBpbml0Q29udHJvbFN1YnNjcmlwdGlvbigpIHtcclxuICAgIGlmICh0aGlzLm5nQ29udHJvbCkge1xyXG4gICAgICB0aGlzLm16U2VsZWN0RGlyZWN0aXZlLmRpc2FibGVkID0gdGhpcy5uZ0NvbnRyb2wuY29udHJvbC5kaXNhYmxlZDtcclxuXHJcbiAgICAgIHRoaXMuc3RhdHVzQ2hhbmdlc1N1YnNjcmlwdGlvbiA9IHRoaXMubmdDb250cm9sLmNvbnRyb2wuc3RhdHVzQ2hhbmdlcy5zdWJzY3JpYmUoKHN0YXR1czogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgLy8gdG8gaGFuZGxlIGVuYWJsaW5nL2Rpc2FibGluZyBmb3JtQ29udHJvbFxyXG4gICAgICAgIGNvbnN0IGRpc2FibGVkID0gc3RhdHVzID09PSAnRElTQUJMRUQnO1xyXG4gICAgICAgIGlmIChkaXNhYmxlZCAhPT0gdGhpcy5telNlbGVjdERpcmVjdGl2ZS5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgdGhpcy5telNlbGVjdERpcmVjdGl2ZS5kaXNhYmxlZCA9IGRpc2FibGVkO1xyXG4gICAgICAgICAgdGhpcy5telNlbGVjdERpcmVjdGl2ZS5oYW5kbGVEaXNhYmxlZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLnNlbGVjdFZhbHVlU3Vic2NyaXB0aW9uID0gdGhpcy5uZ0NvbnRyb2wudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgodmFsdWU6IGFueSkgPT4ge1xyXG4gICAgICAgIC8vIHRvIHN5bmNocm9uaXplIGlucHV0IGFuZCBzZWxlY3Qgd2hlbiB2YWx1ZSBjaGFuZ2VzIHByb2dyYW1tYXRpY2FsbHlcclxuICAgICAgICBjb25zdCBpc0Ryb3Bkb3duT3BlbiA9IHRoaXMubXpTZWxlY3REaXJlY3RpdmUuaW5wdXRFbGVtZW50Lmhhc0NsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICBjb25zdCBpbnB1dFZhbHVlID0gdGhpcy5telNlbGVjdERpcmVjdGl2ZS5pbnB1dEVsZW1lbnQudmFsKCk7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMubXpTZWxlY3REaXJlY3RpdmUuc2VsZWN0RWxlbWVudC5jaGlsZHJlbignb3B0aW9uJyk7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRPcHRpb25zID0gb3B0aW9ucy5maWx0ZXIoJ29wdGlvbjpzZWxlY3RlZCcpLnRvQXJyYXkoKTtcclxuICAgICAgICBjb25zdCBkaXNhYmxlZE9wdGlvbnMgPSBvcHRpb25zLmZpbHRlcignOmRpc2FibGVkJykudG9BcnJheSgpO1xyXG5cclxuICAgICAgICBjb25zdCBzZWxlY3RlZE9wdGlvblRleHQgPSBzZWxlY3RlZE9wdGlvbnMubGVuZ3RoID09PSAwXHJcbiAgICAgICAgICA/IGRpc2FibGVkT3B0aW9ucy5tYXAob3B0aW9uID0+IG9wdGlvbi50ZXh0Q29udGVudClbMF1cclxuICAgICAgICAgIDogc2VsZWN0ZWRPcHRpb25zLm1hcChvcHRpb24gPT4gb3B0aW9uLnRleHRDb250ZW50KS5qb2luKCcsICcpO1xyXG5cclxuICAgICAgICBpZiAoaW5wdXRWYWx1ZSAhPT0gc2VsZWN0ZWRPcHRpb25UZXh0ICYmICFpc0Ryb3Bkb3duT3Blbikge1xyXG4gICAgICAgICAgdGhpcy5telNlbGVjdERpcmVjdGl2ZS51cGRhdGVNYXRlcmlhbFNlbGVjdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbml0U2VsZWN0U3Vic2NyaXB0aW9uKCkge1xyXG4gICAgaWYgKHRoaXMubXpTZWxlY3REaXJlY3RpdmUpIHtcclxuICAgICAgdGhpcy5telNlbGVjdERpcmVjdGl2ZS51cGRhdGVcclxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMucmVnaXN0ZXJPbkJsdXIoKSlcclxuICAgICAgICAubmV4dCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkJsdXIoKSB7XHJcbiAgICB0aGlzLm16U2VsZWN0RGlyZWN0aXZlLmlucHV0RWxlbWVudC5vbignYmx1cicsICgpID0+IHtcclxuICAgICAgaWYgKHRoaXMubmdDb250cm9sKSB7XHJcbiAgICAgICAgdGhpcy5uZ0NvbnRyb2wuY29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMubXpWYWxpZGF0aW9uQ29tcG9uZW50KSB7XHJcbiAgICAgICAgdGhpcy5telZhbGlkYXRpb25Db21wb25lbnQuc2V0VmFsaWRhdGlvblN0YXRlKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlQ29udHJvbFN1YnNjcmlwdGlvbigpIHtcclxuICAgIGlmICh0aGlzLm16U2VsZWN0RGlyZWN0aXZlKSB7XHJcbiAgICAgIHRoaXMubXpTZWxlY3REaXJlY3RpdmUudXBkYXRlLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgIHRoaXMubXpTZWxlY3REaXJlY3RpdmUuaW5wdXRFbGVtZW50Lm9mZigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlU2VsZWN0U3Vic2NyaXB0aW9uKCkge1xyXG4gICAgaWYgKHRoaXMuc3RhdHVzQ2hhbmdlc1N1YnNjcmlwdGlvbikge1xyXG4gICAgICB0aGlzLnN0YXR1c0NoYW5nZXNTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNlbGVjdFZhbHVlU3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0VmFsdWVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE16U2VsZWN0Q29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9zZWxlY3QtY29udGFpbmVyL2luZGV4JztcclxuaW1wb3J0IHsgTXpTZWxlY3REaXJlY3RpdmUgfSBmcm9tICcuL3NlbGVjdC5kaXJlY3RpdmUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIE16U2VsZWN0RGlyZWN0aXZlLFxyXG4gICAgTXpTZWxlY3RDb250YWluZXJDb21wb25lbnQsXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBNelNlbGVjdERpcmVjdGl2ZSxcclxuICAgIE16U2VsZWN0Q29udGFpbmVyQ29tcG9uZW50LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNelNlbGVjdE1vZHVsZSB7IH1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBNelJlbW92ZUNvbXBvbmVudEhvc3QgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvcmVtb3ZlLWNvbXBvbmVudC1ob3N0L3JlbW92ZS1jb21wb25lbnQtaG9zdCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ216LXNpZGVuYXYtY29sbGFwc2libGUtaGVhZGVyJyxcclxuICB0ZW1wbGF0ZTogYDxhIGNsYXNzPVwiY29sbGFwc2libGUtaGVhZGVyIHdhdmVzLWVmZmVjdFwiPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2E+YCxcclxuICBzdHlsZXM6IFtgYF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNelNpZGVuYXZDb2xsYXBzaWJsZUhlYWRlckNvbXBvbmVudCBleHRlbmRzIE16UmVtb3ZlQ29tcG9uZW50SG9zdCB7IH1cclxuIiwiaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGQsXHJcbiAgRGlyZWN0aXZlLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgUmVuZGVyZXIsXHJcbiAgVmlld0NoaWxkLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTXpTaWRlbmF2Q29sbGFwc2libGVIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL3NpZGVuYXYtY29sbGFwc2libGUtaGVhZGVyL3NpZGVuYXYtY29sbGFwc2libGUtaGVhZGVyLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ216LXNpZGVuYXYtY29sbGFwc2libGUnLFxyXG4gIHRlbXBsYXRlOiBgPGxpPlxyXG4gIDx1bCAjY29sbGFwc2libGUgY2xhc3M9XCJjb2xsYXBzaWJsZSBjb2xsYXBzaWJsZS1hY2NvcmRpb25cIj5cclxuICAgIDxsaT5cclxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibXotc2lkZW5hdi1jb2xsYXBzaWJsZS1oZWFkZXJcIj48L25nLWNvbnRlbnQ+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb2xsYXBzaWJsZS1ib2R5XCI+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibXotc2lkZW5hdi1jb2xsYXBzaWJsZS1jb250ZW50XCI+PC9uZy1jb250ZW50PlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9saT5cclxuICA8L3VsPlxyXG48L2xpPmAsXHJcbiAgc3R5bGVzOiBbYDpob3N0IC9kZWVwLyAuY29sbGFwc2libGUtaGVhZGVye3BhZGRpbmc6MCAzMnB4fTpob3N0IC9kZWVwLyAuY29sbGFwc2libGUtaGVhZGVyIGl7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfTpob3N0IC9kZWVwLyAuY29sbGFwc2libGUtYm9keSBsaSBhe2ZvbnQtd2VpZ2h0OmluaXRpYWx9YF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNelNpZGVuYXZDb2xsYXBzaWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG4gIEBJbnB1dCgpIG9uQ2xvc2U6IEZ1bmN0aW9uO1xyXG4gIEBJbnB1dCgpIG9uT3BlbjogRnVuY3Rpb247XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2NvbGxhcHNpYmxlJykgY29sbGFwc2libGU6IEVsZW1lbnRSZWY7XHJcbiAgQENvbnRlbnRDaGlsZChNelNpZGVuYXZDb2xsYXBzaWJsZUhlYWRlckNvbXBvbmVudCkgaGVhZGVyOiBNelNpZGVuYXZDb2xsYXBzaWJsZUhlYWRlckNvbXBvbmVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcixcclxuICApIHsgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLmluaXRDb2xsYXBzaWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgaW5pdENvbGxhcHNpYmxlKCkge1xyXG4gICAgY29uc3Qgb3B0aW9uczogTWF0ZXJpYWxpemUuQ29sbGFwc2libGVPcHRpb25zID0ge1xyXG4gICAgICBhY2NvcmRpb246IGZhbHNlLFxyXG4gICAgICBvbkNsb3NlOiB0aGlzLm9uQ2xvc2UsXHJcbiAgICAgIG9uT3BlbjogdGhpcy5vbk9wZW4sXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIG5lZWQgc2V0VGltZW91dCBvdGhlcndpc2UgbG9hZGluZyBkaXJlY3RseSBvbiB0aGUgcGFnZSBjYXVzZSBhbiBlcnJvclxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QoJCh0aGlzLmNvbGxhcHNpYmxlLm5hdGl2ZUVsZW1lbnQpLCAnY29sbGFwc2libGUnLCBbb3B0aW9uc10pKTtcclxuXHJcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIERlY2xhcmUgdGhlIHRhZ3MgdG8gYXZvaWQgZXJyb3I6ICc8bXotc2lkZW5hdi1jb2xsYXBzaWJsZS14PicgaXMgbm90IGEga25vd24gZWxlbWVudFxyXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xMTI1MVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTogZGlyZWN0aXZlLXNlbGVjdG9yXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ216LXNpZGVuYXYtY29sbGFwc2libGUtY29udGVudCcgfSkgZXhwb3J0IGNsYXNzIE16U2lkZW5hdkNvbGxhcHNpYmxlQ29udGVudERpcmVjdGl2ZSB7IH1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ216LXNpZGVuYXYtZGl2aWRlcicsXHJcbiAgdGVtcGxhdGU6IGA8bGk+XHJcbiAgPGRpdiBjbGFzcz1cImRpdmlkZXJcIj48L2Rpdj5cclxuPC9saT5gLFxyXG4gIHN0eWxlczogW2AuZGl2aWRlcnttYXJnaW4tYm90dG9tOjhweH1gXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16U2lkZW5hdkRpdmlkZXJDb21wb25lbnQgeyB9XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtei1zaWRlbmF2LWhlYWRlcicsXHJcbiAgdGVtcGxhdGU6IGA8bGkgY2xhc3M9XCJzaWRlbmF2LWhlYWRlclwiPlxyXG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuPC9saT5gLFxyXG4gIHN0eWxlczogW2Auc2lkZW5hdi1oZWFkZXJ7bWFyZ2luLWJvdHRvbTo4cHh9YF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNelNpZGVuYXZIZWFkZXJDb21wb25lbnQgeyB9XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ216LXNpZGVuYXYtbGluaycsXHJcbiAgdGVtcGxhdGU6IGA8bGlcclxuICBbY2xhc3MuYWN0aXZlXT1cImFjdGl2ZVwiXHJcbj5cclxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjwvbGk+XHJcbmAsXHJcbiAgc3R5bGVzOiBbYDpob3N0IC9kZWVwLyBhW2NsYXNzKj1tZGktXTo6YmVmb3Jle2NvbG9yOnJnYmEoMCwwLDAsLjU0KTttYXJnaW46LTFweCAzMnB4IDAgMDt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9Omhvc3QgL2RlZXAvIGEgaSw6aG9zdCAvZGVlcC8gYSBpLm1hdGVyaWFsLWljb25zLDpob3N0IC9kZWVwLyBhIGlbY2xhc3MqPW1kaS1de21hcmdpbi10b3A6LTFweH06aG9zdCAvZGVlcC8gYSBpLm1hdGVyaWFsLWljb25zOjpiZWZvcmUsOmhvc3QgL2RlZXAvIGEgaTo6YmVmb3JlLDpob3N0IC9kZWVwLyBhIGlbY2xhc3MqPW1kaS1dOjpiZWZvcmV7dmVydGljYWwtYWxpZ246bWlkZGxlfWBdLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLkVtdWxhdGVkLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpTaWRlbmF2TGlua0NvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgYWN0aXZlOiBib29sZWFuO1xyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtei1zaWRlbmF2LXN1YmhlYWRlcicsXHJcbiAgdGVtcGxhdGU6IGA8bGk+XHJcbiAgPGEgY2xhc3M9XCJzdWJoZWFkZXJcIj5cclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICA8L2E+XHJcbjwvbGk+YCxcclxuICBzdHlsZXM6IFtgYF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNelNpZGVuYXZTdWJoZWFkZXJDb21wb25lbnQgeyB9XHJcbiIsImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtei1zaWRlbmF2JyxcclxuICB0ZW1wbGF0ZTogYDx1bCBjbGFzcz1cInNpZGUtbmF2IHt7IGJhY2tncm91bmRDbGFzcyB9fVwiXHJcbiAgW2F0dHIuaWRdPVwiaWRcIlxyXG4gIFtjbGFzcy5maXhlZF09XCJmaXhlZFwiPlxyXG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuPC91bD5gLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpTaWRlbmF2Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSBiYWNrZ3JvdW5kQ2xhc3M6IHN0cmluZztcclxuICBASW5wdXQoKSBjbG9zZU9uQ2xpY2s6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgY29sbGFwc2VCdXR0b25JZDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGRyYWdnYWJsZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBlZGdlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZml4ZWQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgaWQ6IHN0cmluZztcclxuICBASW5wdXQoKSBvbkNsb3NlOiBGdW5jdGlvbjtcclxuICBASW5wdXQoKSBvbk9wZW46IEZ1bmN0aW9uO1xyXG4gIEBJbnB1dCgpIHdpZHRoOiBudW1iZXI7XHJcblxyXG4gIHByaXZhdGUgX29wZW5lZCA9IGZhbHNlO1xyXG4gIHByaXZhdGUgY29sbGFwc2VCdXR0b246IEpRdWVyeTxFbGVtZW50PjtcclxuXHJcbiAgZ2V0IG9wZW5lZCgpIHsgcmV0dXJuIHRoaXMuX29wZW5lZDsgfVxyXG4gIHNldCBvcGVuZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX29wZW5lZCA9IHZhbHVlO1xyXG4gICAgdGhpcy5jb2xsYXBzZUJ1dHRvbi5zaWRlTmF2KHRoaXMuX29wZW5lZCA/ICdzaG93JyA6ICdoaWRlJyk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLmluaXRDb2xsYXBzZUJ1dHRvbigpO1xyXG4gICAgdGhpcy5pbml0Q29sbGFwc2libGVMaW5rcygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmNvbGxhcHNlQnV0dG9uLnNpZGVOYXYoJ2Rlc3Ryb3knKTtcclxuICB9XHJcblxyXG4gIGluaXRDb2xsYXBzZUJ1dHRvbigpIHtcclxuICAgIC8vIGZha2UgYnV0dG9uIGlmIG5vIGNvbGxhcHNlQnV0dG9uSWQgaXMgcHJvdmlkZWRcclxuICAgIHRoaXMuY29sbGFwc2VCdXR0b24gPSB0aGlzLmNvbGxhcHNlQnV0dG9uSWRcclxuICAgICAgPyAkKGAjJHt0aGlzLmNvbGxhcHNlQnV0dG9uSWR9YClcclxuICAgICAgOiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJykpO1xyXG5cclxuICAgIC8vIGFkZCBkYXRhLWFjdGl2YXRlcyB0byBjb2xsYXBzZSBidXR0b25cclxuICAgIHRoaXMuY29sbGFwc2VCdXR0b24uYXR0cignZGF0YS1hY3RpdmF0ZXMnLCB0aGlzLmlkKTtcclxuXHJcbiAgICAvLyBleHRlbmQgb25PcGVuIGZ1bmN0aW9uIHRvIHVwZGF0ZSBvcGVuZWQgc3RhdGVcclxuICAgIGNvbnN0IG9uT3BlbiA9IHRoaXMub25PcGVuIHx8ICgoKSA9PiB7fSk7XHJcbiAgICB0aGlzLm9uT3BlbiA9ICgpID0+IHtcclxuICAgICAgb25PcGVuKCk7XHJcbiAgICAgIHRoaXMuX29wZW5lZCA9IHRydWU7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGV4dGVuZCBvbkNsb3NlIGZ1bmN0aW9uIHRvIHVwZGF0ZSBvcGVuZWQgc3RhdGVcclxuICAgIGNvbnN0IG9uQ2xvc2UgPSB0aGlzLm9uQ2xvc2UgfHwgKCgpID0+IHt9KTtcclxuICAgIHRoaXMub25DbG9zZSA9ICgpID0+IHtcclxuICAgICAgb25DbG9zZSgpO1xyXG4gICAgICB0aGlzLl9vcGVuZWQgPSBmYWxzZTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gaW5pdGlhbGl6ZSBzaWRlbmF2XHJcbiAgICB0aGlzLmNvbGxhcHNlQnV0dG9uLnNpZGVOYXYoe1xyXG4gICAgICBjbG9zZU9uQ2xpY2s6IHRoaXMuY2xvc2VPbkNsaWNrIHx8IGZhbHNlLFxyXG4gICAgICBkcmFnZ2FibGU6IHRoaXMuZHJhZ2dhYmxlICE9IG51bGwgPyB0aGlzLmRyYWdnYWJsZSA6IHRydWUsXHJcbiAgICAgIGVkZ2U6IHRoaXMuZWRnZSB8fCAnbGVmdCcsXHJcbiAgICAgIG1lbnVXaWR0aDogaXNOYU4odGhpcy53aWR0aCkgPyAzMDAgOiB0aGlzLndpZHRoLFxyXG4gICAgICBvbkNsb3NlOiB0aGlzLm9uQ2xvc2UsXHJcbiAgICAgIG9uT3BlbjogdGhpcy5vbk9wZW4sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGluaXRDb2xsYXBzaWJsZUxpbmtzKCkge1xyXG4gICAgLy8gaW5pdGlhbGl6ZSBjb2xsYXBzaWJsZSBlbGVtZW50c1xyXG4gICAgJChgIyR7dGhpcy5pZH0gLmNvbGxhcHNpYmxlYCkuY29sbGFwc2libGUoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7XHJcbiAgTXpTaWRlbmF2Q29sbGFwc2libGVDb21wb25lbnQsXHJcbiAgTXpTaWRlbmF2Q29sbGFwc2libGVDb250ZW50RGlyZWN0aXZlLFxyXG4gIE16U2lkZW5hdkNvbGxhcHNpYmxlSGVhZGVyQ29tcG9uZW50LFxyXG59IGZyb20gJy4vc2lkZW5hdi1jb2xsYXBzaWJsZS9pbmRleCc7XHJcbmltcG9ydCB7IE16U2lkZW5hdkRpdmlkZXJDb21wb25lbnQgfSBmcm9tICcuL3NpZGVuYXYtZGl2aWRlci9pbmRleCc7XHJcbmltcG9ydCB7IE16U2lkZW5hdkhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vc2lkZW5hdi1oZWFkZXIvaW5kZXgnO1xyXG5pbXBvcnQgeyBNelNpZGVuYXZMaW5rQ29tcG9uZW50IH0gZnJvbSAnLi9zaWRlbmF2LWxpbmsvaW5kZXgnO1xyXG5pbXBvcnQgeyBNelNpZGVuYXZTdWJoZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL3NpZGVuYXYtc3ViaGVhZGVyL2luZGV4JztcclxuaW1wb3J0IHsgTXpTaWRlbmF2Q29tcG9uZW50IH0gZnJvbSAnLi9zaWRlbmF2LmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgTXpTaWRlbmF2Q29sbGFwc2libGVDb21wb25lbnQsXHJcbiAgICBNelNpZGVuYXZDb2xsYXBzaWJsZUNvbnRlbnREaXJlY3RpdmUsXHJcbiAgICBNelNpZGVuYXZDb2xsYXBzaWJsZUhlYWRlckNvbXBvbmVudCxcclxuICAgIE16U2lkZW5hdkNvbXBvbmVudCxcclxuICAgIE16U2lkZW5hdkRpdmlkZXJDb21wb25lbnQsXHJcbiAgICBNelNpZGVuYXZIZWFkZXJDb21wb25lbnQsXHJcbiAgICBNelNpZGVuYXZMaW5rQ29tcG9uZW50LFxyXG4gICAgTXpTaWRlbmF2U3ViaGVhZGVyQ29tcG9uZW50LFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgTXpTaWRlbmF2Q29sbGFwc2libGVDb21wb25lbnQsXHJcbiAgICBNelNpZGVuYXZDb2xsYXBzaWJsZUNvbnRlbnREaXJlY3RpdmUsXHJcbiAgICBNelNpZGVuYXZDb2xsYXBzaWJsZUhlYWRlckNvbXBvbmVudCxcclxuICAgIE16U2lkZW5hdkNvbXBvbmVudCxcclxuICAgIE16U2lkZW5hdkRpdmlkZXJDb21wb25lbnQsXHJcbiAgICBNelNpZGVuYXZIZWFkZXJDb21wb25lbnQsXHJcbiAgICBNelNpZGVuYXZMaW5rQ29tcG9uZW50LFxyXG4gICAgTXpTaWRlbmF2U3ViaGVhZGVyQ29tcG9uZW50LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNelNpZGVuYXZNb2R1bGUgeyB9XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXotc3Bpbm5lcicsXHJcbiAgdGVtcGxhdGU6IGAgPGRpdiBjbGFzcz1cInByZWxvYWRlci13cmFwcGVyIGFjdGl2ZSB7eyBzaXplIH19XCI+XHJcblxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzcz1cInNwaW5uZXItbGF5ZXJcIlxyXG4gICAgICBbY2xhc3Muc3Bpbm5lci1yZWQtb25seV09XCJjb2xvciA9PT0gJ3JlZCdcIlxyXG4gICAgICBbY2xhc3Muc3Bpbm5lci1ncmVlbi1vbmx5XT1cImNvbG9yID09PSAnZ3JlZW4nXCJcclxuICAgICAgW2NsYXNzLnNwaW5uZXItYmx1ZS1vbmx5XT1cImNvbG9yID09PSAnYmx1ZSdcIlxyXG4gICAgICBbY2xhc3Muc3Bpbm5lci15ZWxsb3ctb25seV09XCJjb2xvciA9PT0gJ3llbGxvdydcIj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciBsZWZ0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJnYXAtcGF0Y2hcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIHJpZ2h0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PmAsXHJcbiAgc3R5bGVzOiBbYGBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpTcGlubmVyQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBjb2xvcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHNpemU6IHN0cmluZzsgLy8gc21hbGwsIG1lZGl1bSwgYmlnXHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE16U3Bpbm5lckNvbXBvbmVudCB9IGZyb20gJy4vc3Bpbm5lci5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtNelNwaW5uZXJDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtNelNwaW5uZXJDb21wb25lbnRdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpTcGlubmVyTW9kdWxlIHsgfVxyXG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIFJlbmRlcmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1ttelN3aXRjaF0sIFttei1zd2l0Y2hdJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16U3dpdGNoRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBvZmY6IHN0cmluZztcclxuICBASW5wdXQoKSBvbjogc3RyaW5nO1xyXG5cclxuICBzd2l0Y2hDb250YWluZXJFbGVtZW50OiBKUXVlcnk7XHJcbiAgc3dpdGNoRWxlbWVudDogSlF1ZXJ5O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyLFxyXG4gICkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbml0RWxlbWVudHMoKTtcclxuICAgIHRoaXMuaGFuZGxlSW5wdXRUeXBlKCk7XHJcbiAgfVxyXG5cclxuICBpbml0RWxlbWVudHMoKSB7XHJcbiAgICB0aGlzLnN3aXRjaEVsZW1lbnQgPSAkKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcclxuICAgIHRoaXMuc3dpdGNoQ29udGFpbmVyRWxlbWVudCA9ICQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLnBhcmVudCgnbGFiZWwnKS5wYXJlbnQoJy5zd2l0Y2gnKTtcclxuXHJcbiAgICBpZiAodGhpcy5zd2l0Y2hDb250YWluZXJFbGVtZW50Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdJbnB1dCB3aXRoIG16LXN3aXRjaCBkaXJlY3RpdmUgbXVzdCBiZSBwbGFjZWQgaW5zaWRlIGFuIFttei1zd2l0Y2gtY29udGFpbmVyXSB0YWcnLCB0aGlzLnN3aXRjaEVsZW1lbnQpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVJbnB1dFR5cGUoKSB7XHJcbiAgICBjb25zdCB0eXBlID0gdGhpcy5zd2l0Y2hFbGVtZW50LmF0dHIoJ3R5cGUnKTtcclxuICAgIGlmICh0eXBlICE9PSAnY2hlY2tib3gnKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudEF0dHJpYnV0ZSh0aGlzLnN3aXRjaEVsZW1lbnRbMF0sICd0eXBlJywgJ2NoZWNrYm94Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgQ29udGVudENoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBNelN3aXRjaERpcmVjdGl2ZSB9IGZyb20gJy4uL3N3aXRjaC5kaXJlY3RpdmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtei1zd2l0Y2gtY29udGFpbmVyJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJzd2l0Y2hcIj5cclxuICA8bGFiZWw+XHJcbiAgICA8c3BhbiBjbGFzcz1cIm9mZlwiPnt7IG16U3dpdGNoRGlyZWN0aXZlPy5vZmYgfX08L3NwYW4+XHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICA8c3BhbiBjbGFzcz1cImxldmVyXCI+PC9zcGFuPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJvblwiPnt7IG16U3dpdGNoRGlyZWN0aXZlPy5vbiB9fTwvc3Bhbj5cclxuICA8L2xhYmVsPlxyXG48L2Rpdj5gLFxyXG4gIHN0eWxlczogW2BgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16U3dpdGNoQ29udGFpbmVyQ29tcG9uZW50IHtcclxuICBAQ29udGVudENoaWxkKE16U3dpdGNoRGlyZWN0aXZlKSBtelN3aXRjaERpcmVjdGl2ZTogTXpTd2l0Y2hEaXJlY3RpdmU7XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE16U3dpdGNoQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9zd2l0Y2gtY29udGFpbmVyL2luZGV4JztcclxuaW1wb3J0IHsgTXpTd2l0Y2hEaXJlY3RpdmUgfSBmcm9tICcuL3N3aXRjaC5kaXJlY3RpdmUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIE16U3dpdGNoRGlyZWN0aXZlLFxyXG4gICAgTXpTd2l0Y2hDb250YWluZXJDb21wb25lbnQsXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBNelN3aXRjaERpcmVjdGl2ZSxcclxuICAgIE16U3dpdGNoQ29udGFpbmVyQ29tcG9uZW50LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNelN3aXRjaE1vZHVsZSB7IH1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtei10YWItaXRlbScsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IGlkPVwie3sgbGluayB9fVwiIGNsYXNzPVwie3sgY2xhc3MgfX1cIj5cclxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjwvZGl2PmAsXHJcbiAgc3R5bGVzOiBbYGBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpUYWJJdGVtQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBhY3RpdmU6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgY2xhc3M6IHN0cmluZztcclxuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBocmVmOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcclxuICBASW5wdXQoKSB0YWJJdGVtSWQ6IHN0cmluZztcclxuICBASW5wdXQoKSB0YXJnZXQ6IHN0cmluZztcclxuXHJcbiAgdGFiczogSFRNTEVsZW1lbnQ7XHJcbiAgbGlFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgZ2V0IGxpbmsoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLnRhYkl0ZW1JZCA/IHRoaXMudGFiSXRlbUlkIDogdGhpcy5sYWJlbC5yZXBsYWNlKC9bXmEtekEtWjAtOV0vZywgJycpLnRvTG93ZXJDYXNlKCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBFbGVtZW50UmVmLCBJbnB1dCwgUXVlcnlMaXN0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE16VGFiSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vdGFiLWl0ZW0vdGFiLWl0ZW0uY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXotdGFiJyxcclxuICB0ZW1wbGF0ZTogYDx1bCAjdGFic1xyXG4gIGNsYXNzPVwidGFic1wiXHJcbiAgW2NsYXNzLnRhYnMtZml4ZWQtd2lkdGhdPVwiZml4ZWRUYWJXaWR0aFwiPlxyXG4gIDxsaSBjbGFzcz1cInRhYlwiIFtjbGFzcy5kaXNhYmxlZF09XCJ0YWJJdGVtLmRpc2FibGVkXCIgKm5nRm9yPVwibGV0IHRhYkl0ZW0gb2YgdGFiSXRlbXMudG9BcnJheSgpXCI+XHJcbiAgICA8YSBbY2xhc3MuYWN0aXZlXT1cInRhYkl0ZW0uYWN0aXZlXCJcclxuICAgICAgaHJlZj1cInt7IHRhYkl0ZW0uaHJlZiA/IHRhYkl0ZW0uaHJlZiA6ICcjJyArIHRhYkl0ZW0ubGluayB9fVwiIHRhcmdldD1cInt7IHRhYkl0ZW0udGFyZ2V0IH19XCI+XHJcbiAgICAgIHt7IHRhYkl0ZW0ubGFiZWwgfX1cclxuICAgIDwvYT5cclxuICA8L2xpPlxyXG48L3VsPlxyXG48ZGl2PlxyXG4gIDxuZy1jb250ZW50IHNlbGVjdD1cIm16LXRhYi1pdGVtXCI+PC9uZy1jb250ZW50PlxyXG48L2Rpdj5gLFxyXG4gIHN0eWxlczogW2BgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16VGFiQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQElucHV0KCkgZml4ZWRUYWJXaWR0aDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBvblNob3c6IEZ1bmN0aW9uO1xyXG4gIEBJbnB1dCgpIHJlc3BvbnNpdmVUaHJlc2hvbGQ6IG51bWJlcjtcclxuICBASW5wdXQoKSBzd2lwZWFibGU6IGJvb2xlYW47XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3RhYnMnKSB0YWJzOiBFbGVtZW50UmVmO1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oTXpUYWJJdGVtQ29tcG9uZW50KSB0YWJJdGVtczogUXVlcnlMaXN0PE16VGFiSXRlbUNvbXBvbmVudD47XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaW5pdFRhYnMoKTtcclxuICB9XHJcblxyXG4gIGluaXRUYWJzKCkge1xyXG4gICAgY29uc3Qgb3B0aW9uczogTWF0ZXJpYWxpemUuVGFiT3B0aW9ucyA9IHtcclxuICAgICAgb25TaG93OiB0aGlzLm9uU2hvdyxcclxuICAgICAgcmVzcG9uc2l2ZVRocmVzaG9sZDogdGhpcy5yZXNwb25zaXZlVGhyZXNob2xkLFxyXG4gICAgICBzd2lwZWFibGU6IHRoaXMuc3dpcGVhYmxlLFxyXG4gICAgfTtcclxuXHJcbiAgICAkKHRoaXMudGFicy5uYXRpdmVFbGVtZW50KS50YWJzKG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0VGFiKHRhYkl0ZW1JZDogc3RyaW5nKSB7XHJcbiAgICAkKHRoaXMudGFicy5uYXRpdmVFbGVtZW50KS50YWJzKCdzZWxlY3RfdGFiJywgdGFiSXRlbUlkKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE16VGFiSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vdGFiLWl0ZW0vaW5kZXgnO1xyXG5pbXBvcnQgeyBNelRhYkNvbXBvbmVudCB9IGZyb20gJy4vdGFiLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgTXpUYWJDb21wb25lbnQsXHJcbiAgICBNelRhYkl0ZW1Db21wb25lbnQsXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBNelRhYkNvbXBvbmVudCxcclxuICAgIE16VGFiSXRlbUNvbXBvbmVudCxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpUYWJNb2R1bGUgeyB9XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXotdGV4dGFyZWEtY29udGFpbmVyJyxcclxuICB0ZW1wbGF0ZTogYDxkaXZcclxuICBjbGFzcz1cImlucHV0LWZpZWxkXCJcclxuICBbY2xhc3MuaW5saW5lXT1cImlubGluZVwiXHJcbj5cclxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjwvZGl2PmAsXHJcbiAgc3R5bGVzOiBbYDpob3N0IC9kZWVwLyB0ZXh0YXJlYXtkaXNwbGF5OmJsb2NrfS5pbnB1dC1maWVsZDpub3QoLmlubGluZSl7ZGlzcGxheTpibG9ja31gXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16VGV4dGFyZWFDb250YWluZXJDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGlubGluZTogYm9vbGVhbjtcclxufVxyXG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIE9uSW5pdCwgUmVuZGVyZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnaVttelRleHRhcmVhUHJlZml4XSwgaVttei10ZXh0YXJlYS1wcmVmaXhdJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16VGV4dGFyZWFQcmVmaXhEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3ByZWZpeCcsIHRydWUpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3B0aW9uYWwsIFJlbmRlcmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBIYW5kbGVQcm9wQ2hhbmdlcyB9IGZyb20gJy4uL3NoYXJlZC9pbmRleCc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ3RleHRhcmVhW216VGV4dGFyZWFdLCB0ZXh0YXJlYVttei10ZXh0YXJlYV0nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpUZXh0YXJlYURpcmVjdGl2ZSBleHRlbmRzIEhhbmRsZVByb3BDaGFuZ2VzIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIC8vIG5hdGl2ZSBwcm9wZXJ0aWVzXHJcbiAgQElucHV0KCkgaWQ6IHN0cmluZztcclxuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xyXG5cclxuICAvLyBkaXJlY3RpdmUgcHJvcGVydGllc1xyXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbGVuZ3RoOiBudW1iZXI7XHJcblxyXG4gIHRleHRhcmVhRWxlbWVudDogSlF1ZXJ5O1xyXG4gIHRleHRhcmVhQ29udGFpbmVyRWxlbWVudDogSlF1ZXJ5O1xyXG4gIHRleHRhcmVhVmFsdWVTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuICBsYWJlbEVsZW1lbnQ6IEpRdWVyeTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIG5nQ29udHJvbDogTmdDb250cm9sLFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIsXHJcbiAgKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluaXRIYW5kbGVycygpO1xyXG4gICAgdGhpcy5pbml0RWxlbWVudHMoKTtcclxuICAgIHRoaXMuaW5pdFRleHRhcmVhU3Vic2NyaXB0aW9uKCk7XHJcbiAgICB0aGlzLmhhbmRsZVByb3BlcnRpZXMoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgaWYgKHRoaXMudGV4dGFyZWFWYWx1ZVN1YnNjcmlwdGlvbikge1xyXG4gICAgICB0aGlzLnRleHRhcmVhVmFsdWVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGluaXRIYW5kbGVycygpIHtcclxuICAgIHRoaXMuaGFuZGxlcnMgPSB7XHJcbiAgICAgIGxhYmVsOiAoKSA9PiB0aGlzLmhhbmRsZUxhYmVsKCksXHJcbiAgICAgIGxlbmd0aDogKCkgPT4gdGhpcy5oYW5kbGVMZW5ndGgoKSxcclxuICAgICAgcGxhY2Vob2xkZXI6ICgpID0+IHRoaXMuaGFuZGxlUGxhY2Vob2xkZXIoKSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBpbml0RWxlbWVudHMoKSB7XHJcbiAgICB0aGlzLnRleHRhcmVhRWxlbWVudCA9ICQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgdGhpcy50ZXh0YXJlYUNvbnRhaW5lckVsZW1lbnQgPSAkKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5wYXJlbnQoJy5pbnB1dC1maWVsZCcpO1xyXG4gICAgdGhpcy5sYWJlbEVsZW1lbnQgPSB0aGlzLmNyZWF0ZUxhYmVsRWxlbWVudCgpO1xyXG4gICAgdGhpcy5pbml0VGV4dGFyZWEoKTtcclxuICB9XHJcblxyXG4gIGluaXRUZXh0YXJlYSgpIHtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMudGV4dGFyZWFFbGVtZW50WzBdLCAnbWF0ZXJpYWxpemUtdGV4dGFyZWEnLCB0cnVlKTtcclxuICB9XHJcblxyXG4gIGluaXRUZXh0YXJlYVN1YnNjcmlwdGlvbigpIHtcclxuICAgIGlmICh0aGlzLm5nQ29udHJvbCkge1xyXG4gICAgICB0aGlzLnRleHRhcmVhVmFsdWVTdWJzY3JpcHRpb24gPSB0aGlzLm5nQ29udHJvbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHRoaXMuc2V0TGFiZWxBY3RpdmUoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjcmVhdGVMYWJlbEVsZW1lbnQoKSB7XHJcbiAgICBjb25zdCBsYWJlbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgbGFiZWxFbGVtZW50LnNldEF0dHJpYnV0ZSgnZm9yJywgdGhpcy5pZCk7XHJcblxyXG4gICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMudGV4dGFyZWFFbGVtZW50LCAnYWZ0ZXInLCBbbGFiZWxFbGVtZW50XSk7XHJcblxyXG4gICAgcmV0dXJuICQobGFiZWxFbGVtZW50KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVByb3BlcnRpZXMoKSB7XHJcbiAgICBpZiAodGhpcy50ZXh0YXJlYUNvbnRhaW5lckVsZW1lbnQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1RleHRhcmVhIG11c3QgYmUgcGxhY2VkIGluc2lkZSBhIFttei10ZXh0YXJlYS1jb250YWluZXJdIHRhZycsIHRoaXMudGV4dGFyZWFFbGVtZW50KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHN1cGVyLmV4ZWN1dGVQcm9wSGFuZGxlcnMoKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUxhYmVsKCkge1xyXG4gICAgaWYgKHRoaXMucGxhY2Vob2xkZXIgfHwgdGhpcy50ZXh0YXJlYUVsZW1lbnQudmFsKCkpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5sYWJlbEVsZW1lbnRbMF0sICdhY3RpdmUnLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QodGhpcy5sYWJlbEVsZW1lbnQsICd0ZXh0JywgW3RoaXMubGFiZWxdKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUxlbmd0aCgpIHtcclxuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMubGVuZ3RoID8gdGhpcy5sZW5ndGgudG9TdHJpbmcoKSA6IG51bGw7XHJcblxyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50QXR0cmlidXRlKHRoaXMudGV4dGFyZWFFbGVtZW50WzBdLCAnZGF0YS1sZW5ndGgnLCBsZW5ndGgpO1xyXG5cclxuICAgIGlmIChsZW5ndGgpIHtcclxuICAgICAgdGhpcy5zZXRDaGFyYWN0ZXJDb3VudCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZW1vdmVDaGFyYWN0ZXJDb3VudCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlUGxhY2Vob2xkZXIoKSB7XHJcbiAgICBjb25zdCBwbGFjZWhvbGRlciA9ICEhdGhpcy5wbGFjZWhvbGRlciA/IHRoaXMucGxhY2Vob2xkZXIgOiBudWxsO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50QXR0cmlidXRlKHRoaXMudGV4dGFyZWFFbGVtZW50WzBdLCAncGxhY2Vob2xkZXInLCBwbGFjZWhvbGRlcik7XHJcblxyXG4gICAgdGhpcy5zZXRMYWJlbEFjdGl2ZSgpO1xyXG4gIH1cclxuXHJcbiAgc2V0Q2hhcmFjdGVyQ291bnQoKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QodGhpcy50ZXh0YXJlYUVsZW1lbnQsICdjaGFyYWN0ZXJDb3VudGVyJyk7XHJcblxyXG4gICAgLy8gZm9yY2UgdmFsaWRhdGlvblxyXG4gICAgLy8gbmVlZCBzZXRUaW1lb3V0IG90aGVyd2lzZSBpdCB3b250IHRyaWdnZXIgdmFsaWRhdGlvbiByaWdodCBhd2F5XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMudGV4dGFyZWFFbGVtZW50LCAndHJpZ2dlcicsIFsnaW5wdXQnXSk7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLnRleHRhcmVhRWxlbWVudCwgJ3RyaWdnZXInLCBbJ2JsdXInXSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldExhYmVsQWN0aXZlKCkge1xyXG4gICAgLy8gbmVlZCBzZXRUaW1lb3V0IG90aGVyd2lzZSBpdCB3b250IG1ha2UgbGFiZWwgZmxvYXQgaW4gc29tZSBjaXJjb25zdGFuY2VzXHJcbiAgICAvLyBmb3IgZXhhbXBsZTogZm9yY2luZyB2YWxpZGF0aW9uIGZvciBleGFtcGxlLCByZXNldGluZyBmb3JtIHByb2dyYW1tYXRpY2FseSwgLi4uXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgY29uc3QgdGV4dGFyZWFWYWx1ZSA9ICg8SFRNTFRleHRBcmVhRWxlbWVudD50aGlzLnRleHRhcmVhRWxlbWVudFswXSkudmFsdWU7XHJcbiAgICAgIGNvbnN0IGlzQWN0aXZlID0gISF0aGlzLnBsYWNlaG9sZGVyIHx8ICEhdGV4dGFyZWFWYWx1ZTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5sYWJlbEVsZW1lbnRbMF0sICdhY3RpdmUnLCBpc0FjdGl2ZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlbW92ZUNoYXJhY3RlckNvdW50KCkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMudGV4dGFyZWFFbGVtZW50LnNpYmxpbmdzKCcuY2hhcmFjdGVyLWNvdW50ZXInKSwgJ3JlbW92ZScpO1xyXG5cclxuICAgIHRoaXMucmVtb3ZlVmFsaWRhdGlvbkNsYXNzZXMoKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZVZhbGlkYXRpb25DbGFzc2VzKCkge1xyXG4gICAgLy8gcmVzZXQgdmFsaWQvaW52YWxpZCBzdGF0ZVxyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy50ZXh0YXJlYUVsZW1lbnRbMF0sICdpbnZhbGlkJywgZmFsc2UpO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy50ZXh0YXJlYUVsZW1lbnRbMF0sICd2YWxpZCcsIGZhbHNlKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE16VGV4dGFyZWFDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL3RleHRhcmVhLWNvbnRhaW5lci9pbmRleCc7XHJcbmltcG9ydCB7IE16VGV4dGFyZWFQcmVmaXhEaXJlY3RpdmUgfSBmcm9tICcuL3RleHRhcmVhLXByZWZpeC9pbmRleCc7XHJcbmltcG9ydCB7IE16VGV4dGFyZWFEaXJlY3RpdmUgfSBmcm9tICcuL3RleHRhcmVhLmRpcmVjdGl2ZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgTXpUZXh0YXJlYUNvbnRhaW5lckNvbXBvbmVudCxcclxuICAgIE16VGV4dGFyZWFEaXJlY3RpdmUsXHJcbiAgICBNelRleHRhcmVhUHJlZml4RGlyZWN0aXZlLFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgTXpUZXh0YXJlYUNvbnRhaW5lckNvbXBvbmVudCxcclxuICAgIE16VGV4dGFyZWFEaXJlY3RpdmUsXHJcbiAgICBNelRleHRhcmVhUHJlZml4RGlyZWN0aXZlLFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNelRleHRhcmVhTW9kdWxlIHsgfVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ216LXRpbWVwaWNrZXItY29udGFpbmVyJyxcclxuICB0ZW1wbGF0ZTogYDxkaXZcclxuICBjbGFzcz1cImlucHV0LWZpZWxkXCJcclxuICBbY2xhc3MuaW5saW5lXT1cImlubGluZVwiXHJcbj5cclxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjwvZGl2PmAsXHJcbiAgc3R5bGVzOiBbYGBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpUaW1lcGlja2VyQ29udGFpbmVyQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBpbmxpbmU6IGJvb2xlYW47XHJcbn1cclxuIiwiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdEJpbmRpbmcsIElucHV0LCBOZ1pvbmUsIE9uRGVzdHJveSwgT25Jbml0LCBPcHRpb25hbCwgUmVuZGVyZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IEhhbmRsZVByb3BDaGFuZ2VzIH0gZnJvbSAnLi4vc2hhcmVkL2luZGV4JztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnaW5wdXRbbXpUaW1lcGlja2VyXSwgaW5wdXRbbXotdGltZXBpY2tlcl0nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpUaW1lcGlja2VyRGlyZWN0aXZlIGV4dGVuZHMgSGFuZGxlUHJvcENoYW5nZXMgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy50aW1lcGlja2VyJykgdHJ1ZTtcclxuXHJcbiAgLy8gbmF0aXZlIHByb3BlcnRpZXNcclxuICBASW5wdXQoKSBpZDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XHJcblxyXG4gIC8vIGRpcmVjdGl2ZSBwcm9wZXJ0aWVzXHJcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcclxuXHJcbiAgLy8gbWF0ZXJpYWxpemUgdXNlcyBDbG9ja1BpY2tlciB0byBjcmVhdGUgdGhlIHRpbWVwaWNrZXJcclxuICAvLyBjb21wbGV0ZSBsaXN0IG9mIG9wdGlvbnMgaXMgYXZhaWxhYmxlIGF0IHRoZSBmb2xsb3dpbmcgYWRkcmVzc1xyXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWFyZW91dG1hbi9jbG9ja3BpY2tlciNvcHRpb25zXHJcbiAgQElucHV0KCkgb3B0aW9uczogYW55ID0ge307XHJcblxyXG4gIGlucHV0RWxlbWVudDogSlF1ZXJ5PEhUTUxJbnB1dEVsZW1lbnQ+O1xyXG4gIGlucHV0Q29udGFpbmVyRWxlbWVudDogSlF1ZXJ5PEhUTUxFbGVtZW50PjtcclxuICBsYWJlbEVsZW1lbnQ6IEpRdWVyeTxIVE1MTGFiZWxFbGVtZW50PjtcclxuICBzdG9wQ2hhbmdlUHJvcGFnYXRpb24gPSBmYWxzZTtcclxuXHJcbiAgZ2V0IGNsb2NrcGlja2VyKCk6IEpRdWVyeTxIVE1MRWxlbWVudD4ge1xyXG4gICAgcmV0dXJuICQoJy5jbG9ja3BpY2tlcicpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIG5nQ29udHJvbDogTmdDb250cm9sLFxyXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcixcclxuICAgIHByaXZhdGUgem9uZTogTmdab25lLFxyXG4gICkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbml0SGFuZGxlcnMoKTtcclxuICAgIHRoaXMuaW5pdEVsZW1lbnRzKCk7XHJcbiAgICB0aGlzLmluaXRUaW1lcGlja2VyKCk7XHJcbiAgICB0aGlzLmhhbmRsZVByb3BlcnRpZXMoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgLy8gcmVtb3ZlIGV2ZW50IGhhbmRsZXJzXHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC5vZmYoKTtcclxuICAgIC8vIHJlbW92ZSBjbG9ja3BpY2tlciBhZGRlZCB0byBib2R5IGJ5IGRlZmF1bHRcclxuICAgIHRoaXMuY2xvY2twaWNrZXIucmVtb3ZlKCk7XHJcbiAgfVxyXG5cclxuICBpbml0SGFuZGxlcnMoKSB7XHJcbiAgICB0aGlzLmhhbmRsZXJzID0ge1xyXG4gICAgICBsYWJlbDogKCkgPT4gdGhpcy5oYW5kbGVMYWJlbCgpLFxyXG4gICAgICBwbGFjZWhvbGRlcjogKCkgPT4gdGhpcy5oYW5kbGVQbGFjZWhvbGRlcigpLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGluaXRFbGVtZW50cygpIHtcclxuICAgIHRoaXMuaW5wdXRDb250YWluZXJFbGVtZW50ID0gJCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkucGFyZW50KCcuaW5wdXQtZmllbGQnKSBhcyBKUXVlcnk8SFRNTEVsZW1lbnQ+O1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQgPSAkKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSBhcyBKUXVlcnk8SFRNTElucHV0RWxlbWVudD47XHJcbiAgICB0aGlzLmxhYmVsRWxlbWVudCA9IHRoaXMuY3JlYXRlTGFiZWxFbGVtZW50KCkgYXMgSlF1ZXJ5PEhUTUxMYWJlbEVsZW1lbnQ+O1xyXG4gIH1cclxuXHJcbiAgaW5pdFRpbWVwaWNrZXIoKSB7XHJcbiAgICAvLyBhcHBlbmQgY2xvY2twaWNrZXIgdG8gYm9keSBieSBkZWZhdWx0XHJcbiAgICBpZiAoIXRoaXMub3B0aW9ucy5jb250YWluZXIpIHtcclxuICAgICAgdGhpcy5vcHRpb25zLmNvbnRhaW5lciA9ICdib2R5JztcclxuICAgIH1cclxuXHJcbiAgICAvLyBleHRlbmQgYWZ0ZXJIaWRlIGNhbGxiYWNrIHRvIHNldCBsYWJlbCBhY3RpdmVcclxuICAgIGNvbnN0IGFmdGVySGlkZSA9IHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMuYWZ0ZXJIaWRlIHx8ICgoKSA9PiB7fSk7XHJcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLm9wdGlvbnMsIHtcclxuICAgICAgYWZ0ZXJIaWRlOiAoKSA9PiB7XHJcbiAgICAgICAgYWZ0ZXJIaWRlKCk7XHJcbiAgICAgICAgdGhpcy5zZXRMYWJlbEFjdGl2ZSgpO1xyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMuaW5wdXRFbGVtZW50LCAncGlja2F0aW1lJywgW3RoaXMub3B0aW9uc10pO1xyXG5cclxuICAgIGlmICh0aGlzLm5nQ29udHJvbCkge1xyXG4gICAgICAvLyBzZXQgbmdDb250cm9sIHZhbHVlIGFjY29yZGluZyB0byBzZWxlY3RlZCB0aW1lIGluIHRpbWVwaWNrZXJcclxuICAgICAgdGhpcy5pbnB1dEVsZW1lbnQub24oJ2NoYW5nZScsIChldmVudDogSlF1ZXJ5LkV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICAgICAgdGhpcy5uZ0NvbnRyb2wuY29udHJvbC5zZXRWYWx1ZShldmVudC50YXJnZXQudmFsdWUpO1xyXG5cclxuICAgICAgICAvLyBtYXJrIGZvciBjaGFuZ2UgZGV0ZWN0aW9uXHJcbiAgICAgICAgLy8gZml4IGZvcm0gdmFsaWRhdGlvbiB3aXRoIENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG4gICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlTGFiZWxFbGVtZW50KCkge1xyXG4gICAgY29uc3QgbGFiZWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGxhYmVsRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIHRoaXMuaWQpO1xyXG5cclxuICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLmlucHV0RWxlbWVudCwgJ2FmdGVyJywgW2xhYmVsRWxlbWVudF0pO1xyXG5cclxuICAgIHJldHVybiAkKGxhYmVsRWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVQcm9wZXJ0aWVzKCkge1xyXG4gICAgaWYgKHRoaXMuaW5wdXRDb250YWluZXJFbGVtZW50Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdJbnB1dCB3aXRoIG16LXRpbWVwaWNrZXIgZGlyZWN0aXZlIG11c3QgYmUgcGxhY2VkIGluc2lkZSBhbiBbbXotdGltZXBpY2tlci1jb250YWluZXJdIHRhZycsIHRoaXMuaW5wdXRFbGVtZW50KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHN1cGVyLmV4ZWN1dGVQcm9wSGFuZGxlcnMoKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUxhYmVsKCkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMubGFiZWxFbGVtZW50LCAndGV4dCcsIFt0aGlzLmxhYmVsXSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVQbGFjZWhvbGRlcigpIHtcclxuICAgIGNvbnN0IHBsYWNlaG9sZGVyID0gISF0aGlzLnBsYWNlaG9sZGVyID8gdGhpcy5wbGFjZWhvbGRlciA6IG51bGw7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRBdHRyaWJ1dGUodGhpcy5pbnB1dEVsZW1lbnRbMF0sICdwbGFjZWhvbGRlcicsIHBsYWNlaG9sZGVyKTtcclxuXHJcbiAgICAvLyBmaXggaXNzdWUgaW4gSUUgd2hlcmUgaGF2aW5nIGEgcGxhY2Vob2xkZXIgb24gaW5wdXQgbWFrZSBjb250cm9sIGRpcnR5IGFuZCB0cmlnZ2VyIHZhbGlkYXRpb25cclxuICAgIC8vIG9uIHBhZ2UgbG9hZC4uLiBub3RlIHRoYXQgaXQgc3RpbGwgdHJpZ2dlciB2YWxpZGF0aW9uIG9uIGZvY3VzIGFuZCB3b3VsZCBuZWVkIGEgYmV0dGVyIGZpeFxyXG4gICAgLy8gaXNzdWUgOiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xNTI5OVxyXG4gICAgLy8gd29ya2Fyb3VuZCA6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS80NDk2NzI0NS81NTgzMjgzXHJcbiAgICBpZiAodGhpcy5uZ0NvbnRyb2wpIHtcclxuICAgICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMubmdDb250cm9sLmNvbnRyb2wubWFya0FzUHJpc3RpbmUoKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2V0TGFiZWxBY3RpdmUoKTtcclxuICB9XHJcblxyXG4gIHNldExhYmVsQWN0aXZlKCkge1xyXG4gICAgLy8gbmVlZCB3YWl0IGZvciB6b25lIHRvIGJlIHN0YWJsZSBvdGhlcndpc2UgaXQgd29udCBtYWtlIGxhYmVsXHJcbiAgICAvLyBmbG9hdCBpbiBzb21lIGNpcmNvbnN0YW5jZXMgKGNsZWFyaW5nIHZhbHVlIHByb2dyYW1tYXRpY2FsbHkgZm9yIGV4YW1wbGUpXHJcbiAgICB0aGlzLnpvbmUub25TdGFibGVcclxuICAgICAgLnBpcGUoZmlyc3QoKSlcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5wdXRWYWx1ZSA9IHRoaXMuaW5wdXRFbGVtZW50WzBdLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGlzQWN0aXZlID0gISF0aGlzLnBsYWNlaG9sZGVyIHx8ICEhaW5wdXRWYWx1ZTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLmxhYmVsRWxlbWVudFswXSwgJ2FjdGl2ZScsIGlzQWN0aXZlKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBNelRpbWVwaWNrZXJDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL3RpbWVwaWNrZXItY29udGFpbmVyL2luZGV4JztcclxuaW1wb3J0IHsgTXpUaW1lcGlja2VyRGlyZWN0aXZlIH0gZnJvbSAnLi90aW1lcGlja2VyLmRpcmVjdGl2ZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgTXpUaW1lcGlja2VyRGlyZWN0aXZlLFxyXG4gICAgTXpUaW1lcGlja2VyQ29udGFpbmVyQ29tcG9uZW50LFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgTXpUaW1lcGlja2VyRGlyZWN0aXZlLFxyXG4gICAgTXpUaW1lcGlja2VyQ29udGFpbmVyQ29tcG9uZW50LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNelRpbWVwaWNrZXJNb2R1bGUgeyB9XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE16VG9hc3RTZXJ2aWNlIHtcclxuXHJcbiAgc2hvdyhtZXNzYWdlOiBzdHJpbmcsIGRpc3BsYXlMZW5ndGg6IG51bWJlciwgY2xhc3NOYW1lPzogc3RyaW5nLCBjb21wbGV0ZUNhbGxiYWNrPzogRnVuY3Rpb24pIHtcclxuICAgIE1hdGVyaWFsaXplLnRvYXN0KG1lc3NhZ2UsIGRpc3BsYXlMZW5ndGgsIGNsYXNzTmFtZSwgY29tcGxldGVDYWxsYmFjayk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBNelRvYXN0U2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvaW5kZXgnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBwcm92aWRlcnM6IFtNelRvYXN0U2VydmljZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNelRvYXN0TW9kdWxlIHsgfVxyXG4iLCJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LCBSZW5kZXJlciwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbXpUb29sdGlwXSwgW216LXRvb2x0aXBdJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16VG9vbHRpcERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpIGRlbGF5OiBudW1iZXI7XHJcbiAgQElucHV0KCkgaHRtbDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBwb3NpdGlvbjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHRvb2x0aXA6IHN0cmluZztcclxuXHJcbiAgdGFyZ2V0RWxlbWVudDogSlF1ZXJ5O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyLFxyXG4gICkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbml0RWxlbWVudHMoKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIGlmICh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3R5cGUnKSA9PT0gJ2NoZWNrYm94Jykge1xyXG4gICAgICB0aGlzLnRhcmdldEVsZW1lbnQgPSAkKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5uZXh0KCdsYWJlbCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaW5pdFRvb2x0aXAoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGlmICh0aGlzLnRhcmdldEVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5pbml0VG9vbHRpcCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QodGhpcy50YXJnZXRFbGVtZW50LCAndG9vbHRpcCcsIFsncmVtb3ZlJ10pO1xyXG4gIH1cclxuXHJcbiAgaW5pdEVsZW1lbnRzKCkge1xyXG4gICAgdGhpcy50YXJnZXRFbGVtZW50ID0gJCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBpbml0VG9vbHRpcCgpIHtcclxuICAgIGNvbnN0IHRvb2x0aXBPcHRpb25zOiBNYXRlcmlhbGl6ZS5Ub29sdGlwT3B0aW9ucyA9IHtcclxuICAgICAgZGVsYXk6IGlzTmFOKHRoaXMuZGVsYXkpIHx8IHRoaXMuZGVsYXkgPT0gbnVsbCA/IDM1MCA6IHRoaXMuZGVsYXksXHJcbiAgICAgIGh0bWw6IHRoaXMuaHRtbCB8fCBmYWxzZSxcclxuICAgICAgcG9zaXRpb246IHRoaXMucG9zaXRpb24gfHwgJ2JvdHRvbScsXHJcbiAgICAgIHRvb2x0aXA6IHRoaXMudG9vbHRpcCxcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMudGFyZ2V0RWxlbWVudCwgJ3Rvb2x0aXAnLCBbdG9vbHRpcE9wdGlvbnNdKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE16VG9vbHRpcERpcmVjdGl2ZSB9IGZyb20gJy4vdG9vbHRpcC5kaXJlY3RpdmUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtNelRvb2x0aXBEaXJlY3RpdmVdLFxyXG4gIGV4cG9ydHM6IFtNelRvb2x0aXBEaXJlY3RpdmVdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpUb29sdGlwTW9kdWxlIHsgfVxyXG4iLCJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTXpFcnJvck1lc3NhZ2VDb21wb25lbnQgfSBmcm9tICcuL2Vycm9yLW1lc3NhZ2UvaW5kZXgnO1xyXG5pbXBvcnQgeyBNelZhbGlkYXRpb25Db21wb25lbnQgfSBmcm9tICcuL3ZhbGlkYXRpb24uY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBNekVycm9yTWVzc2FnZUNvbXBvbmVudCxcclxuICAgIE16VmFsaWRhdGlvbkNvbXBvbmVudCxcclxuICBdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW016RXJyb3JNZXNzYWdlQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBNekVycm9yTWVzc2FnZUNvbXBvbmVudCxcclxuICAgIE16VmFsaWRhdGlvbkNvbXBvbmVudCxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpWYWxpZGF0aW9uTW9kdWxlIHsgfVxyXG4iLCJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IE16QmFkZ2VNb2R1bGUgfSBmcm9tICcuL2JhZGdlL2JhZGdlLm1vZHVsZSc7XHJcbmltcG9ydCB7IE16QnV0dG9uTW9kdWxlIH0gZnJvbSAnLi9idXR0b24vYnV0dG9uLm1vZHVsZSc7XHJcbmltcG9ydCB7IE16Q2FyZE1vZHVsZSB9IGZyb20gJy4vY2FyZC9jYXJkLm1vZHVsZSc7XHJcbmltcG9ydCB7IE16Q2hlY2tib3hNb2R1bGUgfSBmcm9tICcuL2NoZWNrYm94L2NoZWNrYm94Lm1vZHVsZSc7XHJcbmltcG9ydCB7IE16Q2hpcE1vZHVsZSB9IGZyb20gJy4vY2hpcC9jaGlwLm1vZHVsZSc7XHJcbmltcG9ydCB7IE16Q29sbGFwc2libGVNb2R1bGUgfSBmcm9tICcuL2NvbGxhcHNpYmxlL2NvbGxhcHNpYmxlLm1vZHVsZSc7XHJcbmltcG9ydCB7IE16Q29sbGVjdGlvbk1vZHVsZSB9IGZyb20gJy4vY29sbGVjdGlvbi9jb2xsZWN0aW9uLm1vZHVsZSc7XHJcbmltcG9ydCB7IE16RGF0ZXBpY2tlck1vZHVsZSB9IGZyb20gJy4vZGF0ZXBpY2tlci9kYXRlcGlja2VyLm1vZHVsZSc7XHJcbmltcG9ydCB7IE16RHJvcGRvd25Nb2R1bGUgfSBmcm9tICcuL2Ryb3Bkb3duL2Ryb3Bkb3duLm1vZHVsZSc7XHJcbmltcG9ydCB7IE16RmVhdHVyZURpc2NvdmVyeU1vZHVsZSB9IGZyb20gJy4vZmVhdHVyZS1kaXNjb3ZlcnkvZmVhdHVyZS1kaXNjb3ZlcnkubW9kdWxlJztcclxuaW1wb3J0IHsgTXpJY29uTWRpTW9kdWxlIH0gZnJvbSAnLi9pY29uLW1kaS9pY29uLW1kaS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBNekljb25Nb2R1bGUgfSBmcm9tICcuL2ljb24vaWNvbi5tb2R1bGUnO1xyXG5pbXBvcnQgeyBNeklucHV0TW9kdWxlIH0gZnJvbSAnLi9pbnB1dC9pbnB1dC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBNek1lZGlhTW9kdWxlIH0gZnJvbSAnLi9tZWRpYS9tZWRpYS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBNek1vZGFsTW9kdWxlIH0gZnJvbSAnLi9tb2RhbC9tb2RhbC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBNek5hdmJhck1vZHVsZSB9IGZyb20gJy4vbmF2YmFyL25hdmJhci5tb2R1bGUnO1xyXG5pbXBvcnQgeyBNelBhZ2luYXRpb25Nb2R1bGUgfSBmcm9tICcuL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5tb2R1bGUnO1xyXG5pbXBvcnQgeyBNelBhcmFsbGF4TW9kdWxlIH0gZnJvbSAnLi9wYXJhbGxheC9wYXJhbGxheC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBNelByb2dyZXNzTW9kdWxlIH0gZnJvbSAnLi9wcm9ncmVzcy9wcm9ncmVzcy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBNelJhZGlvQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi9yYWRpby1idXR0b24vcmFkaW8tYnV0dG9uLm1vZHVsZSc7XHJcbmltcG9ydCB7IE16U2VsZWN0TW9kdWxlIH0gZnJvbSAnLi9zZWxlY3Qvc2VsZWN0Lm1vZHVsZSc7XHJcbmltcG9ydCB7IE16SW5qZWN0aW9uTW9kdWxlIH0gZnJvbSAnLi9zaGFyZWQvaW5qZWN0aW9uL2luamVjdGlvbi5tb2R1bGUnO1xyXG5pbXBvcnQgeyBNelNpZGVuYXZNb2R1bGUgfSBmcm9tICcuL3NpZGVuYXYvc2lkZW5hdi5tb2R1bGUnO1xyXG5pbXBvcnQgeyBNelNwaW5uZXJNb2R1bGUgfSBmcm9tICcuL3NwaW5uZXIvc3Bpbm5lci5tb2R1bGUnO1xyXG5pbXBvcnQgeyBNelN3aXRjaE1vZHVsZSB9IGZyb20gJy4vc3dpdGNoL3N3aXRjaC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBNelRhYk1vZHVsZSB9IGZyb20gJy4vdGFiL3RhYi5tb2R1bGUnO1xyXG5pbXBvcnQgeyBNelRleHRhcmVhTW9kdWxlIH0gZnJvbSAnLi90ZXh0YXJlYS90ZXh0YXJlYS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBNelRpbWVwaWNrZXJNb2R1bGUgfSBmcm9tICcuL3RpbWVwaWNrZXIvdGltZXBpY2tlci5tb2R1bGUnO1xyXG5pbXBvcnQgeyBNelRvYXN0TW9kdWxlIH0gZnJvbSAnLi90b2FzdC90b2FzdC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBNelRvb2x0aXBNb2R1bGUgfSBmcm9tICcuL3Rvb2x0aXAvdG9vbHRpcC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBNelZhbGlkYXRpb25Nb2R1bGUgfSBmcm9tICcuL3ZhbGlkYXRpb24vdmFsaWRhdGlvbi5tb2R1bGUnO1xyXG5cclxuY29uc3QgTVpfTU9EVUxFUyA9IFtcclxuICBDb21tb25Nb2R1bGUsXHJcbiAgRm9ybXNNb2R1bGUsXHJcbiAgTXpCYWRnZU1vZHVsZSxcclxuICBNekJ1dHRvbk1vZHVsZSxcclxuICBNekNhcmRNb2R1bGUsXHJcbiAgTXpDaGVja2JveE1vZHVsZSxcclxuICBNekNoaXBNb2R1bGUsXHJcbiAgTXpDb2xsYXBzaWJsZU1vZHVsZSxcclxuICBNekNvbGxlY3Rpb25Nb2R1bGUsXHJcbiAgTXpEYXRlcGlja2VyTW9kdWxlLFxyXG4gIE16RHJvcGRvd25Nb2R1bGUsXHJcbiAgTXpGZWF0dXJlRGlzY292ZXJ5TW9kdWxlLFxyXG4gIE16SWNvbk1vZHVsZSxcclxuICBNekljb25NZGlNb2R1bGUsXHJcbiAgTXpJbmplY3Rpb25Nb2R1bGUsXHJcbiAgTXpJbnB1dE1vZHVsZSxcclxuICBNek1lZGlhTW9kdWxlLFxyXG4gIE16TW9kYWxNb2R1bGUsXHJcbiAgTXpOYXZiYXJNb2R1bGUsXHJcbiAgTXpQYWdpbmF0aW9uTW9kdWxlLFxyXG4gIE16UGFyYWxsYXhNb2R1bGUsXHJcbiAgTXpQcm9ncmVzc01vZHVsZSxcclxuICBNelJhZGlvQnV0dG9uTW9kdWxlLFxyXG4gIE16U2VsZWN0TW9kdWxlLFxyXG4gIE16U2lkZW5hdk1vZHVsZSxcclxuICBNelNwaW5uZXJNb2R1bGUsXHJcbiAgTXpTd2l0Y2hNb2R1bGUsXHJcbiAgTXpUYWJNb2R1bGUsXHJcbiAgTXpUZXh0YXJlYU1vZHVsZSxcclxuICBNelRpbWVwaWNrZXJNb2R1bGUsXHJcbiAgTXpUb2FzdE1vZHVsZSxcclxuICBNelRvb2x0aXBNb2R1bGUsXHJcbiAgTXpWYWxpZGF0aW9uTW9kdWxlLFxyXG5dO1xyXG5cclxuLyoqXHJcbiAqIEBkZXByZWNhdGVkXHJcbiAqIEltcG9ydCBzcGVjaWZpYyBjb21wb25lbnQgbW9kdWxlcyBpbnN0ZWFkIChNekJhZGdlTW9kdWxlLCBNekNhcmRNb2R1bGUsIGV0YylcclxuICogaHR0cHM6Ly9naXRodWIuY29tL3NoZXJ3ZWIvbmcyLW1hdGVyaWFsaXplI21hdGVyaWFsaXplbW9kdWxlLWRlcHJlY2F0ZWRcclxuICovXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogTVpfTU9EVUxFUyxcclxuICBleHBvcnRzOiBNWl9NT0RVTEVTLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWF0ZXJpYWxpemVNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IE1hdGVyaWFsaXplTW9kdWxlLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTWVkaWFCcmVha3BvaW50IH0gZnJvbSAnLi9tZWRpYUJyZWFrcG9pbnQnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE1hdGNoT3BlcmF0b3Ige1xyXG4gIG9wZXJhdG9yOiAnZ3QnIHwgJ2x0JztcclxuICBtYXRjaDogKGJyZWFrcG9pbnQ6IE1lZGlhQnJlYWtwb2ludCkgPT4gYm9vbGVhbjtcclxufVxyXG4iLCJleHBvcnQgYWJzdHJhY3QgY2xhc3MgTWVkaWEge1xyXG4gIGFsaWFzOiAncycgfCAnbScgfCAnbCcgfCAneGwnO1xyXG4gIHdpbmRvd0hlaWdodDogbnVtYmVyO1xyXG4gIHdpbmRvd1dpZHRoOiBudW1iZXI7XHJcbn1cclxuIiwiZXhwb3J0IGFic3RyYWN0IGNsYXNzIE1lZGlhQnJlYWtwb2ludCB7XHJcbiAgYWxpYXM6ICdzJyB8ICdtJyB8ICdsJyB8ICd4bCc7XHJcbiAgbWF4V2lkdGg6IG51bWJlcjtcclxuICBtaW5XaWR0aDogbnVtYmVyO1xyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBWaWV3Q2hpbGQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBNek1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi4vbW9kYWwuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBNekJhc2VNb2RhbCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG4gIEBWaWV3Q2hpbGQoTXpNb2RhbENvbXBvbmVudCkgbW9kYWxDb21wb25lbnQ6IE16TW9kYWxDb21wb25lbnQ7XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMubW9kYWxDb21wb25lbnQub3Blbk1vZGFsKCk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7WUFFQyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFFBQVEsRUFBRTs7Ozs7O0NBTVg7Z0JBQ0MsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2FBQ2I7Ozs7MkJBRUUsS0FBSzt3QkFDTCxLQUFLO29CQUNMLEtBQUs7c0JBQ0wsS0FBSzs7Ozs7OztBQ2pCUjs7O1lBSUMsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGdCQUFnQixDQUFDO2dCQUNoQyxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQzthQUM1Qjs7Ozs7Ozs7Ozs7Ozs7O0FDTEQ7Q0FFQztBQUVEOzs7OztJQUdFLFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ25DO0tBQ0Y7Ozs7O0lBRUQsbUJBQW1CLENBQUMsUUFBa0MsSUFBSSxDQUFDLFFBQVE7UUFDakUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSTtZQUM3QixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3ZCLHVCQUFNLGFBQWEsR0FBRyxtQkFBQyxLQUFLLENBQUMsSUFBSSxDQUFpQixHQUFFLGFBQWEsQ0FBQztnQkFDbEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUNwQztTQUNGLENBQUMsQ0FBQztLQUNKO0NBQ0Y7Ozs7OztBQ3ZCRDs7Ozs7O0lBY0UsWUFDVSxnQkFDQSwwQkFDQTtRQUZBLG1CQUFjLEdBQWQsY0FBYztR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