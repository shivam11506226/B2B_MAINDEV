import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";

import { ListItem, ListItemButton, ListItemIcon, ListItemText, Collapse } from '@mui/material';

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import Tables from "./Table/Table";
import MarkUpAmount from "./Table/MarkUpAmount";
import PackageDetails from "./Table/packageUpdate/PackageDetails";
import EditHolidayPackage from "./Table/packageUpdate/EditPackage";
import { useLocation, useNavigate } from "react-router-dom";
import ForexData from "./Table/Forex/ForexData";
import VisaData from "./Table/VisaData/VisaData";
import { useDispatch, useSelector, useReducer } from "react-redux";
import { adminSignOut } from "../../../Redux/Auth/AdminSignOut/actionAdminSignOut";
import STLOGO from "../../../Images/ST-Main-Logo.png";
import RiseLoader from "react-spinners/RiseLoader";
import HotelBookings from './Table/HotelBookings/HotelBookings';
import FlightBookings from './Table/FlightBookings/Flightbookings';
import BusBookings from './Table/BusBookings/BusBookings';

import UserHotelBookings from './Table/HotelBookings/UserHotelBookings';
import UserFlightBookings from './Table/FlightBookings/UserFlightBookings';
import UserBusBookings from './Table/BusBookings/UserBusBookings'
import BtoBAgent from './Table/BtoBAgent';
import BtoCAgent from './Table/BtoCAgent'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AgentRequest from './Table/AgentRequest/AgentRequest';
import {
  Toolbar,
  IconButton,
  Typography,
  Avatar,
  Tooltip,
  Menu,
  MenuItem,
  Divider,
  InputBase,
  Badge,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Groups3Icon from '@mui/icons-material/Groups3';
import AdminDashboard from './AdminDashboard';
import CancelTicketRequest from './Table/CancelTicketRequest/CancelTicketRequest';
import OfferList from './Table/OfferList/OfferList';
const drawerWidth = 240;


const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [menuData, setMenuData] = useState("Home");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleMenuItemClick = (menuItem) => {
    setLoading(true);
    setMenuData(menuItem);

    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const openAccountMenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const activeMenuItemClass = {
    backgroundColor: "#2196F3",
    color: "#fff",
  };
  const inactiveMenuItemClass = {
    backgroundColor: "transparent",
    color: "#000",
  };
  const location = useLocation();
  const signOutAdmin = () => {
    dispatch(adminSignOut());
    navigate("/adminLogin");
  };

  const [openCollapse, setOpenCollapse] = useState(false);

  const handleButtonClick = () => {
    setOpenCollapse(!openCollapse);
  };

  const [openCollapseTwo, setOpenCollapseTwo] = useState(false);

  const handleButtonClickTwo = () => {
    setOpenCollapseTwo(!openCollapseTwo);
  };


  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            backgroundColor: "#fff",
            color: "#2f2f2f",
            borderBottom: "none",
            fontSize: "1.2rem",
            height: "64px",
            // padding: "0 16px",
            backdropFilter: "blur(5px)",
            transition: "background-color 0.3s ease-in-out",
            boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => {
                setOpen(!open);
              }}
              edge="start"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h4" noWrap component="div">
              <img src={STLOGO} height={100} margin-top={100} alt="logo" />
            </Typography>
            {/* Search Bar */}
            <div style={{ display: 'flex', alignItems: 'center', margin: '0 auto' }}>
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)' }}>
                  <SearchIcon />
                </div>
                <InputBase placeholder="Search..." style={{ paddingLeft: '30px' }} />
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>

              {/* Notification Icon */}
              <IconButton color="inherit" size="large">
                <Badge badgeContent={4} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>

              <Tooltip title="Account">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2, marginLeft: "auto" }}
                  aria-controls={openAccountMenu ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={openAccountMenu ? "true" : undefined}
                >
                  <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                </IconButton>
              </Tooltip>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={openAccountMenu}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem onClick={handleClose}>
                  <Avatar /> Profile
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Avatar /> My account
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <PersonAdd fontSize="small" />
                  </ListItemIcon>
                  Add another account
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleClose();
                    signOutAdmin();
                  }}
                >
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => handleMenuItemClick("Home")}
              className={
                menuData === "Home" ? "active-menu-item" : "inactive-menu-item"
              }
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  ...((menuData === "Home"
                    ? activeMenuItemClass
                    : inactiveMenuItemClass) || {}),
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <HomeOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Home" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => handleMenuItemClick("User Table")}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  ...((menuData === "User Table"
                    ? activeMenuItemClass
                    : inactiveMenuItemClass) || {}),
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <PeopleOutlinedIcon />
                </ListItemIcon>
                <ListItemText
                  primary="User Table"
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => handleMenuItemClick("AgentRequest")}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  ...((menuData === "AgentRequest"
                    ? activeMenuItemClass
                    : inactiveMenuItemClass) || {}),
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <Groups3Icon />
                </ListItemIcon>
                <ListItemText
                  primary="AgentRequest"
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => handleMenuItemClick("Cancel Ticket")}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  ...((menuData === "Cancel Ticket"
                    ? activeMenuItemClass
                    : inactiveMenuItemClass) || {}),
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <CalendarTodayOutlinedIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Cancel Ticket"
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>


            </ListItem>
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => handleMenuItemClick("User MarkUp Amount")}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  ...((menuData === "User MarkUp Amount"
                    ? activeMenuItemClass
                    : inactiveMenuItemClass) || {}),
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <ContactsOutlinedIcon />
                </ListItemIcon>
                <ListItemText
                  primary="User MarkUp Amount"
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => handleMenuItemClick("Edit Holiday Package")}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  ...((menuData === "Edit Holiday Package"
                    ? activeMenuItemClass
                    : inactiveMenuItemClass) || {}),
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <ReceiptOutlinedIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Edit Holiday Package"
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => handleMenuItemClick("Forex")}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  ...((menuData === "Forex"
                    ? activeMenuItemClass
                    : inactiveMenuItemClass) || {}),
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <HelpOutlineOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Forex" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'center' : 'center',
                  px: 2.5,
                  // Add your other styles here
                }}
                onClick={handleButtonClick}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: openCollapse ? 3 : '3',
                    justifyContent: 'center',
                  }}
                >
                  <AccountBoxIcon />
                </ListItemIcon>
                <ListItemText primary="AGENT B2B" />
              </ListItemButton>
              <Collapse in={openCollapse} timeout="auto" unmountOnExit>
                <ListItem
                  disablePadding
                  sx={{ display: "block" }}
                  onClick={() => handleMenuItemClick("Hotel Bookings")}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                      ...((menuData === "Hotel Bookings"
                        ? activeMenuItemClass
                        : inactiveMenuItemClass) || {}),
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <AccountBoxIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="Hotel Bookings"
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </ListItem>

                <ListItem
                  disablePadding
                  sx={{ display: "block" }}
                  onClick={() => handleMenuItemClick("Flight Bookings")}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                      ...((menuData === "Flight Bookings"
                        ? activeMenuItemClass
                        : inactiveMenuItemClass) || {}),
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <AccountBoxIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="Flight Bookings"
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem
                  disablePadding
                  sx={{ display: "block" }}
                  onClick={() => handleMenuItemClick("Bus Bookings")}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                      ...((menuData === "Bus Bookings"
                        ? activeMenuItemClass
                        : inactiveMenuItemClass) || {}),
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <AccountBoxIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="Bus Bookings"
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </ListItem>
              </Collapse>
            </ListItem>

            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: 'center',
                  px: 2.5,
                  // Add your other styles here
                }}
                onClick={handleButtonClickTwo}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: '3',
                    justifyContent: 'center',
                  }}
                >
                  <AccountBoxIcon />
                </ListItemIcon>
                <ListItemText primary="USER B2C" />
              </ListItemButton>
              <Collapse in={openCollapseTwo} timeout="auto" unmountOnExit>
                <ListItem
                  disablePadding
                  sx={{ display: "block" }}
                  onClick={() => handleMenuItemClick("Hotel BookingList")}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                      ...((menuData === "Hotel BookingList"
                        ? activeMenuItemClass
                        : inactiveMenuItemClass) || {}),
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <AccountBoxIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="Hotel Bookings"
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </ListItem>

                <ListItem
                  disablePadding
                  sx={{ display: "block" }}
                  onClick={() => handleMenuItemClick("Flight BookingList")}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                      ...((menuData === "Flight BookingList"
                        ? activeMenuItemClass
                        : inactiveMenuItemClass) || {}),
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <AccountBoxIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="Flight BookingList"
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem
                  disablePadding
                  sx={{ display: "block" }}
                  onClick={() => handleMenuItemClick("Bus BookingList")}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                      ...((menuData === "Bus BookingList"
                        ? activeMenuItemClass
                        : inactiveMenuItemClass) || {}),
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <AccountBoxIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="Bus BookingList"
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </ListItem>
              </Collapse>
            </ListItem>


            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => handleMenuItemClick("Visa Request")}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  ...((menuData === "Visa Request"
                    ? activeMenuItemClass
                    : inactiveMenuItemClass) || {}),
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <CalendarTodayOutlinedIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Visa Request"
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>


            </ListItem>
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => handleMenuItemClick("OfferList")}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  ...((menuData === "OfferList"
                    ? activeMenuItemClass
                    : inactiveMenuItemClass) || {}),
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <PeopleOutlinedIcon />
                </ListItemIcon>
                <ListItemText
                  primary="OfferList"
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
        </Drawer>

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {loading ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                width: "100vw",
                border: "1px solid"
              }}
            >
              <RiseLoader
                color="#35C7AB"
                loading={loading}
                size={30}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
          ) : (
            <div>
              {menuData === 'Home' && <AdminDashboard />}
              {menuData === "User Table" && <Tables />}
              {menuData === "AgentRequest" && <AgentRequest />}
              {menuData === "Cancel Ticket" && <CancelTicketRequest />}
              {menuData === "User MarkUp Amount" && <MarkUpAmount />}
              {menuData === "Edit Holiday Package" && <PackageDetails />}
              {menuData === "Forex" && <ForexData />}
              {menuData === "Visa Request" && <VisaData />}
              {menuData === "Hotel Bookings" && <HotelBookings />}
              {menuData === "Flight Bookings" && <FlightBookings />}
              {menuData === "Bus Bookings" && <BusBookings />}
              {menuData === "Hotel BookingList" && <UserHotelBookings />}
              {menuData === "Flight BookingList" && <UserFlightBookings />}
              {menuData === "Bus BookingList" && <UserBusBookings />}
            </div>
          )}

        </Box>
      </Box>
    </>
  );
}
