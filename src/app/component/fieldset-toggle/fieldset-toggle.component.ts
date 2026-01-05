import { Component, OnInit ,Input } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-fieldset-toggle',
  templateUrl: './fieldset-toggle.component.html',
  styleUrls: ['./fieldset-toggle.component.scss']
})
export class FieldsetToggleComponent {
    public icon = faChevronDown;

    @Input() public title : string = 'Title';
    @Input() public isOpen : boolean = true;  

    public toggle(): void {
        this.isOpen = !this.isOpen;
    }

}
