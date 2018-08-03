import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default Button = ({onPress, children}) => {
    const { buttonStyle, textStyle } = styles
    return (
        <TouchableOpacity onPress={onPress}style= {buttonStyle}>
            <Text style={textStyle}>
            {children}
            </Text>
        </TouchableOpacity>
    );
}

const styles = { 
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRigth: 5
    },
    textStyle: {
        alignSelf: 'center',
        fontSize: 16,
        color: '#007aff',
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
}