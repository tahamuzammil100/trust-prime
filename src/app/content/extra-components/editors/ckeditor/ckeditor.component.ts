import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ckeditor',
  templateUrl: './ckeditor.component.html',
  styles: ['ck-editor{display: block}']
})
export class CkeditorComponent implements OnInit {
  editorValue: string = 'Start writing your content here...';
  editor2Value: string = 'Start writing your content here...';
  editor3Value: string = 'Start writing your content here...';

  fullPage: boolean = true;

  public config: any = {
    uiColor: 'transparent',
    // Define the toolbar groups as it is a more accessible solution.
    toolbarGroups: [
      {'name': 'basicstyles', 'groups': ['basicstyles']},
      {'name': 'links', 'groups': ['links']},
      {'name': 'paragraph', 'groups': ['list', 'blocks']},
      {'name': 'document', 'groups': ['mode']},
      {'name': 'insert', 'groups': ['insert']},
      {'name': 'styles', 'groups': ['styles']},
      {'name': 'about', 'groups': ['about']}
    ],
    // Remove the redundant buttons from toolbar groups defined above.
    removeButtons: 'Underline,Strike,Subscript,Superscript,Anchor,Styles,Specialchar'
  };

  constructor() {
  }

  ngOnInit() {
  }

}
