import { create } from "zustand";

export const useMenuStore = create((set)=>({
    menuSet: false,
    setMenuSet: (bool)=>{set(()=>({menuSet:bool}))}
}))