import { FC, useEffect } from 'react';

import { Box, Typography } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

import styles from './Body.module.css';

export const IntroContact: FC = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (

        <Box data-aos='fade-up'>

            <Box className={ styles['contact-intro']}>
                <Typography variant='h5' color='info.dark'>
                    ¿Listo para tu próximo proyecto? Estamos a su disposición para cualquier duda, completa el formulario y un profesional te contactará a la brevedad posible.    
                </Typography>
            </Box>

        </Box>

    )
}
