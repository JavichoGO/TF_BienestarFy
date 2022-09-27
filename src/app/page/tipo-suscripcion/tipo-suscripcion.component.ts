import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipo-suscripcion',
  templateUrl: './tipo-suscripcion.component.html',
  styleUrls: ['./tipo-suscripcion.component.css']
})
export class TipoSuscripcionComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
