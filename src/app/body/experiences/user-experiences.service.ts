import { Injectable } from '@angular/core';

@Injectable()
export class UserExperiencesService {
  private experiencesInfo = {
    myExperiences: "I have been a fullstack developer for the last year, before which I was a Captain in the Army Engineer Officer Corp",
    educations: [
      {
        schoolName: "American University",
        startDate: "September 2009",
        endDate: "March 2013",
        degreeTitle: "Bachelors in Literature",
        certificationDescription: "Bachelors in Literature",
        location: "Washington DC"
      },
      {
        schoolName: "Greely High School",
        startDate: "September 2015",
        endDate: "June 2009",
        degreeTitle: "High School Diploma",
        certificationDescription: "[Certification Description here.]",
        location: "[Location here]"
      }
    ],
    careers: [
      {
        companyName: "US Army",
        startDate: "June 2013",
        endDate: "June 2017",
        jobType: "Military",
        jobTitle: "Army Captain",
        jobDuty: "[Your job's duty here]",
        location: "[Location]",
        companyLink: "[Company's website]"
      },
      {
        companyName: "[Company's name here]",
        startDate: "[Srart Month Year]",
        endDate: "[End Month Year]	",
        jobType: "[Job type]",
        jobTitle: "[Your job's title here]",
        jobDudty: "[Your job's duty here]",
        location: "[Location]",
        companyLink: "[Company's website]"
      }
    ],
    certificates: [
      {
        certificateTitle: "[Certificate title here]",
        imageUrl: "https://images.sampletemplates.com/wp-content/uploads/2015/03/Free-Performance-Certificate-Template.jpg"
      },
      {
        certificateTitle: "[Certificate title here]",
        imageUrl: "https://images.sampletemplates.com/wp-content/uploads/2015/03/Free-Performance-Certificate-Template.jpg"
      },
      {
        certificateTitle: "[Certificate title here]",
        imageUrl: "https://images.sampletemplates.com/wp-content/uploads/2015/03/Free-Performance-Certificate-Template.jpg"
      },
      {
        certificateTitle: "[Certificate title here]",
        imageUrl: "https://images.sampletemplates.com/wp-content/uploads/2015/03/Free-Performance-Certificate-Template.jpg"
      },
      {
        certificateTitle: "[Certificate title here]",
        imageUrl: "https://images.sampletemplates.com/wp-content/uploads/2015/03/Free-Performance-Certificate-Template.jpg"
      },
      {
        certificateTitle: "[Certificate title here]",
        imageUrl: "https://images.sampletemplates.com/wp-content/uploads/2015/03/Free-Performance-Certificate-Template.jpg"
      }
    ]
  };
// ****images
  getExperiencesInfo() {
    return this.experiencesInfo;
  }

}
