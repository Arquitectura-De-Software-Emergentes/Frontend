import { PositionProfile } from 'src/app/job-offer/models/position-profile';
import { Availability } from 'src/app/shared/enums';

export interface AssessmentResponse {
  id: string;
  jobOfferId: number;
  assessmentStages: AssessmentStage[] | null;
  recruiterInstitution: string;
  title: string;
  initialDate: Date;
  endDate: Date;
  avalability: Availability;
  positionProfile: PositionProfile;
}

export interface AssessmentStage {
  activities: Activity[] | null;
  title: string;
}

export interface Activity {
  name: string;
}

export interface VideoAnalisisResponse{
  text: string
}
