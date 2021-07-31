import React, { useState } from 'react';
import * as S from '../../utilities/commons/Styles';

const HeaderSection = (props) => {

	const { theme } = props;
	
	return (
		<>
			<S.Text theme={theme}>Hello, what do you want to watch?</S.Text>
			<S.Text theme={theme}>Here comes de input...</S.Text>
		</>
	);
};

export default HeaderSection;
