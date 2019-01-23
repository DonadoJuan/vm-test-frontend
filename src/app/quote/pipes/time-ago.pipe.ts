import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {

  transform(date: string, args?: any): any {

    const timeDiff = Math.abs(new Date(date).getTime() - new Date().getTime());
    
    const timeDiffInSecond = Math.ceil(timeDiff / 1000);
    if(timeDiffInSecond < 60)
      return `${timeDiffInSecond} sec`;

    const timeDiffInMinutes = Math.ceil(timeDiff / 60000);
    if(timeDiffInMinutes < 60)
      return `${timeDiffInMinutes} min`;

    const timeDiffInHours = Math.ceil(timeDiff / 3600000);
    return `${timeDiffInHours} h`;

  }

}
