import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private userInfo = {
    name: "John Haven Bradley",
    jobTitle: "Freelance Developer",
    aboutMe: "I am an all-around freelance web and mobile developer based in Silicon Valley who brings the discipline, organization, and work ethic of a retired Army engineer Captain and an Army Ranger to everything that he does. I promise transparency, clarity, and excellence in the completion of every project that I take on. I have worked with great teams my entire life, and it is what I love to do above all else.",
    profilePicture: "http://i0.wp.com/cdn.techgyd.com/save-whatsapp-profile-picture-image3.jpg?resize=337%2C337",
    location: "Silicon Valley",
    email: "johnhavenbradley",
    devpostAccount: "https://devpost.com/CrunchyJohnHaven?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav",
    facebookAccount: "https://www.facebook.com/haven.bradley",
    githubAccount: "https://github.com/CrunchyJohnHaven",
    googleAccount: "",
    linkedinAccount: "www.linkedin.com/in/johnhavenbradley",
    twitterAccount: "",
    otherAccount: ""
  };

  getUserInfo() {
    return this.userInfo;
  }

}
