import { FC } from 'react';

import Image from 'next/image';

import { Box } from '@mui/material';

import { ItemWelcomeInfo } from './ItemWelcomeInfo';

import styles from './Welcome.module.css';

export const WelcomeInfo: FC = () => {

    return (
        
        <Box className={ styles['welcome-info'] }>
            <Image 
                src='/home/welcome.png'
                alt='Imagen de bienvenida'
                width={ 800 }
                height={ 750 }
            />

            <Box className={ styles['welcome-info-items']}>

                <ItemWelcomeInfo 
                    src='/home/icon-staff.svg'
                    alt='Ícono de personal capacitado'
                    title='Personal capacitado'
                    info='Nuestros profesionales están especializados y certificados en el área'
                />

                <ItemWelcomeInfo 
                    src='/home/icon-solutions.svg'
                    alt='Ícono de soluciones confiables'
                    title='Soluciones confiables'
                    info='Ofrecemos a nuestros clientes una amplia variedad de soluciones con los más rigurosos estándares de calidad'
                />

                <ItemWelcomeInfo 
                    src='/home/icon-tools.svg'
                    alt='Ícono de instrumentarias de alta calidad'
                    title='Instrumentaria de alta calidad'
                    info='Contamos con maquinaria y herramientas de última tecnología para garantizar la seguridad y excelencia en cada uno de nuestros proyectos'
                />

            </Box>
        </Box>

    )
}
