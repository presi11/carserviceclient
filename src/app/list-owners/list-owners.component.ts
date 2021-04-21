import { Component, OnInit } from '@angular/core';
import {OwnerService} from '../shared/owner/owner.service'

@Component({
  selector: 'app-list-owners',
  templateUrl: './list-owners.component.html',
  styleUrls: ['./list-owners.component.css']
})
export class ListOwnersComponent implements OnInit {

  constructor(private ownerService:OwnerService) { }
  owners:Array<any>;
  ngOnInit() {
    this.ownerService.getAll().subscribe(data=>{
      this.owners = data._embedded.owners;
      this.owners.map(owner=>{
        owner.id =  owner._links.self.href.split("/")[4]
      })
    })

  }

}
