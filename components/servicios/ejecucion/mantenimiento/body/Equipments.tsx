import { FC, useEffect } from 'react';

import { Box, Grid } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { CardEquipmentsMaintenance } from './CardEquipment';

import styles from './Body.module.css';


export const EquipmentsMaintenance: FC = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

    return (

        <Box className={ styles['equipments-maintenance'] }>

            <Grid container spacing={ 2 } data-aos='fade-up'>
              
              <CardEquipmentsMaintenance 
                img= '/equipos/separador-bifasico.png'
                alt= 'Separadores bifásicos'
                title= 'Separadores bifásicos'
                subtitle= 'Gas-Petróleo'
              />

              <CardEquipmentsMaintenance 
                img= '/equipos/separador-trifasico.png'
                alt= 'Separadores trifásicos'
                title= 'Separadores trifásicos'
                subtitle= 'Gas-Petróleo-Agua'
              />

              <CardEquipmentsMaintenance 
                img= '/equipos/desalador.png'
                alt= 'Desaladores'
                title= 'Desaladores'
                subtitle= 'Coalescedores electrostáticos'
              />

              <CardEquipmentsMaintenance 
                img= '/equipos/enfriador-industrial.png'
                alt= 'Enfriadores industriales'
                title= 'Enfriadores industriales'
              />

              <CardEquipmentsMaintenance 
                img= '/equipos/tanque-almacenamiento-crudo.png'
                alt= 'Tanques de almacenamiento de crudo'
                title= 'Tanques de almacenamiento de crudo'
              />

              <CardEquipmentsMaintenance 
                img= '/equipos/valvula-de-control.png'
                alt= 'Válvulas de control'
                title= 'Válvulas de control'
              />

              <CardEquipmentsMaintenance 
                img= '/equipos/valvula-de-seguridad.png'
                alt= 'Válvulas de seguridad y alivio'
                title= 'Válvulas de seguridad y alivio'
              />

              <CardEquipmentsMaintenance 
                img= '/equipos/compresor.png'
                alt= 'Compresores'
                title= 'Compresores'
                subtitle= 'De desplazamiento positivos, Dinámicos'
              />

              <CardEquipmentsMaintenance 
                img= '/equipos/generador-electrico.png'
                alt= 'Generadores eléctricos'
                title= 'Generadores eléctricos'
              />

              <CardEquipmentsMaintenance 
                img= '/equipos/motor.png'
                alt= 'Motores'
                title= 'Motores'
                subtitle= 'Eléctricos, De combustión interna'
              />

              <CardEquipmentsMaintenance 
                img= '/equipos/bomba.png'
                alt= 'Bombas'
                title= 'Bombas'
                subtitle= 'Centrífugas, Periféricas, Rotatorias, Reciprocantes'
              />

              <CardEquipmentsMaintenance 
                img= '/equipos/cabezal-de-rotacion.png'
                alt= 'Cabezales de rotación'
                title= 'Cabezales de rotación'
              />

            </Grid>

        </Box>

    )
}