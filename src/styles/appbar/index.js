import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { IconButton, List, Typography } from "@mui/material";
import { Colors, DrawerWidth } from "../theme";

import "@fontsource/museomoderno"

// container
export const AppbarContainer = styled(Box)(() => ({
    display: 'flex',
    marginTop: 4,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2px,8px'

}));

//header
export const AppbarHeader = styled(Typography)(() => ({
    display: 'flex',
    flexGrow: 1,
    fontFamily: '"museomoderno"',
    fontSize: '4em',
    color: Colors.primary,
    padding: '4px'
})); 

export const ActionIconsContainerMobile = styled(Box)(() => ({
    display: 'flex',
    background: Colors.shaft,
    position: "fixed",
    bottom: 0,
    left: 0,
    width: '100%',
    alignItems: 'center',
    zIndex: 99,  
    borderTop: `1px solid ${Colors.border}`
  }));
  
  export const ActionIconsContainerDesktop = styled(Box)(() => ({
    flexGrow: 0,
  }));
  
  export const MyList = styled(List)(({ type }) => ({
      display: type === "row" ? "flex" : "block",
      flexGrow: 3,
    justifyContent: "center",
    alignItems: "center",
  }));
  
  
  
  export const DrawerCloseButton = styled(IconButton)(() => ({
    position: 'absolute',
    top: 10,
    left: DrawerWidth,
    zIndex: 1999,      
  }));  