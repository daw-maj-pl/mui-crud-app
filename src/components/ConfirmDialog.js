import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography
} from '@material-ui/core';
import Controls from './controls/Controls';

const ConfirmDialog = ({ confirmDialog, setConfirmDialog }) => {
  return (
    <Dialog open={confirmDialog.isOpen}>
      <DialogTitle></DialogTitle>
      <DialogContent>
        <Typography variant="h6">{confirmDialog.title}</Typography>
        <Typography variant="subtitle2">{confirmDialog.subTitle}</Typography>
      </DialogContent>
      <DialogActions>
        <Controls.Button text="No" color="default" />
        <Controls.Button text="Yes" color="secondary" />
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
