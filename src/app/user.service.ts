import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private userInfo = {
    name: "John Haven Bradley",
    jobTitle: "Freelance Developer",
    aboutMe: "I am an all-around freelance web and mobile app developer based in Silicon Valley excited to build your next project. I bring the discipline, organization, and work ethic of a retired Army Engineer Captain and an Army Ranger to every project that I take on. I promise transparency, clarity, and excellence in my work. If I take on your project, I will the highest grade of value. I have worked with great teams my entire life, and it is what I love to do above all else.",
    profilePicture: "",
    // http://i0.wp.com/cdn.techgyd.com/save-whatsapp-profile-picture-image3.jpg?resize=337%2C337
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
