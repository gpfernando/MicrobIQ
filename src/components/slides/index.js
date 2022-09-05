import { Slide, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import { MessageText, PromotionsContainer } from "../../styles/promotions";
import { Colors } from "../../styles/theme";


const slides = [
     "/slides/slide1.jpg",
     "/slides/slide2jpg",
     "/slides/slide3jpg",
     "/slides/slide4jpg",
     "/slides/slide5jpg",
     "/slides/slide6jpg",
     "/slides/slide7jpg",
     "/slides/slide8jpg",
     "/slides/slide9jpg",
     "/slides/slide10jpg",
     "/slides/slide11jpg",
     "/slides/slide12jpg",
     "/slides/slide13jpg",
     "/slides/slide14jpg",
     "/slides/slide16jpg",
     "/slides/slide17jpg"
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
  