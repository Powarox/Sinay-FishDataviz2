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
    ];

    listElement$: Observable<Especes[]>
    // filteredList$: Observable<Especes[]>

    filter: FormControl;
    filter$: Observable<String>;

    constructor(private sas: SinayApiService) { 
        this.listElement$ = of(this.data);
        this.filter = new FormControl('');
        this.filter$ = this.filter.valueChanges.pipe(startWith(''));
        // this.filteredList$ = combineLatest(this.listElement$, this.filter$).pipe(
        //     // map(([this.data, filterString]) => this.data.filter(this.data => this.data.faoCode.toLowerCase()))
        // )
    }

    ngOnInit(): void {
        // this.data = this.sas.getDataApi();

        // console.log(this.data);
    }

}

