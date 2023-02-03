import React from 'react';

import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

import type { ContentProps, TextEntry } from '@/types';

export const TextLeft = (props: ContentProps<TextEntry>) => {
    const { contentEntry } = props;

    return (
        <Container maxWidth="lg" sx={{ py: 6 }}>
            <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2} sx={{ px: 4 }}>
                <Grid xs={12} md={8}>
                    <Typography variant="h3" sx={{ py: 4, display: { xs: 'flex', md: 'none' } }}>
                        {contentEntry.fields.headline}
                    </Typography>
                    <Box sx={{ justifyContent: 'left', alignItems: 'left' }}>
                        {contentEntry.fields.image?.fields.file.url &&
                            <CardMedia
                                loading="lazy"
                                sx={{ maxWidth: '50%', float: 'right', pt: { xs: 1, md: 5 }, p: 2, py: 2 }}
                                component="img"
                                src={contentEntry.fields.image.fields.file.url}
                                alt={contentEntry.fields.image.fields.title}
                            />
                        }

                    </Box>
                    <Typography variant="h3" sx={{ py: 4, display: { xs: 'none', md: 'flex' }, textAlign: { xs: 'right', md: 'left' } }}>
                        {contentEntry.fields.headline}
                    </Typography>
                    <Typography color="grayText" sx={{ lineHeight: 1.75, textAlign: 'justify', display: 'inline' }} variant="body1">
                        {contentEntry.fields.body}
                    </Typography>
                </Grid>
            </Grid >
        </Container>
    )
}
export default TextLeft;