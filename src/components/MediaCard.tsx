import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">Subject</Typography>
        <Typography variant="body2" color="text.secondary">#12345</Typography>
        <Typography variant="body2" color="text.secondary">Suthichai.S</Typography>
        <Typography variant="body2" color="text.secondary">Humanica</Typography>
        <Typography variant="body2" color="text.secondary">11.26 AM</Typography>
        <Typography variant="body2" color="text.secondary">11.26 AM</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">More Info</Button>
      </CardActions>
    </Card>
  );
}
