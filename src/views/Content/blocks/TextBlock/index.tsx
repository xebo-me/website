import React from 'react';

import TextCenter from './TextCenter';
import TextLeft from './TextLeft';
import TextRight from './TextRight';
import type { ContentProps, TextEntry } from '@/types';

export const TextBlock = (props: ContentProps<TextEntry>) => {
    const { contentEntry } = props;

    switch (contentEntry.fields.layout) {
        case "Right":
            return <TextRight contentEntry={contentEntry} />
        case "Left":
            return <TextLeft contentEntry={contentEntry} />
        default:
            return <TextCenter contentEntry={contentEntry} />
    }
}

export default TextBlock;