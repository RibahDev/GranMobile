import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from './pages/home'
import { Cursos } from './pages/cursos';
import { Contatos } from './pages/contatos';
import { Sobre } from './pages/sobre';
import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export function Routes(){
    return(
        <Tab.Navigator>
            <Tab.Screen 
            name='home' 
            component={Home}
            options={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarIcon: ({ focused, size, color }) => {
                    if(focused){
                        return <Ionicons size={size} color={'#FFA500'} name="home" />
                    }
                    
                    return <Ionicons size={size} color={color} name="home-outline" />
                }
            }} />
       

        <Tab.Screen
            name='cursos' 
            component={Cursos}
            options={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarIcon: ({ focused, size, color }) => {
                    if(focused){
                        return <Ionicons size={size} color={'#FFA500'} name="book" />
                    }
                    
                    return <Ionicons size={size} color={color} name="library-outline" />
                }
            }}
        />
        <Tab.Screen
            name='sobre' 
            component={Sobre}
            options={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarIcon: ({ focused, size, color }) => {
                    if(focused){
                        return <Ionicons size={size} color={'#FFA500'} name="information-circle-outline" />
                    }
                    
                    return <Ionicons size={size} color={color} name="information-outline" />
                }
            }}
        />
        <Tab.Screen
            name='contatos' 
            component={Contatos}
            options={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarIcon: ({ focused, size, color }) => {
                    if(focused){
                        return <Ionicons size={size} color={'#FFA500'} name="call-outline" />
                    }
                    
                    return <Ionicons size={size} color={color} name="call-outline" />
                }
            }}
        />
        </Tab.Navigator>    
    )
}