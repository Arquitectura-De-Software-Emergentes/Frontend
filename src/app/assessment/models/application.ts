export interface Application{
    id:ApplicationId
    applicantId:ApplicantId,
    jodOfferId:JobOfferId,
    status:string,
    applicantProfile:ApplicantProfile,
}
interface ApplicationId{
    applicationId:number
}
interface ApplicantProfile{
    personalInformation:PersonalInformation,
    contactInformation:ContactInformation,
    academicInformation:AcademicInformation,
    jobExperienceInformation:JobExperienceInformation[],
}

interface JobOfferId{
    jobOfferId:number,
}

interface ApplicantId{
    applicantId:number
}

interface PersonalInformation{
    name:string,
    lastName:string,
    bithDate:Date,
    address:string,
}

interface ContactInformation{
    email:string,
    phone:string,
    mobilePhone:string
}

interface AcademicInformation{
    school:string,
    speciality:string,
    references:number
}

interface JobExperienceInformation{
    company:string,
    position:string,
    time:string
}



