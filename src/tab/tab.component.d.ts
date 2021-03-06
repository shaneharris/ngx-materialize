import { AfterViewInit, ElementRef, QueryList } from '@angular/core';
import { MzTabItemComponent } from './tab-item/tab-item.component';
export declare class MzTabComponent implements AfterViewInit {
    fixedTabWidth: boolean;
    onShow: Function;
    responsiveThreshold: number;
    swipeable: boolean;
    tabs: ElementRef;
    tabItems: QueryList<MzTabItemComponent>;
    ngAfterViewInit(): void;
    initTabs(): void;
    selectTab(tabItemId: string): void;
}
