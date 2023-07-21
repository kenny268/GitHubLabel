import * as React from 'react';
import { useTheme, styled } from '@mui/material/styles';
import Popper from '@mui/material/Popper';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import Autocomplete, {
  AutocompleteCloseReason,
  autocompleteClasses,
} from '@mui/material/Autocomplete';
import ButtonBase from '@mui/material/ButtonBase';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';

interface PopperComponentProps {
  anchorEl?: any;
  disablePortal?: boolean;
  open: boolean;
}

const StyledAutocompletePopper = styled('div')(({ theme }) => ({
  [`& .${autocompleteClasses.paper}`]: {
    boxShadow: 'none',
    margin: 0,
    color: 'inherit',
    fontSize: 13,
  },
  [`& .${autocompleteClasses.listbox}`]: {
    backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#1c2128',
    padding: 0,
    [`& .${autocompleteClasses.option}`]: {
      minHeight: 'auto',
      alignItems: 'flex-start',
      padding: 8,
      borderBottom: `1px solid  ${
        theme.palette.mode === 'light' ? ' #eaecef' : '#30363d'
      }`,
      '&[aria-selected="true"]': {
        backgroundColor: 'transparent',
      },
      [`&.${autocompleteClasses.focused}, &.${autocompleteClasses.focused}[aria-selected="true"]`]:
        {
          backgroundColor: theme.palette.action.hover,
        },
    },
  },
  [`&.${autocompleteClasses.popperDisablePortal}`]: {
    position: 'relative',
  },
}));

function PopperComponent(props: PopperComponentProps) {
  const { disablePortal, anchorEl, open, ...other } = props;
  return <StyledAutocompletePopper {...other} />;
}

const StyledPopper = styled(Popper)(({ theme }) => ({
  border: `1px solid ${theme.palette.mode === 'light' ? '#e1e4e8' : '#30363d'}`,
  boxShadow: `0 8px 24px ${
    theme.palette.mode === 'light' ? 'rgba(149, 157, 165, 0.2)' : 'rgb(1, 4, 9)'
  }`,
  borderRadius: 6,
  width: 300,
  zIndex: theme.zIndex.modal,
  fontSize: 13,
  color: theme.palette.mode === 'light' ? '#24292e' : '#c9d1d9',
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#1c2128',
}));

const StyledInput = styled(InputBase)(({ theme }) => ({
  padding: 10,
  width: '100%',
  borderBottom: `1px solid ${
    theme.palette.mode === 'light' ? '#eaecef' : '#30363d'
  }`,
  '& input': {
    borderRadius: 4,
    backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#0d1117',
    padding: 8,
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    border: `1px solid ${theme.palette.mode === 'light' ? '#eaecef' : '#30363d'}`,
    fontSize: 14,
    '&:focus': {
      boxShadow: `0px 0px 0px 3px ${
        theme.palette.mode === 'light'
          ? 'rgba(3, 102, 214, 0.3)'
          : 'rgb(12, 45, 107)'
      }`,
      borderColor: theme.palette.mode === 'light' ? '#0366d6' : '#388bfd',
    },
  },
}));

const Button = styled(ButtonBase)(({ theme }) => ({
  fontSize: 13,
  width: '100%',
  textAlign: 'left',
  paddingBottom: 8,
  color: theme.palette.mode === 'light' ? '#586069' : '#8b949e',
  fontWeight: 600,
  '&:hover,&:focus': {
    color: theme.palette.mode === 'light' ? '#0366d6' : '#58a6ff',
  },
  '& span': {
    width: '100%',
  },
  '& svg': {
    width: 16,
    height: 16,
  },
}));



