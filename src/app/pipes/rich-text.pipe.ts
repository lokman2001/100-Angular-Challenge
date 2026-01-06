  import { Pipe, PipeTransform } from '@angular/core';

  @Pipe({
    name: 'richText'
  })
  export class RichTextPipe implements PipeTransform {

    transform(value : string): string {
      const html = this.purseNonEmptyHtml(value);
      const isValidHtml = ""
      return isValidHtml ? html : '';  
    }

    private purseNonEmptyHtml(html:string){
      const htmlTags : RegExp = /<[^]*?>/g;
      const hasContent = html.replace(htmlTags,'').trim.length > 0

      return hasContent ? html : '';
    }

  }
