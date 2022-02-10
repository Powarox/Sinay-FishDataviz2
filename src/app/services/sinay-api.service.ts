import axios from "axios";
import { Injectable } from '@angular/core';
// import { AxiosInstance } from "axios";

@Injectable({
    providedIn: 'root'
})

export class SinayApiService {

    dataApi = [];

    constructor() { }

    getDataApi(): any[] {
        return this.dataApi;
    }

    fetchDataFromSinayApi() {
        axios
            .get('https://services-fish-price-dev.sinay.ai/seafoods')
            .then(response => {
                this.dataApi = response.data.data;
            })
            .catch(error => { console.log(error) })
            .finally(() => console.log('Load data succes !') );
    }
}
