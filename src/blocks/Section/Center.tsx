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
        <Container maxWidth="lg" sx={{ px: { xs: 4, sm: 6 }, py: 6 }}>
            <Grid container direction="column" justifyContent="center" alignItems="center" spacing={2}>
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
                <Grid xs={12} md={8}>
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
        </Container >
    )
}

export default Center;