export default function GitHubLabel({labels}) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [value, setValue] = React.useState<LabelType[]>([labels[1], labels[11]]);
    const [pendingValue, setPendingValue] = React.useState<LabelType[]>([]);
    const theme = useTheme();
  
    const handleClose = () => {
      setValue(pendingValue);
      if (anchorEl) {
        anchorEl.focus();
      }
      setAnchorEl(null);
    };

    const handleClick = (value) => {
      console.log(value)
    }
  
    const open = Boolean(anchorEl);
    const id = open ? 'github-label' : undefined;
  
    return (
      <React.Fragment>
        <Box sx={{ width: 221, fontSize: 13 }}>
         
          <h1
          
          
          ref={(node) => {
              setAnchorEl(node);
            }}
            style={{
              textAlign: 'center',
              fontSize: '3.2em',
              backgroundColor: '#ffff',
              lineHeight: 1.1,
              color: 'black',
              padding: '2px',
              width: '298px',
            }}
            onClick={() => {
              setPendingValue(value);
            }}>Countries</h1>
          {value.map((label) => (
            <Box
              key={label.name}
              sx={{
                mt: '3px',
                height: 20,
                padding: '.15em 4px',
                fontWeight: 600,
                lineHeight: '15px',
                borderRadius: '2px',
              }}
            
            >
              {label.name}
            </Box>
          ))}
        </Box>
        <StyledPopper id={id} open={open} anchorEl={anchorEl} placement="bottom-start">
          <ClickAwayListener onClickAway={handleClose}>
            <div>
              
              <Autocomplete
                open
                multiple
                onClose={(
                  event: React.ChangeEvent<{}>,
                  reason: AutocompleteCloseReason,
                ) => {
                  if (reason === 'escape') {
                    handleClose();
                  }
                }}
                value={pendingValue}
                onChange={(event, newValue, reason) => {
                  if (
                    event.type === 'keydown' &&
                    (event as React.KeyboardEvent).key === 'Backspace' &&
                    reason === 'removeOption'
                  ) {
                    return;
                  }
                  setPendingValue(newValue);
                }}
                disableCloseOnSelect
                PopperComponent={PopperComponent}
                renderTags={() => null}
                noOptionsText="No labels"
                renderOption={(props, option, { selected }) => (
                  <li {...props}>
                    <Box
                      component={DoneIcon}
                      sx={{ width: 17, height: 17, mr: '5px', ml: '-2px' }}
                      style={{
                        visibility: selected ? 'visible' : 'hidden',
                      }}
                    />
                    <Box
                      component="span"
                      sx={{
                        width: 14,
                        height: 14,
                        flexShrink: 0,
                        borderRadius: '3px',
                        mr: 1,
                        mt: '2px',
                      }}
                      style={{backgroundImage: `url(${option.icon})`}}

                      
                    />
                    <Box
                      sx={{
                        flexGrow: 1,
                        '& span': {
                          color:
                            theme.palette.mode === 'light' ? '#586069' : '#8b949e',
                        },
                      }}
                    >
                      {option.name}
                      <br />
                      
                    </Box>
                    <Box
                      component={CloseIcon}
                      sx={{ opacity: 0.6, width: 18, height: 18 }}
                      style={{
                        visibility: selected ? 'visible' : 'hidden',
                      }}
                    />
                  </li>
                )}
                options={[...labels].sort((a, b) => {
                  
                  let ai = value.indexOf(a);
                  ai = ai === -1 ? value.length + labels.indexOf(a) : ai;
                  let bi = value.indexOf(b);
                  bi = bi === -1 ? value.length + labels.indexOf(b) : bi;
                  return ai - bi;
                })}
                getOptionLabel={(option) => option.name}
                renderInput={(params) => (
                  <StyledInput
                    ref={params.InputProps.ref}
                    inputProps={params.inputProps}
                    autoFocus
                    placeholder="Find country"
                  />
                )}
              />
            </div>
            
          </ClickAwayListener>
          <div>
              <Button onClick={()=>handleClick(value.map((label) => label.name).join(', '))}>Submit</Button>
            </div>
        </StyledPopper>
        
      </React.Fragment>
    );
  }
  
interface LabelType {
  name: string;
  icon: string;
  
}
