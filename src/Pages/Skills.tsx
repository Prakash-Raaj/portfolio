
interface SkillsProps {
  id?: string;
}

const Skills = ({ id }: SkillsProps) => {
    return (
        <div id={id}>
            Skills page
        </div>
    );
};

export default Skills;