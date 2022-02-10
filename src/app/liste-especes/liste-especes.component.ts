import { Component, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';

import { SinayApiService } from '../services/sinay-api.service';

@Component({
    selector: 'app-liste-especes',
    templateUrl: './liste-especes.component.html',
    styleUrls: ['./liste-especes.component.scss']
})

export class ListeEspecesComponent implements OnInit {

    data: any[] = [
        {'faoCode': 'GKL', 'frenchName': 'Amande commune', 'spanishName': 'Almendra de mar'},
        {'faoCode': 'ANE', 'frenchName': 'Anchois', 'spanishName': 'Boquerón'},
        {'faoCode': 'ELE', 'frenchName': "Anguille d'Europe", 'spanishName': 'Anguila europea'},
        {'faoCode': 'SCR', 'frenchName': 'Araignée européenne', 'spanishName': 'Centolla europea'},
        {'faoCode': 'LEF', 'frenchName': 'Arnoglosses, rombous nca', 'spanishName': 'Rodaballos, rombos, etc. nep'},
        {'faoCode': 'AVX', 'frenchName': 'Athérine', 'spanishName': 'Pejerreyes mediterráneos nep'},
        {'faoCode': 'SIL', 'frenchName': 'Athérinidés nca', 'spanishName': 'Pejerreyes nep'},
        {'faoCode': 'BSS', 'frenchName': 'Bar européen', 'spanishName': 'Lubina'},
        {'faoCode': 'SPU', 'frenchName': 'Bar tacheté', 'spanishName': 'Baila'},
        {'faoCode': 'BLL', 'frenchName': 'Barbue', 'spanishName': 'Rémol'}
    ];

    constructor(private sas: SinayApiService) { }

    ngOnInit(): void {
        // this.data = this.sas.getDataApi();

        // console.log(this.data);
    }

}

