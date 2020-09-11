import withRedux from '../hocs/withRedux'
import Foo from '../components/foo'

const Index = () => {
  return <Foo />
}

export default withRedux(Index)
