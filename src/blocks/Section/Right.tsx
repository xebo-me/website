import React from 'react';

import CardMedia from '@mui/material/CardMedia';
import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

import type { ContentProps, TextEntry } from '@/types';

const Right = (props: ContentProps<TextEntry>) => {
    const { contentEntry } = props;

    return (
        <Container maxWidth="xl" >
            <Grid container direction="row-reverse" justifyContent="center" alignItems="center" spacing={4} sx={{ py: 8 }}>
                <Grid xs={12} md={6} sx={{ mx: { xs: 2, md: 0 }, px: 4 }}>
                    <Typography align="left" variant="h2" sx={{ mb: 4 }}>
                        {contentEntry.fields.headline}
                    </Typography>
                    <Typography color="grayText" sx={{ lineHeight: 1.75 }} paragraph align="left" variant="body1">
                        {contentEntry.fields.body}
                    </Typography>
                </Grid>
                <Grid xs={12} sm={10} md={6} sx={{ pl: { xs: 22, lg: 45 }, pt: { xs: 10 } }}>
                    {contentEntry.fields.image?.fields.file.url &&
                        <CardMedia
                            loading="lazy"
                            sx={{ width: "50%", height: 'auto' }}
                            component="img"
                            src={contentEntry.fields.image.fields.file.url}
                            alt={contentEntry.fields.image.fields.title}
                        />
                    }
                </Grid>
            </Grid >
        </Container>
    )
}
export default Right;