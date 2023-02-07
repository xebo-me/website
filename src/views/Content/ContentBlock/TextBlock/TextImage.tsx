import React from 'react';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import type { ContentProps, TextBlockEntry } from '@/types';

export const TextImage = (props: ContentProps<TextBlockEntry>) => {
    const { contentEntry } = props;

    let imgsx;

    // switch image placement
    if (contentEntry.fields.layout === "ImageText") {
        imgsx = {
            pl: 0,
            pr: 6,
            float: 'left'
        }
    } else {
        imgsx = {
            pl: 4,
            pr: 0,
            float: 'right',
        }
    }

    return (
        <>
            {contentEntry.fields.image?.fields.file.url &&
                <Box component="img"
                    src={contentEntry.fields.image.fields.file.url}
                    loading="lazy"
                    sx={{ objectFit: 'contain', maxWidth: '50%', float: imgsx.float, pl: imgsx.pl, pr: imgsx.pr, pb: 2 }}
                    alt={contentEntry.fields.image.fields.title}
                />
            }
            <Typography align="left" variant="h3">
                {contentEntry.fields.title}
            </Typography>
            <Typography variant="body1" component="div" color="grayText" align='right' sx={{
                lineHeight: 1.75,
                textAlign: 'justify'
            }}>
                {documentToReactComponents(contentEntry.fields.body)}
            </Typography>
        </>
    )
}
export default TextImage;