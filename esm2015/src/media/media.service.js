/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { map, publishReplay, refCount, startWith } from 'rxjs/operators';
export class MzMediaService {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXRlcmlhbGl6ZS8iLCJzb3VyY2VzIjpbInNyYy9tZWRpYS9tZWRpYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDN0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBS3pFLE1BQU07Ozs7SUEyQkosWUFBaUM7Z0NBdEJzQjtZQUNyRCxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFO1lBQzFDLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUU7WUFDNUMsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtZQUM3QyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLFNBQVMsRUFBRTtTQUM1RDs4QkFFa0Q7WUFDakQ7Z0JBQ0UsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsS0FBSyxFQUFFLENBQUMsVUFBMkIsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsUUFBUTthQUNoRjtZQUNEO2dCQUNFLFFBQVEsRUFBRSxJQUFJO2dCQUNkLEtBQUssRUFBRSxDQUFDLFVBQTJCLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FB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Q0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDM0UsZUFBZSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzdFO1NBQ0Y7UUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLGVBQWUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDdkMsTUFBTSxLQUFLLENBQUMsa0RBQWtELFVBQVUsbUNBQW1DLENBQUMsQ0FBQztTQUM5RztRQUVELE1BQU0sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDOzs7O1lBdEYvQyxVQUFVOzs7O3lDQTRCSSxNQUFNLFNBQUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBmcm9tRXZlbnQsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWFwLCBwdWJsaXNoUmVwbGF5LCByZWZDb3VudCwgc3RhcnRXaXRoIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgTWF0Y2hPcGVyYXRvciwgTWVkaWEsIE1lZGlhQnJlYWtwb2ludCB9IGZyb20gJy4vbW9kZWxzL2luZGV4JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE16TWVkaWFTZXJ2aWNlIHtcclxuXHJcbiAgbWVkaWE6IE9ic2VydmFibGU8TWVkaWE+O1xyXG5cclxuICAvLyBiYXNlZCBvbiBub2Rlc19tb2R1bGVzL21hdGVyaWFsaXplLWNzcy9zYXNzL2NvbXBvbmVudHMvX3ZhcmlhYmxlLnNjc3NcclxuICBwcml2YXRlIHJlYWRvbmx5IG1lZGlhQnJlYWtwb2ludHM6IE1lZGlhQnJlYWtwb2ludFtdID0gW1xyXG4gICAgeyBhbGlhczogJ3MnLCBtaW5XaWR0aDogMCwgbWF4V2lkdGg6IDYwMCB9LFxyXG4gICAgeyBhbGlhczogJ20nLCBtaW5XaWR0aDogNjAxLCBtYXhXaWR0aDogOTkyIH0sXHJcbiAgICB7IGFsaWFzOiAnbCcsIG1pbldpZHRoOiA5OTMsIG1heFdpZHRoOiAxMjAwIH0sXHJcbiAgICB7IGFsaWFzOiAneGwnLCBtaW5XaWR0aDogMTIwMSwgbWF4V2lkdGg6IE51bWJlci5NQVhfVkFMVUUgfSxcclxuICBdO1xyXG5cclxuICBwcml2YXRlIHJlYWRvbmx5IG1hdGNoT3BlcmF0b3JzOiBNYXRjaE9wZXJhdG9yW10gPSBbXHJcbiAgICB7XHJcbiAgICAgIG9wZXJhdG9yOiAnZ3QnLFxyXG4gICAgICBtYXRjaDogKGJyZWFrcG9pbnQ6IE1lZGlhQnJlYWtwb2ludCkgPT4gd2luZG93LmlubmVyV2lkdGggPiBicmVha3BvaW50Lm1heFdpZHRoLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgb3BlcmF0b3I6ICdsdCcsXHJcbiAgICAgIG1hdGNoOiAoYnJlYWtwb2ludDogTWVkaWFCcmVha3BvaW50KSA9PiB3aW5kb3cuaW5uZXJXaWR0aCA8IGJyZWFrcG9pbnQubWluV2lkdGgsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBvcGVyYXRvcjogbnVsbCxcclxuICAgICAgbWF0Y2g6IChicmVha3BvaW50OiBNZWRpYUJyZWFrcG9pbnQpID0+IHdpbmRvdy5pbm5lcldpZHRoID49IGJyZWFrcG9pbnQubWluV2lkdGggJiYgd2luZG93LmlubmVyV2lkdGggPD0gYnJlYWtwb2ludC5tYXhXaWR0aCxcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc3RydWN0b3IoQEluamVjdChQTEFURk9STV9JRCkgcGxhdGZvcm1JZDogT2JqZWN0KSB7XHJcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIocGxhdGZvcm1JZCkpIHtcclxuICAgICAgdGhpcy5tZWRpYSA9IHRoaXMucmVnaXN0ZXJXaW5kb3dSZXNpemVMaXN0ZW5lcigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5tZWRpYSA9IE9ic2VydmFibGUuY3JlYXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpc0FjdGl2ZShicmVha3BvaW50OiBzdHJpbmcpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZTxib29sZWFuPihzdWJzY3JpYmVyID0+IHtcclxuICAgICAgdGhpcy5tZWRpYS5zdWJzY3JpYmUoKG1lZGlhOiBNZWRpYSkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBzdWJzY3JpYmVyLm5leHQodGhpcy5pc0FjdGl2ZUJyZWFrcG9pbnQoYnJlYWtwb2ludCkpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBzdWJzY3JpYmVyLmVycm9yKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlZ2lzdGVyV2luZG93UmVzaXplTGlzdGVuZXIoKTogT2JzZXJ2YWJsZTxNZWRpYT4ge1xyXG4gICAgcmV0dXJuIGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICBtYXAoKCkgPT4gdGhpcy5nZXRXaW5kb3dNZWRpYSgpKSxcclxuICAgICAgICBzdGFydFdpdGgodGhpcy5nZXRXaW5kb3dNZWRpYSgpKSxcclxuICAgICAgICBwdWJsaXNoUmVwbGF5KDEpLFxyXG4gICAgICAgIHJlZkNvdW50KCksXHJcbiAgICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFdpbmRvd01lZGlhKCk6IE1lZGlhIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGFsaWFzOiB0aGlzLm1lZGlhQnJlYWtwb2ludHMuZmluZCgoYnJlYWtwb2ludDogTWVkaWFCcmVha3BvaW50KSA9PiB3aW5kb3cuaW5uZXJXaWR0aCA8PSBicmVha3BvaW50Lm1heFdpZHRoKS5hbGlhcyxcclxuICAgICAgd2luZG93SGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcbiAgICAgIHdpbmRvd1dpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzQWN0aXZlQnJlYWtwb2ludChicmVha3BvaW50OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIGxldCBtYXRjaE9wZXJhdG9yOiBNYXRjaE9wZXJhdG9yO1xyXG4gICAgbGV0IG1lZGlhQnJlYWtwb2ludDogTWVkaWFCcmVha3BvaW50O1xyXG5cclxuICAgIGlmIChicmVha3BvaW50KSB7XHJcbiAgICAgIGNvbnN0IGZyYWdtZW50cyA9IGJyZWFrcG9pbnQuc3BsaXQoJy0nKTtcclxuXHJcbiAgICAgIGlmIChmcmFnbWVudHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgbWF0Y2hPcGVyYXRvciA9IHRoaXMubWF0Y2hPcGVyYXRvcnMuZmluZCh4ID0+IHgub3BlcmF0b3IgPT09IG51bGwpO1xyXG4gICAgICAgIG1lZGlhQnJlYWtwb2ludCA9IHRoaXMubWVkaWFCcmVha3BvaW50cy5maW5kKHggPT4geC5hbGlhcyA9PT0gZnJhZ21lbnRzWzBdKTtcclxuICAgICAgfSBlbHNlIGlmIChmcmFnbWVudHMubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgbWF0Y2hPcGVyYXRvciA9IHRoaXMubWF0Y2hPcGVyYXRvcnMuZmluZCh4ID0+IHgub3BlcmF0b3IgPT09IGZyYWdtZW50c1swXSk7XHJcbiAgICAgICAgbWVkaWFCcmVha3BvaW50ID0gdGhpcy5tZWRpYUJyZWFrcG9pbnRzLmZpbmQoeCA9PiB4LmFsaWFzID09PSBmcmFnbWVudHNbMV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFtZWRpYUJyZWFrcG9pbnQgfHwgIW1hdGNoT3BlcmF0b3IpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoYE16TWVkaWFTZXJ2aWNlLmlzQWN0aXZlIHBhcmFtZXRlciBpcyBpbnZhbGlkOiAnJHticmVha3BvaW50fScgaXMgbm90IGEgcmVjb2duaXplZCBicmVha3BvaW50LmApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBtYXRjaE9wZXJhdG9yLm1hdGNoKG1lZGlhQnJlYWtwb2ludCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==