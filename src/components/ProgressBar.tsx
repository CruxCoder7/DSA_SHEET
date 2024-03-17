'use client';
import Box from '@mui/material/Box';
import LinearProgress, {
  LinearProgressProps,
} from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number; max_value: number }
) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress
          variant="determinate"
          {...props}
          color="success"
          style={{ height: '10px', borderRadius: '10px' }}
        />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" className="text-white">{`${Math.round(
          props.value / (100 / props.max_value)
        )}/${props.max_value}`}</Typography>
      </Box>
    </Box>
  );
}

export default function LinearWithValueLabel({
  progress_value,
  max_value,
}: {
  progress_value: number;
  max_value: number;
}) {
  return (
    <Box sx={{ width: '60%', margin: 'auto' }}>
      <LinearProgressWithLabel
        value={progress_value * (100 / max_value)}
        max_value={max_value}
      />
    </Box>
  );
}
