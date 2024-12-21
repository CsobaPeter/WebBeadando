import { RouterOutlet } from '@angular/router';
import {Component, OnInit, Pipe} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {log} from '@angular-devkit/build-angular/src/builders/ssr-dev-server';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Importálás


export interface Konyv {
  idkonyvek: number | null;
  nev: string;
  darab: number;
  iro: string;
}

@Component({
  selector: 'app-konyvek',
  imports: [RouterOutlet,CommonModule,FormsModule],
  templateUrl: './konyvek.component.html',
  styleUrl: './konyvek.component.css'
})

export class KonyvekComponent implements OnInit {
  konyvek: any[] = [];
  newkonyv = { idkonyvek: null, nev: '', darab: 0, iro: '' };
  editedKonyv: Konyv = { idkonyvek: null, nev: '', darab: 0, iro: '' };  // Az éppen szerkesztett könyv

  constructor(private http: HttpClient){};


  ngOnInit(): void {
    this.loadKonyvek();
  }

  loadKonyvek(): void {
    this.http.get<any>("/api/konyvek",
      {headers: {'Accept' : 'application/json', 'Content-Type' : 'application/json' }}).subscribe(
      (data) => {
        this.konyvek = data;
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }
  addKonyv(): void {
    console.log(this.newkonyv)
   this.http.post("/api/konyvek", this.newkonyv, {
     headers: { 'Content-Type': 'application/json' }
   }).subscribe(() => {
     this.loadKonyvek();
     this.newkonyv = { idkonyvek: null, nev: '', darab: 0, iro: '' };
   });
  }

  deleteKonyv(id: number): void {
    this.http.delete(`/api/konyvek/${id}`).subscribe(() => this.loadKonyvek());
  }
loadKonyvForEdit(konyv: Konyv): void {
    // A kiválasztott könyv adatait a szerkesztéshez
    this.editedKonyv = { ...konyv };
  }

  editKonyv(): void {
    if (this.editedKonyv.idkonyvek) {
      this.http.put(`/api/konyvek/${this.editedKonyv.idkonyvek}`, this.editedKonyv, {
        headers: { 'Content-Type': 'application/json' },
      }).subscribe(
        () => {
          console.log('Sikeres frissítés');
          this.loadKonyvek(); // Újratölti a könyveket
          this.editedKonyv = { idkonyvek: null, nev: '', darab: 0, iro: '' }; // Törli a formot
        },
        (error) => {
          console.error('Hiba a PUT kérés során:', error);
        }
      );
    }
  }
}
