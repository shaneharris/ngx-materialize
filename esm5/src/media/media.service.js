/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { map, publishReplay, refCount, startWith } from 'rxjs/operators';
var MzMediaService = /** @class */ (function () {
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
    MzMediaService.prototype.isActive = /**
     * @param {?} breakpoint
     * @return {?}
     */
    function (breakpoint) {
        var _this = this;
        return new Observable(function (subscriber) {
            _this.media.subscribe(function (media) {
                try {
                    subscriber.next(_this.isActiveBreakpoint(breakpoint));
                }
                catch (/** @type {?} */ error) {
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
        return fromEvent(window, 'resize')
            .pipe(map(function () { return _this.getWindowMedia(); }), startWith(this.getWindowMedia()), publishReplay(1), refCount());
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
        { type: Injectable },
    ];
    /** @nocollapse */
    MzMediaService.ctorParameters = function () { return [
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
    ]; };
    return MzMediaService;
}());
export { MzMediaService };
function MzMediaService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MzMediaService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MzMediaService.ctorParameters;
    /** @type {?} */
    MzMediaService.prototype.media;
    /** @type {?} */
    MzMediaService.prototype.mediaBreakpoints;
    /** @type {?} */
    MzMediaService.prototype.matchOperators;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXRlcmlhbGl6ZS8iLCJzb3VyY2VzIjpbInNyYy9tZWRpYS9tZWRpYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDN0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztJQWdDdkUsd0JBQWlDO2dDQXRCc0I7WUFDckQsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRTtZQUMxQyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFO1lBQzVDLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7WUFDN0MsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxTQUFTLEVBQUU7U0FDNUQ7OEJBRWtEO1lBQ2pEO2dCQUNFLFFBQVEsRUFBRSxJQUFJO2dCQUNkLEtBQUssRUFBRSxVQUFDLFVBQTJCLElBQUssT0FBQSxNQUFNLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxRQUFRLEVBQXZDLENBQXVDO2FBQ2hGO1lBQ0Q7Z0JBQ0UsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsS0FBSyxFQUFFLFVBQUMsVUFBMkIsSUFBSyxPQUFBLE1BQU0sQ0FBQyxVQUFVLEdB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QUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxRQUFRLEtBQUssV0FBUyxDQUFDLENBQUMsQ0FBQyxFQUEzQixDQUEyQixDQUFDLENBQUM7Z0JBQzNFLGVBQWUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEtBQUssS0FBSyxXQUFTLENBQUMsQ0FBQyxDQUFDLEVBQXhCLENBQXdCLENBQUMsQ0FBQzthQUM3RTtTQUNGO1FBRUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxlQUFlLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLE1BQU0sS0FBSyxDQUFDLG9EQUFrRCxVQUFVLHNDQUFtQyxDQUFDLENBQUM7U0FDOUc7UUFFRCxNQUFNLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQzs7O2dCQXRGL0MsVUFBVTs7Ozs2Q0E0QkksTUFBTSxTQUFDLFdBQVc7O3lCQW5DakM7O1NBUWEsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBmcm9tRXZlbnQsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWFwLCBwdWJsaXNoUmVwbGF5LCByZWZDb3VudCwgc3RhcnRXaXRoIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgTWF0Y2hPcGVyYXRvciwgTWVkaWEsIE1lZGlhQnJlYWtwb2ludCB9IGZyb20gJy4vbW9kZWxzL2luZGV4JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE16TWVkaWFTZXJ2aWNlIHtcclxuXHJcbiAgbWVkaWE6IE9ic2VydmFibGU8TWVkaWE+O1xyXG5cclxuICAvLyBiYXNlZCBvbiBub2Rlc19tb2R1bGVzL21hdGVyaWFsaXplLWNzcy9zYXNzL2NvbXBvbmVudHMvX3ZhcmlhYmxlLnNjc3NcclxuICBwcml2YXRlIHJlYWRvbmx5IG1lZGlhQnJlYWtwb2ludHM6IE1lZGlhQnJlYWtwb2ludFtdID0gW1xyXG4gICAgeyBhbGlhczogJ3MnLCBtaW5XaWR0aDogMCwgbWF4V2lkdGg6IDYwMCB9LFxyXG4gICAgeyBhbGlhczogJ20nLCBtaW5XaWR0aDogNjAxLCBtYXhXaWR0aDogOTkyIH0sXHJcbiAgICB7IGFsaWFzOiAnbCcsIG1pbldpZHRoOiA5OTMsIG1heFdpZHRoOiAxMjAwIH0sXHJcbiAgICB7IGFsaWFzOiAneGwnLCBtaW5XaWR0aDogMTIwMSwgbWF4V2lkdGg6IE51bWJlci5NQVhfVkFMVUUgfSxcclxuICBdO1xyXG5cclxuICBwcml2YXRlIHJlYWRvbmx5IG1hdGNoT3BlcmF0b3JzOiBNYXRjaE9wZXJhdG9yW10gPSBbXHJcbiAgICB7XHJcbiAgICAgIG9wZXJhdG9yOiAnZ3QnLFxyXG4gICAgICBtYXRjaDogKGJyZWFrcG9pbnQ6IE1lZGlhQnJlYWtwb2ludCkgPT4gd2luZG93LmlubmVyV2lkdGggPiBicmVha3BvaW50Lm1heFdpZHRoLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgb3BlcmF0b3I6ICdsdCcsXHJcbiAgICAgIG1hdGNoOiAoYnJlYWtwb2ludDogTWVkaWFCcmVha3BvaW50KSA9PiB3aW5kb3cuaW5uZXJXaWR0aCA8IGJyZWFrcG9pbnQubWluV2lkdGgsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBvcGVyYXRvcjogbnVsbCxcclxuICAgICAgbWF0Y2g6IChicmVha3BvaW50OiBNZWRpYUJyZWFrcG9pbnQpID0+IHdpbmRvdy5pbm5lcldpZHRoID49IGJyZWFrcG9pbnQubWluV2lkdGggJiYgd2luZG93LmlubmVyV2lkdGggPD0gYnJlYWtwb2ludC5tYXhXaWR0aCxcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc3RydWN0b3IoQEluamVjdChQTEFURk9STV9JRCkgcGxhdGZvcm1JZDogT2JqZWN0KSB7XHJcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIocGxhdGZvcm1JZCkpIHtcclxuICAgICAgdGhpcy5tZWRpYSA9IHRoaXMucmVnaXN0ZXJXaW5kb3dSZXNpemVMaXN0ZW5lcigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5tZWRpYSA9IE9ic2VydmFibGUuY3JlYXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpc0FjdGl2ZShicmVha3BvaW50OiBzdHJpbmcpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZTxib29sZWFuPihzdWJzY3JpYmVyID0+IHtcclxuICAgICAgdGhpcy5tZWRpYS5zdWJzY3JpYmUoKG1lZGlhOiBNZWRpYSkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBzdWJzY3JpYmVyLm5leHQodGhpcy5pc0FjdGl2ZUJyZWFrcG9pbnQoYnJlYWtwb2ludCkpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBzdWJzY3JpYmVyLmVycm9yKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlZ2lzdGVyV2luZG93UmVzaXplTGlzdGVuZXIoKTogT2JzZXJ2YWJsZTxNZWRpYT4ge1xyXG4gICAgcmV0dXJuIGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICBtYXAoKCkgPT4gdGhpcy5nZXRXaW5kb3dNZWRpYSgpKSxcclxuICAgICAgICBzdGFydFdpdGgodGhpcy5nZXRXaW5kb3dNZWRpYSgpKSxcclxuICAgICAgICBwdWJsaXNoUmVwbGF5KDEpLFxyXG4gICAgICAgIHJlZkNvdW50KCksXHJcbiAgICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFdpbmRvd01lZGlhKCk6IE1lZGlhIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGFsaWFzOiB0aGlzLm1lZGlhQnJlYWtwb2ludHMuZmluZCgoYnJlYWtwb2ludDogTWVkaWFCcmVha3BvaW50KSA9PiB3aW5kb3cuaW5uZXJXaWR0aCA8PSBicmVha3BvaW50Lm1heFdpZHRoKS5hbGlhcyxcclxuICAgICAgd2luZG93SGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcbiAgICAgIHdpbmRvd1dpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzQWN0aXZlQnJlYWtwb2ludChicmVha3BvaW50OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIGxldCBtYXRjaE9wZXJhdG9yOiBNYXRjaE9wZXJhdG9yO1xyXG4gICAgbGV0IG1lZGlhQnJlYWtwb2ludDogTWVkaWFCcmVha3BvaW50O1xyXG5cclxuICAgIGlmIChicmVha3BvaW50KSB7XHJcbiAgICAgIGNvbnN0IGZyYWdtZW50cyA9IGJyZWFrcG9pbnQuc3BsaXQoJy0nKTtcclxuXHJcbiAgICAgIGlmIChmcmFnbWVudHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgbWF0Y2hPcGVyYXRvciA9IHRoaXMubWF0Y2hPcGVyYXRvcnMuZmluZCh4ID0+IHgub3BlcmF0b3IgPT09IG51bGwpO1xyXG4gICAgICAgIG1lZGlhQnJlYWtwb2ludCA9IHRoaXMubWVkaWFCcmVha3BvaW50cy5maW5kKHggPT4geC5hbGlhcyA9PT0gZnJhZ21lbnRzWzBdKTtcclxuICAgICAgfSBlbHNlIGlmIChmcmFnbWVudHMubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgbWF0Y2hPcGVyYXRvciA9IHRoaXMubWF0Y2hPcGVyYXRvcnMuZmluZCh4ID0+IHgub3BlcmF0b3IgPT09IGZyYWdtZW50c1swXSk7XHJcbiAgICAgICAgbWVkaWFCcmVha3BvaW50ID0gdGhpcy5tZWRpYUJyZWFrcG9pbnRzLmZpbmQoeCA9PiB4LmFsaWFzID09PSBmcmFnbWVudHNbMV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFtZWRpYUJyZWFrcG9pbnQgfHwgIW1hdGNoT3BlcmF0b3IpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoYE16TWVkaWFTZXJ2aWNlLmlzQWN0aXZlIHBhcmFtZXRlciBpcyBpbnZhbGlkOiAnJHticmVha3BvaW50fScgaXMgbm90IGEgcmVjb2duaXplZCBicmVha3BvaW50LmApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBtYXRjaE9wZXJhdG9yLm1hdGNoKG1lZGlhQnJlYWtwb2ludCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==