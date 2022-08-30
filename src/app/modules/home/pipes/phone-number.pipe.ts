import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumber'
})
export class PhoneNumberPipe implements PipeTransform {

  transform(phoneNumber: any | string, ...args: unknown[]): string {
    const regex = /[0-9]{2}/g;
    const arrayPhoneNumber = [...phoneNumber.matchAll(regex)];
    const newPhoneNumber = arrayPhoneNumber.join('-');
    
    return newPhoneNumber;
  }

}
