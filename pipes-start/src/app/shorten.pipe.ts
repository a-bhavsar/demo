import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name : 'shorten'
})
export class ShortenPipe implements PipeTransform{
    transform(value: any, limit:number) {
        let an = "";
        let splittedValue = value.split(" ")
        if(splittedValue.length > limit){
            splittedValue.map((value)=>{an+=value[0]})
            return an;
        }
        return value;
        
        // .split(" ").reduce((result, item)=>{
        //     return result+item[0];
        // }).join("");
    }
}