import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home.jsx';
import Datails from './screens/Details.jsx';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
     <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detalhes" component={Datails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

