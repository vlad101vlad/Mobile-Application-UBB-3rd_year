import {Component, Input, OnInit} from '@angular/core';
import {Contest} from '../../shared/model/contest';
import {Camera} from '@capacitor/camera/dist/esm/web';
import {CameraResultType, CameraSource, Photo} from "@capacitor/camera";
import {Directory, Filesystem} from "@capacitor/filesystem";
import {LoadingController, Platform} from "@ionic/angular";


// import {Camera} from "@capacitor/camera";
const IMAGE_DIRECTORY = 'stored-images';

interface LocalFile{
  name: string;
  path: string;
  data: string;
}

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'funfest-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.scss'],
})
export class DetailCardComponent implements OnInit {
  @Input() contest: Contest;
  image: LocalFile;
  constructor(private platform: Platform, private loadingController: LoadingController) { }

  ngOnInit() {
    this.loadFile();
  }

  async loadFile(){
    const loading = await this.loadingController.create({
      message: 'Loading data...'
    });
    await loading.present();

    Filesystem.readdir({
      directory: Directory.Data,
      path: IMAGE_DIRECTORY
    }).then(result => {
      console.log('Directory read: ', result);
      this.loadFileData(result.files);
    }, async error => {
      console.log('error: ' + error);
      await Filesystem.mkdir({
        directory: Directory.Data,
        path: IMAGE_DIRECTORY
      });
    }).then(_ => {
      loading.dismiss();
    });
  }

  async loadFileData(fileName: string[]){
    let filePath = '';
    let currentName = '';
    for(let currentFile of fileName){
      if(currentFile.startsWith(this.contest.id + '_')){
        currentName = currentFile;
        filePath = IMAGE_DIRECTORY + '/' + currentName;
      }
    }
    console.log('Found file: '+ filePath);
    const readFile = await Filesystem.readFile({
      directory: Directory.Data,
      path: filePath
    });

    this.image = {
      name: currentName,
      path: filePath,
      data: 'data:image/jpeg;base64,' + readFile.data
    };

    console.log(this.image);
  }

  async selectImage(){
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Photos
    });
    console.log(image);

    if(image){
      this.saveImage(image);
    }
  }

  async saveImage(photo: Photo){
    const base64Data = await this.readAsBase64Data(photo);
    console.log(base64Data);


    const fileName = this.contest.id + '_' + new Date().getTime() + '.jpeg';
    const savedFile = await Filesystem.writeFile({
      directory: Directory.Data,
      path: IMAGE_DIRECTORY + '/' + fileName,
      data: base64Data
    });
    console.log('saved: ', savedFile);
  }

  async readAsBase64Data(photo: Photo){
    if(this.platform.is('hybrid')){
      const file = await Filesystem.readFile({
        path: photo.path
      });
      return file.data;
    }else{
      const response = await fetch(photo.webPath);
      const blob = await response.blob();

      return await this.convertBlobToBase64(blob) as string;
    }
  }

  convertBlobToBase64 = (blob: Blob) => new Promise(((resolve, reject) => {
    const reader = new FileReader;
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  }));
}
