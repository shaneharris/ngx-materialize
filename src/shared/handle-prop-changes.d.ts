import { OnChanges, SimpleChanges } from '@angular/core';
export declare abstract class Handlers {
    [propertyName: string]: Function;
}
export declare class HandlePropChanges implements OnChanges {
    handlers: Handlers;
    ngOnChanges(changes: SimpleChanges): void;
    executePropHandlers(props?: Handlers | SimpleChanges): void;
}
