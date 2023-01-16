import React, { lazy } from 'react';

import { useQuery } from "@tanstack/react-query";
import { Entry } from 'contentful';
import { useRoutes, useParams } from 'react-router-dom';

import Renderer from '@/blocks/Renderer';
import { fetchContent } from "@/contentful";
import { AnyEntry } from '@/types';

const NotFound = lazy(() => import('@/views/NotFound'));

type Router = {
    path: string;
    element: React.ReactElement;
}

export const Routes = () => {
    const routes: Router[] = [
        { path: '/', element: <Content /> },
        { path: '/:slug', element: <Content /> },
        { path: '/:type/:slug', element: <Content /> },
    ]
    return useRoutes(routes);
}

export default Routes;

type Response = {
    data?: { items: Entry<AnyEntry>[] }
}

const Content = () => {
    let { type, slug, } = useParams();
    [type, slug] = [type || "assembly", slug || "home"];

    const res: Response = useQuery(['content', type, slug], fetchContent);
    if (res.data?.items.length === 0) {
        return <NotFound />
    }
    return <Renderer contentEntry={res.data?.items[0] as Entry<AnyEntry>} />
}
