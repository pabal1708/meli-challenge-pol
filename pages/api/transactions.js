import dataTransaction from './mock/transactions'
export default function handler(req, res) {
  
    const result = dataTransaction
    res.status(200).json(result)
  }
  