import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
   
    selector: 'image',
    templateUrl: './image.component.html',
})

export class ImageComponent {
    //we will pass in comment from component
    @Input('troup')
    public imageForm: FormGroup;
}