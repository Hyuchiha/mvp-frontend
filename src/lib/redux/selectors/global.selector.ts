import { AppState } from "@/lib/redux/models/appState";

export const selectGlobalProgress = (state: AppState) => state.global.showLoader;