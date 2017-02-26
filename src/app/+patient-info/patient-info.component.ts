import { Component, OnInit } from '@angular/core';
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`patient-info` component loaded asynchronously');

@Component({
    selector: 'add-patient',
    styleUrls: ['./patient-info.component.scss'],
    templateUrl: './patient-info.component.html',
})
export class PatientInfoComponent implements OnInit {
    private patients: any[];

    public ngOnInit() {
        console.log('hello `patient-info` component');
    }

}