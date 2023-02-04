import React from 'react';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Button from '@mui/material/Button';
import Box from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';

import type { ContentProps, TextBlockEntry } from '@/types';

export const TextColumns = (props: ContentProps<TextBlockEntry>) => {
    const { contentEntry } = props;

    return (
        <>
            {contentEntry.fields?.title &&
                <Typography align="center" variant="h2" >
                    {contentEntry.fields?.title}
                </Typography>
            }
            {contentEntry.fields.image?.fields.file.url &&
                <Box component="img"
                    sx={{ maxWidth: '20%', height: 'auto' }}
                    src={contentEntry.fields.image.fields.file.url}
                    alt={contentEntry.fields.image.fields.title}
                />
            }
            {contentEntry.fields.body &&
                <Typography component="div" variant="body1" color="grayText" sx={{
                    lineHeight: 1.5,
                    textAlign: 'justify',
                    columnCount: { xs: 1, sm: 2, lg: 3 },
                    columnGap: 6,
                    //columnRule: '1px solid lightgrey'
                }}>
                    {documentToReactComponents(contentEntry.fields.body)}
                </Typography>
            }
            {contentEntry.fields.ctaLabel &&
                <Button variant="contained" component={RouterLink} to={contentEntry.fields.ctaSlug} sx={{ mt: 4, mb: 4 }}>
                    {contentEntry.fields.ctaLabel}
                </Button>
            }
        </>
    )
}

export default TextColumns;