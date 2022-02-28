import { NativeModules, Platform } from "react-native";

const { IOSCalculatorModule } = NativeModules;
class CalculationModule {


    getModule() {
        return Platform.OS === 'ios' ? IOSCalculatorModule : null;
    }

    calculate(firstNumber, secondNumber, callback) {
        this.getModule() !== null && this.getModule().open(firstNumber, secondNumber, (res)=> callback(res))
    }


};

export default new CalculationModule();