import styled from 'styled-components';

const NavBarBlock = styled.div`
	
    margin:0px auto;
	margin-bottom:px;
	width:100%;
`;

const NavBlockList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    text-align: center;
    overflow: hidden;
`;

const NavBlock = styled.li`
    display: inline-block;
    color: white;
	margin-top:7px;
    font-size:36px;
    padding : 0px 30px 0px 30px;
	margin :10px 10px 10px 10px;
	border:1.3px dotted white;
	border-radius:10px;
	background-color: #333333; 
	cursor: pointer;
`;


function NavItem({id, text}){
    return (
        <>
            <NavBlock>{text}</NavBlock>
        </>
    )
}

function NaviBar(){
	return(
		<>
			<NavBarBlock>
				<NavBlockList>
					<NavItem text="현재 상영 영화"/>
					<NavItem text="상영 예정 영화"/>
					<NavItem text="영화 순위"/>
					<NavItem text="영화 검색"/>
				</NavBlockList>
			</NavBarBlock>
		</>
	)
}

export default NaviBar;