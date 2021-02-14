import { useState } from 'react';
import styled from 'styled-components';
import CommonButton from './../../src/components/common/CommonButton';

interface FlexBoxProps {
    flexDirection?:string
}
const FlexBox = styled.div`
    display : flex;
    flex-direction: ${(props: FlexBoxProps) =>
        props.flexDirection ? props.flexDirection : 'row'};
`

const UpperLeftBox = styled(FlexBox)`
    width:20%; padding:20px;
`
const UpperRightBox = styled(FlexBox)`
    margin-right:20px;
`
const Body = styled.body`
    display:flex;
    flex-direction:column;
    margin:0px;
    font-family: "Roboto", sans-serif;
    width:100%;
`
const HeaderDiv = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: #01bf86;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    width:70%;
    margin:0 auto;
`

const DescriptionDiv = styled.div`
    display:flex; 
    align-items:center; 
    padding-top:150px; 
    padding-bottom:150px;
    justify-content:space-around; 
    background-color:#01bf86;
    width:50%;
    margin:0 auto;
`
const Description = styled(FlexBox)`
    width: 50%; 
    flex-direction : column;
    justify-content: space-between; 
    padding-top:50px;
`


const MenuButton = styled.button`
    margin-right:15px; 
    cursor: pointer;
    background-color:#01bf86;
    border: #01bf86;
    color:white;
    font-size: medium;
    :hover{
        color: #fff;
        opacity: 0.9;
    }
`
const ContentBox = styled(FlexBox)`
    flex-direction:column; 
    width:50%; 
    padding:30px;
`
const InputBox = styled.div`
    padding:30px; 
    background-color:white; 
    color:gray;
    border-radius: 5px;
    align-items:center;
    width:300px;
    height:330px;
    box-shadow: 0px 22px 45px -15px rgba(0,0,0,0.5);
`

const FlexBox2 = styled(FlexBox)`
    flex-direction:column;
    align-items:center;
`


const MenuButtonSub = styled(MenuButton)`
    opacity: 0.7;
    scroll-behavior: smooth;
`
const ZodKoo = styled(MenuButton)`
    margin-right:60px;
    font-weight: 600;
    font-size: larger;
`
const TryButton = styled.button`
    border-radius: 400px; 
    font-weight:600;
    cursor: pointer;
    color:#01bf86; 
    background-color:white; 
    border:white;
    width: 100px;
    height: 30px;
    :hover{
        color: #fff ;
        background-color: transparent ;
        border: 2px solid #fff;
    }
`
const StartButton = styled.button`
    background-color:#01bf86; 
    color:white; 
    height: 40px; 
    width: 150px;
    border-radius: 400px;
    border-color:white;
    font-weight:600;
    border-style: solid;
    border-width: medium;
    cursor: pointer;
    :hover{
        background-color: #fff ;
        border: 2px solid #fff ;
        color: #01bf86 ;
        text-decoration: none;
        outline: none ;
        transition: all 0.4s;
    }
`
const InputThing = styled.input`
    margin-bottom: 20px;
    width:100%;
    height: 30px;
    border: 1px solid #eee;
    padding-left: 10px;
    color: grey;
`
const InputSubscribe = styled.input`
    background-color: transparent;
    color: white; 
    opacity:0.5;
    border: 2px solid rgba(255,255,255,0.4);
    height: 50px;
    width: 600px;
    padding-left: 20px;
    box-shadow: none;
    border-width: medium;
    margin-bottom: 30px;
    font-size: 16px;
`

const StartNowButton = styled.button`
    color: white;
    background-color: #01bf86;
    cursor: pointer;
    border: #01bf86;
    height: 40px;
    font-weight: 600;
    margin-top: 5px;
    border-radius: 400px;
    margin-bottom:10px;
    width:300px;
    :hover{
        background-color: transparent ;
        border: 2px solid #01bf86 ;
        color: #01bf86 ;
        box-shadow: none ;
    }
