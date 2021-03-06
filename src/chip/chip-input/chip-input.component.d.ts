/// <reference types="materialize-css" />
import { ElementRef, EventEmitter, NgZone, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class MzChipInputComponent implements ControlValueAccessor, OnInit, OnDestroy {
    private elementRef;
    private zone;
    autocompleteOptions: Materialize.AutoCompleteOptions;
    placeholder: string;
    secondaryPlaceholder: string;
    add: EventEmitter<Materialize.ChipDataObject>;
    delete: EventEmitter<Materialize.ChipDataObject>;
    select: EventEmitter<Materialize.ChipDataObject>;
    readonly value: Materialize.ChipDataObject[];
    private chipInputElement;
    constructor(elementRef: ElementRef, zone: NgZone);
    ngOnInit(): void;
    ngOnDestroy(): void;
    initElements(): void;
    initMaterializeChip(value?: Materialize.ChipDataObject[]): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: Materialize.ChipDataObject[]): void;
    private onChangeCallback;
}
