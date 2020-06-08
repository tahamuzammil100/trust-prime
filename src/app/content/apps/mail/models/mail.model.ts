export class Mail {
  id: string;
  from: {
    name: string,
    avatar: string,
    email: string
  };
  to: {
    name: string,
    email: string
  }[];
  subject: string;
  message: string;
  time: string;
  read: boolean;
  starred: boolean;
  important: boolean;
  hasAttachments: boolean;
  attachments: {
    type: string,
    fileName: string,
    preview: string,
    url: string,
    size: string
  }[];
  labels: string[];
  folder: string;
  conversation: any[];
}
