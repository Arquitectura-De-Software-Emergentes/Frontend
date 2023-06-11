import { AcademicInformation, ContactInformation, PersonalInformation } from "./professionalProfileResponse";

export interface ProfessionalProfileReq {
    academicInformation: AcademicInformation;
    contactInformation: ContactInformation;
    personalInformation: PersonalInformation;
}