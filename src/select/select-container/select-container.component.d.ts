import { AfterViewInit, OnDestroy } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MzValidationComponent } from '../../validation/validation.component';
import { MzSelectDirective } from '../select.directive';
export declare class MzSelectContainerComponent implements AfterViewInit, OnDestroy {
    inline: boolean;
    mzSelectDirective: MzSelectDirective;
    mzValidationComponent: MzValidationComponent;
    ngControl: NgControl;
    selectValueSubscription: Subscription;
    statusChangesSubscription: Subscription;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    initControlSubscription(): void;
    initSelectSubscription(): void;
    registerOnBlur(): void;
    removeControlSubscription(): void;
    removeSelectSubscription(): void;
}
