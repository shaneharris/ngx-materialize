import { Observable } from 'rxjs';
import { Media } from './models/index';
export declare class MzMediaService {
    media: Observable<Media>;
    private readonly mediaBreakpoints;
    private readonly matchOperators;
    constructor(platformId: Object);
    isActive(breakpoint: string): Observable<boolean>;
    private registerWindowResizeListener();
    private getWindowMedia();
    private isActiveBreakpoint(breakpoint);
}
