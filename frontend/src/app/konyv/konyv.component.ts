import { RouterOutlet } from '@angular/router';
import {Component, OnInit, Pipe} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {log} from '@angular-devkit/build-angular/src/builders/ssr-dev-server';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-konyv',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './konyv.component.html',
  styleUrl: './konyv.component.css'
})

export class KonyvComponent implements OnInit {
  konyv: any;
  id:number=0;
  constructor(private http: HttpClient,  private route: ActivatedRoute){}; 
  ngOnInit(): void {
    
    this.id = parseInt(this.route.snapshot.paramMap.get('id')||""); 
    this.route.paramMap.subscribe(params => {
      const id = params.get('movieId');
      this.id = id ? parseInt(id, 10) : 0;
      
    this.loadKonyv();
  });
  }

  loadKonyv(): void {
    this.http.get<any>(`/api/konyvek/${this.id}`,
      {headers: {'Accept' : 'application/json', 'Content-Type' : 'application/json' }}).subscribe(
      (data) => {
        this.konyv = data;
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }
}

