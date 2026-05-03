import WorkExpLine, {
  type WorkExpLineProps,
} from '../Components/WorkExpLine';
import { workExperienceData } from '../Constants';

export interface WorkExpProps {
  id?: string;
}

const WorkExp = ({ id }: WorkExpProps) => {
  return (
    <div id={id}>
      <div className='flex flex-col mt-15'>
        <div className="text-3xl tet-primary text-center pb-15">Work Experience</div>
        {workExperienceData.map((d: WorkExpLineProps) => (
          <WorkExpLine
            title={d.title}
            companyName={d.companyName}
            currentlyWorking={d.currentlyWorking}
            details={d.details}
            fromDate={d.fromDate}
            toDate={d.toDate}
            isLast={d.isLast}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkExp;
