import { create } from "zustand";
import { devtools } from "zustand/middleware";

type useStoreProps = {
    values: {
        amount: number,
        term: number,
        rate: number,
        type: string
    },
    emptys: {
        amount: boolean,
        term: boolean,
        rate: boolean,
        type: boolean
    },
    validated: boolean,
    setProps: (props: { name:string, value:number}) => void
    setType: (type: string) => void
    checkEmptyField: () => void
    setValidated: (state: boolean) => void
    clearAll: () => void
}

export const useAmounts= create<useStoreProps>()(devtools((set) =>({
    values: {
        amount: 0,
        term: 0,
        rate: 0,
        type: "",
    },
    emptys: {
        amount: false,
        term: false,
        rate: false,
        type: false
    },
    validated: false,
    setProps: ({name, value}:{ name:string, value:number}) => (
        set((state) => ({
            values: {
                ...state.values,
                [name]: value
            }
        }))
    ),
    setType: (type: string) => (
        set((state) => ({
            values: {
                ...state.values,
                type
            }
        }))
    ),
    checkEmptyField: () => {
        
        set((state) => {
            const lastValues = state.values
            const emptys = {
                amount: lastValues.amount === 0,
                term: lastValues.term === 0,
                rate: lastValues.rate === 0,
                type: lastValues.type === ""
            }
            return {emptys}
        })
    },
    setValidated: (state : boolean) => {
        set(() => ({validated: state}))   
    },
    clearAll: () => {
        set(() => ({
            values: {
                amount: 0,
                term: 0,
                rate: 0,
                type: ""
            },
            emptys: {
                amount: false,
                term: false,
                rate: false,
                type: false
            },
            validated: false
        }))
    }

    

})))