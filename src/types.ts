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
};

export type TextEntry = {
    ctaLabel: string;
    ctaSlug: string;
    body: string;
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
