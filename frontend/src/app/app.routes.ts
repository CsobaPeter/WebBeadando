import { Routes } from '@angular/router';
import { KonyvekComponent } from './konyvek/konyvek.component';
import { KonyvComponent } from './konyv/konyv.component';

export const routes: Routes = [
    {path:"",redirectTo:"konyvek",pathMatch:"full"},
    {path:"konyvek",component:KonyvekComponent},
    {path:"konyvek/:id",component:KonyvComponent}
];
