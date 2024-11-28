import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { buttonstyle } from '../../styles/styleButton';
interface CustomButtonProps {
    text: string;
    onPress: () => void;
    backgroundColor?: string; // Cor opcional
}

export default function CustomButton({ text, onPress, backgroundColor }: CustomButtonProps) {
    const buttonStyle = backgroundColor ? { backgroundColor } : buttonstyle.buttonInitial;
    return (
        <TouchableOpacity style={buttonStyle} onPress={onPress}>
            <Text style={buttonstyle.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
}
