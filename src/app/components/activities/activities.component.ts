import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {
  alrtMsg = 'Activities tab is under Construction, Right now we load dummy data..';
  options: { plugins: import("@fullcalendar/core/plugin-system").PluginDef[]; defaultDate: string; header: { left: string; center: string; right: string; }; };
  events: ({ id: number; title: string; start: string; rendering: string; end?: undefined; } | { id: number; title: string; start: string; end: string; rendering?: undefined; } | { id: number; title: string; start: string; rendering?: undefined; end?: undefined; })[];

  constructor() {
    this.startCalendar()
  }

  ngOnInit() {

    this.startCalendar();
  }



  startCalendar() {

    this.events = [
      {
        "id": 1,
        "title": "Average exercise : 8 Hours",
        "start": "2017-02-01",

      },
      {
        "id": 1,
        "title": "steps : 1224",
        "start": "2017-02-02",

      },
      {
        "id": 1,
        "title": "steps : 5424",
        "start": "2017-02-05",

      },
      {
        "id": 1,
        "title": "Average exercise : 8 Hours",
        "start": "2017-02-09",

      },
      {
        "id": 1,
        "title": "Average exercise : 8 Hours",
        "start": "2017-02-14",

      },
      {
        "id": 1,
        "title": "Average sleep : 6 Hours",
        "start": "2017-02-25",

      },
      {
        "id": 1,
        "title": "Average exercise : 8 Hours",
        "start": "2017-02-18",

      },
      {
        "id": 1,
        "title": "Average sleep : 13 Hours",
        "start": "2017-02-19",

      },

      {
        "id": 1,
        "title": "Average exercise : 8 Hours",
        "start": "2017-02-20",

      },
      {
        "id": 1,
        "title": "Average exercise : 8 Hours",
        "start": "2017-02-27",

      },
      {
        "id": 2,
        "title": "Sleeping hours : 16 Hours",
        "start": "2017-02-07",
        "end": "2017-02-08",

      },
      {
        "id": 3,
        "title": "Average exercise : 5 Hours",
        "start": "2017-02-03",

      },
      {
        "id": 4,
        "title": "Sleeping hours : 11 Hours",
        "start": "2017-02-07",
        "end": "2017-02-09",

      },
      {
        "id": 5,
        "title": "exercise : 8 Hours",
        "start": "2017-02-10T16:00:00"
      },
      {
        "id": 6,
        "title": "Walking steps : 3425",
        "start": "2017-02-09T16:00:00"
      }];

      
    this.options = {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      defaultDate: '2017-02-01',
      header: {
        left: 'prev,next',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      }
    }
  }

}
