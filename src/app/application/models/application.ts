import { ApplicantProfile } from "src/app/iam/models/professionalProfileResponse";

export interface Application {
  description: string;
  jobOfferId: number;
  title: string;
}

export interface ApplicationResponse{
  applicationId: ApplicationId
  status: string,
  applicantProfile: ApplicantProfile
}

export interface ApplicationId{
  applicantId: number,
  jobOfferId: number
}