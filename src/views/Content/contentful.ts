import { QueryFunctionContext } from "@tanstack/react-query";
import { EntryCollection, createClient, ContentfulClientApi } from 'contentful';
import { Entry } from 'contentful';

import { AnyEntry } from '@/types';

const client: ContentfulClientApi = createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACE_I,
    environment: import.meta.env.VITE_ENVIRONMENT,
    accessToken: import.meta.env.VITE_DELIVERY_TOKEN,
    host: 'https://cdn.contentful.com',
    removeUnresolved: true
})

export type Response = {
    data?: { items: Entry<AnyEntry>[] }
}

export const fetchContent = async ({ queryKey }: QueryFunctionContext): Promise<EntryCollection<unknown>> => {
    const [, type, slug, include] = queryKey;

    return client.getEntries({
        // eslint-disable-next-line camelcase
        content_type: type,
        'fields.slug': slug,
        include: include || 3
    });
};