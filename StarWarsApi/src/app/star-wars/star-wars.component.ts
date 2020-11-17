import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/api/swapi.service';

@Component({
  selector: 'app-star-wars',
  templateUrl: './star-wars.component.html',
  styleUrls: ['./star-wars.component.scss'],
})
export class StarWarsComponent implements OnInit {
  starShips: Array<any> = [];
  constructor(private readonly swapiService: SwapiService) {}

  ngOnInit() {
    this.swapiService.getShips().then((ships) => {
      console.log(ships);
      // tslint:disable-next-line:whitespace
      if (ships.pilots?.length > 0) {
        this.swapiService.getPilots().then((results) => {});
      }
    });

    this.swapiService.getPilots().then((response) => {
      this.starShips = response.results;
      console.log(this.starShips);
    });
  }
}
