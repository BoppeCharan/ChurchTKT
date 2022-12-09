import ApiCalendar from 'react-google-calendar-api';

const config = {
  "clientId": "891517955564-shs56cr19j8b226kqn3i4fcbqf8pgvrv.apps.googleusercontent.com",
  "apiKey": "AIzaSyAzbyU4PjMvp1whoFS_Tw83y1-LbScJUZ8",
  "scope": "https://www.googleapis.com/auth/calendar",
  "discoveryDocs": [
    "https://www.googleapis.com/discovery/v2/apis/calendar/v3/rest"
  ]
}

const apiCalendar = new ApiCalendar(config);


async function createEventReminder(eventFromNow){
    try{
        const event=await apiCalendar.createEvent(eventFromNow);
        console.log(event)
        return true;
    }catch(e){
        console.log(e,12);
        return false;
    }
}


export {createEventReminder};