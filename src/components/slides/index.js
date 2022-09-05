import { Slide, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import { MessageText, PromotionsContainer } from "../../styles/promotions";
import { Colors } from "../../styles/theme";


const slides = [
     "%PUBLIC_URL%/slides/Slide1.PNG",
     "./slides/Slide2.PNG",
     "../slides/Slide3.PNG",
     "/slides/slide4.PNG",
     "./slides/slide5.PNG",
     "/slides/Slide6.PNG",
     "/slides/Slide7.PNG",
     "/slides/Slide8.PNG",
     "/slides/Slide9.PNG",
     "/slides/Slide10.PNG",
     "/slides/Slide11.PNG",
     "/slides/Slide12.PNG",
     "/slides/Slide13.PNG",
     "/slides/Slide14.PNG",
     "/slides/Slide16.PNG",
     "/slides/Slide17.PNG"
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
  