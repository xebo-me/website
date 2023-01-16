import React from 'react';

import CardMedia from '@mui/material/CardMedia';
import Container from "@mui/material/Container";
import Stack from '@mui/material/Stack'
import Typography from "@mui/material/Typography";

import type { ContentProps, HeroBannerEntry } from '@/types';

const HeroBanner = (props: ContentProps<HeroBannerEntry>) => {
    const { contentEntry } = props;

    return (
        <Stack sx={{ pt: 12 }}>
            <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', alignItems: "center" }} >
                <Typography textAlign="center" variant="h1" >
                    {contentEntry.fields.headline}
                </Typography>
                <Typography textAlign="center" sx={{ py: 3, maxWidth: '30rem' }} variant="subtitle2">
                    {contentEntry?.fields.subheader}
                </Typography>
                <CardMedia sx={{ borderRadius: 2, maxWidth: '44rem', px: { xs: 2, sm: 4, md: 0 } }}
                    component="img" image={contentEntry.fields.heroImage?.fields.file.url}
                    alt={contentEntry.fields.heroImage?.fields.title} />
            </Container>
        </Stack>
    )
}
export default HeroBanner;