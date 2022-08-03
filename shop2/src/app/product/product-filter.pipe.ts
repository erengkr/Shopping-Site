import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';
import { Product } from './product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  //  transform(value: Product[], ...args: string[]): Product[] {
  //  args=args?args.toLocaleLowerCase():null
  //    return args?value.filter((p:Product)=>p.name
  // .toLocaleLowerCase().indexOf(args)!==-1):value;

     transform(value:Product[],filterText: any):any[]{
     filterText=filterText?filterText.toLocaleLowerCase():null
     return filterText?value.filter((p:Product)=>p.name
     .toLocaleLowerCase().indexOf(filterText) !==-1):value;

  }
  }


