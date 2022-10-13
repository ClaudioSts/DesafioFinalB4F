import Button from "@mui/material/Button";
import ButtonGroup from '@mui/material/ButtonGroup';

export default function ShowButtons() {

        return (
            <div>
                <ButtonGroup variant="outlined" aria-label="functions">
                    <Button variant="outlined">
                        Delete
                    </Button>
                    <Button variant="outlined">
                        Edit
                    </Button>
                </ButtonGroup>
            </div>
        )
}