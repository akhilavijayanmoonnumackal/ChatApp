import { IconButton } from '@mui/material';
import './myStyles.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NightlightIcon from '@mui/icons-material/Nightlight';
import SearchIcon from '@mui/icons-material/Search';
import ConvoItem from './ConvoItem';
import { useState } from 'react';

const Sidebar = () => {
    const [ convo, setConvo ] = useState([
        {
            name: "Rohith",
            lastMessage: "Last Message 1",
            timeStamp: "today",
        },
        {
            name: "Aleena",
            lastMessage: "Last Message 2",
            timeStamp: "today",
        },
        {
            name: "Jishu",
            lastMessage: "Last Message 3",
            timeStamp: "today",
        },
    ]);

  return (
    <div className='sidebar-container'>
        <div className='sb-header'>
            <div>
                <IconButton>
                    <AccountCircleIcon />
                </IconButton>
            </div>

            <div>
                <IconButton>
                    <PersonAddIcon />
                </IconButton>
                <IconButton>
                    <GroupAddIcon />
                </IconButton>
                <IconButton>
                    <AddCircleIcon />
                </IconButton>
                <IconButton>
                    <NightlightIcon />
                </IconButton>
            </div>
        </div>
        <div className='sb-search'>
            <IconButton>
                <SearchIcon /> 
            </IconButton>
            <input placeholder='search' className='search-box' />
        </div>
        <div className='sb-convo'>
            { convo.map(( {name, lastMessage, timeStamp} ) => (
                <ConvoItem 
                key={name}
                name={name} 
                lastMessage={lastMessage} 
                timeStamp={timeStamp} />
            ))}
        </div>

    </div>
  )
}

export default Sidebar;
