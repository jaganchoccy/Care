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
  options: { plugins: import("@fullcalendar/core/plugin-system").PluginDef[]; defaultDate: string; header: { left: string; center: string; right: string; }; };
  events: ({ id: number; title: string; start: string; end?: undefined; } | { id: number; title: string; start: string; end: string; })[];

  constructor() { }

  ngOnInit() {
    this.events = [
      {
          "id": 1,
      "title": "All Day Event",
      "start": "2017-02-01"
      },
    {
          "id": 2,
      "title": "Long Event",
      "start": "2017-02-07",
      "end": "2017-02-10"
      },
    {
      "id": 3,
      "title": "Repeating Event",
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
