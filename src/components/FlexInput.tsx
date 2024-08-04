
import { useState } from "react"
import { useAmounts } from "../store/store"
import { toast } from "react-toastify"
type FlexInputProps = {
    children: string,
    reverse?: boolean,
    name: string,
    value: number
}
function FlexInput({children, reverse, name,value} : FlexInputProps) {
  const {emptys, checkEmptyField, setValidated} = useAmounts()
  const {setProps} = useAmounts()
  const [errorExists, setErrorExists] = useState(false)

  const empty = emptys[name as keyof typeof emptys] === true

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = parseInt(e.target.value)
    const valid = value > 0;
    if(valid ){
      setValidated(false)
      setProps({name, value})
      if(emptys[name as keyof typeof emptys]){
        checkEmptyField()
      }
      if(errorExists){
        setErrorExists(false)
      }
    } else{
      if(!errorExists){
        toast.error("Please enter a valid number")
        setErrorExists(true)
        setProps({name, value:0})
        checkEmptyField()
      }
    }
    
  }
  return (
    <div className={`${reverse? "flex-row-reverse" : ""} flex border rounded-md overflow-hidden ${errorExists || empty ?"border-red-500" : "border-slate-400"} mt-1 `}>
              <div className={`grid content-center px-4 ${errorExists || empty ? "bg-red-500" : "bg-main"} transition-colors duration-300`}>
                <p className={` font-bold ${errorExists || empty? "text-white" : "text-slate-500"} transition-colors duration-300`}>{children}</p>
              </div>
              <input type="number" 
                className="w-11/12 p-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 relative flex-1"
                min={0}
                onChange={handleChange}
                value={value === 0 ? "" : value}
                />
    </div>
  )
}

export default FlexInput