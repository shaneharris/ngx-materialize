import { ComponentRef, Type } from '@angular/core';
import { MzInjectionService } from '../../shared/injection/injection.service';
import { MzBaseModal } from '../modal-base/index';
export declare class MzModalService {
    private injectionService;
    constructor(injectionService: MzInjectionService);
    /**
     * Open modal component.
     */
    open(componentClass: Type<MzBaseModal>, options?: any): ComponentRef<MzBaseModal>;
}
