import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-count-empleados',
  templateUrl: './count-empleados.component.html',
  styleUrls: ['./count-empleados.component.css']
})
export class CountEmpleadosComponent implements OnInit {

radioButtonSeleccionado = 'Todos';
  @Input() todos:number;
  @Input() masculino:number;
 @Input() femenino:number;

 @Output() radioButton: EventEmitter<String> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
  
radioButtonChange(): void{
  this.radioButton.emit(this.radioButtonSeleccionado);
}

}
