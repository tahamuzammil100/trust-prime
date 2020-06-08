import {Component, ElementRef, HostBinding, HostListener, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ChatService} from '../../chat.service';
import {Contact} from './../../contact.model';

@Component({
  selector: 'contact-hover-card',
  templateUrl: './contact-hover-card.component.html',
  styleUrls: ['./contact-hover-card.component.scss']
})
export class ContactHoverCardComponent implements OnInit, OnDestroy {
  @HostBinding('class') classlist = 'card user-info-card';
  isVisible = false;
  position: any;
  contact: Contact;
  private el: HTMLElement;
  onContactHovered: Subscription;

  constructor(el: ElementRef, private chatService: ChatService) {
    this.el = el.nativeElement;
  }

  ngOnInit() {
    this.onContactHovered = this.chatService.onContactHovered
      .subscribe(data => {

        this.contact = data.contact;
        this.isVisible = data.show;
        this.position = data.position;
        this.setPosition();
      });
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.showContactHoveredCard();
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.hideContactHoveredCard();
  }

  /**
   * Show contact hover card
   */
  showContactHoveredCard() {
    this.isVisible = true;
  }

  /**
   * Hide contact hover card
   */
  hideContactHoveredCard() {
    this.isVisible = false;
  }

  ngOnDestroy() {
    this.onContactHovered.unsubscribe();
  }

  /**
   * Set hover card position
   */
  setPosition() {
    if (this.position && this.isVisible) {
      const windowHeight = window.innerHeight;

      if (!this.el.style.top) {
        this.el.style.top = (windowHeight / 2) + 'px';
      }
      this.el.style.left = (this.position.left + this.position.width) + 'px';

      setTimeout(() => {
        const cardHeight = this.el.offsetHeight;
        const cardTotalHeight = cardHeight + this.position.top + 20;
        if (cardTotalHeight > windowHeight) {
          this.el.style.top = (windowHeight - (cardHeight + 20)) + 'px';
        } else if (cardHeight > 0) {
          this.el.style.top = this.position.top + 'px';
        }
      }, 100);
    }
  }

}
