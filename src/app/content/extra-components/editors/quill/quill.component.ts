import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {debounceTime, distinctUntilChanged} from 'rxjs/internal/operators';
import {QuillEditorComponent} from 'ngx-quill';
import Quill from 'quill';

// add mention module
import Counter from './counter';

// override p with div tag
const Parchment = Quill.import('parchment');
const Block = Parchment.query('block');

Block.tagName = 'P';
// or class NewBlock extends Block {}; NewBlock.tagName = 'DIV';
Quill.register(Block /* or NewBlock */, true);
Quill.register('modules/counter', Counter);

// Add fonts to whitelist
const Font = Quill.import('formats/font');
// We do not add Aref Ruqaa since it is the default
Font.whitelist = ['mirza', 'aref', 'sans-serif', 'monospace', 'serif'];
Quill.register(Font, true);

@Component({
  selector: 'app-quill',
  templateUrl: './quill.component.html',
  styleUrls: ['./quill.component.scss']
})
export class QuillComponent implements OnInit {
  form: FormGroup;
  title = 'Its Working! :)';
  hide = false;
  isReadOnly = false;
  placeholder = 'Placeholder';
  textFormat = 'Hello World!';

  objectFormat = [
    {insert: 'Hello '},
    {insert: 'World!', attributes: {bold: true}},
    {insert: '\n'}
  ];

  constructor(fb: FormBuilder) {
    const values = [
      {id: 1, value: 'Fredrik Sundqvist'},
      {id: 2, value: 'Patrik Sjölin'}
    ];

    this.form = fb.group({
      editor: ['test']
    });
  }

  @ViewChild('editor', {static: true}) editor: QuillEditorComponent;

  ngOnInit() {
    this.form.controls['editor'].valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged()
    ).subscribe(data => {
      console.log('native fromControl value changes with debounce', data);
    });

    this.editor
      .onContentChanged
      .pipe(
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe(data => {
        console.log('view child + directly subscription', data);
      });
  }

  addBindingCreated(quill) {
    quill.keyboard.addBinding({
      key: 'B'
    }, (range, context) => {
      console.log('KEYBINDING B', range, context);
    });
  }

  setControl() {
    this.form.setControl('editor', new FormControl('test - new Control'));
  }

  setFocus($event) {
    $event.focus();
  }

  patchValue() {
    this.form.controls['editor'].patchValue(`${this.form.controls['editor'].value} patched!`);
  }

  toggleReadOnly() {
    this.isReadOnly = !this.isReadOnly;
  }

  logChange($event: any) {
    console.log($event);
  }

  logSelection($event: any) {
    console.log($event);
  }

}
