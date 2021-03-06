import React from 'react';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ContentCopy from '@material-ui/icons/ContentCopy';
import Tooltip from 'material-ui/Tooltip';
import Button from 'material-ui/Button';

const styles = (theme) => ({
  root: {
    width: 'fit-content',
    border: `1px solid ${theme.palette.copyToClipboard}`,
    display: 'flex',
    alignItems: 'center',
    borderRadius: '25px',
  },
  icon: {
    fontSize: '20px',
  },
  button: {
    borderLeft: `1px solid ${theme.palette.copyToClipboard}`,
    borderRadius: '0px 25px 25px 0px',
  },
  text: {
    padding: '0 10px 0 10px',
  },
});

function CopyToClipboad({ classes, text }) {
  return (
    <span className={classes.root}>
      <span className={classes.text}>{text}</span>
      <Tooltip title="Copy" placement="bottom">
        <CopyToClipboard text={text}>
          <Button size="small" className={classes.button}>
            <ContentCopy className={classes.icon} />
          </Button>
        </CopyToClipboard>
      </Tooltip>
    </span>
  );
}

CopyToClipboad.propTypes = {
  classes: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
};

export default withStyles(styles)(CopyToClipboad);
