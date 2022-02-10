import axios from "axios";
import { Injectable } from '@angular/core';
import { Especes } from '../models/especes';
import * as localData from '../localStorage/data.json';

@Injectable({
    providedIn: 'root'
})

export class SinayApiService {
    private dataApi: Especes[] = [];

    constructor() { }

    getDataApi(): Especes[] {
        return this.dataApi;
    }

    fetchDataFromSinayApi() {
        axios
            .get('https://services-fish-price-dev.sinay.ai/seafoods')
            .then(response => {
                this.dataApi = response.data.data;
            })
            .catch(error => { 
                console.log(error);
            })
            .finally(() => console.log('Load data succes !') );
    }
}
