import { Component } from '@angular/core';
import { SecondaryComponent } from '../secondary/secondary.component';
import { CommonModule } from '@angular/common';
import { rolesComponent } from "../roles.component";

@Component({
  selector: 'app-master',
  imports: [ CommonModule, rolesComponent],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css'
})
export class MasterComponent {

  currentcomponent : string ="roles";
 changetab(tabname: string ){
 this.currentcomponent = tabname;
}}
