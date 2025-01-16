import { Routes } from '@angular/router';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { ThirdComponentComponent } from './third-component/third-component.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { CartComponent } from './cart/cart.component';
import { CuartoComponent } from './cuarto/cuarto.component';
import { QuintoComponent } from './quinto/quinto.component';
import { OctavoComponent } from './octavo/octavo.component';
import { ContactoTDComponent } from './contacto-td/contacto-td.component';
import { ContactoReactiveComponent } from './contacto-reactive/contacto-reactive.component';
import { ConsumirImagenComponent } from './consumir-imagen/consumir-imagen.component';



export const routes: Routes = [
    { path: "first", component: FirstComponentComponent },
    { path: "second", component: SecondComponentComponent },
    { path: "third", component: ThirdComponentComponent},
    { path: "cuarto", component: CuartoComponent},
    { path: "quinto", component: QuintoComponent},
    { path: "octavo", component: OctavoComponent},
    { path: "ContactoTd", component: ContactoTDComponent},
    { path: "ContactoReactive", component: ContactoReactiveComponent},
    { path: "ConsumirImagen", component: ConsumirImagenComponent},
    {path: "productList", component: ProductlistComponent},
    {path: "cart", component: CartComponent}

];
