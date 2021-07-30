import React from 'react';
import { Pressable } from 'react-native';

const PressableView = ({ disabled, onPress, style, children }) => {
	return (
		<Pressable
			disabled={disabled}
			// style={style}
			onPress={onPress}
			style={({ pressed }) => [{ backgroundColor: pressed ? 'black' : 'white' }, style]}
		>
			{children}
		</Pressable>
	);    
};

export default PressableView;