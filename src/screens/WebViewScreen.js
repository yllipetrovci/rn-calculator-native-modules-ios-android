import React from 'react';
import { WebView } from 'react-native-webview';
import { Platform, View, Text } from 'react-native';

const WebViewScreen = () => {
    const isIOS = Platform.OS === 'ios';

    return (
        <>
            {isIOS ?
                <WebView source={{ uri: 'https://www.taboola.com' }} /> :
                <View>
                    <Text>Android</Text>
                </View>
            }
        </>
    )
};

export default WebViewScreen;