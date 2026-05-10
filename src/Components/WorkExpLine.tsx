export interface WorkExpLineProps {
  title: string;
  companyName: string;
  fromDate: string;
  toDate: string;
  details: string[];
  currentlyWorking: boolean;
  isLast: boolean;
}
const WorkExpLine = (props: WorkExpLineProps) => {
  return (
    <div>
      <div className="flex gap-6">
        {/* Marker column */}
        <div className="flex flex-col items-center">
          {/* Circle */}
          <span className="w-3 h-3 rounded-full bg-primary mt-1" />

          {/* Vertical line */}
          {!props.isLast && (
            <span className="w-px flex-1 bg-primary/40" />
          )}
        </div>

        {/* Content */}
        <div className="pb-10">
          <h3>{props.title}</h3>
          <p>
            {props.companyName} • {props.fromDate} -{' '}
            {props.currentlyWorking ? ' present' : props.toDate}{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkExpLine;
