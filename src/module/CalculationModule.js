import { NativeModules, Platform } from "react-native";

const { IOSCalculatorModule, AndroidCalculatorModule } = NativeModules;

class CalculationModule {

    getModule() {
        return Platform.OS === 'ios' ? IOSCalculatorModule : AndroidCalculatorModule;
    }

    calculate(firstNumber, secondNumber, randomOperatorNumber, callback) {
        this.getModule() !== null && this.getModule().open(firstNumber, secondNumber, randomOperatorNumber, (res) => callback(res))
    }
};

export default new CalculationModule();