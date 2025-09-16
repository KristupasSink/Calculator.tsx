import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import CalcTitle from "../components/calcTitle";

export default function Calculator() {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [operation, setOperation] = useState("add");
    const [result, setResult] = useState<number | null>(null);

    const calculate = () => {
        const a = parseFloat(num1);
        const b = parseFloat(num2);

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
        <View style={styles.screen}>
            <CalcTitle />

            <View style={styles.card}>
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    placeholder="First number"
                    value={num1}
                    onChangeText={setNum1}
                />

                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    placeholder="Second number"
                    value={num2}
                    onChangeText={setNum2}
                />

                <View style={styles.pickerBox}>
                    <Picker
                        selectedValue={operation}
                        onValueChange={(value) => setOperation(value)}
                        style={styles.picker}
                    >
                        <Picker.Item label="Add" value="add" />
                        <Picker.Item label="Subtract" value="subtract" />
                        <Picker.Item label="Multiply" value="multiply" />
                        <Picker.Item label="Divide" value="divide" />
                    </Picker>
                </View>

                <TouchableOpacity style={styles.button} onPress={calculate}>
                    <Text style={styles.buttonText}>Calculate</Text>
                </TouchableOpacity>
            </View>

            {result !== null && (
                <View style={styles.resultBox}>
                    <Text style={styles.resultLabel}>Result</Text>
                    <Text style={styles.resultValue}>
                        {isNaN(result) ? "Invalid input" : result}
                    </Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#f7f6fb",
    },
    card: {
        width: "100%",
        padding: 20,
        backgroundColor: "#fff",
        borderRadius: 16,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        elevation: 3,
        marginTop: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        padding: 12,
        marginBottom: 12,
        fontSize: 16,
        backgroundColor: "#fdfdfd",
    },
    pickerBox: {
        borderWidth: 1,
        borderColor: "#76539e",
        borderRadius: 10,
        marginBottom: 20,
        overflow: "hidden",
    },
    picker: {
        height: 50,
        width: "100%",
    },
    button: {
        backgroundColor: "#4b2c82",
        paddingVertical: 14,
        borderRadius: 12,
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "600",
    },
    resultBox: {
        marginTop: 30,
        backgroundColor: "#e7def5",
        padding: 20,
        borderRadius: 12,
        alignItems: "center",
    },
    resultLabel: {
        fontSize: 16,
        color: "#4b2c82",
        marginBottom: 6,
    },
    resultValue: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#2c2c54",
    },
});
