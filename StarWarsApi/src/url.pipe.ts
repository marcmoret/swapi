import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'url' })
export class UrlPipe implements PipeTransform {
  transform(url: string, pilots: Array<any>): string {
    const found = pilots.find((x) => {
      return x.url === url;
    });
    return found.name;
  }
}
