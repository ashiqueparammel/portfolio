import './Projects.css';
import ProjectOneImage from '../../assets/images/ProjectCootImage.png';
import ProjectTwoImage from '../../assets/images/DarkFantacy.png';
import ProjectThreeImage from '../../assets/images/NetFlix.png';
import ProjectfourImage from '../../assets/images/Olx.png';
import ProjectfiveImage from '../../assets/images/Connectin ad.png';
import {useMemo} from "react";
import {Project as ProjectType} from "../../Types/Project.ts";
import {Project} from  "../";

export const Projects= () => {
    const projects: ProjectType[] = useMemo<ProjectType[]>(() => [
        {
            title: 'COOT',
            subtitle: 'Mens Fashion online shoping',
            description: " In this Project Used Django,PSQL,HTML,CSS,AJAX, It's provide Good userfriendly UI, offering a variety of features to enhance your online experience.",

            github: 'https://github.com/AshiqueParammel/coot',
            website: 'https://coot.molla.cloud/',
            image: ProjectOneImage,
            techStack: ['React', 'Django', 'PostgreSQL', 'Docker', 'Nginx','Ajax', 'CSS']
        },
        {
            title: 'Netflix',
            subtitle: 'CLONE',
            description: " In This Project i Used React,axios,redux,firebase",

            github: 'https://github.com/AshiqueParammel/Netflix_React',
            website: '',
            image:ProjectThreeImage, 
            techStack: ['React','firebase','axios','redux']
        },{
            title: 'Olx',
            subtitle: 'CLONE',
            description: " In This Project i Used React,axios,redux,firebase",

            github: 'https://github.com/ashiqueparammel/olx',
            website: '',
            image:ProjectfourImage, 
            techStack: ['React','firebase','axios','redux']
        },{
            title: 'DARK-FANTASY',
            subtitle: 'Responsive Template',
            description: "Responsive Template Used HTML and CSS",

            github: 'https://github.com/AshiqueParammel/Dark-fantasy',
            website: '',
            image: ProjectTwoImage,
            techStack: ['HTML', 'CSS']
        }
        ,{
            title: 'ConnectIn',
            subtitle: 'Online Job Portel',
            description: "In this Project Used DjangoRestFrameWork,PSQL,HTML,Tailwind CSS,JWT,Axios,React,Redux, It's provide Good userfriendly UI, offering a variety of features to enhance your online experience.",

            github: 'https://github.com/ashiqueparammel/connectinfrontend',
            githubbackend: 'https://github.com/ashiqueparammel/connectinbackend',
            website: '',
            image: ProjectfiveImage,
            techStack: ['DRF', 'PSQL','HTML','Tailwind CSS','JWT','Axios','React','Redux']
        }
      
    ], []);

    return (
        <section id={'projects'} className={'projects container'}>
            <div className={'projects__header'}>
                <p className={'projects__heading'}>Projects</p>
                <p className={'projects__subheading'}>Works, I'm most proud of</p>
            </div>
            <div className={'projects__list'}>
                {projects.map((project, index) => <Project key={index} project={project}/>)}
            </div>
        </section>
    );
};