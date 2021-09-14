import React from 'react';
import { Link } from 'react-router-dom';

const deafultVotes = 2;

const CreateRoomPage = () => {
  return (
    <div>
      <div>
        <h4>Create a Room</h4>
      </div>
      <div>
        <h2>Guest Control of Playback State</h2>
        <form>
          <label htmlFor='radio-play-pause'>Play/Pause</label>
          <input
            type='radio'
            name='play-pause-radio'
            id='radio-play-pause'
            value='true'
          />
          <label htmlFor='radio-no-control'>No Conrol</label>
          <input
            type='radio'
            name='play-pause-radio'
            id='radio-no-control'
            value='false'
          />
          <label htmlFor='votes'>Votes Required To Skip Song</label>
          <input
            type='number'
            name='votes'
            id='votes'
            value={deafultVotes}
            required
          />
          <button type='button'>Create A Room</button>
          <Link to='/'>Back</Link>
        </form>
      </div>
    </div>
  );
};

export default CreateRoomPage;
