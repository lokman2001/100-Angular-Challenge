import { Component, OnInit } from '@angular/core';
import { faFacebook ,faInstagram , faLinkedin , faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-social-media-bar',
  templateUrl: './social-media-bar.component.html',
  styleUrls: ['./social-media-bar.component.scss']
})
export class SocialMediaBarComponent {

  public faFacebook = faFacebook;
  public faInstagram = faInstagram;
  public faLinkedin = faLinkedin;
  public faTwitter = faTwitter;

}
