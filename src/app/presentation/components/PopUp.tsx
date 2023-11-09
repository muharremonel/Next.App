import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  noBackground?: boolean
}

const CustomPaper = styled(Paper)(({ theme }) => ({
  width: '90%',
  maxWidth: '1280px',
  height: '90%',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
}));

const Popup: React.FC<Props> = ({ isOpen, onClose, children, noBackground }) => {
  return (
    <Backdrop className='z-[150] ' open={isOpen} onClick={onClose}>
      {noBackground ?
        <div onClick={(e: any) => e.stopPropagation()} className='w-full h-full '>
          {children}
        </div> :
        <CustomPaper elevation={3} className={"overflow-auto"}>
          <div onClick={(e: any) => e.stopPropagation()} className='w-full h-full'>
            {children}
          </div>
        </CustomPaper>}
    </Backdrop>
  );
};

export default Popup;
