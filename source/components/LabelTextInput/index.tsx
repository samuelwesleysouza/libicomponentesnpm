import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { buttonstyle } from '../../styles/styleButton';

interface LabelTextInputProps {
    text: string;
    onPress: () => void;
    backgroundColor?: string; // Cor opcional
}

export default function LabelTextInput({ text, onPress, backgroundColor }: LabelTextInputProps) {
    const buttonStyle = backgroundColor ? { backgroundColor } : buttonstyle.buttonInitial;
    return (
        <TouchableOpacity style={buttonStyle} onPress={onPress}>
            <Text style={buttonstyle.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
}
