import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {NgForm} from '@angular/forms';

import {Contact} from './../contact.model';
import {ContactsService} from './../contacts.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {
  @Input() title = 'Add Contact';
  @Input() contact: Contact;
  private imageSrc: string = '';
  filename = 'Change Thumb';

  @ViewChild('contactForm', {static: false}) public contactForm: NgForm;

  constructor(public activeModal: NgbActiveModal, private contactService: ContactsService) {
  }

  ngOnInit() {
  }

  handleInputChange(e) {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    const pattern = /image-*/;
    const reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }

    this.filename = file.name
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  /**
   * Handle file reader loaded
   * @param e
   * @private
   */
  _handleReaderLoaded(e) {
    const reader = e.target;
    this.contact.thumb = reader.result;
  }

  /**
   * On form submit call this function
   */
  onFormSubmit() {
    if (this.contactForm.valid) {
      this.contactService.saveContact(this.contact).then((response) => {
        this.contactForm.resetForm();
        this.activeModal.close();
      });
    }
  }
}
