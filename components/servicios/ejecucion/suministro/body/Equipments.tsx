import { FC, useEffect } from 'react';

import { Box, Grid } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { CardEquipmentsSupplies } from './CardEquipment';

import styles from './Body.module.css';


export const EquipmentsSupplies: FC = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

    return (

        <Box className={ styles['equipments-supplies'] }>

            <Grid container spacing={ 2 } data-aos='fade-up'>
              
              <CardEquipmentsSupplies 
                img= '/equipos/separador-bifasico.png'
                alt= 'Separadores bifásicos'
                title= 'Separadores bifásicos'
                subtitle= 'Gas-Petróleo'
              />

              <CardEquipmentsSupplies 
                img= '/equipos/separador-trifasico.png'
                alt= 'Separadores trifásicos'
                title= 'Separadores trifásicos'
                subtitle= 'Gas-Petróleo-Agua'
              />

              <CardEquipmentsSupplies 
                img= '/equipos/desalador.png'
                alt= 'Desaladores'
                title= 'Desaladores'
                subtitle= 'Coalescedores electrostáticos'
              />

              <CardEquipmentsSupplies 
                img= '/equipos/enfriador-industrial.png'
                alt= 'Enfriadores industriales'
                title= 'Enfriadores industriales'
              />

              <CardEquipmentsSupplies 
                img= '/equipos/tanque-almacenamiento-crudo.png'
                alt= 'Tanques de almacenamiento de crudo'
                title= 'Tanques de almacenamiento de crudo'
              />

              <CardEquipmentsSupplies 
                img= '/equipos/valvula-de-control.png'
                alt= 'Válvulas de control'
                title= 'Válvulas de control'
              />

              <CardEquipmentsSupplies 
                img= '/equipos/valvula-de-seguridad.png'
                alt= 'Válvulas de seguridad y alivio'
                title= 'Válvulas de seguridad y alivio'
              />

              <CardEquipmentsSupplies 
                img= '/equipos/compresor.png'
                alt= 'Compresores'
                title= 'Compresores'
                subtitle= 'De desplazamiento positivos, Dinámicos'
              />

              <CardEquipmentsSupplies 
                img= '/equipos/generador-electrico.png'
                alt= 'Generadores eléctricos'
                title= 'Generadores eléctricos'
              />

              <CardEquipmentsSupplies 
                img= '/equipos/motor.png'
                alt= 'Motores'
                title= 'Motores'
                subtitle= 'Eléctricos, De combustión interna'
              />

              <CardEquipmentsSupplies 
                img= '/equipos/bomba.png'
                alt= 'Bombas'
                title= 'Bombas'
                subtitle= 'Centrífugas, Periféricas, Rotatorias, Reciprocantes'
              />

              <CardEquipmentsSupplies 
                img= '/equipos/cabezal-de-rotacion.png'
                alt= 'Cabezales de rotación'
                title= 'Cabezales de rotación'
              />

            </Grid>

        </Box>

    )
}