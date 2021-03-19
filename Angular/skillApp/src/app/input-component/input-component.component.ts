import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { SkillSubmitService } from '../skill-submit.service';


@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.css']
})
export class InputComponentComponent implements OnInit {

  constructor(private fb:FormBuilder, private _skillsubmit:SkillSubmitService) { }

  ngOnInit(): void {
  }

  skillForm= this.fb.group({
    name:['',[Validators.required,Validators.minLength(3)]],
    comment:[''],
    accomplished:[false]
  })

  onSubmit(){
    this._skillsubmit.register(this.skillForm.value).subscribe(
    response => console.log('success', response),
    error => console.error('Error!', error))
      
    }
}
