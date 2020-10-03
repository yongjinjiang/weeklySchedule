import React from 'react';
import Game1 from './Game1';
import {Table} from './tablePlaceValue'; 
// import { Deck, Slide, Heading } from 'spectacle';

import {
  Appear,
  Box,
  CodePane,
  CodeSpan,
  Deck,
  FlexBox,
  FullScreen,
  Grid,
  Heading,
  Image,
  ListItem,
  Markdown,
  Notes,
  OrderedList,
  Progress,
  Slide,
  SpectacleLogo,
  Stepper,
  Text,
  UnorderedList,
  indentNormalizer
} from 'spectacle';
import { fontSize } from 'styled-system';

// SPECTACLE_CLI_THEME_START
const theme = {
  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif'
  }
};
// SPECTACLE_CLI_THEME_END

// SPECTACLE_CLI_TEMPLATE_START
const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <Progress />
    </Box>
  </FlexBox>
);
// SPECTACLE_CLI_TEMPLATE_END

var smallfont = 20;
var mediumfont = 30;





function App() {
  return (
    <Deck theme={theme} template={template} transitionEffect="fade">
      {/* <Slide>
        <Heading>Welcome to Spectacle</Heading>
      </Slide>
      <Slide>
        <Heading>Welcome to Spectacle2</Heading>
      </Slide> */}



      {/* <Slide>
   
   <FlexBox>
   <Appear elementNum={-1}>
   <Text fontSize={{mediumfont}}>Coding  编程
 </Text>
   </Appear>
    </FlexBox>  
   

   <Appear elementNum={0}>
   <Text>
         <span style={{fontSize: "30px"}}>
                    1. Pulled a dataset from United States Geological Surve(USGS) and put them into a map: <a style={{color:"red"}} target="_blank" href="https://yongjinjiang.github.io/Mapping-earthquake">Earthquake in the past 7 days.</a>
                </span> 
                </Text>
   </Appear>

   <Appear elementNum={1}>
   <Text>
         <span style={{fontSize: "30px"}}>
                    2. Made a personal website: <a style={{color:"red"}} target="_blank" href="https://yongjinjiang.com/">my website</a>
                </span> 
                </Text>
   </Appear>
   

   <Appear elementNum={2}>
   <Text>
         <span style={{fontSize: "30px"}}>
                    3. Working on a math game app: <a style={{color:"red"}} target="_blank"  href="http://0.0.0.0:8000/#/6">A simple game app</a>
                </span> 
                </Text>
   </Appear>
     <Notes>
       <p>
       大家如果觉得好玩，在学好数学的基础上，我会教你们编程，用计算机来帮我们解决一些麻烦的数学问题
（比如怎么计算1000里面的质数，或者在1000里面验证哥德巴赫猜想），或者从头开始做一个简易家庭网站。
       </p>
     </Notes>
   </Slide>

<Slide>
  <Game1  />
 </Slide> */}


 {/* <Slide>

    <Table />
  
 </Slide> */}


 <Slide>

<Table />

</Slide>

<Slide>
<span style={{color:"white", fontSize:"60px"}}>Let's practise</span>
<span style={{color:"#f542f5", fontSize:"55px"}}>4th grade</span>
<a href="https://www.ixl.com/math/grade-4/multiply-by-10-or-100"><span style={{color:"yellow", fontSize:"30px"}}>1. multiply-by-10-or-100</span></a>
<a href="https://www.ixl.com/math/grade-4/multiplication-patterns-over-increasing-place-values"><span style={{color:"yellow", fontSize:"30px"}}>2. Multiplication patterns over increasing place values
</span></a>


<br/><br/><br/>
<span style={{color:"#f542f5", fontSize:"55px"}}>5th grade</span>
<a href="https://www.ixl.com/math/grade-5/place-value"><span style={{color:"yellow", fontSize:"30px"}}>1. place value</span></a>
<a href="https://www.ixl.com/math/grade-5/writing-numbers-in-words-convert-words-to-digits"><span style={{color:"yellow", fontSize:"30px"}}>2. Writing numbers in words: convert words to digits
</span></a>
</Slide>

</Deck>
  );
}
export default App;


// export Table;