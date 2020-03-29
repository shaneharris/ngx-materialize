(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('tslib'), require('@angular/common'), require('@angular/forms'), require('rxjs'), require('rxjs/operators'), require('@angular/animations')) :
    typeof define === 'function' && define.amd ? define('ngx-materialize', ['exports', '@angular/core', 'tslib', '@angular/common', '@angular/forms', 'rxjs', 'rxjs/operators', '@angular/animations'], factory) :
    (factory((global['ngx-materialize'] = {}),global.ng.core,global.tslib,global.ng.common,global.ng.forms,null,global.Rx.Observable.prototype,global.ng.animations));
}(this, (function (exports,core,tslib_1,common,forms,rxjs,operators,animations) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzBadgeComponent = (function () {
        function MzBadgeComponent() {
        }
        MzBadgeComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'mz-badge',
                        template: "<span #badge\n  class=\"badge {{ badgeClass }}\"\n  [class.new]=\"new || !!badgeClass\"\n  [attr.data-badge-caption]=\"caption\">\n  {{ value }}\n</span>\n",
                        styles: [""],
                    },] },
        ];
        /** @nocollapse */
        MzBadgeComponent.propDecorators = {
            "badgeClass": [{ type: core.Input },],
            "caption": [{ type: core.Input },],
            "new": [{ type: core.Input },],
            "value": [{ type: core.Input },],
        };
        return MzBadgeComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzBadgeModule = (function () {
        function MzBadgeModule() {
        }
        MzBadgeModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [MzBadgeComponent],
                        exports: [MzBadgeComponent],
                    },] },
        ];
        return MzBadgeModule;
    }());

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
    var /**
     * @abstract
     */ Handlers = (function () {
        function Handlers() {
        }
        return Handlers;
    }());
    var HandlePropChanges = (function () {
        function HandlePropChanges() {
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        HandlePropChanges.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (this.handlers) {
                    this.executePropHandlers(changes);
                }
            };
        /**
         * @param {?=} props
         * @return {?}
         */
        HandlePropChanges.prototype.executePropHandlers = /**
         * @param {?=} props
         * @return {?}
         */
            function (props) {
                var _this = this;
                if (props === void 0) {
                    props = this.handlers;
                }
                Object.keys(props).forEach(function (prop) {
                    if (_this.handlers[prop]) {
                        var /** @type {?} */ previousValue = ((props[prop])).previousValue;
                        _this.handlers[prop](previousValue);
                    }
                });
            };
        return HandlePropChanges;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzInjectionService = (function () {
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
                if (options === void 0) {
                    options = {};
                }
                if (location === void 0) {
                    location = this.getContainerElement();
                }
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
                return /** @type {?} */ (((componentRef.hostView)).rootNodes[0]);
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
                    catch (e_1_1) {
                        e_1 = { error: e_1_1 };
                    }
                    finally {
                        try {
                            if (props_1_1 && !props_1_1.done && (_a = props_1.return))
                                _a.call(props_1);
                        }
                        finally {
                            if (e_1)
                                throw e_1.error;
                        }
                    }
                }
                return component;
                var e_1, _a;
            };
        MzInjectionService.decorators = [
            { type: core.Injectable },
        ];
        /** @nocollapse */
        MzInjectionService.ctorParameters = function () {
            return [
                { type: core.ApplicationRef, },
                { type: core.ComponentFactoryResolver, },
                { type: core.Injector, },
            ];
        };
        return MzInjectionService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzInjectionModule = (function () {
        function MzInjectionModule() {
        }
        MzInjectionModule.decorators = [
            { type: core.NgModule, args: [{
                        providers: [MzInjectionService],
                    },] },
        ];
        return MzInjectionModule;
    }());

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
    var MzRemoveComponentHost = (function () {
        function MzRemoveComponentHost(elementRef) {
            this.elementRef = elementRef;
            this.childrenElement = [];
        }
        /**
         * @return {?}
         */
        MzRemoveComponentHost.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ hostElement = this.elementRef.nativeElement;
                this.parentElement = hostElement.parentElement;
                // move child out of the host element
                while (hostElement.firstChild) {
                    this.childrenElement.push(this.parentElement.insertBefore(hostElement.firstChild, hostElement));
                }
            };
        /**
         * @return {?}
         */
        MzRemoveComponentHost.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                var _this = this;
                // remove moved out element
                this.childrenElement.forEach(function (childElement) { return _this.parentElement.removeChild(childElement); });
            };
        /** @nocollapse */
        MzRemoveComponentHost.ctorParameters = function () {
            return [
                { type: core.ElementRef, decorators: [{ type: core.Inject, args: [core.ElementRef,] },] },
            ];
        };
        return MzRemoveComponentHost;
    }());

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
    var MzButtonDirective = (function (_super) {
        tslib_1.__extends(MzButtonDirective, _super);
        function MzButtonDirective(elementRef, renderer) {
            var _this = _super.call(this) || this;
            _this.elementRef = elementRef;
            _this.renderer = renderer;
            return _this;
        }
        /**
         * @return {?}
         */
        MzButtonDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.initHandlers();
                this.initMaterialize();
                _super.prototype.executePropHandlers.call(this);
            };
        /**
         * @return {?}
         */
        MzButtonDirective.prototype.initHandlers = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.handlers = {
                    disabled: function () { return _this.handleDisabled(); },
                    flat: function () { return _this.handleFlat(); },
                    float: function () { return _this.handleFloat(); },
                    large: function () { return _this.handleLarge(); },
                    noWaves: function () { return _this.handleNoWaves(); },
                };
            };
        /**
         * @return {?}
         */
        MzButtonDirective.prototype.initMaterialize = /**
         * @return {?}
         */
            function () {
                this.renderer.setElementClass(this.elementRef.nativeElement, 'btn', true);
            };
        /**
         * @return {?}
         */
        MzButtonDirective.prototype.handleDisabled = /**
         * @return {?}
         */
            function () {
                this.renderer.setElementClass(this.elementRef.nativeElement, 'disabled', this.disabled);
            };
        /**
         * @return {?}
         */
        MzButtonDirective.prototype.handleFlat = /**
         * @return {?}
         */
            function () {
                this.renderer.setElementClass(this.elementRef.nativeElement, 'btn', !this.flat);
                this.renderer.setElementClass(this.elementRef.nativeElement, 'btn-flat', this.flat);
            };
        /**
         * @return {?}
         */
        MzButtonDirective.prototype.handleFloat = /**
         * @return {?}
         */
            function () {
                this.renderer.setElementClass(this.elementRef.nativeElement, 'btn-floating', this.float);
            };
        /**
         * @return {?}
         */
        MzButtonDirective.prototype.handleLarge = /**
         * @return {?}
         */
            function () {
                this.renderer.setElementClass(this.elementRef.nativeElement, 'btn-large', this.large);
            };
        /**
         * @return {?}
         */
        MzButtonDirective.prototype.handleNoWaves = /**
         * @return {?}
         */
            function () {
                this.renderer.setElementClass(this.elementRef.nativeElement, 'waves-effect', !this.noWaves);
                if (!this.flat) {
                    this.renderer.setElementClass(this.elementRef.nativeElement, 'waves-light', !this.noWaves);
                }
            };
        MzButtonDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: "\n    a[mz-button],\n    a[mzButton],\n    button[mz-button],\n    button[mzButton]",
                    },] },
        ];
        /** @nocollapse */
        MzButtonDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef, },
                { type: core.Renderer, },
            ];
        };
        MzButtonDirective.propDecorators = {
            "disabled": [{ type: core.Input },],
            "flat": [{ type: core.Input },],
            "float": [{ type: core.Input },],
            "large": [{ type: core.Input },],
            "noWaves": [{ type: core.Input },],
        };
        return MzButtonDirective;
    }(HandlePropChanges));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzButtonModule = (function () {
        function MzButtonModule() {
        }
        MzButtonModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [MzButtonDirective],
                        exports: [MzButtonDirective],
                    },] },
        ];
        return MzButtonModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzHalfwayFabDirective = (function () {
        function MzHalfwayFabDirective() {
        }
        MzHalfwayFabDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: "\n    a[mz-halfway-fab],\n    a[mzHalfwayFab],\n    button[mz-halfway-fab],\n    button[mzHalfwayFab]",
                    },] },
        ];
        /** @nocollapse */
        MzHalfwayFabDirective.propDecorators = {
            "true": [{ type: core.HostBinding, args: ['class.halfway-fab',] },],
        };
        return MzHalfwayFabDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzHalfwayFabModule = (function () {
        function MzHalfwayFabModule() {
        }
        MzHalfwayFabModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [
                            MzHalfwayFabDirective,
                        ],
                        exports: [
                            MzHalfwayFabDirective,
                        ],
                    },] },
        ];
        return MzHalfwayFabModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzCardComponent = (function () {
        function MzCardComponent(changeDetectorRef) {
            this.changeDetectorRef = changeDetectorRef;
            this.hasCardAction = true;
            this.hasCardImage = true;
            this.hasCardImageTitle = true;
            this.hasCardTitle = true;
        }
        /**
         * @return {?}
         */
        MzCardComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                this.hasCardTitle = this.hasTitleTagAndNotEmpty();
                this.hasCardAction = this.hasActionTagAndNotEmpty();
                this.hasCardImage = this.hasImageTagAndNotEmpty();
                this.hasCardImageTitle = this.hasImageTitleTagAndNotEmpty();
                this.changeDetectorRef.detectChanges();
            };
        /**
         * @return {?}
         */
        MzCardComponent.prototype.hasActionTagAndNotEmpty = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ cardActionElement = this.cardAction.nativeElement.querySelector('mz-card-action');
                return this.isElementDisplayed(cardActionElement);
            };
        /**
         * @return {?}
         */
        MzCardComponent.prototype.hasImageTagAndNotEmpty = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ cardImagelement = this.cardImage.nativeElement.querySelector('mz-card-image');
                return this.isElementDisplayed(cardImagelement);
            };
        /**
         * @return {?}
         */
        MzCardComponent.prototype.hasImageTitleTagAndNotEmpty = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ cardImageTitleElement = this.cardImage.nativeElement.querySelector('mz-card-image-title');
                return this.isElementDisplayed(cardImageTitleElement);
            };
        /**
         * @return {?}
         */
        MzCardComponent.prototype.hasTitleTagAndNotEmpty = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ cardTitleElement = this.cardTitle ? this.cardTitle.nativeElement.querySelector('mz-card-title') : null;
                return this.isElementDisplayed(cardTitleElement);
            };
        /**
         * @param {?} element
         * @return {?}
         */
        MzCardComponent.prototype.isElementDisplayed = /**
         * @param {?} element
         * @return {?}
         */
            function (element) {
                return element && element.innerHTML.trim() !== '';
            };
        MzCardComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'mz-card',
                        template: "<div #cardImage class=\"card-image\" *ngIf=\"hasCardImage\">\n  <ng-content select=\"mz-card-image\"></ng-content>\n  <div class=\"card-title\" *ngIf=\"hasCardImageTitle\">\n    <ng-content select=\"mz-card-image-title\"></ng-content>\n  </div>\n</div>\n\n<div [class.card-stacked]=\"horizontal\">\n  <div class=\"card-content\">\n    <div #cardTitle class=\"card-title\" *ngIf=\"hasCardTitle\">\n      <ng-content select=\"mz-card-title\"></ng-content>\n    </div>\n\n    <ng-content select=\"mz-card-content\"></ng-content>\n  </div>\n\n  <div #cardAction class=\"card-action\" *ngIf=\"hasCardAction\">\n    <ng-content select=\"mz-card-action\"></ng-content>\n  </div>\n</div>",
                        styles: [":host{display:block}"],
                    },] },
        ];
        /** @nocollapse */
        MzCardComponent.ctorParameters = function () {
            return [
                { type: core.ChangeDetectorRef, },
            ];
        };
        MzCardComponent.propDecorators = {
            "true": [{ type: core.HostBinding, args: ['class.card',] },],
            "horizontal": [{ type: core.HostBinding, args: ['class.horizontal',] }, { type: core.Input },],
            "hoverable": [{ type: core.HostBinding, args: ['class.hoverable',] }, { type: core.Input },],
            "cardAction": [{ type: core.ViewChild, args: ['cardAction',] },],
            "cardImage": [{ type: core.ViewChild, args: ['cardImage',] },],
            "cardTitle": [{ type: core.ViewChild, args: ['cardTitle',] },],
        };
        return MzCardComponent;
    }());
    var MzCardImageDirective = (function () {
        function MzCardImageDirective() {
        }
        MzCardImageDirective.decorators = [
            { type: core.Directive, args: [{ selector: 'mz-card-image' },] },
        ];
        return MzCardImageDirective;
    }());
    var MzCardImageTitleDirective = (function () {
        function MzCardImageTitleDirective() {
        }
        MzCardImageTitleDirective.decorators = [
            { type: core.Directive, args: [{ selector: 'mz-card-image-title' },] },
        ];
        return MzCardImageTitleDirective;
    }());
    var MzCardTitleDirective = (function () {
        function MzCardTitleDirective() {
        }
        MzCardTitleDirective.decorators = [
            { type: core.Directive, args: [{ selector: 'mz-card-title' },] },
        ];
        return MzCardTitleDirective;
    }());
    var MzCardContentDirective = (function () {
        function MzCardContentDirective() {
        }
        MzCardContentDirective.decorators = [
            { type: core.Directive, args: [{ selector: 'mz-card-content' },] },
        ];
        return MzCardContentDirective;
    }());
    var MzCardActionDirective = (function () {
        function MzCardActionDirective() {
        }
        MzCardActionDirective.decorators = [
            { type: core.Directive, args: [{ selector: 'mz-card-action' },] },
        ];
        return MzCardActionDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzCardModule = (function () {
        function MzCardModule() {
        }
        MzCardModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
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
        return MzCardModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzCheckboxContainerComponent = (function () {
        function MzCheckboxContainerComponent() {
        }
        MzCheckboxContainerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'mz-checkbox-container',
                        template: "<p class=\"checkbox-field\">\n  <ng-content></ng-content>\n</p>",
                        styles: [""],
                    },] },
        ];
        return MzCheckboxContainerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzCheckboxDirective = (function (_super) {
        tslib_1.__extends(MzCheckboxDirective, _super);
        function MzCheckboxDirective(elementRef, renderer) {
            var _this = _super.call(this) || this;
            _this.elementRef = elementRef;
            _this.renderer = renderer;
            return _this;
        }
        /**
         * @return {?}
         */
        MzCheckboxDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.initHandlers();
                this.initElements();
                this.handleProperties();
            };
        /**
         * @return {?}
         */
        MzCheckboxDirective.prototype.initHandlers = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.handlers = {
                    filledIn: function () { return _this.handleFilledIn(); },
                    label: function () { return _this.handleLabel(); },
                };
            };
        /**
         * @return {?}
         */
        MzCheckboxDirective.prototype.initElements = /**
         * @return {?}
         */
            function () {
                this.checkboxElement = $(this.elementRef.nativeElement);
                this.checkboxContainerElement = $(this.elementRef.nativeElement).parent('.checkbox-field');
                this.labelElement = this.createLabelElement();
            };
        /**
         * @return {?}
         */
        MzCheckboxDirective.prototype.createLabelElement = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ labelElement = document.createElement('label');
                labelElement.setAttribute('for', this.id);
                this.renderer.invokeElementMethod(this.checkboxElement, 'after', [labelElement]);
                return $(labelElement);
            };
        /**
         * @return {?}
         */
        MzCheckboxDirective.prototype.handleProperties = /**
         * @return {?}
         */
            function () {
                if (this.checkboxContainerElement.length === 0) {
                    console.error('Input with mz-checkbox directive must be placed inside a [mz-checkbox-container] tag', this.checkboxElement);
                    return;
                }
                _super.prototype.executePropHandlers.call(this);
            };
        /**
         * @return {?}
         */
        MzCheckboxDirective.prototype.handleLabel = /**
         * @return {?}
         */
            function () {
                this.renderer.invokeElementMethod(this.labelElement, 'text', [this.label]);
            };
        /**
         * @return {?}
         */
        MzCheckboxDirective.prototype.handleFilledIn = /**
         * @return {?}
         */
            function () {
                this.renderer.setElementClass(this.checkboxElement[0], 'filled-in', this.filledIn);
            };
        MzCheckboxDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: 'input[mzCheckbox], input[mz-checkbox]',
                    },] },
        ];
        /** @nocollapse */
        MzCheckboxDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef, },
                { type: core.Renderer, },
            ];
        };
        MzCheckboxDirective.propDecorators = {
            "id": [{ type: core.HostBinding }, { type: core.Input },],
            "filledIn": [{ type: core.Input },],
            "label": [{ type: core.Input },],
        };
        return MzCheckboxDirective;
    }(HandlePropChanges));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzCheckboxModule = (function () {
        function MzCheckboxModule() {
        }
        MzCheckboxModule.decorators = [
            { type: core.NgModule, args: [{
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
        return MzCheckboxModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzChipInputComponent = (function () {
        function MzChipInputComponent(elementRef, zone) {
            this.elementRef = elementRef;
            this.zone = zone;
            this.add = new core.EventEmitter();
            this.delete = new core.EventEmitter();
            this.select = new core.EventEmitter();
            this.onChangeCallback = function (data) { };
        }
        Object.defineProperty(MzChipInputComponent.prototype, "value", {
            get: /**
             * @return {?}
             */ function () {
                return /** @type {?} */ (this.chipInputElement.material_chip('data'));
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        MzChipInputComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.initElements();
                this.initMaterializeChip();
            };
        /**
         * @return {?}
         */
        MzChipInputComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.chipInputElement.off('chip.add');
                this.chipInputElement.off('chip.delete');
                this.chipInputElement.off('chip.select');
            };
        /**
         * @return {?}
         */
        MzChipInputComponent.prototype.initElements = /**
         * @return {?}
         */
            function () {
                this.chipInputElement = $(this.elementRef.nativeElement);
            };
        /**
         * @param {?=} value
         * @return {?}
         */
        MzChipInputComponent.prototype.initMaterializeChip = /**
         * @param {?=} value
         * @return {?}
         */
            function (value) {
                var _this = this;
                // fix issue autocomplete is not a function
                // https://github.com/Dogfalo/materialize/issues/4401
                this.zone.runOutsideAngular(function () {
                    setTimeout(function () {
                        _this.chipInputElement.material_chip({
                            autocompleteOptions: _this.autocompleteOptions,
                            data: value || _this.value,
                            placeholder: _this.placeholder,
                            secondaryPlaceholder: _this.secondaryPlaceholder,
                        });
                    });
                });
                this.chipInputElement.on('chip.add', function (event, chip) {
                    _this.onChangeCallback(_this.value);
                    _this.add.emit(chip);
                });
                this.chipInputElement.on('chip.delete', function (event, chip) {
                    _this.onChangeCallback(_this.value);
                    _this.delete.emit(chip);
                });
                this.chipInputElement.on('chip.select', function (event, chip) {
                    _this.select.emit(chip);
                });
            };
        //#region ControlValueAccessor
        /**
         * @param {?} fn
         * @return {?}
         */
        MzChipInputComponent.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this.onChangeCallback = fn;
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        MzChipInputComponent.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) { };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        MzChipInputComponent.prototype.setDisabledState = /**
         * @param {?} isDisabled
         * @return {?}
         */
            function (isDisabled) { };
        /**
         * @param {?} value
         * @return {?}
         */
        MzChipInputComponent.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (value && value !== this.value) {
                    this.initMaterializeChip(value);
                }
            };
        MzChipInputComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'mz-chip-input',
                        template: "",
                        styles: [":host{display:block}"],
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef(function () { return MzChipInputComponent; }),
                                multi: true,
                            },
                        ],
                    },] },
        ];
        /** @nocollapse */
        MzChipInputComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef, },
                { type: core.NgZone, },
            ];
        };
        MzChipInputComponent.propDecorators = {
            "autocompleteOptions": [{ type: core.Input },],
            "placeholder": [{ type: core.Input },],
            "secondaryPlaceholder": [{ type: core.Input },],
            "add": [{ type: core.Output },],
            "delete": [{ type: core.Output },],
            "select": [{ type: core.Output },],
        };
        return MzChipInputComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzChipComponent = (function () {
        function MzChipComponent(elementRef) {
            this.elementRef = elementRef;
            this.chipClass = true;
            this.close = false;
            this.delete = new core.EventEmitter();
        }
        Object.defineProperty(MzChipComponent.prototype, "chipElement", {
            get: /**
             * @return {?}
             */ function () {
                return /** @type {?} */ (this.elementRef.nativeElement);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        MzChipComponent.prototype.onDelete = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ value = '';
                for (var /** @type {?} */ i = 0; i < this.chipElement.childNodes.length; i++) {
                    if (this.chipElement.childNodes.item(i).nodeType === Node.TEXT_NODE) {
                        value += this.chipElement.childNodes.item(i).nodeValue;
                    }
                }
                this.delete.emit(value.trim());
            };
        MzChipComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'mz-chip',
                        template: "<ng-content></ng-content>\n<i class=\"close material-icons\" (click)=\"onDelete()\" *ngIf=\"close\">close</i>",
                        styles: [""],
                    },] },
        ];
        /** @nocollapse */
        MzChipComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef, },
            ];
        };
        MzChipComponent.propDecorators = {
            "chipClass": [{ type: core.HostBinding, args: ['class.chip',] },],
            "close": [{ type: core.Input },],
            "delete": [{ type: core.Output },],
        };
        return MzChipComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzChipModule = (function () {
        function MzChipModule() {
        }
        MzChipModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
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
        return MzChipModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzCollapsibleItemComponent = (function (_super) {
        tslib_1.__extends(MzCollapsibleItemComponent, _super);
        function MzCollapsibleItemComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MzCollapsibleItemComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'mz-collapsible-item',
                        template: "<li>\n  <div class=\"collapsible-header\"\n    [class.active]=\"active\"\n  >\n    <ng-content select=\"mz-collapsible-item-header\"></ng-content>\n  </div>\n  <div class=\"collapsible-body\">\n    <ng-content select=\"mz-collapsible-item-body\"></ng-content>\n  </div>\n</li>",
                        styles: [""],
                    },] },
        ];
        /** @nocollapse */
        MzCollapsibleItemComponent.propDecorators = {
            "active": [{ type: core.Input },],
        };
        return MzCollapsibleItemComponent;
    }(MzRemoveComponentHost));
    var MzCollapsibleItemBodyDirective = (function () {
        function MzCollapsibleItemBodyDirective() {
        }
        MzCollapsibleItemBodyDirective.decorators = [
            { type: core.Directive, args: [{ selector: 'mz-collapsible-item-body' },] },
        ];
        return MzCollapsibleItemBodyDirective;
    }());
    var MzCollapsibleItemHeaderDirective = (function () {
        function MzCollapsibleItemHeaderDirective() {
        }
        MzCollapsibleItemHeaderDirective.decorators = [
            { type: core.Directive, args: [{ selector: 'mz-collapsible-item-header' },] },
        ];
        return MzCollapsibleItemHeaderDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzCollapsibleComponent = (function () {
        function MzCollapsibleComponent(renderer) {
            this.renderer = renderer;
        }
        /**
         * @return {?}
         */
        MzCollapsibleComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                this.handleDataCollapsible();
                this.initCollapsible();
            };
        /**
         * @return {?}
         */
        MzCollapsibleComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                $(this.collapsible.nativeElement).collapsible('destroy');
            };
        /**
         * @param {?} collapsibleItemIndex
         * @return {?}
         */
        MzCollapsibleComponent.prototype.close = /**
         * @param {?} collapsibleItemIndex
         * @return {?}
         */
            function (collapsibleItemIndex) {
                $(this.collapsible.nativeElement).collapsible('close', collapsibleItemIndex);
            };
        /**
         * @return {?}
         */
        MzCollapsibleComponent.prototype.initCollapsible = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ options = {
                    accordion: false,
                    onClose: this.onClose,
                    onOpen: this.onOpen,
                };
                $(this.collapsible.nativeElement).collapsible(options);
            };
        /**
         * @return {?}
         */
        MzCollapsibleComponent.prototype.handleDataCollapsible = /**
         * @return {?}
         */
            function () {
                if (this.mode) {
                    this.renderer.setElementAttribute(this.collapsible.nativeElement, 'data-collapsible', this.mode);
                }
            };
        /**
         * @param {?} collapsibleItemIndex
         * @return {?}
         */
        MzCollapsibleComponent.prototype.open = /**
         * @param {?} collapsibleItemIndex
         * @return {?}
         */
            function (collapsibleItemIndex) {
                $(this.collapsible.nativeElement).collapsible('open', collapsibleItemIndex);
            };
        MzCollapsibleComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'mz-collapsible',
                        template: "<ul #collapsible\n  class=\"collapsible\"\n  [class.popout]=\"popout\"\n  [hidden]=\"items.length === 0\"\n>\n  <ng-content></ng-content>\n</ul>",
                        styles: ["/deep/ .collapsible-header{clear:both}/deep/ .collapsible-body{clear:both}"],
                    },] },
        ];
        /** @nocollapse */
        MzCollapsibleComponent.ctorParameters = function () {
            return [
                { type: core.Renderer, },
            ];
        };
        MzCollapsibleComponent.propDecorators = {
            "mode": [{ type: core.Input },],
            "onClose": [{ type: core.Input },],
            "onOpen": [{ type: core.Input },],
            "popout": [{ type: core.Input },],
            "collapsible": [{ type: core.ViewChild, args: ['collapsible',] },],
            "items": [{ type: core.ContentChildren, args: [MzCollapsibleItemComponent,] },],
        };
        return MzCollapsibleComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzCollapsibleModule = (function () {
        function MzCollapsibleModule() {
        }
        MzCollapsibleModule.decorators = [
            { type: core.NgModule, args: [{
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
        return MzCollapsibleModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzAvatarDirective = (function () {
        function MzAvatarDirective() {
        }
        MzAvatarDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[mzAvatar], [mz-avatar]',
                    },] },
        ];
        /** @nocollapse */
        MzAvatarDirective.propDecorators = {
            "true": [{ type: core.HostBinding, args: ['class.circle',] },],
        };
        return MzAvatarDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzCollectionHeaderComponent = (function () {
        function MzCollectionHeaderComponent() {
        }
        MzCollectionHeaderComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'mz-collection-header',
                        template: "<div class=\"collection-header\">\n  <ng-content></ng-content>\n</div>",
                        styles: [""],
                    },] },
        ];
        return MzCollectionHeaderComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzCollectionItemComponent = (function () {
        function MzCollectionItemComponent() {
        }
        MzCollectionItemComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'mz-collection-item',
                        template: "<ng-content></ng-content>",
                        styles: [":host{display:block}"],
                    },] },
        ];
        /** @nocollapse */
        MzCollectionItemComponent.propDecorators = {
            "true": [{ type: core.HostBinding, args: ['class.collection-item',] },],
            "avatar": [{ type: core.HostBinding, args: ['class.avatar',] }, { type: core.Input },],
            "dismissable": [{ type: core.HostBinding, args: ['class.dismissable',] }, { type: core.Input },],
        };
        return MzCollectionItemComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzCollectionLinkDirective = (function () {
        function MzCollectionLinkDirective() {
        }
        MzCollectionLinkDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[mzCollectionLink], [mz-collection-link]',
                    },] },
        ];
        /** @nocollapse */
        MzCollectionLinkDirective.propDecorators = {
            "active": [{ type: core.HostBinding, args: ['class.active',] }, { type: core.Input },],
            "true": [{ type: core.HostBinding, args: ['class.collection-item',] },],
        };
        return MzCollectionLinkDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzCollectionComponent = (function () {
        function MzCollectionComponent(elementRef, renderer) {
            this.elementRef = elementRef;
            this.renderer = renderer;
        }
        /**
         * @return {?}
         */
        MzCollectionComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.initElements();
                this.initCollectionHeader();
            };
        /**
         * @return {?}
         */
        MzCollectionComponent.prototype.initElements = /**
         * @return {?}
         */
            function () {
                this.collectionElement = $(this.elementRef.nativeElement).find('.collection');
                this.collectionHeaderElement = $(this.elementRef.nativeElement).find('.collection-header');
            };
        /**
         * @return {?}
         */
        MzCollectionComponent.prototype.initCollectionHeader = /**
         * @return {?}
         */
            function () {
                if (this.collectionHeaderElement.length > 0) {
                    this.renderer.addClass(this.collectionElement[0], 'with-header');
                }
            };
        MzCollectionComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'mz-collection',
                        template: "<div class=\"collection\">\n  <ng-content></ng-content>\n</div>",
                        styles: [""],
                    },] },
        ];
        /** @nocollapse */
        MzCollectionComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef, },
                { type: core.Renderer2, },
            ];
        };
        return MzCollectionComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzSecondaryContentDirective = (function () {
        function MzSecondaryContentDirective() {
        }
        MzSecondaryContentDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[mzSecondaryContent], [mz-secondary-content]',
                    },] },
        ];
        /** @nocollapse */
        MzSecondaryContentDirective.propDecorators = {
            "true": [{ type: core.HostBinding, args: ['class.secondary-content',] },],
        };
        return MzSecondaryContentDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzCollectionModule = (function () {
        function MzCollectionModule() {
        }
        MzCollectionModule.decorators = [
            { type: core.NgModule, args: [{
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
        return MzCollectionModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzDatepickerContainerComponent = (function () {
        function MzDatepickerContainerComponent() {
        }
        MzDatepickerContainerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'mz-datepicker-container',
                        template: "<div\n  class=\"input-field\"\n  [class.inline]=\"inline\"\n>\n  <ng-content></ng-content>\n</div>",
                        styles: [""],
                    },] },
        ];
        /** @nocollapse */
        MzDatepickerContainerComponent.propDecorators = {
            "inline": [{ type: core.Input },],
        };
        return MzDatepickerContainerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzDatepickerDirective = (function (_super) {
        tslib_1.__extends(MzDatepickerDirective, _super);
        function MzDatepickerDirective(ngControl, changeDetectorRef, elementRef, renderer) {
            var _this = _super.call(this) || this;
            _this.ngControl = ngControl;
            _this.changeDetectorRef = changeDetectorRef;
            _this.elementRef = elementRef;
            _this.renderer = renderer;
            // materialize uses pickadate.js to create the datepicker
            // complete list of options is available at the following address
            // http://amsul.ca/pickadate.js/date/#options
            _this.options = {};
            _this.isInitRound = true;
            _this.stopChangePropagation = false;
            return _this;
        }
        Object.defineProperty(MzDatepickerDirective.prototype, "format", {
            get: /**
             * @return {?}
             */ function () {
                return this.options.format || this.options.formatSubmit || null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MzDatepickerDirective.prototype, "formatSubmit", {
            get: /**
             * @return {?}
             */ function () {
                return this.options.formatSubmit || this.options.format || null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MzDatepickerDirective.prototype, "ngControlValue", {
            get: /**
             * @return {?}
             */ function () {
                return this.ngControl.value === '' ? null : this.ngControl.value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MzDatepickerDirective.prototype, "picker", {
            get: /**
             * @return {?}
             */ function () {
                return this.inputElement.pickadate('picker');
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        MzDatepickerDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.initHandlers();
                this.initElements();
                this.initDatepicker();
                this.initInputSubscription();
                this.handleProperties();
                this.isInitRound = false;
            };
        /**
         * @return {?}
         */
        MzDatepickerDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this.inputValueSubscription) {
                    this.inputValueSubscription.unsubscribe();
                }
            };
        /**
         * @return {?}
         */
        MzDatepickerDirective.prototype.initHandlers = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.handlers = {
                    label: function () { return _this.handleLabel(); },
                    options: function () { return _this.handleOptions(); },
                    placeholder: function () { return _this.handlePlaceholder(); },
                };
            };
        /**
         * @return {?}
         */
        MzDatepickerDirective.prototype.initElements = /**
         * @return {?}
         */
            function () {
                this.inputContainerElement = $(this.elementRef.nativeElement).parent('.input-field');
                this.inputElement = $(this.elementRef.nativeElement);
                this.labelElement = this.createLabelElement();
            };
        /**
         * @return {?}
         */
        MzDatepickerDirective.prototype.initDatepicker = /**
         * @return {?}
         */
            function () {
                var _this = this;
                // set default format/formatSubmit options
                if (this.format) {
                    this.options.format = this.format;
                }
                if (this.formatSubmit) {
                    this.options.formatSubmit = this.formatSubmit;
                }
                // extends onClose function to fix datepicker focus issue
                // https://github.com/Dogfalo/materialize/issues/2067#issuecomment-142107599
                var /** @type {?} */ onCloseFn = this.options && this.options.onClose || (function () { });
                this.options = Object.assign({}, this.options, {
                    onClose: function (event) {
                        onCloseFn(event);
                        _this.renderer.invokeElementMethod(document.activeElement, 'blur');
                    },
                });
                this.renderer.invokeElementMethod(this.inputElement, 'pickadate', [this.options]);
                if (this.ngControl) {
                    // set datepicker initial value according to ngControl
                    this.picker.set('select', this.ngControlValue, { format: this.formatSubmit });
                    // set ngControl value according to selected date in datepicker
                    this.picker.on('set', function () {
                        // handle stop propagation
                        if (_this.stopChangePropagation) {
                            _this.stopChangePropagation = false;
                            return;
                        }
                        else {
                            _this.stopChangePropagation = true;
                        }
                        // apply options.formatSubmit to ngControl value
                        var /** @type {?} */ submitValue = _this.formatSubmit
                            ? _this.picker.get('select', _this.formatSubmit)
                            : _this.picker.get('value');
                        _this.ngControl.control.setValue(submitValue);
                        // apply options.format to input text
                        var /** @type {?} */ formatValue = _this.format
                            ? _this.picker.get('select', _this.format)
                            : _this.picker.get('value');
                        _this.inputElement.val(formatValue);
                        // set label active status
                        // set label active status
                        _this.setLabelActive();
                        // mark for change detection
                        // fix form validation with ChangeDetectionStrategy.OnPush
                        // mark for change detection
                        // fix form validation with ChangeDetectionStrategy.OnPush
                        _this.changeDetectorRef.markForCheck();
                    });
                }
            };
        /**
         * @return {?}
         */
        MzDatepickerDirective.prototype.initInputSubscription = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.ngControl) {
                    this.inputValueSubscription = this.ngControl.valueChanges.subscribe(function () {
                        // handle stop propagation
                        if (_this.stopChangePropagation) {
                            _this.stopChangePropagation = false;
                            return;
                        }
                        else {
                            _this.stopChangePropagation = true;
                        }
                        // set selected date in datepicker according to ngControl value
                        // set selected date in datepicker according to ngControl value
                        _this.picker.set('select', _this.ngControlValue, { format: _this.formatSubmit });
                        // set label active status
                        // set label active status
                        _this.setLabelActive();
                    });
                }
            };
        /**
         * @return {?}
         */
        MzDatepickerDirective.prototype.createLabelElement = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ labelElement = document.createElement('label');
                labelElement.setAttribute('for', this.id);
                this.renderer.invokeElementMethod(this.inputElement, 'after', [labelElement]);
                return $(labelElement);
            };
        /**
         * @return {?}
         */
        MzDatepickerDirective.prototype.handleProperties = /**
         * @return {?}
         */
            function () {
                if (this.inputContainerElement.length === 0) {
                    console.error('Input with mz-datepicker directive must be placed inside an [mz-datepicker-container] tag', this.inputElement);
                    return;
                }
                _super.prototype.executePropHandlers.call(this);
            };
        /**
         * @return {?}
         */
        MzDatepickerDirective.prototype.handleLabel = /**
         * @return {?}
         */
            function () {
                this.renderer.invokeElementMethod(this.labelElement, 'text', [this.label]);
            };
        /**
         * @return {?}
         */
        MzDatepickerDirective.prototype.handleOptions = /**
         * @return {?}
         */
            function () {
                if (!this.isInitRound) {
                    this.picker.set(this.options);
                }
            };
        /**
         * @return {?}
         */
        MzDatepickerDirective.prototype.handlePlaceholder = /**
         * @return {?}
         */
            function () {
                var _this = this;
                var /** @type {?} */ placeholder = !!this.placeholder ? this.placeholder : null;
                this.renderer.setElementAttribute(this.inputElement[0], 'placeholder', placeholder);
                // fix issue in IE where having a placeholder on input make control dirty and trigger validation
                // on page load... note that it still trigger validation on focus and would need a better fix
                // issue : https://github.com/angular/angular/issues/15299
                // workaround : https://stackoverflow.com/a/44967245/5583283
                if (this.ngControl) {
                    setTimeout(function () { return _this.ngControl.control.markAsPristine(); });
                }
                this.setLabelActive();
            };
        /**
         * @return {?}
         */
        MzDatepickerDirective.prototype.setLabelActive = /**
         * @return {?}
         */
            function () {
                var _this = this;
                // need setTimeout otherwise it wont make label float in some circonstances (forcing validation for example)
                setTimeout(function () {
                    var /** @type {?} */ inputValue = ((_this.inputElement[0])).value;
                    var /** @type {?} */ isActive = !!_this.placeholder || !!inputValue;
                    _this.renderer.setElementClass(_this.labelElement[0], 'active', isActive);
                });
            };
        MzDatepickerDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: 'input[mzDatepicker], input[mz-datepicker]',
                    },] },
        ];
        /** @nocollapse */
        MzDatepickerDirective.ctorParameters = function () {
            return [
                { type: forms.NgControl, decorators: [{ type: core.Optional },] },
                { type: core.ChangeDetectorRef, },
                { type: core.ElementRef, },
                { type: core.Renderer, },
            ];
        };
        MzDatepickerDirective.propDecorators = {
            "true": [{ type: core.HostBinding, args: ['class.datepicker',] },],
            "id": [{ type: core.Input },],
            "placeholder": [{ type: core.Input },],
            "label": [{ type: core.Input },],
            "options": [{ type: core.Input },],
        };
        return MzDatepickerDirective;
    }(HandlePropChanges));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzDatepickerModule = (function () {
        function MzDatepickerModule() {
        }
        MzDatepickerModule.decorators = [
            { type: core.NgModule, args: [{
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
        return MzDatepickerModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzDropdownDividerComponent = (function () {
        function MzDropdownDividerComponent() {
        }
        MzDropdownDividerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'mz-dropdown-divider',
                        template: "<li class=\"divider\"></li>",
                        styles: [""],
                    },] },
        ];
        return MzDropdownDividerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzDropdownItemComponent = (function () {
        function MzDropdownItemComponent() {
        }
        MzDropdownItemComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'mz-dropdown-item',
                        template: "<li>\n  <ng-content></ng-content>\n</li>",
                        styles: [""],
                    },] },
        ];
        return MzDropdownItemComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzDropdownComponent = (function (_super) {
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
            { type: core.Component, args: [{
                        selector: 'mz-dropdown',
                        template: "<ul\n  class=\"dropdown-content\"\n  [attr.id]=\"id\"\n>\n  <ng-content></ng-content>\n</ul>",
                        styles: [""],
                    },] },
        ];
        /** @nocollapse */
        MzDropdownComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef, },
                { type: core.Renderer, },
            ];
        };
        MzDropdownComponent.propDecorators = {
            "align": [{ type: core.Input },],
            "belowOrigin": [{ type: core.Input },],
            "constrainWidth": [{ type: core.Input },],
            "dropdownButtonId": [{ type: core.Input },],
            "gutter": [{ type: core.Input },],
            "hover": [{ type: core.Input },],
            "id": [{ type: core.Input },],
            "inDuration": [{ type: core.Input },],
            "outDuration": [{ type: core.Input },],
            "stopPropagation": [{ type: core.Input },],
        };
        return MzDropdownComponent;
    }(HandlePropChanges));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzDropdownModule = (function () {
        function MzDropdownModule() {
        }
        MzDropdownModule.decorators = [
            { type: core.NgModule, args: [{
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
        return MzDropdownModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzFeatureDiscoveryComponent = (function () {
        function MzFeatureDiscoveryComponent(elementRef) {
            this.elementRef = elementRef;
            this.targetClass = true;
        }
        /**
         * @return {?}
         */
        MzFeatureDiscoveryComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                this.target = $(this.elementRef.nativeElement);
            };
        /**
         * @return {?}
         */
        MzFeatureDiscoveryComponent.prototype.close = /**
         * @return {?}
         */
            function () {
                this.target.tapTarget('close');
            };
        /**
         * @return {?}
         */
        MzFeatureDiscoveryComponent.prototype.open = /**
         * @return {?}
         */
            function () {
                this.target.tapTarget('open');
            };
        MzFeatureDiscoveryComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'mz-feature-discovery',
                        template: "<div class=\"tap-target-content\">\n  <ng-content></ng-content>\n</div>\n",
                        styles: [":host{display:block}"],
                    },] },
        ];
        /** @nocollapse */
        MzFeatureDiscoveryComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef, },
            ];
        };
        MzFeatureDiscoveryComponent.propDecorators = {
            "targetClass": [{ type: core.HostBinding, args: ['class.tap-target',] },],
            "targetId": [{ type: core.HostBinding, args: ['attr.data-activates',] }, { type: core.Input },],
        };
        return MzFeatureDiscoveryComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzFeatureDiscoveryModule = (function () {
        function MzFeatureDiscoveryModule() {
        }
        MzFeatureDiscoveryModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                        ],
                        declarations: [
                            MzFeatureDiscoveryComponent,
                        ],
                        exports: [
                            MzFeatureDiscoveryComponent,
                        ],
                    },] },
        ];
        return MzFeatureDiscoveryModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzIconDirective = (function (_super) {
        tslib_1.__extends(MzIconDirective, _super);
        function MzIconDirective(elementRef, renderer) {
            var _this = _super.call(this) || this;
            _this.elementRef = elementRef;
            _this.renderer = renderer;
            return _this;
        }
        /**
         * @return {?}
         */
        MzIconDirective.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                this.initHandlers();
                this.initMaterialize();
                _super.prototype.executePropHandlers.call(this);
            };
        /**
         * @return {?}
         */
        MzIconDirective.prototype.initHandlers = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.handlers = {
                    align: function (previousValue) { return _this.handleAlign(previousValue); },
                    icon: function () { return _this.handleIcon(); },
                    size: function (previousValue) { return _this.handleSize(previousValue); },
                };
            };
        /**
         * @return {?}
         */
        MzIconDirective.prototype.initMaterialize = /**
         * @return {?}
         */
            function () {
                this.renderer.setElementClass(this.elementRef.nativeElement, 'material-icons', true);
            };
        /**
         * @param {?=} previousValue
         * @return {?}
         */
        MzIconDirective.prototype.handleAlign = /**
         * @param {?=} previousValue
         * @return {?}
         */
            function (previousValue) {
                if (previousValue) {
                    this.renderer.setElementClass(this.elementRef.nativeElement, previousValue, false);
                }
                if (this.align) {
                    this.renderer.setElementClass(this.elementRef.nativeElement, this.align, true);
                }
            };
        /**
         * @return {?}
         */
        MzIconDirective.prototype.handleIcon = /**
         * @return {?}
         */
            function () {
                this.renderer.setElementProperty(this.elementRef.nativeElement, 'innerHTML', this.icon);
            };
        /**
         * @param {?=} previousValue
         * @return {?}
         */
        MzIconDirective.prototype.handleSize = /**
         * @param {?=} previousValue
         * @return {?}
         */
            function (previousValue) {
                if (previousValue) {
                    this.renderer.setElementClass(this.elementRef.nativeElement, previousValue, false);
                }
                if (this.size) {
                    this.renderer.setElementClass(this.elementRef.nativeElement, this.size, true);
                }
            };
        MzIconDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: 'i[mz-icon], i[mzIcon]',
                    },] },
        ];
        /** @nocollapse */
        MzIconDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef, },
                { type: core.Renderer, },
            ];
        };
        MzIconDirective.propDecorators = {
            "align": [{ type: core.Input },],
            "icon": [{ type: core.Input },],
            "size": [{ type: core.Input },],
        };
        return MzIconDirective;
    }(HandlePropChanges));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzIconModule = (function () {
        function MzIconModule() {
        }
        MzIconModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            MzIconDirective,
                        ],
                        exports: [
                            MzIconDirective,
                        ],
                    },] },
        ];
        return MzIconModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzIconMdiDirective = (function (_super) {
        tslib_1.__extends(MzIconMdiDirective, _super);
        function MzIconMdiDirective(elementRef, renderer) {
            var _this = _super.call(this) || this;
            _this.elementRef = elementRef;
            _this.renderer = renderer;
            return _this;
        }
        /**
         * @return {?}
         */
        MzIconMdiDirective.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                this.initHandlers();
                this.initMaterialize();
                _super.prototype.executePropHandlers.call(this);
            };
        /**
         * @return {?}
         */
        MzIconMdiDirective.prototype.initHandlers = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.handlers = {
                    align: function (previousValue) { return _this.handleAlign(previousValue); },
                    flip: function (previousValue) { return _this.handleFlip(previousValue); },
                    icon: function (previousValue) { return _this.handleIcon(previousValue); },
                    rotate: function (previousValue) { return _this.handleRotate(previousValue); },
                    size: function (previousValue) { return _this.handleSize(previousValue); },
                };
            };
        /**
         * @return {?}
         */
        MzIconMdiDirective.prototype.initMaterialize = /**
         * @return {?}
         */
            function () {
                this.renderer.setElementClass(this.elementRef.nativeElement, 'mdi', true);
            };
        /**
         * @param {?=} previousValue
         * @return {?}
         */
        MzIconMdiDirective.prototype.handleAlign = /**
         * @param {?=} previousValue
         * @return {?}
         */
            function (previousValue) {
                if (previousValue) {
                    this.renderer.setElementClass(this.elementRef.nativeElement, previousValue, false);
                }
                if (this.align) {
                    this.renderer.setElementClass(this.elementRef.nativeElement, this.align, true);
                }
            };
        /**
         * @param {?=} previousValue
         * @return {?}
         */
        MzIconMdiDirective.prototype.handleFlip = /**
         * @param {?=} previousValue
         * @return {?}
         */
            function (previousValue) {
                if (previousValue) {
                    this.renderer.setElementClass(this.elementRef.nativeElement, 'mdi-flip-' + previousValue, false);
                }
                this.renderer.setElementClass(this.elementRef.nativeElement, 'mdi-flip-' + this.flip, !!this.flip);
            };
        /**
         * @param {?=} previousValue
         * @return {?}
         */
        MzIconMdiDirective.prototype.handleIcon = /**
         * @param {?=} previousValue
         * @return {?}
         */
            function (previousValue) {
                if (previousValue) {
                    this.renderer.setElementClass(this.elementRef.nativeElement, 'mdi-' + previousValue, false);
                }
                this.renderer.setElementClass(this.elementRef.nativeElement, 'mdi-' + this.icon, true);
            };
        /**
         * @param {?=} previousValue
         * @return {?}
         */
        MzIconMdiDirective.prototype.handleRotate = /**
         * @param {?=} previousValue
         * @return {?}
         */
            function (previousValue) {
                if (previousValue) {
                    this.renderer.setElementClass(this.elementRef.nativeElement, 'mdi-rotate-' + previousValue, false);
                }
                this.renderer.setElementClass(this.elementRef.nativeElement, 'mdi-rotate-' + this.rotate, !!this.rotate);
            };
        /**
         * @param {?=} previousValue
         * @return {?}
         */
        MzIconMdiDirective.prototype.handleSize = /**
         * @param {?=} previousValue
         * @return {?}
         */
            function (previousValue) {
                if (!this.size) {
                    this.size = '24px';
                }
                if (previousValue) {
                    this.renderer.setElementClass(this.elementRef.nativeElement, 'mdi-' + previousValue, false);
                }
                this.renderer.setElementClass(this.elementRef.nativeElement, 'mdi-' + this.size, true);
            };
        MzIconMdiDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: 'a[mz-icon-mdi], a[mzIconMdi], i[mz-icon-mdi], i[mzIconMdi]',
                    },] },
        ];
        /** @nocollapse */
        MzIconMdiDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef, },
                { type: core.Renderer, },
            ];
        };
        MzIconMdiDirective.propDecorators = {
            "align": [{ type: core.Input },],
            "flip": [{ type: core.Input },],
            "icon": [{ type: core.Input },],
            "rotate": [{ type: core.Input },],
            "size": [{ type: core.Input },],
        };
        return MzIconMdiDirective;
    }(HandlePropChanges));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzIconMdiModule = (function () {
        function MzIconMdiModule() {
        }
        MzIconMdiModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            MzIconMdiDirective,
                        ],
                        exports: [
                            MzIconMdiDirective,
                        ],
                    },] },
        ];
        return MzIconMdiModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzInputContainerComponent = (function () {
        function MzInputContainerComponent() {
        }
        MzInputContainerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'mz-input-container',
                        template: "<div\n  class=\"input-field\"\n  [class.inline]=\"inline\"\n>\n  <ng-content></ng-content>\n</div>",
                        styles: [""],
                    },] },
        ];
        /** @nocollapse */
        MzInputContainerComponent.propDecorators = {
            "inline": [{ type: core.Input },],
        };
        return MzInputContainerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzInputPrefixDirective = (function () {
        function MzInputPrefixDirective(elementRef, renderer) {
            this.elementRef = elementRef;
            this.renderer = renderer;
        }
        /**
         * @return {?}
         */
        MzInputPrefixDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.renderer.setElementClass(this.elementRef.nativeElement, 'prefix', true);
            };
        MzInputPrefixDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: 'i[mzInputPrefix], i[mz-input-prefix]',
                    },] },
        ];
        /** @nocollapse */
        MzInputPrefixDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef, },
                { type: core.Renderer, },
            ];
        };
        return MzInputPrefixDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzInputDirective = (function (_super) {
        tslib_1.__extends(MzInputDirective, _super);
        function MzInputDirective(ngControl, elementRef, renderer) {
            var _this = _super.call(this) || this;
            _this.ngControl = ngControl;
            _this.elementRef = elementRef;
            _this.renderer = renderer;
            return _this;
        }
        /**
         * @return {?}
         */
        MzInputDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.initHandlers();
                this.initElements();
                this.initInputSubscription();
                this.handleProperties();
            };
        /**
         * @return {?}
         */
        MzInputDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this.inputValueSubscription) {
                    this.inputValueSubscription.unsubscribe();
                }
            };
        /**
         * @return {?}
         */
        MzInputDirective.prototype.initHandlers = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.handlers = {
                    autocomplete: function () { return _this.handleAutocomplete(); },
                    dataError: function () { return _this.handleDataError(); },
                    dataSuccess: function () { return _this.handleDataSuccess(); },
                    label: function () { return _this.handleLabel(); },
                    length: function () { return _this.handleLength(); },
                    placeholder: function () { return _this.handlePlaceholder(); },
                    validate: function () { return _this.handleValidate(); },
                };
            };
        /**
         * @return {?}
         */
        MzInputDirective.prototype.initElements = /**
         * @return {?}
         */
            function () {
                this.inputElement = $(this.elementRef.nativeElement);
                this.inputContainerElement = $(this.elementRef.nativeElement).parent('.input-field');
                this.labelElement = this.createLabelElement();
            };
        /**
         * @return {?}
         */
        MzInputDirective.prototype.initInputSubscription = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.ngControl) {
                    this.inputValueSubscription = this.ngControl.valueChanges.subscribe(function () { return _this.setLabelActive(); });
                }
            };
        /**
         * @return {?}
         */
        MzInputDirective.prototype.createLabelElement = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ labelElement = document.createElement('label');
                labelElement.setAttribute('for', this.id);
                this.renderer.invokeElementMethod(this.inputElement, 'after', [labelElement]);
                return $(labelElement);
            };
        /**
         * @return {?}
         */
        MzInputDirective.prototype.handleProperties = /**
         * @return {?}
         */
            function () {
                if (this.inputContainerElement.length === 0) {
                    console.error('Input with mz-input directive must be placed inside an [mz-input-container] tag', this.inputElement);
                    return;
                }
                _super.prototype.executePropHandlers.call(this);
            };
        /**
         * @return {?}
         */
        MzInputDirective.prototype.handleAutocomplete = /**
         * @return {?}
         */
            function () {
                var _this = this;
                var /** @type {?} */ isAutocomplete = this.autocomplete != null
                    && this.autocomplete.data != null
                    && Object.keys(this.autocomplete.data).length > 0;
                this.renderer.setElementClass(this.inputElement[0], 'autocomplete', isAutocomplete);
                if (this.autocomplete != null) {
                    // wait until autocomplete is defined before to invoke
                    // see issue: https://github.com/Dogfalo/materialize/issues/4401
                    rxjs.interval(100)
                        .pipe(operators.skipWhile(function () { return !_this.inputElement['autocomplete']; }), operators.first())
                        .subscribe(function () { return _this.renderer.invokeElementMethod(_this.inputElement, 'autocomplete', [_this.autocomplete]); });
                }
            };
        /**
         * @return {?}
         */
        MzInputDirective.prototype.handleDataError = /**
         * @return {?}
         */
            function () {
                this.renderer.setElementAttribute(this.labelElement[0], 'data-error', this.dataError);
            };
        /**
         * @return {?}
         */
        MzInputDirective.prototype.handleDataSuccess = /**
         * @return {?}
         */
            function () {
                this.renderer.setElementAttribute(this.labelElement[0], 'data-success', this.dataSuccess);
            };
        /**
         * @return {?}
         */
        MzInputDirective.prototype.handleLabel = /**
         * @return {?}
         */
            function () {
                this.renderer.invokeElementMethod(this.labelElement, 'text', [this.label]);
            };
        /**
         * @return {?}
         */
        MzInputDirective.prototype.handleLength = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ length = this.length ? this.length.toString() : null;
                this.renderer.setElementAttribute(this.inputElement[0], 'data-length', length);
                if (length) {
                    this.setCharacterCount();
                }
                else {
                    this.removeCharacterCount();
                }
            };
        /**
         * @return {?}
         */
        MzInputDirective.prototype.handlePlaceholder = /**
         * @return {?}
         */
            function () {
                var _this = this;
                var /** @type {?} */ placeholder = !!this.placeholder ? this.placeholder : null;
                this.renderer.setElementAttribute(this.inputElement[0], 'placeholder', placeholder);
                // fix issue in IE where having a placeholder on input make control dirty
                // note that it still trigger validation on focus but this is better than nothing
                // issue : https://github.com/angular/angular/issues/15299
                // workaround : https://stackoverflow.com/a/44967245/5583283
                if (this.ngControl) {
                    setTimeout(function () { return _this.ngControl.control.markAsPristine(); });
                }
                this.setLabelActive();
            };
        /**
         * @return {?}
         */
        MzInputDirective.prototype.handleValidate = /**
         * @return {?}
         */
            function () {
                this.renderer.setElementClass(this.inputElement[0], 'validate', this.validate);
                if (this.validate) {
                    // force validation
                    this.renderer.invokeElementMethod(this.inputElement, 'trigger', ['blur']);
                }
                else {
                    this.removeValidationClasses();
                }
            };
        /**
         * @return {?}
         */
        MzInputDirective.prototype.setCharacterCount = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.renderer.invokeElementMethod(this.inputElement, 'characterCounter');
                // force validation
                // need setTimeout otherwise it wont trigger validation right away
                setTimeout(function () {
                    _this.renderer.invokeElementMethod(_this.inputElement, 'trigger', ['input']);
                    _this.renderer.invokeElementMethod(_this.inputElement, 'trigger', ['blur']);
                });
            };
        /**
         * @return {?}
         */
        MzInputDirective.prototype.setLabelActive = /**
         * @return {?}
         */
            function () {
                var _this = this;
                // need setTimeout otherwise it wont make label float in some circonstances
                // for example: forcing validation for example, reseting form programmaticaly, ...
                setTimeout(function () {
                    var /** @type {?} */ inputValue = ((_this.inputElement[0])).value;
                    var /** @type {?} */ isActive = !!_this.placeholder || !!inputValue;
                    _this.renderer.setElementClass(_this.labelElement[0], 'active', isActive);
                });
            };
        /**
         * @return {?}
         */
        MzInputDirective.prototype.removeCharacterCount = /**
         * @return {?}
         */
            function () {
                this.renderer.invokeElementMethod(this.inputElement.siblings('.character-counter'), 'remove');
                this.removeValidationClasses();
            };
        /**
         * @return {?}
         */
        MzInputDirective.prototype.removeValidationClasses = /**
         * @return {?}
         */
            function () {
                // reset valid/invalid state
                this.renderer.setElementClass(this.inputElement[0], 'invalid', false);
                this.renderer.setElementClass(this.inputElement[0], 'valid', false);
            };
        MzInputDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: 'input[mzInput], input[mz-input]',
                    },] },
        ];
        /** @nocollapse */
        MzInputDirective.ctorParameters = function () {
            return [
                { type: forms.NgControl, decorators: [{ type: core.Optional },] },
                { type: core.ElementRef, },
                { type: core.Renderer, },
            ];
        };
        MzInputDirective.propDecorators = {
            "id": [{ type: core.Input },],
            "placeholder": [{ type: core.Input },],
            "autocomplete": [{ type: core.Input },],
            "dataError": [{ type: core.Input },],
            "dataSuccess": [{ type: core.Input },],
            "label": [{ type: core.Input },],
            "length": [{ type: core.Input },],
            "validate": [{ type: core.Input },],
        };
        return MzInputDirective;
    }(HandlePropChanges));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzInputModule = (function () {
        function MzInputModule() {
        }
        MzInputModule.decorators = [
            { type: core.NgModule, args: [{
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
        return MzInputModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzMediaService = (function () {
        function MzMediaService(platformId) {
            this.mediaBreakpoints = [
                { alias: 's', minWidth: 0, maxWidth: 600 },
                { alias: 'm', minWidth: 601, maxWidth: 992 },
                { alias: 'l', minWidth: 993, maxWidth: 1200 },
                { alias: 'xl', minWidth: 1201, maxWidth: Number.MAX_VALUE },
            ];
            this.matchOperators = [
                {
                    operator: 'gt',
                    match: function (breakpoint) { return window.innerWidth > breakpoint.maxWidth; },
                },
                {
                    operator: 'lt',
                    match: function (breakpoint) { return window.innerWidth < breakpoint.minWidth; },
                },
                {
                    operator: null,
                    match: function (breakpoint) { return window.innerWidth >= breakpoint.minWidth && window.innerWidth <= breakpoint.maxWidth; },
                },
            ];
            if (common.isPlatformBrowser(platformId)) {
                this.media = this.registerWindowResizeListener();
            }
            else {
                this.media = rxjs.Observable.create();
            }
        }
        /**
         * @param {?} breakpoint
         * @return {?}
         */
        MzMediaService.prototype.isActive = /**
         * @param {?} breakpoint
         * @return {?}
         */
            function (breakpoint) {
                var _this = this;
                return new rxjs.Observable(function (subscriber) {
                    _this.media.subscribe(function (media) {
                        try {
                            subscriber.next(_this.isActiveBreakpoint(breakpoint));
                        }
                        catch (error) {
                            subscriber.error(error);
                        }
                    });
                });
            };
        /**
         * @return {?}
         */
        MzMediaService.prototype.registerWindowResizeListener = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return rxjs.fromEvent(window, 'resize')
                    .pipe(operators.map(function () { return _this.getWindowMedia(); }), operators.startWith(this.getWindowMedia()), operators.publishReplay(1), operators.refCount());
            };
        /**
         * @return {?}
         */
        MzMediaService.prototype.getWindowMedia = /**
         * @return {?}
         */
            function () {
                return {
                    alias: this.mediaBreakpoints.find(function (breakpoint) { return window.innerWidth <= breakpoint.maxWidth; }).alias,
                    windowHeight: window.innerHeight,
                    windowWidth: window.innerWidth,
                };
            };
        /**
         * @param {?} breakpoint
         * @return {?}
         */
        MzMediaService.prototype.isActiveBreakpoint = /**
         * @param {?} breakpoint
         * @return {?}
         */
            function (breakpoint) {
                var /** @type {?} */ matchOperator;
                var /** @type {?} */ mediaBreakpoint;
                if (breakpoint) {
                    var /** @type {?} */ fragments_1 = breakpoint.split('-');
                    if (fragments_1.length === 1) {
                        matchOperator = this.matchOperators.find(function (x) { return x.operator === null; });
                        mediaBreakpoint = this.mediaBreakpoints.find(function (x) { return x.alias === fragments_1[0]; });
                    }
                    else if (fragments_1.length === 2) {
                        matchOperator = this.matchOperators.find(function (x) { return x.operator === fragments_1[0]; });
                        mediaBreakpoint = this.mediaBreakpoints.find(function (x) { return x.alias === fragments_1[1]; });
                    }
                }
                if (!mediaBreakpoint || !matchOperator) {
                    throw Error("MzMediaService.isActive parameter is invalid: '" + breakpoint + "' is not a recognized breakpoint.");
                }
                return matchOperator.match(mediaBreakpoint);
            };
        MzMediaService.decorators = [
            { type: core.Injectable },
        ];
        /** @nocollapse */
        MzMediaService.ctorParameters = function () {
            return [
                { type: Object, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] },] },
            ];
        };
        return MzMediaService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzMediaModule = (function () {
        function MzMediaModule() {
        }
        MzMediaModule.decorators = [
            { type: core.NgModule, args: [{
                        providers: [MzMediaService],
                    },] },
        ];
        return MzMediaModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzModalComponent = (function (_super) {
        tslib_1.__extends(MzModalComponent, _super);
        function MzModalComponent(renderer) {
            var _this = _super.call(this) || this;
            _this.renderer = renderer;
            _this.close = new core.EventEmitter();
            return _this;
        }
        /**
         * @return {?}
         */
        MzModalComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.initHandlers();
                this.initElements();
                this.handleProperties();
            };
        /**
         * @return {?}
         */
        MzModalComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                this.initModal();
            };
        /**
         * @return {?}
         */
        MzModalComponent.prototype.initElements = /**
         * @return {?}
         */
            function () {
                this.modalElement = $(this.modalElementRef.nativeElement);
            };
        /**
         * @return {?}
         */
        MzModalComponent.prototype.initHandlers = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.handlers = {
                    options: function () { return _this.handleOptions(); },
                };
            };
        /**
         * @return {?}
         */
        MzModalComponent.prototype.initModal = /**
         * @return {?}
         */
            function () {
                this.renderer.invokeElementMethod(this.modalElement, 'modal', [this.options]);
            };
        /**
         * @return {?}
         */
        MzModalComponent.prototype.handleProperties = /**
         * @return {?}
         */
            function () {
                _super.prototype.executePropHandlers.call(this);
            };
        /**
         * @return {?}
         */
        MzModalComponent.prototype.handleOptions = /**
         * @return {?}
         */
            function () {
                var _this = this;
                // extend complete function to emit close event on callback return
                var /** @type {?} */ originalCompleteFn = this.options && this.options.complete || (function () { });
                this.options = Object.assign({}, this.options, {
                    complete: function () {
                        originalCompleteFn();
                        _this.close.emit();
                    },
                });
            };
        /**
         * @return {?}
         */
        MzModalComponent.prototype.openModal = /**
         * @return {?}
         */
            function () {
                this.renderer.invokeElementMethod(this.modalElement, 'modal', ['open']);
            };
        /**
         * @return {?}
         */
        MzModalComponent.prototype.closeModal = /**
         * @return {?}
         */
            function () {
                this.renderer.invokeElementMethod(this.modalElement, 'modal', ['close']);
            };
        MzModalComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'mz-modal',
                        template: "<div #modal\n  class=\"modal\"\n  [class.modal-fixed-footer]=\"fixedFooter\"\n  [class.bottom-sheet]=\"bottomSheet\"\n  [class.modal-fullscreen]=\"fullscreen\"\n>\n  <div class=\"modal-content\">\n    <ng-content select=\"mz-modal-header\"></ng-content>\n    <div>\n      <ng-content select=\"mz-modal-content\"></ng-content>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <ng-content select=\"mz-modal-footer\"></ng-content>\n  </div>\n</div>\n",
                        styles: [".modal:not(.bottom-sheet).modal-fullscreen{top:12px!important;margin:0 auto;width:calc(100% - 24px);height:calc(100% - 24px);max-height:none}.modal.bottom-sheet.modal-fullscreen{height:100%;max-height:none}/deep/ mz-modal-header h5,/deep/ mz-modal-header h6{margin-top:0}"],
                    },] },
        ];
        /** @nocollapse */
        MzModalComponent.ctorParameters = function () {
            return [
                { type: core.Renderer, },
            ];
        };
        MzModalComponent.propDecorators = {
            "bottomSheet": [{ type: core.Input },],
            "fixedFooter": [{ type: core.Input },],
            "fullscreen": [{ type: core.Input },],
            "options": [{ type: core.Input },],
            "close": [{ type: core.Output },],
            "modalElementRef": [{ type: core.ViewChild, args: ['modal',] },],
        };
        return MzModalComponent;
    }(HandlePropChanges));
    var MzModalHeaderDirective = (function () {
        function MzModalHeaderDirective() {
        }
        MzModalHeaderDirective.decorators = [
            { type: core.Directive, args: [{ selector: 'mz-modal-header' },] },
        ];
        return MzModalHeaderDirective;
    }());
    var MzModalContentDirective = (function () {
        function MzModalContentDirective() {
        }
        MzModalContentDirective.decorators = [
            { type: core.Directive, args: [{ selector: 'mz-modal-content' },] },
        ];
        return MzModalContentDirective;
    }());
    var MzModalFooterDirective = (function () {
        function MzModalFooterDirective() {
        }
        MzModalFooterDirective.decorators = [
            { type: core.Directive, args: [{ selector: 'mz-modal-footer' },] },
        ];
        return MzModalFooterDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzModalCloseDirective = (function () {
        function MzModalCloseDirective(modalComponent) {
            this.modalComponent = modalComponent;
        }
        /**
         * @return {?}
         */
        MzModalCloseDirective.prototype.onclick = /**
         * @return {?}
         */
            function () {
                this.modalComponent.closeModal();
            };
        MzModalCloseDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: 'a[mzModalClose], button[mzModalClose], a[mz-modal-close], button[mz-modal-close]',
                    },] },
        ];
        /** @nocollapse */
        MzModalCloseDirective.ctorParameters = function () {
            return [
                { type: MzModalComponent, },
            ];
        };
        MzModalCloseDirective.propDecorators = {
            "onclick": [{ type: core.HostListener, args: ['click',] },],
        };
        return MzModalCloseDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzModalService = (function () {
        function MzModalService(injectionService) {
            this.injectionService = injectionService;
        }
        /**
         * Open modal component.
         */
        /**
         * Open modal component.
         * @param {?} componentClass
         * @param {?=} options
         * @return {?}
         */
        MzModalService.prototype.open = /**
         * Open modal component.
         * @param {?} componentClass
         * @param {?=} options
         * @return {?}
         */
            function (componentClass, options) {
                if (options === void 0) {
                    options = {};
                }
                var /** @type {?} */ componentRef = this.injectionService.appendComponent(componentClass, options);
                componentRef.instance.modalComponent.close
                    .pipe(operators.first())
                    .subscribe(function () {
                    componentRef.destroy();
                });
                return componentRef;
            };
        MzModalService.decorators = [
            { type: core.Injectable },
        ];
        /** @nocollapse */
        MzModalService.ctorParameters = function () {
            return [
                { type: MzInjectionService, },
            ];
        };
        return MzModalService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzModalModule = (function () {
        function MzModalModule() {
        }
        MzModalModule.decorators = [
            { type: core.NgModule, args: [{
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
        return MzModalModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzNavbarItemContainerComponent = (function () {
        function MzNavbarItemContainerComponent() {
        }
        MzNavbarItemContainerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'mz-navbar-item-container',
                        template: "<ul id=\"nav-mobile\" class=\"{{ align }}\">\n  <ng-content></ng-content>\n</ul>",
                        styles: [""],
                    },] },
        ];
        /** @nocollapse */
        MzNavbarItemContainerComponent.propDecorators = {
            "align": [{ type: core.Input },],
        };
        return MzNavbarItemContainerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzNavbarItemComponent = (function () {
        function MzNavbarItemComponent() {
        }
        MzNavbarItemComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'mz-navbar-item',
                        template: "<li \n  class=\"{{ itemClass }}\"\n  [class.active]=\"active\"\n>\n  <ng-content></ng-content>\n</li>",
                        styles: [""],
                    },] },
        ];
        /** @nocollapse */
        MzNavbarItemComponent.propDecorators = {
            "active": [{ type: core.Input },],
            "itemClass": [{ type: core.Input },],
        };
        return MzNavbarItemComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzNavbarComponent = (function () {
        function MzNavbarComponent() {
        }
        MzNavbarComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'mz-navbar',
                        template: "<nav>\n  <div class=\"nav-wrapper {{ navbarClass }}\">\n    <ng-content></ng-content>\n  </div>\n</nav>",
                        styles: [".nav-wrapper /deep/ .btn i{line-height:inherit}"],
                    },] },
        ];
        /** @nocollapse */
        MzNavbarComponent.propDecorators = {
            "navbarClass": [{ type: core.Input },],
        };
        return MzNavbarComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzNavbarModule = (function () {
        function MzNavbarModule() {
        }
        MzNavbarModule.decorators = [
            { type: core.NgModule, args: [{
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
        return MzNavbarModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzPaginationPageButtonComponent = (function () {
        function MzPaginationPageButtonComponent() {
        }
        MzPaginationPageButtonComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'mz-pagination-page-button',
                        template: "<li [class.active]=\"active\"\n  [class.disabled]=\"disabled\"\n  [class.waves-effect]=\"!active && !disabled\">\n  <ng-content></ng-content>\n</li>",
                        styles: [""],
                    },] },
        ];
        /** @nocollapse */
        MzPaginationPageButtonComponent.propDecorators = {
            "active": [{ type: core.Input },],
            "disabled": [{ type: core.Input },],
        };
        return MzPaginationPageButtonComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzPaginationComponent = (function (_super) {
        tslib_1.__extends(MzPaginationComponent, _super);
        function MzPaginationComponent() {
            var _this = _super.call(this) || this;
            _this.currentPage = 1;
            _this.enableFirstAndLastPageButtons = false;
            _this.maxPageButtons = 5;
            _this.pageChange = new core.EventEmitter();
            return _this;
        }
        Object.defineProperty(MzPaginationComponent.prototype, "totalPages", {
            get: /**
             * @return {?}
             */ function () {
                return Math.ceil(this.totalItems / this.itemsPerPage);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        MzPaginationComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.initHandlers();
                this.renderButtons();
            };
        /**
         * @param {?} pageNumber
         * @return {?}
         */
        MzPaginationComponent.prototype.changeCurrentPage = /**
         * @param {?} pageNumber
         * @return {?}
         */
            function (pageNumber) {
                this.currentPage = pageNumber;
                this.pageChange.emit(pageNumber);
                this.renderButtons();
            };
        /**
         * @return {?}
         */
        MzPaginationComponent.prototype.firstPage = /**
         * @return {?}
         */
            function () {
                this.changeCurrentPage(1);
            };
        /**
         * @return {?}
         */
        MzPaginationComponent.prototype.initHandlers = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.handlers = {
                    currentPage: function () { return _this.renderButtons(); },
                    itemsPerPage: function () { return _this.renderButtons(); },
                    maxPageButtons: function () { return _this.renderButtons(); },
                    totalItems: function () { return _this.renderButtons(); },
                };
            };
        /**
         * @return {?}
         */
        MzPaginationComponent.prototype.lastPage = /**
         * @return {?}
         */
            function () {
                this.changeCurrentPage(this.totalPages);
            };
        /**
         * @return {?}
         */
        MzPaginationComponent.prototype.nextPage = /**
         * @return {?}
         */
            function () {
                if (this.currentPage < this.totalPages) {
                    var /** @type {?} */ nextPage = this.currentPage + 1;
                    this.changeCurrentPage(nextPage);
                }
            };
        /**
         * @return {?}
         */
        MzPaginationComponent.prototype.previousPage = /**
         * @return {?}
         */
            function () {
                if (this.currentPage !== 1) {
                    var /** @type {?} */ previousPage = this.currentPage - 1;
                    this.changeCurrentPage(previousPage);
                }
            };
        /**
         * @return {?}
         */
        MzPaginationComponent.prototype.renderButtons = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ buttonsCount = Math.min(this.maxPageButtons, this.totalPages);
                var /** @type {?} */ maxPosition = this.totalPages - buttonsCount;
                var /** @type {?} */ halfButtons = Math.floor(buttonsCount / 2);
                var /** @type {?} */ hiddenPagesBefore = (this.currentPage - halfButtons);
                if (hiddenPagesBefore > maxPosition) {
                    hiddenPagesBefore = maxPosition + 1;
                }
                var /** @type {?} */ from = Math.max(hiddenPagesBefore, 1);
                var /** @type {?} */ to = Math.min(this.totalPages, from + this.maxPageButtons - 1);
                this.pages = Array(buttonsCount).fill(0).map(function (x, i) { return from + i; });
                if (this.currentPage > this.totalPages) {
                    this.currentPage = this.pages[0];
                }
            };
        MzPaginationComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'mz-pagination',
                        template: "\n  <ul class=\"pagination\">\n    <mz-pagination-page-button [disabled]=\"currentPage === 1\" *ngIf=\"enableFirstAndLastPageButtons\">\n      <a (click)=\"firstPage()\"><i mz-icon [icon]=\"'first_page'\"></i></a>\n    </mz-pagination-page-button>\n    <mz-pagination-page-button [disabled]=\"currentPage === 1\">\n      <a (click)=\"previousPage()\"><i mz-icon [icon]=\"'chevron_left'\"></i></a>\n    </mz-pagination-page-button>\n    <mz-pagination-page-button *ngFor=\"let page of pages\"\n      [active]=\"page === currentPage\"\n    >\n      <a (click)=\"changeCurrentPage(page)\">{{ page }}</a>\n    </mz-pagination-page-button>\n    <mz-pagination-page-button [disabled]=\"currentPage === totalPages\">\n      <a (click)=\"nextPage()\"><i mz-icon [icon]=\"'chevron_right'\"></i></a>\n    </mz-pagination-page-button>\n    <mz-pagination-page-button [disabled]=\"currentPage === totalPages\" *ngIf=\"enableFirstAndLastPageButtons\">\n      <a (click)=\"lastPage()\"><i mz-icon [icon]=\"'last_page'\"></i></a>\n    </mz-pagination-page-button>\n  </ul>",
                        styles: [""],
                    },] },
        ];
        /** @nocollapse */
        MzPaginationComponent.ctorParameters = function () { return []; };
        MzPaginationComponent.propDecorators = {
            "currentPage": [{ type: core.Input },],
            "enableFirstAndLastPageButtons": [{ type: core.Input },],
            "itemsPerPage": [{ type: core.Input },],
            "maxPageButtons": [{ type: core.Input },],
            "totalItems": [{ type: core.Input },],
            "pageChange": [{ type: core.Output },],
        };
        return MzPaginationComponent;
    }(HandlePropChanges));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzPaginationModule = (function () {
        function MzPaginationModule() {
        }
        MzPaginationModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
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
        return MzPaginationModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzParallaxComponent = (function () {
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
            { type: core.Component, args: [{
                        selector: 'mz-parallax',
                        template: "<div #parallaxContainer class=\"parallax-container\">\n  <div #parallax class=\"parallax\">\n    <ng-content></ng-content>\n  </div>\n</div>",
                        styles: [""],
                    },] },
        ];
        /** @nocollapse */
        MzParallaxComponent.ctorParameters = function () {
            return [
                { type: core.Renderer, },
            ];
        };
        MzParallaxComponent.propDecorators = {
            "height": [{ type: core.Input },],
            "parallax": [{ type: core.ViewChild, args: ['parallax',] },],
            "parallaxContainer": [{ type: core.ViewChild, args: ['parallaxContainer',] },],
        };
        return MzParallaxComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzParallaxModule = (function () {
        function MzParallaxModule() {
        }
        MzParallaxModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [MzParallaxComponent],
                        exports: [MzParallaxComponent],
                    },] },
        ];
        return MzParallaxModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzProgressComponent = (function () {
        function MzProgressComponent() {
        }
        MzProgressComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'mz-progress',
                        template: "<div class=\"progress {{ backgroundClass }}\">\n\n  <div\n    class=\"progress-bar {{ progressClass }}\"\n    [class.determinate]=\"percentage != null\"\n    [class.indeterminate]=\"percentage == null\"\n    [style.width.%]=\"percentage\">\n  </div>\n</div>",
                        styles: [""],
                    },] },
        ];
        /** @nocollapse */
        MzProgressComponent.propDecorators = {
            "backgroundClass": [{ type: core.Input },],
            "percentage": [{ type: core.Input },],
            "progressClass": [{ type: core.Input },],
        };
        return MzProgressComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzProgressModule = (function () {
        function MzProgressModule() {
        }
        MzProgressModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [MzProgressComponent],
                        exports: [MzProgressComponent],
                    },] },
        ];
        return MzProgressModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzRadioButtonContainerComponent = (function () {
        function MzRadioButtonContainerComponent() {
        }
        MzRadioButtonContainerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'mz-radio-button-container',
                        template: "<p class=\"radio-button-field\">\n  <ng-content></ng-content>\n</p>",
                        styles: [""],
                    },] },
        ];
        return MzRadioButtonContainerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzRadioButtonDirective = (function (_super) {
        tslib_1.__extends(MzRadioButtonDirective, _super);
        function MzRadioButtonDirective(elementRef, renderer) {
            var _this = _super.call(this) || this;
            _this.elementRef = elementRef;
            _this.renderer = renderer;
            return _this;
        }
        /**
         * @return {?}
         */
        MzRadioButtonDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.initHandlers();
                this.initElements();
                this.handleProperties();
            };
        /**
         * @return {?}
         */
        MzRadioButtonDirective.prototype.initHandlers = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.handlers = {
                    label: function () { return _this.handleLabel(); },
                    withGap: function () { return _this.handleWithGap(); },
                };
            };
        /**
         * @return {?}
         */
        MzRadioButtonDirective.prototype.initElements = /**
         * @return {?}
         */
            function () {
                this.inputElement = $(this.elementRef.nativeElement);
                this.inputContainerElement = $(this.elementRef.nativeElement).parent('.radio-button-field');
                this.labelElement = this.createLabelElement();
            };
        /**
         * @return {?}
         */
        MzRadioButtonDirective.prototype.createLabelElement = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ labelElement = document.createElement('label');
                labelElement.setAttribute('for', this.id);
                this.renderer.invokeElementMethod(this.inputElement, 'after', [labelElement]);
                return $(labelElement);
            };
        /**
         * @return {?}
         */
        MzRadioButtonDirective.prototype.handleProperties = /**
         * @return {?}
         */
            function () {
                if (this.inputContainerElement.length === 0) {
                    console.error('Radio Button must be placed inside a [mz-radio-button-container] tag', this.inputElement);
                    return;
                }
                _super.prototype.executePropHandlers.call(this);
            };
        /**
         * @return {?}
         */
        MzRadioButtonDirective.prototype.handleLabel = /**
         * @return {?}
         */
            function () {
                this.renderer.invokeElementMethod(this.labelElement, 'text', [this.label]);
            };
        /**
         * @return {?}
         */
        MzRadioButtonDirective.prototype.handleWithGap = /**
         * @return {?}
         */
            function () {
                this.renderer.setElementClass(this.inputElement[0], 'with-gap', this.withGap);
            };
        MzRadioButtonDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: 'input[mzRadioButton], input[mz-radio-button]',
                    },] },
        ];
        /** @nocollapse */
        MzRadioButtonDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef, },
                { type: core.Renderer, },
            ];
        };
        MzRadioButtonDirective.propDecorators = {
            "id": [{ type: core.HostBinding }, { type: core.Input },],
            "label": [{ type: core.Input },],
            "withGap": [{ type: core.Input },],
        };
        return MzRadioButtonDirective;
    }(HandlePropChanges));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzRadioButtonModule = (function () {
        function MzRadioButtonModule() {
        }
        MzRadioButtonModule.decorators = [
            { type: core.NgModule, args: [{
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
        return MzRadioButtonModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzErrorMessageComponent = (function () {
        function MzErrorMessageComponent() {
            this.errorMessage = '';
        }
        /**
         * @return {?}
         */
        MzErrorMessageComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.buildErrorMessage();
                this.controlStatusChangesSubscription = this.control.statusChanges.subscribe(function () { return _this.buildErrorMessage(); });
            };
        /**
         * @return {?}
         */
        MzErrorMessageComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.controlStatusChangesSubscription.unsubscribe();
            };
        /**
         * @return {?}
         */
        MzErrorMessageComponent.prototype.buildErrorMessage = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.errorMessage = '';
                if (this.control.errors && this.errorMessageResource) {
                    Object.keys(this.control.errors).forEach(function (key) {
                        _this.errorMessage += _this.errorMessageResource[key] + ' ';
                    });
                }
            };
        MzErrorMessageComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'mz-error-message',
                        template: "<div [@enterAnimation]=\"errorMessage\" class=\"invalid\" *ngIf=\"(control.touched || control.dirty) && control.invalid && errorMessage\">{{ errorMessage }}</div>",
                        styles: ["div.invalid{color:#e30613;font-size:.8rem;opacity:1;overflow-wrap:break-word}input:not([type=checkbox])+label+:host div.invalid,mz-select-container :host div.invalid,textarea+label+:host div.invalid{margin-top:-19px;min-height:19px}"],
                        animations: [
                            animations.trigger('enterAnimation', [
                                animations.transition(':enter', [
                                    animations.style({ transform: 'translateY(-5px)', opacity: 0 }),
                                    animations.animate('300ms', animations.style({ transform: 'translateY(0)', opacity: 1 })),
                                ]),
                                animations.transition(':leave', [
                                    animations.style({ transform: 'translateY(0)', opacity: 1 }),
                                    animations.animate('300ms', animations.style({ transform: 'translateY(-5px)', opacity: 0 })),
                                ]),
                            ]),
                        ],
                    },] },
        ];
        /** @nocollapse */
        MzErrorMessageComponent.propDecorators = {
            "control": [{ type: core.Input },],
            "errorMessageResource": [{ type: core.Input },],
        };
        return MzErrorMessageComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @abstract
     */
    var /**
     * @abstract
     */ ErrorMessageResource = (function () {
        function ErrorMessageResource() {
        }
        return ErrorMessageResource;
    }());

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
    var MzValidationComponent = (function () {
        function MzValidationComponent(elementRef, resolver, viewContainerRef, ngControl, renderer) {
            this.elementRef = elementRef;
            this.resolver = resolver;
            this.viewContainerRef = viewContainerRef;
            this.ngControl = ngControl;
            this.renderer = renderer;
            this.errorMessageComponent = null;
            this._formControlDisabled = false;
            this._required = false;
        }
        Object.defineProperty(MzValidationComponent.prototype, "required", {
            get: /**
             * @return {?}
             */ function () { return this._required; },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) { this._required = (value != null && "" + value !== 'false'); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MzValidationComponent.prototype, "formControlDisabled", {
            get: /**
             * @return {?}
             */ function () { return this._formControlDisabled; },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._formControlDisabled = value;
                if (this._formControlDisabled) {
                    this.ngControl.control.disable();
                }
                else {
                    this.ngControl.control.enable();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MzValidationComponent.prototype, "elementToAddValidation", {
            get: /**
             * @return {?}
             */ function () {
                return this.isNativeSelectElement
                    ? this.inputSelectDropdown
                    : this.nativeElement;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MzValidationComponent.prototype, "inputSelectDropdown", {
            get: /**
             * @return {?}
             */ function () {
                return this.nativeElement.siblings('input.select-dropdown');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MzValidationComponent.prototype, "isNativeSelectElement", {
            get: /**
             * @return {?}
             */ function () {
                return this.nativeElement[0].nodeName === 'SELECT';
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} target
         * @return {?}
         */
        MzValidationComponent.prototype.onFocusOut = /**
         * @param {?} target
         * @return {?}
         */
            function (target) {
                this.ngControl.control.markAsTouched();
                this.setValidationState();
            };
        /**
         * @return {?}
         */
        MzValidationComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                this.initElements();
                this.initErrorMessageComponent();
                this.subscribeStatusChanges();
            };
        /**
         * @return {?}
         */
        MzValidationComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.statusChangesSubscription.unsubscribe();
                this.errorMessageComponent.destroy();
            };
        /**
         * @param {?} element
         * @return {?}
         */
        MzValidationComponent.prototype.clearValidationState = /**
         * @param {?} element
         * @return {?}
         */
            function (element) {
                this.renderer.setElementClass(element[0], 'valid', false);
                this.renderer.setElementClass(element[0], 'invalid', false);
            };
        /**
         * @return {?}
         */
        MzValidationComponent.prototype.createRequiredSpanElement = /**
         * @return {?}
         */
            function () {
                if (this.required && this.labelElement) {
                    var /** @type {?} */ spanElement = document.createElement('span');
                    spanElement.setAttribute('class', 'placeholder-required');
                    spanElement.textContent = ' *';
                    this.renderer.invokeElementMethod(this.labelElement, 'appendChild', [spanElement]);
                }
            };
        /**
         * @return {?}
         */
        MzValidationComponent.prototype.initElements = /**
         * @return {?}
         */
            function () {
                this.labelElement = $('label[for="' + this.id + '"]')[0];
                this.nativeElement = $(this.elementRef.nativeElement);
                this.createRequiredSpanElement();
            };
        /**
         * @return {?}
         */
        MzValidationComponent.prototype.initErrorMessageComponent = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ errorMessageFactory = this.resolver.resolveComponentFactory(MzErrorMessageComponent);
                this.errorMessageComponent = this.viewContainerRef.createComponent(errorMessageFactory);
                this.errorMessageComponent.instance.errorMessageResource = this.errorMessageResource;
                this.errorMessageComponent.instance.control = this.ngControl.control;
                this.errorMessageComponent.changeDetectorRef.detectChanges();
                var /** @type {?} */ errorMessage = this.nativeElement.parent().children('mz-error-message');
                this.renderer.invokeElementMethod(errorMessage, 'insertAfter', [this.labelElement]);
            };
        /**
         * @return {?}
         */
        MzValidationComponent.prototype.setValidationState = /**
         * @return {?}
         */
            function () {
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
            };
        /**
         * @return {?}
         */
        MzValidationComponent.prototype.subscribeStatusChanges = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.statusChangesSubscription = this.ngControl.control.statusChanges.subscribe(function (status) {
                    // TODO Find a better way to handle validation after the form subscription. (see demo form-validation)
                    // wait for the valueChanges method from FormGroup to have been triggered before handling the validation state
                    // /!\ race condition warning /!\
                    setTimeout(function () { return _this.setValidationState(); });
                });
            };
        MzValidationComponent.decorators = [
            { type: core.Component, args: [{
                        encapsulation: core.ViewEncapsulation.None,
                        selector: 'mz-validation, [mz-validation], [mzValidation]',
                        template: "<ng-content></ng-content>",
                        styles: [".select-wrapper input.select-dropdown.invalid,textarea.ng-invalid.ng-touched:focus{border-bottom:1px solid #f44336;box-shadow:0 1px 0 0 #f44336}.select-wrapper input.select-dropdown.valid{border-bottom:1px solid #4caf50;box-shadow:0 1px 0 0 #4caf50}input:not([type=checkbox]):focus+label.active span.placeholder-required,textarea:focus+label.active span.placeholder-required{color:#f44336}"],
                    },] },
        ];
        /** @nocollapse */
        MzValidationComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef, },
                { type: core.ComponentFactoryResolver, },
                { type: core.ViewContainerRef, },
                { type: forms.NgControl, },
                { type: core.Renderer, },
            ];
        };
        MzValidationComponent.propDecorators = {
            "id": [{ type: core.Input },],
            "errorMessageResource": [{ type: core.Input },],
            "required": [{ type: core.HostBinding, args: ['attr.required',] }, { type: core.Input },],
            "formControlDisabled": [{ type: core.Input },],
            "onFocusOut": [{ type: core.HostListener, args: ['focusout', ['$event.target'],] },],
        };
        return MzValidationComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzSelectDirective = (function (_super) {
        tslib_1.__extends(MzSelectDirective, _super);
        function MzSelectDirective(elementRef, changeDetectorRef, renderer) {
            var _this = _super.call(this) || this;
            _this.elementRef = elementRef;
            _this.changeDetectorRef = changeDetectorRef;
            _this.renderer = renderer;
            _this.update = new core.EventEmitter();
            _this.suspend = false;
            return _this;
        }
        Object.defineProperty(MzSelectDirective.prototype, "inputElement", {
            get: /**
             * @return {?}
             */ function () {
                return this.selectElement.siblings('input.select-dropdown');
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        MzSelectDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
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
            };
        /**
         * @return {?}
         */
        MzSelectDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.renderer.invokeElementMethod(this.selectElement, 'material_select', ['destroy']);
                this.selectElement.off();
                this.mutationObserver.disconnect();
            };
        /**
         * @return {?}
         */
        MzSelectDirective.prototype.initHandlers = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.handlers = {
                    disabled: function () { return _this.handleDisabled(); },
                    label: function () { return _this.handleLabel(); },
                    placeholder: function () { return _this.handlePlaceholder(); },
                };
            };
        /**
         * @return {?}
         */
        MzSelectDirective.prototype.initElements = /**
         * @return {?}
         */
            function () {
                this.selectElement = $(this.elementRef.nativeElement);
                this.selectContainerElement = $(this.elementRef.nativeElement).parents('.input-field');
                this.labelElement = this.createLabelElement();
            };
        /**
         * Need to be done after material_select has been invoked or else the multi-select
         * options are not yet in the DOM as it loops on rendered options
         */
        /**
         * Need to be done after material_select has been invoked or else the multi-select
         * options are not yet in the DOM as it loops on rendered options
         * @return {?}
         */
        MzSelectDirective.prototype.initFilledIn = /**
         * Need to be done after material_select has been invoked or else the multi-select
         * options are not yet in the DOM as it loops on rendered options
         * @return {?}
         */
            function () {
                var _this = this;
                this.checkboxElements = this.selectContainerElement.find(':checkbox');
                this.handlers['filledIn'] = function () { return _this.handleFilledIn(); };
                this.handleFilledIn();
            };
        /**
         * @return {?}
         */
        MzSelectDirective.prototype.initMaterialSelect = /**
         * @return {?}
         */
            function () {
                this.renderer.invokeElementMethod(this.selectElement, 'material_select');
            };
        /**
         * Trigger the native change event from select element instead of the JQuery.
         * An issue on Github is open about this problem : https://github.com/Dogfalo/materialize/issues/2843
         * This method should be removed when this issue is revolved.
         */
        /**
         * Trigger the native change event from select element instead of the JQuery.
         * An issue on Github is open about this problem : https://github.com/Dogfalo/materialize/issues/2843
         * This method should be removed when this issue is revolved.
         * @return {?}
         */
        MzSelectDirective.prototype.initOnChange = /**
         * Trigger the native change event from select element instead of the JQuery.
         * An issue on Github is open about this problem : https://github.com/Dogfalo/materialize/issues/2843
         * This method should be removed when this issue is revolved.
         * @return {?}
         */
            function () {
                var _this = this;
                this.selectElement.on('change', function (event) {
                    if (!_this.suspend) {
                        _this.suspend = true;
                        var /** @type {?} */ customEvent = document.createEvent('CustomEvent');
                        customEvent.initCustomEvent('change', true, false, event.target.value);
                        _this.renderer.invokeElementMethod(_this.selectElement[0], 'dispatchEvent', [customEvent]);
                    }
                });
                // Stop the propagation of change event
                this.selectElement[0].addEventListener('change', function () {
                    _this.suspend = false;
                });
            };
        /**
         * @return {?}
         */
        MzSelectDirective.prototype.handleDOMEvents = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.inputElement.on('blur focus', function (event) {
                    var /** @type {?} */ customEvent = document.createEvent('CustomEvent');
                    customEvent.initCustomEvent(event.type, true, false, event.target);
                    _this.selectElement[0].dispatchEvent(customEvent);
                });
            };
        /**
         * @return {?}
         */
        MzSelectDirective.prototype.createLabelElement = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ labelElement = document.createElement('label');
                labelElement.setAttribute('for', this.id);
                this.renderer.invokeElementMethod(this.selectElement, 'after', [labelElement]);
                return $(labelElement);
            };
        /**
         * @return {?}
         */
        MzSelectDirective.prototype.handleProperties = /**
         * @return {?}
         */
            function () {
                if (this.selectContainerElement.length === 0) {
                    console.error('Select with mz-select directive must be place inside a [mz-select-container] tag', this.selectElement);
                    return;
                }
                _super.prototype.executePropHandlers.call(this);
            };
        /**
         * @return {?}
         */
        MzSelectDirective.prototype.initSelectedOption = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ firstOptionElement = this.selectElement.children().first();
                if (firstOptionElement.length > 0
                    && this.selectElement.children('option[selected]').length === 0
                    && !this.selectElement[0].hasAttribute('multiple')) {
                    this.renderer.setElementAttribute(firstOptionElement[0], 'selected', '');
                }
            };
        /**
         * @return {?}
         */
        MzSelectDirective.prototype.handleDisabled = /**
         * @return {?}
         */
            function () {
                // when disabled is null/undefined that means the property has not been used on the element
                // but it might be set by another process (for example reactive form applies disabled attribute itself)
                // therefore we don't want to remove or add it here
                if (this.disabled != null) {
                    this.renderer.setElementProperty(this.selectElement[0], 'disabled', !!this.disabled);
                    this.updateMaterialSelect();
                }
            };
        /**
         * @return {?}
         */
        MzSelectDirective.prototype.handleLabel = /**
         * @return {?}
         */
            function () {
                if (this.label != null) {
                    this.renderer.invokeElementMethod(this.labelElement, 'text', [this.label]);
                }
            };
        /**
         * @return {?}
         */
        MzSelectDirective.prototype.handleFilledIn = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.checkboxElements.length > 0) {
                    this.checkboxElements.toArray().forEach(function (checkboxElement) {
                        _this.renderer.setElementClass(checkboxElement, 'filled-in', !!_this.filledIn);
                    });
                }
            };
        /**
         * @return {?}
         */
        MzSelectDirective.prototype.handlePlaceholder = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ placeholderElement = this.selectElement.children(':disabled').first();
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
                        var /** @type {?} */ placeholderText = document.createTextNode(this.placeholder);
                        var /** @type {?} */ placeholderOption = document.createElement('option');
                        placeholderOption.disabled = true;
                        placeholderOption.value = null;
                        placeholderOption.appendChild(placeholderText);
                        this.renderer.invokeElementMethod(this.selectElement, 'prepend', [placeholderOption]);
                    }
                }
                this.initMaterialSelect();
            };
        /**
         * @return {?}
         */
        MzSelectDirective.prototype.listenOptionChanges = /**
         * @return {?}
         */
            function () {
                var _this = this;
                var /** @type {?} */ mutationObserverConfiguration = {
                    childList: true,
                    subtree: true,
                };
                this.mutationObserver = new MutationObserver(function (mutations) {
                    _this.updateMaterialSelect();
                });
                this.mutationObserver.observe(this.selectElement[0], mutationObserverConfiguration);
            };
        /**
         * @return {?}
         */
        MzSelectDirective.prototype.updateMaterialSelect = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.initMaterialSelect();
                if (this.filledIn) {
                    this.initFilledIn();
                }
                this.handleDOMEvents();
                // wait for materialize select to be initialized
                // /!\ race condition warning /!\
                setTimeout(function () { return _this.update.emit(); });
            };
        MzSelectDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: 'select[mzSelect], select[mz-select]',
                    },] },
        ];
        /** @nocollapse */
        MzSelectDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef, },
                { type: core.ChangeDetectorRef, },
                { type: core.Renderer, },
            ];
        };
        MzSelectDirective.propDecorators = {
            "id": [{ type: core.Input },],
            "disabled": [{ type: core.Input },],
            "placeholder": [{ type: core.Input },],
            "label": [{ type: core.Input },],
            "filledIn": [{ type: core.Input },],
            "update": [{ type: core.Output },],
        };
        return MzSelectDirective;
    }(HandlePropChanges));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzSelectContainerComponent = (function () {
        function MzSelectContainerComponent() {
        }
        /**
         * @return {?}
         */
        MzSelectContainerComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                this.initControlSubscription();
                this.initSelectSubscription();
            };
        /**
         * @return {?}
         */
        MzSelectContainerComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.removeControlSubscription();
                this.removeSelectSubscription();
            };
        /**
         * @return {?}
         */
        MzSelectContainerComponent.prototype.initControlSubscription = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.ngControl) {
                    this.mzSelectDirective.disabled = this.ngControl.control.disabled;
                    this.statusChangesSubscription = this.ngControl.control.statusChanges.subscribe(function (status) {
                        // to handle enabling/disabling formControl
                        var /** @type {?} */ disabled = status === 'DISABLED';
                        if (disabled !== _this.mzSelectDirective.disabled) {
                            _this.mzSelectDirective.disabled = disabled;
                            _this.mzSelectDirective.handleDisabled();
                        }
                    });
                    this.selectValueSubscription = this.ngControl.valueChanges.subscribe(function (value) {
                        // to synchronize input and select when value changes programmatically
                        var /** @type {?} */ isDropdownOpen = _this.mzSelectDirective.inputElement.hasClass('active');
                        var /** @type {?} */ inputValue = _this.mzSelectDirective.inputElement.val();
                        var /** @type {?} */ options = _this.mzSelectDirective.selectElement.children('option');
                        var /** @type {?} */ selectedOptions = options.filter('option:selected').toArray();
                        var /** @type {?} */ disabledOptions = options.filter(':disabled').toArray();
                        var /** @type {?} */ selectedOptionText = selectedOptions.length === 0
                            ? disabledOptions.map(function (option) { return option.textContent; })[0]
                            : selectedOptions.map(function (option) { return option.textContent; }).join(', ');
                        if (inputValue !== selectedOptionText && !isDropdownOpen) {
                            _this.mzSelectDirective.updateMaterialSelect();
                        }
                    });
                }
            };
        /**
         * @return {?}
         */
        MzSelectContainerComponent.prototype.initSelectSubscription = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.mzSelectDirective) {
                    this.mzSelectDirective.update
                        .subscribe(function () { return _this.registerOnBlur(); })
                        .next();
                }
            };
        /**
         * @return {?}
         */
        MzSelectContainerComponent.prototype.registerOnBlur = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.mzSelectDirective.inputElement.on('blur', function () {
                    if (_this.ngControl) {
                        _this.ngControl.control.markAsTouched();
                    }
                    if (_this.mzValidationComponent) {
                        _this.mzValidationComponent.setValidationState();
                    }
                });
            };
        /**
         * @return {?}
         */
        MzSelectContainerComponent.prototype.removeControlSubscription = /**
         * @return {?}
         */
            function () {
                if (this.mzSelectDirective) {
                    this.mzSelectDirective.update.unsubscribe();
                    this.mzSelectDirective.inputElement.off();
                }
            };
        /**
         * @return {?}
         */
        MzSelectContainerComponent.prototype.removeSelectSubscription = /**
         * @return {?}
         */
            function () {
                if (this.statusChangesSubscription) {
                    this.statusChangesSubscription.unsubscribe();
                }
                if (this.selectValueSubscription) {
                    this.selectValueSubscription.unsubscribe();
                }
            };
        MzSelectContainerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'mz-select-container',
                        template: "<div\n  class=\"input-field\"\n  [class.inline]=\"inline\"\n>\n  <ng-content></ng-content>\n</div>",
                        styles: [".input-field:not(.inline){display:block}/deep/ .input-field .dropdown-content [type=checkbox]+label{top:-11px}"],
                    },] },
        ];
        /** @nocollapse */
        MzSelectContainerComponent.propDecorators = {
            "inline": [{ type: core.Input },],
            "mzSelectDirective": [{ type: core.ContentChild, args: [MzSelectDirective,] },],
            "mzValidationComponent": [{ type: core.ContentChild, args: [MzValidationComponent,] },],
            "ngControl": [{ type: core.ContentChild, args: [forms.NgControl,] },],
        };
        return MzSelectContainerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzSelectModule = (function () {
        function MzSelectModule() {
        }
        MzSelectModule.decorators = [
            { type: core.NgModule, args: [{
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
        return MzSelectModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzSidenavCollapsibleHeaderComponent = (function (_super) {
        tslib_1.__extends(MzSidenavCollapsibleHeaderComponent, _super);
        function MzSidenavCollapsibleHeaderComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MzSidenavCollapsibleHeaderComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'mz-sidenav-collapsible-header',
                        template: "<a class=\"collapsible-header waves-effect\"><ng-content></ng-content></a>",
                        styles: [""],
                    },] },
        ];
        return MzSidenavCollapsibleHeaderComponent;
    }(MzRemoveComponentHost));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzSidenavCollapsibleComponent = (function () {
        function MzSidenavCollapsibleComponent(changeDetectorRef, renderer) {
            this.changeDetectorRef = changeDetectorRef;
            this.renderer = renderer;
        }
        /**
         * @return {?}
         */
        MzSidenavCollapsibleComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                this.initCollapsible();
            };
        /**
         * @return {?}
         */
        MzSidenavCollapsibleComponent.prototype.initCollapsible = /**
         * @return {?}
         */
            function () {
                var _this = this;
                var /** @type {?} */ options = {
                    accordion: false,
                    onClose: this.onClose,
                    onOpen: this.onOpen,
                };
                // need setTimeout otherwise loading directly on the page cause an error
                setTimeout(function () { return _this.renderer.invokeElementMethod($(_this.collapsible.nativeElement), 'collapsible', [options]); });
                this.changeDetectorRef.detectChanges();
            };
        MzSidenavCollapsibleComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'mz-sidenav-collapsible',
                        template: "<li>\n  <ul #collapsible class=\"collapsible collapsible-accordion\">\n    <li>\n      <ng-content select=\"mz-sidenav-collapsible-header\"></ng-content>\n      <div class=\"collapsible-body\">\n        <ul>\n          <ng-content select=\"mz-sidenav-collapsible-content\"></ng-content>\n        </ul>\n      </div>\n    </li>\n  </ul>\n</li>",
                        styles: [":host /deep/ .collapsible-header{padding:0 32px}:host /deep/ .collapsible-header i{color:rgba(0,0,0,.54)}:host /deep/ .collapsible-body li a{font-weight:initial}"],
                    },] },
        ];
        /** @nocollapse */
        MzSidenavCollapsibleComponent.ctorParameters = function () {
            return [
                { type: core.ChangeDetectorRef, },
                { type: core.Renderer, },
            ];
        };
        MzSidenavCollapsibleComponent.propDecorators = {
            "onClose": [{ type: core.Input },],
            "onOpen": [{ type: core.Input },],
            "collapsible": [{ type: core.ViewChild, args: ['collapsible',] },],
            "header": [{ type: core.ContentChild, args: [MzSidenavCollapsibleHeaderComponent,] },],
        };
        return MzSidenavCollapsibleComponent;
    }());
    var MzSidenavCollapsibleContentDirective = (function () {
        function MzSidenavCollapsibleContentDirective() {
        }
        MzSidenavCollapsibleContentDirective.decorators = [
            { type: core.Directive, args: [{ selector: 'mz-sidenav-collapsible-content' },] },
        ];
        return MzSidenavCollapsibleContentDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzSidenavDividerComponent = (function () {
        function MzSidenavDividerComponent() {
        }
        MzSidenavDividerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'mz-sidenav-divider',
                        template: "<li>\n  <div class=\"divider\"></div>\n</li>",
                        styles: [".divider{margin-bottom:8px}"],
                    },] },
        ];
        return MzSidenavDividerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzSidenavHeaderComponent = (function () {
        function MzSidenavHeaderComponent() {
        }
        MzSidenavHeaderComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'mz-sidenav-header',
                        template: "<li class=\"sidenav-header\">\n  <ng-content></ng-content>\n</li>",
                        styles: [".sidenav-header{margin-bottom:8px}"],
                    },] },
        ];
        return MzSidenavHeaderComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzSidenavLinkComponent = (function () {
        function MzSidenavLinkComponent() {
        }
        MzSidenavLinkComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'mz-sidenav-link',
                        template: "<li\n  [class.active]=\"active\"\n>\n  <ng-content></ng-content>\n</li>\n",
                        styles: [":host /deep/ a[class*=mdi-]::before{color:rgba(0,0,0,.54);margin:-1px 32px 0 0;vertical-align:middle}:host /deep/ a i,:host /deep/ a i.material-icons,:host /deep/ a i[class*=mdi-]{margin-top:-1px}:host /deep/ a i.material-icons::before,:host /deep/ a i::before,:host /deep/ a i[class*=mdi-]::before{vertical-align:middle}"],
                        encapsulation: core.ViewEncapsulation.Emulated,
                    },] },
        ];
        /** @nocollapse */
        MzSidenavLinkComponent.propDecorators = {
            "active": [{ type: core.Input },],
        };
        return MzSidenavLinkComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzSidenavSubheaderComponent = (function () {
        function MzSidenavSubheaderComponent() {
        }
        MzSidenavSubheaderComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'mz-sidenav-subheader',
                        template: "<li>\n  <a class=\"subheader\">\n    <ng-content></ng-content>\n  </a>\n</li>",
                        styles: [""],
                    },] },
        ];
        return MzSidenavSubheaderComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzSidenavComponent = (function () {
        function MzSidenavComponent() {
            this._opened = false;
        }
        Object.defineProperty(MzSidenavComponent.prototype, "opened", {
            get: /**
             * @return {?}
             */ function () { return this._opened; },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._opened = value;
                this.collapseButton.sideNav(this._opened ? 'show' : 'hide');
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        MzSidenavComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                this.initCollapseButton();
                this.initCollapsibleLinks();
            };
        /**
         * @return {?}
         */
        MzSidenavComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.collapseButton.sideNav('destroy');
            };
        /**
         * @return {?}
         */
        MzSidenavComponent.prototype.initCollapseButton = /**
         * @return {?}
         */
            function () {
                var _this = this;
                // fake button if no collapseButtonId is provided
                this.collapseButton = this.collapseButtonId
                    ? $("#" + this.collapseButtonId)
                    : $(document.createElement('template'));
                // add data-activates to collapse button
                this.collapseButton.attr('data-activates', this.id);
                // extend onOpen function to update opened state
                var /** @type {?} */ onOpen = this.onOpen || (function () { });
                this.onOpen = function () {
                    onOpen();
                    _this._opened = true;
                };
                // extend onClose function to update opened state
                var /** @type {?} */ onClose = this.onClose || (function () { });
                this.onClose = function () {
                    onClose();
                    _this._opened = false;
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
            };
        /**
         * @return {?}
         */
        MzSidenavComponent.prototype.initCollapsibleLinks = /**
         * @return {?}
         */
            function () {
                // initialize collapsible elements
                $("#" + this.id + " .collapsible").collapsible();
            };
        MzSidenavComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'mz-sidenav',
                        template: "<ul class=\"side-nav {{ backgroundClass }}\"\n  [attr.id]=\"id\"\n  [class.fixed]=\"fixed\">\n  <ng-content></ng-content>\n</ul>",
                    },] },
        ];
        /** @nocollapse */
        MzSidenavComponent.propDecorators = {
            "backgroundClass": [{ type: core.Input },],
            "closeOnClick": [{ type: core.Input },],
            "collapseButtonId": [{ type: core.Input },],
            "draggable": [{ type: core.Input },],
            "edge": [{ type: core.Input },],
            "fixed": [{ type: core.Input },],
            "id": [{ type: core.Input },],
            "onClose": [{ type: core.Input },],
            "onOpen": [{ type: core.Input },],
            "width": [{ type: core.Input },],
        };
        return MzSidenavComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzSidenavModule = (function () {
        function MzSidenavModule() {
        }
        MzSidenavModule.decorators = [
            { type: core.NgModule, args: [{
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
        return MzSidenavModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzSpinnerComponent = (function () {
        function MzSpinnerComponent() {
        }
        MzSpinnerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'mz-spinner',
                        template: " <div class=\"preloader-wrapper active {{ size }}\">\n\n    <div\n      class=\"spinner-layer\"\n      [class.spinner-red-only]=\"color === 'red'\"\n      [class.spinner-green-only]=\"color === 'green'\"\n      [class.spinner-blue-only]=\"color === 'blue'\"\n      [class.spinner-yellow-only]=\"color === 'yellow'\">\n\n      <div class=\"circle-clipper left\">\n        <div class=\"circle\"></div>\n      </div>\n\n      <div class=\"gap-patch\">\n        <div class=\"circle\"></div>\n      </div>\n\n      <div class=\"circle-clipper right\">\n        <div class=\"circle\"></div>\n      </div>\n    </div>\n  </div>",
                        styles: [""],
                    },] },
        ];
        /** @nocollapse */
        MzSpinnerComponent.propDecorators = {
            "color": [{ type: core.Input },],
            "size": [{ type: core.Input },],
        };
        return MzSpinnerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzSpinnerModule = (function () {
        function MzSpinnerModule() {
        }
        MzSpinnerModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [MzSpinnerComponent],
                        exports: [MzSpinnerComponent],
                    },] },
        ];
        return MzSpinnerModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzSwitchDirective = (function () {
        function MzSwitchDirective(elementRef, renderer) {
            this.elementRef = elementRef;
            this.renderer = renderer;
        }
        /**
         * @return {?}
         */
        MzSwitchDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.initElements();
                this.handleInputType();
            };
        /**
         * @return {?}
         */
        MzSwitchDirective.prototype.initElements = /**
         * @return {?}
         */
            function () {
                this.switchElement = $(this.elementRef.nativeElement);
                this.switchContainerElement = $(this.elementRef.nativeElement).parent('label').parent('.switch');
                if (this.switchContainerElement.length === 0) {
                    console.error('Input with mz-switch directive must be placed inside an [mz-switch-container] tag', this.switchElement);
                    return;
                }
            };
        /**
         * @return {?}
         */
        MzSwitchDirective.prototype.handleInputType = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ type = this.switchElement.attr('type');
                if (type !== 'checkbox') {
                    this.renderer.setElementAttribute(this.switchElement[0], 'type', 'checkbox');
                }
            };
        MzSwitchDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[mzSwitch], [mz-switch]',
                    },] },
        ];
        /** @nocollapse */
        MzSwitchDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef, },
                { type: core.Renderer, },
            ];
        };
        MzSwitchDirective.propDecorators = {
            "off": [{ type: core.Input },],
            "on": [{ type: core.Input },],
        };
        return MzSwitchDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzSwitchContainerComponent = (function () {
        function MzSwitchContainerComponent() {
        }
        MzSwitchContainerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'mz-switch-container',
                        template: "<div class=\"switch\">\n  <label>\n    <span class=\"off\">{{ mzSwitchDirective?.off }}</span>\n    <ng-content></ng-content>\n    <span class=\"lever\"></span>\n    <span class=\"on\">{{ mzSwitchDirective?.on }}</span>\n  </label>\n</div>",
                        styles: [""],
                    },] },
        ];
        /** @nocollapse */
        MzSwitchContainerComponent.propDecorators = {
            "mzSwitchDirective": [{ type: core.ContentChild, args: [MzSwitchDirective,] },],
        };
        return MzSwitchContainerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzSwitchModule = (function () {
        function MzSwitchModule() {
        }
        MzSwitchModule.decorators = [
            { type: core.NgModule, args: [{
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
        return MzSwitchModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzTabItemComponent = (function () {
        function MzTabItemComponent() {
        }
        Object.defineProperty(MzTabItemComponent.prototype, "link", {
            get: /**
             * @return {?}
             */ function () {
                return this.tabItemId ? this.tabItemId : this.label.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
            },
            enumerable: true,
            configurable: true
        });
        MzTabItemComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'mz-tab-item',
                        template: "<div id=\"{{ link }}\" class=\"{{ class }}\">\n  <ng-content></ng-content>\n</div>",
                        styles: [""],
                    },] },
        ];
        /** @nocollapse */
        MzTabItemComponent.propDecorators = {
            "active": [{ type: core.Input },],
            "class": [{ type: core.Input },],
            "disabled": [{ type: core.Input },],
            "href": [{ type: core.Input },],
            "label": [{ type: core.Input },],
            "tabItemId": [{ type: core.Input },],
            "target": [{ type: core.Input },],
        };
        return MzTabItemComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzTabComponent = (function () {
        function MzTabComponent() {
        }
        /**
         * @return {?}
         */
        MzTabComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                this.initTabs();
            };
        /**
         * @return {?}
         */
        MzTabComponent.prototype.initTabs = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ options = {
                    onShow: this.onShow,
                    responsiveThreshold: this.responsiveThreshold,
                    swipeable: this.swipeable,
                };
                $(this.tabs.nativeElement).tabs(options);
            };
        /**
         * @param {?} tabItemId
         * @return {?}
         */
        MzTabComponent.prototype.selectTab = /**
         * @param {?} tabItemId
         * @return {?}
         */
            function (tabItemId) {
                $(this.tabs.nativeElement).tabs('select_tab', tabItemId);
            };
        MzTabComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'mz-tab',
                        template: "<ul #tabs\n  class=\"tabs\"\n  [class.tabs-fixed-width]=\"fixedTabWidth\">\n  <li class=\"tab\" [class.disabled]=\"tabItem.disabled\" *ngFor=\"let tabItem of tabItems.toArray()\">\n    <a [class.active]=\"tabItem.active\"\n      href=\"{{ tabItem.href ? tabItem.href : '#' + tabItem.link }}\" target=\"{{ tabItem.target }}\">\n      {{ tabItem.label }}\n    </a>\n  </li>\n</ul>\n<div>\n  <ng-content select=\"mz-tab-item\"></ng-content>\n</div>",
                        styles: [""],
                    },] },
        ];
        /** @nocollapse */
        MzTabComponent.propDecorators = {
            "fixedTabWidth": [{ type: core.Input },],
            "onShow": [{ type: core.Input },],
            "responsiveThreshold": [{ type: core.Input },],
            "swipeable": [{ type: core.Input },],
            "tabs": [{ type: core.ViewChild, args: ['tabs',] },],
            "tabItems": [{ type: core.ContentChildren, args: [MzTabItemComponent,] },],
        };
        return MzTabComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzTabModule = (function () {
        function MzTabModule() {
        }
        MzTabModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
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
        return MzTabModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzTextareaContainerComponent = (function () {
        function MzTextareaContainerComponent() {
        }
        MzTextareaContainerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'mz-textarea-container',
                        template: "<div\n  class=\"input-field\"\n  [class.inline]=\"inline\"\n>\n  <ng-content></ng-content>\n</div>",
                        styles: [":host /deep/ textarea{display:block}.input-field:not(.inline){display:block}"],
                    },] },
        ];
        /** @nocollapse */
        MzTextareaContainerComponent.propDecorators = {
            "inline": [{ type: core.Input },],
        };
        return MzTextareaContainerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzTextareaPrefixDirective = (function () {
        function MzTextareaPrefixDirective(elementRef, renderer) {
            this.elementRef = elementRef;
            this.renderer = renderer;
        }
        /**
         * @return {?}
         */
        MzTextareaPrefixDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.renderer.setElementClass(this.elementRef.nativeElement, 'prefix', true);
            };
        MzTextareaPrefixDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: 'i[mzTextareaPrefix], i[mz-textarea-prefix]',
                    },] },
        ];
        /** @nocollapse */
        MzTextareaPrefixDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef, },
                { type: core.Renderer, },
            ];
        };
        return MzTextareaPrefixDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzTextareaDirective = (function (_super) {
        tslib_1.__extends(MzTextareaDirective, _super);
        function MzTextareaDirective(ngControl, elementRef, renderer) {
            var _this = _super.call(this) || this;
            _this.ngControl = ngControl;
            _this.elementRef = elementRef;
            _this.renderer = renderer;
            return _this;
        }
        /**
         * @return {?}
         */
        MzTextareaDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.initHandlers();
                this.initElements();
                this.initTextareaSubscription();
                this.handleProperties();
            };
        /**
         * @return {?}
         */
        MzTextareaDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this.textareaValueSubscription) {
                    this.textareaValueSubscription.unsubscribe();
                }
            };
        /**
         * @return {?}
         */
        MzTextareaDirective.prototype.initHandlers = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.handlers = {
                    label: function () { return _this.handleLabel(); },
                    length: function () { return _this.handleLength(); },
                    placeholder: function () { return _this.handlePlaceholder(); },
                };
            };
        /**
         * @return {?}
         */
        MzTextareaDirective.prototype.initElements = /**
         * @return {?}
         */
            function () {
                this.textareaElement = $(this.elementRef.nativeElement);
                this.textareaContainerElement = $(this.elementRef.nativeElement).parent('.input-field');
                this.labelElement = this.createLabelElement();
                this.initTextarea();
            };
        /**
         * @return {?}
         */
        MzTextareaDirective.prototype.initTextarea = /**
         * @return {?}
         */
            function () {
                this.renderer.setElementClass(this.textareaElement[0], 'materialize-textarea', true);
            };
        /**
         * @return {?}
         */
        MzTextareaDirective.prototype.initTextareaSubscription = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.ngControl) {
                    this.textareaValueSubscription = this.ngControl.valueChanges.subscribe(function () { return _this.setLabelActive(); });
                }
            };
        /**
         * @return {?}
         */
        MzTextareaDirective.prototype.createLabelElement = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ labelElement = document.createElement('label');
                labelElement.setAttribute('for', this.id);
                this.renderer.invokeElementMethod(this.textareaElement, 'after', [labelElement]);
                return $(labelElement);
            };
        /**
         * @return {?}
         */
        MzTextareaDirective.prototype.handleProperties = /**
         * @return {?}
         */
            function () {
                if (this.textareaContainerElement.length === 0) {
                    console.error('Textarea must be placed inside a [mz-textarea-container] tag', this.textareaElement);
                    return;
                }
                _super.prototype.executePropHandlers.call(this);
            };
        /**
         * @return {?}
         */
        MzTextareaDirective.prototype.handleLabel = /**
         * @return {?}
         */
            function () {
                if (this.placeholder || this.textareaElement.val()) {
                    this.renderer.setElementClass(this.labelElement[0], 'active', true);
                }
                this.renderer.invokeElementMethod(this.labelElement, 'text', [this.label]);
            };
        /**
         * @return {?}
         */
        MzTextareaDirective.prototype.handleLength = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ length = this.length ? this.length.toString() : null;
                this.renderer.setElementAttribute(this.textareaElement[0], 'data-length', length);
                if (length) {
                    this.setCharacterCount();
                }
                else {
                    this.removeCharacterCount();
                }
            };
        /**
         * @return {?}
         */
        MzTextareaDirective.prototype.handlePlaceholder = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ placeholder = !!this.placeholder ? this.placeholder : null;
                this.renderer.setElementAttribute(this.textareaElement[0], 'placeholder', placeholder);
                this.setLabelActive();
            };
        /**
         * @return {?}
         */
        MzTextareaDirective.prototype.setCharacterCount = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.renderer.invokeElementMethod(this.textareaElement, 'characterCounter');
                // force validation
                // need setTimeout otherwise it wont trigger validation right away
                setTimeout(function () {
                    _this.renderer.invokeElementMethod(_this.textareaElement, 'trigger', ['input']);
                    _this.renderer.invokeElementMethod(_this.textareaElement, 'trigger', ['blur']);
                });
            };
        /**
         * @return {?}
         */
        MzTextareaDirective.prototype.setLabelActive = /**
         * @return {?}
         */
            function () {
                var _this = this;
                // need setTimeout otherwise it wont make label float in some circonstances
                // for example: forcing validation for example, reseting form programmaticaly, ...
                setTimeout(function () {
                    var /** @type {?} */ textareaValue = ((_this.textareaElement[0])).value;
                    var /** @type {?} */ isActive = !!_this.placeholder || !!textareaValue;
                    _this.renderer.setElementClass(_this.labelElement[0], 'active', isActive);
                });
            };
        /**
         * @return {?}
         */
        MzTextareaDirective.prototype.removeCharacterCount = /**
         * @return {?}
         */
            function () {
                this.renderer.invokeElementMethod(this.textareaElement.siblings('.character-counter'), 'remove');
                this.removeValidationClasses();
            };
        /**
         * @return {?}
         */
        MzTextareaDirective.prototype.removeValidationClasses = /**
         * @return {?}
         */
            function () {
                // reset valid/invalid state
                this.renderer.setElementClass(this.textareaElement[0], 'invalid', false);
                this.renderer.setElementClass(this.textareaElement[0], 'valid', false);
            };
        MzTextareaDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: 'textarea[mzTextarea], textarea[mz-textarea]',
                    },] },
        ];
        /** @nocollapse */
        MzTextareaDirective.ctorParameters = function () {
            return [
                { type: forms.NgControl, decorators: [{ type: core.Optional },] },
                { type: core.ElementRef, },
                { type: core.Renderer, },
            ];
        };
        MzTextareaDirective.propDecorators = {
            "id": [{ type: core.Input },],
            "placeholder": [{ type: core.Input },],
            "label": [{ type: core.Input },],
            "length": [{ type: core.Input },],
        };
        return MzTextareaDirective;
    }(HandlePropChanges));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzTextareaModule = (function () {
        function MzTextareaModule() {
        }
        MzTextareaModule.decorators = [
            { type: core.NgModule, args: [{
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
        return MzTextareaModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzTimepickerContainerComponent = (function () {
        function MzTimepickerContainerComponent() {
        }
        MzTimepickerContainerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'mz-timepicker-container',
                        template: "<div\n  class=\"input-field\"\n  [class.inline]=\"inline\"\n>\n  <ng-content></ng-content>\n</div>",
                        styles: [""],
                    },] },
        ];
        /** @nocollapse */
        MzTimepickerContainerComponent.propDecorators = {
            "inline": [{ type: core.Input },],
        };
        return MzTimepickerContainerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzTimepickerDirective = (function (_super) {
        tslib_1.__extends(MzTimepickerDirective, _super);
        function MzTimepickerDirective(ngControl, changeDetectorRef, elementRef, renderer, zone) {
            var _this = _super.call(this) || this;
            _this.ngControl = ngControl;
            _this.changeDetectorRef = changeDetectorRef;
            _this.elementRef = elementRef;
            _this.renderer = renderer;
            _this.zone = zone;
            // materialize uses ClockPicker to create the timepicker
            // complete list of options is available at the following address
            // https://github.com/weareoutman/clockpicker#options
            _this.options = {};
            _this.stopChangePropagation = false;
            return _this;
        }
        Object.defineProperty(MzTimepickerDirective.prototype, "clockpicker", {
            get: /**
             * @return {?}
             */ function () {
                return $('.clockpicker');
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        MzTimepickerDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.initHandlers();
                this.initElements();
                this.initTimepicker();
                this.handleProperties();
            };
        /**
         * @return {?}
         */
        MzTimepickerDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                // remove event handlers
                this.inputElement.off();
                // remove clockpicker added to body by default
                this.clockpicker.remove();
            };
        /**
         * @return {?}
         */
        MzTimepickerDirective.prototype.initHandlers = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.handlers = {
                    label: function () { return _this.handleLabel(); },
                    placeholder: function () { return _this.handlePlaceholder(); },
                };
            };
        /**
         * @return {?}
         */
        MzTimepickerDirective.prototype.initElements = /**
         * @return {?}
         */
            function () {
                this.inputContainerElement = /** @type {?} */ ($(this.elementRef.nativeElement).parent('.input-field'));
                this.inputElement = /** @type {?} */ ($(this.elementRef.nativeElement));
                this.labelElement = /** @type {?} */ (this.createLabelElement());
            };
        /**
         * @return {?}
         */
        MzTimepickerDirective.prototype.initTimepicker = /**
         * @return {?}
         */
            function () {
                var _this = this;
                // append clockpicker to body by default
                if (!this.options.container) {
                    this.options.container = 'body';
                }
                // extend afterHide callback to set label active
                var /** @type {?} */ afterHide = this.options && this.options.afterHide || (function () { });
                this.options = Object.assign({}, this.options, {
                    afterHide: function () {
                        afterHide();
                        _this.setLabelActive();
                    },
                });
                this.renderer.invokeElementMethod(this.inputElement, 'pickatime', [this.options]);
                if (this.ngControl) {
                    // set ngControl value according to selected time in timepicker
                    this.inputElement.on('change', function (event) {
                        _this.ngControl.control.setValue(event.target.value);
                        // mark for change detection
                        // fix form validation with ChangeDetectionStrategy.OnPush
                        // mark for change detection
                        // fix form validation with ChangeDetectionStrategy.OnPush
                        _this.changeDetectorRef.markForCheck();
                    });
                }
            };
        /**
         * @return {?}
         */
        MzTimepickerDirective.prototype.createLabelElement = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ labelElement = document.createElement('label');
                labelElement.setAttribute('for', this.id);
                this.renderer.invokeElementMethod(this.inputElement, 'after', [labelElement]);
                return $(labelElement);
            };
        /**
         * @return {?}
         */
        MzTimepickerDirective.prototype.handleProperties = /**
         * @return {?}
         */
            function () {
                if (this.inputContainerElement.length === 0) {
                    console.error('Input with mz-timepicker directive must be placed inside an [mz-timepicker-container] tag', this.inputElement);
                    return;
                }
                _super.prototype.executePropHandlers.call(this);
            };
        /**
         * @return {?}
         */
        MzTimepickerDirective.prototype.handleLabel = /**
         * @return {?}
         */
            function () {
                this.renderer.invokeElementMethod(this.labelElement, 'text', [this.label]);
            };
        /**
         * @return {?}
         */
        MzTimepickerDirective.prototype.handlePlaceholder = /**
         * @return {?}
         */
            function () {
                var _this = this;
                var /** @type {?} */ placeholder = !!this.placeholder ? this.placeholder : null;
                this.renderer.setElementAttribute(this.inputElement[0], 'placeholder', placeholder);
                // fix issue in IE where having a placeholder on input make control dirty and trigger validation
                // on page load... note that it still trigger validation on focus and would need a better fix
                // issue : https://github.com/angular/angular/issues/15299
                // workaround : https://stackoverflow.com/a/44967245/5583283
                if (this.ngControl) {
                    this.zone.runOutsideAngular(function () {
                        setTimeout(function () { return _this.ngControl.control.markAsPristine(); });
                    });
                }
                this.setLabelActive();
            };
        /**
         * @return {?}
         */
        MzTimepickerDirective.prototype.setLabelActive = /**
         * @return {?}
         */
            function () {
                var _this = this;
                // need wait for zone to be stable otherwise it wont make label
                // float in some circonstances (clearing value programmatically for example)
                this.zone.onStable
                    .pipe(operators.first())
                    .subscribe(function () {
                    var /** @type {?} */ inputValue = _this.inputElement[0].value;
                    var /** @type {?} */ isActive = !!_this.placeholder || !!inputValue;
                    _this.renderer.setElementClass(_this.labelElement[0], 'active', isActive);
                });
            };
        MzTimepickerDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: 'input[mzTimepicker], input[mz-timepicker]',
                    },] },
        ];
        /** @nocollapse */
        MzTimepickerDirective.ctorParameters = function () {
            return [
                { type: forms.NgControl, decorators: [{ type: core.Optional },] },
                { type: core.ChangeDetectorRef, },
                { type: core.ElementRef, },
                { type: core.Renderer, },
                { type: core.NgZone, },
            ];
        };
        MzTimepickerDirective.propDecorators = {
            "true": [{ type: core.HostBinding, args: ['class.timepicker',] },],
            "id": [{ type: core.Input },],
            "placeholder": [{ type: core.Input },],
            "label": [{ type: core.Input },],
            "options": [{ type: core.Input },],
        };
        return MzTimepickerDirective;
    }(HandlePropChanges));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzTimepickerModule = (function () {
        function MzTimepickerModule() {
        }
        MzTimepickerModule.decorators = [
            { type: core.NgModule, args: [{
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
        return MzTimepickerModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzToastService = (function () {
        function MzToastService() {
        }
        /**
         * @param {?} message
         * @param {?} displayLength
         * @param {?=} className
         * @param {?=} completeCallback
         * @return {?}
         */
        MzToastService.prototype.show = /**
         * @param {?} message
         * @param {?} displayLength
         * @param {?=} className
         * @param {?=} completeCallback
         * @return {?}
         */
            function (message, displayLength, className, completeCallback) {
                Materialize.toast(message, displayLength, className, completeCallback);
            };
        MzToastService.decorators = [
            { type: core.Injectable },
        ];
        return MzToastService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzToastModule = (function () {
        function MzToastModule() {
        }
        MzToastModule.decorators = [
            { type: core.NgModule, args: [{
                        providers: [MzToastService],
                    },] },
        ];
        return MzToastModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzTooltipDirective = (function () {
        function MzTooltipDirective(elementRef, renderer) {
            this.elementRef = elementRef;
            this.renderer = renderer;
        }
        /**
         * @return {?}
         */
        MzTooltipDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.initElements();
            };
        /**
         * @return {?}
         */
        MzTooltipDirective.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                if (this.elementRef.nativeElement.getAttribute('type') === 'checkbox') {
                    this.targetElement = $(this.elementRef.nativeElement).next('label');
                }
                this.initTooltip();
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        MzTooltipDirective.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (this.targetElement) {
                    this.initTooltip();
                }
            };
        /**
         * @return {?}
         */
        MzTooltipDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.renderer.invokeElementMethod(this.targetElement, 'tooltip', ['remove']);
            };
        /**
         * @return {?}
         */
        MzTooltipDirective.prototype.initElements = /**
         * @return {?}
         */
            function () {
                this.targetElement = $(this.elementRef.nativeElement);
            };
        /**
         * @return {?}
         */
        MzTooltipDirective.prototype.initTooltip = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ tooltipOptions = {
                    delay: isNaN(this.delay) || this.delay == null ? 350 : this.delay,
                    html: this.html || false,
                    position: this.position || 'bottom',
                    tooltip: this.tooltip,
                };
                this.renderer.invokeElementMethod(this.targetElement, 'tooltip', [tooltipOptions]);
            };
        MzTooltipDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[mzTooltip], [mz-tooltip]',
                    },] },
        ];
        /** @nocollapse */
        MzTooltipDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef, },
                { type: core.Renderer, },
            ];
        };
        MzTooltipDirective.propDecorators = {
            "delay": [{ type: core.Input },],
            "html": [{ type: core.Input },],
            "position": [{ type: core.Input },],
            "tooltip": [{ type: core.Input },],
        };
        return MzTooltipDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzTooltipModule = (function () {
        function MzTooltipModule() {
        }
        MzTooltipModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [MzTooltipDirective],
                        exports: [MzTooltipDirective],
                    },] },
        ];
        return MzTooltipModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MzValidationModule = (function () {
        function MzValidationModule() {
        }
        MzValidationModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
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
        return MzValidationModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ MZ_MODULES = [
        common.CommonModule,
        forms.FormsModule,
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
    var MaterializeModule = (function () {
        function MaterializeModule() {
        }
        /**
         * @return {?}
         */
        MaterializeModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: MaterializeModule,
                };
            };
        MaterializeModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: MZ_MODULES,
                        exports: MZ_MODULES,
                    },] },
        ];
        return MaterializeModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @abstract
     */
    var /**
     * @abstract
     */ MatchOperator = (function () {
        function MatchOperator() {
        }
        return MatchOperator;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @abstract
     */
    var /**
     * @abstract
     */ Media = (function () {
        function Media() {
        }
        return Media;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @abstract
     */
    var /**
     * @abstract
     */ MediaBreakpoint = (function () {
        function MediaBreakpoint() {
        }
        return MediaBreakpoint;
    }());

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
    var MzBaseModal = (function () {
        function MzBaseModal() {
        }
        /**
         * @return {?}
         */
        MzBaseModal.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                this.modalComponent.openModal();
            };
        MzBaseModal.propDecorators = {
            "modalComponent": [{ type: core.ViewChild, args: [MzModalComponent,] },],
        };
        return MzBaseModal;
    }());

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

    exports.MzBadgeComponent = MzBadgeComponent;
    exports.MzBadgeModule = MzBadgeModule;
    exports.MzButtonDirective = MzButtonDirective;
    exports.MzButtonModule = MzButtonModule;
    exports.MzHalfwayFabDirective = MzHalfwayFabDirective;
    exports.MzHalfwayFabModule = MzHalfwayFabModule;
    exports.MzCardComponent = MzCardComponent;
    exports.MzCardImageDirective = MzCardImageDirective;
    exports.MzCardImageTitleDirective = MzCardImageTitleDirective;
    exports.MzCardTitleDirective = MzCardTitleDirective;
    exports.MzCardContentDirective = MzCardContentDirective;
    exports.MzCardActionDirective = MzCardActionDirective;
    exports.MzCardModule = MzCardModule;
    exports.MzCheckboxContainerComponent = MzCheckboxContainerComponent;
    exports.MzCheckboxDirective = MzCheckboxDirective;
    exports.MzCheckboxModule = MzCheckboxModule;
    exports.MzChipInputComponent = MzChipInputComponent;
    exports.MzChipComponent = MzChipComponent;
    exports.MzChipModule = MzChipModule;
    exports.MzCollapsibleItemComponent = MzCollapsibleItemComponent;
    exports.MzCollapsibleItemBodyDirective = MzCollapsibleItemBodyDirective;
    exports.MzCollapsibleItemHeaderDirective = MzCollapsibleItemHeaderDirective;
    exports.MzCollapsibleComponent = MzCollapsibleComponent;
    exports.MzCollapsibleModule = MzCollapsibleModule;
    exports.MzAvatarDirective = MzAvatarDirective;
    exports.MzCollectionHeaderComponent = MzCollectionHeaderComponent;
    exports.MzCollectionItemComponent = MzCollectionItemComponent;
    exports.MzCollectionLinkDirective = MzCollectionLinkDirective;
    exports.MzCollectionComponent = MzCollectionComponent;
    exports.MzCollectionModule = MzCollectionModule;
    exports.MzSecondaryContentDirective = MzSecondaryContentDirective;
    exports.MzDatepickerContainerComponent = MzDatepickerContainerComponent;
    exports.MzDatepickerDirective = MzDatepickerDirective;
    exports.MzDatepickerModule = MzDatepickerModule;
    exports.MzDropdownDividerComponent = MzDropdownDividerComponent;
    exports.MzDropdownItemComponent = MzDropdownItemComponent;
    exports.MzDropdownComponent = MzDropdownComponent;
    exports.MzDropdownModule = MzDropdownModule;
    exports.MzFeatureDiscoveryComponent = MzFeatureDiscoveryComponent;
    exports.MzFeatureDiscoveryModule = MzFeatureDiscoveryModule;
    exports.MzIconDirective = MzIconDirective;
    exports.MzIconModule = MzIconModule;
    exports.MzIconMdiDirective = MzIconMdiDirective;
    exports.MzIconMdiModule = MzIconMdiModule;
    exports.MzInputContainerComponent = MzInputContainerComponent;
    exports.MzInputPrefixDirective = MzInputPrefixDirective;
    exports.MzInputDirective = MzInputDirective;
    exports.MzInputModule = MzInputModule;
    exports.MaterializeModule = MaterializeModule;
    exports.MzMediaModule = MzMediaModule;
    exports.MzMediaService = MzMediaService;
    exports.MatchOperator = MatchOperator;
    exports.Media = Media;
    exports.MediaBreakpoint = MediaBreakpoint;
    exports.MzBaseModal = MzBaseModal;
    exports.MzModalCloseDirective = MzModalCloseDirective;
    exports.MzModalComponent = MzModalComponent;
    exports.MzModalHeaderDirective = MzModalHeaderDirective;
    exports.MzModalContentDirective = MzModalContentDirective;
    exports.MzModalFooterDirective = MzModalFooterDirective;
    exports.MzModalModule = MzModalModule;
    exports.MzModalService = MzModalService;
    exports.MzNavbarComponent = MzNavbarComponent;
    exports.MzNavbarModule = MzNavbarModule;
    exports.MzNavbarItemComponent = MzNavbarItemComponent;
    exports.MzNavbarItemContainerComponent = MzNavbarItemContainerComponent;
    exports.MzPaginationPageButtonComponent = MzPaginationPageButtonComponent;
    exports.MzPaginationComponent = MzPaginationComponent;
    exports.MzPaginationModule = MzPaginationModule;
    exports.MzParallaxComponent = MzParallaxComponent;
    exports.MzParallaxModule = MzParallaxModule;
    exports.MzProgressComponent = MzProgressComponent;
    exports.MzProgressModule = MzProgressModule;
    exports.MzRadioButtonContainerComponent = MzRadioButtonContainerComponent;
    exports.MzRadioButtonDirective = MzRadioButtonDirective;
    exports.MzRadioButtonModule = MzRadioButtonModule;
    exports.MzSelectContainerComponent = MzSelectContainerComponent;
    exports.MzSelectDirective = MzSelectDirective;
    exports.MzSelectModule = MzSelectModule;
    exports.Handlers = Handlers;
    exports.HandlePropChanges = HandlePropChanges;
    exports.MzInjectionModule = MzInjectionModule;
    exports.MzInjectionService = MzInjectionService;
    exports.MzRemoveComponentHost = MzRemoveComponentHost;
    exports.MzSidenavComponent = MzSidenavComponent;
    exports.MzSidenavModule = MzSidenavModule;
    exports.MzSidenavCollapsibleHeaderComponent = MzSidenavCollapsibleHeaderComponent;
    exports.MzSidenavCollapsibleComponent = MzSidenavCollapsibleComponent;
    exports.MzSidenavCollapsibleContentDirective = MzSidenavCollapsibleContentDirective;
    exports.MzSidenavDividerComponent = MzSidenavDividerComponent;
    exports.MzSidenavHeaderComponent = MzSidenavHeaderComponent;
    exports.MzSidenavLinkComponent = MzSidenavLinkComponent;
    exports.MzSidenavSubheaderComponent = MzSidenavSubheaderComponent;
    exports.MzSpinnerComponent = MzSpinnerComponent;
    exports.MzSpinnerModule = MzSpinnerModule;
    exports.MzSwitchContainerComponent = MzSwitchContainerComponent;
    exports.MzSwitchDirective = MzSwitchDirective;
    exports.MzSwitchModule = MzSwitchModule;
    exports.MzTabItemComponent = MzTabItemComponent;
    exports.MzTabComponent = MzTabComponent;
    exports.MzTabModule = MzTabModule;
    exports.MzTextareaContainerComponent = MzTextareaContainerComponent;
    exports.MzTextareaPrefixDirective = MzTextareaPrefixDirective;
    exports.MzTextareaDirective = MzTextareaDirective;
    exports.MzTextareaModule = MzTextareaModule;
    exports.MzTimepickerContainerComponent = MzTimepickerContainerComponent;
    exports.MzTimepickerDirective = MzTimepickerDirective;
    exports.MzTimepickerModule = MzTimepickerModule;
    exports.MzToastService = MzToastService;
    exports.MzToastModule = MzToastModule;
    exports.MzTooltipDirective = MzTooltipDirective;
    exports.MzTooltipModule = MzTooltipModule;
    exports.MzErrorMessageComponent = MzErrorMessageComponent;
    exports.ErrorMessageResource = ErrorMessageResource;
    exports.MzValidationComponent = MzValidationComponent;
    exports.MzValidationModule = MzValidationModule;
    exports.ɵa = HandlePropChanges;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hdGVyaWFsaXplLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LW1hdGVyaWFsaXplL3NyYy9iYWRnZS9iYWRnZS5jb21wb25lbnQudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvYmFkZ2UvYmFkZ2UubW9kdWxlLnRzIiwibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvc3JjL3NoYXJlZC9oYW5kbGUtcHJvcC1jaGFuZ2VzLnRzIiwibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvc3JjL3NoYXJlZC9pbmplY3Rpb24vaW5qZWN0aW9uLnNlcnZpY2UudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvc2hhcmVkL2luamVjdGlvbi9pbmplY3Rpb24ubW9kdWxlLnRzIiwibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvc3JjL3NoYXJlZC9yZW1vdmUtY29tcG9uZW50LWhvc3QvcmVtb3ZlLWNvbXBvbmVudC1ob3N0LnRzIiwibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvc3JjL2J1dHRvbi9idXR0b24uZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvc3JjL2J1dHRvbi9idXR0b24ubW9kdWxlLnRzIiwibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvc3JjL2NhcmQvaGFsZndheS1mYWIvaGFsZndheS1mYWIuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvc3JjL2NhcmQvaGFsZndheS1mYWIvaGFsZndheS1mYWIubW9kdWxlLnRzIiwibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvc3JjL2NhcmQvY2FyZC5jb21wb25lbnQudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvY2FyZC9jYXJkLm1vZHVsZS50cyIsIm5nOi8vbmd4LW1hdGVyaWFsaXplL3NyYy9jaGVja2JveC9jaGVja2JveC1jb250YWluZXIvY2hlY2tib3gtY29udGFpbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW1hdGVyaWFsaXplL3NyYy9jaGVja2JveC9jaGVja2JveC5kaXJlY3RpdmUudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvY2hlY2tib3gvY2hlY2tib3gubW9kdWxlLnRzIiwibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvc3JjL2NoaXAvY2hpcC1pbnB1dC9jaGlwLWlucHV0LmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW1hdGVyaWFsaXplL3NyYy9jaGlwL2NoaXAuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvc3JjL2NoaXAvY2hpcC5tb2R1bGUudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvY29sbGFwc2libGUvY29sbGFwc2libGUtaXRlbS9jb2xsYXBzaWJsZS1pdGVtLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW1hdGVyaWFsaXplL3NyYy9jb2xsYXBzaWJsZS9jb2xsYXBzaWJsZS5jb21wb25lbnQudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvY29sbGFwc2libGUvY29sbGFwc2libGUubW9kdWxlLnRzIiwibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvc3JjL2NvbGxlY3Rpb24vYXZhdGFyL2F2YXRhci5kaXJlY3RpdmUudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvY29sbGVjdGlvbi9jb2xsZWN0aW9uLWhlYWRlci9jb2xsZWN0aW9uLWhlYWRlci5jb21wb25lbnQudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvY29sbGVjdGlvbi9jb2xsZWN0aW9uLWl0ZW0vY29sbGVjdGlvbi1pdGVtLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW1hdGVyaWFsaXplL3NyYy9jb2xsZWN0aW9uL2NvbGxlY3Rpb24tbGluay9jb2xsZWN0aW9uLWxpbmsuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvc3JjL2NvbGxlY3Rpb24vY29sbGVjdGlvbi5jb21wb25lbnQudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvY29sbGVjdGlvbi9zZWNvbmRhcnktY29udGVudC9zZWNvbmRhcnktY29udGVudC5kaXJlY3RpdmUudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvY29sbGVjdGlvbi9jb2xsZWN0aW9uLm1vZHVsZS50cyIsIm5nOi8vbmd4LW1hdGVyaWFsaXplL3NyYy9kYXRlcGlja2VyL2RhdGVwaWNrZXItY29udGFpbmVyL2RhdGVwaWNrZXItY29udGFpbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW1hdGVyaWFsaXplL3NyYy9kYXRlcGlja2VyL2RhdGVwaWNrZXIuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvc3JjL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci5tb2R1bGUudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvZHJvcGRvd24vZHJvcGRvd24tZGl2aWRlci9kcm9wZG93bi1kaXZpZGVyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW1hdGVyaWFsaXplL3NyYy9kcm9wZG93bi9kcm9wZG93bi1pdGVtL2Ryb3Bkb3duLWl0ZW0uY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvc3JjL2Ryb3Bkb3duL2Ryb3Bkb3duLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW1hdGVyaWFsaXplL3NyYy9kcm9wZG93bi9kcm9wZG93bi5tb2R1bGUudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvZmVhdHVyZS1kaXNjb3ZlcnkvZmVhdHVyZS1kaXNjb3ZlcnkuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvc3JjL2ZlYXR1cmUtZGlzY292ZXJ5L2ZlYXR1cmUtZGlzY292ZXJ5Lm1vZHVsZS50cyIsIm5nOi8vbmd4LW1hdGVyaWFsaXplL3NyYy9pY29uL2ljb24uZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvc3JjL2ljb24vaWNvbi5tb2R1bGUudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvaWNvbi1tZGkvaWNvbi1tZGkuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvc3JjL2ljb24tbWRpL2ljb24tbWRpLm1vZHVsZS50cyIsIm5nOi8vbmd4LW1hdGVyaWFsaXplL3NyYy9pbnB1dC9pbnB1dC1jb250YWluZXIvaW5wdXQtY29udGFpbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW1hdGVyaWFsaXplL3NyYy9pbnB1dC9pbnB1dC1wcmVmaXgvaW5wdXQtcHJlZml4LmRpcmVjdGl2ZS50cyIsIm5nOi8vbmd4LW1hdGVyaWFsaXplL3NyYy9pbnB1dC9pbnB1dC5kaXJlY3RpdmUudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvaW5wdXQvaW5wdXQubW9kdWxlLnRzIiwibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvc3JjL21lZGlhL21lZGlhLnNlcnZpY2UudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvbWVkaWEvbWVkaWEubW9kdWxlLnRzIiwibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvc3JjL21vZGFsL21vZGFsLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW1hdGVyaWFsaXplL3NyYy9tb2RhbC9tb2RhbC1jbG9zZS9tb2RhbC1jbG9zZS5kaXJlY3RpdmUudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvbW9kYWwvc2VydmljZXMvbW9kYWwuc2VydmljZS50cyIsIm5nOi8vbmd4LW1hdGVyaWFsaXplL3NyYy9tb2RhbC9tb2RhbC5tb2R1bGUudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvbmF2YmFyL25hdmJhci1pdGVtLWNvbnRhaW5lci9uYXZiYXItaXRlbS1jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvc3JjL25hdmJhci9uYXZiYXItaXRlbS9uYXZiYXItaXRlbS5jb21wb25lbnQudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvbmF2YmFyL25hdmJhci5jb21wb25lbnQudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvbmF2YmFyL25hdmJhci5tb2R1bGUudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLXBhZ2UtYnV0dG9uL3BhZ2luYXRpb24tcGFnZS1idXR0b24uY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvc3JjL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLm1vZHVsZS50cyIsIm5nOi8vbmd4LW1hdGVyaWFsaXplL3NyYy9wYXJhbGxheC9wYXJhbGxheC5jb21wb25lbnQudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvcGFyYWxsYXgvcGFyYWxsYXgubW9kdWxlLnRzIiwibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvc3JjL3Byb2dyZXNzL3Byb2dyZXNzLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW1hdGVyaWFsaXplL3NyYy9wcm9ncmVzcy9wcm9ncmVzcy5tb2R1bGUudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvcmFkaW8tYnV0dG9uL3JhZGlvLWJ1dHRvbi1jb250YWluZXIvcmFkaW8tYnV0dG9uLWNvbnRhaW5lci5jb21wb25lbnQudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvcmFkaW8tYnV0dG9uL3JhZGlvLWJ1dHRvbi5kaXJlY3RpdmUudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvcmFkaW8tYnV0dG9uL3JhZGlvLWJ1dHRvbi5tb2R1bGUudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvdmFsaWRhdGlvbi9lcnJvci1tZXNzYWdlL2Vycm9yLW1lc3NhZ2UuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvc3JjL3ZhbGlkYXRpb24vZXJyb3ItbWVzc2FnZS9tb2RlbHMvZXJyb3ItbWVzc2FnZS50cyIsIm5nOi8vbmd4LW1hdGVyaWFsaXplL3NyYy92YWxpZGF0aW9uL3ZhbGlkYXRpb24uY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvc3JjL3NlbGVjdC9zZWxlY3QuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvc3JjL3NlbGVjdC9zZWxlY3QtY29udGFpbmVyL3NlbGVjdC1jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvc3JjL3NlbGVjdC9zZWxlY3QubW9kdWxlLnRzIiwibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvc3JjL3NpZGVuYXYvc2lkZW5hdi1jb2xsYXBzaWJsZS9zaWRlbmF2LWNvbGxhcHNpYmxlLWhlYWRlci9zaWRlbmF2LWNvbGxhcHNpYmxlLWhlYWRlci5jb21wb25lbnQudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvc2lkZW5hdi9zaWRlbmF2LWNvbGxhcHNpYmxlL3NpZGVuYXYtY29sbGFwc2libGUuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvc3JjL3NpZGVuYXYvc2lkZW5hdi1kaXZpZGVyL3NpZGVuYXYtZGl2aWRlci5jb21wb25lbnQudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvc2lkZW5hdi9zaWRlbmF2LWhlYWRlci9zaWRlbmF2LWhlYWRlci5jb21wb25lbnQudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvc2lkZW5hdi9zaWRlbmF2LWxpbmsvc2lkZW5hdi1saW5rLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW1hdGVyaWFsaXplL3NyYy9zaWRlbmF2L3NpZGVuYXYtc3ViaGVhZGVyL3NpZGVuYXYtc3ViaGVhZGVyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW1hdGVyaWFsaXplL3NyYy9zaWRlbmF2L3NpZGVuYXYuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvc3JjL3NpZGVuYXYvc2lkZW5hdi5tb2R1bGUudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW1hdGVyaWFsaXplL3NyYy9zcGlubmVyL3NwaW5uZXIubW9kdWxlLnRzIiwibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvc3JjL3N3aXRjaC9zd2l0Y2guZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvc3JjL3N3aXRjaC9zd2l0Y2gtY29udGFpbmVyL3N3aXRjaC1jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvc3JjL3N3aXRjaC9zd2l0Y2gubW9kdWxlLnRzIiwibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvc3JjL3RhYi90YWItaXRlbS90YWItaXRlbS5jb21wb25lbnQudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvdGFiL3RhYi5jb21wb25lbnQudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvdGFiL3RhYi5tb2R1bGUudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvdGV4dGFyZWEvdGV4dGFyZWEtY29udGFpbmVyL3RleHRhcmVhLWNvbnRhaW5lci5jb21wb25lbnQudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvdGV4dGFyZWEvdGV4dGFyZWEtcHJlZml4L3RleHRhcmVhLXByZWZpeC5kaXJlY3RpdmUudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvdGV4dGFyZWEvdGV4dGFyZWEuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvc3JjL3RleHRhcmVhL3RleHRhcmVhLm1vZHVsZS50cyIsIm5nOi8vbmd4LW1hdGVyaWFsaXplL3NyYy90aW1lcGlja2VyL3RpbWVwaWNrZXItY29udGFpbmVyL3RpbWVwaWNrZXItY29udGFpbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW1hdGVyaWFsaXplL3NyYy90aW1lcGlja2VyL3RpbWVwaWNrZXIuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvc3JjL3RpbWVwaWNrZXIvdGltZXBpY2tlci5tb2R1bGUudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvdG9hc3Qvc2VydmljZXMvdG9hc3Quc2VydmljZS50cyIsIm5nOi8vbmd4LW1hdGVyaWFsaXplL3NyYy90b2FzdC90b2FzdC5tb2R1bGUudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvdG9vbHRpcC90b29sdGlwLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmd4LW1hdGVyaWFsaXplL3NyYy90b29sdGlwL3Rvb2x0aXAubW9kdWxlLnRzIiwibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvc3JjL3ZhbGlkYXRpb24vdmFsaWRhdGlvbi5tb2R1bGUudHMiLCJuZzovL25neC1tYXRlcmlhbGl6ZS9zcmMvbWF0ZXJpYWxpemUubW9kdWxlLnRzIiwibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvc3JjL21lZGlhL21vZGVscy9tYXRjaE9wZXJhdG9yLnRzIiwibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvc3JjL21lZGlhL21vZGVscy9tZWRpYS50cyIsIm5nOi8vbmd4LW1hdGVyaWFsaXplL3NyYy9tZWRpYS9tb2RlbHMvbWVkaWFCcmVha3BvaW50LnRzIiwibmc6Ly9uZ3gtbWF0ZXJpYWxpemUvc3JjL21vZGFsL21vZGFsLWJhc2UvbW9kYWwtYmFzZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ216LWJhZGdlJyxcclxuICB0ZW1wbGF0ZTogYDxzcGFuICNiYWRnZVxyXG4gIGNsYXNzPVwiYmFkZ2Uge3sgYmFkZ2VDbGFzcyB9fVwiXHJcbiAgW2NsYXNzLm5ld109XCJuZXcgfHwgISFiYWRnZUNsYXNzXCJcclxuICBbYXR0ci5kYXRhLWJhZGdlLWNhcHRpb25dPVwiY2FwdGlvblwiPlxyXG4gIHt7IHZhbHVlIH19XHJcbjwvc3Bhbj5cclxuYCxcclxuICBzdHlsZXM6IFtgYF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNekJhZGdlQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBiYWRnZUNsYXNzOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgY2FwdGlvbjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG5ldzogYm9vbGVhbjtcclxuICBASW5wdXQoKSB2YWx1ZTogbnVtYmVyO1xyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBNekJhZGdlQ29tcG9uZW50IH0gZnJvbSAnLi9iYWRnZS5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtNekJhZGdlQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbTXpCYWRnZUNvbXBvbmVudF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNekJhZGdlTW9kdWxlIHsgfVxyXG4iLCJpbXBvcnQgeyBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZSwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEhhbmRsZXJzIHtcclxuICAgW3Byb3BlcnR5TmFtZTogc3RyaW5nXTogRnVuY3Rpb247XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBIYW5kbGVQcm9wQ2hhbmdlcyBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgaGFuZGxlcnM6IEhhbmRsZXJzO1xyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAodGhpcy5oYW5kbGVycykge1xyXG4gICAgICB0aGlzLmV4ZWN1dGVQcm9wSGFuZGxlcnMoY2hhbmdlcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBleGVjdXRlUHJvcEhhbmRsZXJzKHByb3BzOiBIYW5kbGVycyB8IFNpbXBsZUNoYW5nZXMgPSB0aGlzLmhhbmRsZXJzKSB7XHJcbiAgICBPYmplY3Qua2V5cyhwcm9wcykuZm9yRWFjaChwcm9wID0+IHtcclxuICAgICAgaWYgKHRoaXMuaGFuZGxlcnNbcHJvcF0pIHtcclxuICAgICAgICBjb25zdCBwcmV2aW91c1ZhbHVlID0gKHByb3BzW3Byb3BdIGFzIFNpbXBsZUNoYW5nZSkucHJldmlvdXNWYWx1ZTtcclxuICAgICAgICB0aGlzLmhhbmRsZXJzW3Byb3BdKHByZXZpb3VzVmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBBcHBsaWNhdGlvblJlZixcclxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgQ29tcG9uZW50UmVmLFxyXG4gIEVtYmVkZGVkVmlld1JlZixcclxuICBJbmplY3RhYmxlLFxyXG4gIEluamVjdG9yLFxyXG4gIFR5cGUsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBNekluamVjdGlvblNlcnZpY2Uge1xyXG4gIHByaXZhdGUgY29udGFpbmVyOiBFbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgYXBwbGljYXRpb25SZWY6IEFwcGxpY2F0aW9uUmVmLFxyXG4gICAgcHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBcHBlbmRzIGEgY29tcG9uZW50IHRvIGFuIGFkamFjZW50IGxvY2F0aW9uLlxyXG4gICAqL1xyXG4gIGFwcGVuZENvbXBvbmVudDxUPihcclxuICAgIGNvbXBvbmVudENsYXNzOiBUeXBlPFQ+LFxyXG4gICAgb3B0aW9uczogYW55ID0ge30sXHJcbiAgICBsb2NhdGlvbjogRWxlbWVudCA9IHRoaXMuZ2V0Q29udGFpbmVyRWxlbWVudCgpLFxyXG4gICk6IENvbXBvbmVudFJlZjxUPiB7XHJcbiAgICAvLyBpbnN0YW50aWF0ZSBjb21wb25lbnQgdG8gbG9hZFxyXG4gICAgY29uc3QgY29tcG9uZW50RmFjdG9yeSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudENsYXNzKTtcclxuICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IGNvbXBvbmVudEZhY3RvcnkuY3JlYXRlKHRoaXMuaW5qZWN0b3IpO1xyXG5cclxuICAgIC8vIHByb2plY3QgdGhlIG9wdGlvbnMgcGFzc2VkIHRvIHRoZSBjb21wb25lbnQgaW5zdGFuY2VcclxuICAgIHRoaXMucHJvamVjdENvbXBvbmVudElucHV0cyhjb21wb25lbnRSZWYsIG9wdGlvbnMpO1xyXG5cclxuICAgIC8vIGF0dGFjaCB2aWV3IGZvciBkaXJ0eSBjaGVja2luZ1xyXG4gICAgdGhpcy5hcHBsaWNhdGlvblJlZi5hdHRhY2hWaWV3KGNvbXBvbmVudFJlZi5ob3N0Vmlldyk7XHJcblxyXG4gICAgLy8gZGV0YWNoIHZpZXcgd2hlbiBjb21wb25lbnQgaXMgZGVzdHJveWVkXHJcbiAgICBjb21wb25lbnRSZWYub25EZXN0cm95KCgpID0+IHtcclxuICAgICAgdGhpcy5hcHBsaWNhdGlvblJlZi5kZXRhY2hWaWV3KGNvbXBvbmVudFJlZi5ob3N0Vmlldyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBhcHBlbmQgY29tcG9uZW50IHRvIGxvY2F0aW9uIGluIHRoZSBET00gd2hlcmUgd2Ugd2FudCBpdCB0byBiZSByZW5kZXJlZFxyXG4gICAgY29uc3QgY29tcG9uZW50Um9vdE5vZGUgPSB0aGlzLmdldENvbXBvbmVudFJvb3ROb2RlKGNvbXBvbmVudFJlZik7XHJcbiAgICBsb2NhdGlvbi5hcHBlbmRDaGlsZChjb21wb25lbnRSb290Tm9kZSk7XHJcblxyXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlZjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE92ZXJyaWRlcyB0aGUgZGVmYXVsdCBjb250YWluZXIgZWxlbWVudC5cclxuICAgKi9cclxuICBzZXRSb290Vmlld0NvbnRhaW5lcihjb250YWluZXI6IEVsZW1lbnQpOiB2b2lkIHtcclxuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0cyB0aGUgaHRtbCBlbGVtZW50IGZvciBhIGNvbXBvbmVudCByZWYuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBnZXRDb21wb25lbnRSb290Tm9kZShjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxhbnk+KTogRWxlbWVudCB7XHJcbiAgICByZXR1cm4gKGNvbXBvbmVudFJlZi5ob3N0VmlldyBhcyBFbWJlZGRlZFZpZXdSZWY8YW55Pikucm9vdE5vZGVzWzBdIGFzIEVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXRzIHRoZSBjb250YWluZXIgZWxlbWVudC5cclxuICAgKi9cclxuICBwcml2YXRlIGdldENvbnRhaW5lckVsZW1lbnQoKTogRWxlbWVudCB7XHJcbiAgICByZXR1cm4gdGhpcy5jb250YWluZXIgfHwgZG9jdW1lbnQuYm9keTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFByb2plY3RzIHRoZSBpbnB1dHMgb250byB0aGUgY29tcG9uZW50LlxyXG4gICAqL1xyXG4gIHByaXZhdGUgcHJvamVjdENvbXBvbmVudElucHV0czxUPihjb21wb25lbnQ6IENvbXBvbmVudFJlZjxUPiwgb3B0aW9uczogYW55KTogQ29tcG9uZW50UmVmPFQ+IHtcclxuICAgIGlmIChvcHRpb25zKSB7XHJcbiAgICAgIGNvbnN0IHByb3BzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob3B0aW9ucyk7XHJcbiAgICAgIGZvciAoY29uc3QgcHJvcCBvZiBwcm9wcykge1xyXG4gICAgICAgIGNvbXBvbmVudC5pbnN0YW5jZVtwcm9wXSA9IG9wdGlvbnNbcHJvcF07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjb21wb25lbnQ7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBNekluamVjdGlvblNlcnZpY2UgfSBmcm9tICcuL2luamVjdGlvbi5zZXJ2aWNlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgcHJvdmlkZXJzOiBbTXpJbmplY3Rpb25TZXJ2aWNlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16SW5qZWN0aW9uTW9kdWxlIHsgfVxyXG4iLCJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbmplY3QsXHJcbiAgT25EZXN0cm95LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE16UmVtb3ZlQ29tcG9uZW50SG9zdCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gIHByaXZhdGUgY2hpbGRyZW5FbGVtZW50OiBIVE1MRWxlbWVudFtdID0gW107XHJcbiAgcHJpdmF0ZSBwYXJlbnRFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBASW5qZWN0KEVsZW1lbnRSZWYpIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICkgeyB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIGNvbnN0IGhvc3RFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICB0aGlzLnBhcmVudEVsZW1lbnQgPSBob3N0RWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgIC8vIG1vdmUgY2hpbGQgb3V0IG9mIHRoZSBob3N0IGVsZW1lbnRcclxuICAgIHdoaWxlIChob3N0RWxlbWVudC5maXJzdENoaWxkKSB7XHJcbiAgICAgIHRoaXMuY2hpbGRyZW5FbGVtZW50LnB1c2godGhpcy5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShob3N0RWxlbWVudC5maXJzdENoaWxkLCBob3N0RWxlbWVudCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAvLyByZW1vdmUgbW92ZWQgb3V0IGVsZW1lbnRcclxuICAgIHRoaXMuY2hpbGRyZW5FbGVtZW50LmZvckVhY2goY2hpbGRFbGVtZW50ID0+IHRoaXMucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZEVsZW1lbnQpKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICAgIERpcmVjdGl2ZSxcclxuICAgIEVsZW1lbnRSZWYsXHJcbiAgICBJbnB1dCxcclxuICAgIE9uSW5pdCxcclxuICAgIFJlbmRlcmVyLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgSGFuZGxlUHJvcENoYW5nZXMgfSBmcm9tICcuLi9zaGFyZWQvaW5kZXgnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IGBcclxuICAgIGFbbXotYnV0dG9uXSxcclxuICAgIGFbbXpCdXR0b25dLFxyXG4gICAgYnV0dG9uW216LWJ1dHRvbl0sXHJcbiAgICBidXR0b25bbXpCdXR0b25dYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16QnV0dG9uRGlyZWN0aXZlIGV4dGVuZHMgSGFuZGxlUHJvcENoYW5nZXMgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGZsYXQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgZmxvYXQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgbGFyZ2U6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgbm9XYXZlczogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcikge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbml0SGFuZGxlcnMoKTtcclxuICAgIHRoaXMuaW5pdE1hdGVyaWFsaXplKCk7XHJcbiAgICBzdXBlci5leGVjdXRlUHJvcEhhbmRsZXJzKCk7XHJcbiAgfVxyXG5cclxuICBpbml0SGFuZGxlcnMoKSB7XHJcbiAgICB0aGlzLmhhbmRsZXJzID0ge1xyXG4gICAgICBkaXNhYmxlZDogKCkgPT4gdGhpcy5oYW5kbGVEaXNhYmxlZCgpLFxyXG4gICAgICBmbGF0OiAoKSA9PiB0aGlzLmhhbmRsZUZsYXQoKSxcclxuICAgICAgZmxvYXQ6ICgpID0+IHRoaXMuaGFuZGxlRmxvYXQoKSxcclxuICAgICAgbGFyZ2U6ICgpID0+IHRoaXMuaGFuZGxlTGFyZ2UoKSxcclxuICAgICAgbm9XYXZlczogKCkgPT4gdGhpcy5oYW5kbGVOb1dhdmVzKCksXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgaW5pdE1hdGVyaWFsaXplKCkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdidG4nLCB0cnVlKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZURpc2FibGVkKCkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcsIHRoaXMuZGlzYWJsZWQpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRmxhdCgpIHtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYnRuJywgIXRoaXMuZmxhdCk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2J0bi1mbGF0JywgdGhpcy5mbGF0KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUZsb2F0KCkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdidG4tZmxvYXRpbmcnLCB0aGlzLmZsb2F0KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUxhcmdlKCkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdidG4tbGFyZ2UnLCB0aGlzLmxhcmdlKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZU5vV2F2ZXMoKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3dhdmVzLWVmZmVjdCcsICF0aGlzLm5vV2F2ZXMpO1xyXG5cclxuICAgIGlmICghdGhpcy5mbGF0KSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnd2F2ZXMtbGlnaHQnLCAhdGhpcy5ub1dhdmVzKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE16QnV0dG9uRGlyZWN0aXZlIH0gZnJvbSAnLi9idXR0b24uZGlyZWN0aXZlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbTXpCdXR0b25EaXJlY3RpdmVdLFxyXG4gIGV4cG9ydHM6IFtNekJ1dHRvbkRpcmVjdGl2ZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNekJ1dHRvbk1vZHVsZSB7IH1cclxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IGBcclxuICAgIGFbbXotaGFsZndheS1mYWJdLFxyXG4gICAgYVttekhhbGZ3YXlGYWJdLFxyXG4gICAgYnV0dG9uW216LWhhbGZ3YXktZmFiXSxcclxuICAgIGJ1dHRvblttekhhbGZ3YXlGYWJdYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16SGFsZndheUZhYkRpcmVjdGl2ZSB7XHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5oYWxmd2F5LWZhYicpIHRydWU7XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE16SGFsZndheUZhYkRpcmVjdGl2ZSB9IGZyb20gJy4vaGFsZndheS1mYWIuZGlyZWN0aXZlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBNekhhbGZ3YXlGYWJEaXJlY3RpdmUsXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBNekhhbGZ3YXlGYWJEaXJlY3RpdmUsXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16SGFsZndheUZhYk1vZHVsZSB7IH1cclxuIiwiaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBEaXJlY3RpdmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBIb3N0QmluZGluZyxcclxuICBJbnB1dCxcclxuICBWaWV3Q2hpbGQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ216LWNhcmQnLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiAjY2FyZEltYWdlIGNsYXNzPVwiY2FyZC1pbWFnZVwiICpuZ0lmPVwiaGFzQ2FyZEltYWdlXCI+XHJcbiAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibXotY2FyZC1pbWFnZVwiPjwvbmctY29udGVudD5cclxuICA8ZGl2IGNsYXNzPVwiY2FyZC10aXRsZVwiICpuZ0lmPVwiaGFzQ2FyZEltYWdlVGl0bGVcIj5cclxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm16LWNhcmQtaW1hZ2UtdGl0bGVcIj48L25nLWNvbnRlbnQ+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuPGRpdiBbY2xhc3MuY2FyZC1zdGFja2VkXT1cImhvcml6b250YWxcIj5cclxuICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XHJcbiAgICA8ZGl2ICNjYXJkVGl0bGUgY2xhc3M9XCJjYXJkLXRpdGxlXCIgKm5nSWY9XCJoYXNDYXJkVGl0bGVcIj5cclxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibXotY2FyZC10aXRsZVwiPjwvbmctY29udGVudD5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm16LWNhcmQtY29udGVudFwiPjwvbmctY29udGVudD5cclxuICA8L2Rpdj5cclxuXHJcbiAgPGRpdiAjY2FyZEFjdGlvbiBjbGFzcz1cImNhcmQtYWN0aW9uXCIgKm5nSWY9XCJoYXNDYXJkQWN0aW9uXCI+XHJcbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJtei1jYXJkLWFjdGlvblwiPjwvbmctY29udGVudD5cclxuICA8L2Rpdj5cclxuPC9kaXY+YCxcclxuICBzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTpibG9ja31gXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16Q2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuY2FyZCcpIHRydWU7XHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5ob3Jpem9udGFsJykgQElucHV0KCkgaG9yaXpvbnRhbDogYm9vbGVhbjtcclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmhvdmVyYWJsZScpIEBJbnB1dCgpIGhvdmVyYWJsZTogYm9vbGVhbjtcclxuXHJcbiAgQFZpZXdDaGlsZCgnY2FyZEFjdGlvbicpIGNhcmRBY3Rpb246IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnY2FyZEltYWdlJykgY2FyZEltYWdlOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2NhcmRUaXRsZScpIGNhcmRUaXRsZTogRWxlbWVudFJlZjtcclxuXHJcbiAgaGFzQ2FyZEFjdGlvbiA9IHRydWU7XHJcbiAgaGFzQ2FyZEltYWdlID0gdHJ1ZTtcclxuICBoYXNDYXJkSW1hZ2VUaXRsZSA9IHRydWU7XHJcbiAgaGFzQ2FyZFRpdGxlID0gdHJ1ZTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICApIHt9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMuaGFzQ2FyZFRpdGxlID0gdGhpcy5oYXNUaXRsZVRhZ0FuZE5vdEVtcHR5KCk7XHJcbiAgICB0aGlzLmhhc0NhcmRBY3Rpb24gPSB0aGlzLmhhc0FjdGlvblRhZ0FuZE5vdEVtcHR5KCk7XHJcbiAgICB0aGlzLmhhc0NhcmRJbWFnZSA9IHRoaXMuaGFzSW1hZ2VUYWdBbmROb3RFbXB0eSgpO1xyXG4gICAgdGhpcy5oYXNDYXJkSW1hZ2VUaXRsZSA9IHRoaXMuaGFzSW1hZ2VUaXRsZVRhZ0FuZE5vdEVtcHR5KCk7XHJcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFzQWN0aW9uVGFnQW5kTm90RW1wdHkoKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBjYXJkQWN0aW9uRWxlbWVudCA9IHRoaXMuY2FyZEFjdGlvbi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ216LWNhcmQtYWN0aW9uJyk7XHJcbiAgICByZXR1cm4gdGhpcy5pc0VsZW1lbnREaXNwbGF5ZWQoY2FyZEFjdGlvbkVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYXNJbWFnZVRhZ0FuZE5vdEVtcHR5KCk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgY2FyZEltYWdlbGVtZW50ID0gdGhpcy5jYXJkSW1hZ2UubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdtei1jYXJkLWltYWdlJyk7XHJcbiAgICByZXR1cm4gdGhpcy5pc0VsZW1lbnREaXNwbGF5ZWQoY2FyZEltYWdlbGVtZW50KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFzSW1hZ2VUaXRsZVRhZ0FuZE5vdEVtcHR5KCk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgY2FyZEltYWdlVGl0bGVFbGVtZW50ID0gdGhpcy5jYXJkSW1hZ2UubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdtei1jYXJkLWltYWdlLXRpdGxlJyk7XHJcbiAgICByZXR1cm4gdGhpcy5pc0VsZW1lbnREaXNwbGF5ZWQoY2FyZEltYWdlVGl0bGVFbGVtZW50KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFzVGl0bGVUYWdBbmROb3RFbXB0eSgpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IGNhcmRUaXRsZUVsZW1lbnQgPSB0aGlzLmNhcmRUaXRsZSA/IHRoaXMuY2FyZFRpdGxlLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignbXotY2FyZC10aXRsZScpIDogbnVsbDtcclxuICAgIHJldHVybiB0aGlzLmlzRWxlbWVudERpc3BsYXllZChjYXJkVGl0bGVFbGVtZW50KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNFbGVtZW50RGlzcGxheWVkKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZWxlbWVudCAmJiBlbGVtZW50LmlubmVySFRNTC50cmltKCkgIT09ICcnO1xyXG4gIH1cclxufVxyXG5cclxuLy8gRGVjbGFyZSB0aGUgdGFncyB0byBhdm9pZCBlcnJvcjogJzxtei1jYXJkLXg+JyBpcyBub3QgYSBrbm93biBlbGVtZW50XHJcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzExMjUxXHJcbi8vIHRzbGludDpkaXNhYmxlOiBkaXJlY3RpdmUtc2VsZWN0b3JcclxuXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ216LWNhcmQtaW1hZ2UnIH0pIGV4cG9ydCBjbGFzcyBNekNhcmRJbWFnZURpcmVjdGl2ZSB7IH1cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnbXotY2FyZC1pbWFnZS10aXRsZScgfSkgZXhwb3J0IGNsYXNzIE16Q2FyZEltYWdlVGl0bGVEaXJlY3RpdmUgeyB9XHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ216LWNhcmQtdGl0bGUnIH0pIGV4cG9ydCBjbGFzcyBNekNhcmRUaXRsZURpcmVjdGl2ZSB7IH1cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnbXotY2FyZC1jb250ZW50JyB9KSBleHBvcnQgY2xhc3MgTXpDYXJkQ29udGVudERpcmVjdGl2ZSB7IH1cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnbXotY2FyZC1hY3Rpb24nIH0pIGV4cG9ydCBjbGFzcyBNekNhcmRBY3Rpb25EaXJlY3RpdmUgeyB9XHJcblxyXG4iLCJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtcclxuICBNekNhcmRBY3Rpb25EaXJlY3RpdmUsXHJcbiAgTXpDYXJkQ29tcG9uZW50LFxyXG4gIE16Q2FyZENvbnRlbnREaXJlY3RpdmUsXHJcbiAgTXpDYXJkSW1hZ2VEaXJlY3RpdmUsXHJcbiAgTXpDYXJkSW1hZ2VUaXRsZURpcmVjdGl2ZSxcclxuICBNekNhcmRUaXRsZURpcmVjdGl2ZSxcclxuIH0gZnJvbSAnLi9jYXJkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE16SGFsZndheUZhYk1vZHVsZSB9IGZyb20gJy4vaGFsZndheS1mYWIvaGFsZndheS1mYWIubW9kdWxlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgTXpIYWxmd2F5RmFiTW9kdWxlLFxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBNekNhcmRBY3Rpb25EaXJlY3RpdmUsXHJcbiAgICBNekNhcmRDb21wb25lbnQsXHJcbiAgICBNekNhcmRDb250ZW50RGlyZWN0aXZlLFxyXG4gICAgTXpDYXJkSW1hZ2VEaXJlY3RpdmUsXHJcbiAgICBNekNhcmRJbWFnZVRpdGxlRGlyZWN0aXZlLFxyXG4gICAgTXpDYXJkVGl0bGVEaXJlY3RpdmUsXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBNekNhcmRBY3Rpb25EaXJlY3RpdmUsXHJcbiAgICBNekNhcmRDb21wb25lbnQsXHJcbiAgICBNekNhcmRDb250ZW50RGlyZWN0aXZlLFxyXG4gICAgTXpDYXJkSW1hZ2VEaXJlY3RpdmUsXHJcbiAgICBNekNhcmRJbWFnZVRpdGxlRGlyZWN0aXZlLFxyXG4gICAgTXpDYXJkVGl0bGVEaXJlY3RpdmUsXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16Q2FyZE1vZHVsZSB7IH1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ216LWNoZWNrYm94LWNvbnRhaW5lcicsXHJcbiAgdGVtcGxhdGU6IGA8cCBjbGFzcz1cImNoZWNrYm94LWZpZWxkXCI+XHJcbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L3A+YCxcclxuICBzdHlsZXM6IFtgYF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNekNoZWNrYm94Q29udGFpbmVyQ29tcG9uZW50IHsgfVxyXG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nLCBJbnB1dCwgT25Jbml0LCBSZW5kZXJlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgSGFuZGxlUHJvcENoYW5nZXMgfSBmcm9tICcuLi9zaGFyZWQvaW5kZXgnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdpbnB1dFttekNoZWNrYm94XSwgaW5wdXRbbXotY2hlY2tib3hdJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16Q2hlY2tib3hEaXJlY3RpdmUgZXh0ZW5kcyBIYW5kbGVQcm9wQ2hhbmdlcyBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgLy8gbmF0aXZlIHByb3BlcnRpZXNcclxuICBASG9zdEJpbmRpbmcoKSBASW5wdXQoKSBpZDogc3RyaW5nO1xyXG5cclxuICAvLyBkaXJlY3RpdmUgcHJvcGVydGllc1xyXG4gIEBJbnB1dCgpIGZpbGxlZEluOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XHJcblxyXG4gIGNoZWNrYm94RWxlbWVudDogSlF1ZXJ5O1xyXG4gIGNoZWNrYm94Q29udGFpbmVyRWxlbWVudDogSlF1ZXJ5O1xyXG4gIGxhYmVsRWxlbWVudDogSlF1ZXJ5O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluaXRIYW5kbGVycygpO1xyXG4gICAgdGhpcy5pbml0RWxlbWVudHMoKTtcclxuICAgIHRoaXMuaGFuZGxlUHJvcGVydGllcygpO1xyXG4gIH1cclxuXHJcbiAgaW5pdEhhbmRsZXJzKCkge1xyXG4gICAgdGhpcy5oYW5kbGVycyA9IHtcclxuICAgICAgZmlsbGVkSW46ICgpID0+IHRoaXMuaGFuZGxlRmlsbGVkSW4oKSxcclxuICAgICAgbGFiZWw6ICgpID0+IHRoaXMuaGFuZGxlTGFiZWwoKSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBpbml0RWxlbWVudHMoKSB7XHJcbiAgICB0aGlzLmNoZWNrYm94RWxlbWVudCA9ICQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgdGhpcy5jaGVja2JveENvbnRhaW5lckVsZW1lbnQgPSAkKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5wYXJlbnQoJy5jaGVja2JveC1maWVsZCcpO1xyXG4gICAgdGhpcy5sYWJlbEVsZW1lbnQgPSB0aGlzLmNyZWF0ZUxhYmVsRWxlbWVudCgpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlTGFiZWxFbGVtZW50KCkge1xyXG4gICAgY29uc3QgbGFiZWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGxhYmVsRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIHRoaXMuaWQpO1xyXG5cclxuICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLmNoZWNrYm94RWxlbWVudCwgJ2FmdGVyJywgW2xhYmVsRWxlbWVudF0pO1xyXG5cclxuICAgIHJldHVybiAkKGxhYmVsRWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVQcm9wZXJ0aWVzKCkge1xyXG4gICAgaWYgKHRoaXMuY2hlY2tib3hDb250YWluZXJFbGVtZW50Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdJbnB1dCB3aXRoIG16LWNoZWNrYm94IGRpcmVjdGl2ZSBtdXN0IGJlIHBsYWNlZCBpbnNpZGUgYSBbbXotY2hlY2tib3gtY29udGFpbmVyXSB0YWcnLCB0aGlzLmNoZWNrYm94RWxlbWVudCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBzdXBlci5leGVjdXRlUHJvcEhhbmRsZXJzKCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVMYWJlbCgpIHtcclxuICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLmxhYmVsRWxlbWVudCwgJ3RleHQnLCBbdGhpcy5sYWJlbF0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRmlsbGVkSW4oKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLmNoZWNrYm94RWxlbWVudFswXSwgJ2ZpbGxlZC1pbicsIHRoaXMuZmlsbGVkSW4pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTXpDaGVja2JveENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vY2hlY2tib3gtY29udGFpbmVyL2luZGV4JztcclxuaW1wb3J0IHsgTXpDaGVja2JveERpcmVjdGl2ZSB9IGZyb20gJy4vY2hlY2tib3guZGlyZWN0aXZlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBNekNoZWNrYm94RGlyZWN0aXZlLFxyXG4gICAgTXpDaGVja2JveENvbnRhaW5lckNvbXBvbmVudCxcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIE16Q2hlY2tib3hEaXJlY3RpdmUsXHJcbiAgICBNekNoZWNrYm94Q29udGFpbmVyQ29tcG9uZW50LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNekNoZWNrYm94TW9kdWxlIHsgfVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgZm9yd2FyZFJlZiwgSW5wdXQsIE5nWm9uZSwgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ216LWNoaXAtaW5wdXQnLFxyXG4gIHRlbXBsYXRlOiBgYCxcclxuICBzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTpibG9ja31gXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE16Q2hpcElucHV0Q29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNekNoaXBJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KCkgYXV0b2NvbXBsZXRlT3B0aW9uczogTWF0ZXJpYWxpemUuQXV0b0NvbXBsZXRlT3B0aW9ucztcclxuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHNlY29uZGFyeVBsYWNlaG9sZGVyOiBzdHJpbmc7XHJcbiAgQE91dHB1dCgpIGFkZCA9IG5ldyBFdmVudEVtaXR0ZXI8TWF0ZXJpYWxpemUuQ2hpcERhdGFPYmplY3Q+KCk7XHJcbiAgQE91dHB1dCgpIGRlbGV0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8TWF0ZXJpYWxpemUuQ2hpcERhdGFPYmplY3Q+KCk7XHJcbiAgQE91dHB1dCgpIHNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8TWF0ZXJpYWxpemUuQ2hpcERhdGFPYmplY3Q+KCk7XHJcblxyXG4gIGdldCB2YWx1ZSgpOiBNYXRlcmlhbGl6ZS5DaGlwRGF0YU9iamVjdFtdIHtcclxuICAgIHJldHVybiB0aGlzLmNoaXBJbnB1dEVsZW1lbnQubWF0ZXJpYWxfY2hpcCgnZGF0YScpIGFzIE1hdGVyaWFsaXplLkNoaXBEYXRhT2JqZWN0W107XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNoaXBJbnB1dEVsZW1lbnQ6IEpRdWVyeTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHpvbmU6IE5nWm9uZSxcclxuICApIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5pdEVsZW1lbnRzKCk7XHJcbiAgICB0aGlzLmluaXRNYXRlcmlhbGl6ZUNoaXAoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5jaGlwSW5wdXRFbGVtZW50Lm9mZignY2hpcC5hZGQnKTtcclxuICAgIHRoaXMuY2hpcElucHV0RWxlbWVudC5vZmYoJ2NoaXAuZGVsZXRlJyk7XHJcbiAgICB0aGlzLmNoaXBJbnB1dEVsZW1lbnQub2ZmKCdjaGlwLnNlbGVjdCcpO1xyXG4gIH1cclxuXHJcbiAgaW5pdEVsZW1lbnRzKCkge1xyXG4gICAgdGhpcy5jaGlwSW5wdXRFbGVtZW50ID0gJCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBpbml0TWF0ZXJpYWxpemVDaGlwKHZhbHVlPzogTWF0ZXJpYWxpemUuQ2hpcERhdGFPYmplY3RbXSkge1xyXG4gICAgLy8gZml4IGlzc3VlIGF1dG9jb21wbGV0ZSBpcyBub3QgYSBmdW5jdGlvblxyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0RvZ2ZhbG8vbWF0ZXJpYWxpemUvaXNzdWVzLzQ0MDFcclxuICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY2hpcElucHV0RWxlbWVudC5tYXRlcmlhbF9jaGlwKHtcclxuICAgICAgICAgIGF1dG9jb21wbGV0ZU9wdGlvbnM6IHRoaXMuYXV0b2NvbXBsZXRlT3B0aW9ucyxcclxuICAgICAgICAgIGRhdGE6IHZhbHVlIHx8IHRoaXMudmFsdWUsXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcjogdGhpcy5wbGFjZWhvbGRlcixcclxuICAgICAgICAgIHNlY29uZGFyeVBsYWNlaG9sZGVyOiB0aGlzLnNlY29uZGFyeVBsYWNlaG9sZGVyLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuY2hpcElucHV0RWxlbWVudC5vbignY2hpcC5hZGQnLCAoZXZlbnQsIGNoaXA6IE1hdGVyaWFsaXplLkNoaXBEYXRhT2JqZWN0KSA9PiB7XHJcbiAgICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayh0aGlzLnZhbHVlKTtcclxuICAgICAgdGhpcy5hZGQuZW1pdChjaGlwKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5jaGlwSW5wdXRFbGVtZW50Lm9uKCdjaGlwLmRlbGV0ZScsIChldmVudCwgY2hpcDogTWF0ZXJpYWxpemUuQ2hpcERhdGFPYmplY3QpID0+IHtcclxuICAgICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrKHRoaXMudmFsdWUpO1xyXG4gICAgICB0aGlzLmRlbGV0ZS5lbWl0KGNoaXApO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmNoaXBJbnB1dEVsZW1lbnQub24oJ2NoaXAuc2VsZWN0JywgKGV2ZW50LCBjaGlwOiBNYXRlcmlhbGl6ZS5DaGlwRGF0YU9iamVjdCkgPT4ge1xyXG4gICAgICB0aGlzLnNlbGVjdC5lbWl0KGNoaXApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyNyZWdpb24gQ29udHJvbFZhbHVlQWNjZXNzb3JcclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KSB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpIHsgfVxyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pIHsgfVxyXG5cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBNYXRlcmlhbGl6ZS5DaGlwRGF0YU9iamVjdFtdKSB7XHJcbiAgICBpZiAodmFsdWUgJiYgdmFsdWUgIT09IHRoaXMudmFsdWUpIHtcclxuICAgICAgdGhpcy5pbml0TWF0ZXJpYWxpemVDaGlwKHZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vI2VuZHJlZ2lvbiBDb250cm9sVmFsdWVBY2Nlc3NvclxyXG5cclxuICBwcml2YXRlIG9uQ2hhbmdlQ2FsbGJhY2sgPSAoZGF0YTogTWF0ZXJpYWxpemUuQ2hpcERhdGFPYmplY3RbXSkgPT4ge307XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEhvc3RCaW5kaW5nLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ216LWNoaXAnLFxyXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48aSBjbGFzcz1cImNsb3NlIG1hdGVyaWFsLWljb25zXCIgKGNsaWNrKT1cIm9uRGVsZXRlKClcIiAqbmdJZj1cImNsb3NlXCI+Y2xvc2U8L2k+YCxcclxuICBzdHlsZXM6IFtgYF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNekNoaXBDb21wb25lbnQge1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuY2hpcCcpIGNoaXBDbGFzcyA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpIGNsb3NlID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIGRlbGV0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG5cclxuICBnZXQgY2hpcEVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xyXG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgKSB7IH1cclxuXHJcbiAgb25EZWxldGUoKSB7XHJcbiAgICBsZXQgdmFsdWUgPSAnJztcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jaGlwRWxlbWVudC5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICh0aGlzLmNoaXBFbGVtZW50LmNoaWxkTm9kZXMuaXRlbShpKS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcclxuICAgICAgICB2YWx1ZSArPSB0aGlzLmNoaXBFbGVtZW50LmNoaWxkTm9kZXMuaXRlbShpKS5ub2RlVmFsdWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuZGVsZXRlLmVtaXQodmFsdWUudHJpbSgpKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE16Q2hpcElucHV0Q29tcG9uZW50IH0gZnJvbSAnLi9jaGlwLWlucHV0L2luZGV4JztcclxuaW1wb3J0IHsgTXpDaGlwQ29tcG9uZW50IH0gZnJvbSAnLi9jaGlwLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgTXpDaGlwQ29tcG9uZW50LFxyXG4gICAgTXpDaGlwSW5wdXRDb21wb25lbnQsXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBNekNoaXBDb21wb25lbnQsXHJcbiAgICBNekNoaXBJbnB1dENvbXBvbmVudCxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpDaGlwTW9kdWxlIHsgfVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIERpcmVjdGl2ZSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE16UmVtb3ZlQ29tcG9uZW50SG9zdCB9IGZyb20gJy4uLy4uL3NoYXJlZC9yZW1vdmUtY29tcG9uZW50LWhvc3QvcmVtb3ZlLWNvbXBvbmVudC1ob3N0JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXotY29sbGFwc2libGUtaXRlbScsXHJcbiAgdGVtcGxhdGU6IGA8bGk+XHJcbiAgPGRpdiBjbGFzcz1cImNvbGxhcHNpYmxlLWhlYWRlclwiXHJcbiAgICBbY2xhc3MuYWN0aXZlXT1cImFjdGl2ZVwiXHJcbiAgPlxyXG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibXotY29sbGFwc2libGUtaXRlbS1oZWFkZXJcIj48L25nLWNvbnRlbnQ+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImNvbGxhcHNpYmxlLWJvZHlcIj5cclxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm16LWNvbGxhcHNpYmxlLWl0ZW0tYm9keVwiPjwvbmctY29udGVudD5cclxuICA8L2Rpdj5cclxuPC9saT5gLFxyXG4gIHN0eWxlczogW2BgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16Q29sbGFwc2libGVJdGVtQ29tcG9uZW50IGV4dGVuZHMgTXpSZW1vdmVDb21wb25lbnRIb3N0IHtcclxuICBASW5wdXQoKSBhY3RpdmU6IGJvb2xlYW47XHJcbn1cclxuXHJcbi8vIERlY2xhcmUgdGhlIHRhZ3MgdG8gYXZvaWQgZXJyb3I6ICc8bXotY29sbGFwc2libGUtaXRlbS14PicgaXMgbm90IGEga25vd24gZWxlbWVudFxyXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xMTI1MVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTogZGlyZWN0aXZlLXNlbGVjdG9yXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ216LWNvbGxhcHNpYmxlLWl0ZW0tYm9keScgfSkgZXhwb3J0IGNsYXNzIE16Q29sbGFwc2libGVJdGVtQm9keURpcmVjdGl2ZSB7IH1cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnbXotY29sbGFwc2libGUtaXRlbS1oZWFkZXInIH0pIGV4cG9ydCBjbGFzcyBNekNvbGxhcHNpYmxlSXRlbUhlYWRlckRpcmVjdGl2ZSB7IH1cclxuIiwiaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFJlbmRlcmVyLFxyXG4gIFZpZXdDaGlsZCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE16Q29sbGFwc2libGVJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9jb2xsYXBzaWJsZS1pdGVtL2NvbGxhcHNpYmxlLWl0ZW0uY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXotY29sbGFwc2libGUnLFxyXG4gIHRlbXBsYXRlOiBgPHVsICNjb2xsYXBzaWJsZVxyXG4gIGNsYXNzPVwiY29sbGFwc2libGVcIlxyXG4gIFtjbGFzcy5wb3BvdXRdPVwicG9wb3V0XCJcclxuICBbaGlkZGVuXT1cIml0ZW1zLmxlbmd0aCA9PT0gMFwiXHJcbj5cclxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjwvdWw+YCxcclxuICBzdHlsZXM6IFtgL2RlZXAvIC5jb2xsYXBzaWJsZS1oZWFkZXJ7Y2xlYXI6Ym90aH0vZGVlcC8gLmNvbGxhcHNpYmxlLWJvZHl7Y2xlYXI6Ym90aH1gXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16Q29sbGFwc2libGVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpIG1vZGU6IHN0cmluZztcclxuICBASW5wdXQoKSBvbkNsb3NlOiBGdW5jdGlvbjtcclxuICBASW5wdXQoKSBvbk9wZW46IEZ1bmN0aW9uO1xyXG4gIEBJbnB1dCgpIHBvcG91dDogYm9vbGVhbjtcclxuXHJcbiAgQFZpZXdDaGlsZCgnY29sbGFwc2libGUnKSBjb2xsYXBzaWJsZTogRWxlbWVudFJlZjtcclxuICBAQ29udGVudENoaWxkcmVuKE16Q29sbGFwc2libGVJdGVtQ29tcG9uZW50KSBpdGVtczogUXVlcnlMaXN0PE16Q29sbGFwc2libGVJdGVtQ29tcG9uZW50PjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyLFxyXG4gICkgeyB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaGFuZGxlRGF0YUNvbGxhcHNpYmxlKCk7XHJcbiAgICB0aGlzLmluaXRDb2xsYXBzaWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAkKHRoaXMuY29sbGFwc2libGUubmF0aXZlRWxlbWVudCkuY29sbGFwc2libGUoJ2Rlc3Ryb3knKTtcclxuICB9XHJcblxyXG4gIGNsb3NlKGNvbGxhcHNpYmxlSXRlbUluZGV4OiBudW1iZXIpIHtcclxuICAgICQodGhpcy5jb2xsYXBzaWJsZS5uYXRpdmVFbGVtZW50KS5jb2xsYXBzaWJsZSgnY2xvc2UnLCBjb2xsYXBzaWJsZUl0ZW1JbmRleCk7XHJcbiAgfVxyXG5cclxuICBpbml0Q29sbGFwc2libGUoKSB7XHJcbiAgICBjb25zdCBvcHRpb25zOiBNYXRlcmlhbGl6ZS5Db2xsYXBzaWJsZU9wdGlvbnMgPSB7XHJcbiAgICAgIGFjY29yZGlvbjogZmFsc2UsXHJcbiAgICAgIG9uQ2xvc2U6IHRoaXMub25DbG9zZSxcclxuICAgICAgb25PcGVuOiB0aGlzLm9uT3BlbixcclxuICAgIH07XHJcblxyXG4gICAgJCh0aGlzLmNvbGxhcHNpYmxlLm5hdGl2ZUVsZW1lbnQpLmNvbGxhcHNpYmxlKG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRGF0YUNvbGxhcHNpYmxlKCkge1xyXG4gICAgaWYgKHRoaXMubW9kZSkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRBdHRyaWJ1dGUodGhpcy5jb2xsYXBzaWJsZS5uYXRpdmVFbGVtZW50LCAnZGF0YS1jb2xsYXBzaWJsZScsIHRoaXMubW9kZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvcGVuKGNvbGxhcHNpYmxlSXRlbUluZGV4OiBudW1iZXIpIHtcclxuICAgICQodGhpcy5jb2xsYXBzaWJsZS5uYXRpdmVFbGVtZW50KS5jb2xsYXBzaWJsZSgnb3BlbicsIGNvbGxhcHNpYmxlSXRlbUluZGV4KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7XHJcbiAgTXpDb2xsYXBzaWJsZUl0ZW1Cb2R5RGlyZWN0aXZlLFxyXG4gIE16Q29sbGFwc2libGVJdGVtQ29tcG9uZW50LFxyXG4gIE16Q29sbGFwc2libGVJdGVtSGVhZGVyRGlyZWN0aXZlLFxyXG59IGZyb20gJy4vY29sbGFwc2libGUtaXRlbS9pbmRleCc7XHJcbmltcG9ydCB7IE16Q29sbGFwc2libGVDb21wb25lbnQgfSBmcm9tICcuL2NvbGxhcHNpYmxlLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgTXpDb2xsYXBzaWJsZUNvbXBvbmVudCxcclxuICAgIE16Q29sbGFwc2libGVJdGVtQm9keURpcmVjdGl2ZSxcclxuICAgIE16Q29sbGFwc2libGVJdGVtQ29tcG9uZW50LFxyXG4gICAgTXpDb2xsYXBzaWJsZUl0ZW1IZWFkZXJEaXJlY3RpdmUsXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBNekNvbGxhcHNpYmxlQ29tcG9uZW50LFxyXG4gICAgTXpDb2xsYXBzaWJsZUl0ZW1Cb2R5RGlyZWN0aXZlLFxyXG4gICAgTXpDb2xsYXBzaWJsZUl0ZW1Db21wb25lbnQsXHJcbiAgICBNekNvbGxhcHNpYmxlSXRlbUhlYWRlckRpcmVjdGl2ZSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpDb2xsYXBzaWJsZU1vZHVsZSB7IH1cclxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbXpBdmF0YXJdLCBbbXotYXZhdGFyXScsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNekF2YXRhckRpcmVjdGl2ZSB7XHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5jaXJjbGUnKSB0cnVlO1xyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtei1jb2xsZWN0aW9uLWhlYWRlcicsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiY29sbGVjdGlvbi1oZWFkZXJcIj5cclxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjwvZGl2PmAsXHJcbiAgc3R5bGVzOiBbYGBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpDb2xsZWN0aW9uSGVhZGVyQ29tcG9uZW50IHsgfVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtei1jb2xsZWN0aW9uLWl0ZW0nLFxyXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXHJcbiAgc3R5bGVzOiBbYDpob3N0e2Rpc3BsYXk6YmxvY2t9YF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNekNvbGxlY3Rpb25JdGVtQ29tcG9uZW50IHtcclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmNvbGxlY3Rpb24taXRlbScpIHRydWU7XHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hdmF0YXInKSBASW5wdXQoKSBhdmF0YXI6IGJvb2xlYW47XHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5kaXNtaXNzYWJsZScpIEBJbnB1dCgpIGRpc21pc3NhYmxlOiBib29sZWFuO1xyXG59XHJcbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1ttekNvbGxlY3Rpb25MaW5rXSwgW216LWNvbGxlY3Rpb24tbGlua10nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpDb2xsZWN0aW9uTGlua0RpcmVjdGl2ZSB7XHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hY3RpdmUnKSBASW5wdXQoKSBhY3RpdmU6IGJvb2xlYW47XHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5jb2xsZWN0aW9uLWl0ZW0nKSB0cnVlO1xyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXotY29sbGVjdGlvbicsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiY29sbGVjdGlvblwiPlxyXG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuPC9kaXY+YCxcclxuICBzdHlsZXM6IFtgYF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNekNvbGxlY3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGNvbGxlY3Rpb25FbGVtZW50OiBKUXVlcnk7XHJcbiAgY29sbGVjdGlvbkhlYWRlckVsZW1lbnQ6IEpRdWVyeTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluaXRFbGVtZW50cygpO1xyXG4gICAgdGhpcy5pbml0Q29sbGVjdGlvbkhlYWRlcigpO1xyXG4gIH1cclxuXHJcbiAgaW5pdEVsZW1lbnRzKCkge1xyXG4gICAgdGhpcy5jb2xsZWN0aW9uRWxlbWVudCA9ICQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLmZpbmQoJy5jb2xsZWN0aW9uJyk7XHJcbiAgICB0aGlzLmNvbGxlY3Rpb25IZWFkZXJFbGVtZW50ID0gJCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkuZmluZCgnLmNvbGxlY3Rpb24taGVhZGVyJyk7XHJcbiAgfVxyXG5cclxuICBpbml0Q29sbGVjdGlvbkhlYWRlcigpIHtcclxuICAgIGlmICh0aGlzLmNvbGxlY3Rpb25IZWFkZXJFbGVtZW50Lmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmNvbGxlY3Rpb25FbGVtZW50WzBdLCAnd2l0aC1oZWFkZXInKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbXpTZWNvbmRhcnlDb250ZW50XSwgW216LXNlY29uZGFyeS1jb250ZW50XScsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNelNlY29uZGFyeUNvbnRlbnREaXJlY3RpdmUge1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2Vjb25kYXJ5LWNvbnRlbnQnKSB0cnVlO1xyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBNekF2YXRhckRpcmVjdGl2ZSB9IGZyb20gJy4vYXZhdGFyL2luZGV4JztcclxuaW1wb3J0IHsgTXpDb2xsZWN0aW9uSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb2xsZWN0aW9uLWhlYWRlci9pbmRleCc7XHJcbmltcG9ydCB7IE16Q29sbGVjdGlvbkl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2NvbGxlY3Rpb24taXRlbS9pbmRleCc7XHJcbmltcG9ydCB7IE16Q29sbGVjdGlvbkxpbmtEaXJlY3RpdmUgfSBmcm9tICcuL2NvbGxlY3Rpb24tbGluay9pbmRleCc7XHJcbmltcG9ydCB7IE16Q29sbGVjdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY29sbGVjdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNelNlY29uZGFyeUNvbnRlbnREaXJlY3RpdmUgfSBmcm9tICcuL3NlY29uZGFyeS1jb250ZW50L2luZGV4JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBNekF2YXRhckRpcmVjdGl2ZSxcclxuICAgIE16Q29sbGVjdGlvbkNvbXBvbmVudCxcclxuICAgIE16Q29sbGVjdGlvbkl0ZW1Db21wb25lbnQsXHJcbiAgICBNekNvbGxlY3Rpb25MaW5rRGlyZWN0aXZlLFxyXG4gICAgTXpDb2xsZWN0aW9uSGVhZGVyQ29tcG9uZW50LFxyXG4gICAgTXpTZWNvbmRhcnlDb250ZW50RGlyZWN0aXZlLFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgTXpBdmF0YXJEaXJlY3RpdmUsXHJcbiAgICBNekNvbGxlY3Rpb25Db21wb25lbnQsXHJcbiAgICBNekNvbGxlY3Rpb25JdGVtQ29tcG9uZW50LFxyXG4gICAgTXpDb2xsZWN0aW9uTGlua0RpcmVjdGl2ZSxcclxuICAgIE16Q29sbGVjdGlvbkhlYWRlckNvbXBvbmVudCxcclxuICAgIE16U2Vjb25kYXJ5Q29udGVudERpcmVjdGl2ZSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpDb2xsZWN0aW9uTW9kdWxlIHsgfVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ216LWRhdGVwaWNrZXItY29udGFpbmVyJyxcclxuICB0ZW1wbGF0ZTogYDxkaXZcclxuICBjbGFzcz1cImlucHV0LWZpZWxkXCJcclxuICBbY2xhc3MuaW5saW5lXT1cImlubGluZVwiXHJcbj5cclxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjwvZGl2PmAsXHJcbiAgc3R5bGVzOiBbYGBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpEYXRlcGlja2VyQ29udGFpbmVyQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBpbmxpbmU6IGJvb2xlYW47XHJcbn1cclxuIiwiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdEJpbmRpbmcsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3B0aW9uYWwsIFJlbmRlcmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBIYW5kbGVQcm9wQ2hhbmdlcyB9IGZyb20gJy4uL3NoYXJlZC9pbmRleCc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ2lucHV0W216RGF0ZXBpY2tlcl0sIGlucHV0W216LWRhdGVwaWNrZXJdJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16RGF0ZXBpY2tlckRpcmVjdGl2ZSBleHRlbmRzIEhhbmRsZVByb3BDaGFuZ2VzIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZGF0ZXBpY2tlcicpIHRydWU7XHJcblxyXG4gIC8vIG5hdGl2ZSBwcm9wZXJ0aWVzXHJcbiAgQElucHV0KCkgaWQ6IHN0cmluZztcclxuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xyXG5cclxuICAvLyBkaXJlY3RpdmUgcHJvcGVydGllc1xyXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XHJcblxyXG4gIC8vIG1hdGVyaWFsaXplIHVzZXMgcGlja2FkYXRlLmpzIHRvIGNyZWF0ZSB0aGUgZGF0ZXBpY2tlclxyXG4gIC8vIGNvbXBsZXRlIGxpc3Qgb2Ygb3B0aW9ucyBpcyBhdmFpbGFibGUgYXQgdGhlIGZvbGxvd2luZyBhZGRyZXNzXHJcbiAgLy8gaHR0cDovL2Ftc3VsLmNhL3BpY2thZGF0ZS5qcy9kYXRlLyNvcHRpb25zXHJcbiAgQElucHV0KCkgb3B0aW9uczogUGlja2FkYXRlLkRhdGVPcHRpb25zID0ge307XHJcblxyXG4gIGlucHV0RWxlbWVudDogSlF1ZXJ5O1xyXG4gIGlucHV0Q29udGFpbmVyRWxlbWVudDogSlF1ZXJ5O1xyXG4gIGlucHV0VmFsdWVTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuICBpc0luaXRSb3VuZCA9IHRydWU7XHJcbiAgbGFiZWxFbGVtZW50OiBKUXVlcnk7XHJcbiAgc3RvcENoYW5nZVByb3BhZ2F0aW9uID0gZmFsc2U7XHJcblxyXG4gIGdldCBmb3JtYXQoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZm9ybWF0IHx8IHRoaXMub3B0aW9ucy5mb3JtYXRTdWJtaXQgfHwgbnVsbDtcclxuICB9XHJcblxyXG4gIGdldCBmb3JtYXRTdWJtaXQoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZm9ybWF0U3VibWl0IHx8IHRoaXMub3B0aW9ucy5mb3JtYXQgfHwgbnVsbDtcclxuICB9XHJcblxyXG4gIGdldCBuZ0NvbnRyb2xWYWx1ZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMubmdDb250cm9sLnZhbHVlID09PSAnJyA/IG51bGwgOiB0aGlzLm5nQ29udHJvbC52YWx1ZTtcclxuICB9XHJcblxyXG4gIGdldCBwaWNrZXIoKTogUGlja2FkYXRlLkRhdGVQaWNrZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuaW5wdXRFbGVtZW50LnBpY2thZGF0ZSgncGlja2VyJyk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgbmdDb250cm9sOiBOZ0NvbnRyb2wsXHJcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyLFxyXG4gICkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbml0SGFuZGxlcnMoKTtcclxuICAgIHRoaXMuaW5pdEVsZW1lbnRzKCk7XHJcbiAgICB0aGlzLmluaXREYXRlcGlja2VyKCk7XHJcbiAgICB0aGlzLmluaXRJbnB1dFN1YnNjcmlwdGlvbigpO1xyXG4gICAgdGhpcy5oYW5kbGVQcm9wZXJ0aWVzKCk7XHJcbiAgICB0aGlzLmlzSW5pdFJvdW5kID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIGlmICh0aGlzLmlucHV0VmFsdWVTdWJzY3JpcHRpb24pIHtcclxuICAgICAgdGhpcy5pbnB1dFZhbHVlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbml0SGFuZGxlcnMoKSB7XHJcbiAgICB0aGlzLmhhbmRsZXJzID0ge1xyXG4gICAgICBsYWJlbDogKCkgPT4gdGhpcy5oYW5kbGVMYWJlbCgpLFxyXG4gICAgICBvcHRpb25zOiAoKSA9PiB0aGlzLmhhbmRsZU9wdGlvbnMoKSxcclxuICAgICAgcGxhY2Vob2xkZXI6ICgpID0+IHRoaXMuaGFuZGxlUGxhY2Vob2xkZXIoKSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBpbml0RWxlbWVudHMoKSB7XHJcbiAgICB0aGlzLmlucHV0Q29udGFpbmVyRWxlbWVudCA9ICQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLnBhcmVudCgnLmlucHV0LWZpZWxkJyk7XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudCA9ICQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgdGhpcy5sYWJlbEVsZW1lbnQgPSB0aGlzLmNyZWF0ZUxhYmVsRWxlbWVudCgpO1xyXG4gIH1cclxuXHJcbiAgaW5pdERhdGVwaWNrZXIoKSB7XHJcbiAgICAvLyBzZXQgZGVmYXVsdCBmb3JtYXQvZm9ybWF0U3VibWl0IG9wdGlvbnNcclxuICAgIGlmICh0aGlzLmZvcm1hdCkge1xyXG4gICAgICB0aGlzLm9wdGlvbnMuZm9ybWF0ID0gdGhpcy5mb3JtYXQ7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5mb3JtYXRTdWJtaXQpIHtcclxuICAgICAgdGhpcy5vcHRpb25zLmZvcm1hdFN1Ym1pdCA9IHRoaXMuZm9ybWF0U3VibWl0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGV4dGVuZHMgb25DbG9zZSBmdW5jdGlvbiB0byBmaXggZGF0ZXBpY2tlciBmb2N1cyBpc3N1ZVxyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0RvZ2ZhbG8vbWF0ZXJpYWxpemUvaXNzdWVzLzIwNjcjaXNzdWVjb21tZW50LTE0MjEwNzU5OVxyXG4gICAgY29uc3Qgb25DbG9zZUZuID0gdGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5vbkNsb3NlIHx8ICgoKSA9PiB7fSk7XHJcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLm9wdGlvbnMsIHtcclxuICAgICAgb25DbG9zZTogKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgb25DbG9zZUZuKGV2ZW50KTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCwgJ2JsdXInKTtcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLmlucHV0RWxlbWVudCwgJ3BpY2thZGF0ZScsIFt0aGlzLm9wdGlvbnNdKTtcclxuXHJcbiAgICBpZiAodGhpcy5uZ0NvbnRyb2wpIHtcclxuICAgICAgLy8gc2V0IGRhdGVwaWNrZXIgaW5pdGlhbCB2YWx1ZSBhY2NvcmRpbmcgdG8gbmdDb250cm9sXHJcbiAgICAgIHRoaXMucGlja2VyLnNldCgnc2VsZWN0JywgdGhpcy5uZ0NvbnRyb2xWYWx1ZSwgeyBmb3JtYXQ6IHRoaXMuZm9ybWF0U3VibWl0IH0pO1xyXG5cclxuICAgICAgLy8gc2V0IG5nQ29udHJvbCB2YWx1ZSBhY2NvcmRpbmcgdG8gc2VsZWN0ZWQgZGF0ZSBpbiBkYXRlcGlja2VyXHJcbiAgICAgIHRoaXMucGlja2VyLm9uKCdzZXQnLCAoKSA9PiB7XHJcbiAgICAgICAgLy8gaGFuZGxlIHN0b3AgcHJvcGFnYXRpb25cclxuICAgICAgICBpZiAodGhpcy5zdG9wQ2hhbmdlUHJvcGFnYXRpb24pIHtcclxuICAgICAgICAgIHRoaXMuc3RvcENoYW5nZVByb3BhZ2F0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc3RvcENoYW5nZVByb3BhZ2F0aW9uID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGFwcGx5IG9wdGlvbnMuZm9ybWF0U3VibWl0IHRvIG5nQ29udHJvbCB2YWx1ZVxyXG4gICAgICAgIGNvbnN0IHN1Ym1pdFZhbHVlID0gdGhpcy5mb3JtYXRTdWJtaXRcclxuICAgICAgICAgID8gdGhpcy5waWNrZXIuZ2V0KCdzZWxlY3QnLCB0aGlzLmZvcm1hdFN1Ym1pdClcclxuICAgICAgICAgIDogdGhpcy5waWNrZXIuZ2V0KCd2YWx1ZScpO1xyXG4gICAgICAgIHRoaXMubmdDb250cm9sLmNvbnRyb2wuc2V0VmFsdWUoc3VibWl0VmFsdWUpO1xyXG5cclxuICAgICAgICAvLyBhcHBseSBvcHRpb25zLmZvcm1hdCB0byBpbnB1dCB0ZXh0XHJcbiAgICAgICAgY29uc3QgZm9ybWF0VmFsdWUgPSB0aGlzLmZvcm1hdFxyXG4gICAgICAgICAgPyB0aGlzLnBpY2tlci5nZXQoJ3NlbGVjdCcsIHRoaXMuZm9ybWF0KVxyXG4gICAgICAgICAgOiB0aGlzLnBpY2tlci5nZXQoJ3ZhbHVlJyk7XHJcbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnQudmFsKGZvcm1hdFZhbHVlKTtcclxuXHJcbiAgICAgICAgLy8gc2V0IGxhYmVsIGFjdGl2ZSBzdGF0dXNcclxuICAgICAgICB0aGlzLnNldExhYmVsQWN0aXZlKCk7XHJcblxyXG4gICAgICAgIC8vIG1hcmsgZm9yIGNoYW5nZSBkZXRlY3Rpb25cclxuICAgICAgICAvLyBmaXggZm9ybSB2YWxpZGF0aW9uIHdpdGggQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbiAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbml0SW5wdXRTdWJzY3JpcHRpb24oKSB7XHJcbiAgICBpZiAodGhpcy5uZ0NvbnRyb2wpIHtcclxuICAgICAgdGhpcy5pbnB1dFZhbHVlU3Vic2NyaXB0aW9uID0gdGhpcy5uZ0NvbnRyb2wudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgLy8gaGFuZGxlIHN0b3AgcHJvcGFnYXRpb25cclxuICAgICAgICBpZiAodGhpcy5zdG9wQ2hhbmdlUHJvcGFnYXRpb24pIHtcclxuICAgICAgICAgIHRoaXMuc3RvcENoYW5nZVByb3BhZ2F0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc3RvcENoYW5nZVByb3BhZ2F0aW9uID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHNldCBzZWxlY3RlZCBkYXRlIGluIGRhdGVwaWNrZXIgYWNjb3JkaW5nIHRvIG5nQ29udHJvbCB2YWx1ZVxyXG4gICAgICAgIHRoaXMucGlja2VyLnNldCgnc2VsZWN0JywgdGhpcy5uZ0NvbnRyb2xWYWx1ZSwgeyBmb3JtYXQ6IHRoaXMuZm9ybWF0U3VibWl0IH0pO1xyXG5cclxuICAgICAgICAvLyBzZXQgbGFiZWwgYWN0aXZlIHN0YXR1c1xyXG4gICAgICAgIHRoaXMuc2V0TGFiZWxBY3RpdmUoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjcmVhdGVMYWJlbEVsZW1lbnQoKSB7XHJcbiAgICBjb25zdCBsYWJlbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgbGFiZWxFbGVtZW50LnNldEF0dHJpYnV0ZSgnZm9yJywgdGhpcy5pZCk7XHJcblxyXG4gICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMuaW5wdXRFbGVtZW50LCAnYWZ0ZXInLCBbbGFiZWxFbGVtZW50XSk7XHJcblxyXG4gICAgcmV0dXJuICQobGFiZWxFbGVtZW50KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVByb3BlcnRpZXMoKSB7XHJcbiAgICBpZiAodGhpcy5pbnB1dENvbnRhaW5lckVsZW1lbnQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0lucHV0IHdpdGggbXotZGF0ZXBpY2tlciBkaXJlY3RpdmUgbXVzdCBiZSBwbGFjZWQgaW5zaWRlIGFuIFttei1kYXRlcGlja2VyLWNvbnRhaW5lcl0gdGFnJywgdGhpcy5pbnB1dEVsZW1lbnQpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgc3VwZXIuZXhlY3V0ZVByb3BIYW5kbGVycygpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlTGFiZWwoKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QodGhpcy5sYWJlbEVsZW1lbnQsICd0ZXh0JywgW3RoaXMubGFiZWxdKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZU9wdGlvbnMoKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNJbml0Um91bmQpIHtcclxuICAgICAgdGhpcy5waWNrZXIuc2V0KHRoaXMub3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVQbGFjZWhvbGRlcigpIHtcclxuICAgIGNvbnN0IHBsYWNlaG9sZGVyID0gISF0aGlzLnBsYWNlaG9sZGVyID8gdGhpcy5wbGFjZWhvbGRlciA6IG51bGw7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRBdHRyaWJ1dGUodGhpcy5pbnB1dEVsZW1lbnRbMF0sICdwbGFjZWhvbGRlcicsIHBsYWNlaG9sZGVyKTtcclxuXHJcbiAgICAvLyBmaXggaXNzdWUgaW4gSUUgd2hlcmUgaGF2aW5nIGEgcGxhY2Vob2xkZXIgb24gaW5wdXQgbWFrZSBjb250cm9sIGRpcnR5IGFuZCB0cmlnZ2VyIHZhbGlkYXRpb25cclxuICAgIC8vIG9uIHBhZ2UgbG9hZC4uLiBub3RlIHRoYXQgaXQgc3RpbGwgdHJpZ2dlciB2YWxpZGF0aW9uIG9uIGZvY3VzIGFuZCB3b3VsZCBuZWVkIGEgYmV0dGVyIGZpeFxyXG4gICAgLy8gaXNzdWUgOiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xNTI5OVxyXG4gICAgLy8gd29ya2Fyb3VuZCA6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS80NDk2NzI0NS81NTgzMjgzXHJcbiAgICBpZiAodGhpcy5uZ0NvbnRyb2wpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLm5nQ29udHJvbC5jb250cm9sLm1hcmtBc1ByaXN0aW5lKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2V0TGFiZWxBY3RpdmUoKTtcclxuICB9XHJcblxyXG4gIHNldExhYmVsQWN0aXZlKCkge1xyXG4gICAgLy8gbmVlZCBzZXRUaW1lb3V0IG90aGVyd2lzZSBpdCB3b250IG1ha2UgbGFiZWwgZmxvYXQgaW4gc29tZSBjaXJjb25zdGFuY2VzIChmb3JjaW5nIHZhbGlkYXRpb24gZm9yIGV4YW1wbGUpXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgY29uc3QgaW5wdXRWYWx1ZSA9ICg8SFRNTElucHV0RWxlbWVudD50aGlzLmlucHV0RWxlbWVudFswXSkudmFsdWU7XHJcbiAgICAgIGNvbnN0IGlzQWN0aXZlID0gISF0aGlzLnBsYWNlaG9sZGVyIHx8ICEhaW5wdXRWYWx1ZTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5sYWJlbEVsZW1lbnRbMF0sICdhY3RpdmUnLCBpc0FjdGl2ZSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE16RGF0ZXBpY2tlckNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vZGF0ZXBpY2tlci1jb250YWluZXIvaW5kZXgnO1xyXG5pbXBvcnQgeyBNekRhdGVwaWNrZXJEaXJlY3RpdmUgfSBmcm9tICcuL2RhdGVwaWNrZXIuZGlyZWN0aXZlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBNekRhdGVwaWNrZXJEaXJlY3RpdmUsXHJcbiAgICBNekRhdGVwaWNrZXJDb250YWluZXJDb21wb25lbnQsXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBNekRhdGVwaWNrZXJEaXJlY3RpdmUsXHJcbiAgICBNekRhdGVwaWNrZXJDb250YWluZXJDb21wb25lbnQsXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16RGF0ZXBpY2tlck1vZHVsZSB7IH1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ216LWRyb3Bkb3duLWRpdmlkZXInLFxyXG4gIHRlbXBsYXRlOiBgPGxpIGNsYXNzPVwiZGl2aWRlclwiPjwvbGk+YCxcclxuICBzdHlsZXM6IFtgYF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNekRyb3Bkb3duRGl2aWRlckNvbXBvbmVudCB7IH1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ216LWRyb3Bkb3duLWl0ZW0nLFxyXG4gIHRlbXBsYXRlOiBgPGxpPlxyXG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuPC9saT5gLFxyXG4gIHN0eWxlczogW2BgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16RHJvcGRvd25JdGVtQ29tcG9uZW50IHsgfVxyXG4iLCJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgUmVuZGVyZXIsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBIYW5kbGVQcm9wQ2hhbmdlcyB9IGZyb20gJy4uL3NoYXJlZC9pbmRleCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ216LWRyb3Bkb3duJyxcclxuICB0ZW1wbGF0ZTogYDx1bFxyXG4gIGNsYXNzPVwiZHJvcGRvd24tY29udGVudFwiXHJcbiAgW2F0dHIuaWRdPVwiaWRcIlxyXG4+XHJcbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L3VsPmAsXHJcbiAgc3R5bGVzOiBbYGBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpEcm9wZG93bkNvbXBvbmVudCBleHRlbmRzIEhhbmRsZVByb3BDaGFuZ2VzIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQElucHV0KCkgYWxpZ246IHN0cmluZztcclxuICBASW5wdXQoKSBiZWxvd09yaWdpbjogYm9vbGVhbjtcclxuICBASW5wdXQoKSBjb25zdHJhaW5XaWR0aDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBkcm9wZG93bkJ1dHRvbklkOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZ3V0dGVyOiBudW1iZXI7XHJcbiAgQElucHV0KCkgaG92ZXI6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgaWQ6IHN0cmluZztcclxuICBASW5wdXQoKSBpbkR1cmF0aW9uOiBudW1iZXI7XHJcbiAgQElucHV0KCkgb3V0RHVyYXRpb246IG51bWJlcjtcclxuICBASW5wdXQoKSBzdG9wUHJvcGFnYXRpb246IGJvb2xlYW47XHJcblxyXG4gIGRyb3Bkb3duQnV0dG9uRWxlbWVudDogSlF1ZXJ5O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMuaW5pdEhhbmRsZXJzKCk7XHJcbiAgICB0aGlzLmluaXREcm9wZG93bkJ1dHRvbkVsZW1lbnQoKTtcclxuICAgIHRoaXMuaGFuZGxlUHJvcGVydGllcygpO1xyXG4gIH1cclxuXHJcbiAgY2xvc2UoKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLmRyb3Bkb3duQnV0dG9uRWxlbWVudCwgJ2Ryb3Bkb3duJywgWydjbG9zZSddKSk7XHJcbiAgfVxyXG5cclxuICBpbml0RHJvcGRvd25CdXR0b25FbGVtZW50KCkge1xyXG4gICAgdGhpcy5kcm9wZG93bkJ1dHRvbkVsZW1lbnQgPSAkKGAjJHt0aGlzLmRyb3Bkb3duQnV0dG9uSWR9YCk7XHJcbiAgfVxyXG5cclxuICBpbml0SGFuZGxlcnMoKSB7XHJcbiAgICB0aGlzLmhhbmRsZXJzID0ge1xyXG4gICAgICBhbGlnbjogKCkgPT4gdGhpcy5oYW5kbGVEcm9wZG93bigpLFxyXG4gICAgICBiZWxvd09yaWdpbjogKCkgPT4gdGhpcy5oYW5kbGVEcm9wZG93bigpLFxyXG4gICAgICBjb25zdHJhaW5XaWR0aDogKCkgPT4gdGhpcy5oYW5kbGVEcm9wZG93bigpLFxyXG4gICAgICBkcm9wZG93bkJ1dHRvbklkOiAoKSA9PiB0aGlzLmhhbmRsZURhdGFBY3RpdmF0ZXMoKSxcclxuICAgICAgZ3V0dGVyOiAoKSA9PiB0aGlzLmhhbmRsZURyb3Bkb3duKCksXHJcbiAgICAgIGhvdmVyOiAoKSA9PiB0aGlzLmhhbmRsZURyb3Bkb3duKCksXHJcbiAgICAgIGlkOiAoKSA9PiB0aGlzLmhhbmRsZURyb3Bkb3duKCksXHJcbiAgICAgIGluRHVyYXRpb246ICgpID0+IHRoaXMuaGFuZGxlRHJvcGRvd24oKSxcclxuICAgICAgb3V0RHVyYXRpb246ICgpID0+IHRoaXMuaGFuZGxlRHJvcGRvd24oKSxcclxuICAgICAgc3RvcFByb3BhZ2F0aW9uOiAoKSA9PiB0aGlzLmhhbmRsZURyb3Bkb3duKCksXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRGF0YUFjdGl2YXRlcygpIHtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudEF0dHJpYnV0ZSh0aGlzLmRyb3Bkb3duQnV0dG9uRWxlbWVudFswXSwgJ2RhdGEtYWN0aXZhdGVzJywgdGhpcy5pZCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVEcm9wZG93bigpIHtcclxuICAgIHRoaXMudmFsaWRhdGVQcm9wZXJ0aWVzKCk7XHJcblxyXG4gICAgY29uc3Qgb3B0aW9uczogTWF0ZXJpYWxpemUuRHJvcERvd25PcHRpb25zID0ge1xyXG4gICAgICBhbGlnbm1lbnQ6IHRoaXMuYWxpZ24sXHJcbiAgICAgIGJlbG93T3JpZ2luOiB0aGlzLmJlbG93T3JpZ2luLFxyXG4gICAgICBjb25zdHJhaW5XaWR0aDogdGhpcy5jb25zdHJhaW5XaWR0aCxcclxuICAgICAgZ3V0dGVyOiB0aGlzLmd1dHRlcixcclxuICAgICAgaG92ZXI6IHRoaXMuaG92ZXIsXHJcbiAgICAgIGluRHVyYXRpb246IHRoaXMuaW5EdXJhdGlvbixcclxuICAgICAgb3V0RHVyYXRpb246IHRoaXMub3V0RHVyYXRpb24sXHJcbiAgICAgIHN0b3BQcm9wYWdhdGlvbjogdGhpcy5zdG9wUHJvcGFnYXRpb24sXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIEluaXRpYWxpemUgZHJvcGRvd24gYnV0dG9uIGZvciBkcm9wZG93blxyXG4gICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMuZHJvcGRvd25CdXR0b25FbGVtZW50LCAnZHJvcGRvd24nLCBbb3B0aW9uc10pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlUHJvcGVydGllcygpIHtcclxuICAgIHRoaXMuaGFuZGxlRGF0YUFjdGl2YXRlcygpO1xyXG4gICAgdGhpcy5oYW5kbGVEcm9wZG93bigpO1xyXG4gIH1cclxuXHJcbiAgb3BlbigpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMuZHJvcGRvd25CdXR0b25FbGVtZW50LCAnZHJvcGRvd24nLCBbJ29wZW4nXSkpO1xyXG4gIH1cclxuXHJcbiAgdmFsaWRhdGVQcm9wZXJ0aWVzKCkge1xyXG4gICAgaWYgKCF0aGlzLmlkKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignQXR0cmlidXRlIFtpZF0gZnJvbSBtei1kcm9wZG93biBpcyByZXF1aXJlZC4gJyArIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5kcm9wZG93bkJ1dHRvbkVsZW1lbnQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAnQXR0cmlidXRlIFtkcm9wZG93bkJ1dHRvbklkXSBmcm9tIG16LWRyb3Bkb3duIGlzIHJlcXVpcmVkIGFuZCBzaG91bGQgYmUgYW4gZXhpc3RpbmcgZWxlbWVudC4gJyArXHJcbiAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTXpEcm9wZG93bkRpdmlkZXJDb21wb25lbnQgfSBmcm9tICcuL2Ryb3Bkb3duLWRpdmlkZXIvaW5kZXgnO1xyXG5pbXBvcnQgeyBNekRyb3Bkb3duSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vZHJvcGRvd24taXRlbS9pbmRleCc7XHJcbmltcG9ydCB7IE16RHJvcGRvd25Db21wb25lbnQgfSBmcm9tICcuL2Ryb3Bkb3duLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgTXpEcm9wZG93bkNvbXBvbmVudCxcclxuICAgIE16RHJvcGRvd25EaXZpZGVyQ29tcG9uZW50LFxyXG4gICAgTXpEcm9wZG93bkl0ZW1Db21wb25lbnQsXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBNekRyb3Bkb3duQ29tcG9uZW50LFxyXG4gICAgTXpEcm9wZG93bkRpdmlkZXJDb21wb25lbnQsXHJcbiAgICBNekRyb3Bkb3duSXRlbUNvbXBvbmVudCxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpEcm9wZG93bk1vZHVsZSB7IH1cclxuIiwiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXotZmVhdHVyZS1kaXNjb3ZlcnknLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInRhcC10YXJnZXQtY29udGVudFwiPlxyXG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuPC9kaXY+XHJcbmAsXHJcbiAgc3R5bGVzOiBbYDpob3N0e2Rpc3BsYXk6YmxvY2t9YF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNekZlYXR1cmVEaXNjb3ZlcnlDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnRhcC10YXJnZXQnKVxyXG4gIHRhcmdldENsYXNzID0gdHJ1ZTtcclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmRhdGEtYWN0aXZhdGVzJylcclxuICBASW5wdXQoKVxyXG4gIHRhcmdldElkOiBzdHJpbmc7XHJcblxyXG4gIHByaXZhdGUgdGFyZ2V0OiBKUXVlcnk8RWxlbWVudD47XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICkgeyB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMudGFyZ2V0ID0gJCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBjbG9zZSgpIHtcclxuICAgIHRoaXMudGFyZ2V0LnRhcFRhcmdldCgnY2xvc2UnKTtcclxuICB9XHJcblxyXG4gIG9wZW4oKSB7XHJcbiAgICB0aGlzLnRhcmdldC50YXBUYXJnZXQoJ29wZW4nKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE16RmVhdHVyZURpc2NvdmVyeUNvbXBvbmVudCB9IGZyb20gJy4vZmVhdHVyZS1kaXNjb3ZlcnkuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBNekZlYXR1cmVEaXNjb3ZlcnlDb21wb25lbnQsXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBNekZlYXR1cmVEaXNjb3ZlcnlDb21wb25lbnQsXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16RmVhdHVyZURpc2NvdmVyeU1vZHVsZSB7IH1cclxuIiwiaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIFJlbmRlcmVyLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgSGFuZGxlUHJvcENoYW5nZXMgfSBmcm9tICcuLi9zaGFyZWQvaW5kZXgnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdpW216LWljb25dLCBpW216SWNvbl0nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpJY29uRGlyZWN0aXZlIGV4dGVuZHMgSGFuZGxlUHJvcENoYW5nZXMgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuICBASW5wdXQoKSBhbGlnbjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGljb246IHN0cmluZztcclxuICBASW5wdXQoKSBzaXplOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLmluaXRIYW5kbGVycygpO1xyXG4gICAgdGhpcy5pbml0TWF0ZXJpYWxpemUoKTtcclxuICAgIHN1cGVyLmV4ZWN1dGVQcm9wSGFuZGxlcnMoKTtcclxuICB9XHJcblxyXG4gIGluaXRIYW5kbGVycygpIHtcclxuICAgIHRoaXMuaGFuZGxlcnMgPSB7XHJcbiAgICAgIGFsaWduOiAocHJldmlvdXNWYWx1ZSkgPT4gdGhpcy5oYW5kbGVBbGlnbihwcmV2aW91c1ZhbHVlKSxcclxuICAgICAgaWNvbjogKCkgPT4gdGhpcy5oYW5kbGVJY29uKCksXHJcbiAgICAgIHNpemU6IChwcmV2aW91c1ZhbHVlKSA9PiB0aGlzLmhhbmRsZVNpemUocHJldmlvdXNWYWx1ZSksXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgaW5pdE1hdGVyaWFsaXplKCkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtYXRlcmlhbC1pY29ucycsIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQWxpZ24ocHJldmlvdXNWYWx1ZT86IHN0cmluZykge1xyXG4gICAgaWYgKHByZXZpb3VzVmFsdWUpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHByZXZpb3VzVmFsdWUsIGZhbHNlKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmFsaWduKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmFsaWduLCB0cnVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZUljb24oKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRQcm9wZXJ0eSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2lubmVySFRNTCcsIHRoaXMuaWNvbik7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVTaXplKHByZXZpb3VzVmFsdWU/OiBzdHJpbmcpIHtcclxuICAgIGlmIChwcmV2aW91c1ZhbHVlKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBwcmV2aW91c1ZhbHVlLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zaXplKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLnNpemUsIHRydWUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTXpJY29uRGlyZWN0aXZlIH0gZnJvbSAnLi9pY29uLmRpcmVjdGl2ZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgTXpJY29uRGlyZWN0aXZlLFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgTXpJY29uRGlyZWN0aXZlLFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNekljb25Nb2R1bGUgeyB9XHJcbiIsImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBEaXJlY3RpdmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBSZW5kZXJlcixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEhhbmRsZVByb3BDaGFuZ2VzIH0gZnJvbSAnLi4vc2hhcmVkL2luZGV4JztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnYVttei1pY29uLW1kaV0sIGFbbXpJY29uTWRpXSwgaVttei1pY29uLW1kaV0sIGlbbXpJY29uTWRpXScsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNekljb25NZGlEaXJlY3RpdmUgZXh0ZW5kcyBIYW5kbGVQcm9wQ2hhbmdlcyBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG4gIEBJbnB1dCgpIGFsaWduOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZmxpcDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGljb246IHN0cmluZztcclxuICBASW5wdXQoKSByb3RhdGU6IHN0cmluZztcclxuICBASW5wdXQoKSBzaXplOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLmluaXRIYW5kbGVycygpO1xyXG4gICAgdGhpcy5pbml0TWF0ZXJpYWxpemUoKTtcclxuICAgIHN1cGVyLmV4ZWN1dGVQcm9wSGFuZGxlcnMoKTtcclxuICB9XHJcblxyXG4gIGluaXRIYW5kbGVycygpIHtcclxuICAgIHRoaXMuaGFuZGxlcnMgPSB7XHJcbiAgICAgIGFsaWduOiAocHJldmlvdXNWYWx1ZSkgPT4gdGhpcy5oYW5kbGVBbGlnbihwcmV2aW91c1ZhbHVlKSxcclxuICAgICAgZmxpcDogKHByZXZpb3VzVmFsdWUpID0+IHRoaXMuaGFuZGxlRmxpcChwcmV2aW91c1ZhbHVlKSxcclxuICAgICAgaWNvbjogKHByZXZpb3VzVmFsdWUpID0+IHRoaXMuaGFuZGxlSWNvbihwcmV2aW91c1ZhbHVlKSxcclxuICAgICAgcm90YXRlOiAocHJldmlvdXNWYWx1ZSkgPT4gdGhpcy5oYW5kbGVSb3RhdGUocHJldmlvdXNWYWx1ZSksXHJcbiAgICAgIHNpemU6IChwcmV2aW91c1ZhbHVlKSA9PiB0aGlzLmhhbmRsZVNpemUocHJldmlvdXNWYWx1ZSksXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgaW5pdE1hdGVyaWFsaXplKCkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtZGknLCB0cnVlKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUFsaWduKHByZXZpb3VzVmFsdWU/OiBzdHJpbmcpIHtcclxuICAgIGlmIChwcmV2aW91c1ZhbHVlKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBwcmV2aW91c1ZhbHVlLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5hbGlnbikge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5hbGlnbiwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVGbGlwKHByZXZpb3VzVmFsdWU/OiBzdHJpbmcpIHtcclxuICAgIGlmIChwcmV2aW91c1ZhbHVlKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbWRpLWZsaXAtJyArIHByZXZpb3VzVmFsdWUsIGZhbHNlKTtcclxuICAgIH1cclxuICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbWRpLWZsaXAtJyArIHRoaXMuZmxpcCwgISF0aGlzLmZsaXApO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlSWNvbihwcmV2aW91c1ZhbHVlPzogc3RyaW5nKSB7XHJcbiAgICBpZiAocHJldmlvdXNWYWx1ZSkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21kaS0nICsgcHJldmlvdXNWYWx1ZSwgZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtZGktJyArIHRoaXMuaWNvbiwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVSb3RhdGUocHJldmlvdXNWYWx1ZT86IHN0cmluZykge1xyXG4gICAgaWYgKHByZXZpb3VzVmFsdWUpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtZGktcm90YXRlLScgKyBwcmV2aW91c1ZhbHVlLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21kaS1yb3RhdGUtJyArIHRoaXMucm90YXRlLCAhIXRoaXMucm90YXRlKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVNpemUocHJldmlvdXNWYWx1ZT86IHN0cmluZykge1xyXG4gICAgaWYgKCF0aGlzLnNpemUpIHtcclxuICAgICAgdGhpcy5zaXplID0gJzI0cHgnO1xyXG4gICAgfVxyXG4gICAgaWYgKHByZXZpb3VzVmFsdWUpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtZGktJyArIHByZXZpb3VzVmFsdWUsIGZhbHNlKTtcclxuICAgIH1cclxuICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbWRpLScgKyB0aGlzLnNpemUsIHRydWUpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTXpJY29uTWRpRGlyZWN0aXZlIH0gZnJvbSAnLi9pY29uLW1kaS5kaXJlY3RpdmUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIE16SWNvbk1kaURpcmVjdGl2ZSxcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIE16SWNvbk1kaURpcmVjdGl2ZSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpJY29uTWRpTW9kdWxlIHsgfVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ216LWlucHV0LWNvbnRhaW5lcicsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2XHJcbiAgY2xhc3M9XCJpbnB1dC1maWVsZFwiXHJcbiAgW2NsYXNzLmlubGluZV09XCJpbmxpbmVcIlxyXG4+XHJcbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L2Rpdj5gLFxyXG4gIHN0eWxlczogW2BgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16SW5wdXRDb250YWluZXJDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGlubGluZTogYm9vbGVhbjtcclxufVxyXG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIE9uSW5pdCwgUmVuZGVyZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnaVtteklucHV0UHJlZml4XSwgaVttei1pbnB1dC1wcmVmaXhdJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16SW5wdXRQcmVmaXhEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3ByZWZpeCcsIHRydWUpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3B0aW9uYWwsIFJlbmRlcmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgaW50ZXJ2YWwsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmaXJzdCwgc2tpcFdoaWxlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgSGFuZGxlUHJvcENoYW5nZXMgfSBmcm9tICcuLi9zaGFyZWQnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdpbnB1dFtteklucHV0XSwgaW5wdXRbbXotaW5wdXRdJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16SW5wdXREaXJlY3RpdmUgZXh0ZW5kcyBIYW5kbGVQcm9wQ2hhbmdlcyBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICAvLyBuYXRpdmUgcHJvcGVydGllc1xyXG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcclxuXHJcbiAgLy8gZGlyZWN0aXZlIHByb3BlcnRpZXNcclxuICBASW5wdXQoKSBhdXRvY29tcGxldGU6IHsgZGF0YTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB9O1xyXG4gIEBJbnB1dCgpIGRhdGFFcnJvcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGRhdGFTdWNjZXNzOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcclxuICBASW5wdXQoKSBsZW5ndGg6IG51bWJlcjtcclxuICBASW5wdXQoKSB2YWxpZGF0ZTogYm9vbGVhbjtcclxuXHJcbiAgaW5wdXRFbGVtZW50OiBKUXVlcnk7XHJcbiAgaW5wdXRDb250YWluZXJFbGVtZW50OiBKUXVlcnk7XHJcbiAgaW5wdXRWYWx1ZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG4gIGxhYmVsRWxlbWVudDogSlF1ZXJ5O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgbmdDb250cm9sOiBOZ0NvbnRyb2wsXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcixcclxuICApIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5pdEhhbmRsZXJzKCk7XHJcbiAgICB0aGlzLmluaXRFbGVtZW50cygpO1xyXG4gICAgdGhpcy5pbml0SW5wdXRTdWJzY3JpcHRpb24oKTtcclxuICAgIHRoaXMuaGFuZGxlUHJvcGVydGllcygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICBpZiAodGhpcy5pbnB1dFZhbHVlU3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgIHRoaXMuaW5wdXRWYWx1ZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5pdEhhbmRsZXJzKCkge1xyXG4gICAgdGhpcy5oYW5kbGVycyA9IHtcclxuICAgICAgYXV0b2NvbXBsZXRlOiAoKSA9PiB0aGlzLmhhbmRsZUF1dG9jb21wbGV0ZSgpLFxyXG4gICAgICBkYXRhRXJyb3I6ICgpID0+IHRoaXMuaGFuZGxlRGF0YUVycm9yKCksXHJcbiAgICAgIGRhdGFTdWNjZXNzOiAoKSA9PiB0aGlzLmhhbmRsZURhdGFTdWNjZXNzKCksXHJcbiAgICAgIGxhYmVsOiAoKSA9PiB0aGlzLmhhbmRsZUxhYmVsKCksXHJcbiAgICAgIGxlbmd0aDogKCkgPT4gdGhpcy5oYW5kbGVMZW5ndGgoKSxcclxuICAgICAgcGxhY2Vob2xkZXI6ICgpID0+IHRoaXMuaGFuZGxlUGxhY2Vob2xkZXIoKSxcclxuICAgICAgdmFsaWRhdGU6ICgpID0+IHRoaXMuaGFuZGxlVmFsaWRhdGUoKSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBpbml0RWxlbWVudHMoKSB7XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudCA9ICQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgdGhpcy5pbnB1dENvbnRhaW5lckVsZW1lbnQgPSAkKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5wYXJlbnQoJy5pbnB1dC1maWVsZCcpO1xyXG4gICAgdGhpcy5sYWJlbEVsZW1lbnQgPSB0aGlzLmNyZWF0ZUxhYmVsRWxlbWVudCgpO1xyXG4gIH1cclxuXHJcbiAgaW5pdElucHV0U3Vic2NyaXB0aW9uKCkge1xyXG4gICAgaWYgKHRoaXMubmdDb250cm9sKSB7XHJcbiAgICAgIHRoaXMuaW5wdXRWYWx1ZVN1YnNjcmlwdGlvbiA9IHRoaXMubmdDb250cm9sLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4gdGhpcy5zZXRMYWJlbEFjdGl2ZSgpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNyZWF0ZUxhYmVsRWxlbWVudCgpIHtcclxuICAgIGNvbnN0IGxhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBsYWJlbEVsZW1lbnQuc2V0QXR0cmlidXRlKCdmb3InLCB0aGlzLmlkKTtcclxuXHJcbiAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QodGhpcy5pbnB1dEVsZW1lbnQsICdhZnRlcicsIFtsYWJlbEVsZW1lbnRdKTtcclxuXHJcbiAgICByZXR1cm4gJChsYWJlbEVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlUHJvcGVydGllcygpIHtcclxuICAgIGlmICh0aGlzLmlucHV0Q29udGFpbmVyRWxlbWVudC5sZW5ndGggPT09IDApIHtcclxuICAgICAgY29uc29sZS5lcnJvcignSW5wdXQgd2l0aCBtei1pbnB1dCBkaXJlY3RpdmUgbXVzdCBiZSBwbGFjZWQgaW5zaWRlIGFuIFttei1pbnB1dC1jb250YWluZXJdIHRhZycsIHRoaXMuaW5wdXRFbGVtZW50KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHN1cGVyLmV4ZWN1dGVQcm9wSGFuZGxlcnMoKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUF1dG9jb21wbGV0ZSgpIHtcclxuICAgIGNvbnN0IGlzQXV0b2NvbXBsZXRlID0gdGhpcy5hdXRvY29tcGxldGUgIT0gbnVsbFxyXG4gICAgICAmJiB0aGlzLmF1dG9jb21wbGV0ZS5kYXRhICE9IG51bGxcclxuICAgICAgJiYgT2JqZWN0LmtleXModGhpcy5hdXRvY29tcGxldGUuZGF0YSkubGVuZ3RoID4gMDtcclxuXHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLmlucHV0RWxlbWVudFswXSwgJ2F1dG9jb21wbGV0ZScsIGlzQXV0b2NvbXBsZXRlKTtcclxuXHJcbiAgICBpZiAodGhpcy5hdXRvY29tcGxldGUgIT0gbnVsbCkge1xyXG4gICAgICAvLyB3YWl0IHVudGlsIGF1dG9jb21wbGV0ZSBpcyBkZWZpbmVkIGJlZm9yZSB0byBpbnZva2VcclxuICAgICAgLy8gc2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vRG9nZmFsby9tYXRlcmlhbGl6ZS9pc3N1ZXMvNDQwMVxyXG4gICAgICBpbnRlcnZhbCgxMDApXHJcbiAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICBza2lwV2hpbGUoKCkgPT4gIXRoaXMuaW5wdXRFbGVtZW50WydhdXRvY29tcGxldGUnXSksXHJcbiAgICAgICAgICBmaXJzdCgpKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMuaW5wdXRFbGVtZW50LCAnYXV0b2NvbXBsZXRlJywgW3RoaXMuYXV0b2NvbXBsZXRlXSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlRGF0YUVycm9yKCkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50QXR0cmlidXRlKHRoaXMubGFiZWxFbGVtZW50WzBdLCAnZGF0YS1lcnJvcicsIHRoaXMuZGF0YUVycm9yKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZURhdGFTdWNjZXNzKCkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50QXR0cmlidXRlKHRoaXMubGFiZWxFbGVtZW50WzBdLCAnZGF0YS1zdWNjZXNzJywgdGhpcy5kYXRhU3VjY2Vzcyk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVMYWJlbCgpIHtcclxuICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLmxhYmVsRWxlbWVudCwgJ3RleHQnLCBbdGhpcy5sYWJlbF0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlTGVuZ3RoKCkge1xyXG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5sZW5ndGggPyB0aGlzLmxlbmd0aC50b1N0cmluZygpIDogbnVsbDtcclxuXHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRBdHRyaWJ1dGUodGhpcy5pbnB1dEVsZW1lbnRbMF0sICdkYXRhLWxlbmd0aCcsIGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKGxlbmd0aCkge1xyXG4gICAgICB0aGlzLnNldENoYXJhY3RlckNvdW50KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlbW92ZUNoYXJhY3RlckNvdW50KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVQbGFjZWhvbGRlcigpIHtcclxuICAgIGNvbnN0IHBsYWNlaG9sZGVyID0gISF0aGlzLnBsYWNlaG9sZGVyID8gdGhpcy5wbGFjZWhvbGRlciA6IG51bGw7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRBdHRyaWJ1dGUodGhpcy5pbnB1dEVsZW1lbnRbMF0sICdwbGFjZWhvbGRlcicsIHBsYWNlaG9sZGVyKTtcclxuXHJcbiAgICAvLyBmaXggaXNzdWUgaW4gSUUgd2hlcmUgaGF2aW5nIGEgcGxhY2Vob2xkZXIgb24gaW5wdXQgbWFrZSBjb250cm9sIGRpcnR5XHJcbiAgICAvLyBub3RlIHRoYXQgaXQgc3RpbGwgdHJpZ2dlciB2YWxpZGF0aW9uIG9uIGZvY3VzIGJ1dCB0aGlzIGlzIGJldHRlciB0aGFuIG5vdGhpbmdcclxuICAgIC8vIGlzc3VlIDogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTUyOTlcclxuICAgIC8vIHdvcmthcm91bmQgOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDQ5NjcyNDUvNTU4MzI4M1xyXG4gICAgaWYgKHRoaXMubmdDb250cm9sKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5uZ0NvbnRyb2wuY29udHJvbC5tYXJrQXNQcmlzdGluZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNldExhYmVsQWN0aXZlKCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVWYWxpZGF0ZSgpIHtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuaW5wdXRFbGVtZW50WzBdLCAndmFsaWRhdGUnLCB0aGlzLnZhbGlkYXRlKTtcclxuXHJcbiAgICBpZiAodGhpcy52YWxpZGF0ZSkge1xyXG4gICAgICAvLyBmb3JjZSB2YWxpZGF0aW9uXHJcbiAgICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLmlucHV0RWxlbWVudCwgJ3RyaWdnZXInLCBbJ2JsdXInXSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlbW92ZVZhbGlkYXRpb25DbGFzc2VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRDaGFyYWN0ZXJDb3VudCgpIHtcclxuICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLmlucHV0RWxlbWVudCwgJ2NoYXJhY3RlckNvdW50ZXInKTtcclxuXHJcbiAgICAvLyBmb3JjZSB2YWxpZGF0aW9uXHJcbiAgICAvLyBuZWVkIHNldFRpbWVvdXQgb3RoZXJ3aXNlIGl0IHdvbnQgdHJpZ2dlciB2YWxpZGF0aW9uIHJpZ2h0IGF3YXlcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QodGhpcy5pbnB1dEVsZW1lbnQsICd0cmlnZ2VyJywgWydpbnB1dCddKTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMuaW5wdXRFbGVtZW50LCAndHJpZ2dlcicsIFsnYmx1ciddKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0TGFiZWxBY3RpdmUoKSB7XHJcbiAgICAvLyBuZWVkIHNldFRpbWVvdXQgb3RoZXJ3aXNlIGl0IHdvbnQgbWFrZSBsYWJlbCBmbG9hdCBpbiBzb21lIGNpcmNvbnN0YW5jZXNcclxuICAgIC8vIGZvciBleGFtcGxlOiBmb3JjaW5nIHZhbGlkYXRpb24gZm9yIGV4YW1wbGUsIHJlc2V0aW5nIGZvcm0gcHJvZ3JhbW1hdGljYWx5LCAuLi5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBjb25zdCBpbnB1dFZhbHVlID0gKDxIVE1MSW5wdXRFbGVtZW50PnRoaXMuaW5wdXRFbGVtZW50WzBdKS52YWx1ZTtcclxuICAgICAgY29uc3QgaXNBY3RpdmUgPSAhIXRoaXMucGxhY2Vob2xkZXIgfHwgISFpbnB1dFZhbHVlO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLmxhYmVsRWxlbWVudFswXSwgJ2FjdGl2ZScsIGlzQWN0aXZlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlQ2hhcmFjdGVyQ291bnQoKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QodGhpcy5pbnB1dEVsZW1lbnQuc2libGluZ3MoJy5jaGFyYWN0ZXItY291bnRlcicpLCAncmVtb3ZlJyk7XHJcblxyXG4gICAgdGhpcy5yZW1vdmVWYWxpZGF0aW9uQ2xhc3NlcygpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlVmFsaWRhdGlvbkNsYXNzZXMoKSB7XHJcbiAgICAvLyByZXNldCB2YWxpZC9pbnZhbGlkIHN0YXRlXHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLmlucHV0RWxlbWVudFswXSwgJ2ludmFsaWQnLCBmYWxzZSk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLmlucHV0RWxlbWVudFswXSwgJ3ZhbGlkJywgZmFsc2UpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTXpJbnB1dENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vaW5wdXQtY29udGFpbmVyL2luZGV4JztcclxuaW1wb3J0IHsgTXpJbnB1dFByZWZpeERpcmVjdGl2ZSB9IGZyb20gJy4vaW5wdXQtcHJlZml4L2luZGV4JztcclxuaW1wb3J0IHsgTXpJbnB1dERpcmVjdGl2ZSB9IGZyb20gJy4vaW5wdXQuZGlyZWN0aXZlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBNeklucHV0Q29udGFpbmVyQ29tcG9uZW50LFxyXG4gICAgTXpJbnB1dERpcmVjdGl2ZSxcclxuICAgIE16SW5wdXRQcmVmaXhEaXJlY3RpdmUsXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBNeklucHV0Q29udGFpbmVyQ29tcG9uZW50LFxyXG4gICAgTXpJbnB1dERpcmVjdGl2ZSxcclxuICAgIE16SW5wdXRQcmVmaXhEaXJlY3RpdmUsXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16SW5wdXRNb2R1bGUgeyB9XHJcbiIsImltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBmcm9tRXZlbnQsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWFwLCBwdWJsaXNoUmVwbGF5LCByZWZDb3VudCwgc3RhcnRXaXRoIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgTWF0Y2hPcGVyYXRvciwgTWVkaWEsIE1lZGlhQnJlYWtwb2ludCB9IGZyb20gJy4vbW9kZWxzL2luZGV4JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE16TWVkaWFTZXJ2aWNlIHtcclxuXHJcbiAgbWVkaWE6IE9ic2VydmFibGU8TWVkaWE+O1xyXG5cclxuICAvLyBiYXNlZCBvbiBub2Rlc19tb2R1bGVzL21hdGVyaWFsaXplLWNzcy9zYXNzL2NvbXBvbmVudHMvX3ZhcmlhYmxlLnNjc3NcclxuICBwcml2YXRlIHJlYWRvbmx5IG1lZGlhQnJlYWtwb2ludHM6IE1lZGlhQnJlYWtwb2ludFtdID0gW1xyXG4gICAgeyBhbGlhczogJ3MnLCBtaW5XaWR0aDogMCwgbWF4V2lkdGg6IDYwMCB9LFxyXG4gICAgeyBhbGlhczogJ20nLCBtaW5XaWR0aDogNjAxLCBtYXhXaWR0aDogOTkyIH0sXHJcbiAgICB7IGFsaWFzOiAnbCcsIG1pbldpZHRoOiA5OTMsIG1heFdpZHRoOiAxMjAwIH0sXHJcbiAgICB7IGFsaWFzOiAneGwnLCBtaW5XaWR0aDogMTIwMSwgbWF4V2lkdGg6IE51bWJlci5NQVhfVkFMVUUgfSxcclxuICBdO1xyXG5cclxuICBwcml2YXRlIHJlYWRvbmx5IG1hdGNoT3BlcmF0b3JzOiBNYXRjaE9wZXJhdG9yW10gPSBbXHJcbiAgICB7XHJcbiAgICAgIG9wZXJhdG9yOiAnZ3QnLFxyXG4gICAgICBtYXRjaDogKGJyZWFrcG9pbnQ6IE1lZGlhQnJlYWtwb2ludCkgPT4gd2luZG93LmlubmVyV2lkdGggPiBicmVha3BvaW50Lm1heFdpZHRoLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgb3BlcmF0b3I6ICdsdCcsXHJcbiAgICAgIG1hdGNoOiAoYnJlYWtwb2ludDogTWVkaWFCcmVha3BvaW50KSA9PiB3aW5kb3cuaW5uZXJXaWR0aCA8IGJyZWFrcG9pbnQubWluV2lkdGgsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBvcGVyYXRvcjogbnVsbCxcclxuICAgICAgbWF0Y2g6IChicmVha3BvaW50OiBNZWRpYUJyZWFrcG9pbnQpID0+IHdpbmRvdy5pbm5lcldpZHRoID49IGJyZWFrcG9pbnQubWluV2lkdGggJiYgd2luZG93LmlubmVyV2lkdGggPD0gYnJlYWtwb2ludC5tYXhXaWR0aCxcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc3RydWN0b3IoQEluamVjdChQTEFURk9STV9JRCkgcGxhdGZvcm1JZDogT2JqZWN0KSB7XHJcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIocGxhdGZvcm1JZCkpIHtcclxuICAgICAgdGhpcy5tZWRpYSA9IHRoaXMucmVnaXN0ZXJXaW5kb3dSZXNpemVMaXN0ZW5lcigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5tZWRpYSA9IE9ic2VydmFibGUuY3JlYXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpc0FjdGl2ZShicmVha3BvaW50OiBzdHJpbmcpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZTxib29sZWFuPihzdWJzY3JpYmVyID0+IHtcclxuICAgICAgdGhpcy5tZWRpYS5zdWJzY3JpYmUoKG1lZGlhOiBNZWRpYSkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBzdWJzY3JpYmVyLm5leHQodGhpcy5pc0FjdGl2ZUJyZWFrcG9pbnQoYnJlYWtwb2ludCkpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBzdWJzY3JpYmVyLmVycm9yKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlZ2lzdGVyV2luZG93UmVzaXplTGlzdGVuZXIoKTogT2JzZXJ2YWJsZTxNZWRpYT4ge1xyXG4gICAgcmV0dXJuIGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICBtYXAoKCkgPT4gdGhpcy5nZXRXaW5kb3dNZWRpYSgpKSxcclxuICAgICAgICBzdGFydFdpdGgodGhpcy5nZXRXaW5kb3dNZWRpYSgpKSxcclxuICAgICAgICBwdWJsaXNoUmVwbGF5KDEpLFxyXG4gICAgICAgIHJlZkNvdW50KCksXHJcbiAgICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFdpbmRvd01lZGlhKCk6IE1lZGlhIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGFsaWFzOiB0aGlzLm1lZGlhQnJlYWtwb2ludHMuZmluZCgoYnJlYWtwb2ludDogTWVkaWFCcmVha3BvaW50KSA9PiB3aW5kb3cuaW5uZXJXaWR0aCA8PSBicmVha3BvaW50Lm1heFdpZHRoKS5hbGlhcyxcclxuICAgICAgd2luZG93SGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcbiAgICAgIHdpbmRvd1dpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzQWN0aXZlQnJlYWtwb2ludChicmVha3BvaW50OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIGxldCBtYXRjaE9wZXJhdG9yOiBNYXRjaE9wZXJhdG9yO1xyXG4gICAgbGV0IG1lZGlhQnJlYWtwb2ludDogTWVkaWFCcmVha3BvaW50O1xyXG5cclxuICAgIGlmIChicmVha3BvaW50KSB7XHJcbiAgICAgIGNvbnN0IGZyYWdtZW50cyA9IGJyZWFrcG9pbnQuc3BsaXQoJy0nKTtcclxuXHJcbiAgICAgIGlmIChmcmFnbWVudHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgbWF0Y2hPcGVyYXRvciA9IHRoaXMubWF0Y2hPcGVyYXRvcnMuZmluZCh4ID0+IHgub3BlcmF0b3IgPT09IG51bGwpO1xyXG4gICAgICAgIG1lZGlhQnJlYWtwb2ludCA9IHRoaXMubWVkaWFCcmVha3BvaW50cy5maW5kKHggPT4geC5hbGlhcyA9PT0gZnJhZ21lbnRzWzBdKTtcclxuICAgICAgfSBlbHNlIGlmIChmcmFnbWVudHMubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgbWF0Y2hPcGVyYXRvciA9IHRoaXMubWF0Y2hPcGVyYXRvcnMuZmluZCh4ID0+IHgub3BlcmF0b3IgPT09IGZyYWdtZW50c1swXSk7XHJcbiAgICAgICAgbWVkaWFCcmVha3BvaW50ID0gdGhpcy5tZWRpYUJyZWFrcG9pbnRzLmZpbmQoeCA9PiB4LmFsaWFzID09PSBmcmFnbWVudHNbMV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFtZWRpYUJyZWFrcG9pbnQgfHwgIW1hdGNoT3BlcmF0b3IpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoYE16TWVkaWFTZXJ2aWNlLmlzQWN0aXZlIHBhcmFtZXRlciBpcyBpbnZhbGlkOiAnJHticmVha3BvaW50fScgaXMgbm90IGEgcmVjb2duaXplZCBicmVha3BvaW50LmApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBtYXRjaE9wZXJhdG9yLm1hdGNoKG1lZGlhQnJlYWtwb2ludCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBNek1lZGlhU2VydmljZSB9IGZyb20gJy4vbWVkaWEuc2VydmljZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIHByb3ZpZGVyczogW016TWVkaWFTZXJ2aWNlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16TWVkaWFNb2R1bGUgeyB9XHJcbiIsImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDb21wb25lbnQsXHJcbiAgRGlyZWN0aXZlLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgUmVuZGVyZXIsXHJcbiAgVmlld0NoaWxkLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgSGFuZGxlUHJvcENoYW5nZXMgfSBmcm9tICcuLi9zaGFyZWQvaW5kZXgnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtei1tb2RhbCcsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2ICNtb2RhbFxyXG4gIGNsYXNzPVwibW9kYWxcIlxyXG4gIFtjbGFzcy5tb2RhbC1maXhlZC1mb290ZXJdPVwiZml4ZWRGb290ZXJcIlxyXG4gIFtjbGFzcy5ib3R0b20tc2hlZXRdPVwiYm90dG9tU2hlZXRcIlxyXG4gIFtjbGFzcy5tb2RhbC1mdWxsc2NyZWVuXT1cImZ1bGxzY3JlZW5cIlxyXG4+XHJcbiAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm16LW1vZGFsLWhlYWRlclwiPjwvbmctY29udGVudD5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm16LW1vZGFsLWNvbnRlbnRcIj48L25nLWNvbnRlbnQ+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJtei1tb2RhbC1mb290ZXJcIj48L25nLWNvbnRlbnQ+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5gLFxyXG4gIHN0eWxlczogW2AubW9kYWw6bm90KC5ib3R0b20tc2hlZXQpLm1vZGFsLWZ1bGxzY3JlZW57dG9wOjEycHghaW1wb3J0YW50O21hcmdpbjowIGF1dG87d2lkdGg6Y2FsYygxMDAlIC0gMjRweCk7aGVpZ2h0OmNhbGMoMTAwJSAtIDI0cHgpO21heC1oZWlnaHQ6bm9uZX0ubW9kYWwuYm90dG9tLXNoZWV0Lm1vZGFsLWZ1bGxzY3JlZW57aGVpZ2h0OjEwMCU7bWF4LWhlaWdodDpub25lfS9kZWVwLyBtei1tb2RhbC1oZWFkZXIgaDUsL2RlZXAvIG16LW1vZGFsLWhlYWRlciBoNnttYXJnaW4tdG9wOjB9YF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNek1vZGFsQ29tcG9uZW50IGV4dGVuZHMgSGFuZGxlUHJvcENoYW5nZXMgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xyXG4gIEBJbnB1dCgpIGJvdHRvbVNoZWV0OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGZpeGVkRm9vdGVyOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGZ1bGxzY3JlZW46IGJvb2xlYW47XHJcbiAgQElucHV0KCkgb3B0aW9uczogTWF0ZXJpYWxpemUuTW9kYWxPcHRpb25zO1xyXG4gIEBPdXRwdXQoKSBjbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAVmlld0NoaWxkKCdtb2RhbCcpIG1vZGFsRWxlbWVudFJlZjogRWxlbWVudFJlZjtcclxuXHJcbiAgbW9kYWxFbGVtZW50OiBKUXVlcnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5pdEhhbmRsZXJzKCk7XHJcbiAgICB0aGlzLmluaXRFbGVtZW50cygpO1xyXG4gICAgdGhpcy5oYW5kbGVQcm9wZXJ0aWVzKCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLmluaXRNb2RhbCgpO1xyXG4gIH1cclxuXHJcbiAgaW5pdEVsZW1lbnRzKCkge1xyXG4gICAgdGhpcy5tb2RhbEVsZW1lbnQgPSAkKHRoaXMubW9kYWxFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgaW5pdEhhbmRsZXJzKCkge1xyXG4gICAgdGhpcy5oYW5kbGVycyA9IHtcclxuICAgICAgIG9wdGlvbnM6ICgpID0+IHRoaXMuaGFuZGxlT3B0aW9ucygpLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGluaXRNb2RhbCgpIHtcclxuICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLm1vZGFsRWxlbWVudCwgJ21vZGFsJywgW3RoaXMub3B0aW9uc10pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlUHJvcGVydGllcygpIHtcclxuICAgIHN1cGVyLmV4ZWN1dGVQcm9wSGFuZGxlcnMoKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZU9wdGlvbnMoKSB7XHJcbiAgICAvLyBleHRlbmQgY29tcGxldGUgZnVuY3Rpb24gdG8gZW1pdCBjbG9zZSBldmVudCBvbiBjYWxsYmFjayByZXR1cm5cclxuICAgIGNvbnN0IG9yaWdpbmFsQ29tcGxldGVGbiA9IHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMuY29tcGxldGUgfHwgKCgpID0+IHt9KTtcclxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMub3B0aW9ucywge1xyXG4gICAgICBjb21wbGV0ZTogKCkgPT4ge1xyXG4gICAgICAgIG9yaWdpbmFsQ29tcGxldGVGbigpO1xyXG4gICAgICAgIHRoaXMuY2xvc2UuZW1pdCgpO1xyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvcGVuTW9kYWwoKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QodGhpcy5tb2RhbEVsZW1lbnQsICdtb2RhbCcsIFsnb3BlbiddKTtcclxuICB9XHJcblxyXG4gIGNsb3NlTW9kYWwoKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QodGhpcy5tb2RhbEVsZW1lbnQsICdtb2RhbCcsIFsnY2xvc2UnXSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBEZWNsYXJlIHRoZSB0YWdzIHRvIGF2b2lkIGVycm9yOiAnPG16LW1vZGFsLXg+JyBpcyBub3QgYSBrbm93biBlbGVtZW50XHJcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzExMjUxXHJcbi8vIHRzbGludDpkaXNhYmxlOiBkaXJlY3RpdmUtc2VsZWN0b3JcclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnbXotbW9kYWwtaGVhZGVyJyB9KSBleHBvcnQgY2xhc3MgTXpNb2RhbEhlYWRlckRpcmVjdGl2ZSB7IH1cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnbXotbW9kYWwtY29udGVudCcgfSkgZXhwb3J0IGNsYXNzIE16TW9kYWxDb250ZW50RGlyZWN0aXZlIHsgfVxyXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdtei1tb2RhbC1mb290ZXInIH0pIGV4cG9ydCBjbGFzcyBNek1vZGFsRm9vdGVyRGlyZWN0aXZlIHsgfVxyXG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTXpNb2RhbENvbXBvbmVudCB9IGZyb20gJy4uL21vZGFsLmNvbXBvbmVudCc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ2FbbXpNb2RhbENsb3NlXSwgYnV0dG9uW216TW9kYWxDbG9zZV0sIGFbbXotbW9kYWwtY2xvc2VdLCBidXR0b25bbXotbW9kYWwtY2xvc2VdJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16TW9kYWxDbG9zZURpcmVjdGl2ZSB7XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJykgb25jbGljaygpIHtcclxuICAgIHRoaXMubW9kYWxDb21wb25lbnQuY2xvc2VNb2RhbCgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIG1vZGFsQ29tcG9uZW50OiBNek1vZGFsQ29tcG9uZW50LFxyXG4gICkgeyB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBDb21wb25lbnRSZWYsXHJcbiAgSW5qZWN0YWJsZSxcclxuICBUeXBlLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IE16SW5qZWN0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9pbmplY3Rpb24vaW5qZWN0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNekJhc2VNb2RhbCB9IGZyb20gJy4uL21vZGFsLWJhc2UvaW5kZXgnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTXpNb2RhbFNlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgaW5qZWN0aW9uU2VydmljZTogTXpJbmplY3Rpb25TZXJ2aWNlLFxyXG4gICkgeyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE9wZW4gbW9kYWwgY29tcG9uZW50LlxyXG4gICAqL1xyXG4gIG9wZW4oY29tcG9uZW50Q2xhc3M6IFR5cGU8TXpCYXNlTW9kYWw+LCBvcHRpb25zOiBhbnkgPSB7fSk6IENvbXBvbmVudFJlZjxNekJhc2VNb2RhbD4ge1xyXG4gICAgY29uc3QgY29tcG9uZW50UmVmID0gdGhpcy5pbmplY3Rpb25TZXJ2aWNlLmFwcGVuZENvbXBvbmVudChjb21wb25lbnRDbGFzcywgb3B0aW9ucyk7XHJcbiAgICBjb21wb25lbnRSZWYuaW5zdGFuY2UubW9kYWxDb21wb25lbnQuY2xvc2VcclxuICAgICAgLnBpcGUoZmlyc3QoKSlcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcclxuICAgICAgfSk7XHJcbiAgICByZXR1cm4gY29tcG9uZW50UmVmO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTXpJbmplY3Rpb25Nb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvaW5qZWN0aW9uL2luamVjdGlvbi5tb2R1bGUnO1xyXG5pbXBvcnQgeyBNek1vZGFsQ2xvc2VEaXJlY3RpdmUgfSBmcm9tICcuL21vZGFsLWNsb3NlL2luZGV4JztcclxuaW1wb3J0IHtcclxuICBNek1vZGFsQ29tcG9uZW50LFxyXG4gIE16TW9kYWxDb250ZW50RGlyZWN0aXZlLFxyXG4gIE16TW9kYWxGb290ZXJEaXJlY3RpdmUsXHJcbiAgTXpNb2RhbEhlYWRlckRpcmVjdGl2ZSxcclxufSBmcm9tICcuL21vZGFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE16TW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9pbmRleCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtNekluamVjdGlvbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBNek1vZGFsQ2xvc2VEaXJlY3RpdmUsXHJcbiAgICBNek1vZGFsQ29tcG9uZW50LFxyXG4gICAgTXpNb2RhbENvbnRlbnREaXJlY3RpdmUsXHJcbiAgICBNek1vZGFsRm9vdGVyRGlyZWN0aXZlLFxyXG4gICAgTXpNb2RhbEhlYWRlckRpcmVjdGl2ZSxcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIE16TW9kYWxDbG9zZURpcmVjdGl2ZSxcclxuICAgIE16TW9kYWxDb21wb25lbnQsXHJcbiAgICBNek1vZGFsQ29udGVudERpcmVjdGl2ZSxcclxuICAgIE16TW9kYWxGb290ZXJEaXJlY3RpdmUsXHJcbiAgICBNek1vZGFsSGVhZGVyRGlyZWN0aXZlLFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbTXpNb2RhbFNlcnZpY2VdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpNb2RhbE1vZHVsZSB7IH1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtei1uYXZiYXItaXRlbS1jb250YWluZXInLFxyXG4gIHRlbXBsYXRlOiBgPHVsIGlkPVwibmF2LW1vYmlsZVwiIGNsYXNzPVwie3sgYWxpZ24gfX1cIj5cclxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjwvdWw+YCxcclxuICBzdHlsZXM6IFtgYF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNek5hdmJhckl0ZW1Db250YWluZXJDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGFsaWduOiBzdHJpbmc7XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtei1uYXZiYXItaXRlbScsXHJcbiAgdGVtcGxhdGU6IGA8bGkgXHJcbiAgY2xhc3M9XCJ7eyBpdGVtQ2xhc3MgfX1cIlxyXG4gIFtjbGFzcy5hY3RpdmVdPVwiYWN0aXZlXCJcclxuPlxyXG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuPC9saT5gLFxyXG4gIHN0eWxlczogW2BgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16TmF2YmFySXRlbUNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgYWN0aXZlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGl0ZW1DbGFzczogc3RyaW5nO1xyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXotbmF2YmFyJyxcclxuICB0ZW1wbGF0ZTogYDxuYXY+XHJcbiAgPGRpdiBjbGFzcz1cIm5hdi13cmFwcGVyIHt7IG5hdmJhckNsYXNzIH19XCI+XHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgPC9kaXY+XHJcbjwvbmF2PmAsXHJcbiAgc3R5bGVzOiBbYC5uYXYtd3JhcHBlciAvZGVlcC8gLmJ0biBpe2xpbmUtaGVpZ2h0OmluaGVyaXR9YF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNek5hdmJhckNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgbmF2YmFyQ2xhc3M6IHN0cmluZztcclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTXpOYXZiYXJJdGVtQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9uYXZiYXItaXRlbS1jb250YWluZXIvaW5kZXgnO1xyXG5pbXBvcnQgeyBNek5hdmJhckl0ZW1Db21wb25lbnQgfSBmcm9tICcuL25hdmJhci1pdGVtL2luZGV4JztcclxuaW1wb3J0IHsgTXpOYXZiYXJDb21wb25lbnQgfSBmcm9tICcuL25hdmJhci5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIE16TmF2YmFyQ29tcG9uZW50LFxyXG4gICAgTXpOYXZiYXJJdGVtQ29tcG9uZW50LFxyXG4gICAgTXpOYXZiYXJJdGVtQ29udGFpbmVyQ29tcG9uZW50LFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgTXpOYXZiYXJDb21wb25lbnQsXHJcbiAgICBNek5hdmJhckl0ZW1Db21wb25lbnQsXHJcbiAgICBNek5hdmJhckl0ZW1Db250YWluZXJDb21wb25lbnQsXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16TmF2YmFyTW9kdWxlIHsgfVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ216LXBhZ2luYXRpb24tcGFnZS1idXR0b24nLFxyXG4gIHRlbXBsYXRlOiBgPGxpIFtjbGFzcy5hY3RpdmVdPVwiYWN0aXZlXCJcclxuICBbY2xhc3MuZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gIFtjbGFzcy53YXZlcy1lZmZlY3RdPVwiIWFjdGl2ZSAmJiAhZGlzYWJsZWRcIj5cclxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjwvbGk+YCxcclxuICBzdHlsZXM6IFtgYF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNelBhZ2luYXRpb25QYWdlQnV0dG9uQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBhY3RpdmU6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgSGFuZGxlUHJvcENoYW5nZXMgfSBmcm9tICcuLi9zaGFyZWQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtei1wYWdpbmF0aW9uJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDx1bCBjbGFzcz1cInBhZ2luYXRpb25cIj5cclxuICAgIDxtei1wYWdpbmF0aW9uLXBhZ2UtYnV0dG9uIFtkaXNhYmxlZF09XCJjdXJyZW50UGFnZSA9PT0gMVwiICpuZ0lmPVwiZW5hYmxlRmlyc3RBbmRMYXN0UGFnZUJ1dHRvbnNcIj5cclxuICAgICAgPGEgKGNsaWNrKT1cImZpcnN0UGFnZSgpXCI+PGkgbXotaWNvbiBbaWNvbl09XCInZmlyc3RfcGFnZSdcIj48L2k+PC9hPlxyXG4gICAgPC9tei1wYWdpbmF0aW9uLXBhZ2UtYnV0dG9uPlxyXG4gICAgPG16LXBhZ2luYXRpb24tcGFnZS1idXR0b24gW2Rpc2FibGVkXT1cImN1cnJlbnRQYWdlID09PSAxXCI+XHJcbiAgICAgIDxhIChjbGljayk9XCJwcmV2aW91c1BhZ2UoKVwiPjxpIG16LWljb24gW2ljb25dPVwiJ2NoZXZyb25fbGVmdCdcIj48L2k+PC9hPlxyXG4gICAgPC9tei1wYWdpbmF0aW9uLXBhZ2UtYnV0dG9uPlxyXG4gICAgPG16LXBhZ2luYXRpb24tcGFnZS1idXR0b24gKm5nRm9yPVwibGV0IHBhZ2Ugb2YgcGFnZXNcIlxyXG4gICAgICBbYWN0aXZlXT1cInBhZ2UgPT09IGN1cnJlbnRQYWdlXCJcclxuICAgID5cclxuICAgICAgPGEgKGNsaWNrKT1cImNoYW5nZUN1cnJlbnRQYWdlKHBhZ2UpXCI+e3sgcGFnZSB9fTwvYT5cclxuICAgIDwvbXotcGFnaW5hdGlvbi1wYWdlLWJ1dHRvbj5cclxuICAgIDxtei1wYWdpbmF0aW9uLXBhZ2UtYnV0dG9uIFtkaXNhYmxlZF09XCJjdXJyZW50UGFnZSA9PT0gdG90YWxQYWdlc1wiPlxyXG4gICAgICA8YSAoY2xpY2spPVwibmV4dFBhZ2UoKVwiPjxpIG16LWljb24gW2ljb25dPVwiJ2NoZXZyb25fcmlnaHQnXCI+PC9pPjwvYT5cclxuICAgIDwvbXotcGFnaW5hdGlvbi1wYWdlLWJ1dHRvbj5cclxuICAgIDxtei1wYWdpbmF0aW9uLXBhZ2UtYnV0dG9uIFtkaXNhYmxlZF09XCJjdXJyZW50UGFnZSA9PT0gdG90YWxQYWdlc1wiICpuZ0lmPVwiZW5hYmxlRmlyc3RBbmRMYXN0UGFnZUJ1dHRvbnNcIj5cclxuICAgICAgPGEgKGNsaWNrKT1cImxhc3RQYWdlKClcIj48aSBtei1pY29uIFtpY29uXT1cIidsYXN0X3BhZ2UnXCI+PC9pPjwvYT5cclxuICAgIDwvbXotcGFnaW5hdGlvbi1wYWdlLWJ1dHRvbj5cclxuICA8L3VsPmAsXHJcbiAgc3R5bGVzOiBbYGBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpQYWdpbmF0aW9uQ29tcG9uZW50IGV4dGVuZHMgSGFuZGxlUHJvcENoYW5nZXMgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGN1cnJlbnRQYWdlID0gMTtcclxuICBASW5wdXQoKSBlbmFibGVGaXJzdEFuZExhc3RQYWdlQnV0dG9ucyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGl0ZW1zUGVyUGFnZTogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIG1heFBhZ2VCdXR0b25zID0gNTtcclxuICBASW5wdXQoKSB0b3RhbEl0ZW1zOiBudW1iZXI7XHJcbiAgQE91dHB1dCgpIHBhZ2VDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuXHJcbiAgcGFnZXM6IG51bWJlcltdO1xyXG4gIGdldCB0b3RhbFBhZ2VzKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gTWF0aC5jZWlsKHRoaXMudG90YWxJdGVtcyAvIHRoaXMuaXRlbXNQZXJQYWdlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbml0SGFuZGxlcnMoKTtcclxuICAgIHRoaXMucmVuZGVyQnV0dG9ucygpO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlQ3VycmVudFBhZ2UocGFnZU51bWJlcjogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmN1cnJlbnRQYWdlID0gcGFnZU51bWJlcjtcclxuICAgIHRoaXMucGFnZUNoYW5nZS5lbWl0KHBhZ2VOdW1iZXIpO1xyXG4gICAgdGhpcy5yZW5kZXJCdXR0b25zKCk7XHJcbiAgfVxyXG5cclxuICBmaXJzdFBhZ2UoKSB7XHJcbiAgICB0aGlzLmNoYW5nZUN1cnJlbnRQYWdlKDEpO1xyXG4gIH1cclxuXHJcbiAgaW5pdEhhbmRsZXJzKCkge1xyXG4gICAgdGhpcy5oYW5kbGVycyA9IHtcclxuICAgICAgY3VycmVudFBhZ2U6ICgpID0+IHRoaXMucmVuZGVyQnV0dG9ucygpLFxyXG4gICAgICBpdGVtc1BlclBhZ2U6ICgpID0+IHRoaXMucmVuZGVyQnV0dG9ucygpLFxyXG4gICAgICBtYXhQYWdlQnV0dG9uczogKCkgPT4gdGhpcy5yZW5kZXJCdXR0b25zKCksXHJcbiAgICAgIHRvdGFsSXRlbXM6ICgpID0+IHRoaXMucmVuZGVyQnV0dG9ucygpLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGxhc3RQYWdlKCkge1xyXG4gICAgdGhpcy5jaGFuZ2VDdXJyZW50UGFnZSh0aGlzLnRvdGFsUGFnZXMpO1xyXG4gIH1cclxuXHJcbiAgbmV4dFBhZ2UoKSB7XHJcbiAgICBpZiAodGhpcy5jdXJyZW50UGFnZSA8IHRoaXMudG90YWxQYWdlcykge1xyXG4gICAgICBjb25zdCBuZXh0UGFnZSA9IHRoaXMuY3VycmVudFBhZ2UgKyAxO1xyXG4gICAgICB0aGlzLmNoYW5nZUN1cnJlbnRQYWdlKG5leHRQYWdlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByZXZpb3VzUGFnZSgpIHtcclxuICAgIGlmICh0aGlzLmN1cnJlbnRQYWdlICE9PSAxKSB7XHJcbiAgICAgIGNvbnN0IHByZXZpb3VzUGFnZSA9IHRoaXMuY3VycmVudFBhZ2UgLSAxO1xyXG4gICAgICB0aGlzLmNoYW5nZUN1cnJlbnRQYWdlKHByZXZpb3VzUGFnZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXJCdXR0b25zKCkge1xyXG4gICAgY29uc3QgYnV0dG9uc0NvdW50ID0gTWF0aC5taW4odGhpcy5tYXhQYWdlQnV0dG9ucywgdGhpcy50b3RhbFBhZ2VzKTtcclxuICAgIGNvbnN0IG1heFBvc2l0aW9uID0gdGhpcy50b3RhbFBhZ2VzIC0gYnV0dG9uc0NvdW50O1xyXG4gICAgY29uc3QgaGFsZkJ1dHRvbnMgPSBNYXRoLmZsb29yKGJ1dHRvbnNDb3VudCAvIDIpO1xyXG5cclxuICAgIGxldCBoaWRkZW5QYWdlc0JlZm9yZSA9ICh0aGlzLmN1cnJlbnRQYWdlIC0gaGFsZkJ1dHRvbnMpO1xyXG4gICAgaWYgKGhpZGRlblBhZ2VzQmVmb3JlID4gbWF4UG9zaXRpb24pIHtcclxuICAgICAgaGlkZGVuUGFnZXNCZWZvcmUgPSBtYXhQb3NpdGlvbiArIDE7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZnJvbSA9IE1hdGgubWF4KGhpZGRlblBhZ2VzQmVmb3JlLCAxKTtcclxuICAgIGNvbnN0IHRvID0gTWF0aC5taW4odGhpcy50b3RhbFBhZ2VzLCBmcm9tICsgdGhpcy5tYXhQYWdlQnV0dG9ucyAtIDEpO1xyXG5cclxuICAgIHRoaXMucGFnZXMgPSBBcnJheShidXR0b25zQ291bnQpLmZpbGwoMCkubWFwKCh4LCBpKSA9PiBmcm9tICsgaSk7XHJcblxyXG4gICAgaWYgKHRoaXMuY3VycmVudFBhZ2UgPiB0aGlzLnRvdGFsUGFnZXMpIHtcclxuICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IHRoaXMucGFnZXNbMF07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBNekljb25Nb2R1bGUgfSBmcm9tICcuLi9pY29uL2ljb24ubW9kdWxlJztcclxuaW1wb3J0IHsgTXpQYWdpbmF0aW9uUGFnZUJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vcGFnaW5hdGlvbi1wYWdlLWJ1dHRvbi9wYWdpbmF0aW9uLXBhZ2UtYnV0dG9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE16UGFnaW5hdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vcGFnaW5hdGlvbi5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBNekljb25Nb2R1bGUsXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIE16UGFnaW5hdGlvbkNvbXBvbmVudCxcclxuICAgIE16UGFnaW5hdGlvblBhZ2VCdXR0b25Db21wb25lbnQsXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBNelBhZ2luYXRpb25Db21wb25lbnQsXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16UGFnaW5hdGlvbk1vZHVsZSB7IH1cclxuIiwiaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIFJlbmRlcmVyLFxyXG4gIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtei1wYXJhbGxheCcsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2ICNwYXJhbGxheENvbnRhaW5lciBjbGFzcz1cInBhcmFsbGF4LWNvbnRhaW5lclwiPlxyXG4gIDxkaXYgI3BhcmFsbGF4IGNsYXNzPVwicGFyYWxsYXhcIj5cclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICA8L2Rpdj5cclxuPC9kaXY+YCxcclxuICBzdHlsZXM6IFtgYF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNelBhcmFsbGF4Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQElucHV0KCkgaGVpZ2h0OiBudW1iZXI7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3BhcmFsbGF4JykgcGFyYWxsYXg6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgncGFyYWxsYXhDb250YWluZXInKSBwYXJhbGxheENvbnRhaW5lcjogRWxlbWVudFJlZjtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcikgeyB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMucGFyYWxsYXhDb250YWluZXIubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcsIGlzTmFOKHRoaXMuaGVpZ2h0KSA/ICc1MDBweCcgOiB0aGlzLmhlaWdodCArICdweCcpO1xyXG4gICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKCQodGhpcy5wYXJhbGxheC5uYXRpdmVFbGVtZW50KSwgJ3BhcmFsbGF4Jyk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBNelBhcmFsbGF4Q29tcG9uZW50IH0gZnJvbSAnLi9wYXJhbGxheC5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtNelBhcmFsbGF4Q29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbTXpQYXJhbGxheENvbXBvbmVudF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNelBhcmFsbGF4TW9kdWxlIHsgfVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ216LXByb2dyZXNzJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJwcm9ncmVzcyB7eyBiYWNrZ3JvdW5kQ2xhc3MgfX1cIj5cclxuXHJcbiAgPGRpdlxyXG4gICAgY2xhc3M9XCJwcm9ncmVzcy1iYXIge3sgcHJvZ3Jlc3NDbGFzcyB9fVwiXHJcbiAgICBbY2xhc3MuZGV0ZXJtaW5hdGVdPVwicGVyY2VudGFnZSAhPSBudWxsXCJcclxuICAgIFtjbGFzcy5pbmRldGVybWluYXRlXT1cInBlcmNlbnRhZ2UgPT0gbnVsbFwiXHJcbiAgICBbc3R5bGUud2lkdGguJV09XCJwZXJjZW50YWdlXCI+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PmAsXHJcbiAgc3R5bGVzOiBbYGBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpQcm9ncmVzc0NvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgYmFja2dyb3VuZENsYXNzOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcGVyY2VudGFnZTogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIHByb2dyZXNzQ2xhc3M6IHN0cmluZztcclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTXpQcm9ncmVzc0NvbXBvbmVudCB9IGZyb20gJy4vcHJvZ3Jlc3MuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IFtNelByb2dyZXNzQ29tcG9uZW50XSxcclxuICAgIGV4cG9ydHM6IFtNelByb2dyZXNzQ29tcG9uZW50XSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16UHJvZ3Jlc3NNb2R1bGUgeyB9XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtei1yYWRpby1idXR0b24tY29udGFpbmVyJyxcclxuICB0ZW1wbGF0ZTogYDxwIGNsYXNzPVwicmFkaW8tYnV0dG9uLWZpZWxkXCI+XHJcbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L3A+YCxcclxuICBzdHlsZXM6IFtgYF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNelJhZGlvQnV0dG9uQ29udGFpbmVyQ29tcG9uZW50IHsgfVxyXG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nLCBJbnB1dCwgT25Jbml0LCBSZW5kZXJlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgSGFuZGxlUHJvcENoYW5nZXMgfSBmcm9tICcuLi9zaGFyZWQvaW5kZXgnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdpbnB1dFttelJhZGlvQnV0dG9uXSwgaW5wdXRbbXotcmFkaW8tYnV0dG9uXScsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNelJhZGlvQnV0dG9uRGlyZWN0aXZlIGV4dGVuZHMgSGFuZGxlUHJvcENoYW5nZXMgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIC8vIG5hdGl2ZSBwcm9wZXJ0aWVzXHJcbiAgQEhvc3RCaW5kaW5nKCkgQElucHV0KCkgaWQ6IHN0cmluZztcclxuXHJcbiAgLy8gZGlyZWN0aXZlIHByb3BlcnRpZXNcclxuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHdpdGhHYXA6IGJvb2xlYW47XHJcblxyXG4gIGlucHV0RWxlbWVudDogSlF1ZXJ5O1xyXG4gIGlucHV0Q29udGFpbmVyRWxlbWVudDogSlF1ZXJ5O1xyXG4gIGxhYmVsRWxlbWVudDogSlF1ZXJ5O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluaXRIYW5kbGVycygpO1xyXG4gICAgdGhpcy5pbml0RWxlbWVudHMoKTtcclxuICAgIHRoaXMuaGFuZGxlUHJvcGVydGllcygpO1xyXG4gIH1cclxuXHJcbiAgaW5pdEhhbmRsZXJzKCkge1xyXG4gICAgdGhpcy5oYW5kbGVycyA9IHtcclxuICAgICAgbGFiZWw6ICgpID0+IHRoaXMuaGFuZGxlTGFiZWwoKSxcclxuICAgICAgd2l0aEdhcDogKCkgPT4gdGhpcy5oYW5kbGVXaXRoR2FwKCksXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgaW5pdEVsZW1lbnRzKCkge1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQgPSAkKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcclxuICAgIHRoaXMuaW5wdXRDb250YWluZXJFbGVtZW50ID0gJCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkucGFyZW50KCcucmFkaW8tYnV0dG9uLWZpZWxkJyk7XHJcbiAgICB0aGlzLmxhYmVsRWxlbWVudCA9IHRoaXMuY3JlYXRlTGFiZWxFbGVtZW50KCk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVMYWJlbEVsZW1lbnQoKSB7XHJcbiAgICBjb25zdCBsYWJlbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgbGFiZWxFbGVtZW50LnNldEF0dHJpYnV0ZSgnZm9yJywgdGhpcy5pZCk7XHJcblxyXG4gICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMuaW5wdXRFbGVtZW50LCAnYWZ0ZXInLCBbbGFiZWxFbGVtZW50XSk7XHJcblxyXG4gICAgcmV0dXJuICQobGFiZWxFbGVtZW50KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVByb3BlcnRpZXMoKSB7XHJcbiAgICBpZiAodGhpcy5pbnB1dENvbnRhaW5lckVsZW1lbnQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1JhZGlvIEJ1dHRvbiBtdXN0IGJlIHBsYWNlZCBpbnNpZGUgYSBbbXotcmFkaW8tYnV0dG9uLWNvbnRhaW5lcl0gdGFnJywgdGhpcy5pbnB1dEVsZW1lbnQpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgc3VwZXIuZXhlY3V0ZVByb3BIYW5kbGVycygpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlTGFiZWwoKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QodGhpcy5sYWJlbEVsZW1lbnQsICd0ZXh0JywgW3RoaXMubGFiZWxdKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVdpdGhHYXAoKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLmlucHV0RWxlbWVudFswXSwgJ3dpdGgtZ2FwJywgdGhpcy53aXRoR2FwKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE16UmFkaW9CdXR0b25Db250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL3JhZGlvLWJ1dHRvbi1jb250YWluZXIvaW5kZXgnO1xyXG5pbXBvcnQgeyBNelJhZGlvQnV0dG9uRGlyZWN0aXZlIH0gZnJvbSAnLi9yYWRpby1idXR0b24uZGlyZWN0aXZlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBNelJhZGlvQnV0dG9uRGlyZWN0aXZlLFxyXG4gICAgTXpSYWRpb0J1dHRvbkNvbnRhaW5lckNvbXBvbmVudCxcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIE16UmFkaW9CdXR0b25EaXJlY3RpdmUsXHJcbiAgICBNelJhZGlvQnV0dG9uQ29udGFpbmVyQ29tcG9uZW50LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNelJhZGlvQnV0dG9uTW9kdWxlIHsgfVxyXG4iLCJpbXBvcnQge1xyXG4gIGFuaW1hdGUsXHJcbiAgc3R5bGUsXHJcbiAgdHJhbnNpdGlvbixcclxuICB0cmlnZ2VyLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgRXJyb3JNZXNzYWdlUmVzb3VyY2UgfSBmcm9tICcuL21vZGVscy9pbmRleCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ216LWVycm9yLW1lc3NhZ2UnLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiBbQGVudGVyQW5pbWF0aW9uXT1cImVycm9yTWVzc2FnZVwiIGNsYXNzPVwiaW52YWxpZFwiICpuZ0lmPVwiKGNvbnRyb2wudG91Y2hlZCB8fCBjb250cm9sLmRpcnR5KSAmJiBjb250cm9sLmludmFsaWQgJiYgZXJyb3JNZXNzYWdlXCI+e3sgZXJyb3JNZXNzYWdlIH19PC9kaXY+YCxcclxuICBzdHlsZXM6IFtgZGl2LmludmFsaWR7Y29sb3I6I2UzMDYxMztmb250LXNpemU6LjhyZW07b3BhY2l0eToxO292ZXJmbG93LXdyYXA6YnJlYWstd29yZH1pbnB1dDpub3QoW3R5cGU9Y2hlY2tib3hdKStsYWJlbCs6aG9zdCBkaXYuaW52YWxpZCxtei1zZWxlY3QtY29udGFpbmVyIDpob3N0IGRpdi5pbnZhbGlkLHRleHRhcmVhK2xhYmVsKzpob3N0IGRpdi5pbnZhbGlke21hcmdpbi10b3A6LTE5cHg7bWluLWhlaWdodDoxOXB4fWBdLFxyXG4gIGFuaW1hdGlvbnM6IFtcclxuICAgIHRyaWdnZXIoXHJcbiAgICAgICdlbnRlckFuaW1hdGlvbicsIFtcclxuICAgICAgICB0cmFuc2l0aW9uKCc6ZW50ZXInLCBbXHJcbiAgICAgICAgICBzdHlsZSh7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTVweCknLCBvcGFjaXR5OiAwIH0pLFxyXG4gICAgICAgICAgYW5pbWF0ZSgnMzAwbXMnLCBzdHlsZSh7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCknLCBvcGFjaXR5OiAxIH0pKSxcclxuICAgICAgICBdKSxcclxuICAgICAgICB0cmFuc2l0aW9uKCc6bGVhdmUnLCBbXHJcbiAgICAgICAgICBzdHlsZSh7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCknLCBvcGFjaXR5OiAxIH0pLFxyXG4gICAgICAgICAgYW5pbWF0ZSgnMzAwbXMnLCBzdHlsZSh7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTVweCknLCBvcGFjaXR5OiAwIH0pKSxcclxuICAgICAgICBdKSxcclxuICAgICAgXSxcclxuICAgICksXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16RXJyb3JNZXNzYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBjb250cm9sOiBBYnN0cmFjdENvbnRyb2w7XHJcbiAgQElucHV0KCkgZXJyb3JNZXNzYWdlUmVzb3VyY2U6IEVycm9yTWVzc2FnZVJlc291cmNlO1xyXG5cclxuICBjb250cm9sU3RhdHVzQ2hhbmdlc1N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG4gIGVycm9yTWVzc2FnZSA9ICcnO1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuYnVpbGRFcnJvck1lc3NhZ2UoKTtcclxuICAgIHRoaXMuY29udHJvbFN0YXR1c0NoYW5nZXNTdWJzY3JpcHRpb24gPSB0aGlzLmNvbnRyb2wuc3RhdHVzQ2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4gdGhpcy5idWlsZEVycm9yTWVzc2FnZSgpKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jb250cm9sU3RhdHVzQ2hhbmdlc1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgYnVpbGRFcnJvck1lc3NhZ2UoKSB7XHJcbiAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICcnO1xyXG4gICAgaWYgKHRoaXMuY29udHJvbC5lcnJvcnMgJiYgdGhpcy5lcnJvck1lc3NhZ2VSZXNvdXJjZSkge1xyXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuY29udHJvbC5lcnJvcnMpLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlICs9IHRoaXMuZXJyb3JNZXNzYWdlUmVzb3VyY2Vba2V5XSArICcgJztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGFic3RyYWN0IGNsYXNzIEVycm9yTWVzc2FnZVJlc291cmNlIHtcclxuICBtYXhsZW5ndGg/OiBzdHJpbmc7XHJcbiAgbWlubGVuZ3RoPzogc3RyaW5nO1xyXG4gIHBhdHRlcm4/OiBzdHJpbmc7XHJcbiAgcmVxdWlyZWQ/OiBzdHJpbmc7XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENvbXBvbmVudCxcclxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgQ29tcG9uZW50UmVmLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBSZW5kZXJlcixcclxuICBWaWV3Q29udGFpbmVyUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgRXJyb3JNZXNzYWdlUmVzb3VyY2UsIE16RXJyb3JNZXNzYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9lcnJvci1tZXNzYWdlL2luZGV4JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgc2VsZWN0b3I6ICdtei12YWxpZGF0aW9uLCBbbXotdmFsaWRhdGlvbl0sIFttelZhbGlkYXRpb25dJyxcclxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxyXG4gIHN0eWxlczogW2Auc2VsZWN0LXdyYXBwZXIgaW5wdXQuc2VsZWN0LWRyb3Bkb3duLmludmFsaWQsdGV4dGFyZWEubmctaW52YWxpZC5uZy10b3VjaGVkOmZvY3Vze2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNmNDQzMzY7Ym94LXNoYWRvdzowIDFweCAwIDAgI2Y0NDMzNn0uc2VsZWN0LXdyYXBwZXIgaW5wdXQuc2VsZWN0LWRyb3Bkb3duLnZhbGlke2JvcmRlci1ib3R0b206MXB4IHNvbGlkICM0Y2FmNTA7Ym94LXNoYWRvdzowIDFweCAwIDAgIzRjYWY1MH1pbnB1dDpub3QoW3R5cGU9Y2hlY2tib3hdKTpmb2N1cytsYWJlbC5hY3RpdmUgc3Bhbi5wbGFjZWhvbGRlci1yZXF1aXJlZCx0ZXh0YXJlYTpmb2N1cytsYWJlbC5hY3RpdmUgc3Bhbi5wbGFjZWhvbGRlci1yZXF1aXJlZHtjb2xvcjojZjQ0MzM2fWBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpWYWxpZGF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuICBlcnJvck1lc3NhZ2VDb21wb25lbnQ/OiBDb21wb25lbnRSZWY8TXpFcnJvck1lc3NhZ2VDb21wb25lbnQ+ID0gbnVsbDtcclxuICBsYWJlbEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gIG5hdGl2ZUVsZW1lbnQ6IEpRdWVyeTtcclxuICBzdGF0dXNDaGFuZ2VzU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIC8vIG5hdGl2ZSBwcm9wZXJ0aWVzXHJcbiAgQElucHV0KCkgaWQ6IHN0cmluZztcclxuXHJcbiAgLy8gY29tcG9uZW50IHByb3BlcnRpZXNcclxuICBASW5wdXQoKSBlcnJvck1lc3NhZ2VSZXNvdXJjZTogRXJyb3JNZXNzYWdlUmVzb3VyY2U7XHJcblxyXG4gIHByaXZhdGUgX2Zvcm1Db250cm9sRGlzYWJsZWQgPSBmYWxzZTtcclxuICBwcml2YXRlIF9yZXF1aXJlZCA9IGZhbHNlO1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ2F0dHIucmVxdWlyZWQnKVxyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IHJlcXVpcmVkKCkgeyByZXR1cm4gdGhpcy5fcmVxdWlyZWQ7IH1cclxuICBzZXQgcmVxdWlyZWQodmFsdWU6IGFueSkgeyB0aGlzLl9yZXF1aXJlZCA9ICh2YWx1ZSAhPSBudWxsICYmIGAke3ZhbHVlfWAgIT09ICdmYWxzZScpOyB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IGZvcm1Db250cm9sRGlzYWJsZWQoKSB7IHJldHVybiB0aGlzLl9mb3JtQ29udHJvbERpc2FibGVkOyB9XHJcbiAgc2V0IGZvcm1Db250cm9sRGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2Zvcm1Db250cm9sRGlzYWJsZWQgPSB2YWx1ZTtcclxuICAgIGlmICh0aGlzLl9mb3JtQ29udHJvbERpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMubmdDb250cm9sLmNvbnRyb2wuZGlzYWJsZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5uZ0NvbnRyb2wuY29udHJvbC5lbmFibGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBlbGVtZW50VG9BZGRWYWxpZGF0aW9uKCk6IEpRdWVyeSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc05hdGl2ZVNlbGVjdEVsZW1lbnRcclxuICAgICAgPyB0aGlzLmlucHV0U2VsZWN0RHJvcGRvd25cclxuICAgICAgOiB0aGlzLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBnZXQgaW5wdXRTZWxlY3REcm9wZG93bigpOiBKUXVlcnkge1xyXG4gICAgcmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudC5zaWJsaW5ncygnaW5wdXQuc2VsZWN0LWRyb3Bkb3duJyk7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNOYXRpdmVTZWxlY3RFbGVtZW50KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudFswXS5ub2RlTmFtZSA9PT0gJ1NFTEVDVCc7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdmb2N1c291dCcsIFsnJGV2ZW50LnRhcmdldCddKVxyXG4gIG9uRm9jdXNPdXQodGFyZ2V0OiBFdmVudCkge1xyXG4gICAgdGhpcy5uZ0NvbnRyb2wuY29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XHJcbiAgICB0aGlzLnNldFZhbGlkYXRpb25TdGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBwdWJsaWMgbmdDb250cm9sOiBOZ0NvbnRyb2wsXHJcbiAgICBwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyLFxyXG4gICkgeyB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMuaW5pdEVsZW1lbnRzKCk7XHJcbiAgICB0aGlzLmluaXRFcnJvck1lc3NhZ2VDb21wb25lbnQoKTtcclxuICAgIHRoaXMuc3Vic2NyaWJlU3RhdHVzQ2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLnN0YXR1c0NoYW5nZXNTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMuZXJyb3JNZXNzYWdlQ29tcG9uZW50LmRlc3Ryb3koKTtcclxuICB9XHJcblxyXG4gIGNsZWFyVmFsaWRhdGlvblN0YXRlKGVsZW1lbnQ6IEpRdWVyeSkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3MoZWxlbWVudFswXSwgJ3ZhbGlkJywgZmFsc2UpO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3MoZWxlbWVudFswXSwgJ2ludmFsaWQnLCBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVSZXF1aXJlZFNwYW5FbGVtZW50KCkge1xyXG4gICAgaWYgKHRoaXMucmVxdWlyZWQgJiYgdGhpcy5sYWJlbEVsZW1lbnQpIHtcclxuICAgICAgY29uc3Qgc3BhbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgIHNwYW5FbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncGxhY2Vob2xkZXItcmVxdWlyZWQnKTtcclxuICAgICAgc3BhbkVsZW1lbnQudGV4dENvbnRlbnQgPSAnIConO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QodGhpcy5sYWJlbEVsZW1lbnQsICdhcHBlbmRDaGlsZCcsIFtzcGFuRWxlbWVudF0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5pdEVsZW1lbnRzKCkge1xyXG4gICAgdGhpcy5sYWJlbEVsZW1lbnQgPSAkKCdsYWJlbFtmb3I9XCInICsgdGhpcy5pZCArICdcIl0nKVswXTtcclxuICAgIHRoaXMubmF0aXZlRWxlbWVudCA9ICQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgdGhpcy5jcmVhdGVSZXF1aXJlZFNwYW5FbGVtZW50KCk7XHJcbiAgfVxyXG5cclxuICBpbml0RXJyb3JNZXNzYWdlQ29tcG9uZW50KCkge1xyXG4gICAgY29uc3QgZXJyb3JNZXNzYWdlRmFjdG9yeSA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoTXpFcnJvck1lc3NhZ2VDb21wb25lbnQpO1xyXG4gICAgdGhpcy5lcnJvck1lc3NhZ2VDb21wb25lbnQgPSB0aGlzLnZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KGVycm9yTWVzc2FnZUZhY3RvcnkpO1xyXG4gICAgdGhpcy5lcnJvck1lc3NhZ2VDb21wb25lbnQuaW5zdGFuY2UuZXJyb3JNZXNzYWdlUmVzb3VyY2UgPSB0aGlzLmVycm9yTWVzc2FnZVJlc291cmNlO1xyXG4gICAgdGhpcy5lcnJvck1lc3NhZ2VDb21wb25lbnQuaW5zdGFuY2UuY29udHJvbCA9IHRoaXMubmdDb250cm9sLmNvbnRyb2w7XHJcbiAgICB0aGlzLmVycm9yTWVzc2FnZUNvbXBvbmVudC5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcblxyXG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gdGhpcy5uYXRpdmVFbGVtZW50LnBhcmVudCgpLmNoaWxkcmVuKCdtei1lcnJvci1tZXNzYWdlJyk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QoZXJyb3JNZXNzYWdlLCAnaW5zZXJ0QWZ0ZXInLCBbdGhpcy5sYWJlbEVsZW1lbnRdKTtcclxuICB9XHJcblxyXG4gIHNldFZhbGlkYXRpb25TdGF0ZSgpIHtcclxuICAgIC8vIHRvIGhhbmRsZSByZXNldCBmb3JtXHJcbiAgICBpZiAodGhpcy5uZ0NvbnRyb2wuY29udHJvbC51bnRvdWNoZWQgJiYgdGhpcy5uZ0NvbnRyb2wuY29udHJvbC5wcmlzdGluZSkge1xyXG4gICAgICB0aGlzLmNsZWFyVmFsaWRhdGlvblN0YXRlKHRoaXMuZWxlbWVudFRvQWRkVmFsaWRhdGlvbik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vIHRvIGhhbmRsZSBmaWVsZCB2YWxpZGl0eVxyXG4gICAgaWYgKHRoaXMubmdDb250cm9sLmNvbnRyb2wuZW5hYmxlZCkge1xyXG4gICAgICBpZiAodGhpcy5uZ0NvbnRyb2wuY29udHJvbC52YWxpZCkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuZWxlbWVudFRvQWRkVmFsaWRhdGlvblswXSwgJ3ZhbGlkJywgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5lbGVtZW50VG9BZGRWYWxpZGF0aW9uWzBdLCAnaW52YWxpZCcsIGZhbHNlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLmVsZW1lbnRUb0FkZFZhbGlkYXRpb25bMF0sICd2YWxpZCcsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLmVsZW1lbnRUb0FkZFZhbGlkYXRpb25bMF0sICdpbnZhbGlkJywgdHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY2xlYXJWYWxpZGF0aW9uU3RhdGUodGhpcy5lbGVtZW50VG9BZGRWYWxpZGF0aW9uKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN1YnNjcmliZVN0YXR1c0NoYW5nZXMoKSB7XHJcbiAgICB0aGlzLnN0YXR1c0NoYW5nZXNTdWJzY3JpcHRpb24gPSB0aGlzLm5nQ29udHJvbC5jb250cm9sLnN0YXR1c0NoYW5nZXMuc3Vic2NyaWJlKChzdGF0dXM6IHN0cmluZykgPT4ge1xyXG4gICAgICAvLyBUT0RPIEZpbmQgYSBiZXR0ZXIgd2F5IHRvIGhhbmRsZSB2YWxpZGF0aW9uIGFmdGVyIHRoZSBmb3JtIHN1YnNjcmlwdGlvbi4gKHNlZSBkZW1vIGZvcm0tdmFsaWRhdGlvbilcclxuICAgICAgLy8gd2FpdCBmb3IgdGhlIHZhbHVlQ2hhbmdlcyBtZXRob2QgZnJvbSBGb3JtR3JvdXAgdG8gaGF2ZSBiZWVuIHRyaWdnZXJlZCBiZWZvcmUgaGFuZGxpbmcgdGhlIHZhbGlkYXRpb24gc3RhdGVcclxuICAgICAgLy8gLyFcXCByYWNlIGNvbmRpdGlvbiB3YXJuaW5nIC8hXFxcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnNldFZhbGlkYXRpb25TdGF0ZSgpKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEhhbmRsZVByb3BDaGFuZ2VzIH0gZnJvbSAnLi4vc2hhcmVkJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnc2VsZWN0W216U2VsZWN0XSwgc2VsZWN0W216LXNlbGVjdF0nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpTZWxlY3REaXJlY3RpdmUgZXh0ZW5kcyBIYW5kbGVQcm9wQ2hhbmdlcyBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICAvLyBuYXRpdmUgcHJvcGVydGllc1xyXG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcclxuXHJcbiAgLy8gZGlyZWN0aXZlIHByb3BlcnRpZXNcclxuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGZpbGxlZEluOiBib29sZWFuO1xyXG4gIEBPdXRwdXQoKSB1cGRhdGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGNoZWNrYm94RWxlbWVudHM6IEpRdWVyeTtcclxuICBsYWJlbEVsZW1lbnQ6IEpRdWVyeTtcclxuICBzZWxlY3RFbGVtZW50OiBKUXVlcnk7XHJcbiAgc2VsZWN0Q29udGFpbmVyRWxlbWVudDogSlF1ZXJ5O1xyXG5cclxuICBnZXQgaW5wdXRFbGVtZW50KCk6IEpRdWVyeSB7XHJcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RFbGVtZW50LnNpYmxpbmdzKCdpbnB1dC5zZWxlY3QtZHJvcGRvd24nKTtcclxuICB9XHJcblxyXG4gIG11dGF0aW9uT2JzZXJ2ZXI6IE11dGF0aW9uT2JzZXJ2ZXI7XHJcbiAgc3VzcGVuZCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHB1YmxpYyBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyLFxyXG4gICkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbml0SGFuZGxlcnMoKTtcclxuICAgIHRoaXMuaW5pdEVsZW1lbnRzKCk7XHJcbiAgICB0aGlzLmluaXRPbkNoYW5nZSgpO1xyXG4gICAgdGhpcy5oYW5kbGVQcm9wZXJ0aWVzKCk7XHJcblxyXG4gICAgLy8gbXVzdCBiZSBkb25lIGFmdGVyIGhhbmRsZVBsYWNlaG9sZGVyXHJcbiAgICB0aGlzLmluaXRTZWxlY3RlZE9wdGlvbigpO1xyXG5cclxuICAgIC8vIG11c3QgYmUgZG9uZSBhZnRlciBoYW5kbGVQcm9wZXJ0aWVzXHJcbiAgICB0aGlzLmluaXRNYXRlcmlhbFNlbGVjdCgpO1xyXG5cclxuICAgIC8vIG11c3QgYmUgZG9uZSBhZnRlciBpbml0TWF0ZXJpYWxTZWxlY3RcclxuICAgIHRoaXMubGlzdGVuT3B0aW9uQ2hhbmdlcygpO1xyXG4gICAgdGhpcy5pbml0RmlsbGVkSW4oKTtcclxuICAgIHRoaXMuaGFuZGxlRE9NRXZlbnRzKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLnNlbGVjdEVsZW1lbnQsICdtYXRlcmlhbF9zZWxlY3QnLCBbJ2Rlc3Ryb3knXSk7XHJcbiAgICB0aGlzLnNlbGVjdEVsZW1lbnQub2ZmKCk7XHJcbiAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gIH1cclxuXHJcbiAgaW5pdEhhbmRsZXJzKCkge1xyXG4gICAgdGhpcy5oYW5kbGVycyA9IHtcclxuICAgICAgZGlzYWJsZWQ6ICgpID0+IHRoaXMuaGFuZGxlRGlzYWJsZWQoKSxcclxuICAgICAgbGFiZWw6ICgpID0+IHRoaXMuaGFuZGxlTGFiZWwoKSxcclxuICAgICAgcGxhY2Vob2xkZXI6ICgpID0+IHRoaXMuaGFuZGxlUGxhY2Vob2xkZXIoKSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBpbml0RWxlbWVudHMoKSB7XHJcbiAgICB0aGlzLnNlbGVjdEVsZW1lbnQgPSAkKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcclxuICAgIHRoaXMuc2VsZWN0Q29udGFpbmVyRWxlbWVudCA9ICQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLnBhcmVudHMoJy5pbnB1dC1maWVsZCcpO1xyXG4gICAgdGhpcy5sYWJlbEVsZW1lbnQgPSB0aGlzLmNyZWF0ZUxhYmVsRWxlbWVudCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTmVlZCB0byBiZSBkb25lIGFmdGVyIG1hdGVyaWFsX3NlbGVjdCBoYXMgYmVlbiBpbnZva2VkIG9yIGVsc2UgdGhlIG11bHRpLXNlbGVjdFxyXG4gICAqIG9wdGlvbnMgYXJlIG5vdCB5ZXQgaW4gdGhlIERPTSBhcyBpdCBsb29wcyBvbiByZW5kZXJlZCBvcHRpb25zXHJcbiAgICovXHJcbiAgaW5pdEZpbGxlZEluKCkge1xyXG4gICAgdGhpcy5jaGVja2JveEVsZW1lbnRzID0gdGhpcy5zZWxlY3RDb250YWluZXJFbGVtZW50LmZpbmQoJzpjaGVja2JveCcpO1xyXG4gICAgdGhpcy5oYW5kbGVyc1snZmlsbGVkSW4nXSA9ICgpID0+IHRoaXMuaGFuZGxlRmlsbGVkSW4oKTtcclxuICAgIHRoaXMuaGFuZGxlRmlsbGVkSW4oKTtcclxuICB9XHJcblxyXG4gIGluaXRNYXRlcmlhbFNlbGVjdCgpIHtcclxuICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLnNlbGVjdEVsZW1lbnQsICdtYXRlcmlhbF9zZWxlY3QnKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRyaWdnZXIgdGhlIG5hdGl2ZSBjaGFuZ2UgZXZlbnQgZnJvbSBzZWxlY3QgZWxlbWVudCBpbnN0ZWFkIG9mIHRoZSBKUXVlcnkuXHJcbiAgICogQW4gaXNzdWUgb24gR2l0aHViIGlzIG9wZW4gYWJvdXQgdGhpcyBwcm9ibGVtIDogaHR0cHM6Ly9naXRodWIuY29tL0RvZ2ZhbG8vbWF0ZXJpYWxpemUvaXNzdWVzLzI4NDNcclxuICAgKiBUaGlzIG1ldGhvZCBzaG91bGQgYmUgcmVtb3ZlZCB3aGVuIHRoaXMgaXNzdWUgaXMgcmV2b2x2ZWQuXHJcbiAgICovXHJcbiAgaW5pdE9uQ2hhbmdlKCkge1xyXG4gICAgdGhpcy5zZWxlY3RFbGVtZW50Lm9uKCdjaGFuZ2UnLCAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgICBpZiAoIXRoaXMuc3VzcGVuZCkge1xyXG4gICAgICAgIHRoaXMuc3VzcGVuZCA9IHRydWU7XHJcblxyXG4gICAgICAgIGNvbnN0IGN1c3RvbUV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XHJcbiAgICAgICAgY3VzdG9tRXZlbnQuaW5pdEN1c3RvbUV2ZW50KCdjaGFuZ2UnLCB0cnVlLCBmYWxzZSwgZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuXHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMuc2VsZWN0RWxlbWVudFswXSwgJ2Rpc3BhdGNoRXZlbnQnLCBbY3VzdG9tRXZlbnRdKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gU3RvcCB0aGUgcHJvcGFnYXRpb24gb2YgY2hhbmdlIGV2ZW50XHJcbiAgICB0aGlzLnNlbGVjdEVsZW1lbnRbMF0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLnN1c3BlbmQgPSBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRE9NRXZlbnRzKCkge1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQub24oJ2JsdXIgZm9jdXMnLCAoZXZlbnQ6IEpRdWVyeS5FdmVudCkgPT4ge1xyXG4gICAgICBjb25zdCBjdXN0b21FdmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xyXG4gICAgICBjdXN0b21FdmVudC5pbml0Q3VzdG9tRXZlbnQoZXZlbnQudHlwZSwgdHJ1ZSwgZmFsc2UsIGV2ZW50LnRhcmdldCk7XHJcbiAgICAgIHRoaXMuc2VsZWN0RWxlbWVudFswXS5kaXNwYXRjaEV2ZW50KGN1c3RvbUV2ZW50KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlTGFiZWxFbGVtZW50KCkge1xyXG4gICAgY29uc3QgbGFiZWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGxhYmVsRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIHRoaXMuaWQpO1xyXG5cclxuICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLnNlbGVjdEVsZW1lbnQsICdhZnRlcicsIFtsYWJlbEVsZW1lbnRdKTtcclxuXHJcbiAgICByZXR1cm4gJChsYWJlbEVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlUHJvcGVydGllcygpIHtcclxuICAgIGlmICh0aGlzLnNlbGVjdENvbnRhaW5lckVsZW1lbnQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1NlbGVjdCB3aXRoIG16LXNlbGVjdCBkaXJlY3RpdmUgbXVzdCBiZSBwbGFjZSBpbnNpZGUgYSBbbXotc2VsZWN0LWNvbnRhaW5lcl0gdGFnJywgdGhpcy5zZWxlY3RFbGVtZW50KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgc3VwZXIuZXhlY3V0ZVByb3BIYW5kbGVycygpO1xyXG4gIH1cclxuXHJcbiAgaW5pdFNlbGVjdGVkT3B0aW9uKCkge1xyXG4gICAgY29uc3QgZmlyc3RPcHRpb25FbGVtZW50ID0gdGhpcy5zZWxlY3RFbGVtZW50LmNoaWxkcmVuKCkuZmlyc3QoKTtcclxuICAgIGlmIChmaXJzdE9wdGlvbkVsZW1lbnQubGVuZ3RoID4gMFxyXG4gICAgICAmJiB0aGlzLnNlbGVjdEVsZW1lbnQuY2hpbGRyZW4oJ29wdGlvbltzZWxlY3RlZF0nKS5sZW5ndGggPT09IDBcclxuICAgICAgJiYgIXRoaXMuc2VsZWN0RWxlbWVudFswXS5oYXNBdHRyaWJ1dGUoJ211bHRpcGxlJylcclxuICAgICkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRBdHRyaWJ1dGUoZmlyc3RPcHRpb25FbGVtZW50WzBdLCAnc2VsZWN0ZWQnLCAnJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVEaXNhYmxlZCgpIHtcclxuICAgIC8vIHdoZW4gZGlzYWJsZWQgaXMgbnVsbC91bmRlZmluZWQgdGhhdCBtZWFucyB0aGUgcHJvcGVydHkgaGFzIG5vdCBiZWVuIHVzZWQgb24gdGhlIGVsZW1lbnRcclxuICAgIC8vIGJ1dCBpdCBtaWdodCBiZSBzZXQgYnkgYW5vdGhlciBwcm9jZXNzIChmb3IgZXhhbXBsZSByZWFjdGl2ZSBmb3JtIGFwcGxpZXMgZGlzYWJsZWQgYXR0cmlidXRlIGl0c2VsZilcclxuICAgIC8vIHRoZXJlZm9yZSB3ZSBkb24ndCB3YW50IHRvIHJlbW92ZSBvciBhZGQgaXQgaGVyZVxyXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgIT0gbnVsbCkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRQcm9wZXJ0eSh0aGlzLnNlbGVjdEVsZW1lbnRbMF0sICdkaXNhYmxlZCcsICEhdGhpcy5kaXNhYmxlZCk7XHJcbiAgICAgIHRoaXMudXBkYXRlTWF0ZXJpYWxTZWxlY3QoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZUxhYmVsKCkge1xyXG4gICAgaWYgKHRoaXMubGFiZWwgIT0gbnVsbCkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QodGhpcy5sYWJlbEVsZW1lbnQsICd0ZXh0JywgW3RoaXMubGFiZWxdKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZUZpbGxlZEluKCkge1xyXG4gICAgaWYgKHRoaXMuY2hlY2tib3hFbGVtZW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuY2hlY2tib3hFbGVtZW50cy50b0FycmF5KCkuZm9yRWFjaChjaGVja2JveEVsZW1lbnQgPT4ge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKGNoZWNrYm94RWxlbWVudCwgJ2ZpbGxlZC1pbicsICEhdGhpcy5maWxsZWRJbik7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlUGxhY2Vob2xkZXIoKSB7XHJcbiAgICBjb25zdCBwbGFjZWhvbGRlckVsZW1lbnQgPSB0aGlzLnNlbGVjdEVsZW1lbnQuY2hpbGRyZW4oJzpkaXNhYmxlZCcpLmZpcnN0KCk7XHJcblxyXG4gICAgLy8gaWYgcGxhY2Vob2xkZXIgZWxlbWVudCBleGlzdHNcclxuICAgIGlmIChwbGFjZWhvbGRlckVsZW1lbnQubGVuZ3RoID4gMCkge1xyXG5cclxuICAgICAgaWYgKHRoaXMucGxhY2Vob2xkZXIpIHtcclxuICAgICAgICAvLyB1cGRhdGUgZXhpc3RpbmcgcGxhY2Vob2xkZXIgZWxlbWVudFxyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZChwbGFjZWhvbGRlckVsZW1lbnQsICd0ZXh0JywgW3RoaXMucGxhY2Vob2xkZXJdKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyByZW1vdmUgZXhpc3RpbmcgcGxhY2Vob2xkZXIgZWxlbWVudFxyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZChwbGFjZWhvbGRlckVsZW1lbnQsICdyZW1vdmUnKTtcclxuICAgICAgICAvLyBGb3JjZSB0cmlnZ2VyIGNoYW5nZSBldmVudCBzaW5jZSBpdCdzIG5vdCB0cmlnZ2VyZWQgd2hlbiB2YWx1ZSBjaGFuZ2UgcHJvZ3JhbW1hdGljYWxseVxyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLnNlbGVjdEVsZW1lbnQsICdjaGFuZ2UnKTtcclxuICAgICAgICAvLyBSZXF1aXJlZCBpZiB3ZSBkb24ndCB3YW50IGV4Y2VwdGlvbiBcIkV4cHJlc3Npb24gaGFzIGNoYW5nZWQgYWZ0ZXIgaXQgd2FzIGNoZWNrZWQuXCIgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvNjAwNVxyXG4gICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy5wbGFjZWhvbGRlcikge1xyXG4gICAgICAgIC8vIGFkZCBwbGFjZWhvbGRlciBlbGVtZW50XHJcbiAgICAgICAgY29uc3QgcGxhY2Vob2xkZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGhpcy5wbGFjZWhvbGRlcik7XHJcbiAgICAgICAgY29uc3QgcGxhY2Vob2xkZXJPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICBwbGFjZWhvbGRlck9wdGlvbi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgcGxhY2Vob2xkZXJPcHRpb24udmFsdWUgPSBudWxsO1xyXG4gICAgICAgIHBsYWNlaG9sZGVyT3B0aW9uLmFwcGVuZENoaWxkKHBsYWNlaG9sZGVyVGV4dCk7XHJcblxyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLnNlbGVjdEVsZW1lbnQsICdwcmVwZW5kJywgW3BsYWNlaG9sZGVyT3B0aW9uXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmluaXRNYXRlcmlhbFNlbGVjdCgpO1xyXG4gIH1cclxuXHJcbiAgbGlzdGVuT3B0aW9uQ2hhbmdlcygpIHtcclxuICAgIGNvbnN0IG11dGF0aW9uT2JzZXJ2ZXJDb25maWd1cmF0aW9uOiBNdXRhdGlvbk9ic2VydmVySW5pdCA9IHtcclxuICAgICAgY2hpbGRMaXN0OiB0cnVlLFxyXG4gICAgICBzdWJ0cmVlOiB0cnVlLFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zOiBNdXRhdGlvblJlY29yZFtdKSA9PiB7XHJcbiAgICAgIHRoaXMudXBkYXRlTWF0ZXJpYWxTZWxlY3QoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMubXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKHRoaXMuc2VsZWN0RWxlbWVudFswXSwgbXV0YXRpb25PYnNlcnZlckNvbmZpZ3VyYXRpb24pO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlTWF0ZXJpYWxTZWxlY3QoKSB7XHJcbiAgICB0aGlzLmluaXRNYXRlcmlhbFNlbGVjdCgpO1xyXG5cclxuICAgIGlmICh0aGlzLmZpbGxlZEluKSB7XHJcbiAgICAgIHRoaXMuaW5pdEZpbGxlZEluKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5oYW5kbGVET01FdmVudHMoKTtcclxuXHJcbiAgICAvLyB3YWl0IGZvciBtYXRlcmlhbGl6ZSBzZWxlY3QgdG8gYmUgaW5pdGlhbGl6ZWRcclxuICAgIC8vIC8hXFwgcmFjZSBjb25kaXRpb24gd2FybmluZyAvIVxcXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMudXBkYXRlLmVtaXQoKSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgQ29udGVudENoaWxkLCBJbnB1dCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBNelZhbGlkYXRpb25Db21wb25lbnQgfSBmcm9tICcuLi8uLi92YWxpZGF0aW9uL3ZhbGlkYXRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgTXpTZWxlY3REaXJlY3RpdmUgfSBmcm9tICcuLi9zZWxlY3QuZGlyZWN0aXZlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXotc2VsZWN0LWNvbnRhaW5lcicsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2XHJcbiAgY2xhc3M9XCJpbnB1dC1maWVsZFwiXHJcbiAgW2NsYXNzLmlubGluZV09XCJpbmxpbmVcIlxyXG4+XHJcbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L2Rpdj5gLFxyXG4gIHN0eWxlczogW2AuaW5wdXQtZmllbGQ6bm90KC5pbmxpbmUpe2Rpc3BsYXk6YmxvY2t9L2RlZXAvIC5pbnB1dC1maWVsZCAuZHJvcGRvd24tY29udGVudCBbdHlwZT1jaGVja2JveF0rbGFiZWx7dG9wOi0xMXB4fWBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpTZWxlY3RDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpIGlubGluZTogYm9vbGVhbjtcclxuXHJcbiAgQENvbnRlbnRDaGlsZChNelNlbGVjdERpcmVjdGl2ZSkgbXpTZWxlY3REaXJlY3RpdmU6IE16U2VsZWN0RGlyZWN0aXZlO1xyXG4gIEBDb250ZW50Q2hpbGQoTXpWYWxpZGF0aW9uQ29tcG9uZW50KSBtelZhbGlkYXRpb25Db21wb25lbnQ6IE16VmFsaWRhdGlvbkNvbXBvbmVudDtcclxuICBAQ29udGVudENoaWxkKE5nQ29udHJvbCkgbmdDb250cm9sOiBOZ0NvbnRyb2w7XHJcblxyXG4gIHNlbGVjdFZhbHVlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcbiAgc3RhdHVzQ2hhbmdlc1N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLmluaXRDb250cm9sU3Vic2NyaXB0aW9uKCk7XHJcbiAgICB0aGlzLmluaXRTZWxlY3RTdWJzY3JpcHRpb24oKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5yZW1vdmVDb250cm9sU3Vic2NyaXB0aW9uKCk7XHJcbiAgICB0aGlzLnJlbW92ZVNlbGVjdFN1YnNjcmlwdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgaW5pdENvbnRyb2xTdWJzY3JpcHRpb24oKSB7XHJcbiAgICBpZiAodGhpcy5uZ0NvbnRyb2wpIHtcclxuICAgICAgdGhpcy5telNlbGVjdERpcmVjdGl2ZS5kaXNhYmxlZCA9IHRoaXMubmdDb250cm9sLmNvbnRyb2wuZGlzYWJsZWQ7XHJcblxyXG4gICAgICB0aGlzLnN0YXR1c0NoYW5nZXNTdWJzY3JpcHRpb24gPSB0aGlzLm5nQ29udHJvbC5jb250cm9sLnN0YXR1c0NoYW5nZXMuc3Vic2NyaWJlKChzdGF0dXM6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIC8vIHRvIGhhbmRsZSBlbmFibGluZy9kaXNhYmxpbmcgZm9ybUNvbnRyb2xcclxuICAgICAgICBjb25zdCBkaXNhYmxlZCA9IHN0YXR1cyA9PT0gJ0RJU0FCTEVEJztcclxuICAgICAgICBpZiAoZGlzYWJsZWQgIT09IHRoaXMubXpTZWxlY3REaXJlY3RpdmUuZGlzYWJsZWQpIHtcclxuICAgICAgICAgIHRoaXMubXpTZWxlY3REaXJlY3RpdmUuZGlzYWJsZWQgPSBkaXNhYmxlZDtcclxuICAgICAgICAgIHRoaXMubXpTZWxlY3REaXJlY3RpdmUuaGFuZGxlRGlzYWJsZWQoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5zZWxlY3RWYWx1ZVN1YnNjcmlwdGlvbiA9IHRoaXMubmdDb250cm9sLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKHZhbHVlOiBhbnkpID0+IHtcclxuICAgICAgICAvLyB0byBzeW5jaHJvbml6ZSBpbnB1dCBhbmQgc2VsZWN0IHdoZW4gdmFsdWUgY2hhbmdlcyBwcm9ncmFtbWF0aWNhbGx5XHJcbiAgICAgICAgY29uc3QgaXNEcm9wZG93bk9wZW4gPSB0aGlzLm16U2VsZWN0RGlyZWN0aXZlLmlucHV0RWxlbWVudC5oYXNDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgY29uc3QgaW5wdXRWYWx1ZSA9IHRoaXMubXpTZWxlY3REaXJlY3RpdmUuaW5wdXRFbGVtZW50LnZhbCgpO1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLm16U2VsZWN0RGlyZWN0aXZlLnNlbGVjdEVsZW1lbnQuY2hpbGRyZW4oJ29wdGlvbicpO1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9ucyA9IG9wdGlvbnMuZmlsdGVyKCdvcHRpb246c2VsZWN0ZWQnKS50b0FycmF5KCk7XHJcbiAgICAgICAgY29uc3QgZGlzYWJsZWRPcHRpb25zID0gb3B0aW9ucy5maWx0ZXIoJzpkaXNhYmxlZCcpLnRvQXJyYXkoKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRPcHRpb25UZXh0ID0gc2VsZWN0ZWRPcHRpb25zLmxlbmd0aCA9PT0gMFxyXG4gICAgICAgICAgPyBkaXNhYmxlZE9wdGlvbnMubWFwKG9wdGlvbiA9PiBvcHRpb24udGV4dENvbnRlbnQpWzBdXHJcbiAgICAgICAgICA6IHNlbGVjdGVkT3B0aW9ucy5tYXAob3B0aW9uID0+IG9wdGlvbi50ZXh0Q29udGVudCkuam9pbignLCAnKTtcclxuXHJcbiAgICAgICAgaWYgKGlucHV0VmFsdWUgIT09IHNlbGVjdGVkT3B0aW9uVGV4dCAmJiAhaXNEcm9wZG93bk9wZW4pIHtcclxuICAgICAgICAgIHRoaXMubXpTZWxlY3REaXJlY3RpdmUudXBkYXRlTWF0ZXJpYWxTZWxlY3QoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5pdFNlbGVjdFN1YnNjcmlwdGlvbigpIHtcclxuICAgIGlmICh0aGlzLm16U2VsZWN0RGlyZWN0aXZlKSB7XHJcbiAgICAgIHRoaXMubXpTZWxlY3REaXJlY3RpdmUudXBkYXRlXHJcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnJlZ2lzdGVyT25CbHVyKCkpXHJcbiAgICAgICAgLm5leHQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25CbHVyKCkge1xyXG4gICAgdGhpcy5telNlbGVjdERpcmVjdGl2ZS5pbnB1dEVsZW1lbnQub24oJ2JsdXInLCAoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLm5nQ29udHJvbCkge1xyXG4gICAgICAgIHRoaXMubmdDb250cm9sLmNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLm16VmFsaWRhdGlvbkNvbXBvbmVudCkge1xyXG4gICAgICAgIHRoaXMubXpWYWxpZGF0aW9uQ29tcG9uZW50LnNldFZhbGlkYXRpb25TdGF0ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlbW92ZUNvbnRyb2xTdWJzY3JpcHRpb24oKSB7XHJcbiAgICBpZiAodGhpcy5telNlbGVjdERpcmVjdGl2ZSkge1xyXG4gICAgICB0aGlzLm16U2VsZWN0RGlyZWN0aXZlLnVwZGF0ZS51bnN1YnNjcmliZSgpO1xyXG4gICAgICB0aGlzLm16U2VsZWN0RGlyZWN0aXZlLmlucHV0RWxlbWVudC5vZmYoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbW92ZVNlbGVjdFN1YnNjcmlwdGlvbigpIHtcclxuICAgIGlmICh0aGlzLnN0YXR1c0NoYW5nZXNTdWJzY3JpcHRpb24pIHtcclxuICAgICAgdGhpcy5zdGF0dXNDaGFuZ2VzU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zZWxlY3RWYWx1ZVN1YnNjcmlwdGlvbikge1xyXG4gICAgICB0aGlzLnNlbGVjdFZhbHVlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBNelNlbGVjdENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vc2VsZWN0LWNvbnRhaW5lci9pbmRleCc7XHJcbmltcG9ydCB7IE16U2VsZWN0RGlyZWN0aXZlIH0gZnJvbSAnLi9zZWxlY3QuZGlyZWN0aXZlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBNelNlbGVjdERpcmVjdGl2ZSxcclxuICAgIE16U2VsZWN0Q29udGFpbmVyQ29tcG9uZW50LFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgTXpTZWxlY3REaXJlY3RpdmUsXHJcbiAgICBNelNlbGVjdENvbnRhaW5lckNvbXBvbmVudCxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpTZWxlY3RNb2R1bGUgeyB9XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTXpSZW1vdmVDb21wb25lbnRIb3N0IH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3JlbW92ZS1jb21wb25lbnQtaG9zdC9yZW1vdmUtY29tcG9uZW50LWhvc3QnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtei1zaWRlbmF2LWNvbGxhcHNpYmxlLWhlYWRlcicsXHJcbiAgdGVtcGxhdGU6IGA8YSBjbGFzcz1cImNvbGxhcHNpYmxlLWhlYWRlciB3YXZlcy1lZmZlY3RcIj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9hPmAsXHJcbiAgc3R5bGVzOiBbYGBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpTaWRlbmF2Q29sbGFwc2libGVIZWFkZXJDb21wb25lbnQgZXh0ZW5kcyBNelJlbW92ZUNvbXBvbmVudEhvc3QgeyB9XHJcbiIsImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIFJlbmRlcmVyLFxyXG4gIFZpZXdDaGlsZCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE16U2lkZW5hdkNvbGxhcHNpYmxlSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9zaWRlbmF2LWNvbGxhcHNpYmxlLWhlYWRlci9zaWRlbmF2LWNvbGxhcHNpYmxlLWhlYWRlci5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtei1zaWRlbmF2LWNvbGxhcHNpYmxlJyxcclxuICB0ZW1wbGF0ZTogYDxsaT5cclxuICA8dWwgI2NvbGxhcHNpYmxlIGNsYXNzPVwiY29sbGFwc2libGUgY29sbGFwc2libGUtYWNjb3JkaW9uXCI+XHJcbiAgICA8bGk+XHJcbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm16LXNpZGVuYXYtY29sbGFwc2libGUtaGVhZGVyXCI+PC9uZy1jb250ZW50PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sbGFwc2libGUtYm9keVwiPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm16LXNpZGVuYXYtY29sbGFwc2libGUtY29udGVudFwiPjwvbmctY29udGVudD5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbGk+XHJcbiAgPC91bD5cclxuPC9saT5gLFxyXG4gIHN0eWxlczogW2A6aG9zdCAvZGVlcC8gLmNvbGxhcHNpYmxlLWhlYWRlcntwYWRkaW5nOjAgMzJweH06aG9zdCAvZGVlcC8gLmNvbGxhcHNpYmxlLWhlYWRlciBpe2NvbG9yOnJnYmEoMCwwLDAsLjU0KX06aG9zdCAvZGVlcC8gLmNvbGxhcHNpYmxlLWJvZHkgbGkgYXtmb250LXdlaWdodDppbml0aWFsfWBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpTaWRlbmF2Q29sbGFwc2libGVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuICBASW5wdXQoKSBvbkNsb3NlOiBGdW5jdGlvbjtcclxuICBASW5wdXQoKSBvbk9wZW46IEZ1bmN0aW9uO1xyXG5cclxuICBAVmlld0NoaWxkKCdjb2xsYXBzaWJsZScpIGNvbGxhcHNpYmxlOiBFbGVtZW50UmVmO1xyXG4gIEBDb250ZW50Q2hpbGQoTXpTaWRlbmF2Q29sbGFwc2libGVIZWFkZXJDb21wb25lbnQpIGhlYWRlcjogTXpTaWRlbmF2Q29sbGFwc2libGVIZWFkZXJDb21wb25lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIsXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5pbml0Q29sbGFwc2libGUoKTtcclxuICB9XHJcblxyXG4gIGluaXRDb2xsYXBzaWJsZSgpIHtcclxuICAgIGNvbnN0IG9wdGlvbnM6IE1hdGVyaWFsaXplLkNvbGxhcHNpYmxlT3B0aW9ucyA9IHtcclxuICAgICAgYWNjb3JkaW9uOiBmYWxzZSxcclxuICAgICAgb25DbG9zZTogdGhpcy5vbkNsb3NlLFxyXG4gICAgICBvbk9wZW46IHRoaXMub25PcGVuLFxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBuZWVkIHNldFRpbWVvdXQgb3RoZXJ3aXNlIGxvYWRpbmcgZGlyZWN0bHkgb24gdGhlIHBhZ2UgY2F1c2UgYW4gZXJyb3JcclxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKCQodGhpcy5jb2xsYXBzaWJsZS5uYXRpdmVFbGVtZW50KSwgJ2NvbGxhcHNpYmxlJywgW29wdGlvbnNdKSk7XHJcblxyXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBEZWNsYXJlIHRoZSB0YWdzIHRvIGF2b2lkIGVycm9yOiAnPG16LXNpZGVuYXYtY29sbGFwc2libGUteD4nIGlzIG5vdCBhIGtub3duIGVsZW1lbnRcclxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTEyNTFcclxuLy8gdHNsaW50OmRpc2FibGU6IGRpcmVjdGl2ZS1zZWxlY3RvclxyXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdtei1zaWRlbmF2LWNvbGxhcHNpYmxlLWNvbnRlbnQnIH0pIGV4cG9ydCBjbGFzcyBNelNpZGVuYXZDb2xsYXBzaWJsZUNvbnRlbnREaXJlY3RpdmUgeyB9XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtei1zaWRlbmF2LWRpdmlkZXInLFxyXG4gIHRlbXBsYXRlOiBgPGxpPlxyXG4gIDxkaXYgY2xhc3M9XCJkaXZpZGVyXCI+PC9kaXY+XHJcbjwvbGk+YCxcclxuICBzdHlsZXM6IFtgLmRpdmlkZXJ7bWFyZ2luLWJvdHRvbTo4cHh9YF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNelNpZGVuYXZEaXZpZGVyQ29tcG9uZW50IHsgfVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXotc2lkZW5hdi1oZWFkZXInLFxyXG4gIHRlbXBsYXRlOiBgPGxpIGNsYXNzPVwic2lkZW5hdi1oZWFkZXJcIj5cclxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjwvbGk+YCxcclxuICBzdHlsZXM6IFtgLnNpZGVuYXYtaGVhZGVye21hcmdpbi1ib3R0b206OHB4fWBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpTaWRlbmF2SGVhZGVyQ29tcG9uZW50IHsgfVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtei1zaWRlbmF2LWxpbmsnLFxyXG4gIHRlbXBsYXRlOiBgPGxpXHJcbiAgW2NsYXNzLmFjdGl2ZV09XCJhY3RpdmVcIlxyXG4+XHJcbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L2xpPlxyXG5gLFxyXG4gIHN0eWxlczogW2A6aG9zdCAvZGVlcC8gYVtjbGFzcyo9bWRpLV06OmJlZm9yZXtjb2xvcjpyZ2JhKDAsMCwwLC41NCk7bWFyZ2luOi0xcHggMzJweCAwIDA7dmVydGljYWwtYWxpZ246bWlkZGxlfTpob3N0IC9kZWVwLyBhIGksOmhvc3QgL2RlZXAvIGEgaS5tYXRlcmlhbC1pY29ucyw6aG9zdCAvZGVlcC8gYSBpW2NsYXNzKj1tZGktXXttYXJnaW4tdG9wOi0xcHh9Omhvc3QgL2RlZXAvIGEgaS5tYXRlcmlhbC1pY29uczo6YmVmb3JlLDpob3N0IC9kZWVwLyBhIGk6OmJlZm9yZSw6aG9zdCAvZGVlcC8gYSBpW2NsYXNzKj1tZGktXTo6YmVmb3Jle3ZlcnRpY2FsLWFsaWduOm1pZGRsZX1gXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5FbXVsYXRlZCxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16U2lkZW5hdkxpbmtDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGFjdGl2ZTogYm9vbGVhbjtcclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXotc2lkZW5hdi1zdWJoZWFkZXInLFxyXG4gIHRlbXBsYXRlOiBgPGxpPlxyXG4gIDxhIGNsYXNzPVwic3ViaGVhZGVyXCI+XHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgPC9hPlxyXG48L2xpPmAsXHJcbiAgc3R5bGVzOiBbYGBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpTaWRlbmF2U3ViaGVhZGVyQ29tcG9uZW50IHsgfVxyXG4iLCJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXotc2lkZW5hdicsXHJcbiAgdGVtcGxhdGU6IGA8dWwgY2xhc3M9XCJzaWRlLW5hdiB7eyBiYWNrZ3JvdW5kQ2xhc3MgfX1cIlxyXG4gIFthdHRyLmlkXT1cImlkXCJcclxuICBbY2xhc3MuZml4ZWRdPVwiZml4ZWRcIj5cclxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjwvdWw+YCxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16U2lkZW5hdkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KCkgYmFja2dyb3VuZENsYXNzOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgY2xvc2VPbkNsaWNrOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGNvbGxhcHNlQnV0dG9uSWQ6IHN0cmluZztcclxuICBASW5wdXQoKSBkcmFnZ2FibGU6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgZWRnZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGZpeGVkOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgb25DbG9zZTogRnVuY3Rpb247XHJcbiAgQElucHV0KCkgb25PcGVuOiBGdW5jdGlvbjtcclxuICBASW5wdXQoKSB3aWR0aDogbnVtYmVyO1xyXG5cclxuICBwcml2YXRlIF9vcGVuZWQgPSBmYWxzZTtcclxuICBwcml2YXRlIGNvbGxhcHNlQnV0dG9uOiBKUXVlcnk8RWxlbWVudD47XHJcblxyXG4gIGdldCBvcGVuZWQoKSB7IHJldHVybiB0aGlzLl9vcGVuZWQ7IH1cclxuICBzZXQgb3BlbmVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9vcGVuZWQgPSB2YWx1ZTtcclxuICAgIHRoaXMuY29sbGFwc2VCdXR0b24uc2lkZU5hdih0aGlzLl9vcGVuZWQgPyAnc2hvdycgOiAnaGlkZScpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5pbml0Q29sbGFwc2VCdXR0b24oKTtcclxuICAgIHRoaXMuaW5pdENvbGxhcHNpYmxlTGlua3MoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5jb2xsYXBzZUJ1dHRvbi5zaWRlTmF2KCdkZXN0cm95Jyk7XHJcbiAgfVxyXG5cclxuICBpbml0Q29sbGFwc2VCdXR0b24oKSB7XHJcbiAgICAvLyBmYWtlIGJ1dHRvbiBpZiBubyBjb2xsYXBzZUJ1dHRvbklkIGlzIHByb3ZpZGVkXHJcbiAgICB0aGlzLmNvbGxhcHNlQnV0dG9uID0gdGhpcy5jb2xsYXBzZUJ1dHRvbklkXHJcbiAgICAgID8gJChgIyR7dGhpcy5jb2xsYXBzZUJ1dHRvbklkfWApXHJcbiAgICAgIDogJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpKTtcclxuXHJcbiAgICAvLyBhZGQgZGF0YS1hY3RpdmF0ZXMgdG8gY29sbGFwc2UgYnV0dG9uXHJcbiAgICB0aGlzLmNvbGxhcHNlQnV0dG9uLmF0dHIoJ2RhdGEtYWN0aXZhdGVzJywgdGhpcy5pZCk7XHJcblxyXG4gICAgLy8gZXh0ZW5kIG9uT3BlbiBmdW5jdGlvbiB0byB1cGRhdGUgb3BlbmVkIHN0YXRlXHJcbiAgICBjb25zdCBvbk9wZW4gPSB0aGlzLm9uT3BlbiB8fCAoKCkgPT4ge30pO1xyXG4gICAgdGhpcy5vbk9wZW4gPSAoKSA9PiB7XHJcbiAgICAgIG9uT3BlbigpO1xyXG4gICAgICB0aGlzLl9vcGVuZWQgPSB0cnVlO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBleHRlbmQgb25DbG9zZSBmdW5jdGlvbiB0byB1cGRhdGUgb3BlbmVkIHN0YXRlXHJcbiAgICBjb25zdCBvbkNsb3NlID0gdGhpcy5vbkNsb3NlIHx8ICgoKSA9PiB7fSk7XHJcbiAgICB0aGlzLm9uQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgIG9uQ2xvc2UoKTtcclxuICAgICAgdGhpcy5fb3BlbmVkID0gZmFsc2U7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGluaXRpYWxpemUgc2lkZW5hdlxyXG4gICAgdGhpcy5jb2xsYXBzZUJ1dHRvbi5zaWRlTmF2KHtcclxuICAgICAgY2xvc2VPbkNsaWNrOiB0aGlzLmNsb3NlT25DbGljayB8fCBmYWxzZSxcclxuICAgICAgZHJhZ2dhYmxlOiB0aGlzLmRyYWdnYWJsZSAhPSBudWxsID8gdGhpcy5kcmFnZ2FibGUgOiB0cnVlLFxyXG4gICAgICBlZGdlOiB0aGlzLmVkZ2UgfHwgJ2xlZnQnLFxyXG4gICAgICBtZW51V2lkdGg6IGlzTmFOKHRoaXMud2lkdGgpID8gMzAwIDogdGhpcy53aWR0aCxcclxuICAgICAgb25DbG9zZTogdGhpcy5vbkNsb3NlLFxyXG4gICAgICBvbk9wZW46IHRoaXMub25PcGVuLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbml0Q29sbGFwc2libGVMaW5rcygpIHtcclxuICAgIC8vIGluaXRpYWxpemUgY29sbGFwc2libGUgZWxlbWVudHNcclxuICAgICQoYCMke3RoaXMuaWR9IC5jb2xsYXBzaWJsZWApLmNvbGxhcHNpYmxlKCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQge1xyXG4gIE16U2lkZW5hdkNvbGxhcHNpYmxlQ29tcG9uZW50LFxyXG4gIE16U2lkZW5hdkNvbGxhcHNpYmxlQ29udGVudERpcmVjdGl2ZSxcclxuICBNelNpZGVuYXZDb2xsYXBzaWJsZUhlYWRlckNvbXBvbmVudCxcclxufSBmcm9tICcuL3NpZGVuYXYtY29sbGFwc2libGUvaW5kZXgnO1xyXG5pbXBvcnQgeyBNelNpZGVuYXZEaXZpZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9zaWRlbmF2LWRpdmlkZXIvaW5kZXgnO1xyXG5pbXBvcnQgeyBNelNpZGVuYXZIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL3NpZGVuYXYtaGVhZGVyL2luZGV4JztcclxuaW1wb3J0IHsgTXpTaWRlbmF2TGlua0NvbXBvbmVudCB9IGZyb20gJy4vc2lkZW5hdi1saW5rL2luZGV4JztcclxuaW1wb3J0IHsgTXpTaWRlbmF2U3ViaGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9zaWRlbmF2LXN1YmhlYWRlci9pbmRleCc7XHJcbmltcG9ydCB7IE16U2lkZW5hdkNvbXBvbmVudCB9IGZyb20gJy4vc2lkZW5hdi5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIE16U2lkZW5hdkNvbGxhcHNpYmxlQ29tcG9uZW50LFxyXG4gICAgTXpTaWRlbmF2Q29sbGFwc2libGVDb250ZW50RGlyZWN0aXZlLFxyXG4gICAgTXpTaWRlbmF2Q29sbGFwc2libGVIZWFkZXJDb21wb25lbnQsXHJcbiAgICBNelNpZGVuYXZDb21wb25lbnQsXHJcbiAgICBNelNpZGVuYXZEaXZpZGVyQ29tcG9uZW50LFxyXG4gICAgTXpTaWRlbmF2SGVhZGVyQ29tcG9uZW50LFxyXG4gICAgTXpTaWRlbmF2TGlua0NvbXBvbmVudCxcclxuICAgIE16U2lkZW5hdlN1YmhlYWRlckNvbXBvbmVudCxcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIE16U2lkZW5hdkNvbGxhcHNpYmxlQ29tcG9uZW50LFxyXG4gICAgTXpTaWRlbmF2Q29sbGFwc2libGVDb250ZW50RGlyZWN0aXZlLFxyXG4gICAgTXpTaWRlbmF2Q29sbGFwc2libGVIZWFkZXJDb21wb25lbnQsXHJcbiAgICBNelNpZGVuYXZDb21wb25lbnQsXHJcbiAgICBNelNpZGVuYXZEaXZpZGVyQ29tcG9uZW50LFxyXG4gICAgTXpTaWRlbmF2SGVhZGVyQ29tcG9uZW50LFxyXG4gICAgTXpTaWRlbmF2TGlua0NvbXBvbmVudCxcclxuICAgIE16U2lkZW5hdlN1YmhlYWRlckNvbXBvbmVudCxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpTaWRlbmF2TW9kdWxlIHsgfVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ216LXNwaW5uZXInLFxyXG4gIHRlbXBsYXRlOiBgIDxkaXYgY2xhc3M9XCJwcmVsb2FkZXItd3JhcHBlciBhY3RpdmUge3sgc2l6ZSB9fVwiPlxyXG5cclxuICAgIDxkaXZcclxuICAgICAgY2xhc3M9XCJzcGlubmVyLWxheWVyXCJcclxuICAgICAgW2NsYXNzLnNwaW5uZXItcmVkLW9ubHldPVwiY29sb3IgPT09ICdyZWQnXCJcclxuICAgICAgW2NsYXNzLnNwaW5uZXItZ3JlZW4tb25seV09XCJjb2xvciA9PT0gJ2dyZWVuJ1wiXHJcbiAgICAgIFtjbGFzcy5zcGlubmVyLWJsdWUtb25seV09XCJjb2xvciA9PT0gJ2JsdWUnXCJcclxuICAgICAgW2NsYXNzLnNwaW5uZXIteWVsbG93LW9ubHldPVwiY29sb3IgPT09ICd5ZWxsb3cnXCI+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgbGVmdFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZ2FwLXBhdGNoXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciByaWdodFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5gLFxyXG4gIHN0eWxlczogW2BgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16U3Bpbm5lckNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgY29sb3I6IHN0cmluZztcclxuICBASW5wdXQoKSBzaXplOiBzdHJpbmc7IC8vIHNtYWxsLCBtZWRpdW0sIGJpZ1xyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBNelNwaW5uZXJDb21wb25lbnQgfSBmcm9tICcuL3NwaW5uZXIuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbTXpTcGlubmVyQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbTXpTcGlubmVyQ29tcG9uZW50XSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16U3Bpbm5lck1vZHVsZSB7IH1cclxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBSZW5kZXJlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbXpTd2l0Y2hdLCBbbXotc3dpdGNoXScsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNelN3aXRjaERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgb2ZmOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgb246IHN0cmluZztcclxuXHJcbiAgc3dpdGNoQ29udGFpbmVyRWxlbWVudDogSlF1ZXJ5O1xyXG4gIHN3aXRjaEVsZW1lbnQ6IEpRdWVyeTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcixcclxuICApIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5pdEVsZW1lbnRzKCk7XHJcbiAgICB0aGlzLmhhbmRsZUlucHV0VHlwZSgpO1xyXG4gIH1cclxuXHJcbiAgaW5pdEVsZW1lbnRzKCkge1xyXG4gICAgdGhpcy5zd2l0Y2hFbGVtZW50ID0gJCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XHJcbiAgICB0aGlzLnN3aXRjaENvbnRhaW5lckVsZW1lbnQgPSAkKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5wYXJlbnQoJ2xhYmVsJykucGFyZW50KCcuc3dpdGNoJyk7XHJcblxyXG4gICAgaWYgKHRoaXMuc3dpdGNoQ29udGFpbmVyRWxlbWVudC5sZW5ndGggPT09IDApIHtcclxuICAgICAgY29uc29sZS5lcnJvcignSW5wdXQgd2l0aCBtei1zd2l0Y2ggZGlyZWN0aXZlIG11c3QgYmUgcGxhY2VkIGluc2lkZSBhbiBbbXotc3dpdGNoLWNvbnRhaW5lcl0gdGFnJywgdGhpcy5zd2l0Y2hFbGVtZW50KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlSW5wdXRUeXBlKCkge1xyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMuc3dpdGNoRWxlbWVudC5hdHRyKCd0eXBlJyk7XHJcbiAgICBpZiAodHlwZSAhPT0gJ2NoZWNrYm94Jykge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRBdHRyaWJ1dGUodGhpcy5zd2l0Y2hFbGVtZW50WzBdLCAndHlwZScsICdjaGVja2JveCcpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIENvbnRlbnRDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTXpTd2l0Y2hEaXJlY3RpdmUgfSBmcm9tICcuLi9zd2l0Y2guZGlyZWN0aXZlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXotc3dpdGNoLWNvbnRhaW5lcicsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwic3dpdGNoXCI+XHJcbiAgPGxhYmVsPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJvZmZcIj57eyBtelN3aXRjaERpcmVjdGl2ZT8ub2ZmIH19PC9zcGFuPlxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgPHNwYW4gY2xhc3M9XCJsZXZlclwiPjwvc3Bhbj5cclxuICAgIDxzcGFuIGNsYXNzPVwib25cIj57eyBtelN3aXRjaERpcmVjdGl2ZT8ub24gfX08L3NwYW4+XHJcbiAgPC9sYWJlbD5cclxuPC9kaXY+YCxcclxuICBzdHlsZXM6IFtgYF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNelN3aXRjaENvbnRhaW5lckNvbXBvbmVudCB7XHJcbiAgQENvbnRlbnRDaGlsZChNelN3aXRjaERpcmVjdGl2ZSkgbXpTd2l0Y2hEaXJlY3RpdmU6IE16U3dpdGNoRGlyZWN0aXZlO1xyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBNelN3aXRjaENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vc3dpdGNoLWNvbnRhaW5lci9pbmRleCc7XHJcbmltcG9ydCB7IE16U3dpdGNoRGlyZWN0aXZlIH0gZnJvbSAnLi9zd2l0Y2guZGlyZWN0aXZlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBNelN3aXRjaERpcmVjdGl2ZSxcclxuICAgIE16U3dpdGNoQ29udGFpbmVyQ29tcG9uZW50LFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgTXpTd2l0Y2hEaXJlY3RpdmUsXHJcbiAgICBNelN3aXRjaENvbnRhaW5lckNvbXBvbmVudCxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpTd2l0Y2hNb2R1bGUgeyB9XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXotdGFiLWl0ZW0nLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiBpZD1cInt7IGxpbmsgfX1cIiBjbGFzcz1cInt7IGNsYXNzIH19XCI+XHJcbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L2Rpdj5gLFxyXG4gIHN0eWxlczogW2BgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16VGFiSXRlbUNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgYWN0aXZlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGNsYXNzOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgaHJlZjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgdGFiSXRlbUlkOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgdGFyZ2V0OiBzdHJpbmc7XHJcblxyXG4gIHRhYnM6IEhUTUxFbGVtZW50O1xyXG4gIGxpRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gIGdldCBsaW5rKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy50YWJJdGVtSWQgPyB0aGlzLnRhYkl0ZW1JZCA6IHRoaXMubGFiZWwucmVwbGFjZSgvW15hLXpBLVowLTldL2csICcnKS50b0xvd2VyQ2FzZSgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIENvbnRlbnRDaGlsZHJlbiwgRWxlbWVudFJlZiwgSW5wdXQsIFF1ZXJ5TGlzdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBNelRhYkl0ZW1Db21wb25lbnQgfSBmcm9tICcuL3RhYi1pdGVtL3RhYi1pdGVtLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ216LXRhYicsXHJcbiAgdGVtcGxhdGU6IGA8dWwgI3RhYnNcclxuICBjbGFzcz1cInRhYnNcIlxyXG4gIFtjbGFzcy50YWJzLWZpeGVkLXdpZHRoXT1cImZpeGVkVGFiV2lkdGhcIj5cclxuICA8bGkgY2xhc3M9XCJ0YWJcIiBbY2xhc3MuZGlzYWJsZWRdPVwidGFiSXRlbS5kaXNhYmxlZFwiICpuZ0Zvcj1cImxldCB0YWJJdGVtIG9mIHRhYkl0ZW1zLnRvQXJyYXkoKVwiPlxyXG4gICAgPGEgW2NsYXNzLmFjdGl2ZV09XCJ0YWJJdGVtLmFjdGl2ZVwiXHJcbiAgICAgIGhyZWY9XCJ7eyB0YWJJdGVtLmhyZWYgPyB0YWJJdGVtLmhyZWYgOiAnIycgKyB0YWJJdGVtLmxpbmsgfX1cIiB0YXJnZXQ9XCJ7eyB0YWJJdGVtLnRhcmdldCB9fVwiPlxyXG4gICAgICB7eyB0YWJJdGVtLmxhYmVsIH19XHJcbiAgICA8L2E+XHJcbiAgPC9saT5cclxuPC91bD5cclxuPGRpdj5cclxuICA8bmctY29udGVudCBzZWxlY3Q9XCJtei10YWItaXRlbVwiPjwvbmctY29udGVudD5cclxuPC9kaXY+YCxcclxuICBzdHlsZXM6IFtgYF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNelRhYkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG4gIEBJbnB1dCgpIGZpeGVkVGFiV2lkdGg6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgb25TaG93OiBGdW5jdGlvbjtcclxuICBASW5wdXQoKSByZXNwb25zaXZlVGhyZXNob2xkOiBudW1iZXI7XHJcbiAgQElucHV0KCkgc3dpcGVhYmxlOiBib29sZWFuO1xyXG5cclxuICBAVmlld0NoaWxkKCd0YWJzJykgdGFiczogRWxlbWVudFJlZjtcclxuICBAQ29udGVudENoaWxkcmVuKE16VGFiSXRlbUNvbXBvbmVudCkgdGFiSXRlbXM6IFF1ZXJ5TGlzdDxNelRhYkl0ZW1Db21wb25lbnQ+O1xyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmluaXRUYWJzKCk7XHJcbiAgfVxyXG5cclxuICBpbml0VGFicygpIHtcclxuICAgIGNvbnN0IG9wdGlvbnM6IE1hdGVyaWFsaXplLlRhYk9wdGlvbnMgPSB7XHJcbiAgICAgIG9uU2hvdzogdGhpcy5vblNob3csXHJcbiAgICAgIHJlc3BvbnNpdmVUaHJlc2hvbGQ6IHRoaXMucmVzcG9uc2l2ZVRocmVzaG9sZCxcclxuICAgICAgc3dpcGVhYmxlOiB0aGlzLnN3aXBlYWJsZSxcclxuICAgIH07XHJcblxyXG4gICAgJCh0aGlzLnRhYnMubmF0aXZlRWxlbWVudCkudGFicyhvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIHNlbGVjdFRhYih0YWJJdGVtSWQ6IHN0cmluZykge1xyXG4gICAgJCh0aGlzLnRhYnMubmF0aXZlRWxlbWVudCkudGFicygnc2VsZWN0X3RhYicsIHRhYkl0ZW1JZCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBNelRhYkl0ZW1Db21wb25lbnQgfSBmcm9tICcuL3RhYi1pdGVtL2luZGV4JztcclxuaW1wb3J0IHsgTXpUYWJDb21wb25lbnQgfSBmcm9tICcuL3RhYi5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIE16VGFiQ29tcG9uZW50LFxyXG4gICAgTXpUYWJJdGVtQ29tcG9uZW50LFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgTXpUYWJDb21wb25lbnQsXHJcbiAgICBNelRhYkl0ZW1Db21wb25lbnQsXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16VGFiTW9kdWxlIHsgfVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ216LXRleHRhcmVhLWNvbnRhaW5lcicsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2XHJcbiAgY2xhc3M9XCJpbnB1dC1maWVsZFwiXHJcbiAgW2NsYXNzLmlubGluZV09XCJpbmxpbmVcIlxyXG4+XHJcbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L2Rpdj5gLFxyXG4gIHN0eWxlczogW2A6aG9zdCAvZGVlcC8gdGV4dGFyZWF7ZGlzcGxheTpibG9ja30uaW5wdXQtZmllbGQ6bm90KC5pbmxpbmUpe2Rpc3BsYXk6YmxvY2t9YF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNelRleHRhcmVhQ29udGFpbmVyQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBpbmxpbmU6IGJvb2xlYW47XHJcbn1cclxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBPbkluaXQsIFJlbmRlcmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ2lbbXpUZXh0YXJlYVByZWZpeF0sIGlbbXotdGV4dGFyZWEtcHJlZml4XScsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNelRleHRhcmVhUHJlZml4RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcikgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdwcmVmaXgnLCB0cnVlKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIE9wdGlvbmFsLCBSZW5kZXJlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgSGFuZGxlUHJvcENoYW5nZXMgfSBmcm9tICcuLi9zaGFyZWQvaW5kZXgnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICd0ZXh0YXJlYVttelRleHRhcmVhXSwgdGV4dGFyZWFbbXotdGV4dGFyZWFdJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16VGV4dGFyZWFEaXJlY3RpdmUgZXh0ZW5kcyBIYW5kbGVQcm9wQ2hhbmdlcyBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICAvLyBuYXRpdmUgcHJvcGVydGllc1xyXG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcclxuXHJcbiAgLy8gZGlyZWN0aXZlIHByb3BlcnRpZXNcclxuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGxlbmd0aDogbnVtYmVyO1xyXG5cclxuICB0ZXh0YXJlYUVsZW1lbnQ6IEpRdWVyeTtcclxuICB0ZXh0YXJlYUNvbnRhaW5lckVsZW1lbnQ6IEpRdWVyeTtcclxuICB0ZXh0YXJlYVZhbHVlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcbiAgbGFiZWxFbGVtZW50OiBKUXVlcnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBuZ0NvbnRyb2w6IE5nQ29udHJvbCxcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyLFxyXG4gICkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbml0SGFuZGxlcnMoKTtcclxuICAgIHRoaXMuaW5pdEVsZW1lbnRzKCk7XHJcbiAgICB0aGlzLmluaXRUZXh0YXJlYVN1YnNjcmlwdGlvbigpO1xyXG4gICAgdGhpcy5oYW5kbGVQcm9wZXJ0aWVzKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIGlmICh0aGlzLnRleHRhcmVhVmFsdWVTdWJzY3JpcHRpb24pIHtcclxuICAgICAgdGhpcy50ZXh0YXJlYVZhbHVlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbml0SGFuZGxlcnMoKSB7XHJcbiAgICB0aGlzLmhhbmRsZXJzID0ge1xyXG4gICAgICBsYWJlbDogKCkgPT4gdGhpcy5oYW5kbGVMYWJlbCgpLFxyXG4gICAgICBsZW5ndGg6ICgpID0+IHRoaXMuaGFuZGxlTGVuZ3RoKCksXHJcbiAgICAgIHBsYWNlaG9sZGVyOiAoKSA9PiB0aGlzLmhhbmRsZVBsYWNlaG9sZGVyKCksXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgaW5pdEVsZW1lbnRzKCkge1xyXG4gICAgdGhpcy50ZXh0YXJlYUVsZW1lbnQgPSAkKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcclxuICAgIHRoaXMudGV4dGFyZWFDb250YWluZXJFbGVtZW50ID0gJCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkucGFyZW50KCcuaW5wdXQtZmllbGQnKTtcclxuICAgIHRoaXMubGFiZWxFbGVtZW50ID0gdGhpcy5jcmVhdGVMYWJlbEVsZW1lbnQoKTtcclxuICAgIHRoaXMuaW5pdFRleHRhcmVhKCk7XHJcbiAgfVxyXG5cclxuICBpbml0VGV4dGFyZWEoKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLnRleHRhcmVhRWxlbWVudFswXSwgJ21hdGVyaWFsaXplLXRleHRhcmVhJywgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBpbml0VGV4dGFyZWFTdWJzY3JpcHRpb24oKSB7XHJcbiAgICBpZiAodGhpcy5uZ0NvbnRyb2wpIHtcclxuICAgICAgdGhpcy50ZXh0YXJlYVZhbHVlU3Vic2NyaXB0aW9uID0gdGhpcy5uZ0NvbnRyb2wudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB0aGlzLnNldExhYmVsQWN0aXZlKCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlTGFiZWxFbGVtZW50KCkge1xyXG4gICAgY29uc3QgbGFiZWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGxhYmVsRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIHRoaXMuaWQpO1xyXG5cclxuICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLnRleHRhcmVhRWxlbWVudCwgJ2FmdGVyJywgW2xhYmVsRWxlbWVudF0pO1xyXG5cclxuICAgIHJldHVybiAkKGxhYmVsRWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVQcm9wZXJ0aWVzKCkge1xyXG4gICAgaWYgKHRoaXMudGV4dGFyZWFDb250YWluZXJFbGVtZW50Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdUZXh0YXJlYSBtdXN0IGJlIHBsYWNlZCBpbnNpZGUgYSBbbXotdGV4dGFyZWEtY29udGFpbmVyXSB0YWcnLCB0aGlzLnRleHRhcmVhRWxlbWVudCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBzdXBlci5leGVjdXRlUHJvcEhhbmRsZXJzKCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVMYWJlbCgpIHtcclxuICAgIGlmICh0aGlzLnBsYWNlaG9sZGVyIHx8IHRoaXMudGV4dGFyZWFFbGVtZW50LnZhbCgpKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMubGFiZWxFbGVtZW50WzBdLCAnYWN0aXZlJywgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMubGFiZWxFbGVtZW50LCAndGV4dCcsIFt0aGlzLmxhYmVsXSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVMZW5ndGgoKSB7XHJcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmxlbmd0aCA/IHRoaXMubGVuZ3RoLnRvU3RyaW5nKCkgOiBudWxsO1xyXG5cclxuICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudEF0dHJpYnV0ZSh0aGlzLnRleHRhcmVhRWxlbWVudFswXSwgJ2RhdGEtbGVuZ3RoJywgbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAobGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuc2V0Q2hhcmFjdGVyQ291bnQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlQ2hhcmFjdGVyQ291bnQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZVBsYWNlaG9sZGVyKCkge1xyXG4gICAgY29uc3QgcGxhY2Vob2xkZXIgPSAhIXRoaXMucGxhY2Vob2xkZXIgPyB0aGlzLnBsYWNlaG9sZGVyIDogbnVsbDtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudEF0dHJpYnV0ZSh0aGlzLnRleHRhcmVhRWxlbWVudFswXSwgJ3BsYWNlaG9sZGVyJywgcGxhY2Vob2xkZXIpO1xyXG5cclxuICAgIHRoaXMuc2V0TGFiZWxBY3RpdmUoKTtcclxuICB9XHJcblxyXG4gIHNldENoYXJhY3RlckNvdW50KCkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMudGV4dGFyZWFFbGVtZW50LCAnY2hhcmFjdGVyQ291bnRlcicpO1xyXG5cclxuICAgIC8vIGZvcmNlIHZhbGlkYXRpb25cclxuICAgIC8vIG5lZWQgc2V0VGltZW91dCBvdGhlcndpc2UgaXQgd29udCB0cmlnZ2VyIHZhbGlkYXRpb24gcmlnaHQgYXdheVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLnRleHRhcmVhRWxlbWVudCwgJ3RyaWdnZXInLCBbJ2lucHV0J10pO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QodGhpcy50ZXh0YXJlYUVsZW1lbnQsICd0cmlnZ2VyJywgWydibHVyJ10pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRMYWJlbEFjdGl2ZSgpIHtcclxuICAgIC8vIG5lZWQgc2V0VGltZW91dCBvdGhlcndpc2UgaXQgd29udCBtYWtlIGxhYmVsIGZsb2F0IGluIHNvbWUgY2lyY29uc3RhbmNlc1xyXG4gICAgLy8gZm9yIGV4YW1wbGU6IGZvcmNpbmcgdmFsaWRhdGlvbiBmb3IgZXhhbXBsZSwgcmVzZXRpbmcgZm9ybSBwcm9ncmFtbWF0aWNhbHksIC4uLlxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHRleHRhcmVhVmFsdWUgPSAoPEhUTUxUZXh0QXJlYUVsZW1lbnQ+dGhpcy50ZXh0YXJlYUVsZW1lbnRbMF0pLnZhbHVlO1xyXG4gICAgICBjb25zdCBpc0FjdGl2ZSA9ICEhdGhpcy5wbGFjZWhvbGRlciB8fCAhIXRleHRhcmVhVmFsdWU7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMubGFiZWxFbGVtZW50WzBdLCAnYWN0aXZlJywgaXNBY3RpdmUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVDaGFyYWN0ZXJDb3VudCgpIHtcclxuICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLnRleHRhcmVhRWxlbWVudC5zaWJsaW5ncygnLmNoYXJhY3Rlci1jb3VudGVyJyksICdyZW1vdmUnKTtcclxuXHJcbiAgICB0aGlzLnJlbW92ZVZhbGlkYXRpb25DbGFzc2VzKCk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVWYWxpZGF0aW9uQ2xhc3NlcygpIHtcclxuICAgIC8vIHJlc2V0IHZhbGlkL2ludmFsaWQgc3RhdGVcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMudGV4dGFyZWFFbGVtZW50WzBdLCAnaW52YWxpZCcsIGZhbHNlKTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMudGV4dGFyZWFFbGVtZW50WzBdLCAndmFsaWQnLCBmYWxzZSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBNelRleHRhcmVhQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi90ZXh0YXJlYS1jb250YWluZXIvaW5kZXgnO1xyXG5pbXBvcnQgeyBNelRleHRhcmVhUHJlZml4RGlyZWN0aXZlIH0gZnJvbSAnLi90ZXh0YXJlYS1wcmVmaXgvaW5kZXgnO1xyXG5pbXBvcnQgeyBNelRleHRhcmVhRGlyZWN0aXZlIH0gZnJvbSAnLi90ZXh0YXJlYS5kaXJlY3RpdmUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIE16VGV4dGFyZWFDb250YWluZXJDb21wb25lbnQsXHJcbiAgICBNelRleHRhcmVhRGlyZWN0aXZlLFxyXG4gICAgTXpUZXh0YXJlYVByZWZpeERpcmVjdGl2ZSxcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIE16VGV4dGFyZWFDb250YWluZXJDb21wb25lbnQsXHJcbiAgICBNelRleHRhcmVhRGlyZWN0aXZlLFxyXG4gICAgTXpUZXh0YXJlYVByZWZpeERpcmVjdGl2ZSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpUZXh0YXJlYU1vZHVsZSB7IH1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtei10aW1lcGlja2VyLWNvbnRhaW5lcicsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2XHJcbiAgY2xhc3M9XCJpbnB1dC1maWVsZFwiXHJcbiAgW2NsYXNzLmlubGluZV09XCJpbmxpbmVcIlxyXG4+XHJcbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L2Rpdj5gLFxyXG4gIHN0eWxlczogW2BgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16VGltZXBpY2tlckNvbnRhaW5lckNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgaW5saW5lOiBib29sZWFuO1xyXG59XHJcbiIsImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nLCBJbnB1dCwgTmdab25lLCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3B0aW9uYWwsIFJlbmRlcmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBIYW5kbGVQcm9wQ2hhbmdlcyB9IGZyb20gJy4uL3NoYXJlZC9pbmRleCc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ2lucHV0W216VGltZXBpY2tlcl0sIGlucHV0W216LXRpbWVwaWNrZXJdJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16VGltZXBpY2tlckRpcmVjdGl2ZSBleHRlbmRzIEhhbmRsZVByb3BDaGFuZ2VzIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MudGltZXBpY2tlcicpIHRydWU7XHJcblxyXG4gIC8vIG5hdGl2ZSBwcm9wZXJ0aWVzXHJcbiAgQElucHV0KCkgaWQ6IHN0cmluZztcclxuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xyXG5cclxuICAvLyBkaXJlY3RpdmUgcHJvcGVydGllc1xyXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XHJcblxyXG4gIC8vIG1hdGVyaWFsaXplIHVzZXMgQ2xvY2tQaWNrZXIgdG8gY3JlYXRlIHRoZSB0aW1lcGlja2VyXHJcbiAgLy8gY29tcGxldGUgbGlzdCBvZiBvcHRpb25zIGlzIGF2YWlsYWJsZSBhdCB0aGUgZm9sbG93aW5nIGFkZHJlc3NcclxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vd2VhcmVvdXRtYW4vY2xvY2twaWNrZXIjb3B0aW9uc1xyXG4gIEBJbnB1dCgpIG9wdGlvbnM6IGFueSA9IHt9O1xyXG5cclxuICBpbnB1dEVsZW1lbnQ6IEpRdWVyeTxIVE1MSW5wdXRFbGVtZW50PjtcclxuICBpbnB1dENvbnRhaW5lckVsZW1lbnQ6IEpRdWVyeTxIVE1MRWxlbWVudD47XHJcbiAgbGFiZWxFbGVtZW50OiBKUXVlcnk8SFRNTExhYmVsRWxlbWVudD47XHJcbiAgc3RvcENoYW5nZVByb3BhZ2F0aW9uID0gZmFsc2U7XHJcblxyXG4gIGdldCBjbG9ja3BpY2tlcigpOiBKUXVlcnk8SFRNTEVsZW1lbnQ+IHtcclxuICAgIHJldHVybiAkKCcuY2xvY2twaWNrZXInKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBuZ0NvbnRyb2w6IE5nQ29udHJvbCxcclxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIsXHJcbiAgICBwcml2YXRlIHpvbmU6IE5nWm9uZSxcclxuICApIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5pdEhhbmRsZXJzKCk7XHJcbiAgICB0aGlzLmluaXRFbGVtZW50cygpO1xyXG4gICAgdGhpcy5pbml0VGltZXBpY2tlcigpO1xyXG4gICAgdGhpcy5oYW5kbGVQcm9wZXJ0aWVzKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIC8vIHJlbW92ZSBldmVudCBoYW5kbGVyc1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQub2ZmKCk7XHJcbiAgICAvLyByZW1vdmUgY2xvY2twaWNrZXIgYWRkZWQgdG8gYm9keSBieSBkZWZhdWx0XHJcbiAgICB0aGlzLmNsb2NrcGlja2VyLnJlbW92ZSgpO1xyXG4gIH1cclxuXHJcbiAgaW5pdEhhbmRsZXJzKCkge1xyXG4gICAgdGhpcy5oYW5kbGVycyA9IHtcclxuICAgICAgbGFiZWw6ICgpID0+IHRoaXMuaGFuZGxlTGFiZWwoKSxcclxuICAgICAgcGxhY2Vob2xkZXI6ICgpID0+IHRoaXMuaGFuZGxlUGxhY2Vob2xkZXIoKSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBpbml0RWxlbWVudHMoKSB7XHJcbiAgICB0aGlzLmlucHV0Q29udGFpbmVyRWxlbWVudCA9ICQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLnBhcmVudCgnLmlucHV0LWZpZWxkJykgYXMgSlF1ZXJ5PEhUTUxFbGVtZW50PjtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50ID0gJCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkgYXMgSlF1ZXJ5PEhUTUxJbnB1dEVsZW1lbnQ+O1xyXG4gICAgdGhpcy5sYWJlbEVsZW1lbnQgPSB0aGlzLmNyZWF0ZUxhYmVsRWxlbWVudCgpIGFzIEpRdWVyeTxIVE1MTGFiZWxFbGVtZW50PjtcclxuICB9XHJcblxyXG4gIGluaXRUaW1lcGlja2VyKCkge1xyXG4gICAgLy8gYXBwZW5kIGNsb2NrcGlja2VyIHRvIGJvZHkgYnkgZGVmYXVsdFxyXG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuY29udGFpbmVyKSB7XHJcbiAgICAgIHRoaXMub3B0aW9ucy5jb250YWluZXIgPSAnYm9keSc7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZXh0ZW5kIGFmdGVySGlkZSBjYWxsYmFjayB0byBzZXQgbGFiZWwgYWN0aXZlXHJcbiAgICBjb25zdCBhZnRlckhpZGUgPSB0aGlzLm9wdGlvbnMgJiYgdGhpcy5vcHRpb25zLmFmdGVySGlkZSB8fCAoKCkgPT4ge30pO1xyXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5vcHRpb25zLCB7XHJcbiAgICAgIGFmdGVySGlkZTogKCkgPT4ge1xyXG4gICAgICAgIGFmdGVySGlkZSgpO1xyXG4gICAgICAgIHRoaXMuc2V0TGFiZWxBY3RpdmUoKTtcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLmlucHV0RWxlbWVudCwgJ3BpY2thdGltZScsIFt0aGlzLm9wdGlvbnNdKTtcclxuXHJcbiAgICBpZiAodGhpcy5uZ0NvbnRyb2wpIHtcclxuICAgICAgLy8gc2V0IG5nQ29udHJvbCB2YWx1ZSBhY2NvcmRpbmcgdG8gc2VsZWN0ZWQgdGltZSBpbiB0aW1lcGlja2VyXHJcbiAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm9uKCdjaGFuZ2UnLCAoZXZlbnQ6IEpRdWVyeS5FdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgICAgIHRoaXMubmdDb250cm9sLmNvbnRyb2wuc2V0VmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuXHJcbiAgICAgICAgLy8gbWFyayBmb3IgY2hhbmdlIGRldGVjdGlvblxyXG4gICAgICAgIC8vIGZpeCBmb3JtIHZhbGlkYXRpb24gd2l0aCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxuICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNyZWF0ZUxhYmVsRWxlbWVudCgpIHtcclxuICAgIGNvbnN0IGxhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBsYWJlbEVsZW1lbnQuc2V0QXR0cmlidXRlKCdmb3InLCB0aGlzLmlkKTtcclxuXHJcbiAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QodGhpcy5pbnB1dEVsZW1lbnQsICdhZnRlcicsIFtsYWJlbEVsZW1lbnRdKTtcclxuXHJcbiAgICByZXR1cm4gJChsYWJlbEVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlUHJvcGVydGllcygpIHtcclxuICAgIGlmICh0aGlzLmlucHV0Q29udGFpbmVyRWxlbWVudC5sZW5ndGggPT09IDApIHtcclxuICAgICAgY29uc29sZS5lcnJvcignSW5wdXQgd2l0aCBtei10aW1lcGlja2VyIGRpcmVjdGl2ZSBtdXN0IGJlIHBsYWNlZCBpbnNpZGUgYW4gW216LXRpbWVwaWNrZXItY29udGFpbmVyXSB0YWcnLCB0aGlzLmlucHV0RWxlbWVudCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBzdXBlci5leGVjdXRlUHJvcEhhbmRsZXJzKCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVMYWJlbCgpIHtcclxuICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLmxhYmVsRWxlbWVudCwgJ3RleHQnLCBbdGhpcy5sYWJlbF0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlUGxhY2Vob2xkZXIoKSB7XHJcbiAgICBjb25zdCBwbGFjZWhvbGRlciA9ICEhdGhpcy5wbGFjZWhvbGRlciA/IHRoaXMucGxhY2Vob2xkZXIgOiBudWxsO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50QXR0cmlidXRlKHRoaXMuaW5wdXRFbGVtZW50WzBdLCAncGxhY2Vob2xkZXInLCBwbGFjZWhvbGRlcik7XHJcblxyXG4gICAgLy8gZml4IGlzc3VlIGluIElFIHdoZXJlIGhhdmluZyBhIHBsYWNlaG9sZGVyIG9uIGlucHV0IG1ha2UgY29udHJvbCBkaXJ0eSBhbmQgdHJpZ2dlciB2YWxpZGF0aW9uXHJcbiAgICAvLyBvbiBwYWdlIGxvYWQuLi4gbm90ZSB0aGF0IGl0IHN0aWxsIHRyaWdnZXIgdmFsaWRhdGlvbiBvbiBmb2N1cyBhbmQgd291bGQgbmVlZCBhIGJldHRlciBmaXhcclxuICAgIC8vIGlzc3VlIDogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTUyOTlcclxuICAgIC8vIHdvcmthcm91bmQgOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDQ5NjcyNDUvNTU4MzI4M1xyXG4gICAgaWYgKHRoaXMubmdDb250cm9sKSB7XHJcbiAgICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLm5nQ29udHJvbC5jb250cm9sLm1hcmtBc1ByaXN0aW5lKCkpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNldExhYmVsQWN0aXZlKCk7XHJcbiAgfVxyXG5cclxuICBzZXRMYWJlbEFjdGl2ZSgpIHtcclxuICAgIC8vIG5lZWQgd2FpdCBmb3Igem9uZSB0byBiZSBzdGFibGUgb3RoZXJ3aXNlIGl0IHdvbnQgbWFrZSBsYWJlbFxyXG4gICAgLy8gZmxvYXQgaW4gc29tZSBjaXJjb25zdGFuY2VzIChjbGVhcmluZyB2YWx1ZSBwcm9ncmFtbWF0aWNhbGx5IGZvciBleGFtcGxlKVxyXG4gICAgdGhpcy56b25lLm9uU3RhYmxlXHJcbiAgICAgIC5waXBlKGZpcnN0KCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlucHV0VmFsdWUgPSB0aGlzLmlucHV0RWxlbWVudFswXS52YWx1ZTtcclxuICAgICAgICBjb25zdCBpc0FjdGl2ZSA9ICEhdGhpcy5wbGFjZWhvbGRlciB8fCAhIWlucHV0VmFsdWU7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5sYWJlbEVsZW1lbnRbMF0sICdhY3RpdmUnLCBpc0FjdGl2ZSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTXpUaW1lcGlja2VyQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi90aW1lcGlja2VyLWNvbnRhaW5lci9pbmRleCc7XHJcbmltcG9ydCB7IE16VGltZXBpY2tlckRpcmVjdGl2ZSB9IGZyb20gJy4vdGltZXBpY2tlci5kaXJlY3RpdmUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIE16VGltZXBpY2tlckRpcmVjdGl2ZSxcclxuICAgIE16VGltZXBpY2tlckNvbnRhaW5lckNvbXBvbmVudCxcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIE16VGltZXBpY2tlckRpcmVjdGl2ZSxcclxuICAgIE16VGltZXBpY2tlckNvbnRhaW5lckNvbXBvbmVudCxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpUaW1lcGlja2VyTW9kdWxlIHsgfVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBNelRvYXN0U2VydmljZSB7XHJcblxyXG4gIHNob3cobWVzc2FnZTogc3RyaW5nLCBkaXNwbGF5TGVuZ3RoOiBudW1iZXIsIGNsYXNzTmFtZT86IHN0cmluZywgY29tcGxldGVDYWxsYmFjaz86IEZ1bmN0aW9uKSB7XHJcbiAgICBNYXRlcmlhbGl6ZS50b2FzdChtZXNzYWdlLCBkaXNwbGF5TGVuZ3RoLCBjbGFzc05hbWUsIGNvbXBsZXRlQ2FsbGJhY2spO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTXpUb2FzdFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2luZGV4JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgcHJvdmlkZXJzOiBbTXpUb2FzdFNlcnZpY2VdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXpUb2FzdE1vZHVsZSB7IH1cclxuIiwiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgUmVuZGVyZXIsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW216VG9vbHRpcF0sIFttei10b29sdGlwXScsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNelRvb2x0aXBEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSBkZWxheTogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGh0bWw6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgcG9zaXRpb246IHN0cmluZztcclxuICBASW5wdXQoKSB0b29sdGlwOiBzdHJpbmc7XHJcblxyXG4gIHRhcmdldEVsZW1lbnQ6IEpRdWVyeTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcixcclxuICApIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5pdEVsZW1lbnRzKCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICBpZiAodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0eXBlJykgPT09ICdjaGVja2JveCcpIHtcclxuICAgICAgdGhpcy50YXJnZXRFbGVtZW50ID0gJCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkubmV4dCgnbGFiZWwnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmluaXRUb29sdGlwKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAodGhpcy50YXJnZXRFbGVtZW50KSB7XHJcbiAgICAgIHRoaXMuaW5pdFRvb2x0aXAoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMudGFyZ2V0RWxlbWVudCwgJ3Rvb2x0aXAnLCBbJ3JlbW92ZSddKTtcclxuICB9XHJcblxyXG4gIGluaXRFbGVtZW50cygpIHtcclxuICAgIHRoaXMudGFyZ2V0RWxlbWVudCA9ICQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgaW5pdFRvb2x0aXAoKSB7XHJcbiAgICBjb25zdCB0b29sdGlwT3B0aW9uczogTWF0ZXJpYWxpemUuVG9vbHRpcE9wdGlvbnMgPSB7XHJcbiAgICAgIGRlbGF5OiBpc05hTih0aGlzLmRlbGF5KSB8fCB0aGlzLmRlbGF5ID09IG51bGwgPyAzNTAgOiB0aGlzLmRlbGF5LFxyXG4gICAgICBodG1sOiB0aGlzLmh0bWwgfHwgZmFsc2UsXHJcbiAgICAgIHBvc2l0aW9uOiB0aGlzLnBvc2l0aW9uIHx8ICdib3R0b20nLFxyXG4gICAgICB0b29sdGlwOiB0aGlzLnRvb2x0aXAsXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLnRhcmdldEVsZW1lbnQsICd0b29sdGlwJywgW3Rvb2x0aXBPcHRpb25zXSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBNelRvb2x0aXBEaXJlY3RpdmUgfSBmcm9tICcuL3Rvb2x0aXAuZGlyZWN0aXZlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbTXpUb29sdGlwRGlyZWN0aXZlXSxcclxuICBleHBvcnRzOiBbTXpUb29sdGlwRGlyZWN0aXZlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16VG9vbHRpcE1vZHVsZSB7IH1cclxuIiwiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE16RXJyb3JNZXNzYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9lcnJvci1tZXNzYWdlL2luZGV4JztcclxuaW1wb3J0IHsgTXpWYWxpZGF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi92YWxpZGF0aW9uLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgTXpFcnJvck1lc3NhZ2VDb21wb25lbnQsXHJcbiAgICBNelZhbGlkYXRpb25Db21wb25lbnQsXHJcbiAgXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtNekVycm9yTWVzc2FnZUNvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgTXpFcnJvck1lc3NhZ2VDb21wb25lbnQsXHJcbiAgICBNelZhbGlkYXRpb25Db21wb25lbnQsXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE16VmFsaWRhdGlvbk1vZHVsZSB7IH1cclxuIiwiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBNekJhZGdlTW9kdWxlIH0gZnJvbSAnLi9iYWRnZS9iYWRnZS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBNekJ1dHRvbk1vZHVsZSB9IGZyb20gJy4vYnV0dG9uL2J1dHRvbi5tb2R1bGUnO1xyXG5pbXBvcnQgeyBNekNhcmRNb2R1bGUgfSBmcm9tICcuL2NhcmQvY2FyZC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBNekNoZWNrYm94TW9kdWxlIH0gZnJvbSAnLi9jaGVja2JveC9jaGVja2JveC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBNekNoaXBNb2R1bGUgfSBmcm9tICcuL2NoaXAvY2hpcC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBNekNvbGxhcHNpYmxlTW9kdWxlIH0gZnJvbSAnLi9jb2xsYXBzaWJsZS9jb2xsYXBzaWJsZS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBNekNvbGxlY3Rpb25Nb2R1bGUgfSBmcm9tICcuL2NvbGxlY3Rpb24vY29sbGVjdGlvbi5tb2R1bGUnO1xyXG5pbXBvcnQgeyBNekRhdGVwaWNrZXJNb2R1bGUgfSBmcm9tICcuL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci5tb2R1bGUnO1xyXG5pbXBvcnQgeyBNekRyb3Bkb3duTW9kdWxlIH0gZnJvbSAnLi9kcm9wZG93bi9kcm9wZG93bi5tb2R1bGUnO1xyXG5pbXBvcnQgeyBNekZlYXR1cmVEaXNjb3ZlcnlNb2R1bGUgfSBmcm9tICcuL2ZlYXR1cmUtZGlzY292ZXJ5L2ZlYXR1cmUtZGlzY292ZXJ5Lm1vZHVsZSc7XHJcbmltcG9ydCB7IE16SWNvbk1kaU1vZHVsZSB9IGZyb20gJy4vaWNvbi1tZGkvaWNvbi1tZGkubW9kdWxlJztcclxuaW1wb3J0IHsgTXpJY29uTW9kdWxlIH0gZnJvbSAnLi9pY29uL2ljb24ubW9kdWxlJztcclxuaW1wb3J0IHsgTXpJbnB1dE1vZHVsZSB9IGZyb20gJy4vaW5wdXQvaW5wdXQubW9kdWxlJztcclxuaW1wb3J0IHsgTXpNZWRpYU1vZHVsZSB9IGZyb20gJy4vbWVkaWEvbWVkaWEubW9kdWxlJztcclxuaW1wb3J0IHsgTXpNb2RhbE1vZHVsZSB9IGZyb20gJy4vbW9kYWwvbW9kYWwubW9kdWxlJztcclxuaW1wb3J0IHsgTXpOYXZiYXJNb2R1bGUgfSBmcm9tICcuL25hdmJhci9uYXZiYXIubW9kdWxlJztcclxuaW1wb3J0IHsgTXpQYWdpbmF0aW9uTW9kdWxlIH0gZnJvbSAnLi9wYWdpbmF0aW9uL3BhZ2luYXRpb24ubW9kdWxlJztcclxuaW1wb3J0IHsgTXpQYXJhbGxheE1vZHVsZSB9IGZyb20gJy4vcGFyYWxsYXgvcGFyYWxsYXgubW9kdWxlJztcclxuaW1wb3J0IHsgTXpQcm9ncmVzc01vZHVsZSB9IGZyb20gJy4vcHJvZ3Jlc3MvcHJvZ3Jlc3MubW9kdWxlJztcclxuaW1wb3J0IHsgTXpSYWRpb0J1dHRvbk1vZHVsZSB9IGZyb20gJy4vcmFkaW8tYnV0dG9uL3JhZGlvLWJ1dHRvbi5tb2R1bGUnO1xyXG5pbXBvcnQgeyBNelNlbGVjdE1vZHVsZSB9IGZyb20gJy4vc2VsZWN0L3NlbGVjdC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBNekluamVjdGlvbk1vZHVsZSB9IGZyb20gJy4vc2hhcmVkL2luamVjdGlvbi9pbmplY3Rpb24ubW9kdWxlJztcclxuaW1wb3J0IHsgTXpTaWRlbmF2TW9kdWxlIH0gZnJvbSAnLi9zaWRlbmF2L3NpZGVuYXYubW9kdWxlJztcclxuaW1wb3J0IHsgTXpTcGlubmVyTW9kdWxlIH0gZnJvbSAnLi9zcGlubmVyL3NwaW5uZXIubW9kdWxlJztcclxuaW1wb3J0IHsgTXpTd2l0Y2hNb2R1bGUgfSBmcm9tICcuL3N3aXRjaC9zd2l0Y2gubW9kdWxlJztcclxuaW1wb3J0IHsgTXpUYWJNb2R1bGUgfSBmcm9tICcuL3RhYi90YWIubW9kdWxlJztcclxuaW1wb3J0IHsgTXpUZXh0YXJlYU1vZHVsZSB9IGZyb20gJy4vdGV4dGFyZWEvdGV4dGFyZWEubW9kdWxlJztcclxuaW1wb3J0IHsgTXpUaW1lcGlja2VyTW9kdWxlIH0gZnJvbSAnLi90aW1lcGlja2VyL3RpbWVwaWNrZXIubW9kdWxlJztcclxuaW1wb3J0IHsgTXpUb2FzdE1vZHVsZSB9IGZyb20gJy4vdG9hc3QvdG9hc3QubW9kdWxlJztcclxuaW1wb3J0IHsgTXpUb29sdGlwTW9kdWxlIH0gZnJvbSAnLi90b29sdGlwL3Rvb2x0aXAubW9kdWxlJztcclxuaW1wb3J0IHsgTXpWYWxpZGF0aW9uTW9kdWxlIH0gZnJvbSAnLi92YWxpZGF0aW9uL3ZhbGlkYXRpb24ubW9kdWxlJztcclxuXHJcbmNvbnN0IE1aX01PRFVMRVMgPSBbXHJcbiAgQ29tbW9uTW9kdWxlLFxyXG4gIEZvcm1zTW9kdWxlLFxyXG4gIE16QmFkZ2VNb2R1bGUsXHJcbiAgTXpCdXR0b25Nb2R1bGUsXHJcbiAgTXpDYXJkTW9kdWxlLFxyXG4gIE16Q2hlY2tib3hNb2R1bGUsXHJcbiAgTXpDaGlwTW9kdWxlLFxyXG4gIE16Q29sbGFwc2libGVNb2R1bGUsXHJcbiAgTXpDb2xsZWN0aW9uTW9kdWxlLFxyXG4gIE16RGF0ZXBpY2tlck1vZHVsZSxcclxuICBNekRyb3Bkb3duTW9kdWxlLFxyXG4gIE16RmVhdHVyZURpc2NvdmVyeU1vZHVsZSxcclxuICBNekljb25Nb2R1bGUsXHJcbiAgTXpJY29uTWRpTW9kdWxlLFxyXG4gIE16SW5qZWN0aW9uTW9kdWxlLFxyXG4gIE16SW5wdXRNb2R1bGUsXHJcbiAgTXpNZWRpYU1vZHVsZSxcclxuICBNek1vZGFsTW9kdWxlLFxyXG4gIE16TmF2YmFyTW9kdWxlLFxyXG4gIE16UGFnaW5hdGlvbk1vZHVsZSxcclxuICBNelBhcmFsbGF4TW9kdWxlLFxyXG4gIE16UHJvZ3Jlc3NNb2R1bGUsXHJcbiAgTXpSYWRpb0J1dHRvbk1vZHVsZSxcclxuICBNelNlbGVjdE1vZHVsZSxcclxuICBNelNpZGVuYXZNb2R1bGUsXHJcbiAgTXpTcGlubmVyTW9kdWxlLFxyXG4gIE16U3dpdGNoTW9kdWxlLFxyXG4gIE16VGFiTW9kdWxlLFxyXG4gIE16VGV4dGFyZWFNb2R1bGUsXHJcbiAgTXpUaW1lcGlja2VyTW9kdWxlLFxyXG4gIE16VG9hc3RNb2R1bGUsXHJcbiAgTXpUb29sdGlwTW9kdWxlLFxyXG4gIE16VmFsaWRhdGlvbk1vZHVsZSxcclxuXTtcclxuXHJcbi8qKlxyXG4gKiBAZGVwcmVjYXRlZFxyXG4gKiBJbXBvcnQgc3BlY2lmaWMgY29tcG9uZW50IG1vZHVsZXMgaW5zdGVhZCAoTXpCYWRnZU1vZHVsZSwgTXpDYXJkTW9kdWxlLCBldGMpXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9zaGVyd2ViL25nMi1tYXRlcmlhbGl6ZSNtYXRlcmlhbGl6ZW1vZHVsZS1kZXByZWNhdGVkXHJcbiAqL1xyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IE1aX01PRFVMRVMsXHJcbiAgZXhwb3J0czogTVpfTU9EVUxFUyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE1hdGVyaWFsaXplTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBNYXRlcmlhbGl6ZU1vZHVsZSxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE1lZGlhQnJlYWtwb2ludCB9IGZyb20gJy4vbWVkaWFCcmVha3BvaW50JztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBNYXRjaE9wZXJhdG9yIHtcclxuICBvcGVyYXRvcjogJ2d0JyB8ICdsdCc7XHJcbiAgbWF0Y2g6IChicmVha3BvaW50OiBNZWRpYUJyZWFrcG9pbnQpID0+IGJvb2xlYW47XHJcbn1cclxuIiwiZXhwb3J0IGFic3RyYWN0IGNsYXNzIE1lZGlhIHtcclxuICBhbGlhczogJ3MnIHwgJ20nIHwgJ2wnIHwgJ3hsJztcclxuICB3aW5kb3dIZWlnaHQ6IG51bWJlcjtcclxuICB3aW5kb3dXaWR0aDogbnVtYmVyO1xyXG59XHJcbiIsImV4cG9ydCBhYnN0cmFjdCBjbGFzcyBNZWRpYUJyZWFrcG9pbnQge1xyXG4gIGFsaWFzOiAncycgfCAnbScgfCAnbCcgfCAneGwnO1xyXG4gIG1heFdpZHRoOiBudW1iZXI7XHJcbiAgbWluV2lkdGg6IG51bWJlcjtcclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgVmlld0NoaWxkLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTXpNb2RhbENvbXBvbmVudCB9IGZyb20gJy4uL21vZGFsLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTXpCYXNlTW9kYWwgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuICBAVmlld0NoaWxkKE16TW9kYWxDb21wb25lbnQpIG1vZGFsQ29tcG9uZW50OiBNek1vZGFsQ29tcG9uZW50O1xyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLm1vZGFsQ29tcG9uZW50Lm9wZW5Nb2RhbCgpO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiSW5wdXQiLCJOZ01vZHVsZSIsInRzbGliXzEuX192YWx1ZXMiLCJJbmplY3RhYmxlIiwiQXBwbGljYXRpb25SZWYiLCJDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIiLCJJbmplY3RvciIsIkVsZW1lbnRSZWYiLCJJbmplY3QiLCJ0c2xpYl8xLl9fZXh0ZW5kcyIsIkRpcmVjdGl2ZSIsIlJlbmRlcmVyIiwiSG9zdEJpbmRpbmciLCJDb21tb25Nb2R1bGUiLCJDaGFuZ2VEZXRlY3RvclJlZiIsIlZpZXdDaGlsZCIsIkV2ZW50RW1pdHRlciIsIk5HX1ZBTFVFX0FDQ0VTU09SIiwiZm9yd2FyZFJlZiIsIk5nWm9uZSIsIk91dHB1dCIsIkNvbnRlbnRDaGlsZHJlbiIsIlJlbmRlcmVyMiIsIk5nQ29udHJvbCIsIk9wdGlvbmFsIiwiaW50ZXJ2YWwiLCJza2lwV2hpbGUiLCJmaXJzdCIsImlzUGxhdGZvcm1Ccm93c2VyIiwiT2JzZXJ2YWJsZSIsImZyb21FdmVudCIsIm1hcCIsInN0YXJ0V2l0aCIsInB1Ymxpc2hSZXBsYXkiLCJyZWZDb3VudCIsIlBMQVRGT1JNX0lEIiwiSG9zdExpc3RlbmVyIiwidHJpZ2dlciIsInRyYW5zaXRpb24iLCJzdHlsZSIsImFuaW1hdGUiLCJWaWV3RW5jYXBzdWxhdGlvbiIsIlZpZXdDb250YWluZXJSZWYiLCJDb250ZW50Q2hpbGQiLCJGb3Jtc01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O29CQUVDQSxjQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLFVBQVU7d0JBQ3BCLFFBQVEsRUFBRSw2SkFNWDt3QkFDQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7cUJBQ2I7Ozs7bUNBRUVDLFVBQUs7Z0NBQ0xB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