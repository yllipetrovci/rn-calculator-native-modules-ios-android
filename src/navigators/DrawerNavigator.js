import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
/**
 * Screens
 */
import CalculatorScreen from '../screens/CalculatorScreen';
import WebViewScreen from '../screens/WebViewScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Calculator" component={CalculatorScreen} />
            <Drawer.Screen name="WebView" component={WebViewScreen} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigation;