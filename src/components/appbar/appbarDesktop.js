import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
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

  export default function AppbarDesktop({ matches }) {
    return (
        <AppbarContainer>
          <AppbarHeader variant="h4">My Bags</AppbarHeader>
        </AppbarContainer>
      );
    }