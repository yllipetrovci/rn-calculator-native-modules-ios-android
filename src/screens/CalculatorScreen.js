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
import { generateRandomOperator } from '../utilities/generateRandomOperator';
import { roundNumbersWithTwoDecimalPlaces } from '../utilities/roundWithDecimalPlaces';

const CalculatorScreen = () => {
    const [firstInputValue, setFirstInputValue] = useState(0);
    const [secondInputValue, setSecondInputValue] = useState(0);
    const [operatorValue, setOperatorValue] = useState('');
    const [result, setResult] = useState(0);

    const onSubmit = () => {
        const firstInput = roundNumbersWithTwoDecimalPlaces(firstInputValue);
        const secondInput = roundNumbersWithTwoDecimalPlaces(secondInputValue);

        setFirstInputValue(firstInput);
        setSecondInputValue(secondInput);

        const generateOperator = generateRandomOperator();
        setOperatorValue(generateOperator);

        calculationModule.calculate(firstInput, secondInput, generateOperator, calculatorResponse);
    }

    const calculatorResponse = (response) => {
        setResult(roundNumbersWithTwoDecimalPlaces(response));
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
                <View>
                    <Text style={{ fontSize: 18, color: '#000', fontWeight: '600' }}>Operator: {operatorValue}</Text>

                </View>
                <NumberInput
                    onChangeNumber={setSecondInputValue}
                    label="Second Number"
                    value={secondInputValue}
                    placeholder="Write numbers"
                />

                <Button
                    onPress={onSubmit}
                    title="Submit"
                    color="red"
                />

                <View>
                    <Text style={{ fontSize: 20, color: '#000', fontWeight: '600' }}>Result: {result}</Text>
                </View>

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