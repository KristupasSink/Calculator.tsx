import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import CalcTitle from "../components/calcTitle";

export default function Calculator() {
    const [number1, setNumber1] = useState("");
    const [number2, setNumber2] = useState("");
    const [operation, setOperation] = useState("add");
    const [result, setResult] = useState<number | null>(null);

    const calculate = () => {
        const a = parseFloat(number1);
        const b = parseFloat(number2);

        if (isNaN(a) || isNaN(b)) {
            setResult(NaN);
            return;
        }

        let res = 0;
        switch (operation) {
            case "add":
                res = a + b;
                break;
            case "subtract":
                res = a - b;
                break;
            case "multiply":
                res = a * b;
                break;
            case "divide":
                res = b !== 0 ? a / b : NaN;
                break;
        }
        setResult(res);
    };

    return (
        <View style={styles.container}>
            <CalcTitle />

            <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder="Input the first number"
                value={number1}
                onChangeText={setNumber1}
            />

            <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder="Input the second number"
                value={number2}
                onChangeText={setNumber2}
            />

            <Picker
                selectedValue={operation}
                onValueChange={(value) => setOperation(value)}
                style={styles.picker}
            >
                <Picker.Item label="add" value="add" />
                <Picker.Item label="subtract" value="subtract" />
                <Picker.Item label="multiply" value="multiply" />
                <Picker.Item label="divide" value="divide" />
            </Picker>

            <TouchableOpacity style={styles.calcButton} onPress={calculate}>
                <Text style={styles.calcButtonText}>Calculate</Text>
            </TouchableOpacity>


            {result !== null && (
                <Text style={styles.result}>
                    Result: {isNaN(result) ? "Invalid input" : result}
                </Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#ECE9F7",
    },
    calcButton: {
        backgroundColor: "#76539e",
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 12,
        alignItems: "center",
        marginTop: 10,
    },
    calcButtonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },

    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
        color: "#76539e",
    },
    input: {
        borderWidth: 1,
        borderColor: "#999",
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
        backgroundColor: "#fff",
    },
    picker: {
        marginBottom: 20,
    },
    result: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        color: "#2c3e50",
    },
});
