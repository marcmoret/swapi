import { Component, OnDestroy, OnInit } from '@angular/core';
import { SwapiService } from 'src/api/swapi.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-star-wars',
  templateUrl: './star-wars.component.html',
  styleUrls: ['./star-wars.component.scss'],
})
export class StarWarsComponent implements OnInit, OnDestroy {
  starShips: Array<any> = [];
  pilots: Array<any> = [];
  subsink = new SubSink();
  visiblePilot: string;
  visibleIndex: number;

  constructor(private readonly swapiService: SwapiService) {}

  ngOnInit() {
    // Retrieve the ships on first API call.
    this.subsink.add(
      this.swapiService.getShips().subscribe((response) => {
        this.starShips = response.results;
        this.starShips.forEach((ship) => {
          // tslint:disable-next-line:whitespace
          if (ship.pilots?.length > 0) {
            ship.pilots.forEach((element) => {
              // Then we we loop through all the ships that have pilots, and retrieve them also
              this.swapiService.getPilot(element).subscribe((pilot) => {
                this.pilots.push(pilot);
              });
            });
          }
        });
      })
    );
  }

  ngOnDestroy() {
    this.subsink.unsubscribe();
  }

  // Set the index to know which ship to show details and reset the visible pilot
  onShipSelected(index: number) {
    this.visibleIndex = index;
    this.visiblePilot = '';
  }

  // Set the pilot to know which pilot to show;
  onPilotSelected(url: string) {
    this.visiblePilot = url;
  }
}
