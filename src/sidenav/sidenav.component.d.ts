import { AfterViewInit, OnDestroy } from '@angular/core';
export declare class MzSidenavComponent implements AfterViewInit, OnDestroy {
    backgroundClass: string;
    closeOnClick: boolean;
    collapseButtonId: string;
    draggable: boolean;
    edge: string;
    fixed: boolean;
    id: string;
    onClose: Function;
    onOpen: Function;
    width: number;
    private _opened;
    private collapseButton;
    opened: boolean;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    initCollapseButton(): void;
    initCollapsibleLinks(): void;
}
