import { Provider } from 'react-redux'
import { useStore } from '../store'

const withRedux = (Comp) => ({ initialReduxState, ...restProps }) => {
  const store = useStore(initialReduxState)
  return (
    <Provider store={store}>
      <Comp {...restProps} />
    </Provider>
  )
}

export default withRedux
