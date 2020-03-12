import { Component, OnInit, Input, OnChanges,Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './app-pagination.component.html',
  styleUrls: ['./app-pagination.component.scss']
})
export class AppPaginationComponent implements OnInit {

  @Input() totalRecords: number = 0;
  @Input() recordsPerPage: number = 0;

  @Output() onPageChange: EventEmitter<number> = new EventEmitter();

  public pages: number[] = [];
  activePage: number;  

  constructor() {
  }

  ngOnInit(): void {
    
  }

  ngOnChanges() {
    const pageCount = this.getPageCount();
    this.pages = this.getArrayOfPage(pageCount);
    this.activePage = 1;
    this.onPageChange.emit(1);
  }

  onClickPage() {
    this.onPageChange.emit(this.activePage);
  }  

  //Calculate the number of pages required to split the records
  private getPageCount(): number {
    let totalPage: number = 0;

    if (this.totalRecords > 0 && this.recordsPerPage > 0) {
      const pageCount = this.totalRecords / this.recordsPerPage;
      const roundedPageCount = Math.floor(pageCount);

      totalPage = roundedPageCount < pageCount ? roundedPageCount + 1 : roundedPageCount;
    }

    return totalPage;
  }

  //Get the page numbers based on the page count
  private getArrayOfPage(pageCount: number): number[] {
    let pageArray: number[] = [];

    if (pageCount > 0) {
      for (var i = 1; i <= pageCount; i++) {
        pageArray.push(i);
      }
    }

    return pageArray;
  }  

  

}
