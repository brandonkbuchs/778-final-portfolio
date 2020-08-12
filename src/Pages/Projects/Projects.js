import React from 'react';
import Layout from '../../components/Layout';
import {SectionTitle, Pill} from '../../styles';
import {ImageContainer, StyledImage, ProjectItem, ProjectTitle, SkillContainer} from './styles';

const Projects = ({user}) => {
    return (
        <Layout user={user}>
            <div>
                <SectionTitle>Projects</SectionTitle>
                <ul>
                    {user.projects.map((project, i) => (
                        <ProjectItem key={i}>
                            <ProjectTitle>
                                <a href={project.githubUrl} target="_blank" rel="noreferrer noopener">
                                    {project.name}
                                </a>
                            </ProjectTitle>
                            <p>{project.summary}</p>
                            <p>{project.description}</p>
                            <ImageContainer>
                                {project.images.map((image, k) => (
                                    <a href={image.resolutions.desktop.url} target="_blank" rel="noreferrer noopener">
                                        <StyledImage src={image.resolutions.thumbnail.url} width={image.resolutions.thumbnail.width} height={image.resolutions.thumbnail.height} />
                                    </a>
                                ))}
                            </ImageContainer>
                            <SkillContainer>
                                {[...project.languages, ...project.libraries].map((item, j) => (
                                    <Pill key={j}>{item}</Pill>
                                ))}
                            </SkillContainer>
                        </ProjectItem>
                    ))}
                </ul>
            </div>
        </Layout>
    );
};

export default Projects;