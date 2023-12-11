import Home from '../src/views/home'
import { fetchTransaction } from '../lib/fetch';

export async function getStaticProps() {
  const transactions = await fetchTransaction()

  return { props: { transactions } }
}

export default Home;