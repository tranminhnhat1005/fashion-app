import { StyleSheet, TextInput as RNTextInput, TextInputProps as RNTextInputProps } from 'react-native';
import React, { useState } from 'react';
import { Feather, Feather as Icon } from '@expo/vector-icons';

import theme, { Box } from './Theme';

const styles = StyleSheet.create({});
const ICON_SIZE = theme.borderRadii.m * 2;
interface TextInputProps extends RNTextInputProps {
    icon?: keyof typeof Feather.glyphMap;
    placeholder?: string;
    validator?: (input: string) => boolean;
}

const Valid = true;
const Invalid = false;
const Pristine = null;
type InputState = typeof Valid | typeof Invalid | typeof Pristine;

const TextInput = ({ icon, placeholder, validator, ...props }: TextInputProps) => {
    const [input, setInput] = useState('');
    const [inputState, setInputState] = useState<InputState>(Pristine);

    const color = inputState === Pristine ? 'bodyDark' : inputState === Valid ? 'primary' : 'danger';

    const onChangeText = (text: string) => {
        setInput(text);
        if (inputState !== Pristine) {
            validate();
        }
    };
    const validate = () => {
        if (validator) {
            const valid = validator(input);
            setInputState(valid);
        }
    };

    return (
        <Box
            flexDirection={'row'}
            alignItems={'center'}
            height={48}
            borderRadius={'s'}
            borderWidth={StyleSheet.hairlineWidth}
            borderColor={color}
            paddingHorizontal={'xs'}
        >
            <Box padding={'s'}>
                <Icon size={ICON_SIZE} name={icon} color={theme.colors[color]} />
            </Box>
            <Box flex={1}>
                <RNTextInput
                    underlineColorAndroid={'transparent'}
                    placeholder={placeholder}
                    placeholderTextColor={theme.colors.grayDark}
                    onBlur={validate}
                    onChangeText={onChangeText}
                    {...props}
                />
            </Box>
            {inputState === Valid || inputState === Invalid ? (
                <Box
                    backgroundColor={color}
                    width={ICON_SIZE}
                    height={ICON_SIZE}
                    borderRadius={'m'}
                    alignItems={'center'}
                    justifyContent={'center'}
                >
                    <Icon size={12} name={inputState === Valid ? 'check' : 'x'} color={theme.colors.white} />
                </Box>
            ) : null}
        </Box>
    );
};

export default TextInput;
