import { Pipe, PipeTransform } from "@angular/core";

/*
 * Reduces the number of words in a string below a character threshold
 */
@Pipe({ name: "limitText" })
export class LimitTextPipe implements PipeTransform {
    transform(value: string, maxChar = 70): string {
        return value.split(" ").reduce((acc, curr) => {
            return acc.length >= maxChar ? acc : acc + " " + curr;
        }, "");
    }
}

