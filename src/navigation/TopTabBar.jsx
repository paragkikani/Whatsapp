import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CommunityListScreen from '../screens/CommunityListScreen';
import {Colors} from '../themes/Colors';
import VectorIcon from '../utils/VectorIcon';
import {TabBarData} from '../data/TabBarData';

const TopTabBar = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
    initialRouteName='Chats'
      screenOptions={() => ({
        
        tabBarInactiveTintColor: Colors.secondaryColor,
        tabBarActiveTintColor: Colors.tertiary,
        tabBarIndicatorStyle: {
          backgroundColor: Colors.tertiary,
        },
        tabBarStyle: {
          backgroundColor: Colors.primaryColor,
        },
      })}>
      <Tab.Screen
        name="Community"
        component={CommunityListScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => (
            <VectorIcon
              name="users"
              type="FontAwesome"
              size={22}
              color={color}
            />
          ),
        }}
      />
      {TabBarData.map(x => (
        <Tab.Screen key={x.id} name={x.name} component={x.route} />
      ))}
    </Tab.Navigator>
  );
};

export default TopTabBar;
