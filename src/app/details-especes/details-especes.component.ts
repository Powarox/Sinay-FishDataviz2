import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-details-especes',
  templateUrl: './details-especes.component.html',
  styleUrls: ['./details-especes.component.scss']
})
export class DetailsEspecesComponent implements OnInit {

    faoCode: String = '';

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            this.faoCode = params['faoCode'];
        });
    }

}
