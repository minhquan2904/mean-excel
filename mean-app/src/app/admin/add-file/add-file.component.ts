import { Component, OnInit } from '@angular/core';
import { appConfig } from '../../app.config';
import { FileUploader, FileItem } from 'ng2-file-upload';

const URL = appConfig.apiUrl + "/upload"
@Component({
  selector: 'app-add-file',
  templateUrl: './add-file.component.html',
  styleUrls: ['./add-file.component.css']
})
export class AddFileComponent implements OnInit {
  public uploader:FileUploader = new FileUploader({url: URL});
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;
 
  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }
 
  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }
  constructor() { }

  ngOnInit() {
    console.log(URL);
  }

}
