import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { SnackbarService } from 'src/app/service/snackbar.service';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.scss'],
})
export class ServicesPageComponent implements OnInit {
  public faInfo = faInfoCircle;
  public cardIconEnable = true;
  public user = {};
  public id : number = 1
  public routeParam = {};

    public state : {[key : string]:any} ={}

  constructor(
    public snackbarService: SnackbarService,
    public userService: UserService,
    public route: ActivatedRoute,
    public localStorage : LocalStorageService,
    public Router : Router,
  ) {}

  ngOnInit(): void {

    this.localStorage.state$.subscribe(
      (data)=>{
        this.state = data;
      }
    )

    this.userService.getUserById(this.id).subscribe({
      next: (Response: any) => {
        this.user = Response;
  
      },
    });
  }
  public goto(id:number){
    this.Router.navigate(['/services' , id])
  }

  public showSnackbar(): void {
    this.snackbarService.callSnackbar('example');
  }

  public updateState(){
    this.localStorage.setState('hello' , "blar blar blar")
  }
}
