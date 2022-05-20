import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Filter'
})
export class FiltroPipe implements PipeTransform {

  transform(mObjects: { descripcion: string; nombre: string, img: string }[], input: string) {
    if (!input) return mObjects;
    return mObjects.filter(val => this.filterBy(val, input));
  }

  private filterBy(
    mObject: { descripcion: string; nombre: string, img:string },
    search: string
  ) {
    const reduced = Object.keys(mObject)
      .reduce((prev, current) => this.reduceKeys(prev, current, mObject), "")
      .toLocaleLowerCase();
    return reduced.indexOf(search.toLocaleLowerCase()) > -1;
  }

  private reduceKeys(
    prev: string,
    current: string,
    mObject: any = { descripcion: "", nombre: "", img: "" }
  ): string {
    if (this.isProp(current)) {
      prev = `${prev}\$${mObject[current]}`;
    }
    return prev;
  }

  //Aquí validas que propiedades quieres que se filtren.
  private isProp(key: string): boolean {
    return key.includes("descripcion") || key.includes("nombre") || key.includes("img");
  }
}
