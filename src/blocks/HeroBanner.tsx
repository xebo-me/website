import React from 'react';

// import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Container from "@mui/material/Container";
import Stack from '@mui/material/Stack'
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Unstable_Grid2';

import type { ContentProps, HeroBannerEntry } from '@/types';

const HeroBanner = (props: ContentProps<HeroBannerEntry>) => {
    const { contentEntry } = props;

    return (
        <Stack sx={{ py: 12 }}>
            <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', alignItems: "center" }} >
                <Grid container direction="row" spacing={2} >
                    <Grid justifyContent="space-between" container xs={12} sm={6}>
                        <Stack>
                            <Typography  gutterBottom variant="h1" >
                                {contentEntry.fields.headline}
                            </Typography>
                            <Typography variant="subtitle2">
                                {contentEntry?.fields.subheader}
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid xs={12} sm={6}>
                        <CardMedia
                            component="img" loading='lazy' image={contentEntry.fields.heroImage?.fields.file.url}
                            alt={contentEntry.fields.heroImage?.fields.title} />
                    </Grid>
                </Grid>
            </Container>
        </Stack>
    )
}
export default HeroBanner;