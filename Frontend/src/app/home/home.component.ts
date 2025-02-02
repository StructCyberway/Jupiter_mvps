import { Component} from '@angular/core';
import { GreetingComponent } from '../components/greeting/greeting.component';
import { CitlistComponent } from "../components/citlist/citlist.component";

@Component({
  selector: 'app-home',
  imports: [GreetingComponent, CitlistComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
}
