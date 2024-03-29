import { FC, useEffect, useState } from 'react';

import { Box, Grid, Typography } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { CardInfrastructure } from './CardInfrastructure';

import styles from './Infrastructure.module.css';

export const Infrastructure: FC = () => {

    let [ numeroDiv, setNumeroDiv ] = useState( 1 );

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, []);

    let nIntervId;

    if (!nIntervId) {
        nIntervId = setTimeout(flashText, 2000);
    }

    function flashText() {
        if (numeroDiv === 1) {
            setNumeroDiv( 2 );
        } else if (numeroDiv === 2) {
            setNumeroDiv( 3 );
        } else if (numeroDiv === 3) {
            setNumeroDiv( 4 );
        } else if (numeroDiv === 4) {
            setNumeroDiv( 1 );
        }
    }
    
    return (
        
        <Box className={ styles['main-infrastructure'] }>

            <Box data-aos='fade-up'>

                <Typography variant='h2' color='info.dark'>Contamos con</Typography>
            
                <Grid container spacing={ 0 } sx={{ justifyContent: 'center' }}>

                    <CardInfrastructure
                        img='/home/infraestructura/sandblasting.png'
                        alt='Imagen de Área de Sandblasting'
                        title='Área de Sandblasting'
                        id= { 1 }
                        numeroDiv= { numeroDiv }
                    />

                    <CardInfrastructure 
                        img='/home/infraestructura/metalmecanica.png'
                        alt='Imagen de Área de Metalmecánica'
                        title='Área de Metalmecánica'
                        id= { 2 }
                        numeroDiv= { numeroDiv }
                    />

                    <CardInfrastructure 
                        img='/home/infraestructura/pintura.png'
                        alt='Imagen de Área de Pintura'
                        title='Área de Pintura'
                        id= { 3 }
                        numeroDiv= { numeroDiv }
                    />

                    <CardInfrastructure 
                        img='/home/infraestructura/prensa-mecanica.png'
                        alt='Imagen de Prensas mecánicas'
                        title='Prensas mecánicas'
                        id= { 4 }
                        numeroDiv= { numeroDiv }
                    />
                
                </Grid>

                <Typography variant='h3' color='info.dark' sx={{ textAlign: 'center', marginTop: '1rem' }}>y mucho más...</Typography>

            </Box>
        
        </Box>

    )
}