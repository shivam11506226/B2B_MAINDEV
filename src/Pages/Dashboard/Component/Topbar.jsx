// import { FiBell,  FiUser } from "react-icons/fi";
// import { BsMenuAppFill } from "react-icons/bs";
// import { useContext } from "react";
// import { openContext } from "../Context-Api/ContextApi";

// export default function Topbar() {
//   const {open} = useContext(openContext)
//   return (
//     <div className="fixed top-0 left-0 right-0">
//     <div className={open ? "relative bg-[#8995ef]" : "bg-[#6778EF]"}>
//       <div className={"mx-auto max-w-7xl px-4 sm:px-6 "}>
//         <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
//           <div className="flex justify-start lg:w-0 lg:flex-1">
//             <h3 className="text-white">Dashobard</h3>
//           </div>

//           <div className="hidden items-center justify-end  md:flex md:flex-1 lg:w-0">
//             <a
//               href="#"
//               className="whitespace-nowrap font-medium text-white text-2xl pr-5"
//             >
//               <FiBell />
//             </a>
//             <a
//               href="#"
//               className="whitespace-nowrap font-medium text-white text-2xl pr-6 border-r-2 border-white"
//             >
//               <BsMenuAppFill />
//             </a>
//             <div className="rounded-full flex items-center pl-6">
//               <figure>
//                 <img
//                   className="rounded-full h-8 mr-4 mt-3"
//                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzM4BlE2x4m-cMkYV3sn4ytUSUDd3N3XklJMcyXHA&s"
//                   alt="user"
//                 />
//               </figure>
//               <figcaption className=" text-white">Raunak Sharma</figcaption>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// }
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import tra from "../../../Images/tra.png";
import { useDispatch, useSelector } from "react-redux";
import { adminSignOut } from "../../../Redux/Auth/AdminSignOut/actionAdminSignOut";
import { useNavigate } from "react-router-dom";
import STLOGO from "../../../Images/ST-Main-Logo.png";
import "../Component/Topbar.css"
// const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const reducerState = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const signOutAdmin = () => {
    dispatch(adminSignOut());
    navigate("/adminLogin");
  };


  return (
    <AppBar
    className="app-bar"
      sx={{
        position: "fixed",
        left: 0,
        top: 0,
        zIndex: "100",
        flexGrow: 1,
        py: 2,
      }}
      position="static"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <a href="/admin/dashboard">
            <img
              src={STLOGO}
              className="logo"
              alt="skyTrails Logo" height={40} 
            />

          </a>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            skyTrails
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>

          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Button>
              <Typography
                color="white"
                fontSize="15px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                onClick={signOutAdmin}
              >
                Log Out
              </Typography>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
