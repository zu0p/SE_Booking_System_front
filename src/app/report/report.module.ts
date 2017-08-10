import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarModule } from '../shared/component/navbar/navbar.module';
import { ReportRoutingModule } from './report-routing.module';
import { ReportComponent } from './report.component';

@NgModule({
    imports: [
        CommonModule,
        ReportRoutingModule,
        NavbarModule
    ],
    declarations: [ ReportComponent ]
})
export class ReportModule {
}