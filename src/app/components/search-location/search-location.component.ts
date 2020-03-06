import { Component, Output, EventEmitter, Input, SimpleChanges, OnChanges } from "@angular/core";

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
  searchResultsData: any
  dynamicResultsDisplay: string = 'block';

  ngOnChanges(changes: SimpleChanges) {
    this.searchResultsData = changes.searchResults.currentValue;
    console.log(this.searchResultsData);
  }

  onSubmit() {
    this.confirmSearch.emit(this.query);
  }

  onInputChange(value) {
    console.log(value)
    this.search.emit(this.query);
  }

  onBlur() {
    this.dynamicResultsDisplay = 'block';
  }

  onFocus() {
    this.dynamicResultsDisplay = 'block';
  }

  onOptionClick(option) {
    this.confirmSearch.emit(option);
  }
}
