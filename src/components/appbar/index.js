import {
    Box,
    Divider,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Stack,
    Typography,
  } from "@mui/material";
import { useMediaQuery} from "@mui/material";
import { useTheme} from "@mui/material/styles";
import {AppbarDesktop} from "./appbarDesktop";
import {AppbarMobile} from "./appbarMobile";
import {
    AppbarActionIcons,
    AppbarContainer,
    AppbarHeader,
    MyList,
  } from "../../styles/appbar";
  

export default function Appbar() {

    const theme= useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <>
        <AppbarContainer>
          <AppbarHeader variant="h4">MicrobIQ</AppbarHeader>
              <MyList type="row">
              <ListItemText primary="Home" />
              <ListItemText primary="About us" />
              <ListItemText primary="Products" />
              <ListItemText primary="Contact us" />
              <ListItemText primary="Customer Portal" />
                </MyList>
        </AppbarContainer>
        <h2>This site is under construction.  Please have patience, we will be up soon.</h2>
        </>
    );
}
    /*
              <ListItemButton onClick={() => setShowSearchBox(true)}>
                <ListItemIcon>
                  <SearchIcon />
                </ListItemIcon>
              </ListItemButton>
    */
    /*
    {matches ? matches= {matches} :  }
    {matches ? <AppbarMobile matches={matches}/> : <AppbarDesktop matches={matches}/> }
    <>
    </>
*/