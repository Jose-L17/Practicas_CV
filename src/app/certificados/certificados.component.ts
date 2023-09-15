import { Component, OnInit } from '@angular/core';
import { CertificacionesService } from '../services/certificaciones.service';
@Component({
  selector: 'app-certificados',
  templateUrl: './certificados.component.html',
  styleUrls: ['./certificados.component.css']
})
export class CertificadosComponent implements OnInit {

  constructor(private certificationService: CertificacionesService){
  }
  Certifications: any = [];

    ngOnInit(): void {
      this.certificationService.getCertificados()
      .subscribe( (data: any) => {
        this.Certifications = data
        console.log(data)
   })
  }
  }
