import { Component } from "@angular/core";
import { ContactFormComponent } from "../contactform/contactform.component";


@Component({
  selector: "app-about",
  standalone: true,
  imports: [ContactFormComponent],
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"]
})

export class AboutComponent {

}