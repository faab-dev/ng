import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AssetService {

  private google_map_api_key:string = "AIzaSyAmMAbev8c71Eh_K6jU4tGs4PTAWC1oFnA";
  private google_map_url:string = "https://maps.googleapis.com/maps/api/js";

  removeScript(type:string) {
    console.log("Remove DOM element that has attribute");
    var path='';
    if( type == 'google-map' ){
      path = this.getGoogleMapUrl();
    }
    // TODO: Remove DOM element that has attribute `data-path="${path}"`
  }

  loadScript(type:string, fn):void{
    console.log("AssetService :: loadScript");

    var path = '';
    if( type == 'google-map' ){
      path = this.getGoogleMapUrl();
    }

    /*if( !path ){
      return;
    }*/
    const script = document.createElement("script");
    script.type = 'text/javascript';
    script.setAttribute('data-path', path);
    script.onerror = this.loadError;
    if (fn) { script.onload = fn; }
    document.head.appendChild(script);
    script.src = path;
  }

  loadError(e){
    console.log("AssetService :: loadError");
    console.log(e);
  }

  /*onloadFunction(){
    console.log("AssetService :: onloadFunction");
    console.log("The script "+this.path+" has been correctly loaded.";
  }*/


  private getGoogleMapUrl():string {
    return this.google_map_url + '?key=' + this.google_map_api_key;
  }
}
