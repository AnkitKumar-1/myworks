import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { LeftPaneComponent } from './left-pane/left-pane.component';
import { RightPaneComponent } from './right-pane/right-pane.component';
import { PostsComponent } from './posts/posts.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'posts/:postId', component: PostsComponent},
 
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(appRoutes)
  ],
  exports: [
    HomeComponent,
    ProductsComponent,
    AboutComponent,
    PostsComponent,
    LeftPaneComponent,
    RightPaneComponent,
    RegisterComponent
  ],
  declarations: [HomeComponent, AboutComponent, ProductsComponent, LeftPaneComponent, RightPaneComponent, PostsComponent, RegisterComponent]
})
export class PublicModule { }
