import React from 'react';

import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

import type { ContentProps, TextEntry } from '@/types';

const Right = (props: ContentProps<TextEntry>) => {
    const { contentEntry } = props;


    return (
        <Container maxWidth="lg" sx={{ py: 6 }}>
            <Grid container direction="column" justifyContent="center" alignItems="center" spacing={2} sx={{ px: 4 }}>
                <Grid xs={12} md={8}>
                    <Typography align="left" variant="h3" sx={{ py: 4, display: { xs: 'flex', md: 'none'} }}>
                        {contentEntry.fields.headline}
                    </Typography>
                    <Box sx={{ justifyContent: 'left', alignItems: 'left' }}>
                        {contentEntry.fields.image?.fields.file.url &&
                            <CardMedia
                                loading="lazy"
                            sx={{ objectFit: 'contain', maxWidth: '50%', float: 'left', shapeOutside: 'padding-box' }}
                                component="img"
                                src={contentEntry.fields.image.fields.file.url}
                                alt={contentEntry.fields.image.fields.title}
                            />
                        }
                        <Typography variant="h3" sx={{ py: 4, display: { xs: 'none', md: 'flex' }, textAlign: {xs: 'left', md: 'right'} }}>
                            {contentEntry.fields.headline}
                        </Typography>
                        <Typography color="grayText" align='right' sx={{ lineHeight: 1.75 }} variant="body1">
                            {contentEntry.fields.body}
                        </Typography>
                    </Box>
                </Grid>
            </Grid >
        </Container>
    )
}
export default Right;