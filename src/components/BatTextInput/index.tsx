import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './Styles';

interface BatTextInputProps {
  pass: string
}

export function BatTextInput(props : BatTextInputProps) {
  return (
    <>
        <TextInput
          style = {styles.input}
          placeholder = 'pass'
          value= {props.pass}
        />
    </>
  );
}