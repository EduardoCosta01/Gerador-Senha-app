import React, { useState } from 'react';
import { Text, Pressable, TextInput, View } from 'react-native';

import { styles } from './ButtonStyles';
import { BatTextInput } from "../../components/BatTextInput";
import generatePass from '../../services/passwordService';

import * as Clipboard from 'expo-clipboard';

export function BatButton() {
    const [pass, setPass] = useState('');
    const [passwordLength, setPasswordLength] = useState('9');
    const [useLowercase, setUseLowercase] = useState(true);
    const [useUppercase, setUseUppercase] = useState(true);
    const [useNumbers, setUseNumbers] = useState(true);
    const [useSpecialChars, setUseSpecialChars] = useState(true);
    const [copyFeedback, setCopyFeedback] = useState('');

    function handleGenerateButton() {
        const parsedLength = Number(passwordLength);
        const safeLength = Number.isNaN(parsedLength)
            ? 9
            : Math.min(Math.max(parsedLength, 4), 32);

        const generateToken = generatePass({
            length: safeLength,
            useLowercase,
            useUppercase,
            useNumbers,
            useSpecialChars,
        });

        if (!generateToken) {
            setPass('');
            setCopyFeedback('Selecione ao menos 1 tipo de caractere.');
            return;
        }

        setPass(generateToken);
        setCopyFeedback('');
    }

    async function handleCopyButton() {
        if (!pass) {
            setCopyFeedback('Gere uma senha antes de copiar.');
            return;
        }

        await Clipboard.setStringAsync(pass);
        setCopyFeedback('Senha copiada para a area de transferencia!');
    }

  return (
    <>
        <BatTextInput pass= {pass}/>

        <View style={styles.configContainer}>
            <Text style={styles.configLabel}>Tamanho da senha (4 a 32)</Text>
            <TextInput
                style={styles.lengthInput}
                keyboardType='number-pad'
                value={passwordLength}
                onChangeText={setPasswordLength}
                placeholder='9'
                placeholderTextColor='#d6d6d6'
            />

            <Text style={styles.configLabel}>Tipos de caracteres</Text>
            <View style={styles.toggleRow}>
                <Pressable
                    style={[styles.toggleButton, useLowercase && styles.toggleButtonActive]}
                    onPress={() => setUseLowercase((prev) => !prev)}
                >
                    <Text style={[styles.toggleText, useLowercase ? styles.toggleTextActive : styles.toggleTextInactive]}>a-z</Text>
                </Pressable>
                <Pressable
                    style={[styles.toggleButton, useUppercase && styles.toggleButtonActive]}
                    onPress={() => setUseUppercase((prev) => !prev)}
                >
                    <Text style={[styles.toggleText, useUppercase ? styles.toggleTextActive : styles.toggleTextInactive]}>A-Z</Text>
                </Pressable>
            </View>

            <View style={styles.toggleRow}>
                <Pressable
                    style={[styles.toggleButton, useNumbers && styles.toggleButtonActive]}
                    onPress={() => setUseNumbers((prev) => !prev)}
                >
                    <Text style={[styles.toggleText, useNumbers ? styles.toggleTextActive : styles.toggleTextInactive]}>0-9</Text>
                </Pressable>
                <Pressable
                    style={[styles.toggleButton, useSpecialChars && styles.toggleButtonActive]}
                    onPress={() => setUseSpecialChars((prev) => !prev)}
                >
                    <Text style={[styles.toggleText, useSpecialChars ? styles.toggleTextActive : styles.toggleTextInactive]}>!@#</Text>
                </Pressable>
            </View>
        </View>

          <Pressable
            style={styles.button}
            onPress={handleGenerateButton}
        >
            <Text style={styles.text}>GENERATE</Text>
        </Pressable>

        <Pressable
            style={styles.button}
            onPress={handleCopyButton}
        >
            <Text style={styles.text}>⚡ COPY</Text>
        </Pressable>

        {!!copyFeedback && <Text style={styles.feedbackText}>{copyFeedback}</Text>}
    </>
  );
}