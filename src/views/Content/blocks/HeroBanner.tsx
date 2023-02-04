import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Unstable_Grid2';
import { Link as RouterLink } from "react-router-dom";

import type { ContentProps, HeroBannerEntry } from '@/types';

const HeroBanner = (props: ContentProps<HeroBannerEntry>) => {
    const { contentEntry } = props;

    return (
        <Grid container direction="row" justifyContent="center" alignItems="flex-start">
            <Grid xs={12} sm={6} md={6} >
                <Typography gutterBottom variant="h1" sx={{ textAlign: { xs: 'center', sm: 'left', md: 'left' } }}>
                    {contentEntry.fields.headline}
                </Typography>
                <Typography variant="subtitle2" sx={{ textAlign: { xs: 'center', sm: 'left', md: 'left' } }}>
                    {contentEntry?.fields.subheader}
                </Typography>
                <Stack direction="row" spacing={2} sx={{ pt: 2 }}>
                    {contentEntry.fields.containedButton &&
                        <Button component={RouterLink} to="/registration" color="secondary" variant="contained">
                            {contentEntry.fields.containedButton}
                        </Button>
                    }
                    {contentEntry.fields.outlinedButton &&
                        <Button component={RouterLink} to="/contact" color="secondary" variant="outlined">
                            {contentEntry.fields.outlinedButton}
                        </Button>
                    }
                </Stack>
            </Grid>
            <Grid xs={12} sm={6} md={6}>
                {/* <Box sx={{ display: { xs: 'none', sm: 'flex' }, justifyContent: 'center', alignItems: 'center', pt: 5 }}> */}
                <Box component="img"
                    src={contentEntry.fields.heroImage?.fields.file.url}
                    loading="lazy"
                    sx={{
                        maxWidth: 'calc(50vh - 20%)',
                        height: 'auto',
                        display: { xs: 'none', sm: 'flex' }
                    }}
                    alt={contentEntry.fields.heroImage?.fields.title} />
                {/* </Box> */}
            </Grid>
        </Grid>
    )
}
export default HeroBanner;
