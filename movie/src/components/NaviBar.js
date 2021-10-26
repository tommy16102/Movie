import styled from 'styled-components';
import {Link} from 'react-router-dom';

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

	&:hover {
		background: #555555;
	};
	&:active {
		background: #999999;
	};
`;


function NavItem({id, text, path, history}){
	const realPath = {path};
	return (
        <>
            <NavBlock>
				<Link to = {realPath.path} style={{textDecoration: 'none', color: 'inherit'}}>{text}</Link>
			</NavBlock>
        </>
    )
}

const NaviBar = ({history}) => {
	return(
		<>
			<NavBarBlock>
				<NavBlockList>
					<NavItem  text="현재 상영 영화" path = "/currentMovies" />
					<NavItem path = "/comingSoonMovies" text="상영 예정" />
					<NavItem path = "/rank" text="영화 순위" />
					<NavItem path = "/about" text="우리가 누구?" />
				</NavBlockList>
			</NavBarBlock>
		</>
	)
}

export default NaviBar;