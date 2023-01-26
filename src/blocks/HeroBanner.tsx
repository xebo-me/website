import React from 'react';

// import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Container from "@mui/material/Container";
import Stack from '@mui/material/Stack'
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Unstable_Grid2';

import type { ContentProps, HeroBannerEntry } from '@/types';

const HeroBanner = (props: ContentProps<HeroBannerEntry>) => {
    const { contentEntry } = props;

    return (
        <Container maxWidth="lg" sx={{ py: 6, px: 2 }}>
            <Grid container direction="row" justifyContent="center" alignItems="flex-start" >
                <Grid xs={12} sm={12} md={6} sx={{ px: { xs: 2 }, py: 2 }}>
                    <Stack direction="column" justifyContent="center" alignItems="flex-start">
                        <Typography gutterBottom variant="h1" sx={{ textAlign: { xs: 'center', sm: 'left', md: 'left' } }}>
                            {contentEntry.fields.headline}
                        </Typography>
                        <Typography variant="subtitle2" sx={{ textAlign: { xs: 'center', sm: 'left', md: 'left' } }}>
                            {contentEntry?.fields.subheader}
                        </Typography>
                    </Stack>
                </Grid>
                <Grid xs={12} sm={12} md={6}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                        <CardMedia
                            loading="lazy"
                            sx={{ objectFit: 'contain', maxWidth: '80%', width: 'calc(80vh / 50%)', height: 'auto' }}
                            component="img"
                            image={contentEntry.fields.heroImage?.fields.file.url}
                            alt={contentEntry.fields.heroImage?.fields.title} />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}
export default HeroBanner;