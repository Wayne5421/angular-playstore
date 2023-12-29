import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-pricing.component.html',
  styleUrl: './card-pricing.component.css'
})
export class CardPricingComponent {


    @Input()
    gameType: string = "Digital PS4" 
    @Input()   
    gamePrice: string = "R$ 139,99"

}
