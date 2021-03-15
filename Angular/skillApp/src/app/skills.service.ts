import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {SkillData} from 'src/app/skillInterface';
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private http: HttpClient) { }

  getSkills(): Observable<SkillData[]>{
    return this.http.get<SkillData[]>('http://localhost:3000/skills/need');
  }
}

