import { Component } from '@angular/core';

import {GuidedTour, Orientation, GuidedTourModule, GuidedTourService} from 'ngx-guided-tour';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-guided-tour-experiment';


  public dashboardTour: GuidedTour = {
    tourId: 'experiment-tour',
    useOrb: false,
    steps: [
        {
            title: 'Welcome to the Guided Tour Demo',
            selector: '#stepOne',
            content: 'Step 1',
            orientation: Orientation.Bottom
        },
        {
            title: 'Positioning',
            selector: '#stepTwo',
            content: 'Step position can be set so that steps are always in view. This step is on the left.',
            orientation: Orientation.Left
        },
        {
            title: 'Positioning 2',
            selector: '#stepThree',
            content: 'This step is on the right.',
            orientation: Orientation.Right
        },
        {
            title: 'Scroll to content',
            selector: '#stepFour',
            content: 'Automatically scroll to elements so they are in view',
            orientation: Orientation.Top
        }
    ]
  };

  constructor(
      private guidedTourService: GuidedTourService
  ) {

      setTimeout(() => {
          this.guidedTourService.startTour(this.dashboardTour);
      }, 1000);
  }

  public onTourStart(): void {
      this.guidedTourService.startTour(this.dashboardTour);
  }
}
