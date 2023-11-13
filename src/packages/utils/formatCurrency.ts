export const formatCurrency = (amount: number, currency: string) => {
    return amount.toLocaleString(undefined)+' '+currency
}
