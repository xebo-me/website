import React from 'react';

import CardMedia from '@mui/material/CardMedia';
import Container from "@mui/material/Container";
import Stack from '@mui/material/Stack'
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Unstable_Grid2';

import type { ContentProps, HeroBannerEntry } from '@/types';

const HeroBanner = (props: ContentProps<HeroBannerEntry>) => {
    const { contentEntry } = props;

    console.log()

    return (
        <Stack sx={{ py: 12, backgroundColor: 'primary.main' }}>
            <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', alignItems: "center" }} >
                <Grid container direction="row" spacing={2} justifyContent="center" alignItems="center">
                    <Grid sm={6}>
                        <Typography color="background.default" textAlign="center" variant="h1" >
                            {contentEntry.fields.headline}
                        </Typography>
                        <Typography textAlign="center" sx={{ py: 3 }} color="background.default" variant="subtitle2">
                            {contentEntry?.fields.subheader}
                        </Typography>
                    </Grid>
                    <Grid sm={6}>
                        <CardMedia sx={{ borderRadius: 2, maxWidth: '44rem', px: { xs: 2, sm: 4, md: 0 } }}
                            component="img" loading='lazy' image={contentEntry.fields.heroImage?.fields.file.url}
                            alt={contentEntry.fields.heroImage?.fields.title} />
                    </Grid>
                </Grid>
            </Container>
        </Stack>
    )
}
export default HeroBanner;