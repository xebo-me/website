import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";

import type { ContentProps, HeroBannerEntry } from '@/types';

const HeroBanner = (props: ContentProps<HeroBannerEntry>) => {
    const { contentEntry } = props;

    return (
        <>
            <Box component="img"
                src={contentEntry.fields.heroImage?.fields.file.url}
                loading="lazy"
                sx={{
                    float: 'right',
                    // maxWidth: 'calc(50vh - 20%)',
                    maxWidth: '45%',
                    height: 'auto',
                    pl: 4,
                    display: { xs: 'none', sm: 'block' },
                }}
                alt={contentEntry.fields.heroImage?.fields.title} />
            <Typography gutterBottom variant="h1" sx={{ textAlign: { xs: 'center', sm: 'left', md: 'left' } }}>
                {contentEntry.fields.headline}
            </Typography>
            <Typography variant="subtitle2" sx={{ textAlign: { xs: 'center', sm: 'left', md: 'left' }, px: { xs: 2, sm: 0, md: 0 } }}>
                {contentEntry?.fields.subheader}
            </Typography>
            <Stack direction="row" spacing={2} sx={{ pt: 2, justifyContent: { xs: 'center', sm: 'flex-start' }, alignItems: 'center' }}>
                {contentEntry.fields?.primaryCtaLabel && contentEntry.fields?.primaryCtaUrl &&
                    <Button component={RouterLink} to={contentEntry.fields?.primaryCtaUrl} color="secondary" variant="contained">
                        {contentEntry.fields?.primaryCtaLabel}
                    </Button>
                }
                {contentEntry.fields?.secondaryCtaLabel && contentEntry.fields?.secondaryCtaUrl &&
                    <Button component={RouterLink} to={contentEntry.fields?.secondaryCtaUrl} color="secondary" variant="outlined">
                        {contentEntry.fields?.secondaryCtaLabel}
                    </Button>
                }
            </Stack>
        </>
    )
}
export default HeroBanner;
