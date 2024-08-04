

export function formateaDinero(monto: number) {
  return monto.toLocaleString('es-ES', {style: 'currency', currency: 'EUR'})
}

export function calculaMonthlyRepayment(values: {amount: number, term: number, rate: number, type: string}) {
    const {amount, term, rate, type} = values
    if(type === "repayment"){
      const monthlyRate = rate / 1200
      const monthlyRepayment = amount * monthlyRate / (1 - Math.pow(1 + monthlyRate, -term))
      return monthlyRepayment
    }
    else{
      const interest = amount * rate / 100
      const total = amount + interest
      return total / term
    }
}
type TotalRepayment = {
    values: {
        amount: number
        term: number
        rate: number
        type: string
    },
    monthly: number
}
export function calculaTotalRepayment({values, monthly}: TotalRepayment) {
    const {term} = values
    return term * monthly * 12
}