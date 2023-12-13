import Home from '../src/views/home'
import transactionsMock from '../pages/api/mock/transactions'

export  const getStaticProps = async () => {
  const transactions = transactionsMock

  return { props: { transactions } }
}

export default Home;