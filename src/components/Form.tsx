import { useAmounts } from "../store/store"
import FlexInput from "./FlexInput"
import H2 from "./H2"

import { toast } from "react-toastify"

function Form() {
  const {setType, values, checkEmptyField, emptys, setValidated, clearAll} = useAmounts()



   function handleType(e: React.MouseEvent<HTMLInputElement>){
    const value = e.currentTarget.value
    
     setType(value)
    checkEmptyField()
  }  
  async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>){
    e.preventDefault()
    await checkEmptyField()
    if(Object.values(values).includes(0 || "") || Object.values(emptys).includes(true)){
      toast.error("Please fill in all fields")
      return
    }
      setValidated(true)
    
    
  }
  
  return (
    <section className="py-10">
        <header className="grid grid-cols-1 md:flex w-11/12 mx-auto">
          <h1 className="text-2xl font-black text-slate-700">Mortage Calculator</h1>
          <p className="md:ml-auto underline text-slate-500 font-semibold hover:cursor-pointer"
          onClick={clearAll}
          >Clear All</p>
        </header>
        <form className="grid grid-cols-1 w-11/12 mx-auto space-y-5 mt-10">
          <div className="grid grid-cols-1">
            <H2>Mortgage Amount</H2>
            <FlexInput
              name="amount"
              value={values.amount}
            >€</FlexInput>
          </div>
          <div className="grid grid-cols-1">
            <H2>Mortage Term</H2>
            <FlexInput 
            reverse
            name="term"
            value={values.term}
            >years</FlexInput>
          </div>
          <div className="grid grid-cols-1">
            <H2>Interest Rate</H2>
            <FlexInput 
              reverse
              name="rate" 
              value={values.rate}
              > %</FlexInput>
          </div>
          <div className="space-y-3">
            <H2>Mortgage Type</H2>
            <div className={`flex flex-row-reverse justify-end gap-3 items-center border ${emptys["type"] === true ? "border-red-500" : "border-slate-500"} px-5 py-2 rounded-lg`}>
              <label htmlFor="repayment" className="font-bold">Repayment</label>
              <input type="radio" name="type" id="repayment" className="w-5 h-5"
                value={"repayment"}
                onClick={handleType}
              />
            </div>
            <div className={`flex flex-row-reverse justify-end gap-3 items-center border ${emptys["type"] === true ? "border-red-500" : "border-slate-500"} px-5 py-2 rounded-lg`}>
              <label htmlFor="interest" className="font-bold">Interest Only</label>
              <input type="radio" name="type" id="interest" className="w-5 h-5"
                value={"interest"}
                onClick={handleType}
              />
            </div>
          </div>

          <button type="submit" className="rounded-2xl relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-button active:shadow-none shadow-lg bg-gradient-to-tr from-button to-lime-300 border-lime-400 text-white overflow-hidden"
          onClick={handleSubmit}
          >
          <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-44 group-hover:h-44 opacity-10"></span>
          < span className="relative font-bold text-slate-600 flex gap-2">
          <div><img src="/icon-calculator.svg" alt="" /></div>
            Calculate Repayments
            </span>
        </button>

        </form>
      </section>
  )
}

export default Form