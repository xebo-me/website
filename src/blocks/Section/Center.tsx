import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Container from "@mui/material/Container";
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Unstable_Grid2";
import { useNavigate } from 'react-router-dom';

import type { ContentProps, TextEntry } from '@/types';

const Center = (props: ContentProps<TextEntry>) => {
    const { contentEntry } = props;

    const navigate = useNavigate();

    return (
        <Box sx={{ mt: 8, mb: 10 }}>
            <Container maxWidth="lg" sx={{ px: { xs: 4, sm: 6 } }}>
                <Grid container direction="row-reverse" justifyContent="space-around" alignItems="center" spacing={2}>
                    <Grid xs={12} md={12}>
                        {contentEntry.fields.headline &&
                            <Typography align="center" variant="h2" >
                                {contentEntry.fields.headline}
                            </Typography>
                        }
                    </Grid>
                    <Grid xs={12} md={9}>
                        {contentEntry.fields.image?.fields.file.url &&
                            <CardMedia
                                sx={{ width: '100%', height: 'auto' }}
                                component="img"
                                src={contentEntry.fields.image.fields.file.url}
                                alt={contentEntry.fields.image.fields.title}
                            />
                        }
                    </Grid>
                    <Grid xs={12} md={12}>
                        <Container maxWidth="md">
                            <Grid container direction="row" justifyContent="center" alignItems="flex-start" spacing={6} sx={{ px: { xs: 4, md: 0 } }}>
                                < Grid xs={12} md={4} >
                                    <Stack direction="column" >
                                        <Typography sx={{ lineHeight: 1.75, fontWeight: 900 }} variant="body1" >
                                            {contentEntry.fields.leftColumnTitle}
                                        </Typography>
                                        <Typography color="grayText" sx={{ lineHeight: 1.75 }} paragraph variant="body1" >
                                            {contentEntry.fields.leftColumn}
                                        </Typography>
                                        {contentEntry.fields.ctaLabel &&
                                            <Button onClick={() => navigate(contentEntry.fields.ctaSlug)} variant="contained" sx={{ mt: 4, mb: 4 }}>
                                                {contentEntry.fields.ctaLabel}
                                            </Button>
                                        }
                                    </Stack>
                                </Grid>
                                <Grid xs={12} md={4}>
                                    <Stack direction="column">
                                        <Typography sx={{ lineHeight: 1.75, fontWeight: 900 }} variant="body1" >
                                            {contentEntry.fields.centerColumnTitle}
                                        </Typography>
                                        <Typography color="grayText" sx={{ lineHeight: 1.75 }} paragraph variant="body1" >
                                            {contentEntry.fields.centerColumn}
                                        </Typography>
                                        {contentEntry.fields.ctaLabel &&
                                            <Button onClick={() => navigate(contentEntry.fields.ctaSlug)} variant="contained" sx={{ mt: 4, mb: 4 }}>
                                                {contentEntry.fields.ctaLabel}
                                            </Button>
                                        }
                                    </Stack>
                                </Grid>
                                <Grid xs={12} md={4}>
                                    <Stack direction="column">
                                        <Typography sx={{ lineHeight: 1.75, fontWeight: 900 }} variant="body1" >
                                            {contentEntry.fields.rightColumnTitle}
                                        </Typography>
                                        <Typography color="grayText" sx={{ lineHeight: 1.75 }} paragraph variant="body1" >
                                            {contentEntry.fields.rightColumn}
                                        </Typography>
                                        {contentEntry.fields.ctaLabel &&
                                            <Button onClick={() => navigate(contentEntry.fields.ctaSlug)} variant="contained" sx={{ mt: 4, mb: 4 }}>
                                                {contentEntry.fields.ctaLabel}
                                            </Button>
                                        }
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Container>
                    </Grid>
                </Grid>
            </Container >
        </Box>
    )

}

export default Center;