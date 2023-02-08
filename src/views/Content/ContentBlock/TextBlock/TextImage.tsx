import React, { ReactNode } from 'react';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';

import type { ContentProps, TextBlockEntry } from '@/types';

export const TextImage = (props: ContentProps<TextBlockEntry>) => {
    const { contentEntry } = props;

    // image placement
    const imgsx = (textImage: boolean) => {
        return textImage ? { pl: 6, pr: 0, float: 'right' } : { pl: 0, pr: 6, float: 'left' }
    }

    const options = {
        renderNode: {
            [BLOCKS.PARAGRAPH]: (_: object, children: ReactNode) => {
                return (
                    <Typography variant="body1" color="grayText" align='right' sx={{
                        lineHeight: 1.75,
                        textAlign: 'justify',
                        marginBlockStart: 0,
                        marginBlockEnd: 0
                    }}>
                        {children}
                    </Typography>
                )
            }
        }
    };

    return (
        <>
            {contentEntry.fields.image?.fields.file.url &&
                <Box component="img"
                    src={contentEntry.fields.image.fields.file.url}
                    loading="lazy"
                    sx={{
                        objectFit: 'contain',
                        maxWidth: '50%',
                        display: { xs: 'none', sm: 'block' },
                        pb: 2,
                        ...imgsx(contentEntry.fields.layout === "TextImage")
                    }}
                    alt={contentEntry.fields.image.fields.title}
                />
            }
            <Typography align="left" variant="h3" gutterBottom>
                {contentEntry.fields.title}
            </Typography>
            {documentToReactComponents(contentEntry.fields.body, options)}
            {contentEntry.fields.ctaLabel &&
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button variant="text" component={RouterLink} to={contentEntry.fields.ctaSlug} color="secondary" sx={{ mt: 4, mb: 4 }}>
                        {contentEntry.fields.ctaLabel}
                    </Button>
                </Box>
            }
        </>
    )
}
export default TextImage;