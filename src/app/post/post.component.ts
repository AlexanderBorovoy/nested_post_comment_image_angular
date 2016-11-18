import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Post } from './post'
@Component({
    selector: 'post',
    templateUrl: './post.component.html'
})
export class PostComponent implements OnInit {
    public myForm: FormGroup;
    constructor(private _fb: FormBuilder) {}
    ngOnInit(){
        this.myForm = this._fb.group({
            name: [''],
            comments_attributes: this._fb.array([
               this.initComment()   
            ])
        })
    }
    initComment(){
        return this._fb.group({
            title: '',
            images_attributes: this._fb.array([
              
            ])
        })
    }
     initImage(){
        return this._fb.group({
            image: 'qwerty',           
        }) 
     }
    addComment(){
        const control = <FormArray>this.myForm.controls['comments_attributes'];
        console.log(control)
        control.push(this.initComment());
    }
    
  
   removeComment(i: number){
        const control = <FormArray>this.myForm.controls['comments_attributes'];
        control.removeAt(i);
    }
    save(model: Post) {
        var models = model.value;
        console.log(models)
    }
}