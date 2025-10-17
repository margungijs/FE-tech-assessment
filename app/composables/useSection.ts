import { useApi } from "./useApi";
import type { SectionResponse } from "../assets/types/Section";

export const useSection = () =>
    useApi<SectionResponse>("/api/section", (data) => ({
        titleBar: data.meta.titleBar,
        logos: {
            darkBg: data.meta.logos.darkBg.path,
            favicon: data.meta.logos.favicon.path,
            small: data.meta.logos.blockheaderDarkMode.path
        },
        color: data.meta.color,
        socials: {
            facebook: data.meta.social.facebook,
            youtube: data.meta.social.youtube,
            tiktok: data.meta.social.tiktok,
            instagram: data.meta.social.instagram,
            twitter: data.meta.social.twitter,
            draugiem: data.meta.social.draugiem,
        },
        description: data.description,
        lang: data.language,
    }));