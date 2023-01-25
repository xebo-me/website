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
        <Container maxWidth="xl" sx={{ display: 'flex', flexDirection: 'row', alignItems: "center", px: 4 }}>
            <Grid container direction="row" spacing={4} sx={{ py: 8 }}  >
                <Grid xs={12} lg={6}  >
                    <Stack sx={{ display: "flex", alignItems: { xs: "center", md: "normal" } }} >
                        <Typography gutterBottom variant="h1" >
                            {contentEntry.fields.headline}
                        </Typography>
                        <Typography variant="subtitle2">
                            {contentEntry?.fields.subheader}
                        </Typography>
                    </Stack>
                </Grid>
                <Grid xs={12} lg={6} sx={{ mx: { sm: 10, md: 0 } }}>
                    <CardMedia
                        loading="lazy"
                        sx={{ width: "100%", height: 'auto' }}
                        component="img"
                        image={contentEntry.fields.heroImage?.fields.file.url}
                        alt={contentEntry.fields.heroImage?.fields.title} />
                </Grid>
            </Grid>
        </Container>

    )
}
export default HeroBanner;