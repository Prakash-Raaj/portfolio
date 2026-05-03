import React from 'react';


export interface SkillsBadgeProps {
    icon?:React.ReactElement;
    name:string;
}


const SkillsBadge = ({icon, name}: SkillsBadgeProps) => {
    return (
        <div className='flex text-primary justify-center max-w-fit px-3 py-0.5 items-center gap-1.5 border rounded-4xl'>
            <div className='logo'>
                {icon}
            </div>
            <div className='font-bold text-sm'>{name}</div>
        </div>
    );
};

export default SkillsBadge;