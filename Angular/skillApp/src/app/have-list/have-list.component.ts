import { Component, OnInit } from '@angular/core';
import {SkillsService} from '../skills.service'
@Component({
  selector: 'app-have-list',
  templateUrl: './have-list.component.html',
  styleUrls: ['./have-list.component.css']
})


export class HaveListComponent implements OnInit {

 public skills : any = []

  constructor(private _skillsService:SkillsService) { }

  ngOnInit() {
    this._skillsService.getSkillsHave().subscribe(data=>this.skills = data)
  }

}
