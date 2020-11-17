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
    this.subsink.add(
      this.swapiService.getShips().subscribe((response) => {
        this.starShips = response.results;
        this.starShips.forEach((ship) => {
          // console.log(ship);

          // tslint:disable-next-line:whitespace
          if (ship.pilots?.length > 0) {
            ship.pilots.forEach((element) => {
              this.swapiService.getPilot(element).then((pilot) => {
                console.log('Pilot:', pilot);
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

  onShipSelected(index: number) {
    this.visibleIndex = index;
  }

  onPilotSelected(url: string) {
    console.log(url);

    this.visiblePilot = url;
  }
}
