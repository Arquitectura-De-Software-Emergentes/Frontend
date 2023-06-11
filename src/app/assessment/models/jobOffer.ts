import { Availability, Currency, Experience, Modality, Type } from "src/app/shared/enums";

export interface JobOffer {
  id: number;
  recruiterId: number;
  title: string;
  description: string;
  initialDate: Date;
  endDate: Date;
  salary: Salary;
  maxApplications: number;
  numberApplications: number;
  availability: Availability;
  positionProfile:PositionProfile;
}

 interface Salary{
  mount:number;
  currency:Currency;
}

export interface AssessmentResponse{
  id: string;
  jobOfferId: number;
  assessmentStages: AssessmentStage[] | null;
  recruiterInstitution: string;
  title: string;
  initialDate: Date;
  endDate: Date;
  avalability: Availability;
  positionProfile:PositionProfile;
}
interface Course{
  course:string
}

interface PositionProfile{
id:number;
course:Course;
experience:Experience;
modality:Modality;
name:string;
type:Type;

}

 interface AssessmentStage{
  activities: Activity[]|null;
  title: string
}

 interface AssessmentStageAnalysis{
  activities: Activity[]|null;
  title: string;
}

 interface Activity{
  name: string
}

export interface JobOffer2{
  id:number;
  recruiterId:number;
  title:string;
  description:string;
  initialDate:Date;
  endDate:Date;
  numberApplications:number;
  maxApplications:number;

}