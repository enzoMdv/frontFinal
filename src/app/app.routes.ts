import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./final/pagina/login/login.component')
    },
    {
        path: 'login',
        loadComponent: () => import('./final/pagina/login/login.component')
    },
    {
        path: 'principal',
        loadComponent: () => import('./final/pagina/principal/principal.component')
    },
    
    {
        path: 'meseros',
        loadComponent: () => import('./final/pagina/mesero/mesero.component')
    },
    {
        path: 'editarmesero/:id',
        loadComponent: () => import('./final/pagina/editarmesero/editarmesero.component')
    },
    {
        path: 'nuevomesero',
        loadComponent: () => import('./final/pagina/nuevomesero/nuevomesero.component')
    },
    {
        path: 'categoria',
        loadComponent: () => import('./final/pagina/categoria/categoria.component')
    },
    {
        path: 'nuevacategoria',
        loadComponent: () => import('./final/pagina/nuevacategoria/nuevacategoria.component')
    },
    {
        path: 'editarcategoria/:id',
        loadComponent: () => import('./final/pagina/editarcategoria/editarcategoria.component')
    },
    {
        path: 'platillo',
        loadComponent: () => import('./final/pagina/platillo/platillo.component')
    },
    {
        path: 'nuevoplatillo',
        loadComponent: () => import('./final/pagina/nuevoplatillo/nuevoplatillo.component')
    },
    {
        path: 'editarplatillo/:id',
        loadComponent: () => import('./final/pagina/editarplatillo/editarplatillo.component')
    },
    {
        path: 'registromesero',
        loadComponent: () => import('./final/pagina/registromesero/registromesero.component')
    },
    {
        path: 'orden',
        loadComponent: () => import('./final/pagina/orden/orden.component')
    },
    {
        path: 'cliente',
        loadComponent: () => import('./final/pagina/cliente/cliente.component')
    },
    {
        path: 'nuevoorden',
        loadComponent: () => import('./final/pagina/nuevaorden/nuevaorden.component')
    },
    {
        path: 'nuevocliente',
        loadComponent: () => import('./final/pagina/nuevocliente/nuevocliente.component')
    },
    {
        path: 'editarcliente/:id',
        loadComponent: () => import('./final/pagina/editarcliente/editarcliente.component')
    },
    {
        path: 'editarOrden/:id',
        loadComponent: () => import('./final/pagina/editarorden/editarorden.component')
    }
];
