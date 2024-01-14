import { FC, useEffect } from 'react';

import { Box, Grid } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { CardEquipmentsInstallation } from './CardEquipment';

import styles from './Body.module.css';


export const EquipmentsInstallation: FC = () => {

  useEffect(() => {
      AOS.init({ duration: 2000 })
  }, [])

    return (

        <Box className={ styles['equipments-installation'] }>

            <Grid container spacing={ 2 } data-aos='fade-up'>
              
              <CardEquipmentsInstallation 
                img= '/equipos/separador-bifasico.png'
                alt= 'Separadores bifásicos'
                title= 'Separadores bifásicos'
                subtitle= 'Gas-Petróleo'
              />

              <CardEquipmentsInstallation 
                img= '/equipos/separador-trifasico.png'
                alt= 'Separadores trifásicos'
                title= 'Separadores trifásicos'
                subtitle= 'Gas-Petróleo-Agua'
              />

              <CardEquipmentsInstallation 
                img= '/equipos/desalador.png'
                alt= 'Desaladores'
                title= 'Desaladores'
                subtitle= 'Coalescedores electrostáticos'
              />

              <CardEquipmentsInstallation 
                img= '/equipos/enfriador-industrial.png'
                alt= 'Enfriadores industriales'
                title= 'Enfriadores industriales'
              />

              <CardEquipmentsInstallation 
                img= '/equipos/tanque-almacenamiento-crudo.png'
                alt= 'Tanques de almacenamiento de crudo'
                title= 'Tanques de almacenamiento de crudo'
              />

              <CardEquipmentsInstallation 
                img= '/equipos/valvula-de-control.png'
                alt= 'Válvulas de control'
                title= 'Válvulas de control'
              />

              <CardEquipmentsInstallation 
                img= '/equipos/valvula-de-seguridad.png'
                alt= 'Válvulas de seguridad y alivio'
                title= 'Válvulas de seguridad y alivio'
              />

              <CardEquipmentsInstallation 
                img= '/equipos/compresor.png'
                alt= 'Compresores'
                title= 'Compresores'
                subtitle= 'De desplazamiento positivos, Dinámicos'
              />

              <CardEquipmentsInstallation 
                img= '/equipos/generador-electrico.png'
                alt= 'Generadores eléctricos'
                title= 'Generadores eléctricos'
              />

              <CardEquipmentsInstallation 
                img= '/equipos/motor.png'
                alt= 'Motores'
                title= 'Motores'
                subtitle= 'Eléctricos, De combustión interna'
              />

              <CardEquipmentsInstallation 
                img= '/equipos/bomba.png'
                alt= 'Bombas'
                title= 'Bombas'
                subtitle= 'Centrífugas, Periféricas, Rotatorias, Reciprocantes'
              />

              <CardEquipmentsInstallation 
                img= '/equipos/cabezal-de-rotacion.png'
                alt= 'Cabezales de rotación'
                title= 'Cabezales de rotación'
              />

            </Grid>

        </Box>

    )
}