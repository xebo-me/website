import React from 'react';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import type { ContentProps, TextEntry } from '@/types';

export const TextRight = (props: ContentProps<TextEntry>) => {
    const { contentEntry } = props;

    return (
        <>
            <Typography align="left" variant="h3" sx={{ py: 4, display: { xs: 'flex', md: 'none' } }}>
                {contentEntry.fields.title}
            </Typography>
            <Box sx={{ justifyContent: 'left', alignItems: 'left' }}>
                {contentEntry.fields.image?.fields.file.url &&
                    <Box component="img"
                        src={contentEntry.fields.image.fields.file.url}
                        loading="lazy"
                        sx={{ objectFit: 'contain', maxWidth: '50%', float: 'left', mt: { xs: 1, md: 5 }, p: 2, py: 2 }}
                        alt={contentEntry.fields.image.fields.title}
                    />
                }
                <Typography variant="body1" component="div" color="grayText" align='right' sx={{
                    lineHeight: 1.75
                }}>
                    {documentToReactComponents(contentEntry.fields.body)}
                </Typography>
            </Box>
        </>

    )
}
export default TextRight;