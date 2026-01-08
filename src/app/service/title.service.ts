import { Conditional } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  constructor(public title : Title , public router : Router , public activatedRoute : ActivatedRoute) {
   }  
   public initializeTitleService(){
    this.router.events.pipe(
      filter((events) => events instanceof NavigationEnd)
    ).subscribe(() =>{
        const data = this.activatedRoute.root.firstChild?.snapshot?.data || {};
      const mainTitle = "100 Angular Challenge"
      const lastTile = this.title.getTitle()
      if(data['title']){
        const Title = `${mainTitle} - ${data['title']}`

        if(lastTile !== data['title']){
          this.title.setTitle(Title)
        }
      }else{
        if(lastTile !== mainTitle){
          this.title.setTitle(mainTitle)
        }
      }
    }
    )
   }
}
