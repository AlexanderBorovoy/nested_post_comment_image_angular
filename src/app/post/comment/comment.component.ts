import { Component, Input } from '@angular/core';
import { FormGroup, FormArray,FormBuilder } from '@angular/forms';
import { UPLOAD_DIRECTIVES } from 'ng2-uploader/ng2-uploader';
@Component({
    selector: 'comment',
    templateUrl: './comment.component.html'
})
export class CommentComponent {
    image: any ={};
     constructor(private _fb: FormBuilder) {}
    @Input('group')
    public commentForm: FormGroup;
    uploadFile: any;
    options: Object = {
        url: 'http://localhost:3001/pictures',
        fieldName: 'picture[image]'
    } 
    handleUpload(data): void {   
        if (data && data.response) {
            data = data.response;
            this.uploadFile = data;
            this.image['url'] = 'http://localhost:3001/'+data;
            const control = <FormArray>this.commentForm.controls['images_attributes'];  
            if(!control.value[4]){
                control.push(this.initImage());
            }
        }
    }
    addImage(){
        const control = <FormArray>this.commentForm.controls['images_attributes']
        console.log(control)
        control.push(this.initImage());
    }
      
    initImage(){
        return this._fb.group({
            image: [this.image['url']],           
        }) 
     }
}