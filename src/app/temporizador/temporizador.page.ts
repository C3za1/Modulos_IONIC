import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { interval, Subject } from 'rxjs';

export interface Entry{
  created: Date;
  id: string;
}
export interface TimeSpan{
  hours: number;
  minutes: number;
  seconds: number;
}

@Component({
  selector: 'app-temporizador',
  templateUrl: './temporizador.page.html',
  styleUrls: ['./temporizador.page.scss'],
})
export class TemporizadorPage implements OnInit {

  public interval;
  private destroyed$ = new Subject();
  newId: string;
  entries: Entry[]=[];

  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {

    this.newId = 'first';
    this.addEntry();

    interval(1000).subscribe(()=>{
      if(!this.changeDetector['destroyed']){
        this.changeDetector.detectChanges();
      }
    });
    this.changeDetector.detectChanges();
  }

  getElaspsedTime(entry: Entry): TimeSpan{
    let totalSeconds = Math.floor((new Date().getTime() - entry.created.getTime())/ 1000);
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    if(totalSeconds>=3600){
      hours = Math.floor(totalSeconds / 3600);
      totalSeconds -= 3600 * hours;
    }
    if(totalSeconds>=60){
      minutes = Math.floor(totalSeconds / 60);
      totalSeconds -= 60 * minutes;
    }

    seconds = totalSeconds;

    return{
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  }

  addEntry(){
    this.entries.push({
      created : new  Date(),
      id: this.newId
    });
    this.newId ='';
  }

  ngOnDestroy(){
    this.destroyed$.next();
    this.destroyed$.complete();
  }

}
