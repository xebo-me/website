import * as React from "react";

import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export const Outline = () => {
    return (
        <Stack spacing={2}>
            <Skeleton variant="rounded" height="5rem" />
            <Skeleton variant="rounded" height="20rem" />
            <Skeleton variant="rounded" height="5rem" />
        </Stack>
    )
}

export default Outline;