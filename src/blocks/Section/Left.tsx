import React from 'react';

import CardMedia from '@mui/material/CardMedia';
import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

import type { ContentProps, TextEntry } from '@/types';

const Left = (props: ContentProps<TextEntry>) => {
    const { contentEntry } = props;

    return (
        <Container maxWidth="xl" sx={{ px: { xs: 2, md: 10 } }}>
            <Grid container direction="row" justifyContent="center" alignItems="center" spacing={4} sx={{ py: 8 }}>
                <Grid xs={12} md={6} sx={{ mx: { xs: 2, md: 0 } }}>
                    <Typography align="left" variant="h2" sx={{ mb: 4 }}>
                        {contentEntry.fields.headline}
                    </Typography>
                    <Typography color="grayText" sx={{ lineHeight: 1.75 }} paragraph align="left" variant="body1">
                        {contentEntry.fields.body}
                    </Typography>
                </Grid>
                <Grid xs={12} sm={10} md={6} sx={{ pl: 15, pt: { xs: 6 } }}>
                    {contentEntry.fields.image?.fields.file.url &&
                        <CardMedia
                            loading="lazy"
                            sx={{ width: "60%", height: 'auto' }}
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
export default Left;