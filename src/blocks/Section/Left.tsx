import React from 'react';

import CardMedia from '@mui/material/CardMedia';
import Container from "@mui/material/Container";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import type { ContentProps, TextEntry } from '@/types';

const Left = (props: ContentProps<TextEntry>) => {
    const { contentEntry } = props;

    return (
        <Container maxWidth="xl" sx={{ display: 'flex', flexDirection: 'row', alignItems: "center", my: 8, py: 8 }} >
            <Grid container direction="row" spacing={4} sx={{ px: 10 }}>
                <Grid item xs={12} sm={6} md={6}>
                    <Typography align="left" variant="h2" sx={{ pb: 5 }}>
                        {contentEntry.fields.headline}
                    </Typography>
                    <Typography color="grayText" sx={{ lineHeight: 1.75 }} paragraph align="left" variant="body1" >
                        {contentEntry.fields.body}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={6} sx={{ px: 10 }}>
                    {contentEntry.fields.image?.fields.file.url &&
                        <CardMedia
                            loading="lazy"
                            sx={{ width: "100%", height: 'auto' }}
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