import { FC, useEffect } from 'react';

import { Box, Grid, Typography } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { CardMainServices } from './CardMainServices';

import styles from './MainServices.module.css';

export const MainServices: FC = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    
    return (
        
        <Box className={ styles['main-services'] }>

            <Box data-aos='fade-up'>

                <Typography variant='h2' color='info.main'>Nuestros servicios populares</Typography>
            
                <Grid container spacing={ 2 } sx={{ justifyContent: 'center' }}>

                    <CardMainServices 
                        img='/home/disenio.png'
                        alt='Imagen de desarrollo de proyectos'
                        subtitle='Diseño'
                        title='Desarrollo de proyectos'
                        link='disenio'
                    />


                    <CardMainServices 
                        img='/execution/execution-installation.png'
                        alt='Imagen de instalación de equipos'
                        subtitle='Ejecución'
                        title='Instalación de equipos'
                        link='ejecucion/instalacion'
                    />

                    <CardMainServices 
                        img='/execution/execution-supplies.png'
                        alt='Imagen de suministro de equipos'
                        subtitle='Ejecución'
                        title='Suministro de equipos'
                        link='ejecucion/instalacion'
                    />
                
                </Grid>

            </Box>
        
        </Box>

    )
}
