import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GetStaticPaths, GetStaticProps } from 'next';

import { Box } from '@mui/material';

import { backend } from '../../backend';
import { Project, ProjectListResponse } from '../../interfaces';
import { getProjectInfo } from '../../utils';
import { Layout } from '../../components/layouts';
import { BodyProject } from '../../components/proyectos';
import { projects } from '../../utils/data/projects';
import { FormContact } from '../../components/home';

/* interface Props {
    projects: Project[];
    params: {
        name: string;
    };
} */


const ProjectPage = () => {

    const [ project, setProject ] = useState({
        id: 0,
        name: '',
        duration: 0,
        year: 0,
        image_project: '',
        image_company: '',
        services: []
    });

    useEffect(() => {

        let params = window.location.pathname;
      
        const projectDetail: any = projects.find( ( project: any ) => {
            let nameProject = project.name; 
            nameProject = nameProject.toLowerCase();
            nameProject = nameProject.replaceAll(' ', '%20');
    
            return params == `/proyectos/${ nameProject }`;
        });

        setProject( projectDetail );

    }, []);

    return (

        <Layout title={`Proyecto ${ project.name }`}>

            <Box>

                <BodyProject 
                    project= { project }
                />

                <FormContact />

            </Box>

        </Layout>

    )
}

/* export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { name } = params as { name: string };

    const projects = require('../../utils/data/projects.json');

    const project = projects.filter( ( project: any ) => {
        let nameProject = project.name;

        return name == nameProject.toLowerCase();
    })

    const project = await getProjectInfo( name );

    if( !project ) {
        return {
            redirect: {
                destination: '/proyectos',
                permanent: false
            }
        }
    }
  
    return {
      props: {
        project: project[0],
        revalidate: 86400,
      }
    }
} */

/* export const getStaticPaths: GetStaticPaths = async (ctx) => { */

    /* const projects = require('../../utils/data/projects.json'); */

    /* const { data } = await backend.get<ProjectListResponse>('/proyectos'); */

    /* const projectsNames: string[] = projects.map( ( project: any ) => project.name );

    return {
        paths: projectsNames.map( name => ({
            params: { name }
        })),
        fallback: 'blocking'
    }
} */

/* export const getStaticProps: GetStaticProps = async ({ params }) => { */

    /* const { data } = await backend.get<ProjectListResponse>('/proyectos'); */

    /* const projects = require('../../utils/data/projects.json'); */

    /* const { data } = await dataProjects;
  
    const projects: Project[] = data.projects; */
  
    /* return {
      props: {
        projects,
        params
      }
    }
} */

export default ProjectPage;