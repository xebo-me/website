import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Container from "@mui/material/Container";
import Stack from '@mui/material/Stack'
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Unstable_Grid2';
import { useNavigate } from "react-router-dom";

import type { ContentProps, HeroBannerEntry } from '@/types';

const HeroBanner = (props: ContentProps<HeroBannerEntry>) => {
    const { contentEntry } = props;
    const navigate = useNavigate();

    return (
        <Container maxWidth="lg" sx={{ pt: 4, pb: {xs: 8, md: 12}, px: 2 }}>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid xs={12} sm={6} md={6} >
                    <Stack direction="column" justifyContent="center" alignItems="flwx-start">
                        <Typography gutterBottom variant="h1" sx={{ textAlign: { xs: 'center', sm: 'left', md: 'left' } }}>
                            {contentEntry.fields.headline}
                        </Typography>
                        <Typography variant="subtitle2" sx={{ textAlign: { xs: 'center', sm: 'left', md: 'left' } }}>
                            {contentEntry?.fields.subheader}
                        </Typography>
                    </Stack>
                    <Box sx={{ display: 'flex', justifyContent: { xs: 'center', sm:'left', md: 'left' }, alignItems: 'center', py: 2 }}>
                        <Button color="secondary" variant="contained" onClick={() => navigate('/registration')}>Request demo</Button>
                    </Box>
                </Grid>
                <Grid xs={12} sm={6} md={6}>
                    <Box sx={{ display: {xs: 'none', sm: 'flex'}, justifyContent: 'center', alignItems: 'center', }}>
                        <CardMedia
                            loading="lazy"
                            sx={{ maxWidth: 'calc(50vh - 20%)', height: 'auto' }}
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

// 