import { FC } from 'react';
import { useRouter } from 'next/router';

import { Card, CardActionArea, CardContent, CardMedia, Typography, Grid } from '@mui/material';

import styles from './Gallery.module.css';

interface Props {
    img: string;
    alt: string;
    year: string;
    title: string;
}

export const CardGallery: FC<Props> = ({ img, alt, year, title }) => {

    const router = useRouter();

    const handleClick = (): void => {
        router.push(`/proyectos/${ title.toLowerCase() }`)
    }

    return (
        
        <Grid item sm={ 12 } lg={ 6 }>

            <Card className={ styles['gallery-home-project'] } onClick={ handleClick }>
                <CardActionArea sx={{ position: 'relative', width: '100%', height: '100%' }}>

                    <CardMedia
                        component='img'
                        image={`/projects/${ img }`}
                        alt={ alt }
                        sx={{ width: '100%', height: '100%', filter:' brightness(.6)' }}
                    />

                    <CardContent className={ styles['gallery-home-project-info'] }>
                        <Typography variant='body1' color="info.main" sx={{ textShadow: '2px 2px 1px black' }}>{ year }</Typography>
                        <Typography variant='h3' color="info.main" sx={{ textShadow: '2px 2px 1px black' }}>{ title }</Typography>
                    </CardContent>

                </CardActionArea>
            </Card>

        </Grid>

    )
}
