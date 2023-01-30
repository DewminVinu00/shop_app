import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './include/navbar/navbar.component';
import { FooterComponent } from './include/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HttpClientModule, HttpClient} from '@angular/common/http';

import { IndexComponent } from './pages/index/index.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ShopDetailsComponent } from './pages/shop-details/shop-details.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    DashboardComponent,
    IndexComponent,
    HomeComponent,
    AboutusComponent,
    ShopComponent,
    ShopDetailsComponent,
    GalleryComponent,
    ContactusComponent,
    UsernameComponent,
    BabyBlanketsComponent,
    CottonblanketComponent,
    LuminousblanketComponent,
    SherpablanketComponent,
    AvacadosocksComponent,
    MilksocksComponent,
    OatsocksComponent,
    CatteetherComponent,
    DimplwobblComponent,
    SunteetherComponent,
    BabyToysComponent,
    ComfortersComponent,
    DogtaupeComponent,
    DogteethringComponent,
    ThelittlesheepComponent,
    BabygiftpackComponent,
    BabyShoesComponent,
    NutmegsocksComponent,
    VoteComponent,
    PayComponent,
    EmployeeComponent,
    MyaccountComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
