import { Experience, Modality, Type } from 'src/app/shared/enums';
import { Course } from './course.model';

export interface PositionProfile {
  id: number;
  name: string;
  course: Course;
  modality: Modality;
  experience: Experience;
  type: Type;
}
