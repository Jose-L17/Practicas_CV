import { Component, OnInit } from '@angular/core';
import { InteresesService } from '../services/intereses.service';

@Component({
  selector: 'app-intereses',
  templateUrl: './intereses.component.html',
  styleUrls: ['./intereses.component.css']
})
export class InteresesComponent implements OnInit {

  constructor(private interestService: InteresesService){

  }
  Arreglo: any = []

  ngOnInit(): void {
    this.interestService.getIntereses()
    .subscribe( (data: any) => {
      this.Arreglo = data
      console.log(data)
 })
}
}
