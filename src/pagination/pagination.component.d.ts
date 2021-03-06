import { EventEmitter, OnInit } from '@angular/core';
import { HandlePropChanges } from '../shared';
export declare class MzPaginationComponent extends HandlePropChanges implements OnInit {
    currentPage: number;
    enableFirstAndLastPageButtons: boolean;
    itemsPerPage: number;
    maxPageButtons: number;
    totalItems: number;
    pageChange: EventEmitter<number>;
    pages: number[];
    readonly totalPages: number;
    constructor();
    ngOnInit(): void;
    changeCurrentPage(pageNumber: number): void;
    firstPage(): void;
    initHandlers(): void;
    lastPage(): void;
    nextPage(): void;
    previousPage(): void;
    renderButtons(): void;
}
