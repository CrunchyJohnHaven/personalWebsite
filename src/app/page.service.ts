import { Injectable } from '@angular/core';

@Injectable()
export class PageService {
  private pageInfo = {
    backgroundImage: "http://www.schoolsplus.co.uk/wp-content/uploads/2017/06/technology.jpg",
    showHeader: true,
    showProfile: true,
    profileBackgroundColor: "white",
    showExperiences: true,
    experiencesBackgroundColor: "rgb(252, 243, 207)",
    showAbilities: true,
    abilitiesBackgroundColor: "white",
    showProjects: true,
    projectsBackgroundColor: "rgb(252, 243, 207)",
    showAwards: false,
    awardsBackgroundColor: "white",
    showContact: true,
    contactBackgroundColor: "rgb(66, 73, 73)",
    resumeTitle: "Hi, i'm",
    projectLink: "https://github.com/Wrinth/personal_profile_angular4",
    questionTitle: "Can I build something for you?",
  };

  getPageInfo() {
    return this.pageInfo;
  }

}
