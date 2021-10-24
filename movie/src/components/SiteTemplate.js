import styled from 'styled-components';

const SiteTemplateBlock = styled.div`
    width: 97%;
    height: 1030px;

    position: relative;
    background: #ffffff;
    border-radius:10px;

    margin: 0 auto;

    margin-top:13px;
    margin-bottom: 13px;

    .imgWrapper {
        img{
            width:11%;
            height:13vh;
            margin-left:20px;
            margin-top:15px;
        }
        h1{
            margin-top:40px;
            margin-left:30px;

            &:hover
        }
        display : flex
        
    }
`;

const titleImage = "/image/title.png";

function SiteTemplate({children}){
    return (
        <>
            <SiteTemplateBlock>
                <div className="imgWrapper">
                    <img src={titleImage} alt="title"/>
                    <h1>영화가 너무나 보고 싶다....</h1>
                </div>
                {children}
            </SiteTemplateBlock>
        </>
    )
}

export default SiteTemplate;