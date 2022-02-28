package com.taboolaassigment;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import java.util.Map;
import java.util.Random;
import java.util.HashMap;

public class AndroidCalculatorModule extends ReactContextBaseJavaModule {
    AndroidCalculatorModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName(){
        return "AndroidCalculatorModule";
    }

    @ReactMethod
    private void calculateNumbers(double firstNumber, double secondNumber, String operator, Callback onSuccessCallback) {
        System.out.println("Open method is called");
        double result = __generateResultWithRandomlyOperator(firstNumber,secondNumber,operator);

        onSuccessCallback.invoke(result);
    }

    private double __generateResultWithRandomlyOperator(double firstNumber, double secondNumber,String operator){
        double result = 0;
        
        switch(operator){
            case "+":
                System.out.println("+ operator - firstNumber+secondNumber");
                result = (firstNumber+secondNumber);
            break;            
            case "-":
                System.out.println("- operator - firstNumber-secondNumber");
                result = (firstNumber-secondNumber);
            break;
            case "/":
                System.out.println("/ operator - firstNumber/secondNumber");
                result = (firstNumber/secondNumber);
            break;
            case "*":
                System.out.println("* operator - firstNumber*secondNumber");
                result = (firstNumber*secondNumber);
            break;
            default:
             result = -999;
        }

        return result;
    }

}
