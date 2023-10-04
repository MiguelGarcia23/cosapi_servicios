import { FC, useEffect } from 'react';
import { useRouter } from 'next/router';

import { Box, Button, Typography } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

import styles from './Body.module.css';


export const FooterMaintenance: FC = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    let router = useRouter();

    const handleClick = () => {
        router.push('/contacto')
    }

    return (

        <Box data-aos='fade-up' className={ styles['maintenance-footer']}>

            <Typography variant='h3' color='info.dark' sx={{ marginBottom: '1rem' }}>
                ¿Listo para optimizar tus equipos?
            </Typography>

            <Button variant='contained' color='secondary' style={{ padding: '0.625rem 1.25rem', borderRadius: '8px' }} onClick={ handleClick }>
                <Typography variant='h5' color='info.main' textTransform='capitalize'>Solicitar presupuesto</Typography>
            </Button> 

        </Box>

    )
}