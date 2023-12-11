

export async function fetchTransaction() {
  const res = await fetch('http://localhost:3000/api/transactions')
  const data = await res.json()
  return data
}

