import SkillsBadge from '../Components/SkillsBadge';
import type { SkillsBadgeProps } from '../Components/SkillsBadge';

import { skillsData } from '../Constants';

interface SkillsProps {
  id?: string;
}


const Skills = ({ id }: SkillsProps) => {
  return (
    <div id={id} className='pt-25 h-80'>
      <div className="text-3xl tet-primary text-center pb-5">
        Technical Skills
      </div>
      <div className='flex flex-wrap justify-center gap-4 max-w-5xl mx-auto'>
        {skillsData.map((s: SkillsBadgeProps) => (
          <SkillsBadge icon={s.icon} name={s.name} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
