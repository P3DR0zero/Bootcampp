import Typography from '@mui/material/Typography';
import FormColaborador from "@/app/ui/forms/formcolaborador";

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h2" sx={{ textAlign: 'center' }}>
        PROCEEM
      </Typography>
      <FormColaborador />
    </div>
  );
}