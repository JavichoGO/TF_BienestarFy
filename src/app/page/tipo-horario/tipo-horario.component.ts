import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipo-horario',
  templateUrl: './tipo-horario.component.html',
  styleUrls: ['./tipo-horario.component.css']
})
export class TipoHorarioComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
