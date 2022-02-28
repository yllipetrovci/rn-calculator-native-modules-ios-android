import { NativeModules, Platform } from "react-native";

const { IOSCalculatorModule, AndroidCalculatorModule } = NativeModules;

class CalculationModule {

    getModule() {
        return Platform.OS === 'ios' ? IOSCalculatorModule : AndroidCalculatorModule;
    }

    calculate(firstNumber, secondNumber, randomOperatorValue, callback) {
        this.getModule() !== null && this.getModule().calculateNumbers(firstNumber, secondNumber, 
            randomOperatorValue, 
            (res) => callback(res));
    }
};

export default new CalculationModule();