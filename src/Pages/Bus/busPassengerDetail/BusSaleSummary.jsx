import React from 'react'
import { Typography,Box} from "@mui/material";





const BusSaleSummary = () => {
    return (
        <Box sx={{ flexGrow: 1 }} >
            <Box py={1}
                backgroundColor="white"
                boxShadow="1px 1px 8px gray"
                borderRadius="10px"
            >
                <Typography textAlign='center' sx={{ fontSize: '16px', fontWeight: 'bold' }} pt={3}>
                    Sale Summary
                </Typography>
                <Typography
                    pt={1}
                    paddingLeft="22px"
                    justifyContent="start"
                    display="flex"
                    sx={{ fontSize: "10px", fontWeight: "bold", color: "#006FFF" }}
                >
                    Travel: Ashok Travels Mandsaur Group
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginY: "5px",
                        marginX: "20px",
                    }}
                >


                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginY: "5px",
                        marginX: "20px",
                    }}
                >
                    <Box>
                        <Typography
                            sx={{ fontSize: "10px", color: "#666666", fontWeight: "bold" }}
                        >
                            Published Price:
                        </Typography>
                    </Box>
                    <Box>
                        <Typography
                            sx={{ fontSize: "10px", color: "#FF8900", fontWeight: "bold" }}
                        >
                            ₹3534
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginY: "5px",
                        marginX: "20px",
                    }}
                >
                    <Box>
                        <Typography
                            sx={{ fontSize: "10px", color: "#666666", fontWeight: "bold" }}
                        >
                            Offered Price:
                        </Typography>
                    </Box>
                    <Box>
                        <Typography
                            sx={{ fontSize: "10px", color: "#FF8900", fontWeight: "bold" }}
                        >
                            ₹2534
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginY: "5px",
                        marginX: "20px",
                    }}
                >
                    <Box>
                        <Typography
                            sx={{ fontSize: "10px", color: "#666666", fontWeight: "bold" }}
                        >
                            Commission Earned:
                        </Typography>
                    </Box>
                    <Box>
                        <Typography
                            sx={{ fontSize: "10px", color: "#FF8900", fontWeight: "bold" }}
                        >
                            ₹1000
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginY: "5px",
                        marginX: "20px",
                    }}
                >
                    <Box>
                        <Typography
                            sx={{ fontSize: "10px", color: "#666666", fontWeight: "bold" }}
                        >
                            TDS:
                        </Typography>
                    </Box>
                    <Box>
                        <Typography
                            sx={{ fontSize: "10px", color: "#FF8900", fontWeight: "bold" }}
                        >
                            ₹100
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginY: "5px",
                        marginX: "20px",
                    }}
                >
                    <Box>
                        <Typography
                            sx={{ fontSize: "12px", color: "#006FFF", fontWeight: "bold" }}
                        >
                            Grand Total
                        </Typography>
                    </Box>
                    <Box>
                        <Typography
                            sx={{ fontSize: "12px", color: "#FF8900", fontWeight: "bold" }}
                        >
                            ₹2634
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default BusSaleSummary;
