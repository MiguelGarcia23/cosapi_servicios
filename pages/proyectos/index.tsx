import { FC } from 'react';
import { GetStaticProps } from 'next';

import { Box } from '@mui/material';

import { backend } from '../../backend';
import { Project, ProjectListResponse } from '../../interfaces';
import { Layout } from '../../components/layouts';
import { BannerProjects, BodyProjects } from '../../components/proyectos';
import { projects } from '../../utils/data/projects';
import { FormContact } from '../../components/home';

interface Props {
    projects: Project[];
}


const ProjectsPage: FC<Props> = ({ projects }) => {

    return (

        <Layout title='Proyectos'>

            <Box>

                <BannerProjects />

                <BodyProjects 
                    projects = { projects }
                />

                <FormContact />

            </Box>

        </Layout>

    )
}


export const getStaticProps: GetStaticProps = async (ctx) => {

    /* const { data } = await backend.get<ProjectListResponse>('/proyectos'); */

    /* const projects = require('../../utils/data/projects.json'); */

    /* const { data } = await dataProjects;
  
    const projects: Project[] = data.projects; */
  
    return {
      props: {
        projects
      }
    }
}

export default ProjectsPage;