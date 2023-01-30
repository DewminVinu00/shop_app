import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CheckoutService } from 'src/app/service/checkout.service';

@Component({
  selector: 'app-dimplwobbl',
  templateUrl: './dimplwobbl.component.html',
  styleUrls: ['./dimplwobbl.component.css']
})
export class DimplwobblComponent implements OnInit {
  paymentHandler:any = null

  constructor(private checkout:CheckoutService) { }

  //method when component executes

  ngOnInit(): void {
    this.invokeStripe();
  }

  makePayment(amount: number){

    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51MQtTpBmGD9txaFdXzcd1BFtwpGrYJWKkDj5OR2pf0Vi2g7lKKwEeP2mUhNhFKdJgQbPOI2UTqX6eNtzkPUy1WVU00ckapYA9P',
      locale: 'auto',
      token: function (stripeToken:any) {
        console.log(stripeToken)

        paymentStripe(stripeToken)

      }
    });

    const paymentStripe = (stripeToken: any) => {
      this.checkout.makePayment(stripeToken).subscribe((data: any) => {
        console.log(data)
      })
    }

    paymentHandler.open({
      name: "Little Laughs",
      description:"Baby Dimpl Wobbl",
      amount: amount * 100
    })
  }

  invokeStripe(){
    if(!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51MQtTpBmGD9txaFdXzcd1BFtwpGrYJWKkDj5OR2pf0Vi2g7lKKwEeP2mUhNhFKdJgQbPOI2UTqX6eNtzkPUy1WVU00ckapYA9P',
          locale: 'auto',
          token: function (stripeToken : any) {
            console.log(stripeToken);
          },
        });
      };
      window.document.body.appendChild(script);
    }
  }

}
