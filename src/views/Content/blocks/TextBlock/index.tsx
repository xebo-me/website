import React from 'react';

import TextColumns from './TextColumns';
import TextImage from './TextImage';
import type { ContentProps, TextBlockEntry } from '@/types';

export const TextBlock = (props: ContentProps<TextBlockEntry>) => {
    const { contentEntry } = props;

    // console.log(contentEntry.fields.layout)

    return (
        <>
            {contentEntry.fields.layout === "Columns"
                ? <TextColumns contentEntry={contentEntry} />
                : <TextImage contentEntry={contentEntry} />
            }
        </>
    );
}

export default TextBlock;