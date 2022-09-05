import { Slide, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import { MessageText, PromotionsContainer } from "../../styles/promotions";
import { Colors } from "../../styles/theme";


const slides = [
     "/slides/slide1.jpg",
     "/slides/slide2.jpg",
     "/slides/slide3.jpg",
     "/slides/slide4.jpg",
     "/slides/slide5.jpg",
     "/slides/slide6.jpg",
     "/slides/slide7.jpg",
     "/slides/slide8.jpg",
     "/slides/slide9.jpg",
     "/slides/slide10.jpg",
     "/slides/slide11.jpg",
     "/slides/slide12.jpg",
     "/slides/slide13.jpg",
     "/slides/slide14.jpg",
     "/slides/slide16.jpg",
     "/slides/slide17.jpg"
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
  