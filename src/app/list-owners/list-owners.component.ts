import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {OwnerService} from '../shared/owner/owner.service'
import {CarService} from '../shared/car/car.service'

@Component({
  selector: 'app-list-owners',
  templateUrl: './list-owners.component.html',
  styleUrls: ['./list-owners.component.css']
})
export class ListOwnersComponent implements OnInit{
  public API = 'https://thawing-chamber-47973.herokuapp.com/owners/'

  constructor(private ownerService:OwnerService, private router:Router, private carService: CarService) { }
  selectOwners:Array<any>;
  owners:Array<any>;
  cars: Array<any>;
  ngOnInit() {
    this.ownerService.getAll().subscribe(data=>{
      this.owners = data._embedded.owners;
      this.owners.map(owner=>{
        owner.id =  owner._links.self.href.split("/")[4]
      })
    })
    this.carService.getAll().subscribe(data => {
      this.cars = data._embedded.cars;
      for (const car of this.cars) {
        car.ownerDni !== null;
      }
  
    })
  }

  removeOwnersFromArray(owner) {
    this.owners.splice(this.owners.indexOf(owner), 1);
  }

  DeleteOwners(){ 
    let i = 0;
    this.selectOwners.forEach(owner=>{
      let href = this.API + this.selectOwners[i];
      i = i + 1;   
      this.ownerService.remove(href).subscribe(result => {
      this.removeOwnersFromArray(owner);
      this.cars.forEach(car => {
        if(car.ownerDni === owner.dni){
          car.ownerDni = null;
          this.carService.save(car).subscribe(res => {
          });
        }
      });
    }, 
       error => console.error(error));
    })

  }


}
