import { FC, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { Box, Button, Typography } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

import styles from './Body.module.css';

export const ClientsAboutUs: FC = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    let router = useRouter();

    const handleClick = () => {
        router.push('/contacto')
    }

    return (

        <Box data-aos='fade-up' className={ styles['about-us-clients'] }>

            <Box sx={{ marginBottom: '2rem' }}>
                <Typography variant='h3' color='info.dark' fontWeight={ 900 } sx={{ fontSize: '2.5rem', marginBottom: '1.25rem' }}>
                    Nuestros clientes  
                </Typography>
                <Typography variant='body2' color='info.dark'>
                    Gracias a nuestro personal altamente capacitado, a nuestros años de experiencia y a nuestra maquinaria y herramientas de alta tecnología, a lo largo de nuestra trayectoria hemos tenido la oportunidad de trabajar y mejorar los proyectos de grandes empresas en todo el Oriente del país, siendo algunas:    
                </Typography>
            </Box>

            <Box className={ styles['about-us-clients-images'] }>

                <Box sx={{ marginLeft: '3rem' }}>
                    <Image 
                        src='/aboutUs/logo-pdvsa.png'
                        alt='Logo de PDVSA'
                        width={ 210 }
                        height={ 60 }
                    />
                </Box>

                <Box sx={{ marginLeft: '3rem' }}>
                    <Image 
                        src='/aboutUs/logo-petrosucre.png'
                        alt='Logo de PDVSA Petrosucre'
                        width={ 210 }
                        height={ 60 }
                    />
                </Box>

                <Box sx={{ marginLeft: '3rem' }}>
                    <Image 
                        src='/aboutUs/logo-venequip.png'
                        alt='Logo de Venequip'
                        width={ 220 }
                        height={ 150 }
                    />
                </Box>
                
            </Box>

            <Typography variant='h4' color='info.dark' sx={{ marginBottom: '1rem' }}>
                ¿Listo para convertirte en nuestro nuevo cliente?
            </Typography>

            <Button variant='contained' color='secondary' style={{ padding: '0.625rem 1.25rem', borderRadius: '8px' }} onClick={ handleClick }>
                <Typography variant='h5' color='info.main' textTransform='capitalize'>Solicitar presupuesto</Typography>
            </Button>  

        </Box>

    )
}
