import { Component, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { map, startWith} from 'rxjs/operators';
import { combineLatest, Observable, of } from 'rxjs';
import { FormControl } from '@angular/forms';

import { SinayApiService } from '../services/sinay-api.service';
import { Especes } from '../models/especes';

@Component({
    selector: 'app-liste-especes',
    templateUrl: './liste-especes.component.html',
    styleUrls: ['./liste-especes.component.scss']
})

export class ListeEspecesComponent implements OnInit {
    // @Input() especes: Especes;

    data: Especes[] = [
        {'faoCode': 'GKL', 'frenchName': 'Amande commune', 'scientificName': 'Almendra de mar'},
        {'faoCode': 'ANE', 'frenchName': 'Anchois', 'scientificName': 'Boquerón'},
        {'faoCode': 'ACE', 'frenchName': 'Anchois', 'scientificName': 'Boquerón'},
        {'faoCode': 'AUE', 'frenchName': 'Anchois', 'scientificName': 'Boquerón'},
    ];

    dataService: Especes[] = this.service.getDataApi();

    states$: Observable<Especes[]>;
    filteredStates$: Observable<Especes[]>;
    filter: FormControl;
    filter$: Observable<string>;

    constructor(private service: SinayApiService) { 
        this.dataService = this.service.getDataApi();
        // this.listElement$ = of(this.data);

        this.states$ = of(this.dataService);
        this.filter = new FormControl('');
        this.filter$ = this.filter.valueChanges;

        this.filteredStates$ = combineLatest(this.states$, this.filter$).pipe(
            map(([states, filterString]) => 
            states.filter(state => state.faoCode.toLowerCase().indexOf(filterString.toLowerCase()) !== -1))
        );
    }

    ngOnInit(): void {
        // this.data = this.sas.getDataApi();

        // console.log(this.data);
    }

}

