import { MediaBreakpoint } from './mediaBreakpoint';
export declare abstract class MatchOperator {
    operator: 'gt' | 'lt';
    match: (breakpoint: MediaBreakpoint) => boolean;
}
