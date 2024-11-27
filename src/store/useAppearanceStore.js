import {create} from "zustand";
import {createJSONStorage, persist} from "zustand/middleware";

let useAppearanceStore = (set, get) => ({
    isDark: true,

    toggleTheme() {
        const isDark = get().isDark;

        set({
            isDark: !isDark
        })
    }
})


useAppearanceStore = persist(useAppearanceStore, {
    name: 'APP_APPEARANCE',
    storage: createJSONStorage(() => localStorage)
})


export default create(useAppearanceStore);
