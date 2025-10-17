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
        lang: data.language,
    }));