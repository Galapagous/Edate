import { useStore } from "./useContext";

export function useAuth(){
    const store = useStore()
    return store.userInfo
}