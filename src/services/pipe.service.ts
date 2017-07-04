import { Pipe, PipeTransform } from "@angular/core";
 
@Pipe({
    name: "filter",
    pure: false
})
export class ArrayFilterPipe implements PipeTransform {
 
    transform(items: any[], conditions: {[field: string]: any}): any[] {
        if (!items || !conditions) {
            return items;
        }
        
        return items.filter(item =>  {
            for (let field in conditions) {
                if (item[field] !== conditions[field]) {
                    return false;
                }
            }
            return true;
        });

    }
}