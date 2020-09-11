import withRedux from '../hocs/withRedux'
import Counter from './counter'

const BazCounter = () => (
  <div style={{ background: 'pink', padding: 10, marginTop: 10 }}>
    baz counter
    <Counter />
  </div>
)

export default withRedux(BazCounter)
