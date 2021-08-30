import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export const RoundedButon = ({
  style = {},
  textStyle = {},
  size = 125,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles(size).radius, style]}
      onPress={props.onPress}>
      <Text style={[styles(size).text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = (size) =>
  StyleSheet.create({
    radius: {
      borderRadius: size / 2,
      width: size,
      height: size,
      alignItems: 'center',
      borderColor: '#fff',
      borderWidth: 2,
      justifyContent: 'center',
    },
    text: {
      color: '#FFF',
      fontSize: size / 3,
    },
  });
