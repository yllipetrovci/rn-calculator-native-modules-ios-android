import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Button,
    View,
    Text,
    Alert
} from 'react-native';
import NumberInput from '../components/NumberInput';
import calculationModule from '../module/CalculationModule';

const CalculatorScreen = () => {
    const [firstInputValue, setFirstInputValue] = useState(0);
    const [secondInputValue, setSecondInputValue] = useState(0);
    const [result, setResult] = useState(0);

    const regulateNumberFormat = (value) => {
        return parseFloat(value);
    }

    const onPressGenerateResult = () => {
        console.log('onPressGenerateResult');
        const firstInput = regulateNumberFormat(firstInputValue);
        const secondInput = regulateNumberFormat(secondInputValue);
        calculationModule.calculate(firstInput, secondInput, calculatorResponse);

        setResult(regulateNumberFormat(firstInput + secondInput));
    }

    const calculatorResponse = (response) => {
        setResult(response);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.form}>
                <NumberInput
                    onChangeNumber={setFirstInputValue}
                    label="First Number"
                    value={firstInputValue}
                    placeholder="Write numbers"
                />
                <NumberInput
                    onChangeNumber={setSecondInputValue}
                    label="Second Number"
                    value={secondInputValue}
                    placeholder="Write numbers"
                />

                <Button
                    onPress={onPressGenerateResult}
                    title="Generate Result"
                    color="red"
                    // disabled={true}
                    accessibilityLabel="Learn more about this purple button"
                />

                <Text style={{ fontSize: 20,color:'#000', fontWeight: '600' }}>Result: {result}</Text>
            </View>

        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flexDirection: 'column'
    },
    form: {
        borderWidth: 1,
        borderRadius: 4,
        margin: 10,
        padding: 10
    }
});

export default CalculatorScreen; 