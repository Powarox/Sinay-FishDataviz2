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
    data: Especes[] = this.service.getDataApi();

    isActiveFao: Boolean = false;
    isActiveFra: Boolean = true;

    states$: Observable<Especes[]>;
    filteredStates$: Observable<Especes[]>;
    filter: FormControl;
    filter$: Observable<string>;

    constructor(private service: SinayApiService) { 
        this.data = this.service.getDataApi();
        this.states$ = of(this.data);
        this.filter = new FormControl('');
        this.filter$ = this.filter.valueChanges;

        if(this.isActiveFao) {
            this.filteredStates$ = combineLatest(this.states$, this.filter$).pipe(
                map(([states, filterString]) => 
                states.filter(state => state.faoCode.toLowerCase().indexOf(filterString.toLowerCase()) !== -1))
            );
        }
        else {
             this.filteredStates$ = combineLatest(this.states$, this.filter$).pipe(
                map(([states, filterString]) => 
                states.filter(state => state.frenchName.toLowerCase().indexOf(filterString.toLowerCase()) !== -1))
            );
        }
    }

    ngOnInit(): void {
        // this.filteredStates$ = of(this.data);
    }

    activateClass(elem: String) {
        if(elem === 'fao'){
            this.isActiveFao = false;
            this.isActiveFra = true;
        }
        else {
            this.isActiveFao = true;
            this.isActiveFra = false;
        }
    }


}

    // @Input() especes: Especes;

    // data: Especes[] = [
    //     {'faoCode': 'GKL', 'frenchName': 'Amande commune', 'scientificName': 'Almendra de mar'},
    //     {'faoCode': 'ANE', 'frenchName': 'Anchois', 'scientificName': 'Boquerón'},
    //     {'faoCode': 'ACE', 'frenchName': 'Anchois', 'scientificName': 'Boquerón'},
    //     {'faoCode': 'AUE', 'frenchName': 'Anchois', 'scientificName': 'Boquerón'},
    // ];