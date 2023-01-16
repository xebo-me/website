import React from 'react';

import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ReactMarkdown from 'react-markdown';

import Markdown from '@/components/Markdown';
import type { ContentProps, TextEntry } from '@/types';

const Left = (props: ContentProps<TextEntry>) => {
    const { contentEntry } = props;

    return (
        <Grid container direction="row" spacing={2} sx={{ py: 6 }}>
            <Grid item xs={12} sm={6} >
                <Typography variant="h2" >
                    {contentEntry.fields.headline}
                </Typography>
                <ReactMarkdown components={Markdown} >
                    {contentEntry.fields.body}
                </ReactMarkdown>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
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
    )
}
export default Left;