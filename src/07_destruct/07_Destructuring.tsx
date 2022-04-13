import React from 'react';

export type ManType = {
    name: string;
    age: number;
    lessons: Array<{ title: string }>
};

type PropsType = {
    title: string;
    man: ManType
}


export const ManComponent: React.FC<PropsType> = ({title, man}) => {

    const {name, age} = man

    return (
        <div>
            <h1>{title}</h1>
            <p>{name}</p>
            <p>{age}</p>
        </div>
    );
};