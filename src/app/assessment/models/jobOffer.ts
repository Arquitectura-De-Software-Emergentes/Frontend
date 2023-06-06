import { Availability } from "src/app/shared/enums";

export interface JobOffer {
  id: number
  recruiterId: number;
  title: string;
  description: string;
  initialDate: Date;
  endDate: Date;
  salary: number;
  maxApplications: number;
  numberApplications: number;
  avalability: Availability;
}

export interface AssessmentResponse{
  id: string
  jobOfferId: number;
  assessmentStages: AssessmentStage[] | null;
  recruiterInstitution: string
  title: string;
  initialDate: Date;
  endDate: Date;
  avalability: Availability;
}

export interface AssessmentStage{
  activities: Activity[]|null;
  title: string
}

export interface AssessmentStageAnalysis{
  activities: Activity[]|null;
  title: string;
}

export interface Activity{
  name: string
}