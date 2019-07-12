import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  showFullScreen() {
    const body = document.documentElement as any;
    if (body.requestFullscreen) {
      body.requestFullscreen();
    } else if (body.webkitrequestFullscreen) {
      body.webkitrequestFullscreen();
    } else if (body.mozrequestFullscreen) {
      body.mozrequestFullscreen();
    } else if (body.msrequestFullscreen) {
      body.msrequestFullscreen();
    }
  }

  constructor() {
    window.addEventListener('click', () => {
      this.showFullScreen()
    })
  }
}
