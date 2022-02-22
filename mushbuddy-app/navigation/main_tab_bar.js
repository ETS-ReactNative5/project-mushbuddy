import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';

import Profile from '../newcomponents/profile/profile';
import Map from '../components/map';
import Catalog from '../components/catalog';
import Community from '../components/community';
import Search from '../newcomponents/search';
import MushroomCatalog from '../newcomponents/MushroomCatalog'

const Tab = createBottomTabNavigator();

const MainTabBar = () => {
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator
                initialRouteName="Search"
                screenOptions={({ route }) => ({
                    tabBarLabel:() => {return null},
                    tabBarIcon: ({ focused }) => {
                        let iconName;

                        if (route.name === 'Profile') {
                            iconName = 'person';
                        }
                        else if (route.name === 'Community') {
                            iconName = 'chatbubbles';
                        }
                        else if (route.name === 'Map') {
                            iconName = 'map';
                        }
                        else {
                            iconName = 'newspaper';
                        }

                        return <Icon name={iconName} size={26} color={focused ? '#FFAA60' : '#F1CC96'} />;
                    },
                })}
            >
                <Tab.Screen name="Profile" component={Profile} />
                <Tab.Screen name="Search" component={Search} />
                <Tab.Screen name="Map" component={Map} />
                <Tab.Screen name="Catalog" component={MushroomCatalog} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default MainTabBar;
