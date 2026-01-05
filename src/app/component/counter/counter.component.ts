import { Component , Input, Output } from '@angular/core';
import { faPlus , faMinus } from '@fortawesome/free-solid-svg-icons';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  public plusIcon = faPlus;
  public minusIcon = faMinus;
  @Input() public counterValue : number = 0
  @Input() public min = 0
  @Input() public max = Number.MAX_SAFE_INTEGER
  @Output() public counterChange = new EventEmitter<number>();
  
  public sentValue(){
    this.counterChange.emit(this.counterValue);
  }
  public minus(){
    if(this.counterValue > 0){
    this.counterValue = this.counterValue -1
    }
  }
  public plus(){
    this.counterValue = this.counterValue + 1
  }
}
