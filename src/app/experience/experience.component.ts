import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../services/skills.service';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  constructor(private skillService: SkillsService) {}

  Skill: any = [];

  ngOnInit(): void {
    this.skillService.getSkills().subscribe((data: any) => {
      console.log("dwadw",data)
      this.Skill = data;
    });
  }
}
