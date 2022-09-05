import { Slide, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import { MessageText, PromotionsContainer } from "../../styles/promotions";
import { Colors } from "../../styles/theme";


const slides = [
     "/slides/slide1.PNG",
     "/slides/slide2.PNG",
     "/slides/slide3.PNG",
     "/slides/slide4.PNG",
     "/slides/slide5.PNG",
     "/slides/slide6.PNG",
     "/slides/slide7.PNG",
     "/slides/slide8.PNG",
     "/slides/slide9.PNG",
     "/slides/slide10.PNG",
     "/slides/slide11.PNG",
     "/slides/slide12.PNG",
     "/slides/slide13.PNG",
     "/slides/slide14.PNG",
     "/slides/slide16.PNG",
     "/slides/slide17.PNG"
    ];

  export default function Promotions() {
    const containerRef = useRef();
    const [show, setShow] = useState(true);
      const [messageIndex, setMessageIndex] = useState(0);
      useEffect(() => {
              setTimeout(() => {
                setShow(false);
              }, 3000);
      const intervalId = setInterval(() => {
        // get next message
        setMessageIndex((i) => (i + 1) % slides.length);
  
        // slide the message in
          setShow(true);
  
        setTimeout(() => {
          setShow(false);
        }, 3000);
      }, 4000);
  
      return () => {
          clearInterval(intervalId);
        };
      }, []);

   return (

              <PromotionsContainer ref={containerRef} overflow="hidden">
                <Slide
                  direction={show ? "left" : "right"}
                  in={show}
                  container={containerRef.current}
                  timeout={{
                    enter: 500,
                    exit: 100,
                  }}
                >
                  <Box display="flex" justifyContent="center" alignItems="center">
                    <MessageText>
                    <img src={ slides[messageIndex]} />
                    </MessageText>
                  </Box>
                </Slide>
              </PromotionsContainer>
        
   );
}
  
//     return (
//     );
//   }
  