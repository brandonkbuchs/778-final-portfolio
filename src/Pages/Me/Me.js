import React from 'react';
import Layout from '../../components/Layout';
import {SectionTitle, Paragraph, Pill} from '../../styles';
import {ProfileLink} from './styles';

const Me = ({user}) => {
    return (
        <Layout user={user}>
            <div>
                <SectionTitle>About</SectionTitle>
                <Paragraph>{user.basics.summary}</Paragraph>
            </div>
            <div>
                <SectionTitle>Skills</SectionTitle>
                <div>
                    {user.skills.map(skill => (
                        <Pill key={skill.name}>{skill.name}: {skill.level}</Pill>
                    ))}
                </div>
            </div>
            <div>
                <SectionTitle>Connect With Me</SectionTitle>
                <ul>
                    {user.basics.profiles.map((profile, i) => (
                        <ProfileLink key={profile.network}>
                            {i !== 0 && ' | '}
                            <a href={profile.url} target="_blank" rel="noreferrer noopener">
                                {profile.network}
                            </a>
                        </ProfileLink>
                    ))}
                </ul>
            </div>
        </Layout>
    );
};

export default Me;