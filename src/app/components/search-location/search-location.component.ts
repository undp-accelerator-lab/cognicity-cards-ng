import { Component, Output, EventEmitter, Input, SimpleChanges, OnChanges, Renderer2, ElementRef, ViewChild } from "@angular/core";

@Component({
  selector: 'search-location',
  templateUrl: './search-location.component.html',
  styleUrls: ['./search-location.component.scss']
})
export class SearchLocationComponent {

  query: string

  @Output() confirmSearch: EventEmitter<string> = new EventEmitter()
  @Output() search: EventEmitter<string> = new EventEmitter()

  @Input() searchResults: any
  @Input() searchText: string
  searchResultsData: any
  dynamicResultsDisplay: string = 'block';

  @ViewChild('searchBar') searchBar: ElementRef;
  @ViewChild('searchResult') searchResult: ElementRef;
  @ViewChild('searchResultText') searchResultText: ElementRef;


  constructor(private renderer: Renderer2) {

    this.renderer.listen('window', 'click',(e:Event)=>{

        if(
          this.searchResult &&
          e.target !== this.searchBar.nativeElement &&
          e.target !== this.searchResult.nativeElement &&
          e.target !== this.searchResultText.nativeElement
        ){
          this.dynamicResultsDisplay = 'none';
        }else if(e.target === this.searchBar.nativeElement){
            this.dynamicResultsDisplay = 'block';
          }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    this.searchResultsData = changes.searchResults.currentValue;
    // console.log(this.searchResultsData);
  }

  onSubmit() {
    this.confirmSearch.emit(this.query);
  }

  onInputChange(value) {
    // console.log(value)
    this.search.emit(this.query);
  }

  onOptionClick(option) {

    this.confirmSearch.emit(option);
    this.dynamicResultsDisplay = 'none';

  }
}
