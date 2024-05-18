import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Select, MenuItem, TextField, FormControl, InputLabel, Button } from '@mui/material';
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { parseISO, isAfter, isPast } from 'date-fns';

import { setSearchStart, setSearchSuccess } from '../state/Slice/searchSlice';
import {apiRequest} from '../apis/fetchApis'
const Search = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);
  const searchRef = useRef(null);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    const handleClickOutside = event => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowStartDatePicker(false);
        setShowEndDatePicker(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleStartDateChange = date => {
    setStartDate(date);
    setShowStartDatePicker(false);
  };

  const handleEndDateChange = date => {
    setEndDate(date);
    setShowEndDatePicker(false);
  };
  const handleSubmit = async(e) =>{
    e.preventDefault();
    dispatch(setSearchStart());
    if (!startDate || !endDate) {
      // Xử lý khi dữ liệu không hợp lệ
      return;
    }
  
    const checkinDateString = startDate.toISOString(); // Chuyển đổi ngày đến sang chuỗi ngày tháng hợp lệ
    const checkoutDateString = endDate.toISOString(); // Chuyển đổi ngày đi sang chuỗi ngày tháng hợp lệ
  
  
    try {
      const res = await apiRequest(`/api/v1/rooms?status=Available&maxPeople=${adults + children}`, "GET", null, null);
      dispatch(setSearchSuccess({
        checkinDate: checkinDateString,
        checkoutDate: checkoutDateString,
        capacity: adults + children,
        searchInfo: res
      }));
      navigate(`/rooms?status=Available&maxPeople=${adults + children}`);
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div ref={searchRef} id='s' className="w-[80%] mx-auto p-4 bg-gray-100 rounded-md relative">
      <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
        <div className="relative flex-1">
          <TextField
            id="startDate"
            label="Ngày đến"
            value={startDate ? startDate.toLocaleDateString() : ''}
            onClick={() => setShowStartDatePicker(!showStartDatePicker)}
            variant="outlined"
            fullWidth
            InputProps={{
              readOnly: true,
            }}
          />
          {showStartDatePicker && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 z-10 bg-white shadow-md rounded-md"
            >
              <DatePicker
                selected={startDate}
                onChange={handleStartDateChange}
                onClickOutside={() => setShowStartDatePicker(false)}
                inline
              />
            </motion.div>
          )}
        </div>
        <div className="relative flex-1">
          <TextField
            id="endDate"
            label="Ngày đi"
            value={endDate ? endDate.toLocaleDateString() : ''}
            onClick={() => setShowEndDatePicker(!showEndDatePicker)}
            variant="outlined"
            fullWidth
            InputProps={{
              readOnly: true,
            }}
          />
          {showEndDatePicker && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 z-10 bg-white shadow-md rounded-md"
            >
              <DatePicker
                selected={endDate}
                onChange={handleEndDateChange}
                onClickOutside={() => setShowEndDatePicker(false)}
                inline
              />
            </motion.div>
          )}
        </div>
        <div className="relative flex-1">
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="adults-label">Số người lớn</InputLabel>
            <Select
              labelId="adults-label"
              id="adults"
              value={adults}
              onChange={e => setAdults(parseInt(e.target.value))}
              label="Số người lớn"
            >
              {[...Array(20).keys()].map(num => (
                <MenuItem key={num} value={num + 1}>
                  {num + 1}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="relative flex-1">
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="children-label">Số trẻ em</InputLabel>
            <Select
              labelId="children-label"
              id="children"
              value={children}
              onChange={e => setChildren(parseInt(e.target.value))}
              label="Số trẻ em"
            >
              {[...Array(20).keys()].map(num => (
                <MenuItem key={num} value={num}>
                  {num}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <Button onClick={handleSubmit} variant="contained" color="primary" size="large" sx={{backgroundColor:"#ac6433", ":hover":{backgroundColor:"#fff", color:"#ac6433"}}}>
          Tìm kiếm
        </Button>
      </div>
    </div>
  );
};

export default Search;
