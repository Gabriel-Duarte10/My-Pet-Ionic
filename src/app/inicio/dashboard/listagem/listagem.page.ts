/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.page.html',
  styleUrls: ['./listagem.page.scss'],
})
export class ListagemPage implements OnInit {

  constructor() { }
  lista = [
    {
      nome: 'Nico 1',
      image: 'https://firebasestorage.googleapis.com/v0/b/mypet-2009f.appspot.com/o/nico%201.jpg?alt=media&token=8a172da6-d92e-4b23-b8e8-a434c12f4566'
    },
    {
      nome: 'Nico 2',
      image: 'https://firebasestorage.googleapis.com/v0/b/mypet-2009f.appspot.com/o/nico%202.jpg?alt=media&token=5186a505-5cec-448c-a97c-58734ee0ea92'
    },
    {
      nome: 'Nico 3',
      image: 'https://firebasestorage.googleapis.com/v0/b/mypet-2009f.appspot.com/o/nico%203.jpg?alt=media&token=6d37266c-d480-4e0c-8bf9-0bffbaf42a81'
    },
    {
      nome: 'Nico 4',
      image: 'https://firebasestorage.googleapis.com/v0/b/mypet-2009f.appspot.com/o/nico%204.jpg?alt=media&token=28d6bb15-3b1e-402e-8b09-ed43607a92b2'
    },
    {
      nome: 'Nico 5',
      image: 'https://firebasestorage.googleapis.com/v0/b/mypet-2009f.appspot.com/o/nico%205.jpg?alt=media&token=a613b724-1ee5-42c8-8d32-1a145aec6ae6'
    },
    {
      nome: 'Nico 6',
      image: 'https://firebasestorage.googleapis.com/v0/b/mypet-2009f.appspot.com/o/nico%206.jpg?alt=media&token=a85b2feb-dc87-4f07-9b5c-725784a7bc60'
    }];
  ngOnInit() {
  }

}
