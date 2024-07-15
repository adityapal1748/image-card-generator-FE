import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'image-card-generator-FE';
  firstName:FormControl = new FormControl('')
  lastName:FormControl = new FormControl('')
  image:FormControl = new FormControl('',[Validators.required,this.validateFileType(['jpg', 'jpeg', 'png'])])

  constructor(private service:AppService){}

  onFileSelected(event :any){
    const file: File = event.target.files[0];
    if(file ){
      this.image.patchValue(file)
    }

    
  }
  
  validateFileType(validTypes: string[]) {
    return (control:any) => {
      const file = control.value;
      if (file) {
        const fileType = file.name.split('.').pop().toLowerCase();
        if (!validTypes.includes(fileType)) {
          console.log("true");
          
          return { invalidFileType: true };
        }
      }
      return null;
    };
  }

  onSubmit(){
    let payload = new FormData()
    payload.append("firstName",this.firstName.value)
    payload.append("lastName",this.lastName.value)
    payload.append("image",this.image.value)

    this.service.saveUerDets(payload).subscribe(res =>{
      console.log(res)
    })
  }
}
