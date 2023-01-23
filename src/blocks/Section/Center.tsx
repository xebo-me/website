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
        <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', alignItems: "center", my: { xs: 4, md: 8 }, pb: 5 }} >
            <Grid container direction="column" justifyContent="center" alignItems="center" spacing={2}>
                <Grid xs={12} sm={10} md={10} sx={{ my: 2 }}>
                    {contentEntry.fields.headline &&
                        <Typography align="center" variant="h2" sx={{ pt: { xs: 2, md: 4 } }}>
                            {contentEntry.fields.headline}
                        </Typography>
                    }
                </Grid>
                <Grid xs={12} sm={12} md={10} lg={10} sx={{ mt: { xs: 2, md: 4 }, p: { xs: 2 } }}>
                    {contentEntry.fields.image?.fields.file.url &&
                        <CardMedia
                            sx={{ width: '100%', height: 'auto' }}
                            component="img"
                            src={contentEntry.fields.image.fields.file.url}
                            alt={contentEntry.fields.image.fields.title}
                        />
                    }
                </Grid>
                <Grid xs={12} sm={12} md={10} lg={12} sx={{ p: { xs: 2, sm: 4 } }}>
                    <Stack justifyContent="center" direction="column" alignItems="center" spacing={2} sx={{ pb: { xs: 2, md: 4 }, color: 'GrayText' }}>
                        <Typography color="grayText" sx={{ lineHeight: 1.75 }} paragraph align="center" variant="body1" >
                            {contentEntry.fields.body}
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
    )
}

export default Center;