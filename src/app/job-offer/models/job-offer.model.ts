import { Availability } from 'src/app/shared/enums';
import { Salary } from './salary.model';
import { PositionProfile } from './position-profile';

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
  availability: String;
  positionProfile: PositionProfile;
}
