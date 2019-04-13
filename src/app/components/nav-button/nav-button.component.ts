import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.scss']
})
export class NavButtonComponent implements OnInit {
  @Input() text: string;
  @Input() type: string;
  @Input() isDisabled: boolean
  @Output() navigate = new EventEmitter<any>();

  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
  }

  onClick() {
    this.navigate.emit()
  }
}
