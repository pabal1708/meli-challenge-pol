import dataTransaction from '../mock/transactions'
export default function handler(req, res) {
  const { id } = req.query
  const result = dataTransaction.filter((transactions) => transactions.id === parseInt(id));

  res.status(200).json(result)
}
