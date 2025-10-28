import { Component } from "@angular/core";
import { FormsModule} from "@angular/forms";

@Component({
    selector: "app-home",
    standalone: true,
    imports: [FormsModule],
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})

export class HomeComponent {
    Name: string = "";
    Age: number = 25;
    ImageUrl: string = "/assets/BB.jpg";
}