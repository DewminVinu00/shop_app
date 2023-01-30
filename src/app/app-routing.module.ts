import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ShopDetailsComponent } from './pages/shop-details/shop-details.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { IndexComponent } from './pages/index/index.component';
import { NavbarComponent } from './include/navbar/navbar.component';
import { UsernameComponent } from './pages/username/username.component';
import { BabyBlanketsComponent } from './pages/baby-blankets/baby-blankets.component';
import { CottonblanketComponent } from './pages/baby-blankets/cottonblanket/cottonblanket.component';
import { LuminousblanketComponent } from './pages/baby-blankets/luminousblanket/luminousblanket.component';
import { SherpablanketComponent } from './pages/baby-blankets/sherpablanket/sherpablanket.component';
import { AvacadosocksComponent } from './pages/baby-shoes/avacadosocks/avacadosocks.component';
import { MilksocksComponent } from './pages/baby-shoes/milksocks/milksocks.component';
import { OatsocksComponent } from './pages/baby-shoes/oatsocks/oatsocks.component';
import { CatteetherComponent } from './pages/baby-toys/catteether/catteether.component';
import { DimplwobblComponent } from './pages/baby-toys/dimplwobbl/dimplwobbl.component';
import { SunteetherComponent } from './pages/baby-toys/sunteether/sunteether.component';
import { BabyToysComponent } from './pages/baby-toys/baby-toys.component';
import { ComfortersComponent } from './pages/babygiftpack/comforters/comforters.component';
import { DogtaupeComponent } from './pages/babygiftpack/dogtaupe/dogtaupe.component';
import { DogteethringComponent } from './pages/babygiftpack/dogteethring/dogteethring.component';
import { ThelittlesheepComponent } from './pages/babygiftpack/thelittlesheep/thelittlesheep.component';
import { BabygiftpackComponent } from './pages/babygiftpack/babygiftpack.component';
import { BabyShoesComponent } from './pages/baby-shoes/baby-shoes.component';
import { NutmegsocksComponent } from './pages/baby-shoes/nutmegsocks/nutmegsocks.component';
import { VoteComponent } from './public/vote/vote.component';
import { PayComponent } from './payment/pay/pay.component';
import { EmployeeComponent } from './employee/employee/employee.component';
import { MyaccountComponent } from './pages/myaccount/myaccount.component';
import { HttpClientModule, HttpClient  } from '@angular/common/http';


const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'profile', component:ProfileComponent},
  {path:'Dashboard', component:DashboardComponent},
  {path:'home', component:HomeComponent},
  {path:'aboutus', component:AboutusComponent},
  {path:'shop', component:ShopComponent},
  {path:'shopdetails', component:ShopDetailsComponent},
  {path:'gallery', component:GalleryComponent},
  {path:'contactus', component:ContactusComponent},
  {path:'index', component:IndexComponent},
  {path:'navbar', component:NavbarComponent},
  {path:'username', component:UsernameComponent},
  {path:'employee', component:EmployeeComponent},


  {path:'babyblankets', component:BabyBlanketsComponent},
  {path:'cottonblanket', component:CottonblanketComponent},
  {path:'luminusblanket', component:LuminousblanketComponent},
  {path:'sherpablanket', component:SherpablanketComponent},

  {path:'babyshoes', component:BabyShoesComponent},
  {path:'avacadosocks', component:AvacadosocksComponent},
  {path:'milksocks', component:MilksocksComponent},
  {path:'nutmegsocks', component:NutmegsocksComponent},
  {path:'oatsocks', component:OatsocksComponent},

  {path:'babytoys', component:BabyToysComponent},
  {path:'catteether', component:CatteetherComponent},
  {path:'dimplwobbl', component:DimplwobblComponent},
  {path:'sunteether', component:SunteetherComponent},

  {path:'babygifts', component:BabygiftpackComponent},
  {path:'comforters', component:ComfortersComponent},
  {path:'dogtaupe', component:DogtaupeComponent},
  {path:'dogteether', component:DogteethringComponent},
  {path:'thelittlesheep', component:ThelittlesheepComponent},

  {path:'vote', component:VoteComponent},

  {path:'pay', component:PayComponent},
  {path:'myaccount', component:MyaccountComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
