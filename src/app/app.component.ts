import { Component } from '@angular/core';
import { SinayApiService } from './services/sinay-api.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
    title = 'angular-sinay-dataviz';

    constructor(private service: SinayApiService) { }

    ngOnInit(): void {
        // this.service.fetchDataFromSinayApi();
    }
}
