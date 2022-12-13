import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import './Search.css';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useStateValue } from '../StateProvider';
import  { actionTypes } from '../reducer';

const Search = ({ hideButtons = false}) => {
    const [{}, dispatch] = useStateValue();

    const [input, setInput] = useState("");
    const navigate = useNavigate();
    
    const search = (e) => {
        e.preventDefault();

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input,
        });

        navigate("/search");
    }

  return (
    <form className='search'>
        <div className='search-input'>
            <SearchIcon className='search-inputIcon' />
            <input value={input} onChange={(e) => setInput(e.target.value)} />
            <MicIcon />
        </div>

        {!hideButtons ? (
            <div className='search-buttons'>
                <Button onClick={search} type='submit' variant='outlined'>Google Search</Button>
                <Button variant='outlined'>I'm Feeling Lucky</Button>
            </div>
        ) : (
            <div className='search-buttons'>
                <Button
                className='search-buttonsHidden'
                onClick={search} 
                type='submit' 
                variant='outlined' 
                >
                    Google Search
                </Button>
                <Button className='search-buttonsHidden' variant='outlined'>I'm Feeling Lucky</Button>
            </div>
        )}
    </form>
  );
}

export default Search