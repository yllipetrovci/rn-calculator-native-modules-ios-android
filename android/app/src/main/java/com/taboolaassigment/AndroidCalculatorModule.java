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
    private void open(double firstNumber, double secondNumber, String operator, Callback onSuccessCallback) {
        System.out.println("Open method is called");
        double result = __generateResultWithRandomlyOperator(firstNumber,secondNumber,operator);

        onSuccessCallback.invoke(result);
    }

    // private int __generateRondomNumber(){
    //   int min = 1;
    //   int max = 4;

    //   System.out.println("Random value in int from "+min+" to "+max+ ":");
    //   return (int)Math.floor(Math.random()*(max-min+1)+min);
    // }

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
            // default:
            //  result = firstNumber+secondNumber;
        }

        return result;
    }

}