`
// const CommonButton = styled.button`
//     color: white;
//     background-color: #01bf86;
//     border: #01bf86;
//     width: 150px;font-weight: 600;
//     height: 40px;border-radius: 400px;
//     cursor: pointer;
//     :hover{
//         background-color: transparent ;
//         border: 2px solid #01bf86 ;
//         color: #01bf86 ;
//         box-shadow: none ;
//     }
// `
const ProductDiv = styled(FlexBox2)`
    margin-top: 120px;
    margin-bottom:100px;
`
const TextStyle = styled.p`
    color:#496174; 
    font-size:22px; 
    font-weight:500;
`
const TextStyle2 = styled.p`
    color: ${props => props.inputColor || "#496174"}; 
    font-size:22px; 
    font-weight:500;
`
const TextStyleSub2 = styled.p`
    width:60%;
    margin-top:0px;
    font-size: 15px;
    color: ${props => props.inputColor || "#95A8B7"}; 
    text-align: center;
`


const TextStyleSub = styled.p`
    width:60%;
    margin-top:0px;
    font-size: 15px;
    color: #95A8B7;
    text-align: center;
`

const SpecificationDiv = styled(FlexBox2)`
    background-color: #f3f6fa; 
    border-top: 1px solid #e8eef6; 
    border-bottom: 1px solid #e8eef6;
`
const DisplayDiv = styled(FlexBox2)`
    margin-top: 50px;
    justify-content: center; 
    margin-bottom: 100px;
    margin-left:300px;
    margin-right:300px;
`
const MiniBox = styled(FlexBox)`
    align-items: center;
    text-align: center;
`
const MiniBoxFeature = styled(FlexBox2)`
    padding: 20px;
    margin-top: 20px;
`
const SpecTitle = styled.p`
    font-size: 18px;
    color:#496174;
    font-weight:500;
`
const SpecText = styled.p`
    color: #95A8B7 !important;
    width:100%;
    font-size: 14px;
    text-align: center;
`
const PriceDiv = styled(FlexBox2)`
    padding-top:100px;
    padding-bottom: 80px;
`
const PriceMenu = styled(FlexBox2)`
    position: relative;
    width: 220px;
    max-width: 320px; 
    margin-right: 20px;
    padding: 0px 30px 50px;
    margin-top:50px; 
    margin-bottom:40px;
    border: 2px solid #95A8B7;
`
const PriceClass = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    font-size: 16px; 
    padding: 30px 20px 25px;
`
const PriceTitle1 = styled.p`
    color:#01bf86;
    font-size: 16px; 
    margin-bottom: 10px;
    letter-spacing: 1px;
    font-weight: 600;
`
const PriceTitle2 = styled.p`
    font-size: 38px;
    color:#496174;
    margin-bottom: 10px; 
    margin-bottom:10px;
    margin-top:0px;
    font-weight: 700;
`
const PriceTitle3 = styled.p`
    width:100%;
    opacity:0.5; 
    margin-top:0;
    font-size: 13px;
`
const PriceDetail = styled.p`
    font-size: 13px;
`
const SponsorDiv = styled(FlexBox2)`
    background-color: #f3f6fa ;
    border-top: 1px solid #e8eef6;
    border-bottom: 1px solid #e8eef6;
    padding-top: 100px;
    padding-bottom: 80px;
`
const ReviewText = styled.p`
    line-height: 24px;
    font-size: 14px;
    font-style: italic;
    color: #95A8B7;
`
const ReviewBox = styled.div`
    border-radius: 5px;width: 90%;
    padding: 10px 30px 20px 30px;
    margin-bottom: 30px;
    position: relative;
    background-color: #fff;
    box-shadow: 1px 1px 2px rgba(221,221,221,0.32);
`
const ContactDiv = styled(FlexBox2)`
    padding-top: 100px; 
    padding-bottom: 80px;
    background-color: #01bf86;
