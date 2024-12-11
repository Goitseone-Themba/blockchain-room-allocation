import { Typography } from "@mui/material"

export const PageError = ({ message }: { message: string }) => (
    <div>
        <Typography variant="h1">Error</Typography>
        <Typography variant="body1">{message}</Typography>
    </div>
)
