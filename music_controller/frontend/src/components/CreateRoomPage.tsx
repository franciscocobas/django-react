import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const deafultVotes = 2;

const CreateRoomPage = () => {
  const [guestCanPause, setGuestCanPause] = useState(true);
  const [votesToSkip, setVotesToSkip] = useState(deafultVotes);

  const submitForm = async () => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        votes_to_skip: votesToSkip.toString(),
        guest_can_pause: guestCanPause,
      }),
    };
    const response = await fetch('/api/create-room', requestOptions);
    const data = await response.json();

    console.log(data);
  };

  return (
    <div className='create-room-container'>
      <h1>Create a Room</h1>
      <div>
        <h2>Guest Control of Playback State</h2>
        <form>
          <div className='form-group'>
            <input
              type='radio'
              name='play-pause-radio'
              id='radio-play-pause'
              value={guestCanPause.toString()}
              onChange={(e) => {
                setGuestCanPause(true);
              }}
            />
            <label htmlFor='radio-play-pause'>Play/Pause</label>
            <input
              type='radio'
              name='play-pause-radio'
              id='radio-no-control'
              value={guestCanPause.toString()}
              onChange={(e) => {
                setGuestCanPause(false);
              }}
            />
            <label htmlFor='radio-no-control'>No Conrol</label>
          </div>
          <div className='form-group'>
            <input
              type='number'
              name='votes'
              id='votes'
              value={votesToSkip}
              required
              onChange={(e) => setVotesToSkip(parseInt(e.target.value))}
            />
            <label htmlFor='votes'>Votes Required To Skip Song</label>
          </div>
          <button type='button' onClick={submitForm}>
            Create A Room
          </button>
          <Link to='/'>Back</Link>
        </form>
      </div>
    </div>
  );
};

export default CreateRoomPage;
