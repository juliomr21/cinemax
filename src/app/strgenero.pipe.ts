import { Pipe, PipeTransform } from '@angular/core';
import { find } from 'rxjs';

@Pipe({
  name: 'strgenero'
})
export class StrgeneroPipe implements PipeTransform {
 sol:string ='';
  transform(value: any[], args?: any[]): unknown {
   
    if(!args)
    {
      value.forEach(element => {
        this.sol = this.sol + element.name + '•'
      })
    }
    else
    {
      value.forEach(element => {
        let elem = args.find(item => item.id == element);
        this.sol = this.sol + elem.name + ' • '
        });
    }
    
    this.sol = this.sol.slice(0,this.sol.length-1);
    return this.sol;
  }

}
