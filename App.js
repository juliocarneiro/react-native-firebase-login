import { SwitchNavigator } from 'react-navigation'

import Loading from './Loading'
import SignUp from './SignUp'
import Login from './Login'
import Main from './Main'

const App = SwitchNavigator(
  {
    Loading,
    SignUp,
    Login,
    Main
  },
  {
    initialRouteName: 'Loading'
  }
)
export default App