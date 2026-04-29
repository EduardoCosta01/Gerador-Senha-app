import React from "react";

import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';
import styles from "./Styles";
import { BatLogo } from '../../components/BatLogo'

import { BatButton } from "../../components/BatButton";



export default function Home() {
    return(
        <View style={styles.appContainer}>
           
           <View style={styles.logoContainer}>
                <BatLogo/>
           </View>

           <View style={styles.inputContainer}>
                
                <BatButton/>
           </View>

            <Text></Text>


            <StatusBar style="light" />
        </View>
        
    )
}



