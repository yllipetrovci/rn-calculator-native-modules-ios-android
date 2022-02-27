import React from 'react';
import { View } from 'react-native';

const CalculatorScreen = () => {
    const [firstInputValue, setFirstInputValue] = useState(0);
    const [secondInputValue, setSecondInputValue] = useState(0);
    const [result, setResult] = useState(0);

    return (
        <View>
            <Text>CalculatorScreen</Text>
        </View>
    )
};

export default CalculatorScreen; 