`
const SubscribeButton = styled.button`
    color:#01bf86; width: 150px;cursor: pointer;
    height: 40px; font-weight: 600;border:white;border-radius: 400px;
    background-color:white;
    :hover{
        color: #fff ;
        background-color: transparent ;
        border: 2px solid #fff;
    }
`
const SupportDiv = styled(FlexBox2)`
    padding-top: 60px;
    padding-bottom: 60px;
    background-color: #2f3e47;
`
const BottomEtc = styled.p`
    color: rgba(255,255,255,0.4);
    font-size:14px;
    margin-bottom: 5px;
    margin-top: 5px;
    :hover{
        color: rgba(255,255,255,0.6);
        cursor:pointer;
    }
`
const IconPlay = styled.i`
    margin-right: 7px;
    width: 20px;
    height: 20px;
    border: 2px solid #fff;
    border-radius: 50%;
    line-height: 17px;
    vertical-align: middle;
    text-align: center;
    font-size: 12px;
    padding-left: 3px;
    padding-top:3px; 
    padding-right:2px;
    margin-left: -12px;
`
const IconMini = styled.i`
    color: #01bf86; 
    font-size:48px;
`
const headerMenuButtonTexts = [
    'Features',
    'Plans',
    'Clients',
    'Pages▼'
]
const FeatureItems1 = [
    {
        icon: <IconMini className="pe-7s-display1"></IconMini>,
        body1: 'Strategy Solutions',
        body2: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
        icon: <IconMini className="pe-7s-science"></IconMini>,
        body1: 'Digital Design',
        body2: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin litera..'
    },
    {
        icon : <IconMini className="pe-7s-display1"></IconMini>,
        body1 : 'Analytics Solutions',
        body2 : 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
    },
]
const FeatureItems2 = [
    {
        icon: <IconMini className="pe-7s-date"></IconMini>,
        body1: 'Strategy Solutions',
        body2: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
        icon: <IconMini className="pe-7s-credit"></IconMini>,
        body1: 'Digital Design',
        body2: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin litera..'
    },
    {
        icon : <IconMini className="pe-7s-headphones"></IconMini>,
        body1 : 'Analytics Solutions',
        body2 : 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
    },
]

const Main = () => {
    const [selectedHeaderMenuIdx, setSelectedHeaderMenuIdx] = useState(0)
    console.log(`selectedHeaderMenuIdx:${selectedHeaderMenuIdx}`)
    return (
        <Body style={{margin:'0'}}>
            <link rel="stylesheet" href="https://static.tumblr.com/i5s2zks/6kOohwlux/pe-icon-7-stroke.css"></link>
            <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700,800" rel="stylesheet"></link>
            <HeaderDiv>
                <UpperLeftBox>
                    <ZodKoo>ZodKoo</ZodKoo>
                    <MenuButton>Home</MenuButton>
                    {headerMenuButtonTexts.map((headerMenuButtonText,idx) => {
                        return (
                            <MenuButtonSub
                            key={idx}
                            onClick={(e) => {
                                setSelectedHeaderMenuIdx(idx)
                            }}
                            active={selectedHeaderMenuIdx == idx}
                            >
                                {headerMenuButtonText}
                            </MenuButtonSub>
                        )
                    })}
                </UpperLeftBox>
                <UpperRightBox>
                    <MenuButtonSub>Login</MenuButtonSub>
                    <TryButton>Try for Free</TryButton>
                </UpperRightBox>                
            </HeaderDiv>
            <div style={{backgroundColor:'#01bf86'}}>
                <DescriptionDiv>
                    <Description>
                        <p style={{color:'white', fontSize:'30px',fontWeight:'200',width:'75%'}}>Zodkoo is a fully responsive landing page template</p>
                        <p style={{lineHeight: '24px', fontSize:'16px', marginTop:'10px', marginBottom:'50px', fontWeight: '400',width:'95%', color: 'rgba(255,255,255,0.7)'}}>
                        Zodkoo is a fully responsive landing page built using the latest Bootstrap framework. It's designed for describing your app, agency or business. The clean and well commented code allows easy customization of the theme.</p>
                        <div style={{display:'flex',alignItems: 'center'}}>
                            <FlexBox><StartButton>GET STARTED</StartButton></FlexBox>
                            <FlexBox><span style={{fontSize:'medium', color:'white', margin: '0 20px', opacity:'0.7'}}>OR</span></FlexBox>
                            <FlexBox><button style={{
                                color: 'white', border: '#01bf86',cursor: 'pointer', backgroundColor: '#01bf86',fontSize:'15px',fontWeight:'600'
                            }}><IconPlay className="pe-7s-play"></IconPlay>WATCH VIDEO</button></FlexBox>
                        </div>
                    
                    </Description>
                    <InputBox>
                        <FlexBox2>
                            <p style={{color: '#778fa2', fontWeight: '600', fontSize:'20px',
                            marginBottom: '30px', marginTop: '0px'}}>
                            REGISTER FOR FREE</p>
                            <InputThing placeholder="Full name" type="text"></InputThing>
                            <InputThing placeholder="Email Address" type="text"></InputThing>
                            <InputThing placeholder="User name" type="text"></InputThing>
                            <InputThing placeholder="Password" type="text"></InputThing>
                            <FlexBox style={{width:'100%'}}>
                                <StartNowButton>START NOW</StartNowButton>
                            </FlexBox>
                            <FlexBox>
                                <span style={{fontSize:'12px',opacity:'0.7',whiteSpace: 'pre'}}>By registering you agree to the Zodkoo </span>
                                <span style={{fontSize:'12px',opacity:'0.7',color:'blue'}}>Terms of Use</span>
                            </FlexBox>
                        </FlexBox2>
                    </InputBox>
                </DescriptionDiv>
            </div>
            
            <ProductDiv>
                <FlexBox2>
                    <i class="pe-7s-medal" style={{fontSize:'48px'}}></i>
                    <TextStyle style={{marginBottom: '70px'}}>Clean and Ultra Modern Design</TextStyle>
                </FlexBox2>
                <FlexBox style={{width:'65%', justifyContent:'space-evenly'}}>
                    <FlexBox style={{flexDirection:'column',width:'30%'}}>
                        <p style={{fontWeight: '300', lineHeight: '28px', color: '#95A8B7', fontSize: '18px'}}
                        >Praesent et viverra massa non varius magna eget nibh vitae velit posuere efficitur.</p>
                        <p style={{marginTop: '5px', marginBottom: '20px', lineHeight: '26px', color: '#95A8B7',fontSize: '14px'}}
                        >The clean and well commented code allows easy customization of the theme.It's designed for describing your app, agency or business.We put a lot of effort in design, as it’s the most important ingredient of successful website.Sed ut perspiciatis unde omnis iste natus error sit.We put a lot of effort in design, as it’s the most important ingredient of successful website.
                        </p>

                        <CommonButton>LEARN MORE</CommonButton>
                    </FlexBox>
                    <FlexBox>
                        <img src="/macbook.png" width="650px" height="350px" />
                    </FlexBox>
                </FlexBox>
            </ProductDiv>
            <SpecificationDiv>
                <FlexBox2 style={{marginTop:'100px'}}>
                    <TextStyle>It's designed for describing your app, agency or business</TextStyle>
                    <TextStyleSub>The clean and well commented code allows easy customization of the theme.It's
                    designed for describing your app, agency or business.</TextStyleSub>
                </FlexBox2>
                <DisplayDiv style={{width:'50%'}}>
                    <MiniBox>
                        {FeatureItems1.map((featureItem, idx)=>{
                            return (
                                <MiniBoxFeature key={idx}>
                                    {featureItem.icon}
                                    <SpecTitle>{featureItem.body1}</SpecTitle>
                                    <SpecText>{featureItem.body2}</SpecText>
                                </MiniBoxFeature>
                            )
                        })}
                    </MiniBox>
                    <MiniBox>
                        {FeatureItems2.map((featureItem, idx)=>{
                                return (
                                    <MiniBoxFeature key={idx}>
                                        {featureItem.icon}
                                        <SpecTitle>{featureItem.body1}</SpecTitle>
                                        <SpecText>{featureItem.body2}</SpecText>
                                    </MiniBoxFeature>
                                )
                        })}
                    </MiniBox>
                </DisplayDiv>
            </SpecificationDiv>
            <PriceDiv>
                <FlexBox2 style={{marginBottom: '40px'}}>
                    <TextStyle>Choose your perfect plan</TextStyle>
                    <TextStyleSub>The clean and well commented code allows easy customization of the theme.It's
                    designed for describing your app, agency or business.</TextStyleSub>
                </FlexBox2>
                <FlexBox style={{alignItems:'center'}}>
                    <PriceMenu>
                        <PriceClass>
                            <PriceTitle1>BASIC</PriceTitle1>
                            <PriceTitle2>$19</PriceTitle2>
                            <PriceTitle3>Per Month</PriceTitle3>
                        </PriceClass>
                        <FlexBox style={{flexDirection:'column', marginBottom: '30px'}}>
                            <FlexBox style={{marginBottom:'15px'}}>
                                <i class="pe-7s-server" style={{marginRight: '5px', marginTop:'10px'}}></i>
                                <PriceDetail>10 GB Storage</PriceDetail>
                            </FlexBox>
                            <FlexBox style={{marginBottom:'15px'}}>
                                <i class="pe-7s-graph" style={{marginRight: '5px', marginTop:'10px'}}></i>
                                <PriceDetail>500 GB Bandwidth</PriceDetail>
                            </FlexBox>
                            <FlexBox style={{marginBottom:'15px'}}>
                                <i class="pe-7s-mail-open" style={{marginRight: '5px', marginTop:'10px'}}></i>
                                <PriceDetail>Email Support</PriceDetail>
                            </FlexBox>
                            <FlexBox style={{marginBottom:'15px'}}>
                                <i class="pe-7s-tools" style={{marginRight: '5px', marginTop:'10px'}}></i>
                                <PriceDetail>24x7 Support</PriceDetail>
                            </FlexBox>
                            <CommonButton>SIGNUP NOW</CommonButton>
                        </FlexBox>
                    </PriceMenu>
                    <PriceMenu>
                        <PriceClass>
                            <PriceTitle1>PREMIUM</PriceTitle1>
                            <PriceTitle2>$29</PriceTitle2>
                            <PriceTitle3>Per Month</PriceTitle3>
                        </PriceClass>
                        <FlexBox style={{flexDirection:'column', marginBottom: '30px'}}>
                            <FlexBox style={{marginBottom:'15px'}}>
                                <i class="pe-7s-server" style={{marginRight: '5px', marginTop:'10px'}}></i>
                                <PriceDetail>10 GB Storage</PriceDetail>
                            </FlexBox>
                            <FlexBox style={{marginBottom:'15px'}}>
                                <i class="pe-7s-graph" style={{marginRight: '5px', marginTop:'10px'}}></i>
                                <PriceDetail>500 GB Bandwidth</PriceDetail>
                            </FlexBox>
                            <FlexBox style={{marginBottom:'15px'}}>
                                <i class="pe-7s-mail-open" style={{marginRight: '5px', marginTop:'10px'}}></i>
                                <PriceDetail>Email Support</PriceDetail>
                            </FlexBox>
                            <FlexBox style={{marginBottom:'15px'}}>
                                <i class="pe-7s-tools" style={{marginRight: '5px', marginTop:'10px'}}></i>
                                <PriceDetail>24x7 Support</PriceDetail>
                            </FlexBox>
                            <CommonButton>SIGNUP NOW</CommonButton>
                        </FlexBox>
                    </PriceMenu>
                    <PriceMenu>
                        <PriceClass>
                            <PriceTitle1>DEVELOPER</PriceTitle1>
                            <PriceTitle2>$39</PriceTitle2>
                            <PriceTitle3>Per Month</PriceTitle3>
                        </PriceClass>
                        <FlexBox style={{flexDirection:'column', marginBottom: '30px'}}>
                            <FlexBox style={{marginBottom:'15px'}}>
                                <i class="pe-7s-server" style={{marginRight: '5px', marginTop:'10px'}}></i>
                                <PriceDetail>10 GB Storage</PriceDetail>
                            </FlexBox>
                            <FlexBox style={{marginBottom:'15px'}}>
                                <i class="pe-7s-graph" style={{marginRight: '5px', marginTop:'10px'}}></i>
                                <PriceDetail>500 GB Bandwidth</PriceDetail>
                            </FlexBox>
                            <FlexBox style={{marginBottom:'15px'}}>
                                <i class="pe-7s-mail-open" style={{marginRight: '5px', marginTop:'10px'}}></i>
                                <PriceDetail>Email Support</PriceDetail>
                            </FlexBox>
                            <FlexBox style={{marginBottom:'15px'}}>
                                <i class="pe-7s-tools" style={{marginRight: '5px', marginTop:'10px'}}></i>
                                <PriceDetail>24x7 Support</PriceDetail>
                            </FlexBox>
                            <CommonButton>SIGNUP NOW</CommonButton>
                        </FlexBox>
                    </PriceMenu>
                </FlexBox>
            </PriceDiv>
            <SponsorDiv>
                <FlexBox2 style={{marginBottom: '100px'}}>
                    <TextStyle>Trusted by Thousands</TextStyle>
                    <TextStyleSub>The clean and well commented code allows easy customization of the theme.It's
                    designed for describing your app, agency or business.</TextStyleSub>
                </FlexBox2>
                <FlexBox style={{width:'80%',justifyContent:'center',marginBottom: '70px',alignItems:'center'}}>
                    <img src="/microsoft.png" style={{marginRight:'30px',cursor:'pointer'}} />
                    <img src="/google.png" style={{marginRight:'30px',cursor:'pointer'}} />
                    <img src="/instagram.png" style={{marginRight:'30px',cursor:'pointer'}} />
                    <img src="/converse.png" style={{cursor:'pointer'}} />
                </FlexBox>
                <FlexBox style={{padding: '30px', width:'50%'}}>
                    <div style={{marginRight: '50px'}}>
                        <ReviewBox>
                            <ReviewText>
                                “ There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.”
                            </ReviewText>
                        </ReviewBox>
                        <FlexBox style={{marginLeft: '20px'}}>
                            <FlexBox>
                                <img src="/user.jpg" style={{borderRadius: '50%'}} width="60px" height="60px"/>
                            </FlexBox>
                            <FlexBox style={{flexDirection:'column',marginLeft: '15px'}}>
                                <p style={{fontSize:'14px', marginBottom:'0'}}>Calebogden</p>
                                <p style={{fontWeight:'200',color: '#95A8B7',fontSize:'14px',marginTop:'0'}}>Another company , City</p>
                            </FlexBox>
                        </FlexBox>
                    </div>
                    <div style={{marginRight: '50px'}}>
                        <ReviewBox>
                            <ReviewText>
                                “ There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.”
                            </ReviewText>
                        </ReviewBox>
                        <FlexBox style={{marginLeft: '20px'}}>
                            <FlexBox>
                                <img src="/user2.jpg" style={{borderRadius: '50%'}} width="60px" height="60px"/>
                            </FlexBox>
                            <FlexBox style={{flexDirection:'column',marginLeft: '15px'}}>
                                <p style={{fontSize:'14px', marginBottom:'0'}}>Calebogden</p>
                                <p style={{fontWeight:'200',color: '#95A8B7',fontSize:'14px',marginTop:'0'}}>Another company , City</p>
                            </FlexBox>
                        </FlexBox>
                    </div>
                    <div style={{marginRight: '50px'}}>
                        <ReviewBox>
                            <ReviewText>
                                “ There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.”
                            </ReviewText>
                        </ReviewBox>
                        <FlexBox style={{marginLeft: '20px'}}>
                            <FlexBox>
                                <img src="/user3.jpg" style={{borderRadius: '50%'}} width="60px" height="60px"/>
                            </FlexBox>
                            <FlexBox style={{flexDirection:'column',marginLeft: '15px'}}>
                                <p style={{fontSize:'14px', marginBottom:'0'}}>Calebogden</p>
                                <p style={{fontWeight:'200',color: '#95A8B7',fontSize:'14px',marginTop:'0'}}>Another company , City</p>
                            </FlexBox>
                        </FlexBox>
                    </div>
                </FlexBox>
            </SponsorDiv>
            <ContactDiv>
                <FlexBox2 style={{marginBottom:'30px'}}>
                    <TextStyle2 inputColor="white">Be engaged Newsletter</TextStyle2>
                    <TextStyleSub2 inputColor="white" style={{opacity:'0.7'}}>The clean and well commented code allows easy customization of the theme.It's
                    designed for describing your app, agency or business.</TextStyleSub2>
                </FlexBox2>
                <FlexBox2>
                    <InputSubscribe type="text" placeholder="Enter e-mail address"></InputSubscribe>
                    <SubscribeButton>SUBSCRIBE</SubscribeButton>
                    <p style={{fontSize:'12px', color: 'rgba(255,255,255,0.7)', marginTop: '3px'}}>You can un-subscribe at any time.</p>
                </FlexBox2>
            </ContactDiv>
            <SupportDiv>
                <FlexBox style={{width:'60%', justifyContent:'space-evenly',marginBottom:'70px'}}>
                    <FlexBox flexDirection='column'>
                        <p style={{color:'white',fontWeight: '600'}}>Zodkoo</p>
                        <BottomEtc>Home</BottomEtc>
                        <BottomEtc>Features</BottomEtc>
                        <BottomEtc>Team</BottomEtc>
                        <BottomEtc>FAQ</BottomEtc>
                    </FlexBox>
                    <FlexBox flexDirection='column'>
                        <p style={{color:'white',fontWeight: '600'}}>Social</p>
                        <BottomEtc>Facebook</BottomEtc>
                        <BottomEtc>Twitter</BottomEtc>
                        <BottomEtc>Behance</BottomEtc>
                        <BottomEtc>Dribbble</BottomEtc>
                    </FlexBox>
                    <FlexBox flexDirection='column'>
                        <p style={{color:'white',fontWeight: '600'}}>Support</p>
                        <BottomEtc>Help & Support</BottomEtc>
                        <BottomEtc>Privacy Policy</BottomEtc>
                        <BottomEtc>Terms & Conditions</BottomEtc>
                    </FlexBox>
                    <FlexBox flexDirection='column'>
                        <p style={{color:'white',fontWeight: '600'}}>Contact</p>
                        <p style={{color: 'rgba(255,255,255,0.4)',fontSize:'14px', marginBottom: '5px', marginTop: '5px'}}>795 Folsom Ave, Suite 600</p>
                        <p style={{color: 'rgba(255,255,255,0.4)',fontSize:'14px', marginBottom: '5px', marginTop: '5px'}}>San Francisco, CA 94107</p>
                        <p style={{color: 'rgba(255,255,255,0.4)',fontSize:'14px', marginBottom: '5px', marginTop: '5px'}}>P: (123) 456-7890</p>
                        <BottomEtc>E: email@email.com</BottomEtc>
                    </FlexBox>
                </FlexBox>
                <FlexBox style={{alignItems:'center'}}>
                    <p style={{color: '#95A8B7',fontSize:'14px'}}>2020 © Zodkoo</p>
                </FlexBox>
            </SupportDiv>
        </Body>
    )
}

export default Main