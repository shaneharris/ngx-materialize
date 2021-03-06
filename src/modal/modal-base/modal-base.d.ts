import { AfterViewInit } from '@angular/core';
import { MzModalComponent } from '../modal.component';
export declare abstract class MzBaseModal implements AfterViewInit {
    modalComponent: MzModalComponent;
    ngAfterViewInit(): void;
}
