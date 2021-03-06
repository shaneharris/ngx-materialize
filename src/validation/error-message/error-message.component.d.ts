import { OnDestroy, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ErrorMessageResource } from './models/index';
export declare class MzErrorMessageComponent implements OnDestroy, OnInit {
    control: AbstractControl;
    errorMessageResource: ErrorMessageResource;
    controlStatusChangesSubscription: Subscription;
    errorMessage: string;
    ngOnInit(): void;
    ngOnDestroy(): void;
    buildErrorMessage(): void;
}
