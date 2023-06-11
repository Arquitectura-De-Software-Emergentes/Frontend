import { JobExperienceInformation } from "./jobExperienceInformation";

export interface ProfessionalProfileResponse {
  academicInformation: AcademicInformation;
  contactInformation: ContactInformation;
  personalInformation: PersonalInformation;
  jobExperienceInformations: JobExperienceInformation[];
}

export interface AcademicInformation {
  school: string;
  specialty: string;
  reference: string;
}

export interface ContactInformation {
  phone: string;
  email: string;
  mobilePhone: string;
}

export interface PersonalInformation{
    name: string;
    lastname: string;
    dni: string;
    birthDate: Date;
    address: string;
}