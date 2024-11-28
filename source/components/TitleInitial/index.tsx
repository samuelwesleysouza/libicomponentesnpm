import React from 'react';
import { Text } from 'react-native';

interface TitleInitialProps {
    text: string;
}

export default function TitleInitial({ text }: TitleInitialProps) {
    return <Text>{text}</Text>;
}
