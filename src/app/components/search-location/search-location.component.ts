import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'search-location',
  templateUrl: './search-location.component.html',
  styleUrls: ['./search-location.component.scss']
})
export class SearchLocationComponent {
  query: string

  @Output() search: EventEmitter<string> = new EventEmitter()

  onSubmit() {
    this.search.emit(this.query);
  }
}