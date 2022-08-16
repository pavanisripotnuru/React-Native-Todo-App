import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Provider } from 'react-redux';
import { Store } from './src/redux/store';
import Splash from './src/screens/Splash';
import ToDo from './src/screens/ToDo';
import Done from './src/screens/Done';
import Task from './src/screens/Task';


import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={
        ({ route }) => ({
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
            if (route.name === 'To-Do') {
              iconName = 'clipboard-list';
              size = focused ? 25 : 20;
            } else if (route.name === 'Done') {
              iconName = 'clipboard-check';
              size = focused ? 25 : 20;
            }
            return (
              <FontAwesome5
                name={iconName}
                size={size}
                color={color}
              />
            );
          }
        })
      }
      tabBarOptions={{
        activeTintColor: '#0080ff',
        inactiveTintColor: '#777777',
        labelStyle: { fontSize: 15, fontWeight: 'bold' }
      }}
    >
      <Tab.Screen name={'To-Do'} component={ToDo} />
      <Tab.Screen name={'Done'} component={Done} />
    </Tab.Navigator>
  );
}

const RootStack = createStackNavigator();

/*const App = () => {
  const [name, setName] = useState('Style Test')

  const onClickHandler = () => {
    setName('Style Test is Done!')
  }

  return (
    <View style={styles.body}>
      <View  style ={styles.view1}> 
    <Text style={styles.text}>1</Text>
       </View>
       <View  style ={styles.view2}> 
    <Text style={styles.text}>2</Text>
       </View>
       <View  style ={styles.view3}> 
    <Text style={styles.text}>3</Text>
       </View>
     </View>
  );
};

const styles = StyleSheet.create({
  body: {
    width:400,
    height :400,
    flexDirection:'column-reverse',
    backgroundColor: '#0000ff',
    alignItems: 'center',
    justifyContent: 'center',
  
    
  },
  text: {
    color: '#000000',
    fontSize: 35,
    fontStyle: 'italic',
    margin: 10,
  
  },
  view1:{
    width :100,
    height :100,
    backgroundColor:'#00ffff',
    alignItems:'center',
    justifyContent:'center'
  },
  view2:{
    width :100,
    height :100,
    backgroundColor:'#ff00ff',
    alignItems:'center',
    justifyContent:'center'
  },
  view3:{
    width :100,
    height :100,
    backgroundColor:'#ffff00',
    alignItems:'center',
    justifyContent:'center'
  }
 
});*/


function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName="Splash"
          screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#0080ff'
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontSize: 25,
              fontWeight: 'bold'
            }
          }}
        >
          <RootStack.Screen
            name="Splash"
            component={Splash}
            options={{
              headerShown: false,
            }}
          />
          <RootStack.Screen
            name="My Tasks"
            component={HomeTabs}
            />

          <RootStack.Screen
            name="Task"
            component={Task}
            />  

       
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App;