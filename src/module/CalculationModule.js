import { NativeModules, Platform } from "react-native";

const { IOSCalculatorModule, AndroidCalculatorModule } = NativeModules;

class CalculationModule {


    getModule() {
        return Platform.OS === 'ios' ? IOSCalculatorModule : AndroidCalculatorModule;
    }

    calculate(firstNumber, secondNumber, callback) {
        this.getModule() !== null && this.getModule().open(firstNumber, secondNumber, (res) => callback(res))
    }


};

export default new CalculationModule();