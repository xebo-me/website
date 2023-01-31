import React from 'react';

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
        <>
            <Container maxWidth="lg" sx={{ px: { xs: 4, sm: 6 } }}>
                <Grid container direction="column" justifyContent="space-around" alignItems="center" spacing={2}>
                    <Grid xs={12} md={10}>
                        {contentEntry.fields.headline &&
                            <Typography align="center" variant="h2" >
                                {contentEntry.fields.headline}
                            </Typography>
                        }
                    </Grid>
                    <Grid xs={12} md={8}>
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
                        <Grid container direction="row" justifyContent="center" alignItems="flex-start" >
                            <Grid xs={12} md={6}>
                                <Typography color="black" sx={{ lineHeight: 1.75, fontWeight: 900 }} paragraph align="left" variant="body1" >
                                    Issuer
                                </Typography>
                                <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} sx={{ color: 'GrayText' }}>
                                    <Typography color="grayText" sx={{ lineHeight: 1.75 }} paragraph align="left" variant="body1" >
                                        The Xebo Network is a security-first identity system for flexible authentication, authorization, federation, and user management for mobile apps, web apps, and any cloud service.
                                        The Xebo Network is a security-first identity system for flexible authentication, authorization, federation, and user management for mobile apps, web apps, and any cloud service.
                                    </Typography>
                                    {contentEntry.fields.ctaLabel &&
                                        <Button onClick={() => navigate(contentEntry.fields.ctaSlug)} variant="contained" sx={{ mt: 4, mb: 4 }}>
                                            {contentEntry.fields.ctaLabel}
                                        </Button>
                                    }
                                </Stack>
                            </Grid>
                            {/* 4 grid section */}
                            <Grid xs={12} md={6}>
                                <Container maxWidth="sm" >
                                    <Grid container direction="row" justifyContent="center" alignItems="flex-start" spacing={4}>
                                        <Grid xs={12} md={6}>
                                            <Typography sx={{ lineHeight: 1.75, fontWeight: 900 }} paragraph align="left" variant="body1" >
                                                Box 1
                                            </Typography>
                                            <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} sx={{ pb: { xs: 2, md: 4 }, color: 'GrayText' }}>
                                                <Typography color="grayText" sx={{ lineHeight: 1.75 }} paragraph align="left" variant="body1" >
                                                    Authenticate, authorize, federate, and manage identities in a secure distributed network infrastructure.
                                                </Typography>
                                            </Stack>
                                        </Grid>
                                        <Grid xs={12} md={6}>
                                            <Typography sx={{ lineHeight: 1.75, fontWeight: 900 }} paragraph align="left" variant="body1" >
                                                Box 2
                                            </Typography>
                                            <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} sx={{ pb: { xs: 2, md: 4 }, color: 'GrayText' }}>
                                                <Typography color="grayText" sx={{ lineHeight: 1.75 }} paragraph align="left" variant="body1" >
                                                    Authenticate, authorize, federate, and manage identities in a secure distributed network infrastructure.
                                                </Typography>
                                            </Stack>
                                        </Grid>
                                        <Grid xs={12} md={6}>
                                            <Typography sx={{ lineHeight: 1.75, fontWeight: 900 }} paragraph align="left" variant="body1" >
                                                Box 3
                                            </Typography>
                                            <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} sx={{ pb: { xs: 2, md: 4 }, color: 'GrayText' }}>
                                                <Typography color="grayText" sx={{ lineHeight: 1.75 }} paragraph align="left" variant="body1" >
                                                    Authenticate, authorize, federate, and manage identities in a secure distributed network infrastructure.
                                                </Typography>

                                            </Stack>
                                        </Grid>
                                        <Grid xs={12} md={6}>
                                            <Typography sx={{ lineHeight: 1.75, fontWeight: 900 }} paragraph align="left" variant="body1" >
                                                Box 4
                                            </Typography>
                                            <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} sx={{ pb: { xs: 2, md: 4 }, color: 'GrayText' }}>
                                                <Typography color="grayText" sx={{ lineHeight: 1.75 }} paragraph align="left" variant="body1" >
                                                    Authenticate, authorize, federate, and manage identities in a secure distributed network infrastructure.
                                                </Typography>

                                            </Stack>
                                        </Grid>
                                    </Grid>
                                </Container>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container >
        </>
    )

}

export default Center;