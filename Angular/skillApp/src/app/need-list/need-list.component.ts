import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../skills.service';

@Component({
  selector: 'app-need-list',
  templateUrl: './need-list.component.html',
  styleUrls: ['./need-list.component.css']
})
export class NeedListComponent implements OnInit {

  public skills: any = []

  constructor(private _skillsService: SkillsService) { }

  ngOnInit() {
    this._skillsService.getSkillsNeed().subscribe(data=>this.skills = data)
  }


}
