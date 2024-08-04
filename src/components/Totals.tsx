
import { useAmounts } from "../store/store"
import { calculaMonthlyRepayment, calculaTotalRepayment, formateaDinero } from "../helpers";


function Totals() {
  const {validated, values} = useAmounts()

  const monthlyRepayment = calculaMonthlyRepayment(values)
  const totalRepayment = calculaTotalRepayment({values, monthly: monthlyRepayment})

  return (
    <section className="bg-slate-800 mt-10 flex flex-col items-center justify-center px-10 py-10 mb-20 md:mt-0 md:mb-0 lg:rounded-e-3xl md:rounded-bl-[80px]">
        {!validated? (
          <>
            <div>
                <img src="/illustration-empty.svg" alt="" />
            </div>
            <div className=" text-center space-y-3">
                <h2 className="text-white text-lg font-semibold">Results shown here</h2>
                <p className="text-slate-400">
                    Complete the form and click “calculate repayments” to see what 
                    your monthly repayments would be.
                </p>
            </div>
          </>
        ): (
          <>
            <div className=" space-y-3 text-left px-10">
                <h2 className="text-white text-lg font-semibold">Your Results</h2>
                <p className="text-slate-400">
                    Your results are shown below based on the information you provided. To adjust the results, edit the form and click "Calculate Repayments" again.
                </p>
                <div className="bg-slate-900 p-10  border-lime-300 border-t-4 rounded-lg">
                    <div className="border-b-slate-500 border-b pb-5">
                      <h3 className="text-slate-400 text-sm font-bold">Your Monthly Repayment</h3>
                      <p className="text-lime-300 text-3xl font-bold">{formateaDinero(monthlyRepayment)}</p>
                    </div>
                    <div className="pt-5">
                      <h3 className="text-slate-400 text-sm font-bold">Total you'll repay over the term</h3>
                      <p className="text-white text-2xl font-bold">{formateaDinero(totalRepayment)}</p>
                    </div>
                </div>
            </div>
          </>
        )}
    </section>
  )
}

export default Totals