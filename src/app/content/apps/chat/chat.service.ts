import {Injectable} from '@angular/core';
import {Location} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Contact} from './contact.model';

@Injectable({
    providedIn: 'root'
})
export class ChatService implements Resolve<any> {
    private contactsUrl = 'api/chat-contacts';  // URL to web api
    private chatConversationUrl = 'api/chat-conversation';  // URL to web api
    private chatOperatorUrl = 'api/chat-operator';  // URL to web api

    contacts: Contact[];
    currentContact: Contact;
    recentChats: Contact[];
    chatConversation: any;
    chatOperator: any;
    routeParams: any;
    toggleChatSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
    onContactsChanged: BehaviorSubject<any> = new BehaviorSubject([]);
    onCurrentContactChanged: BehaviorSubject<any> = new BehaviorSubject('');
    onRecentChatsChanged: BehaviorSubject<any> = new BehaviorSubject([]);
    onChatConversationChanged: BehaviorSubject<any> = new BehaviorSubject({});
    onChatOperatorChanged: BehaviorSubject<any> = new BehaviorSubject('');
    onSearchQueryChanged: BehaviorSubject<any> = new BehaviorSubject('');
    onContactHovered: BehaviorSubject<any> = new BehaviorSubject({});

    constructor(private http: HttpClient, private location: Location) {
    }

    /**
     * Resolve
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        this.routeParams = route.params;

        return new Promise((resolve, reject) => {
            Promise.all([
                this.getContacts(),
                this.getRecentChats(),
                this.getChatOperator()
            ]).then(() => {
                    /* if (this.routeParams.mailId) {
                      this.setCurrentMail(this.routeParams.mailId);
                    } else {
                      this.setCurrentMail(null);
                    } */

                    resolve();
                },
                reject
            );
        });
    }

    /**
     * Get all contacts
     * @returns {Promise<Contact[]>}
     */
    getContacts(): Promise<Contact[]> {
        return new Promise((resolve, reject) => {
            this.http.get(this.contactsUrl)
                .subscribe((response: any) => {
                    this.contacts = response;
                    this.onContactsChanged.next(this.contacts);
                    resolve(this.contacts);
                }, reject);
        });
    }

    /**
     * Get recent chats
     * @returns {Promise<Contact[]>}
     */
    getRecentChats(): Promise<Contact[]> {
        return new Promise((resolve, reject) => {
            this.http.get(this.contactsUrl + '?recent=true')
                .subscribe((response: any) => {
                    this.recentChats = response;
                    this.onRecentChatsChanged.next(this.recentChats);
                    resolve(this.recentChats);
                }, reject);
        });
    }

    /**
     * Get Chat Operator
     * @return {Promise<any[]>}
     */
    getChatOperator(): Promise<any[]> {
        return new Promise((resolve, reject) => {
            this.http.get(this.chatOperatorUrl)
                .subscribe((operator: any) => {
                    this.chatOperator = operator;
                    this.onChatOperatorChanged.next(this.chatOperator);
                    resolve(this.chatOperator);
                }, reject);
        });
    }

    /**
     * Get chat conversation by conversation id
     * @param cId
     * @return {Promise<any[]>}
     */
    getChatConversation(cId): Promise<any[]> {
        return new Promise((resolve, reject) => {
            this.http.get(this.chatConversationUrl + '/' + cId)
                .subscribe((response: any) => {
                    this.chatConversation = response;
                    this.onChatConversationChanged.next(this.chatConversation);
                    resolve(this.chatConversation);
                }, reject);
        });
    }

    /**
     * Save a conversation
     * @param {any} newMessage
     * @return {Promise<any>}
     */
    saveConversation(newMessage: any) {
        this.chatConversation.conversationData.push(newMessage);

        return new Promise((resolve, reject) => {
            this.http.post(this.chatConversationUrl + '/' + this.chatConversation.id, {...this.chatConversation})
                .subscribe(response => {
                    this.getChatConversation(this.chatConversation.id).then(res => {
                        resolve(res);

                    }, reject);
                });
        });
    }
}
