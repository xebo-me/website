import { Asset, Entry } from "contentful";

export type MenuEntry = {
    blocks: Entry<MenuItemEntry>[]
};

export type MenuItemEntry = {
    name: string;
    slug: string;
}

export type HeroBannerEntry = {
    headline: string;
    subheader: string;
    heroImage: Asset;
    containedButton: string;
    outlinedButton: string;
};

export type Column = {
    name: string;
    columnImage: Asset;
    leftColumnTitle: string;
    leftColumn: string;
    centerColumnTitle: string;
    centerColumn: string;
    rightColumnTitle: string;
    rightColumn: string;
}

export type TextEntry = {
    ctaLabel: string;
    ctaSlug: string;
    body: string;
    column: Entry<Column>;
    image: Asset;
    headline: string;
    textDirection: string;
};

export type AssemblyEntry = {
    blocks: Entry<HeroBannerEntry | TextEntry>[]
};

export type AnyEntry = AssemblyEntry | HeroBannerEntry | TextEntry;

export type ContentProps<T> = {
    contentEntry: Entry<T>;
    detail?: boolean;
}
