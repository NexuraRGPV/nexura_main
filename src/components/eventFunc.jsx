import { useEffect, useState } from 'react'
import React from 'react'
import css from './explore.module.css';
import "./animation.css";
import axios from 'axios';


const EventFunc = () => {

  const [events, setEvents] = useState([])

    // backend useState
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      setEvents(dataset)
      
    }, [])

    // backend useEffect
    useEffect(() => {
      axios.get("http://localhost:5000/api/users")
        .then(response => setUsers(response.data))
        .catch(error => console.error("❌ Error fetching data:", error));
    }, []);


  const dataset = [{
    id: '1',
    date: 'Feb12',
    day: 'friday',
    stripbg: 'green',
    eventHeading: 'Creating Minds Workshop',
    evetDetail: 'A hands-on workshop designed for creative thinker and innovators.',
    from: '11:00',
    to: '3:00',
    mode: 'online'
  },
  {
    id: '2',
    date: 'Feb12',
    day: 'friday',
    stripbg: 'red',
    eventHeading: 'Creating Minds Workshop',
    evetDetail: 'A hands-on workshop designed for creative thinker and innovators.',
    from: '11:00',
    to: '3:00',
    mode: 'online'
  },
  {
    id: '1',
    date: 'Feb12',
    day: 'friday',
    stripbg: 'green',
    eventHeading: 'Creating Minds Workshop',
    evetDetail: 'A hands-on workshop designed for creative thinker and innovators.',
    from: '11:00',
    to: '3:00',
    mode: 'online'
  }]

  const Events = (props) => {

    return (
      <>
        
        <div className={` ${css.eventDiv}`}>
          {/* date and day */}
          <div className={`${css.flexColCenter} ${css.DateDaybox} `}>

            <div className={css.eventHeading}>{props.date}</div>
            < div className={css.textSmallDim}>{props.day}</div>
          </div>
          {/* about the events  */}
          <div className={css.eventbox} >
            <div className={css.ColorStrip} style={{ background: props.stripbg }}></div>
            <div >
              <div >

                <div className={css.eventHeading}>{props.eventHeading}</div>
                <p className={css.evetDetail}>{props.evetDetail}
                </p>
                <div className={css.textSmallDim}>
                  <div>
                    {props.from}AM - {props.to}PM
                  </div>
                  <div>
                    <div>
                      {props.mode}
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
        

      </>
    )


  }
  return (
    <>
      <div className={css.flexColCenter}>

        <div >

          <div className={css.heading}>
            <h2>
            Explore What's Next at Nexura
            </h2>
          </div>

        </div>
        <div className={css.headingText}>
          <div>
            Stay updated with our latest events and connect with a community of innovator, creators, and leaders.
          </div>

        </div>

        {/* contain event schedule */}
       

          {events.map((event , index) => {
            return <Events  key={index} date={event.date} day={event.day} stripbg={event.stripbg} eventHeading={event.eventHeading} evetDetail={event.evetDetail} from={event.from} to={event.to} mode={event.mode} />

          })}

          {/* <Events date={a.date} day={a.day} stripbg={a.stripbg} eventHeading={a.eventHeading} evetDetail={a.evetDetail} from={a.from} to={a.to} mode={a.mode} /> */}
        

      </div>


    </>
  )


}

export default EventFunc
