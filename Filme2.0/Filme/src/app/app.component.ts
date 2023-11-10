import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Filme';
  Gender = '';

  listaRomance = [
    {titulo: 'Titanic', ano: 1998},
    {titulo: 'A Culpa É das Estrelas', ano: 2014}
  ]
  listaAcao = [
    {titulo: 'Velozes e Furiosos 10', ano: 2023},
    {titulo: 'Top Gun: Maverick', ano: 2022}
  ]
  listaComedia = [
    {titulo: 'Tô ryca', ano: 2016},
    {titulo: 'Tô ryca 2', ano: 2021}
  ]

  listaTerror = [
    {titulo: 'A Freira 2', ano: 2023},
    {titulo: 'M3GAN', ano: 2022}
  ]
}