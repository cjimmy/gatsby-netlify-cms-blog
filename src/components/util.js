import styled from 'styled-components';

/*Util functions*/

//-- vertical spacer, easier to read than a buried css rule (i.e. margin)
export const Spacer = styled.div`
	height: ${props=>props.height}px;
	@media screen and (max-width: 767px) {
		height: ${props=>props.xsHeight}px;
	}
`;
