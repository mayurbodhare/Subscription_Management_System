import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat',
  standalone: true
})
export class DateFormatPipe implements PipeTransform {

  transform(value: Date): string {
    if (!value) return ''; // Handle null or undefined input
    
    // Get day, month, and year
    let day = String(value.getDate()).padStart(2, '0');
    let month = String(value.getMonth() + 1).padStart(2, '0'); // Month is zero-based
    let year = value.getFullYear();
    
    // Concatenate day, month, and year with hyphens
    return `${day}-${month}-${year}`;
  }

}
