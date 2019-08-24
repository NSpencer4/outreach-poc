import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import {AppModule} from "../../app.module";
import {TableComponent} from "../table/table.component";

@NgModule({
  declarations: [HomeComponent, TableComponent],
  imports: [CommonModule, SharedModule, HomeRoutingModule]
})
export class HomeModule {}
