import React from 'react';

import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

import type { ContentProps, TextEntry } from '@/types';

const Right = (props: ContentProps<TextEntry>) => {
    const { contentEntry } = props;

    console.log("MOBILE", contentEntry.fields.image?.fields.file)
    return (
        <Container maxWidth="xl">
            <Grid container direction="row-reverse" justifyContent="center" alignItems="center" spacing={4} sx={{ px: 4, py: 10 }}>
                <Grid xs={12} md={6}>
                    <Typography align="left" variant="h2" sx={{ mb: 4 }}>
                        {contentEntry.fields.headline}
                    </Typography>
                    <Typography color="grayText" sx={{ lineHeight: 1.75 }} paragraph align="left" variant="body1">
                        {contentEntry.fields.body}
                    </Typography>
                </Grid>
                <Grid xs={12} md={6}>
                    <Box display="flex" justifyContent="center" alignItems="center">
                        {contentEntry.fields.image?.fields.file.url &&
                            <CardMedia
                                loading="lazy"
                                sx={{ objectFit: 'contain', maxWidth: '50%', width: 'calc(80vh / 50%)', height: 'auto' }}
                                component="img"
                                src={contentEntry.fields.image.fields.file.url}
                                alt={contentEntry.fields.image.fields.title}
                            />
                        }
                    </Box>
                </Grid>
            </Grid >
        </Container >
    )
}
export default Right;