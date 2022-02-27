import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

const NumberInput = ({ onChangeNumber, label, value, placeholder }) => {
    return (
        <View style={styles.container} >
            <Text style={styles.lableTxt}>{label}</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                placeholder={placeholder}
                keyboardType='numeric'
                value={value + ""}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
    },
    lableTxt: {
        fontWeight: '500',
    }
});

export default NumberInput;