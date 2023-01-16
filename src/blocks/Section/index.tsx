import React from 'react';

import Center from './Center';
import Left from './Left';
import Right from './Right';
import type { ContentProps, TextEntry } from '@/types';

export const Section = (props: ContentProps<TextEntry>) => {
    const { contentEntry } = props;

    switch (contentEntry.fields.textDirection) {
        case "Center":
            return <Center contentEntry={contentEntry} />
        case "Right":
            return <Right contentEntry={contentEntry} />
        case "Left":
            return <Left contentEntry={contentEntry} />
        default:
            return <Center contentEntry={contentEntry} />
    }
}
export default Section;